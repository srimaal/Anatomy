import * as THREE from 'three';
import { createBioMaterial, createSculptedGeometry } from './anatomyModelBuilders';

// =============================================================================
// 1. 💪 MUSCULAR SYSTEM (Musculature, Tendons & Biomechanical Striations)
// =============================================================================
export function buildMuscularSystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  // Muscle Materials
  const muscleRedMat = createBioMaterial({
    color: '#be123c', // Deep myoglobin crimson
    roughness: 0.38,
    clearcoat: 0.6,
    clearcoatRoughness: 0.15,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const muscleHighlightMat = createBioMaterial({
    color: '#e11d48', // Vibrant red muscle belly
    roughness: 0.35,
    clearcoat: 0.65,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98,
    wireframe: isXRay
  });

  const tendonMat = createBioMaterial({
    color: '#f8fafc', // Pearlescent white collagenous tendon
    roughness: 0.25,
    clearcoat: 0.8,
    metalness: 0.08,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98,
    wireframe: isXRay
  });

  const deepMuscleMat = createBioMaterial({
    color: '#9f1239', // Dark red deep fibers
    roughness: 0.42,
    clearcoat: 0.5,
    transparent: isXRay,
    opacity: isXRay ? 0.3 : 0.96,
    wireframe: isXRay
  });

  // Skeletal ghost reference for anatomical context
  const boneRefMat = createBioMaterial({
    color: '#e2e8f0',
    roughness: 0.5,
    clearcoat: 0.3,
    transparent: true,
    opacity: 0.25,
    wireframe: isXRay
  });

  // 1. PECTORALIS MAJOR (Chest Muscle Group)
  const pecGroup = new THREE.Group();
  pecGroup.name = 'muscular_pectoralis';

  [-1, 1].forEach((side) => {
    // Clavicular and Sternocostal heads
    for (let i = 0; i < 5; i++) {
      const fanAngle = (i - 2) * 0.16;
      const pecCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.04, 1.15 - i * 0.07, 0.22),
        new THREE.Vector3(side * 0.22, 1.05 - i * 0.04, 0.25),
        new THREE.Vector3(side * 0.42, 1.1 + fanAngle * 0.2, 0.12) // Converges toward humeral bicipital ridge
      ]);
      const pecTube = new THREE.Mesh(
        new THREE.TubeGeometry(pecCurve, 20, 0.038 - i * 0.003, 10, false),
        i % 2 === 0 ? muscleHighlightMat : muscleRedMat
      );
      pecTube.name = 'muscular_pectoralis';
      pecGroup.add(pecTube);
    }

    // Tendinous insertion into humerus
    const pecTendonCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 0.42, 1.1, 0.12),
      new THREE.Vector3(side * 0.48, 1.12, 0.08)
    ]);
    const pecTendon = new THREE.Mesh(new THREE.TubeGeometry(pecTendonCurve, 10, 0.024, 8, false), tendonMat);
    pecTendon.name = 'muscular_pectoralis';
    pecGroup.add(pecTendon);
  });

  organGroup.add(pecGroup);
  partsMeshMap.set('muscular_pectoralis', pecGroup);

  // 2. RECTUS ABDOMINIS & ABDOMINAL CORE (Six-Pack & Obliques)
  const absGroup = new THREE.Group();
  absGroup.name = 'muscular_abdominis';

  // Left and Right Rectus Abdominis Muscle Bellies
  [-1, 1].forEach((side) => {
    for (let segment = 0; segment < 4; segment++) {
      const segY = 0.72 - segment * 0.15;
      const segGeo = new THREE.BoxGeometry(0.12, 0.12, 0.05);
      // Soft rounded muscle belly
      const segMesh = new THREE.Mesh(segGeo, muscleRedMat);
      segMesh.position.set(side * 0.08, segY, 0.22 - segment * 0.015);
      segMesh.name = 'muscular_abdominis';
      absGroup.add(segMesh);

      // Tendinous intersection line between segments
      if (segment < 3) {
        const lineGeo = new THREE.BoxGeometry(0.14, 0.018, 0.055);
        const lineMesh = new THREE.Mesh(lineGeo, tendonMat);
        lineMesh.position.set(side * 0.08, segY - 0.065, 0.22 - segment * 0.015);
        lineMesh.name = 'muscular_abdominis';
        absGroup.add(lineMesh);
      }
    }

    // External Obliques lateral flank muscle sheets
    for (let k = 0; k < 4; k++) {
      const oblCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(side * 0.35, 0.75 - k * 0.12, 0.05),
        new THREE.Vector3(side * 0.26, 0.62 - k * 0.12, 0.15),
        new THREE.Vector3(side * 0.15, 0.5 - k * 0.12, 0.2)
      ]);
      const oblMesh = new THREE.Mesh(new THREE.TubeGeometry(oblCurve, 16, 0.026, 8, false), deepMuscleMat);
      oblMesh.name = 'muscular_abdominis';
      absGroup.add(oblMesh);
    }
  });

  // Linea Alba (Central tendinous midline)
  const lineaAlbaGeo = new THREE.BoxGeometry(0.016, 0.65, 0.055);
  const lineaAlbaMesh = new THREE.Mesh(lineaAlbaGeo, tendonMat);
  lineaAlbaMesh.position.set(0, 0.48, 0.22);
  lineaAlbaMesh.name = 'muscular_abdominis';
  absGroup.add(lineaAlbaMesh);

  organGroup.add(absGroup);
  partsMeshMap.set('muscular_abdominis', absGroup);

  // 3. QUADRICEPS FEMORIS (Anterior Thigh Extensor Group)
  const quadGroup = new THREE.Group();
  quadGroup.name = 'muscular_quadriceps';

  [-1, 1].forEach((side) => {
    // Rectus Femoris (central prominent belly)
    const rfGeo = new THREE.CylinderGeometry(0.07, 0.045, 0.52, 16);
    rfGeo.scale(1.0, 1.0, 0.85);
    const rfMesh = new THREE.Mesh(rfGeo, muscleHighlightMat);
    rfMesh.position.set(side * 0.2, -0.42, 0.15);
    rfMesh.name = 'muscular_quadriceps';
    quadGroup.add(rfMesh);

    // Vastus Lateralis (large outer head)
    const vlGeo = new THREE.CylinderGeometry(0.065, 0.04, 0.48, 16);
    vlGeo.scale(1.1, 1.0, 0.8);
    const vlMesh = new THREE.Mesh(vlGeo, muscleRedMat);
    vlMesh.position.set(side * 0.29, -0.4, 0.11);
    vlMesh.rotation.z = side * -0.12;
    vlMesh.name = 'muscular_quadriceps';
    quadGroup.add(vlMesh);

    // Vastus Medialis (tear-drop inner head down near knee)
    const vmGeo = new THREE.SphereGeometry(0.065, 16, 16);
    vmGeo.scale(0.9, 1.4, 0.85);
    const vmMesh = new THREE.Mesh(vmGeo, muscleRedMat);
    vmMesh.position.set(side * 0.12, -0.58, 0.13);
    vmMesh.name = 'muscular_quadriceps';
    quadGroup.add(vmMesh);

    // Quadriceps Tendon converging over Patella into Patellar Ligament
    const quadTendonCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 0.2, -0.66, 0.14),
      new THREE.Vector3(side * 0.2, -0.73, 0.15), // Patellar region
      new THREE.Vector3(side * 0.19, -0.84, 0.13) // Tibial tuberosity
    ]);
    const quadTendon = new THREE.Mesh(new THREE.TubeGeometry(quadTendonCurve, 16, 0.03, 10, false), tendonMat);
    quadTendon.name = 'muscular_quadriceps';
    quadGroup.add(quadTendon);
  });

  organGroup.add(quadGroup);
  partsMeshMap.set('muscular_quadriceps', quadGroup);

  // Background Skeletal Reference for biomechanical grounding
  const spineGeo = new THREE.CylinderGeometry(0.03, 0.035, 1.2, 12);
  const spineMesh = new THREE.Mesh(spineGeo, boneRefMat);
  spineMesh.position.set(0, 0.6, -0.02);
  organGroup.add(spineMesh);

  // Sternum Reference
  const sternumGeo = new THREE.BoxGeometry(0.08, 0.35, 0.02);
  const sternumMesh = new THREE.Mesh(sternumGeo, boneRefMat);
  sternumMesh.position.set(0, 1.05, 0.22);
  organGroup.add(sternumMesh);
}

