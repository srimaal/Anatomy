import * as THREE from 'three';

/**
 * Creates an anatomical 3D model of a Frog (Anura Amphibian)
 * Features:
 * - Flattened amphibian cranium with bulging dorsal orbits and tympanic membranes
 * - Translucent mottled olive-green cutaneous silhouette
 * - Internal dissection viscera: 3-chambered heart (atria + ventricle with truncus arteriosus),
 *   saccular lungs, tri-lobed liver with gall bladder, stomach, coiled intestine, cloaca, and mesonephric kidneys
 * - Skeletal framework: 9 vertebrae, prominent elongated Urostyle rod, pectoral girdle,
 *   ilium shafts, and jumping hindlimbs (fused tibiofibula, astragalus & calcaneum, webbed digits)
 */
export function buildFrogAnatomy(
  group: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  const skinOpacity = isXRay ? 0.15 : isCutaway ? 0.35 : 0.85;

  // 1. Cutaneous Skin Silhouette & Body Torso
  const skinMat = new THREE.MeshPhysicalMaterial({
    color: 0x22c55e,
    roughness: 0.25,
    metalness: 0.1,
    transmission: isCutaway || isXRay ? 0.75 : 0.2,
    opacity: skinOpacity,
    transparent: true,
    clearcoat: 0.8,
    clearcoatRoughness: 0.15
  });

  const torsoGeo = new THREE.CylinderGeometry(0.75, 0.65, 1.6, 24);
  torsoGeo.scale(1.25, 1.0, 0.75);
  const torsoMesh = new THREE.Mesh(torsoGeo, skinMat);
  torsoMesh.position.set(0, -0.1, 0);
  torsoMesh.name = 'frog_cutaneous_skin';
  group.add(torsoMesh);
  partsMeshMap.set('frog_cutaneous_skin', torsoMesh);

  // 2. Wide Flattened Frog Head with Mouth slit
  const headGeo = new THREE.ConeGeometry(0.95, 0.9, 20);
  headGeo.scale(1.3, 0.45, 1.1);
  headGeo.rotateX(Math.PI);
  const headMesh = new THREE.Mesh(headGeo, skinMat);
  headMesh.position.set(0, 0.95, 0.15);
  group.add(headMesh);

  // Bulging Orbits & Eyes with Nictitating Membrane
  const eyeMat = new THREE.MeshStandardMaterial({
    color: 0x15803d,
    roughness: 0.1,
    metalness: 0.4
  });
  const pupilMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
  const irisMat = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.2 });

  [-0.45, 0.45].forEach((xOffset, idx) => {
    const eyeGroup = new THREE.Group();
    eyeGroup.position.set(xOffset, 1.15, 0.25);

    const orbitMesh = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), eyeMat);
    const irisMesh = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), irisMat);
    irisMesh.position.set(0, 0.04, 0.08);

    // Horizontal slit pupil characteristic of anurans
    const pupilGeo = new THREE.BoxGeometry(0.18, 0.05, 0.08);
    const pupilMesh = new THREE.Mesh(pupilGeo, pupilMat);
    pupilMesh.position.set(0, 0.04, 0.18);

    eyeGroup.add(orbitMesh, irisMesh, pupilMesh);
    group.add(eyeGroup);

    // Tympanic Membrane (circular external eardrum) behind each eye
    const tympanumGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.04, 16);
    tympanumGeo.rotateX(Math.PI / 2);
    const tympanumMat = new THREE.MeshStandardMaterial({ color: 0x854d0e, roughness: 0.6 });
    const tympanumMesh = new THREE.Mesh(tympanumGeo, tympanumMat);
    tympanumMesh.position.set(xOffset * 1.35, 0.95, 0.05);
    tympanumMesh.rotation.y = xOffset > 0 ? 0.35 : -0.35;
    group.add(tympanumMesh);
  });

  // 3. Three-Chambered Heart (2 Atria + 1 Ventricle + Truncus Arteriosus)
  const heartGroup = new THREE.Group();
  heartGroup.position.set(0, 0.25, 0.35);
  heartGroup.name = 'frog_3chamber_heart';

  const ventricleMat = new THREE.MeshStandardMaterial({
    color: 0xdc2626,
    roughness: 0.3,
    metalness: 0.2,
    emissive: 0x991b1b,
    emissiveIntensity: 0.3
  });
  // Ventricle (apex pointing downward)
  const ventricleGeo = new THREE.ConeGeometry(0.22, 0.38, 16);
  ventricleGeo.rotateX(Math.PI);
  const ventricleMesh = new THREE.Mesh(ventricleGeo, ventricleMat);
  ventricleMesh.position.set(0, -0.05, 0);

  // Right Atrium (receives deoxygenated venous blood)
  const rightAtriumMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.4 });
  const rightAtriumMesh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), rightAtriumMat);
  rightAtriumMesh.position.set(-0.13, 0.16, 0.02);

  // Left Atrium (receives oxygenated blood from lungs/skin)
  const leftAtriumMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.4 });
  const leftAtriumMesh = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), leftAtriumMat);
  leftAtriumMesh.position.set(0.13, 0.16, 0.02);

  // Truncus Arteriosus with internal spiral valve
  const truncusGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.32, 12);
  const truncusMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.3 });
  const truncusMesh = new THREE.Mesh(truncusGeo, truncusMat);
  truncusMesh.position.set(0, 0.22, 0.08);

  heartGroup.add(ventricleMesh, rightAtriumMesh, leftAtriumMesh, truncusMesh);
  group.add(heartGroup);
  partsMeshMap.set('frog_3chamber_heart', heartGroup);

  // 4. Saccular Paired Lungs
  const lungMat = new THREE.MeshPhysicalMaterial({
    color: 0x38bdf8,
    roughness: 0.3,
    metalness: 0.1,
    transmission: 0.5,
    opacity: 0.85,
    transparent: true
  });
  const lungsGroup = new THREE.Group();
  lungsGroup.position.set(0, 0.45, 0.2);
  lungsGroup.name = 'frog_saccular_lungs';

  [-0.32, 0.32].forEach((xSide) => {
    const lungGeo = new THREE.SphereGeometry(0.24, 16, 16);
    lungGeo.scale(0.85, 1.35, 0.85);
    const lungMesh = new THREE.Mesh(lungGeo, lungMat);
    lungMesh.position.set(xSide, 0, 0);
    lungsGroup.add(lungMesh);
  });
  group.add(lungsGroup);
  partsMeshMap.set('frog_saccular_lungs', lungsGroup);

  // 5. Tri-Lobed Liver, Curved Stomach, Coiled Intestine
  const liverMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.5 });
  const liverLeft = new THREE.Mesh(new THREE.SphereGeometry(0.26, 14, 14), liverMat);
  liverLeft.scale.set(1.2, 0.7, 0.8);
  liverLeft.position.set(-0.25, -0.05, 0.25);

  const liverRight = new THREE.Mesh(new THREE.SphereGeometry(0.24, 14, 14), liverMat);
  liverRight.scale.set(1.1, 0.65, 0.75);
  liverRight.position.set(0.25, -0.05, 0.25);
  group.add(liverLeft, liverRight);

  // Gall Bladder (green vesicle between lobes)
  const gallMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.2 });
  const gallMesh = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), gallMat);
  gallMesh.position.set(0.05, -0.15, 0.32);
  group.add(gallMesh);

  // Stomach & Intestines
  const gutMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4 });
  const stomachCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.15, 0.2, 0.1),
    new THREE.Vector3(-0.3, -0.2, 0.15),
    new THREE.Vector3(-0.1, -0.45, 0.2),
    new THREE.Vector3(0.15, -0.4, 0.2),
    new THREE.Vector3(0, -0.7, 0.2)
  ]);
  const gutGeo = new THREE.TubeGeometry(stomachCurve, 24, 0.1, 10, false);
  const gutMesh = new THREE.Mesh(gutGeo, gutMat);
  group.add(gutMesh);

  // 6. Cloaca (terminal chamber)
  const cloacaMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.5 });
  const cloacaGeo = new THREE.CylinderGeometry(0.14, 0.18, 0.3, 16);
  const cloacaMesh = new THREE.Mesh(cloacaGeo, cloacaMat);
  cloacaMesh.position.set(0, -0.85, 0.15);
  cloacaMesh.name = 'frog_cloaca';
  group.add(cloacaMesh);
  partsMeshMap.set('frog_cloaca', cloacaMesh);

  // 7. Skeletal Framework: 9 Vertebrae + Urostyle Jumping Rod
  const boneMat = new THREE.MeshStandardMaterial({
    color: 0xf1f5f9,
    roughness: 0.4,
    metalness: 0.1
  });

  // Vertebral Column
  for (let i = 0; i < 8; i++) {
    const vertGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 10);
    const vertMesh = new THREE.Mesh(vertGeo, boneMat);
    vertMesh.position.set(0, 0.6 - i * 0.12, -0.1);
    group.add(vertMesh);
  }

  // UROSTYLE (elongated post-sacral fused bone rod)
  const urostyleGroup = new THREE.Group();
  urostyleGroup.position.set(0, -0.5, -0.1);
  urostyleGroup.name = 'frog_urostyle';

  const urostyleGeo = new THREE.ConeGeometry(0.08, 0.85, 12);
  urostyleGeo.rotateX(Math.PI);
  const urostyleMesh = new THREE.Mesh(urostyleGeo, boneMat);
  urostyleGroup.add(urostyleMesh);
  group.add(urostyleGroup);
  partsMeshMap.set('frog_urostyle', urostyleGroup);

  // Pelvic Girdle (elongated iliac shafts parallel to urostyle)
  [-0.22, 0.22].forEach((xIlium) => {
    const iliumGeo = new THREE.CylinderGeometry(0.05, 0.06, 0.75, 10);
    iliumGeo.rotateZ(xIlium > 0 ? 0.2 : -0.2);
    const iliumMesh = new THREE.Mesh(iliumGeo, boneMat);
    iliumMesh.position.set(xIlium, -0.45, -0.05);
    group.add(iliumMesh);
  });

  // 8. Saltatory Jumping Hindlimbs: Femur, Fused Tibiofibula, Astragalus/Calcaneum, Webbed Feet
  [-1, 1].forEach((side) => {
    const legGroup = new THREE.Group();
    legGroup.position.set(side * 0.45, -0.65, -0.05);

    // Femur (thigh)
    const femurGeo = new THREE.CylinderGeometry(0.09, 0.08, 0.85, 12);
    femurGeo.rotateZ(side * 0.95);
    const femurMesh = new THREE.Mesh(femurGeo, boneMat);
    femurMesh.position.set(side * 0.35, 0.15, -0.1);
    legGroup.add(femurMesh);

    // Fused Tibiofibula & Elongated Tarsals
    const tibGroup = new THREE.Group();
    tibGroup.position.set(side * 0.7, -0.25, -0.1);
    tibGroup.name = 'frog_tibiofibula';

    const tibGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.9, 12);
    tibGeo.rotateZ(side * -0.45);
    const tibMesh = new THREE.Mesh(tibGeo, boneMat);
    tibGroup.add(tibMesh);

    // Astragalus & Calcaneum (elongated ankle levers)
    const ankleGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.65, 10);
    ankleGeo.rotateZ(side * 0.65);
    const ankleMesh = new THREE.Mesh(ankleGeo, boneMat);
    ankleMesh.position.set(side * 0.15, -0.45, 0.1);
    tibGroup.add(ankleMesh);

    // Webbed Foot
    const footMat = new THREE.MeshStandardMaterial({
      color: 0x16a34a,
      roughness: 0.5,
      transparent: true,
      opacity: 0.8
    });
    const webGeo = new THREE.ConeGeometry(0.35, 0.6, 6);
    webGeo.scale(1.2, 0.15, 0.9);
    webGeo.rotateX(Math.PI / 2);
    const webMesh = new THREE.Mesh(webGeo, footMat);
    webMesh.position.set(side * 0.3, -0.65, 0.35);
    tibGroup.add(webMesh);

    legGroup.add(tibGroup);
    group.add(legGroup);

    if (side > 0) {
      partsMeshMap.set('frog_tibiofibula', tibGroup);
    }
  });

  // Forelimbs (pectoral girdle support)
  [-1, 1].forEach((side) => {
    const armGroup = new THREE.Group();
    armGroup.position.set(side * 0.6, 0.45, 0.1);

    const armGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.55, 10);
    armGeo.rotateZ(side * 0.5);
    const armMesh = new THREE.Mesh(armGeo, boneMat);
    armGroup.add(armMesh);

    // Forearm & 4 Digits
    const forearmGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 10);
    forearmGeo.rotateX(0.7);
    const forearmMesh = new THREE.Mesh(forearmGeo, boneMat);
    forearmMesh.position.set(side * 0.15, -0.3, 0.15);
    armGroup.add(forearmMesh);

    group.add(armGroup);
  });
}

