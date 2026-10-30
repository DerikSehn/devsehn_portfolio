// @ts-nocheck
/* eslint-disable */
// GERADO por scripts/sync-design.mjs a partir de "Cultura Verde Case.dc.html". Não edite à mão.
import React from 'react';
import { DCLogic } from '@/lib/dc';

export default class Component extends DCLogic {
  state = { lang: 'pt' };
  componentDidMount() {
    const L0 = (window.dsI18n && window.dsI18n.lang) || (() => { try { return localStorage.getItem('ds-lang') === 'en' ? 'en' : 'pt'; } catch (e) { return null; } })(); if (L0 && L0 !== this.state.lang) this.setState({ lang: L0 });
    this.ro = new ResizeObserver(es => es.forEach(e => this.fit(e.target)));
    this.scan();
    this.motionInit();
    document.querySelectorAll('video[data-autoplay]').forEach(v => { if (v._ap) return; v._ap = 1; v.muted = true; v.defaultMuted = true; const go = () => { const p = v.play(); p && p.catch(() => {}); }; v.addEventListener('canplay', go); v.addEventListener('loadeddata', go); go(); });
  }
  componentDidUpdate() { this.scan(); this.motionInit(); }
  componentWillUnmount() { this.ro && this.ro.disconnect(); this.motionStop(); }
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

  motionInit() {
    if (!this._io) {
      this._rm = (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) || this.props.motion === false;
      this._map = new Map(); this._seen = new WeakSet(); this._seenC = new WeakSet();
      this._io = new IntersectionObserver(es => es.forEach(e => {
        this._ioFired = 1;
        if (!e.isIntersecting) return;
        const list = this._map.get(e.target) || [];
        this._map.delete(e.target); this._io.unobserve(e.target);
        list.forEach(el => { if (el._to !== undefined) this.countUp(el); else this.reveal(el); });
      }), { threshold: 0.01, rootMargin: '0px 0px -6% 0px' });
      this._watch = el => {
        const k = el.getAttribute('data-reveal');
        const t = (k === 'line' || k === 'clip') ? el.parentElement : el;
        if (!this._map.has(t)) { this._map.set(t, []); this._io.observe(t); }
        this._map.get(t).push(el);
      };
      setTimeout(() => { if (!this._ioFired) { this._map.forEach(l => l.forEach(el => el._to !== undefined ? this.countUp(el) : this.reveal(el))); this._map.clear(); } }, 1500);
      this._onScroll = () => { if (!this._raf) this._raf = requestAnimationFrame(() => { this._raf = 0; this.scrollFx(); }); };
      addEventListener('scroll', this._onScroll, { passive: true });
      addEventListener('resize', this._onScroll);
    }
    const rm = this._rm;
    document.querySelectorAll('[data-reveal-legacy]').forEach(el => {
      if (this._seen.has(el)) return; this._seen.add(el); if (rm) return;
      const k = el.getAttribute('data-reveal'), S = el.style;
      if (k === 'clip') S.clipPath = 'inset(0 0 100% 0)';
      else if (k === 'line') S.transform = 'translateY(105%)';
      else if (k === 'grow') { S.transform = 'scaleX(0)'; S.transformOrigin = '0 50%'; }
      else { S.opacity = '0'; S.transform = 'translateY(' + (k === 'rise' ? 72 : 28) + 'px)'; }
      this._watch(el);
    });
    document.querySelectorAll('[data-count]').forEach(el => {
      if (this._seenC.has(el)) return; this._seenC.add(el);
      const n = el.firstChild; if (rm || !n || n.nodeType !== 3) return;
      el._to = parseFloat(el.getAttribute('data-count')); n.nodeValue = '0'; this._watch(el);
    });
    document.querySelectorAll('[data-marquee]').forEach(el => {
      if (el._mq || rm || !el.animate) return;
      el._mq = el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], { duration: +el.getAttribute('data-marquee') || 40000, iterations: Infinity });
    });
    document.querySelectorAll('[data-autoscroll]').forEach(el => {
      if (el._as || rm || !el.animate) return;
      const d = +el.getAttribute('data-autoscroll');
      el._as = el.animate([{ transform: 'translateY(0)', offset: 0 }, { transform: 'translateY(0)', offset: 0.1 }, { transform: 'translateY(-' + d + 'px)', offset: 0.9 }, { transform: 'translateY(-' + d + 'px)', offset: 1 }], { duration: 28000, iterations: Infinity, direction: 'alternate', easing: 'cubic-bezier(.45,0,.55,1)' });
    });
    this.scrollFx();
    clearTimeout(this._kick); this._kick = setTimeout(() => this.scrollFx(), 400);
  }
  reveal(el) {
    const d = +(el.getAttribute('data-delay') || 0), k = el.getAttribute('data-reveal'), E = 'cubic-bezier(.16,1,.3,1)';
    el.style.transition = 'opacity .9s ' + E + ' ' + d + 'ms, transform ' + (k === 'line' ? 1.1 : k === 'grow' ? 1.4 : 1) + 's ' + E + ' ' + d + 'ms, clip-path 1.3s cubic-bezier(.77,0,.18,1) ' + d + 'ms';
    requestAnimationFrame(() => requestAnimationFrame(() => { el.style.opacity = ''; el.style.transform = ''; el.style.clipPath = ''; }));
  }
  countUp(el) {
    const n = el.firstChild, to = el._to, t0 = performance.now(), dur = 1600;
    const f = t => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4); n.nodeValue = Math.round(to * e).toLocaleString('pt-BR'); if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  }
  scrollFx() {
    if (this._map && this._map.size) {
      const vh = innerHeight;
      this._map.forEach((list, t) => {
        const r = t.getBoundingClientRect();
        if (r.top < vh * 0.94 && r.bottom > 0) { this._map.delete(t); this._io && this._io.unobserve(t); list.forEach(el => el._to !== undefined ? this.countUp(el) : this.reveal(el)); }
      });
    }
    const max = document.documentElement.scrollHeight - innerHeight;
    document.querySelectorAll('[data-progress]').forEach(el => { el.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, scrollY / max) : 0).toFixed(4) + ')'; });
    if (this._rm) return;
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const r = el.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight) return;
      const off = (r.top + r.height / 2 - innerHeight / 2) * +el.getAttribute('data-parallax');
      el.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0) scale(1.18)';
    });
  }
  motionStop() { this._map && this._map.forEach(l => l.forEach(el => { el.style.opacity = ''; el.style.transform = ''; el.style.clipPath = ''; })); this._io && this._io.disconnect(); this._io = null; removeEventListener('scroll', this._onScroll); removeEventListener('resize', this._onScroll); }

  renderVals() {
    const pt = this.state.lang === 'pt';
    return {
      ptBg: pt ? '#ECEBE6' : 'transparent', enBg: pt ? 'transparent' : '#ECEBE6',
      ptColor: pt ? '#0B0E13' : '#9AA1AB', enColor: pt ? '#9AA1AB' : '#0B0E13',
      setPT: () => { this.setState({ lang: 'pt' }); window.dsI18n && window.dsI18n.set('pt'); }, setEN: () => { this.setState({ lang: 'en' }); window.dsI18n && window.dsI18n.set('en'); },
      showDiagram: this.props.showDiagram ?? true,
      showCallouts: this.props.showCallouts ?? true
    };
  }
}
