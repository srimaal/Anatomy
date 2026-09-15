import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrganPart, OrganSystemId, Language, EducationLevel } from '../types';
import { 
  RotateCcw, 
  Play, 
  Pause, 
  Eye, 
  Layers, 
  Sparkles, 
  Compass, 
  ZoomIn, 
  ZoomOut,
  Scissors,
  Activity
} from 'lucide-react';
import {
  buildCirculatorySystem,
  buildRespiratorySystem,
  buildNervousSystem,
  buildSkeletalSystem,
  buildDigestiveSystem,
  buildUrinarySystem,
  buildFullBodySystem
} from '../utils/anatomyModelBuilders';

interface ThreeDViewerProps {
  systemId: OrganSystemId;
  parts: OrganPart[];
  selectedPartId: string | null;
  onSelectPart: (partId: string) => void;
  language: Language;
  educationLevel: EducationLevel;
}

export const ThreeDViewer: React.FC<ThreeDViewerProps> = ({
  systemId,
  parts,
  selectedPartId,
  onSelectPart,
  language,
  educationLevel
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Controls & States
  const [isPlaying, setIsPlaying] = useState(true);
  const [isXRay, setIsXRay] = useState(false);
  const [isCutaway, setIsCutaway] = useState(false);
  const [explodedFactor, setExplodedFactor] = useState(0);
  const [showPins, setShowPins] = useState(true);
  const [hoveredPart, setHoveredPart] = useState<OrganPart | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null);
  const [autoRotate, setAutoRotate] = useState(false);
  const [animSpeed, setAnimSpeed] = useState(1);

  // References for Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const organGroupRef = useRef<THREE.Group | null>(null);
  const partsMeshMap = useRef<Map<string, THREE.Object3D>>(new Map());
  const particlesRef = useRef<THREE.Points | null>(null);
  const reqAnimRef = useRef<number | null>(null);
  const clockRef = useRef(new THREE.Clock());

  // Mouse interaction state for manual orbit
  const isDragging = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const cameraAngle = useRef({ theta: 0.25, phi: 1.35, radius: 5.6 });
  const targetLookAt = useRef(new THREE.Vector3(0, 0.35, 0));

  // Raycaster for click & hover
  const raycaster = useRef(new THREE.Raycaster());
  const mouseVec = useRef(new THREE.Vector2(-999, -999));

  // Helper: update camera position from spherical coordinates
  const updateCameraPosition = useCallback(() => {
    if (!cameraRef.current) return;
    const { theta, phi, radius } = cameraAngle.current;
    const x = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi) + targetLookAt.current.y;
    const z = radius * Math.sin(phi) * Math.cos(theta);
    
    cameraRef.current.position.set(x, y, z);
    cameraRef.current.lookAt(targetLookAt.current);
  }, []);

  // Initialize Three.js Scene with Surgical Theatre Lighting & ACES Tone Mapping
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060913); // Deep surgical dark slate
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    cameraRef.current = camera;
    updateCameraPosition();

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Photorealistic ACES Filmic Tone Mapping & Exposure
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Surgical Operating Theatre Lighting
    const hemiLight = new THREE.HemisphereLight(0xe0f2fe, 0x090d16, 0.75);
    scene.add(hemiLight);

    const surgicalKeyLight = new THREE.DirectionalLight(0xffffff, 1.7);
    surgicalKeyLight.position.set(4, 8, 5);
    surgicalKeyLight.castShadow = true;
    surgicalKeyLight.shadow.mapSize.width = 1024;
    surgicalKeyLight.shadow.mapSize.height = 1024;
    surgicalKeyLight.shadow.bias = -0.001;
    scene.add(surgicalKeyLight);

    const surgicalFillLight = new THREE.DirectionalLight(0xf1f5f9, 1.1);
    surgicalFillLight.position.set(-4, 5, 4);
    scene.add(surgicalFillLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.1); // Crisp cool cyan rim light
    rimLight.position.set(-4, -1, -5);
    scene.add(rimLight);

    const backSpecLight = new THREE.DirectionalLight(0xa855f7, 0.65); // Soft violet edge light
    backSpecLight.position.set(2, 5, -6);
    scene.add(backSpecLight);

    // Anatomical Specimen Contact Soft Ground Shadow Disc
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(0,0,0,0.75)');
      grad.addColorStop(0.5, 'rgba(0,0,0,0.3)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(4.5, 4.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.82;
    scene.add(shadowPlane);

    // Subtle Surgical Grid Floor
    const grid = new THREE.GridHelper(10, 20, 0x1e293b, 0x0f172a);
    grid.position.y = -1.8;
    scene.add(grid);

    // Create Main Organ Group
    const organGroup = new THREE.Group();
    scene.add(organGroup);
    organGroupRef.current = organGroup;

    // Handle Resize with ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      if (reqAnimRef.current) cancelAnimationFrame(reqAnimRef.current);
      renderer.dispose();
    };
  }, [updateCameraPosition]);

  // Build System 3D Models with High Anatomical Fidelity
  useEffect(() => {
    if (!sceneRef.current || !organGroupRef.current) return;
    const organGroup = organGroupRef.current;

    // Clear previous models
    while (organGroup.children.length > 0) {
      const obj = organGroup.children[0];
      organGroup.remove(obj);
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    }
    partsMeshMap.current.clear();

    // Build anatomical models using our high-fidelity procedural geometry engines
    if (systemId === 'circulatory') {
      buildCirculatorySystem(organGroup, partsMeshMap.current, isCutaway, isXRay);
    } else if (systemId === 'respiratory') {
      buildRespiratorySystem(organGroup, partsMeshMap.current, isCutaway, isXRay);
    } else if (systemId === 'nervous') {
      buildNervousSystem(organGroup, partsMeshMap.current, isCutaway, isXRay);
    } else if (systemId === 'skeletal') {
      buildSkeletalSystem(organGroup, partsMeshMap.current, isCutaway, isXRay);
    } else if (systemId === 'digestive') {
      buildDigestiveSystem(organGroup, partsMeshMap.current, isCutaway, isXRay);
    } else if (systemId === 'urinary') {
      buildUrinarySystem(organGroup, partsMeshMap.current, isCutaway, isXRay);
    } else if (systemId === 'fullbody') {
      buildFullBodySystem(organGroup, partsMeshMap.current, isCutaway, isXRay);
    }

    // Enable soft contact shadows across all organ components for deep photorealistic depth
    organGroup.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.userData.origPos = child.position.clone();
      }
    });

    // Add ambient microscopic bio-particles (e.g. erythrocytes, leukocytes, neurotransmitter vesicles)
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 3.5;
      positions[i + 1] = (Math.random() - 0.5) * 3.5;
      positions[i + 2] = (Math.random() - 0.5) * 3.5;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: systemId === 'circulatory' ? 0xff4444 : systemId === 'respiratory' ? 0x38bdf8 : systemId === 'fullbody' ? 0x06b6d4 : 0xa855f7,
      size: 0.04,
      transparent: true,
      opacity: 0.65
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    sceneRef.current.add(particles);
    particlesRef.current = particles;

    return () => {
      if (particlesRef.current && sceneRef.current) {
        sceneRef.current.remove(particlesRef.current);
        particlesRef.current.geometry.dispose();
      }
    };
  }, [systemId, isCutaway, isXRay]);

  // Main Render & Animation Loop
  useEffect(() => {
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const delta = clockRef.current.getDelta();
      const elapsed = clockRef.current.getElapsedTime() * animSpeed;

      // Auto rotation
      if (autoRotate && !isDragging.current) {
        cameraAngle.current.theta += 0.006 * animSpeed;
        updateCameraPosition();
      }

      // Organ System Dynamic Realistic Physiology Animations
      if (organGroupRef.current && isPlaying) {
        if (systemId === 'circulatory') {
          // Heartbeat pulse cycle with double systole-diastole contraction wave
          const t = elapsed * 3.8;
          const beatCycle = Math.pow(Math.max(0, Math.sin(t)), 6) * 0.07 + Math.pow(Math.max(0, Math.sin(t - 0.35)), 8) * 0.04;
          const heartScale = 1.0 + beatCycle;
          organGroupRef.current.scale.set(heartScale, 1.0 - beatCycle * 0.5, heartScale);
        } else if (systemId === 'respiratory') {
          // Smooth sinusoidal breathing ventilation cycle (Inhale / Exhale thoracic compliance)
          const breathCycle = Math.sin(elapsed * 1.8);
          const breathScaleX = 1.0 + breathCycle * 0.07;
          const breathScaleY = 1.0 + breathCycle * 0.035;
          organGroupRef.current.scale.set(breathScaleX, breathScaleY, breathScaleX);
        } else if (systemId === 'nervous') {
          // Neural micro-pulsation and bio-electric rhythm
          const neuralPulse = 1.0 + Math.sin(elapsed * 2.8) * 0.015;
          organGroupRef.current.scale.set(neuralPulse, 1.0, neuralPulse);
        } else if (systemId === 'fullbody') {
          // Coordinated physiological rhythm: cardiac pulse and respiratory chest excursion
          const heartMesh = partsMeshMap.current.get('fullbody_cardiac_mediastinum');
          if (heartMesh) {
            const t = elapsed * 3.8;
            const beat = Math.pow(Math.max(0, Math.sin(t)), 6) * 0.08 + Math.pow(Math.max(0, Math.sin(t - 0.35)), 8) * 0.04;
            heartMesh.scale.set(1.0 + beat, 1.0 - beat * 0.4, 1.0 + beat);
          }
          const lungsMesh = partsMeshMap.current.get('fullbody_pulmonary_lungs');
          if (lungsMesh) {
            const breath = Math.sin(elapsed * 1.8) * 0.04;
            lungsMesh.scale.set(1.0 + breath, 1.0 + breath * 0.6, 1.0 + breath);
          }
        }
      }

      // Exploded View offset with stable anchor positions
      if (organGroupRef.current) {
        organGroupRef.current.children.forEach((child, index) => {
          if (child instanceof THREE.Mesh || child instanceof THREE.Group) {
            if (!child.userData.origPos) {
              child.userData.origPos = child.position.clone();
            }
            const orig = child.userData.origPos;
            const dirX = ((index % 3) - 1) * explodedFactor * 0.9;
            const dirZ = Math.sin(index * 1.6) * explodedFactor * 0.65;
            const targetX = orig.x + dirX;
            const targetZ = orig.z + dirZ;
            child.position.x += (targetX - child.position.x) * 0.12;
            child.position.z += (targetZ - child.position.z) * 0.12;
          }
        });
      }

      // Selected organ highlight glow pulsing & clean unselected
      if (organGroupRef.current) {
        const selObj = selectedPartId ? partsMeshMap.current.get(selectedPartId) : null;
        const glow = (Math.sin(elapsed * 5) + 1) * 0.5;

        organGroupRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            let isSelected = false;
            if (selObj) {
              if (child === selObj) isSelected = true;
              else if (selObj.children && selObj.children.includes(child)) isSelected = true;
            }

            if (child.material instanceof THREE.MeshStandardMaterial || child.material instanceof THREE.MeshPhysicalMaterial) {
              if (isSelected) {
                child.material.emissive.setHex(0x06b6d4);
                child.material.emissiveIntensity = 0.2 + glow * 0.45;
              } else if (child.material.emissiveIntensity > 0) {
                child.material.emissiveIntensity = Math.max(0, child.material.emissiveIntensity - 0.05);
                if (child.material.emissiveIntensity === 0) {
                  child.material.emissive.setHex(0x000000);
                }
              }
            }
          }
        });
      }

      // Move ambient bio-particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsed * 0.08;
      }

      // Render
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animId = requestAnimationFrame(animate);
    reqAnimRef.current = animId;

    return () => cancelAnimationFrame(animId);
  }, [systemId, isPlaying, autoRotate, animSpeed, explodedFactor, selectedPartId, updateCameraPosition]);

  // Handle Mouse / Touch Orbit Controls
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    prevMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current || !cameraRef.current || !sceneRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    // Orbit camera when dragging
    if (isDragging.current) {
      const deltaX = e.clientX - prevMousePos.current.x;
      const deltaY = e.clientY - prevMousePos.current.y;

      cameraAngle.current.theta -= deltaX * 0.007;
      cameraAngle.current.phi = Math.max(0.2, Math.min(Math.PI - 0.2, cameraAngle.current.phi - deltaY * 0.007));
      
      prevMousePos.current = { x: e.clientX, y: e.clientY };
      updateCameraPosition();
      return;
    }

    // Raycast hover detection
    mouseVec.current.set(mouseX, mouseY);
    raycaster.current.setFromCamera(mouseVec.current, cameraRef.current);

    if (organGroupRef.current) {
      const intersects = raycaster.current.intersectObjects(organGroupRef.current.children, true);
      if (intersects.length > 0) {
        let hitObj: THREE.Object3D | null = intersects[0].object;
        while (hitObj && !hitObj.name && hitObj.parent !== organGroupRef.current) {
          hitObj = hitObj.parent;
        }
        if (hitObj && hitObj.name) {
          const matchedPart = parts.find(p => p.id === hitObj?.name);
          if (matchedPart) {
            setHoveredPart(matchedPart);
            setHoverPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            return;
          }
        }
      }
    }
    setHoveredPart(null);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current || !cameraRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    mouseVec.current.set(mouseX, mouseY);
    raycaster.current.setFromCamera(mouseVec.current, cameraRef.current);

    if (organGroupRef.current) {
      const intersects = raycaster.current.intersectObjects(organGroupRef.current.children, true);
      if (intersects.length > 0) {
        let hitObj: THREE.Object3D | null = intersects[0].object;
        while (hitObj && !hitObj.name && hitObj.parent !== organGroupRef.current) {
          hitObj = hitObj.parent;
        }
        if (hitObj && hitObj.name) {
          onSelectPart(hitObj.name);
        }
      }
    }
  };

  // Zoom control
  const handleZoom = (direction: 'in' | 'out') => {
    const factor = direction === 'in' ? 0.85 : 1.18;
    cameraAngle.current.radius = Math.max(2.5, Math.min(10, cameraAngle.current.radius * factor));
    updateCameraPosition();
  };

  // Reset View
  const handleResetCamera = () => {
    cameraAngle.current = { theta: 0.25, phi: 1.35, radius: 5.6 };
    targetLookAt.current.set(0, 0.35, 0);
    setExplodedFactor(0);
    updateCameraPosition();
  };

  return (
    <div 
      ref={containerRef}
      id="three-canvas-container"
      className="relative w-full h-full min-h-[460px] md:min-h-[620px] select-none cursor-grab active:cursor-grabbing overflow-hidden rounded-2xl border border-slate-800/90 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onClick={handleClick}
    >
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating 3D Anatomical Pin Markers */}
      {showPins && parts.map((part) => {
        if (!cameraRef.current || !containerRef.current) return null;
        const [px, py, pz] = part.position3D;
        const v = new THREE.Vector3(px, py, pz);
        v.project(cameraRef.current);

        // Check if behind camera
        if (v.z > 1) return null;

        const rect = containerRef.current.getBoundingClientRect();
        const screenX = ((v.x + 1) / 2) * rect.width;
        const screenY = ((-v.y + 1) / 2) * rect.height;
        const isSelected = selectedPartId === part.id;

        return (
          <button
            key={part.id}
            id={`pin-marker-${part.id}`}
            onClick={(e) => {
              e.stopPropagation();
              onSelectPart(part.id);
            }}
            style={{
              left: `${screenX}px`,
              top: `${screenY}px`,
              transform: 'translate(-50%, -100%)'
            }}
            className={`absolute z-10 group flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md transition-all duration-200 ${
              isSelected 
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/40 ring-2 ring-white scale-110' 
                : 'bg-slate-900/85 hover:bg-slate-800 text-slate-200 border border-slate-700/70 hover:scale-105 shadow-md'
            }`}
          >
            <span 
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: isSelected ? '#000' : part.color }}
            />
            <span>{part.name[language]}</span>
            {educationLevel === 'medical' && part.latinName && (
              <span className="text-[10px] text-slate-400 font-serif italic hidden md:inline">
                ({part.latinName.split(' ')[0]})
              </span>
            )}
          </button>
        );
      })}

      {/* Hover Info Tooltip */}
      {hoveredPart && hoverPos && (
        <div 
          className="absolute z-20 pointer-events-none px-3 py-2 rounded-lg bg-slate-900/95 text-white border border-cyan-500/50 shadow-2xl backdrop-blur-md text-xs transition-opacity duration-150"
          style={{
            left: `${hoverPos.x + 15}px`,
            top: `${hoverPos.y + 15}px`,
          }}
        >
          <p className="font-bold text-cyan-400">{hoveredPart.name[language]}</p>
          <p className="text-[11px] text-slate-300 line-clamp-2 max-w-[220px]">
            {hoveredPart.description[educationLevel][language]}
          </p>
        </div>
      )}

      {/* Top Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto bg-slate-900/85 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-xl shadow-lg">
          <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
          <span className="text-xs font-semibold text-slate-300">
            {language === 'si' ? 'යථාර්ථවාදී ත්‍රිමාණ ආකෘතිය' : language === 'ta' ? 'யதார்த்தமான 3D மாதிரி' : 'Realistic 3D PBR Model'}
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-cyan-950/80 text-cyan-300 font-mono font-bold">
            PBR HD
          </span>
        </div>

        {/* Quick Zoom & Reset Controls */}
        <div className="flex items-center gap-1.5 pointer-events-auto bg-slate-900/85 backdrop-blur-md border border-slate-800 p-1 rounded-xl shadow-lg">
          <button
            id="btn-zoom-in"
            title="Zoom In"
            onClick={() => handleZoom('in')}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            id="btn-zoom-out"
            title="Zoom Out"
            onClick={() => handleZoom('out')}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <div className="w-[1px] h-4 bg-slate-800" />
          <button
            id="btn-reset-view"
            title="Reset Camera"
            onClick={handleResetCamera}
            className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-300 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Interactive Toolbar */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        {/* Left Toolbar: Animation Play & Auto-Rotate */}
        <div className="flex items-center gap-1.5 pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-800 p-1.5 rounded-xl shadow-xl">
          <button
            id="btn-toggle-animation"
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause Physiology' : 'Play Physiology'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isPlaying 
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">
              {language === 'si' ? 'ස්පන්දනය' : language === 'ta' ? 'இயக்கம்' : 'Physiology'}
            </span>
          </button>

          <button
            id="btn-toggle-autorotate"
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-1.5 rounded-lg text-xs font-semibold transition-colors ${
              autoRotate ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
            title="Auto Rotate"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
          </button>

          {/* Speed Selector */}
          <div className="flex items-center gap-1 text-[11px] font-mono pl-1 text-slate-400">
            {[1, 1.5, 2].map(speed => (
              <button
                key={speed}
                onClick={() => setAnimSpeed(speed)}
                className={`px-1.5 py-0.5 rounded ${animSpeed === speed ? 'bg-cyan-500 text-slate-950 font-bold' : 'hover:text-white'}`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>

        {/* Right Toolbar: Dissection / Cross-Section & X-Ray & Pins & Exploded View */}
        <div className="flex items-center gap-2 pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-800 p-1.5 rounded-xl shadow-xl">
          {/* Dissection / Cutaway Internal Anatomy Toggle */}
          <button
            id="btn-toggle-dissection"
            onClick={() => setIsCutaway(!isCutaway)}
            title={
              language === 'si'
                ? 'අභ්‍යන්තර ව්‍යුහය (කැපුම් දසුන)'
                : language === 'ta'
                ? 'உள் உடற்கூறியல் (வெட்டு தோற்றம்)'
                : 'Internal Cross-Section / Dissection'
            }
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isCutaway 
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/40 ring-1 ring-white/50' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Scissors className="w-3.5 h-3.5" />
            <span>
              {language === 'si' ? 'කැපුම් දසුන' : language === 'ta' ? 'வெட்டு தோற்றம்' : 'Dissection'}
            </span>
          </button>

          {/* X-Ray / Transparency Toggle */}
          <button
            id="btn-toggle-xray"
            onClick={() => setIsXRay(!isXRay)}
            title="Toggle X-Ray Transparency"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isXRay 
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30' 
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>X-Ray</span>
          </button>

          {/* Pins Toggle */}
          <button
            id="btn-toggle-pins"
            onClick={() => setShowPins(!showPins)}
            title="Toggle Landmark Pins"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              showPins 
                ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {language === 'si' ? 'ලක්ෂ්‍ය' : language === 'ta' ? 'குறியீடுகள்' : 'Pins'}
            </span>
          </button>

          {/* Exploded View Slider */}
          <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-800/80 rounded-lg text-xs text-slate-300">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] hidden sm:inline">
              {language === 'si' ? 'විසිරුම' : language === 'ta' ? 'பிரித்தல்' : 'Explode'}
            </span>
            <input
              id="slider-explode"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={explodedFactor}
              onChange={(e) => setExplodedFactor(parseFloat(e.target.value))}
              className="w-14 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
