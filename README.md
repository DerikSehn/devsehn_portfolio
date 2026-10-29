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

## Estrutura

```
app/
  layout.tsx                 fontes Google + metadados
  globals.css                Tailwind v4 (sem preflight) + reset mínimo
  page.tsx / view.tsx        landing
  cases/<slug>/page.tsx      metadados da rota (server)
  cases/<slug>/view.tsx      markup da página ("use client")
lib/
  dc.ts                      DCLogic + useDC: liga a lógica de classe ao React
  logic/<pagina>.ts          estado, carrossel, filtros, reveal, parallax, contadores
public/assets/               imagens e vídeos
```

## Como foi convertido

- Markup e estilos inline vieram 1:1 dos designs, então o visual é o mesmo do protótipo.
- Hover/active viraram classes `.dhN` no `<style>` de cada página.
- A lógica de cada página (carrossel do hero, filtros de cursos, parallax, reveal no scroll, contadores, autoplay de vídeo) está em `lib/logic/`, sem alterações de comportamento.
- Tailwind v4 está instalado sem o preflight, para não resetar o design. Dá para usar utilitários em código novo.

## Pendências

- PT/EN ainda só alterna estado. Sugestão: `next-intl` com `app/[locale]/...`.
- Links de LinkedIn, GitHub, CV e "Mais sobre mim" apontam para `#`.
