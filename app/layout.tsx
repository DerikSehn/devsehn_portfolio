import type { Metadata } from "next";
import { ClarityAnalytics } from "@/components/observability/clarity-analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevSehn · Derik Sehn, engenheiro de software",
  description: "Portfólio de Derik Sehn: sistemas corporativos, cloud, DevOps e integrações para indústria, logística, comércio e saúde.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Geist:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&display=swap" />
      </head>
      <body>
        {children}
        <ClarityAnalytics />
      </body>
    </html>
  );
}