/**
 * Creates an anatomical 3D model of a Dog (Canine Quadruped)
 * Features:
 * - Quadruped stance with vertebral column, 13 rib pairs, pelvis, and wagging tail
 * - Elongated skull with sagittal crest, ethmoturbinate scent labyrinth, and scissor carnassial teeth
 * - Internal thoracic & abdominal anatomy: athletic 4-chambered heart, panting lungs with diaphragm,
 *   highly acidic carnivore stomach, and muscular erythrocyte-storing spleen
 * - Digitigrade limbs with shock-absorbing paw pads
 */
export function buildDogAnatomy(
  group: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  const skinOpacity = isXRay ? 0.15 : isCutaway ? 0.35 : 0.85;

  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: 0xf97316,
    roughness: 0.4,
    metalness: 0.1,
    transmission: isCutaway || isXRay ? 0.75 : 0.2,
    opacity: skinOpacity,
    transparent: true
  });

  const boneMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.4 });

  // 1. Torso & Flank
  const torsoGeo = new THREE.CylinderGeometry(0.65, 0.55, 2.2, 20);
  torsoGeo.rotateX(Math.PI / 2);
  const torsoMesh = new THREE.Mesh(torsoGeo, bodyMat);
  torsoMesh.position.set(0, 0.1, 0);
  group.add(torsoMesh);

  // 2. Rib Cage (13 pairs of thoracic ribs)
  const ribCageGroup = new THREE.Group();
  ribCageGroup.position.set(0, 0.15, 0.45);
  for (let i = -5; i <= 5; i++) {
    const ribGeo = new THREE.TorusGeometry(0.55 - Math.abs(i) * 0.02, 0.035, 8, 20, Math.PI);
    ribGeo.rotateX(-Math.PI / 2);
    const ribMesh = new THREE.Mesh(ribGeo, boneMat);
    ribMesh.position.set(0, 0, i * 0.12);
    ribCageGroup.add(ribMesh);
  }
  group.add(ribCageGroup);

  // 3. Canine Skull & Snout with Sagittal Crest
  const skullGroup = new THREE.Group();
  skullGroup.position.set(0, 0.65, 1.25);
  skullGroup.name = 'dog_canine_skull_teeth';

  // Cranium (braincase)
  const brainCaseGeo = new THREE.SphereGeometry(0.48, 16, 16);
  brainCaseGeo.scale(1.0, 0.9, 1.2);
  const brainCaseMesh = new THREE.Mesh(brainCaseGeo, boneMat);
  skullGroup.add(brainCaseMesh);

  // Sagittal Crest (ridge for temporal jaw muscle attachment)
  const crestGeo = new THREE.BoxGeometry(0.06, 0.16, 0.7);
  const crestMesh = new THREE.Mesh(crestGeo, boneMat);
  crestMesh.position.set(0, 0.42, -0.1);
  skullGroup.add(crestMesh);

  // Elongated Snout / Muzzle
  const muzzleGeo = new THREE.BoxGeometry(0.4, 0.35, 0.75);
  const muzzleMesh = new THREE.Mesh(muzzleGeo, boneMat);
  muzzleMesh.position.set(0, -0.1, 0.6);
  skullGroup.add(muzzleMesh);

  // Nose Leather (rhinarium)
  const noseMat = new THREE.MeshStandardMaterial({ color: 0x171717, roughness: 0.3 });
  const noseMesh = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), noseMat);
  noseMesh.scale.set(1.4, 0.9, 0.8);
  noseMesh.position.set(0, 0.02, 0.98);
  skullGroup.add(noseMesh);

  // Erect/semi-pricked Canine Ears
  [-0.32, 0.32].forEach((xSide) => {
    const earGeo = new THREE.ConeGeometry(0.2, 0.55, 8);
    earGeo.scale(0.8, 1.0, 0.3);
    const earMesh = new THREE.Mesh(earGeo, bodyMat);
    earMesh.position.set(xSide, 0.55, -0.1);
    earMesh.rotation.z = xSide > 0 ? -0.35 : 0.35;
    skullGroup.add(earMesh);
  });

  // Shearing Carnassial Teeth (upper P4 and lower M1)
  const toothMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1 });
  const carnassialGroup = new THREE.Group();
  carnassialGroup.position.set(0, -0.18, 0.55);
  carnassialGroup.name = 'dog_carnassial_teeth';

  [-0.18, 0.18].forEach((xSide) => {
    // Upper P4
    const p4Geo = new THREE.ConeGeometry(0.07, 0.22, 6);
    p4Geo.rotateX(Math.PI);
    const p4Mesh = new THREE.Mesh(p4Geo, toothMat);
    p4Mesh.position.set(xSide, 0.05, 0);

    // Lower M1
    const m1Geo = new THREE.ConeGeometry(0.06, 0.2, 6);
    const m1Mesh = new THREE.Mesh(m1Geo, toothMat);
    m1Mesh.position.set(xSide * 0.95, -0.08, 0.04);

    carnassialGroup.add(p4Mesh, m1Mesh);
  });
  skullGroup.add(carnassialGroup);
  group.add(skullGroup);
  partsMeshMap.set('dog_canine_skull_teeth', skullGroup);
  partsMeshMap.set('dog_carnassial_teeth', carnassialGroup);

  // 4. Ethmoturbinate Olfactory Scent Labyrinth
  const olfactoryGroup = new THREE.Group();
  olfactoryGroup.position.set(0, 0.6, 1.6);
  olfactoryGroup.name = 'dog_olfactory_turbinates';

  const scrollMat = new THREE.MeshStandardMaterial({
    color: 0xa855f7,
    roughness: 0.3,
    wireframe: true
  });
  for (let i = 0; i < 5; i++) {
    const scrollGeo = new THREE.TorusGeometry(0.12 - i * 0.018, 0.02, 6, 16);
    scrollGeo.rotateX(Math.PI / 2);
    const scrollMesh = new THREE.Mesh(scrollGeo, scrollMat);
    scrollMesh.position.set(0, 0, i * 0.08 - 0.2);
    olfactoryGroup.add(scrollMesh);
  }
  group.add(olfactoryGroup);
  partsMeshMap.set('dog_olfactory_turbinates', olfactoryGroup);

  // 5. 4-Chambered Canine Heart & Coronary Vessels
  const heartGroup = new THREE.Group();
  heartGroup.position.set(0, 0.05, 0.6);
  heartGroup.name = 'dog_4chamber_heart';

  const heartMat = new THREE.MeshStandardMaterial({
    color: 0xdc2626,
    roughness: 0.3,
    emissive: 0x991b1b,
    emissiveIntensity: 0.25
  });
  const heartGeo = new THREE.SphereGeometry(0.32, 16, 16);
  heartGeo.scale(0.85, 1.2, 0.9);
  const heartMesh = new THREE.Mesh(heartGeo, heartMat);
  heartGroup.add(heartMesh);

  // Aortic Arch & Pulmonary Trunk
  const aortaCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.3, 0),
    new THREE.Vector3(0, 0.45, -0.1),
    new THREE.Vector3(-0.1, 0.4, -0.25),
    new THREE.Vector3(-0.05, 0.15, -0.45)
  ]);
  const aortaMesh = new THREE.Mesh(
    new THREE.TubeGeometry(aortaCurve, 16, 0.06, 10, false),
    new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3 })
  );
  heartGroup.add(aortaMesh);
  group.add(heartGroup);
  partsMeshMap.set('dog_4chamber_heart', heartGroup);

  // 6. Lungs & Panting Thermoregulation Apparatus
  const lungsGroup = new THREE.Group();
  lungsGroup.position.set(0, 0.15, 0.35);
  lungsGroup.name = 'dog_panting_lungs';

  const lungMat = new THREE.MeshPhysicalMaterial({
    color: 0x0ea5e9,
    roughness: 0.3,
    transmission: 0.45,
    opacity: 0.8,
    transparent: true
  });

  // 4 Right Lobes & 2 Left Lobes representation
  [-0.32, 0.32].forEach((xSide) => {
    const lobeGeo = new THREE.SphereGeometry(0.38, 16, 16);
    lobeGeo.scale(0.7, 1.1, 1.3);
    const lobeMesh = new THREE.Mesh(lobeGeo, lungMat);
    lobeMesh.position.set(xSide, 0.05, 0);
    lungsGroup.add(lobeMesh);
  });
  group.add(lungsGroup);
  partsMeshMap.set('dog_panting_lungs', lungsGroup);

  // 7. Muscular Splenic Blood Reservoir
  const spleenMat = new THREE.MeshStandardMaterial({
    color: 0x831843,
    roughness: 0.4,
    emissive: 0x4a044e,
    emissiveIntensity: 0.2
  });
  const spleenGeo = new THREE.CylinderGeometry(0.12, 0.18, 0.95, 14);
  spleenGeo.rotateZ(0.65);
  spleenGeo.scale(0.7, 1.0, 1.3);
  const spleenMesh = new THREE.Mesh(spleenGeo, spleenMat);
  spleenMesh.position.set(-0.45, -0.1, -0.15);
  spleenMesh.name = 'dog_spleen_reservoir';
  group.add(spleenMesh);
  partsMeshMap.set('dog_spleen_reservoir', spleenMesh);

  // Highly Acidic Carnivore Stomach
  const stomachMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.5 });
  const stomachGeo = new THREE.SphereGeometry(0.4, 14, 14);
  stomachGeo.scale(1.2, 0.9, 0.9);
  const stomachMesh = new THREE.Mesh(stomachGeo, stomachMat);
  stomachMesh.position.set(0.1, -0.05, 0.05);
  group.add(stomachMesh);

  // 8. Digitigrade Limbs with Shock-Absorbing Paw Pads
  const padMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.8 });

  // 4 Legs: Front Forelimbs & Rear Hindlimbs
  const legCoords = [
    { x: -0.42, z: 0.8, isFront: true },
    { x: 0.42, z: 0.8, isFront: true },
    { x: -0.38, z: -0.75, isFront: false },
    { x: 0.38, z: -0.75, isFront: false }
  ];

  legCoords.forEach((coord) => {
    const legGroup = new THREE.Group();
    legGroup.position.set(coord.x, 0, coord.z);

    // Upper Leg (femur or humerus)
    const upperGeo = new THREE.CylinderGeometry(0.1, 0.09, 0.85, 10);
    const upperMesh = new THREE.Mesh(upperGeo, boneMat);
    upperMesh.position.set(0, -0.35, 0);
    legGroup.add(upperMesh);

    // Lower Leg (tibia or radius/ulna)
    const lowerGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.8, 10);
    const lowerMesh = new THREE.Mesh(lowerGeo, boneMat);
    lowerMesh.position.set(0, -0.85, coord.isFront ? 0.05 : -0.05);
    legGroup.add(lowerMesh);

    // Digitigrade Metapodial & Paw Pads (touching ground)
    const pawGroup = new THREE.Group();
    pawGroup.position.set(0, -1.3, 0.1);

    const pawBase = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.12, 0.32), padMat);
    pawGroup.add(pawBase);

    // 4 Digital pads
    for (let d = -1.5; d <= 1.5; d += 1) {
      const dPad = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), padMat);
      dPad.position.set(d * 0.07, -0.05, 0.15);
      pawGroup.add(dPad);
    }
    legGroup.add(pawGroup);

    group.add(legGroup);
  });

  // Flexible Canine Tail
  const tailCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.35, -1.0),
    new THREE.Vector3(0, 0.55, -1.45),
    new THREE.Vector3(0.1, 0.75, -1.85),
    new THREE.Vector3(0.15, 0.9, -2.15)
  ]);
  const tailMesh = new THREE.Mesh(
    new THREE.TubeGeometry(tailCurve, 20, 0.08, 10, false),
    bodyMat
  );
  tailMesh.name = 'dog_tail';
  group.add(tailMesh);
}

