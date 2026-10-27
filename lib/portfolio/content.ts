import type { Locale } from "./paths"

export interface CaseDecision {
  title: string
  description: string
}

export interface CaseStudy {
  slug: string
  title: string
  domain: string
  summary: string
  caseDescription: string
  overview: string
  role: string
  image: string
  imageAlt: string
  contributionsTitle: string
  contributions: string[]
  decisionsTitle: string
  decisions: CaseDecision[]
  projectSummary: string
  contactPrompt: string
  stack: string[]
}

export const caseStudies: Record<Locale, CaseStudy[]> = {
  "pt-BR": [
    {
      slug: "eli-control",
      title: "Eli Control",
      domain: "Monitoramento industrial · Desenvolvimento full-stack",
      summary:
        "Uma plataforma de monitoramento para refrigeração industrial, com telemetria de equipamentos, alarmes, dashboards e gestão de empresas.",
      caseDescription:
        "Uma plataforma de monitoramento de refrigeração industrial com telemetria de equipamentos, alarmes, dashboards e operações multiempresa.",
      overview:
        "O Eli Control reúne dados de equipamentos de refrigeração e informações de alarmes em uma plataforma de monitoramento. O sistema atende várias empresas, diferentes configurações de equipamentos e rotinas diárias de acompanhamento.",
      role: "Engenheiro full-stack",
      image: "/cases/eli-control.svg",
      imageAlt: "Ilustração de uma instalação industrial de refrigeração.",
      contributionsTitle: "Construção da plataforma de monitoramento",
      contributions: [
        "Desenvolvimento e manutenção de funcionalidades no front-end, back-end e infraestrutura.",
        "Integrações MQTT para comunicação com equipamentos.",
        "Dashboards com leituras de sensores e status operacional.",
        "Gestão de alarmes e organização de sensores.",
        "Acesso e configurações para múltiplas empresas.",
        "Automação de VPN para apoiar a conectividade dos equipamentos.",
      ],
      decisionsTitle: "Desenvolvimento orientado a equipamentos e operações",
      decisions: [
        {
          title: "Separação por empresa",
          description:
            "Organizei dados de monitoramento e configurações para cada empresa e seus equipamentos.",
        },
        {
          title: "Sensores configuráveis por modelo",
          description:
            "Adaptei a apresentação e a organização dos sensores aos modelos e às configurações dos equipamentos.",
        },
        {
          title: "Integração entre sistemas",
          description:
            "Integrei telemetria e automação de rede ao fluxo de monitoramento.",
        },
      ],
      projectSummary:
        "O Eli Control reúne dados de equipamentos, gestão de alarmes e interfaces operacionais em uma aplicação. O desenvolvimento abrange funcionalidades do produto, APIs, integrações e implantação.",
      contactPrompt: "Trabalhando em um sistema parecido?",
      stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "MQTT"],
    },
    {
      slug: "eli-pecas",
      title: "Eli Peças",
      domain: "Comércio eletrônico · Desenvolvimento full-stack",
      summary:
        "Catálogo de peças e fluxo de compra com carrinho de visitante e consultas de preço pelo WhatsApp vinculadas ao produto.",
      caseDescription:
        "Um catálogo de peças com fluxo de compra que permite montar o carrinho antes do login e consultar preços diretamente pelo WhatsApp.",
      overview:
        "O Eli Peças permite que clientes naveguem pelo catálogo e preparem pedidos sem precisar criar uma conta antes de começar.",
      role: "Engenheiro full-stack",
      image: "/cases/eli-pecas.svg",
      imageAlt: "Ilustração de um catálogo de peças, carrinho e consulta de preço.",
      contributionsTitle: "Um fluxo de compra mais flexível",
      contributions: [
        "Carrinho de visitante: clientes podem adicionar produtos antes de entrar na conta.",
        "Continuidade do carrinho: os produtos selecionados continuam disponíveis após a autenticação.",
        "Consulta por produto: pedidos de preço pelo WhatsApp mantêm a identificação da peça.",
      ],
      decisionsTitle: "Manter o processo de compra em andamento",
      decisions: [
        {
          title: "Começar sem criar uma conta",
          description:
            "Permitir que clientes reúnam produtos antes de decidir se querem se cadastrar ou entrar na conta.",
        },
        {
          title: "Preservar o carrinho",
          description:
            "Manter os produtos selecionados durante a autenticação.",
        },
        {
          title: "Levar os detalhes do produto à conversa",
          description:
            "Incluir a peça selecionada na consulta do WhatsApp para que o cliente não precise explicar de qual produto está falando.",
        },
      ],
      projectSummary:
        "O fluxo oferece tanto compras pelo carrinho quanto consultas diretas de preço, mantendo o produto identificado ao longo da jornada.",
      contactPrompt: "Tem um projeto de e-commerce para conversar?",
      stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "WhatsApp"],
    },
  ],
  en: [
    {
      slug: "eli-control",
      title: "Eli Control",
      domain: "Industrial monitoring · Full-stack development",
      summary:
        "A monitoring platform for industrial refrigeration, bringing equipment telemetry, alarms, dashboards, and company management into one system.",
      caseDescription:
        "An industrial refrigeration monitoring platform built around equipment telemetry, alarms, dashboards, and multi-company operations.",
      overview:
        "Eli Control brings refrigeration equipment data and alarm information into a single monitoring platform. The system supports multiple companies, equipment configurations, and day-to-day monitoring workflows.",
      role: "Full-stack Engineer",
      image: "/cases/eli-control.svg",
      imageAlt: "Illustration of an industrial refrigeration facility.",
      contributionsTitle: "Building the monitoring platform",
      contributions: [
        "Developed and maintained application features across the frontend, backend, and infrastructure.",
        "Built MQTT integrations for equipment communication.",
        "Created dashboards for sensor readings and operational status.",
        "Worked on alarm management and sensor organization.",
        "Implemented multi-company access and configuration.",
        "Automated VPN connections to support equipment connectivity.",
      ],
      decisionsTitle: "Designed around equipment and operations",
      decisions: [
        {
          title: "Company-level separation",
          description:
            "Organized monitoring data and configuration around individual companies and their equipment.",
        },
        {
          title: "Configurable sensor interfaces",
          description:
            "Adapted sensor presentation and organization to equipment models and their configurations.",
        },
        {
          title: "Connected systems",
          description:
            "Integrated telemetry and network automation into the wider monitoring workflow.",
        },
      ],
      projectSummary:
        "Eli Control combines equipment data, alarm handling, and operational interfaces in one application, with development spanning product features, APIs, integrations, and deployment.",
      contactPrompt: "Working on a similar system?",
      stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "MQTT"],
    },
    {
      slug: "eli-pecas",
      title: "Eli Peças",
      domain: "E-commerce · Full-stack development",
      summary:
        "A parts catalog and shopping flow with guest carts, account continuity, and product-specific price inquiries through WhatsApp.",
      caseDescription:
        "A parts catalog with a checkout flow that lets customers build a cart before signing in and request prices directly through WhatsApp.",
      overview:
        "Eli Peças supports customers browsing parts and preparing purchase inquiries without requiring an account before they start.",
      role: "Full-stack Engineer",
      image: "/cases/eli-pecas.svg",
      imageAlt: "Illustration of a parts catalog, shopping cart, and inquiry.",
      contributionsTitle: "A more flexible buying flow",
      contributions: [
        "Guest cart: customers can add products before signing in.",
        "Cart persistence: selected products remain available when customers authenticate.",
        "Product-specific inquiries: WhatsApp price requests retain the context of the selected part.",
      ],
      decisionsTitle: "Keep the buying process moving",
      decisions: [
        {
          title: "No account required to start",
          description:
            "Let customers collect products before deciding to register or sign in.",
        },
        {
          title: "Preserve the cart",
          description:
            "Maintain the customer's selections through authentication.",
        },
        {
          title: "Keep product details in the conversation",
          description:
            "Carry the selected part into the WhatsApp inquiry so customers don't have to explain which product they mean from scratch.",
        },
      ],
      projectSummary:
        "The buying flow supports both cart-based shopping and direct price inquiries, with product context maintained throughout the process.",
      contactPrompt: "Have an e-commerce project to discuss?",
      stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "WhatsApp"],
    },
  ],
}

