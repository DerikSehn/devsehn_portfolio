import type { Metadata } from "next";
import Script from "next/script";
import { ClarityAnalytics } from "@/components/observability/clarity-analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevSehn · Derik Sehn, engenheiro de software",
  description: "Portfólio de Derik Sehn: sistemas corporativos, cloud, DevOps e integrações para indústria, logística, comércio e saúde.",
};

// Cobre a página com o azul do loader antes do primeiro paint, como no design
// (lá o conteúdo só aparece depois que o motion.js roda). Se o motion.js não
// carregar, a capa sai sozinha.
const PRE_PAINT = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.classList.add('ds-cover','ds-pre');setTimeout(function(){if(!window.__dsMotion)d.classList.remove('ds-cover','ds-pre')},8000)}catch(e){}})();`;
const PRE_PAINT_CSS = `html.ds-cover::after{content:'';position:fixed;inset:0;z-index:100;background:#2F4BF0}html.ds-pre [data-reveal],html.ds-pre section[data-screen-label]:first-of-type h1,html.ds-pre header>div>*{opacity:0}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <style dangerouslySetInnerHTML={{ __html: PRE_PAINT_CSS }} />
        <script dangerouslySetInnerHTML={{ __html: PRE_PAINT }} />
      </head>
      <body>
        {children}
        {/* Scripts globais do design: PT/EN e motion (loader, menu, transições, GSAP). */}
        <Script src="/i18n.js" strategy="afterInteractive" />
        <Script src="/motion.js" strategy="afterInteractive" />
        <ClarityAnalytics />
      </body>
    </html>
  );
}
