'use client';
/* eslint-disable */
// GERADO por scripts/sync-design.mjs a partir de "Sobre.dc.html". Não edite à mão:
// altere o design e rode `npm run design:sync -- <pasta-do-design>`.
import React from 'react';
import { useDC } from '@/lib/dc';
import Logic from '@/lib/logic/sobre';

const CSS = "html{scroll-behavior:smooth}\nbody{margin:0;background:#0B0E13;font-family:'Schibsted Grotesk',system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:inherit;text-decoration:none}\na:hover{color:#3D6BFF}\n*{box-sizing:border-box}\n::selection{background:#3D6BFF;color:#FFFFFF}\n.dh1:hover{color:#FFFFFF !important}\n.dh2:hover{color:#FFFFFF !important}\n.dh3:hover{color:#FFFFFF !important}\n.dh4:hover{color:#FFFFFF !important}\n.dh5:hover{border-color:#ECEBE6 !important}\n.dh6:hover{color:#ECEBE6 !important}\n.dh7:hover{border-color:#3D6BFF !important;background:#E9E7E1 !important}\n.dh8:hover{border-color:#3D6BFF !important;background:#E9E7E1 !important}\n.dh9:hover{border-color:#3D6BFF !important;background:#E9E7E1 !important}\n.dh10:hover{border-color:#3D6BFF !important;background:#E9E7E1 !important}\n.dh11:hover{color:#2A52E0 !important}\n.dh12:hover{color:#3D6BFF !important}\n.dh13:hover{color:#3D6BFF !important;border-color:#3D6BFF !important}\n.dh14:hover{color:#3D6BFF !important}\n.dh15:hover{color:#3D6BFF !important}\n.dh16:hover{color:#3D6BFF !important}\n.dh17:hover{color:#ECEBE6 !important}";

const FONTS: string[] = [
  "https://fonts.googleapis.com/css2?family=Geist:wght@300;600&display=swap",
  "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Raleway:wght@400;500;600;700&display=swap"
];

const DEFAULTS: Record<string, unknown> = {"motion":true};

// Valor interpolado no texto: o runtime do design o envolve em <span class="sc-interp">.
const H = (x: any) => (x === undefined || x === null || typeof x === 'boolean' ? null : <span className="sc-interp">{String(x)}</span>);

