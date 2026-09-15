import React, { useState } from 'react';
import { SpeciesId, SpeciesInfo, Language, EducationLevel } from '../types';
import { 
  User, 
  Waves, 
  Dog, 
  Cat, 
  Feather, 
  GitCompare, 
  Info, 
  Sparkles, 
  X, 
  Check, 
  Heart, 
  Wind, 
  Bone, 
  Zap 
} from 'lucide-react';
import { SPECIES_LIST } from '../data/animalSystemsData';

interface SpeciesSelectorProps {
  selectedSpeciesId: SpeciesId;
  onSelectSpecies: (speciesId: SpeciesId) => void;
  language: Language;
  educationLevel: EducationLevel;
}

export const SpeciesSelector: React.FC<SpeciesSelectorProps> = ({
  selectedSpeciesId,
  onSelectSpecies,
  language,
  educationLevel
}) => {
  const [showComparisonModal, setShowComparisonModal] = useState(false);

  const getSpeciesIcon = (iconName: string, className: string = 'w-5 h-5') => {
    switch (iconName) {
      case 'User': return <User className={className} />;
      case 'Waves': return <Waves className={className} />;
      case 'Dog': return <Dog className={className} />;
      case 'Cat': return <Cat className={className} />;
      case 'Feather': return <Feather className={className} />;
      default: return <User className={className} />;
    }
  };

  const activeSpecies = SPECIES_LIST.find(s => s.id === selectedSpeciesId) || SPECIES_LIST[0];

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Horizontal Species Pill Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
          <div className="flex items-center gap-1 px-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>{language === 'si' ? 'විශේෂය' : language === 'ta' ? 'இனம்' : 'Species'}:</span>
          </div>

          {SPECIES_LIST.map((sp) => {
            const isSelected = sp.id === selectedSpeciesId;
            return (
              <button
                key={sp.id}
                id={`species-btn-${sp.id}`}
                onClick={() => onSelectSpecies(sp.id)}
                className={`group relative flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25 ring-1 ring-white/30 scale-[1.02]'
                    : 'bg-slate-800/80 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-750'
                }`}
              >
                <span 
                  className="p-1 rounded-lg transition-colors"
                  style={{ 
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.2)' : `${sp.accentColor}20`,
                    color: isSelected ? '#ffffff' : sp.accentColor
                  }}
                >
                  {getSpeciesIcon(sp.iconName, 'w-3.5 h-3.5')}
                </span>
                <span>{sp.name[language]}</span>
                {sp.id !== 'human' && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-normal ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-700/80 text-slate-400'
                  }`}>
                    {sp.taxonomicClass[language].split(' ')[0]}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Comparative Anatomy Modal Trigger */}
        <button
          id="btn-compare-species"
          onClick={() => setShowComparisonModal(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-300 hover:text-purple-200 border border-purple-500/30 text-xs font-medium transition-all ml-auto shadow-sm"
        >
          <GitCompare className="w-3.5 h-3.5 text-purple-400" />
          <span className="font-semibold">
            {language === 'si' ? 'සංසන්දනාත්මක කායික විද්‍යාව' : language === 'ta' ? 'ஒப்பீட்டு உடற்கூறியல்' : 'Comparative Matrix'}
          </span>
        </button>
      </div>

      {/* Quick Species Info Banner when non-human is selected */}
      {selectedSpeciesId !== 'human' && (
        <div className="flex items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-gradient-to-r from-slate-900/90 via-slate-850/90 to-slate-900/90 border border-slate-800 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span 
              className="p-1 rounded-md"
              style={{ backgroundColor: `${activeSpecies.accentColor}25`, color: activeSpecies.accentColor }}
            >
              {getSpeciesIcon(activeSpecies.iconName, 'w-4 h-4')}
            </span>
            <div>
              <span className="font-bold text-white mr-1.5">{activeSpecies.name[language]}</span>
              <span className="font-serif italic text-slate-400 text-[11px]">({activeSpecies.scientificName})</span>
              <span className="mx-2 text-slate-600">•</span>
              <span className="text-slate-400 hidden sm:inline">{activeSpecies.tagline[language]}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {activeSpecies.statistics.slice(0, 2).map((st, i) => (
              <span key={i} className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 font-mono text-[10px] text-cyan-300">
                {st.value}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Comparative Anatomy Matrix Modal */}
      {showComparisonModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  <GitCompare className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>
                      {language === 'si' ? 'සංසන්දනාත්මක කායික විද්‍යා අනුකෘතිය' : language === 'ta' ? 'ஒப்பீட்டு உடற்கூறியல் மேட்ரிக்ஸ்' : 'Comparative Vertebrate Anatomy Matrix'}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 font-mono">
                      {SPECIES_LIST.length} Species
                    </span>
                  </h2>
                  <p className="text-xs text-slate-400">
                    {language === 'si' 
                      ? 'මිනිසා, මැඩියා, සුනඛයා, බළලා සහ පක්ෂීන්ගේ පරිණාමීය අනුවර්තන සසඳන්න'
                      : language === 'ta'
                      ? 'மனிதன், தவளை, நாய், பூனை மற்றும் பறவைகளின் பரிணாம ஒப்பீடு'
                      : 'Evolutionary physiological milestones: Human, Frog, Dog, Cat & Bird'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Comprehensive Comparison Table */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Species Overview Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {SPECIES_LIST.map((sp) => (
                  <div 
                    key={sp.id}
                    onClick={() => {
                      onSelectSpecies(sp.id);
                      setShowComparisonModal(false);
                    }}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all hover:scale-[1.02] ${
                      sp.id === selectedSpeciesId
                        ? 'bg-slate-800 border-cyan-500 shadow-lg ring-1 ring-cyan-500/50'
                        : 'bg-slate-900/80 hover:bg-slate-800/80 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span 
                        className="p-1.5 rounded-lg"
                        style={{ backgroundColor: `${sp.accentColor}25`, color: sp.accentColor }}
                      >
                        {getSpeciesIcon(sp.iconName, 'w-4 h-4')}
                      </span>
                      {sp.id === selectedSpeciesId && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500 text-slate-950 font-bold">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-white text-sm">{sp.name[language]}</h3>
                    <p className="text-[11px] font-serif italic text-slate-400 truncate">{sp.scientificName}</p>
                    <div className="mt-2 text-[10px] text-slate-400">
                      {sp.taxonomicClass[language]}
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Comparative Parameter Matrix */}
              <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/60">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/90 text-slate-300 font-semibold">
                      <th className="p-3.5 min-w-[140px]">Feature / පරාමිතිය</th>
                      <th className="p-3.5 text-cyan-400">🧑 Human</th>
                      <th className="p-3.5 text-emerald-400">🐸 Frog</th>
                      <th className="p-3.5 text-orange-400">🐕 Dog</th>
                      <th className="p-3.5 text-purple-400">🐱 Cat</th>
                      <th className="p-3.5 text-sky-400">🦅 Bird</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    <tr>
                      <td className="p-3.5 font-bold text-white flex items-center gap-1.5">
                        <Heart className="w-3.5 h-3.5 text-red-400" />
                        <span>Heart Chambers & Aortic Arch</span>
                      </td>
                      <td className="p-3.5">4 Chambers (Left Aortic Arch)</td>
                      <td className="p-3.5">3 Chambers (2 Atria, 1 Ventricle with Spiral Valve)</td>
                      <td className="p-3.5">4 Chambers (Athletic Left Aortic Arch)</td>
                      <td className="p-3.5">4 Chambers (Compact Feline Arch)</td>
                      <td className="p-3.5 font-bold text-sky-400">4 Chambers (RIGHT Aortic Arch)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white flex items-center gap-1.5">
                        <Wind className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Respiratory Engine</span>
                      </td>
                      <td className="p-3.5">Negative pressure, muscular diaphragm & alveolar pool</td>
                      <td className="p-3.5">Positive buccal pumping + Cutaneous vascular skin</td>
                      <td className="p-3.5">Thoracic diaphragm + Upper-airway panting thermoregulation</td>
                      <td className="p-3.5">Negative pressure lungs + Purring laryngeal oscillation</td>
                      <td className="p-3.5 font-bold text-sky-400">9 Air Sacs, continuous unidirectional flow, rigid parabronchi</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white flex items-center gap-1.5">
                        <Bone className="w-3.5 h-3.5 text-amber-400" />
                        <span>Skeletal Specialization</span>
                      </td>
                      <td className="p-3.5">S-shaped spine, bipedal pelvis, opposable thumb</td>
                      <td className="p-3.5">9 vertebrae + Fused Urostyle rod, elongated tarsals</td>
                      <td className="p-3.5">Sagittal crest, digitigrade paws, caudal rudder tail</td>
                      <td className="p-3.5">7 flexible lumbar vertebrae, free-floating clavicle</td>
                      <td className="p-3.5 font-bold text-sky-400">Keeled sternum (carina), wishbone (furcula), pneumatic hollow bones</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-yellow-400" />
                        <span>Key Evolutionary Superpower</span>
                      </td>
                      <td className="p-3.5">Massive cerebral cortex & symbolic language</td>
                      <td className="p-3.5">Dual-mode respiration & explosive jumping leverage</td>
                      <td className="p-3.5">300 Million olfactory receptors & splenic RBC reservoir</td>
                      <td className="p-3.5">Tapetum night vision (6x) & 180° mid-air righting reflex</td>
                      <td className="p-3.5 font-bold text-sky-400">High-altitude sustained hypoxia tolerance & flight aerodynamics</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Education Level Specific Insight */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-purple-950/40 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1 text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>
                    {educationLevel === 'primary' 
                      ? 'Did you know? (Primary Fun Fact)' 
                      : educationLevel === 'al' 
                      ? 'G.C.E. A/L Comparative Biology Syllabus Note' 
                      : 'Clinical & Veterinary Comparative Physiology'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {educationLevel === 'primary'
                    ? 'Frogs swallow air without ribs, dogs cool off by sticking out their tongues, cats can twist around in mid-air to land on their paws, and birds can breathe fresh air even while breathing out!'
                    : educationLevel === 'al'
                    ? 'Vertebrate cardiovascular and respiratory evolution progresses from single-circuit fish to 3-chambered amphibians with spiral valves, and independently diverges into 4-chambered mammalian (left aortic arch, diaphragm) and avian (right aortic arch, 9 air sacs, parabronchial cross-current exchange) lineages.'
                    : 'Hemodynamic models: the frog trabeculated ventricle preserves functional separation without an anatomical septum; the canine spleen performs acute autotransfusion; and the avian respiratory cross-current architecture completely avoids alveolar dead-space dilution, achieving high arterial PO2 even at 9,000 meters altitude.'}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Select any species to explore its 3D interactive anatomical models and organ landmarks.
              </span>
              <button
                onClick={() => setShowComparisonModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                Close Matrix
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
