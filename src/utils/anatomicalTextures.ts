import * as THREE from 'three';

/**
 * Procedural PBR Texture Generators for Realistic Anatomical Visualizations.
 * Generates realistic micro-bump maps, color maps, and organic tissue patterns via HTML5 Canvas.
 */

// Cache textures to avoid recreating canvases unnecessarily
const textureCache = new Map<string, THREE.CanvasTexture>();

function getOrCreateTexture(key: string, drawFn: (ctx: CanvasRenderingContext2D, width: number, height: number) => void, width = 512, height = 512): THREE.CanvasTexture {
  if (textureCache.has(key)) {
    return textureCache.get(key)!;
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    const emptyTexture = new THREE.CanvasTexture(canvas);
    return emptyTexture;
  }

  drawFn(ctx, width, height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  textureCache.set(key, texture);
  return texture;
}

/**
 * Striated Myocardial Tissue Texture
 * Simulates cardiac muscle fiber direction, branching bundles, and fine micro-capillary perfusion.
 */
export function getMyocardiumTexture(): { map: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } {
  const map = getOrCreateTexture('myocardium_diffuse', (ctx, w, h) => {
    // Base deep crimson/myocardial red
    ctx.fillStyle = '#831818';
    ctx.fillRect(0, 0, w, h);

    // Striated muscle fiber bundles
    for (let y = 0; y < h; y += 2) {
      const alpha = 0.15 + Math.sin(y * 0.1) * 0.08 + Math.random() * 0.1;
      ctx.fillStyle = y % 4 === 0 ? `rgba(185, 28, 28, ${alpha})` : `rgba(127, 29, 29, ${alpha})`;
      ctx.fillRect(0, y, w, 2);
    }

    // Interwoven fibrous diagonal bands
    ctx.strokeStyle = 'rgba(153, 27, 27, 0.25)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 40; i++) {
      ctx.beginPath();
      const startX = Math.random() * w;
      ctx.moveTo(startX, 0);
      ctx.bezierCurveTo(startX + 30, h * 0.33, startX - 30, h * 0.66, startX + (Math.random() - 0.5) * 60, h);
      ctx.stroke();
    }

    // Fine branching micro-capillaries
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 25; i++) {
      let x = Math.random() * w;
      let y = Math.random() * h;
      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let step = 0; step < 5; step++) {
        x += (Math.random() - 0.5) * 40;
        y += (Math.random() - 0.5) * 40;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
  });

  const bumpMap = getOrCreateTexture('myocardium_bump', (ctx, w, h) => {
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, w, h);

    // High frequency muscle striation ridges
    for (let y = 0; y < h; y += 3) {
      const val = Math.floor(128 + Math.sin(y * 0.3) * 60 + (Math.random() - 0.5) * 30);
      ctx.fillStyle = `rgb(${val}, ${val}, ${val})`;
      ctx.fillRect(0, y, w, 3);
    }
  });

  return { map, bumpMap };
}

/**
 * Spongy Pulmonary Alveolar Tissue Texture
 * Simulates the micro-porous, spongy architecture of lung parenchyma and subtle subpleural anthracotic mottling.
 */
export function getLungTissueTexture(): { map: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } {
  const map = getOrCreateTexture('lung_diffuse', (ctx, w, h) => {
    // Soft healthy lung pink / salmon base
    ctx.fillStyle = '#f472b6';
    ctx.fillRect(0, 0, w, h);

    // Micro-alveolar porous speckling
    for (let i = 0; i < 4000; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = 1 + Math.random() * 2.5;
      ctx.fillStyle = Math.random() > 0.4 ? 'rgba(244, 114, 182, 0.4)' : 'rgba(251, 113, 133, 0.5)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Subtle lobular boundary lines
    ctx.strokeStyle = 'rgba(225, 29, 72, 0.2)';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      let cx = Math.random() * w;
      let cy = Math.random() * h;
      ctx.moveTo(cx, cy);
      for (let s = 0; s < 6; s++) {
        cx += (Math.random() - 0.5) * 60;
        cy += (Math.random() - 0.5) * 60;
        ctx.lineTo(cx, cy);
      }
      ctx.stroke();
    }
  });

  const bumpMap = getOrCreateTexture('lung_bump', (ctx, w, h) => {
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, w, h);

    // Spongy porous indentations
    for (let i = 0; i < 3500; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = 1 + Math.random() * 2;
      ctx.fillStyle = Math.random() > 0.5 ? '#555555' : '#aaaaaa';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  return { map, bumpMap };
}

/**
 * Cerebral Cortex Gyri & Sulci Texture
 * Simulates brain convolutions, micro-grooves, and delicate pial vascular network.
 */
export function getBrainTissueTexture(): { map: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } {
  const map = getOrCreateTexture('brain_diffuse', (ctx, w, h) => {
    // Elegant cerebral cortex mauve/pinkish gray
    ctx.fillStyle = '#c084fc';
    ctx.fillRect(0, 0, w, h);

    // Convolutive shading
    for (let i = 0; i < 60; i++) {
      ctx.strokeStyle = 'rgba(126, 34, 206, 0.3)';
      ctx.lineWidth = 4 + Math.random() * 6;
      ctx.beginPath();
      let x = Math.random() * w;
      let y = Math.random() * h;
      ctx.moveTo(x, y);
      for (let s = 0; s < 4; s++) {
        x += (Math.random() - 0.5) * 80;
        y += (Math.random() - 0.5) * 80;
        ctx.quadraticCurveTo(x + 20, y - 20, x, y);
      }
      ctx.stroke();
    }

    // Pial surface branching vessels (arterioles & venules)
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      let vx = Math.random() * w;
      let vy = Math.random() * h;
      ctx.moveTo(vx, vy);
      for (let step = 0; step < 5; step++) {
        vx += (Math.random() - 0.4) * 45;
        vy += (Math.random() - 0.4) * 45;
        ctx.lineTo(vx, vy);
      }
      ctx.stroke();
    }
  });

  const bumpMap = getOrCreateTexture('brain_bump', (ctx, w, h) => {
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, w, h);

    // Deep sulcal grooves in grayscale
    for (let i = 0; i < 70; i++) {
      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 6 + Math.random() * 8;
      ctx.beginPath();
      let x = Math.random() * w;
      let y = Math.random() * h;
      ctx.moveTo(x, y);
      for (let s = 0; s < 4; s++) {
        x += (Math.random() - 0.5) * 90;
        y += (Math.random() - 0.5) * 90;
        ctx.quadraticCurveTo(x + 25, y - 25, x, y);
      }
      ctx.stroke();
    }
  });

  return { map, bumpMap };
}