// =============================================================================
// 2. 🧬 ENDOCRINE SYSTEM (Glands, Hormonal Hubs & Feedback Axes)
// =============================================================================
export function buildEndocrineSystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  // Endocrine Materials
  const endocrineGlowMat = createBioMaterial({
    color: '#f59e0b', // Luminous endocrine amber-gold
    roughness: 0.2,
    metalness: 0.1,
    clearcoat: 0.9,
    clearcoatRoughness: 0.05,
    sheen: 0.9,
    sheenColor: '#fbbf24',
    transparent: isXRay,
    opacity: isXRay ? 0.6 : 0.98
  });

  const thyroidMat = createBioMaterial({
    color: '#d97706', // Rich amber-red gland
    roughness: 0.3,
    clearcoat: 0.8,
    transparent: isXRay,
    opacity: isXRay ? 0.5 : 0.98
  });

  const parathyroidMat = createBioMaterial({
    color: '#fde047', // Pale golden parathyroid dots
    roughness: 0.2,
    clearcoat: 0.9
  });

  const adrenalMat = createBioMaterial({
    color: '#eab308', // Pyramid-yellow adrenals
    roughness: 0.35,
    clearcoat: 0.7
  });

  const bodyTransMat = createBioMaterial({
    color: '#334155',
    roughness: 0.6,
    clearcoat: 0.2,
    transparent: true,
    opacity: 0.16,
    wireframe: true
  });

  const vesselAxisMat = new THREE.LineBasicMaterial({
    color: 0xf59e0b,
    transparent: true,
    opacity: 0.55
  });

  // Somatic Transparent Silhouette
  const headGeo = new THREE.SphereGeometry(0.24, 24, 18);
  headGeo.scale(0.8, 1.05, 0.9);
  const headMesh = new THREE.Mesh(headGeo, bodyTransMat);
  headMesh.position.set(0, 1.75, 0);
  organGroup.add(headMesh);

  const torsoGeo = new THREE.CylinderGeometry(0.32, 0.28, 1.1, 20);
  const torsoMesh = new THREE.Mesh(torsoGeo, bodyTransMat);
  torsoMesh.position.set(0, 0.8, 0);
  organGroup.add(torsoMesh);

  // 1. PITUITARY GLAND & HYPOTHALAMUS (Master Hypophysis)
  const pitGroup = new THREE.Group();
  pitGroup.name = 'endocrine_pituitary';

  // Anterior Lobe (Adenohypophysis)
  const antPitGeo = new THREE.SphereGeometry(0.045, 20, 16);
  const antPitMesh = new THREE.Mesh(antPitGeo, endocrineGlowMat);
  antPitMesh.position.set(0, 1.78, 0.04);
  antPitMesh.name = 'endocrine_pituitary';
  pitGroup.add(antPitMesh);

  // Posterior Lobe (Neurohypophysis)
  const postPitGeo = new THREE.SphereGeometry(0.038, 16, 16);
  const postPitMesh = new THREE.Mesh(postPitGeo, thyroidMat);
  postPitMesh.position.set(0, 1.775, 0.005);
  postPitMesh.name = 'endocrine_pituitary';
  pitGroup.add(postPitMesh);

  // Infundibulum Stalk (Connecting to Hypothalamus)
  const infundCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.78, 0.02),
    new THREE.Vector3(0, 1.86, 0.02)
  ]);
  const infundMesh = new THREE.Mesh(new THREE.TubeGeometry(infundCurve, 12, 0.012, 8, false), endocrineGlowMat);
  infundMesh.name = 'endocrine_pituitary';
  pitGroup.add(infundMesh);

  // Sella Turcica Sphenoid Saddle Cradle
  const sellaGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.03, 16, 1, false, 0, Math.PI);
  const sellaMesh = new THREE.Mesh(sellaGeo, bodyTransMat);
  sellaMesh.position.set(0, 1.74, 0.02);
  sellaMesh.name = 'endocrine_pituitary';
  pitGroup.add(sellaMesh);

  organGroup.add(pitGroup);
  partsMeshMap.set('endocrine_pituitary', pitGroup);

  // 2. THYROID & PARATHYROID GLANDS (Butterfly Gland)
  const thyroidGroup = new THREE.Group();
  thyroidGroup.name = 'endocrine_thyroid';

  // Right Lobe
  const rLobeGeo = new THREE.SphereGeometry(0.065, 18, 16);
  rLobeGeo.scale(0.8, 1.6, 0.7);
  const rLobeMesh = new THREE.Mesh(rLobeGeo, thyroidMat);
  rLobeMesh.position.set(0.08, 1.34, 0.16);
  rLobeMesh.rotation.z = -0.15;
  rLobeMesh.name = 'endocrine_thyroid';
  thyroidGroup.add(rLobeMesh);

  // Left Lobe
  const lLobeGeo = new THREE.SphereGeometry(0.065, 18, 16);
  lLobeGeo.scale(0.8, 1.6, 0.7);
  const lLobeMesh = new THREE.Mesh(lLobeGeo, thyroidMat);
  lLobeMesh.position.set(-0.08, 1.34, 0.16);
  lLobeMesh.rotation.z = 0.15;
  lLobeMesh.name = 'endocrine_thyroid';
  thyroidGroup.add(lLobeMesh);

  // Thyroid Isthmus (Connecting bridge across trachea)
  const isthmusGeo = new THREE.BoxGeometry(0.1, 0.04, 0.03);
  const isthmusMesh = new THREE.Mesh(isthmusGeo, thyroidMat);
  isthmusMesh.position.set(0, 1.31, 0.18);
  isthmusMesh.name = 'endocrine_thyroid';
  thyroidGroup.add(isthmusMesh);

  // Parathyroid Glands (4 posterior golden nodes)
  const paraCoords = [
    [0.09, 1.38, 0.12],
    [0.09, 1.28, 0.12],
    [-0.09, 1.38, 0.12],
    [-0.09, 1.28, 0.12]
  ];
  paraCoords.forEach(([px, py, pz]) => {
    const pMesh = new THREE.Mesh(new THREE.SphereGeometry(0.015, 10, 10), parathyroidMat);
    pMesh.position.set(px, py, pz);
    pMesh.name = 'endocrine_thyroid';
    thyroidGroup.add(pMesh);
  });

  organGroup.add(thyroidGroup);
  partsMeshMap.set('endocrine_thyroid', thyroidGroup);

  // 3. ADRENAL GLANDS (Suprarenal Golden Pyramids)
  const adrenalGroup = new THREE.Group();
  adrenalGroup.name = 'endocrine_adrenals';

  // Right Adrenal (Pyramidal cap)
  const rAdrenalGeo = new THREE.ConeGeometry(0.065, 0.08, 16);
  rAdrenalGeo.scale(1.2, 1.0, 0.7);
  const rAdrenalMesh = new THREE.Mesh(rAdrenalGeo, adrenalMat);
  rAdrenalMesh.position.set(0.18, 0.58, -0.02);
  rAdrenalMesh.rotation.z = -0.2;
  rAdrenalMesh.name = 'endocrine_adrenals';
  adrenalGroup.add(rAdrenalMesh);

  // Left Adrenal (Semilunar cap)
  const lAdrenalGeo = new THREE.ConeGeometry(0.065, 0.09, 16);
  lAdrenalGeo.scale(1.3, 1.0, 0.65);
  const lAdrenalMesh = new THREE.Mesh(lAdrenalGeo, adrenalMat);
  lAdrenalMesh.position.set(-0.18, 0.64, -0.02);
  lAdrenalMesh.rotation.z = 0.25;
  lAdrenalMesh.name = 'endocrine_adrenals';
  adrenalGroup.add(lAdrenalMesh);

  organGroup.add(adrenalGroup);
  partsMeshMap.set('endocrine_adrenals', adrenalGroup);

  // Hormonal Signaling Pathway Stream Lines (Connecting Hypophysis -> Thyroid -> Adrenals)
  const axisPoints = [
    new THREE.Vector3(0, 1.75, 0.03),
    new THREE.Vector3(0, 1.34, 0.16),
    new THREE.Vector3(0, 0.9, 0.08),
    new THREE.Vector3(0.15, 0.58, 0),
    new THREE.Vector3(0, 0.5, 0),
    new THREE.Vector3(-0.15, 0.64, 0)
  ];
  const axisGeo = new THREE.BufferGeometry().setFromPoints(axisPoints);
  const axisLine = new THREE.Line(axisGeo, vesselAxisMat);
  organGroup.add(axisLine);
}

