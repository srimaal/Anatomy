import * as THREE from 'three';
import {
  getMyocardiumTexture,
  getLungTissueTexture,
  getBrainTissueTexture,
  getBoneTexture,
  getLiverTexture,
  getKidneyTexture
} from './anatomicalTextures';

/**
 * Creates a high-fidelity biological tissue material using MeshPhysicalMaterial.
 * Features realistic wet serosa clearcoat, subtle subsurface sheen, and procedural micro-bump relief.
 */
export function createBioMaterial(options: {
  color: string | number;
  roughness?: number;
  metalness?: number;
  clearcoat?: number;
  clearcoatRoughness?: number;
  sheen?: number;
  sheenColor?: string | number;
  bumpMap?: THREE.Texture | null;
  bumpScale?: number;
  map?: THREE.Texture | null;
  transmission?: number;
  ior?: number;
  wireframe?: boolean;
  transparent?: boolean;
  opacity?: number;
  side?: THREE.Side;
}): THREE.MeshPhysicalMaterial {
  const mat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(options.color),
    roughness: options.roughness ?? 0.35,
    metalness: options.metalness ?? 0.04,
    clearcoat: options.clearcoat ?? 0.65, // Moist biological organ serous fluid sheen
    clearcoatRoughness: options.clearcoatRoughness ?? 0.12,
    sheen: options.sheen ?? 0.45,
    sheenRoughness: 0.3,
    sheenColor: options.sheenColor ? new THREE.Color(options.sheenColor) : new THREE.Color(options.color),
    bumpMap: options.bumpMap || undefined,
    bumpScale: options.bumpScale ?? 0.03,
    map: options.map || undefined,
    transparent: options.transparent ?? false,
    opacity: options.opacity ?? 1.0,
    wireframe: options.wireframe ?? false,
    side: options.side ?? THREE.DoubleSide
  });

  return mat;
}

/**
 * Procedural Organic Mesh Sculptor
 * Creates a dense base sphere or grid and applies smooth mathematical anatomical deformations
 * with recalculation of vertex normals for photorealistic medical illustration rendering.
 */
export function createSculptedGeometry(
  widthSegs = 48,
  heightSegs = 36,
  deformer: (x: number, y: number, z: number, u: number, v: number) => [number, number, number]
): THREE.BufferGeometry {
  const geo = new THREE.SphereGeometry(1, widthSegs, heightSegs);
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    const z = pos.getZ(i);
    const u = uv.getX(i);
    const v = uv.getY(i);

    const [nx, ny, nz] = deformer(x, y, z, u, v);
    pos.setXYZ(i, nx, ny, nz);
  }

  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

// -----------------------------------------------------------------------------
// 1. 🫀 CIRCULATORY SYSTEM (Heart, Chambers, Great Vessels & Coronary Network)
// -----------------------------------------------------------------------------
export function buildCirculatorySystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  const myoTex = getMyocardiumTexture();

  // Materials with authentic anatomical tissue coloration
  const myoMatLV = createBioMaterial({
    color: '#991b1b', // Deep myocardial red
    roughness: 0.32,
    clearcoat: 0.7,
    clearcoatRoughness: 0.12,
    map: myoTex.map,
    bumpMap: myoTex.bumpMap,
    bumpScale: 0.035,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const myoMatRV = createBioMaterial({
    color: '#a81c1c',
    roughness: 0.35,
    clearcoat: 0.65,
    map: myoTex.map,
    bumpMap: myoTex.bumpMap,
    bumpScale: 0.03,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const atriumMat = createBioMaterial({
    color: '#1d4ed8', // Deoxygenated blood venous blue
    roughness: 0.36,
    clearcoat: 0.6,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.96,
    wireframe: isXRay
  });

  const leftAtriumMat = createBioMaterial({
    color: '#831843', // Oxygenated deep crimson
    roughness: 0.36,
    clearcoat: 0.6,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.96,
    wireframe: isXRay
  });

  const arteryMat = createBioMaterial({
    color: '#dc2626', // Scarlet oxygenated arterial blood
    roughness: 0.28,
    clearcoat: 0.75,
    clearcoatRoughness: 0.08,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98,
    wireframe: isXRay
  });

  const pulmonaryArteryMat = createBioMaterial({
    color: '#0284c7', // Cyan-blue deoxygenated pulmonary blood
    roughness: 0.28,
    clearcoat: 0.7,
    clearcoatRoughness: 0.08,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98,
    wireframe: isXRay
  });

  const fatMat = createBioMaterial({
    color: '#fef08a', // Subepicardial adipose tissue (warm golden yellow)
    roughness: 0.6,
    clearcoat: 0.4,
    transparent: isXRay,
    opacity: isXRay ? 0.25 : 0.94,
    wireframe: isXRay
  });

  // --- 1. CONTINUOUS ANATOMICAL VENTRICULAR CONE ---
  // Sculpted unified muscular cone with cardiac apex tilted forward, inferiorly, and to the left (cardiac electrical axis ~45°)
  const ventricleGeo = createSculptedGeometry(64, 48, (x, y, z) => {
    // Normalise y from apex (-1) to base (+1)
    const t = (y + 1) * 0.5; // 0 at apex, 1 at cardiac base

    // Muscular radius expanding from acute rounded apex up to broad atrioventricular base
    const r = Math.sin(t * Math.PI * 0.82 + 0.18) * 0.92;

    // Cardiac axis tilt: shift towards (+x, +z) as we move toward the apex (t -> 0)
    let px = x * r * 0.95 + (1 - t) * 0.34;
    let py = y * 0.85;
    let pz = z * r * 0.85 + (1 - t) * 0.26;

    // Anterior Interventricular Sulcus: groove running diagonally across the anterior surface
    const sulcusAngle = Math.atan2(px, pz);
    if (pz > 0.05 && Math.abs(sulcusAngle - 0.22) < 0.4) {
      const indent = Math.cos((sulcusAngle - 0.22) * (Math.PI / 0.8)) * 0.09 * Math.sin(t * Math.PI);
      px -= Math.sin(sulcusAngle) * indent;
      pz -= Math.cos(sulcusAngle) * indent;
    }

    // Right Ventricular Conus Arteriosus / Infundibulum: smooth upward bulge leading to pulmonary trunk
    if (py > 0.15 && px < -0.05 && pz > 0.1) {
      pz += 0.14 * Math.sin((py - 0.15) * Math.PI * 1.5);
    }

    // Cutaway Mode: open the anterior wall of the left ventricle to inspect the interior chamber & valves
    if (isCutaway && pz > 0.18 && px > 0.05) {
      pz *= 0.25;
    }

    return [px, py, pz];
  });

  const lvMesh = new THREE.Mesh(ventricleGeo, myoMatLV);
  lvMesh.position.set(0, 0, 0);
  lvMesh.name = 'heart_left_ventricle';
  organGroup.add(lvMesh);
  partsMeshMap.set('heart_left_ventricle', lvMesh);

  // --- 2. RIGHT ATRIUM & AURICLE ---
  // Right atrium dome on the right cardiac base
  const raGeo = createSculptedGeometry(40, 32, (x, y, z) => {
    let px = x * 0.52 - 0.52;
    let py = y * 0.58 + 0.72;
    let pz = z * 0.48 + 0.08;
    return [px, py, pz];
  });
  const raMesh = new THREE.Mesh(raGeo, atriumMat);
  raMesh.name = 'heart_right_atrium';
  organGroup.add(raMesh);
  partsMeshMap.set('heart_right_atrium', raMesh);

  // Right Auricle (dog-ear appendage clasping anteriorly across aortic root)
  const raAuricleCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.48, 0.82, 0.18),
    new THREE.Vector3(-0.28, 0.86, 0.34),
    new THREE.Vector3(-0.12, 0.74, 0.32)
  ]);
  const raAuricleMesh = new THREE.Mesh(new THREE.TubeGeometry(raAuricleCurve, 20, 0.14, 14, false), atriumMat);
  organGroup.add(raAuricleMesh);

  // Sinoatrial (SA) Node: natural pacemaker marker at junction of SVC and right atrium
  const saNodeGeo = new THREE.SphereGeometry(0.075, 16, 16);
  const saNodeMat = new THREE.MeshBasicMaterial({ color: 0xfacc15 });
  const saNodeMesh = new THREE.Mesh(saNodeGeo, saNodeMat);
  saNodeMesh.position.set(-0.54, 1.08, 0.12);
  organGroup.add(saNodeMesh);

  // Superior Vena Cava (SVC) descending into right atrium
  const svcCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.52, 1.65, 0.05),
    new THREE.Vector3(-0.52, 1.25, 0.08),
    new THREE.Vector3(-0.52, 0.95, 0.08)
  ]);
  const svcMesh = new THREE.Mesh(new THREE.TubeGeometry(svcCurve, 16, 0.16, 16, false), atriumMat);
  organGroup.add(svcMesh);

  // Inferior Vena Cava (IVC) entering inferior right atrium
  const ivcCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.5, 0.35, -0.05),
    new THREE.Vector3(-0.48, -0.2, -0.08)
  ]);
  const ivcMesh = new THREE.Mesh(new THREE.TubeGeometry(ivcCurve, 12, 0.17, 16, false), atriumMat);
  organGroup.add(ivcMesh);

  // --- 3. LEFT ATRIUM & PULMONARY VEINS ---
  // Left atrium situated on posterior cardiac base
  const laGeo = createSculptedGeometry(36, 28, (x, y, z) => {
    let px = x * 0.48 + 0.22;
    let py = y * 0.52 + 0.82;
    let pz = z * 0.46 - 0.24;
    return [px, py, pz];
  });
  const laMesh = new THREE.Mesh(laGeo, leftAtriumMat);
  organGroup.add(laMesh);

  // Left Auricle clasping forward around pulmonary trunk
  const laAuricleCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.24, 0.86, -0.02),
    new THREE.Vector3(0.32, 0.82, 0.22),
    new THREE.Vector3(0.22, 0.72, 0.28)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(laAuricleCurve, 16, 0.12, 12, false), leftAtriumMat));

  // 4 Pulmonary Veins entering Left Atrium (2 left, 2 right)
  const pvEntries = [
    [-0.08, 1.02, -0.38],
    [-0.08, 0.76, -0.38],
    [0.52, 1.02, -0.36],
    [0.52, 0.76, -0.36]
  ];
  pvEntries.forEach(([px, py, pz]) => {
    const pvCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(px, py, pz),
      new THREE.Vector3(px + (px > 0.2 ? 0.25 : -0.25), py + 0.05, pz - 0.18)
    ]);
    organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(pvCurve, 10, 0.08, 12, false), arteryMat));
  });

  // --- 4. GREAT VESSELS: AORTA & PULMONARY TRUNK ---
  // Bulbous Aortic Root with 3 Sinuses of Valsalva
  const aorticRootGeo = createSculptedGeometry(32, 24, (x, y, z) => {
    const sin3 = Math.sin(Math.atan2(x, z) * 3) * 0.04;
    return [x * (0.24 + sin3), y * 0.32 + 0.8, z * (0.24 + sin3) + 0.06];
  });
  organGroup.add(new THREE.Mesh(aorticRootGeo, arteryMat));

  // Sweeping Arch of Aorta with 3 Classic Supra-Aortic Branches
  const aortaPath = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.02, 0.8, 0.06),
    new THREE.Vector3(0.02, 1.25, 0.08),
    new THREE.Vector3(0.12, 1.62, 0.02),
    new THREE.Vector3(0.32, 1.58, -0.22),
    new THREE.Vector3(0.38, 1.25, -0.38),
    new THREE.Vector3(0.38, 0.2, -0.42) // Descending thoracic aorta
  ]);
  const aortaGeo = new THREE.TubeGeometry(aortaPath, 48, 0.21, 24, false);
  const aortaMesh = new THREE.Mesh(aortaGeo, arteryMat);
  aortaMesh.name = 'heart_aorta';
  organGroup.add(aortaMesh);
  partsMeshMap.set('heart_aorta', aortaMesh);

  // Three Great Arch Branches:
  // 1. Brachiocephalic Artery (Innominate)
  const brachioCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.05, 1.62, 0.06),
    new THREE.Vector3(-0.12, 1.88, 0.08),
    new THREE.Vector3(-0.25, 2.12, 0.06)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(brachioCurve, 14, 0.08, 14, false), arteryMat));

  // 2. Left Common Carotid Artery
  const carotidCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.16, 1.63, 0.0),
    new THREE.Vector3(0.12, 1.92, -0.02),
    new THREE.Vector3(0.08, 2.15, -0.04)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(carotidCurve, 14, 0.068, 14, false), arteryMat));

  // 3. Left Subclavian Artery
  const subclavCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.26, 1.6, -0.12),
    new THREE.Vector3(0.32, 1.9, -0.16),
    new THREE.Vector3(0.42, 2.12, -0.18)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(subclavCurve, 14, 0.065, 14, false), arteryMat));

  // Pulmonary Trunk emerging anteriorly from RV conus arteriosus and bifurcating under aortic arch
  const ptPath = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.14, 0.65, 0.28),
    new THREE.Vector3(-0.06, 1.05, 0.24),
    new THREE.Vector3(0.08, 1.32, 0.05)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(ptPath, 24, 0.18, 20, false), pulmonaryArteryMat));

  // Left & Right Pulmonary Arteries bifurcating beneath the aortic arch
  const lpaCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.08, 1.32, 0.05),
    new THREE.Vector3(0.38, 1.28, -0.05),
    new THREE.Vector3(0.72, 1.2, -0.12)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lpaCurve, 16, 0.12, 16, false), pulmonaryArteryMat));

  const rpaCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.08, 1.32, 0.05),
    new THREE.Vector3(-0.25, 1.28, -0.08),
    new THREE.Vector3(-0.68, 1.22, -0.14)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rpaCurve, 18, 0.13, 16, false), pulmonaryArteryMat));

  // --- 5. CORONARY VASCULAR NETWORK & EPICARDIAL FAT ---
  // Left Anterior Descending (LAD) Coronary Artery nestled directly in the sculpted interventricular sulcus
  const ladCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.02, 0.68, 0.26),
    new THREE.Vector3(0.04, 0.42, 0.38),
    new THREE.Vector3(0.12, 0.16, 0.45),
    new THREE.Vector3(0.22, -0.12, 0.42),
    new THREE.Vector3(0.28, -0.42, 0.36),
    new THREE.Vector3(0.32, -0.62, 0.3) // Terminating near apex
  ]);
  organGroup.add(new THREE.Mesh(
    new THREE.TubeGeometry(ladCurve, 32, 0.038, 10, false),
    new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.28, emissive: 0x7f1d1d, emissiveIntensity: 0.3 })
  ));

  // Great Cardiac Vein running parallel to LAD
  const gcvCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.05, 0.7, 0.25),
    new THREE.Vector3(0.0, 0.44, 0.36),
    new THREE.Vector3(0.08, 0.18, 0.43),
    new THREE.Vector3(0.18, -0.1, 0.4),
    new THREE.Vector3(0.24, -0.38, 0.34)
  ]);
  organGroup.add(new THREE.Mesh(
    new THREE.TubeGeometry(gcvCurve, 28, 0.032, 10, false),
    new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.35, emissive: 0x1e3a8a, emissiveIntensity: 0.3 })
  ));

  // Right Coronary Artery (RCA) in right atrioventricular groove
  const rcaCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.16, 0.65, 0.24),
    new THREE.Vector3(-0.45, 0.52, 0.28),
    new THREE.Vector3(-0.62, 0.26, 0.22),
    new THREE.Vector3(-0.56, -0.05, 0.12)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rcaCurve, 24, 0.035, 8, false), arteryMat));

  // Subepicardial Adipose Tissue (Fat pads cushioning the vessels in the sulci)
  for (let i = 0; i < 10; i++) {
    const t = (i + 0.5) / 10;
    const pt = ladCurve.getPoint(t);
    const fatDrop = new THREE.SphereGeometry(0.055 + (i % 3) * 0.015, 12, 10);
    fatDrop.scale(1.2, 0.7, 0.9);
    const fatMesh = new THREE.Mesh(fatDrop, fatMat);
    fatMesh.position.set(pt.x + (i % 2 === 0 ? 0.03 : -0.03), pt.y, pt.z - 0.01);
    organGroup.add(fatMesh);
  }

  // Cutaway Internal Structures: Bicuspid/Mitral Valve & Papillary Muscles
  if (isCutaway) {
    const valveMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25 });
    const mitralGeo = new THREE.TorusGeometry(0.22, 0.025, 12, 24);
    mitralGeo.rotateX(Math.PI / 2.3);
    const mitralMesh = new THREE.Mesh(mitralGeo, valveMat);
    mitralMesh.position.set(0.22, 0.38, 0.14);
    organGroup.add(mitralMesh);

    // Papillary muscle column with chordae tendineae
    const papGeo = new THREE.CylinderGeometry(0.07, 0.11, 0.34, 12);
    const papMesh = new THREE.Mesh(papGeo, myoMatLV);
    papMesh.position.set(0.2, 0.04, 0.16);
    organGroup.add(papMesh);

    const chordaeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.2, 0.2, 0.16),
      new THREE.Vector3(0.22, 0.36, 0.14)
    ]);
    organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(chordaeCurve, 8, 0.014, 6, false), valveMat));
  }
}

