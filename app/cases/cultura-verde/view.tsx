'use client';
/* eslint-disable */
// GERADO por scripts/sync-design.mjs a partir de "Cultura Verde Case.dc.html". Não edite à mão:
// altere o design e rode `npm run design:sync -- <pasta-do-design>`.
import React from 'react';
import { useDC } from '@/lib/dc';
import Logic from '@/lib/logic/cultura-verde';

const CSS = "html{scroll-behavior:smooth}\nbody{margin:0;background:#0B0E13;font-family:'Schibsted Grotesk',system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:inherit;text-decoration:none}\na:hover{color:#3D6BFF}\n*{box-sizing:border-box}\n::selection{background:#3D6BFF;color:#FFFFFF}\n.dh1:hover{color:#FFFFFF !important}\n.dh2:hover{color:#FFFFFF !important}\n.dh3:hover{color:#FFFFFF !important}\n.dh4:hover{color:#FFFFFF !important}\n.dh5:hover{border-color:#ECEBE6 !important}\n.dh6:hover{color:#ECEBE6 !important}\n.dh7:hover{color:#3D6BFF !important}\n.dh8:hover{color:#3D6BFF !important;border-color:#3D6BFF !important}\n.dh9:hover{color:#3D6BFF !important}\n.dh10:hover{color:#3D6BFF !important}\n.dh11:hover{color:#3D6BFF !important}\n.dh12:hover{color:#ECEBE6 !important}";

const FONTS: string[] = [
  "https://fonts.googleapis.com/css2?family=Geist:wght@300;600&display=swap",
  "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Raleway:wght@400;500;600;700&display=swap"
];

const DEFAULTS: Record<string, unknown> = {"motion":true};

// Valor interpolado no texto: o runtime do design o envolve em <span class="sc-interp">.
const H = (x: any) => (x === undefined || x === null || typeof x === 'boolean' ? null : <span className="sc-interp">{String(x)}</span>);

