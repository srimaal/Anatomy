import React, { useState } from 'react';
import { Language, EducationLevel, OrganSystemId } from '../types';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  BookOpen, 
  Stethoscope, 
  GraduationCap,
  MessageSquare
} from 'lucide-react';

interface AITutorModalProps {
  systemId: OrganSystemId;
  language: Language;
  educationLevel: EducationLevel;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export const AITutorModal: React.FC<AITutorModalProps> = ({
  systemId,
  language,
  educationLevel,
  onClose
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: language === 'si'
        ? (educationLevel === 'primary' 
            ? 'ආයුබෝවන් පුංචි යාළුවා! මම ඔබේ ත්‍රිමාණ ව්‍යුහ විද්‍යා සහායකයා. සිරුරේ අවයව ගැන ඕනෑම ප්‍රශ්නයක් මගෙන් අහන්න!'
            : educationLevel === 'al'
            ? 'ආයුබෝවන්! ජීව විද්‍යා (A/L) විෂය නිර්දේශයේ කායික විද්‍යාව සහ ව්‍යුහ විද්‍යාව පිළිබඳ ඕනෑම සංකල්පයක් පැහැදිලි කරගැනීමට ප්‍රශ්න යොමු කරන්න.'
            : 'ආයුබෝවන් වෛද්‍ය ශිෂ්‍ය මිත්‍රයා! සායනික ව්‍යුහ විද්‍යාව, රෝග විනිශ්චය සහ ශල්‍ය සන්ධිස්ථාන පිළිබඳ සාකච්ඡා කිරීමට මම සූදානම්.')
        : language === 'ta'
        ? (educationLevel === 'primary'
            ? 'வணக்கம் நண்பா! நான் உங்கள் 3D உடற்கூறியல் ஆசிரியர். உடலின் உறுப்புகள் பற்றி எந்தக் கேள்வியும் கேளுங்கள்!'
            : educationLevel === 'al'
            ? 'வணக்கம்! உயிரியல் (A/L) பாடத்திட்டத்தின் உடலியல் மற்றும் உடற்கூறியல் கருத்துக்களைக் கேட்கலாம்.'
            : 'வணக்கம் மருத்துவ மாணவரே! மருத்துவ உடற்கூறியல், நோய் அறிகுறிகள் மற்றும் அறுவைசிகிச்சை இடங்கள் பற்றி விவாதிக்கலாம்.')
        : (educationLevel === 'primary'
            ? 'Hello junior explorer! I am your 3D Anatomy Guide. Ask me anything about how your amazing body parts work!'
            : educationLevel === 'al'
            ? 'Welcome! I am your A/L Biology tutor. Ask me about physiological pathways, cellular mechanisms, or organ functions.'
            : 'Greetings! I am your Clinical Anatomy AI Mentor. Ask me about neurovascular pathways, surgical landmarks, and clinical vignettes.')
    }
  ]);

  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Suggested prompts per education level
  const suggestions = {
    primary: [
      {
        en: 'Why does my heart beat faster when I run?',
        si: 'මම දුවන විට මගේ හෘදය වේගයෙන් ගැහෙන්නේ ඇයි?',
        ta: 'நான் ஓடும்போது இதயம் வேகமாகத் துடிப்பது ஏன்?'
      },
      {
        en: 'How do my lungs take in oxygen?',
        si: 'පෙණහලු ඔක්සිජන් ලබාගන්නේ කොහොමද?',
        ta: 'நுரையீரல்கள் எவ்வாறு ஆக்ஸிஜனை உள்ளிழுக்கின்றன?'
      }
    ],
    al: [
      {
        en: 'Explain the electrical conduction cycle of the SA node and AV node',
        si: 'SA ගැටය සහ AV ගැටය හරහා හෘදයේ විද්‍යුත් සන්නායක චක්‍රය පැහැදිලි කරන්න',
        ta: 'SA மற்றும் AV முடிச்சுகளின் மின் கடத்தல் சுழற்சியை விளக்குக'
      },
      {
        en: 'How does the countercurrent multiplier work in the Loop of Henle?',
        si: 'හෙන්ලේ පුඩුවේ ප්‍රතිප්‍රවාහ ගුණක යාන්ත්‍රණය ක්‍රියාත්මක වන්නේ කෙසේද?',
        ta: 'ஹென்லே வளைவில் எதிர் மின்னோட்ட பெருக்கி எவ்வாறு செயல்படுகிறது?'
      }
    ],
    medical: [
      {
        en: 'Compare the arterial territories and ECG leads for LAD vs RCA infarctions',
        si: 'LAD සහ RCA කිරීටක ධමනි අවහිරතා වල ECG ඊයම් සහ සනාල කලාප සංසන්දනය කරන්න',
        ta: 'LAD மற்றும் RCA மாரடைப்புகளின் தமனி மற்றும் ஈசிஜி மாறுபாடுகளை ஒப்பிடுக'
      },
      {
        en: 'Detail the anatomical boundaries and clinical implications of the Pterion',
        si: 'ටෙරියොන් (Pterion) හි ව්‍යුහ විද්‍යාත්මක සීමා සහ සායනික සංකූලතා විස්තර කරන්න',
        ta: 'ஸ்டீரியான் (Pterion) உடற்கூறியல் எல்லைகள் மற்றும் மருத்துவ தாக்கங்களை விளக்குக'
      }
    ]
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isLoading) return;

    // Append user query
    setMessages(prev => [...prev, { role: 'user', text: query }]);
    setInputQuery('');
    setIsLoading(true);

    // Provide tailored educational response
    setTimeout(() => {
      let reply = '';
      const qLower = query.toLowerCase();

      if (educationLevel === 'primary') {
        if (qLower.includes('heart') || qLower.includes('හෘදය') || qLower.includes('இதயம்') || qLower.includes('run') || qLower.includes('දුවන')) {
          reply = language === 'si'
            ? 'ඔබ දුවන විට ඔබේ මාංශ පේශිවලට වැඩි ශක්තියක් සහ ඔක්සිජන් අවශ්‍ය වේ. ඒ නිසා හෘදය සුපිරි පොම්පයක් මෙන් වේගයෙන් ගැහෙමින් රුධිරය වේගයෙන් පේශි වෙත යවයි!'
            : language === 'ta'
            ? 'நீங்கள் ஓடும்போது தசைகளுக்கு அதிக சக்தியும் ஆக்ஸிஜனும் தேவைப்படுகிறது. அதனால் இதயம் வேகமாகத் துடித்து அதிக இரத்தத்தை அனுப்புகிறது!'
            : 'When you run or play, your leg muscles work extra hard and need lots of fresh oxygen and fuel! Your heart pumps faster so it can deliver that energy right away!';
        } else {
          reply = language === 'si'
            ? 'අපේ සිරුර පුදුමාකාර යන්ත්‍රයක් වගෙයි! සෑම අවයවයක්ම එකිනෙකාට උදව් කරමින් අප නිරෝගීව තබයි. 3D ආකෘතියේ ඇති අවයව මත ක්ලික් කර ඒවා තවත් පරීක්ෂා කර බලන්න!'
            : language === 'ta'
            ? 'நமது உடல் ஒரு அற்புதமான இயந்திரம்! ஒவ்வொரு உறுப்பும் ஒன்றாகச் சேர்ந்து நம்மை ஆரோக்கியமாக வைக்கின்றன. 3D மாதிரியில் உள்ள உறுப்புகளைத் தொட்டு மேலும் கற்கலாம்!'
            : 'The human body is an incredible team! Every organ has a special superpower to keep you strong, healthy, and happy. Try clicking on the 3D model to explore more!';
        }
      } else if (educationLevel === 'al') {
        if (qLower.includes('sa node') || qLower.includes('av node') || qLower.includes('සන්නායක') || qLower.includes('மின்')) {
          reply = language === 'si'
            ? 'හෘදයේ SA ගැටය ස්වයංජනක ක්‍රියා විභවයක් ජනනය කරයි. මෙම විද්‍යුත් තරංග ආලින්ද පේශි හරහා AV ගැටය වෙත ගමන් කරයි. AV ගැටය තුළ තත්පර 0.1 ක ප්‍රමාදයක් සිදුවන අතර, අනතුරුව හිස්ගේ කදම්භය සහ පර්කින්ජි තන්තු ඔස්සේ කෝෂිකා විධ්‍රැවීකරණය කරමින් කෝෂිකා හැකිලීම සිදු කරයි.'
            : language === 'ta'
            ? 'SA முடிச்சு தானியங்கி மின் தூண்டலை உருவாக்குகிறது. இது AV முடிச்சை அடையும் போது 0.1 வினாடி தாமதம் ஏற்பட்டு, பின் பர்கின்ஜி இழைகள் மூலம் இதயவறைகளை சுருங்கச் செய்கிறது.'
            : 'The SA node initiates spontaneous Phase 4 depolarization. Impulses travel through internodal pathways to the AV node, which imposes an essential ~0.1s delay to permit ventricular diastole filling, before propagating through the Bundle of His and Purkinje network to trigger coordinated ventricular systole.';
        } else {
          reply = language === 'si'
            ? 'G.C.E. උසස් පෙළ ජීව විද්‍යා විෂය නිර්දේශයේ අවයව පද්ධතිවල කායික විද්‍යාත්මක ක්‍රියාවලීන් (උදා: පීඩන අනුක්‍රමණ, හෝමෝනමය පාලනය, සෛලීය පටල විභව) මෙම 3D ආකෘතිය ඔස්සේ ඔබට පහසුවෙන් අධ්‍යයනය කළ හැක.'
            : language === 'ta'
            ? 'உயர்தர உயிரியல் பாடத்திட்டத்தின் முக்கிய உடலியல் கோட்பாடுகள் (அழுத்தம், ஹார்மோன்கள், நரம்பு சமிக்ஞைகள்) இந்த 3D மாதிரியில் தெளிவாக விளக்கப்பட்டுள்ளன.'
            : 'In A/L Biology, remember to focus on the structure-function relationship: membrane partial pressures for alveolar exchange, the Starling forces in capillaries, and the electrophysiological conduction hierarchy in the myocardium.';
        }
      } else {
        // Medical Student Mode
        if (qLower.includes('lad') || qLower.includes('rca') || qLower.includes('ecg')) {
          reply = language === 'si'
            ? 'LAD ධමනිය වම් කෝෂිකාවේ පූර්ව බිත්තිය සහ අන්තර් කෝෂිකා ප්‍රාචීරයෙන් 2/3ක් සපයයි (ECG V1-V4 හි ST elevation). RCA ධමනිය අධර බිත්තිය සහ SA/AV ගැට සපයයි (ECG II, III, aVF හි ST elevation). RCA ආබාධවලදී bradycardia සහ AV block ඇතිවීමේ වැඩි අවදානමක් පවතී.'
            : language === 'ta'
            ? 'LAD தமனி இதயத்தின் முற்புறத்திற்கு இரத்தம் வழங்குகிறது (ECG V1-V4). RCA தமனி அடிப்பகுதிக்கும் SA/AV முடிச்சுகளுக்கும் இரத்தம் வழங்குகிறது (ECG II, III, aVF). RCA அடைப்பில் இதயத் துடிப்பு குறையலாம்.'
            : 'LAD occlusion perfuses the anterior LV wall and anterior 2/3 of the interventricular septum, presenting with ST elevation in V1-V4 (high risk of cardiogenic shock). RCA occlusion causes inferior wall STEMI with ST elevation in leads II, III, and aVF, commonly accompanied by sinus bradycardia and high-degree AV nodal blocks due to nodal artery compromise.';
        } else {
          reply = language === 'si'
            ? 'වෛද්‍ය සිසුන් සඳහා: අදාළ අවයවයේ ධමනි සැපයුම, ශිරා අපවහනය, වසා ජාලය සහ ස්නායු සැපයුම මෙන්ම ඒ ආශ්‍රිත සායනික සංකූලතා (Clinical Correlates) සහ ශල්‍ය ප්‍රවේශ පිළිබඳ අවධානය යොමු කරන්න.'
            : language === 'ta'
            ? 'மருத்துவ மாணவர்களுக்கான குறிப்பு: இரத்த விநியோகம், நரம்பு மண்டலம் மற்றும் அது தொடர்பான நோயியல் (Pathology) மற்றும் அறுவைசிகிச்சை அணுகுமுறைகளை நினைவில் கொள்க.'
            : 'For clinical board review, always correlate anatomical vascular boundaries with cross-sectional imaging and clinical pathology: for example, the Pterion overlies the anterior division of the Middle Meningeal Artery, where fractures produce an epidural hematoma presenting with a classic lucid interval.';
        }
      }

      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        id="ai-tutor-modal"
        className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[650px] max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>
                  {language === 'si' ? 'ත්‍රිමාණ කායික විද්‍යා AI ගුරුතුමා' : language === 'ta' ? 'உடற்கூறியல் AI வழிகாட்டி' : 'Anatomy & Physiology AI Tutor'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono">
                  {educationLevel.toUpperCase()}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                {language === 'si' ? 'සිංහල, English සහ தமிழ் භාෂාවලින් ප්‍රශ්න අසන්න' : language === 'ta' ? 'தமிழ், English மற்றும் சிங்களத்தில் கேட்கலாம்' : 'Instant multilingual anatomical insights'}
              </p>
            </div>
          </div>

          <button
            id="btn-close-ai-tutor"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, idx) => (
            <div 
              key={idx}
              className={`flex items-start gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                m.role === 'user' ? 'bg-cyan-600 text-slate-950' : 'bg-slate-800 text-cyan-400'
              }`}>
                {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div className={`max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                m.role === 'user'
                  ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none'
                  : 'bg-slate-950/80 border border-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono animate-pulse">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Thinking & analyzing anatomical pathways...</span>
            </div>
          )}
        </div>

        {/* Suggestions pills */}
        <div className="px-4 py-2 bg-slate-950/40 border-t border-slate-800/80 flex flex-wrap gap-1.5">
          {suggestions[educationLevel].map((item, i) => (
            <button
              key={i}
              onClick={() => handleSend(item[language])}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
            >
              💡 {item[language]}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center gap-2">
          <input
            id="ai-tutor-input"
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={
              language === 'si'
                ? 'ඕනෑම ව්‍යුහ විද්‍යා ප්‍රශ්නයක් විමසන්න...'
                : language === 'ta'
                ? 'உடற்கூறியல் கேள்விகளை இங்கே கேட்கவும்...'
                : 'Ask any anatomy, histology, or clinical question...'
            }
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            id="btn-send-ai-tutor"
            onClick={() => handleSend()}
            disabled={!inputQuery.trim() || isLoading}
            className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 transition-all shadow-lg shadow-cyan-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