// -----------------------------------------------------------------------------
// 2. 🫁 RESPIRATORY SYSTEM (Trachea, Cartilage C-Rings, Bronchi, Lungs & Lobes)
// -----------------------------------------------------------------------------
export function buildRespiratorySystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  const lungTex = getLungTissueTexture();

  // Materials with soft, natural respiratory tissue coloration
  const lungMat = createBioMaterial({
    color: '#f472b6', // Soft rosy healthy lung pink
    roughness: 0.38,
    clearcoat: 0.68,
    clearcoatRoughness: 0.14,
    map: lungTex.map,
    bumpMap: lungTex.bumpMap,
    bumpScale: 0.035,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const cartilageMat = createBioMaterial({
    color: '#bae6fd', // Pearlescent hyaline cartilage
    roughness: 0.22,
    clearcoat: 0.8,
    clearcoatRoughness: 0.08,
    transparent: isXRay,
    opacity: isXRay ? 0.45 : 0.98,
    wireframe: isXRay
  });

  const airwayMat = createBioMaterial({
    color: '#38bdf8', // Bronchial tree cyan
    roughness: 0.32,
    clearcoat: 0.65,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.95,
    wireframe: isXRay
  });

  const diaphragmMat = createBioMaterial({
    color: '#9f1239', // Muscular diaphragm dome
    roughness: 0.55,
    clearcoat: 0.35,
    transparent: isXRay,
    opacity: isXRay ? 0.3 : 0.95,
    wireframe: isXRay
  });

  // --- 1. TRACHEA WITH 16 HORSESHOE CARTILAGE RINGS & CARINA ---
  const tracheaCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.82, 0),
    new THREE.Vector3(0, 1.5, 0.02),
    new THREE.Vector3(0, 1.18, 0)
  ]);
  const tracheaGeo = new THREE.TubeGeometry(tracheaCurve, 28, 0.18, 20, false);
  const tracheaMesh = new THREE.Mesh(tracheaGeo, airwayMat);
  tracheaMesh.name = 'lungs_trachea';
  organGroup.add(tracheaMesh);
  partsMeshMap.set('lungs_trachea', tracheaMesh);

  // Cartilage C-Rings with posterior membranous gap
  for (let y = 1.24; y <= 1.8; y += 0.065) {
    const ringGeo = new THREE.TorusGeometry(0.19, 0.028, 8, 24, Math.PI * 1.5);
    ringGeo.rotateX(Math.PI / 2);
    ringGeo.rotateZ(Math.PI * 0.25);
    const ringMesh = new THREE.Mesh(ringGeo, cartilageMat);
    ringMesh.position.set(0, y, 0.01);
    organGroup.add(ringMesh);
  }

  // Thyroid Cartilage (Laryngeal prominence / Adam's apple)
  const thyroidGeo = new THREE.CylinderGeometry(0.24, 0.22, 0.4, 16, 1, false, 0, Math.PI * 1.6);
  thyroidGeo.rotateY(Math.PI * 0.2);
  const thyroidMesh = new THREE.Mesh(thyroidGeo, cartilageMat);
  thyroidMesh.position.set(0, 2.05, 0.04);
  organGroup.add(thyroidMesh);

  // Carina (T4/T5 bifurcation) into Right & Left Mainstem Bronchi
  const rightMainCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.18, 0),
    new THREE.Vector3(-0.35, 0.95, -0.05),
    new THREE.Vector3(-0.6, 0.72, -0.08) // Steeper ~25° from vertical
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rightMainCurve, 20, 0.13, 16, false), airwayMat));

  const leftMainCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.18, 0),
    new THREE.Vector3(0.44, 0.92, -0.04),
    new THREE.Vector3(0.74, 0.68, -0.06) // More horizontal ~45°
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(leftMainCurve, 20, 0.11, 16, false), airwayMat));

  // Lobar & Segmental Arborizations branching into lung tissue
  const bronchialBranches = [
    // Right Superior, Middle, Inferior
    [new THREE.Vector3(-0.6, 0.72, -0.08), new THREE.Vector3(-0.82, 0.98, -0.04), 0.07],
    [new THREE.Vector3(-0.6, 0.72, -0.08), new THREE.Vector3(-0.88, 0.65, 0.09), 0.065],
    [new THREE.Vector3(-0.6, 0.72, -0.08), new THREE.Vector3(-0.78, 0.35, -0.12), 0.075],
    // Left Superior, Inferior
    [new THREE.Vector3(0.74, 0.68, -0.06), new THREE.Vector3(0.95, 0.96, -0.02), 0.068],
    [new THREE.Vector3(0.74, 0.68, -0.06), new THREE.Vector3(0.9, 0.36, -0.1), 0.072]
  ] as const;

  bronchialBranches.forEach(([start, end, rad]) => {
    const branchCurve = new THREE.CatmullRomCurve3([start, end]);
    organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(branchCurve, 12, rad, 12, false), airwayMat));
  });

  // --- 2. SCULPTED ANATOMICAL LUNGS (No primitive spheres!) ---
  // Helper: creates a continuous, high-fidelity anatomical lung geometry
  const createAnatomicalLung = (isRight: boolean) => {
    return createSculptedGeometry(56, 42, (x, y, z) => {
      // Normalise y: -1 (diaphragmatic base) to +1 (tapered apex)
      const t = (y + 1) * 0.5;

      // Conical profile: narrow apex, broad base
      const widthFactor = 1.15 - t * 0.72;
      let px = x * 0.74 * widthFactor;
      let py = y * 0.98 + 0.25;
      let pz = z * 0.68 * widthFactor;

      // Concave Diaphragmatic Base (curves smoothly over diaphragm dome)
      if (y < -0.45) {
        const distFromCenter = Math.sqrt(px * px + pz * pz);
        py += Math.max(0, (0.75 - distFromCenter) * 0.42);
      }

      // Medial Surface Contouring:
      if (isRight) {
        // Right lung: medial side is positive x (closer to center)
        if (x > 0.1) {
          px *= 0.82; // Flattened mediastinal surface
        }
        // Oblique and Horizontal fissure indentation grooves
        const obliqueFissure = py + pz * 0.7;
        if (Math.abs(obliqueFissure - 0.2) < 0.07) {
          px *= 0.94;
          pz *= 0.94;
        }
        const horizFissure = py - 0.35;
        if (Math.abs(horizFissure) < 0.06 && pz > 0) {
          px *= 0.94;
          pz *= 0.94;
        }
      } else {
        // Left lung: medial side is negative x (closer to center)
        if (x < -0.1) {
          px *= 0.82;
        }
        // CARDIAC NOTCH: deep anatomical impression where the heart apex sits!
        if (x < 0.25 && z > -0.2 && y > -0.5 && y < 0.4) {
          const notchWeight = Math.sin(((y + 0.5) / 0.9) * Math.PI);
          px += 0.26 * notchWeight; // Carves inward laterally
          pz -= 0.16 * notchWeight; // Carves inward posteriorly
        }
        // LINGULA: tongue-like projection beneath the cardiac notch
        if (x < 0.05 && z > 0.12 && y > -0.65 && y < -0.32) {
          pz += 0.14;
        }
        // Left oblique fissure indentation
        const obliqueFissure = py + pz * 0.8;
        if (Math.abs(obliqueFissure - 0.15) < 0.07) {
          px *= 0.94;
          pz *= 0.94;
        }
      }

      return [px, py, pz];
    });
  };

  const lungsGroup = new THREE.Group();
  lungsGroup.name = 'lungs_alveoli';

  // Right Lung (3 lobes: Superior, Middle, Inferior)
  const rLungGeo = createAnatomicalLung(true);
  const rLungMesh = new THREE.Mesh(rLungGeo, lungMat);
  rLungMesh.position.set(-0.85, 0.25, 0);
  rLungMesh.name = 'lungs_alveoli';
  lungsGroup.add(rLungMesh);

  // Left Lung (2 lobes with Cardiac Notch & Lingula)
  const lLungGeo = createAnatomicalLung(false);
  const lLungMesh = new THREE.Mesh(lLungGeo, lungMat);
  lLungMesh.position.set(0.85, 0.25, 0);
  lLungMesh.name = 'lungs_alveoli';
  lungsGroup.add(lLungMesh);

  organGroup.add(lungsGroup);
  partsMeshMap.set('lungs_alveoli', lungsGroup);

  // --- 3. MUSCULAR DIAPHRAGM DOME ---
  const diaphragmGeo = createSculptedGeometry(40, 24, (x, y, z) => {
    let px = x * 1.8;
    let pz = z * 1.3;
    // Central tendon depression between right and left hemidiaphragmatic domes
    let py = Math.cos(Math.sqrt(px * px + pz * pz) * 0.9) * 0.45 - 0.9;
    return [px, py, pz];
  });
  const diaphragmMesh = new THREE.Mesh(diaphragmGeo, diaphragmMat);
  organGroup.add(diaphragmMesh);
}