/**
 * Osseous / Cortical Bone Texture
 * Simulates ivory osteon lamellae, nutrient micro-canals, and smooth dense mineral structure.
 */
export function getBoneTexture(): { map: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } {
  const map = getOrCreateTexture('bone_diffuse', (ctx, w, h) => {
    // Warm natural ivory/bone base
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(0, 0, w, h);

    // Subtle longitudinal grain
    for (let y = 0; y < h; y += 4) {
      const alpha = 0.04 + Math.random() * 0.05;
      ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;
      ctx.fillRect(0, y, w, 2);
    }

    // Micro-porosity & nutrient vascular foramina pits
    ctx.fillStyle = 'rgba(100, 116, 139, 0.2)';
    for (let i = 0; i < 800; i++) {
      const bx = Math.random() * w;
      const by = Math.random() * h;
      ctx.fillRect(bx, by, 1, 1);
    }
  });

  const bumpMap = getOrCreateTexture('bone_bump', (ctx, w, h) => {
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, w, h);

    for (let y = 0; y < h; y += 4) {
      const v = Math.floor(125 + (Math.random() - 0.5) * 20);
      ctx.fillStyle = `rgb(${v}, ${v}, ${v})`;
      ctx.fillRect(0, y, w, 2);
    }
  });

  return { map, bumpMap };
}

/**
 * Hepatic / Liver Parenchyma Texture
 * Simulates dense mahogany-burgundy hepatic lobules and glistening peritoneal capsular reflection.
 */
export function getLiverTexture(): { map: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } {
  const map = getOrCreateTexture('liver_diffuse', (ctx, w, h) => {
    // Deep rich hepatic red-brown
    ctx.fillStyle = '#7f1d1d';
    ctx.fillRect(0, 0, w, h);

    // Hexagonal hepatic lobule mottling
    for (let i = 0; i < 2000; i++) {
      const lx = Math.random() * w;
      const ly = Math.random() * h;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(153, 27, 27, 0.3)' : 'rgba(69, 10, 10, 0.3)';
      ctx.beginPath();
      ctx.arc(lx, ly, 1.5 + Math.random() * 2, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  const bumpMap = getOrCreateTexture('liver_bump', (ctx, w, h) => {
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 1500; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      ctx.fillStyle = Math.random() > 0.5 ? '#909090' : '#707070';
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  return { map, bumpMap };
}

/**
 * Renal Cortex & Medulla Texture
 * Simulates renal capsule, radial medullary rays, and smooth parenchymal filtration tone.
 */
export function getKidneyTexture(): { map: THREE.CanvasTexture; bumpMap: THREE.CanvasTexture } {
  const map = getOrCreateTexture('kidney_diffuse', (ctx, w, h) => {
    ctx.fillStyle = '#78350f';
    ctx.fillRect(0, 0, w, h);

    // Fine radial cortical striations
    for (let i = 0; i < 60; i++) {
      ctx.strokeStyle = 'rgba(180, 83, 9, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(Math.random() * w, 0);
      ctx.lineTo(Math.random() * w, h);
      ctx.stroke();
    }
  });

  const bumpMap = getOrCreateTexture('kidney_bump', (ctx, w, h) => {
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 1200; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      ctx.fillStyle = Math.random() > 0.5 ? '#8d8d8d' : '#737373';
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  return { map, bumpMap };
}
