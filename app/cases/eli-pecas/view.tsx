'use client';
/* eslint-disable */
// GERADO por scripts/sync-design.mjs a partir de "Eli Pecas Case.dc.html". Não edite à mão:
// altere o design e rode `npm run design:sync -- <pasta-do-design>`.
import React from 'react';
import { useDC } from '@/lib/dc';
import Logic from '@/lib/logic/eli-pecas';

const CSS = "@media (max-width:860px){header nav{display:none!important}}\nhtml{scroll-behavior:smooth}\nbody{margin:0;background:#0B0E13;font-family:'Schibsted Grotesk',system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:inherit;text-decoration:none}\na:hover{color:#3D6BFF}\n*{box-sizing:border-box}\n::selection{background:#3D6BFF;color:#FFFFFF}\n.dh1:hover{color:#FFFFFF !important}\n.dh2:hover{color:#FFFFFF !important}\n.dh3:hover{color:#FFFFFF !important}\n.dh4:hover{color:#FFFFFF !important}\n.dh5:hover{border-color:#ECEBE6 !important}\n.dh6:hover{color:#ECEBE6 !important}\n.dh7:hover{color:#3D6BFF !important}\n.dh8:hover{color:#3D6BFF !important;border-color:#3D6BFF !important}\n.dh9:hover{color:#3D6BFF !important}\n.dh10:hover{color:#3D6BFF !important}\n.dh11:hover{color:#3D6BFF !important}\n.dh12:hover{color:#ECEBE6 !important}";

const FONTS: string[] = [
  "https://fonts.googleapis.com/css2?family=Geist:wght@300;600&display=swap",
  "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Raleway:wght@400;500;600;700&display=swap"
];

const DEFAULTS: Record<string, unknown> = {"motion":true,"showCallouts":true,"showDiagram":true};

// Valor interpolado no texto: o runtime do design o envolve em <span class="sc-interp">.
const H = (x: any) => (x === undefined || x === null || typeof x === 'boolean' ? null : <span className="sc-interp">{String(x)}</span>);

