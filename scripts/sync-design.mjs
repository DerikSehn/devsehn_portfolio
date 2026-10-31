#!/usr/bin/env node
// Sincroniza as páginas do projeto de design (.dc.html) com o app Next.js.
//
// Uso:
//   npm run design:sync -- <pasta-do-design>
//   npm run design:sync                       (usa ./design se existir)
//
// <pasta-do-design> é a pasta exportada do projeto (a que contém os .dc.html,
// i18n.js, motion.js e assets/).
//
// As páginas e rotas vêm de design.routes.json (uma linha por página).
//
// O que é gerado (sobrescreve):
//   app/<rota>/view.tsx                       markup 1:1 do design em JSX
//   lib/logic/<pagina>.ts                     classe de lógica do design (DCLogic)
//   public/i18n.js, public/motion.js          scripts globais do design
//   public/assets/**                          imagens e vídeos
// O que é criado só se ainda não existir:
//   app/<rota>/page.tsx                       metadados da rota (title do design.routes.json)
// E no fim:
//   generated/analytics-pages.ts              catálogo de páginas do Clarity, regenerado
//
// Não toca em layout.tsx, page.tsx existentes, Clarity nem config da Vercel.
// Sem dependências: o .dc.html é HTML autoral bem-formado, então um tokenizer simples basta.

import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = fileURLToPath(import.meta.url);

const ROOT = resolve(dirname(HERE), '..');
const ROUTES_FILE = join(ROOT, 'design.routes.json');

// slug da rota → nomes derivados: "/" → home, "/cases/eli-control" → eli-control / EliControlView
function pageFromRoute(file, cfg) {
  const route = cfg.route;
  if (!/^\/([a-z0-9-]+(\/[a-z0-9-]+)*)?$/.test(route)) throw new Error(`rota inválida para "${file}": ${route} (use minúsculas, números e hífen)`);
  const dir = route === '/' ? 'app' : 'app' + route;
  const slug = route === '/' ? 'home' : route.split('/').pop();
  const name = slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join('') + 'View';
  return { file, route, title: cfg.title || null, dir, view: dir + '/view.tsx', logic: slug, name };
}
function loadConfig() {
  if (!existsSync(ROUTES_FILE)) throw new Error('design.routes.json não encontrado na raiz do repositório');
  const cfg = JSON.parse(readFileSync(ROUTES_FILE, 'utf8'));
  const pages = Object.entries(cfg.pages || {}).map(([file, c]) => pageFromRoute(file, c));
  const seen = new Map();
  for (const p of pages) {
    for (const [k, label] of [[p.route, 'rota'], ['logic:' + p.logic, 'nome de lógica']]) {
      if (seen.has(k)) throw new Error(`${label} repetida: "${p.file}" e "${seen.get(k)}"`);
      seen.set(k, p.file);
    }
  }
  return { pages, ignore: new Set(cfg.ignore || []) };
}
export const { pages: PAGES, ignore: IGNORE } = loadConfig();
const ROUTE_BY_FILE = Object.fromEntries(PAGES.map((p) => [p.file, p.route]));

// ---------------------------------------------------------------- tokenizer
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
const RAW = new Set(['script', 'style']);
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const decode = (s) =>
  s.replace(/&(#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z]+);/g, (m, e) => {
    if (e[0] === '#') return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
    return ENT[e] ?? m;
  });