// -----------------------------------------------------------------------------
// 3. 🧠 NERVOUS SYSTEM (Cerebrum, Gyri, Lobes, Cerebellum, Brainstem & Ventricles)
// -----------------------------------------------------------------------------
export function buildNervousSystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  const brainTex = getBrainTissueTexture();

  // Materials with authentic neuroanatomical tissue coloration
  const frontalMat = createBioMaterial({
    color: '#c084fc', // Refined cortical lilac/mauve
    roughness: 0.38,
    clearcoat: 0.65,
    map: brainTex.map,
    bumpMap: brainTex.bumpMap,
    bumpScale: 0.035,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const parietalMat = createBioMaterial({
    color: '#a855f7',
    roughness: 0.38,
    clearcoat: 0.65,
    map: brainTex.map,
    bumpMap: brainTex.bumpMap,
    bumpScale: 0.035,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const temporalMat = createBioMaterial({
    color: '#7c3aed',
    roughness: 0.38,
    clearcoat: 0.65,
    map: brainTex.map,
    bumpMap: brainTex.bumpMap,
    bumpScale: 0.035,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const occipitalMat = createBioMaterial({
    color: '#6b21a8',
    roughness: 0.38,
    clearcoat: 0.65,
    map: brainTex.map,
    bumpMap: brainTex.bumpMap,
    bumpScale: 0.035,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const cerebMat = createBioMaterial({
    color: '#581c87',
    roughness: 0.42,
    clearcoat: 0.6,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const stemMat = createBioMaterial({
    color: '#e2e8f0', // Pearlescent white matter tracts
    roughness: 0.32,
    clearcoat: 0.7,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98,
    wireframe: isXRay
  });

  const ventriclesMat = createBioMaterial({
    color: '#38bdf8', // Luminous cerulean cerebrospinal fluid (CSF)
    roughness: 0.15,
    metalness: 0.1,
    clearcoat: 0.9,
    clearcoatRoughness: 0.05,
    transparent: true,
    opacity: 0.85
  });

  const whiteMatterMat = createBioMaterial({
    color: '#f8fafc',
    roughness: 0.3,
    clearcoat: 0.75,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98
  });

  const nerveMat = createBioMaterial({
    color: '#facc15', // Myelinated cranial/spinal yellow
    roughness: 0.35,
    clearcoat: 0.55
  });

  // --- 1. SCULPTED CONTINUOUS CEREBRAL HEMISPHERES WITH HARMONIC GYRI & SULCI ---
  // Helper: creates a realistic sculpted cerebral hemisphere with natural lobes and gyral convolutions
  const createCerebralHemisphere = (isLeft: boolean) => {
    const sign = isLeft ? -1 : 1;
    return createSculptedGeometry(64, 48, (x, y, z) => {
      let px = x * 0.76;
      let py = y * 0.74 + 1.25;
      let pz = z * 1.05;

      // Medial Longitudinal Cerebral Fissure: flatten medial surface against the midline
      if (x * sign < 0.04) {
        px = (x * sign * 0.28) * sign;
      }

      // Anterior Frontal Pole & supraorbital contour
      if (pz > 0.2) {
        px *= 0.92;
        py *= (1.0 - (pz - 0.2) * 0.18);
      }

      // Posterior Occipital Pole tapering
      if (pz < -0.28) {
        const occTaper = 1.0 + (pz + 0.28) * 0.35;
        px *= occTaper;
        py *= occTaper;
      }

      // Temporal Lobe: antero-inferior projection curving beneath the Lateral Sulcus (Sylvian Fissure)
      if (py < 1.35 && pz > -0.25 && pz < 0.55 && Math.abs(px) > 0.22) {
        if (py < 1.15) {
          px *= 1.12;
          pz += 0.08;
        } else if (py > 1.18 && py < 1.32) {
          // Deep Lateral Sulcus (Sylvian groove) indentation
          px *= 0.88;
        }
      }

      // Multi-harmonic trigonometric gyri & sulci convolutions
      const gyri =
        Math.sin(px * 10) * Math.cos(py * 11) * Math.sin(pz * 10) * 0.035 +
        Math.sin(px * 18 + py * 16) * 0.016 +
        Math.cos(pz * 16 + py * 14) * 0.014;

      px += px * gyri;
      py += py * gyri;
      pz += pz * gyri;

      // Shift slightly off-center to create the distinct interhemispheric gap
      px += sign * 0.38;

      // Cutaway Sagittal Mode: peel left hemisphere laterally to expose internal ventricular structures
      if (isCutaway && isLeft) {
        px -= 0.65;
      }

      return [px, py, pz];
    });
  };

  // Build Left & Right Hemispheres
  const rHemiGeo = createCerebralHemisphere(false);
  const rHemiMesh = new THREE.Mesh(rHemiGeo, frontalMat);
  rHemiMesh.name = 'brain_frontal_lobe';
  organGroup.add(rHemiMesh);
  partsMeshMap.set('brain_frontal_lobe', rHemiMesh);

  const lHemiGeo = createCerebralHemisphere(true);
  const lHemiMesh = new THREE.Mesh(lHemiGeo, parietalMat);
  lHemiMesh.name = 'brain_parietal_lobe';
  organGroup.add(lHemiMesh);
  partsMeshMap.set('brain_parietal_lobe', lHemiMesh);

  // Register other cerebral lobe markers for interactive targeting
  partsMeshMap.set('brain_temporal_lobe', lHemiMesh);
  partsMeshMap.set('brain_occipital_lobe', rHemiMesh);
  partsMeshMap.set('brain_cerebrum', rHemiMesh);

  // --- 2. CEREBELLUM & VERMIS WITH HORIZONTAL FOLIA STRIATIONS ---
  const cerebGroup = new THREE.Group();
  cerebGroup.position.set(0, 0.68, -0.62);
  cerebGroup.name = 'brain_cerebellum';

  // Symmetrical cerebellar hemispheres with central vermis
  const cerebGeo = createSculptedGeometry(40, 28, (x, y, z) => {
    let px = x * 0.95;
    let py = y * 0.58;
    let pz = z * 0.68;
    // Central vermis groove
    if (Math.abs(px) < 0.15) {
      py *= 1.15;
    }
    // Horizontal folia micro-striations
    const folia = Math.sin(py * 32) * 0.025;
    px += px * folia;
    pz += pz * folia;
    return [px, py, pz];
  });
  const cerebMesh = new THREE.Mesh(cerebGeo, cerebMat);
  cerebMesh.name = 'brain_cerebellum';
  cerebGroup.add(cerebMesh);
  organGroup.add(cerebGroup);
  partsMeshMap.set('brain_cerebellum', cerebGroup);

  // --- 3. BRAINSTEM (Midbrain, Bulbous Pons, Medulla & Basilar Artery) ---
  const brainstemGroup = new THREE.Group();
  brainstemGroup.position.set(0, 0.5, -0.16);
  brainstemGroup.name = 'brain_brainstem';

  // Continuous Brainstem Column: Midbrain -> Pons Bulge -> Medulla
  const stemGeo = createSculptedGeometry(32, 28, (x, y, z) => {
    // Normalise y from medulla (-1) to midbrain (+1)
    const t = (y + 1) * 0.5;
    let r = 0.22;
    // Bulbous Pons protrusion in mid-region
    if (t > 0.35 && t < 0.75 && z > 0) {
      r += Math.sin(((t - 0.35) / 0.4) * Math.PI) * 0.18;
    }
    let px = x * r;
    let py = y * 0.55;
    let pz = z * r;
    return [px, py, pz];
  });
  const stemMesh = new THREE.Mesh(stemGeo, stemMat);
  stemMesh.name = 'brain_brainstem';
  brainstemGroup.add(stemMesh);

  // Basilar Artery traversing anterior pontine midline
  const basilarCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, -0.25, 0.24),
    new THREE.Vector3(0, 0.0, 0.36),
    new THREE.Vector3(0, 0.25, 0.26)
  ]);
  brainstemGroup.add(new THREE.Mesh(
    new THREE.TubeGeometry(basilarCurve, 16, 0.032, 8, false),
    new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.3 })
  ));

  // Trigeminal Nerve (CN V) large sensory root exiting lateral pons
  [-1, 1].forEach(side => {
    const cnVCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 0.24, 0.02, 0.28),
      new THREE.Vector3(side * 0.48, 0.0, 0.34),
      new THREE.Vector3(side * 0.65, -0.04, 0.38)
    ]);
    brainstemGroup.add(new THREE.Mesh(new THREE.TubeGeometry(cnVCurve, 12, 0.038, 8, false), nerveMat));
  });

  organGroup.add(brainstemGroup);
  partsMeshMap.set('brain_brainstem', brainstemGroup);

  // --- 4. DEEP SUBCORTICAL STRUCTURES: CORPUS CALLOSUM, VENTRICLES & THALAMUS ---
  // Arched C-shaped White Matter Corpus Callosum (Rostrum, Genu, Body & Splenium)
  const ccCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.25, 0.26),  // Rostrum
    new THREE.Vector3(0, 1.44, 0.44),  // Genu anterior knee
    new THREE.Vector3(0, 1.62, 0.22),  // Body anterior arch
    new THREE.Vector3(0, 1.66, -0.05), // Body apex
    new THREE.Vector3(0, 1.58, -0.32), // Splenium posterior curve
    new THREE.Vector3(0, 1.38, -0.45)  // Splenium bulbous terminal
  ]);
  const corpusCallosumMesh = new THREE.Mesh(new THREE.TubeGeometry(ccCurve, 36, 0.085, 14, false), whiteMatterMat);
  corpusCallosumMesh.name = 'brain_corpus_callosum';
  organGroup.add(corpusCallosumMesh);
  partsMeshMap.set('brain_corpus_callosum', corpusCallosumMesh);

  // Bilateral Ventricles with glowing cerebrospinal fluid (CSF)
  const ventriclesGroup = new THREE.Group();
  ventriclesGroup.name = 'brain_ventricles';

  [-0.22, 0.22].forEach(vX => {
    const latVentCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(vX * 0.65, 1.46, 0.36), // Anterior Horn
      new THREE.Vector3(vX, 1.54, 0.12),        // Central Body
      new THREE.Vector3(vX * 1.15, 1.45, -0.32),// Trigone
      new THREE.Vector3(vX * 0.8, 1.35, -0.58), // Posterior Horn
      new THREE.Vector3(vX * 1.25, 1.05, -0.12),// Temporal Horn
      new THREE.Vector3(vX * 1.15, 0.98, 0.18)
    ]);
    const latVentMesh = new THREE.Mesh(new THREE.TubeGeometry(latVentCurve, 32, 0.065, 12, false), ventriclesMat);
    ventriclesGroup.add(latVentMesh);
  });

  // 3rd & 4th Ventricles and Cerebral Aqueduct of Sylvius
  const aqCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.35, 0.05),
    new THREE.Vector3(0, 1.05, -0.18),
    new THREE.Vector3(0, 0.75, -0.32)
  ]);
  ventriclesGroup.add(new THREE.Mesh(new THREE.TubeGeometry(aqCurve, 20, 0.038, 10, false), ventriclesMat));

  organGroup.add(ventriclesGroup);
  partsMeshMap.set('brain_ventricles', ventriclesGroup);

  // Diencephalon: Bilateral Ovoid Thalami with Interthalamic Adhesion
  const diencephGroup = new THREE.Group();
  diencephGroup.position.set(0, 1.35, -0.05);
  diencephGroup.name = 'brain_diencephalon';

  [-0.18, 0.18].forEach(x => {
    const thalamusGeo = new THREE.SphereGeometry(0.24, 20, 16);
    thalamusGeo.scale(0.85, 0.9, 1.25);
    const thalamusMesh = new THREE.Mesh(thalamusGeo, stemMat);
    thalamusMesh.position.set(x, 0, 0);
    diencephGroup.add(thalamusMesh);
  });

  organGroup.add(diencephGroup);
  partsMeshMap.set('brain_diencephalon', diencephGroup);

  // Spinal Cord descending with 12 pairs of exiting spinal nerve roots and DRG
  const spinalCordCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.25, -0.2),
    new THREE.Vector3(0, -0.5, -0.22),
    new THREE.Vector3(0, -1.5, -0.2)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(spinalCordCurve, 32, 0.12, 16, false), stemMat));

  for (let i = 0; i < 10; i++) {
    const y = 0.1 - i * 0.15;
    [-1, 1].forEach(dir => {
      const nerveCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, y, -0.2),
        new THREE.Vector3(dir * 0.28, y - 0.04, -0.16),
        new THREE.Vector3(dir * 0.65, y - 0.1, -0.12)
      ]);
      organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(nerveCurve, 12, 0.022, 8, false), nerveMat));
    });
  }
}

