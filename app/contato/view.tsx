'use client';
/* eslint-disable */
// GERADO por scripts/sync-design.mjs a partir de "Contato.dc.html". Não edite à mão:
// altere o design e rode `npm run design:sync -- <pasta-do-design>`.
import React from 'react';
import { useDC } from '@/lib/dc';
import Logic from '@/lib/logic/contato';

const CSS = "html{scroll-behavior:smooth}\nbody{margin:0;background:#0B0E13;font-family:'Schibsted Grotesk',system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:inherit;text-decoration:none}\na:hover{color:#3D6BFF}\n*{box-sizing:border-box}\n::selection{background:#3D6BFF;color:#FFFFFF}\n.dh1:hover{color:#FFFFFF !important}\n.dh2:hover{color:#FFFFFF !important}\n.dh3:hover{color:#FFFFFF !important}\n.dh4:hover{color:#FFFFFF !important}\n.dh5:hover{border-color:#ECEBE6 !important}\n.dh6:hover{color:#ECEBE6 !important}\n.dh7:hover{color:#2A52E0 !important;padding-left:14px !important}\n.dh8:hover{color:#2A52E0 !important;padding-left:14px !important}\n.dh9:hover{color:#2A52E0 !important;padding-left:14px !important}\n.dh10:hover{color:#2A52E0 !important;padding-left:14px !important}\n.dh11:hover{background:#3D6BFF !important;color:#FFFFFF !important}\n.dh12:hover{color:#3D6BFF !important;border-color:#3D6BFF !important}\n.dh13:hover{color:#3D6BFF !important}\n.dh14:hover{color:#3D6BFF !important}\n.dh15:hover{color:#3D6BFF !important}\n.dh16:hover{color:#ECEBE6 !important}";

const FONTS: string[] = [
  "https://fonts.googleapis.com/css2?family=Geist:wght@300;600&display=swap",
  "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Raleway:wght@400;500;600;700&display=swap"
];

const DEFAULTS: Record<string, unknown> = {"motion":true};

// Valor interpolado no texto: o runtime do design o envolve em <span class="sc-interp">.
const H = (x: any) => (x === undefined || x === null || typeof x === 'boolean' ? null : <span className="sc-interp">{String(x)}</span>);

