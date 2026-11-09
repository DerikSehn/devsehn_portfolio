'use client';
/* eslint-disable */
// GERADO por scripts/sync-design.mjs a partir de "DevSehn Portfolio v2.dc.html". Não edite à mão:
// altere o design e rode `npm run design:sync -- <pasta-do-design>`.
import React from 'react';
import { useDC } from '@/lib/dc';
import Logic from '@/lib/logic/home';

const CSS = "@media (max-width:860px){header nav{display:none!important}}\nhtml{scroll-behavior:smooth}\nbody{margin:0;background:#0B0E13;font-family:'Schibsted Grotesk',system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:inherit;text-decoration:none}\na:hover{color:#3D6BFF}\n*{box-sizing:border-box}\n::selection{background:#3D6BFF;color:#FFFFFF}\n/* 3D marquee no fundo do hero: colunas em diagonal a partir do canto superior esquerdo */\n.ds-mq{position:absolute;inset:0;z-index:0;overflow:hidden;pointer-events:none;-webkit-mask-image:linear-gradient(to bottom,#000 72%,transparent);mask-image:linear-gradient(to bottom,#000 72%,transparent);--mq-s:.7}\n.ds-mq-stage{position:absolute;left:calc(-120px - var(--mq-s) * 1629px);top:calc(-66px + var(--mq-s) * 764px);width:2304px;transform-origin:0 0;transform:scale(var(--mq-s))}\n.ds-mq-plane{display:grid;grid-template-columns:repeat(7,1fr);gap:34px;align-items:start;transform-origin:0 0;transform:rotateX(62deg) rotateY(0deg) rotateZ(-45deg);transform-style:preserve-3d}\n.ds-mq-col{position:relative;display:flex;flex-direction:column;gap:34px;animation:ds-mq-a 14s ease-in-out infinite alternate}\n.ds-mq-col:nth-child(even){animation-name:ds-mq-b;animation-duration:19s}\n.ds-mq-col:nth-child(1){margin-top:2004px}\n.ds-mq-col:nth-child(2){margin-top:1670px}\n.ds-mq-col:nth-child(3){margin-top:1336px}\n.ds-mq-col:nth-child(4){margin-top:1002px}\n.ds-mq-col:nth-child(5){margin-top:668px}\n.ds-mq-col:nth-child(6){margin-top:334px}\n.ds-mq-col::before{content:'';position:absolute;left:-17px;top:0;bottom:0;width:1px;background:linear-gradient(to bottom,rgba(236,235,230,0.16) 50%,transparent 0) 0 0/1px 10px repeat-y}\n.ds-mq-item{position:relative}\n.ds-mq-item::before{content:'';position:absolute;top:-17px;left:-24px;right:-24px;height:1px;background:linear-gradient(to right,rgba(236,235,230,0.16) 50%,transparent 0) 0 0/10px 1px repeat-x}\n.ds-mq-item img{display:block;width:100%;height:auto;outline:1px solid rgba(236,235,230,0.1);filter:brightness(0.14);transition:filter .5s ease,transform .3s ease;pointer-events:auto}\n.ds-mq-item img:hover{filter:none;transform:translateY(-10px)}\n.ds-hero-c{z-index:1;pointer-events:none}\n.ds-hero-c a,.ds-hero-c button,.ds-hero-c p,.ds-hero-c figure{pointer-events:auto}\n@keyframes ds-mq-a{to{transform:translateY(-120px)}}\n@keyframes ds-mq-b{from{transform:translateY(-120px)}to{transform:translateY(0)}}\n@media (max-width:1024px){.ds-mq{--mq-s:.55}}\n@media (max-width:640px){.ds-mq{--mq-s:.42}}\n@media (prefers-reduced-motion:reduce){.ds-mq-col{animation:none}}\n/* Folha impressa (desktop): fundo do hero fixo e conteúdo como uma folha mais estreita */\n@media (min-width:1024px) and (pointer:fine){[data-hero-layer]{position:fixed !important;inset:0 !important;height:100vh}#trabalhos,#formacao,#contato{position:relative;z-index:1;max-width:min(1440px,calc(100% - 96px));margin-left:auto;margin-right:auto;box-shadow:0 0 0 1px rgba(236,235,230,0.06),0 40px 120px -20px rgba(0,0,0,0.7)}}\n.dh1:hover{color:#FFFFFF !important}\n.dh2:hover{color:#FFFFFF !important}\n.dh3:hover{color:#FFFFFF !important}\n.dh4:hover{color:#FFFFFF !important}\n.dh5:hover{border-color:#ECEBE6 !important}\n.dh6:hover{background:#3D6BFF !important;color:#FFFFFF !important}\n.dh7:hover{border-color:#ECEBE6 !important;color:#FFFFFF !important}\n.dh8:hover{border-color:#3D6BFF !important;color:#ECEBE6 !important}\n.dh9:hover{background:#E5E3DC !important;color:#0B0E13 !important}\n.dh10:hover{background:#E5E3DC !important;color:#0B0E13 !important}\n.dh11:hover{background:#E5E3DC !important;color:#0B0E13 !important}\n.dh12:hover{background:#E5E3DC !important;color:#0B0E13 !important}\n.dh13:hover{color:#2A52E0 !important}\n.dh14:hover{border-color:#3D6BFF !important}\n.dh15:hover{border-color:#3D6BFF !important}\n.dh16:hover{border-color:#3D6BFF !important}\n.dh17:hover{border-color:#3D6BFF !important}\n.dh18:hover{border-color:#3D6BFF !important}\n.dh19:hover{background:#0B0E13 !important;color:#ECEBE6 !important}\n.dh20:hover{color:#3D6BFF !important;border-color:#3D6BFF !important}\n.dh21:hover{color:#3D6BFF !important}\n.dh22:hover{color:#3D6BFF !important}\n.dh23:hover{color:#3D6BFF !important}\n.dh24:hover{color:#ECEBE6 !important}";

const FONTS: string[] = [
  "https://fonts.googleapis.com/css2?family=Geist:wght@300;600&display=swap",
  "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
];

const DEFAULTS: Record<string, unknown> = {"showHeroImage":true,"showGridMarks":true,"slideSeconds":6.5,"motion":true};

// Valor interpolado no texto: o runtime do design o envolve em <span class="sc-interp">.
const H = (x: any) => (x === undefined || x === null || typeof x === 'boolean' ? null : <span className="sc-interp">{String(x)}</span>);

