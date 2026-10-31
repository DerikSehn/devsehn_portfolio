'use client';
/* eslint-disable */
// GERADO por scripts/sync-design.mjs a partir de "Eli Control Case.dc.html". Não edite à mão:
// altere o design e rode `npm run design:sync -- <pasta-do-design>`.
import React from 'react';
import { useDC } from '@/lib/dc';
import Logic from '@/lib/logic/eli-control';

const CSS = "@media (max-width:860px){header nav{display:none!important}}\nhtml{scroll-behavior:smooth}\nbody{margin:0;background:#0B0E13;font-family:'Schibsted Grotesk',system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:inherit;text-decoration:none}\na:hover{color:#3D6BFF}\n*{box-sizing:border-box}\n::selection{background:#3D6BFF;color:#FFFFFF}\n.dh1:hover{color:#FFFFFF !important}\n.dh2:hover{color:#FFFFFF !important}\n.dh3:hover{color:#FFFFFF !important}\n.dh4:hover{color:#FFFFFF !important}\n.dh5:hover{border-color:#ECEBE6 !important}\n.dh6:hover{color:#ECEBE6 !important}\n.dh7:hover{color:#3D6BFF !important}\n.dh8:hover{color:#3D6BFF !important;border-color:#3D6BFF !important}\n.dh9:hover{color:#3D6BFF !important}\n.dh10:hover{color:#3D6BFF !important}\n.dh11:hover{color:#3D6BFF !important}\n.dh12:hover{color:#ECEBE6 !important}";

const FONTS: string[] = [
  "https://fonts.googleapis.com/css2?family=Geist:wght@300;600&display=swap",
  "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Geist:wght@400;500;600;700&display=swap"
];

const DEFAULTS: Record<string, unknown> = {"showDiagram":true,"showGallery":true};

// Valor interpolado no texto: o runtime do design o envolve em <span class="sc-interp">.
const H = (x: any) => (x === undefined || x === null || typeof x === 'boolean' ? null : <span className="sc-interp">{String(x)}</span>);

