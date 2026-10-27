# DevSehn Portfolio Experience

## Goal and first delivery

Build a bilingual portfolio for technical recruiters, engineering leaders, and potential clients. Identify Derik Sehn as a software engineer who builds web applications and backend systems, then make his projects, experience, CV, and contact details easy to find.

The first delivery includes the Portuguese home page, an English version, work index, Eli Control and Eli Peças case studies, About, and Contact. The Lab and previous Tools pages are not public routes and must not be reintroduced.

## Product decisions

- Portuguese is the default locale at `/`; English lives under `/en`.
- Locale switching preserves the equivalent route and case slug.
- The interactive signal field appears only as a visual element in the home-page hero.
- WebGL is progressive enhancement. The headline, project links, and accessible HTML representation remain usable without WebGL or animation.
- Use concise, specific copy about the engineer, technical focus, projects, and experience. Do not use abstract marketing phrases to describe engineering work.
- Native scrolling remains in control. Do not add a blocking preloader, scroll hijacking, or motion that is required to understand content.
- Project content uses only information supported by the supplied CV and Eli project context. Do not invent metrics, testimonials, client approvals, or private operational details.
- Keep the public experience list to dates that can be presented clearly; the overlapping Ford and Maxxi dates in the supplied CV must be confirmed before adding Maxxi to the chronology.
- The contact form sends only after explicit submit and reports success or failure in the UI.
- The old `/tools` routes and old portfolio components are excluded.

## User flows

1. A visitor lands on `/`, sees a short personal introduction and selected projects, and can open Eli Control, browse all work, or view the CV.
2. A visitor can navigate between Work, About, and Contact, then switch locale without losing the current page when an equivalent route exists.
3. A visitor can read each case overview, contributions, technical decisions, project summary, and next-project link.
4. A visitor can review experience and download the CV from About.
5. A visitor can submit the contact form and receive an accessible success or recovery message.

## Acceptance criteria

| ID | Acceptance criterion |
| --- | --- | --- |
| AC-1 | `/` presents Derik as a software engineer building web applications and backend systems, includes a short personal introduction, and links directly to Work, Contact, and the CV. |
| AC-2 | The home page shows Eli Control as the featured industrial-software project, followed by Eli Peças, selected projects, experience, and a direct contact invitation. |
| AC-3 | Work index, both case studies, About, and Contact routes render with route-specific titles and concrete project or professional copy. |
| AC-4 | Case studies use the sections Overview / The project, What I worked on, Technical decisions, Project summary, and Next project; facts include role and stack. |
| AC-5 | About presents a short introduction, professional experience, Frontend / Backend / Data and infrastructure, education, and CV download. |
| AC-6 | Contact describes the available contact channels; fields have labels and validation, and submission success or failure is announced. |
| AC-7 | `/en` renders English content with `html[lang="en"]`; locale switching preserves the equivalent route when one exists. |
| AC-8 | The hero signal field remains accessible when WebGL is unavailable or reduced motion is requested; mobile navigation works without horizontal overflow. |
| AC-9 | `/lab`, `/en/lab`, and `/tools` are not public routes; Lab is absent from navigation and sitemap. |
| AC-10 | Each public route has a meaningful title and description, and CV and primary navigation links work. |

## Out of scope

- Reusing or restoring the old portfolio components and Tools pages.
- Live client telemetry, private company screenshots, and undisclosed operational metrics.
- A database or authentication system for the portfolio.
- A new analytics system.