export function parse(html) {
  const root = { type: 'root', children: [] };
  const stack = [root];
  let i = 0;
  const top = () => stack[stack.length - 1];
  while (i < html.length) {
    if (html.startsWith('<!--', i)) { const e = html.indexOf('-->', i); i = e < 0 ? html.length : e + 3; continue; }
    if (html.startsWith('<!', i)) { i = html.indexOf('>', i) + 1; continue; }
    if (html[i] === '<' && html[i + 1] === '/') {
      const e = html.indexOf('>', i);
      const name = html.slice(i + 2, e).trim();
      for (let k = stack.length - 1; k > 0; k--) if (stack[k].name === name) { stack.length = k; break; }
      i = e + 1; continue;
    }
    if (html[i] === '<' && /[A-Za-z]/.test(html[i + 1] || '')) {
      let j = i + 1;
      while (j < html.length && /[^\s/>]/.test(html[j])) j++;
      const name = html.slice(i + 1, j);
      const attrs = [];
      let selfClose = false;
      for (;;) {
        while (/\s/.test(html[j])) j++;
        if (html[j] === '>') { j++; break; }
        if (html[j] === '/' && html[j + 1] === '>') { selfClose = true; j += 2; break; }
        let k = j;
        while (k < html.length && /[^\s=>/]/.test(html[k])) k++;
        const an = html.slice(j, k);
        j = k;
        while (/\s/.test(html[j])) j++;
        let av = null;
        if (html[j] === '=') {
          j++;
          while (/\s/.test(html[j])) j++;
          const q = html[j];
          if (q === '"' || q === "'") { const e = html.indexOf(q, j + 1); av = html.slice(j + 1, e); j = e + 1; }
          else { let e = j; while (e < html.length && /[^\s>]/.test(html[e])) e++; av = html.slice(j, e); j = e; }
          av = decode(av);
        }
        if (an) attrs.push([an, av]);
        else j++;
      }
      const el = { type: 'el', name, attrs, children: [] };
      top().children.push(el);
      i = j;
      if (RAW.has(name.toLowerCase())) {
        const e = html.indexOf('</' + name, i);
        el.children.push({ type: 'raw', text: html.slice(i, e) });
        i = html.indexOf('>', e) + 1;
      } else if (!selfClose && !VOID.has(name.toLowerCase())) stack.push(el);
      continue;
    }
    let e = html.indexOf('<', i + 1);
    if (e < 0) e = html.length;
    top().children.push({ type: 'text', text: decode(html.slice(i, e)) });
    i = e;
  }
  return root;
}
const find = (n, pred) => { if (pred(n)) return n; for (const c of n.children || []) { const r = find(c, pred); if (r) return r; } return null; };
const findAll = (n, pred, out = []) => { if (pred(n)) out.push(n); for (const c of n.children || []) findAll(c, pred, out); return out; };
const attr = (el, k) => (el.attrs.find(([a]) => a === k) || [])[1];

