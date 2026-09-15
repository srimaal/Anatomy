import React, { useState } from 'react';
import { Language, EducationLevel, OrganPart } from '../types';
import { 
  GraduationCap, 
  Stethoscope, 
  BookOpen, 
  Search, 
  Languages, 
  Volume2, 
  HelpCircle, 
  Sparkles,
  Check
} from 'lucide-react';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  educationLevel: EducationLevel;
  onEducationLevelChange: (level: EducationLevel) => void;
  allParts: OrganPart[];
  onSelectPart: (partId: string) => void;
  onOpenQuiz: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  educationLevel,
  onEducationLevelChange,
  allParts,
  onSelectPart,
  onOpenQuiz
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Filter parts for search autocomplete
  const filteredParts = searchQuery.trim() === '' ? [] : allParts.filter(part => {
    const q = searchQuery.toLowerCase();
    return (
      part.name.en.toLowerCase().includes(q) ||
      part.name.si.toLowerCase().includes(q) ||
      part.name.ta.toLowerCase().includes(q) ||
      (part.latinName && part.latinName.toLowerCase().includes(q))
    );
  });

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-white/20">
              <span className="text-xl">🫀</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  Anatomy<span className="text-cyan-400">Sphere</span> 3D
                </h1>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300">
                  {language === 'si' ? 'ත්‍රිභාෂා' : language === 'ta' ? 'மும்மொழி' : 'Trilingual'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                {language === 'si' 
                  ? 'මිනිස් සිරුරේ ත්‍රිමාණ කායික විද්‍යාව සහ ප්‍රශ්නාවලි'
                  : language === 'ta'
                  ? 'மனித உடற்கூறியல் 3D மாதிரி மற்றும் வினாடி வினா'
                  : 'Interactive 3D Anatomy & Multilevel Quizzes'}
              </p>
            </div>
          </div>

          {/* Center Search Bar */}
          <div className="relative flex-1 max-w-xs md:max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                id="search-organs-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                placeholder={
                  language === 'si' 
                    ? 'අවයව සොයන්න (හෘදය, මහා ධමනිය...)' 
                    : language === 'ta' 
                    ? 'உறுப்புகளைத் தேடுங்கள் (இதயம், பெருநாடி...)' 
                    : 'Search organs, vessels, bones...'
                }
                className="w-full pl-9 pr-4 py-1.5 text-xs rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Search Dropdown */}
            {isSearchOpen && filteredParts.length > 0 && (
              <div 
                className="absolute top-full mt-1.5 w-full bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50 max-h-64 overflow-y-auto"
                onMouseLeave={() => setIsSearchOpen(false)}
              >
                {filteredParts.map(part => (
                  <button
                    key={part.id}
                    id={`search-result-${part.id}`}
                    onClick={() => {
                      onSelectPart(part.id);
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-slate-800/90 flex items-center justify-between transition-colors border-b border-slate-800 last:border-0"
                  >
                    <div>
                      <p className="text-xs font-semibold text-slate-200">
                        {part.name[language]}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {part.name.en} {part.latinName && `• ${part.latinName}`}
                      </p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-mono">
                      {part.systemId}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Group: Level, Language & Quiz Button */}
          <div className="flex items-center gap-2">
            {/* Education Level Selector */}
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                id="btn-level-primary"
                onClick={() => onEducationLevelChange('primary')}
                title="Primary School Mode (Fun & Intuitive)"
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  educationLevel === 'primary'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">
                  {language === 'si' ? 'ප්‍රාථමික' : language === 'ta' ? 'தொடக்கநிலை' : 'Primary'}
                </span>
              </button>

              <button
                id="btn-level-al"
                onClick={() => onEducationLevelChange('al')}
                title="A/L Biology Syllabus Mode"
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  educationLevel === 'al'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">
                  {language === 'si' ? 'උසස් පෙළ (A/L)' : language === 'ta' ? 'உயர்தரம் (A/L)' : 'A/L Bio'}
                </span>
              </button>

              <button
                id="btn-level-medical"
                onClick={() => onEducationLevelChange('medical')}
                title="Medical Student Mode (MBBS/MD Clinical & Latin Anatomy)"
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  educationLevel === 'medical'
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">
                  {language === 'si' ? 'වෛද්‍ය පීඨ' : language === 'ta' ? 'மருத்துவக் கல்வி' : 'Medical'}
                </span>
              </button>
            </div>

            {/* Language Switcher Dropdown / Buttons */}
            <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                id="btn-lang-en"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                  language === 'en'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                id="btn-lang-si"
                onClick={() => onLanguageChange('si')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all font-sinhala ${
                  language === 'si'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                සිං
              </button>
              <button
                id="btn-lang-ta"
                onClick={() => onLanguageChange('ta')}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-all font-tamil ${
                  language === 'ta'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                தமி
              </button>
            </div>

            {/* Take Quiz Button */}
            <button
              id="btn-launch-system-quiz"
              onClick={onOpenQuiz}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {language === 'si' ? 'ප්‍රශ්නාවලිය' : language === 'ta' ? 'வினாடி வினா' : 'Take Quiz'}
              </span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