export default function EliPecasView(props: Record<string, unknown>) {
  const v: any = useDC(Logic, { ...DEFAULTS, ...props });
  return (
    <>
      {FONTS.map((href) => (
        <link key={href} rel="stylesheet" href={href} precedence="default" />
      ))}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{ background: "#0B0E13", color: "#ECEBE6", minHeight: "100vh", overflowX: "clip" }}>
        <header style={{ position: "sticky", top: "0", zIndex: "50", background: "#0B0E13", borderBottom: "1px solid #22272F" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
            {"\n    "}
            <a href={"/"} aria-label={"DevSehn, início"} style={{ display: "flex", alignItems: "center", gap: "9px", color: "#ECEBE6" }}>
              <svg viewBox={"12 10 42 44"} width={"23"} height={"24"} aria-hidden={"true"} style={{ display: "block", flex: "none" }}>
                <path fill={"#ECEBE6"} d={"M12 10H32A22 22 0 0 1 32 54H12V35H27.68A7 7 0 1 0 27.68 29H12Z"} />
                <circle cx={"34"} cy={"32"} r={"3.5"} fill={"#2F4BF0"} />
              </svg>
              <span style={{ fontFamily: "'Geist',system-ui,sans-serif", fontSize: "22px", lineHeight: "1", letterSpacing: "-0.04em" }}>
                <span style={{ fontWeight: "600" }}>
                  {"Dev"}
                </span>
                <span style={{ fontWeight: "300" }}>
                  {"Sehn"}
                </span>
              </span>
            </a>
            {"\n    "}
            <nav style={{ display: "flex", gap: "clamp(16px,2.4vw,36px)", flexWrap: "wrap", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {"\n      "}
              <a className={"dh1"} href={"/#trabalhos"} style={{ display: "flex", gap: "8px", color: "#C9CDD3" }}>
                <span style={{ color: "#6E7681" }}>
                  {"01"}
                </span>
                {"Trabalhos"}
              </a>
              {"\n      "}
              <a className={"dh2"} href={"/sobre"} style={{ display: "flex", gap: "8px", color: "#C9CDD3" }}>
                <span style={{ color: "#6E7681" }}>
                  {"02"}
                </span>
                {"Sobre"}
              </a>
              {"\n      "}
              <a className={"dh3"} href={"/contato"} style={{ display: "flex", gap: "8px", color: "#C9CDD3" }}>
                <span style={{ color: "#6E7681" }}>
                  {"03"}
                </span>
                {"Contato"}
              </a>
              {"\n      "}
              <a className={"dh4"} href={"https://docs.google.com/document/d/1bCk5xYPFQ3WOpzAvrsFbf4y7sXdSpJFS/edit?usp=sharing&ouid=107891843000990713036&rtpof=true&sd=true"} target={"_blank"} rel={"noopener"} style={{ display: "flex", gap: "8px", color: "#C9CDD3" }}>
                <span style={{ color: "#6E7681" }}>
                  {"↓"}
                </span>
                {"CV"}
              </a>
              {"\n    "}
            </nav>
            {"\n    "}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex", border: "1px solid #2C323B", borderRadius: "4px", overflow: "hidden", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", fontWeight: "500" }}>
                {"\n      "}
                <button onClick={v?.setPT} style={{ background: (`${v?.ptBg ?? ""}` as any), color: (`${v?.ptColor ?? ""}` as any), border: "none", cursor: "pointer", font: "inherit", padding: "6px 10px" }}>
                  {"PT"}
                </button>
                {"\n      "}
                <button onClick={v?.setEN} style={{ background: (`${v?.enBg ?? ""}` as any), color: (`${v?.enColor ?? ""}` as any), border: "none", cursor: "pointer", font: "inherit", padding: "6px 10px" }}>
                  {"EN"}
                </button>
                {"\n    "}
              </div>
              <button className={"dh5"} data-menu-toggle={""} aria-expanded={"false"} aria-label={"Abrir menu"} style={{ height: "32px", padding: "0 12px", display: "flex", alignItems: "center", gap: "10px", border: "1px solid #2C323B", borderRadius: "4px", background: "transparent", color: "#ECEBE6", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", transition: "border-color .2s" }}>
                {"Menu"}
                <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span data-ml={""} style={{ display: "block", width: "16px", height: "1px", background: "currentColor" }} />
                  <span data-ml={""} style={{ display: "block", width: "16px", height: "1px", background: "currentColor" }} />
                </span>
              </button>
            </div>
            {"\n  "}
          </div>
          {"\n  "}
          <span data-progress={""} style={{ position: "absolute", left: "0", bottom: "-1px", width: "100%", height: "1px", background: "#3D6BFF", transformOrigin: "0 50%", transform: "scaleX(0)" }} />
        </header>
        <section id={"top"} data-screen-label={"Case hero"} style={{ background: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(40px,6vw,80px)", paddingBottom: "clamp(56px,7vw,96px)", display: "flex", flexDirection: "column", gap: "clamp(36px,5vw,64px)" }}>
            {"\n    "}
            <div data-reveal={"fade"} style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", borderBottom: "1px solid #22272F", paddingBottom: "16px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
              {"\n      "}
              <a className={"dh6"} href={"/#trabalhos"} style={{ color: "#9AA1AB" }}>
                {"← Trabalhos"}
              </a>
              {"\n      "}
              <span>
                {"Case 02 · E-commerce de peças de refrigeração"}
              </span>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px,2vw,28px)", overflow: "hidden" }}>
              {"\n      "}
              <img data-reveal={"fade"} src={"/assets/elipecas/mark_white.png"} alt={""} style={{ height: "clamp(48px,7vw,104px)", width: "auto" }} />
              {"\n      "}
              <h1 data-reveal={"line"} data-delay={"80"} style={{ margin: "0", padding: "0.06em 0 0.24em", fontSize: "clamp(48px,8.6vw,132px)", lineHeight: "0.94", letterSpacing: "-0.045em", fontWeight: "500" }}>
                {"Eli Peças"}
              </h1>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "32px clamp(32px,5vw,96px)", alignItems: "flex-start" }}>
              {"\n      "}
              <p data-reveal={"fade"} data-delay={"200"} style={{ flex: "1.4 1 420px", maxWidth: "720px", margin: "0", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty", fontSize: "clamp(18px,1.6vw,21px)" }}>
                {"Loja online de peças e componentes de refrigeração comercial e industrial da Eli Refrigeração. Reúne catálogo, carrinho, pedidos e pagamentos em uma única plataforma, com "}
                <span style={{ color: "#ECEBE6" }}>
                  {"um painel que controla a vitrine e atende o cliente pelo WhatsApp"}
                </span>
                {"."}
              </p>
              {"\n      "}
              <dl data-reveal={"fade"} data-delay={"320"} style={{ flex: "1 1 320px", margin: "0", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", borderTop: "1px solid #22272F" }}>
                {"\n        "}
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Cliente"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Eli Refrigeração"}
                </dd>
                {"\n        "}
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Papel"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Engenharia de software full-stack"}
                </dd>
                {"\n        "}
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Entrega"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Loja, painel admin, API e integrações"}
                </dd>
                {"\n        "}
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Stack"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Next.js · NestJS · Prisma · Bull"}
                </dd>
                {"\n      "}
              </dl>
              {"\n    "}
            </div>
            {"\n    "}
            <figure style={{ flex: "1 1 100%", minWidth: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div data-reveal={"clip"} style={{ viewTransitionName: "case-media", position: "relative", border: "1px solid #22272F", background: "#0F1319" }}>
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <div data-fit={"1600"} style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                    <div style={{ position: "relative", width: "1600px", height: "900px", transformOrigin: "0 0", background: "#0F1319" }}>
                      <div style={{ position: "absolute", left: "56px", top: "50px" }}>
                        <div style={{ width: "1240px", height: "800px", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", background: "#FFFFFF", boxShadow: "0 40px 80px -30px rgba(0,0,0,0.45)" }}>
                          <div style={{ height: "38px", flex: "none", background: "#E7E9EF", borderBottom: "1px solid #D5D9E2", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px", fontFamily: "'Schibsted Grotesk',system-ui,sans-serif" }}>
                            <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57" }} />
                            <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FEBC2E" }} />
                            <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840" }} />
                            <div style={{ marginLeft: "18px", width: "420px", height: "24px", borderRadius: "6px", background: "#FFFFFF", fontSize: "12px", color: "#5D6B85", display: "flex", alignItems: "center", gap: "6px", padding: "0 10px" }}>
                              <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                <path d={"M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z"} />
                              </svg>
                              {"elipecas.com.br/admin/pedidos/EP-2026-0418"}
                            </div>
                          </div>
                          <div style={{ position: "relative", flex: "1", overflow: "hidden" }}>
                            <div style={{ position: "absolute", left: "0", top: "0", transform: "scale(0.6485)", transformOrigin: "0 0" }}>
                              <div style={{ display: "flex", width: "1912px", height: "1175px", fontFamily: "'Raleway',system-ui,sans-serif", color: "#0C1E3A" }}>
                                <div style={{ width: "288px", flex: "none", background: "#062A50", display: "flex", flexDirection: "column", padding: "26px 12px 22px" }}>
                                  <img src={"/assets/elipecas/logo_white.png"} alt={"Eli Peças"} style={{ width: "176px", height: "56px", margin: "0 0 40px -4px" }} />
                                  <span style={{ padding: "0 12px 10px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#8FA9CC" }}>
                                    {"PROGRAMAS"}
                                  </span>
                                  <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                      <path d={"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"} />
                                    </svg>
                                    {"Painel"}
                                  </div>
                                  <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "#0B5CD6", boxShadow: "0 6px 18px -6px rgba(11,92,214,0.7)" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                      <path d={"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"} />
                                    </svg>
                                    {"Pedidos"}
                                  </div>
                                  <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                      <path d={"M7.5 4.2 12 2l4.5 2.2v5L12 11.4 7.5 9.2zM2.5 14l4.5-2.2 4.5 2.2v5L7 21.2 2.5 19zM12.5 14l4.5-2.2 4.5 2.2v5L17 21.2 12.5 19z"} />
                                    </svg>
                                    {"Produtos"}
                                  </div>
                                  <span style={{ padding: "36px 12px 10px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#8FA9CC" }}>
                                    {"GESTÃO"}
                                  </span>
                                  <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                      <path d={"M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"} />
                                    </svg>
                                    {"Integrações"}
                                  </div>
                                  <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                      <path d={"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"} />
                                    </svg>
                                    {"Usuários"}
                                  </div>
                                  <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                      <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 3v4M21 5h-4M5 17v4M7 19H3"} />
                                    </svg>
                                    {"Destaques"}
                                  </div>
                                  <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                      <path d={"M3 3v18h18M8 17V11M13 17V7M18 17v-4"} />
                                    </svg>
                                    {"Observabilidade"}
                                  </div>
                                  <div style={{ marginTop: "auto", borderTop: "1px solid #1B3D66", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                        <path d={"M3 9l1.5-5h15L21 9M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0zM5 13v8h14v-8M10 21v-5h4v5"} />
                                      </svg>
                                      {"Ver loja"}
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px" }}>
                                      <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#0B5CD6", color: "#FFFFFF", fontSize: "15px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        {"A"}
                                      </span>
                                      <span style={{ display: "flex", flexDirection: "column", gap: "2px", color: "#FFFFFF" }}>
                                        <span style={{ fontSize: "15px", fontWeight: "600" }}>
                                          {"Admin"}
                                        </span>
                                        <span style={{ fontSize: "13px", color: "#B9C8DE" }}>
                                          {"admin@exemplo.com.br"}
                                        </span>
                                      </span>
                                    </div>
                                    <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                        <path d={"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"} />
                                      </svg>
                                      {"Sair"}
                                    </div>
                                  </div>
                                </div>
                                <div style={{ flex: "1", minWidth: "0", background: "#EDF0F8", padding: "18px 32px 0", display: "flex", flexDirection: "column", gap: "20px", overflow: "hidden" }}>
                                  <div style={{ fontSize: "13px", color: "#5D6B85", display: "flex", gap: "10px" }}>
                                    <span>
                                      {"Admin"}
                                    </span>
                                    <span>
                                      {"/"}
                                    </span>
                                    <span>
                                      {"Pedidos"}
                                    </span>
                                    <span>
                                      {"/"}
                                    </span>
                                    <span style={{ color: "#1E2F4F" }}>
                                      {"#EP-2026-0418"}
                                    </span>
                                  </div>
                                  <div style={{ border: "1px solid #9DC3FD", borderRadius: "4px", overflow: "hidden", flex: "none" }}>
                                    {"\n "}
                                    <div style={{ background: "#E7F0FF", padding: "26px 28px 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "20px" }}>
                                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                        <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600", color: "#0B5CD6" }}>
                                          <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M19 12H5M11 6l-6 6 6 6"} />
                                          </svg>
                                          {"Todos os pedidos"}
                                        </span>
                                        <span style={{ marginTop: "16px" }}>
                                          <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#0B5CD6" }}>
                                            {"DOSSIÊ OPERACIONAL"}
                                          </span>
                                        </span>
                                        <span style={{ fontSize: "32px", fontWeight: "700", letterSpacing: "-0.01em", color: "#0C2A55" }}>
                                          {"Pedido #EP-2026-0418"}
                                        </span>
                                        <span style={{ fontSize: "15px", color: "#4A5A75" }}>
                                          {"Registrado em 14/10/2026, às 08:25. Consulte a venda e mantenha a operação em movimento."}
                                        </span>
                                      </div>
                                      <span style={{ height: "34px", padding: "0 14px", borderRadius: "4px", background: "#FFF8E7", border: "1px solid #F5D48A", color: "#8A5A00", fontSize: "15px", fontWeight: "600", display: "flex", alignItems: "center" }}>
                                        {"Pendente"}
                                      </span>
                                    </div>
                                    {"\n "}
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "#EEF4FF", borderTop: "1px solid #C9DAF5" }}>
                                      <div style={{ padding: "22px 28px", display: "flex", alignItems: "center", gap: "14px" }}>
                                        <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                          <path d={"M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM15 8.5c-.5-1-1.7-1.5-3-1.5-1.7 0-3 .9-3 2.2 0 3 6 1.6 6 4.6 0 1.3-1.3 2.2-3 2.2-1.4 0-2.6-.6-3.1-1.6M12 5.5v13"} />
                                        </svg>
                                        <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                          <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#4A5A75" }}>
                                            {"VALOR DO PEDIDO"}
                                          </span>
                                          <span style={{ fontSize: "15px", fontWeight: "700" }}>
                                            {"R$ 7.896,70"}
                                          </span>
                                        </span>
                                      </div>
                                      <div style={{ padding: "22px 28px", display: "flex", alignItems: "center", gap: "14px", borderLeft: "1px solid #C9DAF5" }}>
                                        <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                          <path d={"M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8"} />
                                        </svg>
                                        <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                          <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#4A5A75" }}>
                                            {"ITENS CONFIRMADOS"}
                                          </span>
                                          <span style={{ fontSize: "15px", fontWeight: "700" }}>
                                            {"5 itens"}
                                          </span>
                                        </span>
                                      </div>
                                      <div style={{ padding: "22px 28px", display: "flex", alignItems: "center", gap: "14px", borderLeft: "1px solid #C9DAF5" }}>
                                        <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                          <path d={"M3 5h18v16H3zM16 3v4M8 3v4M3 10h18"} />
                                        </svg>
                                        <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                          <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#4A5A75" }}>
                                            {"ÚLTIMA ALTERAÇÃO"}
                                          </span>
                                          <span style={{ fontSize: "15px", fontWeight: "700" }}>
                                            {"14/10/2026"}
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                    {"\n "}
                                    <div style={{ background: "#FBFCFE", borderTop: "1px solid #C9DAF5", padding: "16px 20px", display: "flex" }}>
                                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", width: "152px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}>
                                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", background: "#0B5CD6", color: "#FFFFFF", boxShadow: "0 0 0 4px #D6E5FF" }}>
                                            {"1"}
                                          </span>
                                          <span style={{ flex: "1", height: "1px", background: "#9DB3D6" }} />
                                        </div>
                                        <span style={{ fontSize: "13px", fontWeight: "700", color: "#0C1E3A" }}>
                                          {"Recebido"}
                                        </span>
                                      </div>
                                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", width: "152px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}>
                                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", background: "#FFFFFF", color: "#5D6B85", border: "1px solid #9DB3D6" }}>
                                            {"2"}
                                          </span>
                                          <span style={{ flex: "1", height: "1px", background: "#9DB3D6" }} />
                                        </div>
                                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#4A5A75" }}>
                                          {"Confirmado"}
                                        </span>
                                      </div>
                                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", width: "152px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}>
                                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", background: "#FFFFFF", color: "#5D6B85", border: "1px solid #9DB3D6" }}>
                                            {"3"}
                                          </span>
                                          <span style={{ flex: "1", height: "1px", background: "#9DB3D6" }} />
                                        </div>
                                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#4A5A75" }}>
                                          {"Separação"}
                                        </span>
                                      </div>
                                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", width: "152px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}>
                                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", background: "#FFFFFF", color: "#5D6B85", border: "1px solid #9DB3D6" }}>
                                            {"4"}
                                          </span>
                                          <span style={{ flex: "1", height: "1px", background: "#9DB3D6" }} />
                                        </div>
                                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#4A5A75" }}>
                                          {"Em trânsito"}
                                        </span>
                                      </div>
                                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px", width: "152px" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}>
                                          <span style={{ width: "28px", height: "28px", flex: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", background: "#FFFFFF", color: "#5D6B85", border: "1px solid #9DB3D6" }}>
                                            {"5"}
                                          </span>
                                        </div>
                                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#4A5A75" }}>
                                          {"Entregue"}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flex: "none" }}>
                                    {"\n "}
                                    <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
                                      {"\n  "}
                                      <div style={{ background: "#FFFFFF", border: "1px solid #C9D6EC", borderRadius: "4px" }}>
                                        {"\n   "}
                                        <div style={{ padding: "18px 16px 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid #DCE4F2" }}>
                                          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#4A5A75" }}>
                                              {"CONFERÊNCIA DA VENDA"}
                                            </span>
                                            <span style={{ fontSize: "20px", fontWeight: "700" }}>
                                              {"Itens do pedido"}
                                            </span>
                                          </div>
                                          <span style={{ fontSize: "12px", fontWeight: "600", color: "#0B5CD6", background: "#E7F0FF", padding: "4px 8px", borderRadius: "4px" }}>
                                            {"5 itens"}
                                          </span>
                                        </div>
                                        {"\n   "}
                                        <div data-reveal={"fade"} data-delay={"400"} style={{ display: "grid", gridTemplateColumns: "76px minmax(0,1fr) 80px 140px", alignItems: "center", padding: "12px 16px" }}>
                                          <span style={{ width: "48px", height: "48px", border: "1px solid #D6DEEB", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <img src={"/assets/elipecas/p1.png"} alt={""} style={{ width: "44px", height: "44px" }} />
                                          </span>
                                          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <span style={{ fontSize: "16px", fontWeight: "700" }}>
                                              {"COMPRESSOR 1/3+HP R-134a 220V/1F 50/60HZ"}
                                            </span>
                                            <span style={{ fontSize: "11px", color: "#4F6FA3", letterSpacing: "0.04em" }}>
                                              {"SKU  1318"}
                                            </span>
                                          </span>
                                          <span style={{ fontSize: "14px", color: "#3B4A63" }}>
                                            {"1 un."}
                                          </span>
                                          <span style={{ fontSize: "15px", fontWeight: "700", color: "#0B5CD6" }}>
                                            {"R$ 689,00"}
                                          </span>
                                        </div>
                                        <div data-reveal={"fade"} data-delay={"490"} style={{ display: "grid", gridTemplateColumns: "76px minmax(0,1fr) 80px 140px", alignItems: "center", padding: "12px 16px", borderTop: "1px solid #DCE4F2" }}>
                                          <span style={{ width: "48px", height: "48px", border: "1px solid #D6DEEB", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <img src={"/assets/elipecas/p2.png"} alt={""} style={{ width: "44px", height: "44px" }} />
                                          </span>
                                          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <span style={{ fontSize: "16px", fontWeight: "700" }}>
                                              {"BOTIJA R134A DUGOLD 13,6KG"}
                                            </span>
                                            <span style={{ fontSize: "11px", color: "#4F6FA3", letterSpacing: "0.04em" }}>
                                              {"SKU  1459"}
                                            </span>
                                          </span>
                                          <span style={{ fontSize: "14px", color: "#3B4A63" }}>
                                            {"1 un."}
                                          </span>
                                          <span style={{ fontSize: "15px", fontWeight: "700", color: "#0B5CD6" }}>
                                            {"R$ 1.149,90"}
                                          </span>
                                        </div>
                                        <div data-reveal={"fade"} data-delay={"580"} style={{ display: "grid", gridTemplateColumns: "76px minmax(0,1fr) 80px 140px", alignItems: "center", padding: "12px 16px", borderTop: "1px solid #DCE4F2" }}>
                                          <span style={{ width: "48px", height: "48px", border: "1px solid #D6DEEB", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <img src={"/assets/elipecas/p3.png"} alt={""} style={{ width: "44px", height: "44px" }} />
                                          </span>
                                          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <span style={{ fontSize: "16px", fontWeight: "700" }}>
                                              {"COMPRESSOR MT 36-1 220V TRI"}
                                            </span>
                                            <span style={{ fontSize: "11px", color: "#4F6FA3", letterSpacing: "0.04em" }}>
                                              {"SKU  1391"}
                                            </span>
                                          </span>
                                          <span style={{ fontSize: "14px", color: "#3B4A63" }}>
                                            {"1 un."}
                                          </span>
                                          <span style={{ fontSize: "15px", fontWeight: "700", color: "#0B5CD6" }}>
                                            {"R$ 5.980,00"}
                                          </span>
                                        </div>
                                        <div data-reveal={"fade"} data-delay={"670"} style={{ display: "grid", gridTemplateColumns: "76px minmax(0,1fr) 80px 140px", alignItems: "center", padding: "12px 16px", borderTop: "1px solid #DCE4F2" }}>
                                          <span style={{ width: "48px", height: "48px", border: "1px solid #D6DEEB", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <img src={"/assets/elipecas/p4.png"} alt={""} style={{ width: "44px", height: "44px" }} />
                                          </span>
                                          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <span style={{ fontSize: "16px", fontWeight: "700" }}>
                                              {"METASIL DESIX TRANSPARENTE"}
                                            </span>
                                            <span style={{ fontSize: "11px", color: "#4F6FA3", letterSpacing: "0.04em" }}>
                                              {"SKU  1289"}
                                            </span>
                                          </span>
                                          <span style={{ fontSize: "14px", color: "#3B4A63" }}>
                                            {"1 un."}
                                          </span>
                                          <span style={{ fontSize: "15px", fontWeight: "700", color: "#0B5CD6" }}>
                                            {"R$ 32,90"}
                                          </span>
                                        </div>
                                        <div data-reveal={"fade"} data-delay={"760"} style={{ display: "grid", gridTemplateColumns: "76px minmax(0,1fr) 80px 140px", alignItems: "center", padding: "12px 16px", borderTop: "1px solid #DCE4F2" }}>
                                          <span style={{ width: "48px", height: "48px", border: "1px solid #D6DEEB", borderRadius: "4px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <img src={"/assets/elipecas/p5.png"} alt={""} style={{ width: "44px", height: "44px" }} />
                                          </span>
                                          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                            <span style={{ fontSize: "16px", fontWeight: "700" }}>
                                              {"NIVEL ALUMINIO MAX"}
                                            </span>
                                            <span style={{ fontSize: "11px", color: "#4F6FA3", letterSpacing: "0.04em" }}>
                                              {"SKU  1255"}
                                            </span>
                                          </span>
                                          <span style={{ fontSize: "14px", color: "#3B4A63" }}>
                                            {"1 un."}
                                          </span>
                                          <span style={{ fontSize: "15px", fontWeight: "700", color: "#0B5CD6" }}>
                                            {"R$ 44,90"}
                                          </span>
                                        </div>
                                        {"\n  "}
                                      </div>
                                      {"\n  "}
                                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                                        {"\n   "}
                                        <div style={{ background: "#FFFFFF", border: "1px solid #C9D6EC", borderRadius: "4px", padding: "24px 20px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                                          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "19px", fontWeight: "700" }}>
                                            <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#358635"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM15 8.5c-.5-1-1.7-1.5-3-1.5-1.7 0-3 .9-3 2.2 0 3 6 1.6 6 4.6 0 1.3-1.3 2.2-3 2.2-1.4 0-2.6-.6-3.1-1.6M12 5.5v13"} />
                                            </svg>
                                            {"Financeiro"}
                                          </span>
                                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", color: "#5D6B85", marginTop: "10px" }}>
                                            <span>
                                              {"Subtotal"}
                                            </span>
                                            <span style={{ color: "#0C1E3A", fontWeight: "600" }}>
                                              {"R$ 7.896,70"}
                                            </span>
                                          </div>
                                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", color: "#5D6B85" }}>
                                            <span>
                                              {"Frete"}
                                            </span>
                                            <span style={{ color: "#0C1E3A", fontWeight: "600" }}>
                                              {"R$ 0,00"}
                                            </span>
                                          </div>
                                          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "17px", fontWeight: "700", borderTop: "1px solid #DCE4F2", paddingTop: "14px" }}>
                                            <span>
                                              {"Total"}
                                            </span>
                                            <span style={{ color: "#0B5CD6" }}>
                                              {"R$ 7.896,70"}
                                            </span>
                                          </div>
                                        </div>
                                        {"\n   "}
                                        <div style={{ background: "#FFFFFF", border: "1px solid #C9D6EC", borderRadius: "4px", padding: "24px 20px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
                                          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "19px", fontWeight: "700" }}>
                                            <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h8"} />
                                            </svg>
                                            {"Pagamento"}
                                          </span>
                                          <span style={{ fontSize: "15px", color: "#5D6B85", marginTop: "12px" }}>
                                            {"Nenhum pagamento registrado até o momento."}
                                          </span>
                                        </div>
                                        {"\n  "}
                                      </div>
                                      {"\n "}
                                    </div>
                                    {"\n "}
                                    <div style={{ width: "340px", flex: "none", background: "#FFFFFF", border: "1px solid #C9D6EC", borderRadius: "4px", display: "flex", flexDirection: "column" }}>
                                      {"\n  "}
                                      <div style={{ padding: "22px 20px", borderBottom: "1px solid #DCE4F2", display: "flex", flexDirection: "column", gap: "6px" }}>
                                        <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#0B5CD6" }}>
                                          {"CENTRO DE COMANDO"}
                                        </span>
                                        <span style={{ fontSize: "21px", fontWeight: "700" }}>
                                          {"Atualizar operação"}
                                        </span>
                                        <span style={{ fontSize: "14px", color: "#6B7C99", lineHeight: "1.4" }}>
                                          {"Altere apenas informações que são persistidas no pedido."}
                                        </span>
                                      </div>
                                      {"\n  "}
                                      <div style={{ padding: "22px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                        <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#4A5A75" }}>
                                          {"STATUS DO PEDIDO"}
                                        </span>
                                        <span style={{ height: "44px", borderRadius: "4px", background: "#FFF8E7", border: "1px solid #F5D48A", color: "#8A5A00", fontSize: "16px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px" }}>
                                          {"Pendente"}
                                          <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A5A00"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M6 9l6 6 6-6"} />
                                          </svg>
                                        </span>
                                        {"\n   "}
                                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "8px" }}>
                                          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#4A5A75" }}>
                                              {"FRETE"}
                                            </span>
                                            <span style={{ height: "44px", border: "1px solid #C9D6EC", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px", fontSize: "13px", color: "#8A94A6" }}>
                                              {"R$"}
                                              <b style={{ color: "#0C1E3A" }}>
                                                {"0"}
                                              </b>
                                            </span>
                                          </div>
                                          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#4A5A75" }}>
                                              {"VALOR TOTAL"}
                                            </span>
                                            <span style={{ height: "44px", border: "1px solid #C9D6EC", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px", fontSize: "13px", color: "#8A94A6" }}>
                                              {"R$"}
                                              <b style={{ color: "#0C1E3A" }}>
                                                {"7896,7"}
                                              </b>
                                            </span>
                                          </div>
                                        </div>
                                        {"\n   "}
                                        <span style={{ marginTop: "8px" }}>
                                          <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#4A5A75" }}>
                                            {"OBSERVAÇÕES OPERACIONAIS"}
                                          </span>
                                        </span>
                                        <span style={{ height: "110px", border: "1px solid #C9D6EC", borderRadius: "4px", padding: "12px", fontSize: "14px", color: "#8A94A6", lineHeight: "1.4" }}>
                                          {"Registre uma informação importante para o atendimento."}
                                        </span>
                                        {"\n   "}
                                        <span style={{ marginTop: "12px", height: "44px", borderRadius: "4px", background: "#358635", color: "#FFFFFF", fontSize: "15px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                                          <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2zM17 21v-8H7v8M7 3v5h8"} />
                                          </svg>
                                          {"Salvar atualizações"}
                                        </span>
                                      </div>
                                      {"\n  "}
                                      <div style={{ padding: "22px 20px", borderTop: "1px solid #DCE4F2", background: "#F7F9FD", display: "flex", flexDirection: "column", gap: "10px" }}>
                                        <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#4A5A75" }}>
                                          {"CLIENTE"}
                                        </span>
                                        <span style={{ fontSize: "17px", fontWeight: "700" }}>
                                          {"Cliente Exemplo"}
                                        </span>
                                        <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#3B4A63" }}>
                                          <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3B4A63"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M3 5h18v14H3zM22 6l-10 7L2 6"} />
                                          </svg>
                                          {"cliente@exemplo.com.br"}
                                        </span>
                                        <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#3B4A63" }}>
                                          <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3B4A63"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"} />
                                          </svg>
                                          {"(51) 90000-0000"}
                                        </span>
                                        <span style={{ alignSelf: "flex-start", marginTop: "4px", height: "36px", padding: "0 12px", borderRadius: "4px", border: "1px solid #9FD4A9", background: "#EFFAF1", color: "#1E6B2A", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
                                          <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E6B2A"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-6.4A8 8 0 1 1 21 12z"} />
                                          </svg>
                                          {"Conversar no WhatsApp"}
                                          <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E6B2A"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"} />
                                          </svg>
                                        </span>
                                      </div>
                                      {"\n "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-reveal={"rise"} data-delay={"650"} style={{ position: "absolute", left: "1236px", top: "120px" }}>
                        <div style={{ transform: "scale(0.82)", transformOrigin: "0 0" }}>
                          <div style={{ width: "380px", height: "800px", borderRadius: "54px", background: "#0D0C14", padding: "11px", boxShadow: "0 50px 90px -30px rgba(0,0,0,0.55),inset 0 0 0 2px #2A2833" }}>
                            <div style={{ position: "relative", width: "358px", height: "778px", borderRadius: "44px", overflow: "hidden", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
                              <div style={{ height: "44px", flex: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", fontSize: "14px", fontWeight: "600", background: "#FFFFFF", color: "#0C1E3A", fontFamily: "'Schibsted Grotesk',system-ui,sans-serif" }}>
                                <span>
                                  {"9:41"}
                                </span>
                                <span style={{ width: "96px", height: "28px", borderRadius: "14px", background: "#0D0C14" }} />
                                <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                  <span style={{ display: "flex", gap: "2px", alignItems: "flex-end" }}>
                                    <span style={{ width: "3px", height: "5px", background: "#0C1E3A", borderRadius: "1px" }} />
                                    <span style={{ width: "3px", height: "7px", background: "#0C1E3A", borderRadius: "1px" }} />
                                    <span style={{ width: "3px", height: "9px", background: "#0C1E3A", borderRadius: "1px" }} />
                                    <span style={{ width: "3px", height: "11px", background: "#0C1E3A", borderRadius: "1px" }} />
                                  </span>
                                  <span style={{ width: "22px", height: "11px", borderRadius: "3px", border: "1.5px solid #0C1E3A", padding: "1px" }}>
                                    <span style={{ display: "block", width: "70%", height: "100%", background: "#0C1E3A", borderRadius: "1px" }} />
                                  </span>
                                </span>
                              </div>
                              <img src={"/assets/elipecas/cart.png"} alt={"Carrinho no app com 5 itens separados"} style={{ display: "block", width: "358px", height: "auto", flex: "none" }} />
                              <div style={{ flex: "1", background: "#F3F5FA" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span style={{ position: "absolute", left: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", right: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
              </div>
              <figcaption data-reveal={"fade"} data-delay={"300"} style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#9AA1AB" }}>
                <span style={{ whiteSpace: "nowrap" }}>
                  {"Fig. 01"}
                </span>
                <span style={{ textAlign: "right" }}>
                  {"Dossiê do pedido no painel e carrinho no app · dados de exemplo"}
                </span>
              </figcaption>
            </figure>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Contexto"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(56px,7vw,96px)", display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,64px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"Do balcão da loja para um catálogo nacional"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(01) Contexto"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px clamp(32px,5vw,96px)" }}>
              {"\n      "}
              <p data-reveal={"fade"} style={{ flex: "1 1 360px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                {"A Eli Refrigeração atende técnicos e empresas de refrigeração em uma loja física com compressores, gases refrigerantes, manifolds, tubos de cobre e acessórios. Boa parte das vendas começava com uma pergunta no balcão ou no WhatsApp."}
              </p>
              {"\n      "}
              <p data-reveal={"fade"} data-delay={"120"} style={{ flex: "1 1 360px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                {"O objetivo era levar esse catálogo para a internet sem perder o atendimento próximo: o cliente encontra a peça pelo nome, SKU ou marca, monta o pedido e fala com um especialista quando precisa. A equipe acompanha cada pedido e controla a vitrine em um painel próprio."}
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", gap: "clamp(16px,2vw,24px)" }}>
              {"\n      "}
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px", gridColumn: "span 2", minWidth: "0" }}>
                {"\n        "}
                <div data-reveal={"clip"} style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", border: "1px solid #0B0E13", background: "#D9D7D0" }}>
                  <img data-parallax={"0.08"} src={"/assets/elipecas/store_interior.png"} alt={"Interior da loja Eli Refrigeração com prateleiras de peças"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.18)" }} />
                </div>
                {"\n        "}
                <figcaption style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#5A5F66" }}>
                  <span>
                    {"Fig. 02"}
                  </span>
                  <span style={{ textAlign: "right" }}>
                    {"Loja física, de onde sai o estoque do catálogo"}
                  </span>
                </figcaption>
                {"\n      "}
              </figure>
              {"\n      "}
              <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
                {"\n        "}
                <div data-reveal={"clip"} data-delay={"150"} style={{ position: "relative", flex: "1", minHeight: "280px", overflow: "hidden", border: "1px solid #0B0E13", background: "#D9D7D0" }}>
                  <img data-parallax={"0.06"} src={"/assets/elipecas/storefront.png"} alt={"Fachada da Eli Refrigeração"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.18)" }} />
                </div>
                {"\n        "}
                <figcaption style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#5A5F66" }}>
                  <span>
                    {"Fig. 03"}
                  </span>
                  <span style={{ textAlign: "right" }}>
                    {"Fachada"}
                  </span>
                </figcaption>
                {"\n      "}
              </figure>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", borderTop: "1px solid #0B0E13" }}>
              {"\n      "}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }} data-reveal={"fade"} data-delay={"0"}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  <span data-count={"81"}>
                    {"81"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"endpoints NestJS publicados em OpenAPI"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }} data-reveal={"fade"} data-delay={"120"}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  <span data-count={"26"}>
                    {"26"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"páginas no App Router entre loja e painel"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }} data-reveal={"fade"} data-delay={"240"}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  <span data-count={"20"}>
                    {"20"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"entidades Prisma, com 38 relações e 13 enums"}
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Categorias"} aria-label={"Categorias do catálogo"} style={{ background: "#0B0E13", color: "#ECEBE6", overflow: "hidden", borderTop: "1px solid #22272F", borderBottom: "1px solid #22272F" }}>
          {"\n  "}
          <div style={{ padding: "clamp(28px,4vw,48px) 0", display: "flex" }}>
            {"\n    "}
            <div data-marquee={"48000"} style={{ display: "flex", gap: "clamp(24px,3vw,48px)", paddingRight: "clamp(24px,3vw,48px)", fontSize: "clamp(36px,5vw,72px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1", flex: "none" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Unidades e compressores"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Botijas e latas"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Manifolds"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Tubos de cobre"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Agitadores"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Hélices"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Utilitários"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Unidades e compressores"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Botijas e latas"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Manifolds"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Tubos de cobre"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Agitadores"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Hélices"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "clamp(24px,3vw,48px)", whiteSpace: "nowrap" }}>
                <span>
                  {"Utilitários"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "0.4em", color: "#3D6BFF" }}>
                  {"/"}
                </span>
              </span>
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Catálogo"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(56px,7vw,96px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"Um catálogo para quem já sabe o que procura"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(02) Catálogo e carrinho"}
              </span>
            </div>
            {"\n    "}
            <p data-reveal={"fade"} style={{ maxWidth: "760px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
              {"A busca aceita nome do produto, SKU ou marca, com filtros e ordenação. Cada card mostra categoria, nome técnico e SKU, e oferece duas saídas: Consultar, que abre uma conversa no WhatsApp com o produto, ou adicionar ao carrinho sem sair da lista. O carrinho funciona sem login e é enviado como pedido."}
            </p>
            {"\n    "}
            <figure style={{ flex: "1 1 100%", minWidth: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div data-reveal={"clip"} style={{ position: "relative", border: "1px solid #0B0E13", background: "#E5E3DC" }}>
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <div data-fit={"1600"} style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                    <div style={{ position: "relative", width: "1600px", height: "900px", transformOrigin: "0 0", background: "#E5E3DC", backgroundImage: "linear-gradient(rgba(11,14,19,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(11,14,19,0.06) 1px,transparent 1px)", backgroundSize: "80px 80px" }}>
                      <div style={{ position: "absolute", left: "610px", top: "50px" }}>
                        <div style={{ width: "380px", height: "800px", borderRadius: "54px", background: "#0D0C14", padding: "11px", boxShadow: "0 50px 90px -30px rgba(0,0,0,0.55),inset 0 0 0 2px #2A2833" }}>
                          <div style={{ position: "relative", width: "358px", height: "778px", borderRadius: "44px", overflow: "hidden", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
                            <div style={{ height: "44px", flex: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", fontSize: "14px", fontWeight: "600", background: "#FFFFFF", color: "#0C1E3A", fontFamily: "'Schibsted Grotesk',system-ui,sans-serif" }}>
                              <span>
                                {"9:41"}
                              </span>
                              <span style={{ width: "96px", height: "28px", borderRadius: "14px", background: "#0D0C14" }} />
                              <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                <span style={{ display: "flex", gap: "2px", alignItems: "flex-end" }}>
                                  <span style={{ width: "3px", height: "5px", background: "#0C1E3A", borderRadius: "1px" }} />
                                  <span style={{ width: "3px", height: "7px", background: "#0C1E3A", borderRadius: "1px" }} />
                                  <span style={{ width: "3px", height: "9px", background: "#0C1E3A", borderRadius: "1px" }} />
                                  <span style={{ width: "3px", height: "11px", background: "#0C1E3A", borderRadius: "1px" }} />
                                </span>
                                <span style={{ width: "22px", height: "11px", borderRadius: "3px", border: "1.5px solid #0C1E3A", padding: "1px" }}>
                                  <span style={{ display: "block", width: "70%", height: "100%", background: "#0C1E3A", borderRadius: "1px" }} />
                                </span>
                              </span>
                            </div>
                            <img src={"/assets/elipecas/catalog_head.png"} alt={""} style={{ display: "block", width: "358px", height: "279.4px", flex: "none" }} />
                            <div style={{ position: "relative", flex: "1", overflow: "hidden", background: "#FFFFFF" }}>
                              <img data-autoscroll={"1310"} src={"/assets/elipecas/catalog_list.png"} alt={"Catálogo de peças com cards de produto"} style={{ display: "block", width: "358px", height: "auto" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {v?.showCallouts ? (
                        <>
                          <div style={{ position: "absolute", right: "1088px", top: "225px", height: "30px", display: "flex", alignItems: "center", gap: "12px", whiteSpace: "nowrap" }} data-reveal={"fade"} data-delay={"320"}>
                            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                              {"01"}
                            </span>
                            <span style={{ fontFamily: "'Schibsted Grotesk',system-ui,sans-serif", fontSize: "22px", fontWeight: "500", letterSpacing: "-0.01em", color: "#0B0E13" }}>
                              {"Busca por produto, SKU ou marca"}
                            </span>
                          </div>
                          <span data-reveal={"grow"} data-delay={"420"} style={{ position: "absolute", left: "528px", top: "240px", width: "105px", height: "1px", background: "#0B0E13" }} />
                          <span style={{ position: "absolute", left: "628px", top: "235px", width: "11px", height: "11px", borderRadius: "50%", background: "#3D6BFF", boxShadow: "0 0 0 5px rgba(61,107,255,0.22)" }} />
                          <span data-reveal={"grow"} data-delay={"540"} style={{ position: "absolute", left: "924px", top: "169px", width: "152px", height: "1px", background: "#0B0E13" }} />
                          <span style={{ position: "absolute", left: "919px", top: "164px", width: "11px", height: "11px", borderRadius: "50%", background: "#3D6BFF", boxShadow: "0 0 0 5px rgba(61,107,255,0.22)" }} />
                          <div style={{ position: "absolute", left: "1092px", top: "154px", height: "30px", display: "flex", alignItems: "center", gap: "12px", whiteSpace: "nowrap" }} data-reveal={"fade"} data-delay={"440"}>
                            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                              {"02"}
                            </span>
                            <span style={{ fontFamily: "'Schibsted Grotesk',system-ui,sans-serif", fontSize: "22px", fontWeight: "500", letterSpacing: "-0.01em", color: "#0B0E13" }}>
                              {"Carrinho com contador de itens"}
                            </span>
                          </div>
                          <span data-reveal={"grow"} data-delay={"660"} style={{ position: "absolute", left: "964px", top: "240px", width: "112px", height: "1px", background: "#0B0E13" }} />
                          <span style={{ position: "absolute", left: "959px", top: "235px", width: "11px", height: "11px", borderRadius: "50%", background: "#3D6BFF", boxShadow: "0 0 0 5px rgba(61,107,255,0.22)" }} />
                          <div style={{ position: "absolute", left: "1092px", top: "225px", height: "30px", display: "flex", alignItems: "center", gap: "12px", whiteSpace: "nowrap" }} data-reveal={"fade"} data-delay={"560"}>
                            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                              {"03"}
                            </span>
                            <span style={{ fontFamily: "'Schibsted Grotesk',system-ui,sans-serif", fontSize: "22px", fontWeight: "500", letterSpacing: "-0.01em", color: "#0B0E13" }}>
                              {"Filtros e ordenação"}
                            </span>
                          </div>
                          <div style={{ position: "absolute", right: "1088px", top: "585px", height: "30px", display: "flex", alignItems: "center", gap: "12px", whiteSpace: "nowrap" }} data-reveal={"fade"} data-delay={"680"}>
                            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                              {"04"}
                            </span>
                            <span style={{ fontFamily: "'Schibsted Grotesk',system-ui,sans-serif", fontSize: "22px", fontWeight: "500", letterSpacing: "-0.01em", color: "#0B0E13" }}>
                              {"Consultar abre o WhatsApp com o produto"}
                            </span>
                          </div>
                          <span data-reveal={"grow"} data-delay={"780"} style={{ position: "absolute", left: "528px", top: "600px", width: "114px", height: "1px", background: "#0B0E13" }} />
                          <span style={{ position: "absolute", left: "637px", top: "595px", width: "11px", height: "11px", borderRadius: "50%", background: "#3D6BFF", boxShadow: "0 0 0 5px rgba(61,107,255,0.22)" }} />
                          <span data-reveal={"grow"} data-delay={"900"} style={{ position: "absolute", left: "960px", top: "660px", width: "116px", height: "1px", background: "#0B0E13" }} />
                          <span style={{ position: "absolute", left: "955px", top: "655px", width: "11px", height: "11px", borderRadius: "50%", background: "#3D6BFF", boxShadow: "0 0 0 5px rgba(61,107,255,0.22)" }} />
                          <div style={{ position: "absolute", left: "1092px", top: "645px", height: "30px", display: "flex", alignItems: "center", gap: "12px", whiteSpace: "nowrap" }} data-reveal={"fade"} data-delay={"800"}>
                            <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                              {"05"}
                            </span>
                            <span style={{ fontFamily: "'Schibsted Grotesk',system-ui,sans-serif", fontSize: "22px", fontWeight: "500", letterSpacing: "-0.01em", color: "#0B0E13" }}>
                              {"Adicionar ao carrinho sem sair da lista"}
                            </span>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
                <span style={{ position: "absolute", left: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", right: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
              </div>
              <figcaption data-reveal={"fade"} data-delay={"300"} style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#5A5F66" }}>
                <span style={{ whiteSpace: "nowrap" }}>
                  {"Fig. 04"}
                </span>
                <span style={{ textAlign: "right" }}>
                  {"Catálogo no app, com rolagem automática · dados reais do catálogo público"}
                </span>
              </figcaption>
            </figure>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Pedido"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(56px,7vw,96px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"O pedido vira um dossiê operacional"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(03) Pedido e pagamento"}
              </span>
            </div>
            {"\n    "}
            <p data-reveal={"fade"} style={{ maxWidth: "760px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
              {"Ao enviar o carrinho, o pedido entra no painel com valor, itens confirmados e data da última alteração. A equipe atualiza status, frete e observações em um só lugar e fala com o cliente pelo WhatsApp a partir do próprio pedido (Fig. 01)."}
            </p>
            {"\n    "}
            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", borderTop: "1px solid #CFCDC4" }}>
              {"\n      "}
              <span data-reveal={"grow"} data-delay={"150"} style={{ position: "absolute", left: "0", right: "0", top: "-1px", height: "2px", background: "#0B0E13" }} />
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"250"} style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "28px 24px 28px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#3D6BFF" }} />
                  {"01"}
                </span>
                <span style={{ fontSize: "clamp(24px,2.2vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1" }}>
                  {"Recebido"}
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3A3F46", textWrap: "pretty" }}>
                  {"O carrinho enviado vira pedido com itens e valor confirmados."}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"390"} style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "28px 24px 28px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#0B0E13" }} />
                  {"02"}
                </span>
                <span style={{ fontSize: "clamp(24px,2.2vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1" }}>
                  {"Confirmado"}
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3A3F46", textWrap: "pretty" }}>
                  {"A equipe confere estoque, frete e forma de pagamento."}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"530"} style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "28px 24px 28px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#0B0E13" }} />
                  {"03"}
                </span>
                <span style={{ fontSize: "clamp(24px,2.2vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1" }}>
                  {"Separação"}
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Os itens são separados na loja para envio."}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"670"} style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "28px 24px 28px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#0B0E13" }} />
                  {"04"}
                </span>
                <span style={{ fontSize: "clamp(24px,2.2vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1" }}>
                  {"Em trânsito"}
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3A3F46", textWrap: "pretty" }}>
                  {"O pedido sai para entrega."}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"810"} style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "28px 24px 28px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#0B0E13" }} />
                  {"05"}
                </span>
                <span style={{ fontSize: "clamp(24px,2.2vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1" }}>
                  {"Entregue"}
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3A3F46", textWrap: "pretty" }}>
                  {"O ciclo fecha e fica no histórico do cliente."}
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", borderTop: "1px solid #0B0E13", borderLeft: "1px solid #0B0E13" }}>
              {"\n      "}
              <div data-reveal={"fade"} style={{ background: "#EFEEE9", borderRight: "1px solid #0B0E13", borderBottom: "1px solid #0B0E13", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"Cliente"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Checkout"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Pagamento transparente"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Consulta de status"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Cancelamento"}
                  </span>
                </div>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"120"} style={{ background: "#EFEEE9", borderRight: "1px solid #0B0E13", borderBottom: "1px solid #0B0E13", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"Admin"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Atualização de status"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Cancelamento"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Estorno"}
                  </span>
                </div>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"240"} style={{ background: "#EFEEE9", borderRight: "1px solid #0B0E13", borderBottom: "1px solid #0B0E13", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"Formas de pagamento"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Pix"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Cartão de crédito"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Boleto"}
                  </span>
                </div>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Campanhas"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"A vitrine da home é editada pelo painel"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(04) Campanhas"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "40px clamp(32px,5vw,80px)" }}>
              {"\n      "}
              <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "24px" }}>
                {"\n        "}
                <p data-reveal={"fade"} style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Banners rotativos, cards promocionais e destaques da loja ficam em abas separadas. Cada campanha tem imagem, destino (uma categoria ou nenhum), período e status, e a ordem é ajustada arrastando as linhas."}
                </p>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #0B0E13" }}>
                  {"\n          "}
                  <div data-reveal={"fade"} data-delay={"120"} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "14px 0", borderBottom: "1px solid #CFCDC4", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B0E13" }}>
                    <span>
                      {"Banners rotativos"}
                    </span>
                    <span style={{ color: "#5A5F66" }}>
                      {"01"}
                    </span>
                  </div>
                  <div data-reveal={"fade"} data-delay={"220"} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "14px 0", borderBottom: "1px solid #CFCDC4", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B0E13" }}>
                    <span>
                      {"Cards promocionais"}
                    </span>
                    <span style={{ color: "#5A5F66" }}>
                      {"02"}
                    </span>
                  </div>
                  <div data-reveal={"fade"} data-delay={"320"} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "14px 0", borderBottom: "1px solid #CFCDC4", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B0E13" }}>
                    <span>
                      {"Destaques da loja"}
                    </span>
                    <span style={{ color: "#5A5F66" }}>
                      {"03"}
                    </span>
                  </div>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <figure style={{ flex: "2 1 520px", minWidth: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div data-reveal={"clip"} style={{ position: "relative", border: "1px solid #0B0E13", background: "#E5E3DC" }}>
                  <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                    <div data-fit={"1600"} style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                      <div style={{ position: "relative", width: "1600px", height: "900px", transformOrigin: "0 0", background: "#E5E3DC" }}>
                        <div style={{ position: "absolute", left: "80px", top: "60px" }}>
                          <div style={{ width: "1440px", height: "780px", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", background: "#FFFFFF", boxShadow: "0 40px 80px -30px rgba(0,0,0,0.45)" }}>
                            <div style={{ height: "38px", flex: "none", background: "#E7E9EF", borderBottom: "1px solid #D5D9E2", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px", fontFamily: "'Schibsted Grotesk',system-ui,sans-serif" }}>
                              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57" }} />
                              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FEBC2E" }} />
                              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840" }} />
                              <div style={{ marginLeft: "18px", width: "420px", height: "24px", borderRadius: "6px", background: "#FFFFFF", fontSize: "12px", color: "#5D6B85", display: "flex", alignItems: "center", gap: "6px", padding: "0 10px" }}>
                                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                  <path d={"M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z"} />
                                </svg>
                                {"elipecas.com.br/admin/destaques"}
                              </div>
                            </div>
                            <div style={{ position: "relative", flex: "1", overflow: "hidden" }}>
                              <div style={{ position: "absolute", left: "0", top: "0", transform: "scale(0.7531)", transformOrigin: "0 0" }}>
                                <div style={{ display: "flex", width: "1912px", height: "985px", fontFamily: "'Raleway',system-ui,sans-serif", color: "#0C1E3A" }}>
                                  <div style={{ width: "288px", flex: "none", background: "#062A50", display: "flex", flexDirection: "column", padding: "26px 12px 22px" }}>
                                    <img src={"/assets/elipecas/logo_white.png"} alt={"Eli Peças"} style={{ width: "176px", height: "56px", margin: "0 0 40px -4px" }} />
                                    <span style={{ padding: "0 12px 10px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#8FA9CC" }}>
                                      {"PROGRAMAS"}
                                    </span>
                                    <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                        <path d={"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"} />
                                      </svg>
                                      {"Painel"}
                                    </div>
                                    <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                        <path d={"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"} />
                                      </svg>
                                      {"Pedidos"}
                                    </div>
                                    <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                        <path d={"M7.5 4.2 12 2l4.5 2.2v5L12 11.4 7.5 9.2zM2.5 14l4.5-2.2 4.5 2.2v5L7 21.2 2.5 19zM12.5 14l4.5-2.2 4.5 2.2v5L17 21.2 12.5 19z"} />
                                      </svg>
                                      {"Produtos"}
                                    </div>
                                    <span style={{ padding: "36px 12px 10px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#8FA9CC" }}>
                                      {"GESTÃO"}
                                    </span>
                                    <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                        <path d={"M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"} />
                                      </svg>
                                      {"Integrações"}
                                    </div>
                                    <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                        <path d={"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"} />
                                      </svg>
                                      {"Usuários"}
                                    </div>
                                    <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "#0B5CD6", boxShadow: "0 6px 18px -6px rgba(11,92,214,0.7)" }}>
                                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                        <path d={"M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 3v4M21 5h-4M5 17v4M7 19H3"} />
                                      </svg>
                                      {"Destaques"}
                                    </div>
                                    <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                        <path d={"M3 3v18h18M8 17V11M13 17V7M18 17v-4"} />
                                      </svg>
                                      {"Observabilidade"}
                                    </div>
                                    <div style={{ marginTop: "auto", borderTop: "1px solid #1B3D66", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                                      <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                        <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                          <path d={"M3 9l1.5-5h15L21 9M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0zM5 13v8h14v-8M10 21v-5h4v5"} />
                                        </svg>
                                        {"Ver loja"}
                                      </div>
                                      <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px" }}>
                                        <span style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#0B5CD6", color: "#FFFFFF", fontSize: "15px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                          {"A"}
                                        </span>
                                        <span style={{ display: "flex", flexDirection: "column", gap: "2px", color: "#FFFFFF" }}>
                                          <span style={{ fontSize: "15px", fontWeight: "600" }}>
                                            {"Admin"}
                                          </span>
                                          <span style={{ fontSize: "13px", color: "#B9C8DE" }}>
                                            {"admin@exemplo.com.br"}
                                          </span>
                                        </span>
                                      </div>
                                      <div style={{ height: "44px", marginTop: "2px", borderRadius: "8px", padding: "0 12px", display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", background: "transparent" }}>
                                        <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                          <path d={"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"} />
                                        </svg>
                                        {"Sair"}
                                      </div>
                                    </div>
                                  </div>
                                  <div style={{ flex: "1", minWidth: "0", background: "#EDF0F8", padding: "18px 32px 0", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                                    <div style={{ fontSize: "13px", color: "#5D6B85", display: "flex", gap: "10px" }}>
                                      <span>
                                        {"Admin"}
                                      </span>
                                      <span>
                                        {"/"}
                                      </span>
                                      <span>
                                        {"Destaques"}
                                      </span>
                                      <span>
                                        {"/"}
                                      </span>
                                      <span style={{ color: "#1E2F4F" }}>
                                        {"Campanhas da Home"}
                                      </span>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "16px" }}>
                                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                        <span style={{ fontSize: "32px", fontWeight: "700", color: "#0C2A55" }}>
                                          {"Campanhas da Home"}
                                        </span>
                                        <span style={{ fontSize: "15px", color: "#4A5A75" }}>
                                          {"Gerencie banners e campanhas promocionais da vitrine."}
                                        </span>
                                      </div>
                                      <span style={{ height: "40px", padding: "0 16px", borderRadius: "4px", background: "#0B5CD6", color: "#FFFFFF", fontSize: "15px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
                                        <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                          <path d={"M12 5v14M5 12h14"} />
                                        </svg>
                                        {"Nova campanha"}
                                      </span>
                                    </div>
                                    <div style={{ display: "flex", gap: "8px", marginTop: "28px", borderBottom: "1px solid #C9D6EC" }}>
                                      <span style={{ padding: "0 8px 12px", borderBottom: "2px solid #0B5CD6", color: "#0B5CD6", fontSize: "15px", fontWeight: "700", display: "flex", gap: "10px", alignItems: "center" }}>
                                        {"Banners rotativos"}
                                        <span style={{ fontSize: "11px", background: "#E7F0FF", padding: "2px 6px", borderRadius: "4px" }}>
                                          {"4"}
                                        </span>
                                      </span>
                                      <span style={{ padding: "0 16px 12px", color: "#4A5A75", fontSize: "15px", fontWeight: "600", display: "flex", gap: "10px", alignItems: "center" }}>
                                        {"Cards promocionais"}
                                        <span style={{ fontSize: "11px", background: "#DCE4F2", padding: "2px 6px", borderRadius: "4px" }}>
                                          {"4"}
                                        </span>
                                      </span>
                                      <span style={{ padding: "0 16px 12px", color: "#4A5A75", fontSize: "15px", fontWeight: "600" }}>
                                        {"Destaques da loja"}
                                      </span>
                                    </div>
                                    <div style={{ background: "#FFFFFF", border: "1px solid #C9D6EC", borderRadius: "4px", marginTop: "16px", padding: "12px", display: "flex", gap: "12px" }}>
                                      <span style={{ flex: "1", height: "40px", border: "1px solid #C9D6EC", borderRadius: "4px", display: "flex", alignItems: "center", gap: "10px", padding: "0 12px", fontSize: "14px", color: "#8A94A6" }}>
                                        <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#5D6B85"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                          <path d={"M11 4a7 7 0 1 0 0 14 7 7 0 1 0 0-14zM21 21l-4.3-4.3"} />
                                        </svg>
                                        {"Buscar por título, destino ou texto..."}
                                      </span>
                                      <span style={{ height: "40px", border: "1px solid #C9D6EC", borderRadius: "4px", display: "flex", alignItems: "center", gap: "10px", padding: "0 14px", fontSize: "13px", fontWeight: "600" }}>
                                        <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3B4A63"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                          <path d={"M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"} />
                                        </svg>
                                        {"Todos status"}
                                        <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3B4A63"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                          <path d={"M6 9l6 6 6-6"} />
                                        </svg>
                                      </span>
                                      <span style={{ height: "40px", border: "1px solid #C9D6EC", borderRadius: "4px", display: "flex", alignItems: "center", gap: "10px", padding: "0 14px", fontSize: "13px", fontWeight: "600" }}>
                                        <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3B4A63"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                          <path d={"M3 5h18v16H3zM16 3v4M8 3v4M3 10h18"} />
                                        </svg>
                                        {"Qualquer período"}
                                        <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3B4A63"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                          <path d={"M6 9l6 6 6-6"} />
                                        </svg>
                                      </span>
                                    </div>
                                    <div style={{ background: "#FFFFFF", border: "1px solid #C9D6EC", borderRadius: "4px", marginTop: "16px", overflow: "hidden" }}>
                                      <div style={{ display: "grid", gridTemplateColumns: "70px minmax(0,1fr) 300px 200px 160px 200px", padding: "0 16px", height: "46px", alignItems: "center", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#3B4A63", borderBottom: "1px solid #DCE4F2" }}>
                                        <span>
                                          {"ORDEM"}
                                        </span>
                                        <span>
                                          {"BANNER"}
                                        </span>
                                        <span>
                                          {"DESTINO"}
                                        </span>
                                        <span>
                                          {"PERÍODO"}
                                        </span>
                                        <span>
                                          {"STATUS"}
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                          {"AÇÕES"}
                                        </span>
                                      </div>
                                      <div data-reveal={"fade"} data-delay={"350"} style={{ display: "grid", gridTemplateColumns: "70px minmax(0,1fr) 300px 200px 160px 200px", padding: "0 16px", height: "82px", alignItems: "center" }}>
                                        <span style={{ display: "flex", gap: "2px", alignItems: "center" }}>
                                          <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"} />
                                          </svg>
                                          <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M7 4v16M4 17l3 3 3-3M17 20V4M14 7l3-3 3 3"} />
                                          </svg>
                                        </span>
                                        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                          <img src={"/assets/elipecas/b1.png"} alt={""} style={{ width: "80px", height: "48px", borderRadius: "3px", objectFit: "cover" }} />
                                          <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <span style={{ fontSize: "15px", fontWeight: "600" }}>
                                              {"Compressores com frete grátis"}
                                            </span>
                                            <span style={{ fontSize: "13px", color: "#5D6B85" }}>
                                              {"Banner rotativo"}
                                            </span>
                                          </span>
                                        </span>
                                        <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                          <span style={{ fontSize: "15px" }}>
                                            {"Sem destino"}
                                          </span>
                                          <span style={{ fontSize: "13px", color: "#5D6B85" }}>
                                            {"Sem redirecionamento"}
                                          </span>
                                        </span>
                                        <span style={{ fontSize: "13px", color: "#3B4A63" }}>
                                          {"Sempre ativo"}
                                        </span>
                                        <span>
                                          <span style={{ fontSize: "12px", fontWeight: "700", padding: "4px 8px", borderRadius: "4px", background: "#EFFAF1", border: "1px solid #9FD4A9", color: "#1E6B2A" }}>
                                            {"Ativa"}
                                          </span>
                                        </span>
                                        <span style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3B4A63"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M9 9h11v11H9zM5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #F3C1BC", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#D92D20"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"} />
                                            </svg>
                                          </span>
                                        </span>
                                      </div>
                                      <div data-reveal={"fade"} data-delay={"460"} style={{ display: "grid", gridTemplateColumns: "70px minmax(0,1fr) 300px 200px 160px 200px", padding: "0 16px", height: "82px", alignItems: "center", borderTop: "1px solid #DCE4F2" }}>
                                        <span style={{ display: "flex", gap: "2px", alignItems: "center" }}>
                                          <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"} />
                                          </svg>
                                          <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M7 4v16M4 17l3 3 3-3M17 20V4M14 7l3-3 3 3"} />
                                          </svg>
                                        </span>
                                        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                          <img src={"/assets/elipecas/b2.png"} alt={""} style={{ width: "80px", height: "48px", borderRadius: "3px", objectFit: "cover" }} />
                                          <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <span style={{ fontSize: "15px", fontWeight: "600" }}>
                                              {"Linha Bitzer"}
                                            </span>
                                            <span style={{ fontSize: "13px", color: "#5D6B85" }}>
                                              {"Banner rotativo"}
                                            </span>
                                          </span>
                                        </span>
                                        <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                          <span style={{ fontSize: "15px" }}>
                                            {"BITZER"}
                                          </span>
                                          <span style={{ fontSize: "13px", color: "#5D6B85" }}>
                                            {"Categoria"}
                                          </span>
                                        </span>
                                        <span style={{ fontSize: "13px", color: "#3B4A63" }}>
                                          {"Sempre ativo"}
                                        </span>
                                        <span>
                                          <span style={{ fontSize: "12px", fontWeight: "700", padding: "4px 8px", borderRadius: "4px", background: "#EFFAF1", border: "1px solid #9FD4A9", color: "#1E6B2A" }}>
                                            {"Ativa"}
                                          </span>
                                        </span>
                                        <span style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3B4A63"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M9 9h11v11H9zM5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #F3C1BC", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#D92D20"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"} />
                                            </svg>
                                          </span>
                                        </span>
                                      </div>
                                      <div data-reveal={"fade"} data-delay={"570"} style={{ display: "grid", gridTemplateColumns: "70px minmax(0,1fr) 300px 200px 160px 200px", padding: "0 16px", height: "82px", alignItems: "center", borderTop: "1px solid #DCE4F2" }}>
                                        <span style={{ display: "flex", gap: "2px", alignItems: "center" }}>
                                          <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"} />
                                          </svg>
                                          <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M7 4v16M4 17l3 3 3-3M17 20V4M14 7l3-3 3 3"} />
                                          </svg>
                                        </span>
                                        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                          <img src={"/assets/elipecas/b3.png"} alt={""} style={{ width: "80px", height: "48px", borderRadius: "3px", objectFit: "cover" }} />
                                          <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <span style={{ fontSize: "15px", fontWeight: "600" }}>
                                              {"Tubos de cobre"}
                                            </span>
                                            <span style={{ fontSize: "13px", color: "#5D6B85" }}>
                                              {"Banner rotativo"}
                                            </span>
                                          </span>
                                        </span>
                                        <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                          <span style={{ fontSize: "15px" }}>
                                            {"COBRE"}
                                          </span>
                                          <span style={{ fontSize: "13px", color: "#5D6B85" }}>
                                            {"Categoria"}
                                          </span>
                                        </span>
                                        <span style={{ fontSize: "13px", color: "#3B4A63" }}>
                                          {"01/11 – 30/11"}
                                        </span>
                                        <span>
                                          <span style={{ fontSize: "12px", fontWeight: "700", padding: "4px 8px", borderRadius: "4px", background: "#FFF8E7", border: "1px solid #F5D48A", color: "#8A5A00" }}>
                                            {"Agendada"}
                                          </span>
                                        </span>
                                        <span style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3B4A63"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M9 9h11v11H9zM5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #F3C1BC", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#D92D20"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"} />
                                            </svg>
                                          </span>
                                        </span>
                                      </div>
                                      <div data-reveal={"fade"} data-delay={"680"} style={{ display: "grid", gridTemplateColumns: "70px minmax(0,1fr) 300px 200px 160px 200px", padding: "0 16px", height: "82px", alignItems: "center", borderTop: "1px solid #DCE4F2" }}>
                                        <span style={{ display: "flex", gap: "2px", alignItems: "center" }}>
                                          <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"2.6"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01"} />
                                          </svg>
                                          <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M7 4v16M4 17l3 3 3-3M17 20V4M14 7l3-3 3 3"} />
                                          </svg>
                                        </span>
                                        <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                          <img src={"/assets/elipecas/b4.png"} alt={""} style={{ width: "80px", height: "48px", borderRadius: "3px", objectFit: "cover" }} />
                                          <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <span style={{ fontSize: "15px", fontWeight: "600" }}>
                                              {"Manifolds digitais"}
                                            </span>
                                            <span style={{ fontSize: "13px", color: "#5D6B85" }}>
                                              {"Banner rotativo"}
                                            </span>
                                          </span>
                                        </span>
                                        <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                          <span style={{ fontSize: "15px" }}>
                                            {"MANIFOLDS"}
                                          </span>
                                          <span style={{ fontSize: "13px", color: "#5D6B85" }}>
                                            {"Categoria"}
                                          </span>
                                        </span>
                                        <span style={{ fontSize: "13px", color: "#3B4A63" }}>
                                          {"Sempre ativo"}
                                        </span>
                                        <span>
                                          <span style={{ fontSize: "12px", fontWeight: "700", padding: "4px 8px", borderRadius: "4px", background: "#EFFAF1", border: "1px solid #9FD4A9", color: "#1E6B2A" }}>
                                            {"Ativa"}
                                          </span>
                                        </span>
                                        <span style={{ display: "flex", gap: "6px", justifyContent: "flex-end" }}>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#0B5CD6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #B9CBEA", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3B4A63"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M9 9h11v11H9zM5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"} />
                                            </svg>
                                          </span>
                                          <span style={{ width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #F3C1BC", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
                                            <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#D92D20"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                              <path d={"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"} />
                                            </svg>
                                          </span>
                                        </span>
                                      </div>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid #C9D6EC" }}>
                                      <span style={{ fontSize: "13px", color: "#4A5A75" }}>
                                        {"Mostrando 1-4 de 4 campanhas"}
                                      </span>
                                      <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                                        <span style={{ height: "32px", padding: "0 10px", border: "1px solid #C9D6EC", borderRadius: "4px", background: "#FFFFFF", fontSize: "13px", display: "flex", alignItems: "center", gap: "8px" }}>
                                          {"10 por página"}
                                          <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#3B4A63"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M6 9l6 6 6-6"} />
                                          </svg>
                                        </span>
                                        <span style={{ width: "32px", height: "32px", border: "1px solid #C9D6EC", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                          <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M15 18l-6-6 6-6"} />
                                          </svg>
                                        </span>
                                        <span style={{ width: "32px", height: "32px", borderRadius: "4px", background: "#0B5CD6", color: "#FFFFFF", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                          {"1"}
                                        </span>
                                        <span style={{ width: "32px", height: "32px", border: "1px solid #C9D6EC", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                          <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A94A6"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} style={{ flex: "none" }}>
                                            <path d={"M9 18l6-6-6-6"} />
                                          </svg>
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span style={{ position: "absolute", left: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                  <span style={{ position: "absolute", right: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                  <span style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                  <span style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                </div>
                <figcaption data-reveal={"fade"} data-delay={"300"} style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#5A5F66" }}>
                  <span style={{ whiteSpace: "nowrap" }}>
                    {"Fig. 05"}
                  </span>
                  <span style={{ textAlign: "right" }}>
                    {"Campanhas da home no painel · dados de exemplo"}
                  </span>
                </figcaption>
              </figure>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Arquitetura"} style={{ background: "#0B0E13", color: "#ECEBE6" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,64px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #ECEBE6", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"Uma API, duas interfaces, três integrações"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                {"(05) Arquitetura"}
              </span>
            </div>
            {"\n    "}
            <p data-reveal={"fade"} style={{ maxWidth: "640px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty" }}>
              {"A loja e o painel são o mesmo app Next.js. Tudo passa por uma API NestJS documentada em OpenAPI, com Prisma no acesso a dados e filas Bull para o trabalho em segundo plano."}
            </p>
            {"\n    "}
            {v?.showDiagram ? (
              <>
                {"\n      "}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", borderLeft: "1px solid #22272F", borderTop: "1px solid #22272F" }}>
                  {"\n        "}
                  <div data-reveal={"fade"} data-delay={"0"} style={{ background: "#0B0E13", borderRight: "1px solid #22272F", borderBottom: "1px solid #22272F", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                      {"A · Loja"}
                    </div>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px" }}>
                      {"Catálogo e busca"}
                    </div>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px" }}>
                      {"Carrinho de visitante"}
                    </div>
                    <div style={{ padding: "16px 18px", fontSize: "16px" }}>
                      {"Conta e pedidos"}
                    </div>
                  </div>
                  <div data-reveal={"fade"} data-delay={"120"} style={{ background: "#0B0E13", borderRight: "1px solid #22272F", borderBottom: "1px solid #22272F", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                      {"B · Painel admin"}
                    </div>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px" }}>
                      {"Pedidos e pagamentos"}
                    </div>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px" }}>
                      {"Produtos e categorias"}
                    </div>
                    <div style={{ padding: "16px 18px", fontSize: "16px" }}>
                      {"Destaques da home"}
                    </div>
                  </div>
                  <div data-reveal={"fade"} data-delay={"240"} style={{ background: "#0B0E13", borderRight: "1px solid #22272F", borderBottom: "1px solid #22272F", display: "flex", flexDirection: "column", boxShadow: "inset 0 0 0 1px #3D6BFF" }}>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #2A3A66", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D6BFF" }}>
                      {"C · API NestJS"}
                    </div>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #2A3A66", fontSize: "16px" }}>
                      {"81 endpoints · OpenAPI"}
                    </div>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #2A3A66", fontSize: "16px" }}>
                      {"Auth com refresh token"}
                    </div>
                    <div style={{ padding: "16px 18px", fontSize: "16px" }}>
                      {"Prisma e filas Bull"}
                    </div>
                  </div>
                  <div data-reveal={"fade"} data-delay={"360"} style={{ background: "#0B0E13", borderRight: "1px solid #22272F", borderBottom: "1px solid #22272F", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                      {"D · Integrações"}
                    </div>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px" }}>
                      {"WhatsApp multissessão"}
                    </div>
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px" }}>
                      {"OfficeWeb"}
                    </div>
                    <div style={{ padding: "16px 18px", fontSize: "16px" }}>
                      {"Pagamentos"}
                    </div>
                  </div>
                  {"\n      "}
                </div>
                {"\n    "}
              </>
            ) : null}
            {"\n    "}
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #ECEBE6" }}>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"auth/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Registro, login, refresh e logout. Rotas públicas e rotas por papel."}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"60"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"cart/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Carrinho por visitante, itens por variante e merge com a conta no login."}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"120"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"categories/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Árvore de categorias por slug, com exclusão lógica."}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"180"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"orders/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Pedido criado a partir do carrinho, status pelo admin e contato com o suporte."}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"240"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"payments/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Checkout, pagamento transparente, consulta de status, cancelamento e estorno."}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"300"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"admin/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Painel, execuções do OfficeWeb e destaques da home com upload e reordenação."}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"360"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"whatsapp/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Sessões por QR code ou código de pareamento, sessão ativa e configuração."}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"420"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"health/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Saúde da API e observabilidade."}
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", borderTop: "1px solid #22272F" }}>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "24px 24px 24px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontSize: "clamp(40px,4vw,56px)", fontWeight: "500", letterSpacing: "-0.045em", lineHeight: "0.95" }}>
                  <span data-count={"118"}>
                    {"118"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.5", color: "#9AA1AB" }}>
                  {"arquivos TypeScript no backend"}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"100"} style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "24px 24px 24px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontSize: "clamp(40px,4vw,56px)", fontWeight: "500", letterSpacing: "-0.045em", lineHeight: "0.95" }}>
                  <span data-count={"208"}>
                    {"208"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.5", color: "#9AA1AB" }}>
                  {"arquivos TypeScript no frontend"}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"200"} style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "24px 24px 24px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontSize: "clamp(40px,4vw,56px)", fontWeight: "500", letterSpacing: "-0.045em", lineHeight: "0.95" }}>
                  <span data-count={"1112"}>
                    {"1.112"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.5", color: "#9AA1AB" }}>
                  {"arestas tipadas de execução"}
                </span>
              </div>
              <div data-reveal={"fade"} data-delay={"300"} style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "24px 24px 24px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontSize: "clamp(40px,4vw,56px)", fontWeight: "500", letterSpacing: "-0.045em", lineHeight: "0.95" }}>
                  <span data-count={"164"}>
                    {"164"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.5", color: "#9AA1AB" }}>
                  {"classes no backend"}
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Decisões técnicas"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(56px,7vw,96px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"O que sustenta a loja"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(06) Decisões técnicas"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"01"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"Carrinho que acompanha o visitante"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"O carrinho funciona sem login e é mesclado à conta quando o cliente entra. Os itens são guardados por variante, então quantidade e remoção não dependem do produto pai."}
                </p>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"80"} style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"02"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"WhatsApp como canal de venda"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"O painel gerencia várias sessões de WhatsApp, conectadas por QR code ou código de pareamento, e define qual fica ativa. No catálogo, o botão Consultar leva o produto direto para a conversa."}
                </p>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"03"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"Vitrine controlada pelo painel"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Banners, cards promocionais e destaques da loja têm imagem, destino, período e ordem. A loja lê uma rota pública dedicada, separada das rotas administrativas."}
                </p>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"80"} style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"04"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"Pagamento com ciclo completo"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"O cliente tem checkout, pagamento transparente e consulta de status. Cancelamento e estorno pelo admin ficam restritos por papel."}
                </p>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"05"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"Integração com o OfficeWeb"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Cada execução da integração fica registrada e pode ser consultada no painel, o que mostra o que foi sincronizado e quando."}
                </p>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"80"} style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"06"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"Arquitetura legível para IA"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Um comando lê o código por AST e gera inventário, índice de rotas, injeções e fluxos de execução. O documento é regenerado depois de mudanças em controllers, rotas, Prisma ou OpenAPI."}
                </p>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Stack"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingBottom: "clamp(72px,9vw,128px)" }}>
            {"\n    "}
            <div data-reveal={"fade"} style={{ display: "flex", flexWrap: "wrap", gap: "20px clamp(32px,5vw,80px)", alignItems: "baseline", borderTop: "1px solid #0B0E13", paddingTop: "24px" }}>
              {"\n      "}
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(07) Stack"}
              </span>
              {"\n      "}
              <div style={{ flex: "1 1 480px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"Next.js"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"NestJS"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"TypeScript"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"Prisma"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"Bull"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"Redis"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"OpenAPI"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"JWT"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"WhatsApp"}
                </span>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Próximo case"} style={{ background: "#0B0E13", color: "#ECEBE6" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(56px,7vw,96px)" }}>
            {"\n    "}
            <a className={"dh7"} href={"/cases/cultura-verde"} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "32px 0", borderTop: "1px solid #22272F", borderBottom: "1px solid #22272F", color: "#ECEBE6", transition: "color .2s" }}>
              {"\n      "}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                  {"Próximo case · 03"}
                </span>
                {"\n        "}
                <span style={{ display: "flex", alignItems: "center", gap: "clamp(16px,2vw,28px)" }}>
                  <span style={{ fontSize: "clamp(48px,7vw,104px)", fontWeight: "500", letterSpacing: "-0.045em", lineHeight: "0.94" }}>
                    {"Cultura Verde"}
                  </span>
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <span style={{ fontSize: "clamp(40px,5vw,72px)", lineHeight: "1" }}>
                {"→"}
              </span>
              {"\n    "}
            </a>
            {"\n  "}
          </div>
        </section>
        <footer id={"contato"} data-screen-label={"Contato"} style={{ background: "#0B0E13", color: "#ECEBE6" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(80px,10vw,144px)", paddingBottom: "32px", display: "flex", flexDirection: "column", gap: "clamp(56px,7vw,104px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {"\n      "}
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                {"(08) Contato"}
              </span>
              {"\n      "}
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", maxWidth: "12ch", fontSize: "clamp(48px,8.6vw,132px)", lineHeight: "0.94", letterSpacing: "-0.045em", fontWeight: "500", textWrap: "balance" }}>
                  {"Tem um projeto em mente?"}
                </h2>
              </div>
              {"\n      "}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px clamp(32px,5vw,96px)", alignItems: "flex-end" }}>
                {"\n        "}
                <p style={{ flex: "1 1 320px", maxWidth: "460px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty" }}>
                  {"Estou aberto a conversar sobre oportunidades em engenharia de software e projetos que precisam de desenvolvimento prático."}
                </p>
                {"\n        "}
                <a className={"dh8"} href={"mailto:derik@devsehn.com"} style={{ flex: "1 1 360px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingBottom: "12px", borderBottom: "2px solid #ECEBE6", fontSize: "clamp(24px,3vw,44px)", fontWeight: "500", letterSpacing: "-0.03em", color: "#ECEBE6", transition: "color .2s,border-color .2s" }}>
                  {"derik@devsehn.com"}
                  <span>
                    {"↗"}
                  </span>
                </a>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px 32px", paddingTop: "24px", borderTop: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#9AA1AB" }}>
              {"\n      "}
              <span>
                {"© 2026 · Derik Sehn — Engenheiro de software"}
              </span>
              {"\n      "}
              <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
                {"\n        "}
                <a className={"dh9"} href={"#"} style={{ color: "#ECEBE6" }}>
                  {"LinkedIn ↗"}
                </a>
                {"\n        "}
                <a className={"dh10"} href={"https://github.com/DerikSehn"} target={"_blank"} rel={"noopener"} style={{ color: "#ECEBE6" }}>
                  {"GitHub ↗"}
                </a>
                {"\n        "}
                <a className={"dh11"} href={"https://docs.google.com/document/d/1bCk5xYPFQ3WOpzAvrsFbf4y7sXdSpJFS/edit?usp=sharing&ouid=107891843000990713036&rtpof=true&sd=true"} target={"_blank"} rel={"noopener"} style={{ color: "#ECEBE6" }}>
                  {"CV ↓"}
                </a>
                {"\n        "}
                <a className={"dh12"} href={"#top"} style={{ color: "#9AA1AB" }}>
                  {"Topo ↑"}
                </a>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </footer>
      </div>
    </>
  );
}
