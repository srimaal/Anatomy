import React, { useState } from 'react';
import { OrganSystemId, Language, EducationLevel, SystemInfo } from '../types';
import { 
  Heart, 
  Wind, 
  Brain, 
  Bone, 
  Utensils, 
  Droplet,
  User, 
  Dumbbell, 
  Sparkles, 
  Shield, 
  Layers, 
  Users,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface SystemSelectorProps {
  systems: SystemInfo[];
  activeSystemId: OrganSystemId;
  onSelectSystem: (systemId: OrganSystemId) => void;
  language: Language;
  educationLevel: EducationLevel;
  onPrevSystem?: () => void;
  onNextSystem?: () => void;
}

type SystemCategory = 'all' | 'support' | 'control' | 'transport' | 'visceral';

export const SystemSelector: React.FC<SystemSelectorProps> = ({
  systems,
  activeSystemId,
  onSelectSystem,
  language,
  educationLevel,
  onPrevSystem,
  onNextSystem
}) => {
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<SystemCategory>('all');

  const getIcon = (id: OrganSystemId, className: string = 'w-4 h-4') => {
    switch (id) {
      case 'fullbody':
        return <User className={className} />;
      case 'circulatory':
        return <Heart className={className} />;
      case 'respiratory':
        return <Wind className={className} />;
      case 'nervous':
        return <Brain className={className} />;
      case 'skeletal':
        return <Bone className={className} />;
      case 'muscular':
        return <Dumbbell className={className} />;
      case 'digestive':
        return <Utensils className={className} />;
      case 'endocrine':
        return <Sparkles className={className} />;
      case 'lymphatic':
        return <Shield className={className} />;
      case 'integumentary':
        return <Layers className={className} />;
      case 'urinary':
        return <Droplet className={className} />;
      case 'reproductive':
        return <Users className={className} />;
    }
  };

  // Helper to get official system number (1 to 11, or 0 for full body)
  const getSystemNumber = (id: OrganSystemId): number => {
    switch (id) {
      case 'circulatory': return 1;
      case 'respiratory': return 2;
      case 'nervous': return 3;
      case 'skeletal': return 4;
      case 'muscular': return 5;
      case 'digestive': return 6;
      case 'endocrine': return 7;
      case 'lymphatic': return 8;
      case 'integumentary': return 9;
      case 'urinary': return 10;
      case 'reproductive': return 11;
      default: return 0;
    }
  };

  const getCategory = (id: OrganSystemId): SystemCategory => {
    switch (id) {
      case 'skeletal':
      case 'muscular':
      case 'integumentary':
        return 'support';
      case 'nervous':
      case 'endocrine':
        return 'control';
      case 'circulatory':
      case 'lymphatic':
        return 'transport';
      case 'respiratory':
      case 'digestive':
      case 'urinary':
      case 'reproductive':
        return 'visceral';
      default:
        return 'all';
    }
  };

  const filteredSystems = selectedCategory === 'all' 
    ? systems 
    : systems.filter(s => s.id === 'fullbody' || getCategory(s.id) === selectedCategory);

  const currentNumber = getSystemNumber(activeSystemId);

  return (
    <div className="w-full flex flex-col gap-2.5">
      {/* Top Header Row with System Title, Counter & Directory Trigger */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 px-0.5">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono text-xs font-bold ring-1 ring-cyan-500/40">
            11
          </span>
          <h3 className="text-xs sm:text-sm font-black text-slate-100 uppercase tracking-wider flex items-center gap-1.5">
            {language === 'si' 
              ? 'මානව ප්‍රධාන පද්ධති 11' 
              : language === 'ta' 
              ? '11 முக்கிய உறுப்புத் தொகுதிகள்' 
              : '11 Major Organ Systems'}
          </h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold border border-slate-700 hidden sm:inline-block">
            {currentNumber > 0 ? `#${currentNumber} of 11` : 'Holistic Organism'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Quick Prev / Next Navigator */}
          {onPrevSystem && onNextSystem && (
            <div className="flex items-center rounded-lg bg-slate-900 border border-slate-800 p-0.5">
              <button
                id="btn-prev-system-top"
                onClick={onPrevSystem}
                title="Previous Organ System"
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                id="btn-next-system-top"
                onClick={onNextSystem}
                title="Next Organ System"
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Directory Grid Modal Trigger Button */}
          <button
            id="btn-open-systems-directory"
            onClick={() => setIsDirectoryOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-cyan-300 transition-colors shadow-sm"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">
              {language === 'si' ? 'සියලු පද්ධති 11 නාමාවලිය' : language === 'ta' ? 'அனைத்து 11 தொகுதிகள்' : 'All 11 Systems Directory'}
            </span>
            <span className="xs:hidden">Directory</span>
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable Tabs Row with Numbers and Icons */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-slate-700">
        {systems.map((system) => {
          const isActive = system.id === activeSystemId;
          const num = getSystemNumber(system.id);

          return (
            <button
              key={system.id}
              id={`tab-system-${system.id}`}
              onClick={() => onSelectSystem(system.id)}
              className={`group flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                isActive
                  ? 'bg-slate-800 text-white border-cyan-500/80 shadow-md shadow-cyan-500/10 ring-1 ring-cyan-500/40'
                  : 'bg-slate-900/70 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border-slate-800'
              }`}
            >
              {/* Number Badge */}
              <span 
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-mono font-black ${
                  isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                }`}
              >
                {num > 0 ? num : '★'}
              </span>

              {/* Icon */}
              <span
                className="p-1 rounded-lg transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: isActive ? `${system.accentColor}25` : '#1e293b',
                  color: system.accentColor
                }}
              >
                {getIcon(system.id)}
              </span>

              {/* System Name */}
              <span className="truncate">{system.name[language]}</span>
            </button>
          );
        })}
      </div>

      {/* Full 11 Systems Directory Modal */}
      {isDirectoryOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 overflow-y-auto"
          onClick={() => setIsDirectoryOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                    {language === 'si' 
                      ? 'මානව දේහයේ ප්‍රධාන අවයව පද්ධති 11 නාමාවලිය' 
                      : language === 'ta' 
                      ? 'மனித உடலின் 11 முக்கிய உறுப்புத் தொகுதிகள் அடைவு' 
                      : 'The 11 Major Human Organ Systems Directory'}
                  </h2>
                  <p className="text-xs text-slate-400">
                    {language === 'si'
                      ? 'ත්‍රිමාණ අනුරූ නැරඹීමට සහ අවයව හැදෑරීමට ඕනෑම පද්ධතියක් තෝරන්න'
                      : language === 'ta'
                      ? '3D மாதிரிகளை ஆராய ஏதேனும் ஒரு தொகுதியைத் தேர்ந்தெடுக்கவும்'
                      : 'Select any major organ system to inspect 3D models, landmarks, and clinical data'}
                  </p>
                </div>
              </div>

              <button
                id="btn-close-systems-directory"
                onClick={() => setIsDirectoryOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-slate-950/40 border-b border-slate-800/80 overflow-x-auto text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] shrink-0">
                {language === 'si' ? 'වර්ගීකරණය:' : language === 'ta' ? 'வகைப்பாடு:' : 'Category:'}
              </span>
              {[
                { id: 'all', label: { en: 'All 11 Systems + Full Body', si: 'සියලු පද්ධති', ta: 'அனைத்து தொகுதிகளும்' } },
                { id: 'support', label: { en: 'Support & Covering', si: 'ආධාරක සහ ආවරණ', ta: 'ஆதரவு & உறை' } },
                { id: 'control', label: { en: 'Control & Regulation', si: 'පාලනය සහ නියාමනය', ta: 'கட்டுப்பாடு & ஒழுங்குமுறை' } },
                { id: 'transport', label: { en: 'Transport & Defense', si: 'ප්‍රවාහන සහ ආරක්ෂක', ta: 'போக்குவரத்து & பாதுகாப்பு' } },
                { id: 'visceral', label: { en: 'Visceral & Vital', si: 'අභ්‍යන්තර ජීව පද්ධති', ta: 'உள்ளுறுப்பு தொகுதிகள்' } },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as SystemCategory)}
                  className={`px-3 py-1 rounded-full whitespace-nowrap transition-all font-semibold ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  {cat.label[language]}
                </button>
              ))}
            </div>

            {/* Systems Grid */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-180px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredSystems.map((sys) => {
                const isCurrent = sys.id === activeSystemId;
                const num = getSystemNumber(sys.id);

                return (
                  <div
                    key={sys.id}
                    onClick={() => {
                      onSelectSystem(sys.id);
                      setIsDirectoryOpen(false);
                    }}
                    className={`group cursor-pointer relative flex flex-col justify-between p-4 rounded-xl border transition-all duration-200 ${
                      isCurrent
                        ? 'bg-slate-800/90 border-cyan-500 ring-2 ring-cyan-500/30 shadow-lg'
                        : 'bg-slate-950/60 hover:bg-slate-800/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="p-2 rounded-lg"
                            style={{
                              backgroundColor: `${sys.accentColor}25`,
                              color: sys.accentColor
                            }}
                          >
                            {getIcon(sys.id, 'w-5 h-5')}
                          </span>
                          <span className="font-mono text-xs font-bold text-slate-400">
                            {num > 0 ? `System #${num}` : 'Holistic Overview'}
                          </span>
                        </div>

                        {isCurrent ? (
                          <span className="flex items-center gap-1 text-[10px] font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded-full border border-cyan-800">
                            <CheckCircle2 className="w-3 h-3" />
                            Active
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-cyan-400">
                            Inspect <ExternalLink className="w-2.5 h-2.5" />
                          </span>
                        )}
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {sys.name[language]}
                      </h4>

                      <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                        {sys.tagline[language]}
                      </p>
                    </div>

                    {/* Quick Stats Pill Strip */}
                    <div className="grid grid-cols-2 gap-1.5 mt-3 pt-3 border-t border-slate-800/80 text-[11px]">
                      {sys.statistics.slice(0, 2).map((st, sIdx) => (
                        <div key={sIdx} className="bg-slate-900/80 rounded-md p-1.5 text-center">
                          <div className="text-[9px] text-slate-400 truncate">{st.label[language]}</div>
                          <div className="font-mono font-bold text-cyan-400 truncate">{st.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-6">
              <span>
                {language === 'si' 
                  ? 'මිනිස් සිරුරේ ක්‍රියාකාරී පද්ධති 11 ම ත්‍රිමාණව ඇතුළත් කර ඇත.' 
                  : language === 'ta' 
                  ? 'மனித உடலின் அனைத்து 11 தொகுதிகளும் 3D முறையில் சேர்க்கப்பட்டுள்ளன.' 
                  : 'All 11 human organ systems + holistic full body somatic model included.'}
              </span>
              <button
                onClick={() => setIsDirectoryOpen(false)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