// =============================================================================
// 3. 🛡️ LYMPHATIC & IMMUNE SYSTEM (Nodes, Vessels, Spleen & Thoracic Duct)
// =============================================================================
export function buildLymphaticSystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  // Lymphatic Materials
  const lymphMat = createBioMaterial({
    color: '#10b981', // Emerald green lymphatic fluid
    roughness: 0.25,
    metalness: 0.05,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
    sheen: 0.8,
    sheenColor: '#34d399',
    transparent: isXRay,
    opacity: isXRay ? 0.45 : 0.98
  });

  const nodeMat = createBioMaterial({
    color: '#059669', // Deep emerald lymphoid node
    roughness: 0.35,
    clearcoat: 0.7,
    sheen: 0.7,
    sheenColor: '#10b981',
    transparent: isXRay,
    opacity: isXRay ? 0.55 : 0.98
  });

  const spleenMat = createBioMaterial({
    color: '#047857', // Deep purple-emerald lymphoid organ
    roughness: 0.38,
    clearcoat: 0.75,
    transparent: isXRay,
    opacity: isXRay ? 0.45 : 0.98
  });

  const vesselMat = createBioMaterial({
    color: '#34d399',
    roughness: 0.3,
    clearcoat: 0.7,
    transparent: true,
    opacity: 0.85
  });

  // 1. SPLEEN (Lien - Blood Filter & Erythrocyte Sanctuary)
  const spleenGroup = new THREE.Group();
  spleenGroup.name = 'lymphatic_spleen';

  const spleenGeo = createSculptedGeometry(32, 24, (x, y, z) => {
    let px = x * 0.18;
    let py = y * 0.26;
    let pz = z * 0.14;
    // Anterior splenic notch
    if (x > 0.3 && y > 0) px *= 0.75;
    return [px, py, pz];
  });
  const spleenMesh = new THREE.Mesh(spleenGeo, spleenMat);
  spleenMesh.position.set(-0.32, 0.62, 0.08);
  spleenMesh.rotation.set(0.3, 0.4, -0.2);
  spleenMesh.name = 'lymphatic_spleen';
  spleenGroup.add(spleenMesh);

  // Splenic hilum lymph nodes
  for (let s = 0; s < 3; s++) {
    const snNode = new THREE.Mesh(new THREE.SphereGeometry(0.016, 12, 10), nodeMat);
    snNode.position.set(-0.25 + s * 0.03, 0.6 + s * 0.02, 0.1);
    snNode.name = 'lymphatic_spleen';
    spleenGroup.add(snNode);
  }

  organGroup.add(spleenGroup);
  partsMeshMap.set('lymphatic_spleen', spleenGroup);

  // 2. CERVICAL & SYSTEMIC LYMPH NODES
  const nodeGroup = new THREE.Group();
  nodeGroup.name = 'lymphatic_cervical_nodes';

  // Cervical Nodes (Neck chains along internal jugular vein)
  const cervicalPositions = [
    [0.12, 1.48, 0.14],
    [0.14, 1.4, 0.12],
    [0.15, 1.32, 0.1],
    [-0.12, 1.48, 0.14],
    [-0.14, 1.4, 0.12],
    [-0.15, 1.32, 0.1],
    // Submandibular
    [0.08, 1.54, 0.16],
    [-0.08, 1.54, 0.16],
    // Supraclavicular (Virchow node on left)
    [-0.18, 1.25, 0.12],
    [0.18, 1.25, 0.12]
  ];

  cervicalPositions.forEach(([nx, ny, nz], idx) => {
    const isVirchow = idx === 8;
    const rad = isVirchow ? 0.026 : 0.018;
    const nMesh = new THREE.Mesh(new THREE.SphereGeometry(rad, 14, 12), nodeMat);
    nMesh.scale.set(1.2, 0.9, 0.9);
    nMesh.position.set(nx, ny, nz);
    nMesh.name = 'lymphatic_cervical_nodes';
    nodeGroup.add(nMesh);
  });

  // Axillary Lymph Node Clusters
  [-1, 1].forEach((side) => {
    for (let a = 0; a < 4; a++) {
      const axNode = new THREE.Mesh(new THREE.SphereGeometry(0.018, 12, 10), nodeMat);
      axNode.position.set(side * (0.35 + (a % 2) * 0.04), 1.05 - a * 0.05, 0.08);
      axNode.name = 'lymphatic_cervical_nodes';
      nodeGroup.add(axNode);
    }
  });

  // Inguinal Lymph Node Clusters (Groin)
  [-1, 1].forEach((side) => {
    for (let g = 0; g < 3; g++) {
      const ingNode = new THREE.Mesh(new THREE.SphereGeometry(0.019, 12, 10), nodeMat);
      ingNode.position.set(side * (0.12 + g * 0.04), -0.18 - g * 0.03, 0.12);
      ingNode.name = 'lymphatic_cervical_nodes';
      nodeGroup.add(ingNode);
    }
  });

  organGroup.add(nodeGroup);
  partsMeshMap.set('lymphatic_cervical_nodes', nodeGroup);

  // Thoracic Duct (Main Trunk ascending to Left Subclavian junction)
  const ductCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.04, 0.2, 0.02),   // Cisterna chyli
    new THREE.Vector3(0.03, 0.5, 0.03),
    new THREE.Vector3(-0.02, 0.8, 0.04),
    new THREE.Vector3(-0.05, 1.1, 0.06),
    new THREE.Vector3(-0.16, 1.25, 0.08)  // Terminating into left venous angle
  ]);
  const ductMesh = new THREE.Mesh(new THREE.TubeGeometry(ductCurve, 32, 0.012, 8, false), vesselMat);
  organGroup.add(ductMesh);

  // Cisterna Chyli sac
  const cisternaGeo = new THREE.SphereGeometry(0.032, 14, 12);
  cisternaGeo.scale(0.8, 1.6, 0.8);
  const cisternaMesh = new THREE.Mesh(cisternaGeo, lymphMat);
  cisternaMesh.position.set(0.04, 0.2, 0.02);
  organGroup.add(cisternaMesh);
}

