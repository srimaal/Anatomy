import React from 'react';
import { OrganPart, Language, EducationLevel } from '../types';
import { 
  X, 
  Volume2, 
  Sparkles, 
  Activity, 
  ShieldAlert, 
  Layers, 
  HelpCircle,
  ExternalLink,
  BookOpen,
  CheckCircle2
} from 'lucide-react';

interface OrganDetailDrawerProps {
  part: OrganPart | null;
  onClose: () => void;
  language: Language;
  educationLevel: EducationLevel;
  onLaunchQuizOnPart?: (partId: string) => void;
}

export const OrganDetailDrawer: React.FC<OrganDetailDrawerProps> = ({
  part,
  onClose,
  language,
  educationLevel,
  onLaunchQuizOnPart
}) => {
  if (!part) return null;

  // Pronounce Organ Name via Web Speech Synthesis API
  const handlePronounce = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const textToSpeak = part.name[language] || part.name.en;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    if (language === 'si') {
      utterance.lang = 'si-LK';
    } else if (language === 'ta') {
      utterance.lang = 'ta-IN';
    } else {
      utterance.lang = 'en-US';
    }
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div 
      id="organ-detail-panel"
      className="w-full lg:w-[420px] bg-slate-900/95 border-l border-slate-800 backdrop-blur-2xl flex flex-col h-full overflow-hidden shadow-2xl transition-all duration-300"
    >
      {/* Header with Title and Close */}
      <div className="p-4 border-b border-slate-800 flex items-start justify-between gap-3 bg-slate-950/40">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: part.color }}
            />
            <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
              {part.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              {part.name[language]}
            </h2>
            <button
              id="btn-pronounce-organ"
              onClick={handlePronounce}
              title="Pronounce Organ Name"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 transition-colors"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* Subtitle / Alternate languages */}
          <div className="flex flex-wrap gap-x-2 text-xs text-slate-400 mt-0.5">
            {language !== 'en' && <span>{part.name.en}</span>}
            {part.latinName && (
              <span className="font-serif italic text-cyan-400/90 font-medium">
                ({part.latinName})
              </span>
            )}
          </div>
        </div>

        <button
          id="btn-close-detail-panel"
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Drawer Body Scroll */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-slate-200">
        
        {/* Tier Specific Badge Banner */}
        <div className={`p-3 rounded-xl border flex items-center justify-between text-xs font-semibold ${
          educationLevel === 'primary'
            ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
            : educationLevel === 'al'
            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300'
            : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
        }`}>
          <div className="flex items-center gap-2">
            {educationLevel === 'primary' && <span>🎒 Junior Explorer</span>}
            {educationLevel === 'al' && <span>🧬 G.C.E. Advanced Level Biology</span>}
            {educationLevel === 'medical' && <span>🩺 MBBS / USMLE Clinical Anatomy</span>}
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/60 uppercase">
            {part.speciesId ? `${part.speciesId} • ` : ''}{part.systemId}
          </span>
        </div>

        {/* Core Description (Adapted to Tier) */}
        <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
          <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>
              {language === 'si' ? 'ව්‍යුහය සහ කාර්යය' : language === 'ta' ? 'அமைப்பு மற்றும் செயல்பாடு' : 'Anatomical Description'}
            </span>
          </h3>
          <p className="text-sm leading-relaxed text-slate-300">
            {part.description?.[educationLevel]?.[language] || part.description?.primary?.[language] || ''}
          </p>
        </div>

        {/* PRIMARY SCHOOL: Fun Fact Box */}
        {educationLevel === 'primary' && part.funFact && (
          <div className="bg-gradient-to-br from-amber-500/15 via-purple-500/10 to-pink-500/15 border border-amber-500/40 p-4 rounded-xl shadow-lg">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>
                {language === 'si' ? 'ඔබ දන්නවාද?' : language === 'ta' ? 'உங்களுக்குத் தெரியுமா?' : 'Did You Know?'}
              </span>
            </div>
            <p className="text-xs text-amber-100/90 leading-relaxed font-medium">
              {part.funFact[language]}
            </p>
          </div>
        )}

        {/* Key Functions List */}
        <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/80">
          <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {language === 'si' ? 'ප්‍රධාන කාර්යයන්' : language === 'ta' ? 'முக்கிய செயல்பாடுகள்' : 'Key Biological Functions'}
            </span>
          </h3>
          <ul className="space-y-2">
            {(part.keyFunctions?.[educationLevel] || part.keyFunctions?.primary || []).map((fn, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                <span>{fn[language]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* MEDICAL LEVEL: Clinical Notes & Pathologies */}
        {educationLevel === 'medical' && part.clinicalNotes && (
          <div className="bg-rose-950/25 border border-rose-500/40 p-4 rounded-xl">
            <h3 className="text-xs uppercase tracking-wider font-bold text-rose-400 mb-1.5 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
              <span>
                {language === 'si' ? 'සායනික රෝග සහ වැදගත්කම' : language === 'ta' ? 'மருத்துவக் கோளாறுகள்' : 'Clinical Correlate & Pathologies'}
              </span>
            </h3>
            <p className="text-xs text-rose-200/90 leading-relaxed">
              {part.clinicalNotes[language]}
            </p>
          </div>
        )}

        {/* MEDICAL LEVEL: Neurovascular Supply Card */}
        {educationLevel === 'medical' && part.neurovascular && (
          <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
            <h3 className="text-[11px] uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5 mb-2">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>Neurovascular Architecture</span>
            </h3>

            {part.neurovascular.arterial && (
              <div className="flex justify-between gap-2 border-b border-slate-800/60 pb-1.5">
                <span className="text-rose-400 font-medium">Arterial Supply:</span>
                <span className="text-slate-300 text-right">{part.neurovascular.arterial}</span>
              </div>
            )}
            {part.neurovascular.venous && (
              <div className="flex justify-between gap-2 border-b border-slate-800/60 pb-1.5">
                <span className="text-blue-400 font-medium">Venous Return:</span>
                <span className="text-slate-300 text-right">{part.neurovascular.venous}</span>
              </div>
            )}
            {part.neurovascular.innervation && (
              <div className="flex justify-between gap-2 border-b border-slate-800/60 pb-1.5">
                <span className="text-purple-400 font-medium">Innervation:</span>
                <span className="text-slate-300 text-right">{part.neurovascular.innervation}</span>
              </div>
            )}
            {part.neurovascular.lymphatic && (
              <div className="flex justify-between gap-2">
                <span className="text-emerald-400 font-medium">Lymphatics:</span>
                <span className="text-slate-300 text-right">{part.neurovascular.lymphatic}</span>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Bottom CTA */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/60">
        <button
          id="btn-test-organ-quiz"
          onClick={() => onLaunchQuizOnPart && onLaunchQuizOnPart(part.id)}
          className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/20 transition-all"
        >
          <HelpCircle className="w-4 h-4" />
          <span>
            {language === 'si' ? 'මෙම අවයවය පිළිබඳ පරීක්ෂණය' : language === 'ta' ? 'இந்த உறுப்பு பற்றிய வினாடி வினா' : 'Test Knowledge on this Structure'}
          </span>
        </button>
      </div>
    </div>
  );
};
