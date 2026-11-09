/* DevSehn · máquina de impressão do hero (Three.js).
   Recebe partículas de dados pela diagonal inferior direita e imprime telas na coluna
   "participante" do 3D marquee. A cena usa exatamente a mesma projeção do marquee em CSS
   (rotateX 62° · rotateZ −45°, ortográfica), então máquina e telas ficam alinhadas às colunas.
   Eixos do mundo: X = largura da coluna (gx), Y = altura (h), Z = comprimento da coluna (gy). */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js';

const IMAGES = ['ec-central', 'ford-home', 'ep-catalogo', 'db-home', 'ec-enterprise', 'ford-checklist', 'ep-admin', 'db-dashboard',
  'ec-widgets', 'ford-aprovacao', 'ep-home', 'db-pedido', 'ec-mobile', 'ford-logistica', 'ep-modal', 'db-site'];
const CODE = "const temp = await mqtt.read('camara/01'); if (temp > -18) alarm.notify(); SELECT * FROM pedidos WHERE status = 'novo'; <Dashboard live /> => {} [] 0x1F && || λ ∑ # @ ; deploy --prod";
const PAL = ['#8C9BFF', '#EFEDE7', '#8D9099', '#5BD69A', '#3D6BFF', '#C9CDD3'];
const SINAL = new THREE.Color('#2F4BF0'), SINAL_CLARO = new THREE.Color('#8C9BFF');
const R2 = Math.SQRT1_2, CX = Math.cos(62 * Math.PI / 180), SX = Math.sin(62 * Math.PI / 180);
const CAM_R = new THREE.Vector3(R2, 0, R2);
const CAM_U = new THREE.Vector3(CX * R2, SX, -CX * R2);
const CAM_Z = new THREE.Vector3().crossVectors(CAM_R, CAM_U);
const GAP = 34, V = 52; // espaço entre telas e velocidade da esteira (px da grade por segundo)

const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const rnd = (a, b) => a + Math.random() * (b - a);
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
// Mola amortecida: dá peso e follow-through aos movimentos (sobe, passa do ponto e assenta)
class Spring {
  constructor(v = 0, k = 120, c = 14) { this.x = v; this.v = 0; this.t = v; this.k = k; this.c = c; }
  step(dt) { this.v += ((this.t - this.x) * this.k - this.v * this.c) * dt; this.x += this.v * dt; return this.x; }
}