export default function CulturaVerdeView(props: Record<string, unknown>) {
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
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(40px,6vw,80px)", paddingBottom: "clamp(40px,5vw,64px)", display: "flex", flexDirection: "column", gap: "clamp(36px,5vw,64px)" }}>
            {"\n    "}
            <div data-reveal={"fade"} style={{ display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", borderBottom: "1px solid #22272F", paddingBottom: "16px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
              {"\n      "}
              <a className={"dh6"} href={"/#trabalhos"} style={{ color: "#9AA1AB" }}>
                {"← Trabalhos"}
              </a>
              {"\n      "}
              <span>
                {"Case 03 · Site e painel para paisagismo"}
              </span>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ overflow: "hidden" }}>
              {"\n      "}
              <h1 data-reveal={"line"} data-delay={"80"} style={{ margin: "0", padding: "0.06em 0 0.24em", fontSize: "clamp(48px,8.6vw,132px)", lineHeight: "0.94", letterSpacing: "-0.045em", fontWeight: "500" }}>
                {"Cultura Verde"}
              </h1>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "32px clamp(32px,5vw,96px)", alignItems: "flex-start" }}>
              {"\n      "}
              <p data-reveal={"fade"} data-delay={"200"} style={{ flex: "1.4 1 420px", maxWidth: "720px", margin: "0", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty", fontSize: "clamp(18px,1.6vw,21px)" }}>
                {"Site institucional e painel administrativo da Cultura Verde, empresa de paisagismo e jardins fitoterápicos de Xangri-lá, RS. O painel permite que a própria equipe "}
                <span style={{ color: "#ECEBE6" }}>
                  {"publique projetos, imagens, depoimentos, serviços e parceiros"}
                </span>
                {" sem depender de desenvolvimento."}
              </p>
              {"\n      "}
              <dl data-reveal={"fade"} data-delay={"320"} style={{ flex: "1 1 320px", margin: "0", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", borderTop: "1px solid #22272F" }}>
                {"\n        "}
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Cliente"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Cultura Verde"}
                </dd>
                {"\n        "}
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Papel"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Desenvolvimento full-stack"}
                </dd>
                {"\n        "}
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Entrega"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Site, página de projetos e painel admin"}
                </dd>
                {"\n      "}
              </dl>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Vídeo"} style={{ background: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(20px,3vw,40px) clamp(64px,8vw,112px)" }}>
            {"\n    "}
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              {"\n      "}
              <div data-reveal={"clip"} data-delay={"250"} style={{ viewTransitionName: "case-media", position: "relative", border: "1px solid #22272F", background: "#121815" }}>
                {"\n        "}
                <div style={{ position: "relative", aspectRatio: "1920/954", overflow: "hidden" }}>
                  {"\n          "}
                  <video data-autoplay={""} src={"/assets/culturaverde/site.mp4"} autoPlay muted loop playsInline preload={"auto"} aria-label={"Navegação pelo site da Cultura Verde"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  {"\n        "}
                </div>
                {"\n        "}
                <span style={{ position: "absolute", left: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", right: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
                {"\n      "}
              </div>
              {"\n      "}
              <figcaption data-reveal={"fade"} data-delay={"300"} style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#9AA1AB" }}>
                <span style={{ whiteSpace: "nowrap" }}>
                  {"Fig. 01"}
                </span>
                <span style={{ textAlign: "right" }}>
                  {"Navegação pelo site, da home à página de um projeto"}
                </span>
              </figcaption>
              {"\n    "}
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
                  {"Um portfólio que a equipe atualiza sozinha"}
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
                {"A Cultura Verde é dedicada ao paisagismo e à criação de jardins fitoterápicos. Nasceu em Brasília e hoje fica em Xangri-lá, no litoral norte do RS. A paisagista Josy Steinmetz tem 23 anos de experiência, e Luiz C. Steinmetz é especialista em projetos e execução de decks e pergolados."}
              </p>
              {"\n      "}
              <p data-reveal={"fade"} data-delay={"120"} style={{ flex: "1 1 360px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                {"O trabalho da empresa se vende pelo resultado: o antes e o depois de cada jardim. O site precisava mostrar esses projetos com destaque e transformar visitas em contato, e a equipe precisava publicar novos trabalhos e depoimentos por conta própria."}
              </p>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", borderTop: "1px solid #0B0E13" }}>
              {"\n      "}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }} data-reveal={"fade"} data-delay={"0"}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  <span data-count={"5"}>
                    {"5"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"projetos publicados com antes e depois"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }} data-reveal={"fade"} data-delay={"120"}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  <span data-count={"102"}>
                    {"102"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"imagens gerenciadas pelo painel"}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "28px 28px 28px 0", borderBottom: "1px solid #CFCDC4" }} data-reveal={"fade"} data-delay={"240"}>
                <span style={{ fontSize: "clamp(56px,6.4vw,96px)", fontWeight: "500", letterSpacing: "-0.05em", lineHeight: "0.9" }}>
                  <span data-count={"5"}>
                    {"5"}
                  </span>
                </span>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", lineHeight: "1.55", color: "#5A5F66", maxWidth: "30ch" }}>
                  {"serviços, de consultoria a manutenção"}
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Projetos"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(40px,5vw,64px)", paddingBottom: "clamp(56px,7vw,96px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"Cada projeto contado em antes e depois"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(02) Página de projetos"}
              </span>
            </div>
            {"\n    "}
            <p data-reveal={"fade"} style={{ maxWidth: "760px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
              {"Os projetos são numerados e abrem em uma página própria, com capa, descrição e duas etapas narradas: o antes, com o terreno em preparação, e o depois, com o jardim pronto e iluminado."}
            </p>
            {"\n    "}
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div data-reveal={"clip"} style={{ position: "relative", border: "1px solid #0B0E13", background: "#FFFFFF" }}>
                <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  <div style={{ height: "34px", flex: "none", background: "#E7E9EF", borderBottom: "1px solid #D5D9E2", display: "flex", alignItems: "center", gap: "8px", padding: "0 12px" }}>
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E" }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }} />
                    <span style={{ marginLeft: "14px", maxWidth: "360px", flex: "1", height: "22px", borderRadius: "5px", background: "#FFFFFF", fontSize: "12px", color: "#5D6B85", display: "flex", alignItems: "center", padding: "0 10px", whiteSpace: "nowrap", overflow: "hidden" }}>
                      {"culturaverde.com/projetos"}
                    </span>
                  </div>
                  <img src={"/assets/culturaverde/project.png"} alt={"Página do projeto Condomínio Ilhas no site da Cultura Verde"} style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
                <span style={{ position: "absolute", left: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", right: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat" }} />
              </div>
              <figcaption data-reveal={"fade"} data-delay={"300"} style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#5A5F66" }}>
                <span style={{ whiteSpace: "nowrap" }}>
                  {"Fig. 02"}
                </span>
                <span style={{ textAlign: "right" }}>
                  {"Página de um projeto"}
                </span>
              </figcaption>
            </figure>
            {"\n    "}
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #0B0E13" }}>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "56px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "8px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "22px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"#1"}
                </span>
                <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", letterSpacing: "-0.02em", lineHeight: "1.2" }}>
                  {"Casa em Condomínio Arenas"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Caminho de pedras, árvores e plantas ornamentais, com iluminação e irrigação automatizadas."}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"70"} style={{ display: "grid", gridTemplateColumns: "56px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "8px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "22px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"#2"}
                </span>
                <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", letterSpacing: "-0.02em", lineHeight: "1.2" }}>
                  {"Aproveitamento de espaço"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Um espaço simples transformado em área de lazer, com spa, deck em madeira e plantas ornamentais."}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"140"} style={{ display: "grid", gridTemplateColumns: "56px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "8px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "22px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"#3"}
                </span>
                <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", letterSpacing: "-0.02em", lineHeight: "1.2" }}>
                  {"Deck com SPA em madeira tratada"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Deck com spa à beira de um lago, em um condomínio em Xangri-lá."}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"210"} style={{ display: "grid", gridTemplateColumns: "56px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "8px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "22px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"#4"}
                </span>
                <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", letterSpacing: "-0.02em", lineHeight: "1.2" }}>
                  {"Condomínio Ilhas · Capão da Canoa"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"A construção do paisagismo de uma casa no Condomínio Ilhas."}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"280"} style={{ display: "grid", gridTemplateColumns: "56px repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "8px clamp(20px,3vw,48px)", alignItems: "baseline", padding: "22px 4px", borderBottom: "1px solid #CFCDC4" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"#5"}
                </span>
                <span style={{ fontSize: "clamp(20px,1.8vw,26px)", fontWeight: "500", letterSpacing: "-0.02em", lineHeight: "1.2" }}>
                  {"Salão Dona Moça · Capão da Canoa"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                  {"A transformação completa do espaço externo de um salão."}
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Painel"} style={{ background: "#0B0E13", color: "#ECEBE6" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,64px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #ECEBE6", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"O site inteiro editável pelo painel"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                {"(03) Painel administrativo"}
              </span>
            </div>
            {"\n    "}
            <p data-reveal={"fade"} style={{ maxWidth: "680px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty" }}>
              {"A tela inicial do painel resume projetos, imagens, usuários e notificações, e lista projetos e depoimentos com acesso direto para criar ou editar. O menu lateral recolhe para dar espaço ao conteúdo."}
            </p>
            {"\n    "}
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px", minWidth: "0" }}>
              <div data-reveal={"clip"} style={{ position: "relative", border: "1px solid #22272F", background: "#FFFFFF" }}>
                <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                  <div style={{ height: "34px", flex: "none", background: "#E7E9EF", borderBottom: "1px solid #D5D9E2", display: "flex", alignItems: "center", gap: "8px", padding: "0 12px" }}>
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E" }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }} />
                    <span style={{ marginLeft: "14px", maxWidth: "360px", flex: "1", height: "22px", borderRadius: "5px", background: "#FFFFFF", fontSize: "12px", color: "#5D6B85", display: "flex", alignItems: "center", padding: "0 10px", whiteSpace: "nowrap", overflow: "hidden" }}>
                      {"culturaverde.com/admin"}
                    </span>
                  </div>
                  <img src={"/assets/culturaverde/admin.png"} alt={"Painel administrativo da Cultura Verde com projetos e depoimentos"} style={{ display: "block", width: "100%", height: "auto" }} />
                </div>
                <span style={{ position: "absolute", left: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", right: "-6px", top: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
                <span style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "11px", height: "11px", background: "linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat" }} />
              </div>
              <figcaption data-reveal={"fade"} data-delay={"300"} style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#9AA1AB" }}>
                <span style={{ whiteSpace: "nowrap" }}>
                  {"Fig. 03"}
                </span>
                <span style={{ textAlign: "right" }}>
                  {"Início do painel com o menu recolhido"}
                </span>
              </figcaption>
            </figure>
            {"\n    "}
            <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #ECEBE6" }}>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"Página de Conversão"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"A home do site, com hero, chamada para contato e captura de e-mail."}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"60"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"Seções do site"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Serviços, depoimentos e parceiros, cada um com imagem e texto próprios."}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"120"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"Página de Projetos"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Projetos com capa, descrição e a narrativa de antes e depois."}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"180"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"Produtos"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Catálogo de produtos da loja."}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"240"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"Blog"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Publicações do blog."}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"300"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: "8px clamp(20px,3vw,48px)", padding: "20px 0", borderBottom: "1px solid #22272F" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "14px", color: "#3D6BFF" }}>
                  {"Notificações"}
                </span>
                <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#B4BAC2", gridColumn: "span 2" }}>
                  {"Contatos e e-mails recebidos pelo site."}
                </span>
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Conteúdo"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"O que o painel publica no site"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(04) Conteúdo"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))", borderTop: "1px solid #0B0E13", borderLeft: "1px solid #0B0E13" }}>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"0"} style={{ background: "#EFEEE9", borderRight: "1px solid #0B0E13", borderBottom: "1px solid #0B0E13", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"01"}
                </span>
                <span style={{ fontSize: "clamp(24px,2.2vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1" }}>
                  {"Serviços"}
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Consultoria · Projetos e Execução · Linha Madeira · Atendimento Express · Manutenção"}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"100"} style={{ background: "#EFEEE9", borderRight: "1px solid #0B0E13", borderBottom: "1px solid #0B0E13", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"02"}
                </span>
                <span style={{ fontSize: "clamp(24px,2.2vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1" }}>
                  {"Depoimentos"}
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Nome, foto e texto de cada cliente, exibidos na home"}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"200"} style={{ background: "#EFEEE9", borderRight: "1px solid #0B0E13", borderBottom: "1px solid #0B0E13", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"03"}
                </span>
                <span style={{ fontSize: "clamp(24px,2.2vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1" }}>
                  {"Parceiros"}
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Escritórios de arquitetura e interiores"}
                </span>
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"300"} style={{ background: "#EFEEE9", borderRight: "1px solid #0B0E13", borderBottom: "1px solid #0B0E13", padding: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                  {"04"}
                </span>
                <span style={{ fontSize: "clamp(24px,2.2vw,32px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1" }}>
                  {"Projetos"}
                </span>
                <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#3A3F46", textWrap: "pretty" }}>
                  {"Capa, descrição, antes e depois e galeria de imagens"}
                </span>
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
            <a className={"dh7"} href={"/cases/daniela-bosing"} style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "32px 0", borderTop: "1px solid #22272F", borderBottom: "1px solid #22272F", color: "#ECEBE6", transition: "color .2s" }}>
              {"\n      "}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                  {"Próximo case · 04"}
                </span>
                {"\n        "}
                <span style={{ display: "flex", alignItems: "center", gap: "clamp(16px,2vw,28px)" }}>
                  <img src={"/assets/danibosing/logo_white.png"} alt={""} style={{ height: "clamp(48px,5vw,76px)", width: "auto" }} />
                  <span style={{ fontSize: "clamp(48px,7vw,104px)", fontWeight: "500", letterSpacing: "-0.045em", lineHeight: "0.94" }}>
                    {"Daniela Bosing"}
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