// -----------------------------------------------------------------------------
// 4. 🦴 SKELETAL SYSTEM (Realistic Skull, Sunken Orbits, Spine, Ribs & Pelvis)
// -----------------------------------------------------------------------------
export function buildSkeletalSystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  const boneTex = getBoneTexture();

  // Materials with natural ivory/cortical bone warmth
  const boneMat = createBioMaterial({
    color: '#f8fafc', // Warm ivory bone
    roughness: 0.36,
    metalness: 0.02,
    clearcoat: 0.32,
    clearcoatRoughness: 0.18,
    map: boneTex.map,
    bumpMap: boneTex.bumpMap,
    bumpScale: 0.025,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const discMat = createBioMaterial({
    color: '#cbd5e1', // Fibrocartilaginous intervertebral disc
    roughness: 0.52,
    clearcoat: 0.4,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.95,
    wireframe: isXRay
  });

  const costalCartilageMat = createBioMaterial({
    color: '#e0f2fe', // Costal cartilage
    roughness: 0.25,
    clearcoat: 0.72,
    transparent: true,
    opacity: 0.85,
    wireframe: isXRay
  });

  // --- 1. CONTINUOUS ANATOMICAL HUMAN SKULL (No Minecraft Box!) ---
  const skullGroup = new THREE.Group();
  skullGroup.position.set(0, 1.75, 0);
  skullGroup.name = 'skeleton_skull';

  // Cranium Vault & Facial Mask Sculpted as an Authentic Continuous Bone Structure:
  // Features rounded calvaria, prominent supraorbital brow ridges, sunken orbital sockets, piriform nasal cavity, and cheekbones!
  const craniumGeo = createSculptedGeometry(64, 48, (x, y, z) => {
    let px = x * 0.78;
    let py = y * 0.92 + 0.12;
    let pz = z * 0.98;

    // Calvaria cranial vault (superior dome)
    if (py > 0.3) {
      px *= 0.96;
      pz *= 1.05;
    }

    // Temporal Fossa lateral flattening
    if (py > -0.2 && py < 0.4 && pz > -0.2 && pz < 0.4) {
      px *= 0.92;
    }

    // Facial Skeleton & Forehead slope:
    if (pz > 0.25) {
      // Supraorbital Brow Ridge (Glabella and eyebrow arches at py ≈ 0.0)
      if (py > -0.05 && py < 0.15) {
        pz += 0.08;
      }

      // SUNKEN ORBITS (Eye Sockets):
      // Anatomical sunken orbital cavities that recede deeply inward into the skull!
      const leftOrbitDist = Math.hypot(px - 0.26, py - (-0.12));
      const rightOrbitDist = Math.hypot(px - (-0.26), py - (-0.12));
      if (leftOrbitDist < 0.22) {
        const socketDepth = Math.cos((leftOrbitDist / 0.22) * (Math.PI * 0.5));
        pz -= 0.28 * socketDepth; // Indents deeply inward
      } else if (rightOrbitDist < 0.22) {
        const socketDepth = Math.cos((rightOrbitDist / 0.22) * (Math.PI * 0.5));
        pz -= 0.28 * socketDepth;
      }

      // PIRIFORM NASAL APERTURE: pear-shaped nasal cavity receding inward at midline
      if (Math.abs(px) < 0.12 && py > -0.42 && py < -0.15) {
        pz -= 0.16 * (1.0 - Math.abs(px) / 0.12);
      }

      // MAXILLA (Upper Jaw & Dental Arch)
      if (py < -0.32 && py > -0.58) {
        px *= 0.88;
        pz *= 0.94;
      }
    }

    return [px, py, pz];
  });
  const craniumMesh = new THREE.Mesh(craniumGeo, boneMat);
  skullGroup.add(craniumMesh);

  // Zygomatic Arches (Cheekbones) arching smoothly from maxilla to temporal bones
  [-1, 1].forEach(side => {
    const archCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 0.28, -0.28, 0.48), // Maxillary zygomatic process
      new THREE.Vector3(side * 0.58, -0.25, 0.22), // Zygomatic arch apex
      new THREE.Vector3(side * 0.52, -0.18, -0.12) // Temporal zygomatic root
    ]);
    skullGroup.add(new THREE.Mesh(new THREE.TubeGeometry(archCurve, 18, 0.048, 10, false), boneMat));
  });

  // Articulated Mandible (Lower Jaw with chin, curved body, angle of jaw, and condyle)
  const mandibleGroup = new THREE.Group();
  mandibleGroup.position.set(0, -0.58, 0.15);

  const jawCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.42, 0.32, -0.24), // Left Condylar Process (TMJ)
    new THREE.Vector3(-0.46, -0.05, -0.12),// Left Angle of Mandible (Gonion)
    new THREE.Vector3(-0.25, -0.12, 0.22), // Left Mandibular Body
    new THREE.Vector3(0, -0.15, 0.34),     // Mental Protuberance (Chin)
    new THREE.Vector3(0.25, -0.12, 0.22),  // Right Mandibular Body
    new THREE.Vector3(0.46, -0.05, -0.12), // Right Angle
    new THREE.Vector3(0.42, 0.32, -0.24)   // Right Condyle
  ]);
  const jawMesh = new THREE.Mesh(new THREE.TubeGeometry(jawCurve, 36, 0.065, 12, false), boneMat);
  mandibleGroup.add(jawMesh);
  skullGroup.add(mandibleGroup);

  organGroup.add(skullGroup);
  partsMeshMap.set('skeleton_skull', skullGroup);

  // --- 2. VERTEBRAL COLUMN (Physiological S-Curvature: Cervical, Thoracic, Lumbar) ---
  const spineGroup = new THREE.Group();
  spineGroup.name = 'skeleton_spine_ribs';

  const vertCount = 24;
  for (let i = 0; i < vertCount; i++) {
    const t = i / vertCount;
    const y = 0.95 - t * 2.05;

    // Physiological S-curve
    let zOffset = -0.22;
    if (t < 0.28) {
      zOffset += Math.sin((t / 0.28) * Math.PI) * 0.07; // Cervical lordosis
    } else if (t < 0.72) {
      zOffset -= Math.sin(((t - 0.28) / 0.44) * Math.PI) * 0.11; // Thoracic kyphosis
    } else {
      zOffset += Math.sin(((t - 0.72) / 0.28) * Math.PI) * 0.09; // Lumbar lordosis
    }

    // Vertebra body diameter expands downward to bear progressive body weight
    const vRadius = 0.14 + t * 0.08;
    const vertGeo = new THREE.CylinderGeometry(vRadius, vRadius * 1.05, 0.065, 16);
    const vertMesh = new THREE.Mesh(vertGeo, boneMat);
    vertMesh.position.set(0, y, zOffset);
    spineGroup.add(vertMesh);

    // Posterior Spinous Process
    const spinousGeo = new THREE.BoxGeometry(0.04, 0.04, 0.14 + t * 0.05);
    const spinousMesh = new THREE.Mesh(spinousGeo, boneMat);
    spinousMesh.position.set(0, y - 0.015, zOffset - (0.11 + t * 0.04));
    spinousMesh.rotation.x = 0.25;
    spineGroup.add(spinousMesh);

    // Intervertebral Disc
    if (i < vertCount - 1) {
      const discGeo = new THREE.CylinderGeometry(vRadius * 0.98, vRadius * 0.98, 0.024, 16);
      const discMesh = new THREE.Mesh(discGeo, discMat);
      discMesh.position.set(0, y - 0.042, zOffset);
      spineGroup.add(discMesh);
    }
  }

  // Fused Sacrum & Coccyx
  const sacrumGeo = new THREE.ConeGeometry(0.36, 0.58, 16);
  sacrumGeo.rotateX(Math.PI);
  sacrumGeo.scale(1.2, 1.0, 0.6);
  const sacrumMesh = new THREE.Mesh(sacrumGeo, boneMat);
  sacrumMesh.position.set(0, -1.28, -0.24);
  spineGroup.add(sacrumMesh);

  // --- 3. THORACIC RIBCAGE & STERNUM ---
  // Sternal Plate: Manubrium, Angle of Louis, Sternal Body & Xiphoid Process
  const manubriumGeo = new THREE.BoxGeometry(0.25, 0.18, 0.06);
  const manubriumMesh = new THREE.Mesh(manubriumGeo, boneMat);
  manubriumMesh.position.set(0, 0.64, 0.42);
  spineGroup.add(manubriumMesh);

  const sternumBodyGeo = new THREE.BoxGeometry(0.16, 0.58, 0.05);
  const sternumBodyMesh = new THREE.Mesh(sternumBodyGeo, boneMat);
  sternumBodyMesh.position.set(0, 0.26, 0.44);
  spineGroup.add(sternumBodyMesh);

  const xiphoidGeo = new THREE.ConeGeometry(0.06, 0.12, 10);
  xiphoidGeo.rotateX(Math.PI);
  const xiphoidMesh = new THREE.Mesh(xiphoidGeo, costalCartilageMat);
  xiphoidMesh.position.set(0, -0.09, 0.43);
  spineGroup.add(xiphoidMesh);

  // 12 Pairs of Anatomically Curving Ribs wrapping around thoracic cage
  for (let r = 0; r < 12; r++) {
    const ry = 0.68 - r * 0.086;
    const ribWidth = 0.58 + Math.sin((r / 11) * Math.PI) * 0.48;
    const ribDepth = 0.48 + Math.sin((r / 11) * Math.PI) * 0.32;

    [-1, 1].forEach(side => {
      const p1 = new THREE.Vector3(side * 0.12, ry + 0.02, -0.28);
      const p2 = new THREE.Vector3(side * (ribWidth * 0.82), ry - 0.02, -0.18);
      const p3 = new THREE.Vector3(side * ribWidth, ry - 0.06, 0.05);
      const p4 = new THREE.Vector3(side * (ribWidth * 0.74), ry - 0.08, ribDepth * 0.72);

      const ribCurve = new THREE.CatmullRomCurve3([p1, p2, p3, p4]);
      const ribMesh = new THREE.Mesh(new THREE.TubeGeometry(ribCurve, 20, 0.034, 8, false), boneMat);
      spineGroup.add(ribMesh);

      // Costal Cartilages connecting ribs to sternum
      if (r < 7) {
        const sternumY = 0.62 - r * 0.08;
        const cartCurve = new THREE.CatmullRomCurve3([
          p4,
          new THREE.Vector3(side * 0.18, sternumY - 0.02, 0.44),
          new THREE.Vector3(side * 0.08, sternumY, 0.43)
        ]);
        spineGroup.add(new THREE.Mesh(new THREE.TubeGeometry(cartCurve, 12, 0.028, 8, false), costalCartilageMat));
      }
    });
  }

  // --- 4. PELVIS (Flared Iliac Wings, Ischium, Pubic Rami & Symphysis) ---
  const pelvisGroup = new THREE.Group();
  pelvisGroup.position.set(0, -1.35, -0.15);

  [-1, 1].forEach(side => {
    // Flared Iliac Wing with smooth anatomical iliac crest
    const iliumGeo = createSculptedGeometry(28, 20, (x, y, z) => {
      let px = (x * 0.45 + 0.55) * side;
      let py = y * 0.48 + 0.15;
      let pz = z * 0.28 + 0.12;
      // Flare crest outward laterally
      if (py > 0.1) {
        px += side * 0.14;
      }
      return [px, py, pz];
    });
    pelvisGroup.add(new THREE.Mesh(iliumGeo, boneMat));

    // Acetabulum (Hip Joint Socket)
    const acetRing = new THREE.TorusGeometry(0.12, 0.035, 10, 20);
    acetRing.rotateY(side * 0.6);
    const acetMesh = new THREE.Mesh(acetRing, boneMat);
    acetMesh.position.set(side * 0.72, -0.22, 0.02);
    pelvisGroup.add(acetMesh);

    // Pubic & Ischial Rami
    const pubicCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 0.65, -0.2, 0.05),
      new THREE.Vector3(side * 0.35, -0.38, 0.12),
      new THREE.Vector3(side * 0.05, -0.32, 0.18)
    ]);
    pelvisGroup.add(new THREE.Mesh(new THREE.TubeGeometry(pubicCurve, 16, 0.055, 10, false), boneMat));
  });

  // Pubic Symphysis Disc
  const symphysisGeo = new THREE.BoxGeometry(0.08, 0.16, 0.06);
  const symphysisMesh = new THREE.Mesh(symphysisGeo, discMat);
  symphysisMesh.position.set(0, -1.67, 0.13);
  organGroup.add(symphysisMesh);

  spineGroup.add(pelvisGroup);
  organGroup.add(spineGroup);
  partsMeshMap.set('skeleton_spine_ribs', spineGroup);
}

