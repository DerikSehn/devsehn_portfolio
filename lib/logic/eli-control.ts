// @ts-nocheck
/* eslint-disable */
// GERADO por scripts/sync-design.mjs a partir de "Eli Control Case.dc.html". Não edite à mão.
import React from 'react';
import { DCLogic } from '@/lib/dc';

export default class Component extends DCLogic {
  state = { lang: 'pt' };
  componentDidMount() {
    const L0 = (window.dsI18n && window.dsI18n.lang) || (() => { try { return localStorage.getItem('ds-lang') === 'en' ? 'en' : 'pt'; } catch (e) { return null; } })(); if (L0 && L0 !== this.state.lang) this.setState({ lang: L0 });
    this.ro = new ResizeObserver(es => es.forEach(e => this.fit(e.target)));
    this.scan();
  }
  componentDidUpdate() { this.scan(); }
  componentWillUnmount() { this.ro && this.ro.disconnect(); }
  scan() {
    document.querySelectorAll('[data-fit]').forEach(el => {
      if (!el._fitObs) { el._fitObs = 1; this.ro.observe(el); }
      this.fit(el);
    });
  }
  fit(el) {
    const w = +el.getAttribute('data-fit'), c = el.firstElementChild;
    if (c && w) c.style.transform = 'scale(' + (el.clientWidth / w) + ')';
  }
  build() {
    let s = 11;
    const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
    const P = '#5B3FD9';
    const ic = {
      grid: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
      alert: 'M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01',
      users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
      factory: 'M2 20h20M4 20V9l5 3V9l5 3V4h4l2 16',
      bell: 'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.9 1.9 0 0 0 3.4 0',
      clip: 'M9 2h6v4H9zM16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
      cpu: 'M6 6h12v12H6zM9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M18 9h4M18 15h4M2 9h4M2 15h4',
      sliders: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6',
      buoy: 'M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8zM4.9 4.9l4.3 4.3M14.8 14.8l4.3 4.3M14.8 9.2l4.3-4.3M4.9 19.1l4.3-4.3'
    };
    const nav = a => ['grid','alert','users','factory','bell','clip','cpu','sliders','buoy'].map((k, i) => ({
      d: ic[k], c: k === 'alert' ? '#E5484D' : (i === a ? P : '#3F3B52'), bg: i === a ? '#EDE9FB' : 'transparent'
    }));
    const bars = (lvl, n = 26) => Array.from({ length: n }, () => { const v = r(); return { h: (lvl === 0 || v < 0.22 ? 2 : Math.round(3 + v * lvl)) + 'px' }; });
    const trend = t => t === null ? { t: 'Sem base anterior', tc: '#6B6880' } : { t: (t[0] === '-' ? '↘ ' : '↗ ') + t, tc: t[0] === '-' ? '#15803D' : '#C2410C' };
    const border = st => st === 'u' ? '#DC2626' : st === 'a' ? '#D9772B' : '#16A34A';
    const card = (name, time, tr, conn, lvl, st) => Object.assign({ name, time, conn, cc: conn[0] === '0' ? '#8A8799' : '#16A34A', bars: bars(lvl), border: border(st) }, trend(tr));
    const urgent = [card('Mercado Aurora','há 1 min','+42,8%','0/2',30,'u'), card('Frigorífico Serra','há 4 min','+18,1%','1/2',24,'u')];
    const attention = [card('Padaria Trigo Bom','há 37 h','-100%','0/1',0,'a'), card('Supermercado Vale','há 1 min','+12,5%','1/2',22,'a'), card('Hortifruti Central','agora','+3,0%','0/1',14,'a'), card('Atacado Norte','há 2 min','+69,2%','0/1',30,'a'), card('Empório Sul','há 1 min','-21,3%','0/1',18,'a'), card('Mercado Bela Vista','agora','+8,4%','2/3',20,'a'), card('Laticínios Campo','há 23 min',null,'0/1',0,'a')];
    const ok = [card('Mercado Exemplo','agora',null,'1/1',0,'o'), card('Padaria Modelo','agora','-4,1%','2/2',10,'o'), card('Mercearia Oliva','há 1 min','+1,2%','1/1',8,'o')];
    const spark = (flat) => Array.from({ length: 24 }, (_, i) => (i * 100 / 23).toFixed(1) + ',' + (flat ? 22 : (18 - r() * 6 - (i > 20 ? (i - 20) * 4 : 0))).toFixed(1)).join(' ');
    const kpis = [['Emergências abertas','24'],['Não vistas','3'],['Fora do SLA','11'],['Conversores offline','4'],['Sensores fora da faixa','6'],['Sensores sem dados','58'],['CLPs pendentes','1'],['Operações abertas','0']].map(([k, v], i) => ({ k, v, pts: spark(i === 6 || i === 3), op: (i === 6 || i === 3) ? '0' : '1' }));
    const kd = (name, time, m, mtta, mttr, tr, conn, lvl, st) => Object.assign(card(name, time, tr, conn, lvl, st), {
      metrics: [['Não vistas', m[0]], ['Fora da faixa', m[1]], ['Sem dados', m[2]], ['Investigações', m[3]]].map(([k, v], i) => ({ k, v: String(v), c: v > 0 && i < 2 ? '#DC2626' : v > 0 ? '#C2410C' : '#1E1B2E' })),
      mtta, mttr
    });
    const kanban = [
      { title: 'Requer ação', n: '2', dot: '#EF4444', bg: '#FEF2F2', c: '#B91C1C', cards: [
        kd('Mercado Aurora','há 1 min',[3,4,0,1],'6 min','41 min','+42,8%','0/2',30,'u'),
        kd('Frigorífico Serra','há 4 min',[1,2,1,0],'3 min','27 min','+18,1%','1/2',24,'u')] },
      { title: 'Atenção', n: '3', dot: '#F59E0B', bg: '#FFFBEB', c: '#B45309', cards: [
        kd('Padaria Trigo Bom','há 37 h',[0,0,8,1],'—','—',null,'0/1',0,'a'),
        kd('Supermercado Vale','há 1 min',[0,1,3,0],'9 min','1 h 12 min','+12,5%','1/2',22,'a'),
        kd('Atacado Norte','há 2 min',[0,1,0,0],'5 min','22 min','-21,3%','2/2',16,'a')] },
      { title: 'OK', n: '2', dot: '#22C55E', bg: '#F0FDF4', c: '#15803D', cards: [
        kd('Mercado Exemplo','agora',[0,0,0,0],'2 min','14 min','-4,1%','1/1',10,'o'),
        kd('Padaria Modelo','agora',[0,0,0,0],'3 min','19 min',null,'2/2',0,'o')] }
    ];
    const T = (name, v, label, sp, l1, l2, alarm, rng) => {
      const [mx, md, mn] = rng || [40, 0, -40];
      const f = Math.max(6, Math.min(100, (v - mn) / (mx - mn) * 100));
      return { isTemp: true, name, val: v.toFixed(1) + ' °C', label, sp: 'SP: ' + sp + ' °C', l1: 'Limites: ' + l1 + ' °C', l2: 'Limites: ' + l2 + ' °C', alarm,
        top: '+' + mx + '°', mid: md + '°', bot: mn + '°', fill: f + '%',
        grad: alarm ? 'linear-gradient(to top,#2563EB 55%,#F59E0B)' : 'linear-gradient(to top,#2563EB 60%,#7DB3F5)',
        bd: alarm ? '#F3C6CB' : '#E7E3F1' };
    };
    const inst = [
      T('Câmara de queijo [004]', 1.7, 'Temperatura', '0.0', '-6 a 6', '-4 a 4', false),
      T('Câmara congelados [015]', -14.6, 'Ambiente', '-14.0', '-20 a -8', '-18 a -10', true),
      T('Câmara resfriados [014]', 3.2, 'Temperatura', '0.0', '-6 a 6', '-4 a 4', false),
      T('Cam. cong. Frente [006]', -19.4, 'Ambiente', '-20.0', '-26 a -14', '-24 a -16', true),
      T('Cam. cong. Fundo [005]', -18.1, 'Ambiente', '-20.0', '-26 a -14', '-24 a -16', true),
      T('Cam. cong. Meio [007]', 9.6, 'Ambiente', '-20.0', '-26 a -14', '-24 a -16', true),
      { isRelay: true, name: 'PhaseLOG plus [001]', alarm: true, bd: '#F3C6CB' },
      T('Preparo [013]', 11.0, 'Temperatura', '11.0', '5 a 17', '7 a 15', true),
      { isPsi: true, name: 'RCK-862 plus [002]', alarm: true, bd: '#F3C6CB' },
      T('Túnel cong. [012]', -38.2, 'Ambiente', '-35.0', '-41 a -29', '-39 a -31', true, [30, -20, -70])
    ];
    const W = 790, H = 460, vmax = 30, vmin = -25;
    const Y = v => (vmax - v) / (vmax - vmin) * H;
    const g = (t, c, w) => Math.exp(-(((t - c) / w) ** 2));
    const ss = (a, b, t) => { const x = Math.min(1, Math.max(0, (t - a) / (b - a))); return x * x * (3 - 2 * x); };
    const pl = t => ss(.70, .75, t) * (1 - ss(.93, .985, t));
    const fn = {
      amb: t => -12.8 + 20 * g(t, .08, .014) + 20 * g(t, .47, .014) + 14 * pl(t) + 0.35 * Math.sin(t * 60),
      evap: t => -16.8 + 46 * g(t, .08, .011) + 46 * g(t, .47, .011) + 15.5 * pl(t) + 2.5 * g(t, .53, .02) + 0.3 * Math.sin(t * 45),
      desv: t => 0.2 + (t < .07 ? 1.4 : 0) + 21 * g(t, .08, .018) + 21 * g(t, .47, .018) + 14 * pl(t) + 2.5 * ss(.83, .86, t) * (1 - ss(.9, .93, t)),
      proc: t => 7 + ((g(t, .08, .03) > .3 || g(t, .47, .03) > .3 || (t > .86 && t < .9)) ? 1 : 0),
      set: () => -14
    };
    const path = f => { const p = []; for (let i = 0; i <= 240; i++) { const t = i / 240; p.push((t * W).toFixed(1) + ' ' + Y(f(t)).toFixed(1)); } return 'M' + p.join('L'); };
    const chart = { amb: path(fn.amb), evap: path(fn.evap), desv: path(fn.desv), proc: path(fn.proc), set: path(fn.set) };
    const tx = .47 * W;
    const dots = [['evap','#DC2626'],['desv','#F97316'],['proc','#CA8A04'],['amb','#2563EB'],['set','#16A34A']].map(([k, c]) => ({ cx: tx.toFixed(1), cy: Y(fn[k](.47)).toFixed(1), c }));
    const sensors = [['Ambiente','Sensor1','-7.4 °C'],['Desvio Relativo ao Setpoint','SetpointRelativeTemp','6.6 °C'],['Evaporador','Sensor2','-11.0 °C'],['Processo atual','Process','8']].map(([n, id, v]) => ({ n, id, v }));
    const fmt = v => v.toFixed(1).replace('.', ',');
    const st = ['R','R','S','D','D','D','D','R','S','S','R','S','R','R','S','S','R','R','S','R'];
    const stat = { R: ['Refrigeração', '#DBEAFE', '#1D4ED8'], S: ['Sem refrigeração', '#DCFCE7', '#166534'], D: ['Degelo', '#FFEDD5', '#9A3412'] };
    let di = 0;
    const rows = st.map((k, i) => {
      const hh = String(Math.floor(i * 10 / 60)).padStart(2, '0'), mm = String(i * 10 % 60).padStart(2, '0');
      const def = k === 'D'; if (def) di++;
      const amb = def ? 9.6 + di * 2.1 : (k === 'R' ? 3.3 + r() * 0.7 : 1.5 + r() * 0.6) + (i === 7 ? 2 : 0);
      const dv = amb - 2.0;
      const G = '#E6F4EA', Rd = '#FAD2CF', Yl = '#FEF3C7';
      return { n: String(11 + i), cells: [
        { v: '01/10/2026 ' + hh + ':' + mm, bg: '#FFFFFF', c: '#202124', fw: '400', al: 'left' },
        { v: fmt(dv), bg: G, c: '#137333', fw: '400', al: 'center' },
        { v: def ? '8,0' : '7,0', bg: def ? Rd : Yl, c: def ? '#A50E0E' : '#7A5A00', fw: '600', al: 'center' },
        { v: '2,0', bg: G, c: '#137333', fw: '400', al: 'center' },
        { v: fmt(amb), bg: def ? Rd : i === 7 ? Yl : G, c: def ? '#A50E0E' : '#137333', fw: def ? '600' : '400', al: 'center' },
        { v: fmt(23.4 + r() * 1.4), bg: Rd, c: '#A50E0E', fw: '600', al: 'center' },
        { v: stat[k][0], bg: stat[k][1], c: stat[k][2], fw: '500', al: 'center' }
      ] };
    });
    const letters = ['A','B','C','D','E','F','G','H'];
    const tabs = ['boss_08_uPC Inline 1.1.3 - 60','tcp-485_1_MT-512E Log 001','tcp-485_1_MT-512E Log 002','tcp-485_1_TC-900 clock 005','tcp-485_1_TC-900 clock 040'].map(t => ({ t, on: t.indexOf('clock 005') > 0 ? '#1A73E8' : '#3C4043', bg: t.indexOf('clock 005') > 0 ? '#E8F0FE' : 'transparent' }));
    const mnav = (a) => [['Alarmes', ic.grid], ['Alertas', ic.alert], ['Programas', ic.grid], ['Usuários', ic.users], ['Empresa', ic.factory]].map(([t, d], i) => ({ t, d, c: i === 1 ? '#E5484D' : '#3F3B52', bg: i === a ? '#F6E8DF' : 'transparent', bar: i === a ? '#F59E0B' : 'transparent' }));
    return { navCentral: nav(0), navEmpresa: nav(3), urgent, attention, ok, kpis, kanban, inst, instMobile: inst.slice(0, 3), chart, dots, tooltipX: tx, sensors, rows, letters, tabs, mnavEmpresa: mnav(4), mnavSensor: mnav(4) };
  }
  renderVals() {
    if (!this._d) this._d = this.build();
    const pt = this.state.lang === 'pt';
    return Object.assign({
      ptBg: pt ? '#ECEBE6' : 'transparent', enBg: pt ? 'transparent' : '#ECEBE6',
      ptColor: pt ? '#0B0E13' : '#9AA1AB', enColor: pt ? '#9AA1AB' : '#0B0E13',
      setPT: () => { this.setState({ lang: 'pt' }); window.dsI18n && window.dsI18n.set('pt'); }, setEN: () => { this.setState({ lang: 'en' }); window.dsI18n && window.dsI18n.set('en'); },
      showDiagram: this.props.showDiagram ?? true,
      showGallery: this.props.showGallery ?? true,
    }, this._d);
  }
}