export function getCaseStudy(
  slug: string,
  locale: Locale,
): CaseStudy | undefined {
  return caseStudies[locale].find((study) => study.slug === slug)
}

export const experience = {
  "pt-BR": [
    {
      id: "ford",
      organization: "Ford Motor Company",
      role: "Software Engineer",
      period: "Fev 2025–atual",
      description:
        "Desenvolvimento de uma plataforma global de logística com Angular, Spring Boot, PostgreSQL e Kubernetes no GCP.",
    },
    {
      id: "devsehn",
      organization: "DevSehn",
      role: "Engenheiro de software freelancer",
      period: "Mar 2024–atual",
      description:
        "Desenvolvimento e manutenção de aplicações web, APIs, integrações e software de negócio para clientes.",
    },
    {
      id: "unimed",
      organization: "Unimed Vale do Caí",
      role: "Desenvolvedor full-stack",
      period: "Ago 2022–Mar 2024",
      description:
        "Desenvolvi um módulo de manutenção preventiva e contribuí para o UniChat, usado por mais de 850 colaboradores.",
    },
    {
      id: "ifsul",
      organization: "IFSUL",
      role: "Desenvolvedor de projetos técnicos",
      period: "2018–2022",
      description:
        "Participei de projetos de pesquisa e inovação em software, robótica e tecnologia aplicada.",
    },
  ],
  en: [
    {
      id: "ford",
      organization: "Ford Motor Company",
      role: "Software Engineer",
      period: "Feb 2025–Present",
      description:
        "Developing a global logistics platform using Angular, Spring Boot, PostgreSQL, and Kubernetes on GCP.",
    },
    {
      id: "devsehn",
      organization: "DevSehn",
      role: "Freelance Software Engineer",
      period: "Mar 2024–Present",
      description:
        "Building and maintaining web applications, APIs, integrations, and business software for clients.",
    },
    {
      id: "unimed",
      organization: "Unimed Vale do Caí",
      role: "Full-stack Developer",
      period: "Aug 2022–Mar 2024",
      description:
        "Developed a preventive maintenance module and contributed to UniChat, used by more than 850 employees.",
    },
    {
      id: "ifsul",
      organization: "IFSUL",
      role: "Technical Project Developer",
      period: "2018–2022",
      description:
        "Worked on research and innovation projects involving software, robotics, and applied technology.",
    },
  ],
}

export const skillGroups = {
  "pt-BR": [
    {
      title: "Front-end",
      skills: ["TypeScript", "React", "Next.js", "Angular"],
    },
    {
      title: "Back-end",
      skills: ["Node.js", "NestJS", "Java", "Spring Boot", "REST APIs"],
    },
    {
      title: "Dados e infraestrutura",
      skills: ["PostgreSQL", "Prisma", "AWS", "GCP", "Docker", "Kubernetes", "CI/CD"],
    },
  ],
  en: [
    {
      title: "Frontend",
      skills: ["TypeScript", "React", "Next.js", "Angular"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "NestJS", "Java", "Spring Boot", "REST APIs"],
    },
    {
      title: "Data and infrastructure",
      skills: ["PostgreSQL", "Prisma", "AWS", "GCP", "Docker", "Kubernetes", "CI/CD"],
    },
  ],
}
