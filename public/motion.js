/* DevSehn motion: entrada, reveals no scroll, View Transitions, menu e microinterações.
   Usa GSAP + ScrollTrigger + SplitText (CDN). Respeita prefers-reduced-motion. */
(() => {
  if (window.__dsMotion) return; window.__dsMotion = 1;
  const SELF = document.currentScript && document.currentScript.src || location.href;
  const DC = /\.dc\.html$/i.test(decodeURIComponent(location.pathname));
  const asset = p => DC ? new URL(p, SELF).href : '/' + p;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE = matchMedia('(pointer: fine)').matches;
  const ROUTES = DC
    ? { home: 'DevSehn%20Portfolio%20v2.dc.html', eli: 'Eli%20Control%20Case.dc.html', pecas: 'Eli%20Pecas%20Case.dc.html', cv: 'Cultura%20Verde%20Case.dc.html', dani: 'Daniela%20Bosing%20Case.dc.html', ford: 'Ford%20Case.dc.html', sobre: 'Sobre.dc.html', contato: 'Contato.dc.html' }
    : { home: '/', eli: '/cases/eli-control', pecas: '/cases/eli-pecas', cv: '/cases/cultura-verde', dani: '/cases/daniela-bosing', ford: '/cases/ford', sobre: '/sobre', contato: '/contato' };
  const isHome = DC ? /Portfolio/i.test(decodeURIComponent(location.pathname)) : location.pathname === '/';
  const H = h => (isHome && h.startsWith('#')) ? h : ROUTES.home + h;
  const CASES = [
    { n: '01', name: 'Eli Control', tag: 'Telemetria de refrigeração', href: ROUTES.eli, img: 'assets/menu/eli-control.png' },
    { n: '02', name: 'Eli Peças', tag: 'E-commerce de peças', href: ROUTES.pecas, img: 'assets/menu/eli-pecas.png' },
    { n: '03', name: 'Cultura Verde', tag: 'Site e painel', href: ROUTES.cv, img: 'assets/menu/cultura-verde.png' },
    { n: '04', name: 'Daniela Bosing', tag: 'Gastronomia', href: ROUTES.dani, img: 'assets/menu/daniela-bosing.png' },
    { n: '05', name: 'Ford', tag: 'Suprimentos automotivos', href: ROUTES.ford, img: 'assets/menu/ford.png' },
  ];
  const isCaseHref = h => !!h && (/Case\.dc\.html/i.test(decodeURIComponent(h)) || /\/cases\//.test(h));
  const CV_URL = 'https://docs.google.com/document/d/1bCk5xYPFQ3WOpzAvrsFbf4y7sXdSpJFS/edit?usp=sharing&ouid=107891843000990713036&rtpof=true&sd=true';
  const EASE = 'cubic-bezier(.16,1,.3,1)';
  const TILE = '#2F4BF0';
  const TILES_KEY = 'ds-tiles';
  let tilesIn = false;
  try { tilesIn = !RM && sessionStorage.getItem(TILES_KEY) === '1'; sessionStorage.removeItem(TILES_KEY); } catch (e) {}
  if (tilesIn) document.documentElement.classList.add('ds-cover');

  const css = `
@view-transition { navigation: none; }
html.ds-cover::after { content: ''; position: fixed; inset: 0; z-index: 100; background: ${TILE}; }
#ds-tiles { position: fixed; inset: 0; z-index: 101; display: flex; pointer-events: none; }
#ds-tiles.busy { pointer-events: auto; }
#ds-tiles > i { flex: 1 1 0; margin-right: -1px; background: ${TILE}; transform: scaleY(0); transform-origin: 50% 100%; will-change: transform; }
#ds-tiles > b { position: absolute; left: 50%; top: 50%; width: 46px; height: 48px; margin: -24px 0 0 -23px; opacity: 0; }
#ds-tiles > b svg { display: block; }
#ds-tiles.ds-loading > b svg { animation: ds-spin 1.5s cubic-bezier(.65,0,.35,1) infinite; }
@keyframes ds-spin { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(180deg) scale(.8); } 100% { transform: rotate(360deg) scale(1); } }
#ds-tiles > u { position: absolute; left: 50%; top: calc(50% + 60px); width: 200px; height: 4px; margin-left: -100px; background: rgba(11,14,19,.18); opacity: 0; text-decoration: none; }
#ds-tiles.ds-loading > u { opacity: 1; }
#ds-tiles > u > span { position: absolute; inset: 0; background: #0B0E13; transform-origin: 0 50%; transform: scaleX(var(--p,0)); }
#ds-tiles > u > em { position: absolute; top: 50%; left: calc(var(--p,0) * 100% + 4px); width: 9px; height: 9px; margin-top: -4.5px; border-radius: 50%; background: #0B0E13; }
html.lenis, html.lenis body { height: auto; }
.lenis.lenis-smooth { scroll-behavior: auto !important; }
.lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
.lenis.lenis-stopped { overflow: clip; }
.lenis.lenis-smooth iframe { pointer-events: none; }
html.ds-pre [data-reveal], html.ds-pre section[data-screen-label]:first-of-type h1, html.ds-pre header > div > * { opacity: 0; }
.ds-roll { position: relative; display: inline-block; overflow: hidden; vertical-align: top; line-height: inherit; }
.ds-roll > span { display: block; transition: transform .55s cubic-bezier(.7,0,.2,1); }
.ds-roll > span + span { position: absolute; left: 0; top: 100%; }
a:hover > .ds-roll > span, a:focus-visible > .ds-roll > span { transform: translateY(-100%); }
.ds-arrow { display: inline-block; transition: transform .5s ${EASE}; }
a:hover .ds-arrow, button:hover .ds-arrow { transform: translateX(6px); }
a:hover .ds-arrow.ds-diag { transform: translate(4px,-4px); }
a:hover .ds-arrow.ds-down { transform: translateY(4px); }
.ds-media img, .ds-media video { transition: scale 1.3s ${EASE}, filter .6s ease; }
.ds-media:hover img, .ds-media:hover video { scale: 1.045; }
#ds-cursor { position: fixed; left: 0; top: 0; z-index: 90; width: 88px; height: 88px; margin: -44px 0 0 -44px; border-radius: 50%; background: #3D6BFF; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font: 500 12px/1 'IBM Plex Mono', monospace; letter-spacing: .08em; text-transform: uppercase; pointer-events: none; transform: scale(0); transition: transform .45s ${EASE}; }
#ds-cursor.on { transform: scale(1); }
#ds-menu { position: fixed; inset: 0; z-index: 80; background: #0B0E13; color: #ECEBE6; font-family: 'Schibsted Grotesk', system-ui, sans-serif; clip-path: polygon(0 0,100% 0,100% 0,0 0); visibility: hidden; display: flex; flex-direction: column; overflow-y: auto; }
#ds-menu a { color: inherit; text-decoration: none; }
#ds-menu .ds-mono { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: #9AA1AB; }
#ds-menu .ds-big { display: flex; align-items: baseline; gap: 16px; font-size: clamp(40px, 6.4vw, 96px); line-height: 1; letter-spacing: -.045em; font-weight: 500; transition: color .25s; }
#ds-menu .ds-big:hover { color: #3D6BFF; }
#ds-menu .ds-list:has(a:hover) a:not(:hover) { color: #5A5F66; }
#ds-menu .ds-case { display: grid; grid-template-columns: 32px minmax(0,1fr) auto; gap: 16px; align-items: baseline; padding: 14px 0; border-top: 1px solid #22272F; transition: color .25s, padding .4s ${EASE}; }
#ds-menu .ds-case:last-child { border-bottom: 1px solid #22272F; }
#ds-menu .ds-case:hover { color: #3D6BFF; padding-left: 10px; }
#ds-menu .ds-prev img { position: absolute; inset: 0; width: 100%; height: 100%; padding: clamp(20px,3vw,40px); object-fit: contain; object-position: 50% 50%; opacity: 0; transition: opacity .5s ease, scale 1.4s ${EASE}; scale: 1.08; }
#ds-menu .ds-prev img.on { opacity: 1; scale: 1; }
#ds-menu .ds-split-mask { padding-bottom: .08em; margin-bottom: -.08em; }
@media (max-width: 860px) { #ds-menu .ds-prev { display: none !important; } }
`;
  const st = document.createElement('style'); st.id = 'ds-motion-css'; st.textContent = css; document.head.appendChild(st);
  if (!RM) document.documentElement.classList.add('ds-pre');
  setTimeout(() => document.documentElement.classList.remove('ds-pre'), 3500);

  // View Transitions: marca se a página chegou por uma transição
  let arrivedVT = false;
  const quiet = vt => { if (!vt) return; ['ready', 'finished', 'updateCallbackDone'].forEach(k => vt[k] && vt[k].catch(() => {})); };
  addEventListener('pagereveal', e => {
    if (!e.viewTransition) return;
    quiet(e.viewTransition);
    arrivedVT = true;
    try {
      const from = navigation.activation && navigation.activation.from && navigation.activation.from.url;
      if (from && isHome) { const card = findCardFor(from); if (card) card.style.viewTransitionName = 'case-media'; }
    } catch (err) {}
  });
  addEventListener('pageswap', e => {
    quiet(e.viewTransition);
    try { const to = e.activation && e.activation.entry && e.activation.entry.url; if (to && isHome) { const card = findCardFor(to); if (card) card.style.viewTransitionName = 'case-media'; } } catch (err) {}
  });
  function mediaFrameOf(a) {
    const m = a.querySelector('img:not([alt=""]), video, img'); if (!m) return null;
    let el = m; while (el.parentElement && el.parentElement !== a) el = el.parentElement;
    return el.parentElement === a ? el : null;
  }
  function findCardFor(url) {
    const path = decodeURIComponent(new URL(url, location.href).pathname).split('/').pop();
    for (const a of document.querySelectorAll('a.ds-media')) {
      const p = decodeURIComponent(new URL(a.getAttribute('href'), location.href).pathname).split('/').pop();
      if (p === path) return mediaFrameOf(a);
    }
    return null;
  }

  // Transição entre páginas: colunas em cascata no azul da marca
  const SYMBOL = '<svg viewBox="12 10 42 44" width="46" height="48" aria-hidden="true"><path fill="#F7F6F2" d="M12 10H32A22 22 0 0 1 32 54H12V35H27.68A7 7 0 1 0 27.68 29H12Z"></path><circle cx="34" cy="32" r="3.5" fill="#0D0E11"></circle></svg>';
  const T_EASE = 'cubic-bezier(.76,0,.24,1)', T_DUR = 620, T_STAG = 70;
  let tiles = null;
  function tileLayer(covered) {
    if (tiles) return tiles;
    tiles = document.createElement('div'); tiles.id = 'ds-tiles'; tiles.setAttribute('aria-hidden', 'true');
    const n = innerWidth < 860 ? 4 : 6;
    tiles.innerHTML = Array.from({ length: n }, () => '<i></i>').join('') + '<b>' + SYMBOL + '</b><u><span></span><em></em></u>';
    if (covered) tiles.querySelectorAll('i').forEach(c => { c.style.transform = 'scaleY(1)'; });
    if (covered) tiles.querySelector('b').style.opacity = '1';
    document.body.appendChild(tiles);
    return tiles;
  }
  function tilesCover(done) {
    const t = tileLayer(false); t.classList.add('busy');
    const cols = [...t.querySelectorAll('i')];
    cols.forEach((c, i) => c.animate([{ transform: 'scaleY(0)', transformOrigin: '50% 100%' }, { transform: 'scaleY(1)', transformOrigin: '50% 100%' }], { duration: T_DUR, delay: i * T_STAG, easing: T_EASE, fill: 'forwards' }));
    const total = T_DUR + (cols.length - 1) * T_STAG;
    t.querySelector('b').animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 300, delay: total - 160, easing: 'ease-out', fill: 'forwards' });
    setTimeout(done, total + 140);
  }
  function tilesReveal() {
    const t = tileLayer(true); t.classList.add('busy');
    document.documentElement.classList.remove('ds-cover');
    const cols = [...t.querySelectorAll('i')];
    t.querySelectorAll('b, u').forEach(el => el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: 'ease-in', fill: 'forwards' }));
    cols.forEach((c, i) => c.animate([{ transform: 'scaleY(1)', transformOrigin: '50% 0%' }, { transform: 'scaleY(0)', transformOrigin: '50% 0%' }], { duration: T_DUR, delay: 120 + i * T_STAG, easing: T_EASE, fill: 'forwards' }));
    setTimeout(() => { t.remove(); tiles = null; }, 120 + T_DUR + cols.length * T_STAG + 60);
  }
  function tilesReset() { document.documentElement.classList.remove('ds-cover'); if (tiles) { tiles.remove(); tiles = null; } }
  addEventListener('pageshow', e => { if (e.persisted) tilesReset(); });
  window.dsTransition = done => { if (RM) return done(); tilesCover(() => { try { sessionStorage.setItem(TILES_KEY, '1'); } catch (err) {} done(); }); };
  document.addEventListener('click', e => {
    if (RM || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    const raw = a.getAttribute('href'); if (!raw || raw.startsWith('#')) return;
    let u; try { u = new URL(a.href, location.href); } catch (err) { return; }
    if (u.origin !== location.origin || !/^https?:$/.test(u.protocol)) return;
    if (u.pathname === location.pathname && u.search === location.search) return;
    e.preventDefault();
    if (document.body.classList.contains('ds-menu-open')) document.documentElement.style.overflow = '';
    tilesCover(() => { try { sessionStorage.setItem(TILES_KEY, '1'); } catch (err) {} location.href = u.href; });
  }, true);

  const load = src => new Promise((ok, no) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = no; document.head.appendChild(s); });
  const CDN = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/';
  const gsapLibs = window.gsap ? Promise.resolve() : load(CDN + 'gsap.min.js').then(() => Promise.all([load(CDN + 'ScrollTrigger.min.js'), load(CDN + 'SplitText.min.js')]));
  const lenisLib = window.Lenis ? Promise.resolve() : load('https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js').catch(() => {});
  const libs = Promise.all([gsapLibs, lenisLib]);
  const ready = new Promise(res => {
    const t0 = performance.now();
    const check = () => (document.querySelector('[data-screen-label="Contato"]') || performance.now() - t0 > 4000) ? res() : setTimeout(check, 60);
    check();
  });
  const fontsP = document.fonts ? document.fonts.ready : Promise.resolve();
  const loaderDone = RM ? Promise.resolve() : runLoader();
  Promise.all([libs, ready, fontsP]).then(() => setTimeout(init, 30)).catch(() => document.documentElement.classList.remove('ds-pre'));

  // Loader: colunas azuis cobrindo a página, logo girando com pulse e progresso (risco + bolinha)
  function runLoader() {
    document.documentElement.classList.add('ds-cover');
    return new Promise(resolve => {
      const t0 = performance.now(), MIN = 1100, MAX = 9000;
      let shown = 0, target = 0, layer = null, assets = null, aDone = 0, bDone = 0, exiting = false;
      const bump = () => { const b = bDone / 3, a = assets ? (assets.length ? aDone / assets.length : 1) : 0; target = Math.max(target, b * .4 + a * .6); };
      const step = p => Promise.resolve(p).then(() => { bDone++; bump(); }, () => { bDone++; bump(); });
      const collect = () => {
        const wait = (el, ev) => new Promise(r => { el.addEventListener(ev, r, { once: true }); el.addEventListener('error', r, { once: true }); setTimeout(r, MAX); });
        const imgs = [...document.images].filter(i => i.loading !== 'lazy' && !i.complete).map(i => wait(i, 'load'));
        const vids = [...document.querySelectorAll('video[data-hero-bg]')].filter(v => v.readyState < 3).map(v => wait(v, 'canplay'));
        assets = [...imgs, ...vids];
        assets.forEach(p => p.then(() => { aDone++; bump(); }));
        bump();
      };
      step(libs); step(fontsP); step(ready.then(collect));
      const tick = () => {
        const el = performance.now() - t0;
        const all = bDone >= 3 && assets && aDone >= assets.length;
        if ((all && el > MIN) || el > MAX) target = 1;
        shown += (Math.min(target, target === 1 ? 1 : .96) - shown) * .08;
        if (!layer && document.body) { layer = tileLayer(true); layer.classList.add('ds-loading'); }
        if (layer) layer.style.setProperty('--p', shown.toFixed(4));
        if (target === 1 && shown > .995 && !exiting) {
          exiting = true; if (layer) layer.style.setProperty('--p', '1');
          setTimeout(() => { tilesReveal(); resolve(); }, 240);
          return;
        }
        requestAnimationFrame(tick);
      };
      tick();
    });
  }

  function pad(sp) { (sp.masks || []).forEach(el => { el.style.paddingTop = '.14em'; el.style.marginTop = '-.14em'; el.style.paddingBottom = '.1em'; el.style.marginBottom = '-.1em'; }); return sp; }
  function outermost(list) { return list.filter(el => !list.some(o => o !== el && o.contains(el))); }

  function init() {
    const gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger, window.SplitText);
    const ST = window.ScrollTrigger, Split = window.SplitText;
    if (!RM && window.Lenis) {
      const lenis = window.dsLenis = new window.Lenis({ lerp: .1, anchors: true, prevent: n => !!(n.closest && n.closest('#ds-menu')) });
      lenis.on('scroll', ST.update);
      gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
    }
    const header = document.querySelector('header');
    const sections = [...document.querySelectorAll('section[data-screen-label], footer[data-screen-label]')];
    const hero = sections[0];

    decorate(header);
    buildMenu(gsap, Split);
    heroVideo();
    if (FINE) cursor(gsap);
    if (FINE && !RM) liquid();
    magnetic(gsap);

    if (RM) { document.documentElement.classList.remove('ds-pre'); return; }

    // 01 · Entrada cinematográfica
    const tl = gsap.timeline({ paused: true, defaults: { ease: 'expo.out' } });
    if (header) tl.from(header.querySelectorAll(':scope > div > *'), { y: -16, opacity: 0, duration: 1, stagger: .06 }, .7);
    const h1 = hero && hero.querySelector('h1');
    let heroMediaFrame = null;
    if (hero) {
      const fig = hero.querySelector('figure');
      heroMediaFrame = fig ? fig.firstElementChild : null;
      if (h1) {
        h1.removeAttribute('data-reveal');
        const mark = h1.querySelector('[data-logo-d]'), word = h1.querySelector('[data-logo-word]');
        if (mark && word) {
          // Logo primeiro; letras saem de trás da logo para suas posições (2s no total)
          const orig = [...word.childNodes], text = word.textContent;
          const chars = [...text].map(ch => { const c = document.createElement('span'); c.textContent = ch; c.style.display = 'inline-block'; return c; });
          word.replaceChildren(...chars);
          tl.fromTo(mark, { scale: .2, rotate: -140, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: .85, ease: 'expo.out', clearProps: 'transform,opacity' }, 0);
          tl.from(chars, { x: i => -(chars[i].offsetLeft + chars[i].offsetWidth), duration: 1.3, stagger: .04, ease: 'expo.out', onComplete: () => word.replaceChildren(...orig) }, .5);
        } else {
        const short = h1.textContent.trim().split(/\s+/).length <= 2;
        const sp = pad(Split.create(h1, { type: short ? 'chars' : 'words,lines', mask: short ? 'chars' : 'lines' }));
        tl.from(short ? sp.chars : sp.words, { yPercent: 118, duration: 1.4, stagger: short ? .045 : .06, onComplete: () => sp.revert() }, .12);
        }
      }
      if (heroMediaFrame) {
        if (!(arrivedVT && heroMediaFrame.style.viewTransitionName)) {
          tl.fromTo(heroMediaFrame, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut', clearProps: 'clipPath' }, .8);
          const inner = heroMediaFrame.firstElementChild;
          if (inner) tl.from(inner, { scale: 1.28, duration: 2.2, clearProps: 'scale' }, .8);
        }
      }
      const sec = outermost([...hero.querySelectorAll('p, dl, figcaption, a, img, [data-reveal]')].filter(el => !(h1 && (h1.contains(el) || el.contains(h1))) && !(heroMediaFrame && heroMediaFrame.contains(el)) && !el.closest('figure > div')));
      sec.forEach(el => el.removeAttribute('data-reveal'));
      if (sec.length) tl.from(sec, { y: 26, opacity: 0, duration: 1.1, stagger: .07, clearProps: 'transform,opacity' }, 1);
      // Parallax positivo: grupos do hero sobem mais rápido que a rolagem
      const textCol = hero.querySelector('p') && hero.querySelector('p').parentElement;
      [[h1 && h1.parentElement, .14], [textCol, .26], [hero.querySelector('figure'), .38]].forEach(([el, f]) => {
        if (el) gsap.to(el, { y: () => -hero.offsetHeight * f, ease: 'none', scrollTrigger: { trigger: hero, start: 'top 64px', end: 'bottom top', scrub: true, invalidateOnRefresh: true } });
      });
    }
    loaderDone.then(() => { setTimeout(() => tl.play(), 350); setTimeout(() => { if (tl.progress() < 1) tl.progress(1); }, 4500); });
    document.documentElement.classList.remove('ds-pre');

    const rest = sections.slice(1);
    const inRest = el => rest.some(s => s.contains(el));

    // Texto com blur no scroll (contato e contexto)
    const blurTargets = [];
    rest.forEach(s => {
      const lbl = s.getAttribute('data-screen-label');
      if (lbl === 'Contato') { const h = s.querySelector('h2'); if (h) blurTargets.push(h); }
      if (lbl === 'Contexto') { const p = s.querySelector('p'); if (p) blurTargets.push(p); }
    });
    blurTargets.forEach(el => {
      el.removeAttribute('data-reveal');
      const sp = Split.create(el, { type: 'words' });
      gsap.fromTo(sp.words, { filter: 'blur(10px)', opacity: .12 }, { filter: 'blur(0px)', opacity: 1, stagger: .08, ease: 'none', scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 38%', scrub: true } });
    });

    // Títulos de seção: palavras sobem dentro de máscara
    rest.forEach(s => s.querySelectorAll('h2').forEach(h => {
      if (blurTargets.includes(h)) return;
      h.removeAttribute('data-reveal');
      const sp = pad(Split.create(h, { type: 'words,lines', mask: 'lines' }));
      gsap.from(sp.words, { yPercent: 115, duration: 1.2, ease: 'expo.out', stagger: .05, scrollTrigger: { trigger: h, start: 'top 88%', once: true }, onComplete: () => sp.revert() });
    }));

    // 02 · Reveal das imagens: máscara + zoom dentro da moldura
    const frames = outermost([
      ...document.querySelectorAll('[data-reveal="clip"]'),
      ...document.querySelectorAll('figure > div:first-child'),
      ...[...document.querySelectorAll('a.ds-media')].map(mediaFrameOf).filter(Boolean),
    ].filter(el => inRest(el)));
    frames.forEach((fr, i) => {
      fr.removeAttribute('data-reveal');
      if (arrivedVT && fr.style.viewTransitionName === 'case-media') return;
      const inner = fr.querySelector('[data-fit]') || fr.querySelector('img:not([data-parallax]), video:not([data-parallax])');
      const dir = fr.closest('a.ds-media') ? 'inset(0% 100% 0% 0%)' : 'inset(100% 0% 0% 0%)';
      const t = gsap.timeline({ scrollTrigger: { trigger: fr, start: 'top 86%', once: true } });
      t.fromTo(fr, { clipPath: dir }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'expo.inOut', clearProps: 'clipPath' }, 0);
      if (inner && (inner.offsetHeight > 120 || inner.hasAttribute('data-fit'))) t.from(inner, { scale: 1.22, duration: 2, ease: 'expo.out', clearProps: 'scale' }, .05);
    });

    // Demais elementos marcados: entram em sequência
    const kinds = { fade: { y: 28 }, rise: { y: 72 }, line: { yPercent: 105 }, grow: { scaleX: 0, transformOrigin: '0 50%' } };
    const pending = [...document.querySelectorAll('[data-reveal]')].filter(inRest);
    pending.forEach(el => {
      const k = el.getAttribute('data-reveal'); el.removeAttribute('data-reveal');
      gsap.set(el, Object.assign({ opacity: k === 'line' || k === 'grow' ? 1 : 0 }, kinds[k] || kinds.fade));
      el.__dsDelay = +(el.getAttribute('data-delay') || 0) / 1000;
    });
    ST.batch(pending, {
      start: 'top 92%', once: true,
      onEnter: batch => batch.forEach((el, i) => gsap.to(el, { opacity: 1, y: 0, yPercent: 0, scaleX: 1, duration: 1.1, ease: 'expo.out', delay: Math.min(el.__dsDelay || 0, .5) + i * .07, clearProps: 'transform,opacity' })),
    });

    setTimeout(() => ST.refresh(), 800);
    addEventListener('load', () => ST.refresh());
  }


  // Vídeo de fundo do hero: loop normal (parado com reduzir movimento)
  function heroVideo() {
    const v = document.querySelector('video[data-hero-bg]'); if (!v) return;
    v.muted = true; v.defaultMuted = true;
    if (RM) { v.pause(); return; }
    const p = v.play(); p && p.catch(() => {});
    // Parallax de profundidade: o vídeo rola a 70% da velocidade (offset 0.3), como se estivesse mais longe
    const track = v.closest('[data-scrub-track]') || v.parentElement;
    const host = track.parentElement;
    v.style.willChange = 'transform';
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = host.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const y = Math.max(0, -r.top) * 0.3;
      v.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0)';
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update);
    update();
  }

  // 04 · Microinterações
  function decorate(header) {
    if (header) header.querySelectorAll('nav a').forEach(a => {
      const tn = [...a.childNodes].find(n => n.nodeType === 3 && n.nodeValue.trim());
      if (!tn || a.querySelector('.ds-roll')) return;
      const roll = document.createElement('span'); roll.className = 'ds-roll';
      const top = document.createElement('span'), bot = document.createElement('span');
      bot.setAttribute('aria-hidden', 'true'); bot.textContent = tn.nodeValue;
      a.insertBefore(roll, tn); top.appendChild(tn); roll.append(top, bot);
    });
    document.querySelectorAll('a span, button span').forEach(s => {
      const t = s.textContent.trim();
      if (s.children.length || !/^[→↗↓]$/.test(t)) return;
      s.classList.add('ds-arrow'); if (t === '↗') s.classList.add('ds-diag'); if (t === '↓') s.classList.add('ds-down');
    });
    document.querySelectorAll('a[href]').forEach(a => {
      if (isCaseHref(a.getAttribute('href')) && a.querySelector('img, video') && !a.closest('header')) {
        a.classList.add('ds-media');
        a.addEventListener('click', () => { const fr = mediaFrameOf(a); if (fr && fr.offsetHeight > 120) fr.style.viewTransitionName = 'case-media'; });
      }
    });
    addEventListener('pageshow', e => { if (e.persisted) document.querySelectorAll('a.ds-media').forEach(a => { const fr = mediaFrameOf(a); if (fr) fr.style.viewTransitionName = ''; }); });
  }

  function magnetic(gsap) {
    if (!FINE || RM) return;
    document.querySelectorAll('a[href], button').forEach(el => {
      if (el.closest('header, #ds-menu') || el.classList.contains('ds-media')) return;
      const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
      const buttonish = r.height >= 40 && r.height <= 64 && r.width < 420 && (parseFloat(cs.borderTopWidth) > 0 || cs.backgroundColor !== 'rgba(0, 0, 0, 0)');
      if (!buttonish) return;
      const x = gsap.quickTo(el, 'x', { duration: .6, ease: 'power3.out' }), y = gsap.quickTo(el, 'y', { duration: .6, ease: 'power3.out' });
      el.addEventListener('mousemove', e => { const b = el.getBoundingClientRect(); x((e.clientX - b.left - b.width / 2) * .28); y((e.clientY - b.top - b.height / 2) * .38); });
      el.addEventListener('mouseleave', () => { gsap.to(el, { x: 0, y: 0, duration: .9, ease: 'elastic.out(1,.4)' }); });
    });
  }

  function cursor(gsap) {
    const c = document.createElement('div'); c.id = 'ds-cursor'; c.setAttribute('aria-hidden', 'true'); c.textContent = 'Ver case';
    document.body.appendChild(c);
    const x = gsap.quickTo(c, 'left', { duration: .5, ease: 'power3.out' }), y = gsap.quickTo(c, 'top', { duration: .5, ease: 'power3.out' });
    addEventListener('mousemove', e => { x(e.clientX); y(e.clientY); c.classList.toggle('on', !!e.target.closest && !!e.target.closest('a.ds-media') && !document.body.classList.contains('ds-menu-open')); }, { passive: true });
    document.addEventListener('mouseleave', () => c.classList.remove('on'));
  }

  // Liquid distortion nos cards [data-liquid]: um único canvas WebGL2 que acompanha o card em hover
  function liquid() {
    const cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none;opacity:0;display:block';
    const gl = cv.getContext('webgl2', { alpha: true, premultipliedAlpha: false, antialias: true });
    if (!gl) return;
    const VS = '#version 300 es\nin vec2 a;out vec2 v;void main(){v=a*.5+.5;gl_Position=vec4(a,0.,1.);}';
    const FS = `#version 300 es
precision highp float;
uniform vec2 u_res;uniform vec2 u_mouse;uniform float u_hover;uniform float u_time;uniform vec4 u_rip[8];uniform int u_n;
in vec2 v;out vec4 o;
float h(vec2 p){p=fract(p*vec2(234.34,435.345));p+=dot(p,p+34.23);return fract(p.x*p.y);}
float nz(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*nz(p);p=p*2.+.13;a*=.5;}return s;}
float pat(vec2 w){vec2 q=w*u_res/22.;vec2 g=abs(fract(q)-.5);float ln=smoothstep(.455,.5,max(g.x,g.y));vec2 c=abs(fract(q+.5)-.5);float dt=1.-smoothstep(.05,.11,length(c));return max(ln*.55,dt*.9);}
void main(){
  vec2 uv=v;float asp=u_res.x/u_res.y;vec2 d=uv-u_mouse;d.x*=asp;float dist=length(d);float t=u_time*.6;
  vec2 dir=normalize(d+1e-4);dir.x/=asp;
  float wave=exp(-dist*4.5)*u_hover;
  vec2 w=uv+dir*sin(dist*22.-t*4.)*wave*.035;
  w+=(vec2(fbm(uv*2.5+t*.3),fbm(uv*2.5+vec2(5.2,1.3)+t*.3))-.5)*.014*(.4+u_hover);
  for(int i=0;i<8;i++){if(i>=u_n)break;vec4 r=u_rip[i];vec2 rd=uv-r.xy;rd.x*=asp;float rl=length(rd);float s=r.w*(1.-r.z);w+=normalize(rd+1e-4)*sin(rl*30.-r.z*10.)*exp(-rl*6.-r.z*4.)*s*.045;}
  float ab=u_hover*.012*(1.-exp(-dist*3.));
  vec3 p=vec3(pat(w+dir*ab),pat(w),pat(w-dir*ab));
  vec3 base=vec3(.914,.906,.882);vec3 ink=vec3(.184,.294,.941);
  vec3 col=mix(base,ink,p*.5);
  col+=vec3(.24,.42,1.)*exp(-dist*dist*7.)*u_hover*.16;
  col+=(h(uv*1200.+t*.1)-.5)*.025;
  float vig=1.-smoothstep(.35,1.1,length((uv-.5)*1.3));
  col=mix(base,col,mix(.6,1.,vig));
  o=vec4(clamp(col,0.,1.),1.);
}`;
    const sh = (t, s) => { const x = gl.createShader(t); gl.shaderSource(x, s); gl.compileShader(x); if (!gl.getShaderParameter(x, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(x)); return null; } return x; };
    const vs = sh(gl.VERTEX_SHADER, VS), fs = sh(gl.FRAGMENT_SHADER, FS); if (!vs || !fs) return;
    const pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.linkProgram(pr); gl.useProgram(pr);
    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = n => gl.getUniformLocation(pr, n);
    const u = { res: U('u_res'), mouse: U('u_mouse'), hover: U('u_hover'), time: U('u_time'), rip: U('u_rip'), n: U('u_n') };
    let card = null, raf = 0, time = 0, hover = 0, target = 0, ripples = [];
    const mouse = { x: .5, y: .5 }, aim = { x: .5, y: .5 };
    const size = () => { if (!card) return; const r = card.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2); cv.width = Math.max(1, Math.round(r.width * dpr)); cv.height = Math.max(1, Math.round(r.height * dpr)); };
    const point = e => { const r = card.getBoundingClientRect(); aim.x = (e.clientX - r.left) / r.width; aim.y = 1 - (e.clientY - r.top) / r.height; };
    const loop = () => {
      time += .016; mouse.x += (aim.x - mouse.x) * .08; mouse.y += (aim.y - mouse.y) * .08; hover += (target - hover) * .07;
      ripples.forEach(r => r.age += .012); ripples = ripples.filter(r => r.age < 1);
      const rd = new Float32Array(32); ripples.forEach((r, i) => rd.set([r.x, r.y, r.age, 1], i * 4));
      gl.viewport(0, 0, cv.width, cv.height);
      gl.uniform2f(u.res, cv.width, cv.height); gl.uniform2f(u.mouse, mouse.x, mouse.y); gl.uniform1f(u.hover, hover); gl.uniform1f(u.time, time);
      gl.uniform4fv(u.rip, rd); gl.uniform1i(u.n, ripples.length);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      cv.style.opacity = Math.min(1, hover * 1.15).toFixed(3);
      if (target === 0 && hover < .004 && !ripples.length) { raf = 0; cv.style.opacity = '0'; return; }
      raf = requestAnimationFrame(loop);
    };
    const run = () => { if (!raf) raf = requestAnimationFrame(loop); };
    document.addEventListener('mouseover', e => {
      const c = e.target.closest && e.target.closest('[data-liquid]');
      if (!c || c === card && cv.isConnected) return;
      card = c; hover = 0; ripples = []; c.prepend(cv); size(); point(e); mouse.x = aim.x; mouse.y = aim.y; target = 1; run();
    });
    document.addEventListener('mouseout', e => { if (card && card.contains(e.target) && !card.contains(e.relatedTarget)) { target = 0; run(); } });
    document.addEventListener('mousemove', e => { if (card && target) point(e); }, { passive: true });
    document.addEventListener('click', e => { if (card && card.contains(e.target)) { point(e); ripples.push({ x: aim.x, y: aim.y, age: 0 }); if (ripples.length > 8) ripples.shift(); run(); } });
    addEventListener('resize', size);
  }

  // Menu em tela cheia
  function buildMenu(gsap, Split) {
    const toggles = document.querySelectorAll('[data-menu-toggle]');
    if (!toggles.length) return;
    const m = document.createElement('div'); m.id = 'ds-menu'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); m.setAttribute('aria-label', 'Menu');
    const corner = pos => `<span style="position:absolute;${pos};width:11px;height:11px;background:linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat"></span>`;
    m.innerHTML = `
<div style="max-width:1360px;width:100%;margin:0 auto;padding:0 clamp(20px,3vw,40px);height:64px;flex:none;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #22272F">
  <span class="ds-mono">Menu</span>
  <button data-menu-close style="height:32px;padding:0 12px;display:flex;align-items:center;gap:10px;border:1px solid #2C323B;border-radius:4px;background:transparent;color:#ECEBE6;font:500 12px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;text-transform:uppercase;cursor:pointer">Fechar<span aria-hidden="true" style="font-size:14px">✕</span></button>
</div>
<div style="max-width:1360px;width:100%;margin:0 auto;padding:clamp(32px,5vw,64px) clamp(20px,3vw,40px);flex:1;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:clamp(32px,5vw,80px)" class="ds-grid">
  <div style="display:flex;flex-direction:column;gap:clamp(32px,4vw,56px);min-width:0">
    <nav class="ds-list" style="display:flex;flex-direction:column;gap:clamp(4px,1vw,12px)">
      <a class="ds-big" href="${H('#trabalhos')}"><span class="ds-mono" style="color:#6E7681">01</span><span data-split>Trabalhos</span></a>
      <a class="ds-big" href="${ROUTES.sobre}"><span class="ds-mono" style="color:#6E7681">02</span><span data-split>Sobre</span></a>
      <a class="ds-big" href="${H('#formacao')}"><span class="ds-mono" style="color:#6E7681">03</span><span data-split>Formação</span></a>
      <a class="ds-big" href="${ROUTES.contato}"><span class="ds-mono" style="color:#6E7681">04</span><span data-split>Contato</span></a>
    </nav>
    <div style="display:flex;flex-direction:column;gap:12px">
      <span class="ds-mono">Cases</span>
      <div class="ds-list" style="display:flex;flex-direction:column">
        ${CASES.map((c, i) => `<a class="ds-case" data-case="${i}" href="${c.href}"><span class="ds-mono" style="color:#6E7681">${c.n}</span><span style="font-size:clamp(20px,2vw,28px);font-weight:500;letter-spacing:-.025em">${c.name}</span><span class="ds-mono">${c.tag}</span></a>`).join('')}
      </div>
    </div>
  </div>
  <div class="ds-prev" style="position:relative;align-self:stretch;min-height:320px;border:1px solid #22272F;background:#121519">
    <div style="position:absolute;inset:0;overflow:hidden">${CASES.map((c, i) => `<img src="${asset(c.img)}" alt="" data-prev="${i}" class="${i === 0 ? 'on' : ''}">`).join('')}</div>
    ${corner('left:-6px;top:-6px')}${corner('right:-6px;top:-6px')}${corner('left:-6px;bottom:-6px')}${corner('right:-6px;bottom:-6px')}
  </div>
</div>
<div style="max-width:1360px;width:100%;margin:0 auto;padding:20px clamp(20px,3vw,40px) 28px;flex:none;display:flex;flex-wrap:wrap;justify-content:space-between;gap:16px;border-top:1px solid #22272F" class="ds-mono">
  <a href="mailto:derik@devsehn.com" style="color:#ECEBE6">derik@devsehn.com</a>
  <span style="display:flex;gap:24px"><a href="#" style="color:#ECEBE6">LinkedIn ↗</a><a href="https://github.com/DerikSehn" target="_blank" rel="noopener" style="color:#ECEBE6">GitHub ↗</a><a href="${CV_URL}" target="_blank" rel="noopener" style="color:#ECEBE6">CV ↓</a></span>
</div>`;
    document.body.appendChild(m);
    const mq = matchMedia('(max-width: 860px)');
    const grid = m.querySelector('.ds-grid');
    const layout = () => { grid.style.gridTemplateColumns = mq.matches ? 'minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1fr)'; };
    layout(); mq.addEventListener('change', layout);
    const prevs = m.querySelectorAll('[data-prev]');
    m.querySelectorAll('.ds-case').forEach(a => a.addEventListener('mouseenter', () => prevs.forEach(p => p.classList.toggle('on', p.dataset.prev === a.dataset.case))));
    const splits = [...m.querySelectorAll('[data-split]')].map(el => pad(Split.create(el, { type: 'chars', mask: 'chars' })));
    const prevFrame = m.querySelector('.ds-prev');
    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.inOut' } })
      .set(m, { visibility: 'visible' })
      .to(m, { clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)', duration: RM ? .01 : .8 }, 0)
      .from(splits.flatMap(s => s.chars), { yPercent: -120, duration: RM ? .01 : .6, stagger: .012, ease: 'power2.out' }, RM ? 0 : .28)
      .from(m.querySelectorAll('.ds-case, .ds-mono'), { y: 14, opacity: 0, duration: RM ? .01 : .5, stagger: .025, ease: 'power2.out' }, RM ? 0 : .4)
      .fromTo(prevFrame, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: RM ? .01 : 1, ease: 'expo.inOut' }, RM ? 0 : .3);
    let lastFocus = null;
    const open = () => {
      lastFocus = document.activeElement; document.body.classList.add('ds-menu-open'); document.documentElement.style.overflow = 'hidden'; window.dsLenis && window.dsLenis.stop();
      toggles.forEach(t => t.setAttribute('aria-expanded', 'true')); tl.timeScale(1).play();
      setTimeout(() => m.querySelector('[data-menu-close]').focus(), 300);
    };
    const close = () => {
      document.body.classList.remove('ds-menu-open'); document.documentElement.style.overflow = ''; window.dsLenis && window.dsLenis.start();
      toggles.forEach(t => t.setAttribute('aria-expanded', 'false')); tl.timeScale(1.6).reverse();
      lastFocus && lastFocus.focus && lastFocus.focus();
    };
    tl.eventCallback('onReverseComplete', () => gsap.set(m, { visibility: 'hidden' }));
    document.addEventListener('click', e => { const t = e.target.closest && e.target.closest('[data-menu-toggle]'); if (t) { e.preventDefault(); open(); } });
    m.querySelector('[data-menu-close]').addEventListener('click', close);
    m.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { if (a.getAttribute('href').includes('#')) close(); }));
    addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('ds-menu-open')) close(); });
    toggles.forEach(t => {
      const lines = t.querySelectorAll('[data-ml]');
      t.addEventListener('mouseenter', () => !RM && gsap.to(lines, { scaleX: (i) => i ? .6 : 1, transformOrigin: '100% 50%', duration: .4, ease: 'power3.out' }));
      t.addEventListener('mouseleave', () => gsap.to(lines, { scaleX: 1, duration: .4, ease: 'power3.out' }));
    });
  }
})();