export default function SobreView(props: Record<string, unknown>) {
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
              <a className={"dh2"} href={"/sobre"} aria-current={"page"} style={{ display: "flex", gap: "8px", color: "#FFFFFF" }}>
                <span style={{ color: "#3D6BFF" }}>
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
        <section id={"top"} data-screen-label={"Hero"} style={{ background: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(40px,6vw,80px)", paddingBottom: "clamp(56px,7vw,96px)", display: "flex", flexDirection: "column", gap: "clamp(36px,5vw,64px)" }}>
            {"\n    "}
            <div data-reveal={"fade"} style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", borderBottom: "1px solid #22272F", paddingBottom: "16px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
              {"\n      "}
              <a className={"dh6"} href={"/"} style={{ color: "#9AA1AB" }}>
                {"← Início"}
              </a>
              {"\n      "}
              <span>
                {"Sobre · Engenheiro de software"}
              </span>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ overflow: "hidden" }}>
              <h1 data-reveal={"line"} data-delay={"80"} style={{ margin: "0", padding: "0.06em 0 0.24em", maxWidth: "14ch", fontSize: "clamp(48px,8.6vw,132px)", lineHeight: "0.94", letterSpacing: "-0.045em", fontWeight: "500", textWrap: "balance" }}>
                {"Derik Sehn"}
              </h1>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "32px clamp(32px,5vw,96px)", alignItems: "flex-start" }}>
              {"\n      "}
              <p data-reveal={"fade"} data-delay={"200"} style={{ flex: "1.4 1 420px", maxWidth: "720px", margin: "0", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty", fontSize: "clamp(18px,1.6vw,21px)" }}>
                {"Engenheiro de software com experiência em "}
                <span style={{ color: "#ECEBE6" }}>
                  {"sistemas corporativos"}
                </span>
                {", "}
                <span style={{ color: "#ECEBE6" }}>
                  {"cloud"}
                </span>
                {", "}
                <span style={{ color: "#ECEBE6" }}>
                  {"DevOps"}
                </span>
                {" e "}
                <span style={{ color: "#ECEBE6" }}>
                  {"integrações"}
                </span>
                {". Já desenvolvi soluções para indústria, logística, comércio e saúde, do código à infraestrutura em produção."}
              </p>
              {"\n      "}
              <dl data-reveal={"fade"} data-delay={"320"} style={{ flex: "1 1 320px", margin: "0", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", borderTop: "1px solid #22272F" }}>
                {"\n        "}
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Atual"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Ford Motor Company · DevSehn"}
                </dd>
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Foco"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Full-stack · Cloud · DevOps"}
                </dd>
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Base"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Capão da Canoa, RS · Brasil"}
                </dd>
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Idiomas"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Português · Inglês (C1)"}
                </dd>
                {"\n      "}
              </dl>
              {"\n    "}
            </div>
            {"\n    "}
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div data-reveal={"clip"} style={{ position: "relative", border: "1px solid #22272F", background: "#0F1218" }}>
                <div style={{ position: "relative", aspectRatio: "21/8", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox={"0 0 1050 400"} preserveAspectRatio={"xMidYMid slice"} aria-hidden={"true"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}>
                    <g stroke={"#1B2029"} strokeWidth={"1"}>
                      <line x1={"0"} y1={"0"} x2={"0"} y2={"400"} />
                      <line x1={"50"} y1={"0"} x2={"50"} y2={"400"} />
                      <line x1={"100"} y1={"0"} x2={"100"} y2={"400"} />
                      <line x1={"150"} y1={"0"} x2={"150"} y2={"400"} />
                      <line x1={"200"} y1={"0"} x2={"200"} y2={"400"} />
                      <line x1={"250"} y1={"0"} x2={"250"} y2={"400"} />
                      <line x1={"300"} y1={"0"} x2={"300"} y2={"400"} />
                      <line x1={"350"} y1={"0"} x2={"350"} y2={"400"} />
                      <line x1={"400"} y1={"0"} x2={"400"} y2={"400"} />
                      <line x1={"450"} y1={"0"} x2={"450"} y2={"400"} />
                      <line x1={"500"} y1={"0"} x2={"500"} y2={"400"} />
                      <line x1={"550"} y1={"0"} x2={"550"} y2={"400"} />
                      <line x1={"600"} y1={"0"} x2={"600"} y2={"400"} />
                      <line x1={"650"} y1={"0"} x2={"650"} y2={"400"} />
                      <line x1={"700"} y1={"0"} x2={"700"} y2={"400"} />
                      <line x1={"750"} y1={"0"} x2={"750"} y2={"400"} />
                      <line x1={"800"} y1={"0"} x2={"800"} y2={"400"} />
                      <line x1={"850"} y1={"0"} x2={"850"} y2={"400"} />
                      <line x1={"900"} y1={"0"} x2={"900"} y2={"400"} />
                      <line x1={"950"} y1={"0"} x2={"950"} y2={"400"} />
                      <line x1={"1000"} y1={"0"} x2={"1000"} y2={"400"} />
                      <line x1={"1050"} y1={"0"} x2={"1050"} y2={"400"} />
                      <line x1={"0"} y1={"0"} x2={"1050"} y2={"0"} />
                      <line x1={"0"} y1={"50"} x2={"1050"} y2={"50"} />
                      <line x1={"0"} y1={"100"} x2={"1050"} y2={"100"} />
                      <line x1={"0"} y1={"150"} x2={"1050"} y2={"150"} />
                      <line x1={"0"} y1={"200"} x2={"1050"} y2={"200"} />
                      <line x1={"0"} y1={"250"} x2={"1050"} y2={"250"} />
                      <line x1={"0"} y1={"300"} x2={"1050"} y2={"300"} />
                      <line x1={"0"} y1={"350"} x2={"1050"} y2={"350"} />
                      <line x1={"0"} y1={"400"} x2={"1050"} y2={"400"} />
                    </g>
                    <g fill={"none"} stroke={"#2F4BF0"} strokeWidth={"1.2"}>
                      <circle cx={"525"} cy={"200"} r={"120"} opacity={"0.5"}>
                        <animate attributeName={"r"} values={"120;150;120"} dur={"6s"} repeatCount={"indefinite"} />
                        <animate attributeName={"opacity"} values={"0.5;0.12;0.5"} dur={"6s"} repeatCount={"indefinite"} />
                      </circle>
                      <circle cx={"525"} cy={"200"} r={"180"} opacity={"0.25"}>
                        <animate attributeName={"r"} values={"180;214;180"} dur={"6s"} begin={"1.2s"} repeatCount={"indefinite"} />
                      </circle>
                    </g>
                    <g transform={"translate(437 112) scale(4)"}>
                      <path fill={"#ECEBE6"} d={"M0 0H20A22 22 0 0 1 20 44H0V25H15.68A7 7 0 1 0 15.68 19H0Z"} />
                      <circle cx={"22"} cy={"22"} r={"3.5"} fill={"#2F4BF0"} />
                    </g>
                    <g fontFamily={"IBM Plex Mono, monospace"} fontSize={"13"} fill={"#4B525C"} letterSpacing={"1.5"}>
                      <text x={"40"} y={"60"}>
                        {"LAT −29.75"}
                      </text>
                      <text x={"40"} y={"82"}>
                        {"LON −50.01"}
                      </text>
                      <text x={"870"} y={"350"}>
                        {"UTC−3"}
                      </text>
                    </g>
                  </svg>
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
                  {"Capão da Canoa, RS · trabalhando remoto para times do Brasil e de fora."}
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
                  {"Do código à produção"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(01) Quem sou"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "24px clamp(32px,5vw,96px)" }}>
              {"\n      "}
              <p data-reveal={"fade"} style={{ flex: "1 1 360px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                {"Comecei em sistemas de gestão hospitalar, onde aprendi que software bom é o que a equipe usa todo dia sem pensar nele. Desde então trabalho em produtos que precisam funcionar em operação real."}
              </p>
              {"\n      "}
              <p data-reveal={"fade"} data-delay={"120"} style={{ flex: "1 1 360px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                {"Hoje divido o tempo entre a plataforma de logística da Ford e os projetos da DevSehn, cuidando da interface, da API, do banco e da entrega, com o mesmo cuidado em cada camada."}
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", borderTop: "1px solid #0B0E13" }}>
              {"\n      "}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }} data-reveal={"fade"} data-delay={"0"}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  <span data-count={"4"}>
                    {"4"}
                  </span>
                  {"+"}
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"anos construindo software em produção"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }} data-reveal={"fade"} data-delay={"120"}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  <span data-count={"4"}>
                    {"4"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"empresas, da saúde à indústria automotiva"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }} data-reveal={"fade"} data-delay={"240"}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  <span data-count={"5"}>
                    {"5"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"cases publicados neste portfólio"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }} data-reveal={"fade"} data-delay={"360"}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  <span data-count={"20"}>
                    {"20"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"cursos e certificações concluídos"}
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Trajetória"} style={{ background: "#0B0E13", color: "#ECEBE6" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(16px,2vw,24px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #ECEBE6", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"Onde já trabalhei"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                {"(02) Trajetória"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {"\n      "}
              <article data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "16px clamp(24px,4vw,64px)", padding: "32px 0", borderBottom: "1px solid #22272F" }}>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#9AA1AB" }}>
                    {"Fev 2025 – atual"}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#ECEBE6" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#3D6BFF" }} />
                    {"Atual"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(26px,2.6vw,38px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
                    {"Ford Motor Company"}
                  </h3>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#6E7681" }}>
                    {"Engenheiro de software"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty" }}>
                    {"Plataforma global de logística com Angular, Spring Boot, PostgreSQL e Kubernetes no GCP."}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", color: "#C9CDD3" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"Angular"}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"Spring Boot"}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"PostgreSQL"}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"Kubernetes"}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"GCP"}
                    </span>
                  </div>
                </div>
                {"\n      "}
              </article>
              <article data-reveal={"fade"} data-delay={"100"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "16px clamp(24px,4vw,64px)", padding: "32px 0", borderBottom: "1px solid #22272F" }}>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#9AA1AB" }}>
                    {"Set 2025 – Ago 2026"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(26px,2.6vw,38px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
                    {"Maxxi Data Informática"}
                  </h3>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#6E7681" }}>
                    {"Full-stack · Inovação Bayer, eztime"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty" }}>
                    {"Migrations, IA, controle de colheita, registro e sistema de ponto."}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", color: "#C9CDD3" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"CloudOps"}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"Data & AI"}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"Clean Architecture"}
                    </span>
                  </div>
                </div>
                {"\n      "}
              </article>
              <article data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "16px clamp(24px,4vw,64px)", padding: "32px 0", borderBottom: "1px solid #22272F" }}>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#9AA1AB" }}>
                    {"Mar 2024 – atual"}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#ECEBE6" }}>
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#3D6BFF" }} />
                    {"Atual"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(26px,2.6vw,38px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
                    {"DevSehn"}
                  </h3>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#6E7681" }}>
                    {"Estúdio próprio"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty" }}>
                    {"Aplicações web, APIs e integrações para comércio, indústria e serviços, do código à infraestrutura."}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", color: "#C9CDD3" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"Next.js"}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"NestJS"}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"TypeScript"}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"PostgreSQL"}
                    </span>
                  </div>
                </div>
                {"\n      "}
              </article>
              <article data-reveal={"fade"} data-delay={"100"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", gap: "16px clamp(24px,4vw,64px)", padding: "32px 0", borderBottom: "1px solid #22272F" }}>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#9AA1AB" }}>
                    {"Ago 2022 – Mar 2024"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(26px,2.6vw,38px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
                    {"Unimed Vale do Caí"}
                  </h3>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#6E7681" }}>
                    {"Full-stack · Saúde e gestão hospitalar"}
                  </span>
                </div>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty" }}>
                    {"Módulo de manutenção preventiva e UniChat para +850 colaboradores."}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", color: "#C9CDD3" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"Sistemas hospitalares"}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"Integrações"}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #2C323B" }}>
                      {"Chat interno"}
                    </span>
                  </div>
                </div>
                {"\n      "}
              </article>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Princípios"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"Como eu trabalho"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(03) Princípios"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "48px minmax(0,1fr)", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"01"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "10px clamp(20px,3vw,48px)" }}>
                  <h3 style={{ flex: "1 1 260px", margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                    {"Ponta a ponta"}
                  </h3>
                  <p style={{ flex: "1.4 1 300px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                    {"Interface, API, banco e infraestrutura pensados juntos, para que nada fique sem dono."}
                  </p>
                </div>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"80"} style={{ display: "grid", gridTemplateColumns: "48px minmax(0,1fr)", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"02"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "10px clamp(20px,3vw,48px)" }}>
                  <h3 style={{ flex: "1 1 260px", margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                    {"Regras no servidor"}
                  </h3>
                  <p style={{ flex: "1.4 1 300px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                    {"Validações e cálculos ficam na API. A interface apresenta, o servidor decide."}
                  </p>
                </div>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "48px minmax(0,1fr)", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"03"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "10px clamp(20px,3vw,48px)" }}>
                  <h3 style={{ flex: "1 1 260px", margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                    {"Entrega contínua"}
                  </h3>
                  <p style={{ flex: "1.4 1 300px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                    {"Ciclos curtos, revisáveis e publicados de forma automatizada por ambiente."}
                  </p>
                </div>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"80"} style={{ display: "grid", gridTemplateColumns: "48px minmax(0,1fr)", gap: "10px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "26px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"04"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "10px clamp(20px,3vw,48px)" }}>
                  <h3 style={{ flex: "1 1 260px", margin: "0", fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.15" }}>
                    {"Clareza para o time"}
                  </h3>
                  <p style={{ flex: "1.4 1 300px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                    {"Fluxos visíveis, histórico de cada mudança e documentação que alguém de fato lê."}
                  </p>
                </div>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Stack"} style={{ background: "#EFEEE9", color: "#0B0E13", borderTop: "1px solid #0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(24px,3vw,40px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"Ferramentas do dia a dia"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(04) Stack"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "12px clamp(24px,4vw,64px)", alignItems: "baseline", padding: "22px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"Front-end"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", gridColumn: "span 2" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Angular"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"React"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Next.js"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"TypeScript"}
                  </span>
                </div>
              </div>
              <div data-reveal={"fade"} data-delay={"80"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "12px clamp(24px,4vw,64px)", alignItems: "baseline", padding: "22px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"Back-end"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", gridColumn: "span 2" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Spring Boot"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Java"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"NestJS"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Node.js"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"REST APIs"}
                  </span>
                </div>
              </div>
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "12px clamp(24px,4vw,64px)", alignItems: "baseline", padding: "22px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"Dados"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", gridColumn: "span 2" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"PostgreSQL"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Migrations"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Data & AI"}
                  </span>
                </div>
              </div>
              <div data-reveal={"fade"} data-delay={"80"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "12px clamp(24px,4vw,64px)", alignItems: "baseline", padding: "22px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"Cloud e DevOps"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", gridColumn: "span 2" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"GCP"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Azure"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"AWS"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Kubernetes"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"CI/CD"}
                  </span>
                </div>
              </div>
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "12px clamp(24px,4vw,64px)", alignItems: "baseline", padding: "22px 0", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"Integrações"}
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", gridColumn: "span 2" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"MQTT"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"WhatsApp"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Pagamentos"}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", padding: "7px 12px", borderRadius: "4px", border: "1px solid #0B0E13" }}>
                    {"Entra ID"}
                  </span>
                </div>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Certificações"} style={{ background: "#EFEEE9", color: "#0B0E13", borderTop: "1px solid #0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"Formação contínua"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(05) Certificações"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))", gap: "16px" }}>
              {"\n      "}
              <article className={"dh7"} data-reveal={"fade"} data-delay={"0"} style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", minHeight: "200px", padding: "22px", border: "1px solid #0B0E13", background: "#EFEEE9", transition: "border-color .25s,background .25s" }}>
                <span style={{ alignSelf: "flex-start", fontFamily: "'IBM Plex Mono',monospace", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "11px", padding: "5px 9px", borderRadius: "3px", background: "#0B0E13", color: "#ECEBE6" }}>
                  {"Certificação"}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(20px,1.7vw,24px)", fontWeight: "500", letterSpacing: "-0.02em", lineHeight: "1.15" }}>
                    {"AWS Certified Cloud Practitioner"}
                  </h3>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", color: "#5A5F66" }}>
                    {"AWS · 2023"}
                  </span>
                </div>
              </article>
              <article className={"dh8"} data-reveal={"fade"} data-delay={"80"} style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", minHeight: "200px", padding: "22px", border: "1px solid #0B0E13", background: "#EFEEE9", transition: "border-color .25s,background .25s" }}>
                <span style={{ alignSelf: "flex-start", fontFamily: "'IBM Plex Mono',monospace", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "11px", padding: "5px 9px", borderRadius: "3px", background: "#0B0E13", color: "#ECEBE6" }}>
                  {"Certificação"}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(20px,1.7vw,24px)", fontWeight: "500", letterSpacing: "-0.02em", lineHeight: "1.15" }}>
                    {"EF SET C1 Advanced"}
                  </h3>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", color: "#5A5F66" }}>
                    {"EF Education First · 2024"}
                  </span>
                </div>
              </article>
              <article className={"dh9"} data-reveal={"fade"} data-delay={"160"} style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", minHeight: "200px", padding: "22px", border: "1px solid #0B0E13", background: "#EFEEE9", transition: "border-color .25s,background .25s" }}>
                <span style={{ alignSelf: "flex-start", fontFamily: "'IBM Plex Mono',monospace", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "11px", padding: "5px 9px", borderRadius: "3px", background: "#0B0E13", color: "#ECEBE6" }}>
                  {"Certificação"}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(20px,1.7vw,24px)", fontWeight: "500", letterSpacing: "-0.02em", lineHeight: "1.15" }}>
                    {"42Crunch API Security Mastery"}
                  </h3>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", color: "#5A5F66" }}>
                    {"Ford Motor Company · 2025"}
                  </span>
                </div>
              </article>
              <article className={"dh10"} data-reveal={"fade"} data-delay={"240"} style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "40px", minHeight: "200px", padding: "22px", border: "1px solid #0B0E13", background: "#EFEEE9", transition: "border-color .25s,background .25s" }}>
                <span style={{ alignSelf: "flex-start", fontFamily: "'IBM Plex Mono',monospace", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "11px", padding: "5px 9px", borderRadius: "3px", background: "#0B0E13", color: "#ECEBE6" }}>
                  {"Certificação"}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontSize: "clamp(20px,1.7vw,24px)", fontWeight: "500", letterSpacing: "-0.02em", lineHeight: "1.15" }}>
                    {"Certified Scrum Developer"}
                  </h3>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", color: "#5A5F66" }}>
                    {"Ford Motor Company · 2025"}
                  </span>
                </div>
              </article>
              {"\n    "}
            </div>
            {"\n    "}
            <a className={"dh11"} href={"/#formacao"} data-reveal={"fade"} style={{ alignSelf: "flex-start", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B0E13" }}>
              {"Ver todos os cursos (20) "}
              <span>
                {"→"}
              </span>
            </a>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Currículo"} style={{ background: "#0B0E13", color: "#ECEBE6" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(56px,7vw,96px)" }}>
            {"\n    "}
            <a className={"dh12"} href={"https://docs.google.com/document/d/1bCk5xYPFQ3WOpzAvrsFbf4y7sXdSpJFS/edit?usp=sharing&ouid=107891843000990713036&rtpof=true&sd=true"} target={"_blank"} rel={"noopener"} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "32px 0", borderTop: "1px solid #22272F", borderBottom: "1px solid #22272F", color: "#ECEBE6", transition: "color .2s" }}>
              {"\n      "}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                  {"(06) Currículo · Google Docs"}
                </span>
                {"\n        "}
                <span style={{ fontSize: "clamp(48px,7vw,104px)", fontWeight: "500", letterSpacing: "-0.045em", lineHeight: "0.94" }}>
                  {"Currículo completo"}
                </span>
                {"\n      "}
              </div>
              {"\n      "}
              <span style={{ fontSize: "clamp(40px,5vw,72px)", lineHeight: "1" }}>
                {"↗"}
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
                {"(07) Contato"}
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
                <a className={"dh13"} href={"mailto:derik@devsehn.com"} style={{ flex: "1 1 360px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingBottom: "12px", borderBottom: "2px solid #ECEBE6", fontSize: "clamp(24px,3vw,44px)", fontWeight: "500", letterSpacing: "-0.03em", color: "#ECEBE6", transition: "color .2s,border-color .2s" }}>
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
                <a className={"dh14"} href={"#"} style={{ color: "#ECEBE6" }}>
                  {"LinkedIn ↗"}
                </a>
                {"\n        "}
                <a className={"dh15"} href={"https://github.com/DerikSehn"} target={"_blank"} rel={"noopener"} style={{ color: "#ECEBE6" }}>
                  {"GitHub ↗"}
                </a>
                {"\n        "}
                <a className={"dh16"} href={"https://docs.google.com/document/d/1bCk5xYPFQ3WOpzAvrsFbf4y7sXdSpJFS/edit?usp=sharing&ouid=107891843000990713036&rtpof=true&sd=true"} target={"_blank"} rel={"noopener"} style={{ color: "#ECEBE6" }}>
                  {"CV ↓"}
                </a>
                {"\n        "}
                <a className={"dh17"} href={"#top"} style={{ color: "#9AA1AB" }}>
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
