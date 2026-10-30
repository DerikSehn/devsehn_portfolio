# DevSehn · Portfólio (Next.js 15)

Versão 2. Gerada a partir dos designs atuais (landing com bento de cases, parallax, Courses & Certifications, e os cinco cases).

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Microsoft Clarity

Copie `.env.example` para `.env.local` e configure `NEXT_PUBLIC_CLARITY_PROJECT_ID` com o ID próprio deste portfólio.

```bash
NEXT_PUBLIC_CLARITY_PROJECT_ID=seu_project_id
```

O catálogo de páginas de analytics pode ser regenerado e validado com:

```bash
npm run analytics:catalog:generate
npm run analytics:catalog:check
```

## Rotas

- `/` ← DevSehn Portfolio v2
- `/cases/eli-control` ← Eli Control Case
- `/cases/eli-pecas` ← Eli Pecas Case
- `/cases/cultura-verde` ← Cultura Verde Case
- `/cases/daniela-bosing` ← Daniela Bosing Case
- `/cases/ford` ← Ford Case

## Atualizar a partir do design

As páginas são geradas 1:1 a partir do projeto de design (`.dc.html`). Para sincronizar depois de mudar o design:

1. Exporte/baixe a pasta do projeto (a que tem os `.dc.html`, `i18n.js`, `motion.js` e `assets/`).
2. Rode:

```bash
npm run design:sync -- "C:/caminho/para/a/pasta-do-design"
```

Se a pasta do design estiver em `./design`, basta `npm run design:sync`.

O script regenera `app/**/view.tsx`, `lib/logic/*.ts`, `public/i18n.js`, `public/motion.js` e `public/assets/`,
cria o `page.tsx` de rotas novas e regenera o catálogo de analytics do Clarity.
Não mexe em `layout.tsx`, em `page.tsx` que já existem nem na config da Vercel.

### Página nova no design

Adicione uma linha em `design.routes.json` e rode `npm run design:sync`:

```json
"Blog.dc.html": { "route": "/blog", "title": "Blog · DevSehn" }
```

Arquivos `.dc.html` que não são páginas do site (rascunhos, versões antigas) vão em `ignore`.
No fim, o script avisa se:

- existe página no design fora do mapa;
- uma página do mapa não está na pasta do design;
- o menu do `motion.js` aponta para uma rota que não existe.

## Estrutura

```
app/
  layout.tsx                 Clarity, scripts globais (i18n.js, motion.js) e capa anti-flash do loader
  icon.svg                   favicon do design
  globals.css                Tailwind v4 (sem preflight) + reset mínimo
  page.tsx / view.tsx        landing
  cases/<slug>/page.tsx      metadados da rota (server)
  cases/<slug>/view.tsx      markup da página ("use client", GERADO)
  sobre/, contato/           mesmas regras das rotas de case
lib/
  dc.ts                      DCLogic + useDC: liga a lógica de classe ao React
  logic/<pagina>.ts          lógica de cada página (GERADO)
public/
  i18n.js                    PT/EN por dicionário (GERADO)
  motion.js                  loader, menu, transições, GSAP/Lenis via CDN (GERADO)
  assets/                    imagens e vídeos
design.routes.json           mapa página do design → rota
scripts/
  sync-design.mjs            conversor .dc.html → Next.js
```

## Como a conversão preserva o visual

- Markup, estilos inline e textos vêm 1:1 do design; o conversor segue as mesmas regras do runtime do design (espaços em branco, `<span class="sc-interp">` nos valores interpolados, `style-hover` como classe com `!important`).
- Fontes Google carregadas por página, com os mesmos pesos do design.
- `i18n.js` e `motion.js` rodam depois da hidratação; uma capa azul (a mesma do loader) cobre a página antes do primeiro paint, como no design.
- Comparação pixel a pixel (1440px e 390px, sem animação) entre o design e as páginas geradas: idênticas, exceto o quadro dos vídeos.

## Pendências

- Links de LinkedIn, GitHub e CV apontam para `#` (como no design).