// =============================================================================
// 4. 🔬 INTEGUMENTARY SYSTEM (Skin Layers, Dermis, Hair & Receptors Block)
// =============================================================================
export function buildIntegumentarySystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  // Skin Materials
  const stratumCorneumMat = createBioMaterial({
    color: '#fed7aa', // Keratinized golden-peach epidermis
    roughness: 0.45,
    clearcoat: 0.4,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98
  });

  const dermisMat = createBioMaterial({
    color: '#fda4af', // Pinkish fibrous vascular dermis
    roughness: 0.35,
    clearcoat: 0.65,
    clearcoatRoughness: 0.15,
    transparent: isXRay,
    opacity: isXRay ? 0.35 : 0.98
  });

  const hypodermisMat = createBioMaterial({
    color: '#fde047', // Golden adipose lipid globules
    roughness: 0.55,
    clearcoat: 0.3,
    transparent: isXRay,
    opacity: isXRay ? 0.3 : 0.96
  });

  const hairShaftMat = createBioMaterial({
    color: '#332211', // Dark keratin hair fiber
    roughness: 0.25,
    clearcoat: 0.8
  });

  const sebaceousMat = createBioMaterial({
    color: '#fef08a', // Creamy lipid-secreting gland
    roughness: 0.4
  });

  const sweatGlandMat = createBioMaterial({
    color: '#38bdf8', // Luminous blue-green coiled tubule
    roughness: 0.25,
    clearcoat: 0.9
  });

  const arrectorPiliMat = createBioMaterial({
    color: '#e11d48', // Red smooth muscle band
    roughness: 0.38
  });

  // 1. EPIDERMIS & DERMIS BLOCK CROSS-SECTION
  const skinBlockGroup = new THREE.Group();
  skinBlockGroup.name = 'integumentary_epidermis';

  // Epidermis Slab (Top Layer with undulating dermal papillae)
  const epiGeo = new THREE.BoxGeometry(1.2, 0.14, 0.9);
  const epiMesh = new THREE.Mesh(epiGeo, stratumCorneumMat);
  epiMesh.position.set(0, 0.65, 0);
  epiMesh.name = 'integumentary_epidermis';
  skinBlockGroup.add(epiMesh);

  // Dermis Slab (Middle Thick Structural Layer)
  const dermGeo = new THREE.BoxGeometry(1.2, 0.65, 0.9);
  const dermMesh = new THREE.Mesh(dermGeo, dermisMat);
  dermMesh.position.set(0, 0.25, 0);
  dermMesh.name = 'integumentary_epidermis';
  skinBlockGroup.add(dermMesh);

  // Hypodermis Subcutaneous Adipose Slab (Bottom Layer)
  const hypoGeo = new THREE.BoxGeometry(1.2, 0.35, 0.9);
  const hypoMesh = new THREE.Mesh(hypoGeo, hypodermisMat);
  hypoMesh.position.set(0, -0.25, 0);
  hypoMesh.name = 'integumentary_epidermis';
  skinBlockGroup.add(hypoMesh);

  // Adipose Lipid Droplets inside hypodermis
  for (let f = 0; f < 18; f++) {
    const fx = ((f % 6) - 2.5) * 0.18;
    const fz = (Math.floor(f / 6) - 1) * 0.25;
    const fatDrop = new THREE.Mesh(new THREE.SphereGeometry(0.055, 12, 10), hypodermisMat);
    fatDrop.position.set(fx, -0.25, fz);
    skinBlockGroup.add(fatDrop);
  }

  organGroup.add(skinBlockGroup);
  partsMeshMap.set('integumentary_epidermis', skinBlockGroup);

  // 2. HAIR FOLLICLE & SWEAT GLANDS
  const follicleGroup = new THREE.Group();
  follicleGroup.name = 'integumentary_follicle_glands';

  // Hair Shaft 1 (Piercing through epidermis out into air)
  const hairCurve1 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.15, -0.05, 0.1), // Bulb in dermis
    new THREE.Vector3(-0.16, 0.35, 0.1),
    new THREE.Vector3(-0.18, 0.72, 0.1),  // Surface exit pore
    new THREE.Vector3(-0.25, 1.15, 0.12)  // Free hair shaft
  ]);
  const hairMesh1 = new THREE.Mesh(new THREE.TubeGeometry(hairCurve1, 24, 0.02, 10, false), hairShaftMat);
  hairMesh1.name = 'integumentary_follicle_glands';
  follicleGroup.add(hairMesh1);

  // Hair Bulb Base
  const bulbGeo = new THREE.SphereGeometry(0.045, 14, 12);
  const bulbMesh = new THREE.Mesh(bulbGeo, hairShaftMat);
  bulbMesh.position.set(-0.15, -0.05, 0.1);
  bulbMesh.name = 'integumentary_follicle_glands';
  follicleGroup.add(bulbMesh);

  // Sebaceous Gland Lobule (Attached to hair follicle neck)
  const sebaGeo = new THREE.SphereGeometry(0.05, 12, 10);
  sebaGeo.scale(1.2, 0.9, 0.8);
  const sebaMesh = new THREE.Mesh(sebaGeo, sebaceousMat);
  sebaMesh.position.set(-0.09, 0.45, 0.1);
  sebaMesh.name = 'integumentary_follicle_glands';
  follicleGroup.add(sebaMesh);

  // Arrector Pili Smooth Muscle (Slanted band pulling follicle upright)
  const apCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.14, 0.1, 0.1),
    new THREE.Vector3(0.04, 0.35, 0.1),
    new THREE.Vector3(0.18, 0.58, 0.1)
  ]);
  const apMesh = new THREE.Mesh(new THREE.TubeGeometry(apCurve, 16, 0.016, 8, false), arrectorPiliMat);
  apMesh.name = 'integumentary_follicle_glands';
  follicleGroup.add(apMesh);

  // Eccrine Coiled Sweat Gland (Coil in dermis with spiral duct to pore)
  const sweatCoilGroup = new THREE.Group();
  for (let c = 0; c < 5; c++) {
    const ringGeo = new THREE.TorusGeometry(0.045, 0.012, 8, 16);
    const ringMesh = new THREE.Mesh(ringGeo, sweatGlandMat);
    ringMesh.position.set(0.3, 0.05 + c * 0.025, -0.08);
    ringMesh.rotation.x = Math.PI / 2 + c * 0.2;
    sweatCoilGroup.add(ringMesh);
  }
  // Excretory spiral duct to surface pore
  const ductCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.3, 0.18, -0.08),
    new THREE.Vector3(0.28, 0.4, -0.07),
    new THREE.Vector3(0.32, 0.55, -0.08),
    new THREE.Vector3(0.3, 0.73, -0.08) // Sweat pore
  ]);
  const ductMesh = new THREE.Mesh(new THREE.TubeGeometry(ductCurve, 20, 0.012, 8, false), sweatGlandMat);
  sweatCoilGroup.add(ductMesh);

  follicleGroup.add(sweatCoilGroup);
  sweatCoilGroup.name = 'integumentary_follicle_glands';

  // Sensory Corpuscle (Pacinian lamellated vibration sensor in deep dermis)
  const pacinianGeo = new THREE.SphereGeometry(0.045, 14, 12);
  pacinianGeo.scale(1.5, 0.7, 0.7);
  const pacinianMat = createBioMaterial({ color: '#38bdf8', roughness: 0.3, clearcoat: 0.8 });
  const pacinianMesh = new THREE.Mesh(pacinianGeo, pacinianMat);
  pacinianMesh.position.set(-0.35, 0.05, -0.15);
  pacinianMesh.name = 'integumentary_follicle_glands';
  follicleGroup.add(pacinianMesh);

  organGroup.add(follicleGroup);
  partsMeshMap.set('integumentary_follicle_glands', follicleGroup);
}