/**
 * Creates an anatomical 3D model of a Cat (Feline Quadruped)
 * Features:
 * - Sleek agile feline silhouette with arched lumbar spine
 * - 7 flexible lumbar vertebrae enabling mid-air righting reflex
 * - Free-floating clavicle embedded in muscle
 * - Retractile claws inside dorsal elastic ligament sheaths
 * - Tapetum lucidum reflective eye layer for night vision
 * - Compact feline heart and laryngeal purr box
 */
export function buildCatAnatomy(
  group: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  const skinOpacity = isXRay ? 0.15 : isCutaway ? 0.35 : 0.85;

  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: 0xa855f7,
    roughness: 0.35,
    metalness: 0.1,
    transmission: isCutaway || isXRay ? 0.75 : 0.2,
    opacity: skinOpacity,
    transparent: true
  });

  const boneMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });

  // 1. Sleek Feline Body & Arched Torso
  const torsoCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.2, 0.85),
    new THREE.Vector3(0, 0.35, 0.3),
    new THREE.Vector3(0, 0.45, -0.3),
    new THREE.Vector3(0, 0.25, -0.9)
  ]);
  const torsoGeo = new THREE.TubeGeometry(torsoCurve, 24, 0.48, 16, false);
  const torsoMesh = new THREE.Mesh(torsoGeo, bodyMat);
  group.add(torsoMesh);

  // 2. Ultra-Flexible Spine (7 Lumbar Vertebrae & Righting Reflex)
  const spineGroup = new THREE.Group();
  spineGroup.position.set(0, 0.35, 0);
  spineGroup.name = 'cat_flexible_spine';

  // 7 Lumbar vertebrae along the lumbar arch
  for (let l = 0; l < 7; l++) {
    const lVertGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.12, 10);
    lVertGeo.rotateX(Math.PI / 2);
    const lVertMesh = new THREE.Mesh(lVertGeo, boneMat);
    lVertMesh.position.set(0, 0.12 - Math.pow(l - 3, 2) * 0.015, -0.15 - l * 0.11);
    spineGroup.add(lVertMesh);
  }
  group.add(spineGroup);
  partsMeshMap.set('cat_flexible_spine', spineGroup);

  // 3. Feline Head with Large Tapetum Lucidum Luminous Eyes
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.55, 1.2);

  // Rounded cranial vault
  const skullMesh = new THREE.Mesh(new THREE.SphereGeometry(0.38, 16, 16), boneMat);
  skullMesh.scale.set(1.1, 0.95, 1.0);
  headGroup.add(skullMesh);

  // Muzzle with short jaw (bite force concentrated close to TMJ fulcrum)
  const muzzleMesh = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.2, 0.32), boneMat);
  muzzleMesh.position.set(0, -0.12, 0.35);
  headGroup.add(muzzleMesh);

  // Pointed Triangular Feline Ears
  [-0.26, 0.26].forEach((xSide) => {
    const earGeo = new THREE.ConeGeometry(0.18, 0.42, 6);
    earGeo.scale(0.8, 1.0, 0.3);
    const earMesh = new THREE.Mesh(earGeo, bodyMat);
    earMesh.position.set(xSide, 0.42, -0.05);
    earMesh.rotation.z = xSide > 0 ? -0.4 : 0.4;
    headGroup.add(earMesh);
  });

  // Large Eyes with Tapetum Lucidum (Greenish-gold retro-reflector)
  const tapetumGroup = new THREE.Group();
  tapetumGroup.position.set(0, 0.08, 0.3);
  tapetumGroup.name = 'cat_tapetum_lucidum';

  [-0.18, 0.18].forEach((xSide) => {
    // Tapetum Lucidum retro-reflector (behind pupil)
    const tapetumMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      roughness: 0.1,
      metalness: 0.8,
      emissive: 0x10b981,
      emissiveIntensity: 0.65
    });
    const eyeBall = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), tapetumMat);
    eyeBall.position.set(xSide, 0, 0);

    // Vertical slit pupil (specialized for wide range of ambient light)
    const slitMat = new THREE.MeshBasicMaterial({ color: 0x050505 });
    const slit = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.16, 0.05), slitMat);
    slit.position.set(xSide, 0, 0.12);

    tapetumGroup.add(eyeBall, slit);
  });
  headGroup.add(tapetumGroup);
  group.add(headGroup);
  partsMeshMap.set('cat_tapetum_lucidum', tapetumGroup);

  // Tactile Vibrissae (whiskers)
  const whiskerMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  [-1, 1].forEach((side) => {
    for (let w = 0; w < 4; w++) {
      const whiskerGeo = new THREE.CylinderGeometry(0.008, 0.004, 0.45, 6);
      whiskerGeo.rotateZ((Math.PI / 2) * side);
      whiskerGeo.rotateY(w * 0.1 - 0.15);
      const whiskerMesh = new THREE.Mesh(whiskerGeo, whiskerMat);
      whiskerMesh.position.set(side * 0.32, -0.08 + w * 0.04, 0.38);
      headGroup.add(whiskerMesh);
    }
  });

  // 4. Retractile Claws & Elastic Ligaments
  const clawGroup = new THREE.Group();
  clawGroup.position.set(0.35, -0.9, 0.75);
  clawGroup.name = 'cat_retractile_claws';

  const clawMat = new THREE.MeshStandardMaterial({ color: 0xf3f4f6, roughness: 0.2 });
  for (let c = -1.5; c <= 1.5; c++) {
    // Curved claw hook
    const clawCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(c * 0.06, 0.05, 0),
      new THREE.Vector3(c * 0.06, 0.02, 0.08),
      new THREE.Vector3(c * 0.06, -0.08, 0.12)
    ]);
    const clawMesh = new THREE.Mesh(
      new THREE.TubeGeometry(clawCurve, 8, 0.02, 6, false),
      clawMat
    );
    clawGroup.add(clawMesh);
  }
  group.add(clawGroup);
  partsMeshMap.set('cat_retractile_claws', clawGroup);

  // 5. Internal Viscera: Compact Heart, Laryngeal Purr Chamber, Carnivore Gut
  const heartMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    roughness: 0.3,
    emissive: 0xb91c1c,
    emissiveIntensity: 0.3
  });
  const catHeart = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 14), heartMat);
  catHeart.scale.set(0.8, 1.2, 0.85);
  catHeart.position.set(0, 0.15, 0.45);
  group.add(catHeart);

  // Short High-Efficiency Carnivore Intestinal Canal
  const gutMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.5 });
  const gutCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.1, 0.15),
    new THREE.Vector3(-0.15, 0, 0),
    new THREE.Vector3(0.12, -0.05, -0.2),
    new THREE.Vector3(0, 0.1, -0.5)
  ]);
  const gutMesh = new THREE.Mesh(new THREE.TubeGeometry(gutCurve, 16, 0.08, 8, false), gutMat);
  group.add(gutMesh);

  // 6. Graceful Limbs & Slender Paws
  const legCoords = [
    { x: -0.32, z: 0.7 },
    { x: 0.32, z: 0.7 },
    { x: -0.28, z: -0.8 },
    { x: 0.28, z: -0.8 }
  ];
  legCoords.forEach((coord) => {
    const legGeo = new THREE.CylinderGeometry(0.065, 0.055, 1.3, 10);
    const legMesh = new THREE.Mesh(legGeo, boneMat);
    legMesh.position.set(coord.x, -0.4, coord.z);
    group.add(legMesh);
  });

  // Long Balance Tail
  const tailCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.25, -1.0),
    new THREE.Vector3(0, 0.45, -1.5),
    new THREE.Vector3(0.1, 0.65, -1.9),
    new THREE.Vector3(0.2, 0.9, -2.15)
  ]);
  const tailMesh = new THREE.Mesh(
    new THREE.TubeGeometry(tailCurve, 20, 0.05, 8, false),
    bodyMat
  );
  group.add(tailMesh);
}