// -----------------------------------------------------------------------------
// 5. 🍽️ DIGESTIVE SYSTEM (Stomach, Liver, Gallbladder, Pancreas, Intestines & Colon)
// -----------------------------------------------------------------------------
export function buildDigestiveSystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  const liverTex = getLiverTexture();

  // Materials with authentic visceral tissue coloration
  const stomachMat = createBioMaterial({
    color: '#ea580c', // Gastric mucosal amber-orange
    roughness: 0.34,
    clearcoat: 0.68,
    clearcoatRoughness: 0.14,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const liverMat = createBioMaterial({
    color: '#7f1d1d', // Glisson's capsule rich mahogany red-brown
    roughness: 0.32,
    clearcoat: 0.75,
    clearcoatRoughness: 0.1,
    map: liverTex.map,
    bumpMap: liverTex.bumpMap,
    bumpScale: 0.035,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const gbMat = createBioMaterial({
    color: '#15803d', // Biliary bile green
    roughness: 0.28,
    clearcoat: 0.8,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98,
    wireframe: isXRay
  });

  const pancreasMat = createBioMaterial({
    color: '#eab308', // Pancreatic glandular yellow
    roughness: 0.52,
    clearcoat: 0.4,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.95,
    wireframe: isXRay
  });

  const smallIntestineMat = createBioMaterial({
    color: '#f97316',
    roughness: 0.36,
    clearcoat: 0.65,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const colonMat = createBioMaterial({
    color: '#c2410c',
    roughness: 0.4,
    clearcoat: 0.58,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  // --- 1. CONTINUOUS SCULPTED J-SHAPED STOMACH ---
  // Realistic stomach geometry with domed fundus, sweeping greater curvature, concave lesser curvature, body & pylorus
  const stomachGeo = createSculptedGeometry(56, 42, (x, y, z) => {
    // Normalise y from pylorus/antrum (-1) to fundus (+1)
    const t = (y + 1) * 0.5;

    // Radius expands at fundus and mid-body, narrowing at pylorus
    let r = 0.38 + Math.sin(t * Math.PI * 0.85) * 0.32;

    // Greater curvature (convex leftward bulge) & lesser curvature (concave rightward sweep)
    let px = x * r - 0.35 + Math.sin(t * Math.PI) * 0.22;
    let py = y * 0.65 + 0.32;
    let pz = z * r * 0.85 + 0.12;

    // Fundus rounded dome rising superiorly to the left of the gastroesophageal junction
    if (t > 0.75) {
      px -= 0.12 * Math.sin(((t - 0.75) / 0.25) * Math.PI);
      py += 0.08;
    }

    // Pyloric antrum & canal narrowing towards duodenum (t -> 0)
    if (t < 0.25) {
      px += 0.4 * (1.0 - t / 0.25);
      r *= 0.65;
    }

    // Cutaway view: open anterior wall to inspect gastric rugae
    if (isCutaway && pz > 0.15) {
      pz *= 0.25;
    }

    return [px, py, pz];
  });

  const stomachMesh = new THREE.Mesh(stomachGeo, stomachMat);
  stomachMesh.name = 'digestive_stomach';
  organGroup.add(stomachMesh);
  partsMeshMap.set('digestive_stomach', stomachMesh);

  // Esophagus entering stomach cardia
  const esoCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.06, 1.6, -0.15),
    new THREE.Vector3(-0.08, 1.1, -0.12),
    new THREE.Vector3(-0.14, 0.68, -0.05)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(esoCurve, 20, 0.085, 16, false), stomachMat));

  // --- 2. LIVER (Large Smooth Wedge with Right & Left Lobes, Gallbladder) ---
  const liverGeo = createSculptedGeometry(56, 40, (x, y, z) => {
    // Normalise x from left lobe (-1) to right lobe (+1)
    const tx = (x + 1) * 0.5;

    // Massive thick right lobe tapering smoothly into thinner left lobe wedge
    const thickness = 0.35 + tx * 0.65;
    let px = x * 0.95 + 0.45;
    let py = y * 0.58 * thickness + 0.48;
    let pz = z * 0.78 * thickness + 0.05;

    // Convex diaphragmatic superior surface conforming to right hemidiaphragm
    if (py > 0.45) {
      py += 0.12 * Math.sin(tx * Math.PI);
    }

    // Sharp anterior-inferior border
    if (pz > 0.15 && py < 0.4) {
      py -= 0.08;
    }

    return [px, py, pz];
  });
  const liverMesh = new THREE.Mesh(liverGeo, liverMat);
  organGroup.add(liverMesh);

  // Falciform Ligament dividing right and left lobes
  const falcCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.28, 0.75, 0.22),
    new THREE.Vector3(0.26, 0.45, 0.35),
    new THREE.Vector3(0.24, 0.22, 0.28)
  ]);
  organGroup.add(new THREE.Mesh(
    new THREE.TubeGeometry(falcCurve, 16, 0.035, 8, false),
    createBioMaterial({ color: '#fef08a', roughness: 0.5 })
  ));

  // Gallbladder nestled in the gallbladder fossa of the visceral liver surface
  const gbGeo = new THREE.SphereGeometry(0.18, 20, 20);
  gbGeo.scale(0.82, 1.45, 0.82);
  const gbMesh = new THREE.Mesh(gbGeo, gbMat);
  gbMesh.position.set(0.42, 0.28, 0.32);
  gbMesh.rotation.set(-0.35, 0.2, 0.2);
  organGroup.add(gbMesh);

  // Common Bile Duct (CBD) entering duodenum
  const cbdCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.42, 0.36, 0.28),
    new THREE.Vector3(0.32, 0.22, 0.18),
    new THREE.Vector3(0.24, 0.05, 0.08)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(cbdCurve, 16, 0.028, 8, false), gbMat));

  // --- 3. PANCREAS & SPLEEN ---
  const pancPath = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.26, -0.05, 0.02), // Head nestled in C-loop
    new THREE.Vector3(0.12, 0.08, -0.02),  // Neck
    new THREE.Vector3(-0.16, 0.15, -0.08), // Body
    new THREE.Vector3(-0.55, 0.28, -0.18)  // Tail reaching splenic hilum
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(pancPath, 28, 0.12, 16, false), pancreasMat));

  // Spleen (Purplish lymphoid organ at left upper quadrant)
  const spleenGeo = new THREE.SphereGeometry(0.32, 20, 20);
  spleenGeo.scale(0.75, 1.15, 0.85);
  const spleenMesh = new THREE.Mesh(spleenGeo, createBioMaterial({ color: '#581c87', roughness: 0.35, clearcoat: 0.7 }));
  spleenMesh.position.set(-0.74, 0.32, -0.22);
  organGroup.add(spleenMesh);

  // --- 4. DUODENUM, JEJUNUM & COLON ---
  // Duodenum C-Loop framing the pancreatic head
  const duoCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.08, -0.02, 0.12), // Pylorus
    new THREE.Vector3(0.35, 0.0, 0.08),   // Superior part
    new THREE.Vector3(0.42, -0.28, 0.08), // Descending part
    new THREE.Vector3(0.3, -0.45, 0.05),  // Horizontal part
    new THREE.Vector3(0.08, -0.42, -0.02) // Ascending part
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(duoCurve, 24, 0.13, 16, false), smallIntestineMat));

  // Small Intestine (Convoluted smooth Jejunoileal mesenteric coils)
  const intestineGroup = new THREE.Group();
  intestineGroup.position.set(0, -0.68, 0.08);
  for (let i = 0; i < 9; i++) {
    const loopGeo = new THREE.TorusGeometry(0.32 + (i % 3) * 0.08, 0.085, 10, 24);
    loopGeo.rotateX(0.4 + (i * 0.3));
    loopGeo.rotateY(i * 0.4);
    const loopMesh = new THREE.Mesh(loopGeo, smallIntestineMat);
    loopMesh.position.set(
      ((i % 3) - 1) * 0.22 + Math.sin(i) * 0.05,
      (Math.floor(i / 3) - 1) * 0.16,
      (i % 2) * 0.08
    );
    intestineGroup.add(loopMesh);
  }
  organGroup.add(intestineGroup);

  // Large Intestine / Colon with Haustra and Taeniae Coli
  const colonPoints = [
    new THREE.Vector3(0.68, -1.05, 0.12), // Cecum
    new THREE.Vector3(0.72, -0.55, 0.08), // Ascending Colon
    new THREE.Vector3(0.68, -0.05, 0.08),
    new THREE.Vector3(0.55, 0.15, 0.12),  // Hepatic Flexure
    new THREE.Vector3(0.0, 0.08, 0.18),   // Transverse Colon
    new THREE.Vector3(-0.58, 0.18, 0.1),  // Splenic Flexure
    new THREE.Vector3(-0.72, -0.05, 0.05),// Descending Colon
    new THREE.Vector3(-0.72, -0.65, 0.08),
    new THREE.Vector3(-0.52, -1.05, 0.05),// Sigmoid Colon S-curve
    new THREE.Vector3(-0.25, -1.22, -0.05),
    new THREE.Vector3(0.0, -1.35, -0.1)   // Rectum
  ];
  const colonCurve = new THREE.CatmullRomCurve3(colonPoints);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(colonCurve, 56, 0.17, 18, false), colonMat));

  // Muscular Taeniae Coli longitudinal band
  const taeniaMesh = new THREE.Mesh(
    new THREE.TubeGeometry(colonCurve, 56, 0.024, 8, false),
    new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.4 })
  );
  taeniaMesh.position.z += 0.08;
  organGroup.add(taeniaMesh);
}

