import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QuizQuestion, Language, EducationLevel, OrganSystemId } from '../types';
import { 
  X, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  Award, 
  RotateCcw, 
  HelpCircle, 
  ArrowRight,
  BookOpen,
  Stethoscope,
  GraduationCap
} from 'lucide-react';

interface QuizModalProps {
  systemId: OrganSystemId;
  systemName: string;
  level: EducationLevel;
  language: Language;
  questions: QuizQuestion[];
  onClose: () => void;
  onJumpToPart?: (partId: string) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  systemId,
  systemName,
  level,
  language,
  questions,
  onClose,
  onJumpToPart
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ questionId: string; selected: number; isCorrect: boolean }[]>([]);

  const currentQ = questions[currentIndex];

  // Handle option click
  const handleSelectOption = (index: number) => {
    if (hasSubmitted) return;
    setSelectedOption(index);
  };

  // Submit current answer
  const handleSubmitAnswer = () => {
    if (selectedOption === null || hasSubmitted) return;

    const isCorrect = selectedOption === currentQ.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setUserAnswers(prev => [
      ...prev,
      {
        questionId: currentQ.id,
        selected: selectedOption,
        isCorrect
      }
    ]);
    setHasSubmitted(true);
  };

  // Next Question or Finish
  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasSubmitted(false);
    } else {
      setIsCompleted(true);
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }
    }
  };

  // Restart Quiz
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasSubmitted(false);
    setScore(0);
    setIsCompleted(false);
    setUserAnswers([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        id="anatomy-quiz-modal"
        className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-xl ${
              level === 'primary' 
                ? 'bg-amber-500/20 text-amber-400' 
                : level === 'al' 
                ? 'bg-cyan-500/20 text-cyan-400' 
                : 'bg-emerald-500/20 text-emerald-400'
            }`}>
              {level === 'primary' && <BookOpen className="w-5 h-5" />}
              {level === 'al' && <GraduationCap className="w-5 h-5" />}
              {level === 'medical' && <Stethoscope className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>{systemName}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-normal">
                  {level === 'primary' ? 'Primary' : level === 'al' ? 'A/L Biology' : 'MBBS/Medical'}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                {language === 'si' ? 'ප්‍රශ්නාවලි පරීක්ෂණය' : language === 'ta' ? 'அறிவாற்றல் வினாடி வினா' : 'System Mastery Quiz'}
              </p>
            </div>
          </div>

          <button
            id="btn-close-quiz-modal"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {questions.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              <p>No questions currently loaded for this mode.</p>
            </div>
          ) : !isCompleted ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                <span>
                  {language === 'si' ? 'ප්‍රශ්නය' : language === 'ta' ? 'கேள்வி' : 'Question'} {currentIndex + 1} / {questions.length}
                </span>
                <span>
                  {language === 'si' ? 'ලකුණු' : language === 'ta' ? 'மதிப்பெண்' : 'Score'}: {score}
                </span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-6">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* MEDICAL LEVEL: Clinical Vignette Scenario */}
              {currentQ.clinicalScenario && (
                <div className="mb-4 p-4 rounded-xl bg-slate-950 border border-indigo-500/30 text-xs text-indigo-200/90 leading-relaxed font-mono">
                  <div className="flex items-center gap-1.5 text-indigo-400 font-bold mb-1 uppercase tracking-wider text-[10px]">
                    <Stethoscope className="w-3.5 h-3.5" />
                    <span>Clinical Vignette / Patient Presentation:</span>
                  </div>
                  {currentQ.clinicalScenario[language]}
                </div>
              )}

              {/* Question Text */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-6 leading-relaxed">
                {currentQ.question[language]}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQ.correctIndex;

                  let btnStyle = 'bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 text-slate-200';
                  if (isSelected && !hasSubmitted) {
                    btnStyle = 'bg-cyan-500/20 border-cyan-400 text-cyan-200 ring-2 ring-cyan-500/50';
                  } else if (hasSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/40';
                    } else if (isSelected && !isCorrect) {
                      btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-200 ring-2 ring-rose-500/40';
                    } else {
                      btnStyle = 'opacity-40 border-slate-800 text-slate-500';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      id={`quiz-opt-${currentIndex}-${idx}`}
                      onClick={() => handleSelectOption(idx)}
                      disabled={hasSubmitted}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium flex items-start gap-3 transition-all duration-200 ${btnStyle}`}
                    >
                      <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-current text-xs font-bold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1 mt-0.5">{opt[language]}</span>
                      {hasSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      )}
                      {hasSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Rationale / Explanation Box */}
              {hasSubmitted && (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 mb-6 text-xs text-slate-300 animate-fadeIn">
                  <div className="font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {language === 'si' ? 'විවරණය' : language === 'ta' ? 'விளக்கம்' : 'Educational Rationale'}
                    </span>
                  </div>
                  <p className="leading-relaxed">{currentQ.explanation[language]}</p>

                  {currentQ.relatedPartId && onJumpToPart && (
                    <button
                      onClick={() => {
                        onJumpToPart(currentQ.relatedPartId!);
                        onClose();
                      }}
                      className="mt-2 text-[11px] text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>
                        {language === 'si' ? '3D ආකෘතියේ මෙම අවයවය පරීක්ෂා කරන්න' : language === 'ta' ? 'இந்த உறுப்பை 3D மாதிரியில் காண்க' : 'Inspect this structure in 3D'}
                      </span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end gap-3">
                {!hasSubmitted ? (
                  <button
                    id="btn-submit-quiz-answer"
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    {language === 'si' ? 'පිළිතුර තහවුරු කරන්න' : language === 'ta' ? 'பதிலை சமர்ப்பிக்கவும்' : 'Submit Answer'}
                  </button>
                ) : (
                  <button
                    id="btn-next-quiz-question"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    <span>
                      {currentIndex + 1 === questions.length 
                        ? (language === 'si' ? 'ප්‍රතිඵලය බලන්න' : language === 'ta' ? 'முடிவுகளைக் காண்க' : 'View Results')
                        : (language === 'si' ? 'ඊළඟ ප්‍රශ්නය' : language === 'ta' ? 'அடுத்த கேள்வி' : 'Next Question')}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>
          ) : (
            /* Quiz Completed Score Summary */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 to-amber-400 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-cyan-500/20">
                <Award className="w-9 h-9 text-slate-950" />
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2">
                {score === questions.length
                  ? (language === 'si' ? 'විශිෂ්ටයි! සම්පූර්ණ ලකුණු!' : language === 'ta' ? 'அற்புதம்! முழு மதிப்பெண்!' : 'Outstanding Mastery!')
                  : score >= questions.length / 2
                  ? (language === 'si' ? 'හොඳ උත්සාහයක්!' : language === 'ta' ? 'சிறந்த முயற்சி!' : 'Well Done!')
                  : (language === 'si' ? 'නැවත පුහුණු වන්න!' : language === 'ta' ? 'மீண்டும் பயிற்சி செய்க!' : 'Keep Practicing!')}
              </h3>

              <p className="text-sm text-slate-400 mb-6">
                {language === 'si' 
                  ? `ඔබ ප්‍රශ්න ${questions.length} න් ${score} කට නිවැරදි පිළිතුරු ලබා දුන්නා.`
                  : language === 'ta'
                  ? `${questions.length} கேள்விகளில் ${score} கேள்விகளுக்கு சரியாக பதிலளித்துள்ளீர்கள்.`
                  : `You answered ${score} out of ${questions.length} questions correctly.`}
              </p>

              {/* Badges / Stars for Primary students */}
              {level === 'primary' && (
                <div className="flex justify-center gap-2 mb-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span 
                      key={i}
                      className={`text-2xl ${i < Math.ceil((score / questions.length) * 3) ? 'opacity-100 scale-110' : 'opacity-30'}`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              )}

              <div className="flex justify-center gap-3">
                <button
                  id="btn-restart-quiz"
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>
                    {language === 'si' ? 'නැවත උත්සාහ කරන්න' : language === 'ta' ? 'மீண்டும் முயற்சி செய்' : 'Try Again'}
                  </span>
                </button>

                <button
                  id="btn-finish-quiz"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-lg shadow-cyan-500/20"
                >
                  {language === 'si' ? 'අවසන් කරන්න' : language === 'ta' ? 'முடிக்கவும்' : 'Back to 3D Model'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
