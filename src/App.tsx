import React, { useState, useMemo } from 'react';
import { 
  Language, 
  EducationLevel, 
  OrganSystemId, 
  OrganPart 
} from './types';
import { SYSTEMS_INFO, ORGAN_PARTS } from './data/systemsData';
import { QUIZZES_DATA } from './data/quizzesData';
import { Header } from './components/Header';
import { SystemSelector } from './components/SystemSelector';
import { ThreeDViewer } from './components/ThreeDViewer';
import { OrganDetailDrawer } from './components/OrganDetailDrawer';
import { QuizModal } from './components/QuizModal';
import { AITutorModal } from './components/AITutorModal';
import { 
  Sparkles, 
  HelpCircle, 
  MessageSquare, 
  ChevronRight, 
  Activity, 
  Compass, 
  Layers, 
  CheckCircle2, 
  BookOpen, 
  Stethoscope, 
  GraduationCap 
} from 'lucide-react';

export default function App() {
  // Global State
  const [language, setLanguage] = useState<Language>('en');
  const [educationLevel, setEducationLevel] = useState<EducationLevel>('primary');
  const [activeSystemId, setActiveSystemId] = useState<OrganSystemId>('circulatory');
  const [selectedPartId, setSelectedPartId] = useState<string | null>('heart_left_ventricle');
  
  // Modals
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isAITutorOpen, setIsAITutorOpen] = useState(false);

  // Active System Information
  const activeSystem = useMemo(() => {
    return SYSTEMS_INFO.find(s => s.id === activeSystemId) || SYSTEMS_INFO[0];
  }, [activeSystemId]);

  // Parts for current active system
  const systemParts = useMemo(() => {
    return ORGAN_PARTS.filter(p => p.systemId === activeSystemId);
  }, [activeSystemId]);

  // Currently selected organ part
  const selectedPart = useMemo(() => {
    if (!selectedPartId) return null;
    return ORGAN_PARTS.find(p => p.id === selectedPartId) || null;
  }, [selectedPartId]);

  // Quizzes for current system and education level
  const systemQuizzes = useMemo(() => {
    return QUIZZES_DATA.filter(
      q => q.systemId === activeSystemId && q.level === educationLevel
    );
  }, [activeSystemId, educationLevel]);

  // Handle system switch
  const handleSelectSystem = (systemId: OrganSystemId) => {
    setActiveSystemId(systemId);
    const firstPart = ORGAN_PARTS.find(p => p.systemId === systemId);
    setSelectedPartId(firstPart ? firstPart.id : null);
  };

  // Handle select organ part
  const handleSelectPart = (partId: string) => {
    const part = ORGAN_PARTS.find(p => p.id === partId);
    if (part) {
      if (part.systemId !== activeSystemId) {
        setActiveSystemId(part.systemId);
      }
      setSelectedPartId(partId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Primary Header with Language, Mode & Search */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        educationLevel={educationLevel}
        onEducationLevelChange={setEducationLevel}
        allParts={ORGAN_PARTS}
        onSelectPart={handleSelectPart}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
        
        {/* System Tabs Selector & Mode Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <SystemSelector
            systems={SYSTEMS_INFO}
            activeSystemId={activeSystemId}
            onSelectSystem={handleSelectSystem}
            language={language}
            educationLevel={educationLevel}
          />
        </div>

        {/* System Overview Hero Card */}
        <section 
          id="system-overview-card"
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800/80 p-5 sm:p-6 shadow-xl"
        >
          {/* Subtle Ambient Glow */}
          <div 
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ backgroundColor: activeSystem.accentColor }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span 
                  className="px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-wider"
                  style={{ 
                    backgroundColor: `${activeSystem.accentColor}20`,
                    color: activeSystem.accentColor
                  }}
                >
                  {activeSystem.name[language]}
                </span>

                <span className="text-xs text-slate-400 font-medium">
                  {educationLevel === 'primary' && '🎒 Junior School Mode'}
                  {educationLevel === 'al' && '🧬 G.C.E. Advanced Level Biology'}
                  {educationLevel === 'medical' && '🩺 MBBS / Clinical Medical Mode'}
                </span>
              </div>

              <h2 className="text-lg sm:text-2xl font-black tracking-tight text-white">
                {activeSystem.tagline[language]}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                {activeSystem.overview[educationLevel][language]}
              </p>
            </div>

            {/* Live Stats Bento */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 shrink-0 w-full lg:w-auto">
              {activeSystem.statistics.map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-3 text-center"
                >
                  <p className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">
                    {stat.label[language]}
                  </p>
                  <p className="text-sm sm:text-lg font-black text-cyan-400 font-mono mt-0.5">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3D Anatomy Canvas & Inspection Workspace */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 3D Interactive Viewport (Takes 7 or 8 columns on large screens) */}
          <div className={`flex flex-col gap-3 ${selectedPart ? 'lg:col-span-7 xl:col-span-8' : 'lg:col-span-12'}`}>
            
            {/* Quick Part Pills Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] shrink-0 pl-1">
                {language === 'si' ? 'අවයව:' : language === 'ta' ? 'உறுப்புகள்:' : 'Landmarks:'}
              </span>
              {systemParts.map(p => (
                <button
                  key={p.id}
                  id={`pill-part-${p.id}`}
                  onClick={() => handleSelectPart(p.id)}
                  className={`px-3 py-1 rounded-full whitespace-nowrap transition-all text-xs font-semibold ${
                    selectedPartId === p.id 
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 ring-1 ring-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  }`}
                >
                  {p.name[language]}
                </button>
              ))}
            </div>

            {/* Three.js 3D Viewport */}
            <div className="w-full flex-1">
              <ThreeDViewer
                systemId={activeSystemId}
                parts={systemParts}
                selectedPartId={selectedPartId}
                onSelectPart={handleSelectPart}
                language={language}
                educationLevel={educationLevel}
              />
            </div>

            {/* Quick Helper Tips underneath 3D viewer */}
            <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 px-2">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  {language === 'si' ? 'භ්‍රමණය කිරීමට Drag කරන්න' : language === 'ta' ? 'சுழற்ற Drag செய்யவும்' : 'Drag to rotate 360°'}
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  {language === 'si' ? 'විස්තර බැලීමට අවයවය මත ක්ලික් කරන්න' : language === 'ta' ? 'விவரங்களுக்கு கிளிக் செய்யவும்' : 'Click any organ or pin to inspect'}
                </span>
              </div>

              <button
                onClick={() => setIsAITutorOpen(true)}
                className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>
                  {language === 'si' ? 'AI ගුරුතුමාගෙන් අසන්න' : language === 'ta' ? 'AI இடம் கேளுங்கள்' : 'Ask Anatomy AI Tutor'}
                </span>
              </button>
            </div>
          </div>

          {/* Right Inspection Drawer (Takes 5 or 4 columns) */}
          {selectedPart && (
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col rounded-2xl overflow-hidden border border-slate-800">
              <OrganDetailDrawer
                part={selectedPart}
                onClose={() => setSelectedPartId(null)}
                language={language}
                educationLevel={educationLevel}
                onLaunchQuizOnPart={() => setIsQuizOpen(true)}
              />
            </div>
          )}

        </section>

        {/* Feature Grid / System Learning Modules */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          
          {/* Card 1: System Quiz */}
          <div 
            onClick={() => setIsQuizOpen(true)}
            className="group cursor-pointer p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-cyan-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {language === 'si' ? 'පද්ධති ප්‍රශ්නාවලිය' : language === 'ta' ? 'தொகுதி வினாடி வினா' : 'System Knowledge Quiz'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'si' 
                  ? 'ඔබේ දැනුම පරීක්ෂා කර බලා සහතික සහ ලකුණු ලබාගන්න.'
                  : language === 'ta'
                  ? 'உங்கள் அறிவை சோதித்து உடனடி மதிப்பெண் பெறவும்.'
                  : 'Interactive multi-choice questions with instant clinical and physiological explanations.'}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-bold text-cyan-400">
              <span>{systemQuizzes.length} {language === 'si' ? 'ප්‍රශ්න' : language === 'ta' ? 'கேள்விகள்' : 'Questions'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: AI Anatomy & Clinical Guide */}
          <div 
            onClick={() => setIsAITutorOpen(true)}
            className="group cursor-pointer p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 transition-all shadow-lg hover:shadow-indigo-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {language === 'si' ? 'ත්‍රිභාෂා AI ගුරුතුමා' : language === 'ta' ? 'மும்மொழி AI ஆசிரியர்' : 'Trilingual AI Tutor'}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {language === 'si'
                  ? 'සිංහල, தமிழ் හෝ English භාෂාවෙන් ඕනෑම ව්‍යුහ විද්‍යා ගැටලුවක් ක්ෂණිකව අසන්න.'
                  : language === 'ta'
                  ? 'தமிழ், சிங்களம் அல்லது ஆங்கிலத்தில் எந்த கேள்வியையும் உடனுக்குடன் கேட்கலாம்.'
                  : 'Ask in-depth questions about neurovascular architecture, hemodynamics, or cellular respiration.'}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-bold text-indigo-400">
              <span>{language === 'si' ? 'විමසන්න' : language === 'ta' ? 'கேளுங்கள்' : 'Open Dialogue'}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Educational Tier Guide */}
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-3">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {educationLevel === 'primary' && (language === 'si' ? 'ප්‍රාථමික පාසල් මාදිලිය' : language === 'ta' ? 'தொடக்கக் கல்வி முறை' : 'Primary Explorer')}
                {educationLevel === 'al' && (language === 'si' ? 'උසස් පෙළ ජීව විද්‍යා මාදිලිය' : language === 'ta' ? 'உயர்தர உயிரியல் முறை' : 'A/L Biology Syllabus')}
                {educationLevel === 'medical' && (language === 'si' ? 'වෛද්‍ය පීඨ සායනික මාදිලිය' : language === 'ta' ? 'மருத்துவக் கல்லூரி முறை' : 'MBBS / Medical Student')}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {educationLevel === 'primary' && (
                  language === 'si' 
                    ? 'සරල වචන, විනෝදජනක කරුණු සහ ශබ්ද මගින් දරුවන්ට පහසුවෙන් ඉගෙනීමට සකසා ඇත.'
                    : language === 'ta'
                    ? 'எளிய சொற்கள், வேடிக்கையான உண்மைகள் மற்றும் குரல் மூலம் எளிதாகக் கற்கலாம்.'
                    : 'Joyful analogies, fun facts, and audio pronunciation tailored for young learners.'
                )}
                {educationLevel === 'al' && (
                  language === 'si' 
                    ? 'කායික විද්‍යාත්මක ක්‍රියාවලි, පටක ව්‍යුහය සහ විභාග ප්‍රශ්න කෙරෙහි අවධානය යොමු කර ඇත.'
                    : language === 'ta'
                    ? 'உடலியல் செயல்முறைகள், திசுக்கள் மற்றும் தேர்வு வினாக்களில் கவனம் செலுத்துகிறது.'
                    : 'Focusing on physiological pathways, membrane kinetics, and syllabus-aligned questions.'
                )}
                {educationLevel === 'medical' && (
                  language === 'si' 
                    ? 'ලතින් නාමකරණය, රුධිර හා ස්නායු සැපයුම, සහ සායනික රෝග විනිශ්චය ඇතුළත් වේ.'
                    : language === 'ta'
                    ? 'லத்தீன் பெயர்கள், இரத்த மற்றும் நரம்பு விநியோகம், மற்றும் மருத்துவக் கண்டறிதல்கள்.'
                    : 'Latin terminology, neurovascular triads, and USMLE/clinical vignette-based pathology.'
                )}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {language.toUpperCase()} • {activeSystemId.toUpperCase()}
              </span>
            </div>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-900 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} AnatomySphere 3D • Trilingual Human Anatomy Learning Platform
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>සිංහල</span>
            <span>•</span>
            <span>English</span>
            <span>•</span>
            <span>தமிழ்</span>
          </div>
        </div>
      </footer>

      {/* Floating AI Tutor Quick Trigger Button */}
      <button
        id="btn-floating-ai-tutor"
        onClick={() => setIsAITutorOpen(true)}
        title="Open Anatomy AI Assistant"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold shadow-2xl shadow-cyan-500/30 ring-2 ring-white/20 transition-all hover:scale-110 active:scale-95 flex items-center gap-2"
      >
        <MessageSquare className="w-5 h-5 text-slate-950" />
        <span className="text-xs hidden sm:inline">
          {language === 'si' ? 'AI සහායකයා' : language === 'ta' ? 'AI உதவி' : 'AI Tutor'}
        </span>
      </button>

      {/* System Mastery Quiz Modal */}
      {isQuizOpen && (
        <QuizModal
          systemId={activeSystemId}
          systemName={activeSystem.name[language]}
          level={educationLevel}
          language={language}
          questions={systemQuizzes}
          onClose={() => setIsQuizOpen(false)}
          onJumpToPart={handleSelectPart}
        />
      )}

      {/* AI Anatomy Tutor Modal */}
      {isAITutorOpen && (
        <AITutorModal
          systemId={activeSystemId}
          language={language}
          educationLevel={educationLevel}
          onClose={() => setIsAITutorOpen(false)}
        />
      )}

    </div>
  );
}