// -----------------------------------------------------------------------------
// 6. 💧 URINARY SYSTEM (True Bean-Shaped Kidneys, Hilum V-A-P, Adrenals & Bladder)
// -----------------------------------------------------------------------------
export function buildUrinarySystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  const kidneyTex = getKidneyTexture();

  // Materials with authentic renal tissue coloration
  const kidneyMat = createBioMaterial({
    color: '#78350f', // Renal cortex deep mahogany-amber
    roughness: 0.32,
    clearcoat: 0.75, // Glistening fibrous renal capsule
    clearcoatRoughness: 0.12,
    map: kidneyTex.map,
    bumpMap: kidneyTex.bumpMap,
    bumpScale: 0.035,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const adrenalMat = createBioMaterial({
    color: '#ca8a04', // Suprarenal / adrenal gland golden yellow
    roughness: 0.52,
    clearcoat: 0.35,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.95,
    wireframe: isXRay
  });

  const arteryMat = createBioMaterial({
    color: '#dc2626',
    roughness: 0.28,
    clearcoat: 0.7,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98,
    wireframe: isXRay
  });

  const veinMat = createBioMaterial({
    color: '#2563eb',
    roughness: 0.32,
    clearcoat: 0.68,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98,
    wireframe: isXRay
  });

  const ureterMat = createBioMaterial({
    color: '#facc15',
    roughness: 0.35,
    clearcoat: 0.55,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.95,
    wireframe: isXRay
  });

  const bladderMat = createBioMaterial({
    color: '#d97706',
    roughness: 0.4,
    clearcoat: 0.62,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  // --- 1. SCULPTED TRUE RENIFORM (BEAN-SHAPED) KIDNEYS ---
  // Creates an authentic kidney bean geometry with convex lateral border and deep medial hilum
  const createAnatomicalKidney = (isRight: boolean) => {
    const sign = isRight ? 1 : -1;
    return createSculptedGeometry(48, 36, (x, y, z) => {
      // Elongate vertically and flatten antero-posteriorly
      let px = x * 0.58;
      let py = y * 0.88;
      let pz = z * 0.46;

      // Medial Hilum Indentation (concavity facing towards midline)
      if (x * sign < 0.1) {
        const hilumFactor = Math.cos(py * (Math.PI / 1.1));
        if (Math.abs(py) < 0.55) {
          px += sign * (0.24 * Math.max(0, hilumFactor)); // Indents deeply inward
        }
      }

      return [px, py, pz];
    });
  };

  const kidneyGroup = new THREE.Group();
  kidneyGroup.name = 'urinary_kidney';

  // Left Kidney (Higher: T12 to L3)
  const lKidneyGeo = createAnatomicalKidney(false);
  const lKidneyMesh = new THREE.Mesh(lKidneyGeo, kidneyMat);
  lKidneyMesh.position.set(-0.74, 0.38, -0.15);
  lKidneyMesh.rotation.set(0.08, -0.12, 0.15);
  lKidneyMesh.name = 'urinary_kidney';
  kidneyGroup.add(lKidneyMesh);

  // Left Adrenal Gland (Crescentic cap)
  const lAdrenalGeo = new THREE.ConeGeometry(0.18, 0.24, 12);
  lAdrenalGeo.scale(1.2, 0.65, 0.8);
  const lAdrenalMesh = new THREE.Mesh(lAdrenalGeo, adrenalMat);
  lAdrenalMesh.position.set(-0.72, 0.85, -0.14);
  kidneyGroup.add(lAdrenalMesh);

  // Right Kidney (Lower due to liver mass: L1 to L3)
  const rKidneyGeo = createAnatomicalKidney(true);
  const rKidneyMesh = new THREE.Mesh(rKidneyGeo, kidneyMat);
  rKidneyMesh.position.set(0.74, 0.15, -0.15);
  rKidneyMesh.rotation.set(0.08, 0.12, -0.15);
  rKidneyMesh.name = 'urinary_kidney';
  kidneyGroup.add(rKidneyMesh);

  // Right Adrenal Gland (Pyramidal cap)
  const rAdrenalGeo = new THREE.ConeGeometry(0.19, 0.26, 12);
  rAdrenalGeo.scale(1.1, 0.7, 0.8);
  const rAdrenalMesh = new THREE.Mesh(rAdrenalGeo, adrenalMat);
  rAdrenalMesh.position.set(0.72, 0.62, -0.14);
  kidneyGroup.add(rAdrenalMesh);

  organGroup.add(kidneyGroup);
  partsMeshMap.set('urinary_kidney', kidneyGroup);

  // --- 2. ABDOMINAL AORTA, INFERIOR VENA CAVA & RENAL VESSELS ---
  // Abdominal Aorta (Left of midline)
  const aortaCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.08, 1.35, -0.22),
    new THREE.Vector3(-0.08, 0.2, -0.22),
    new THREE.Vector3(-0.08, -0.7, -0.2) // L4 bifurcation
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(aortaCurve, 28, 0.14, 18, false), arteryMat));

  // Common Iliac Arteries
  [-1, 1].forEach(side => {
    const iliacCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.08, -0.7, -0.2),
      new THREE.Vector3(side * 0.28, -1.05, -0.16),
      new THREE.Vector3(side * 0.48, -1.4, -0.12)
    ]);
    organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(iliacCurve, 16, 0.09, 14, false), arteryMat));
  });

  // Inferior Vena Cava (Right of midline)
  const ivcCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.18, 1.35, -0.2),
    new THREE.Vector3(0.18, 0.2, -0.2),
    new THREE.Vector3(0.18, -0.75, -0.18)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(ivcCurve, 28, 0.16, 18, false), veinMat));

  // Left Renal Artery & Vein
  const lraCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.08, 0.38, -0.22),
    new THREE.Vector3(-0.48, 0.38, -0.18)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lraCurve, 12, 0.065, 12, false), arteryMat));

  // Left Renal Vein crosses anterior to aorta
  const lrvCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.52, 0.34, -0.12),
    new THREE.Vector3(-0.08, 0.34, -0.06),
    new THREE.Vector3(0.18, 0.34, -0.16)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(lrvCurve, 16, 0.075, 14, false), veinMat));

  // Right Renal Artery (Passes posterior to IVC)
  const rraCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.08, 0.18, -0.24),
    new THREE.Vector3(0.18, 0.16, -0.24),
    new THREE.Vector3(0.48, 0.15, -0.18)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rraCurve, 16, 0.065, 12, false), arteryMat));

  // Right Renal Vein (Short direct course into IVC)
  const rrvCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.52, 0.15, -0.14),
    new THREE.Vector3(0.18, 0.15, -0.16)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rrvCurve, 12, 0.075, 14, false), veinMat));

  // --- 3. URETERS & URINARY BLADDER ---
  // Left Ureter descending into pelvic bladder
  const leftUreterCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.54, 0.22, -0.15),
    new THREE.Vector3(-0.38, -0.4, -0.12),
    new THREE.Vector3(-0.28, -0.9, -0.05),
    new THREE.Vector3(-0.16, -1.35, 0.02)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(leftUreterCurve, 32, 0.038, 12, false), ureterMat));

  // Right Ureter
  const rightUreterCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.54, 0.02, -0.15),
    new THREE.Vector3(0.38, -0.4, -0.12),
    new THREE.Vector3(0.28, -0.9, -0.05),
    new THREE.Vector3(0.16, -1.35, 0.02)
  ]);
  organGroup.add(new THREE.Mesh(new THREE.TubeGeometry(rightUreterCurve, 32, 0.038, 12, false), ureterMat));

  // Urinary Bladder (Muscular detrusor organ)
  const bladderGeo = new THREE.SphereGeometry(0.52, 28, 24);
  bladderGeo.scale(1.15, 0.95, 1.05);
  const bladderMesh = new THREE.Mesh(bladderGeo, bladderMat);
  bladderMesh.position.set(0, -1.45, 0.08);
  organGroup.add(bladderMesh);
}