// =============================================================================
// 5. 🌸 REPRODUCTIVE SYSTEM (Pelvic Organs, Gonads & Generational Matrix)
// =============================================================================
export function buildReproductiveSystem(
  organGroup: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  // Reproductive Materials
  const uterusMat = createBioMaterial({
    color: '#e11d48', // Rich rose myometrial muscle
    roughness: 0.32,
    clearcoat: 0.7,
    clearcoatRoughness: 0.12,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98
  });

  const gonadMat = createBioMaterial({
    color: '#fb7185', // Ovarian / Testicular parenchymal pink
    roughness: 0.28,
    clearcoat: 0.8,
    transparent: isXRay,
    opacity: isXRay ? 0.4 : 0.98
  });

  const tubeMat = createBioMaterial({
    color: '#f43f5e',
    roughness: 0.35,
    clearcoat: 0.65
  });

  const ligamentMat = createBioMaterial({
    color: '#fde047',
    roughness: 0.4,
    clearcoat: 0.3,
    transparent: true,
    opacity: 0.75
  });

  const pelvisRefMat = createBioMaterial({
    color: '#e2e8f0',
    roughness: 0.5,
    clearcoat: 0.2,
    transparent: true,
    opacity: 0.25,
    wireframe: true
  });

  // Pelvic Bones Frame Reference
  const pelvicRingGeo = new THREE.TorusGeometry(0.38, 0.04, 12, 24);
  const pelvicRing = new THREE.Mesh(pelvicRingGeo, pelvisRefMat);
  pelvicRing.position.set(0, -0.05, 0.02);
  pelvicRing.rotation.x = Math.PI / 2.5;
  organGroup.add(pelvicRing);

  // 1. GONADS (Ovaries / Testes Gametogenic Centers)
  const gonadGroup = new THREE.Group();
  gonadGroup.name = 'reproductive_gonads';

  [-1, 1].forEach((side) => {
    // Ovary / Gonad body
    const gonadGeo = new THREE.SphereGeometry(0.055, 18, 16);
    gonadGeo.scale(1.2, 0.8, 0.8);
    const gonadMesh = new THREE.Mesh(gonadGeo, gonadMat);
    gonadMesh.position.set(side * 0.28, -0.08, 0.04);
    gonadMesh.name = 'reproductive_gonads';
    gonadGroup.add(gonadMesh);

    // Ovarian Ligament to Uterus
    const ovLigCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 0.23, -0.08, 0.04),
      new THREE.Vector3(side * 0.1, -0.05, 0.05)
    ]);
    const ovLigMesh = new THREE.Mesh(new THREE.TubeGeometry(ovLigCurve, 12, 0.012, 8, false), ligamentMat);
    ovLigMesh.name = 'reproductive_gonads';
    gonadGroup.add(ovLigMesh);

    // Suspensory ligament carrying ovarian neurovascular bundle
    const suspCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 0.33, -0.08, 0.04),
      new THREE.Vector3(side * 0.38, 0.15, -0.02)
    ]);
    const suspMesh = new THREE.Mesh(new THREE.TubeGeometry(suspCurve, 12, 0.01, 8, false), ligamentMat);
    suspMesh.name = 'reproductive_gonads';
    gonadGroup.add(suspMesh);
  });

  organGroup.add(gonadGroup);
  partsMeshMap.set('reproductive_gonads', gonadGroup);

  // 2. UTERUS & FALLOPIAN TUBES
  const uterusGroup = new THREE.Group();
  uterusGroup.name = 'reproductive_uterus';

  // Uterine Fundus & Corpus (Pear-shaped muscular organ)
  const uterusGeo = createSculptedGeometry(32, 24, (x, y, z) => {
    let px = x * 0.12;
    let py = y * 0.16;
    let pz = z * 0.09;
    // Wider at fundus top, tapering down to cervix
    if (y > 0) {
      px *= 1.35;
      pz *= 1.15;
    } else {
      px *= 0.65;
      pz *= 0.75;
    }
    return [px, py, pz];
  });
  const uterusMesh = new THREE.Mesh(uterusGeo, uterusMat);
  uterusMesh.position.set(0, -0.06, 0.06);
  uterusMesh.rotation.x = -0.15; // Anteverted posture
  uterusMesh.name = 'reproductive_uterus';
  uterusGroup.add(uterusMesh);

  // Cervix & Vaginal Canal
  const cervixGeo = new THREE.CylinderGeometry(0.04, 0.045, 0.14, 16);
  const cervixMesh = new THREE.Mesh(cervixGeo, uterusMat);
  cervixMesh.position.set(0, -0.2, 0.03);
  cervixMesh.name = 'reproductive_uterus';
  uterusGroup.add(cervixMesh);

  // Bilateral Fallopian Tubes with Fimbriae arching over ovaries
  [-1, 1].forEach((side) => {
    const tubeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(side * 0.09, 0.04, 0.06),   // Uterine cornu
      new THREE.Vector3(side * 0.22, 0.08, 0.07),   // Isthmus
      new THREE.Vector3(side * 0.32, 0.02, 0.06),   // Ampulla
      new THREE.Vector3(side * 0.3, -0.05, 0.04)    // Fimbriated infundibulum over ovary
    ]);
    const tubeMesh = new THREE.Mesh(new THREE.TubeGeometry(tubeCurve, 24, 0.016, 10, false), tubeMat);
    tubeMesh.name = 'reproductive_uterus';
    uterusGroup.add(tubeMesh);

    // Fimbriae fringe fingers
    for (let f = 0; f < 5; f++) {
      const fAngle = (f / 5) * Math.PI * 2;
      const fimbriaGeo = new THREE.CylinderGeometry(0.005, 0.008, 0.03, 6);
      const fimbriaMesh = new THREE.Mesh(fimbriaGeo, gonadMat);
      fimbriaMesh.position.set(
        side * 0.3 + Math.cos(fAngle) * 0.015,
        -0.05 + Math.sin(fAngle) * 0.015,
        0.04
      );
      fimbriaMesh.name = 'reproductive_uterus';
      uterusGroup.add(fimbriaMesh);
    }
  });

  organGroup.add(uterusGroup);
  partsMeshMap.set('reproductive_uterus', uterusGroup);
}