export default function ContatoView(props: Record<string, unknown>) {
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
              <a className={"dh3"} href={"/contato"} aria-current={"page"} style={{ display: "flex", gap: "8px", color: "#FFFFFF" }}>
                <span style={{ color: "#3D6BFF" }}>
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
                {"Contato · Vamos conversar"}
              </span>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ overflow: "hidden" }}>
              <h1 data-reveal={"line"} data-delay={"80"} style={{ margin: "0", padding: "0.06em 0 0.24em", maxWidth: "14ch", fontSize: "clamp(48px,8.6vw,132px)", lineHeight: "0.94", letterSpacing: "-0.045em", fontWeight: "500", textWrap: "balance" }}>
                {"Vamos construir algo sólido."}
              </h1>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "32px clamp(32px,5vw,96px)", alignItems: "flex-start" }}>
              {"\n      "}
              <p data-reveal={"fade"} data-delay={"200"} style={{ flex: "1.4 1 420px", maxWidth: "720px", margin: "0", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty", fontSize: "clamp(18px,1.6vw,21px)" }}>
                {"Estou aberto a conversar sobre "}
                <span style={{ color: "#ECEBE6" }}>
                  {"oportunidades em engenharia de software"}
                </span>
                {" e "}
                <span style={{ color: "#ECEBE6" }}>
                  {"projetos que precisam de desenvolvimento prático"}
                </span>
                {", do primeiro rascunho à operação em produção."}
              </p>
              {"\n      "}
              <dl data-reveal={"fade"} data-delay={"320"} style={{ flex: "1 1 320px", margin: "0", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", borderTop: "1px solid #22272F" }}>
                {"\n        "}
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"E-mail"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"derik@devsehn.com"}
                </dd>
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Base"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Capão da Canoa, RS · Brasil"}
                </dd>
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Disponível"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Oportunidades e projetos"}
                </dd>
                <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                  {"Atuação"}
                </dt>
                <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                  {"Full-stack · Cloud · DevOps"}
                </dd>
                {"\n      "}
              </dl>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Canais"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(16px,2vw,24px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"Onde me encontrar"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(01) Canais"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {"\n      "}
              <a className={"dh7"} href={"mailto:derik@devsehn.com"} data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "48px minmax(0,1fr) auto", gap: "10px clamp(20px,3vw,48px)", alignItems: "center", padding: "clamp(22px,2.6vw,34px) 4px", borderBottom: "1px solid #CFCDC4", color: "#0B0E13", transition: "color .25s,padding .4s cubic-bezier(.16,1,.3,1)" }}>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"01"}
                </span>
                {"\n        "}
                <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px clamp(16px,3vw,48px)" }}>
                  <span style={{ flex: "0 0 clamp(120px,14vw,200px)", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                    {"E-mail"}
                  </span>
                  <span style={{ fontSize: "clamp(24px,3.6vw,56px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1", overflowWrap: "anywhere" }}>
                    {"derik@devsehn.com"}
                  </span>
                  <span style={{ flex: "1 1 220px", fontSize: "15px", lineHeight: "1.5", color: "#5A5F66" }}>
                    {"Melhor canal para propostas e projetos."}
                  </span>
                </span>
                {"\n        "}
                <span style={{ fontSize: "clamp(28px,3vw,44px)", lineHeight: "1" }}>
                  {"↗"}
                </span>
                {"\n      "}
              </a>
              <a className={"dh8"} href={"#"} data-reveal={"fade"} data-delay={"80"} style={{ display: "grid", gridTemplateColumns: "48px minmax(0,1fr) auto", gap: "10px clamp(20px,3vw,48px)", alignItems: "center", padding: "clamp(22px,2.6vw,34px) 4px", borderBottom: "1px solid #CFCDC4", color: "#0B0E13", transition: "color .25s,padding .4s cubic-bezier(.16,1,.3,1)" }}>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"02"}
                </span>
                {"\n        "}
                <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px clamp(16px,3vw,48px)" }}>
                  <span style={{ flex: "0 0 clamp(120px,14vw,200px)", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                    {"LinkedIn"}
                  </span>
                  <span style={{ fontSize: "clamp(24px,3.6vw,56px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1", overflowWrap: "anywhere" }}>
                    {"Derik Sehn"}
                  </span>
                  <span style={{ flex: "1 1 220px", fontSize: "15px", lineHeight: "1.5", color: "#5A5F66" }}>
                    {"Trajetória, recomendações e novidades."}
                  </span>
                </span>
                {"\n        "}
                <span style={{ fontSize: "clamp(28px,3vw,44px)", lineHeight: "1" }}>
                  {"↗"}
                </span>
                {"\n      "}
              </a>
              <a className={"dh9"} href={"https://github.com/DerikSehn"} target={"_blank"} rel={"noopener"} data-reveal={"fade"} data-delay={"0"} style={{ display: "grid", gridTemplateColumns: "48px minmax(0,1fr) auto", gap: "10px clamp(20px,3vw,48px)", alignItems: "center", padding: "clamp(22px,2.6vw,34px) 4px", borderBottom: "1px solid #CFCDC4", color: "#0B0E13", transition: "color .25s,padding .4s cubic-bezier(.16,1,.3,1)" }}>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"03"}
                </span>
                {"\n        "}
                <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px clamp(16px,3vw,48px)" }}>
                  <span style={{ flex: "0 0 clamp(120px,14vw,200px)", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                    {"GitHub"}
                  </span>
                  <span style={{ fontSize: "clamp(24px,3.6vw,56px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1", overflowWrap: "anywhere" }}>
                    {"DerikSehn"}
                  </span>
                  <span style={{ flex: "1 1 220px", fontSize: "15px", lineHeight: "1.5", color: "#5A5F66" }}>
                    {"Código aberto e experimentos."}
                  </span>
                </span>
                {"\n        "}
                <span style={{ fontSize: "clamp(28px,3vw,44px)", lineHeight: "1" }}>
                  {"↗"}
                </span>
                {"\n      "}
              </a>
              <a className={"dh10"} href={"https://docs.google.com/document/d/1bCk5xYPFQ3WOpzAvrsFbf4y7sXdSpJFS/edit?usp=sharing&ouid=107891843000990713036&rtpof=true&sd=true"} target={"_blank"} rel={"noopener"} data-reveal={"fade"} data-delay={"80"} style={{ display: "grid", gridTemplateColumns: "48px minmax(0,1fr) auto", gap: "10px clamp(20px,3vw,48px)", alignItems: "center", padding: "clamp(22px,2.6vw,34px) 4px", borderBottom: "1px solid #CFCDC4", color: "#0B0E13", transition: "color .25s,padding .4s cubic-bezier(.16,1,.3,1)" }}>
                {"\n        "}
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", color: "#5A5F66" }}>
                  {"04"}
                </span>
                {"\n        "}
                <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px clamp(16px,3vw,48px)" }}>
                  <span style={{ flex: "0 0 clamp(120px,14vw,200px)", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                    {"Currículo"}
                  </span>
                  <span style={{ fontSize: "clamp(24px,3.6vw,56px)", fontWeight: "500", letterSpacing: "-0.035em", lineHeight: "1", overflowWrap: "anywhere" }}>
                    {"Google Docs"}
                  </span>
                  <span style={{ flex: "1 1 220px", fontSize: "15px", lineHeight: "1.5", color: "#5A5F66" }}>
                    {"Versão completa e atualizada."}
                  </span>
                </span>
                {"\n        "}
                <span style={{ fontSize: "clamp(28px,3vw,44px)", lineHeight: "1" }}>
                  {"↗"}
                </span>
                {"\n      "}
              </a>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Formulário"} style={{ background: "#0B0E13", color: "#ECEBE6" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,56px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #ECEBE6", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"Conte sobre o projeto"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                {"(02) Mensagem"}
              </span>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "48px clamp(32px,6vw,120px)", alignItems: "flex-start" }}>
              {"\n      "}
              <div style={{ flex: "1 1 300px", maxWidth: "420px", display: "flex", flexDirection: "column", gap: "24px" }}>
                {"\n        "}
                <p data-reveal={"fade"} style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty" }}>
                  {"Escreva em poucas linhas o que você precisa. A mensagem abre no seu e-mail já preenchida, pronta para enviar."}
                </p>
                {"\n        "}
                <dl data-reveal={"fade"} data-delay={"120"} style={{ margin: "0", display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", borderTop: "1px solid #22272F" }}>
                  {"\n          "}
                  <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                    {"Fuso"}
                  </dt>
                  <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                    {"UTC−3 · Brasília"}
                  </dd>
                  {"\n          "}
                  <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                    {"Formato"}
                  </dt>
                  <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                    {"Remoto ou híbrido"}
                  </dd>
                  {"\n          "}
                  <dt style={{ padding: "12px 20px 12px 0", borderBottom: "1px solid #22272F", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#6E7681" }}>
                    {"Idiomas"}
                  </dt>
                  <dd style={{ margin: "0", padding: "12px 0", borderBottom: "1px solid #22272F", color: "#ECEBE6" }}>
                    {"Português · Inglês"}
                  </dd>
                  {"\n        "}
                </dl>
                {"\n      "}
              </div>
              {"\n      "}
              <div data-reveal={"fade"} data-delay={"160"} style={{ flex: "2 1 480px", display: "flex", flexDirection: "column", gap: "clamp(28px,3vw,40px)" }}>
                {"\n        "}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {"\n          "}
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                    {"Tipo de projeto"}
                  </span>
                  {"\n          "}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {"\n            "}
                    {((v?.kinds) || []).map((L_k: any, $index: number) => (
                      <React.Fragment key={$index}>
                        {"\n              "}
                        <button type={"button"} onClick={L_k?.pick} aria-pressed={L_k?.on} style={{ display: "inline-flex", alignItems: "center", height: "44px", padding: "0 18px", borderRadius: "4px", border: (`1px solid ${L_k?.bd ?? ""}` as any), background: (`${L_k?.bg ?? ""}` as any), color: (`${L_k?.fg ?? ""}` as any), fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", transition: "background .2s,color .2s,border-color .2s" }}>
                          {H(L_k?.label)}
                        </button>
                        {"\n            "}
                      </React.Fragment>
                    ))}
                    {"\n          "}
                  </div>
                  {"\n        "}
                </div>
                {"\n        "}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: "clamp(24px,3vw,40px)" }}>
                  {"\n          "}
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                      {"Seu nome"}
                    </span>
                    <input type={"text"} value={v?.name} onChange={v?.onName} placeholder={"Como posso te chamar?"} autoComplete={"name"} style={{ width: "100%", padding: "14px 0", border: "none", borderBottom: "1px solid #2C323B", background: "transparent", color: "#ECEBE6", fontFamily: "'Schibsted Grotesk',system-ui,sans-serif", fontSize: "clamp(20px,1.8vw,26px)", letterSpacing: "-0.02em", outline: "none", borderRadius: "0" }} />
                  </label>
                  {"\n          "}
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                      {"Empresa"}
                    </span>
                    <input type={"text"} value={v?.company} onChange={v?.onCompany} placeholder={"Opcional"} autoComplete={"organization"} style={{ width: "100%", padding: "14px 0", border: "none", borderBottom: "1px solid #2C323B", background: "transparent", color: "#ECEBE6", fontFamily: "'Schibsted Grotesk',system-ui,sans-serif", fontSize: "clamp(20px,1.8vw,26px)", letterSpacing: "-0.02em", outline: "none", borderRadius: "0" }} />
                  </label>
                  {"\n        "}
                </div>
                {"\n        "}
                <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                    {"Mensagem"}
                  </span>
                  <textarea value={v?.msg} onChange={v?.onMsg} rows={4} placeholder={"Qual problema você quer resolver?"} style={{ width: "100%", padding: "14px 0", border: "none", borderBottom: "1px solid #2C323B", background: "transparent", color: "#ECEBE6", fontFamily: "'Schibsted Grotesk',system-ui,sans-serif", fontSize: "clamp(20px,1.8vw,26px)", letterSpacing: "-0.02em", outline: "none", borderRadius: "0", resize: "vertical", minHeight: "132px", lineHeight: "1.4" }} />
                </label>
                {"\n        "}
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px 32px", paddingTop: "8px" }}>
                  {"\n          "}
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#6E7681" }}>
                    {H(v?.hint)}
                  </span>
                  {"\n          "}
                  <a className={"dh11"} href={v?.mailHref} style={{ display: "inline-flex", alignItems: "center", gap: "14px", height: "56px", padding: "0 26px", borderRadius: "4px", background: "#ECEBE6", color: "#0B0E13", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", transition: "background .2s,color .2s" }}>
                    {"Enviar mensagem "}
                    <span>
                      {"→"}
                    </span>
                  </a>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section data-screen-label={"Processo"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", paddingLeft: "clamp(20px,3vw,40px)", paddingRight: "clamp(20px,3vw,40px)", paddingTop: "clamp(72px,9vw,128px)", paddingBottom: "clamp(72px,9vw,128px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", textWrap: "balance", maxWidth: "16ch" }}>
                  {"Do primeiro contato à produção"}
                </h2>
              </div>
              <span data-reveal={"fade"} data-delay={"200"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(03) Processo"}
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
                    {"Conversa"}
                  </h3>
                  <p style={{ flex: "1.4 1 300px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                    {"Entendo o problema, o contexto do time e o que precisa estar pronto primeiro."}
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
                    {"Proposta"}
                  </h3>
                  <p style={{ flex: "1.4 1 300px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                    {"Escopo, etapas e stack por escrito, com o que entra e o que fica para depois."}
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
                    {"Construção"}
                  </h3>
                  <p style={{ flex: "1.4 1 300px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                    {"Entregas curtas e revisáveis, com um ambiente para você acompanhar."}
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
                    {"Produção"}
                  </h3>
                  <p style={{ flex: "1.4 1 300px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3A3F46", textWrap: "pretty" }}>
                    {"Publicação automatizada, monitoramento e evolução depois do lançamento."}
                  </p>
                </div>
              </div>
              {"\n    "}
            </div>
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
                {"(04) Prefere ir direto?"}
              </span>
              {"\n      "}
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", maxWidth: "12ch", fontSize: "clamp(48px,8.6vw,132px)", lineHeight: "0.94", letterSpacing: "-0.045em", fontWeight: "500", textWrap: "balance" }}>
                  {"Escreva direto."}
                </h2>
              </div>
              {"\n      "}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "32px clamp(32px,5vw,96px)", alignItems: "flex-end" }}>
                {"\n        "}
                <p style={{ flex: "1 1 320px", maxWidth: "460px", margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty" }}>
                  {"Respondo pessoalmente. Se preferir, mande o link do projeto ou um documento com o contexto."}
                </p>
                {"\n        "}
                <a className={"dh12"} href={"mailto:derik@devsehn.com"} style={{ flex: "1 1 360px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingBottom: "12px", borderBottom: "2px solid #ECEBE6", fontSize: "clamp(24px,3vw,44px)", fontWeight: "500", letterSpacing: "-0.03em", color: "#ECEBE6", transition: "color .2s,border-color .2s" }}>
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
                <a className={"dh13"} href={"#"} style={{ color: "#ECEBE6" }}>
                  {"LinkedIn ↗"}
                </a>
                {"\n        "}
                <a className={"dh14"} href={"https://github.com/DerikSehn"} target={"_blank"} rel={"noopener"} style={{ color: "#ECEBE6" }}>
                  {"GitHub ↗"}
                </a>
                {"\n        "}
                <a className={"dh15"} href={"https://docs.google.com/document/d/1bCk5xYPFQ3WOpzAvrsFbf4y7sXdSpJFS/edit?usp=sharing&ouid=107891843000990713036&rtpof=true&sd=true"} target={"_blank"} rel={"noopener"} style={{ color: "#ECEBE6" }}>
                  {"CV ↓"}
                </a>
                {"\n        "}
                <a className={"dh16"} href={"#top"} style={{ color: "#9AA1AB" }}>
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
