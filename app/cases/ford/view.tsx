'use client';
/* eslint-disable */
// Gerado a partir de "Ford Case.dc.html". Estilos inline preservados 1:1 do design.
import React from 'react';
import { useDC } from '@/lib/dc';
import Logic from '@/lib/logic/ford';

const CSS =
  "html{scroll-behavior:smooth}\nbody{margin:0;background:#0B0E13;font-family:'Schibsted Grotesk',system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:inherit;text-decoration:none}\na:hover{color:#3D6BFF}\n*{box-sizing:border-box}\n::selection{background:#3D6BFF;color:#FFFFFF}\n.dh1:hover{color:#FFFFFF !important}\n.dh2:hover{color:#FFFFFF !important}\n.dh3:hover{color:#FFFFFF !important}\n.dh4:hover{color:#FFFFFF !important}\n.dh5:hover{color:#ECEBE6 !important}\n.dh6:hover{color:#3D6BFF !important}\n.dh7:hover{color:#3D6BFF !important;border-color:#3D6BFF !important}\n.dh8:hover{color:#3D6BFF !important}\n.dh9:hover{color:#3D6BFF !important}\n.dh10:hover{color:#3D6BFF !important}\n.dh11:hover{color:#ECEBE6 !important}";
const DEFAULTS: Record<string, unknown> = { motion: true };