export default function machine({ hero, anchor, mq, base, reduced = false, start = Promise.resolve() }) {
  const plane = mq.querySelector('.ds-mq-plane'), stage = mq.querySelector('.ds-mq-stage');
  const cols = [...plane.querySelectorAll('.ds-mq-col')];
  if (!plane || !stage || !cols.length) return;

  // ---------- renderer, câmera e luz ----------
  const canvas = document.createElement('canvas');
  canvas.className = 'ds-machine'; canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:absolute;left:0;top:0;z-index:0;pointer-events:none;opacity:0;transition:opacity 1.2s ease';
  mq.after(canvas);
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' }); }
  catch (e) { canvas.remove(); return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(0, 1, 0, -1, 1, 40000);
  camera.up.copy(CAM_U);

  // Ambiente para reflexos nos chanfros (softboxes, como num estúdio do Blender)
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.add(new THREE.Mesh(new THREE.BoxGeometry(20, 20, 20), new THREE.MeshBasicMaterial({ color: 0x0c0e12, side: THREE.BackSide })));
  const softbox = (w, h, color, pos, look) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide })); m.position.copy(pos); m.lookAt(look); envScene.add(m); };
  softbox(10, 4, 0xf3f1ea, new THREE.Vector3(-4, 9, -3), new THREE.Vector3(0, 0, 0));
  softbox(3, 9, 0x6d84ff, new THREE.Vector3(9, 2, 6), new THREE.Vector3(0, 0, 0));
  softbox(6, 2, 0xffffff, new THREE.Vector3(-9, 3, 5), new THREE.Vector3(0, 0, 0));
  scene.environment = pmrem.fromScene(envScene, 0.04).texture;

  scene.add(new THREE.HemisphereLight(0xdfe4ff, 0x10131a, 1.1));
  const key = new THREE.DirectionalLight(0xfff6ea, 3.4);
  key.castShadow = true; key.shadow.mapSize.set(1024, 1024); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.6;
  Object.assign(key.shadow.camera, { left: -700, right: 700, top: 700, bottom: -700, near: 1, far: 4000 });
  scene.add(key, key.target);
  const rim = new THREE.DirectionalLight(0x3d6bff, 2.2); scene.add(rim, rim.target);
  const intakeLight = new THREE.PointLight(0x5b7bff, 0, 520, 1.6); scene.add(intakeLight);
  const eyeLight = new THREE.PointLight(0x3d6bff, 0, 360, 1.8); scene.add(eyeLight);

  const shadowCatcher = new THREE.Mesh(new THREE.PlaneGeometry(2600, 2600), new THREE.ShadowMaterial({ opacity: 0.5 }));
  shadowCatcher.rotation.x = -Math.PI / 2; shadowCatcher.receiveShadow = true; scene.add(shadowCatcher);

  // ---------- a máquina: o "D" do logotipo, extrudado e com vida ----------
  const K = 9; // px da grade por unidade do símbolo (o símbolo mede 42 × 44 unidades)
  const W = 440, PLINTH = 24;
  const rig = new THREE.Group(); scene.add(rig);           // posição e escala na coluna
  const body = new THREE.Group(); rig.add(body);            // respiração, inclinação e squash
  const lx = x => (x - 33) * K;                              // x do símbolo -> Z (gy)
  const ly = y => (54 - y) * K;                              // y do símbolo -> altura

  const graphite = new THREE.MeshPhysicalMaterial({ color: 0x2a2e37, metalness: 0.22, roughness: 0.44, clearcoat: 0.8, clearcoatRoughness: 0.18, envMapIntensity: 0.75 });
  const graphiteDark = new THREE.MeshStandardMaterial({ color: 0x0b0d11, metalness: 0.3, roughness: 0.6 });
  const paper = new THREE.MeshStandardMaterial({ color: 0xbdb9b0, metalness: 0, roughness: 0.7, envMapIntensity: 0.4 });
  const glow = (c, i = 1) => new THREE.MeshBasicMaterial({ color: new THREE.Color(c).multiplyScalar(i), toneMapped: false });

  // Contorno do símbolo (haste, arco, canal e anel do nó), amostrado em pontos
  const arcPts = (cx, cy, r, a0, a1, n) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
  const aIn = Math.atan2(35 - 32, 27.68 - 34);
  const outline = [[12, 10], [32, 10], ...arcPts(32, 32, 22, -Math.PI / 2, Math.PI / 2, 48).slice(1), [12, 54], [12, 35], [27.68, 35],
    ...arcPts(34, 32, 7, aIn, aIn - Math.PI * 2 + 2 * (Math.PI - aIn), 40).slice(1), [12, 29]];
  // a forma usa (−z, y) para que, depois de girar, a haste fique do lado da saída
  const shape = new THREE.Shape(outline.map(([x, y]) => new THREE.Vector2(-lx(x), ly(y))));
  const dGeo = new THREE.ExtrudeGeometry(shape, { depth: W, bevelEnabled: true, bevelThickness: 7, bevelSize: 6, bevelSegments: 5, curveSegments: 4 });
  dGeo.rotateY(Math.PI / 2); dGeo.translate(-W / 2, PLINTH, 0);
  const dMesh = new THREE.Mesh(dGeo, graphite); dMesh.castShadow = true; dMesh.receiveShadow = true; body.add(dMesh);

  // Interior do anel e do canal: fundo escuro, para não vazar
  const ringBack = new THREE.Mesh(new THREE.CylinderGeometry(7 * K - 2, 7 * K - 2, W - 46, 40), graphiteDark);
  ringBack.rotation.z = Math.PI / 2; ringBack.position.set(23, PLINTH + ly(32), lx(34)); body.add(ringBack);
  const canalBack = new THREE.Mesh(new THREE.BoxGeometry(W - 46, 6 * K - 4, (27.68 - 12) * K + 20), graphiteDark);
  canalBack.position.set(23, PLINTH + ly(32), lx((12 + 27.68) / 2) - 8); body.add(canalBack);

  // Fita de luz contornando o D na face lateral (o "contorno técnico")
  const strip = new THREE.CatmullRomCurve3([[13.6, 11.6], [32, 11.6], ...arcPts(32, 32, 20.4, -Math.PI / 2, Math.PI / 2, 24).slice(1), [13.6, 52.4]]
    .map(([x, y]) => new THREE.Vector3(-W / 2 - 7.5, PLINTH + ly(y), lx(x))), false, 'centripetal');
  const stripMat = glow(SINAL_CLARO, 0.55);
  body.add(new THREE.Mesh(new THREE.TubeGeometry(strip, 160, 1.8, 6, false), stripMat));

  // Luz do canal: o caminho do nó até a haste, por onde a "impressão" passa
  const canalMat = glow(SINAL, 0.6);
  const canalLight = new THREE.Mesh(new THREE.BoxGeometry(10, 3, (27.68 - 13) * K), canalMat);
  canalLight.position.set(-W / 2 + 18, PLINTH + ly(32) - 3 * K + 6, lx((13 + 27.68) / 2)); body.add(canalLight);

  // O nó azul vira o olho: núcleo luminoso, pupila que olha e um brilho fixo
  const eye = new THREE.Group(); eye.position.set(-W / 2 - 4, PLINTH + ly(32), lx(34)); body.add(eye);
  const ER = 3.5 * K * 1.3;
  const core = new THREE.Mesh(new THREE.SphereGeometry(ER, 48, 32), new THREE.MeshPhysicalMaterial({ color: 0x0f1d8a, emissive: 0x2f4bf0, emissiveIntensity: 1.1, roughness: 0.2, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.05 }));
  eye.add(core);
  const pivot = new THREE.Group(); eye.add(pivot);
  const pupil = new THREE.Mesh(new THREE.SphereGeometry(ER * 0.5, 24, 16), new THREE.MeshStandardMaterial({ color: 0x07080b, roughness: 0.2, metalness: 0.2 }));
  pupil.scale.set(1.15, 1.15, 0.28); pupil.position.z = ER * 0.92; pivot.add(pupil);
  const iris = new THREE.Mesh(new THREE.TorusGeometry(ER * 0.6, 1.2, 8, 48), glow(SINAL_CLARO, 0.7));
  iris.position.z = ER * 0.86; pivot.add(iris);
  const spark = new THREE.Mesh(new THREE.SphereGeometry(ER * 0.13, 12, 8), glow('#ffffff', 1.4));
  spark.position.set(-ER * 0.35, ER * 0.45, -ER * 0.55); eye.add(spark);
  eyeLight.position.set(-W / 2 - 40, PLINTH + ly(32), lx(34)); body.add(eyeLight);

  // Topo: painel em papel, leds de status e a barra de leitura
  const topPanel = new THREE.Mesh(new THREE.BoxGeometry(W - 70, 4, (32 - 15) * K), paper);
  topPanel.position.set(0, PLINTH + ly(10) + 9, lx(23.5)); topPanel.castShadow = true; body.add(topPanel);
  const leds = [0, 1, 2].map(i => { const m = new THREE.Mesh(new THREE.CapsuleGeometry(4, 10, 4, 8), glow(SINAL_CLARO, 0.25)); m.rotation.x = Math.PI / 2; m.position.set(-W / 2 + 44, PLINTH + ly(10) + 13, lx(16 + i * 3.2)); body.add(m); return m; });
  const scanBar = new THREE.Mesh(new THREE.BoxGeometry(W - 90, 3, 8), glow(SINAL_CLARO, 1.6));
  scanBar.position.set(0, PLINTH + ly(10) + 12, lx(16)); scanBar.visible = false; body.add(scanBar);

  // Boca de entrada no arco (de frente para o fluxo de dados)
  const mouth = new THREE.Group(); mouth.position.set(0, PLINTH + ly(32), lx(54) + 6); body.add(mouth);
  const lip = new THREE.Mesh(new THREE.BoxGeometry(W - 120, 7 * K, 26), graphite); lip.castShadow = true; mouth.add(lip);
  const mouthGlowMat = glow(SINAL, 0.5);
  const mouthGlow = new THREE.Mesh(new THREE.BoxGeometry(W - 150, 7 * K - 28, 4), mouthGlowMat); mouthGlow.position.z = 13.5; mouth.add(mouthGlow);
  for (let i = 0; i < 5; i++) { const s = new THREE.Mesh(new THREE.BoxGeometry(W - 140, 2.5, 3), graphiteDark); s.position.set(0, -7 * K / 2 + 22 + i * (7 * K - 44) / 4, 16); mouth.add(s); }
  intakeLight.position.set(0, PLINTH + ly(32), lx(54) + 60); body.add(intakeLight);

  // Base com a linha de luz e a fenda de saída na haste
  const plinthShape = (() => { const w = W + 64, d = 42 * K + 70, r = 22, s = new THREE.Shape(); s.moveTo(-w / 2 + r, -d / 2); s.lineTo(w / 2 - r, -d / 2); s.quadraticCurveTo(w / 2, -d / 2, w / 2, -d / 2 + r); s.lineTo(w / 2, d / 2 - r); s.quadraticCurveTo(w / 2, d / 2, w / 2 - r, d / 2); s.lineTo(-w / 2 + r, d / 2); s.quadraticCurveTo(-w / 2, d / 2, -w / 2, d / 2 - r); s.lineTo(-w / 2, -d / 2 + r); s.quadraticCurveTo(-w / 2, -d / 2, -w / 2 + r, -d / 2); return s; })();
  const plinthGeo = new THREE.ExtrudeGeometry(plinthShape, { depth: PLINTH - 6, bevelEnabled: true, bevelThickness: 3, bevelSize: 3, bevelSegments: 3 });
  plinthGeo.rotateX(-Math.PI / 2);
  const plinth = new THREE.Mesh(plinthGeo, new THREE.MeshPhysicalMaterial({ color: 0x121419, metalness: 0.4, roughness: 0.45, clearcoat: 0.4 }));
  plinth.position.z = lx(33); plinth.castShadow = true; plinth.receiveShadow = true; rig.add(plinth);
  const baseLineMat = glow(SINAL, 0.9);
  const baseLine = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 42 * K + 30), baseLineMat);
  baseLine.position.set(-(W + 64) / 2 - 1, PLINTH - 8, lx(33)); rig.add(baseLine);
  const slot = new THREE.Mesh(new THREE.BoxGeometry(320, 6, 6), glow(SINAL_CLARO, 0.7));
  slot.position.set(0, 6, lx(12) - 36); rig.add(slot);
  const H_M = PLINTH + 44 * K + 16;

  // ---------- telas impressas ----------
  const loader = new THREE.TextureLoader();
  const sheetGeo = new THREE.PlaneGeometry(1, 1); sheetGeo.rotateX(-Math.PI / 2); // deitada no plano, comprimento em Z
  const textures = IMAGES.map(n => loader.loadAsync(base + n + '.webp').then(t => { t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }).catch(() => null));
  const sheetVS = `varying vec2 vUv; varying float vZ; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.); vZ = w.z; gl_Position = projectionMatrix * viewMatrix * w; }`;
  const sheetFS = `uniform sampler2D map; uniform float uExit, uBright, uAspect; uniform vec3 uSinal; varying vec2 vUv; varying float vZ;
    void main(){
      float d = uExit - vZ;
      if (d < 0.0) discard;
      vec3 full = texture2D(map, vUv).rgb;
      vec2 cells = vec2(26.0, 26.0 * uAspect);
      vec3 sk = texture2D(map, (floor(vUv * cells) + .5) / cells).rgb;
      float l = dot(sk, vec3(.299, .587, .114));
      vec3 skel = mix(vec3(.07, .08, .1), vec3(.42, .45, .52), smoothstep(.25, .8, l));
      skel *= .75 + .25 * step(.5, fract(vUv.y * cells.y * .5));
      vec3 col = mix(skel, full, smoothstep(30.0, 78.0, d));
      float scan = exp(-pow((d - 54.0) / 5.0, 2.0));
      col = col * uBright + uSinal * scan * 1.4 + uSinal * exp(-d / 10.0) * .5;
      gl_FragColor = vec4(col, 1.0);
      #include <colorspace_fragment>
    }`;
  const sheets = [];
  let imgIx = 0;
  const makeSheet = (tex) => {
    const aspect = tex.image.height / tex.image.width;
    const mat = new THREE.ShaderMaterial({ vertexShader: sheetVS, fragmentShader: sheetFS, toneMapped: false,
      uniforms: { map: { value: tex }, uExit: { value: 0 }, uBright: { value: 1 }, uAspect: { value: aspect }, uSinal: { value: SINAL.clone() } } });
    const m = new THREE.Mesh(sheetGeo, mat); m.renderOrder = -1; scene.add(m);
    return { mesh: m, mat, aspect, z: 0, L: 0, hover: new Spring(0, 90, 16), bright: 1 };
  };

  // ---------- partículas de dados ----------
  const glyphs = [...new Set(CODE.replace(/\s/g, ''))];
  const atlas = document.createElement('canvas'); const AC = 16, AR = Math.ceil(glyphs.length / 16), CELL = 64;
  atlas.width = AC * CELL; atlas.height = AR * CELL;
  const actx = atlas.getContext('2d'); actx.fillStyle = '#fff'; actx.textAlign = 'center'; actx.textBaseline = 'middle';
  actx.font = `500 ${CELL * 0.72}px "IBM Plex Mono", ui-monospace, monospace`;
  glyphs.forEach((g, i) => actx.fillText(g, (i % AC + 0.5) * CELL, (Math.floor(i / AC) + 0.54) * CELL));
  const atlasTex = new THREE.CanvasTexture(atlas);
  const N = innerWidth < 700 ? 150 : 280;
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), size = new Float32Array(N), cell = new Float32Array(N), alpha = new Float32Array(N);
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  pGeo.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
  pGeo.setAttribute('aSize', new THREE.BufferAttribute(size, 1).setUsage(THREE.DynamicDrawUsage));
  pGeo.setAttribute('aCell', new THREE.BufferAttribute(cell, 1));
  pGeo.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1).setUsage(THREE.DynamicDrawUsage));
  const pMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
    uniforms: { atlas: { value: atlasTex }, uPR: { value: renderer.getPixelRatio() }, uGrid: { value: new THREE.Vector2(AC, AR) } },
    vertexShader: `attribute vec3 aColor; attribute float aSize, aCell, aAlpha; uniform float uPR; varying vec3 vC; varying float vCell, vA;
      void main(){ vC = aColor; vCell = aCell; vA = aAlpha; gl_PointSize = aSize * uPR; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
    fragmentShader: `uniform sampler2D atlas; uniform vec2 uGrid; varying vec3 vC; varying float vCell, vA;
      void main(){
        vec2 p = gl_PointCoord; float a;
        if (vCell >= 0.0) { vec2 c = vec2(mod(vCell, uGrid.x), floor(vCell / uGrid.x)); a = texture2D(atlas, vec2((c.x + p.x) / uGrid.x, 1.0 - (c.y + p.y) / uGrid.y)).a; }
        else if (vCell > -1.5) { a = smoothstep(.5, .0, length(p - .5)); a *= a; }
        else { vec2 q = abs(p - .5); a = max(smoothstep(.05, .0, q.x) * smoothstep(.5, .0, q.y), smoothstep(.05, .0, q.y) * smoothstep(.5, .0, q.x)) + smoothstep(.18, .0, length(p - .5)); }
        gl_FragColor = vec4(vC, clamp(a * vA, 0.0, 1.0));
      }`
  });
  const points = new THREE.Points(pGeo, pMat); points.frustumCulled = false; scene.add(points);
  const parts = Array.from({ length: N }, () => ({}));

  // ---------- layout (lê a geometria real do marquee) ----------
  const L = { s: 1, x0: 0, y0: 0, w: 1, h: 1, k: -1, gx: 0, gy: 0, ms: 1, exit: 0, colStart: 0, colW: 300, intake: new THREE.Vector3() };
  const project = (x, y, z) => ({ x: L.x0 + L.s * (R2 * x + R2 * z), y: L.y0 + L.s * (CX * R2 * (z - x) - SX * y) });
  let hiddenCol = null;
  function layout() {
    const hr = hero.getBoundingClientRect();
    L.w = hero.clientWidth; L.h = hero.clientHeight;
    canvas.style.width = L.w + 'px'; canvas.style.height = L.h + 'px';
    renderer.setSize(L.w, L.h, false);
    const cs = getComputedStyle(stage);
    L.s = new DOMMatrixReadOnly(cs.transform === 'none' ? undefined : cs.transform).a || 1;
    L.x0 = parseFloat(cs.left) || 0; L.y0 = parseFloat(cs.top) || 0;
    // âncora: centro visual da coluna da direita do hero
    const ar = anchor.getBoundingClientRect();
    const ax = ar.left - hr.left + ar.width / 2, ayc = ar.top - hr.top + ar.height / 2;
    L.ms = clamp(ar.width * 0.44 / (L.s * R2 * (W + 42 * K)), 0.45, 1.1);
    const ay = ayc + L.s * SX * H_M * L.ms * 0.32;               // a base fica abaixo do centro
    const A = (ax - L.x0) / (L.s * R2), B = (ay - L.y0) / (L.s * CX * R2);
    const gxWant = (A - B) / 2;
    let best = 0, bd = Infinity;
    cols.forEach((c, i) => { const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - gxWant); if (d < bd) { bd = d; best = i; } });
    const c = cols[best];
    L.k = best; L.colW = c.offsetWidth; L.gx = c.offsetLeft + c.offsetWidth / 2; L.gy = A - L.gx; L.colStart = c.offsetTop;
    if (hiddenCol && hiddenCol !== c && canvas.style.opacity === '1') hiddenCol.style.visibility = '';
    if (canvas.style.opacity === '1') { c.style.visibility = 'hidden'; hiddenCol = c; }
    rig.position.set(L.gx, 0, L.gy); rig.scale.setScalar(L.ms);
    L.exit = L.gy + lx(12) * L.ms - 30 * L.ms;
    L.intake.set(L.gx, (PLINTH + ly(32)) * L.ms, L.gy + (lx(54) + 20) * L.ms);
    // câmera igual à projeção CSS
    camera.left = 0; camera.right = L.w / L.s; camera.top = 0; camera.bottom = -L.h / L.s; camera.updateProjectionMatrix();
    camera.position.copy(CAM_R).multiplyScalar(-L.x0 / L.s).addScaledVector(CAM_U, L.y0 / L.s).addScaledVector(CAM_Z, 9000);
    camera.lookAt(camera.position.clone().sub(CAM_Z));
    const c0 = new THREE.Vector3(L.gx, 0, L.gy);
    key.position.copy(c0).add(new THREE.Vector3(-900, 1500, -500)); key.target.position.copy(c0);
    rim.position.copy(c0).add(new THREE.Vector3(700, 500, 900)); rim.target.position.copy(c0);
    shadowCatcher.position.set(L.gx, 0, L.gy);
    pMat.uniforms.uPR.value = renderer.getPixelRatio(); if (typeof sMat !== 'undefined') sMat.uniforms.uPR.value = renderer.getPixelRatio();
    sheets.forEach(sh => { sh.z = L.exit + sh.rel; sh.L = L.colW * sh.aspect; place(sh); });
  }
  function place(sh) {
    sh.mesh.position.set(L.gx, 0.6, sh.z); sh.mesh.scale.set(L.colW, 1, sh.L);
    sh.mat.uniforms.uExit.value = L.exit;
  }
  const offscreen = sh => { const p = project(L.gx, 0, sh.z + sh.L / 2); return p.x < -260 || p.y < -260; };

  // ---------- estado de animação ----------
  const sp = { scale: new Spring(reduced ? 1 : 0.001, 70, 9), drop: new Spring(reduced ? 0 : 260, 80, 11), lean: new Spring(0, 60, 9),
    squash: new Spring(0, 260, 12), yaw: new Spring(0, 40, 10), blink: new Spring(1, 900, 40), gx: new Spring(0, 60, 11), gy: new Spring(0, 60, 11), gz: new Spring(1, 60, 11) };
  let t = 0, booted = reduced, feeding = reduced ? 1 : 0, nextBlink = 2, nextSaccade = 1, sacc = new THREE.Vector3(-1, 0.1, 0.2);
  const pointer = { x: 0, y: 0, on: false };
  let hovered = null, texList = [];

  function spawnParticle(p, initial) {
    const typ = Math.random();
    p.cell = typ < 0.58 ? Math.floor(Math.random() * glyphs.length) : typ < 0.9 ? -1 : -2;
    const c = new THREE.Color(p.cell === -2 ? '#ffffff' : PAL[Math.floor(Math.random() * PAL.length)]);
    p.c = c; p.base = p.cell >= 0 ? rnd(11, 17) : p.cell === -1 ? rnd(6, 13) : rnd(16, 26);
    p.from = new THREE.Vector3(L.gx + rnd(-320, 320) * L.ms, rnd(10, 360) * L.ms, L.intake.z + rnd(650, 1500));
    p.to = L.intake.clone().add(new THREE.Vector3(rnd(-70, 70) * L.ms, rnd(-36, 36) * L.ms, 0));
    p.wob = rnd(20, 60); p.ph = rnd(0, 6.28); p.sp = rnd(0.16, 0.3);
    p.t = initial ? Math.random() : 0; p.wait = initial ? 0 : rnd(0, 0.6);
  }
  function updateParticles(dt, boost) {
    for (let i = 0; i < N; i++) {
      const p = parts[i];
      if (!p.from) spawnParticle(p, true);
      if (p.wait > 0) { p.wait -= dt; alpha[i] = 0; continue; }
      p.t += dt * p.sp * (0.6 + boost * 1.4) * (reduced ? 0 : 1);
      if (p.t >= 1) { spawnParticle(p, false); pulse = Math.min(1.6, pulse + 0.05); alpha[i] = 0; continue; }
      const e = Math.pow(p.t, 1.7), w = (1 - p.t) * p.wob;
      const x = p.from.x + (p.to.x - p.from.x) * e + Math.sin(p.ph + t * 1.7) * w;
      const y = p.from.y + (p.to.y - p.from.y) * e + Math.cos(p.ph + t * 1.3) * w * 0.6;
      const z = p.from.z + (p.to.z - p.from.z) * e;
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
      const near = smooth(0.75, 1, p.t);
      const flick = p.cell === -2 ? 0.6 + 0.4 * Math.sin(t * 9 + p.ph) : 1;
      alpha[i] = smooth(0, 0.08, p.t) * (0.55 + near * 0.9) * (0.4 + boost * 0.6) * flick * feeding;
      size[i] = p.base * (1 - near * 0.65) * L.s * 1.6 * (innerWidth < 700 ? 0.8 : 1);
      col[i * 3] = p.c.r; col[i * 3 + 1] = p.c.g; col[i * 3 + 2] = p.c.b;
      cell[i] = p.cell;
    }
    pGeo.attributes.position.needsUpdate = pGeo.attributes.aSize.needsUpdate = pGeo.attributes.aAlpha.needsUpdate = pGeo.attributes.aColor.needsUpdate = pGeo.attributes.aCell.needsUpdate = true;
  }
  let pulse = 0;

  function newestSheet() { return sheets[sheets.length - 1]; }
  function addSheet(leading) {
    const tex = texList[imgIx++ % texList.length];
    const sh = makeSheet(tex); sh.L = L.colW * sh.aspect; sh.z = leading + sh.L / 2; sh.rel = sh.z - L.exit; sh.ejected = false; sheets.push(sh); place(sh); return sh;
  }
  function prefill() {
    // telas já impressas, da saída da máquina até a borda esquerda (já no brilho do fundo)
    let lead = L.exit - GAP * 0.5;
    const tmp = [];
    for (let guard = 0; guard < 40; guard++) {
      const tex = texList[(imgIx + guard) % texList.length]; const L2 = L.colW * (tex.image.height / tex.image.width);
      const z = lead - L2 / 2; tmp.push([tex, z]); lead = z - L2 / 2 - GAP;
      if (offscreen({ z, L: L2 })) break;
    }
    imgIx += tmp.length;
    tmp.reverse().forEach(([tex, z]) => { const sh = makeSheet(tex); sh.L = L.colW * sh.aspect; sh.z = z; sh.rel = z - L.exit; sh.ejected = true; sheets.push(sh); place(sh); });
    // primeira tela já começando a sair
    const last = newestSheet(); addSheet(last.z + last.L / 2 + GAP);
  }

  // ---------- fumaça (sobrecarga) ----------
  const SN = 80;
  const sPos = new Float32Array(SN * 3), sSize = new Float32Array(SN), sAlpha = new Float32Array(SN);
  const sGeo = new THREE.BufferGeometry();
  sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3).setUsage(THREE.DynamicDrawUsage));
  sGeo.setAttribute('aSize', new THREE.BufferAttribute(sSize, 1).setUsage(THREE.DynamicDrawUsage));
  sGeo.setAttribute('aAlpha', new THREE.BufferAttribute(sAlpha, 1).setUsage(THREE.DynamicDrawUsage));
  const sMat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, toneMapped: false,
    uniforms: { uPR: { value: renderer.getPixelRatio() } },
    vertexShader: `attribute float aSize, aAlpha; uniform float uPR; varying float vA; void main(){ vA = aAlpha; gl_PointSize = aSize * uPR; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
    fragmentShader: `varying float vA; void main(){ vec2 p = gl_PointCoord - .5; float d = length(p); float n = .5 + .5 * sin(p.x * 11. + p.y * 7. + vA * 6.); float a = smoothstep(.5, .08, d) * vA * (.75 + .25 * n); gl_FragColor = vec4(mix(vec3(.30,.32,.37), vec3(.58,.60,.66), n * .6), a * .6); }` });
  const smoke = new THREE.Points(sGeo, sMat); smoke.frustumCulled = false; smoke.renderOrder = 5; scene.add(smoke);
  const puffs = Array.from({ length: SN }, () => ({ life: 1, max: 1, p: new THREE.Vector3(), v: new THREE.Vector3(), s: 0 }));
  let puffIx = 0, puffAcc = 0;
  function emitPuff() {
    const pf = puffs[puffIx++ % SN], top = new THREE.Vector3(); topPanel.getWorldPosition(top);
    pf.p.copy(top).add(new THREE.Vector3(rnd(-130, 130) * L.ms, rnd(0, 20) * L.ms, rnd(-60, 60) * L.ms));
    pf.v.set(rnd(-25, 25), rnd(70, 130), rnd(-25, 25)).multiplyScalar(L.ms);
    pf.life = 0; pf.max = rnd(1.2, 2.2); pf.s = rnd(26, 46);
  }
  function updateSmoke(dt) {
    for (let i = 0; i < SN; i++) {
      const pf = puffs[i];
      if (pf.life >= 1) { sAlpha[i] = 0; continue; }
      pf.life = Math.min(1, pf.life + dt / pf.max); pf.p.addScaledVector(pf.v, dt); pf.v.multiplyScalar(0.985); pf.v.x += Math.sin(t * 2 + i) * 6 * dt;
      sPos[i * 3] = pf.p.x; sPos[i * 3 + 1] = pf.p.y; sPos[i * 3 + 2] = pf.p.z;
      sSize[i] = pf.s * (0.6 + pf.life * 1.8) * L.s * L.ms * 1.4;
      sAlpha[i] = (1 - pf.life) * Math.min(1, pf.life * 6);
    }
    sGeo.attributes.position.needsUpdate = sGeo.attributes.aSize.needsUpdate = sGeo.attributes.aAlpha.needsUpdate = true;
  }

  // ---------- carinho, força e sobrecarga ----------
  const OVER_T = 3.8;
  const pet = { hover: false, down: false, x0: 0, px: 0, py: 0, t0: 0, moved: 0, energy: 0, clicks: [], force: 0, over: 0 };
  const lv = { force: new Spring(0, 40, 9), pet: new Spring(0, 30, 8), squint: new Spring(1, 140, 16), speed: new Spring(1, 30, 9), slump: new Spring(0, 60, 9) };
  const tmpC = new THREE.Color();

  function frame(dt) {
    t += dt;
    // estados de interação
    const wasOver = pet.over > 0;
    pet.force = Math.max(0, pet.force - dt);
    pet.energy = Math.max(0, pet.energy - dt * 0.55);
    pet.over = Math.max(0, pet.over - dt);
    const overloaded = pet.over > 0, overP = overloaded ? 1 - pet.over / OVER_T : 0;
    if (wasOver && !overloaded) { blinkTo(0.05, 0.35); sp.squash.v -= 2.6; pulse = 1.2; } // reinicia
    lv.force.t = pet.force > 0 && !overloaded ? 1 : 0;
    lv.pet.t = pet.down && pet.moved > 8 && !overloaded ? Math.min(1, pet.energy) : 0;
    const F = Math.max(0, lv.force.step(dt)), P = Math.max(0, lv.pet.step(dt));
    lv.speed.t = overloaded ? 0 : 1 + F * 1.7;
    const spd = Math.max(0, lv.speed.step(dt));
    lv.slump.t = overloaded && overP > 0.25 && overP < 0.85 ? 1 : 0;
    const slump = lv.slump.step(dt);

    // esteira: tudo anda em direção ao canto superior esquerdo
    const move = reduced ? 0 : V * dt * (booted ? 1 : 0) * spd;
    let ejectNow = false;
    sheets.forEach(sh => { sh.z -= move; sh.rel = sh.z - L.exit; if (!sh.ejected && sh.z + sh.L / 2 <= L.exit) { sh.ejected = true; ejectNow = true; } });
    while (sheets.length && offscreen(sheets[0])) { const sh = sheets.shift(); scene.remove(sh.mesh); sh.mat.dispose(); }
    const nw = newestSheet();
    if (nw && nw.z + nw.L / 2 + GAP <= L.exit + 2) addSheet(nw.z + nw.L / 2 + GAP);
    // quanto falta para a próxima impressão -> rajada de dados e antecipação
    const cur = sheets.find(sh => !sh.ejected);
    const printing = cur ? clamp((L.exit - (cur.z - cur.L / 2)) / cur.L, 0, 1) : 0;
    const toNext = cur ? (cur.z + cur.L / 2 - L.exit) / (V * Math.max(0.3, spd)) : 0;
    const rush = booted ? 0.35 + 0.65 * smooth(1.6, 0, toNext) : 0;
    if (ejectNow && !overloaded) { sp.squash.v -= 2.2; sp.lean.t = -0.02; blinkTo(0.45, 0.5); setTimeout(() => (sp.lean.t = 0), 260); }
    sp.lean.t = booted && !ejectNow ? (toNext < 1.4 ? 0.035 : 0) : sp.lean.t;
    if (F > 0.05) sp.lean.t = 0.06 * F;            // força: firma o corpo para trás
    if (P > 0.05) sp.lean.t = -0.04 * P;           // carinho: se aninha na mão
    if (slump > 0.05) sp.lean.t = -0.07 * slump;   // sobrecarga: desaba

    // brilho das telas: acesa na saída, apagando até o tom do fundo
    sheets.forEach(sh => {
      const d = L.exit - sh.z;
      const b = 0.14 + 0.86 * (1 - smooth(140, 760, d));
      sh.hover.t = sh === hovered ? 1 : 0; const hv = sh.hover.step(dt);
      sh.mat.uniforms.uBright.value = Math.max(b, hv);
      sh.mesh.position.z = sh.z; sh.mesh.position.y = 0.6 + hv * 10;
    });

    // corpo: entrada, respiração, inclinação, squash e tremores
    const sc = sp.scale.step(dt), dr = sp.drop.step(dt), ln = sp.lean.step(dt), sq = sp.squash.step(dt), yw = sp.yaw.step(dt);
    const breathe = Math.sin(t * 2 * Math.PI / (P > 0.1 ? 2.2 : 3.4)) * (0.008 + P * 0.01);
    body.scale.set(1 - sq * 0.5 + slump * 0.03, 1 + sq + breathe - slump * 0.07, 1 - sq * 0.5 + slump * 0.03);
    body.rotation.x = ln; rig.rotation.y = yw;
    let shake = (printing > 0 && printing < 1 && !reduced ? 0.5 : 0) + F * 1.8;
    if (overloaded) shake = overP < 0.25 ? 5 : overP < 0.85 ? (Math.random() < 0.06 ? 4 : 0.4) : 0.3;
    const purr = P * 0.6;
    body.position.set(Math.sin(t * 61) * shake + Math.sin(t * 23) * purr, dr + Math.sin(t * 47) * shake * 0.6, Math.sin(t * 37) * shake * 0.4);
    rig.scale.setScalar(L.ms * Math.max(0.001, sc));

    // luzes: respiram com a atividade; na força, azul primário forte; na sobrecarga, piscam e apagam
    pulse = Math.max(0, pulse - dt * 1.8);
    const act = rush * feeding;
    const flick = overloaded && overP < 0.25 ? (Math.random() < 0.45 ? 0.1 : 2) : 1;
    const dim = overloaded ? (overP < 0.25 ? flick : overP < 0.82 ? 0.08 : 0.08 + (overP - 0.82) / 0.18 * 0.92) : 1;
    intakeLight.intensity = (0.6 + act * 3 + pulse * 2 + F * 4) * 900 * L.ms * dim;
    mouthGlowMat.color.copy(SINAL).multiplyScalar((0.35 + act * 0.9 + pulse * 0.6 + F * 2.4) * dim);
    canalMat.color.copy(SINAL).multiplyScalar((0.4 + printing * (1 - printing) * 4 + Math.max(0, Math.sin(t * 6)) * printing * 0.6 + F * 3) * dim);
    stripMat.color.copy(tmpC.copy(SINAL_CLARO).lerp(SINAL, F)).multiplyScalar((0.35 + 0.25 * Math.sin(t * 1.6) + act * 0.5 + P * 0.7) * (1 + F * 3.2) * dim);
    baseLineMat.color.copy(SINAL).multiplyScalar((0.7 + act * 0.8 + F * 2.4) * dim);
    eyeLight.intensity = (1 + act + F * 5 + P) * 500 * L.ms * dim;
    core.material.emissiveIntensity = (0.9 + act * 0.9 + pulse * 0.4 + F * 2.6 + P * 0.4) * dim;
    leds.forEach((m, i) => m.material.color.copy(SINAL_CLARO).multiplyScalar(overloaded ? (Math.random() < 0.3 ? 1.6 : 0.05) * (overP < 0.85 ? 1 : 0.3) : 0.18 + (Math.sin(t * (7 + F * 10) - i * 1.1) > 0.4 && (printing > 0 && printing < 1 || F > 0.1) ? 1.6 : 0)));
    scanBar.visible = !overloaded && (printing > 0.02 && printing < 0.98 || F > 0.1);
    scanBar.position.z = lx(15.5) + (Math.sin(t * (3.2 + F * 6)) * 0.5 + 0.5) * (lx(31) - lx(15.5));

    // fumaça na sobrecarga
    if (overloaded && overP > 0.12 && overP < 0.86) { puffAcc += dt * 26; while (puffAcc > 1) { emitPuff(); puffAcc--; } }
    updateSmoke(dt);

    // olho: piscadas, sacadas, segue o cursor e acompanha o próprio trabalho
    if (!reduced) {
      if (t > nextBlink) { blinkTo(0.05, 0.12); if (Math.random() < 0.22) setTimeout(() => blinkTo(0.05, 0.1), 260); nextBlink = t + rnd(2.6, 6); }
      if (t > nextSaccade) {
        const r = Math.random();
        sacc = r < 0.35 ? CAM_Z.clone().add(new THREE.Vector3(rnd(-0.3, 0.3), rnd(-0.2, 0.25), rnd(-0.3, 0.3)))
          : r < 0.65 ? new THREE.Vector3(-0.5, -0.15, 1) /* fluxo de dados */ : r < 0.85 ? new THREE.Vector3(-0.6, -0.45, -0.9) /* tela saindo */ : new THREE.Vector3(-1, rnd(-0.2, 0.3), rnd(-0.4, 0.4));
        nextSaccade = t + rnd(0.9, 2.6);
      }
    }
    let gaze = sacc.clone();
    if (overloaded && overP > 0.2 && overP < 0.85) {
      gaze = CAM_Z.clone().multiplyScalar(0.7).addScaledVector(CAM_R, Math.cos(t * 7) * 0.7).addScaledVector(CAM_U, Math.sin(t * 7) * 0.7); // tonto
      sp.yaw.t = 0;
    } else if (pet.down) {
      sp.yaw.t = clamp((pointer.x - pet.x0) * 0.0014, -0.15, 0.15);  // acompanha a mão
      gaze = CAM_Z.clone().addScaledVector(CAM_U, 0.6);
    } else if (pointer.on) {
      const e = new THREE.Vector3(); eye.getWorldPosition(e);
      const pe = project(e.x, e.y, e.z), dx = (pointer.x - pe.x) / 500, dy = (pointer.y - pe.y) / 500;
      gaze = CAM_Z.clone().multiplyScalar(0.8).addScaledVector(CAM_R, clamp(dx, -1.2, 1.2)).addScaledVector(CAM_U, clamp(-dy, -1, 1));
      sp.yaw.t = clamp(dx * 0.06, -0.08, 0.08);
    } else sp.yaw.t = 0;
    gaze.normalize(); sp.gx.t = gaze.x; sp.gy.t = gaze.y; sp.gz.t = gaze.z;
    const gv = new THREE.Vector3(sp.gx.step(dt), sp.gy.step(dt), sp.gz.step(dt)).normalize();
    const ew = new THREE.Vector3(); eye.getWorldPosition(ew);
    pivot.lookAt(ew.clone().addScaledVector(gv, 100));
    lv.squint.t = overloaded ? (overP < 0.25 ? 0.4 + Math.random() * 0.6 : overP < 0.85 ? 0.32 : 1) : P > 0.05 ? 1 - 0.65 * P : F > 0.05 ? 0.72 : 1;
    const bl = Math.min(sp.blink.step(dt), lv.squint.step(dt)); eye.scale.set(1, clamp(bl, 0.06, 1.08), 1);

    updateParticles(dt, (rush + pulse * 0.3 + F * 1.5) * (overloaded ? 0.12 : 1));
    renderer.render(scene, camera);
  }
  function blinkTo(v, hold) { sp.blink.t = v; setTimeout(() => (sp.blink.t = 1), hold * 1000); }

  // ---------- interação ----------
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const machineMeshes = []; rig.traverse(o => { if (o.isMesh) machineMeshes.push(o); });
  const petLabel = () => { let en = false; try { en = localStorage.getItem('ds-lang') === 'en'; } catch (e) {} return en ? 'Pet<br>him' : 'Fazer<br>carinho'; };
  function setHover(v) {
    if (v === pet.hover) return;
    pet.hover = v; window.dsCursorLabel = v ? petLabel() : null;
    hero.style.cursor = v ? (pet.down ? 'grabbing' : 'grab') : '';
  }
  function onClick() {
    if (pet.over > 0) return;
    const now = performance.now();
    pet.clicks = pet.clicks.filter(c => now - c < 2200); pet.clicks.push(now);
    if (pet.clicks.length >= 6) { pet.clicks = []; pet.over = OVER_T; pet.force = 0; sp.squash.v -= 3.2; return; } // sobrecarga
    pet.force = Math.min(3, pet.force + 1.5); sp.squash.v -= 1.4; pulse = Math.min(1.6, pulse + 0.7);   // faz força
  }
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; pointer.on = true;
    ndc.set(pointer.x / L.w * 2 - 1, -(pointer.y / L.h) * 2 + 1); ray.setFromCamera(ndc, camera);
    const top = document.elementFromPoint(e.clientX, e.clientY);
    const onText = !!(top && top.closest && top.closest('a, button, p, h1'));
    const overMachine = !reduced && booted && !onText && ray.intersectObjects(machineMeshes, false).length > 0;
    setHover(overMachine || pet.down);
    if (pet.down) {
      const d = Math.hypot(e.clientX - pet.px, e.clientY - pet.py);
      pet.moved += d; pet.energy = Math.min(1.4, pet.energy + d * 0.006); pet.px = e.clientX; pet.py = e.clientY;
    }
    const hit = overMachine ? null : ray.intersectObjects(sheets.map(s => s.mesh), false)[0];
    const sh = hit && sheets.find(s => s.mesh === hit.object);
    hovered = sh && L.exit - hit.point.z > 0 && !onText ? sh : null;
  }, { passive: true });
  hero.addEventListener('pointerdown', e => {
    if (!pet.hover || e.button !== 0) return;
    e.preventDefault();
    pet.down = true; pet.x0 = pointer.x; pet.px = e.clientX; pet.py = e.clientY; pet.t0 = performance.now(); pet.moved = 0;
    hero.style.cursor = 'grabbing'; hero.style.userSelect = 'none';
  });
  addEventListener('pointerup', () => {
    if (!pet.down) return;
    pet.down = false; hero.style.userSelect = '';
    if (pet.moved < 8 && performance.now() - pet.t0 < 400) onClick();
    hero.style.cursor = pet.hover ? 'grab' : '';
  });
  hero.addEventListener('pointerleave', () => { pointer.on = false; hovered = null; if (!pet.down) setHover(false); });
  canvas.addEventListener('webglcontextlost', e => { e.preventDefault(); running = false; });

  // ---------- ciclo ----------
  let running = false, visible = true, last = 0, raf = 0;
  const loop = now => {
    raf = 0; if (!running) return;
    const dt = Math.min(0.05, (now - (last || now)) / 1000); last = now;
    frame(dt); raf = requestAnimationFrame(loop);
  };
  const play = () => { if (reduced || running || !visible || document.hidden) return; running = true; last = 0; raf = requestAnimationFrame(loop); };
  const pause = () => { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; };
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; visible ? play() : pause(); }).observe(hero);
  document.addEventListener('visibilitychange', () => (document.hidden ? pause() : play()));
  let rz = 0;
  new ResizeObserver(() => { cancelAnimationFrame(rz); rz = requestAnimationFrame(() => { layout(); if (reduced) frame(0); }); }).observe(hero);

  Promise.all(textures).then(list => {
    texList = list.filter(Boolean); if (!texList.length) { canvas.remove(); return; }
    layout(); prefill();
    for (let i = 0; i < N; i++) spawnParticle(parts[i], true);
    if (reduced) { feeding = 1; canvas.style.opacity = '1'; layout(); frame(0); return; }
    frame(0);
    start.then(() => setTimeout(() => {
      canvas.style.opacity = '1'; layout();
      sp.scale.t = 1; sp.drop.t = 0;                         // cai, achata ao tocar a base e assenta
      setTimeout(() => { sp.squash.v -= 3.2; }, 420);
      blinkTo(0.05, 0.7);                                    // acorda: olho fechado, depois abre
      setTimeout(() => { booted = true; }, 900);
      const fade = setInterval(() => { feeding = Math.min(1, feeding + 0.05); if (feeding >= 1) clearInterval(fade); }, 50);
    }, 500));
    play();
  });
}