// ---------------------------------------------------------------- holes
const HOLE = /\{\{\s*([^}]*?)\s*\}\}/g;
function expr(path, scope) {
  if (/^(true|false|null|-?\d+(\.\d+)?)$/.test(path)) return path;
  if (/^(['"]).*\1$/.test(path)) return path;
  const [head, ...rest] = path.split('.');
  const base = head === '$index' ? '$index' : scope.includes(head) ? 'L_' + head : 'v?.' + head;
  return base + rest.map((r) => '?.' + r).join('');
}
const wholeHole = (s) => { const m = /^\s*\{\{\s*([^}]*?)\s*\}\}\s*$/.exec(s); return m ? m[1] : null; };
function interp(s, scope) {
  if (!HOLE.test(s)) return JSON.stringify(s);
  HOLE.lastIndex = 0;
  return '`' + s.replace(/[`\\]|\$\{/g, (c) => '\\' + c).replace(HOLE, (_, p) => '${' + expr(p, scope) + ' ?? ""}') + '`';
}

// ---------------------------------------------------------------- attributes
const RENAME = {
  class: 'className', for: 'htmlFor', autoplay: 'autoPlay', playsinline: 'playsInline', tabindex: 'tabIndex', crossorigin: 'crossOrigin',
  srcset: 'srcSet', readonly: 'readOnly', maxlength: 'maxLength', colspan: 'colSpan', rowspan: 'rowSpan', frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen', contenteditable: 'contentEditable', spellcheck: 'spellCheck', autocomplete: 'autoComplete',
  autofocus: 'autoFocus', inputmode: 'inputMode', datetime: 'dateTime', 'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', 'xmlns:xlink': 'xmlnsXlink',
};
const BOOL = new Set(['muted', 'loop', 'autoplay', 'playsinline', 'controls', 'disabled', 'checked', 'hidden', 'open', 'defer', 'async', 'selected', 'multiple', 'required']);
const NUMERIC = new Set(['rows', 'cols', 'size', 'span', 'colSpan', 'rowSpan', 'tabIndex', 'maxLength', 'minLength', 'start']);
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
function attrName(a) {
  if (RENAME[a]) return RENAME[a];
  if (a.startsWith('data-') || a.startsWith('aria-')) return a;
  return a.includes('-') ? camel(a) : a;
}
function splitDecls(s) {
  const out = []; let depth = 0, q = null, cur = '';
  for (const ch of s) {
    if (q) { if (ch === q) q = null; cur += ch; continue; }
    if (ch === '"' || ch === "'") { q = ch; cur += ch; continue; }
    if (ch === '(') depth++; else if (ch === ')') depth--;
    if (ch === ';' && depth === 0) { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  out.push(cur);
  return out.map((d) => d.trim()).filter(Boolean);
}
function styleKey(p) {
  if (p.startsWith('--')) return JSON.stringify(p);
  if (p.startsWith('-ms-')) return camel(p.slice(1));
  if (p.startsWith('-')) { const c = camel(p.slice(1)); return c[0].toUpperCase() + c.slice(1); }
  return camel(p);
}
function styleObj(s, scope) {
  // Propriedade repetida: vale a última, como no runtime do design (objeto de estilo).
  const map = new Map();
  for (const d of splitDecls(s)) {
    const k = d.indexOf(':');
    if (k < 0) continue;
    const raw = d.slice(0, k).trim();
    const key = styleKey(raw.startsWith('--') ? raw : raw.toLowerCase());
    const val = interp(d.slice(k + 1).trim(), scope);
    map.delete(key);
    map.set(key, val.startsWith('`') ? '(' + val + ' as any)' : val);
  }
  return '{{ ' + [...map].map(([k, v]) => k + ': ' + v).join(', ') + ' }}';
}
const mapAsset = (u) => (/^(\.\/)?assets\//.test(u) ? '/' + u.replace(/^\.\//, '') : u);
function mapHref(u) {
  if (!u) return u;
  const m = /^([^#?]+\.dc\.html)(.*)$/.exec(u);
  if (!m) return mapAsset(u);
  const file = decodeURIComponent(m[1]).split('/').pop();
  const route = ROUTE_BY_FILE[file];
  if (!route) { console.warn('  ! link sem rota:', file); return u; }
  return route === '/' && m[2].startsWith('#') ? '/' + m[2] : route + m[2];
}

// ---------------------------------------------------------------- JSX
function convertPage(html) {
  const tree = parse(html);
  const xdc = find(tree, (n) => n.type === 'el' && n.name === 'x-dc');
  if (!xdc) throw new Error('<x-dc> não encontrado');
  const helmet = xdc.children.find((n) => n.type === 'el' && n.name === 'helmet');
  const css = helmet ? findAll(helmet, (n) => n.type === 'el' && n.name === 'style').map((s) => s.children[0]?.text || '').join('\n') : '';
  const fonts = helmet ? findAll(helmet, (n) => n.type === 'el' && n.name === 'link' && attr(n, 'rel') === 'stylesheet').map((l) => attr(l, 'href')) : [];
  const hoverRules = [];
  let hoverN = 0;

  const ind = (d) => '  '.repeat(d);
  function node(n, scope, d) {
    if (n.type === 'text') {
      // Mesma regra do runtime do design: texto só de quebras de linha (sem espaço) é descartado.
      if (!n.text.includes('{{') && !n.text.trim() && !n.text.includes(' ')) return null;
      if (!HOLE.test(n.text)) return ind(d) + '{' + JSON.stringify(n.text) + '}';
      HOLE.lastIndex = 0;
      const out = []; let last = 0, m;
      while ((m = HOLE.exec(n.text))) {
        if (m.index > last) out.push('{' + JSON.stringify(n.text.slice(last, m.index)) + '}');
        out.push('{H(' + expr(m[1], scope) + ')}');
        last = m.index + m[0].length;
      }
      if (last < n.text.length) out.push('{' + JSON.stringify(n.text.slice(last)) + '}');
      return ind(d) + out.join('');
    }
    if (n.type === 'raw') return ind(d) + '{' + JSON.stringify(n.text) + '}';
    if (n.name === 'sc-for') {
      const list = wholeHole(attr(n, 'list') || '');
      const as = attr(n, 'as') || 'item';
      const inner = [...scope, as];
      return ind(d) + '{((' + expr(list, scope) + ') || []).map((L_' + as + ': any, $index: number) => (\n' +
        ind(d + 1) + '<React.Fragment key={$index}>\n' + kids(n, inner, d + 2) + '\n' + ind(d + 1) + '</React.Fragment>\n' + ind(d) + '))}';
    }
    if (n.name === 'sc-if') {
      const cond = wholeHole(attr(n, 'value') || '');
      return ind(d) + '{' + expr(cond, scope) + ' ? (\n' + ind(d + 1) + '<>\n' + kids(n, scope, d + 2) + '\n' + ind(d + 1) + '</>\n' + ind(d) + ') : null}';
    }
    const props = [];
    const classes = [];
    for (const [a, val] of n.attrs) {
      if (a.startsWith('hint-')) continue;
      if (a.startsWith('style-')) {
        // style-hover="..." etc. viram uma classe com a pseudo-classe, como no runtime do design.
        const pseudo = a.slice(6);
        const cls = 'dh' + ++hoverN;
        classes.push(JSON.stringify(cls));
        const el = pseudo === 'before' || pseudo === 'after';
        const decls = el ? val : splitDecls(val).map((x) => (/!\s*important$/i.test(x) ? x : x + ' !important')).join(';');
        hoverRules.push('.' + cls + (el ? '::' : ':') + pseudo + '{' + decls + '}');
        continue;
      }
      if (a === 'class') { classes.push(interp(val ?? '', scope)); continue; }
      if (a === 'style') { props.push('style=' + styleObj(val ?? '', scope)); continue; }
      const name = attrName(a);
      if (val === null || (val === '' && BOOL.has(a.toLowerCase()))) { props.push(name); continue; }
      const wh = wholeHole(val);
      if (wh !== null) { props.push(name + '={' + expr(wh, scope) + '}'); continue; }
      // Atributos que o React tipa como número (rows, tabIndex...) recebem número.
      if (NUMERIC.has(name) && /^-?\d+$/.test(val.trim())) { props.push(name + '={' + val.trim() + '}'); continue; }
      let v = val;
      if (a === 'href') v = mapHref(v);
      else if (a === 'src' || a === 'poster') v = mapAsset(v);
      props.push(name + '={' + interp(v, scope) + '}');
    }
    if (classes.length) props.unshift('className={' + (classes.length === 1 ? classes[0] : '[' + classes.join(', ') + "].join(' ')") + '}');
    const open = '<' + n.name + (props.length ? ' ' + props.join(' ') : '');
    if (!n.children.length) return ind(d) + open + ' />';
    return ind(d) + open + '>\n' + kids(n, scope, d + 1) + '\n' + ind(d) + '</' + n.name + '>';
  }
  function kids(n, scope, d) { return n.children.map((c) => node(c, scope, d)).filter((x) => x != null).join('\n'); }

  const body = xdc.children.filter((c) => c !== helmet && !(c.type === 'text' && !c.text.trim()));
  const jsx = body.map((c) => node(c, [], 3)).filter((x) => x != null).join('\n');

  const script = find(tree, (n) => n.type === 'el' && n.name === 'script' && attr(n, 'type') === 'text/x-dc');
  const logic = script ? script.children[0]?.text || '' : '';
  const propsDecl = script && attr(script, 'data-props') ? JSON.parse(attr(script, 'data-props')) : {};
  const defaults = Object.fromEntries(Object.entries(propsDecl).filter(([k, v]) => !k.startsWith('$') && v && 'default' in v).map(([k, v]) => [k, v.default]));
  return { css: css.trim() + (hoverRules.length ? '\n' + hoverRules.join('\n') : ''), fonts, jsx, logic, defaults };
}

function viewFile(page, r) {
  return `'use client';
/* eslint-disable */
// GERADO por scripts/sync-design.mjs a partir de "${page.file}". Não edite à mão:
// altere o design e rode \`npm run design:sync -- <pasta-do-design>\`.
import React from 'react';
import { useDC } from '@/lib/dc';
import Logic from '@/lib/logic/${page.logic}';

const CSS = ${JSON.stringify(r.css)};

const FONTS: string[] = ${JSON.stringify(r.fonts, null, 2)};

const DEFAULTS: Record<string, unknown> = ${JSON.stringify(r.defaults)};

// Valor interpolado no texto: o runtime do design o envolve em <span class="sc-interp">.
const H = (x: any) => (x === undefined || x === null || typeof x === 'boolean' ? null : <span className="sc-interp">{String(x)}</span>);

export default function ${page.name}(props: Record<string, unknown>) {
  const v: any = useDC(Logic, { ...DEFAULTS, ...props });
  return (
    <>
      {FONTS.map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="default" />
      ))}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
${r.jsx}
    </>
  );
}
`;
}

function logicFile(page, src) {
  let s = src.trim();
  if (!/class Component extends DCLogic/.test(s)) throw new Error('classe Component não encontrada em ' + page.file);
  s = s.replace(/class Component extends DCLogic/, 'export default class Component extends DCLogic');
  // Caminhos de assets relativos ao design viram absolutos (as rotas /cases/* têm outra base).
  s = s.replace(/(['"`])(?:\.\/)?assets\//g, '$1/assets/');
  // i18n.js carrega depois da hidratação; no mount lemos o idioma salvo direto do localStorage.
  s = s.replace(/const L0 = window\.dsI18n && window\.dsI18n\.lang;/g,
    "const L0 = (window.dsI18n && window.dsI18n.lang) || (() => { try { return localStorage.getItem('ds-lang') === 'en' ? 'en' : 'pt'; } catch (e) { return null; } })();");
  return `// @ts-nocheck
/* eslint-disable */
// GERADO por scripts/sync-design.mjs a partir de "${page.file}". Não edite à mão.
import React from 'react';
import { DCLogic } from '@/lib/dc';

${s}
`;
}

function pageFile(page) {
  return `import type { Metadata } from "next";
import View from "./view";

export const metadata: Metadata = { title: ${JSON.stringify(page.title || page.name.replace(/View$/, '') + ' · DevSehn')} };

export default function Page() {
  return <View />;
}
`;
}

// Rotas que o motion.js (menu e links) usa fora do canvas: { home: '/', ... }
function motionRoutes(src) {
  const m = /:\s*(\{\s*home:\s*'\/'[^}]*\})/.exec(src);
  if (!m) return null;
  return [...m[1].matchAll(/(\w+):\s*'([^']*)'/g)].map(([, k, v]) => [k, v]);
}

// ---------------------------------------------------------------- main
function main() {
  let src = process.argv[2];
  if (!src && existsSync(join(ROOT, 'design'))) src = join(ROOT, 'design');
  if (!src || !existsSync(src)) {
    console.error('Uso: npm run design:sync -- <pasta-do-design>');
    process.exit(1);
  }
  const warn = [];

  // Páginas do design fora do mapa
  const onDisk = readdirSync(src).filter((f) => f.endsWith('.dc.html'));
  for (const f of onDisk) if (!ROUTE_BY_FILE[f] && !IGNORE.has(f)) warn.push(`"${f}" está no design mas não em design.routes.json (adicione em pages, ou em ignore se não for página do site)`);

  for (const page of PAGES) {
    const p = join(src, page.file);
    if (!existsSync(p)) { warn.push(`"${page.file}" está em design.routes.json mas não na pasta do design`); continue; }
    const r = convertPage(readFileSync(p, 'utf8'));
    for (const [out, content] of [[page.view, viewFile(page, r)], [`lib/logic/${page.logic}.ts`, logicFile(page, r.logic)]]) {
      mkdirSync(dirname(join(ROOT, out)), { recursive: true });
      writeFileSync(join(ROOT, out), content);
    }
    const pg = join(ROOT, page.dir, 'page.tsx');
    const created = !existsSync(pg);
    if (created) writeFileSync(pg, pageFile(page));
    console.log('✓', page.file, '→', page.route, created ? '(rota nova: page.tsx criado)' : '');
  }

  for (const f of ['i18n.js', 'motion.js']) if (existsSync(join(src, f))) { cpSync(join(src, f), join(ROOT, 'public', f)); console.log('✓', f, '→ public/' + f); }
  if (existsSync(join(src, 'assets'))) { cpSync(join(src, 'assets'), join(ROOT, 'public', 'assets'), { recursive: true }); console.log('✓ assets → public/assets'); }

  // motion.js precisa apontar para rotas que existem
  const motionPath = join(ROOT, 'public', 'motion.js');
  if (existsSync(motionPath)) {
    const mr = motionRoutes(readFileSync(motionPath, 'utf8'));
    const routes = new Set(PAGES.map((p) => p.route));
    if (!mr) warn.push('não encontrei o ROUTES do motion.js para conferir as rotas do menu');
    else for (const [k, v] of mr) if (!routes.has(v)) warn.push(`motion.js aponta "${k}" para ${v}, que não está em design.routes.json`);
  }

  // Catálogo de páginas do Clarity
  try {
    execFileSync(process.execPath, [join(ROOT, 'scripts', 'extract-analytics-catalog.mjs')], { cwd: ROOT, stdio: 'inherit' });
  } catch (e) { warn.push('falha ao regenerar o catálogo de analytics: ' + e.message); }

  if (warn.length) { console.warn('\nAvisos:'); for (const w of warn) console.warn('  ! ' + w); }
  else console.log('\nTudo certo: design, rotas e menu batem.');
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(HERE)) main();
