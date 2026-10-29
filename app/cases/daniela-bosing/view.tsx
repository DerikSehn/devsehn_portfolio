'use client';
/* eslint-disable */
// Gerado a partir de "Daniela Bosing Case.dc.html". Estilos inline preservados 1:1 do design.
import React from 'react';
import { useDC } from '@/lib/dc';
import Logic from '@/lib/logic/daniela-bosing';

const CSS =
  "html{scroll-behavior:smooth}\nbody{margin:0;background:#0B0E13;font-family:'Schibsted Grotesk',system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:inherit;text-decoration:none}\na:hover{color:#3D6BFF}\n*{box-sizing:border-box}\n::selection{background:#3D6BFF;color:#FFFFFF}\n.dh1:hover{color:#FFFFFF !important}\n.dh2:hover{color:#FFFFFF !important}\n.dh3:hover{color:#FFFFFF !important}\n.dh4:hover{color:#FFFFFF !important}\n.dh5:hover{color:#ECEBE6 !important}\n.dh6:hover{background:#0B0E13 !important;color:#ECEBE6 !important}\n.dh7:hover{background:#0B0E13 !important;color:#ECEBE6 !important}\n.dh8:hover{background:#0B0E13 !important;color:#ECEBE6 !important}\n.dh9:hover{background:#0B0E13 !important;color:#ECEBE6 !important}\n.dh10:hover{background:#0B0E13 !important;color:#ECEBE6 !important}\n.dh11:hover{background:#0B0E13 !important;color:#ECEBE6 !important}\n.dh12:hover{background:#0B0E13 !important;color:#ECEBE6 !important}\n.dh13:hover{background:#0B0E13 !important;color:#ECEBE6 !important}\n.dh14:hover{color:#3D6BFF !important}\n.dh15:hover{color:#3D6BFF !important;border-color:#3D6BFF !important}\n.dh16:hover{color:#3D6BFF !important}\n.dh17:hover{color:#3D6BFF !important}\n.dh18:hover{color:#3D6BFF !important}\n.dh19:hover{color:#ECEBE6 !important}";
const DEFAULTS: Record<string, unknown> = { motion: true };