export default function HomeView(props: Record<string, unknown>) {
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
          <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(20px,3vw,40px)", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
            {"\n    "}
            <a href={"#top"} aria-label={"DevSehn, início"} style={{ display: "flex", alignItems: "center", gap: "9px", color: "#ECEBE6" }}>
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
              <a className={"dh1"} href={"#trabalhos"} style={{ display: "flex", gap: "8px", color: "#C9CDD3" }}>
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
        <section id={"top"} data-screen-label={"Hero"} style={{ position: "relative", isolation: "isolate" }}>
          {"\n  "}
          <svg aria-hidden={"true"} width={"0"} height={"0"} style={{ position: "absolute", width: "0", height: "0" }}>
            <filter id={"ds-tritone"} colorInterpolationFilters={"sRGB"}>
              <feColorMatrix type={"matrix"} values={"0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0 0 0 1 0"} />
              <feComponentTransfer>
                <feFuncR type={"table"} tableValues={"0.043 0.043 0.184 0.925"} />
                <feFuncG type={"table"} tableValues={"0.055 0.055 0.294 0.922"} />
                <feFuncB type={"table"} tableValues={"0.075 0.075 0.941 0.902"} />
              </feComponentTransfer>
            </filter>
          </svg>
          {"\n  "}
          <div data-hero-layer={""} aria-hidden={"true"} data-i18n-skip={""} style={{ position: "absolute", inset: "0", zIndex: "-1", overflow: "clip", pointerEvents: "none" }}>
            {"\n    "}
            <div data-scrub-track={""} style={{ position: "absolute", inset: "0", overflow: "hidden", background: "#0B0E13" }}>
              {"\n      "}
              <video data-autoplay={""} data-hero-bg={""} src={"/assets/hero/bg.mp4"} autoPlay muted loop playsInline preload={"auto"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "url(#ds-tritone) contrast(1.08)" }} />
              {"\n      "}
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg,rgba(11,14,19,0.86) 0%,rgba(11,14,19,0.5) 45%,rgba(11,14,19,0.25) 100%)" }} />
              {"\n      "}
              <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "45%", background: "linear-gradient(rgba(11,14,19,0),#0B0E13)" }} />
              {"\n    "}
            </div>
            {"\n  "}
          </div>
          {"\n  "}
          <div className={"ds-mq"} data-mq={""} aria-hidden={"true"} data-i18n-skip={""}>
            <div className={"ds-mq-stage"}>
              <div className={"ds-mq-plane"}>
                <div className={"ds-mq-col"}>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-enterprise.webp"} alt={""} width={"560"} height={"277"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-site.webp"} alt={""} width={"560"} height={"728"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-busca.webp"} alt={""} width={"560"} height={"437"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-carrinho.webp"} alt={""} width={"560"} height={"727"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-widgets.webp"} alt={""} width={"560"} height={"383"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-pedido.webp"} alt={""} width={"560"} height={"281"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-home.webp"} alt={""} width={"560"} height={"271"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-home.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-central.webp"} alt={""} width={"560"} height={"315"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-home.webp"} alt={""} width={"560"} height={"279"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-tipos.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-checklist.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-relatorios.webp"} alt={""} width={"560"} height={"699"} decoding={"async"} />
                  </div>
                </div>
                <div className={"ds-mq-col"}>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-checklist.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-relatorios.webp"} alt={""} width={"560"} height={"699"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-cardapio.webp"} alt={""} width={"560"} height={"728"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-catalogo.webp"} alt={""} width={"560"} height={"648"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-aprovacao.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-mobile.webp"} alt={""} width={"560"} height={"437"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-novo.webp"} alt={""} width={"560"} height={"555"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-admin.webp"} alt={""} width={"560"} height={"315"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-logistica.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-rastreio.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-dashboard.webp"} alt={""} width={"560"} height={"276"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-modal.webp"} alt={""} width={"560"} height={"584"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-assistente.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                </div>
                <div className={"ds-mq-col"}>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-modal.webp"} alt={""} width={"560"} height={"584"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-assistente.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-enterprise.webp"} alt={""} width={"560"} height={"277"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-site.webp"} alt={""} width={"560"} height={"728"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-busca.webp"} alt={""} width={"560"} height={"437"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-carrinho.webp"} alt={""} width={"560"} height={"727"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-widgets.webp"} alt={""} width={"560"} height={"383"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-pedido.webp"} alt={""} width={"560"} height={"281"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-home.webp"} alt={""} width={"560"} height={"271"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-home.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-central.webp"} alt={""} width={"560"} height={"315"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-home.webp"} alt={""} width={"560"} height={"279"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-tipos.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                </div>
                <div className={"ds-mq-col"}>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-home.webp"} alt={""} width={"560"} height={"279"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-tipos.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-checklist.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-relatorios.webp"} alt={""} width={"560"} height={"699"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-cardapio.webp"} alt={""} width={"560"} height={"728"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-catalogo.webp"} alt={""} width={"560"} height={"648"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-aprovacao.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-mobile.webp"} alt={""} width={"560"} height={"437"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-novo.webp"} alt={""} width={"560"} height={"555"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-admin.webp"} alt={""} width={"560"} height={"315"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-logistica.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-rastreio.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-dashboard.webp"} alt={""} width={"560"} height={"276"} decoding={"async"} />
                  </div>
                </div>
                <div className={"ds-mq-col"}>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-rastreio.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-dashboard.webp"} alt={""} width={"560"} height={"276"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-modal.webp"} alt={""} width={"560"} height={"584"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-assistente.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-enterprise.webp"} alt={""} width={"560"} height={"277"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-site.webp"} alt={""} width={"560"} height={"728"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-busca.webp"} alt={""} width={"560"} height={"437"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-carrinho.webp"} alt={""} width={"560"} height={"727"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-widgets.webp"} alt={""} width={"560"} height={"383"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-pedido.webp"} alt={""} width={"560"} height={"281"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-home.webp"} alt={""} width={"560"} height={"271"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-home.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-central.webp"} alt={""} width={"560"} height={"315"} decoding={"async"} />
                  </div>
                </div>
                <div className={"ds-mq-col"}>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-home.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-central.webp"} alt={""} width={"560"} height={"315"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-home.webp"} alt={""} width={"560"} height={"279"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-tipos.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-checklist.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-relatorios.webp"} alt={""} width={"560"} height={"699"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-cardapio.webp"} alt={""} width={"560"} height={"728"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-catalogo.webp"} alt={""} width={"560"} height={"648"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-aprovacao.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-mobile.webp"} alt={""} width={"560"} height={"437"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-novo.webp"} alt={""} width={"560"} height={"555"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-admin.webp"} alt={""} width={"560"} height={"315"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-logistica.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                </div>
                <div className={"ds-mq-col"}>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-admin.webp"} alt={""} width={"560"} height={"315"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-logistica.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-rastreio.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-dashboard.webp"} alt={""} width={"560"} height={"276"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-modal.webp"} alt={""} width={"560"} height={"584"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ford-assistente.webp"} alt={""} width={"560"} height={"384"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-enterprise.webp"} alt={""} width={"560"} height={"277"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-site.webp"} alt={""} width={"560"} height={"728"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-busca.webp"} alt={""} width={"560"} height={"437"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-carrinho.webp"} alt={""} width={"560"} height={"727"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ec-widgets.webp"} alt={""} width={"560"} height={"383"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/db-pedido.webp"} alt={""} width={"560"} height={"281"} decoding={"async"} />
                  </div>
                  <div className={"ds-mq-item"}>
                    <img src={"/assets/marquee/ep-home.webp"} alt={""} width={"560"} height={"271"} decoding={"async"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {"\n  "}
          <div className={"ds-hero-c"} style={{ position: "relative", maxWidth: "1360px", margin: "0 auto", padding: "clamp(48px,7vw,96px) clamp(20px,3vw,40px) clamp(56px,7vw,96px)", display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,72px)" }}>
            {"\n    \n    "}
            <div style={{ overflow: "hidden" }}>
              <h1 data-reveal={"line"} aria-label={"DevSehn"} data-i18n-skip={""} style={{ margin: "0", paddingBottom: "0.22em", display: "flex", alignItems: "baseline", fontSize: "clamp(48px,8.6vw,132px)", lineHeight: "0.94", letterSpacing: "-0.045em", fontWeight: "500" }}>
                <svg data-logo-d={""} viewBox={"12 10 42 44"} aria-hidden={"true"} style={{ position: "relative", zIndex: "1", display: "block", flex: "none", width: "0.69em", height: "0.72em", marginRight: "0.035em" }}>
                  <path fill={"#ECEBE6"} d={"M12 10H32A22 22 0 0 1 32 54H12V35H27.68A7 7 0 1 0 27.68 29H12Z"} style={{ filter: "drop-shadow(0px 1px 3px #3d6bff)" }} />
                  <circle cx={"34"} cy={"32"} r={"3.5"} fill={"#2F4BF0"} />
                </svg>
                <span data-logo-word={""} aria-hidden={"true"} style={{ position: "relative", display: "block", overflow: "hidden", whiteSpace: "nowrap", padding: "0.14em 0.04em 0.1em 0", margin: "-0.14em 0 -0.1em 0", textShadow: "0px 1px 17px #3d6bff" }}>
                  {"evSehn"}
                </span>
              </h1>
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px,4vw,64px)", alignItems: "flex-end" }}>
              {"\n      "}
              <div style={{ flex: "1 1 340px", maxWidth: "480px", display: "flex", flexDirection: "column", gap: "32px" }}>
                {"\n        "}
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#B4BAC2", textWrap: "pretty" }}>
                  {"Oi, sou o Dérik. Engenheiro de software com experiência em sistemas corporativos, cloud, DevOps e integrações. Já desenvolvi soluções para indústria, logística, comércio e saúde, do código à infraestrutura em produção."}
                </p>
                {"\n        "}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {"\n          "}
                  <a className={"dh6"} href={"#trabalhos"} style={{ display: "inline-flex", alignItems: "center", gap: "12px", height: "48px", padding: "0 22px", borderRadius: "4px", background: "#ECEBE6", color: "#0B0E13", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", fontWeight: "500", letterSpacing: "0.06em", textTransform: "uppercase", transition: "background .2s" }}>
                    {"Ver meus projetos"}
                    <span>
                      {"→"}
                    </span>
                  </a>
                  {"\n          "}
                  <a className={"dh7"} href={"#contato"} style={{ display: "inline-flex", alignItems: "center", height: "48px", padding: "0 22px", borderRadius: "4px", border: "1px solid #3A414B", color: "#ECEBE6", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", fontWeight: "500", letterSpacing: "0.06em", textTransform: "uppercase", transition: "border-color .2s" }}>
                    {"Entre em contato"}
                  </a>
                  {"\n        "}
                </div>
                {"\n      "}
              </div>
              {"\n      "}
              {v?.showHeroImage ? (
                <>
                  {"\n        "}
                  <div data-machine-anchor={""} aria-hidden={"true"} style={{ flex: "1.4 1 420px", minWidth: "0", aspectRatio: "911/760" }} />
                  {"\n      "}
                </>
              ) : null}
              {"\n    "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section id={"trabalhos"} data-screen-label={"Trabalhos"} style={{ background: "#EFEEE9", color: "#0B0E13" }}>
          {"\n  \n"}
          <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "clamp(72px,9vw,128px) clamp(20px,3vw,40px)", display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,64px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              {"\n      "}
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500" }}>
                  {"O Software completo que entrego"}
                </h2>
              </div>
              {"\n      "}
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(01) Pensou em escalar? eu entrego o sistema de ponta a ponta, pronto para o futuro."}
                <br />
              </span>
              {"\n    "}
            </div>
            {"\n\n    "}
            <div data-screen-label={"Cases bento"} style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "stretch" }}>
              {"\n      "}
              <a className={"dh8"} data-reveal={"clip"} href={"/cases/eli-control"} style={{ position: "relative", flex: "7 1 560px", minWidth: "0", display: "flex", flexDirection: "column", border: "1px solid #0B0E13", background: "#0B0E13", color: "#ECEBE6", overflow: "hidden", transition: "border-color .25s" }}>
                {"\n        "}
                <span style={{ position: "absolute", left: "0", top: "0", zIndex: "2", padding: "8px 12px", background: "#EFEEE9", color: "#0B0E13", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", borderRight: "1px solid #0B0E13", borderBottom: "1px solid #0B0E13" }}>
                  {"01 · Projeto em destaque"}
                </span>
                {"\n        "}
                <div style={{ position: "relative", flex: "1 1 auto", minHeight: "clamp(240px,30vw,420px)", overflow: "hidden", background: "#0B1424" }}>
                  {"\n          "}
                  <img src={"/assets/eli_central.png"} alt={"Eli Control: central operacional na web e tela da empresa no app, com dados de exemplo"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "30% 40%", display: "block", willChange: "transform" }} data-parallax={"-0.1"} />
                  {"\n        "}
                </div>
                {"\n        "}
                <div style={{ padding: "clamp(20px,2.4vw,32px)", display: "flex", flexDirection: "column", gap: "18px", borderTop: "1px solid #22272F" }}>
                  {"\n          "}
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                    {"\n            "}
                    <span style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <img src={"/assets/eli_mark.png"} alt={""} style={{ height: "clamp(34px,3vw,44px)", width: "auto" }} />
                      <span style={{ fontSize: "clamp(32px,3.6vw,52px)", letterSpacing: "-0.035em", fontWeight: "500", lineHeight: "1" }}>
                        {"Eli Control"}
                      </span>
                    </span>
                    {"\n            "}
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 20px", borderRadius: "4px", background: "#ECEBE6", color: "#0B0E13", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", fontWeight: "500", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {"Ver case"}
                      <span>
                        {"→"}
                      </span>
                    </span>
                    {"\n          "}
                  </div>
                  {"\n          "}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px clamp(24px,3vw,48px)", alignItems: "baseline" }}>
                    {"\n            "}
                    <p style={{ flex: "1.4 1 300px", margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#B4BAC2", textWrap: "pretty" }}>
                      {"Uma plataforma de monitoramento de refrigeração industrial com telemetria de equipamentos, alarmes, dashboards e operações multiempresa."}
                    </p>
                    {"\n            "}
                    <span style={{ flex: "1 1 200px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.7", color: "#9AA1AB" }}>
                      {"Next.js · NestJS · TypeScript · PostgreSQL · MQTT"}
                    </span>
                    {"\n          "}
                  </div>
                  {"\n        "}
                </div>
                {"\n      "}
              </a>
              {"\n      "}
              <div style={{ flex: "5 1 400px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
                {"\n        "}
                <a className={"dh9"} data-reveal={"fade"} data-delay={"150"} href={"/cases/eli-pecas"} style={{ flex: "1 1 auto", display: "flex", flexWrap: "wrap", border: "1px solid #0B0E13", background: "#EFEEE9", color: "#0B0E13", transition: "background .25s" }}>
                  {"\n          "}
                  <div style={{ position: "relative", flex: "1 1 180px", minHeight: "150px", overflow: "hidden", background: "#16130F", outline: "1px solid #0B0E13" }}>
                    <img src={"/assets/elipecas_hero_v2.png"} alt={"Eli Peças: dossiê do pedido no painel e carrinho no app"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "100% 30%", display: "block", willChange: "transform" }} data-parallax={"0.07"} />
                  </div>
                  {"\n          "}
                  <div style={{ flex: "1.3 1 220px", minWidth: "0", padding: "16px 20px 18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {"\n            "}
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                      {"02 · E-commerce"}
                    </span>
                    {"\n            "}
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img src={"/assets/elipecas/mark_ink.png"} alt={""} style={{ height: "26px", width: "auto" }} />
                      <span style={{ fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
                        {"Eli Peças"}
                      </span>
                    </span>
                    {"\n            "}
                    <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3A3F46", textWrap: "pretty" }}>
                      {"Loja de peças de refrigeração com pedidos, pagamentos e painel integrado ao WhatsApp."}
                    </span>
                    {"\n            "}
                    <span style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", fontWeight: "500", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {"Ver case"}
                      <span style={{ fontSize: "15px" }}>
                        {"→"}
                      </span>
                    </span>
                    {"\n          "}
                  </div>
                  {"\n        "}
                </a>
                {"\n        "}
                <a className={"dh10"} data-reveal={"fade"} data-delay={"250"} href={"/cases/cultura-verde"} style={{ flex: "1 1 auto", display: "flex", flexWrap: "wrap", border: "1px solid #0B0E13", background: "#EFEEE9", color: "#0B0E13", transition: "background .25s" }}>
                  {"\n          "}
                  <div style={{ position: "relative", flex: "1 1 180px", minHeight: "150px", overflow: "hidden", background: "#16130F", outline: "1px solid #0B0E13" }}>
                    <video data-autoplay={""} src={"/assets/culturaverde/site.mp4"} autoPlay muted loop playsInline preload={"metadata"} aria-label={"Navegação pelo site da Cultura Verde"} data-parallax={"-0.05"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 0", display: "block", willChange: "transform" }} />
                  </div>
                  {"\n          "}
                  <div style={{ flex: "1.3 1 220px", minWidth: "0", padding: "16px 20px 18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {"\n            "}
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                      {"03 · Site e painel"}
                    </span>
                    {"\n            "}
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
                        {"Cultura Verde"}
                      </span>
                    </span>
                    {"\n            "}
                    <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3A3F46", textWrap: "pretty" }}>
                      {"Site e painel de paisagismo, com projetos em antes e depois editáveis pela equipe."}
                    </span>
                    {"\n            "}
                    <span style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", fontWeight: "500", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {"Ver case"}
                      <span style={{ fontSize: "15px" }}>
                        {"→"}
                      </span>
                    </span>
                    {"\n          "}
                  </div>
                  {"\n        "}
                </a>
                {"\n        "}
                <a className={"dh11"} data-reveal={"fade"} data-delay={"350"} href={"/cases/daniela-bosing"} style={{ flex: "1 1 auto", display: "flex", flexWrap: "wrap", border: "1px solid #0B0E13", background: "#EFEEE9", color: "#0B0E13", transition: "background .25s" }}>
                  {"\n          "}
                  <div style={{ position: "relative", flex: "1 1 180px", minHeight: "150px", overflow: "hidden", background: "#16130F", outline: "1px solid #0B0E13" }}>
                    <video data-autoplay={""} src={"/assets/danibosing/site.mp4"} autoPlay muted loop playsInline preload={"metadata"} aria-label={"Navegação pelo site da Cheff Daniela Bosing"} data-parallax={"0.09"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 0", display: "block", willChange: "transform" }} />
                  </div>
                  {"\n          "}
                  <div style={{ flex: "1.3 1 220px", minWidth: "0", padding: "16px 20px 18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {"\n            "}
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                      {"04 · Gastronomia"}
                    </span>
                    {"\n            "}
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <img src={"/assets/danibosing/logo_ink.png"} alt={""} style={{ height: "30px", width: "auto" }} />
                      <span style={{ fontSize: "clamp(22px,2vw,28px)", fontWeight: "500", letterSpacing: "-0.03em", lineHeight: "1.05" }}>
                        {"Daniela Bosing"}
                      </span>
                    </span>
                    {"\n            "}
                    <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#3A3F46", textWrap: "pretty" }}>
                      {"Cardápio online e gestão de eventos, com orçamento, margem e etapas de produção."}
                    </span>
                    {"\n            "}
                    <span style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: "8px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", fontWeight: "500", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      {"Ver case"}
                      <span style={{ fontSize: "15px" }}>
                        {"→"}
                      </span>
                    </span>
                    {"\n          "}
                  </div>
                  {"\n        "}
                </a>
                {"\n      "}
              </div>
              {"\n      "}
              <a className={"dh12"} data-reveal={"fade"} data-delay={"200"} href={"/cases/ford"} style={{ flex: "1 1 100%", display: "flex", flexWrap: "wrap", border: "1px solid #0B0E13", background: "#EFEEE9", color: "#0B0E13", transition: "background .25s" }}>
                {"\n        "}
                <div style={{ position: "relative", flex: "7 1 520px", minHeight: "clamp(220px,26vw,360px)", overflow: "hidden", background: "#00095B", outline: "1px solid #0B0E13" }}>
                  {"\n          "}
                  <img src={"/assets/ford/01-home.png"} alt={"Ford: tela inicial do portal de suprimentos de protótipos"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "0 0", display: "block", willChange: "transform" }} data-parallax={"-0.08"} />
                  {"\n          "}
                  <span style={{ position: "absolute", left: "0", top: "0", zIndex: "2", padding: "8px 12px", background: "#EFEEE9", color: "#0B0E13", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", borderRight: "1px solid #0B0E13", borderBottom: "1px solid #0B0E13" }}>
                    {"05 · Engenharia automotiva"}
                  </span>
                  {"\n        "}
                </div>
                {"\n        "}
                <div style={{ flex: "5 1 360px", minWidth: "0", padding: "clamp(20px,2.4vw,32px)", display: "flex", flexDirection: "column", gap: "16px" }}>
                  {"\n          "}
                  <span style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <img src={"/assets/ford_logo.png"} alt={""} style={{ height: "clamp(28px,2.6vw,40px)", width: "auto" }} />
                    <span style={{ fontSize: "clamp(32px,3.6vw,52px)", letterSpacing: "-0.035em", fontWeight: "500", lineHeight: "1" }}>
                      {"Ford"}
                    </span>
                  </span>
                  {"\n          "}
                  <span style={{ fontSize: "17px", lineHeight: "1.55", color: "#3A3F46", textWrap: "pretty" }}>
                    {"Plataforma que leva peças de protótipo do pedido à planta, com aprovações por etapa e rastreio ponta a ponta."}
                  </span>
                  {"\n          "}
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.7", color: "#5A5F66" }}>
                    {"Angular · Spring Boot · PostgreSQL · Cloud"}
                  </span>
                  {"\n          "}
                  <span style={{ marginTop: "auto", alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "12px", height: "44px", padding: "0 20px", borderRadius: "4px", background: "#0B0E13", color: "#ECEBE6", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", fontWeight: "500", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {"Ver case"}
                    <span>
                      {"→"}
                    </span>
                  </span>
                  {"\n        "}
                </div>
                {"\n      "}
              </a>
              {"\n    "}
            </div>
            {"\n\n\n\n\n    "}
            <div style={{ margin: "0 auto", width: "100%" }}>
              {"\n    "}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
                {"\n      "}
                <div style={{ overflow: "hidden" }}>
                  <h2 data-reveal={"line"} style={{ margin: "0 auto", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500", maxWidth: "1360px" }}>
                    {"Onde já trabalhei"}
                  </h2>
                </div>
                {"\n      "}
                <a className={"dh13"} href={"/sobre"} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B0E13" }}>
                  {"(02) Mais sobre mim →"}
                </a>
                {"\n    "}
              </div>
              {"\n    "}
              <div data-screen-label={"Experiência cards"} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: "16px" }}>
                {"\n      "}
                <article className={"dh14"} data-reveal={"fade"} data-delay={"0"} style={{ display: "flex", flexDirection: "column", border: "1px solid #0B0E13", background: "#EFEEE9", minWidth: "0", transition: "border-color .25s" }}>
                  {"\n        "}
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderBottom: "1px solid #0B0E13" }}>
                    <svg viewBox={"0 0 400 300"} preserveAspectRatio={"xMidYMid slice"} aria-hidden={"true"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", background: "#00095B" }}>
                      <g fill={"#3B5BD9"} opacity={"0.55"}>
                        <circle cx={"20"} cy={"20"} r={"1.4"} />
                        <circle cx={"20"} cy={"60"} r={"1.4"} />
                        <circle cx={"20"} cy={"100"} r={"1.4"} />
                        <circle cx={"20"} cy={"140"} r={"1.4"} />
                        <circle cx={"20"} cy={"180"} r={"1.4"} />
                        <circle cx={"20"} cy={"220"} r={"1.4"} />
                        <circle cx={"20"} cy={"260"} r={"1.4"} />
                        <circle cx={"60"} cy={"20"} r={"1.4"} />
                        <circle cx={"60"} cy={"60"} r={"1.4"} />
                        <circle cx={"60"} cy={"100"} r={"1.4"} />
                        <circle cx={"60"} cy={"140"} r={"1.4"} />
                        <circle cx={"60"} cy={"180"} r={"1.4"} />
                        <circle cx={"60"} cy={"220"} r={"1.4"} />
                        <circle cx={"60"} cy={"260"} r={"1.4"} />
                        <circle cx={"100"} cy={"20"} r={"1.4"} />
                        <circle cx={"100"} cy={"60"} r={"1.4"} />
                        <circle cx={"100"} cy={"100"} r={"1.4"} />
                        <circle cx={"100"} cy={"140"} r={"1.4"} />
                        <circle cx={"100"} cy={"180"} r={"1.4"} />
                        <circle cx={"100"} cy={"220"} r={"1.4"} />
                        <circle cx={"100"} cy={"260"} r={"1.4"} />
                        <circle cx={"140"} cy={"20"} r={"1.4"} />
                        <circle cx={"140"} cy={"60"} r={"1.4"} />
                        <circle cx={"140"} cy={"100"} r={"1.4"} />
                        <circle cx={"140"} cy={"140"} r={"1.4"} />
                        <circle cx={"140"} cy={"180"} r={"1.4"} />
                        <circle cx={"140"} cy={"220"} r={"1.4"} />
                        <circle cx={"140"} cy={"260"} r={"1.4"} />
                        <circle cx={"180"} cy={"20"} r={"1.4"} />
                        <circle cx={"180"} cy={"60"} r={"1.4"} />
                        <circle cx={"180"} cy={"100"} r={"1.4"} />
                        <circle cx={"180"} cy={"140"} r={"1.4"} />
                        <circle cx={"180"} cy={"180"} r={"1.4"} />
                        <circle cx={"180"} cy={"220"} r={"1.4"} />
                        <circle cx={"180"} cy={"260"} r={"1.4"} />
                        <circle cx={"220"} cy={"20"} r={"1.4"} />
                        <circle cx={"220"} cy={"60"} r={"1.4"} />
                        <circle cx={"220"} cy={"100"} r={"1.4"} />
                        <circle cx={"220"} cy={"140"} r={"1.4"} />
                        <circle cx={"220"} cy={"180"} r={"1.4"} />
                        <circle cx={"220"} cy={"220"} r={"1.4"} />
                        <circle cx={"220"} cy={"260"} r={"1.4"} />
                        <circle cx={"260"} cy={"20"} r={"1.4"} />
                        <circle cx={"260"} cy={"60"} r={"1.4"} />
                        <circle cx={"260"} cy={"100"} r={"1.4"} />
                        <circle cx={"260"} cy={"140"} r={"1.4"} />
                        <circle cx={"260"} cy={"180"} r={"1.4"} />
                        <circle cx={"260"} cy={"220"} r={"1.4"} />
                        <circle cx={"260"} cy={"260"} r={"1.4"} />
                        <circle cx={"300"} cy={"20"} r={"1.4"} />
                        <circle cx={"300"} cy={"60"} r={"1.4"} />
                        <circle cx={"300"} cy={"100"} r={"1.4"} />
                        <circle cx={"300"} cy={"140"} r={"1.4"} />
                        <circle cx={"300"} cy={"180"} r={"1.4"} />
                        <circle cx={"300"} cy={"220"} r={"1.4"} />
                        <circle cx={"300"} cy={"260"} r={"1.4"} />
                        <circle cx={"340"} cy={"20"} r={"1.4"} />
                        <circle cx={"340"} cy={"60"} r={"1.4"} />
                        <circle cx={"340"} cy={"100"} r={"1.4"} />
                        <circle cx={"340"} cy={"140"} r={"1.4"} />
                        <circle cx={"340"} cy={"180"} r={"1.4"} />
                        <circle cx={"340"} cy={"220"} r={"1.4"} />
                        <circle cx={"340"} cy={"260"} r={"1.4"} />
                        <circle cx={"380"} cy={"20"} r={"1.4"} />
                        <circle cx={"380"} cy={"60"} r={"1.4"} />
                        <circle cx={"380"} cy={"100"} r={"1.4"} />
                        <circle cx={"380"} cy={"140"} r={"1.4"} />
                        <circle cx={"380"} cy={"180"} r={"1.4"} />
                        <circle cx={"380"} cy={"220"} r={"1.4"} />
                        <circle cx={"380"} cy={"260"} r={"1.4"} />
                      </g>
                      <g fill={"none"} stroke={"#2A3FA8"} strokeWidth={"1"}>
                        <path d={"M-10 230 L120 150 L260 190 L410 90"} />
                        <path d={"M-10 90 L100 120 L220 60 L410 140"} />
                        <path d={"M60 310 L140 150 L220 60"} />
                      </g>
                      <g fill={"none"} stroke={"#8FB0FF"} strokeWidth={"2.4"} strokeLinecap={"round"} strokeDasharray={"10 14"}>
                        <path d={"M-10 230 L120 150 L260 190 L410 90"}>
                          <animate attributeName={"stroke-dashoffset"} from={"0"} to={"-240"} dur={"6s"} repeatCount={"indefinite"} />
                        </path>
                        <path d={"M-10 90 L100 120 L220 60 L410 140"}>
                          <animate attributeName={"stroke-dashoffset"} from={"0"} to={"-240"} dur={"8s"} repeatCount={"indefinite"} />
                        </path>
                      </g>
                      <circle cx={"120"} cy={"150"} r={"5"} fill={"#FFFFFF"} />
                      <circle cx={"120"} cy={"150"} r={"5"} fill={"none"} stroke={"#8FB0FF"} strokeWidth={"1.5"}>
                        <animate attributeName={"r"} values={"5;18;5"} dur={"3s"} begin={"0s"} repeatCount={"indefinite"} />
                        <animate attributeName={"opacity"} values={"1;0;1"} dur={"3s"} begin={"0s"} repeatCount={"indefinite"} />
                      </circle>
                      <circle cx={"260"} cy={"190"} r={"5"} fill={"#FFFFFF"} />
                      <circle cx={"260"} cy={"190"} r={"5"} fill={"none"} stroke={"#8FB0FF"} strokeWidth={"1.5"}>
                        <animate attributeName={"r"} values={"5;18;5"} dur={"3s"} begin={"0.7s"} repeatCount={"indefinite"} />
                        <animate attributeName={"opacity"} values={"1;0;1"} dur={"3s"} begin={"0.7s"} repeatCount={"indefinite"} />
                      </circle>
                      <circle cx={"220"} cy={"60"} r={"5"} fill={"#FFFFFF"} />
                      <circle cx={"220"} cy={"60"} r={"5"} fill={"none"} stroke={"#8FB0FF"} strokeWidth={"1.5"}>
                        <animate attributeName={"r"} values={"5;18;5"} dur={"3s"} begin={"1.4s"} repeatCount={"indefinite"} />
                        <animate attributeName={"opacity"} values={"1;0;1"} dur={"3s"} begin={"1.4s"} repeatCount={"indefinite"} />
                      </circle>
                      <circle cx={"100"} cy={"120"} r={"5"} fill={"#FFFFFF"} />
                      <circle cx={"100"} cy={"120"} r={"5"} fill={"none"} stroke={"#8FB0FF"} strokeWidth={"1.5"}>
                        <animate attributeName={"r"} values={"5;18;5"} dur={"3s"} begin={"2.0999999999999996s"} repeatCount={"indefinite"} />
                        <animate attributeName={"opacity"} values={"1;0;1"} dur={"3s"} begin={"2.0999999999999996s"} repeatCount={"indefinite"} />
                      </circle>
                    </svg>
                    {"\n          "}
                    <span style={{ position: "absolute", left: "14px", bottom: "14px", height: "44px", padding: "0 12px", display: "flex", alignItems: "center", background: "#FFFFFF", border: "1px solid #0B0E13" }}>
                      <img src={"/assets/ford_logo.png"} alt={"Ford"} style={{ height: "26px", width: "auto" }} />
                    </span>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "10px", flex: "1" }}>
                    {"\n          "}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#3A3F46" }}>
                      <span>
                        {"Fev 2025 – atual"}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B0E13" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#3D6BFF" }} />
                        {"Atual"}
                      </span>
                    </div>
                    {"\n          "}
                    <h3 style={{ margin: "0", fontSize: "clamp(22px,1.9vw,26px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.1" }}>
                      {"Ford Motor Company"}
                    </h3>
                    {"\n          "}
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.6", color: "#5A5F66" }}>
                      {"Sistemas de Logística · Angular · Spring Boot · GCP"}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </article>
                {"\n      "}
                <article className={"dh15"} data-reveal={"fade"} data-delay={"100"} style={{ display: "flex", flexDirection: "column", border: "1px solid #0B0E13", background: "#EFEEE9", minWidth: "0", transition: "border-color .25s" }}>
                  {"\n        "}
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderBottom: "1px solid #0B0E13" }}>
                    <svg viewBox={"0 0 400 300"} preserveAspectRatio={"xMidYMid slice"} aria-hidden={"true"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", background: "#0B0E13" }}>
                      <g>
                        <rect x={"50"} y={"36"} width={"120"} height={"9"} rx={"2"} fill={"#3D6BFF"} />
                        <text x={"18"} y={"44"} fontFamily={"IBM Plex Mono, monospace"} fontSize={"9"} fill={"#4B525C"}>
                          {"01"}
                        </text>
                        <rect x={"70"} y={"62"} width={"200"} height={"9"} rx={"2"} fill={"#3A414B"} />
                        <text x={"18"} y={"70"} fontFamily={"IBM Plex Mono, monospace"} fontSize={"9"} fill={"#4B525C"}>
                          {"02"}
                        </text>
                        <rect x={"70"} y={"88"} width={"150"} height={"9"} rx={"2"} fill={"#3A414B"} />
                        <text x={"18"} y={"96"} fontFamily={"IBM Plex Mono, monospace"} fontSize={"9"} fill={"#4B525C"}>
                          {"03"}
                        </text>
                        <rect x={"90"} y={"114"} width={"90"} height={"9"} rx={"2"} fill={"#9AA1AB"} />
                        <text x={"18"} y={"122"} fontFamily={"IBM Plex Mono, monospace"} fontSize={"9"} fill={"#4B525C"}>
                          {"04"}
                        </text>
                        <rect x={"90"} y={"140"} width={"180"} height={"9"} rx={"2"} fill={"#3A414B"} />
                        <text x={"18"} y={"148"} fontFamily={"IBM Plex Mono, monospace"} fontSize={"9"} fill={"#4B525C"}>
                          {"05"}
                        </text>
                        <rect x={"70"} y={"166"} width={"110"} height={"9"} rx={"2"} fill={"#3A414B"} />
                        <text x={"18"} y={"174"} fontFamily={"IBM Plex Mono, monospace"} fontSize={"9"} fill={"#4B525C"}>
                          {"06"}
                        </text>
                        <rect x={"50"} y={"192"} width={"60"} height={"9"} rx={"2"} fill={"#3D6BFF"} />
                        <text x={"18"} y={"200"} fontFamily={"IBM Plex Mono, monospace"} fontSize={"9"} fill={"#4B525C"}>
                          {"07"}
                        </text>
                        <rect x={"50"} y={"218"} width={"140"} height={"9"} rx={"2"} fill={"#3A414B"} />
                        <text x={"18"} y={"226"} fontFamily={"IBM Plex Mono, monospace"} fontSize={"9"} fill={"#4B525C"}>
                          {"08"}
                        </text>
                        <rect x={"70"} y={"244"} width={"210"} height={"9"} rx={"2"} fill={"#3A414B"} />
                        <text x={"18"} y={"252"} fontFamily={"IBM Plex Mono, monospace"} fontSize={"9"} fill={"#4B525C"}>
                          {"09"}
                        </text>
                      </g>
                      <rect x={"180"} y={"114"} width={"7"} height={"12"} fill={"#ECEBE6"}>
                        <animate attributeName={"opacity"} values={"1;1;0;0"} keyTimes={"0;0.5;0.5;1"} dur={"1.1s"} repeatCount={"indefinite"} />
                      </rect>
                      <text x={"300"} y={"190"} fontFamily={"IBM Plex Mono, monospace"} fontSize={"120"} fill={"#3D6BFF"} opacity={"0.9"}>
                        {"}"}
                      </text>
                    </svg>
                    {"\n          "}
                    <span style={{ position: "absolute", left: "14px", bottom: "14px", height: "44px", padding: "0 12px", display: "flex", alignItems: "center", background: "#FFFFFF", border: "1px solid #0B0E13" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "7px", color: "#0B0E13" }}>
                        <svg viewBox={"12 10 42 44"} width={"18"} height={"19"} aria-hidden={"true"} style={{ display: "block", flex: "none" }}>
                          <path fill={"#0B0E13"} d={"M12 10H32A22 22 0 0 1 32 54H12V35H27.68A7 7 0 1 0 27.68 29H12Z"} />
                          <circle cx={"34"} cy={"32"} r={"3.5"} fill={"#2F4BF0"} />
                        </svg>
                        <span style={{ fontFamily: "'Geist',system-ui,sans-serif", fontSize: "18px", lineHeight: "1", letterSpacing: "-0.04em" }}>
                          <span style={{ fontWeight: "600" }}>
                            {"Dev"}
                          </span>
                          <span style={{ fontWeight: "300" }}>
                            {"Sehn"}
                          </span>
                        </span>
                      </span>
                    </span>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "10px", flex: "1" }}>
                    {"\n          "}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#3A3F46" }}>
                      <span>
                        {"Mar 2024 – atual"}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#0B0E13" }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#3D6BFF" }} />
                        {"Atual"}
                      </span>
                    </div>
                    {"\n          "}
                    <h3 style={{ margin: "0", fontSize: "clamp(22px,1.9vw,26px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.1" }}>
                      {"DevSehn"}
                    </h3>
                    {"\n          "}
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.6", color: "#5A5F66" }}>
                      {"Aplicações web · APIs · Integrações"}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </article>
                {"\n      "}
                <article className={"dh16"} data-reveal={"fade"} data-delay={"200"} style={{ display: "flex", flexDirection: "column", border: "1px solid #0B0E13", background: "#EFEEE9", minWidth: "0", transition: "border-color .25s" }}>
                  {"\n        "}
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderBottom: "1px solid #0B0E13" }}>
                    <svg viewBox={"0 0 400 300"} preserveAspectRatio={"xMidYMid slice"} aria-hidden={"true"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", background: "#FF8A3D" }}>
                      <g fill={"#FFFFFF"} opacity={"0.28"}>
                        <circle cx={"10"} cy={"10"} r={"1"} />
                        <circle cx={"10"} cy={"30"} r={"1"} />
                        <circle cx={"10"} cy={"50"} r={"1"} />
                        <circle cx={"10"} cy={"70"} r={"1"} />
                        <circle cx={"10"} cy={"90"} r={"1"} />
                        <circle cx={"10"} cy={"110"} r={"1"} />
                        <circle cx={"10"} cy={"130"} r={"1"} />
                        <circle cx={"10"} cy={"150"} r={"1"} />
                        <circle cx={"10"} cy={"170"} r={"1"} />
                        <circle cx={"10"} cy={"190"} r={"1"} />
                        <circle cx={"10"} cy={"210"} r={"1"} />
                        <circle cx={"10"} cy={"230"} r={"1"} />
                        <circle cx={"10"} cy={"250"} r={"1"} />
                        <circle cx={"10"} cy={"270"} r={"1"} />
                        <circle cx={"10"} cy={"290"} r={"1"} />
                        <circle cx={"30"} cy={"10"} r={"1"} />
                        <circle cx={"30"} cy={"30"} r={"1"} />
                        <circle cx={"30"} cy={"50"} r={"1"} />
                        <circle cx={"30"} cy={"70"} r={"1"} />
                        <circle cx={"30"} cy={"90"} r={"1"} />
                        <circle cx={"30"} cy={"110"} r={"1"} />
                        <circle cx={"30"} cy={"130"} r={"1"} />
                        <circle cx={"30"} cy={"150"} r={"1"} />
                        <circle cx={"30"} cy={"170"} r={"1"} />
                        <circle cx={"30"} cy={"190"} r={"1"} />
                        <circle cx={"30"} cy={"210"} r={"1"} />
                        <circle cx={"30"} cy={"230"} r={"1"} />
                        <circle cx={"30"} cy={"250"} r={"1"} />
                        <circle cx={"30"} cy={"270"} r={"1"} />
                        <circle cx={"30"} cy={"290"} r={"1"} />
                        <circle cx={"50"} cy={"10"} r={"1"} />
                        <circle cx={"50"} cy={"30"} r={"1"} />
                        <circle cx={"50"} cy={"50"} r={"1"} />
                        <circle cx={"50"} cy={"70"} r={"1"} />
                        <circle cx={"50"} cy={"90"} r={"1"} />
                        <circle cx={"50"} cy={"110"} r={"1"} />
                        <circle cx={"50"} cy={"130"} r={"1"} />
                        <circle cx={"50"} cy={"150"} r={"1"} />
                        <circle cx={"50"} cy={"170"} r={"1"} />
                        <circle cx={"50"} cy={"190"} r={"1"} />
                        <circle cx={"50"} cy={"210"} r={"1"} />
                        <circle cx={"50"} cy={"230"} r={"1"} />
                        <circle cx={"50"} cy={"250"} r={"1"} />
                        <circle cx={"50"} cy={"270"} r={"1"} />
                        <circle cx={"50"} cy={"290"} r={"1"} />
                        <circle cx={"70"} cy={"10"} r={"1"} />
                        <circle cx={"70"} cy={"30"} r={"1"} />
                        <circle cx={"70"} cy={"50"} r={"1"} />
                        <circle cx={"70"} cy={"70"} r={"1"} />
                        <circle cx={"70"} cy={"90"} r={"1"} />
                        <circle cx={"70"} cy={"110"} r={"1"} />
                        <circle cx={"70"} cy={"130"} r={"1"} />
                        <circle cx={"70"} cy={"150"} r={"1"} />
                        <circle cx={"70"} cy={"170"} r={"1"} />
                        <circle cx={"70"} cy={"190"} r={"1"} />
                        <circle cx={"70"} cy={"210"} r={"1"} />
                        <circle cx={"70"} cy={"230"} r={"1"} />
                        <circle cx={"70"} cy={"250"} r={"1"} />
                        <circle cx={"70"} cy={"270"} r={"1"} />
                        <circle cx={"70"} cy={"290"} r={"1"} />
                        <circle cx={"90"} cy={"10"} r={"1"} />
                        <circle cx={"90"} cy={"30"} r={"1"} />
                        <circle cx={"90"} cy={"50"} r={"1"} />
                        <circle cx={"90"} cy={"70"} r={"1"} />
                        <circle cx={"90"} cy={"90"} r={"1"} />
                        <circle cx={"90"} cy={"110"} r={"1"} />
                        <circle cx={"90"} cy={"130"} r={"1"} />
                        <circle cx={"90"} cy={"150"} r={"1"} />
                        <circle cx={"90"} cy={"170"} r={"1"} />
                        <circle cx={"90"} cy={"190"} r={"1"} />
                        <circle cx={"90"} cy={"210"} r={"1"} />
                        <circle cx={"90"} cy={"230"} r={"1"} />
                        <circle cx={"90"} cy={"250"} r={"1"} />
                        <circle cx={"90"} cy={"270"} r={"1"} />
                        <circle cx={"90"} cy={"290"} r={"1"} />
                        <circle cx={"110"} cy={"10"} r={"1"} />
                        <circle cx={"110"} cy={"30"} r={"1"} />
                        <circle cx={"110"} cy={"50"} r={"1"} />
                        <circle cx={"110"} cy={"70"} r={"1"} />
                        <circle cx={"110"} cy={"90"} r={"1"} />
                        <circle cx={"110"} cy={"110"} r={"1"} />
                        <circle cx={"110"} cy={"130"} r={"1"} />
                        <circle cx={"110"} cy={"150"} r={"1"} />
                        <circle cx={"110"} cy={"170"} r={"1"} />
                        <circle cx={"110"} cy={"190"} r={"1"} />
                        <circle cx={"110"} cy={"210"} r={"1"} />
                        <circle cx={"110"} cy={"230"} r={"1"} />
                        <circle cx={"110"} cy={"250"} r={"1"} />
                        <circle cx={"110"} cy={"270"} r={"1"} />
                        <circle cx={"110"} cy={"290"} r={"1"} />
                        <circle cx={"130"} cy={"10"} r={"1"} />
                        <circle cx={"130"} cy={"30"} r={"1"} />
                        <circle cx={"130"} cy={"50"} r={"1"} />
                        <circle cx={"130"} cy={"70"} r={"1"} />
                        <circle cx={"130"} cy={"90"} r={"1"} />
                        <circle cx={"130"} cy={"110"} r={"1"} />
                        <circle cx={"130"} cy={"130"} r={"1"} />
                        <circle cx={"130"} cy={"150"} r={"1"} />
                        <circle cx={"130"} cy={"170"} r={"1"} />
                        <circle cx={"130"} cy={"190"} r={"1"} />
                        <circle cx={"130"} cy={"210"} r={"1"} />
                        <circle cx={"130"} cy={"230"} r={"1"} />
                        <circle cx={"130"} cy={"250"} r={"1"} />
                        <circle cx={"130"} cy={"270"} r={"1"} />
                        <circle cx={"130"} cy={"290"} r={"1"} />
                        <circle cx={"150"} cy={"10"} r={"1"} />
                        <circle cx={"150"} cy={"30"} r={"1"} />
                        <circle cx={"150"} cy={"50"} r={"1"} />
                        <circle cx={"150"} cy={"70"} r={"1"} />
                        <circle cx={"150"} cy={"90"} r={"1"} />
                        <circle cx={"150"} cy={"110"} r={"1"} />
                        <circle cx={"150"} cy={"130"} r={"1"} />
                        <circle cx={"150"} cy={"150"} r={"1"} />
                        <circle cx={"150"} cy={"170"} r={"1"} />
                        <circle cx={"150"} cy={"190"} r={"1"} />
                        <circle cx={"150"} cy={"210"} r={"1"} />
                        <circle cx={"150"} cy={"230"} r={"1"} />
                        <circle cx={"150"} cy={"250"} r={"1"} />
                        <circle cx={"150"} cy={"270"} r={"1"} />
                        <circle cx={"150"} cy={"290"} r={"1"} />
                        <circle cx={"170"} cy={"10"} r={"1"} />
                        <circle cx={"170"} cy={"30"} r={"1"} />
                        <circle cx={"170"} cy={"50"} r={"1"} />
                        <circle cx={"170"} cy={"70"} r={"1"} />
                        <circle cx={"170"} cy={"90"} r={"1"} />
                        <circle cx={"170"} cy={"110"} r={"1"} />
                        <circle cx={"170"} cy={"130"} r={"1"} />
                        <circle cx={"170"} cy={"150"} r={"1"} />
                        <circle cx={"170"} cy={"170"} r={"1"} />
                        <circle cx={"170"} cy={"190"} r={"1"} />
                        <circle cx={"170"} cy={"210"} r={"1"} />
                        <circle cx={"170"} cy={"230"} r={"1"} />
                        <circle cx={"170"} cy={"250"} r={"1"} />
                        <circle cx={"170"} cy={"270"} r={"1"} />
                        <circle cx={"170"} cy={"290"} r={"1"} />
                        <circle cx={"190"} cy={"10"} r={"1"} />
                        <circle cx={"190"} cy={"30"} r={"1"} />
                        <circle cx={"190"} cy={"50"} r={"1"} />
                        <circle cx={"190"} cy={"70"} r={"1"} />
                        <circle cx={"190"} cy={"90"} r={"1"} />
                        <circle cx={"190"} cy={"110"} r={"1"} />
                        <circle cx={"190"} cy={"130"} r={"1"} />
                        <circle cx={"190"} cy={"150"} r={"1"} />
                        <circle cx={"190"} cy={"170"} r={"1"} />
                        <circle cx={"190"} cy={"190"} r={"1"} />
                        <circle cx={"190"} cy={"210"} r={"1"} />
                        <circle cx={"190"} cy={"230"} r={"1"} />
                        <circle cx={"190"} cy={"250"} r={"1"} />
                        <circle cx={"190"} cy={"270"} r={"1"} />
                        <circle cx={"190"} cy={"290"} r={"1"} />
                        <circle cx={"210"} cy={"10"} r={"1"} />
                        <circle cx={"210"} cy={"30"} r={"1"} />
                        <circle cx={"210"} cy={"50"} r={"1"} />
                        <circle cx={"210"} cy={"70"} r={"1"} />
                        <circle cx={"210"} cy={"90"} r={"1"} />
                        <circle cx={"210"} cy={"110"} r={"1"} />
                        <circle cx={"210"} cy={"130"} r={"1"} />
                        <circle cx={"210"} cy={"150"} r={"1"} />
                        <circle cx={"210"} cy={"170"} r={"1"} />
                        <circle cx={"210"} cy={"190"} r={"1"} />
                        <circle cx={"210"} cy={"210"} r={"1"} />
                        <circle cx={"210"} cy={"230"} r={"1"} />
                        <circle cx={"210"} cy={"250"} r={"1"} />
                        <circle cx={"210"} cy={"270"} r={"1"} />
                        <circle cx={"210"} cy={"290"} r={"1"} />
                        <circle cx={"230"} cy={"10"} r={"1"} />
                        <circle cx={"230"} cy={"30"} r={"1"} />
                        <circle cx={"230"} cy={"50"} r={"1"} />
                        <circle cx={"230"} cy={"70"} r={"1"} />
                        <circle cx={"230"} cy={"90"} r={"1"} />
                        <circle cx={"230"} cy={"110"} r={"1"} />
                        <circle cx={"230"} cy={"130"} r={"1"} />
                        <circle cx={"230"} cy={"150"} r={"1"} />
                        <circle cx={"230"} cy={"170"} r={"1"} />
                        <circle cx={"230"} cy={"190"} r={"1"} />
                        <circle cx={"230"} cy={"210"} r={"1"} />
                        <circle cx={"230"} cy={"230"} r={"1"} />
                        <circle cx={"230"} cy={"250"} r={"1"} />
                        <circle cx={"230"} cy={"270"} r={"1"} />
                        <circle cx={"230"} cy={"290"} r={"1"} />
                        <circle cx={"250"} cy={"10"} r={"1"} />
                        <circle cx={"250"} cy={"30"} r={"1"} />
                        <circle cx={"250"} cy={"50"} r={"1"} />
                        <circle cx={"250"} cy={"70"} r={"1"} />
                        <circle cx={"250"} cy={"90"} r={"1"} />
                        <circle cx={"250"} cy={"110"} r={"1"} />
                        <circle cx={"250"} cy={"130"} r={"1"} />
                        <circle cx={"250"} cy={"150"} r={"1"} />
                        <circle cx={"250"} cy={"170"} r={"1"} />
                        <circle cx={"250"} cy={"190"} r={"1"} />
                        <circle cx={"250"} cy={"210"} r={"1"} />
                        <circle cx={"250"} cy={"230"} r={"1"} />
                        <circle cx={"250"} cy={"250"} r={"1"} />
                        <circle cx={"250"} cy={"270"} r={"1"} />
                        <circle cx={"250"} cy={"290"} r={"1"} />
                        <circle cx={"270"} cy={"10"} r={"1"} />
                        <circle cx={"270"} cy={"30"} r={"1"} />
                        <circle cx={"270"} cy={"50"} r={"1"} />
                        <circle cx={"270"} cy={"70"} r={"1"} />
                        <circle cx={"270"} cy={"90"} r={"1"} />
                        <circle cx={"270"} cy={"110"} r={"1"} />
                        <circle cx={"270"} cy={"130"} r={"1"} />
                        <circle cx={"270"} cy={"150"} r={"1"} />
                        <circle cx={"270"} cy={"170"} r={"1"} />
                        <circle cx={"270"} cy={"190"} r={"1"} />
                        <circle cx={"270"} cy={"210"} r={"1"} />
                        <circle cx={"270"} cy={"230"} r={"1"} />
                        <circle cx={"270"} cy={"250"} r={"1"} />
                        <circle cx={"270"} cy={"270"} r={"1"} />
                        <circle cx={"270"} cy={"290"} r={"1"} />
                        <circle cx={"290"} cy={"10"} r={"1"} />
                        <circle cx={"290"} cy={"30"} r={"1"} />
                        <circle cx={"290"} cy={"50"} r={"1"} />
                        <circle cx={"290"} cy={"70"} r={"1"} />
                        <circle cx={"290"} cy={"90"} r={"1"} />
                        <circle cx={"290"} cy={"110"} r={"1"} />
                        <circle cx={"290"} cy={"130"} r={"1"} />
                        <circle cx={"290"} cy={"150"} r={"1"} />
                        <circle cx={"290"} cy={"170"} r={"1"} />
                        <circle cx={"290"} cy={"190"} r={"1"} />
                        <circle cx={"290"} cy={"210"} r={"1"} />
                        <circle cx={"290"} cy={"230"} r={"1"} />
                        <circle cx={"290"} cy={"250"} r={"1"} />
                        <circle cx={"290"} cy={"270"} r={"1"} />
                        <circle cx={"290"} cy={"290"} r={"1"} />
                        <circle cx={"310"} cy={"10"} r={"1"} />
                        <circle cx={"310"} cy={"30"} r={"1"} />
                        <circle cx={"310"} cy={"50"} r={"1"} />
                        <circle cx={"310"} cy={"70"} r={"1"} />
                        <circle cx={"310"} cy={"90"} r={"1"} />
                        <circle cx={"310"} cy={"110"} r={"1"} />
                        <circle cx={"310"} cy={"130"} r={"1"} />
                        <circle cx={"310"} cy={"150"} r={"1"} />
                        <circle cx={"310"} cy={"170"} r={"1"} />
                        <circle cx={"310"} cy={"190"} r={"1"} />
                        <circle cx={"310"} cy={"210"} r={"1"} />
                        <circle cx={"310"} cy={"230"} r={"1"} />
                        <circle cx={"310"} cy={"250"} r={"1"} />
                        <circle cx={"310"} cy={"270"} r={"1"} />
                        <circle cx={"310"} cy={"290"} r={"1"} />
                        <circle cx={"330"} cy={"10"} r={"1"} />
                        <circle cx={"330"} cy={"30"} r={"1"} />
                        <circle cx={"330"} cy={"50"} r={"1"} />
                        <circle cx={"330"} cy={"70"} r={"1"} />
                        <circle cx={"330"} cy={"90"} r={"1"} />
                        <circle cx={"330"} cy={"110"} r={"1"} />
                        <circle cx={"330"} cy={"130"} r={"1"} />
                        <circle cx={"330"} cy={"150"} r={"1"} />
                        <circle cx={"330"} cy={"170"} r={"1"} />
                        <circle cx={"330"} cy={"190"} r={"1"} />
                        <circle cx={"330"} cy={"210"} r={"1"} />
                        <circle cx={"330"} cy={"230"} r={"1"} />
                        <circle cx={"330"} cy={"250"} r={"1"} />
                        <circle cx={"330"} cy={"270"} r={"1"} />
                        <circle cx={"330"} cy={"290"} r={"1"} />
                        <circle cx={"350"} cy={"10"} r={"1"} />
                        <circle cx={"350"} cy={"30"} r={"1"} />
                        <circle cx={"350"} cy={"50"} r={"1"} />
                        <circle cx={"350"} cy={"70"} r={"1"} />
                        <circle cx={"350"} cy={"90"} r={"1"} />
                        <circle cx={"350"} cy={"110"} r={"1"} />
                        <circle cx={"350"} cy={"130"} r={"1"} />
                        <circle cx={"350"} cy={"150"} r={"1"} />
                        <circle cx={"350"} cy={"170"} r={"1"} />
                        <circle cx={"350"} cy={"190"} r={"1"} />
                        <circle cx={"350"} cy={"210"} r={"1"} />
                        <circle cx={"350"} cy={"230"} r={"1"} />
                        <circle cx={"350"} cy={"250"} r={"1"} />
                        <circle cx={"350"} cy={"270"} r={"1"} />
                        <circle cx={"350"} cy={"290"} r={"1"} />
                        <circle cx={"370"} cy={"10"} r={"1"} />
                        <circle cx={"370"} cy={"30"} r={"1"} />
                        <circle cx={"370"} cy={"50"} r={"1"} />
                        <circle cx={"370"} cy={"70"} r={"1"} />
                        <circle cx={"370"} cy={"90"} r={"1"} />
                        <circle cx={"370"} cy={"110"} r={"1"} />
                        <circle cx={"370"} cy={"130"} r={"1"} />
                        <circle cx={"370"} cy={"150"} r={"1"} />
                        <circle cx={"370"} cy={"170"} r={"1"} />
                        <circle cx={"370"} cy={"190"} r={"1"} />
                        <circle cx={"370"} cy={"210"} r={"1"} />
                        <circle cx={"370"} cy={"230"} r={"1"} />
                        <circle cx={"370"} cy={"250"} r={"1"} />
                        <circle cx={"370"} cy={"270"} r={"1"} />
                        <circle cx={"370"} cy={"290"} r={"1"} />
                        <circle cx={"390"} cy={"10"} r={"1"} />
                        <circle cx={"390"} cy={"30"} r={"1"} />
                        <circle cx={"390"} cy={"50"} r={"1"} />
                        <circle cx={"390"} cy={"70"} r={"1"} />
                        <circle cx={"390"} cy={"90"} r={"1"} />
                        <circle cx={"390"} cy={"110"} r={"1"} />
                        <circle cx={"390"} cy={"130"} r={"1"} />
                        <circle cx={"390"} cy={"150"} r={"1"} />
                        <circle cx={"390"} cy={"170"} r={"1"} />
                        <circle cx={"390"} cy={"190"} r={"1"} />
                        <circle cx={"390"} cy={"210"} r={"1"} />
                        <circle cx={"390"} cy={"230"} r={"1"} />
                        <circle cx={"390"} cy={"250"} r={"1"} />
                        <circle cx={"390"} cy={"270"} r={"1"} />
                        <circle cx={"390"} cy={"290"} r={"1"} />
                      </g>
                      <g fill={"none"} stroke={"#FFFFFF"} strokeLinejoin={"round"}>
                        <path d={"M200.0 104.0L243.7 135.8L227.0 187.2L173.0 187.2L156.3 135.8Z"} strokeWidth={"6"} opacity={"1"}>
                          <animateTransform attributeName={"transform"} type={"rotate"} from={"0 200 150"} to={"360 200 150"} dur={"30s"} repeatCount={"indefinite"} />
                        </path>
                        <path d={"M200.0 68.0L278.0 124.7L248.2 216.3L151.8 216.3L122.0 124.7Z"} strokeWidth={"1.4"} opacity={"0.75"}>
                          <animateTransform attributeName={"transform"} type={"rotate"} from={"360 200 150"} to={"0 200 150"} dur={"42s"} repeatCount={"indefinite"} />
                        </path>
                        <path d={"M200.0 32.0L312.2 113.5L269.4 245.5L130.6 245.5L87.8 113.5Z"} strokeWidth={"1.4"} opacity={"0.5"}>
                          <animateTransform attributeName={"transform"} type={"rotate"} from={"0 200 150"} to={"360 200 150"} dur={"54s"} repeatCount={"indefinite"} />
                        </path>
                        <path d={"M200.0 -4.0L346.5 102.4L290.5 274.6L109.5 274.6L53.5 102.4Z"} strokeWidth={"1.4"} opacity={"0.3"}>
                          <animateTransform attributeName={"transform"} type={"rotate"} from={"360 200 150"} to={"0 200 150"} dur={"66s"} repeatCount={"indefinite"} />
                        </path>
                      </g>
                      <circle cx={"200"} cy={"150"} r={"4"} fill={"#FFFFFF"} />
                    </svg>
                    {"\n          "}
                    <span style={{ position: "absolute", left: "14px", bottom: "14px", height: "44px", padding: "0 12px", display: "flex", alignItems: "center", background: "#FFFFFF", border: "1px solid #0B0E13" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <img src={"/assets/maxxi_logo.png"} alt={""} style={{ height: "26px", width: "26px", borderRadius: "4px" }} />
                        <span style={{ fontSize: "15px", fontWeight: "600", color: "#0B0E13" }}>
                          {"Maxxi"}
                        </span>
                      </span>
                    </span>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "10px", flex: "1" }}>
                    {"\n          "}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#3A3F46" }}>
                      <span>
                        {"Set 2025 - Ago - 2026"}
                      </span>
                    </div>
                    {"\n          "}
                    <h3 style={{ margin: "0", fontSize: "clamp(22px,1.9vw,26px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.1" }}>
                      {"Maxxi Data Informática"}
                    </h3>
                    {"\n          "}
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.6", color: "#5A5F66" }}>
                      {"CloudOps · Data & AI · Clean Architecture"}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </article>
                {"\n      "}
                <article className={"dh17"} data-reveal={"fade"} data-delay={"300"} style={{ display: "flex", flexDirection: "column", border: "1px solid #0B0E13", background: "#EFEEE9", minWidth: "0", transition: "border-color .25s" }}>
                  {"\n        "}
                  <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", borderBottom: "1px solid #0B0E13" }}>
                    <svg viewBox={"0 0 400 300"} preserveAspectRatio={"xMidYMid slice"} aria-hidden={"true"} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", background: "#00995D" }}>
                      <g stroke={"#FFFFFF"} strokeWidth={"1.4"} opacity={"0.22"}>
                        <path d={"M35 30h10M40 25v10"} />
                        <path d={"M35 90h10M40 85v10"} />
                        <path d={"M35 150h10M40 145v10"} />
                        <path d={"M35 210h10M40 205v10"} />
                        <path d={"M35 270h10M40 265v10"} />
                        <path d={"M95 30h10M100 25v10"} />
                        <path d={"M95 90h10M100 85v10"} />
                        <path d={"M95 150h10M100 145v10"} />
                        <path d={"M95 210h10M100 205v10"} />
                        <path d={"M95 270h10M100 265v10"} />
                        <path d={"M155 30h10M160 25v10"} />
                        <path d={"M155 90h10M160 85v10"} />
                        <path d={"M155 150h10M160 145v10"} />
                        <path d={"M155 210h10M160 205v10"} />
                        <path d={"M155 270h10M160 265v10"} />
                        <path d={"M215 30h10M220 25v10"} />
                        <path d={"M215 90h10M220 85v10"} />
                        <path d={"M215 150h10M220 145v10"} />
                        <path d={"M215 210h10M220 205v10"} />
                        <path d={"M215 270h10M220 265v10"} />
                        <path d={"M275 30h10M280 25v10"} />
                        <path d={"M275 90h10M280 85v10"} />
                        <path d={"M275 150h10M280 145v10"} />
                        <path d={"M275 210h10M280 205v10"} />
                        <path d={"M275 270h10M280 265v10"} />
                        <path d={"M335 30h10M340 25v10"} />
                        <path d={"M335 90h10M340 85v10"} />
                        <path d={"M335 150h10M340 145v10"} />
                        <path d={"M335 210h10M340 205v10"} />
                        <path d={"M335 270h10M340 265v10"} />
                      </g>
                      <path d={"M-10 170 L70 170 L85 170 L95 150 L105 170 L125 170 L135 190 L150 80 L165 215 L178 170 L210 170 L225 155 L245 170 L300 170 L315 150 L325 170 L345 170 L355 190 L370 80 L385 215 L398 170 L420 170"} fill={"none"} stroke={"#0A6B42"} strokeWidth={"2"} opacity={"0.6"} />
                      <path d={"M-10 170 L70 170 L85 170 L95 150 L105 170 L125 170 L135 190 L150 80 L165 215 L178 170 L210 170 L225 155 L245 170 L300 170 L315 150 L325 170 L345 170 L355 190 L370 80 L385 215 L398 170 L420 170"} fill={"none"} stroke={"#FFFFFF"} strokeWidth={"3"} strokeLinecap={"round"} strokeLinejoin={"round"} strokeDasharray={"180 900"}>
                        <animate attributeName={"stroke-dashoffset"} from={"180"} to={"-900"} dur={"3.2s"} repeatCount={"indefinite"} />
                      </path>
                    </svg>
                    {"\n          "}
                    <span style={{ position: "absolute", left: "14px", bottom: "14px", height: "44px", padding: "0 12px", display: "flex", alignItems: "center", background: "#FFFFFF", border: "1px solid #0B0E13" }}>
                      <img src={"/assets/unimed_logo.png"} alt={"Unimed"} style={{ height: "24px", width: "auto" }} />
                    </span>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: "10px", flex: "1" }}>
                    {"\n          "}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.04em", color: "#3A3F46" }}>
                      <span>
                        {"Ago 2022 – Mar 2024"}
                      </span>
                    </div>
                    {"\n          "}
                    <h3 style={{ margin: "0", fontSize: "clamp(22px,1.9vw,26px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.1" }}>
                      {"Unimed Vale do Caí"}
                    </h3>
                    {"\n          "}
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.6", color: "#5A5F66" }}>
                      {"Sistemas de Gestão Hospitalar"}
                    </span>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </article>
                {"\n    "}
              </div>
              {"\n  "}
            </div>
            {"\n  "}
          </div>
        </section>
        <section id={"formacao"} data-screen-label={"Formação"} style={{ background: "#EFEEE9", color: "#0B0E13", borderTop: "1px solid #0B0E13" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "clamp(72px,9vw,128px) clamp(20px,3vw,40px)", display: "flex", flexDirection: "column", gap: "clamp(32px,4vw,48px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", borderBottom: "1px solid #0B0E13", paddingBottom: "24px" }}>
              {"\n      "}
              <div style={{ overflow: "hidden" }}>
                <h2 data-reveal={"line"} style={{ margin: "0", paddingBottom: "0.22em", fontSize: "clamp(36px,5.4vw,80px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "500" }}>
                  {"Courses & Certifications"}
                </h2>
              </div>
              {"\n      "}
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A5F66" }}>
                {"(03) Formação e cursos"}
              </span>
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {"\n      "}
              {((v?.filters) || []).map((L_f: any, $index: number) => (
                <React.Fragment key={$index}>
                  {"\n        "}
                  <button onClick={L_f?.pick} style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "44px", padding: "0 18px", borderRadius: "4px", border: "1px solid #0B0E13", background: (`${L_f?.bg ?? ""}` as any), color: (`${L_f?.fg ?? ""}` as any), fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", transition: "background .2s,color .2s" }}>
                    {H(L_f?.label)}
                    <span style={{ opacity: "0.6" }}>
                      {H(L_f?.count)}
                    </span>
                  </button>
                  {"\n      "}
                </React.Fragment>
              ))}
              {"\n    "}
            </div>
            {"\n    "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,300px),1fr))", gap: "16px" }}>
              {"\n      "}
              {((v?.courses) || []).map((L_c: any, $index: number) => (
                <React.Fragment key={$index}>
                  {"\n        "}
                  <article className={"dh18"} data-liquid={""} style={{ position: "relative", isolation: "isolate", overflow: "hidden", display: "flex", flexDirection: "column", gap: "16px", padding: "20px 20px 22px", border: "1px solid #0B0E13", background: "#EFEEE9", minWidth: "0", transition: "border-color .25s" }}>
                    {"\n          "}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {"\n            "}
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 9px", border: "1px solid #0B0E13", background: (`${L_c?.tagBg ?? ""}` as any), color: (`${L_c?.tagFg ?? ""}` as any) }}>
                        {H(L_c?.type)}
                      </span>
                      {"\n            "}
                      <span style={{ color: "#5A5F66" }}>
                        {H(L_c?.year)}
                      </span>
                      {"\n          "}
                    </div>
                    {"\n          "}
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {"\n            "}
                      <h3 style={{ margin: "0", fontSize: "clamp(20px,1.7vw,24px)", fontWeight: "500", letterSpacing: "-0.025em", lineHeight: "1.12", textWrap: "balance" }}>
                        {H(L_c?.title)}
                      </h3>
                      {"\n            "}
                      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", lineHeight: "1.6", color: "#5A5F66" }}>
                        {H(L_c?.meta)}
                      </span>
                      {"\n          "}
                    </div>
                    {"\n          "}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", color: "#3A3F46" }}>
                      {"\n            "}
                      <span style={{ letterSpacing: "0.06em", textTransform: "uppercase", color: "#5A5F66" }}>
                        {"Level:"}
                      </span>
                      {"\n            "}
                      <span style={{ display: "flex", gap: "4px" }}>
                        {((L_c?.dots) || []).map((L_d: any, $index: number) => (
                          <React.Fragment key={$index}>
                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: (`${L_d?.bg ?? ""}` as any) }} />
                          </React.Fragment>
                        ))}
                      </span>
                      {"\n            "}
                      <span>
                        {H(L_c?.level)}
                      </span>
                      {"\n          "}
                    </div>
                    {"\n          "}
                    <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {"\n            "}
                      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#5A5F66" }}>
                        {"Skills:"}
                      </span>
                      {"\n            "}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {"\n              "}
                        {((L_c?.skills) || []).map((L_s: any, $index: number) => (
                          <React.Fragment key={$index}>
                            <span style={{ padding: "4px 9px", border: "1px solid #C4C2BA", fontSize: "13px", lineHeight: "1.4", color: "#0B0E13" }}>
                              {H(L_s)}
                            </span>
                          </React.Fragment>
                        ))}
                        {"\n            "}
                      </div>
                      {"\n          "}
                    </div>
                    {"\n        "}
                  </article>
                  {"\n      "}
                </React.Fragment>
              ))}
              {"\n    "}
            </div>
            {"\n    "}
            {v?.hasMore ? (
              <>
                {"\n      "}
                <button className={"dh19"} onClick={v?.toggleAll} style={{ alignSelf: "center", display: "inline-flex", alignItems: "center", gap: "12px", height: "48px", padding: "0 22px", borderRadius: "4px", border: "1px solid #0B0E13", background: "transparent", color: "#0B0E13", fontFamily: "'IBM Plex Mono',monospace", fontSize: "13px", fontWeight: "500", letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", transition: "background .2s,color .2s" }}>
                  {H(v?.moreLabel)}
                </button>
                {"\n    "}
              </>
            ) : null}
            {"\n  "}
          </div>
        </section>
        <footer id={"contato"} data-screen-label={"Contato"} style={{ background: "#0B0E13", color: "#ECEBE6" }}>
          {"\n  "}
          <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "clamp(80px,10vw,144px) clamp(20px,3vw,40px) 32px", display: "flex", flexDirection: "column", gap: "clamp(56px,7vw,104px)" }}>
            {"\n    "}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {"\n      "}
              <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#9AA1AB" }}>
                {"(04) Contato"}
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
                <a className={"dh20"} href={"mailto:contato@devsehn.com"} style={{ flex: "1 1 360px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingBottom: "12px", borderBottom: "2px solid #ECEBE6", fontSize: "clamp(24px,3vw,44px)", fontWeight: "500", letterSpacing: "-0.03em", color: "#ECEBE6", transition: "color .2s,border-color .2s" }}>
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
                <a className={"dh21"} href={"#"} style={{ color: "#ECEBE6" }}>
                  {"LinkedIn ↗"}
                </a>
                {"\n        "}
                <a className={"dh22"} href={"https://github.com/DerikSehn"} target={"_blank"} rel={"noopener"} style={{ color: "#ECEBE6" }}>
                  {"GitHub ↗"}
                </a>
                {"\n        "}
                <a className={"dh23"} href={"https://docs.google.com/document/d/1bCk5xYPFQ3WOpzAvrsFbf4y7sXdSpJFS/edit?usp=sharing&ouid=107891843000990713036&rtpof=true&sd=true"} target={"_blank"} rel={"noopener"} style={{ color: "#ECEBE6" }}>
                  {"CV ↓"}
                </a>
                {"\n        "}
                <a className={"dh24"} href={"#top"} style={{ color: "#9AA1AB" }}>
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
