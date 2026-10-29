'use client';
/* eslint-disable */
// Gerado a partir de "DevSehn Portfolio v2.dc.html". Estilos inline preservados 1:1 do design.
import React from 'react';
import { useDC } from '@/lib/dc';
import Logic from '@/lib/logic/home';

const CSS =
  "html{scroll-behavior:smooth}\nbody{margin:0;background:#0B0E13;font-family:'Schibsted Grotesk',system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:inherit;text-decoration:none}\na:hover{color:#3D6BFF}\n*{box-sizing:border-box}\n::selection{background:#3D6BFF;color:#FFFFFF}\n.dh1:hover{color:#FFFFFF !important}\n.dh2:hover{color:#FFFFFF !important}\n.dh3:hover{color:#FFFFFF !important}\n.dh4:hover{color:#FFFFFF !important}\n.dh5:hover{background:#3D6BFF !important;color:#FFFFFF !important}\n.dh6:hover{border-color:#ECEBE6 !important;color:#FFFFFF !important}\n.dh7:hover{border-color:#3D6BFF !important;color:#ECEBE6 !important}\n.dh8:hover{background:#E5E3DC !important;color:#0B0E13 !important}\n.dh9:hover{background:#E5E3DC !important;color:#0B0E13 !important}\n.dh10:hover{background:#E5E3DC !important;color:#0B0E13 !important}\n.dh11:hover{background:#E5E3DC !important;color:#0B0E13 !important}\n.dh12:hover{color:#2A52E0 !important}\n.dh13:hover{border-color:#3D6BFF !important}\n.dh14:hover{border-color:#3D6BFF !important}\n.dh15:hover{border-color:#3D6BFF !important}\n.dh16:hover{border-color:#3D6BFF !important}\n.dh17:hover{border-color:#3D6BFF !important;background:#E9E7E1 !important}\n.dh18:hover{background:#0B0E13 !important;color:#ECEBE6 !important}\n.dh19:hover{color:#3D6BFF !important;border-color:#3D6BFF !important}\n.dh20:hover{color:#3D6BFF !important}\n.dh21:hover{color:#3D6BFF !important}\n.dh22:hover{color:#3D6BFF !important}\n.dh23:hover{color:#ECEBE6 !important}";
const DEFAULTS: Record<string, unknown> = { showHeroImage: true, showGridMarks: true, slideSeconds: 6.5, motion: true };