// -----------------------------------------------------------------------------
// 7. 🧍 FULL BODY ANATOMY SYSTEM (Integrated Multi-System Organism)
// -----------------------------------------------------------------------------
export function buildFullBodySystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  const boneTex = getBoneTexture();
  const myoTex = getMyocardiumTexture();
  const lungTex = getLungTissueTexture();
  const liverTex = getLiverTexture();
  const kidneyTex = getKidneyTexture();

  // Tissue Materials
  const boneMat = createBioMaterial({
    color: '#e2e8f0', // Natural bone ivory
    roughness: 0.42,
    metalness: 0.05,
    clearcoat: 0.45,
    bumpMap: boneTex.bumpMap,
    bumpScale: 0.02,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const brainMat = createBioMaterial({
    color: '#c084fc', // Encephalon cortex violet-pink
    roughness: 0.32,
    clearcoat: 0.7,
    clearcoatRoughness: 0.12,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const heartMat = createBioMaterial({
    color: '#dc2626', // Scarlet myocardial muscle
    roughness: 0.3,
    clearcoat: 0.75,
    map: myoTex.map,
    bumpMap: myoTex.bumpMap,
    bumpScale: 0.03,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98,
    wireframe: isXRay
  });

  const lungMat = createBioMaterial({
    color: '#38bdf8', // Aerated pulmonary parenchymal cyan
    roughness: 0.38,
    clearcoat: 0.65,
    map: lungTex.map,
    bumpMap: lungTex.bumpMap,
    bumpScale: 0.025,
    transparent: isXRay,
    opacity: isXRay ? 0.3 : 0.92,
    wireframe: isXRay
  });

  const liverMat = createBioMaterial({
    color: '#b45309', // Hepatic mahogany/amber
    roughness: 0.32,
    clearcoat: 0.8,
    map: liverTex.map,
    bumpMap: liverTex.bumpMap,
    bumpScale: 0.03,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const stomachMat = createBioMaterial({
    color: '#ea580c', // Gastric muscular organ
    roughness: 0.34,
    clearcoat: 0.75,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const bowelMat = createBioMaterial({
    color: '#f59e0b', // Enteric gut amber
    roughness: 0.36,
    clearcoat: 0.7,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.96,
    wireframe: isXRay
  });

  const kidneyMat = createBioMaterial({
    color: '#991b1b', // Deep renal parenchyma
    roughness: 0.32,
    clearcoat: 0.75,
    map: kidneyTex.map,
    bumpMap: kidneyTex.bumpMap,
    bumpScale: 0.03,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const vesselRedMat = createBioMaterial({
    color: '#ef4444', // Arterial crimson
    roughness: 0.28,
    clearcoat: 0.8,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const vesselBlueMat = createBioMaterial({
    color: '#2563eb', // Venous royal blue
    roughness: 0.28,
    clearcoat: 0.8,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const skinMat = createBioMaterial({
    color: '#7dd3fc', // Translucent biological anatomical silhouette
    roughness: 0.2,
    clearcoat: 0.85,
    clearcoatRoughness: 0.1,
    transmission: 0.7,
    ior: 1.35,
    transparent: true,
    opacity: isXRay ? 0.12 : 0.22,
    side: THREE.DoubleSide
  });

  // =========================================================================
  // 1. CEPHALIC REGION & BRAIN (fullbody_head_cranium)
  // =========================================================================
  const headGroup = new THREE.Group();
  headGroup.name = 'fullbody_head_cranium';

  // Cranial neurocranium vault
  const craniumGeo = createSculptedGeometry(40, 32, (x, y, z) => {
    // Cranial egg shape: broader in parietal/occipital, tapered anteriorly in frontal
    let px = x * 0.38;
    let py = y * 0.44;
    let pz = z * 0.44;
    if (py < 0) {
      px *= 0.85; // Taper towards skull base
      pz *= 0.88;
    }
    if (pz > 0.1) {
      px *= 0.92; // Narrower temporal anterior
    }
    return [px, py, pz];
  });
  const craniumMesh = new THREE.Mesh(craniumGeo, boneMat);
  craniumMesh.position.set(0, 1.88, 0);
  craniumMesh.name = 'fullbody_head_cranium';
  headGroup.add(craniumMesh);

  // Encephalon cerebrum nested inside
  const brainGeo = createSculptedGeometry(32, 24, (x, y, z) => {
    let px = x * 0.3;
    let py = y * 0.32;
    let pz = z * 0.34;
    // Longitudinal fissure indentation between hemispheres
    if (Math.abs(px) < 0.06 && py > 0.02) {
      py -= 0.04;
    }
    return [px, py, pz];
  });
  const brainMesh = new THREE.Mesh(brainGeo, brainMat);
  brainMesh.position.set(0, 1.9, 0.02);
  brainMesh.name = 'fullbody_head_cranium';
  headGroup.add(brainMesh);

  // Facial skeleton profile (Maxilla, Mandible jawline & Zygomatic arches)
  const jawCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.24, 1.76, 0.05),
    new THREE.Vector3(-0.2, 1.62, 0.22),
    new THREE.Vector3(0, 1.56, 0.32), // Chin / mental protuberance
    new THREE.Vector3(0.2, 1.62, 0.22),
    new THREE.Vector3(0.24, 1.76, 0.05)
  ]);
  const jawMesh = new THREE.Mesh(new THREE.TubeGeometry(jawCurve, 24, 0.045, 12, false), boneMat);
  jawMesh.name = 'fullbody_head_cranium';
  headGroup.add(jawMesh);

  organGroup.add(headGroup);
  partsMeshMap.set('fullbody_head_cranium', headGroup);

  // =========================================================================
  // 2. AXIAL SKELETON: SPINE & THORAX (fullbody_axial_skeleton)
  // =========================================================================
  const axialGroup = new THREE.Group();
  axialGroup.name = 'fullbody_axial_skeleton';

  // Vertebral column with physiological spinal curves (Cervical, Thoracic, Lumbar)
  const spineCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.58, -0.02), // C1 atlas at foramen magnum
    new THREE.Vector3(0, 1.42, 0.03),  // C4 cervical lordosis apex
    new THREE.Vector3(0, 1.25, -0.02), // T1 thoracic inlet
    new THREE.Vector3(0, 0.95, -0.08), // T7 thoracic kyphosis posterior
    new THREE.Vector3(0, 0.65, -0.05), // T12 thoracolumbar junction
    new THREE.Vector3(0, 0.35, 0.02),  // L3 lumbar lordosis anterior
    new THREE.Vector3(0, 0.05, -0.06), // L5 lumbosacral promontory
    new THREE.Vector3(0, -0.22, -0.12) // Sacrum and coccyx
  ]);
  const spineMesh = new THREE.Mesh(new THREE.TubeGeometry(spineCurve, 40, 0.065, 12, false), boneMat);
  spineMesh.name = 'fullbody_axial_skeleton';
  axialGroup.add(spineMesh);

  // Sternum (Manubrium, body, xiphoid process)
  const sternumCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.22, 0.24), // Suprasternal notch
    new THREE.Vector3(0, 1.05, 0.28), // Sternal angle of Louis
    new THREE.Vector3(0, 0.82, 0.26), // Sternal body
    new THREE.Vector3(0, 0.68, 0.22)  // Xiphoid process
  ]);
  const sternumMesh = new THREE.Mesh(new THREE.TubeGeometry(sternumCurve, 16, 0.055, 10, false), boneMat);
  sternumMesh.name = 'fullbody_axial_skeleton';
  axialGroup.add(sternumMesh);

  // Rib cage: anatomical rib arches (pairs from T1 down to T10)
  for (let i = 0; i < 7; i++) {
    const yPos = 1.18 - i * 0.08;
    const ribWidth = 0.38 + Math.sin((i / 6) * Math.PI) * 0.16;
    const depth = 0.24 + Math.sin((i / 6) * Math.PI) * 0.08;

    // Right Rib
    const rightRibCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, yPos, -0.06),
      new THREE.Vector3(ribWidth, yPos - 0.03, 0.02),
      new THREE.Vector3(ribWidth * 0.75, yPos - 0.06, depth),
      new THREE.Vector3(0.04, yPos - 0.07, depth)
    ]);
    const rRibMesh = new THREE.Mesh(new THREE.TubeGeometry(rightRibCurve, 16, 0.022, 8, false), boneMat);
    rRibMesh.name = 'fullbody_axial_skeleton';
    axialGroup.add(rRibMesh);

    // Left Rib
    const leftRibCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, yPos, -0.06),
      new THREE.Vector3(-ribWidth, yPos - 0.03, 0.02),
      new THREE.Vector3(-ribWidth * 0.75, yPos - 0.06, depth),
      new THREE.Vector3(-0.04, yPos - 0.07, depth)
    ]);
    const lRibMesh = new THREE.Mesh(new THREE.TubeGeometry(leftRibCurve, 16, 0.022, 8, false), boneMat);
    lRibMesh.name = 'fullbody_axial_skeleton';
    axialGroup.add(lRibMesh);
  }

  organGroup.add(axialGroup);
  partsMeshMap.set('fullbody_axial_skeleton', axialGroup);

  // =========================================================================
  // 3. CARDIAC MEDIASTINUM & GREAT VESSELS (fullbody_cardiac_mediastinum)
  // =========================================================================
  const heartGroup = new THREE.Group();
  heartGroup.name = 'fullbody_cardiac_mediastinum';

  // Heart muscular conical mass (tilted left and anteriorly)
  const heartGeo = createSculptedGeometry(32, 24, (x, y, z) => {
    let px = x * 0.22;
    let py = y * 0.25;
    let pz = z * 0.2;
    // Apex tilt towards left 5th intercostal
    if (py < 0) {
      px -= 0.06;
      pz += 0.05;
    }
    return [px, py, pz];
  });
  const heartMesh = new THREE.Mesh(heartGeo, heartMat);
  heartMesh.position.set(-0.06, 0.94, 0.1);
  heartMesh.name = 'fullbody_cardiac_mediastinum';
  heartGroup.add(heartMesh);

  // Aortic Arch & Thoracic Aorta
  const aortaCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.05, 1.05, 0.1),
    new THREE.Vector3(-0.02, 1.18, 0.12),
    new THREE.Vector3(0.04, 1.16, 0.04),
    new THREE.Vector3(0.04, 0.85, -0.02),
    new THREE.Vector3(0.03, 0.35, 0.0)
  ]);
  const aortaMesh = new THREE.Mesh(new THREE.TubeGeometry(aortaCurve, 28, 0.042, 12, false), vesselRedMat);
  aortaMesh.name = 'fullbody_cardiac_mediastinum';
  heartGroup.add(aortaMesh);

  // Superior & Inferior Vena Cava
  const vcCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.08, 1.25, 0.06), // SVC from brachiocephalic
    new THREE.Vector3(0.07, 0.98, 0.08), // Right atrium entry
    new THREE.Vector3(0.06, 0.45, 0.02)  // IVC descending
  ]);
  const vcMesh = new THREE.Mesh(new THREE.TubeGeometry(vcCurve, 24, 0.045, 12, false), vesselBlueMat);
  vcMesh.name = 'fullbody_cardiac_mediastinum';
  heartGroup.add(vcMesh);

  organGroup.add(heartGroup);
  partsMeshMap.set('fullbody_cardiac_mediastinum', heartGroup);

  // =========================================================================
  // 4. BILATERAL LUNGS & AIRWAY TREE (fullbody_pulmonary_lungs)
  // =========================================================================
  const lungGroup = new THREE.Group();
  lungGroup.name = 'fullbody_pulmonary_lungs';

  // Trachea & Main Bronchi bifurcation
  const tracheaCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.4, 0.08),
    new THREE.Vector3(0, 1.18, 0.06) // Carina
  ]);
  const tracheaMesh = new THREE.Mesh(new THREE.TubeGeometry(tracheaCurve, 12, 0.035, 10, false), boneMat);
  tracheaMesh.name = 'fullbody_pulmonary_lungs';
  lungGroup.add(tracheaMesh);

  // Right Lung (3 lobes)
  const rLungGeo = createSculptedGeometry(30, 24, (x, y, z) => {
    let px = x * 0.22;
    let py = y * 0.38;
    let pz = z * 0.22;
    // Concave medial mediastinal surface
    if (px < 0) px *= 0.65;
    return [px, py, pz];
  });
  const rLungMesh = new THREE.Mesh(rLungGeo, lungMat);
  rLungMesh.position.set(0.24, 0.96, 0.06);
  rLungMesh.name = 'fullbody_pulmonary_lungs';
  lungGroup.add(rLungMesh);

  // Left Lung (2 lobes with cardiac notch indentation)
  const lLungGeo = createSculptedGeometry(30, 24, (x, y, z) => {
    let px = x * 0.2;
    let py = y * 0.36;
    let pz = z * 0.2;
    // Cardiac notch concavity on anterior medial surface
    if (px > 0 && py < 0.1 && pz > 0) {
      px *= 0.55;
      pz *= 0.6;
    }
    return [px, py, pz];
  });
  const lLungMesh = new THREE.Mesh(lLungGeo, lungMat);
  lLungMesh.position.set(-0.25, 0.96, 0.06);
  lLungMesh.name = 'fullbody_pulmonary_lungs';
  lungGroup.add(lLungMesh);

  organGroup.add(lungGroup);
  partsMeshMap.set('fullbody_pulmonary_lungs', lungGroup);

  // =========================================================================
  // 5. ABDOMINAL VISCERA: LIVER & STOMACH (fullbody_abdominal_viscera)
  // =========================================================================
  const visceraGroup = new THREE.Group();
  visceraGroup.name = 'fullbody_abdominal_viscera';

  // Liver (anatomical wedge shape occupying right hypochondrium and crossing midline)
  const liverGeo = createSculptedGeometry(32, 24, (x, y, z) => {
    let px = x * 0.34 + 0.12;
    let py = y * 0.18;
    let pz = z * 0.24;
    // Taper thin left lobe
    if (px < 0.05) {
      py *= 0.65;
      pz *= 0.6;
    }
    // Inferior surface concavities
    if (py < 0) py *= 0.7;
    return [px, py, pz];
  });
  const liverMesh = new THREE.Mesh(liverGeo, liverMat);
  liverMesh.position.set(0.06, 0.66, 0.12);
  liverMesh.name = 'fullbody_abdominal_viscera';
  visceraGroup.add(liverMesh);

  // Stomach (J-shaped organ nestled in left hypochondrium)
  const stomachGeo = createSculptedGeometry(28, 20, (x, y, z) => {
    let px = x * 0.18;
    let py = y * 0.24;
    let pz = z * 0.18;
    // J-shaped curvature
    if (py < 0) {
      px += 0.08; // Pyloric sweep towards right
    }
    return [px, py, pz];
  });
  const stomachMesh = new THREE.Mesh(stomachGeo, stomachMat);
  stomachMesh.position.set(-0.16, 0.58, 0.14);
  stomachMesh.name = 'fullbody_abdominal_viscera';
  visceraGroup.add(stomachMesh);

  organGroup.add(visceraGroup);
  partsMeshMap.set('fullbody_abdominal_viscera', visceraGroup);

  // =========================================================================
  // 6. INTESTINAL TRACT: SMALL & LARGE BOWEL (fullbody_digestive_intestines)
  // =========================================================================
  const bowelGroup = new THREE.Group();
  bowelGroup.name = 'fullbody_digestive_intestines';

  // Large Intestine (Colon perimeter framing the abdomen)
  const colonCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.24, 0.05, 0.12),  // Cecum
    new THREE.Vector3(0.26, 0.35, 0.1),   // Ascending colon
    new THREE.Vector3(0.22, 0.48, 0.12),  // Hepatic flexure
    new THREE.Vector3(0, 0.44, 0.16),     // Transverse colon
    new THREE.Vector3(-0.24, 0.48, 0.12), // Splenic flexure
    new THREE.Vector3(-0.25, 0.25, 0.1),  // Descending colon
    new THREE.Vector3(-0.18, 0.05, 0.12), // Sigmoid colon
    new THREE.Vector3(0, -0.08, 0.08)     // Rectum
  ]);
  const colonMesh = new THREE.Mesh(new THREE.TubeGeometry(colonCurve, 36, 0.048, 12, false), bowelMat);
  colonMesh.name = 'fullbody_digestive_intestines';
  bowelGroup.add(colonMesh);

  // Small Intestine: loops of jejunum and ileum in central abdomen
  const smallBowelCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.06, 0.38, 0.14),
    new THREE.Vector3(0.08, 0.34, 0.16),
    new THREE.Vector3(-0.1, 0.28, 0.16),
    new THREE.Vector3(0.12, 0.22, 0.15),
    new THREE.Vector3(-0.08, 0.16, 0.16),
    new THREE.Vector3(0.08, 0.1, 0.15),
    new THREE.Vector3(0.18, 0.08, 0.13)
  ]);
  const smallBowelMesh = new THREE.Mesh(new THREE.TubeGeometry(smallBowelCurve, 40, 0.038, 10, false), bowelMat);
  smallBowelMesh.name = 'fullbody_digestive_intestines';
  bowelGroup.add(smallBowelMesh);

  organGroup.add(bowelGroup);
  partsMeshMap.set('fullbody_digestive_intestines', bowelGroup);

  // =========================================================================
  // 7. RENAL ORGANS & BLADDER (fullbody_retroperitoneal_urinary)
  // =========================================================================
  const urinaryGroup = new THREE.Group();
  urinaryGroup.name = 'fullbody_retroperitoneal_urinary';

  // Right Kidney
  const rKidneyGeo = new THREE.SphereGeometry(0.12, 20, 16);
  rKidneyGeo.scale(0.7, 1.25, 0.8);
  const rKidneyMesh = new THREE.Mesh(rKidneyGeo, kidneyMat);
  rKidneyMesh.position.set(0.18, 0.44, -0.04);
  rKidneyMesh.name = 'fullbody_retroperitoneal_urinary';
  urinaryGroup.add(rKidneyMesh);

  // Left Kidney (slightly higher)
  const lKidneyGeo = new THREE.SphereGeometry(0.12, 20, 16);
  lKidneyGeo.scale(0.7, 1.25, 0.8);
  const lKidneyMesh = new THREE.Mesh(lKidneyGeo, kidneyMat);
  lKidneyMesh.position.set(-0.18, 0.5, -0.04);
  lKidneyMesh.name = 'fullbody_retroperitoneal_urinary';
  urinaryGroup.add(lKidneyMesh);

  // Ureters to bladder
  const rUreterCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.18, 0.4, -0.03),
    new THREE.Vector3(0.12, 0.15, 0.02),
    new THREE.Vector3(0.05, -0.12, 0.08)
  ]);
  const rUreterMesh = new THREE.Mesh(new THREE.TubeGeometry(rUreterCurve, 16, 0.016, 8, false), bowelMat);
  rUreterMesh.name = 'fullbody_retroperitoneal_urinary';
  urinaryGroup.add(rUreterMesh);

  const lUreterCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.18, 0.46, -0.03),
    new THREE.Vector3(-0.12, 0.15, 0.02),
    new THREE.Vector3(-0.05, -0.12, 0.08)
  ]);
  const lUreterMesh = new THREE.Mesh(new THREE.TubeGeometry(lUreterCurve, 16, 0.016, 8, false), bowelMat);
  lUreterMesh.name = 'fullbody_retroperitoneal_urinary';
  urinaryGroup.add(lUreterMesh);

  // Urinary Bladder
  const bladderGeo = new THREE.SphereGeometry(0.12, 20, 16);
  bladderGeo.scale(1.1, 0.9, 1.0);
  const bladderMesh = new THREE.Mesh(bladderGeo, bowelMat);
  bladderMesh.position.set(0, -0.15, 0.1);
  bladderMesh.name = 'fullbody_retroperitoneal_urinary';
  urinaryGroup.add(bladderMesh);

  organGroup.add(urinaryGroup);
  partsMeshMap.set('fullbody_retroperitoneal_urinary', urinaryGroup);

  // =========================================================================
  // 8. UPPER APPENDICULAR LIMBS: SHOULDERS & ARMS (fullbody_appendicular_upper)
  // =========================================================================
  const upperLimbsGroup = new THREE.Group();
  upperLimbsGroup.name = 'fullbody_appendicular_upper';

  // Bilateral Clavicles
  const rClavicleCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.03, 1.25, 0.22),
    new THREE.Vector3(0.24, 1.24, 0.16),
    new THREE.Vector3(0.48, 1.22, 0.06) // Acromioclavicular joint
  ]);
  const rClavicleMesh = new THREE.Mesh(new THREE.TubeGeometry(rClavicleCurve, 16, 0.03, 10, false), boneMat);
  rClavicleMesh.name = 'fullbody_appendicular_upper';
  upperLimbsGroup.add(rClavicleMesh);

  const lClavicleCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.03, 1.25, 0.22),
    new THREE.Vector3(-0.24, 1.24, 0.16),
    new THREE.Vector3(-0.48, 1.22, 0.06)
  ]);
  const lClavicleMesh = new THREE.Mesh(new THREE.TubeGeometry(lClavicleCurve, 16, 0.03, 10, false), boneMat);
  lClavicleMesh.name = 'fullbody_appendicular_upper';
  upperLimbsGroup.add(lClavicleMesh);

  // Right Arm (Humerus, Radius, Ulna, Hand)
  const rArmCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.52, 1.2, 0.02),  // Shoulder joint
    new THREE.Vector3(0.62, 0.85, 0.04), // Humerus midshaft
    new THREE.Vector3(0.66, 0.55, 0.06), // Elbow joint
    new THREE.Vector3(0.72, 0.22, 0.12), // Forearm mid
    new THREE.Vector3(0.76, -0.05, 0.15) // Wrist / hand
  ]);
  const rArmMesh = new THREE.Mesh(new THREE.TubeGeometry(rArmCurve, 24, 0.045, 10, false), boneMat);
  rArmMesh.name = 'fullbody_appendicular_upper';
  upperLimbsGroup.add(rArmMesh);

  // Left Arm
  const lArmCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.52, 1.2, 0.02),
    new THREE.Vector3(-0.62, 0.85, 0.04),
    new THREE.Vector3(-0.66, 0.55, 0.06),
    new THREE.Vector3(-0.72, 0.22, 0.12),
    new THREE.Vector3(-0.76, -0.05, 0.15)
  ]);
  const lArmMesh = new THREE.Mesh(new THREE.TubeGeometry(lArmCurve, 24, 0.045, 10, false), boneMat);
  lArmMesh.name = 'fullbody_appendicular_upper';
  upperLimbsGroup.add(lArmMesh);

  organGroup.add(upperLimbsGroup);
  partsMeshMap.set('fullbody_appendicular_upper', upperLimbsGroup);

  // =========================================================================
  // 9. LOWER APPENDICULAR LIMBS: PELVIS & LEGS (fullbody_appendicular_lower)
  // =========================================================================
  const lowerLimbsGroup = new THREE.Group();
  lowerLimbsGroup.name = 'fullbody_appendicular_lower';

  // Pelvic Girdle (Iliac crests, pubic symphysis)
  const pelvisGeo = createSculptedGeometry(36, 24, (x, y, z) => {
    let px = x * 0.44;
    let py = y * 0.24;
    let pz = z * 0.28;
    // Pelvic bowl hollow & iliac flare
    if (py > 0) {
      px *= 1.2; // Iliac crest flare
    } else {
      px *= 0.75; // Ischial spine narrowing
    }
    return [px, py, pz];
  });
  const pelvisMesh = new THREE.Mesh(pelvisGeo, boneMat);
  pelvisMesh.position.set(0, -0.06, 0.02);
  pelvisMesh.name = 'fullbody_appendicular_lower';
  lowerLimbsGroup.add(pelvisMesh);

  // Right Leg (Femur, Knee, Tibia/Fibula, Foot)
  const rLegCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.24, -0.15, 0.04), // Femoral head / hip socket
    new THREE.Vector3(0.22, -0.55, 0.06), // Femur shaft (valgus angle)
    new THREE.Vector3(0.2, -0.85, 0.05),  // Knee joint & patella
    new THREE.Vector3(0.19, -1.18, 0.02), // Tibia / calf
    new THREE.Vector3(0.18, -1.5, -0.02), // Ankle malleoli
    new THREE.Vector3(0.18, -1.55, 0.12)  // Metatarsals & toes
  ]);
  const rLegMesh = new THREE.Mesh(new THREE.TubeGeometry(rLegCurve, 28, 0.06, 12, false), boneMat);
  rLegMesh.name = 'fullbody_appendicular_lower';
  lowerLimbsGroup.add(rLegMesh);

  // Left Leg
  const lLegCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.24, -0.15, 0.04),
    new THREE.Vector3(-0.22, -0.55, 0.06),
    new THREE.Vector3(-0.2, -0.85, 0.05),
    new THREE.Vector3(-0.19, -1.18, 0.02),
    new THREE.Vector3(-0.18, -1.5, -0.02),
    new THREE.Vector3(-0.18, -1.55, 0.12)
  ]);
  const lLegMesh = new THREE.Mesh(new THREE.TubeGeometry(lLegCurve, 28, 0.06, 12, false), boneMat);
  lLegMesh.name = 'fullbody_appendicular_lower';
  lowerLimbsGroup.add(lLegMesh);

  organGroup.add(lowerLimbsGroup);
  partsMeshMap.set('fullbody_appendicular_lower', lowerLimbsGroup);

  // =========================================================================
  // 10. INTEGUMENTARY SURFACE & FASCIA (fullbody_integumentary_skin)
  // =========================================================================
  // Beautiful translucent human biological silhouette envelope allowing deep internal visualization
  const skinGeo = createSculptedGeometry(56, 44, (x, y, z) => {
    // y is in range [-1, 1], map to anatomical human height [1.95, -1.55]
    const ny = y; // -1 at feet to +1 at crown
    let px = x;
    let py = y * 1.75 + 0.2; // Head ~1.95, feet ~-1.55
    let pz = z;

    if (ny > 0.82) {
      // Head & Cranium
      const t = (ny - 0.82) / 0.18;
      px *= 0.44;
      pz *= 0.46;
    } else if (ny > 0.7) {
      // Neck
      px *= 0.26;
      pz *= 0.26;
    } else if (ny > 0.4) {
      // Shoulders & Thorax
      const t = (ny - 0.4) / 0.3;
      px *= 0.65 + t * 0.15;
      pz *= 0.38 + t * 0.05;
    } else if (ny > 0.1) {
      // Waist / Abdomen
      px *= 0.52;
      pz *= 0.36;
    } else if (ny > -0.15) {
      // Pelvis & Hips
      px *= 0.58;
      pz *= 0.4;
    } else if (ny > -0.6) {
      // Thighs
      const sign = x >= 0 ? 1 : -1;
      px = (Math.abs(x) * 0.28 + 0.12) * sign;
      pz *= 0.32;
    } else if (ny > -0.75) {
      // Knees
      const sign = x >= 0 ? 1 : -1;
      px = (Math.abs(x) * 0.2 + 0.1) * sign;
      pz *= 0.26;
    } else {
      // Calves & Feet
      const sign = x >= 0 ? 1 : -1;
      px = (Math.abs(x) * 0.18 + 0.09) * sign;
      pz *= 0.24;
      if (ny < -0.92) {
        pz += (ny + 0.92) * -0.4; // Foot arch forward extension
      }
    }

    return [px, py, pz];
  });

  const skinMesh = new THREE.Mesh(skinGeo, skinMat);
  skinMesh.name = 'fullbody_integumentary_skin';
  organGroup.add(skinMesh);
  partsMeshMap.set('fullbody_integumentary_skin', skinMesh);
}