export default function DanielaBosingView(props: Record<string, unknown>) {
  const v: any = useDC(Logic, { ...DEFAULTS, ...props });
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />{' '}
      <div style={{ background: '#0B0E13', color: '#ECEBE6', minHeight: '100vh', overflowX: 'hidden' }}>
        {' '}
        <header
          style={{
            position: 'sticky',
            top: '0',
            zIndex: '50',
            background: '#0B0E13',
            borderBottom: '1px solid #22272F',
          }}
        >
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              paddingLeft: 'clamp(20px,3vw,40px)',
              paddingRight: 'clamp(20px,3vw,40px)',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            {' '}
            <a href={'/'} style={{ fontSize: '20px', letterSpacing: '-0.02em', color: '#ECEBE6' }}>
              <span style={{ fontWeight: '700' }}>{'Dev'}</span>
              <span style={{ fontWeight: '400' }}>{'Sehn'}</span>
            </a>{' '}
            <nav
              style={{
                display: 'flex',
                gap: 'clamp(16px,2.4vw,36px)',
                flexWrap: 'wrap',
                fontFamily: "'IBM Plex Mono',monospace",
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {' '}
              <a className='dh1' href={'/#trabalhos'} style={{ display: 'flex', gap: '8px', color: '#C9CDD3' }}>
                <span style={{ color: '#6E7681' }}>{'01'}</span>
                {'Trabalhos'}
              </a>{' '}
              <a className='dh2' href={'/#sobre'} style={{ display: 'flex', gap: '8px', color: '#C9CDD3' }}>
                <span style={{ color: '#6E7681' }}>{'02'}</span>
                {'Sobre'}
              </a>{' '}
              <a className='dh3' href={'#contato'} style={{ display: 'flex', gap: '8px', color: '#C9CDD3' }}>
                <span style={{ color: '#6E7681' }}>{'03'}</span>
                {'Contato'}
              </a>{' '}
              <a className='dh4' href={'#'} style={{ display: 'flex', gap: '8px', color: '#C9CDD3' }}>
                <span style={{ color: '#6E7681' }}>{'↓'}</span>
                {'CV'}
              </a>{' '}
            </nav>{' '}
            <div
              style={{
                display: 'flex',
                border: '1px solid #2C323B',
                borderRadius: '4px',
                overflow: 'hidden',
                fontFamily: "'IBM Plex Mono',monospace",
                fontSize: '12px',
                fontWeight: '500',
              }}
            >
              {' '}
              <button
                onClick={v?.setPT}
                style={{
                  background: v?.ptBg,
                  color: v?.ptColor,
                  border: 'none',
                  cursor: 'pointer',
                  font: 'inherit',
                  padding: '6px 10px',
                }}
              >
                {'PT'}
              </button>{' '}
              <button
                onClick={v?.setEN}
                style={{
                  background: v?.enBg,
                  color: v?.enColor,
                  border: 'none',
                  cursor: 'pointer',
                  font: 'inherit',
                  padding: '6px 10px',
                }}
              >
                {'EN'}
              </button>{' '}
            </div>{' '}
          </div>{' '}
          <span
            data-progress={''}
            style={{
              position: 'absolute',
              left: '0',
              bottom: '-1px',
              width: '100%',
              height: '1px',
              background: '#3D6BFF',
              transformOrigin: '0 50%',
              transform: 'scaleX(0)',
            }}
          />{' '}
        </header>{' '}
        <section id={'top'} data-screen-label={'Case hero'} style={{ background: '#0B0E13' }}>
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              paddingLeft: 'clamp(20px,3vw,40px)',
              paddingRight: 'clamp(20px,3vw,40px)',
              paddingTop: 'clamp(40px,6vw,80px)',
              paddingBottom: 'clamp(40px,5vw,64px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(36px,5vw,64px)',
            }}
          >
            {' '}
            <div
              data-reveal={'fade'}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap',
                borderBottom: '1px solid #22272F',
                paddingBottom: '16px',
                fontFamily: "'IBM Plex Mono',monospace",
                fontSize: '12px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#9AA1AB',
              }}
            >
              {' '}
              <a className='dh5' href={'/#trabalhos'} style={{ color: '#9AA1AB' }}>
                {'← Trabalhos'}
              </a>{' '}
              <span>{'Case 04 · Gastronomia para eventos'}</span>{' '}
            </div>{' '}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2vw,28px)', overflow: 'hidden' }}>
              {' '}
              <img
                data-reveal={'fade'}
                src={'/assets/danibosing/logo_white.png'}
                alt={''}
                style={{ height: 'clamp(56px,7.4vw,112px)', width: 'auto' }}
              />{' '}
              <h1
                data-reveal={'line'}
                data-delay={'80'}
                style={{
                  margin: '0',
                  padding: '0.06em 0 0.24em',
                  fontSize: 'clamp(44px,7.6vw,120px)',
                  lineHeight: '0.94',
                  letterSpacing: '-0.045em',
                  fontWeight: '500',
                }}
              >
                {'Daniela Bosing'}
              </h1>{' '}
            </div>{' '}
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '32px clamp(32px,5vw,96px)', alignItems: 'flex-start' }}
            >
              {' '}
              <p
                data-reveal={'fade'}
                data-delay={'200'}
                style={{
                  flex: '1.4 1 420px',
                  maxWidth: '720px',
                  margin: '0',
                  lineHeight: '1.6',
                  color: '#B4BAC2',
                  textWrap: 'pretty',
                  fontSize: 'clamp(18px,1.6vw,21px)',
                }}
              >
                {
                  'Site e sistema de gestão da Cheff Daniela Bosing, gastronomia para eventos no Rio Grande do Sul. O cliente monta o cardápio do evento no site, e a chef recebe o pedido em um painel com '
                }
                <span style={{ color: '#ECEBE6' }}>{'orçamento, margem de lucro, agenda e etapas de produção'}</span>
                {'.'}
              </p>{' '}
              <dl
                data-reveal={'fade'}
                data-delay={'320'}
                style={{
                  flex: '1 1 320px',
                  margin: '0',
                  display: 'grid',
                  gridTemplateColumns: 'auto minmax(0,1fr)',
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '13px',
                  borderTop: '1px solid #22272F',
                }}
              >
                {' '}
                <dt
                  style={{
                    padding: '12px 20px 12px 0',
                    borderBottom: '1px solid #22272F',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#6E7681',
                  }}
                >
                  {'Cliente'}
                </dt>
                <dd style={{ margin: '0', padding: '12px 0', borderBottom: '1px solid #22272F', color: '#ECEBE6' }}>
                  {'Cheff Daniela Bosing'}
                </dd>{' '}
                <dt
                  style={{
                    padding: '12px 20px 12px 0',
                    borderBottom: '1px solid #22272F',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#6E7681',
                  }}
                >
                  {'Papel'}
                </dt>
                <dd style={{ margin: '0', padding: '12px 0', borderBottom: '1px solid #22272F', color: '#ECEBE6' }}>
                  {'Desenvolvimento full-stack'}
                </dd>{' '}
                <dt
                  style={{
                    padding: '12px 20px 12px 0',
                    borderBottom: '1px solid #22272F',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#6E7681',
                  }}
                >
                  {'Entrega'}
                </dt>
                <dd style={{ margin: '0', padding: '12px 0', borderBottom: '1px solid #22272F', color: '#ECEBE6' }}>
                  {'Site, cardápio online e sistema de gestão'}
                </dd>{' '}
              </dl>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Vídeo'} style={{ background: '#0B0E13' }}>
          {' '}
          <div
            style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 clamp(20px,3vw,40px) clamp(64px,8vw,112px)' }}
          >
            {' '}
            <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {' '}
              <div
                data-reveal={'clip'}
                data-delay={'250'}
                style={{ position: 'relative', border: '1px solid #22272F', background: '#16130F' }}
              >
                {' '}
                <div style={{ position: 'relative', aspectRatio: v?.videoRatio, overflow: 'hidden' }}>
                  {' '}
                  <video
                    data-autoplay={''}
                    data-ratio={''}
                    src={'/assets/danibosing/site.mp4'}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload={'auto'}
                    aria-label={'Navegação pelo site da Cheff Daniela Bosing'}
                    style={{
                      position: 'absolute',
                      inset: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />{' '}
                </div>{' '}
                <span
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    top: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    top: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    bottom: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    bottom: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat',
                  }}
                />{' '}
              </div>{' '}
              <figcaption
                data-reveal={'fade'}
                data-delay={'300'}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  color: '#9AA1AB',
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>{'Fig. 01'}</span>
                <span style={{ textAlign: 'right' }}>{'Navegação pelo site, do início ao cardápio'}</span>
              </figcaption>{' '}
            </figure>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Contexto'} style={{ background: '#EFEEE9', color: '#0B0E13' }}>
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              paddingLeft: 'clamp(20px,3vw,40px)',
              paddingRight: 'clamp(20px,3vw,40px)',
              paddingTop: 'clamp(72px,9vw,128px)',
              paddingBottom: 'clamp(56px,7vw,96px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(40px,5vw,64px)',
            }}
          >
            {' '}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '24px',
                borderBottom: '1px solid #0B0E13',
                paddingBottom: '24px',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <h2
                  data-reveal={'line'}
                  style={{
                    margin: '0',
                    paddingBottom: '0.22em',
                    fontSize: 'clamp(36px,5.4vw,80px)',
                    lineHeight: '0.98',
                    letterSpacing: '-0.04em',
                    fontWeight: '500',
                    textWrap: 'balance',
                    maxWidth: '16ch',
                  }}
                >
                  {'Do cardápio escolhido ao evento servido'}
                </h2>
              </div>
              <span
                data-reveal={'fade'}
                data-delay={'200'}
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#5A5F66',
                }}
              >
                {'(01) Contexto'}
              </span>
            </div>{' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px clamp(32px,5vw,96px)' }}>
              {' '}
              <p
                data-reveal={'fade'}
                style={{
                  flex: '1 1 360px',
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: '#3A3F46',
                  textWrap: 'pretty',
                }}
              >
                {
                  'A Cheff Daniela Bosing atende eventos de todos os tipos e tamanhos, do planejamento do cardápio à execução no dia, com opções para diferentes dietas e restrições alimentares.'
                }
              </p>{' '}
              <p
                data-reveal={'fade'}
                data-delay={'120'}
                style={{
                  flex: '1 1 360px',
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: '#3A3F46',
                  textWrap: 'pretty',
                }}
              >
                {
                  'Os pedidos chegavam por conversa, e cada orçamento era montado à mão. O site passou a receber o cardápio já escolhido pelo cliente, e o sistema transforma esse pedido em orçamento, agenda e produção.'
                }
              </p>{' '}
            </div>{' '}
            <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '0' }}>
              <div
                data-reveal={'clip'}
                style={{ position: 'relative', border: '1px solid #0B0E13', background: '#FFFFFF' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '34px',
                      flex: 'none',
                      background: '#E7E9EF',
                      borderBottom: '1px solid #D5D9E2',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0 12px',
                      fontFamily: "'Schibsted Grotesk',system-ui,sans-serif",
                    }}
                  >
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FEBC2E' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28C840' }} />
                    <span
                      style={{
                        marginLeft: '14px',
                        maxWidth: '360px',
                        flex: '1',
                        height: '22px',
                        borderRadius: '5px',
                        background: '#FFFFFF',
                        fontSize: '12px',
                        color: '#5D6B85',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 10px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                      }}
                    >
                      {'cheffdanielabosing.com.br'}
                    </span>
                  </div>
                  <img
                    src={'/assets/danibosing/home.png'}
                    alt={'Página inicial do site da Cheff Daniela Bosing'}
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                  />
                </div>
                <span
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    top: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    top: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    bottom: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    bottom: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
              </div>
              <figcaption
                data-reveal={'fade'}
                data-delay={'300'}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  color: '#5A5F66',
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>{'Fig. 02'}</span>
                <span style={{ textAlign: 'right' }}>{'Página inicial, com a chamada para montar o cardápio'}</span>
              </figcaption>
            </figure>{' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
                borderTop: '1px solid #0B0E13',
              }}
            >
              {' '}
              <div
                data-reveal={'fade'}
                data-delay={'0'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '28px 24px 28px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '13px', color: '#5A5F66' }}>
                  {'01'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1',
                  }}
                >
                  {'Serviço completo'}
                </span>
                <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#3A3F46', textWrap: 'pretty' }}>
                  {'Do planejamento do cardápio à execução no evento, com toda a logística e o preparo.'}
                </span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'100'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '28px 24px 28px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '13px', color: '#5A5F66' }}>
                  {'02'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1',
                  }}
                >
                  {'Cardápios personalizados'}
                </span>
                <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#3A3F46', textWrap: 'pretty' }}>
                  {'Montados de acordo com o tema, as preferências dos convidados e restrições alimentares.'}
                </span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'200'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '28px 24px 28px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '13px', color: '#5A5F66' }}>
                  {'03'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1',
                  }}
                >
                  {'Atendimento especial'}
                </span>
                <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#3A3F46', textWrap: 'pretty' }}>
                  {'Equipe disponível para dúvidas, sugestões e ajustes antes e durante o evento.'}
                </span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'300'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '28px 24px 28px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '13px', color: '#5A5F66' }}>
                  {'04'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1',
                  }}
                >
                  {'Pratos e bebidas'}
                </span>
                <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#3A3F46', textWrap: 'pretty' }}>
                  {'De finger food para coquetéis a menus completos para jantares.'}
                </span>
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Cardápio'} style={{ background: '#EFEEE9', color: '#0B0E13' }}>
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              paddingLeft: 'clamp(20px,3vw,40px)',
              paddingRight: 'clamp(20px,3vw,40px)',
              paddingTop: 'clamp(40px,5vw,64px)',
              paddingBottom: 'clamp(72px,9vw,128px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(32px,4vw,48px)',
            }}
          >
            {' '}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '24px',
                borderBottom: '1px solid #0B0E13',
                paddingBottom: '24px',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <h2
                  data-reveal={'line'}
                  style={{
                    margin: '0',
                    paddingBottom: '0.22em',
                    fontSize: 'clamp(36px,5.4vw,80px)',
                    lineHeight: '0.98',
                    letterSpacing: '-0.04em',
                    fontWeight: '500',
                    textWrap: 'balance',
                    maxWidth: '16ch',
                  }}
                >
                  {'Um mostruário completo, organizado por categoria'}
                </h2>
              </div>
              <span
                data-reveal={'fade'}
                data-delay={'200'}
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#5A5F66',
                }}
              >
                {'(02) Cardápio online'}
              </span>
            </div>{' '}
            <p
              data-reveal={'fade'}
              style={{
                maxWidth: '760px',
                margin: '0',
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#3A3F46',
                textWrap: 'pretty',
              }}
            >
              {
                'O cardápio reúne pratos agrupados por categoria, cada um com foto, descrição e preço. O cliente escolhe os itens e envia o pedido para orçamento, que chega direto ao painel da chef.'
              }
            </p>{' '}
            <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {' '}
              <div
                data-reveal={'clip'}
                style={{ position: 'relative', border: '1px solid #0B0E13', background: '#16130F' }}
              >
                <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <div data-fit={'1600'} style={{ position: 'absolute', inset: '0', overflow: 'hidden' }}>
                    <div
                      style={{
                        position: 'relative',
                        width: '1600px',
                        height: '900px',
                        transformOrigin: '0 0',
                        background: '#16130F',
                        backgroundImage:
                          'radial-gradient(ellipse 60% 55% at 50% 45%,rgba(255,166,43,0.10),rgba(255,166,43,0) 70%)',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          left: '240px',
                          top: '50px',
                          width: '1120px',
                          height: '800px',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                          background: '#1A1A1A',
                          boxShadow: '0 40px 80px -30px rgba(0,0,0,0.7)',
                        }}
                      >
                        <div
                          style={{
                            height: '34px',
                            flex: 'none',
                            background: '#E7E9EF',
                            borderBottom: '1px solid #D5D9E2',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '0 12px',
                            fontFamily: "'Schibsted Grotesk',system-ui,sans-serif",
                          }}
                        >
                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57' }} />
                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FEBC2E' }} />
                          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28C840' }} />
                          <span
                            style={{
                              marginLeft: '14px',
                              maxWidth: '360px',
                              flex: '1',
                              height: '22px',
                              borderRadius: '5px',
                              background: '#FFFFFF',
                              fontSize: '12px',
                              color: '#5D6B85',
                              display: 'flex',
                              alignItems: 'center',
                              padding: '0 10px',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                            }}
                          >
                            {'cheffdanielabosing.com.br/cardapio'}
                          </span>
                        </div>
                        <div style={{ position: 'relative', flex: '1', overflow: 'hidden' }}>
                          <img
                            data-autoscroll={'9173'}
                            data-dur={'70000'}
                            src={'/assets/danibosing/menu.png'}
                            alt={'Cardápio completo do site, com pratos por categoria'}
                            style={{ display: 'block', width: '1120px', height: 'auto' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    top: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    top: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    bottom: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    bottom: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
              </div>{' '}
              <figcaption
                data-reveal={'fade'}
                data-delay={'300'}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  color: '#5A5F66',
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>{'Fig. 03'}</span>
                <span style={{ textAlign: 'right' }}>{'Cardápio completo, com rolagem automática'}</span>
              </figcaption>{' '}
            </figure>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Painel'} style={{ background: '#0B0E13', color: '#ECEBE6' }}>
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              paddingLeft: 'clamp(20px,3vw,40px)',
              paddingRight: 'clamp(20px,3vw,40px)',
              paddingTop: 'clamp(72px,9vw,128px)',
              paddingBottom: 'clamp(72px,9vw,128px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(40px,5vw,64px)',
            }}
          >
            {' '}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '24px',
                borderBottom: '1px solid #ECEBE6',
                paddingBottom: '24px',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <h2
                  data-reveal={'line'}
                  style={{
                    margin: '0',
                    paddingBottom: '0.22em',
                    fontSize: 'clamp(36px,5.4vw,80px)',
                    lineHeight: '0.98',
                    letterSpacing: '-0.04em',
                    fontWeight: '500',
                    textWrap: 'balance',
                    maxWidth: '16ch',
                  }}
                >
                  {'A operação inteira em um painel'}
                </h2>
              </div>
              <span
                data-reveal={'fade'}
                data-delay={'200'}
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#9AA1AB',
                }}
              >
                {'(03) Sistema de gestão'}
              </span>
            </div>{' '}
            <p
              data-reveal={'fade'}
              style={{
                maxWidth: '680px',
                margin: '0',
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#B4BAC2',
                textWrap: 'pretty',
              }}
            >
              {
                'A tela inicial mostra a receita dos últimos 30 dias, atalhos para compartilhar o cardápio, criar pedidos, agendar, ver o financeiro e os clientes, além do total de pedidos, dos eventos agendados e da atividade recente.'
              }
            </p>{' '}
            <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '0' }}>
              <div
                data-reveal={'clip'}
                style={{ position: 'relative', border: '1px solid #22272F', background: '#FFFFFF' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '34px',
                      flex: 'none',
                      background: '#E7E9EF',
                      borderBottom: '1px solid #D5D9E2',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0 12px',
                      fontFamily: "'Schibsted Grotesk',system-ui,sans-serif",
                    }}
                  >
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FEBC2E' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28C840' }} />
                    <span
                      style={{
                        marginLeft: '14px',
                        maxWidth: '360px',
                        flex: '1',
                        height: '22px',
                        borderRadius: '5px',
                        background: '#FFFFFF',
                        fontSize: '12px',
                        color: '#5D6B85',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 10px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                      }}
                    >
                      {'cheffdanielabosing.com.br/painel'}
                    </span>
                  </div>
                  <img
                    src={'/assets/danibosing/dashboard.png'}
                    alt={'Tela inicial do sistema com receita, atalhos e atividade recente'}
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                  />
                </div>
                <span
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    top: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    top: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    bottom: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    bottom: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#ECEBE6,#ECEBE6) center/1px 100% no-repeat,linear-gradient(#ECEBE6,#ECEBE6) center/100% 1px no-repeat',
                  }}
                />
              </div>
              <figcaption
                data-reveal={'fade'}
                data-delay={'300'}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  color: '#9AA1AB',
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>{'Fig. 04'}</span>
                <span style={{ textAlign: 'right' }}>{'Início do painel · dados de exemplo'}</span>
              </figcaption>
            </figure>{' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
                borderTop: '1px solid #ECEBE6',
              }}
            >
              {' '}
              <div
                data-reveal={'fade'}
                data-delay={'150'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '24px 20px 24px 0',
                  borderBottom: '1px solid #22272F',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    color: '#9AA1AB',
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FFA62B' }} />
                  {'01'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1',
                  }}
                >
                  {'Pendente'}
                </span>
                <span style={{ fontSize: '14px', color: '#9AA1AB' }}>{'Aguardando confirmação'}</span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'270'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '24px 20px 24px 0',
                  borderBottom: '1px solid #22272F',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    color: '#9AA1AB',
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ECEBE6' }} />
                  {'02'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1',
                  }}
                >
                  {'Confirmado'}
                </span>
                <span style={{ fontSize: '14px', color: '#9AA1AB' }}>{'Pedido confirmado'}</span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'390'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '24px 20px 24px 0',
                  borderBottom: '1px solid #22272F',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    color: '#9AA1AB',
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ECEBE6' }} />
                  {'03'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1',
                  }}
                >
                  {'Produção'}
                </span>
                <span style={{ fontSize: '14px', color: '#9AA1AB' }}>{'Sendo produzido'}</span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'510'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '24px 20px 24px 0',
                  borderBottom: '1px solid #22272F',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    color: '#9AA1AB',
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ECEBE6' }} />
                  {'04'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1',
                  }}
                >
                  {'Pronto'}
                </span>
                <span style={{ fontSize: '14px', color: '#9AA1AB' }}>{'Pronto para entrega'}</span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'630'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '24px 20px 24px 0',
                  borderBottom: '1px solid #22272F',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    color: '#9AA1AB',
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ECEBE6' }} />
                  {'05'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1',
                  }}
                >
                  {'Entregue'}
                </span>
                <span style={{ fontSize: '14px', color: '#9AA1AB' }}>{'Entregue ao cliente'}</span>
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Orçamento'} style={{ background: '#EFEEE9', color: '#0B0E13' }}>
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              paddingLeft: 'clamp(20px,3vw,40px)',
              paddingRight: 'clamp(20px,3vw,40px)',
              paddingTop: 'clamp(72px,9vw,128px)',
              paddingBottom: 'clamp(72px,9vw,128px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(32px,4vw,48px)',
            }}
          >
            {' '}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                gap: '24px',
                borderBottom: '1px solid #0B0E13',
                paddingBottom: '24px',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <h2
                  data-reveal={'line'}
                  style={{
                    margin: '0',
                    paddingBottom: '0.22em',
                    fontSize: 'clamp(36px,5.4vw,80px)',
                    lineHeight: '0.98',
                    letterSpacing: '-0.04em',
                    fontWeight: '500',
                    textWrap: 'balance',
                    maxWidth: '16ch',
                  }}
                >
                  {'O orçamento mostra o lucro antes de confirmar'}
                </h2>
              </div>
              <span
                data-reveal={'fade'}
                data-delay={'200'}
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#5A5F66',
                }}
              >
                {'(04) Orçamento'}
              </span>
            </div>{' '}
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '40px clamp(32px,5vw,80px)', alignItems: 'flex-start' }}
            >
              {' '}
              <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {' '}
                <p
                  data-reveal={'fade'}
                  style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#3A3F46', textWrap: 'pretty' }}
                >
                  {
                    'Cada pedido tem detalhes, orçamento, calendário, itens e histórico. No orçamento, a chef define preço total e custo do evento com ajustes rápidos. Os dois têm como mínimo a soma dos itens, e o sistema calcula lucro e margem na hora. O orçamento pode ser baixado ou enviado em PDF.'
                  }
                </p>{' '}
                <p
                  data-reveal={'fade'}
                  data-delay={'100'}
                  style={{
                    margin: '0',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    lineHeight: '1.6',
                    color: '#5A5F66',
                  }}
                >
                  {'Experimente: ajuste o preço e o custo ao lado.'}
                </p>{' '}
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'150'}
                style={{
                  flex: '1.3 1 420px',
                  minWidth: '0',
                  border: '1px solid #0B0E13',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {' '}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px 20px',
                    borderBottom: '1px solid #0B0E13',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono',monospace",
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#0B0E13',
                    }}
                  >
                    {'Pedido de exemplo'}
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '12px', color: '#5A5F66' }}>
                    {'Itens: R$ 75,00 · custo R$ 37,50'}
                  </span>
                </div>{' '}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))' }}>
                  {' '}
                  <div
                    style={{
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      borderBottom: '1px solid #CFCDC4',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#5A5F66',
                      }}
                    >
                      {'Preço total'}
                    </span>
                    <span
                      style={{
                        fontSize: 'clamp(36px,3.6vw,52px)',
                        fontWeight: '500',
                        letterSpacing: '-0.04em',
                        lineHeight: '1',
                      }}
                    >
                      {v?.priceFmt}
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      <button
                        className='dh6'
                        onClick={v?.pM50}
                        style={{
                          height: '32px',
                          minWidth: '52px',
                          padding: '0 10px',
                          borderRadius: '4px',
                          border: '1px solid #0B0E13',
                          background: 'transparent',
                          color: '#0B0E13',
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}
                      >
                        {'−50'}
                      </button>
                      <button
                        className='dh7'
                        onClick={v?.pM10}
                        style={{
                          height: '32px',
                          minWidth: '52px',
                          padding: '0 10px',
                          borderRadius: '4px',
                          border: '1px solid #0B0E13',
                          background: 'transparent',
                          color: '#0B0E13',
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}
                      >
                        {'−10'}
                      </button>
                      <button
                        className='dh8'
                        onClick={v?.pP10}
                        style={{
                          height: '32px',
                          minWidth: '52px',
                          padding: '0 10px',
                          borderRadius: '4px',
                          border: '1px solid #0B0E13',
                          background: 'transparent',
                          color: '#0B0E13',
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}
                      >
                        {'+10'}
                      </button>
                      <button
                        className='dh9'
                        onClick={v?.pP50}
                        style={{
                          height: '32px',
                          minWidth: '52px',
                          padding: '0 10px',
                          borderRadius: '4px',
                          border: '1px solid #0B0E13',
                          background: 'transparent',
                          color: '#0B0E13',
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}
                      >
                        {'+50'}
                      </button>
                    </div>
                  </div>{' '}
                  <div
                    style={{
                      padding: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      borderBottom: '1px solid #CFCDC4',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#5A5F66',
                      }}
                    >
                      {'Custo do evento'}
                    </span>
                    <span
                      style={{
                        fontSize: 'clamp(36px,3.6vw,52px)',
                        fontWeight: '500',
                        letterSpacing: '-0.04em',
                        lineHeight: '1',
                      }}
                    >
                      {v?.costFmt}
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      <button
                        className='dh10'
                        onClick={v?.cM50}
                        style={{
                          height: '32px',
                          minWidth: '52px',
                          padding: '0 10px',
                          borderRadius: '4px',
                          border: '1px solid #0B0E13',
                          background: 'transparent',
                          color: '#0B0E13',
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}
                      >
                        {'−50'}
                      </button>
                      <button
                        className='dh11'
                        onClick={v?.cM10}
                        style={{
                          height: '32px',
                          minWidth: '52px',
                          padding: '0 10px',
                          borderRadius: '4px',
                          border: '1px solid #0B0E13',
                          background: 'transparent',
                          color: '#0B0E13',
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}
                      >
                        {'−10'}
                      </button>
                      <button
                        className='dh12'
                        onClick={v?.cP10}
                        style={{
                          height: '32px',
                          minWidth: '52px',
                          padding: '0 10px',
                          borderRadius: '4px',
                          border: '1px solid #0B0E13',
                          background: 'transparent',
                          color: '#0B0E13',
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}
                      >
                        {'+10'}
                      </button>
                      <button
                        className='dh13'
                        onClick={v?.cP50}
                        style={{
                          height: '32px',
                          minWidth: '52px',
                          padding: '0 10px',
                          borderRadius: '4px',
                          border: '1px solid #0B0E13',
                          background: 'transparent',
                          color: '#0B0E13',
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: '13px',
                          cursor: 'pointer',
                        }}
                      >
                        {'+50'}
                      </button>
                    </div>
                  </div>{' '}
                </div>{' '}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))' }}>
                  {' '}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#5A5F66',
                      }}
                    >
                      {'Lucro estimado'}
                    </span>
                    <span style={{ fontSize: '28px', fontWeight: '500', letterSpacing: '-0.03em' }}>
                      {v?.profitFmt}
                    </span>
                  </div>{' '}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#5A5F66',
                      }}
                    >
                      {'Margem'}
                    </span>
                    <span style={{ fontSize: '28px', fontWeight: '500', letterSpacing: '-0.03em' }}>
                      {v?.marginFmt}
                    </span>
                  </div>{' '}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#5A5F66',
                      }}
                    >
                      {'Situação'}
                    </span>
                    <span
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px', fontWeight: '500' }}
                    >
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: v?.healthDot }} />
                      {v?.healthTxt}
                    </span>
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <figure style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '0' }}>
              <div
                data-reveal={'clip'}
                style={{ position: 'relative', border: '1px solid #0B0E13', background: '#FFFFFF' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '34px',
                      flex: 'none',
                      background: '#E7E9EF',
                      borderBottom: '1px solid #D5D9E2',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '0 12px',
                      fontFamily: "'Schibsted Grotesk',system-ui,sans-serif",
                    }}
                  >
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FEBC2E' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28C840' }} />
                    <span
                      style={{
                        marginLeft: '14px',
                        maxWidth: '360px',
                        flex: '1',
                        height: '22px',
                        borderRadius: '5px',
                        background: '#FFFFFF',
                        fontSize: '12px',
                        color: '#5D6B85',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 10px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                      }}
                    >
                      {'cheffdanielabosing.com.br/painel/pedidos/107'}
                    </span>
                  </div>
                  <img
                    src={'/assets/danibosing/order.png'}
                    alt={'Tela de orçamento de um pedido com preço, custo, lucro e margem'}
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                  />
                </div>
                <span
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    top: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    top: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '-6px',
                    bottom: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '-6px',
                    bottom: '-6px',
                    width: '11px',
                    height: '11px',
                    background:
                      'linear-gradient(#0B0E13,#0B0E13) center/1px 100% no-repeat,linear-gradient(#0B0E13,#0B0E13) center/100% 1px no-repeat',
                  }}
                />
              </div>
              <figcaption
                data-reveal={'fade'}
                data-delay={'300'}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.04em',
                  color: '#5A5F66',
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>{'Fig. 05'}</span>
                <span style={{ textAlign: 'right' }}>{'Orçamento de um pedido no painel'}</span>
              </figcaption>
            </figure>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Próximo case'} style={{ background: '#0B0E13', color: '#ECEBE6' }}>
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              paddingLeft: 'clamp(20px,3vw,40px)',
              paddingRight: 'clamp(20px,3vw,40px)',
              paddingTop: 'clamp(56px,7vw,96px)',
            }}
          >
            {' '}
            <a
              className='dh14'
              href={'/cases/ford'}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '24px',
                padding: '32px 0',
                borderTop: '1px solid #22272F',
                borderBottom: '1px solid #22272F',
                color: '#ECEBE6',
                transition: 'color .2s',
              }}
            >
              {' '}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {' '}
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#9AA1AB',
                  }}
                >
                  {'Próximo case · 05'}
                </span>{' '}
                <span style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2vw,28px)' }}>
                  <img
                    src={'/assets/ford_logo.png'}
                    alt={''}
                    style={{ height: 'clamp(36px,4vw,56px)', width: 'auto' }}
                  />
                  <span
                    style={{
                      fontSize: 'clamp(48px,7vw,104px)',
                      fontWeight: '500',
                      letterSpacing: '-0.045em',
                      lineHeight: '0.94',
                    }}
                  >
                    {'Ford'}
                  </span>
                </span>{' '}
              </div>{' '}
              <span style={{ fontSize: 'clamp(40px,5vw,72px)', lineHeight: '1' }}>{'→'}</span>{' '}
            </a>{' '}
          </div>{' '}
        </section>{' '}
        <footer id={'contato'} data-screen-label={'Contato'} style={{ background: '#0B0E13', color: '#ECEBE6' }}>
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              paddingLeft: 'clamp(20px,3vw,40px)',
              paddingRight: 'clamp(20px,3vw,40px)',
              paddingTop: 'clamp(80px,10vw,144px)',
              paddingBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(56px,7vw,104px)',
            }}
          >
            {' '}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {' '}
              <span
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#9AA1AB',
                }}
              >
                {'(08) Contato'}
              </span>{' '}
              <div style={{ overflow: 'hidden' }}>
                <h2
                  data-reveal={'line'}
                  style={{
                    margin: '0',
                    paddingBottom: '0.22em',
                    maxWidth: '12ch',
                    fontSize: 'clamp(48px,8.6vw,132px)',
                    lineHeight: '0.94',
                    letterSpacing: '-0.045em',
                    fontWeight: '500',
                    textWrap: 'balance',
                  }}
                >
                  {'Tem um projeto em mente?'}
                </h2>
              </div>{' '}
              <div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '32px clamp(32px,5vw,96px)', alignItems: 'flex-end' }}
              >
                {' '}
                <p
                  style={{
                    flex: '1 1 320px',
                    maxWidth: '460px',
                    margin: '0',
                    fontSize: '18px',
                    lineHeight: '1.6',
                    color: '#B4BAC2',
                    textWrap: 'pretty',
                  }}
                >
                  {
                    'Estou aberto a conversar sobre oportunidades em engenharia de software e projetos que precisam de desenvolvimento prático.'
                  }
                </p>{' '}
                <a
                  className='dh15'
                  href={'mailto:derik@devsehn.com'}
                  style={{
                    flex: '1 1 360px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    paddingBottom: '12px',
                    borderBottom: '2px solid #ECEBE6',
                    fontSize: 'clamp(24px,3vw,44px)',
                    fontWeight: '500',
                    letterSpacing: '-0.03em',
                    color: '#ECEBE6',
                    transition: 'color .2s,border-color .2s',
                  }}
                >
                  {'derik@devsehn.com'}
                  <span>{'↗'}</span>
                </a>{' '}
              </div>{' '}
            </div>{' '}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px 32px',
                paddingTop: '24px',
                borderTop: '1px solid #22272F',
                fontFamily: "'IBM Plex Mono',monospace",
                fontSize: '12px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#9AA1AB',
              }}
            >
              {' '}
              <span>{'© 2026 · Derik Sehn — Engenheiro de software'}</span>{' '}
              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
                {' '}
                <a className='dh16' href={'#'} style={{ color: '#ECEBE6' }}>
                  {'LinkedIn ↗'}
                </a>{' '}
                <a className='dh17' href={'#'} style={{ color: '#ECEBE6' }}>
                  {'GitHub ↗'}
                </a>{' '}
                <a className='dh18' href={'#'} style={{ color: '#ECEBE6' }}>
                  {'CV ↓'}
                </a>{' '}
                <a className='dh19' href={'#top'} style={{ color: '#9AA1AB' }}>
                  {'Topo ↑'}
                </a>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </footer>{' '}
      </div>{' '}
    </>
  );
}