export default function HomeView(props: Record<string, unknown>) {
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
              padding: '0 clamp(20px,3vw,40px)',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            {' '}
            <a href={'#top'} style={{ fontSize: '20px', letterSpacing: '-0.02em', color: '#ECEBE6' }}>
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
              <a className='dh1' href={'#trabalhos'} style={{ display: 'flex', gap: '8px', color: '#C9CDD3' }}>
                <span style={{ color: '#6E7681' }}>{'01'}</span>
                {'Trabalhos'}
              </a>{' '}
              <a className='dh2' href={'#sobre'} style={{ display: 'flex', gap: '8px', color: '#C9CDD3' }}>
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
        <section id={'top'} data-screen-label={'Hero'} style={{ position: 'relative' }}>
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              padding: 'clamp(48px,7vw,96px) clamp(20px,3vw,40px) clamp(56px,7vw,96px)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(40px,5vw,72px)',
            }}
          >
            {' '}
            <div style={{ overflow: 'hidden' }}>
              <h1
                data-reveal={'line'}
                style={{
                  margin: '0',
                  paddingBottom: '0.22em',
                  maxWidth: '14ch',
                  fontSize: 'clamp(48px,8.6vw,132px)',
                  lineHeight: '0.94',
                  letterSpacing: '-0.045em',
                  fontWeight: '500',
                  textWrap: 'balance',
                }}
              >
                {'DevSehn'}
              </h1>
            </div>{' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,4vw,64px)', alignItems: 'flex-end' }}>
              {' '}
              <div
                style={{ flex: '1 1 340px', maxWidth: '480px', display: 'flex', flexDirection: 'column', gap: '32px' }}
              >
                {' '}
                <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#B4BAC2', textWrap: 'pretty' }}>
                  {
                    'Oi, sou o Dérik. Engenheiro de software com experiência em sistemas corporativos, cloud, DevOps e integrações. Já desenvolvi soluções para indústria, logística, comércio e saúde, do código à infraestrutura em produção.'
                  }
                </p>{' '}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {' '}
                  <a
                    className='dh5'
                    href={'#trabalhos'}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      height: '48px',
                      padding: '0 22px',
                      borderRadius: '4px',
                      background: '#ECEBE6',
                      color: '#0B0E13',
                      fontFamily: "'IBM Plex Mono',monospace",
                      fontSize: '13px',
                      fontWeight: '500',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      transition: 'background .2s',
                    }}
                  >
                    {'Ver meus projetos'}
                    <span>{'→'}</span>
                  </a>{' '}
                  <a
                    className='dh6'
                    href={'#contato'}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '48px',
                      padding: '0 22px',
                      borderRadius: '4px',
                      border: '1px solid #3A414B',
                      color: '#ECEBE6',
                      fontFamily: "'IBM Plex Mono',monospace",
                      fontSize: '13px',
                      fontWeight: '500',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      transition: 'border-color .2s',
                    }}
                  >
                    {'Entre em contato'}
                  </a>{' '}
                </div>{' '}
              </div>{' '}
              {v?.showHeroImage ? (
                <>
                  {' '}
                  <figure
                    style={{
                      flex: '1.4 1 420px',
                      minWidth: '0',
                      margin: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    {' '}
                    <div style={{ position: 'relative', border: '1px solid #22272F', background: '#0B0E13' }}>
                      {' '}
                      <div
                        ref={v?.heroWrap}
                        style={{
                          position: 'relative',
                          aspectRatio: '911/809',
                          overflow: 'hidden',
                          fontFamily: "'Schibsted Grotesk',system-ui,sans-serif",
                          color: '#ECEBE6',
                        }}
                      >
                        {' '}
                        <div
                          style={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            width: '911px',
                            height: '809px',
                            transformOrigin: '0 0',
                            transform: `scale(${v?.heroScale ?? ''})`,
                          }}
                        >
                          {' '}
                          <div
                            aria-hidden={v?.a0?.hid}
                            style={{
                              position: 'absolute',
                              inset: '0',
                              opacity: v?.a0?.op,
                              zIndex: v?.a0?.z,
                              transition: 'opacity 1.2s ease',
                            }}
                          >
                            {' '}
                            <img
                              src={'/assets/hero_right.png'}
                              alt={'Vista isométrica de uma planta de refrigeração industrial com painel de telemetria'}
                              style={{
                                position: 'absolute',
                                inset: '0',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transform: v?.a0?.tf,
                                transition: v?.a0?.tr,
                                transformOrigin: '60% 55%',
                              }}
                            />{' '}
                          </div>{' '}
                          <div
                            aria-hidden={v?.a1?.hid}
                            style={{
                              position: 'absolute',
                              inset: '0',
                              opacity: v?.a1?.op,
                              zIndex: v?.a1?.z,
                              transition: 'opacity 1.2s ease',
                              overflow: 'hidden',
                            }}
                          >
                            {' '}
                            <div
                              style={{
                                position: 'absolute',
                                inset: '0',
                                transform: v?.a1?.tf,
                                transition: v?.a1?.tr,
                                transformOrigin: '50% 60%',
                                background:
                                  'radial-gradient(ellipse 70% 55% at 50% 62%,#13234A 0%,#0D1528 45%,#0B0E13 80%)',
                              }}
                            >
                              {' '}
                              <div
                                style={{
                                  position: 'absolute',
                                  left: '-420px',
                                  top: '360px',
                                  width: '1751px',
                                  height: '760px',
                                  transform: 'perspective(620px) rotateX(62deg)',
                                  transformOrigin: '50% 0',
                                  backgroundImage:
                                    'linear-gradient(rgba(84,124,255,0.26) 1px,transparent 1px),linear-gradient(90deg,rgba(84,124,255,0.26) 1px,transparent 1px)',
                                  backgroundSize: '64px 64px',
                                  WebkitMaskImage:
                                    'linear-gradient(to bottom,transparent 0%,#000 25%,#000 60%,transparent 100%)',
                                  maskImage:
                                    'linear-gradient(to bottom,transparent 0%,#000 25%,#000 60%,transparent 100%)',
                                }}
                              />{' '}
                              <div
                                style={{
                                  position: 'absolute',
                                  left: '255px',
                                  top: '430px',
                                  width: '400px',
                                  height: '160px',
                                  borderRadius: '50%',
                                  background: 'radial-gradient(closest-side,rgba(61,107,255,0.35),rgba(61,107,255,0))',
                                }}
                              />{' '}
                            </div>{' '}
                            <svg
                              viewBox={'0 0 911 809'}
                              style={{
                                position: 'absolute',
                                inset: '0',
                                width: '100%',
                                height: '100%',
                                overflow: 'visible',
                              }}
                              fill={'none'}
                            >
                              <g stroke={'rgba(120,155,255,0.35)'} strokeWidth={'1'} strokeDasharray={'3 6'}>
                                <path d={'M455 505 Q 270 370 130 612'} />
                                <path d={'M455 505 Q 650 360 790 588'} />
                                <path d={'M455 505 Q 540 620 520 728'} />
                              </g>
                              <g
                                stroke={'#5B86FF'}
                                strokeWidth={'2'}
                                strokeLinecap={'round'}
                                strokeDasharray={'700'}
                                strokeDashoffset={v?.a1?.dash}
                                style={{ transition: v?.a1?.dtr }}
                              >
                                <path d={'M455 505 Q 270 370 130 612'} />
                                <path d={'M455 505 Q 650 360 790 588'} />
                                <path d={'M455 505 Q 540 620 520 728'} />
                              </g>
                            </svg>{' '}
                            <span
                              style={{
                                position: 'absolute',
                                left: '116px',
                                top: '598px',
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                border: '1px solid rgba(91,134,255,0.55)',
                                display: 'grid',
                                placeItems: 'center',
                              }}
                            >
                              <span
                                style={{
                                  width: '10px',
                                  height: '10px',
                                  borderRadius: '50%',
                                  background: '#5B86FF',
                                  boxShadow: '0 0 12px #5B86FF',
                                }}
                              />
                            </span>{' '}
                            <span
                              style={{
                                position: 'absolute',
                                left: '776px',
                                top: '574px',
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                border: '1px solid rgba(91,134,255,0.55)',
                                display: 'grid',
                                placeItems: 'center',
                              }}
                            >
                              <span
                                style={{
                                  width: '10px',
                                  height: '10px',
                                  borderRadius: '50%',
                                  background: '#5B86FF',
                                  boxShadow: '0 0 12px #5B86FF',
                                }}
                              />
                            </span>{' '}
                            <span
                              style={{
                                position: 'absolute',
                                left: '506px',
                                top: '714px',
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                border: '1px solid rgba(91,134,255,0.55)',
                                display: 'grid',
                                placeItems: 'center',
                              }}
                            >
                              <span
                                style={{
                                  width: '10px',
                                  height: '10px',
                                  borderRadius: '50%',
                                  background: '#5B86FF',
                                  boxShadow: '0 0 12px #5B86FF',
                                }}
                              />
                            </span>{' '}
                            <div
                              style={{
                                position: 'absolute',
                                left: '52px',
                                top: '640px',
                                padding: '10px 14px',
                                borderRadius: '10px',
                                background: 'rgba(13,20,34,0.86)',
                                border: '1px solid rgba(96,140,255,0.38)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2px',
                                opacity: v?.a1?.cop,
                                transform: v?.a1?.ctf,
                                transition: v?.a1?.c3,
                              }}
                            >
                              <span style={{ fontSize: '17px', fontWeight: '600' }}>{'Importação'}</span>
                              <span style={{ fontSize: '13px', color: '#9FB0CF' }}>{'42 processos abertos'}</span>
                            </div>{' '}
                            <div
                              style={{
                                position: 'absolute',
                                left: '690px',
                                top: '614px',
                                padding: '10px 14px',
                                borderRadius: '10px',
                                background: 'rgba(13,20,34,0.86)',
                                border: '1px solid rgba(96,140,255,0.38)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2px',
                                opacity: v?.a1?.cop,
                                transform: v?.a1?.ctf,
                                transition: v?.a1?.c3,
                              }}
                            >
                              <span style={{ fontSize: '17px', fontWeight: '600' }}>{'Exportação'}</span>
                              <span style={{ fontSize: '13px', color: '#9FB0CF' }}>{'27 embarques'}</span>
                            </div>{' '}
                            <div
                              style={{
                                position: 'absolute',
                                left: '548px',
                                top: '704px',
                                padding: '10px 14px',
                                borderRadius: '10px',
                                background: 'rgba(13,20,34,0.86)',
                                border: '1px solid rgba(96,140,255,0.38)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2px',
                                opacity: v?.a1?.cop,
                                transform: v?.a1?.ctf,
                                transition: v?.a1?.c3,
                              }}
                            >
                              <span style={{ fontSize: '17px', fontWeight: '600' }}>{'Compra de peças'}</span>
                              <span style={{ fontSize: '13px', color: '#9FB0CF' }}>{'86 pedidos'}</span>
                            </div>{' '}
                            <div
                              style={{
                                position: 'absolute',
                                left: '383px',
                                top: '468px',
                                width: '144px',
                                height: '74px',
                                borderRadius: '14px',
                                background: 'rgba(13,20,34,0.92)',
                                border: '1px solid rgba(96,140,255,0.5)',
                                boxShadow: '0 0 40px -6px rgba(61,107,255,0.55)',
                                display: 'grid',
                                placeItems: 'center',
                              }}
                            >
                              <img
                                src={'/assets/ford_logo.png'}
                                alt={'Ford'}
                                style={{ width: '104px', height: 'auto' }}
                              />
                            </div>{' '}
                            <span
                              style={{
                                position: 'absolute',
                                left: '454px',
                                top: '262px',
                                width: '2px',
                                height: '206px',
                                background: 'linear-gradient(#5B86FF,rgba(91,134,255,0.3))',
                                transformOrigin: '50% 0',
                                transform: v?.a1?.lsc,
                                transition: v?.a1?.c2,
                              }}
                            />{' '}
                            <div
                              style={{
                                position: 'absolute',
                                left: '186px',
                                top: '44px',
                                width: '540px',
                                padding: '22px 24px 18px',
                                borderRadius: '16px',
                                background: 'rgba(13,20,34,0.86)',
                                border: '1px solid rgba(96,140,255,0.42)',
                                boxShadow: '0 24px 60px -24px rgba(0,0,0,0.8)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                opacity: v?.a1?.cop,
                                transform: v?.a1?.ctf,
                                transition: v?.a1?.c1,
                              }}
                            >
                              {' '}
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  gap: '12px',
                                }}
                              >
                                <span style={{ fontSize: '24px', fontWeight: '600', letterSpacing: '-0.01em' }}>
                                  {'Logística global'}
                                </span>
                                <span
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '14px',
                                    color: '#5BD69A',
                                  }}
                                >
                                  <span
                                    style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2FBF71' }}
                                  />
                                  {'Operação ativa'}
                                </span>
                              </div>{' '}
                              <div
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(3,1fr)',
                                  borderTop: '1px solid rgba(120,150,210,0.2)',
                                  borderBottom: '1px solid rgba(120,150,210,0.2)',
                                }}
                              >
                                {' '}
                                <div
                                  style={{ padding: '14px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}
                                >
                                  <span style={{ fontSize: '15px', color: '#9FB0CF' }}>{'Embarques ativos'}</span>
                                  <span style={{ fontSize: '30px', fontWeight: '600' }}>{'1.284'}</span>
                                </div>{' '}
                                <div
                                  style={{
                                    padding: '14px 16px',
                                    borderLeft: '1px solid rgba(120,150,210,0.2)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '6px',
                                  }}
                                >
                                  <span style={{ fontSize: '15px', color: '#9FB0CF' }}>{'Em trânsito'}</span>
                                  <span style={{ fontSize: '30px', fontWeight: '600' }}>{'312'}</span>
                                </div>{' '}
                                <div
                                  style={{
                                    padding: '14px 16px',
                                    borderLeft: '1px solid rgba(120,150,210,0.2)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '6px',
                                  }}
                                >
                                  <span style={{ fontSize: '15px', color: '#9FB0CF' }}>{'No prazo'}</span>
                                  <span style={{ fontSize: '30px', fontWeight: '600' }}>{'97,8%'}</span>
                                </div>{' '}
                              </div>{' '}
                              <svg
                                viewBox={'0 0 490 54'}
                                preserveAspectRatio={'none'}
                                style={{ width: '100%', height: '54px' }}
                              >
                                <path
                                  d={
                                    'M0 44 L35 40 L70 42 L105 33 L140 36 L175 27 L210 31 L245 22 L280 26 L315 17 L350 21 L385 13 L420 16 L455 8 L490 10 L490 54 L0 54 Z'
                                  }
                                  fill={'rgba(61,107,255,0.22)'}
                                />
                                <path
                                  d={
                                    'M0 44 L35 40 L70 42 L105 33 L140 36 L175 27 L210 31 L245 22 L280 26 L315 17 L350 21 L385 13 L420 16 L455 8 L490 10'
                                  }
                                  stroke={'#5B86FF'}
                                  strokeWidth={'2'}
                                  fill={'none'}
                                  vectorEffect={'non-scaling-stroke'}
                                />
                              </svg>{' '}
                            </div>{' '}
                            <div
                              style={{
                                position: 'absolute',
                                left: '36px',
                                top: '300px',
                                width: '300px',
                                padding: '16px 18px',
                                borderRadius: '14px',
                                background: 'rgba(13,20,34,0.88)',
                                border: '1px solid rgba(96,140,255,0.38)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                opacity: v?.a1?.cop,
                                transform: v?.a1?.ctf,
                                transition: v?.a1?.c4,
                              }}
                            >
                              <svg
                                width={'22'}
                                height={'22'}
                                viewBox={'0 0 24 24'}
                                fill={'none'}
                                stroke={'#ECEBE6'}
                                strokeWidth={'1.8'}
                                strokeLinecap={'round'}
                                strokeLinejoin={'round'}
                              >
                                <path d={'M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8'} />
                              </svg>
                              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                <span style={{ fontSize: '18px', fontWeight: '600' }}>{'Desembaraço concluído'}</span>
                                <span style={{ fontSize: '13px', color: '#9FB0CF' }}>{'Lote IMP-0418 liberado'}</span>
                              </span>
                              <span style={{ fontSize: '20px', color: '#5B86FF' }}>{'→'}</span>
                            </div>{' '}
                          </div>{' '}
                          <div
                            aria-hidden={v?.a2?.hid}
                            style={{
                              position: 'absolute',
                              inset: '0',
                              opacity: v?.a2?.op,
                              zIndex: v?.a2?.z,
                              transition: 'opacity 1.2s ease',
                              overflow: 'hidden',
                            }}
                          >
                            {' '}
                            <div
                              style={{
                                position: 'absolute',
                                inset: '0',
                                transform: v?.a2?.tf,
                                transition: v?.a2?.tr,
                                transformOrigin: '40% 60%',
                              }}
                            >
                              {' '}
                              <img
                                src={'/assets/hospital.png'}
                                alt={'Fachada de hospital com painel de pronto atendimento sobreposto'}
                                style={{
                                  position: 'absolute',
                                  inset: '0',
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  objectPosition: '25% 50%',
                                  filter: 'saturate(0.45) brightness(0.62) contrast(1.08)',
                                }}
                              />{' '}
                              <div
                                style={{
                                  position: 'absolute',
                                  inset: '0',
                                  background: '#1C3C9A',
                                  mixBlendMode: 'color',
                                  opacity: '0.42',
                                }}
                              />{' '}
                              <div
                                style={{
                                  position: 'absolute',
                                  inset: '0',
                                  background:
                                    'linear-gradient(180deg,rgba(11,14,19,0.55) 0%,rgba(11,14,19,0) 38%,rgba(11,14,19,0.2) 62%,rgba(11,14,19,0.92) 100%),linear-gradient(90deg,rgba(11,14,19,0.55) 0%,rgba(11,14,19,0) 35%)',
                                }}
                              />{' '}
                              <div
                                style={{
                                  position: 'absolute',
                                  inset: '0',
                                  backgroundImage:
                                    'linear-gradient(rgba(120,155,255,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(120,155,255,0.07) 1px,transparent 1px)',
                                  backgroundSize: '56px 56px',
                                }}
                              />{' '}
                            </div>{' '}
                            <span
                              style={{
                                position: 'absolute',
                                left: '510px',
                                top: '500px',
                                width: '26px',
                                height: '26px',
                                borderLeft: '2px solid #8FB0FF',
                                borderTop: '2px solid #8FB0FF',
                                opacity: v?.a2?.cop,
                                transition: v?.a2?.c2,
                              }}
                            />{' '}
                            <span
                              style={{
                                position: 'absolute',
                                left: '640px',
                                top: '500px',
                                width: '26px',
                                height: '26px',
                                borderRight: '2px solid #8FB0FF',
                                borderTop: '2px solid #8FB0FF',
                                opacity: v?.a2?.cop,
                                transition: v?.a2?.c2,
                              }}
                            />{' '}
                            <span
                              style={{
                                position: 'absolute',
                                left: '510px',
                                top: '660px',
                                width: '26px',
                                height: '26px',
                                borderLeft: '2px solid #8FB0FF',
                                borderBottom: '2px solid #8FB0FF',
                                opacity: v?.a2?.cop,
                                transition: v?.a2?.c2,
                              }}
                            />{' '}
                            <span
                              style={{
                                position: 'absolute',
                                left: '640px',
                                top: '660px',
                                width: '26px',
                                height: '26px',
                                borderRight: '2px solid #8FB0FF',
                                borderBottom: '2px solid #8FB0FF',
                                opacity: v?.a2?.cop,
                                transition: v?.a2?.c2,
                              }}
                            />{' '}
                            <span
                              style={{
                                position: 'absolute',
                                left: '574px',
                                top: '580px',
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                border: '1px solid rgba(143,176,255,0.7)',
                                display: 'grid',
                                placeItems: 'center',
                              }}
                            >
                              <span
                                style={{
                                  width: '10px',
                                  height: '10px',
                                  borderRadius: '50%',
                                  background: '#5B86FF',
                                  boxShadow: '0 0 14px #5B86FF',
                                }}
                              />
                            </span>{' '}
                            <span
                              style={{
                                position: 'absolute',
                                left: '587px',
                                top: '300px',
                                width: '2px',
                                height: '280px',
                                background: 'linear-gradient(#5B86FF,rgba(91,134,255,0.35))',
                                transformOrigin: '50% 0',
                                transform: v?.a2?.lsc,
                                transition: v?.a2?.c2,
                              }}
                            />{' '}
                            <div
                              style={{
                                position: 'absolute',
                                left: '360px',
                                top: '40px',
                                width: '520px',
                                padding: '22px 24px 20px',
                                borderRadius: '16px',
                                background: 'rgba(13,20,34,0.86)',
                                border: '1px solid rgba(96,140,255,0.42)',
                                boxShadow: '0 24px 60px -24px rgba(0,0,0,0.8)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px',
                                opacity: v?.a2?.cop,
                                transform: v?.a2?.ctf,
                                transition: v?.a2?.c1,
                              }}
                            >
                              {' '}
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  gap: '12px',
                                }}
                              >
                                <span style={{ fontSize: '24px', fontWeight: '600', letterSpacing: '-0.01em' }}>
                                  {'Pronto Atendimento'}
                                </span>
                                <span
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '14px',
                                    color: '#5BD69A',
                                  }}
                                >
                                  <span
                                    style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2FBF71' }}
                                  />
                                  {'Fila ao vivo'}
                                </span>
                              </div>{' '}
                              <div
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(3,1fr)',
                                  borderTop: '1px solid rgba(120,150,210,0.2)',
                                  borderBottom: '1px solid rgba(120,150,210,0.2)',
                                }}
                              >
                                {' '}
                                <div
                                  style={{ padding: '14px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}
                                >
                                  <span style={{ fontSize: '15px', color: '#9FB0CF' }}>{'Em espera'}</span>
                                  <span style={{ fontSize: '30px', fontWeight: '600' }}>{'14'}</span>
                                </div>{' '}
                                <div
                                  style={{
                                    padding: '14px 16px',
                                    borderLeft: '1px solid rgba(120,150,210,0.2)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '6px',
                                  }}
                                >
                                  <span style={{ fontSize: '15px', color: '#9FB0CF' }}>{'Tempo médio'}</span>
                                  <span style={{ fontSize: '30px', fontWeight: '600' }}>{'22 min'}</span>
                                </div>{' '}
                                <div
                                  style={{
                                    padding: '14px 16px',
                                    borderLeft: '1px solid rgba(120,150,210,0.2)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '6px',
                                  }}
                                >
                                  <span style={{ fontSize: '15px', color: '#9FB0CF' }}>{'Atendidos hoje'}</span>
                                  <span style={{ fontSize: '30px', fontWeight: '600' }}>{'186'}</span>
                                </div>{' '}
                              </div>{' '}
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {' '}
                                <span style={{ fontSize: '14px', color: '#9FB0CF' }}>
                                  {'Classificação de risco'}
                                </span>{' '}
                                <div style={{ display: 'flex', gap: '3px', height: '10px' }}>
                                  <span style={{ flex: '1', borderRadius: '2px', background: '#E5484D' }} />
                                  <span style={{ flex: '3', borderRadius: '2px', background: '#F2811D' }} />
                                  <span style={{ flex: '6', borderRadius: '2px', background: '#E8C21C' }} />
                                  <span style={{ flex: '3', borderRadius: '2px', background: '#2FBF71' }} />
                                  <span style={{ flex: '1', borderRadius: '2px', background: '#3D7BFF' }} />
                                </div>{' '}
                                <div
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontSize: '13px',
                                    color: '#C9D3E6',
                                  }}
                                >
                                  <span>{'Emergência 1'}</span>
                                  <span>{'Muito urgente 3'}</span>
                                  <span>{'Urgente 6'}</span>
                                  <span>{'Pouco urgente 3'}</span>
                                  <span>{'Não urgente 1'}</span>
                                </div>{' '}
                              </div>{' '}
                            </div>{' '}
                            <div
                              style={{
                                position: 'absolute',
                                left: '36px',
                                top: '330px',
                                width: '250px',
                                padding: '16px 18px',
                                borderRadius: '14px',
                                background: 'rgba(13,20,34,0.88)',
                                border: '1px solid rgba(96,140,255,0.38)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                opacity: v?.a2?.cop,
                                transform: v?.a2?.ctf,
                                transition: v?.a2?.c3,
                              }}
                            >
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <span style={{ fontSize: '15px', color: '#9FB0CF' }}>{'Ocupação de leitos'}</span>
                                <span style={{ fontSize: '24px', fontWeight: '600' }}>{'78%'}</span>
                              </div>
                              <div style={{ height: '6px', borderRadius: '3px', background: 'rgba(120,150,210,0.2)' }}>
                                <div
                                  style={{ width: '78%', height: '100%', borderRadius: '3px', background: '#5B86FF' }}
                                />
                              </div>
                              <span style={{ fontSize: '13px', color: '#9FB0CF' }}>{'94 de 120 leitos'}</span>
                            </div>{' '}
                            <div
                              style={{
                                position: 'absolute',
                                left: '36px',
                                top: '690px',
                                width: '340px',
                                padding: '16px 18px',
                                borderRadius: '14px',
                                background: 'rgba(13,20,34,0.88)',
                                border: '1px solid rgba(96,140,255,0.38)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                opacity: v?.a2?.cop,
                                transform: v?.a2?.ctf,
                                transition: v?.a2?.c4,
                              }}
                            >
                              <svg
                                width={'22'}
                                height={'22'}
                                viewBox={'0 0 24 24'}
                                fill={'none'}
                                stroke={'#ECEBE6'}
                                strokeWidth={'1.8'}
                                strokeLinecap={'round'}
                                strokeLinejoin={'round'}
                              >
                                <path
                                  d={
                                    'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z'
                                  }
                                />
                              </svg>
                              <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                                <span style={{ fontSize: '18px', fontWeight: '600' }}>{'Manutenção preventiva'}</span>
                                <span style={{ fontSize: '13px', color: '#9FB0CF' }}>
                                  {'Autoclave 02 · revisão em 3 dias'}
                                </span>
                              </span>
                              <span style={{ fontSize: '20px', color: '#5B86FF' }}>{'→'}</span>
                            </div>{' '}
                          </div>{' '}
                        </div>{' '}
                      </div>{' '}
                      {v?.showMarks ? (
                        <>
                          {' '}
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
                          />{' '}
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
                          />{' '}
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
                          />{' '}
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
                        </>
                      ) : null}{' '}
                    </div>{' '}
                    <figcaption
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
                      <span style={{ whiteSpace: 'nowrap' }}>{v?.figNum}</span>
                      <span style={{ textAlign: 'right' }}>{v?.figCap}</span>
                    </figcaption>{' '}
                  </figure>{' '}
                </>
              ) : null}{' '}
            </div>{' '}
          </div>{' '}
        </section>{' '}
        <section id={'trabalhos'} data-screen-label={'Trabalhos'} style={{ background: '#EFEEE9', color: '#0B0E13' }}>
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              padding: 'clamp(72px,9vw,128px) clamp(20px,3vw,40px)',
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
              {' '}
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
                  }}
                >
                  {'O Software completo que entrego'}
                </h2>
              </div>{' '}
              <span
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#5A5F66',
                }}
              >
                {'(01) Pensou em escalar? eu entrego o sistema de ponta a ponta, pronto para o futuro.'}
                <br />
              </span>{' '}
            </div>{' '}
            <div
              data-screen-label={'Cases bento'}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'stretch' }}
            >
              {' '}
              <a
                className='dh7'
                data-reveal={'clip'}
                href={'/cases/eli-control'}
                style={{
                  position: 'relative',
                  flex: '7 1 560px',
                  minWidth: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #0B0E13',
                  background: '#0B0E13',
                  color: '#ECEBE6',
                  overflow: 'hidden',
                  transition: 'border-color .25s',
                }}
              >
                {' '}
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    zIndex: '2',
                    padding: '8px 12px',
                    background: '#EFEEE9',
                    color: '#0B0E13',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '12px',
                    fontWeight: '500',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRight: '1px solid #0B0E13',
                    borderBottom: '1px solid #0B0E13',
                  }}
                >
                  {'01 · Projeto em destaque'}
                </span>{' '}
                <div
                  style={{
                    position: 'relative',
                    flex: '1 1 auto',
                    minHeight: 'clamp(240px,30vw,420px)',
                    overflow: 'hidden',
                    background: '#0B1424',
                  }}
                >
                  {' '}
                  <img
                    src={'/assets/eli_central.png'}
                    alt={'Eli Control: central operacional na web e tela da empresa no app, com dados de exemplo'}
                    style={{
                      position: 'absolute',
                      inset: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: '30% 40%',
                      display: 'block',
                      willChange: 'transform',
                    }}
                    data-parallax={'-0.1'}
                  />{' '}
                </div>{' '}
                <div
                  style={{
                    padding: 'clamp(20px,2.4vw,32px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    borderTop: '1px solid #22272F',
                  }}
                >
                  {' '}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                    }}
                  >
                    {' '}
                    <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <img
                        src={'/assets/eli_mark.png'}
                        alt={''}
                        style={{ height: 'clamp(34px,3vw,44px)', width: 'auto' }}
                      />
                      <span
                        style={{
                          fontSize: 'clamp(32px,3.6vw,52px)',
                          letterSpacing: '-0.035em',
                          fontWeight: '500',
                          lineHeight: '1',
                        }}
                      >
                        {'Eli Control'}
                      </span>
                    </span>{' '}
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        height: '44px',
                        padding: '0 20px',
                        borderRadius: '4px',
                        background: '#ECEBE6',
                        color: '#0B0E13',
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '13px',
                        fontWeight: '500',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {'Ver case'}
                      <span>{'→'}</span>
                    </span>{' '}
                  </div>{' '}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px clamp(24px,3vw,48px)',
                      alignItems: 'baseline',
                    }}
                  >
                    {' '}
                    <p
                      style={{
                        flex: '1.4 1 300px',
                        margin: '0',
                        fontSize: '17px',
                        lineHeight: '1.55',
                        color: '#B4BAC2',
                        textWrap: 'pretty',
                      }}
                    >
                      {
                        'Uma plataforma de monitoramento de refrigeração industrial com telemetria de equipamentos, alarmes, dashboards e operações multiempresa.'
                      }
                    </p>{' '}
                    <span
                      style={{
                        flex: '1 1 200px',
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        lineHeight: '1.7',
                        color: '#9AA1AB',
                      }}
                    >
                      {'Next.js · NestJS · TypeScript · PostgreSQL · MQTT'}
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
              </a>{' '}
              <div style={{ flex: '5 1 400px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {' '}
                <a
                  className='dh8'
                  data-reveal={'fade'}
                  data-delay={'150'}
                  href={'/cases/eli-pecas'}
                  style={{
                    flex: '1 1 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    border: '1px solid #0B0E13',
                    background: '#EFEEE9',
                    color: '#0B0E13',
                    transition: 'background .25s',
                  }}
                >
                  {' '}
                  <div
                    style={{
                      position: 'relative',
                      flex: '1 1 180px',
                      minHeight: '150px',
                      overflow: 'hidden',
                      background: '#16130F',
                      outline: '1px solid #0B0E13',
                    }}
                  >
                    <img
                      src={'/assets/elipecas_hero_v2.png'}
                      alt={'Eli Peças: dossiê do pedido no painel e carrinho no app'}
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: '100% 30%',
                        display: 'block',
                        willChange: 'transform',
                      }}
                      data-parallax={'0.07'}
                    />
                  </div>{' '}
                  <div
                    style={{
                      flex: '1.3 1 220px',
                      minWidth: '0',
                      padding: '16px 20px 18px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
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
                      {'02 · E-commerce'}
                    </span>{' '}
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img src={'/assets/elipecas/mark_ink.png'} alt={''} style={{ height: '26px', width: 'auto' }} />
                      <span
                        style={{
                          fontSize: 'clamp(22px,2vw,28px)',
                          fontWeight: '500',
                          letterSpacing: '-0.03em',
                          lineHeight: '1.05',
                        }}
                      >
                        {'Eli Peças'}
                      </span>
                    </span>{' '}
                    <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#3A3F46', textWrap: 'pretty' }}>
                      {'Loja de peças de refrigeração com pedidos, pagamentos e painel integrado ao WhatsApp.'}
                    </span>{' '}
                    <span
                      style={{
                        marginTop: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        fontWeight: '500',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {'Ver case'}
                      <span style={{ fontSize: '15px' }}>{'→'}</span>
                    </span>{' '}
                  </div>{' '}
                </a>{' '}
                <a
                  className='dh9'
                  data-reveal={'fade'}
                  data-delay={'250'}
                  href={'/cases/cultura-verde'}
                  style={{
                    flex: '1 1 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    border: '1px solid #0B0E13',
                    background: '#EFEEE9',
                    color: '#0B0E13',
                    transition: 'background .25s',
                  }}
                >
                  {' '}
                  <div
                    style={{
                      position: 'relative',
                      flex: '1 1 180px',
                      minHeight: '150px',
                      overflow: 'hidden',
                      background: '#16130F',
                      outline: '1px solid #0B0E13',
                    }}
                  >
                    <video
                      data-autoplay={''}
                      src={'/assets/culturaverde/site.mp4'}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload={'metadata'}
                      aria-label={'Navegação pelo site da Cultura Verde'}
                      data-parallax={'-0.05'}
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: '50% 0',
                        display: 'block',
                        willChange: 'transform',
                      }}
                    />
                  </div>{' '}
                  <div
                    style={{
                      flex: '1.3 1 220px',
                      minWidth: '0',
                      padding: '16px 20px 18px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
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
                      {'03 · Site e painel'}
                    </span>{' '}
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        style={{
                          fontSize: 'clamp(22px,2vw,28px)',
                          fontWeight: '500',
                          letterSpacing: '-0.03em',
                          lineHeight: '1.05',
                        }}
                      >
                        {'Cultura Verde'}
                      </span>
                    </span>{' '}
                    <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#3A3F46', textWrap: 'pretty' }}>
                      {'Site e painel de paisagismo, com projetos em antes e depois editáveis pela equipe.'}
                    </span>{' '}
                    <span
                      style={{
                        marginTop: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        fontWeight: '500',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {'Ver case'}
                      <span style={{ fontSize: '15px' }}>{'→'}</span>
                    </span>{' '}
                  </div>{' '}
                </a>{' '}
                <a
                  className='dh10'
                  data-reveal={'fade'}
                  data-delay={'350'}
                  href={'/cases/daniela-bosing'}
                  style={{
                    flex: '1 1 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    border: '1px solid #0B0E13',
                    background: '#EFEEE9',
                    color: '#0B0E13',
                    transition: 'background .25s',
                  }}
                >
                  {' '}
                  <div
                    style={{
                      position: 'relative',
                      flex: '1 1 180px',
                      minHeight: '150px',
                      overflow: 'hidden',
                      background: '#16130F',
                      outline: '1px solid #0B0E13',
                    }}
                  >
                    <video
                      data-autoplay={''}
                      src={'/assets/danibosing/site.mp4'}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload={'metadata'}
                      aria-label={'Navegação pelo site da Cheff Daniela Bosing'}
                      data-parallax={'0.09'}
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: '50% 0',
                        display: 'block',
                        willChange: 'transform',
                      }}
                    />
                  </div>{' '}
                  <div
                    style={{
                      flex: '1.3 1 220px',
                      minWidth: '0',
                      padding: '16px 20px 18px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
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
                      {'04 · Gastronomia'}
                    </span>{' '}
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img src={'/assets/danibosing/logo_ink.png'} alt={''} style={{ height: '30px', width: 'auto' }} />
                      <span
                        style={{
                          fontSize: 'clamp(22px,2vw,28px)',
                          fontWeight: '500',
                          letterSpacing: '-0.03em',
                          lineHeight: '1.05',
                        }}
                      >
                        {'Daniela Bosing'}
                      </span>
                    </span>{' '}
                    <span style={{ fontSize: '15px', lineHeight: '1.5', color: '#3A3F46', textWrap: 'pretty' }}>
                      {'Cardápio online e gestão de eventos, com orçamento, margem e etapas de produção.'}
                    </span>{' '}
                    <span
                      style={{
                        marginTop: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        fontWeight: '500',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {'Ver case'}
                      <span style={{ fontSize: '15px' }}>{'→'}</span>
                    </span>{' '}
                  </div>{' '}
                </a>{' '}
              </div>{' '}
              <a
                className='dh11'
                data-reveal={'fade'}
                data-delay={'200'}
                href={'/cases/ford'}
                style={{
                  flex: '1 1 100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  border: '1px solid #0B0E13',
                  background: '#EFEEE9',
                  color: '#0B0E13',
                  transition: 'background .25s',
                }}
              >
                {' '}
                <div
                  style={{
                    position: 'relative',
                    flex: '7 1 520px',
                    minHeight: 'clamp(220px,26vw,360px)',
                    overflow: 'hidden',
                    background: '#00095B',
                    outline: '1px solid #0B0E13',
                  }}
                >
                  {' '}
                  <img
                    src={'/assets/ford/01-home.png'}
                    alt={'Ford: tela inicial do portal de suprimentos de protótipos'}
                    style={{
                      position: 'absolute',
                      inset: '0',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: '0 0',
                      display: 'block',
                      willChange: 'transform',
                    }}
                    data-parallax={'-0.08'}
                  />{' '}
                  <span
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      zIndex: '2',
                      padding: '8px 12px',
                      background: '#EFEEE9',
                      color: '#0B0E13',
                      fontFamily: "'IBM Plex Mono',monospace",
                      fontSize: '12px',
                      fontWeight: '500',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      borderRight: '1px solid #0B0E13',
                      borderBottom: '1px solid #0B0E13',
                    }}
                  >
                    {'05 · Engenharia automotiva'}
                  </span>{' '}
                </div>{' '}
                <div
                  style={{
                    flex: '5 1 360px',
                    minWidth: '0',
                    padding: 'clamp(20px,2.4vw,32px)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  {' '}
                  <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <img
                      src={'/assets/ford_logo.png'}
                      alt={''}
                      style={{ height: 'clamp(28px,2.6vw,40px)', width: 'auto' }}
                    />
                    <span
                      style={{
                        fontSize: 'clamp(32px,3.6vw,52px)',
                        letterSpacing: '-0.035em',
                        fontWeight: '500',
                        lineHeight: '1',
                      }}
                    >
                      {'Ford'}
                    </span>
                  </span>{' '}
                  <span style={{ fontSize: '17px', lineHeight: '1.55', color: '#3A3F46', textWrap: 'pretty' }}>
                    {
                      'Plataforma que leva peças de protótipo do pedido à planta, com aprovações por etapa e rastreio ponta a ponta.'
                    }
                  </span>{' '}
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono',monospace",
                      fontSize: '12px',
                      lineHeight: '1.7',
                      color: '#5A5F66',
                    }}
                  >
                    {'Angular · Spring Boot · PostgreSQL · Cloud'}
                  </span>{' '}
                  <span
                    style={{
                      marginTop: 'auto',
                      alignSelf: 'flex-start',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      height: '44px',
                      padding: '0 20px',
                      borderRadius: '4px',
                      background: '#0B0E13',
                      color: '#ECEBE6',
                      fontFamily: "'IBM Plex Mono',monospace",
                      fontSize: '13px',
                      fontWeight: '500',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {'Ver case'}
                    <span>{'→'}</span>
                  </span>{' '}
                </div>{' '}
              </a>{' '}
            </div>{' '}
            <div style={{ margin: '0 auto', width: '100%', height: '831px' }}>
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
                {' '}
                <div style={{ overflow: 'hidden' }}>
                  <h2
                    data-reveal={'line'}
                    style={{
                      margin: '0 auto',
                      paddingBottom: '0.22em',
                      fontSize: 'clamp(36px,5.4vw,80px)',
                      lineHeight: '0.98',
                      letterSpacing: '-0.04em',
                      fontWeight: '500',
                      maxWidth: '1360px',
                    }}
                  >
                    {'Onde já trabalhei'}
                  </h2>
                </div>{' '}
                <a
                  className='dh12'
                  href={'#'}
                  style={{
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#0B0E13',
                  }}
                >
                  {'(02) Mais sobre mim →'}
                </a>{' '}
              </div>{' '}
              <div
                data-screen-label={'Experiência cards'}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
                  gap: '16px',
                }}
              >
                {' '}
                <article
                  className='dh13'
                  data-reveal={'fade'}
                  data-delay={'0'}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #0B0E13',
                    background: '#EFEEE9',
                    minWidth: '0',
                    transition: 'border-color .25s',
                  }}
                >
                  {' '}
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      overflow: 'hidden',
                      borderBottom: '1px solid #0B0E13',
                    }}
                  >
                    <svg
                      viewBox={'0 0 400 300'}
                      preserveAspectRatio={'xMidYMid slice'}
                      aria-hidden={'true'}
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        background: '#00095B',
                      }}
                    >
                      <g fill={'#3B5BD9'} opacity={'0.55'}>
                        <circle cx={'20'} cy={'20'} r={'1.4'} />
                        <circle cx={'20'} cy={'60'} r={'1.4'} />
                        <circle cx={'20'} cy={'100'} r={'1.4'} />
                        <circle cx={'20'} cy={'140'} r={'1.4'} />
                        <circle cx={'20'} cy={'180'} r={'1.4'} />
                        <circle cx={'20'} cy={'220'} r={'1.4'} />
                        <circle cx={'20'} cy={'260'} r={'1.4'} />
                        <circle cx={'60'} cy={'20'} r={'1.4'} />
                        <circle cx={'60'} cy={'60'} r={'1.4'} />
                        <circle cx={'60'} cy={'100'} r={'1.4'} />
                        <circle cx={'60'} cy={'140'} r={'1.4'} />
                        <circle cx={'60'} cy={'180'} r={'1.4'} />
                        <circle cx={'60'} cy={'220'} r={'1.4'} />
                        <circle cx={'60'} cy={'260'} r={'1.4'} />
                        <circle cx={'100'} cy={'20'} r={'1.4'} />
                        <circle cx={'100'} cy={'60'} r={'1.4'} />
                        <circle cx={'100'} cy={'100'} r={'1.4'} />
                        <circle cx={'100'} cy={'140'} r={'1.4'} />
                        <circle cx={'100'} cy={'180'} r={'1.4'} />
                        <circle cx={'100'} cy={'220'} r={'1.4'} />
                        <circle cx={'100'} cy={'260'} r={'1.4'} />
                        <circle cx={'140'} cy={'20'} r={'1.4'} />
                        <circle cx={'140'} cy={'60'} r={'1.4'} />
                        <circle cx={'140'} cy={'100'} r={'1.4'} />
                        <circle cx={'140'} cy={'140'} r={'1.4'} />
                        <circle cx={'140'} cy={'180'} r={'1.4'} />
                        <circle cx={'140'} cy={'220'} r={'1.4'} />
                        <circle cx={'140'} cy={'260'} r={'1.4'} />
                        <circle cx={'180'} cy={'20'} r={'1.4'} />
                        <circle cx={'180'} cy={'60'} r={'1.4'} />
                        <circle cx={'180'} cy={'100'} r={'1.4'} />
                        <circle cx={'180'} cy={'140'} r={'1.4'} />
                        <circle cx={'180'} cy={'180'} r={'1.4'} />
                        <circle cx={'180'} cy={'220'} r={'1.4'} />
                        <circle cx={'180'} cy={'260'} r={'1.4'} />
                        <circle cx={'220'} cy={'20'} r={'1.4'} />
                        <circle cx={'220'} cy={'60'} r={'1.4'} />
                        <circle cx={'220'} cy={'100'} r={'1.4'} />
                        <circle cx={'220'} cy={'140'} r={'1.4'} />
                        <circle cx={'220'} cy={'180'} r={'1.4'} />
                        <circle cx={'220'} cy={'220'} r={'1.4'} />
                        <circle cx={'220'} cy={'260'} r={'1.4'} />
                        <circle cx={'260'} cy={'20'} r={'1.4'} />
                        <circle cx={'260'} cy={'60'} r={'1.4'} />
                        <circle cx={'260'} cy={'100'} r={'1.4'} />
                        <circle cx={'260'} cy={'140'} r={'1.4'} />
                        <circle cx={'260'} cy={'180'} r={'1.4'} />
                        <circle cx={'260'} cy={'220'} r={'1.4'} />
                        <circle cx={'260'} cy={'260'} r={'1.4'} />
                        <circle cx={'300'} cy={'20'} r={'1.4'} />
                        <circle cx={'300'} cy={'60'} r={'1.4'} />
                        <circle cx={'300'} cy={'100'} r={'1.4'} />
                        <circle cx={'300'} cy={'140'} r={'1.4'} />
                        <circle cx={'300'} cy={'180'} r={'1.4'} />
                        <circle cx={'300'} cy={'220'} r={'1.4'} />
                        <circle cx={'300'} cy={'260'} r={'1.4'} />
                        <circle cx={'340'} cy={'20'} r={'1.4'} />
                        <circle cx={'340'} cy={'60'} r={'1.4'} />
                        <circle cx={'340'} cy={'100'} r={'1.4'} />
                        <circle cx={'340'} cy={'140'} r={'1.4'} />
                        <circle cx={'340'} cy={'180'} r={'1.4'} />
                        <circle cx={'340'} cy={'220'} r={'1.4'} />
                        <circle cx={'340'} cy={'260'} r={'1.4'} />
                        <circle cx={'380'} cy={'20'} r={'1.4'} />
                        <circle cx={'380'} cy={'60'} r={'1.4'} />
                        <circle cx={'380'} cy={'100'} r={'1.4'} />
                        <circle cx={'380'} cy={'140'} r={'1.4'} />
                        <circle cx={'380'} cy={'180'} r={'1.4'} />
                        <circle cx={'380'} cy={'220'} r={'1.4'} />
                        <circle cx={'380'} cy={'260'} r={'1.4'} />
                      </g>
                      <g fill={'none'} stroke={'#2A3FA8'} strokeWidth={'1'}>
                        <path d={'M-10 230 L120 150 L260 190 L410 90'} />
                        <path d={'M-10 90 L100 120 L220 60 L410 140'} />
                        <path d={'M60 310 L140 150 L220 60'} />
                      </g>
                      <g
                        fill={'none'}
                        stroke={'#8FB0FF'}
                        strokeWidth={'2.4'}
                        strokeLinecap={'round'}
                        strokeDasharray={'10 14'}
                      >
                        <path d={'M-10 230 L120 150 L260 190 L410 90'}>
                          <animate
                            attributeName={'stroke-dashoffset'}
                            from={'0'}
                            to={'-240'}
                            dur={'6s'}
                            repeatCount={'indefinite'}
                          />
                        </path>
                        <path d={'M-10 90 L100 120 L220 60 L410 140'}>
                          <animate
                            attributeName={'stroke-dashoffset'}
                            from={'0'}
                            to={'-240'}
                            dur={'8s'}
                            repeatCount={'indefinite'}
                          />
                        </path>
                      </g>
                      <circle cx={'120'} cy={'150'} r={'5'} fill={'#FFFFFF'} />
                      <circle cx={'120'} cy={'150'} r={'5'} fill={'none'} stroke={'#8FB0FF'} strokeWidth={'1.5'}>
                        <animate
                          attributeName={'r'}
                          values={'5;18;5'}
                          dur={'3s'}
                          begin={'0s'}
                          repeatCount={'indefinite'}
                        />
                        <animate
                          attributeName={'opacity'}
                          values={'1;0;1'}
                          dur={'3s'}
                          begin={'0s'}
                          repeatCount={'indefinite'}
                        />
                      </circle>
                      <circle cx={'260'} cy={'190'} r={'5'} fill={'#FFFFFF'} />
                      <circle cx={'260'} cy={'190'} r={'5'} fill={'none'} stroke={'#8FB0FF'} strokeWidth={'1.5'}>
                        <animate
                          attributeName={'r'}
                          values={'5;18;5'}
                          dur={'3s'}
                          begin={'0.7s'}
                          repeatCount={'indefinite'}
                        />
                        <animate
                          attributeName={'opacity'}
                          values={'1;0;1'}
                          dur={'3s'}
                          begin={'0.7s'}
                          repeatCount={'indefinite'}
                        />
                      </circle>
                      <circle cx={'220'} cy={'60'} r={'5'} fill={'#FFFFFF'} />
                      <circle cx={'220'} cy={'60'} r={'5'} fill={'none'} stroke={'#8FB0FF'} strokeWidth={'1.5'}>
                        <animate
                          attributeName={'r'}
                          values={'5;18;5'}
                          dur={'3s'}
                          begin={'1.4s'}
                          repeatCount={'indefinite'}
                        />
                        <animate
                          attributeName={'opacity'}
                          values={'1;0;1'}
                          dur={'3s'}
                          begin={'1.4s'}
                          repeatCount={'indefinite'}
                        />
                      </circle>
                      <circle cx={'100'} cy={'120'} r={'5'} fill={'#FFFFFF'} />
                      <circle cx={'100'} cy={'120'} r={'5'} fill={'none'} stroke={'#8FB0FF'} strokeWidth={'1.5'}>
                        <animate
                          attributeName={'r'}
                          values={'5;18;5'}
                          dur={'3s'}
                          begin={'2.0999999999999996s'}
                          repeatCount={'indefinite'}
                        />
                        <animate
                          attributeName={'opacity'}
                          values={'1;0;1'}
                          dur={'3s'}
                          begin={'2.0999999999999996s'}
                          repeatCount={'indefinite'}
                        />
                      </circle>
                    </svg>{' '}
                    <span
                      style={{
                        position: 'absolute',
                        left: '14px',
                        bottom: '14px',
                        height: '44px',
                        padding: '0 12px',
                        display: 'flex',
                        alignItems: 'center',
                        background: '#FFFFFF',
                        border: '1px solid #0B0E13',
                      }}
                    >
                      <img src={'/assets/ford_logo.png'} alt={'Ford'} style={{ height: '26px', width: 'auto' }} />
                    </span>{' '}
                  </div>{' '}
                  <div
                    style={{
                      padding: '18px 20px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      flex: '1',
                    }}
                  >
                    {' '}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        letterSpacing: '0.04em',
                        color: '#3A3F46',
                      }}
                    >
                      <span>{'Fev 2025 – atual'}</span>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#0B0E13',
                        }}
                      >
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#3D6BFF' }} />
                        {'Atual'}
                      </span>
                    </div>{' '}
                    <h3
                      style={{
                        margin: '0',
                        fontSize: 'clamp(22px,1.9vw,26px)',
                        fontWeight: '500',
                        letterSpacing: '-0.025em',
                        lineHeight: '1.1',
                      }}
                    >
                      {'Ford Motor Company'}
                    </h3>{' '}
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        lineHeight: '1.6',
                        color: '#5A5F66',
                      }}
                    >
                      {'Sistemas de Logística · Angular · Spring Boot · GCP'}
                    </span>{' '}
                  </div>{' '}
                </article>{' '}
                <article
                  className='dh14'
                  data-reveal={'fade'}
                  data-delay={'100'}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #0B0E13',
                    background: '#EFEEE9',
                    minWidth: '0',
                    transition: 'border-color .25s',
                  }}
                >
                  {' '}
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      overflow: 'hidden',
                      borderBottom: '1px solid #0B0E13',
                    }}
                  >
                    <svg
                      viewBox={'0 0 400 300'}
                      preserveAspectRatio={'xMidYMid slice'}
                      aria-hidden={'true'}
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        background: '#0B0E13',
                      }}
                    >
                      <g>
                        <rect x={'50'} y={'36'} width={'120'} height={'9'} rx={'2'} fill={'#3D6BFF'} />
                        <text x={'18'} y={'44'} fontFamily={'IBM Plex Mono, monospace'} fontSize={'9'} fill={'#4B525C'}>
                          {'01'}
                        </text>
                        <rect x={'70'} y={'62'} width={'200'} height={'9'} rx={'2'} fill={'#3A414B'} />
                        <text x={'18'} y={'70'} fontFamily={'IBM Plex Mono, monospace'} fontSize={'9'} fill={'#4B525C'}>
                          {'02'}
                        </text>
                        <rect x={'70'} y={'88'} width={'150'} height={'9'} rx={'2'} fill={'#3A414B'} />
                        <text x={'18'} y={'96'} fontFamily={'IBM Plex Mono, monospace'} fontSize={'9'} fill={'#4B525C'}>
                          {'03'}
                        </text>
                        <rect x={'90'} y={'114'} width={'90'} height={'9'} rx={'2'} fill={'#9AA1AB'} />
                        <text
                          x={'18'}
                          y={'122'}
                          fontFamily={'IBM Plex Mono, monospace'}
                          fontSize={'9'}
                          fill={'#4B525C'}
                        >
                          {'04'}
                        </text>
                        <rect x={'90'} y={'140'} width={'180'} height={'9'} rx={'2'} fill={'#3A414B'} />
                        <text
                          x={'18'}
                          y={'148'}
                          fontFamily={'IBM Plex Mono, monospace'}
                          fontSize={'9'}
                          fill={'#4B525C'}
                        >
                          {'05'}
                        </text>
                        <rect x={'70'} y={'166'} width={'110'} height={'9'} rx={'2'} fill={'#3A414B'} />
                        <text
                          x={'18'}
                          y={'174'}
                          fontFamily={'IBM Plex Mono, monospace'}
                          fontSize={'9'}
                          fill={'#4B525C'}
                        >
                          {'06'}
                        </text>
                        <rect x={'50'} y={'192'} width={'60'} height={'9'} rx={'2'} fill={'#3D6BFF'} />
                        <text
                          x={'18'}
                          y={'200'}
                          fontFamily={'IBM Plex Mono, monospace'}
                          fontSize={'9'}
                          fill={'#4B525C'}
                        >
                          {'07'}
                        </text>
                        <rect x={'50'} y={'218'} width={'140'} height={'9'} rx={'2'} fill={'#3A414B'} />
                        <text
                          x={'18'}
                          y={'226'}
                          fontFamily={'IBM Plex Mono, monospace'}
                          fontSize={'9'}
                          fill={'#4B525C'}
                        >
                          {'08'}
                        </text>
                        <rect x={'70'} y={'244'} width={'210'} height={'9'} rx={'2'} fill={'#3A414B'} />
                        <text
                          x={'18'}
                          y={'252'}
                          fontFamily={'IBM Plex Mono, monospace'}
                          fontSize={'9'}
                          fill={'#4B525C'}
                        >
                          {'09'}
                        </text>
                      </g>
                      <rect x={'180'} y={'114'} width={'7'} height={'12'} fill={'#ECEBE6'}>
                        <animate
                          attributeName={'opacity'}
                          values={'1;1;0;0'}
                          keyTimes={'0;0.5;0.5;1'}
                          dur={'1.1s'}
                          repeatCount={'indefinite'}
                        />
                      </rect>
                      <text
                        x={'300'}
                        y={'190'}
                        fontFamily={'IBM Plex Mono, monospace'}
                        fontSize={'120'}
                        fill={'#3D6BFF'}
                        opacity={'0.9'}
                      >
                        {'}'}
                      </text>
                    </svg>{' '}
                    <span
                      style={{
                        position: 'absolute',
                        left: '14px',
                        bottom: '14px',
                        height: '44px',
                        padding: '0 12px',
                        display: 'flex',
                        alignItems: 'center',
                        background: '#FFFFFF',
                        border: '1px solid #0B0E13',
                      }}
                    >
                      <span style={{ fontSize: '17px', letterSpacing: '-0.02em', color: '#0B0E13' }}>
                        <b style={{ fontWeight: '700' }}>{'Dev'}</b>
                        {'Sehn'}
                      </span>
                    </span>{' '}
                  </div>{' '}
                  <div
                    style={{
                      padding: '18px 20px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      flex: '1',
                    }}
                  >
                    {' '}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        letterSpacing: '0.04em',
                        color: '#3A3F46',
                      }}
                    >
                      <span>{'Mar 2024 – atual'}</span>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#0B0E13',
                        }}
                      >
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#3D6BFF' }} />
                        {'Atual'}
                      </span>
                    </div>{' '}
                    <h3
                      style={{
                        margin: '0',
                        fontSize: 'clamp(22px,1.9vw,26px)',
                        fontWeight: '500',
                        letterSpacing: '-0.025em',
                        lineHeight: '1.1',
                      }}
                    >
                      {'DevSehn'}
                    </h3>{' '}
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        lineHeight: '1.6',
                        color: '#5A5F66',
                      }}
                    >
                      {'Aplicações web · APIs · Integrações'}
                    </span>{' '}
                  </div>{' '}
                </article>{' '}
                <article
                  className='dh15'
                  data-reveal={'fade'}
                  data-delay={'200'}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #0B0E13',
                    background: '#EFEEE9',
                    minWidth: '0',
                    transition: 'border-color .25s',
                  }}
                >
                  {' '}
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      overflow: 'hidden',
                      borderBottom: '1px solid #0B0E13',
                    }}
                  >
                    <svg
                      viewBox={'0 0 400 300'}
                      preserveAspectRatio={'xMidYMid slice'}
                      aria-hidden={'true'}
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        background: '#FF8A3D',
                      }}
                    >
                      <g fill={'#FFFFFF'} opacity={'0.28'}>
                        <circle cx={'10'} cy={'10'} r={'1'} />
                        <circle cx={'10'} cy={'30'} r={'1'} />
                        <circle cx={'10'} cy={'50'} r={'1'} />
                        <circle cx={'10'} cy={'70'} r={'1'} />
                        <circle cx={'10'} cy={'90'} r={'1'} />
                        <circle cx={'10'} cy={'110'} r={'1'} />
                        <circle cx={'10'} cy={'130'} r={'1'} />
                        <circle cx={'10'} cy={'150'} r={'1'} />
                        <circle cx={'10'} cy={'170'} r={'1'} />
                        <circle cx={'10'} cy={'190'} r={'1'} />
                        <circle cx={'10'} cy={'210'} r={'1'} />
                        <circle cx={'10'} cy={'230'} r={'1'} />
                        <circle cx={'10'} cy={'250'} r={'1'} />
                        <circle cx={'10'} cy={'270'} r={'1'} />
                        <circle cx={'10'} cy={'290'} r={'1'} />
                        <circle cx={'30'} cy={'10'} r={'1'} />
                        <circle cx={'30'} cy={'30'} r={'1'} />
                        <circle cx={'30'} cy={'50'} r={'1'} />
                        <circle cx={'30'} cy={'70'} r={'1'} />
                        <circle cx={'30'} cy={'90'} r={'1'} />
                        <circle cx={'30'} cy={'110'} r={'1'} />
                        <circle cx={'30'} cy={'130'} r={'1'} />
                        <circle cx={'30'} cy={'150'} r={'1'} />
                        <circle cx={'30'} cy={'170'} r={'1'} />
                        <circle cx={'30'} cy={'190'} r={'1'} />
                        <circle cx={'30'} cy={'210'} r={'1'} />
                        <circle cx={'30'} cy={'230'} r={'1'} />
                        <circle cx={'30'} cy={'250'} r={'1'} />
                        <circle cx={'30'} cy={'270'} r={'1'} />
                        <circle cx={'30'} cy={'290'} r={'1'} />
                        <circle cx={'50'} cy={'10'} r={'1'} />
                        <circle cx={'50'} cy={'30'} r={'1'} />
                        <circle cx={'50'} cy={'50'} r={'1'} />
                        <circle cx={'50'} cy={'70'} r={'1'} />
                        <circle cx={'50'} cy={'90'} r={'1'} />
                        <circle cx={'50'} cy={'110'} r={'1'} />
                        <circle cx={'50'} cy={'130'} r={'1'} />
                        <circle cx={'50'} cy={'150'} r={'1'} />
                        <circle cx={'50'} cy={'170'} r={'1'} />
                        <circle cx={'50'} cy={'190'} r={'1'} />
                        <circle cx={'50'} cy={'210'} r={'1'} />
                        <circle cx={'50'} cy={'230'} r={'1'} />
                        <circle cx={'50'} cy={'250'} r={'1'} />
                        <circle cx={'50'} cy={'270'} r={'1'} />
                        <circle cx={'50'} cy={'290'} r={'1'} />
                        <circle cx={'70'} cy={'10'} r={'1'} />
                        <circle cx={'70'} cy={'30'} r={'1'} />
                        <circle cx={'70'} cy={'50'} r={'1'} />
                        <circle cx={'70'} cy={'70'} r={'1'} />
                        <circle cx={'70'} cy={'90'} r={'1'} />
                        <circle cx={'70'} cy={'110'} r={'1'} />
                        <circle cx={'70'} cy={'130'} r={'1'} />
                        <circle cx={'70'} cy={'150'} r={'1'} />
                        <circle cx={'70'} cy={'170'} r={'1'} />
                        <circle cx={'70'} cy={'190'} r={'1'} />
                        <circle cx={'70'} cy={'210'} r={'1'} />
                        <circle cx={'70'} cy={'230'} r={'1'} />
                        <circle cx={'70'} cy={'250'} r={'1'} />
                        <circle cx={'70'} cy={'270'} r={'1'} />
                        <circle cx={'70'} cy={'290'} r={'1'} />
                        <circle cx={'90'} cy={'10'} r={'1'} />
                        <circle cx={'90'} cy={'30'} r={'1'} />
                        <circle cx={'90'} cy={'50'} r={'1'} />
                        <circle cx={'90'} cy={'70'} r={'1'} />
                        <circle cx={'90'} cy={'90'} r={'1'} />
                        <circle cx={'90'} cy={'110'} r={'1'} />
                        <circle cx={'90'} cy={'130'} r={'1'} />
                        <circle cx={'90'} cy={'150'} r={'1'} />
                        <circle cx={'90'} cy={'170'} r={'1'} />
                        <circle cx={'90'} cy={'190'} r={'1'} />
                        <circle cx={'90'} cy={'210'} r={'1'} />
                        <circle cx={'90'} cy={'230'} r={'1'} />
                        <circle cx={'90'} cy={'250'} r={'1'} />
                        <circle cx={'90'} cy={'270'} r={'1'} />
                        <circle cx={'90'} cy={'290'} r={'1'} />
                        <circle cx={'110'} cy={'10'} r={'1'} />
                        <circle cx={'110'} cy={'30'} r={'1'} />
                        <circle cx={'110'} cy={'50'} r={'1'} />
                        <circle cx={'110'} cy={'70'} r={'1'} />
                        <circle cx={'110'} cy={'90'} r={'1'} />
                        <circle cx={'110'} cy={'110'} r={'1'} />
                        <circle cx={'110'} cy={'130'} r={'1'} />
                        <circle cx={'110'} cy={'150'} r={'1'} />
                        <circle cx={'110'} cy={'170'} r={'1'} />
                        <circle cx={'110'} cy={'190'} r={'1'} />
                        <circle cx={'110'} cy={'210'} r={'1'} />
                        <circle cx={'110'} cy={'230'} r={'1'} />
                        <circle cx={'110'} cy={'250'} r={'1'} />
                        <circle cx={'110'} cy={'270'} r={'1'} />
                        <circle cx={'110'} cy={'290'} r={'1'} />
                        <circle cx={'130'} cy={'10'} r={'1'} />
                        <circle cx={'130'} cy={'30'} r={'1'} />
                        <circle cx={'130'} cy={'50'} r={'1'} />
                        <circle cx={'130'} cy={'70'} r={'1'} />
                        <circle cx={'130'} cy={'90'} r={'1'} />
                        <circle cx={'130'} cy={'110'} r={'1'} />
                        <circle cx={'130'} cy={'130'} r={'1'} />
                        <circle cx={'130'} cy={'150'} r={'1'} />
                        <circle cx={'130'} cy={'170'} r={'1'} />
                        <circle cx={'130'} cy={'190'} r={'1'} />
                        <circle cx={'130'} cy={'210'} r={'1'} />
                        <circle cx={'130'} cy={'230'} r={'1'} />
                        <circle cx={'130'} cy={'250'} r={'1'} />
                        <circle cx={'130'} cy={'270'} r={'1'} />
                        <circle cx={'130'} cy={'290'} r={'1'} />
                        <circle cx={'150'} cy={'10'} r={'1'} />
                        <circle cx={'150'} cy={'30'} r={'1'} />
                        <circle cx={'150'} cy={'50'} r={'1'} />
                        <circle cx={'150'} cy={'70'} r={'1'} />
                        <circle cx={'150'} cy={'90'} r={'1'} />
                        <circle cx={'150'} cy={'110'} r={'1'} />
                        <circle cx={'150'} cy={'130'} r={'1'} />
                        <circle cx={'150'} cy={'150'} r={'1'} />
                        <circle cx={'150'} cy={'170'} r={'1'} />
                        <circle cx={'150'} cy={'190'} r={'1'} />
                        <circle cx={'150'} cy={'210'} r={'1'} />
                        <circle cx={'150'} cy={'230'} r={'1'} />
                        <circle cx={'150'} cy={'250'} r={'1'} />
                        <circle cx={'150'} cy={'270'} r={'1'} />
                        <circle cx={'150'} cy={'290'} r={'1'} />
                        <circle cx={'170'} cy={'10'} r={'1'} />
                        <circle cx={'170'} cy={'30'} r={'1'} />
                        <circle cx={'170'} cy={'50'} r={'1'} />
                        <circle cx={'170'} cy={'70'} r={'1'} />
                        <circle cx={'170'} cy={'90'} r={'1'} />
                        <circle cx={'170'} cy={'110'} r={'1'} />
                        <circle cx={'170'} cy={'130'} r={'1'} />
                        <circle cx={'170'} cy={'150'} r={'1'} />
                        <circle cx={'170'} cy={'170'} r={'1'} />
                        <circle cx={'170'} cy={'190'} r={'1'} />
                        <circle cx={'170'} cy={'210'} r={'1'} />
                        <circle cx={'170'} cy={'230'} r={'1'} />
                        <circle cx={'170'} cy={'250'} r={'1'} />
                        <circle cx={'170'} cy={'270'} r={'1'} />
                        <circle cx={'170'} cy={'290'} r={'1'} />
                        <circle cx={'190'} cy={'10'} r={'1'} />
                        <circle cx={'190'} cy={'30'} r={'1'} />
                        <circle cx={'190'} cy={'50'} r={'1'} />
                        <circle cx={'190'} cy={'70'} r={'1'} />
                        <circle cx={'190'} cy={'90'} r={'1'} />
                        <circle cx={'190'} cy={'110'} r={'1'} />
                        <circle cx={'190'} cy={'130'} r={'1'} />
                        <circle cx={'190'} cy={'150'} r={'1'} />
                        <circle cx={'190'} cy={'170'} r={'1'} />
                        <circle cx={'190'} cy={'190'} r={'1'} />
                        <circle cx={'190'} cy={'210'} r={'1'} />
                        <circle cx={'190'} cy={'230'} r={'1'} />
                        <circle cx={'190'} cy={'250'} r={'1'} />
                        <circle cx={'190'} cy={'270'} r={'1'} />
                        <circle cx={'190'} cy={'290'} r={'1'} />
                        <circle cx={'210'} cy={'10'} r={'1'} />
                        <circle cx={'210'} cy={'30'} r={'1'} />
                        <circle cx={'210'} cy={'50'} r={'1'} />
                        <circle cx={'210'} cy={'70'} r={'1'} />
                        <circle cx={'210'} cy={'90'} r={'1'} />
                        <circle cx={'210'} cy={'110'} r={'1'} />
                        <circle cx={'210'} cy={'130'} r={'1'} />
                        <circle cx={'210'} cy={'150'} r={'1'} />
                        <circle cx={'210'} cy={'170'} r={'1'} />
                        <circle cx={'210'} cy={'190'} r={'1'} />
                        <circle cx={'210'} cy={'210'} r={'1'} />
                        <circle cx={'210'} cy={'230'} r={'1'} />
                        <circle cx={'210'} cy={'250'} r={'1'} />
                        <circle cx={'210'} cy={'270'} r={'1'} />
                        <circle cx={'210'} cy={'290'} r={'1'} />
                        <circle cx={'230'} cy={'10'} r={'1'} />
                        <circle cx={'230'} cy={'30'} r={'1'} />
                        <circle cx={'230'} cy={'50'} r={'1'} />
                        <circle cx={'230'} cy={'70'} r={'1'} />
                        <circle cx={'230'} cy={'90'} r={'1'} />
                        <circle cx={'230'} cy={'110'} r={'1'} />
                        <circle cx={'230'} cy={'130'} r={'1'} />
                        <circle cx={'230'} cy={'150'} r={'1'} />
                        <circle cx={'230'} cy={'170'} r={'1'} />
                        <circle cx={'230'} cy={'190'} r={'1'} />
                        <circle cx={'230'} cy={'210'} r={'1'} />
                        <circle cx={'230'} cy={'230'} r={'1'} />
                        <circle cx={'230'} cy={'250'} r={'1'} />
                        <circle cx={'230'} cy={'270'} r={'1'} />
                        <circle cx={'230'} cy={'290'} r={'1'} />
                        <circle cx={'250'} cy={'10'} r={'1'} />
                        <circle cx={'250'} cy={'30'} r={'1'} />
                        <circle cx={'250'} cy={'50'} r={'1'} />
                        <circle cx={'250'} cy={'70'} r={'1'} />
                        <circle cx={'250'} cy={'90'} r={'1'} />
                        <circle cx={'250'} cy={'110'} r={'1'} />
                        <circle cx={'250'} cy={'130'} r={'1'} />
                        <circle cx={'250'} cy={'150'} r={'1'} />
                        <circle cx={'250'} cy={'170'} r={'1'} />
                        <circle cx={'250'} cy={'190'} r={'1'} />
                        <circle cx={'250'} cy={'210'} r={'1'} />
                        <circle cx={'250'} cy={'230'} r={'1'} />
                        <circle cx={'250'} cy={'250'} r={'1'} />
                        <circle cx={'250'} cy={'270'} r={'1'} />
                        <circle cx={'250'} cy={'290'} r={'1'} />
                        <circle cx={'270'} cy={'10'} r={'1'} />
                        <circle cx={'270'} cy={'30'} r={'1'} />
                        <circle cx={'270'} cy={'50'} r={'1'} />
                        <circle cx={'270'} cy={'70'} r={'1'} />
                        <circle cx={'270'} cy={'90'} r={'1'} />
                        <circle cx={'270'} cy={'110'} r={'1'} />
                        <circle cx={'270'} cy={'130'} r={'1'} />
                        <circle cx={'270'} cy={'150'} r={'1'} />
                        <circle cx={'270'} cy={'170'} r={'1'} />
                        <circle cx={'270'} cy={'190'} r={'1'} />
                        <circle cx={'270'} cy={'210'} r={'1'} />
                        <circle cx={'270'} cy={'230'} r={'1'} />
                        <circle cx={'270'} cy={'250'} r={'1'} />
                        <circle cx={'270'} cy={'270'} r={'1'} />
                        <circle cx={'270'} cy={'290'} r={'1'} />
                        <circle cx={'290'} cy={'10'} r={'1'} />
                        <circle cx={'290'} cy={'30'} r={'1'} />
                        <circle cx={'290'} cy={'50'} r={'1'} />
                        <circle cx={'290'} cy={'70'} r={'1'} />
                        <circle cx={'290'} cy={'90'} r={'1'} />
                        <circle cx={'290'} cy={'110'} r={'1'} />
                        <circle cx={'290'} cy={'130'} r={'1'} />
                        <circle cx={'290'} cy={'150'} r={'1'} />
                        <circle cx={'290'} cy={'170'} r={'1'} />
                        <circle cx={'290'} cy={'190'} r={'1'} />
                        <circle cx={'290'} cy={'210'} r={'1'} />
                        <circle cx={'290'} cy={'230'} r={'1'} />
                        <circle cx={'290'} cy={'250'} r={'1'} />
                        <circle cx={'290'} cy={'270'} r={'1'} />
                        <circle cx={'290'} cy={'290'} r={'1'} />
                        <circle cx={'310'} cy={'10'} r={'1'} />
                        <circle cx={'310'} cy={'30'} r={'1'} />
                        <circle cx={'310'} cy={'50'} r={'1'} />
                        <circle cx={'310'} cy={'70'} r={'1'} />
                        <circle cx={'310'} cy={'90'} r={'1'} />
                        <circle cx={'310'} cy={'110'} r={'1'} />
                        <circle cx={'310'} cy={'130'} r={'1'} />
                        <circle cx={'310'} cy={'150'} r={'1'} />
                        <circle cx={'310'} cy={'170'} r={'1'} />
                        <circle cx={'310'} cy={'190'} r={'1'} />
                        <circle cx={'310'} cy={'210'} r={'1'} />
                        <circle cx={'310'} cy={'230'} r={'1'} />
                        <circle cx={'310'} cy={'250'} r={'1'} />
                        <circle cx={'310'} cy={'270'} r={'1'} />
                        <circle cx={'310'} cy={'290'} r={'1'} />
                        <circle cx={'330'} cy={'10'} r={'1'} />
                        <circle cx={'330'} cy={'30'} r={'1'} />
                        <circle cx={'330'} cy={'50'} r={'1'} />
                        <circle cx={'330'} cy={'70'} r={'1'} />
                        <circle cx={'330'} cy={'90'} r={'1'} />
                        <circle cx={'330'} cy={'110'} r={'1'} />
                        <circle cx={'330'} cy={'130'} r={'1'} />
                        <circle cx={'330'} cy={'150'} r={'1'} />
                        <circle cx={'330'} cy={'170'} r={'1'} />
                        <circle cx={'330'} cy={'190'} r={'1'} />
                        <circle cx={'330'} cy={'210'} r={'1'} />
                        <circle cx={'330'} cy={'230'} r={'1'} />
                        <circle cx={'330'} cy={'250'} r={'1'} />
                        <circle cx={'330'} cy={'270'} r={'1'} />
                        <circle cx={'330'} cy={'290'} r={'1'} />
                        <circle cx={'350'} cy={'10'} r={'1'} />
                        <circle cx={'350'} cy={'30'} r={'1'} />
                        <circle cx={'350'} cy={'50'} r={'1'} />
                        <circle cx={'350'} cy={'70'} r={'1'} />
                        <circle cx={'350'} cy={'90'} r={'1'} />
                        <circle cx={'350'} cy={'110'} r={'1'} />
                        <circle cx={'350'} cy={'130'} r={'1'} />
                        <circle cx={'350'} cy={'150'} r={'1'} />
                        <circle cx={'350'} cy={'170'} r={'1'} />
                        <circle cx={'350'} cy={'190'} r={'1'} />
                        <circle cx={'350'} cy={'210'} r={'1'} />
                        <circle cx={'350'} cy={'230'} r={'1'} />
                        <circle cx={'350'} cy={'250'} r={'1'} />
                        <circle cx={'350'} cy={'270'} r={'1'} />
                        <circle cx={'350'} cy={'290'} r={'1'} />
                        <circle cx={'370'} cy={'10'} r={'1'} />
                        <circle cx={'370'} cy={'30'} r={'1'} />
                        <circle cx={'370'} cy={'50'} r={'1'} />
                        <circle cx={'370'} cy={'70'} r={'1'} />
                        <circle cx={'370'} cy={'90'} r={'1'} />
                        <circle cx={'370'} cy={'110'} r={'1'} />
                        <circle cx={'370'} cy={'130'} r={'1'} />
                        <circle cx={'370'} cy={'150'} r={'1'} />
                        <circle cx={'370'} cy={'170'} r={'1'} />
                        <circle cx={'370'} cy={'190'} r={'1'} />
                        <circle cx={'370'} cy={'210'} r={'1'} />
                        <circle cx={'370'} cy={'230'} r={'1'} />
                        <circle cx={'370'} cy={'250'} r={'1'} />
                        <circle cx={'370'} cy={'270'} r={'1'} />
                        <circle cx={'370'} cy={'290'} r={'1'} />
                        <circle cx={'390'} cy={'10'} r={'1'} />
                        <circle cx={'390'} cy={'30'} r={'1'} />
                        <circle cx={'390'} cy={'50'} r={'1'} />
                        <circle cx={'390'} cy={'70'} r={'1'} />
                        <circle cx={'390'} cy={'90'} r={'1'} />
                        <circle cx={'390'} cy={'110'} r={'1'} />
                        <circle cx={'390'} cy={'130'} r={'1'} />
                        <circle cx={'390'} cy={'150'} r={'1'} />
                        <circle cx={'390'} cy={'170'} r={'1'} />
                        <circle cx={'390'} cy={'190'} r={'1'} />
                        <circle cx={'390'} cy={'210'} r={'1'} />
                        <circle cx={'390'} cy={'230'} r={'1'} />
                        <circle cx={'390'} cy={'250'} r={'1'} />
                        <circle cx={'390'} cy={'270'} r={'1'} />
                        <circle cx={'390'} cy={'290'} r={'1'} />
                      </g>
                      <g fill={'none'} stroke={'#FFFFFF'} strokeLinejoin={'round'}>
                        <path
                          d={'M200.0 104.0L243.7 135.8L227.0 187.2L173.0 187.2L156.3 135.8Z'}
                          strokeWidth={'6'}
                          opacity={'1'}
                        >
                          <animateTransform
                            attributeName={'transform'}
                            type={'rotate'}
                            from={'0 200 150'}
                            to={'360 200 150'}
                            dur={'30s'}
                            repeatCount={'indefinite'}
                          />
                        </path>
                        <path
                          d={'M200.0 68.0L278.0 124.7L248.2 216.3L151.8 216.3L122.0 124.7Z'}
                          strokeWidth={'1.4'}
                          opacity={'0.75'}
                        >
                          <animateTransform
                            attributeName={'transform'}
                            type={'rotate'}
                            from={'360 200 150'}
                            to={'0 200 150'}
                            dur={'42s'}
                            repeatCount={'indefinite'}
                          />
                        </path>
                        <path
                          d={'M200.0 32.0L312.2 113.5L269.4 245.5L130.6 245.5L87.8 113.5Z'}
                          strokeWidth={'1.4'}
                          opacity={'0.5'}
                        >
                          <animateTransform
                            attributeName={'transform'}
                            type={'rotate'}
                            from={'0 200 150'}
                            to={'360 200 150'}
                            dur={'54s'}
                            repeatCount={'indefinite'}
                          />
                        </path>
                        <path
                          d={'M200.0 -4.0L346.5 102.4L290.5 274.6L109.5 274.6L53.5 102.4Z'}
                          strokeWidth={'1.4'}
                          opacity={'0.3'}
                        >
                          <animateTransform
                            attributeName={'transform'}
                            type={'rotate'}
                            from={'360 200 150'}
                            to={'0 200 150'}
                            dur={'66s'}
                            repeatCount={'indefinite'}
                          />
                        </path>
                      </g>
                      <circle cx={'200'} cy={'150'} r={'4'} fill={'#FFFFFF'} />
                    </svg>{' '}
                    <span
                      style={{
                        position: 'absolute',
                        left: '14px',
                        bottom: '14px',
                        height: '44px',
                        padding: '0 12px',
                        display: 'flex',
                        alignItems: 'center',
                        background: '#FFFFFF',
                        border: '1px solid #0B0E13',
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img
                          src={'/assets/maxxi_logo.png'}
                          alt={''}
                          style={{ height: '26px', width: '26px', borderRadius: '4px' }}
                        />
                        <span style={{ fontSize: '15px', fontWeight: '600', color: '#0B0E13' }}>{'Maxxi'}</span>
                      </span>
                    </span>{' '}
                  </div>{' '}
                  <div
                    style={{
                      padding: '18px 20px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      flex: '1',
                    }}
                  >
                    {' '}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        letterSpacing: '0.04em',
                        color: '#3A3F46',
                      }}
                    >
                      <span>{'Set 2025 - Ago - 2026'}</span>
                    </div>{' '}
                    <h3
                      style={{
                        margin: '0',
                        fontSize: 'clamp(22px,1.9vw,26px)',
                        fontWeight: '500',
                        letterSpacing: '-0.025em',
                        lineHeight: '1.1',
                      }}
                    >
                      {'Maxxi Data Informática'}
                    </h3>{' '}
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        lineHeight: '1.6',
                        color: '#5A5F66',
                      }}
                    >
                      {'CloudOps · Data & AI · Clean Architecture'}
                    </span>{' '}
                  </div>{' '}
                </article>{' '}
                <article
                  className='dh16'
                  data-reveal={'fade'}
                  data-delay={'300'}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid #0B0E13',
                    background: '#EFEEE9',
                    minWidth: '0',
                    transition: 'border-color .25s',
                  }}
                >
                  {' '}
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      overflow: 'hidden',
                      borderBottom: '1px solid #0B0E13',
                    }}
                  >
                    <svg
                      viewBox={'0 0 400 300'}
                      preserveAspectRatio={'xMidYMid slice'}
                      aria-hidden={'true'}
                      style={{
                        position: 'absolute',
                        inset: '0',
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        background: '#00995D',
                      }}
                    >
                      <g stroke={'#FFFFFF'} strokeWidth={'1.4'} opacity={'0.22'}>
                        <path d={'M35 30h10M40 25v10'} />
                        <path d={'M35 90h10M40 85v10'} />
                        <path d={'M35 150h10M40 145v10'} />
                        <path d={'M35 210h10M40 205v10'} />
                        <path d={'M35 270h10M40 265v10'} />
                        <path d={'M95 30h10M100 25v10'} />
                        <path d={'M95 90h10M100 85v10'} />
                        <path d={'M95 150h10M100 145v10'} />
                        <path d={'M95 210h10M100 205v10'} />
                        <path d={'M95 270h10M100 265v10'} />
                        <path d={'M155 30h10M160 25v10'} />
                        <path d={'M155 90h10M160 85v10'} />
                        <path d={'M155 150h10M160 145v10'} />
                        <path d={'M155 210h10M160 205v10'} />
                        <path d={'M155 270h10M160 265v10'} />
                        <path d={'M215 30h10M220 25v10'} />
                        <path d={'M215 90h10M220 85v10'} />
                        <path d={'M215 150h10M220 145v10'} />
                        <path d={'M215 210h10M220 205v10'} />
                        <path d={'M215 270h10M220 265v10'} />
                        <path d={'M275 30h10M280 25v10'} />
                        <path d={'M275 90h10M280 85v10'} />
                        <path d={'M275 150h10M280 145v10'} />
                        <path d={'M275 210h10M280 205v10'} />
                        <path d={'M275 270h10M280 265v10'} />
                        <path d={'M335 30h10M340 25v10'} />
                        <path d={'M335 90h10M340 85v10'} />
                        <path d={'M335 150h10M340 145v10'} />
                        <path d={'M335 210h10M340 205v10'} />
                        <path d={'M335 270h10M340 265v10'} />
                      </g>
                      <path
                        d={
                          'M-10 170 L70 170 L85 170 L95 150 L105 170 L125 170 L135 190 L150 80 L165 215 L178 170 L210 170 L225 155 L245 170 L300 170 L315 150 L325 170 L345 170 L355 190 L370 80 L385 215 L398 170 L420 170'
                        }
                        fill={'none'}
                        stroke={'#0A6B42'}
                        strokeWidth={'2'}
                        opacity={'0.6'}
                      />
                      <path
                        d={
                          'M-10 170 L70 170 L85 170 L95 150 L105 170 L125 170 L135 190 L150 80 L165 215 L178 170 L210 170 L225 155 L245 170 L300 170 L315 150 L325 170 L345 170 L355 190 L370 80 L385 215 L398 170 L420 170'
                        }
                        fill={'none'}
                        stroke={'#FFFFFF'}
                        strokeWidth={'3'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                        strokeDasharray={'180 900'}
                      >
                        <animate
                          attributeName={'stroke-dashoffset'}
                          from={'180'}
                          to={'-900'}
                          dur={'3.2s'}
                          repeatCount={'indefinite'}
                        />
                      </path>
                    </svg>{' '}
                    <span
                      style={{
                        position: 'absolute',
                        left: '14px',
                        bottom: '14px',
                        height: '44px',
                        padding: '0 12px',
                        display: 'flex',
                        alignItems: 'center',
                        background: '#FFFFFF',
                        border: '1px solid #0B0E13',
                      }}
                    >
                      <img src={'/assets/unimed_logo.png'} alt={'Unimed'} style={{ height: '24px', width: 'auto' }} />
                    </span>{' '}
                  </div>{' '}
                  <div
                    style={{
                      padding: '18px 20px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      flex: '1',
                    }}
                  >
                    {' '}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        letterSpacing: '0.04em',
                        color: '#3A3F46',
                      }}
                    >
                      <span>{'Ago 2022 – Mar 2024'}</span>
                    </div>{' '}
                    <h3
                      style={{
                        margin: '0',
                        fontSize: 'clamp(22px,1.9vw,26px)',
                        fontWeight: '500',
                        letterSpacing: '-0.025em',
                        lineHeight: '1.1',
                      }}
                    >
                      {'Unimed Vale do Caí'}
                    </h3>{' '}
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        lineHeight: '1.6',
                        color: '#5A5F66',
                      }}
                    >
                      {'Sistemas de Gestão Hospitalar'}
                    </span>{' '}
                  </div>{' '}
                </article>{' '}
              </div>{' '}
            </div>{' '}
          </div>
        </section>
        <section
          id={'formacao'}
          data-screen-label={'Formação'}
          style={{ background: '#EFEEE9', color: '#0B0E13', borderTop: '1px solid #0B0E13' }}
        >
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              padding: 'clamp(72px,9vw,128px) clamp(20px,3vw,40px)',
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
              {' '}
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
                  }}
                >
                  {'Courses & Certifications'}
                </h2>
              </div>{' '}
              <span
                style={{
                  fontFamily: "'IBM Plex Mono',monospace",
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#5A5F66',
                }}
              >
                {'(03) Formação e cursos'}
              </span>{' '}
            </div>{' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {' '}
              {(v?.filters || []).map((f: any, $index: number) => (
                <React.Fragment key={$index}>
                  {' '}
                  <button
                    onClick={f?.pick}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      height: '44px',
                      padding: '0 18px',
                      borderRadius: '4px',
                      border: '1px solid #0B0E13',
                      background: f?.bg,
                      color: f?.fg,
                      fontFamily: "'IBM Plex Mono',monospace",
                      fontSize: '12px',
                      fontWeight: '500',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'background .2s,color .2s',
                    }}
                  >
                    {f?.label}
                    <span style={{ opacity: '0.6' }}>{f?.count}</span>
                  </button>{' '}
                </React.Fragment>
              ))}{' '}
            </div>{' '}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,300px),1fr))',
                gap: '16px',
              }}
            >
              {' '}
              {(v?.courses || []).map((c: any, $index: number) => (
                <React.Fragment key={$index}>
                  {' '}
                  <article
                    className='dh17'
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      padding: '20px 20px 22px',
                      border: '1px solid #0B0E13',
                      background: '#EFEEE9',
                      minWidth: '0',
                      transition: 'border-color .25s,background .25s',
                    }}
                  >
                    {' '}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {' '}
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '5px 9px',
                          border: '1px solid #0B0E13',
                          background: c?.tagBg,
                          color: c?.tagFg,
                        }}
                      >
                        {c?.type}
                      </span>{' '}
                      <span style={{ color: '#5A5F66' }}>{c?.year}</span>{' '}
                    </div>{' '}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {' '}
                      <h3
                        style={{
                          margin: '0',
                          fontSize: 'clamp(20px,1.7vw,24px)',
                          fontWeight: '500',
                          letterSpacing: '-0.025em',
                          lineHeight: '1.12',
                          textWrap: 'balance',
                        }}
                      >
                        {c?.title}
                      </h3>{' '}
                      <span
                        style={{
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: '12px',
                          lineHeight: '1.6',
                          color: '#5A5F66',
                        }}
                      >
                        {c?.meta}
                      </span>{' '}
                    </div>{' '}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontFamily: "'IBM Plex Mono',monospace",
                        fontSize: '12px',
                        color: '#3A3F46',
                      }}
                    >
                      {' '}
                      <span style={{ letterSpacing: '0.06em', textTransform: 'uppercase', color: '#5A5F66' }}>
                        {'Level:'}
                      </span>{' '}
                      <span style={{ display: 'flex', gap: '4px' }}>
                        {(c?.dots || []).map((d: any, $index: number) => (
                          <React.Fragment key={$index}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: d?.bg }} />
                          </React.Fragment>
                        ))}
                      </span>{' '}
                      <span>{c?.level}</span>{' '}
                    </div>{' '}
                    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {' '}
                      <span
                        style={{
                          fontFamily: "'IBM Plex Mono',monospace",
                          fontSize: '12px',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                          color: '#5A5F66',
                        }}
                      >
                        {'Skills:'}
                      </span>{' '}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {' '}
                        {(c?.skills || []).map((s: any, $index: number) => (
                          <React.Fragment key={$index}>
                            <span
                              style={{
                                padding: '4px 9px',
                                border: '1px solid #C4C2BA',
                                fontSize: '13px',
                                lineHeight: '1.4',
                                color: '#0B0E13',
                              }}
                            >
                              {s}
                            </span>
                          </React.Fragment>
                        ))}{' '}
                      </div>{' '}
                    </div>{' '}
                  </article>{' '}
                </React.Fragment>
              ))}{' '}
            </div>{' '}
            {v?.hasMore ? (
              <>
                {' '}
                <button
                  className='dh18'
                  onClick={v?.toggleAll}
                  style={{
                    alignSelf: 'center',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    height: '48px',
                    padding: '0 22px',
                    borderRadius: '4px',
                    border: '1px solid #0B0E13',
                    background: 'transparent',
                    color: '#0B0E13',
                    fontFamily: "'IBM Plex Mono',monospace",
                    fontSize: '13px',
                    fontWeight: '500',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'background .2s,color .2s',
                  }}
                >
                  {v?.moreLabel}
                </button>{' '}
              </>
            ) : null}{' '}
          </div>{' '}
        </section>{' '}
        <footer id={'contato'} data-screen-label={'Contato'} style={{ background: '#0B0E13', color: '#ECEBE6' }}>
          {' '}
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              padding: 'clamp(80px,10vw,144px) clamp(20px,3vw,40px) 32px',
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
                {'(04) Contato'}
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
                  className='dh19'
                  href={'mailto:contato@devsehn.com'}
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
                <a className='dh20' href={'#'} style={{ color: '#ECEBE6' }}>
                  {'LinkedIn ↗'}
                </a>{' '}
                <a className='dh21' href={'#'} style={{ color: '#ECEBE6' }}>
                  {'GitHub ↗'}
                </a>{' '}
                <a className='dh22' href={'#'} style={{ color: '#ECEBE6' }}>
                  {'CV ↓'}
                </a>{' '}
                <a className='dh23' href={'#top'} style={{ color: '#9AA1AB' }}>
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
