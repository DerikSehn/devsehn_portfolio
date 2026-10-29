// @ts-nocheck
/* eslint-disable */
// Lógica portada de "DevSehn Portfolio v2.dc.html".
import React from "react";
import { DCLogic } from "@/lib/dc";

export default class Component extends DCLogic {
  state = { lang: 'pt', slide: 0, heroScale: 1, cf: 'all', cAll: false };
  heroWrap = React.createRef();
  static COURSES = [
    ['course','React Advanced Concepts','Rocketseat','2023','40h','advanced',['React','Context API','Hooks','+1']],
    ['bootcamp','NLW Java Journey','Rocketseat','2023','1 week','intermediate',['Java','Spring Boot','REST APIs','+1']],
    ['course','Next.js Best Practices','Next.js ORG','2024','30h','advanced',['Next.js','SSR','API Routes','+1']],
    ['certification','EF SET C1 Advanced Certificate','EF Education First','2024','','advanced',['English','Business Communication','Technical Writing']],
    ['course','Web Development, Mobile and Games','UniRitter','2024','60h','intermediate',['React Native','Game Development','UI/UX']],
    ['course','Computational Solutions Programming','UniRitter','2024','45h','intermediate',['Algorithms','Data Structures','Problem Solving']],
    ['certification','Ford Angular.js Mastery','Ford Motor Company','2025','','advanced',['Angular','TypeScript','Enterprise Development']],
    ['certification','Ford Spring Boot Mastery','Ford Motor Company','2025','','advanced',['Spring Boot','Microservices','REST APIs']],
    ['certification','Certified Scrum Developer','Ford Motor Company','2025','','intermediate',['Scrum','Agile','Project Management']],
    ['certification','42Crunch API Security Mastery','Ford Motor Company','2025','','advanced',['API Security','Cybersecurity','REST APIs']],
    ['course','Clean Architecture','Ford Motor Company','2025','','advanced',['Clean Architecture','Software Design','SOLID Principles']],
    ['course','Developer Cybersecurity','Ford Motor Company','2025','','advanced',['Cybersecurity','Secure Coding','OWASP']],
    ['certification','Entra ID Identity & Access Management','Microsoft Learn','2025','','intermediate',['Entra ID','IAM','Azure']],
    ['course','Spring Boot Deployment on Azure','Microsoft Learn','2025','','intermediate',['Spring Boot','Azure','DevOps']],
    ['course','MFA Security','Microsoft Learn','2025','','intermediate',['MFA','Security','Authentication']],
    ['course','SSPR (Self-Service Password Reset)','Microsoft Learn','2025','','intermediate',['SSPR','Password Reset','Security']],
    ['course','User & Group Management','Microsoft Learn','2025','','intermediate',['User Management','Group Management','Azure']],
    ['certification','AWS Certified Cloud Practitioner','AWS','2023','','beginner',['AWS','Cloud Computing','Cloud Services']],
    ['course','Usability & Game Dev','UniRitter','2024','60h','intermediate',['Usability','Game Development','UI/UX']],
    ['course','UX/UI','UniRitter','2024','60h','intermediate',['UX','UI','Design']]
  ];
  courseVals() {
    const all = Component.COURSES, cf = this.state.cf, LV = { beginner: 1, intermediate: 2, advanced: 3 };
    const TAG = { course: ['#EFEEE9', '#0B0E13'], bootcamp: ['#3D6BFF', '#FFFFFF'], certification: ['#0B0E13', '#ECEBE6'] };
    const f = all.filter(c => cf === 'all' || c[0] === cf), lim = 9, show = this.state.cAll ? f : f.slice(0, lim);
    const filters = [['all', 'All'], ['course', 'Course'], ['bootcamp', 'Bootcamp'], ['certification', 'Certification']].map(([k, label]) => ({
      label, count: k === 'all' ? all.length : all.filter(c => c[0] === k).length,
      bg: cf === k ? '#0B0E13' : 'transparent', fg: cf === k ? '#ECEBE6' : '#0B0E13',
      pick: () => this.setState({ cf: k, cAll: false })
    }));
    const courses = show.map(([type, title, org, year, dur, level, skills]) => ({
      type, title, year, level, skills, tagBg: TAG[type][0], tagFg: TAG[type][1],
      meta: [org, year, dur].filter(Boolean).join(' • '),
      dots: [1, 2, 3].map(i => ({ bg: i <= LV[level] ? '#2A52E0' : '#C4C2BA' }))
    }));
    return { filters, courses, hasMore: f.length > lim, moreLabel: this.state.cAll ? 'Mostrar menos ↑' : 'Mostrar todos (' + f.length + ') ↓', toggleAll: () => this.setState(s => ({ cAll: !s.cAll })) };
  }
  componentDidMount() {
    this.rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.ro = new ResizeObserver(() => this.fitHero());
    this.observe();
    this.motionInit();
    document.querySelectorAll('video[data-autoplay]').forEach(v => { if (v._ap) return; v._ap = 1; v.muted = true; v.defaultMuted = true; const go = () => { const p = v.play(); p && p.catch(() => {}); }; v.addEventListener('canplay', go); v.addEventListener('loadeddata', go); go(); });
    this.timer = setInterval(() => { if (!document.hidden) this.setState(s => ({ slide: (s.slide + 1) % 3 })); }, this.props.slideSeconds ? this.props.slideSeconds * 1000 : 6500);
  }
  componentDidUpdate() { this.observe(); this.motionInit(); }
  componentWillUnmount() { clearInterval(this.timer); this.ro && this.ro.disconnect(); this.motionStop(); }

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
    document.querySelectorAll('[data-reveal]').forEach(el => {
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
      const lim = r.height * 0.085, off = Math.max(-lim, Math.min(lim, (r.top + r.height / 2 - innerHeight / 2) * +el.getAttribute('data-parallax')));
      el.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0) scale(1.18)';
    });
  }
  motionStop() { this._map && this._map.forEach(l => l.forEach(el => { el.style.opacity = ''; el.style.transform = ''; el.style.clipPath = ''; })); this._io && this._io.disconnect(); this._io = null; removeEventListener('scroll', this._onScroll); removeEventListener('resize', this._onScroll); }

  observe() {
    const el = this.heroWrap.current;
    if (el && el !== this._obs) { this._obs = el; this.ro.observe(el); this.fitHero(); }
  }
  fitHero() {
    const el = this.heroWrap.current; if (!el) return;
    const s = el.clientWidth / 911;
    if (Math.abs(s - this.state.heroScale) > 0.001) this.setState({ heroScale: s });
  }
  slideVals(k) {
    const on = this.state.slide === k, rm = this.rm;
    const d = n => on ? `opacity .8s ease ${0.55 + n * 0.18}s, transform .9s cubic-bezier(.2,.7,.2,1) ${0.55 + n * 0.18}s` : 'opacity .35s ease, transform .35s ease';
    return {
      op: on ? 1 : 0, z: on ? 2 : 1, hid: on ? 'false' : 'true',
      tf: on || rm ? 'scale(1)' : 'scale(1.07)',
      tr: on ? `transform ${rm ? 0 : 8}s linear` : 'transform 0s linear 1.3s',
      cop: on ? 1 : 0, ctf: on || rm ? 'translateY(0)' : 'translateY(16px)',
      c1: d(0), c2: d(1), c3: d(2), c4: d(3),
      lsc: on ? 'scaleY(1)' : 'scaleY(0)',
      dash: on ? 0 : 700,
      dtr: on ? 'stroke-dashoffset 1.8s cubic-bezier(.4,0,.2,1) .7s' : 'stroke-dashoffset .3s ease'
    };
  }
  renderVals() {
    const pt = this.state.lang === 'pt';
    const caps = ['Telemetria de refrigeração industrial', 'Logística de importação e exportação', 'Gestão hospitalar e pronto atendimento'];
    return {
      ...this.courseVals(),
      heroWrap: this.heroWrap,
      heroScale: this.state.heroScale,
      a0: this.slideVals(0), a1: this.slideVals(1), a2: this.slideVals(2),
      figNum: 'Fig. 0' + (this.state.slide + 1) + ' / 03',
      figCap: caps[this.state.slide],
      showHeroImage: this.props.showHeroImage ?? true,
      showMarks: this.props.showGridMarks ?? true,
      ptBg: pt ? '#ECEBE6' : 'transparent',
      enBg: pt ? 'transparent' : '#ECEBE6',
      ptColor: pt ? '#0B0E13' : '#9AA1AB',
      enColor: pt ? '#9AA1AB' : '#0B0E13',
      setPT: () => this.setState({ lang: 'pt' }),
      setEN: () => this.setState({ lang: 'en' }),
      cases: [
        { n: '02', name: 'Ford', logo: '/assets/ford_logo.png', radius: '0', sector: 'Fev 2025 - atual', desc: 'Plataforma global de logística com Angular, Spring Boot, PostgreSQL e Kubernetes no GCP.' },
        { n: '03', name: 'Maxxi', logo: '/assets/maxxi_logo.png', radius: '8px', sector: 'inovação bayer, eztime · Full-stack', desc: 'Migrations, IA, controle de colheita, registro e sistema de ponto.' },
        { n: '04', name: 'Unimed', logo: '/assets/unimed_logo.png', radius: '6px', sector: 'Saúde e gestão hospitalar · Full-stack', desc: 'Módulo de manutenção preventiva e UniChat para +850 colaboradores.' }
      ],
      jobs: [
        { period: 'Fev 2025 – atual', company: 'Ford Motor Company', focus: 'Logística · Angular · Spring Boot · GCP', logo: '/assets/ford_logo.png', mono: false, current: true },
        { period: 'Mar 2024 – atual', company: 'DevSehn', focus: 'Aplicações web · APIs · Integrações', logo: '', mono: true, current: true },
        { period: 'Ago 2022 – Mar 2024', company: 'Unimed Vale do Caí', focus: 'Manutenção preventiva · UniChat', logo: '/assets/unimed_logo.png', mono: false, current: false }
      ]
    };
  }
}