/**
 * Creates an anatomical 3D model of a Bird (Avian Flight Anatomy)
 * Features:
 * - Aerodynamic flight posture with pneumatic wing skeleton and keeled sternum
 * - 9 Air Sacs (unidirectional continuous respiratory engine) with glowing pulmonary connections
 * - Carina of sternum (anchoring pectoralis and supracoracoideus flight muscles)
 * - Elastic Furcula (wishbone)
 * - Syrinx vocal organ at tracheal bifurcation
 * - 4-chambered avian heart with distinct RIGHT AORTIC ARCH
 * - Crop, proventriculus, and muscular grit-filled gizzard
 * - Pygostyle with flight tail retrices
 */
export function buildBirdAnatomy(
  group: THREE.Group,
  partsMeshMap: Map<string, THREE.Object3D>,
  isCutaway: boolean,
  isXRay: boolean
) {
  const skinOpacity = isXRay ? 0.15 : isCutaway ? 0.35 : 0.85;

  const featherMat = new THREE.MeshPhysicalMaterial({
    color: 0x38bdf8,
    roughness: 0.5,
    metalness: 0.1,
    transmission: isCutaway || isXRay ? 0.75 : 0.2,
    opacity: skinOpacity,
    transparent: true
  });

  const boneMat = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.35,
    metalness: 0.1
  });

  // 1. Aerodynamic Fusiform Body
  const bodyGeo = new THREE.SphereGeometry(0.7, 20, 20);
  bodyGeo.scale(0.85, 1.2, 1.4);
  const bodyMesh = new THREE.Mesh(bodyGeo, featherMat);
  bodyMesh.position.set(0, 0, 0);
  group.add(bodyMesh);

  // 2. Keeled Sternum (Carina of Sternum - massive flight muscle keel)
  const keelGroup = new THREE.Group();
  keelGroup.position.set(0, -0.2, 0.35);
  keelGroup.name = 'bird_keeled_sternum';

  const keelGeo = new THREE.BoxGeometry(0.08, 0.95, 0.9);
  keelGeo.scale(1.0, 0.8, 1.0);
  const keelMesh = new THREE.Mesh(keelGeo, boneMat);
  keelMesh.position.set(0, -0.25, 0);
  keelGroup.add(keelMesh);

  // Pectoralis flight muscle outline
  const pectoralisMat = new THREE.MeshStandardMaterial({
    color: 0xb91c1c,
    roughness: 0.4,
    transparent: true,
    opacity: isCutaway ? 0.45 : 0.85
  });
  [-0.24, 0.24].forEach((xSide) => {
    const breastMusGeo = new THREE.SphereGeometry(0.35, 12, 12);
    breastMusGeo.scale(0.75, 1.2, 1.1);
    const breastMusMesh = new THREE.Mesh(breastMusGeo, pectoralisMat);
    breastMusMesh.position.set(xSide, -0.15, 0.05);
    keelGroup.add(breastMusMesh);
  });
  group.add(keelGroup);
  partsMeshMap.set('bird_keeled_sternum', keelGroup);

  // 3. Elastic Furcula (Wishbone - fused clavicles)
  const furculaMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3 });
  const furculaCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.25, 0.35, 0.5),
    new THREE.Vector3(0, 0.1, 0.65),
    new THREE.Vector3(0.25, 0.35, 0.5)
  ]);
  const furculaMesh = new THREE.Mesh(
    new THREE.TubeGeometry(furculaCurve, 16, 0.035, 8, false),
    furculaMat
  );
  group.add(furculaMesh);

  // 4. Nine Air Sacs System (Glowing pulmonary dynamic engine)
  const airSacGroup = new THREE.Group();
  airSacGroup.position.set(0, 0.1, 0.05);
  airSacGroup.name = 'bird_9_air_sacs';

  const sacMat = new THREE.MeshPhysicalMaterial({
    color: 0x06b6d4,
    roughness: 0.1,
    transmission: 0.8,
    opacity: 0.75,
    transparent: true,
    emissive: 0x0891b2,
    emissiveIntensity: 0.45
  });

  // 1 Clavicular sac (anterior)
  const clavicularSac = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 14), sacMat);
  clavicularSac.position.set(0, 0.35, 0.45);
  airSacGroup.add(clavicularSac);

  // 2 Cervical sacs (in neck)
  [-0.15, 0.15].forEach((xSide) => {
    const cervSac = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), sacMat);
    cervSac.position.set(xSide, 0.55, 0.35);
    airSacGroup.add(cervSac);
  });

  // 2 Cranial Thoracic sacs
  [-0.32, 0.32].forEach((xSide) => {
    const cranSac = new THREE.Mesh(new THREE.SphereGeometry(0.25, 14, 14), sacMat);
    cranSac.position.set(xSide, 0.1, 0.3);
    airSacGroup.add(cranSac);
  });

  // 2 Caudal Thoracic sacs
  [-0.34, 0.34].forEach((xSide) => {
    const caudSac = new THREE.Mesh(new THREE.SphereGeometry(0.28, 14, 14), sacMat);
    caudSac.position.set(xSide, -0.1, -0.05);
    airSacGroup.add(caudSac);
  });

  // 2 Abdominal sacs (largest posterior sacs)
  [-0.3, 0.3].forEach((xSide) => {
    const abdSac = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 16), sacMat);
    abdSac.scale.set(0.8, 0.8, 1.25);
    abdSac.position.set(xSide, -0.2, -0.45);
    airSacGroup.add(abdSac);
  });

  // Compact rigid parabronchial lungs (embedded against ribs)
  const lungMat = new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.4 });
  [-0.22, 0.22].forEach((xSide) => {
    const pLung = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.4, 0.5), lungMat);
    pLung.position.set(xSide, 0.2, 0);
    airSacGroup.add(pLung);
  });

  group.add(airSacGroup);
  partsMeshMap.set('bird_9_air_sacs', airSacGroup);

  // 5. 4-Chambered Avian Heart with RIGHT AORTIC ARCH
  const heartGroup = new THREE.Group();
  heartGroup.position.set(0, 0.05, 0.32);
  heartGroup.name = 'bird_right_aortic_arch';

  const heartMat = new THREE.MeshStandardMaterial({
    color: 0xef4444,
    roughness: 0.3,
    emissive: 0xdc2626,
    emissiveIntensity: 0.3
  });
  const birdHeartMesh = new THREE.Mesh(new THREE.SphereGeometry(0.25, 14, 14), heartMat);
  birdHeartMesh.scale.set(0.8, 1.3, 0.8);
  heartGroup.add(birdHeartMesh);

  // RIGHT AORTIC ARCH (curves distinctly over the RIGHT bronchus)
  const rightArchCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.25, 0),
    new THREE.Vector3(0.08, 0.38, -0.05),
    new THREE.Vector3(0.18, 0.32, -0.15),
    new THREE.Vector3(0.12, 0.1, -0.3)
  ]);
  const rightArchMesh = new THREE.Mesh(
    new THREE.TubeGeometry(rightArchCurve, 16, 0.05, 10, false),
    new THREE.MeshStandardMaterial({ color: 0xf87171, roughness: 0.3 })
  );
  heartGroup.add(rightArchMesh);
  group.add(heartGroup);
  partsMeshMap.set('bird_right_aortic_arch', heartGroup);

  // 6. Crop, Proventriculus & Muscular Grit-Filled Gizzard
  const gutGroup = new THREE.Group();
  gutGroup.position.set(0, -0.15, 0.2);
  gutGroup.name = 'bird_crop_gizzard';

  // Crop (esophageal food storage pouch in lower neck)
  const cropMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.4 });
  const cropMesh = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), cropMat);
  cropMesh.position.set(0.12, 0.45, 0.35);
  gutGroup.add(cropMesh);

  // Gizzard (Ventriculus muscularis - thick muscular grinding chamber)
  const gizzardMat = new THREE.MeshStandardMaterial({ color: 0x7c2d12, roughness: 0.3 });
  const gizzardGeo = new THREE.SphereGeometry(0.28, 16, 16);
  gizzardGeo.scale(1.2, 0.9, 0.9);
  const gizzardMesh = new THREE.Mesh(gizzardGeo, gizzardMat);
  gizzardMesh.position.set(-0.1, -0.15, -0.1);
  gutGroup.add(gizzardMesh);

  group.add(gutGroup);
  partsMeshMap.set('bird_crop_gizzard', gutGroup);

  // 7. Pneumatic Wings & Hollow Wing Bones
  const wingMat = new THREE.MeshStandardMaterial({
    color: 0x0284c7,
    roughness: 0.6,
    side: THREE.DoubleSide
  });

  const wingsGroup = new THREE.Group();
  wingsGroup.position.set(0, 0.35, 0.15);
  wingsGroup.name = 'bird_pneumatic_wing_bones';

  [-1, 1].forEach((side) => {
    const singleWing = new THREE.Group();
    singleWing.position.set(side * 0.45, 0, 0);

    // Humerus (pneumatic bone filled with air sac diverticula)
    const humerusGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.75, 10);
    humerusGeo.rotateZ(side * 0.85);
    const humerusMesh = new THREE.Mesh(humerusGeo, boneMat);
    humerusMesh.position.set(side * 0.3, 0.1, -0.1);
    singleWing.add(humerusMesh);

    // Radius & Ulna
    const forearmGeo = new THREE.CylinderGeometry(0.045, 0.04, 0.85, 10);
    forearmGeo.rotateZ(side * -0.5);
    const forearmMesh = new THREE.Mesh(forearmGeo, boneMat);
    forearmMesh.position.set(side * 0.85, 0.25, -0.3);
    singleWing.add(forearmMesh);

    // Aerodynamic Wing Flight Contour
    const featherFanGeo = new THREE.ConeGeometry(0.85, 1.6, 6);
    featherFanGeo.scale(1.3, 0.08, 0.8);
    featherFanGeo.rotateZ(side * -0.8);
    featherFanGeo.rotateX(0.2);
    const featherFanMesh = new THREE.Mesh(featherFanGeo, wingMat);
    featherFanMesh.position.set(side * 1.25, 0.1, -0.45);
    singleWing.add(featherFanMesh);

    wingsGroup.add(singleWing);
  });
  group.add(wingsGroup);
  partsMeshMap.set('bird_pneumatic_wing_bones', wingsGroup);

  // 8. Head with Keratin Bill / Beak and Syrinx in Trachea
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.85, 0.65);

  const birdSkullMesh = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 16), boneMat);
  birdSkullMesh.scale.set(0.85, 0.9, 1.1);
  headGroup.add(birdSkullMesh);

  // Keratin Bill / Beak
  const beakMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.2 });
  const beakGeo = new THREE.ConeGeometry(0.12, 0.45, 12);
  beakGeo.rotateX(Math.PI / 2);
  const beakMesh = new THREE.Mesh(beakGeo, beakMat);
  beakMesh.position.set(0, -0.05, 0.38);
  headGroup.add(beakMesh);

  // Large Avian Eyes with Sclerotic Rings
  [-0.18, 0.18].forEach((xSide) => {
    const eyeMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.09, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.1 })
    );
    eyeMesh.position.set(xSide, 0.08, 0.12);
    headGroup.add(eyeMesh);
  });

  group.add(headGroup);

  // Syrinx Vocal Organ (at tracheal bifurcation)
  const syrinxMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.3 });
  const syrinxGeo = new THREE.CylinderGeometry(0.07, 0.09, 0.16, 12);
  const syrinxMesh = new THREE.Mesh(syrinxGeo, syrinxMat);
  syrinxMesh.position.set(0, 0.55, 0.45);
  group.add(syrinxMesh);

  // Tail Retrices Fan (anchored to Pygostyle)
  const tailGeo = new THREE.ConeGeometry(0.5, 1.1, 8);
  tailGeo.scale(1.2, 0.08, 0.9);
  tailGeo.rotateX(-0.6);
  const tailMesh = new THREE.Mesh(tailGeo, featherMat);
  tailMesh.position.set(0, 0.1, -1.25);
  group.add(tailMesh);
}