export default function EliControlView(props: Record<string, unknown>) {
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
        </header>
        <section id={"top"} data-screen-label={"Case hero"} style={{ background: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(40px,6vw,80px)", paddingBottom: "clamp(56px,7vw,96px)", display: "flex", flexDirection: "column", gap: "clamp(36px,5vw,64px)" }}>
            {"\n    "}
            <div style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", borderBottom: "1px solid #22272F", paddingBottom: "16px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
              {"\n      "}
              <a className={"dh6"} href={"/#trabalhos"} style={{ color: "#9AA1AB" }}>
                {"← Trabalhos"}
              </a>
              {"\n      "}
              <span>
                {"Case 01 · Monitoramento de refrigeração"}
              </span>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "flex", alignItems: "center", gap: "clamp(16px,2vw,28px)" }}>
              {"\n      "}
              <img src={"/assets/eli_mark.png"} alt={"Eli Group"} style={{ height: "clamp(48px,7vw,104px)", width: "auto" }} />
              {"\n      "}
              <h1 style={{ margin: "0", fontSize: "clamp(48px,8.6vw,132px)", lineHeight: "0.94", letterSpacing: "-0.045em", fontWeight: "500" }}>
                {"Eli Control"}
              </h1>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "32px clamp(32px,5vw,96px)", alignItems: "flex-start" }}>
              {"\n      "}
              <p style={{ flex: "1.4 1 420px", maxWidth: "720px", margin: "0", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty", fontSize: "clamp(18px,1.6vw,21px)" }}>
                {"Plataforma que centraliza a telemetria de câmaras frias, expositores e compressores de supermercados, padarias e hospitais. Ela transforma leituras de controladores de fabricantes diferentes em "}
                <span style={{ color: "#ECEBE6" }}>
                  {"alarmes acionáveis, relatórios auditáveis e operação remota"}
                </span>
                {"."}
              </p>
              {"\n      "}
              <dl style={{ flex: "1 1 320px", margin: "0", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", borderTop: "1px solid #22272F" }}>
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
                  {"Web, mobile, API e workers"}
                </dd>
                {"\n        "}
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Stack"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Next.js · NestJS · PostgreSQL · MQTT"}
                </dd>
                {"\n      "}
              </dl>
              {"\n    "}
            </div>
            {"\n    "}
            <figure style={{ flex: "1.4 1 460px", minWidth: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ viewTransitionName: "case-media", position: "relative", border: "1px solid #22272F", background: "#0F1319" }}>
                <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                  <div data-fit={"1600"} style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                    <div style={{ position: "relative", width: "1600px", height: "900px", transformOrigin: "0 0", background: "#0F1319", fontFamily: "'Geist',system-ui,sans-serif" }}>
                      <div style={{ position: "absolute", left: "56px", top: "50px", width: "1240px", height: "800px", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", background: "#FFFFFF", boxShadow: "0 40px 80px -30px rgba(0,0,0,0.45)" }}>
                        <div style={{ height: "38px", flex: "none", background: "#ECEAF3", borderBottom: "1px solid #DDD8EA", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px" }}>
                          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57" }} />
                          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FEBC2E" }} />
                          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840" }} />
                          <div style={{ marginLeft: "18px", width: "420px", height: "24px", borderRadius: "6px", background: "#FFFFFF", fontSize: "12px", color: "#6B6880", display: "flex", alignItems: "center", gap: "6px", padding: "0 10px" }}>
                            <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A8799"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                              <path d={"M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z"} />
                            </svg>
                            {"Eli Control · Central operacional"}
                          </div>
                        </div>
                        <div style={{ display: "flex", height: "762px", background: "#F7F6FB", color: "#1E1B2E" }}>
                          <div style={{ width: "52px", flex: "none", background: "#FFFFFF", borderRight: "1px solid #E7E3F1", display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 0", gap: "6px" }}>
                            <div style={{ width: "30px", height: "30px", overflow: "hidden", marginBottom: "14px" }}>
                              <img src={"/assets/elicontrol_logo.png"} alt={""} style={{ height: "30px", width: "auto", maxWidth: "none" }} />
                            </div>
                            {((v?.navCentral) || []).map((L_n: any, $index: number) => (
                              <React.Fragment key={$index}>
                                <div style={{ width: "36px", height: "34px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: (`${L_n?.bg ?? ""}` as any) }}>
                                  <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={L_n?.c} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={L_n?.d} />
                                  </svg>
                                </div>
                              </React.Fragment>
                            ))}
                            <div style={{ marginTop: "auto", width: "30px", height: "30px", borderRadius: "50%", background: "#5B3FD9", color: "#FFFFFF", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"A"}
                            </div>
                          </div>
                          <div style={{ flex: "1", minWidth: "0", padding: "18px 24px", display: "flex", flexDirection: "column", gap: "14px", overflow: "hidden" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                  <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#5B3FD9"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M22 12h-4l-3 9L9 3l-3 9H2"} />
                                  </svg>
                                  <span style={{ fontSize: "28px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                                    {"Central operacional"}
                                  </span>
                                </div>
                                <span style={{ fontSize: "13px", color: "#4B4860", paddingLeft: "32px" }}>
                                  {"Monitoramento em tempo real de alarmes, conectividade e leituras por empresa."}
                                </span>
                              </div>
                              <span style={{ height: "30px", padding: "0 10px", border: "1px solid #E2DDF0", borderRadius: "7px", background: "#FFFFFF", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px", color: "#1E1B2E" }}>
                                <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                  <path d={"M11 5 6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6"} />
                                </svg>
                                {"Som"}
                              </span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "4px", padding: "4px", borderRadius: "12px", background: "#ECE9F6", border: "1px solid #E2DDF0" }}>
                              <div style={{ height: "36px", borderRadius: "9px", background: "#FFFFFF", boxShadow: "0 1px 2px rgba(30,27,46,0.08)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", fontWeight: "500" }}>
                                <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                  <path d={"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"} />
                                </svg>
                                {"Empresas"}
                              </div>
                              <div style={{ height: "36px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", fontWeight: "500" }}>
                                <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                  <path d={"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"} />
                                </svg>
                                {"Visão geral"}
                              </div>
                              <div style={{ height: "36px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "13px", fontWeight: "500" }}>
                                <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                  <path d={"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"} />
                                </svg>
                                {"Alarmes"}
                              </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px" }}>
                                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#16A34A" }} />
                                <span style={{ color: "#15803D", fontWeight: "500" }}>
                                  {"Ao vivo"}
                                </span>
                                <span style={{ color: "#4B4860" }}>
                                  {"Atualizado agora"}
                                </span>
                                <span style={{ color: "#4B4860" }}>
                                  {"12 empresas"}
                                </span>
                              </div>
                              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                                <span style={{ width: "230px", height: "32px", border: "1px solid #E2DDF0", borderRadius: "8px", background: "#FFFFFF", fontSize: "12px", color: "#6B6880", display: "flex", alignItems: "center", gap: "8px", padding: "0 10px" }}>
                                  <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6B6880"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M11 4a7 7 0 1 0 0 14 7 7 0 1 0 0-14zM21 21l-4.3-4.3"} />
                                  </svg>
                                  {"Buscar empresa"}
                                </span>
                                <span style={{ height: "30px", padding: "0 10px", border: "1px solid #E2DDF0", borderRadius: "7px", background: "#FFFFFF", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px", color: "#1E1B2E" }}>
                                  {"Todos os estados ▾"}
                                </span>
                                <span style={{ display: "flex", border: "1px solid #E2DDF0", borderRadius: "7px", overflow: "hidden" }}>
                                  <span style={{ width: "32px", height: "30px", background: "#E4DEF8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#5B3FD9"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"} />
                                    </svg>
                                  </span>
                                  <span style={{ width: "32px", height: "30px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"} />
                                    </svg>
                                  </span>
                                </span>
                                <span style={{ height: "30px", padding: "0 8px", border: "1px solid #E2DDF0", borderRadius: "7px", background: "#FFFFFF", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px", color: "#1E1B2E" }}>
                                  <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5"} />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(8,minmax(0,1fr))", gap: "10px" }}>
                              {((v?.kpis) || []).map((L_k: any, $index: number) => (
                                <React.Fragment key={$index}>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "6px 8px 8px", borderBottom: "1px solid #E7E3F1", background: "#FBFAFD" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "6px" }}>
                                      <span style={{ fontSize: "10px", color: "#4B4860", lineHeight: "1.2" }}>
                                        {H(L_k?.k)}
                                      </span>
                                      <span style={{ fontSize: "17px", fontWeight: "600" }}>
                                        {H(L_k?.v)}
                                      </span>
                                    </div>
                                    <svg viewBox={"0 0 100 24"} preserveAspectRatio={"none"} style={{ width: "100%", height: "22px" }}>
                                      <polyline points={L_k?.pts} fill={"none"} stroke={"#6D5BD0"} strokeWidth={"1.4"} vectorEffect={"non-scaling-stroke"} />
                                    </svg>
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                              <div style={{ display: "flex", gap: "6px", alignItems: "baseline", fontSize: "13px", fontWeight: "600" }}>
                                {"Requer ação"}
                                <span style={{ fontSize: "11px", fontWeight: "400", color: "#6B6880" }}>
                                  {"2"}
                                </span>
                              </div>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "10px" }}>
                                {((v?.urgent) || []).map((L_c: any, $index: number) => (
                                  <React.Fragment key={$index}>
                                    <div style={{ background: "#FFFFFF", border: "1px solid #ECE5DE", borderLeft: (`4px solid ${L_c?.border ?? ""}` as any), borderRadius: "6px", padding: "12px 14px 8px", display: "flex", flexDirection: "column", gap: "6px", height: "132px", overflow: "hidden" }}>
                                      <div style={{ fontSize: "16px", fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                        {H(L_c?.name)}
                                      </div>
                                      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#4B4860" }}>
                                        <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                          <path d={"M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM12 6v6l4 2"} />
                                        </svg>
                                        {H(L_c?.time)}
                                      </div>
                                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#4B4860", marginTop: "4px" }}>
                                        <span style={{ fontWeight: "600" }}>
                                          {"24H"}
                                        </span>
                                        <span style={{ color: (`${L_c?.tc ?? ""}` as any) }}>
                                          {H(L_c?.t)}
                                        </span>
                                      </div>
                                      <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "30px", borderBottom: "1px dashed #D6D2E2" }}>
                                        {((L_c?.bars) || []).map((L_b: any, $index: number) => (
                                          <React.Fragment key={$index}>
                                            <span style={{ flex: "1", height: (`${L_b?.h ?? ""}` as any), background: "#7B61D9", borderRadius: "1px 1px 0 0" }} />
                                          </React.Fragment>
                                        ))}
                                      </div>
                                      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "4px", fontSize: "10px", color: (`${L_c?.cc ?? ""}` as any) }}>
                                        <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={L_c?.cc} strokeWidth={"2"} strokeLinecap={"round"}>
                                          <path d={"M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01M2 9a15 15 0 0 1 20 0"} />
                                        </svg>
                                        {H(L_c?.conn)}
                                      </div>
                                    </div>
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                              <div style={{ display: "flex", gap: "6px", alignItems: "baseline", fontSize: "13px", fontWeight: "600" }}>
                                {"Atenção"}
                                <span style={{ fontSize: "11px", fontWeight: "400", color: "#6B6880" }}>
                                  {"7"}
                                </span>
                              </div>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "10px" }}>
                                {((v?.attention) || []).map((L_c: any, $index: number) => (
                                  <React.Fragment key={$index}>
                                    <div style={{ background: "#FFFFFF", border: "1px solid #ECE5DE", borderLeft: (`4px solid ${L_c?.border ?? ""}` as any), borderRadius: "6px", padding: "12px 14px 8px", display: "flex", flexDirection: "column", gap: "6px", height: "132px", overflow: "hidden" }}>
                                      <div style={{ fontSize: "16px", fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                        {H(L_c?.name)}
                                      </div>
                                      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#4B4860" }}>
                                        <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                          <path d={"M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM12 6v6l4 2"} />
                                        </svg>
                                        {H(L_c?.time)}
                                      </div>
                                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#4B4860", marginTop: "4px" }}>
                                        <span style={{ fontWeight: "600" }}>
                                          {"24H"}
                                        </span>
                                        <span style={{ color: (`${L_c?.tc ?? ""}` as any) }}>
                                          {H(L_c?.t)}
                                        </span>
                                      </div>
                                      <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "30px", borderBottom: "1px dashed #D6D2E2" }}>
                                        {((L_c?.bars) || []).map((L_b: any, $index: number) => (
                                          <React.Fragment key={$index}>
                                            <span style={{ flex: "1", height: (`${L_b?.h ?? ""}` as any), background: "#7B61D9", borderRadius: "1px 1px 0 0" }} />
                                          </React.Fragment>
                                        ))}
                                      </div>
                                      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "4px", fontSize: "10px", color: (`${L_c?.cc ?? ""}` as any) }}>
                                        <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={L_c?.cc} strokeWidth={"2"} strokeLinecap={"round"}>
                                          <path d={"M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01M2 9a15 15 0 0 1 20 0"} />
                                        </svg>
                                        {H(L_c?.conn)}
                                      </div>
                                    </div>
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                              <div style={{ display: "flex", gap: "6px", alignItems: "baseline", fontSize: "13px", fontWeight: "600" }}>
                                {"OK"}
                                <span style={{ fontSize: "11px", fontWeight: "400", color: "#6B6880" }}>
                                  {"3"}
                                </span>
                              </div>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "10px" }}>
                                {((v?.ok) || []).map((L_c: any, $index: number) => (
                                  <React.Fragment key={$index}>
                                    <div style={{ background: "#FFFFFF", border: "1px solid #ECE5DE", borderLeft: (`4px solid ${L_c?.border ?? ""}` as any), borderRadius: "6px", padding: "12px 14px 8px", display: "flex", flexDirection: "column", gap: "6px", height: "132px", overflow: "hidden" }}>
                                      <div style={{ fontSize: "16px", fontWeight: "500", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                        {H(L_c?.name)}
                                      </div>
                                      <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#4B4860" }}>
                                        <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                          <path d={"M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM12 6v6l4 2"} />
                                        </svg>
                                        {H(L_c?.time)}
                                      </div>
                                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#4B4860", marginTop: "4px" }}>
                                        <span style={{ fontWeight: "600" }}>
                                          {"24H"}
                                        </span>
                                        <span style={{ color: (`${L_c?.tc ?? ""}` as any) }}>
                                          {H(L_c?.t)}
                                        </span>
                                      </div>
                                      <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "30px", borderBottom: "1px dashed #D6D2E2" }}>
                                        {((L_c?.bars) || []).map((L_b: any, $index: number) => (
                                          <React.Fragment key={$index}>
                                            <span style={{ flex: "1", height: (`${L_b?.h ?? ""}` as any), background: "#7B61D9", borderRadius: "1px 1px 0 0" }} />
                                          </React.Fragment>
                                        ))}
                                      </div>
                                      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "4px", fontSize: "10px", color: (`${L_c?.cc ?? ""}` as any) }}>
                                        <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={L_c?.cc} strokeWidth={"2"} strokeLinecap={"round"}>
                                          <path d={"M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01M2 9a15 15 0 0 1 20 0"} />
                                        </svg>
                                        {H(L_c?.conn)}
                                      </div>
                                    </div>
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div style={{ position: "absolute", left: "1236px", top: "140px", transform: "scale(0.82)", transformOrigin: "0 0" }}>
                        <div style={{ width: "380px", height: "800px", borderRadius: "54px", background: "#0D0C14", padding: "11px", boxShadow: "0 50px 90px -30px rgba(0,0,0,0.55),inset 0 0 0 2px #2A2833" }}>
                          <div style={{ position: "relative", width: "358px", height: "778px", borderRadius: "44px", overflow: "hidden", background: "#F5F3FA", color: "#1E1B2E", display: "flex", flexDirection: "column" }}>
                            <div style={{ height: "44px", flex: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", fontSize: "14px", fontWeight: "600", background: "#FFFFFF" }}>
                              <span>
                                {"9:41"}
                              </span>
                              <span style={{ width: "96px", height: "28px", borderRadius: "14px", background: "#0D0C14" }} />
                              <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                <span style={{ display: "flex", gap: "2px", alignItems: "flex-end" }}>
                                  <span style={{ width: "3px", height: "5px", background: "#1E1B2E", borderRadius: "1px" }} />
                                  <span style={{ width: "3px", height: "7px", background: "#1E1B2E", borderRadius: "1px" }} />
                                  <span style={{ width: "3px", height: "9px", background: "#1E1B2E", borderRadius: "1px" }} />
                                  <span style={{ width: "3px", height: "11px", background: "#1E1B2E", borderRadius: "1px" }} />
                                </span>
                                <span style={{ width: "22px", height: "11px", borderRadius: "3px", border: "1.5px solid #1E1B2E", padding: "1px" }}>
                                  <span style={{ display: "block", width: "70%", height: "100%", background: "#1E1B2E", borderRadius: "1px" }} />
                                </span>
                              </span>
                            </div>
                            <div style={{ height: "54px", flex: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", background: "#FFFFFF", borderBottom: "1px solid #EEEBF5" }}>
                              <img src={"/assets/elicontrol_logo.png"} alt={"Eli Control"} style={{ height: "30px", width: "auto" }} />
                              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#5B3FD9", color: "#FFFFFF", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  {"A"}
                                </span>
                                <span style={{ width: "34px", height: "34px", borderRadius: "9px", border: "1px solid #E2DDF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M4 6h16M4 12h16M4 18h16"} />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div style={{ flex: "1", minHeight: "0", overflow: "hidden", padding: "10px 8px", display: "flex", flexDirection: "column", gap: "10px" }}>
                              <div style={{ borderRadius: "18px", padding: "14px", background: "linear-gradient(140deg,#2B2645,#15122A)", display: "flex", flexDirection: "column", gap: "12px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", alignItems: "flex-start" }}>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                                    <span style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "700", lineHeight: "1.15" }}>
                                      {"Mercado Exemplo"}
                                    </span>
                                    <span style={{ color: "#C9C5DA", fontSize: "10px" }}>
                                      {"Última atividade em 27/10..."}
                                    </span>
                                  </div>
                                  <div style={{ display: "flex", gap: "4px", flex: "none" }}>
                                    <span style={{ width: "28px", height: "28px", borderRadius: "7px", background: "#F1EFF8", border: "1px solid #F1EFF8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M3 5h18v14H3zM22 6l-10 7L2 6"} />
                                      </svg>
                                    </span>
                                    <span style={{ width: "28px", height: "28px", borderRadius: "7px", background: "#F1EFF8", border: "1px solid #F1EFF8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"} />
                                      </svg>
                                    </span>
                                    <span style={{ width: "28px", height: "28px", borderRadius: "7px", background: "#F1EFF8", border: "1px solid #F1EFF8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"} />
                                      </svg>
                                    </span>
                                    <span style={{ width: "28px", height: "28px", borderRadius: "7px", background: "#3B2A1E", border: "1px solid #7A4A1E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#F59E0B"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M18.4 6.6a9 9 0 1 1-12.8 0M12 2v10M3 3l18 18"} />
                                      </svg>
                                    </span>
                                    <span style={{ width: "28px", height: "28px", borderRadius: "7px", background: "#3A1E26", border: "1px solid #7A2A36", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#F87171"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"} />
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                                  <div style={{ borderRadius: "12px", padding: "10px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                                      <span style={{ width: "24px", height: "24px", flex: "none", borderRadius: "6px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                          <path d={"M22 12h-4l-3 9L9 3l-3 9H2"} />
                                        </svg>
                                      </span>
                                      <span style={{ fontSize: "8px", fontWeight: "600", letterSpacing: "0.12em", color: "#E4E1EE", lineHeight: "1.25" }}>
                                        {"INSTRUMENTOS"}
                                      </span>
                                    </div>
                                    <span style={{ fontSize: "20px", fontWeight: "700", color: "#FFFFFF" }}>
                                      {"14"}
                                    </span>
                                    <span style={{ fontSize: "9px", color: "#C9C5DA", lineHeight: "1.3" }}>
                                      {"Distribuídos em 1 conversor"}
                                    </span>
                                  </div>
                                  <div style={{ borderRadius: "12px", padding: "10px", background: "rgba(45,160,140,0.14)", border: "1px solid rgba(45,160,140,0.32)", display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                                      <span style={{ width: "24px", height: "24px", flex: "none", borderRadius: "6px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                          <path d={"M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"} />
                                        </svg>
                                      </span>
                                      <span style={{ fontSize: "8px", fontWeight: "600", letterSpacing: "0.12em", color: "#E4E1EE", lineHeight: "1.25" }}>
                                        {"CONVERSORES ATIVOS"}
                                      </span>
                                    </div>
                                    <span style={{ fontSize: "20px", fontWeight: "700", color: "#FFFFFF" }}>
                                      {"1/1"}
                                    </span>
                                    <span style={{ fontSize: "9px", color: "#C9C5DA", lineHeight: "1.3" }}>
                                      {"1 conversor cadastrado"}
                                    </span>
                                  </div>
                                  <div style={{ borderRadius: "12px", padding: "10px", background: "rgba(220,70,110,0.14)", border: "1px solid rgba(220,70,110,0.32)", display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                                      <span style={{ width: "24px", height: "24px", flex: "none", borderRadius: "6px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                          <path d={"M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"} />
                                        </svg>
                                      </span>
                                      <span style={{ fontSize: "8px", fontWeight: "600", letterSpacing: "0.12em", color: "#E4E1EE", lineHeight: "1.25" }}>
                                        {"ALARMES ABERTOS"}
                                      </span>
                                    </div>
                                    <span style={{ fontSize: "20px", fontWeight: "700", color: "#FFFFFF" }}>
                                      {"7"}
                                    </span>
                                    <span style={{ fontSize: "9px", color: "#C9C5DA", lineHeight: "1.3" }}>
                                      {"7 emergências em aberto"}
                                    </span>
                                  </div>
                                  <div style={{ borderRadius: "12px", padding: "10px", background: "rgba(220,150,60,0.12)", border: "1px solid rgba(220,150,60,0.3)", display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                                      <span style={{ width: "24px", height: "24px", flex: "none", borderRadius: "6px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                          <path d={"M9 2h6v4H9zM16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"} />
                                        </svg>
                                      </span>
                                      <span style={{ fontSize: "8px", fontWeight: "600", letterSpacing: "0.12em", color: "#E4E1EE", lineHeight: "1.25" }}>
                                        {"SOLICITAÇÕES EM ANDAMENTO"}
                                      </span>
                                    </div>
                                    <span style={{ fontSize: "20px", fontWeight: "700", color: "#FFFFFF" }}>
                                      {"0"}
                                    </span>
                                    <span style={{ fontSize: "9px", color: "#C9C5DA", lineHeight: "1.3" }}>
                                      {"Nenhuma solicitação em andamento"}
                                    </span>
                                  </div>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2px", padding: "4px", borderRadius: "12px", background: "#E9E6F5" }}>
                                  <div style={{ height: "40px", borderRadius: "9px", background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", fontSize: "9px", color: "#1E1B2E" }}>
                                    <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M22 12h-4l-3 9L9 3l-3 9H2"} />
                                    </svg>
                                    {"Instrumentos"}
                                  </div>
                                  <div style={{ height: "40px", borderRadius: "9px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", fontSize: "9px", color: "#1E1B2E" }}>
                                    <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h8"} />
                                    </svg>
                                    {"Relatórios"}
                                  </div>
                                  <div style={{ height: "40px", borderRadius: "9px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", fontSize: "9px", color: "#1E1B2E" }}>
                                    <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M3 3v18h18M7 15l4-4 3 3 5-6"} />
                                    </svg>
                                    {"Análise"}
                                  </div>
                                  <div style={{ height: "40px", borderRadius: "9px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", fontSize: "9px", color: "#1E1B2E" }}>
                                    <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM12 16v-4M12 8h.01"} />
                                    </svg>
                                    {"Informações"}
                                  </div>
                                </div>
                              </div>
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "6px" }}>
                                <span style={{ height: "30px", padding: "0 8px", border: "1px solid #E2DDF0", borderRadius: "7px", background: "#FFFFFF", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px", color: "#1E1B2E" }}>
                                  {"Reordenar"}
                                </span>
                                <span style={{ display: "flex", gap: "2px", padding: "2px", border: "1px solid #E2DDF0", borderRadius: "8px", background: "#FFFFFF" }}>
                                  <span style={{ height: "26px", padding: "0 9px", borderRadius: "6px", display: "flex", alignItems: "center", gap: "5px", fontSize: "12px" }}>
                                    <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"} />
                                    </svg>
                                    {"Detalhes"}
                                  </span>
                                  <span style={{ height: "26px", padding: "0 9px", borderRadius: "6px", background: "#5B3FD9", color: "#FFFFFF", display: "flex", alignItems: "center", gap: "5px", fontSize: "12px" }}>
                                    <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"} />
                                    </svg>
                                    {"Painel"}
                                  </span>
                                </span>
                              </div>
                              <div style={{ background: "#FFFFFF", border: "1px solid #E7E3F1", borderRadius: "10px", padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "0" }}>
                                  <span style={{ width: "32px", height: "32px", flex: "none", borderRadius: "50%", background: "#EEEBF7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#5B3FD9"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M22 12h-4l-3 9L9 3l-3 9H2"} />
                                    </svg>
                                  </span>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                                    <span style={{ fontSize: "9px", letterSpacing: "0.14em", fontWeight: "600", color: "#4B4860" }}>
                                      {"CONVERSOR"}
                                    </span>
                                    <span style={{ fontSize: "11px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                      {"demo@matriz@TCP-485_1"}
                                    </span>
                                  </div>
                                </div>
                                <div style={{ display: "flex", gap: "6px", flex: "none" }}>
                                  <span style={{ height: "24px", padding: "0 8px", borderRadius: "6px", background: "#ECFDF3", border: "1px solid #BBE5CB", color: "#15803D", fontSize: "11px", display: "flex", alignItems: "center", gap: "5px" }}>
                                    <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#15803D"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM12 6v6l4 2"} />
                                    </svg>
                                    {"13:05"}
                                  </span>
                                  <span style={{ height: "24px", padding: "0 8px", borderRadius: "6px", background: "#FEF2F2", border: "1px solid #F5C6C6", color: "#DC2626", fontSize: "11px", display: "flex", alignItems: "center", gap: "5px" }}>
                                    <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#DC2626"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"} />
                                    </svg>
                                    {"7"}
                                  </span>
                                </div>
                              </div>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "6px" }}>
                                {((v?.instMobile) || []).map((L_i: any, $index: number) => (
                                  <React.Fragment key={$index}>
                                    <div style={{ background: "#FFFFFF", border: (`1px solid ${L_i?.bd ?? ""}` as any), borderRadius: "8px", padding: "8px", height: "150px", display: "flex", flexDirection: "column", gap: "6px", overflow: "hidden", minWidth: "0" }}>
                                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "6px" }}>
                                        <span style={{ fontSize: "9px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                          {H(L_i?.name)}
                                        </span>
                                        <div style={{ display: "flex", alignItems: "center", gap: "5px", flex: "none" }}>
                                          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#16A34A" }} />
                                          {L_i?.alarm ? (
                                            <>
                                              <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#DC2626"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                                <path d={"M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"} />
                                              </svg>
                                            </>
                                          ) : null}
                                          <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                            <path d={"M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"} />
                                          </svg>
                                        </div>
                                      </div>
                                      <div style={{ display: "flex", gap: "4px", alignItems: "center", justifyContent: "center" }}>
                                        <span style={{ fontSize: "15px", fontWeight: "700", whiteSpace: "nowrap" }}>
                                          {H(L_i?.val)}
                                        </span>
                                      </div>
                                      <div style={{ display: "flex", gap: "4px", minHeight: "0" }}>
                                        <div style={{ display: "flex", gap: "4px", flex: "none" }}>
                                          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "70px", fontSize: "9px", color: "#4B4860", paddingTop: "2px" }}>
                                            <span>
                                              {H(L_i?.top)}
                                            </span>
                                            <span>
                                              {H(L_i?.mid)}
                                            </span>
                                            <span>
                                              {H(L_i?.bot)}
                                            </span>
                                          </div>
                                          <div style={{ position: "relative", width: "18px", height: "90px" }}>
                                            <div style={{ position: "absolute", left: "6px", top: "4px", width: "6px", height: "70px", borderRadius: "4px", background: "#E5E7EB", overflow: "hidden" }}>
                                              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: (`${L_i?.fill ?? ""}` as any), background: (`${L_i?.grad ?? ""}` as any) }} />
                                            </div>
                                            <div style={{ position: "absolute", left: "0", bottom: "0", width: "18px", height: "18px", borderRadius: "50%", background: "#2563EB" }} />
                                          </div>
                                        </div>
                                        <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "3px" }}>
                                          <span style={{ fontSize: "8px", color: "#4B4860" }}>
                                            {H(L_i?.label)}
                                          </span>
                                          <span style={{ fontSize: "7px", padding: "2px 4px", borderRadius: "3px", background: "#EEF0F6", border: "1px solid #DCDDEB", whiteSpace: "nowrap", overflow: "hidden" }}>
                                            {H(L_i?.sp)}
                                          </span>
                                          <span style={{ fontSize: "7px", padding: "2px 4px", borderRadius: "3px", border: "1px solid #DCDDEB", whiteSpace: "nowrap", overflow: "hidden" }}>
                                            {H(L_i?.l1)}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                            <div style={{ height: "72px", flex: "none", background: "#FFFFFF", borderTop: "1px solid #EEEBF5", display: "grid", gridTemplateColumns: "repeat(5,1fr)", padding: "0 6px 10px" }}>
                              {((v?.mnavEmpresa) || []).map((L_m: any, $index: number) => (
                                <React.Fragment key={$index}>
                                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", fontSize: "10px", fontWeight: "500", background: (`${L_m?.bg ?? ""}` as any), borderTop: (`3px solid ${L_m?.bar ?? ""}` as any), borderRadius: "0 0 10px 10px" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={L_m?.c} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={L_m?.d} />
                                    </svg>
                                    {H(L_m?.t)}
                                  </div>
                                </React.Fragment>
                              ))}
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
              <figcaption style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#9AA1AB" }}>
                <span style={{ whiteSpace: "nowrap" }}>
                  {"Fig. 01"}
                </span>
                <span style={{ textAlign: "right" }}>
                  {"Central operacional na web e empresa no app · dados de exemplo"}
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
              <h2 style={{ margin: "0", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                {"Muitos equipamentos, nenhuma visão única"}
              </h2>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(01) Contexto"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px clamp(32px,5vw,96px)" }}>
              {"\n      "}
              <p style={{ flex: "1 1 360px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                {"Uma única loja pode ter dezenas de pontos de frio: câmaras de carne, congelados de padaria, vitrines de frios, balcões de hortifrúti, racks de compressores e monitores de fase. Cada um é controlado por equipamentos de fabricantes diferentes, com protocolos e formas de acesso diferentes."}
              </p>
              {"\n      "}
              <p style={{ flex: "1 1 360px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                {"Quando uma câmara sai da faixa de temperatura e ninguém percebe, a perda é de mercadoria. A Eli Refrigeração precisava de uma plataforma que juntasse todas essas leituras, alertasse a equipe certa no momento certo e gerasse os registros exigidos em auditorias sanitárias."}
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", borderTop: "1px solid #0B0E13" }}>
              {"\n      "}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  {"16"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"empresas acompanhadas na central operacional"}
                </span>
              </div>
              {"\n      "}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  {"3"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"integrações de hardware: Sitrad, Carel Boss e o CLP próprio via MQTT"}
                </span>
              </div>
              {"\n      "}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  {"33"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"instrumentos em um único supermercado, distribuídos em 2 conversores"}
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Central operacional"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(56px,7vw,96px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <h2 style={{ margin: "0", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                {"Triagem de todas as empresas em uma tela"}
              </h2>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(02) Central operacional"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "40px clamp(32px,5vw,80px)" }}>
              {"\n      "}
              <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "24px" }}>
                {"\n        "}
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"A central agrupa as empresas por estado e mostra primeiro quem precisa de atenção. Cada cartão resume emergências não vistas, sensores fora da faixa ou sem dados, investigações abertas, tempo médio de reconhecimento e resolução e a variação de alarmes nas últimas 24 horas."}
                </p>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #0B0E13" }}>
                  {"\n          "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 0", borderBottom: "1px solid #CFCDC4", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B0E13" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E5484D" }} />
                    {"Requer ação"}
                  </div>
                  {"\n          "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 0", borderBottom: "1px solid #CFCDC4", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B0E13" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F59E0B" }} />
                    {"Atenção"}
                  </div>
                  {"\n          "}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 0", borderBottom: "1px solid #CFCDC4", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B0E13" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22C55E" }} />
                    {"OK"}
                  </div>
                  {"\n        "}
                </div>
                {"\n        "}
                <p style={{ margin: "0", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.6", color: "#5A5F66" }}>
                  {"Empresas sem telemetria há mais de 5 minutos, ou com conversores sem atualização, entram automaticamente em “Atenção”."}
                </p>
                {"\n      "}
              </div>
              {"\n      "}
              <figure style={{ flex: "1.4 1 460px", minWidth: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ position: "relative", border: "1px solid #0B0E13", background: "#F7F6FB" }}>
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                    <div data-fit={"1200"} style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                      <div style={{ width: "1200px", height: "900px", transformOrigin: "0 0", background: "#F7F6FB", color: "#1E1B2E", padding: "32px", display: "flex", flexDirection: "column", gap: "22px", fontFamily: "'Geist',system-ui,sans-serif" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "22px", fontWeight: "700", letterSpacing: "-0.01em" }}>
                            <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#5B3FD9"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                              <path d={"M22 12h-4l-3 9L9 3l-3 9H2"} />
                            </svg>
                            {"Empresas por estado"}
                          </span>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px" }}>
                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#16A34A" }} />
                            <span style={{ color: "#15803D", fontWeight: "500" }}>
                              {"Ao vivo"}
                            </span>
                            <span style={{ color: "#4B4860" }}>
                              {"Atualizado agora"}
                            </span>
                          </span>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "20px", alignItems: "start" }}>
                          {((v?.kanban) || []).map((L_col: any, $index: number) => (
                            <React.Fragment key={$index}>
                              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 12px", borderRadius: "999px", background: (`${L_col?.bg ?? ""}` as any), color: (`${L_col?.c ?? ""}` as any), fontSize: "13px", fontWeight: "600", alignSelf: "flex-start" }}>
                                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: (`${L_col?.dot ?? ""}` as any) }} />
                                  {H(L_col?.title)}
                                  <span style={{ fontWeight: "400" }}>
                                    {H(L_col?.n)}
                                  </span>
                                </div>
                                {((L_col?.cards) || []).map((L_c: any, $index: number) => (
                                  <React.Fragment key={$index}>
                                    <div style={{ background: "#FFFFFF", border: "1px solid #E7E3F1", borderLeft: (`4px solid ${L_c?.border ?? ""}` as any), borderRadius: "8px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                          <span style={{ fontSize: "18px", fontWeight: "600" }}>
                                            {H(L_c?.name)}
                                          </span>
                                          <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "#4B4860" }}>
                                            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                              <path d={"M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM12 6v6l4 2"} />
                                            </svg>
                                            {H(L_c?.time)}
                                          </span>
                                        </div>
                                        <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: (`${L_c?.cc ?? ""}` as any), padding: "3px 8px", borderRadius: "999px", border: "1px solid #E7E3F1" }}>
                                          <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={L_c?.cc} strokeWidth={"2"} strokeLinecap={"round"}>
                                            <path d={"M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01M2 9a15 15 0 0 1 20 0"} />
                                          </svg>
                                          {H(L_c?.conn)}
                                        </span>
                                      </div>
                                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "6px" }}>
                                        {((L_c?.metrics) || []).map((L_m: any, $index: number) => (
                                          <React.Fragment key={$index}>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "8px", borderRadius: "6px", background: "#F7F6FB" }}>
                                              <span style={{ fontSize: "18px", fontWeight: "700", color: (`${L_m?.c ?? ""}` as any) }}>
                                                {H(L_m?.v)}
                                              </span>
                                              <span style={{ fontSize: "10px", color: "#6B6880", whiteSpace: "nowrap" }}>
                                                {H(L_m?.k)}
                                              </span>
                                            </div>
                                          </React.Fragment>
                                        ))}
                                      </div>
                                      <div style={{ display: "flex", gap: "16px", fontSize: "11px", color: "#4B4860" }}>
                                        <span>
                                          {"Reconhecimento médio "}
                                          <b style={{ color: "#1E1B2E", fontWeight: "600" }}>
                                            {H(L_c?.mtta)}
                                          </b>
                                        </span>
                                        <span>
                                          {"Resolução média "}
                                          <b style={{ color: "#1E1B2E", fontWeight: "600" }}>
                                            {H(L_c?.mttr)}
                                          </b>
                                        </span>
                                      </div>
                                      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px" }}>
                                          <span style={{ fontWeight: "600", color: "#4B4860" }}>
                                            {"24H"}
                                          </span>
                                          <span style={{ color: (`${L_c?.tc ?? ""}` as any) }}>
                                            {H(L_c?.t)}
                                          </span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "30px", borderBottom: "1px dashed #D6D2E2" }}>
                                          {((L_c?.bars) || []).map((L_b: any, $index: number) => (
                                            <React.Fragment key={$index}>
                                              <span style={{ flex: "1", height: (`${L_b?.h ?? ""}` as any), background: "#7B61D9", borderRadius: "1px 1px 0 0" }} />
                                            </React.Fragment>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </React.Fragment>
                                ))}
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <span style={{ position: "absolute", left: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                  <span style={{ position: "absolute", right: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                  <span style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                  <span style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                </div>
                <figcaption style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#5A5F66" }}>
                  <span style={{ whiteSpace: "nowrap" }}>
                    {"Fig. 02"}
                  </span>
                  <span style={{ textAlign: "right" }}>
                    {"Empresas agrupadas por estado"}
                  </span>
                </figcaption>
              </figure>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Dashboard da empresa"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <h2 style={{ margin: "0", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                {"Cada instrumento com setpoint e limites próprios"}
              </h2>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(03) Dashboard por empresa"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap-reverse", alignItems: "flex-start", gap: "40px clamp(32px,5vw,80px)" }}>
              {"\n      "}
              <figure style={{ flex: "1.4 1 460px", minWidth: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ position: "relative", border: "1px solid #0B0E13", background: "#FFFFFF" }}>
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                    <div data-fit={"1200"} style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                      <div style={{ width: "1200px", height: "900px", transformOrigin: "0 0", display: "flex", flexDirection: "column", background: "#FFFFFF", fontFamily: "'Geist',system-ui,sans-serif" }}>
                        <div style={{ height: "38px", flex: "none", background: "#ECEAF3", borderBottom: "1px solid #DDD8EA", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px" }}>
                          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57" }} />
                          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FEBC2E" }} />
                          <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840" }} />
                          <div style={{ marginLeft: "18px", width: "420px", height: "24px", borderRadius: "6px", background: "#FFFFFF", fontSize: "12px", color: "#6B6880", display: "flex", alignItems: "center", gap: "6px", padding: "0 10px" }}>
                            <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A8799"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                              <path d={"M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z"} />
                            </svg>
                            {"Eli Control · Empresa"}
                          </div>
                        </div>
                        <div style={{ display: "flex", height: "862px", background: "#F7F6FB", color: "#1E1B2E" }}>
                          <div style={{ width: "52px", flex: "none", background: "#FFFFFF", borderRight: "1px solid #E7E3F1", display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 0", gap: "6px" }}>
                            <div style={{ width: "30px", height: "30px", overflow: "hidden", marginBottom: "14px" }}>
                              <img src={"/assets/elicontrol_logo.png"} alt={""} style={{ height: "30px", width: "auto", maxWidth: "none" }} />
                            </div>
                            {((v?.navEmpresa) || []).map((L_n: any, $index: number) => (
                              <React.Fragment key={$index}>
                                <div style={{ width: "36px", height: "34px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: (`${L_n?.bg ?? ""}` as any) }}>
                                  <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={L_n?.c} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={L_n?.d} />
                                  </svg>
                                </div>
                              </React.Fragment>
                            ))}
                            <div style={{ marginTop: "auto", width: "30px", height: "30px", borderRadius: "50%", background: "#5B3FD9", color: "#FFFFFF", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"A"}
                            </div>
                          </div>
                          <div style={{ flex: "1", minWidth: "0", padding: "18px 20px", display: "flex", flexDirection: "column", gap: "12px", overflow: "hidden" }}>
                            <div style={{ borderRadius: "20px", padding: "26px 30px", background: "linear-gradient(140deg,#2B2645,#15122A)", display: "flex", flexDirection: "column", gap: "18px" }}>
                              <div style={{ display: "flex", justifyContent: "space-between", gap: "20px", alignItems: "flex-start" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                  <span style={{ color: "#FFFFFF", fontSize: "36px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                                    {"Mercado Exemplo"}
                                  </span>
                                  <span style={{ color: "#C9C5DA", fontSize: "13px" }}>
                                    {"Última atividade em 27/10/2026, 07:09."}
                                  </span>
                                </div>
                                <div style={{ display: "flex", gap: "6px" }}>
                                  <span style={{ height: "66px", padding: "0 12px", borderRadius: "9px", background: "#F1EFF8", border: "1px solid #F1EFF8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "11px", fontWeight: "500", color: "#1E1B2E" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M3 5h18v14H3zM22 6l-10 7L2 6"} />
                                    </svg>
                                    {"Config. Email"}
                                  </span>
                                  <span style={{ height: "66px", padding: "0 12px", borderRadius: "9px", background: "#F1EFF8", border: "1px solid #F1EFF8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "11px", fontWeight: "500", color: "#1E1B2E" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"} />
                                    </svg>
                                    {"Ver Dashboard"}
                                  </span>
                                  <span style={{ height: "66px", padding: "0 12px", borderRadius: "9px", background: "#F1EFF8", border: "1px solid #F1EFF8", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "11px", fontWeight: "500", color: "#1E1B2E" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"} />
                                    </svg>
                                    {"Editar"}
                                  </span>
                                  <span style={{ height: "66px", padding: "0 12px", borderRadius: "9px", background: "#3B2A1E", border: "1px solid #7A4A1E", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "11px", fontWeight: "500", color: "#F59E0B" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#F59E0B"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M18.4 6.6a9 9 0 1 1-12.8 0M12 2v10M3 3l18 18"} />
                                    </svg>
                                    {"Desativar"}
                                  </span>
                                  <span style={{ height: "66px", padding: "0 12px", borderRadius: "9px", background: "#3A1E26", border: "1px solid #7A2A36", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "11px", fontWeight: "500", color: "#F87171" }}>
                                    <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#F87171"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"} />
                                    </svg>
                                    {"Deletar"}
                                  </span>
                                </div>
                              </div>
                              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "12px" }}>
                                <div style={{ borderRadius: "14px", padding: "16px 18px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", flexDirection: "column", gap: "10px" }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M22 12h-4l-3 9L9 3l-3 9H2"} />
                                      </svg>
                                    </span>
                                    <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.14em", color: "#E4E1EE" }}>
                                      {"INSTRUMENTOS"}
                                    </span>
                                  </div>
                                  <span style={{ fontSize: "28px", fontWeight: "700", color: "#FFFFFF" }}>
                                    {"14"}
                                  </span>
                                  <span style={{ fontSize: "12px", color: "#C9C5DA" }}>
                                    {"Distribuídos em 1 conversor"}
                                  </span>
                                </div>
                                <div style={{ borderRadius: "14px", padding: "16px 18px", background: "rgba(45,160,140,0.14)", border: "1px solid rgba(45,160,140,0.32)", display: "flex", flexDirection: "column", gap: "10px" }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"} />
                                      </svg>
                                    </span>
                                    <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.14em", color: "#E4E1EE" }}>
                                      {"CONVERSORES ATIVOS"}
                                    </span>
                                  </div>
                                  <span style={{ fontSize: "28px", fontWeight: "700", color: "#FFFFFF" }}>
                                    {"1/1"}
                                  </span>
                                  <span style={{ fontSize: "12px", color: "#C9C5DA" }}>
                                    {"1 conversor cadastrado"}
                                  </span>
                                </div>
                                <div style={{ borderRadius: "14px", padding: "16px 18px", background: "rgba(220,70,110,0.14)", border: "1px solid rgba(220,70,110,0.32)", display: "flex", flexDirection: "column", gap: "10px" }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"} />
                                      </svg>
                                    </span>
                                    <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.14em", color: "#E4E1EE" }}>
                                      {"ALARMES ABERTOS"}
                                    </span>
                                  </div>
                                  <span style={{ fontSize: "28px", fontWeight: "700", color: "#FFFFFF" }}>
                                    {"7"}
                                  </span>
                                  <span style={{ fontSize: "12px", color: "#C9C5DA" }}>
                                    {"7 emergências em aberto"}
                                  </span>
                                </div>
                                <div style={{ borderRadius: "14px", padding: "16px 18px", background: "rgba(220,150,60,0.12)", border: "1px solid rgba(220,150,60,0.3)", display: "flex", flexDirection: "column", gap: "10px" }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <span style={{ width: "30px", height: "30px", borderRadius: "8px", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M9 2h6v4H9zM16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"} />
                                      </svg>
                                    </span>
                                    <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: "0.14em", color: "#E4E1EE" }}>
                                      {"SOLICITAÇÕES EM ANDAMENTO"}
                                    </span>
                                  </div>
                                  <span style={{ fontSize: "28px", fontWeight: "700", color: "#FFFFFF" }}>
                                    {"0"}
                                  </span>
                                  <span style={{ fontSize: "12px", color: "#C9C5DA" }}>
                                    {"Nenhuma solicitação em andamento"}
                                  </span>
                                </div>
                              </div>
                              <div style={{ display: "flex", gap: "4px", padding: "5px", borderRadius: "14px", background: "#E9E6F5" }}>
                                <div style={{ height: "40px", padding: "0 18px", borderRadius: "10px", background: "#FFFFFF", fontWeight: "600", color: "#1E1B2E", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                                  <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M22 12h-4l-3 9L9 3l-3 9H2"} />
                                  </svg>
                                  {"Instrumentos"}
                                </div>
                                <div style={{ height: "40px", padding: "0 18px", borderRadius: "10px", color: "#4B4860", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                                  <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h8"} />
                                  </svg>
                                  {"Relatórios"}
                                </div>
                                <div style={{ height: "40px", padding: "0 18px", borderRadius: "10px", color: "#4B4860", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                                  <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M3 3v18h18M7 15l4-4 3 3 5-6"} />
                                  </svg>
                                  {"Análise"}
                                </div>
                                <div style={{ height: "40px", padding: "0 18px", borderRadius: "10px", color: "#4B4860", display: "flex", alignItems: "center", gap: "8px", fontSize: "13px" }}>
                                  <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM12 16v-4M12 8h.01"} />
                                  </svg>
                                  {"Informações"}
                                </div>
                              </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ height: "30px", padding: "0 10px", border: "1px solid #E2DDF0", borderRadius: "7px", background: "#FFFFFF", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px", color: "#1E1B2E" }}>
                                {"Reordenar"}
                              </span>
                              <div style={{ display: "flex", gap: "8px" }}>
                                <span style={{ display: "flex", gap: "2px", padding: "2px", border: "1px solid #E2DDF0", borderRadius: "8px", background: "#FFFFFF" }}>
                                  <span style={{ height: "26px", padding: "0 9px", borderRadius: "6px", display: "flex", alignItems: "center", gap: "5px", fontSize: "12px" }}>
                                    <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"} />
                                    </svg>
                                    {"Detalhes"}
                                  </span>
                                  <span style={{ height: "26px", padding: "0 9px", borderRadius: "6px", background: "#5B3FD9", color: "#FFFFFF", display: "flex", alignItems: "center", gap: "5px", fontSize: "12px" }}>
                                    <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                      <path d={"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"} />
                                    </svg>
                                    {"Painel"}
                                  </span>
                                </span>
                                <span style={{ height: "30px", padding: "0 10px", border: "1px solid #E2DDF0", borderRadius: "7px", background: "#FFFFFF", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px", color: "#1E1B2E" }}>
                                  <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"} />
                                  </svg>
                                  {"Tela cheia"}
                                </span>
                              </div>
                            </div>
                            <div style={{ background: "#FFFFFF", border: "1px solid #E7E3F1", borderRadius: "10px", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "0" }}>
                                <span style={{ width: "32px", height: "32px", flex: "none", borderRadius: "50%", background: "#EEEBF7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#5B3FD9"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M22 12h-4l-3 9L9 3l-3 9H2"} />
                                  </svg>
                                </span>
                                <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: "0" }}>
                                  <span style={{ fontSize: "9px", letterSpacing: "0.14em", fontWeight: "600", color: "#4B4860" }}>
                                    {"CONVERSOR"}
                                  </span>
                                  <span style={{ fontSize: "13px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {"demo@matriz@TCP-485_1"}
                                  </span>
                                </div>
                              </div>
                              <div style={{ display: "flex", gap: "6px", flex: "none" }}>
                                <span style={{ height: "24px", padding: "0 8px", borderRadius: "6px", background: "#ECFDF3", border: "1px solid #BBE5CB", color: "#15803D", fontSize: "11px", display: "flex", alignItems: "center", gap: "5px" }}>
                                  <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#15803D"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM12 6v6l4 2"} />
                                  </svg>
                                  {"Última atualização 12:37"}
                                </span>
                                <span style={{ height: "24px", padding: "0 8px", borderRadius: "6px", background: "#FEF2F2", border: "1px solid #F5C6C6", color: "#DC2626", fontSize: "11px", display: "flex", alignItems: "center", gap: "5px" }}>
                                  <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#DC2626"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                    <path d={"M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"} />
                                  </svg>
                                  {"Alarmes 7"}
                                </span>
                              </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "10px" }}>
                              {((v?.inst) || []).map((L_i: any, $index: number) => (
                                <React.Fragment key={$index}>
                                  <div style={{ background: "#FFFFFF", border: (`1px solid ${L_i?.bd ?? ""}` as any), borderRadius: "8px", padding: "10px 12px", height: "184px", display: "flex", flexDirection: "column", gap: "8px", overflow: "hidden" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "6px" }}>
                                      <span style={{ fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                        {H(L_i?.name)}
                                      </span>
                                      <div style={{ display: "flex", alignItems: "center", gap: "5px", flex: "none" }}>
                                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#16A34A" }} />
                                        {L_i?.alarm ? (
                                          <>
                                            <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#DC2626"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                              <path d={"M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"} />
                                            </svg>
                                          </>
                                        ) : null}
                                        <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                          <path d={"M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"} />
                                        </svg>
                                      </div>
                                    </div>
                                    {L_i?.isTemp ? (
                                      <>
                                        <div style={{ display: "flex", gap: "10px", flex: "1", minHeight: "0" }}>
                                          <div style={{ display: "flex", gap: "4px", flex: "none" }}>
                                            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "102px", fontSize: "9px", color: "#4B4860", paddingTop: "2px" }}>
                                              <span>
                                                {H(L_i?.top)}
                                              </span>
                                              <span>
                                                {H(L_i?.mid)}
                                              </span>
                                              <span>
                                                {H(L_i?.bot)}
                                              </span>
                                            </div>
                                            <div style={{ position: "relative", width: "18px", height: "122px" }}>
                                              <div style={{ position: "absolute", left: "6px", top: "4px", width: "6px", height: "102px", borderRadius: "4px", background: "#E5E7EB", overflow: "hidden" }}>
                                                <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: (`${L_i?.fill ?? ""}` as any), background: (`${L_i?.grad ?? ""}` as any) }} />
                                              </div>
                                              <div style={{ position: "absolute", left: "0", bottom: "0", width: "18px", height: "18px", borderRadius: "50%", background: "#2563EB" }} />
                                            </div>
                                          </div>
                                          <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "5px" }}>
                                            <span style={{ fontSize: "28px", fontWeight: "700", letterSpacing: "-0.02em", lineHeight: "1.1", whiteSpace: "nowrap" }}>
                                              {H(L_i?.val)}
                                            </span>
                                            <span style={{ fontSize: "11px", color: "#4B4860" }}>
                                              {H(L_i?.label)}
                                            </span>
                                            <span style={{ fontSize: "9px", padding: "3px 6px", borderRadius: "4px", background: "#EEF0F6", border: "1px solid #DCDDEB" }}>
                                              {H(L_i?.sp)}
                                            </span>
                                            <div style={{ fontSize: "9px", padding: "3px 6px", borderRadius: "4px", border: "1px solid #DCDDEB", display: "flex", flexDirection: "column", gap: "2px" }}>
                                              <span>
                                                {H(L_i?.l1)}
                                              </span>
                                              <span>
                                                {H(L_i?.l2)}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </>
                                    ) : null}
                                    {L_i?.isRelay ? (
                                      <>
                                        <div style={{ flex: "1", display: "flex", alignItems: "center", gap: "14px", paddingLeft: "6px" }}>
                                          <span style={{ height: "28px", padding: "0 10px", borderRadius: "7px", background: "#16A34A", color: "#FFFFFF", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px" }}>
                                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#DCFCE7" }} />
                                            {"LIGADO"}
                                          </span>
                                          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                                            <span style={{ fontSize: "26px", fontWeight: "700", color: "#16A34A" }}>
                                              {"Ligado"}
                                            </span>
                                            <span style={{ fontSize: "11px", color: "#4B4860" }}>
                                              {"Saída RELAY"}
                                            </span>
                                          </div>
                                        </div>
                                      </>
                                    ) : null}
                                    {L_i?.isPsi ? (
                                      <>
                                        <div style={{ flex: "1", display: "flex", alignItems: "center", gap: "12px", paddingLeft: "6px" }}>
                                          <span style={{ width: "50px", height: "50px", borderRadius: "8px", background: "#EEF0F8", border: "1px solid #DCDDEB" }} />
                                          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                            <span>
                                              <span style={{ fontSize: "30px", fontWeight: "700", color: "#EA7A0C" }}>
                                                {"0.4"}
                                              </span>
                                              <span style={{ fontSize: "14px", fontWeight: "600", color: "#5B3FD9" }}>
                                                {"psi"}
                                              </span>
                                            </span>
                                            <span style={{ fontSize: "11px", color: "#4B4860" }}>
                                              {"Suc1 - Pressão"}
                                            </span>
                                          </div>
                                          <span style={{ marginLeft: "auto", width: "38px", height: "38px", borderRadius: "50%", border: "4px solid #22D3EE", borderLeftColor: "#E5E7EB", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            {"65"}
                                          </span>
                                        </div>
                                      </>
                                    ) : null}
                                  </div>
                                </React.Fragment>
                              ))}
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
                <figcaption style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#5A5F66" }}>
                  <span style={{ whiteSpace: "nowrap" }}>
                    {"Fig. 03"}
                  </span>
                  <span style={{ textAlign: "right" }}>
                    {"Instrumentos agrupados por conversor"}
                  </span>
                </figcaption>
              </figure>
              {"\n      "}
              <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {"\n        "}
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Os instrumentos aparecem agrupados pelo conversor de origem, com a última atualização e o número de alarmes de cada um. Além de temperatura, o painel exibe pressão de sucção dos racks e o estado dos relés dos monitores de fase."}
                </p>
                {"\n        "}
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Os limites são calculados a partir do setpoint lido do controlador. Quando o setpoint não tem leitura recente, o sistema não inventa uma faixa e avisa que os limites estão indisponíveis."}
                </p>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))", borderTop: "1px solid #0B0E13", borderLeft: "1px solid #0B0E13" }}>
              {"\n      "}
              <div style={{ background: "#EFEEE9", borderRight: "1px solid #0B0E13", borderBottom: "1px solid #0B0E13", padding: "28px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {"\n        "}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px" }}>
                    {"Atend. Carne [022]"}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'IBM Plex Mono',monospace", letterSpacing: "0.08em", textTransform: "uppercase", color: "#B42318", fontSize: "11px" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#E5484D" }} />
                    {"Fora da faixa"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                  <span style={{ fontSize: "clamp(44px,4.4vw,64px)", fontWeight: "500", letterSpacing: "-0.045em", lineHeight: "1", color: "#C8261E" }}>
                    {"10.2 °C"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                    {"SP 1.5 °C"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ position: "relative", height: "28px" }}>
                  {"\n          "}
                  <div style={{ position: "absolute", left: "0", right: "0", top: "13px", height: "2px", background: "#CFCDC4" }} />
                  {"\n          "}
                  <div style={{ position: "absolute", left: "22%", width: "48%", top: "10px", height: "8px", background: "#F2D27A" }} />
                  {"\n          "}
                  <div style={{ position: "absolute", left: "30%", width: "32%", top: "10px", height: "8px", background: "#9ED9B0" }} />
                  {"\n          "}
                  <div style={{ position: "absolute", left: "46%", top: "4px", width: "1px", height: "20px", background: "#0B0E13" }} />
                  {"\n          "}
                  <div style={{ position: "absolute", left: "80.8%", top: "7px", width: "14px", height: "14px", marginLeft: "-7px", borderRadius: "50%", background: "#C8261E", boxShadow: "0 0 0 3px #EFEEE9" }} />
                  {"\n        "}
                </div>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", color: "#3A3F46" }}>
                  {"\n          "}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "10px", height: "10px", background: "#9ED9B0" }} />
                    {"Faixa interna: −2,5 a 5,5 °C"}
                  </div>
                  {"\n          "}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "10px", height: "10px", background: "#F2D27A" }} />
                    {"Faixa externa: −4,5 a 7,5 °C"}
                  </div>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              <div style={{ background: "#EFEEE9", borderRight: "1px solid #0B0E13", borderBottom: "1px solid #0B0E13", padding: "28px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {"\n        "}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px" }}>
                    {"TC-900E Log [024]"}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'IBM Plex Mono',monospace", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66", fontSize: "11px" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", border: "1px solid #5A5F66" }} />
                    {"Sem limites"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                  <span style={{ fontSize: "clamp(44px,4.4vw,64px)", fontWeight: "500", letterSpacing: "-0.045em", lineHeight: "1" }}>
                    {"−60.9 °C"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                    {"SP −18.0 °C"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ position: "relative", height: "28px" }}>
                  <div style={{ position: "absolute", left: "0", right: "0", top: "13px", height: "2px", background: "repeating-linear-gradient(90deg,#B8B6AE 0 8px,transparent 8px 14px)" }} />
                </div>
                {"\n        "}
                <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.6", color: "#3A3F46" }}>
                  {"Limites dinâmicos indisponíveis: o setpoint não tem leitura recente."}
                </div>
                {"\n      "}
              </div>
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
              <h2 style={{ margin: "0", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                {"Do sensor na câmara até a tela do gestor"}
              </h2>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                {"(04) Arquitetura"}
              </span>
            </div>
            {"\n    "}
            <p style={{ maxWidth: "640px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty" }}>
              {"Cada tipo de equipamento tem sua própria estratégia de conexão. O restante da plataforma (alarmes, relatórios e painéis) trabalha sobre leituras já normalizadas e não depende do fabricante."}
            </p>
            {"\n\n    "}
            {v?.showDiagram ? (
              <>
                {"\n      "}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", borderLeft: "1px solid #22272F", borderTop: "1px solid #22272F" }}>
                  {"\n        "}
                  <div style={{ background: "#0B0E13", borderRight: "1px solid #22272F", borderBottom: "1px solid #22272F", display: "flex", flexDirection: "column" }}>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                      {"A · Em campo"}
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px" }}>
                      {"Controladores Full Gauge"}
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px" }}>
                      {"Controladores Carel"}
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", fontSize: "16px" }}>
                      {"CLP Eli Control"}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={{ background: "#0B0E13", borderRight: "1px solid #22272F", borderBottom: "1px solid #22272F", display: "flex", flexDirection: "column" }}>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                      {"B · Conexão"}
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px", display: "flex", justifyContent: "space-between", gap: "8px" }}>
                      <span>
                        {"Sitrad"}
                      </span>
                      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", color: "#9AA1AB" }}>
                        {"HTTP"}
                      </span>
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px", display: "flex", justifyContent: "space-between", gap: "8px" }}>
                      <span>
                        {"Carel Boss"}
                      </span>
                      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", color: "#9AA1AB" }}>
                        {"VPN · XML"}
                      </span>
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", fontSize: "16px", display: "flex", justifyContent: "space-between", gap: "8px" }}>
                      <span>
                        {"Eli Control"}
                      </span>
                      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", color: "#9AA1AB" }}>
                        {"MQTT"}
                      </span>
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={{ background: "#0B0E13", borderRight: "1px solid #22272F", borderBottom: "1px solid #22272F", display: "flex", flexDirection: "column", boxShadow: "inset 0 0 0 1px #3D6BFF" }}>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #2A3A66", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#3D6BFF" }}>
                      {"C · Núcleo NestJS"}
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #2A3A66", fontSize: "16px" }}>
                      {"Ingestão e normalização"}
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #2A3A66", fontSize: "16px" }}>
                      {"Motor de alarmes"}
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", fontSize: "16px" }}>
                      {"PostgreSQL particionado"}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={{ background: "#0B0E13", borderRight: "1px solid #22272F", borderBottom: "1px solid #22272F", display: "flex", flexDirection: "column" }}>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                      {"D · Entrega"}
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px" }}>
                      {"Central operacional e dashboards"}
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", borderBottom: "1px solid #22272F", fontSize: "16px" }}>
                      {"Relatórios e e-mails"}
                    </div>
                    {"\n          "}
                    <div style={{ padding: "16px 18px", fontSize: "16px" }}>
                      {"App mobile"}
                    </div>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </div>
                {"\n    "}
              </>
            ) : null}
            {"\n\n    "}
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #ECEBE6" }}>
              {"\n      "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "22px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"presentation/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Controllers REST, módulos e DTOs de entrada. Autenticação JWT com papéis."}
                </span>
              </div>
              {"\n      "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "22px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"application/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Serviços de alarmes, sincronização, telemetria, relatórios e saúde das empresas."}
                </span>
              </div>
              {"\n      "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "22px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"domain/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Empresas, conversores, instrumentos, sensores, alarmes, ordens de serviço e estratégias de conexão."}
                </span>
              </div>
              {"\n      "}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "22px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"infrastructure/"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Migrations, clientes Sitrad e Boss, e-mail, armazenamento e observabilidade."}
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
              {"\n      "}
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB", marginRight: "12px" }}>
                {"Processos independentes"}
              </span>
              {"\n      "}
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B", color: "#ECEBE6" }}>
                {"api"}
              </span>
              {"\n      "}
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B", color: "#ECEBE6" }}>
                {"mqtt-worker"}
              </span>
              {"\n      "}
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B", color: "#ECEBE6" }}>
                {"report-worker"}
              </span>
              {"\n      "}
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B", color: "#ECEBE6" }}>
                {"rollup-export-worker"}
              </span>
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
              <h2 style={{ margin: "0", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                {"O que sustenta a plataforma"}
              </h2>
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(05) Decisões técnicas"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {"\n      "}
              <div style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"01"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"Conexões por estratégia"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Sitrad, Carel Boss via VPN e o CLP via MQTT implementam a mesma interface de conexão. Um novo hardware exige uma estratégia e um bootstrapper, sem mexer no motor de alarmes."}
                </p>
              </div>
              {"\n      "}
              <div style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"02"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"Motor de alarmes sem ruído"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Regras reutilizáveis e globais, limites derivados do setpoint, inibições programadas e unicidade semântica para não duplicar alarmes. Casos suspeitos viram candidatos a investigação antes de virar emergência."}
                </p>
              </div>
              {"\n      "}
              <div style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"03"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"Leituras em camadas"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Tabela de leituras particionada por mês, uma tabela de últimos valores para os painéis e rollups para consultas históricas. Dados antigos são arquivados e exportados para armazenamento consultado via Athena, seguindo uma política de retenção."}
                </p>
              </div>
              {"\n      "}
              <div style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"04"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"Relatórios auditáveis"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Um worker dedicado gera planilhas de temperatura histórica. Cada execução fica registrada com status e local do arquivo, e os e-mails de ação corretiva usam templates próprios."}
                </p>
              </div>
              {"\n      "}
              <div style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"05"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"Operação remota controlada"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Comandos e macros enviados aos equipamentos passam por solicitações com histórico e respeitam as capacidades de cada modelo. Perfis de VPN isolam a rede de cada empresa."}
                </p>
              </div>
              {"\n      "}
              <div style={{ display: "grid", gridTemplateColumns: "48px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"06"}
                </span>
                <h3 style={{ margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                  {"Observabilidade desde o início"}
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Registro de métricas, log de requisições e de queries e endpoints de saúde por integração. Problemas de conexão aparecem antes de virar falta de dados no painel."}
                </p>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        {v?.showGallery ? (
          <>
            <section data-screen-label={"Mais telas"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
              {"\n  "}
              <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,56px)" }}>
                {"\n    "}
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
                  <h2 style={{ margin: "0", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                    {"Mais telas"}
                  </h2>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                    {"(06) Galeria"}
                  </span>
                </div>
                {"\n    "}
                <figure style={{ flex: "1.4 1 460px", minWidth: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ position: "relative", border: "1px solid #0B0E13", background: "#E5E3DC" }}>
                    <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                      <div data-fit={"1600"} style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                        <div style={{ position: "relative", width: "1600px", height: "900px", transformOrigin: "0 0", background: "#E5E3DC", fontFamily: "'Geist',system-ui,sans-serif" }}>
                          <div style={{ position: "absolute", left: "56px", top: "50px", width: "1240px", height: "800px", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", background: "#FFFFFF", boxShadow: "0 40px 80px -30px rgba(0,0,0,0.45)" }}>
                            <div style={{ height: "38px", flex: "none", background: "#ECEAF3", borderBottom: "1px solid #DDD8EA", display: "flex", alignItems: "center", gap: "8px", padding: "0 14px" }}>
                              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F57" }} />
                              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FEBC2E" }} />
                              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#28C840" }} />
                              <div style={{ marginLeft: "18px", width: "420px", height: "24px", borderRadius: "6px", background: "#FFFFFF", fontSize: "12px", color: "#6B6880", display: "flex", alignItems: "center", gap: "6px", padding: "0 10px" }}>
                                <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8A8799"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                  <path d={"M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z"} />
                                </svg>
                                {"Eli Control · Detalhes do sensor"}
                              </div>
                            </div>
                            <div style={{ display: "flex", height: "762px", background: "#F7F6FB", color: "#1E1B2E" }}>
                              <div style={{ width: "52px", flex: "none", background: "#FFFFFF", borderRight: "1px solid #E7E3F1", display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 0", gap: "6px" }}>
                                <div style={{ width: "30px", height: "30px", overflow: "hidden", marginBottom: "14px" }}>
                                  <img src={"/assets/elicontrol_logo.png"} alt={""} style={{ height: "30px", width: "auto", maxWidth: "none" }} />
                                </div>
                                {((v?.navEmpresa) || []).map((L_n: any, $index: number) => (
                                  <React.Fragment key={$index}>
                                    <div style={{ width: "36px", height: "34px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: (`${L_n?.bg ?? ""}` as any) }}>
                                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={L_n?.c} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={L_n?.d} />
                                      </svg>
                                    </div>
                                  </React.Fragment>
                                ))}
                                <div style={{ marginTop: "auto", width: "30px", height: "30px", borderRadius: "50%", background: "#5B3FD9", color: "#FFFFFF", fontSize: "13px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  {"A"}
                                </div>
                              </div>
                              <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                                <div style={{ height: "104px", flex: "none", background: "#EEECF7", borderBottom: "1px solid #E2DDF0", padding: "16px 24px", display: "flex", justifyContent: "space-between", gap: "20px" }}>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                                    <span style={{ fontSize: "10px", letterSpacing: "0.16em", color: "#4B4860", fontWeight: "500" }}>
                                      {"DETALHES DO SENSOR"}
                                    </span>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"} />
                                      </svg>
                                      <span style={{ fontSize: "22px", fontWeight: "600" }}>
                                        {"Câmara de congelados [015]"}
                                      </span>
                                      <span style={{ width: "26px", height: "26px", borderRadius: "6px", border: "1px solid #E2DDF0", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                          <path d={"M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"} />
                                        </svg>
                                      </span>
                                    </div>
                                    <span style={{ fontSize: "11px", color: "#6B6880" }}>
                                      {"Histórico e informações"}
                                    </span>
                                  </div>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
                                    <div style={{ display: "flex", gap: "6px" }}>
                                      <span style={{ height: "26px", padding: "0 14px", borderRadius: "6px", border: "1px solid #DAD5EA", background: "#E0DAF6", fontSize: "11px", fontWeight: "500", display: "flex", alignItems: "center" }}>
                                        {"Último dia"}
                                      </span>
                                      <span style={{ height: "26px", padding: "0 14px", borderRadius: "6px", border: "1px solid #DAD5EA", background: "#F7F6FB", fontSize: "11px", fontWeight: "500", display: "flex", alignItems: "center" }}>
                                        {"Esta semana"}
                                      </span>
                                      <span style={{ height: "26px", padding: "0 14px", borderRadius: "6px", border: "1px solid #DAD5EA", background: "#F7F6FB", fontSize: "11px", fontWeight: "500", display: "flex", alignItems: "center" }}>
                                        {"Este mês"}
                                      </span>
                                      <span style={{ height: "26px", padding: "0 14px", borderRadius: "6px", border: "1px solid #DAD5EA", background: "#F7F6FB", fontSize: "11px", fontWeight: "500", display: "flex", alignItems: "center" }}>
                                        {"Últimos trinta dias"}
                                      </span>
                                    </div>
                                    <span style={{ width: "280px", height: "36px", borderRadius: "8px", border: "1px solid #DAD5EA", background: "#F7F6FB", fontSize: "12px", display: "flex", alignItems: "center", gap: "8px", padding: "0 12px" }}>
                                      <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M3 5h18v16H3zM16 3v4M8 3v4M3 10h18"} />
                                      </svg>
                                      {"27/10/2026 - 27/10/2026"}
                                    </span>
                                  </div>
                                </div>
                                <div style={{ flex: "1", minHeight: "0", padding: "20px 24px", display: "flex", gap: "20px", overflow: "hidden" }}>
                                  <div style={{ flex: "1", minWidth: "0", background: "#FFFFFF", border: "1px solid #E7E3F1", borderRadius: "12px", padding: "16px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                                      <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600" }}>
                                        <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                          <path d={"M3 3v18h18M7 15l4-4 3 3 5-6"} />
                                        </svg>
                                        {"Gráfico configurável"}
                                      </span>
                                      <div style={{ display: "flex", gap: "6px", fontSize: "10px" }}>
                                        <span style={{ height: "22px", padding: "0 8px", border: "1px solid #DAD5EA", borderRadius: "5px", display: "flex", alignItems: "center" }}>
                                          {"5 sensores vinculados elegíveis"}
                                        </span>
                                        <span style={{ height: "22px", padding: "0 8px", border: "1px solid #DAD5EA", borderRadius: "5px", display: "flex", alignItems: "center" }}>
                                          {"5 selecionados"}
                                        </span>
                                        <span style={{ height: "22px", padding: "0 8px", border: "1px solid #DAD5EA", borderRadius: "5px", display: "flex", alignItems: "center", gap: "5px", fontWeight: "500" }}>
                                          <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                            <path d={"M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"} />
                                          </svg>
                                          {"Selecionar sensores ▾"}
                                        </span>
                                      </div>
                                    </div>
                                    <span style={{ fontSize: "11px", color: "#4B4860" }}>
                                      {"Escolha quais sensores vinculados entram na consulta do histórico deste equipamento."}
                                    </span>
                                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                      <span style={{ height: "22px", padding: "0 8px", borderRadius: "5px", background: "#EEECF7", border: "1px solid #DAD5EA", fontSize: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2563EB" }} />
                                        {"Ambiente"}
                                      </span>
                                      <span style={{ height: "22px", padding: "0 8px", borderRadius: "5px", background: "#EEECF7", border: "1px solid #DAD5EA", fontSize: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#F97316" }} />
                                        {"Desvio Relativo ao Setpoint"}
                                      </span>
                                      <span style={{ height: "22px", padding: "0 8px", borderRadius: "5px", background: "#EEECF7", border: "1px solid #DAD5EA", fontSize: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#DC2626" }} />
                                        {"Evaporador"}
                                      </span>
                                      <span style={{ height: "22px", padding: "0 8px", borderRadius: "5px", background: "#EEECF7", border: "1px solid #DAD5EA", fontSize: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#CA8A04" }} />
                                        {"Processo atual"}
                                      </span>
                                      <span style={{ height: "22px", padding: "0 8px", borderRadius: "5px", background: "#EEECF7", border: "1px solid #DAD5EA", fontSize: "10px", display: "flex", alignItems: "center", gap: "6px" }}>
                                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#16A34A" }} />
                                        {"Setpoint atual"}
                                      </span>
                                    </div>
                                    <div style={{ flex: "1", minHeight: "0", display: "flex", gap: "6px", borderTop: "1px solid #EEEBF5", paddingTop: "14px" }}>
                                      <div style={{ position: "relative", width: "22px", flex: "none", fontSize: "9px", color: "#4B4860" }}>
                                        <span style={{ position: "absolute", right: "0", top: "0", transform: "translateY(-50%)" }}>
                                          {"30"}
                                        </span>
                                        <span style={{ position: "absolute", right: "0", top: "27.3%", transform: "translateY(-50%)" }}>
                                          {"15"}
                                        </span>
                                        <span style={{ position: "absolute", right: "0", top: "54.5%", transform: "translateY(-50%)" }}>
                                          {"0"}
                                        </span>
                                        <span style={{ position: "absolute", right: "0", top: "81.8%", transform: "translateY(-50%)" }}>
                                          {"-15"}
                                        </span>
                                      </div>
                                      <div style={{ position: "relative", flex: "1", minWidth: "0", borderLeft: "1px solid #CFCBDD" }}>
                                        <svg viewBox={"0 0 790 460"} preserveAspectRatio={"none"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                                          <g stroke={"#E3E0EE"} strokeWidth={"1"} strokeDasharray={"3 4"} vectorEffect={"non-scaling-stroke"}>
                                            <line x1={"0"} x2={"790"} y1={"0"} y2={"0"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"0"} x2={"790"} y1={"125.5"} y2={"125.5"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"0"} x2={"790"} y1={"250.9"} y2={"250.9"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"0"} x2={"790"} y1={"376.4"} y2={"376.4"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"66"} x2={"66"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"132"} x2={"132"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"198"} x2={"198"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"264"} x2={"264"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"330"} x2={"330"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"396"} x2={"396"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"462"} x2={"462"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"528"} x2={"528"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"594"} x2={"594"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"660"} x2={"660"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                            <line x1={"726"} x2={"726"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                          </g>
                                          <g fill={"none"} strokeWidth={"1.8"} strokeLinejoin={"round"}>
                                            <path d={v?.chart?.proc} stroke={"#CA8A04"} vectorEffect={"non-scaling-stroke"} />
                                            <path d={v?.chart?.desv} stroke={"#F97316"} vectorEffect={"non-scaling-stroke"} />
                                            <path d={v?.chart?.set} stroke={"#16A34A"} vectorEffect={"non-scaling-stroke"} />
                                            <path d={v?.chart?.amb} stroke={"#2563EB"} vectorEffect={"non-scaling-stroke"} />
                                            <path d={v?.chart?.evap} stroke={"#DC2626"} vectorEffect={"non-scaling-stroke"} />
                                          </g>
                                        </svg>
                                        <span style={{ position: "absolute", left: "47%", top: "0", bottom: "0", width: "1px", background: "#B8B5C6" }} />
                                        <div style={{ position: "absolute", left: "49%", top: "24%", width: "230px", padding: "12px 14px", borderRadius: "8px", background: "#EEECFA", border: "1px solid #DAD5EA", boxShadow: "0 8px 24px -10px rgba(30,27,46,0.25)", display: "flex", flexDirection: "column", gap: "6px", fontSize: "11px" }}>
                                          <span style={{ fontWeight: "600" }}>
                                            {"04:50"}
                                          </span>
                                          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2563EB" }} />
                                            {"Ambiente: "}
                                            <b style={{ fontWeight: "600" }}>
                                              {"7.2 °C"}
                                            </b>
                                          </span>
                                          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#F97316" }} />
                                            {"Desvio Relativo ao Setpoint: "}
                                            <b style={{ fontWeight: "600" }}>
                                              {"21.0 °C"}
                                            </b>
                                          </span>
                                          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#DC2626" }} />
                                            {"Evaporador: "}
                                            <b style={{ fontWeight: "600" }}>
                                              {"29.2 °C"}
                                            </b>
                                          </span>
                                          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#CA8A04" }} />
                                            {"Processo atual: "}
                                            <b style={{ fontWeight: "600" }}>
                                              {"8"}
                                            </b>
                                          </span>
                                          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#16A34A" }} />
                                            {"Setpoint atual: "}
                                            <b style={{ fontWeight: "600" }}>
                                              {"-14.0 °C"}
                                            </b>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div style={{ width: "300px", flex: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                                    <div style={{ background: "#FFFFFF", border: "1px solid #E7E3F1", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                                      <span style={{ fontSize: "13px", fontWeight: "600" }}>
                                        {"Temperatura atual"}
                                      </span>
                                      <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                        <div style={{ display: "flex", gap: "4px", flex: "none" }}>
                                          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "102px", fontSize: "9px", color: "#4B4860", paddingTop: "2px" }}>
                                            <span>
                                              {"+40°"}
                                            </span>
                                            <span>
                                              {"0°"}
                                            </span>
                                            <span>
                                              {"-40°"}
                                            </span>
                                          </div>
                                          <div style={{ position: "relative", width: "18px", height: "122px" }}>
                                            <div style={{ position: "absolute", left: "6px", top: "4px", width: "6px", height: "102px", borderRadius: "4px", background: "#E5E7EB", overflow: "hidden" }}>
                                              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "42%", background: "linear-gradient(to top,#2563EB 70%,#7DB3F5)" }} />
                                            </div>
                                            <div style={{ position: "absolute", left: "0", bottom: "0", width: "18px", height: "18px", borderRadius: "50%", background: "#2563EB" }} />
                                          </div>
                                        </div>
                                        <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px", paddingTop: "4px" }}>
                                          <span style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                                            {"-7.4 °C"}
                                          </span>
                                          <span style={{ fontSize: "11px", color: "#4B4860" }}>
                                            {"Em tempo real"}
                                          </span>
                                          <span style={{ fontSize: "10px", padding: "4px 8px", borderRadius: "4px", background: "#EEF0F6", border: "1px solid #DCDDEB" }}>
                                            {"SP: -14.0 °C"}
                                          </span>
                                          <div style={{ fontSize: "10px", padding: "4px 8px", borderRadius: "4px", border: "1px solid #DCDDEB", display: "flex", flexDirection: "column", gap: "3px" }}>
                                            <span>
                                              {"Limites: -20 a -8 °C"}
                                            </span>
                                            <span>
                                              {"Limites: -18 a -10 °C"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div style={{ background: "#FFFFFF", border: "1px solid #E7E3F1", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                                      <span style={{ fontSize: "13px", fontWeight: "600" }}>
                                        {"Status atual"}
                                      </span>
                                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }}>
                                        <span style={{ height: "52px", borderRadius: "8px", background: "#3B82F6", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em" }}>
                                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.75)" }} />
                                          {"REFR"}
                                        </span>
                                        <span style={{ height: "52px", borderRadius: "8px", background: "#22C55E", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em" }}>
                                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.75)" }} />
                                          {"FANS"}
                                        </span>
                                        <span style={{ height: "52px", borderRadius: "8px", background: "#FFFFFF", border: "1px solid #E2DDF0", color: "#4B4860", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em" }}>
                                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#B8B5C6" }} />
                                          {"DEFR"}
                                        </span>
                                        <span style={{ height: "52px", borderRadius: "8px", background: "#FFFFFF", border: "1px solid #E2DDF0", color: "#4B4860", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em" }}>
                                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#B8B5C6" }} />
                                          {"SOL"}
                                        </span>
                                      </div>
                                      <span style={{ fontSize: "10px", color: "#4B4860", lineHeight: "1.4" }}>
                                        {"Última atualização:"}
                                        <br />
                                        <b style={{ fontWeight: "600", color: "#1E1B2E" }}>
                                          {"27/10/2026, 13:11:25"}
                                        </b>
                                      </span>
                                    </div>
                                    <div style={{ flex: "1", minHeight: "0", overflow: "hidden", background: "#FFFFFF", border: "1px solid #E7E3F1", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600" }}>
                                        {"Todos os sensores"}
                                        <span style={{ fontSize: "10px", fontWeight: "400", color: "#4B4860" }}>
                                          {"8 sensores"}
                                        </span>
                                      </div>
                                      {((v?.sensors) || []).map((L_s: any, $index: number) => (
                                        <React.Fragment key={$index}>
                                          <div style={{ border: "1px solid #E7E3F1", borderRadius: "8px", padding: "10px 12px", display: "flex", justifyContent: "space-between", gap: "8px" }}>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "3px", minWidth: "0" }}>
                                              <span style={{ fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                                {H(L_s?.n)}
                                              </span>
                                              <span style={{ fontSize: "10px", color: "#6B6880" }}>
                                                {H(L_s?.id)}
                                              </span>
                                            </div>
                                            <span style={{ fontSize: "12px", fontWeight: "600", whiteSpace: "nowrap" }}>
                                              {H(L_s?.v)}
                                            </span>
                                          </div>
                                        </React.Fragment>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div style={{ position: "absolute", left: "1236px", top: "140px", transform: "scale(0.82)", transformOrigin: "0 0" }}>
                            <div style={{ width: "380px", height: "800px", borderRadius: "54px", background: "#0D0C14", padding: "11px", boxShadow: "0 50px 90px -30px rgba(0,0,0,0.55),inset 0 0 0 2px #2A2833" }}>
                              <div style={{ position: "relative", width: "358px", height: "778px", borderRadius: "44px", overflow: "hidden", background: "#F5F3FA", color: "#1E1B2E", display: "flex", flexDirection: "column" }}>
                                <div style={{ height: "44px", flex: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px", fontSize: "14px", fontWeight: "600", background: "#FFFFFF" }}>
                                  <span>
                                    {"9:41"}
                                  </span>
                                  <span style={{ width: "96px", height: "28px", borderRadius: "14px", background: "#0D0C14" }} />
                                  <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                                    <span style={{ display: "flex", gap: "2px", alignItems: "flex-end" }}>
                                      <span style={{ width: "3px", height: "5px", background: "#1E1B2E", borderRadius: "1px" }} />
                                      <span style={{ width: "3px", height: "7px", background: "#1E1B2E", borderRadius: "1px" }} />
                                      <span style={{ width: "3px", height: "9px", background: "#1E1B2E", borderRadius: "1px" }} />
                                      <span style={{ width: "3px", height: "11px", background: "#1E1B2E", borderRadius: "1px" }} />
                                    </span>
                                    <span style={{ width: "22px", height: "11px", borderRadius: "3px", border: "1.5px solid #1E1B2E", padding: "1px" }}>
                                      <span style={{ display: "block", width: "70%", height: "100%", background: "#1E1B2E", borderRadius: "1px" }} />
                                    </span>
                                  </span>
                                </div>
                                <div style={{ height: "54px", flex: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", background: "#FFFFFF", borderBottom: "1px solid #EEEBF5" }}>
                                  <img src={"/assets/elicontrol_logo.png"} alt={"Eli Control"} style={{ height: "30px", width: "auto" }} />
                                  <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                    <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#5B3FD9", color: "#FFFFFF", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      {"A"}
                                    </span>
                                    <span style={{ width: "34px", height: "34px", borderRadius: "9px", border: "1px solid #E2DDF0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                      <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M4 6h16M4 12h16M4 18h16"} />
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                                <div style={{ flex: "1", minHeight: "0", overflow: "hidden", padding: "12px 12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                    <span style={{ fontSize: "9px", letterSpacing: "0.16em", color: "#4B4860", fontWeight: "500" }}>
                                      {"DETALHES DO SENSOR"}
                                    </span>
                                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "16px", fontWeight: "600" }}>
                                      <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4B4860"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"} />
                                      </svg>
                                      {"Câmara de congelados [015]"}
                                    </span>
                                  </div>
                                  <div style={{ display: "flex", gap: "6px" }}>
                                    <span style={{ height: "26px", padding: "0 10px", borderRadius: "6px", border: "1px solid #DAD5EA", background: "#E0DAF6", fontSize: "11px", fontWeight: "500", display: "flex", alignItems: "center" }}>
                                      {"Último dia"}
                                    </span>
                                    <span style={{ height: "26px", padding: "0 10px", borderRadius: "6px", border: "1px solid #DAD5EA", background: "#FFFFFF", fontSize: "11px", fontWeight: "500", display: "flex", alignItems: "center" }}>
                                      {"Esta semana"}
                                    </span>
                                    <span style={{ height: "26px", padding: "0 10px", borderRadius: "6px", border: "1px solid #DAD5EA", background: "#FFFFFF", fontSize: "11px", fontWeight: "500", display: "flex", alignItems: "center" }}>
                                      {"Este mês"}
                                    </span>
                                  </div>
                                  <div style={{ background: "#FFFFFF", border: "1px solid #E7E3F1", borderRadius: "12px", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                                      {"Temperatura atual"}
                                    </span>
                                    <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                                      <div style={{ display: "flex", gap: "4px", flex: "none" }}>
                                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "102px", fontSize: "9px", color: "#4B4860", paddingTop: "2px" }}>
                                          <span>
                                            {"+40°"}
                                          </span>
                                          <span>
                                            {"0°"}
                                          </span>
                                          <span>
                                            {"-40°"}
                                          </span>
                                        </div>
                                        <div style={{ position: "relative", width: "18px", height: "122px" }}>
                                          <div style={{ position: "absolute", left: "6px", top: "4px", width: "6px", height: "102px", borderRadius: "4px", background: "#E5E7EB", overflow: "hidden" }}>
                                            <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "42%", background: "linear-gradient(to top,#2563EB 70%,#7DB3F5)" }} />
                                          </div>
                                          <div style={{ position: "absolute", left: "0", bottom: "0", width: "18px", height: "18px", borderRadius: "50%", background: "#2563EB" }} />
                                        </div>
                                      </div>
                                      <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px", paddingTop: "4px" }}>
                                        <span style={{ fontSize: "26px", fontWeight: "700", letterSpacing: "-0.02em" }}>
                                          {"-7.4 °C"}
                                        </span>
                                        <span style={{ fontSize: "11px", color: "#4B4860" }}>
                                          {"Em tempo real"}
                                        </span>
                                        <span style={{ fontSize: "10px", padding: "4px 8px", borderRadius: "4px", background: "#EEF0F6", border: "1px solid #DCDDEB" }}>
                                          {"SP: -14.0 °C"}
                                        </span>
                                        <div style={{ fontSize: "10px", padding: "4px 8px", borderRadius: "4px", border: "1px solid #DCDDEB", display: "flex", flexDirection: "column", gap: "3px" }}>
                                          <span>
                                            {"Limites: -20 a -8 °C"}
                                          </span>
                                          <span>
                                            {"Limites: -18 a -10 °C"}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div style={{ background: "#FFFFFF", border: "1px solid #E7E3F1", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                                    <span style={{ fontSize: "12px", fontWeight: "600" }}>
                                      {"Status atual"}
                                    </span>
                                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }}>
                                      <span style={{ height: "42px", borderRadius: "8px", background: "#3B82F6", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em" }}>
                                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.75)" }} />
                                        {"REFR"}
                                      </span>
                                      <span style={{ height: "42px", borderRadius: "8px", background: "#22C55E", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em" }}>
                                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.75)" }} />
                                        {"FANS"}
                                      </span>
                                      <span style={{ height: "42px", borderRadius: "8px", background: "#FFFFFF", border: "1px solid #E2DDF0", color: "#4B4860", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em" }}>
                                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#B8B5C6" }} />
                                        {"DEFR"}
                                      </span>
                                      <span style={{ height: "42px", borderRadius: "8px", background: "#FFFFFF", border: "1px solid #E2DDF0", color: "#4B4860", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "10px", fontWeight: "700", letterSpacing: "0.06em" }}>
                                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#B8B5C6" }} />
                                        {"SOL"}
                                      </span>
                                    </div>
                                  </div>
                                  <div style={{ background: "#FFFFFF", border: "1px solid #E7E3F1", borderRadius: "12px", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                                    <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: "600" }}>
                                      <svg width={"12"} height={"12"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#1E1B2E"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                        <path d={"M3 3v18h18M7 15l4-4 3 3 5-6"} />
                                      </svg>
                                      {"Histórico · últimas 24 h"}
                                    </span>
                                    <div style={{ position: "relative", height: "130px" }}>
                                      <svg viewBox={"0 0 790 460"} preserveAspectRatio={"none"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", overflow: "visible" }}>
                                        <g stroke={"#E3E0EE"} strokeWidth={"1"} strokeDasharray={"3 4"} vectorEffect={"non-scaling-stroke"}>
                                          <line x1={"0"} x2={"790"} y1={"0"} y2={"0"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"0"} x2={"790"} y1={"125.5"} y2={"125.5"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"0"} x2={"790"} y1={"250.9"} y2={"250.9"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"0"} x2={"790"} y1={"376.4"} y2={"376.4"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"66"} x2={"66"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"132"} x2={"132"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"198"} x2={"198"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"264"} x2={"264"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"330"} x2={"330"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"396"} x2={"396"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"462"} x2={"462"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"528"} x2={"528"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"594"} x2={"594"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"660"} x2={"660"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                          <line x1={"726"} x2={"726"} y1={"0"} y2={"460"} vectorEffect={"non-scaling-stroke"} />
                                        </g>
                                        <g fill={"none"} strokeWidth={"1.4"} strokeLinejoin={"round"}>
                                          <path d={v?.chart?.proc} stroke={"#CA8A04"} vectorEffect={"non-scaling-stroke"} />
                                          <path d={v?.chart?.desv} stroke={"#F97316"} vectorEffect={"non-scaling-stroke"} />
                                          <path d={v?.chart?.set} stroke={"#16A34A"} vectorEffect={"non-scaling-stroke"} />
                                          <path d={v?.chart?.amb} stroke={"#2563EB"} vectorEffect={"non-scaling-stroke"} />
                                          <path d={v?.chart?.evap} stroke={"#DC2626"} vectorEffect={"non-scaling-stroke"} />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div style={{ height: "72px", flex: "none", background: "#FFFFFF", borderTop: "1px solid #EEEBF5", display: "grid", gridTemplateColumns: "repeat(5,1fr)", padding: "0 6px 10px" }}>
                                  {((v?.mnavSensor) || []).map((L_m: any, $index: number) => (
                                    <React.Fragment key={$index}>
                                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", fontSize: "10px", fontWeight: "500", background: (`${L_m?.bg ?? ""}` as any), borderTop: (`3px solid ${L_m?.bar ?? ""}` as any), borderRadius: "0 0 10px 10px" }}>
                                        <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"} stroke={L_m?.c} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                                          <path d={L_m?.d} />
                                        </svg>
                                        {H(L_m?.t)}
                                      </div>
                                    </React.Fragment>
                                  ))}
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
                  <figcaption style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#5A5F66" }}>
                    <span style={{ whiteSpace: "nowrap" }}>
                      {"Fig. 04"}
                    </span>
                    <span style={{ textAlign: "right" }}>
                      {"Detalhes do sensor: histórico com degelos na web e leitura em tempo real no app"}
                    </span>
                  </figcaption>
                </figure>
                {"\n    "}
                <figure style={{ flex: "1.4 1 460px", minWidth: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ position: "relative", border: "1px solid #0B0E13", background: "#FFFFFF" }}>
                    <div style={{ position: "relative", aspectRatio: "2/1", overflow: "hidden" }}>
                      <div data-fit={"1280"} style={{ position: "absolute", inset: "0", overflow: "hidden" }}>
                        <div style={{ position: "relative", width: "1280px", height: "640px", transformOrigin: "0 0", background: "#FFFFFF", color: "#202124", display: "flex", flexDirection: "column", fontFamily: "'Geist',system-ui,sans-serif" }}>
                          <div style={{ display: "flex", height: "22px", flex: "none", background: "#F8F9FA", borderBottom: "1px solid #DADCE0" }}>
                            <div style={{ width: "40px", borderRight: "1px solid #DADCE0" }} />
                            <div style={{ flex: "1", display: "grid", gridTemplateColumns: "150px 170px 170px 150px 170px 170px 170px 1fr" }}>
                              {((v?.letters) || []).map((L_l: any, $index: number) => (
                                <React.Fragment key={$index}>
                                  <div style={{ borderRight: "1px solid #DADCE0", fontSize: "11px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    {H(L_l)}
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                          <div style={{ display: "flex", height: "26px", flex: "none", borderBottom: "1px solid #E8EAED" }}>
                            <div style={{ width: "40px", flex: "none", background: "#F8F9FA", borderRight: "1px solid #DADCE0", fontSize: "10px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"1"}
                            </div>
                            <div style={{ flex: "1", minWidth: "0", background: "#1F3A8A", color: "#FFFFFF", fontSize: "14px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"demo-485_1 • TC-900 clock [005]"}
                            </div>
                          </div>
                          <div style={{ display: "flex", height: "20px", flex: "none", borderBottom: "1px solid #E8EAED" }}>
                            <div style={{ width: "40px", flex: "none", background: "#F8F9FA", borderRight: "1px solid #DADCE0", fontSize: "10px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"2"}
                            </div>
                            <div style={{ flex: "1", minWidth: "0", fontSize: "10px", color: "#3C4043", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"Empresa: Mercado Exemplo • Filial: Matriz • Período: 01/10/2026, 00:00 até 25/10/2026, 18:52"}
                            </div>
                          </div>
                          <div style={{ display: "flex", height: "22px", flex: "none", borderBottom: "1px solid #E8EAED" }}>
                            <div style={{ width: "40px", flex: "none", background: "#F8F9FA", borderRight: "1px solid #DADCE0", fontSize: "10px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"3"}
                            </div>
                            <div style={{ flex: "1", minWidth: "0" }} />
                          </div>
                          <div style={{ display: "flex", height: "22px", flex: "none", borderBottom: "1px solid #E8EAED" }}>
                            <div style={{ width: "40px", flex: "none", background: "#F8F9FA", borderRight: "1px solid #DADCE0", fontSize: "10px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"4"}
                            </div>
                            <div style={{ flex: "1", minWidth: "0" }}>
                              <div style={{ display: "grid", gridTemplateColumns: "150px 170px 170px 150px 170px 170px 170px 1fr", height: "100%" }}>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", fontWeight: "600" }}>
                                  {"Controlador"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }}>
                                  {"demo@matriz@tcp-485_1"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }} />
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", fontWeight: "600" }}>
                                  {"Instrumento"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }}>
                                  {"TC-900 clock [005]"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", fontWeight: "600" }}>
                                  {"Instrumento ID"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }}>
                                  {"3f9c2e10-7a41-4d2b-9e6a-0005"}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div style={{ display: "flex", height: "22px", flex: "none", borderBottom: "1px solid #E8EAED" }}>
                            <div style={{ width: "40px", flex: "none", background: "#F8F9FA", borderRight: "1px solid #DADCE0", fontSize: "10px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"5"}
                            </div>
                            <div style={{ flex: "1", minWidth: "0" }}>
                              <div style={{ display: "grid", gridTemplateColumns: "150px 170px 170px 150px 170px 170px 170px 1fr", height: "100%" }}>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", fontWeight: "600" }}>
                                  {"Sensores"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }}>
                                  {"5"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }} />
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", fontWeight: "600" }}>
                                  {"Cobertura"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }}>
                                  {"96.2%"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", fontWeight: "600" }}>
                                  {"Alerta"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }}>
                                  {"CRÍTICO (128)"}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div style={{ display: "flex", height: "22px", flex: "none", borderBottom: "1px solid #E8EAED" }}>
                            <div style={{ width: "40px", flex: "none", background: "#F8F9FA", borderRight: "1px solid #DADCE0", fontSize: "10px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"6"}
                            </div>
                            <div style={{ flex: "1", minWidth: "0" }}>
                              <div style={{ display: "grid", gridTemplateColumns: "150px 170px 170px 150px 170px 170px 170px 1fr", height: "100%" }}>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", fontWeight: "600" }}>
                                  {"Tempo em degelo"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }}>
                                  {"61h 40min"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }} />
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", fontWeight: "600" }}>
                                  {"Tempo em refrigeração"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }}>
                                  {"182h 10min"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", fontWeight: "600" }}>
                                  {"Gerado em"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px" }}>
                                  {"25/10/2026, 18:53"}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div style={{ display: "flex", height: "22px", flex: "none", borderBottom: "1px solid #E8EAED" }}>
                            <div style={{ width: "40px", flex: "none", background: "#F8F9FA", borderRight: "1px solid #DADCE0", fontSize: "10px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"7"}
                            </div>
                            <div style={{ flex: "1", minWidth: "0" }} />
                          </div>
                          <div style={{ display: "flex", height: "22px", flex: "none", borderBottom: "1px solid #E8EAED" }}>
                            <div style={{ width: "40px", flex: "none", background: "#F8F9FA", borderRight: "1px solid #DADCE0", fontSize: "10px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"8"}
                            </div>
                            <div style={{ flex: "1", minWidth: "0", background: "#EEF0F4", fontWeight: "600", fontSize: "11px", display: "flex", alignItems: "center", padding: "0 6px" }}>
                              {"Amostras do instrumento"}
                            </div>
                          </div>
                          <div style={{ display: "flex", height: "22px", flex: "none", borderBottom: "1px solid #E8EAED" }}>
                            <div style={{ width: "40px", flex: "none", background: "#F8F9FA", borderRight: "1px solid #DADCE0", fontSize: "10px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"9"}
                            </div>
                            <div style={{ flex: "1", minWidth: "0" }}>
                              <div style={{ display: "grid", gridTemplateColumns: "150px 170px 170px 150px 170px 170px 170px 1fr", height: "100%" }}>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", fontWeight: "600", background: "#F8F9FA" }}>
                                  {"ID / tipo"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", fontWeight: "600", background: "#F1F5F9" }}>
                                  {"#2101 • Desvio"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", fontWeight: "600", background: "#F1F5F9" }}>
                                  {"#2102 • Processo atual"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", fontWeight: "600", background: "#F1F5F9" }}>
                                  {"#2103 • Setpoint"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", fontWeight: "600", background: "#F1F5F9" }}>
                                  {"#2104 • Ambiente"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", fontWeight: "600", background: "#F1F5F9" }}>
                                  {"#2105 • Processo"}
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", fontWeight: "600", background: "#F1F5F9" }}>
                                  {"Operação"}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div style={{ display: "flex", height: "28px", flex: "none", borderBottom: "1px solid #E8EAED" }}>
                            <div style={{ width: "40px", flex: "none", background: "#F8F9FA", borderRight: "1px solid #DADCE0", fontSize: "10px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {"10"}
                            </div>
                            <div style={{ flex: "1", minWidth: "0", borderBottom: "2px solid #9AA0A6" }}>
                              <div style={{ display: "grid", gridTemplateColumns: "150px 170px 170px 150px 170px 170px 170px 1fr", height: "100%" }}>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", gap: "6px", background: "#1E3A8A", color: "#FFFFFF", fontWeight: "600" }}>
                                  {"Data/Hora"}
                                  <span style={{ marginLeft: "auto", fontSize: "9px", opacity: "0.7" }}>
                                    {"▼"}
                                  </span>
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", gap: "6px", background: "#1E3A8A", color: "#FFFFFF", fontWeight: "600" }}>
                                  {"Desvio Relativo ao Setpoint"}
                                  <span style={{ marginLeft: "auto", fontSize: "9px", opacity: "0.7" }}>
                                    {"▼"}
                                  </span>
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", gap: "6px", background: "#1E3A8A", color: "#FFFFFF", fontWeight: "600" }}>
                                  {"Processo atual"}
                                  <span style={{ marginLeft: "auto", fontSize: "9px", opacity: "0.7" }}>
                                    {"▼"}
                                  </span>
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", gap: "6px", background: "#1E3A8A", color: "#FFFFFF", fontWeight: "600" }}>
                                  {"Setpoint"}
                                  <span style={{ marginLeft: "auto", fontSize: "9px", opacity: "0.7" }}>
                                    {"▼"}
                                  </span>
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", gap: "6px", background: "#1E3A8A", color: "#FFFFFF", fontWeight: "600" }}>
                                  {"Temperatura Ambiente"}
                                  <span style={{ marginLeft: "auto", fontSize: "9px", opacity: "0.7" }}>
                                    {"▼"}
                                  </span>
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", gap: "6px", background: "#1E3A8A", color: "#FFFFFF", fontWeight: "600" }}>
                                  {"Temperatura Evaporador"}
                                  <span style={{ marginLeft: "auto", fontSize: "9px", opacity: "0.7" }}>
                                    {"▼"}
                                  </span>
                                </div>
                                <div style={{ padding: "0 6px", borderRight: "1px solid #E8EAED", display: "flex", alignItems: "center", fontSize: "11px", justifyContent: "center", gap: "6px", background: "#1E3A8A", color: "#FFFFFF", fontWeight: "600" }}>
                                  {"Status operacional"}
                                  <span style={{ marginLeft: "auto", fontSize: "9px", opacity: "0.7" }}>
                                    {"▼"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {((v?.rows) || []).map((L_row: any, $index: number) => (
                            <React.Fragment key={$index}>
                              <div style={{ display: "flex", height: "22px", flex: "none", borderBottom: "1px solid #E8EAED" }}>
                                <div style={{ width: "40px", flex: "none", background: "#F8F9FA", borderRight: "1px solid #DADCE0", fontSize: "10px", color: "#5F6368", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  {H(L_row?.n)}
                                </div>
                                <div style={{ flex: "1", display: "grid", gridTemplateColumns: "150px 170px 170px 150px 170px 170px 170px 1fr" }}>
                                  {((L_row?.cells) || []).map((L_c: any, $index: number) => (
                                    <React.Fragment key={$index}>
                                      <div style={{ background: (`${L_c?.bg ?? ""}` as any), color: (`${L_c?.c ?? ""}` as any), fontWeight: (`${L_c?.fw ?? ""}` as any), textAlign: (`${L_c?.al ?? ""}` as any), padding: "0 6px", borderRight: "1px solid #FFFFFF", lineHeight: "22px", fontSize: "11px" }}>
                                        {H(L_c?.v)}
                                      </div>
                                    </React.Fragment>
                                  ))}
                                </div>
                              </div>
                            </React.Fragment>
                          ))}
                          <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "38px", background: "#F8F9FA", borderTop: "1px solid #DADCE0", display: "flex", alignItems: "stretch", gap: "2px", paddingLeft: "20px" }}>
                            <span style={{ width: "40px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "#5F6368" }}>
                              {"+"}
                            </span>
                            {((v?.tabs) || []).map((L_t: any, $index: number) => (
                              <React.Fragment key={$index}>
                                <span style={{ padding: "0 16px", display: "flex", alignItems: "center", fontSize: "12px", fontWeight: "500", color: (`${L_t?.on ?? ""}` as any), background: (`${L_t?.bg ?? ""}` as any) }}>
                                  {H(L_t?.t)}{" ▾"}
                                </span>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <span style={{ position: "absolute", left: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                    <span style={{ position: "absolute", right: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                    <span style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                    <span style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                  </div>
                  <figcaption style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#5A5F66" }}>
                    <span style={{ whiteSpace: "nowrap" }}>
                      {"Fig. 05"}
                    </span>
                    <span style={{ textAlign: "right" }}>
                      {"Relatório de temperatura histórica com status operacional a cada 10 minutos"}
                    </span>
                  </figcaption>
                </figure>
                {"\n  "}
              </div>
            </section>
          </>
        ) : null}
        <section data-screen-label={"Stack"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingBottom: "clamp(72px,9vw,128px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px clamp(32px,5vw,80px)", alignItems: "baseline", borderTop: "1px solid #0B0E13", paddingTop: "24px" }}>
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
                  {"PostgreSQL"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"TypeORM"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"MQTT"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"JWT"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"Handlebars"}
                </span>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                  {"AWS Athena"}
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
            <a className={"dh7"} href={"/cases/eli-pecas"} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "32px 0", borderTop: "1px solid #22272F", borderBottom: "1px solid #22272F", color: "#ECEBE6", transition: "color .2s" }}>
              {"\n      "}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                  {"Próximo case · 02"}
                </span>
                {"\n        "}
                <span style={{ display: "flex", alignItems: "center", gap: "clamp(16px,2vw,28px)" }}>
                  <img src={"/assets/elipecas/mark_white.png"} alt={""} style={{ height: "clamp(40px,4.4vw,64px)", width: "auto" }} />
                  <span style={{ fontSize: "clamp(48px,7vw,104px)", fontWeight: "500", letterSpacing: "-0.045em", lineHeight: "0.94" }}>
                    {"Eli Peças"}
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
              <h2 style={{ margin: "0", maxWidth: "12ch", fontSize: "clamp(48px,8.6vw,132px)", lineHeight: "0.94", letterSpacing: "-0.045em", fontWeight: "500", textWrap: "balance" }}>
                {"Tem um projeto em mente?"}
              </h2>
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