export default function FordView(props: Record<string, unknown>) {
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
              paddingBottom: 'clamp(56px,7vw,96px)',
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
              <span>{'Case 05 · Suprimentos para engenharia automotiva'}</span>{' '}
            </div>{' '}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2vw,28px)', overflow: 'hidden' }}>
              {' '}
              <img
                data-reveal={'fade'}
                src={'/assets/ford_logo.png'}
                alt={''}
                style={{ height: 'clamp(44px,5.6vw,84px)', width: 'auto' }}
              />{' '}
              <h1
                data-reveal={'line'}
                data-delay={'80'}
                style={{
                  margin: '0',
                  padding: '0.06em 0 0.24em',
                  fontSize: 'clamp(48px,8.6vw,132px)',
                  lineHeight: '0.94',
                  letterSpacing: '-0.045em',
                  fontWeight: '500',
                }}
              >
                {'Ford'}
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
                  'Plataforma web que conecta engenharia, compras e logística para levar peças de protótipo do pedido até a planta. Cada solicitação segue um fluxo único, com '
                }
                <span style={{ color: '#ECEBE6' }}>{'aprovações por etapa'}</span>
                {', '}
                <span style={{ color: '#ECEBE6' }}>{'checklist automático'}</span>
                {' e '}
                <span style={{ color: '#ECEBE6' }}>{'rastreio ponta a ponta'}</span>
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
                  {'Ford'}
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
                  {'Engenharia de software full-stack'}
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
                  {'Aplicação web, API e infraestrutura'}
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
                  {'Stack'}
                </dt>
                <dd style={{ margin: '0', padding: '12px 0', borderBottom: '1px solid #22272F', color: '#ECEBE6' }}>
                  {'Angular · Spring Boot · PostgreSQL · Cloud'}
                </dd>{' '}
              </dl>{' '}
            </div>{' '}
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
                        maxWidth: '320px',
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
                      {'portal interno · ambiente local'}
                    </span>
                  </div>
                  <img
                    src={'/assets/ford/01-home.png'}
                    alt={'Tela inicial do portal com atalhos para cotação, transporte e fornecedores'}
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
                <span style={{ whiteSpace: 'nowrap' }}>{'Fig. 01'}</span>
                <span style={{ textAlign: 'right' }}>
                  {'Tela inicial: ponto de partida para pedir e acompanhar peças.'}
                </span>
              </figcaption>
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
                  {'Muitas áreas, nenhuma fila única'}
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
                  'Uma peça de protótipo passa por várias equipes antes de chegar ao veículo em teste. Cada uma trabalhava com as próprias ferramentas e planilhas.'
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
                  'Quando algo atrasava, era difícil saber em que etapa o pedido estava e quem precisava agir. A plataforma dá a todos a mesma visão do processo.'
                }
              </p>{' '}
            </div>{' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
                borderTop: '1px solid #0B0E13',
              }}
            >
              {' '}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  padding: '28px 28px 28px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
                data-reveal={'fade'}
                data-delay={'0'}
              >
                <span
                  style={{
                    fontSize: 'clamp(56px,6.4vw,96px)',
                    fontWeight: '500',
                    letterSpacing: '-0.05em',
                    lineHeight: '0.9',
                  }}
                >
                  <span data-count={'4'}>{'4'}</span>
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    lineHeight: '1.55',
                    color: '#5A5F66',
                    maxWidth: '30ch',
                  }}
                >
                  {'tipos de solicitação em uma única entrada'}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  padding: '28px 28px 28px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
                data-reveal={'fade'}
                data-delay={'120'}
              >
                <span
                  style={{
                    fontSize: 'clamp(56px,6.4vw,96px)',
                    fontWeight: '500',
                    letterSpacing: '-0.05em',
                    lineHeight: '0.9',
                  }}
                >
                  <span data-count={'1'}>{'1'}</span>
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    lineHeight: '1.55',
                    color: '#5A5F66',
                    maxWidth: '30ch',
                  }}
                >
                  {'fluxo de status compartilhado entre as equipes'}
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  padding: '28px 28px 28px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
                data-reveal={'fade'}
                data-delay={'240'}
              >
                <span
                  style={{
                    fontSize: 'clamp(56px,6.4vw,96px)',
                    fontWeight: '500',
                    letterSpacing: '-0.05em',
                    lineHeight: '0.9',
                  }}
                >
                  <span data-count={'100'}>{'100'}</span>
                  {'%'}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    lineHeight: '1.55',
                    color: '#5A5F66',
                    maxWidth: '30ch',
                  }}
                >
                  {'das mudanças de etapa com histórico'}
                </span>
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Solicitação'} style={{ background: '#EFEEE9', color: '#0B0E13' }}>
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              paddingLeft: 'clamp(20px,3vw,40px)',
              paddingRight: 'clamp(20px,3vw,40px)',
              paddingTop: 'clamp(40px,5vw,64px)',
              paddingBottom: 'clamp(56px,7vw,96px)',
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
                  {'Quatro fluxos, uma porta de entrada'}
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
                {'(02) Solicitação'}
              </span>
            </div>{' '}
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '20px clamp(32px,5vw,80px)', alignItems: 'baseline' }}
            >
              {' '}
              <p
                data-reveal={'fade'}
                style={{
                  flex: '1.4 1 420px',
                  maxWidth: '720px',
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: '#3A3F46',
                  textWrap: 'pretty',
                }}
              >
                {
                  'O solicitante escolhe o tipo de pedido e é guiado por um assistente em etapas. As regras se adaptam ao fluxo, sem formulários diferentes para aprender.'
                }
              </p>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'120'}
                style={{ flex: '1 1 300px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}
              >
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    padding: '7px 12px',
                    borderRadius: '4px',
                    border: '1px solid #0B0E13',
                  }}
                >
                  {'Compra'}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    padding: '7px 12px',
                    borderRadius: '4px',
                    border: '1px solid #0B0E13',
                  }}
                >
                  {'Importação'}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    padding: '7px 12px',
                    borderRadius: '4px',
                    border: '1px solid #0B0E13',
                  }}
                >
                  {'Exportação'}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    padding: '7px 12px',
                    borderRadius: '4px',
                    border: '1px solid #0B0E13',
                  }}
                >
                  {'Transporte nacional'}
                </span>
              </div>{' '}
            </div>{' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))',
                gap: 'clamp(16px,2vw,24px)',
              }}
            >
              {' '}
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
                          maxWidth: '320px',
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
                        {'portal interno · ambiente local'}
                      </span>
                    </div>
                    <img
                      src={'/assets/ford/04-tipos-solicitacao.png'}
                      alt={'Modal de escolha do tipo de solicitação'}
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
                  <span style={{ textAlign: 'right' }}>{'Escolha do tipo de solicitação.'}</span>
                </figcaption>
              </figure>{' '}
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
                          maxWidth: '320px',
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
                        {'portal interno · ambiente local'}
                      </span>
                    </div>
                    <img
                      src={'/assets/ford/06-assistente-solicitacao.png'}
                      alt={'Assistente de nova solicitação em cinco etapas'}
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
                  <span style={{ whiteSpace: 'nowrap' }}>{'Fig. 03'}</span>
                  <span style={{ textAlign: 'right' }}>{'Assistente de nova solicitação em etapas.'}</span>
                </figcaption>
              </figure>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Aprovação'} style={{ background: '#0B0E13', color: '#ECEBE6' }}>
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
                  {'A fila inteira em um quadro'}
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
                {'(03) Aprovação'}
              </span>
            </div>{' '}
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '40px clamp(32px,5vw,80px)', alignItems: 'flex-start' }}
            >
              {' '}
              <p
                data-reveal={'fade'}
                style={{
                  flex: '1 1 300px',
                  margin: '0',
                  fontSize: '18px',
                  lineHeight: '1.6',
                  color: '#B4BAC2',
                  textWrap: 'pretty',
                }}
              >
                {
                  'Cada equipe vê apenas o que lhe cabe, em colunas por etapa. Prioridades e pendências ficam destacadas no próprio card, e filtros simples aceleram a triagem.'
                }
              </p>{' '}
              <figure
                style={{
                  margin: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  minWidth: '0',
                  flex: '2 1 520px',
                }}
              >
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
                          maxWidth: '320px',
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
                        {'portal interno · ambiente local'}
                      </span>
                    </div>
                    <img
                      src={'/assets/ford/02-board-aprovacao.png'}
                      alt={'Quadro de aprovação com colunas por etapa'}
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
                  <span style={{ textAlign: 'right' }}>{'Quadro de aprovação por etapa.'}</span>
                </figcaption>
              </figure>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Checklist'} style={{ background: '#EFEEE9', color: '#0B0E13' }}>
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
                  {'O sistema mostra o que falta antes de aprovar'}
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
                {'(04) Checklist'}
              </span>
            </div>{' '}
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '40px clamp(32px,5vw,80px)', alignItems: 'flex-start' }}
            >
              {' '}
              <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {' '}
                <p
                  data-reveal={'fade'}
                  style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#3A3F46', textWrap: 'pretty' }}
                >
                  {
                    'Cada pedido tem um checklist calculado automaticamente. O aprovador vê em verde o que está completo e em vermelho o que ainda bloqueia o avanço.'
                  }
                </p>{' '}
                <div
                  data-reveal={'fade'}
                  data-delay={'120'}
                  style={{ border: '1px solid #0B0E13', display: 'flex', flexDirection: 'column' }}
                >
                  {' '}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 18px',
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
                      {'Itens do pedido'}
                    </span>
                    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '13px' }}>{'4 de 5'}</span>
                  </div>{' '}
                  <div style={{ position: 'relative', height: '3px', background: '#CFCDC4' }}>
                    <span
                      data-reveal={'grow'}
                      data-delay={'400'}
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '0',
                        bottom: '0',
                        width: '80%',
                        background: '#0B0E13',
                      }}
                    />
                  </div>{' '}
                  <div
                    data-reveal={'fade'}
                    data-delay={'300'}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      padding: '12px 18px',
                      fontSize: '16px',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#1F8A4C' }} />
                      <span style={{}}>{'Item adicionado'}</span>
                    </span>
                  </div>{' '}
                  <div
                    data-reveal={'fade'}
                    data-delay={'410'}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      padding: '12px 18px',
                      borderTop: '1px solid #CFCDC4',
                      fontSize: '16px',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#1F8A4C' }} />
                      <span style={{}}>{'Código da peça'}</span>
                    </span>
                  </div>{' '}
                  <div
                    data-reveal={'fade'}
                    data-delay={'520'}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      padding: '12px 18px',
                      borderTop: '1px solid #CFCDC4',
                      fontSize: '16px',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#1F8A4C' }} />
                      <span style={{}}>{'Descrição'}</span>
                    </span>
                  </div>{' '}
                  <div
                    data-reveal={'fade'}
                    data-delay={'630'}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      padding: '12px 18px',
                      borderTop: '1px solid #CFCDC4',
                      fontSize: '16px',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#C8261E' }} />
                      <span style={{ color: '#B42318' }}>{'Fornecedor'}</span>
                    </span>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#B42318',
                      }}
                    >
                      {'Pendente'}
                    </span>
                  </div>{' '}
                  <div
                    data-reveal={'fade'}
                    data-delay={'740'}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      padding: '12px 18px',
                      borderTop: '1px solid #CFCDC4',
                      fontSize: '16px',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#1F8A4C' }} />
                      <span style={{}}>{'Quantidade'}</span>
                    </span>
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <figure
                style={{
                  margin: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  minWidth: '0',
                  flex: '1.4 1 460px',
                }}
              >
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
                          maxWidth: '320px',
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
                        {'portal interno · ambiente local'}
                      </span>
                    </div>
                    <img
                      src={'/assets/ford/03-checklist.png'}
                      alt={'Checklist do pedido com etapa em andamento'}
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
                  <span style={{ textAlign: 'right' }}>{'Checklist com etapa em andamento.'}</span>
                </figcaption>
              </figure>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Logística'} style={{ background: '#EFEEE9', color: '#0B0E13' }}>
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
                  {'Do pedido aprovado à entrega'}
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
                {'(05) Logística'}
              </span>
            </div>{' '}
            <p
              data-reveal={'fade'}
              style={{
                maxWidth: '720px',
                margin: '0',
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#3A3F46',
                textWrap: 'pretty',
              }}
            >
              {
                'Após a aprovação, o pedido segue para a logística, organizada por etapa e com clareza sobre quem precisa agir em cada momento.'
              }
            </p>{' '}
            <div
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))',
                borderTop: '1px solid #CFCDC4',
              }}
            >
              {' '}
              <span
                data-reveal={'grow'}
                data-delay={'150'}
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  top: '-1px',
                  height: '2px',
                  background: '#0B0E13',
                }}
              />{' '}
              <div
                data-reveal={'fade'}
                data-delay={'250'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '24px 20px 24px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    color: '#5A5F66',
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#0B0E13' }} />
                  {'01'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(20px,1.8vw,26px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1',
                  }}
                >
                  {'Em análise'}
                </span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'370'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '24px 20px 24px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    color: '#5A5F66',
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#0B0E13' }} />
                  {'02'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(20px,1.8vw,26px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1',
                  }}
                >
                  {'Aprovado'}
                </span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'490'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '24px 20px 24px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    color: '#5A5F66',
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#0B0E13' }} />
                  {'03'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(20px,1.8vw,26px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1',
                  }}
                >
                  {'Pedido emitido'}
                </span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'610'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '24px 20px 24px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    color: '#5A5F66',
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#0B0E13' }} />
                  {'04'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(20px,1.8vw,26px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1',
                  }}
                >
                  {'Documentação'}
                </span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'730'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '24px 20px 24px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    color: '#5A5F66',
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#0B0E13' }} />
                  {'05'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(20px,1.8vw,26px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1',
                  }}
                >
                  {'Em trânsito'}
                </span>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'850'}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  padding: '24px 20px 24px 0',
                  borderBottom: '1px solid #CFCDC4',
                }}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    color: '#5A5F66',
                  }}
                >
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#3D6BFF' }} />
                  {'06'}
                </span>
                <span
                  style={{
                    fontSize: 'clamp(20px,1.8vw,26px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.1',
                  }}
                >
                  {'Entregue'}
                </span>
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
                        maxWidth: '320px',
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
                      {'portal interno · ambiente local'}
                    </span>
                  </div>
                  <img
                    src={'/assets/ford/05-board-logistica.png'}
                    alt={'Quadro de logística com colunas por etapa'}
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
                <span style={{ whiteSpace: 'nowrap' }}>{'Fig. 06'}</span>
                <span style={{ textAlign: 'right' }}>{'Quadro de logística por etapa.'}</span>
              </figcaption>
            </figure>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Sistema'} style={{ background: '#0B0E13', color: '#ECEBE6' }}>
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
                  {'O que sustenta a plataforma'}
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
                {'(06) Sistema por trás'}
              </span>
            </div>{' '}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {' '}
              <div
                data-reveal={'fade'}
                data-delay={'0'}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px repeat(auto-fit,minmax(min(100%,260px),1fr))',
                  gap: '10px clamp(20px,3vw,48px)',
                  alignItems: 'baseline',
                  padding: '26px 4px',
                  borderBottom: '1px solid #22272F',
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '13px', color: '#9AA1AB' }}>
                  {'01'}
                </span>
                <h3
                  style={{
                    margin: '0',
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.15',
                  }}
                >
                  {'Um fluxo para todos'}
                </h3>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#B4BAC2', textWrap: 'pretty' }}>
                  {'Todos os tipos de pedido compartilham as mesmas etapas, com histórico de cada mudança.'}
                </p>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'80'}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px repeat(auto-fit,minmax(min(100%,260px),1fr))',
                  gap: '10px clamp(20px,3vw,48px)',
                  alignItems: 'baseline',
                  padding: '26px 4px',
                  borderBottom: '1px solid #22272F',
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '13px', color: '#9AA1AB' }}>
                  {'02'}
                </span>
                <h3
                  style={{
                    margin: '0',
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.15',
                  }}
                >
                  {'Regras no servidor'}
                </h3>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#B4BAC2', textWrap: 'pretty' }}>
                  {'Validações e cálculos ficam na API; a interface apenas apresenta.'}
                </p>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'0'}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px repeat(auto-fit,minmax(min(100%,260px),1fr))',
                  gap: '10px clamp(20px,3vw,48px)',
                  alignItems: 'baseline',
                  padding: '26px 4px',
                  borderBottom: '1px solid #22272F',
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '13px', color: '#9AA1AB' }}>
                  {'03'}
                </span>
                <h3
                  style={{
                    margin: '0',
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.15',
                  }}
                >
                  {'Acesso por perfil'}
                </h3>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#B4BAC2', textWrap: 'pretty' }}>
                  {'Login corporativo único e permissões verificadas a cada ação.'}
                </p>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'80'}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px repeat(auto-fit,minmax(min(100%,260px),1fr))',
                  gap: '10px clamp(20px,3vw,48px)',
                  alignItems: 'baseline',
                  padding: '26px 4px',
                  borderBottom: '1px solid #22272F',
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '13px', color: '#9AA1AB' }}>
                  {'04'}
                </span>
                <h3
                  style={{
                    margin: '0',
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.15',
                  }}
                >
                  {'Documentos seguros'}
                </h3>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#B4BAC2', textWrap: 'pretty' }}>
                  {'Arquivos guardados em nuvem com acesso temporário.'}
                </p>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'0'}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px repeat(auto-fit,minmax(min(100%,260px),1fr))',
                  gap: '10px clamp(20px,3vw,48px)',
                  alignItems: 'baseline',
                  padding: '26px 4px',
                  borderBottom: '1px solid #22272F',
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '13px', color: '#9AA1AB' }}>
                  {'05'}
                </span>
                <h3
                  style={{
                    margin: '0',
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.15',
                  }}
                >
                  {'Banco versionado'}
                </h3>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#B4BAC2', textWrap: 'pretty' }}>
                  {'Cada mudança de estrutura é revisável e testada.'}
                </p>
              </div>{' '}
              <div
                data-reveal={'fade'}
                data-delay={'80'}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px repeat(auto-fit,minmax(min(100%,260px),1fr))',
                  gap: '10px clamp(20px,3vw,48px)',
                  alignItems: 'baseline',
                  padding: '26px 4px',
                  borderBottom: '1px solid #22272F',
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: '13px', color: '#9AA1AB' }}>
                  {'06'}
                </span>
                <h3
                  style={{
                    margin: '0',
                    fontSize: 'clamp(22px,2vw,28px)',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    lineHeight: '1.15',
                  }}
                >
                  {'Entrega contínua'}
                </h3>
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#B4BAC2', textWrap: 'pretty' }}>
                  {'Publicação automatizada por ambiente.'}
                </p>
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        <section data-screen-label={'Mais telas'} style={{ background: '#EFEEE9', color: '#0B0E13' }}>
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
                  {'Mais telas'}
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
                {'(07) Mais telas'}
              </span>
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
                        maxWidth: '320px',
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
                      {'portal interno · ambiente local'}
                    </span>
                  </div>
                  <img
                    src={'/assets/ford/07-rastreio.png'}
                    alt={'Tela de rastreio de pedido por código'}
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
                <span style={{ whiteSpace: 'nowrap' }}>{'Fig. 07'}</span>
                <span style={{ textAlign: 'right' }}>
                  {'Rastreio de pedido: qualquer pessoa acompanha o status sem precisar perguntar.'}
                </span>
              </figcaption>
            </figure>{' '}
            <div
              data-reveal={'fade'}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px clamp(32px,5vw,80px)',
                alignItems: 'baseline',
                borderTop: '1px solid #0B0E13',
                paddingTop: '24px',
              }}
            >
              {' '}
              <span
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#5A5F66',
                }}
              >
                {'Stack'}
              </span>{' '}
              <div style={{ flex: '1 1 480px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    padding: '7px 12px',
                    borderRadius: '4px',
                    border: '1px solid #0B0E13',
                  }}
                >
                  {'Angular'}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    padding: '7px 12px',
                    borderRadius: '4px',
                    border: '1px solid #0B0E13',
                  }}
                >
                  {'TypeScript'}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    padding: '7px 12px',
                    borderRadius: '4px',
                    border: '1px solid #0B0E13',
                  }}
                >
                  {'Spring Boot'}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    padding: '7px 12px',
                    borderRadius: '4px',
                    border: '1px solid #0B0E13',
                  }}
                >
                  {'Java'}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    padding: '7px 12px',
                    borderRadius: '4px',
                    border: '1px solid #0B0E13',
                  }}
                >
                  {'PostgreSQL'}
                </span>
                <span
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    padding: '7px 12px',
                    borderRadius: '4px',
                    border: '1px solid #0B0E13',
                  }}
                >
                  {'Cloud'}
                </span>
              </div>{' '}
            </div>{' '}
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
              className='dh6'
              href={'/cases/eli-control'}
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
                  {'Próximo case · 01'}
                </span>{' '}
                <span style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2vw,28px)' }}>
                  <img
                    src={'/assets/eli_mark.png'}
                    alt={''}
                    style={{ height: 'clamp(40px,4.4vw,64px)', width: 'auto' }}
                  />
                  <span
                    style={{
                      fontSize: 'clamp(48px,7vw,104px)',
                      fontWeight: '500',
                      letterSpacing: '-0.045em',
                      lineHeight: '0.94',
                    }}
                  >
                    {'Eli Control'}
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
                  className='dh7'
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
                <a className='dh8' href={'#'} style={{ color: '#ECEBE6' }}>
                  {'LinkedIn ↗'}
                </a>{' '}
                <a className='dh9' href={'#'} style={{ color: '#ECEBE6' }}>
                  {'GitHub ↗'}
                </a>{' '}
                <a className='dh10' href={'#'} style={{ color: '#ECEBE6' }}>
                  {'CV ↓'}
                </a>{' '}
                <a className='dh11' href={'#top'} style={{ color: '#9AA1AB' }}>
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
