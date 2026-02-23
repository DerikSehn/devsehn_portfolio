import { AnalyticsTracker } from "@/components/analytics-tracker"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/ui/custom-cursor"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dérik Sehn - Software Engineer Portfolio",
  description: "Software Engineer at Ford Motor Company specializing in Angular, Spring Boot, and modern cloud infrastructure. Delivering enterprise-grade solutions with passion for innovation.",
  keywords: "Software Engineer, Ford, Angular, Spring Boot, Next.js, TypeScript, DevOps, Kubernetes, Full Stack Developer",
  authors: [{ name: "Dérik Sehn" }],
  openGraph: {
    title: "Dérik Sehn - Software Engineer Portfolio",
    description: "Software Engineer at Ford Motor Company specializing in Angular, Spring Boot, and modern cloud infrastructure.",
    url: "https://deriksehn.dev",
    siteName: "Dérik Sehn Portfolio",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
           <CustomCursor />
           <AnalyticsTracker />
           <main className=" text-foreground relative min-h-screen overflow-hidden">
           <Header />
          {children}
        </main>
      </ThemeProvider>
      </body>
    </html>
  )
}

