import { OrganPart, SystemInfo } from '../types';
import { ADDITIONAL_SYSTEMS_INFO, ADDITIONAL_ORGAN_PARTS } from './additionalSystemsData';

const BASE_SYSTEMS_INFO: SystemInfo[] = [
  {
    id: 'fullbody',
    name: {
      en: 'Full Body Anatomy',
      si: 'සම්පූර්ණ ශරීරය',
      ta: 'முழு உடல் உடற்கூறியல்'
    },
    tagline: {
      en: 'Holistic human organism, somatic topography, and integrated organs',
      si: 'සමස්ත පද්ධති එකමුතුවෙන් සමන්විත පූර්ණ මිනිස් ශරීරය',
      ta: 'மனித உடலின் ஒருங்கிணைந்த முழுமையான கட்டமைப்பு மற்றும் உடற்கூறியல்'
    },
    iconName: 'User',
    accentColor: '#38bdf8',
    modelType: 'fullbody',
    overview: {
      primary: {
        en: 'Your body is an incredible living machine! All your organ systems — brain, heart, lungs, stomach, kidneys, and bones — work together like a great orchestra to help you run, jump, think, eat, and stay healthy.',
        si: 'ඔබේ ශරීරය පුදුමාකාර ජීවී යන්ත්‍රයකි! මොළය, හෘදය, පෙනහළු, ආමාශය, වකුගඩු සහ අස්ථි යන සියලුම අවයව පද්ධති එකිනෙකට එක්වී ඔබට සිතීමට, දුවන්නට සහ නිරෝගීව සිටීමට උපකාරී වේ.',
        ta: 'உங்கள் உடல் ஒரு அற்புதமான வாழும் இயந்திரம்! மூளை, இதயம், நுரையீரல், இரைப்பை, சிறுநீரகங்கள் மற்றும் எலும்புகள் ஆகியவை இணைந்து நீங்கள் ஓட, சிந்திக்க, சாப்பிட மற்றும் ஆரோக்கியமாக வாழ உதவுகின்றன.'
      },
      al: {
        en: 'The human organism integrates structural hierarchies across the axial and appendicular skeleton, visceral organ cavities (cranial, thoracic, abdominal, pelvic), and major neurovascular conduits maintaining systemic homeostasis, metabolic equilibrium, and biomechanical locomotion.',
        si: 'මිනිස් සිරුර අක්ෂක හා උපග්‍රන්ථ සැකිල්ල, දේහ කුහර (කපාල, උරස්, උදර, ශ්‍රෝණි) සහ ප්‍රධාන ස්නායු-සනාල මාර්ග මගින් එකට බැඳී පවතින පද්ධතිමය සමස්ථිතිය, පරිවෘත්තීය සහ ජෛව යාන්ත්‍රික චලනයන් ක්‍රියාත්මක කරයි.',
        ta: 'மனித உடல் அச்சு மற்றும் இணைப்பு எலும்புக்கூடு, உடற்குழிகள் (மண்டை ஓடு, மார்பு, வயிறு, இடுப்பு) மற்றும் நரம்பு-நாள அமைப்புகள் மூலம் உடலின் சமநிலையைப் பேணுகிறது.'
      },
      medical: {
        en: 'Comprehensive somatic topography encompassing cranial, visceral, retroperitoneal, and pelvic compartments. Clinical diagnosis relies on spatial cross-sectional anatomy, fascial planes, referred pain dermatomes, lymph drainage pathways, and regional anatomical boundaries during trauma, surgical access, and multi-system pathophysiology.',
        si: 'කපාල, උරස්, උදර, සහ ශ්‍රෝණි කුහරවල අවකාශීය සබඳතා, චර්ම ඛණ්ඩ (Dermatomes), වසා ප්‍රවාහන මාර්ග සහ බහු-පද්ධති කායික විද්‍යාත්මක ක්‍රියාවලීන් පූර්ණ ශරීර ව්‍යූහ විද්‍යාව තුළින් විමසා බැලේ.',
        ta: 'மண்டை ஓடு, மார்பு, வயிறு மற்றும் இடுப்புக் குழிகளின் இடஞ்சார்ந்த உடற்கூறியல், நரம்புத் தடம் மற்றும் அறுவைசிகிச்சை அணுகல் எல்லைகளை முழு உடல் உடற்கூறியல் விவரிக்கிறது.'
      }
    },
    statistics: [
      {
        label: { en: 'Total Bones', si: 'මුළු අස්ථි ගණන', ta: 'மொத்த எலும்புகள்' },
        value: '206'
      },
      {
        label: { en: 'Vital Organs', si: 'ප්‍රධාන අවයව', ta: 'முக்கிய உறுப்புகள்' },
        value: '78'
      },
      {
        label: { en: 'Vessel Network', si: 'මුළු සනාල දිග', ta: 'மொத்த நாள நீளம்' },
        value: '~100,000 km'
      }
    ]
  },
  {
    id: 'circulatory',
    name: {
      en: 'Circulatory System',
      si: 'රුධිර සංසරණ පද්ධතිය',
      ta: 'சுற்றோட்ட தொகுதி'
    },
    tagline: {
      en: 'The body’s dynamic blood highway and cardiac pump',
      si: 'ශරීරයේ රුධිර ප්‍රවාහන මාවත සහ හෘද පොම්පය',
      ta: 'உடலின் இரத்த விநியோக பாதை மற்றும் இதய பம்ப்'
    },
    iconName: 'Heart',
    accentColor: '#ef4444',
    modelType: 'heart',
    overview: {
      primary: {
        en: 'Your heart is a superhero muscle that never gets tired! It beats about 100,000 times every day, pumping blood with oxygen and nutrients to every part of your body from your head to your toes.',
        si: 'ඔබේ හෘදය කිසිදා විවේක නොගන්නා සුපිරි මාංශ පේශියකි! එය දිනකට 100,000 වතාවක් පමණ ගැහෙමින්, ඔක්සිජන් සහ පෝෂ්‍ය පදාර්ථ ඔබේ හිසේ සිට පාදාන්තය දක්වා මුළු සිරුරටම පොම්ප කරයි.',
        ta: 'உங்கள் இதயம் எப்போதும் சோர்வடையாத ஒரு சூப்பர் தசை! இது தினமும் சுமார் 100,000 முறை துடித்து, ஆக்ஸிஜன் மற்றும் ஊட்டச்சத்துக்களை தலை முதல் கால் வரை உடலின் அனைத்து பகுதிகளுக்கும் அனுப்புகிறது.'
      },
      al: {
        en: 'A closed, double circulatory system in humans consisting of pulmonary and systemic circuits. Driven by the four-chambered myogenic heart, it maintains cardiac output (~5 L/min), arterial blood pressure, and tissue perfusion regulated by the autonomic nervous system and baroreceptors.',
        si: 'මිනිසා තුළ පෙනහළු සහ පද්ධතිමය සංසරණ දෙකකින් සමන්විත සංවෘත ද්විත්ව රුධිර සංසරණ පද්ධතියකි. කුටීර හතරකින් යුත් ස්වයංජනක හෘදය මගින් ක්‍රියාත්මක වන අතර, ස්නායු පද්ධතිය හා පීඩන ප්‍රතිග්‍රාහක මගින් හෘද ප්‍රතිදානය (විනාඩියකට ලීටර් 5ක් පමණ) පාලනය වේ.',
        ta: 'மனிதர்களில் நுரையீரல் மற்றும் தொகுதி சுற்றோட்டங்களைக் கொண்ட மூடிய இரட்டை சுற்றோட்ட தொகுதி. நான்கு அறைகளைக் கொண்ட இதயத்தால் இயக்கப்பட்டு, இதய வெளியீடு (நிமிடத்திற்கு ~5L) மற்றும் இரத்த அழுத்தத்தை நரம்பு மண்டலம் மூலம் ஒழுங்குபடுத்துகிறது.'
      },
      medical: {
        en: 'The cardiovascular system orchestrates hemodynamics, peripheral vascular resistance, and microvascular exchange. Clinical mastery requires understanding cardiac electrophysiology (SA/AV nodal pathway), Frank-Starling mechanics, coronary perfusion, valvular dynamics, and common pathologies like ischemia and heart failure.',
        si: 'හෘද වාහිනී පද්ධතිය රුධිර පීඩනය, පර්යන්ත සනාල ප්‍රතිරෝධය සහ ක්ෂුද්‍ර සනාල හුවමාරුව කළමනාකරණය කරයි. හෘද විද්‍යුත් කායික විද්‍යාව (SA/AV ගැට), කිරීටක රුධිර සැපයුම, කපාට ක්‍රියාකාරිත්වය සහ හෘදයාබාධ වැනි රෝගී තත්ත්ව හඳුනාගැනීම මෙහිදී අත්‍යවශ්‍ය වේ.',
        ta: 'கார்டியோவாஸ்குலர் அமைப்பு இரத்த ஓட்டம் மற்றும் நுண்வாஸ்குலர் பரிமாற்றத்தை நிர்வகிக்கிறது. இதய மின்உடலியல் (SA/AV முனைகள்), கரோனரி இரத்த ஓட்டம், வால்வு இயக்கவியல் மற்றும் மாரடைப்பு போன்ற நோயியல் நிலைகளை புரிந்துகொள்வது மருத்துவ ரீதியாக மிக முக்கியமானது.'
      }
    },
    statistics: [
      {
        label: { en: 'Daily Beats', si: 'දෛනික හෘද ස්පන්දන', ta: 'தினசரி துடிப்புகள்' },
        value: '~100,000'
      },
      {
        label: { en: 'Cardiac Output', si: 'හෘද ප්‍රතිදානය', ta: 'இதய வெளியீடு' },
        value: '5.0 L/min'
      },
      {
        label: { en: 'Vessel Network', si: 'සනාල ජාලය', ta: 'நாளங்களின் நீளம்' },
        value: '100,000 km'
      }
    ]
  },
  {
    id: 'respiratory',
    name: {
      en: 'Respiratory System',
      si: 'ශ්වසන පද්ධතිය',
      ta: 'சுவாச தொகுதி'
    },
    tagline: {
      en: 'Gas exchange powerhouse delivering vital oxygen',
      si: 'ජීවය දෙන ඔක්සිජන් ලබාදෙන වායු හුවමාරු පද්ධතිය',
      ta: 'உயிரளிக்கும் ஆக்ஸிஜனை வழங்கும் வாயுப் பரிமாற்ற அமைப்பு'
    },
    iconName: 'Wind',
    accentColor: '#06b6d4',
    modelType: 'lungs',
    overview: {
      primary: {
        en: 'Your lungs work like two soft, bouncy sponges inside your chest! Every time you breathe in, they fill up with fresh air and pass oxygen into your blood, and when you breathe out, they throw away carbon dioxide.',
        si: 'ඔබේ පෙණහලු පපුව ඇතුලේ ඇති මෘදු ස්පොන්ජ් බැලූන් දෙකක් වැනියි! ඔබ හුස්ම ගන්නා සෑම විටම ඒවා නැවුම් වාතයෙන් පිරී රුධිරයට ඔක්සිජන් ලබාදෙන අතර, පිට කරන විට කාබන් ඩයොක්සයිඩ් ඉවත් කරයි.',
        ta: 'உங்கள் நுரையீரல்கள் மார்பில் உள்ள இரண்டு மென்மையான பஞ்சு போன்ற பலூன்கள்! நீங்கள் மூச்சை உள்ளிழுக்கும் போது அவை புதிய காற்றை நிரப்பி இரத்தத்திற்கு ஆக்ஸிஜனை வழங்குகின்றன, மூச்சை வெளிவிடும் போது கரியமில வாயுவை வெளியேற்றுகின்றன.'
      },
      al: {
        en: 'Comprises conducting zone (trachea, bronchi, bronchioles) and respiratory zone (alveoli). Driven by negative pressure ventilation created by diaphragm and intercostal muscles. Gas exchange across the alveolar-capillary membrane obeys Fick’s law of diffusion and oxygen-hemoglobin dissociation dynamics.',
        si: 'ප්‍රවාහන කලාපය (ශ්වාසනාලය, ශ්වාසනාලිකා) සහ ශ්වසන කලාපයෙන් (වායු කෝෂ) සමන්විතය. ප්‍රාචීරය සහ අන්තර්පාර්ශුක පේශි මගින් ඍණ පීඩන වාතාශ්‍රය ඇති කරයි. වායු කෝෂ-කේශනාලිකා පටලය හරහා විසරණය සිදුවන අතර හිමොග්ලොබින් මගින් ඔක්සිජන් පරිවහනය වේ.',
        ta: 'சுவாசப் பாதை (மூச்சுக்குழாய், மூச்சுக்கிளைக்குழாய்) மற்றும் சுவாசப் பகுதிகளைக் (நுண்ணறைகள்) கொண்டது. உதரவிதானம் மற்றும் விலா எலும்பிடை தசைகளால் ஏற்படும் எதிர்மறை அழுத்தத்தால் காற்றோட்டம் நிகழ்கிறது. வாயுப் பரிமாற்றம் மற்றும் ஹீமோகுளோபின் ஆக்சிஜன் பிணைப்பு இதில் முக்கிய பங்கு வகிக்கிறது.'
      },
      medical: {
        en: 'Pulmonary physiology governs ventilation-perfusion (V/Q) matching, compliance, surfactant dynamics (dipalmitoylphosphatidylcholine), and arterial blood gas (ABG) homeostasis. Clinical entities include ARDS, COPD, tension pneumothorax, pulmonary embolism, and asthma exacerbations.',
        si: 'පෙනහළු කායික විද්‍යාව මගින් වාතාශ්‍රය-පරිවහන අනුපාතය (V/Q), පෙනහළු සුනම්‍යතාව, සර්ෆැක්ටන්ට් ක්‍රියාකාරිත්වය සහ රුධිර වායු සමතුලිතතාව පාලනය කරයි. ඇදුම, නියුමෝනියාව සහ පෙනහළු අවහිරතා වැනි සායනික තත්ත්ව මේ හා බැඳී පවතී.',
        ta: 'நுரையீரல் உடலியல் காற்றோட்டம்-இரத்த ஓட்ட விகிதம் (V/Q), சர்பாக்டன்ட் செயல்பாடு மற்றும் இரத்த வாயு சமநிலையைக் கட்டுப்படுத்துகிறது. ஆஸ்துமா, நிமோனியா, மற்றும் நுரையீரல் அடைப்பு போன்ற மருத்துவ நிலைகளை அறிவது அவசியமாகும்.'
      }
    },
    statistics: [
      {
        label: { en: 'Daily Breaths', si: 'දෛනික හුස්ම වාර', ta: 'தினசரி சுவாசங்கள்' },
        value: '~22,000'
      },
      {
        label: { en: 'Alveoli Count', si: 'වායු කෝෂ ගණන', ta: 'நுண்ணறைகள் எண்ணிக்கை' },
        value: '480 Million'
      },
      {
        label: { en: 'Surface Area', si: 'මතුපිට වර්ගඵලය', ta: 'மேற்பரப்பு அளவு' },
        value: '70 - 100 m²'
      }
    ]
  },
  {
    id: 'nervous',
    name: {
      en: 'Brain & Nervous System',
      si: 'මොළය සහ ස්නායු පද්ධතිය',
      ta: 'மூளை மற்றும் நரம்புத் தொகுதி'
    },
    tagline: {
      en: 'The master biological supercomputer: cerebral lobes, deep brain, and neural networks',
      si: 'ප්‍රධාන ජෛව සුපිරි පරිගණකය: මස්තිෂ්ක පාලි, අභ්‍යන්තර මොළය සහ ස්නායු ජාල',
      ta: 'தலைசிறந்த உயிரியல் சூப்பர் கணினி: பெருமூளை மடல்கள், உள் மூளை மற்றும் நரம்பு நெட்வொர்க்குகள்'
    },
    iconName: 'Brain',
    accentColor: '#a855f7',
    modelType: 'brain',
    overview: {
      primary: {
        en: 'The brain is the commander-in-chief of your body! It thinks, remembers, feels joy, and sends quick lightning-fast messages through nerves so you can move, see, speak, and dream.',
        si: 'මොළය කියන්නේ ඔබේ සිරුරේ මහා පරිගණක ප්‍රධානියා! එය සිතයි, මතක තබා ගනියි, සතුට දුක විඳියි. තවද විදුලි වේගයෙන් පණිවිඩ යවමින් ඔබට ඇවිදින්න, කතා කරන්න, සෙල්ලම් කරන්න සහ හීන දකින්න උදව් කරයි.',
        ta: 'மூளை என்பது உங்கள் உடலின் தலைமை தளபதி போன்றது! அது சிந்திக்கிறது, நினைவில் கொள்கிறது, மின்னல் வேகத்தில் நரம்புகள் மூலம் செய்திகளை அனுப்பி நீங்கள் ஓட, பேச, பார்க்க உதவுகிறது.'
      },
      al: {
        en: 'Comprises Central Nervous System (Brain and Spinal Cord) and Peripheral Nervous System (Somatic and Autonomic divisions). Signal transmission relies on action potentials (resting potential -70mV, Na+/K+ ATPase pump) and neurotransmitter release across synaptic clefts.',
        si: 'මධ්‍යම ස්නායු පද්ධතිය (මොළය සහ සුෂුම්නාව) හා පර්යන්ත ස්නායු පද්ධතියෙන් සමන්විත වේ. සංඥා සම්ප්‍රේෂණය ක්‍රියා විභවයන් (විවේක විභවය -70mV, සෝඩියම්-පොටෑසියම් පොම්පය) සහ උපාගමික විවර හරහා ස්නායු සම්ප්‍රේෂක මගින් සිදු වේ.',
        ta: 'மத்திய நரம்பு மண்டலம் (மூளை மற்றும் தண்டுவடம்) மற்றும் புற நரம்பு மண்டலத்தைக் கொண்டது. சமிக்ஞைகள் செயல் மின் அழுத்தம் (-70mV ஓய்வு நிலை) மற்றும் நரம்பியக்கடத்திகள் மூலம் கடத்தப்படுகின்றன.'
      },
      medical: {
        en: 'Neuroanatomy requires precise localization of upper vs lower motor neuron lesions, cranial nerve pathways (I through XII), Circle of Willis cerebral arterial architecture, CSF dynamics through ventricles, and neurodegenerative disorders like Parkinson’s and stroke syndromes.',
        si: 'ස්නායු ව්‍යුහ විද්‍යාවේදී මොළයේ රුධිර සැපයුම (විලිස් චක්‍රය), කපාල ස්නායු 12, මස්තිෂ්ක සුෂුම්නා තරල පරිවහනය සහ ආඝාතය (Stroke) හෝ පාකින්සන් වැනි සායනික රෝග පිළිබඳ ගැඹුරු අවබෝධය අත්‍යවශ්‍ය වේ.',
        ta: 'நியூரோஅனாடமியில் மூளை இரத்த ஓட்டம் (வில்லிஸ் வட்டம்), 12 மண்டை நரம்புகள், பெருமூளை முதுகுத் தண்டு திரவம் மற்றும் பக்கவாதம் போன்ற மருத்துவக் கோளாறுகள் பற்றிய துல்லியமான அறிவு தேவைப்படுகிறது.'
      }
    },
    statistics: [
      {
        label: { en: 'Neurons in Brain', si: 'මොළයේ නියුරෝන සංඛ්‍යාව', ta: 'நியூரான்கள் எண்ணிக்கை' },
        value: '86 Billion'
      },
      {
        label: { en: 'Signal Speed', si: 'සංඥා වේගය', ta: 'சமிக்ஞை வேகம்' },
        value: 'Up to 430 km/h'
      },
      {
        label: { en: 'Synaptic Connections', si: 'උපාගම සංඛ්‍යාව', ta: 'இணைப்புகள் எண்ணிக்கை' },
        value: '100+ Trillion'
      }
    ]
  },
  {
    id: 'skeletal',
    name: {
      en: 'Skeletal System',
      si: 'සැකිලි පද්ධතිය',
      ta: 'எலும்புக்கூட்டுத் தொகுதி'
    },
    tagline: {
      en: 'Structural framework protecting organs and facilitating motion',
      si: 'ඉන්ද්‍රියයන් ආරක්ෂා කරන සහ චලනයට උපකාරී වන ව්‍යුහමය රාමුව',
      ta: 'உறுப்புகளைப் பாதுகாத்து இயக்கத்தை எளிதாக்கும் எலும்புச் சட்டம்'
    },
    iconName: 'Bone',
    accentColor: '#f59e0b',
    modelType: 'skeleton',
    overview: {
      primary: {
        en: 'Your skeleton is like the strong steel frame of a tall building! Without your 206 bones, you would be floppy like a jellyfish. Bones protect your heart and brain, and let you run and jump.',
        si: 'ඔබේ ඇටසැකිල්ල උස ගොඩනැගිල්ලක ඇති ශක්තිමත් යකඩ රාමුවක් වගෙයි! ඔබේ සිරුරේ අස්ථි 206 නොතිබුණා නම් ඔබ ජෙලිෆිෂ් කෙනෙක් වගේ බිම පෙරළෙනවා. අස්ථි මගින් ඔබේ මොළය සහ හෘදය ආරක්ෂා කරයි.',
        ta: 'உங்கள் எலும்புக்கூடு ஒரு பெரிய கட்டிடத்தின் இரும்புச் சட்டம் போன்றது! உடலின் 206 எலும்புகள் இல்லாவிட்டால் நீங்கள் ஜெல்லிமீன் போல தளர்ந்து விழுந்துவிடுவீர்கள். எலும்புகள் உறுப்புகளைப் பாதுகாத்து உங்களை ஓட வைக்கின்றன.'
      },
      al: {
        en: 'Divided into axial skeleton (80 bones: skull, vertebral column, ribs, sternum) and appendicular skeleton (126 bones: limbs and girdles). Provides levers for locomotion, hematopoiesis in red bone marrow, and mineral reservoir storage (99% of body calcium).',
        si: 'අක්ෂක සැකිල්ල (අස්ථි 80: හිස්කබල, කශේරුව, ඉළඇට, උරස්ඵලකය) සහ උපග්‍රන්ථ සැකිල්ල (අස්ථි 126: ගාත්‍රා සහ මේඛලා) ලෙස බෙදේ. චලනයට ලීවර සැපයීම, රතු ඇටමිදුළුවල රුධිර සෛල නිපදවීම හා කැල්සියම් තැන්පත් කර තබාගැනීම සිදු කරයි.',
        ta: 'அச்சு எலும்புக்கூடு (80 எலும்புகள்) மற்றும் இணைப்பு எலும்புக்கூடு (126 எலும்புகள்) என பிரிக்கப்படுகிறது. இயக்கத்திற்கான நெம்புகோல்கள், எலும்பு மஜ்ஜையில் இரத்த அணுக்கள் உற்பத்தி மற்றும் கால்சியம் சேமிப்பு இதன் முக்கிய பணிகளாகும்.'
      },
      medical: {
        en: 'Bone biology integrates osteoblast/osteoclast remodeling regulated by PTH, calcitonin, and vitamin D. Essential clinical competencies include fracture classification (Salter-Harris, Gustilo-Anderson), osteoporosis T-scores, joint arthroplasty, and axial spine pathology.',
        si: 'අස්ථි ජීව විද්‍යාව ඔස්ටියෝබ්ලාස්ට් සහ ඔස්ටියෝක්ලාස්ට් සෛල මගින් අස්ථි ප්‍රතිනිර්මාණය කිරීම හා හෝමෝන පාලනය (PTH, කැල්සිටොනින්) මත පදනම් වේ. අස්ථි බිඳීම් වර්ගීකරණය සහ ඔස්ටියෝපොරෝසිස් වැනි රෝග මෙහිදී ප්‍රධාන වේ.',
        ta: 'எலும்பு உடலியலில் ஆஸ்டியோபிளாஸ்ட், ஆஸ்டியோகிளாஸ்ட் செல்கள் மற்றும் ஹார்மோன் கட்டுப்பாடு முக்கியமானது. எலும்பு முறிவுகள், ஆஸ்டியோபோரோசிஸ் மற்றும் மூட்டு நோய்களை கண்டறிதல் மருத்துவ மாணவர்களுக்கு இன்றியமையாதது.'
      }
    },
    statistics: [
      {
        label: { en: 'Adult Bones', si: 'වැඩිහිටි අස්ථි ගණන', ta: 'வயதுவந்தோர் எலும்புகள்' },
        value: '206'
      },
      {
        label: { en: 'Body Calcium Stored', si: 'ශරීරයේ කැල්සියම් ප්‍රතිශතය', ta: 'சேமிக்கப்பட்ட கால்சியம்' },
        value: '99%'
      },
      {
        label: { en: 'Largest Bone', si: 'දිගම අස්ථිය', ta: 'மிகப்பெரிய எலும்பு' },
        value: 'Femur'
      }
    ]
  },
  {
    id: 'digestive',
    name: {
      en: 'Digestive System',
      si: 'ආහාර ජීර්ණ පද්ධතිය',
      ta: 'சமிபாட்டுத் தொகுதி'
    },
    tagline: {
      en: 'The biochemical processing plant extracting fuel and vital nutrients',
      si: 'ආහාරවලින් ශක්තිය සහ පෝෂණය ලබාගන්නා ජෛව රසායනික පිරිසැකසුම් මධ්‍යස්ථානය',
      ta: 'உணவிலிருந்து சக்தியையும் ஊட்டச்சத்துக்களையும் பிரித்தெடுக்கும் தொழிற்சாலை'
    },
    iconName: 'Utensils',
    accentColor: '#10b981',
    modelType: 'digestive',
    overview: {
      primary: {
        en: 'Your digestive system takes the food you eat and turns it into energy so you can play and grow! The stomach churns food like a blender, and the intestines absorb all the tasty vitamins and nutrients.',
        si: 'ආහාර ජීර්ණ පද්ධතිය ඔබ කන කෑම ශක්තිය බවට පත් කරන්නේ ඔබට දුව පනින්නයි වැඩෙන්නයි! ආමාශය බ්ලෙන්ඩරයක් වගේ කෑම අඹරන අතර, බඩවැල් මගින් සියලුම විටමින් සහ පෝෂ්‍ය පදාර්ථ උරා ගනියි.',
        ta: 'உங்கள் சமிபாட்டு அமைப்பு நீங்கள் உண்ணும் உணவை ஆற்றலாக மாற்றி நீங்கள் விளையாடவும் வளரவும் உதவுகிறது! இரைப்பை உணவை மிக்ஸி போல அரைத்து, குடல்கள் வைட்டமின்களை உறிஞ்சுகின்றன.'
      },
      al: {
        en: 'Gastrointestinal tract extending from oral cavity to rectum, supported by accessory organs (liver, pancreas, gallbladder). Involves mechanical digestion, enzymatic breakdown (pepsin, amylase, lipase), nutrient absorption in villi and microvilli, and hepatic portal circulation.',
        si: 'මුඛයේ සිට ගුදය දක්වා විහිදෙන ආහාර මාර්ගය සහ අක්මාව, අග්න්‍යාශය, පිතාශය වැනි ආශ්‍රිත ග්‍රන්ථිවලින් සමන්විතය. එන්සයිම (පෙප්සින්, ඇමයිලේස්, ලයිපේස්) මගින් ආහාර ජීර්ණය කර ක්ෂුද්‍ර ප්‍රසර මගින් පෝෂක අවශෝෂණය කරයි.',
        ta: 'வாய் முதல் மலக்குடல் வரையிலான பாதை மற்றும் கல்லீரல், கணையம் ஆகிய துணை உறுப்புகளைக் கொண்டது. நொதிகள் மூலம் உணவைச் செரித்து, சிறுகுடல் உறிஞ்சிகள் வழியாக ஊட்டச்சத்துக்களை உறிஞ்சி உடலுக்கு வழங்குகிறது.'
      },
      medical: {
        en: 'GI pathophysiology focuses on mucosal barrier protection, enteric nervous system regulation, bilirubin metabolism, hepatic portal hypertension, inflammatory bowel diseases (Crohn’s, Ulcerative Colitis), and acute surgical abdomens (appendicitis, cholecystitis).',
        si: 'ආන්ත්‍රික ස්නායු පද්ධතිය, බිලිරුබින් පරිවෘත්තිය, අක්මා ද්වාර අධි රුධිර පීඩනය, ආමාශයික තුවාල (Gastric Ulcers), සහ ඇපෙන්ඩිසයිටිස් වැනි හදිසි ශල්‍යකර්ම තත්ත්ව පිළිබඳ ගැඹුරු සායනික අවබෝධයක් මෙහිදී ලබාදෙයි.',
        ta: 'இரைப்பை குடல் அழற்சி, கல்லீரல் ஈரல் அழற்சி, பித்தப்பை கற்கள் மற்றும் அப்பெண்டிசிடிஸ் போன்ற அவசர அறுவைசிகிச்சை நிலைகளைப் புரிந்துகொள்வது மருத்துவ சிகிச்சைக்கு அவசியமாகும்.'
      }
    },
    statistics: [
      {
        label: { en: 'GI Tract Length', si: 'ආහාර මාර්ගයේ දිග', ta: 'குடல் பாதையின் நீளம்' },
        value: '~9 Meters'
      },
      {
        label: { en: 'Digestion Time', si: 'ජීර්ණයට ගතවන කාලය', ta: 'செரிமான நேரம்' },
        value: '24 - 72 Hours'
      },
      {
        label: { en: 'Microbiome Cells', si: 'හිතකර බැක්ටීරියා ගණන', ta: 'குடல் பாக்டீரியா' },
        value: '38 Trillion'
      }
    ]
  },
  {
    id: 'urinary',
    name: {
      en: 'Urinary & Renal System',
      si: 'මුත්‍රා සහ වෘක්ක පද්ධතිය',
      ta: 'சிறுநீர்த் தொகுதி'
    },
    tagline: {
      en: 'Master filtration system purifying blood and balancing electrolytes',
      si: 'රුධිරය පිරිපහදු කර ජලය හා ලවණ සමතුලිත කරන පෙරහන් පද්ධතිය',
      ta: 'இரத்தத்தை வடிகட்டி நீர் மற்றும் தாது உப்புக்களை சமநிலைப்படுத்தும் அமைப்பு'
    },
    iconName: 'Droplet',
    accentColor: '#3b82f6',
    modelType: 'kidneys',
    overview: {
      primary: {
        en: 'Your kidneys are two bean-shaped master filters! They clean your blood 24 hours a day, taking out waste and excess water to make urine and keep your body clean and fresh.',
        si: 'ඔබේ වකුගඩු යනු බෝංචි ඇට හැඩැති සුපිරි පෙරහන් දෙකකි! ඒවා දවසේ පැය 24 පුරාම ඔබේ රුධිරය පිරිසිදු කරමින් අපද්‍රව්‍ය හා අනවශ්‍ය වතුර මුත්‍රා ලෙස ඉවත් කර සිරුර නිරෝගීව තබයි.',
        ta: 'உங்கள் சிறுநீரகங்கள் அவரை விதை வடிவ இரண்டு சுத்திகரிப்பான்கள்! அவை 24 மணி நேரமும் உங்கள் இரத்தத்தை வடிகட்டி, கழிவுகளை சிறுநீராக வெளியேற்றி உடலை தூய்மையாக வைக்கின்றன.'
      },
      al: {
        en: 'Comprises kidneys, ureters, urinary bladder, and urethra. The functional unit is the nephron (~1 million per kidney). Filtration occurs at the glomerulus (GFR ~125 mL/min), followed by selective reabsorption and secretion along proximal tubule, Loop of Henle, distal tubule, and collecting ducts regulated by ADH and aldosterone.',
        si: 'වකුගඩු, මුත්‍රවාහිනී, මුත්‍රාශය සහ මුත්‍ර මාර්ගයෙන් සමන්විතය. වෘක්කයේ ව්‍යුහාත්මක ඒකකය නෙෆ්‍රෝනයයි. ග්ලෝමරුලසය තුළ පෙරීම සිදුවන අතර, හෙන්ලේ පුඩුව සහ එකතු කිරීමේ නාලිකා ඔස්සේ ජලය සහ අයන නැවත අවශෝෂණය වීම ADH හෝමෝනය මගින් පාලනය වේ.',
        ta: 'சிறுநீரகங்கள், சிறுநீர்க்குழாய்கள் மற்றும் சிறுநீர்ப்பையைக் கொண்டது. அடிப்படை அலகு நெப்ரான் ஆகும். கிளாமருலஸில் வடிகட்டப்பட்டு, ஹென்லே வளைவு மற்றும் சேகரிக்கும் குழாய்களில் நீர் உறிஞ்சப்படுவது ADH ஹார்மோனால் கட்டுப்படுத்தப்படுகிறது.'
      },
      medical: {
        en: 'Renal physiology dictates acid-base homeostasis, renin-angiotensin-aldosterone system (RAAS), erythropoietin secretion, and calcium-phosphate balance via 1-alpha-hydroxylase. Clinical pathologies include Acute Kidney Injury (prerenal/intrinsic/postrenal), Glomerulonephritis, and Nephrotic vs Nephritic syndromes.',
        si: 'අම්ල-භස්ම සමතුලිතතාව, RAAS පද්ධතිය මගින් රුධිර පීඩනය පාලනය, එරිත්‍රොපොයෙටින් හෝමෝනය නිපදවීම වකුගඩු මගින් සිදු කරයි. උග්‍ර වකුගඩු අකර්මණ්‍යතාව සහ ග්ලෝමරුලෝනෙෆ්‍රයිටිස් වැනි රෝගී තත්ත්ව මෙහිදී අධ්‍යයනය කෙරේ.',
        ta: 'சிறுநீரக உடலியல் அமில-கார சமநிலை, இரத்த அழுத்த ஒழுங்குமுறை மற்றும் எரித்ரோபொய்டின் சுரப்பை நிர்வகிக்கிறது. கடுமையான சிறுநீரக செயலிழப்பு மற்றும் நெப்ரோடிக் நிலைகளை கண்டறிதல் இதில் முக்கியமானது.'
      }
    },
    statistics: [
      {
        label: { en: 'Daily Blood Filtered', si: 'දිනකට පෙරන රුධිර ප්‍රමාණය', ta: 'வடிகட்டப்படும் இரத்தம்' },
        value: '180 Liters'
      },
      {
        label: { en: 'Nephrons per Kidney', si: 'වකුගඩුවක ඇති නෙෆ්‍රෝන ගණන', ta: 'நெப்ரான்கள் எண்ணிக்கை' },
        value: '1 - 1.2 Million'
      },
      {
        label: { en: 'Urine Output', si: 'දෛනික මුත්‍රා ප්‍රමාණය', ta: 'சராசரி சிறுநீர் அளவு' },
        value: '1.5 L/day'
      }
    ]
  }
];

export const SYSTEMS_INFO: SystemInfo[] = [...BASE_SYSTEMS_INFO, ...ADDITIONAL_SYSTEMS_INFO];

const BASE_ORGAN_PARTS: OrganPart[] = [
  // --- CIRCULATORY SYSTEM ---
  {
    id: 'heart_aorta',
    name: {
      en: 'Aorta',
      si: 'මහා ධමනිය',
      ta: 'பெருநாடி'
    },
    latinName: 'Aorta Ascendens / Arcus Aortae',
    systemId: 'circulatory',
    category: 'Vascular Trunk',
    position3D: [0, 1.4, 0.2],
    scale3D: [0.6, 1.2, 0.6],
    color: '#dc2626',
    description: {
      primary: {
        en: 'The largest highway pipe of the heart! It sends fresh, oxygen-rich red blood rushing to your brain, arms, belly, and legs.',
        si: 'හෘදයේ ඇති විශාලතම ප්‍රධාන නළයයි! එය ඔක්සිජන් පිරුණු නැවුම් රතු රුධිරය මොළයට, අත්වලට සහ පාදවලට වේගයෙන් රැගෙන යයි.',
        ta: 'இதயத்தின் மிகப்பெரிய முதன்மை குழாய்! இது ஆக்ஸிஜன் நிறைந்த இரத்தத்தை மூளை, கைகள் மற்றும் கால்களுக்கு விரைவாக அனுப்புகிறது.'
      },
      al: {
        en: 'The main systemic arterial trunk originating from the left ventricle. Exhibits high elastic compliance to absorb systolic pressure waves and maintain diastolic perfusion (Windkessel effect).',
        si: 'වම් කෝෂිකාවෙන් ආරම්භ වන ප්‍රධාන ධමනි කඳයි. ඉහළ ප්‍රත්‍යාස්ථතාවක් සහිත වන අතර ඩයස්ටෝලික පීඩනය පවත්වා ගැනීමට උපකාරී වේ.',
        ta: 'இடது இதயவறையிலிருந்து தொடங்கும் பிரதான நாடி. அதிக நெகிழ்ச்சித்தன்மை கொண்டது மற்றும் டயஸ்டாலிக் இரத்த அழுத்தத்தை பராமரிக்க உதவுகிறது.'
      },
      medical: {
        en: 'Arises at aortic orifice, gives off right and left coronary arteries from aortic sinuses of Valsalva, arches over pulmonary bifurcation, giving rise to Brachiocephalic trunk, Left Common Carotid, and Left Subclavian arteries. Susceptible to Type A and Type B aortic dissection and coarctation.',
        si: 'වල්සල්වා කෝඨරවලින් කිරීටක ධමනි පිටවේ. අක්ෂක ධමනි, පොදු කැරොටයිඩ් ධමනි මෙයින් ශාඛා වේ. ඇනියුරිසම් (Aneurysm) හා විච්ඡේදනය (Dissection) වැනි සායනික තත්ත්ව ඇතිවිය හැක.',
        ta: 'கரோனரி தமனிகள் இதன் தொடக்கத்தில் கிளைக்கின்றன. மூளை மற்றும் கைகளுக்கு இரத்தத்தை வழங்கும் முக்கிய கிளைகள் இதிலிருந்து உருவாகின்றன. அயோர்டிக் டிஸெக்ஷன் போன்ற தீவிர மருத்துவ நிலைகள் இதில் ஏற்படலாம்.'
      }
    },
    funFact: {
      en: 'The aorta is roughly the thickness of a garden hose!',
      si: 'මහා ධමනිය සාමාන්‍ය වතුර හෝස් බටයක් තරම් මහතය!',
      ta: 'பெருநாடி ஒரு தோட்டத்து தண்ணீர் குழாய் அளவு தடிமனாக இருக்கும்!'
    },
    clinicalNotes: {
      en: 'Aortic Dissection presents with sudden, tearing chest pain radiating to the back. Aortic valve stenosis causes a systolic crescendo-decrescendo murmur at the right upper sternal border.',
      si: 'මහා ධමනි විච්ඡේදනයේදී පිටුපසට විහිදෙන තද පපුවේ වේදනාවක් හටගනියි.',
      ta: 'பெருநாடி கிழிசல் ஏற்படும் போது முதுகில் பரவும் தாங்க முடியாத மார்பு வலி ஏற்படுகிறது.'
    },
    neurovascular: {
      arterial: 'Self-luminal conduit (feeds entire systemic circulation)',
      venous: 'Drained indirectly via systemic capillary beds',
      innervation: 'Aortic baroreceptors via Vagus nerve (CN X)',
      lymphatic: 'Thoracic duct and mediastinal lymph nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Delivers oxygen blood', si: 'ඔක්සිජන් සහිත රුධිරය බෙදාහරියි', ta: 'ஆக்ஸிஜன் இரத்தத்தை விநியோகிக்கிறது' },
        { en: 'Connects heart to whole body', si: 'හෘදය මුළු සිරුරටම සම්බන්ධ කරයි', ta: 'இதயத்தை முழு உடலுக்கும் இணைக்கிறது' }
      ],
      al: [
        { en: 'Dampens pulsatile cardiac pressure', si: 'හෘදයේ ස්පන්දන පීඩනය සමනය කරයි', ta: 'இதய துடிப்பு அழுத்தத்தை சமன் செய்கிறது' },
        { en: 'Directs oxygenated blood into systemic aorta arch', si: 'පද්ධතිමය මහා ධමනි චාපය ඔස්සේ රුධිරය යොමු කරයි', ta: 'ஆக்ஸிஜனேற்றப்பட்ட இரத்தத்தை வழிநடத்துகிறது' }
      ],
      medical: [
        { en: 'Windkessel compliance mechanism', si: 'වින්ඩ්කෙසල් ප්‍රත්‍යාස්ථ යාන්ත්‍රණය', ta: 'விண்ட்கெசல் நெகிழ்ச்சி பொறிமுறை' },
        { en: 'Baroreceptor reflex mediation via CN X', si: 'CN X ස්නායුව මගින් පීඩන ප්‍රතිචාරය පාලනය', ta: 'பரோரிசெப்டர் அனிச்சை கட்டுப்பாடு' }
      ]
    }
  },
  {
    id: 'heart_left_ventricle',
    name: {
      en: 'Left Ventricle',
      si: 'වම් කෝෂිකාව',
      ta: 'இடது இதயவறை'
    },
    latinName: 'Ventriculus Sinister Cordis',
    systemId: 'circulatory',
    category: 'Cardiac Chamber',
    position3D: [0.4, 0.1, 0.3],
    scale3D: [0.9, 1.1, 0.9],
    color: '#b91c1c',
    description: {
      primary: {
        en: 'The muscle powerhouse of the heart! Its thick muscular walls squeeze hard to shoot blood all the way across your entire body.',
        si: 'හෘදයේ ප්‍රධානතම බලවත් මාංශ පේශී කුටීරයයි! මෙහි ඝන බිත්ති තදින් හැකිලෙමින් රුධිරය මුළු සිරුර පුරාම විදිනු ලබයි.',
        ta: 'இதயத்தின் மிகப்பெரிய தசை அறை! இதன் தடிமனான தசைகள் கடினமாகச் சுருங்கி இரத்தத்தை உடல் முழுவதற்கும் செலுத்துகின்றன.'
      },
      al: {
        en: 'The thickest chamber of the mammalian heart (approx. 3x thicker than right ventricle) to overcome systemic vascular resistance (120 mmHg vs 25 mmHg). Ejects stroke volume (~70 mL) during ventricular systole.',
        si: 'ක්ෂීරපායී හෘදයේ ඝනකමින් වැඩිම කුටීරයයි (දකුණු කෝෂිකාවට වඩා තුන් ගුණයක් පමණ ඝනය). පද්ධතිමය ප්‍රතිරෝධය ජයගැනීමට ඉහළ පීඩනයකින් රුධිරය පිටකරයි.',
        ta: 'இதயத்தின் தடிமனான அறை (வலது அறையை விட 3 மடங்கு தடிமன்). உடலின் இரத்த அழுத்தத்தை (120 mmHg) உருவாக்க 70 மிலி இரத்தத்தை ஒவ்வொரு துடிப்பிலும் வெளியேற்றுகிறது.'
      },
      medical: {
        en: 'Conical chamber forming cardiac apex. Features two thick papillary muscles (anterolateral and posteromedial) tethered to the bicuspid/mitral valve via chordae tendineae. Ejection Fraction normally 55-70%. Subject to concentric hypertrophy in chronic hypertension.',
        si: 'හෘද අග්‍රය සාදන කේතුකාකාර කුටීරයකි. ද්විතුණ්ඩ කපාටය (Mitral) සමග කණ්ඩරා තන්තු මගින් බැඳී ඇත. අධි රුධිර පීඩනයේදී බිත්ති අධිවර්ධනය (Hypertrophy) විය හැක.',
        ta: 'இதயத்தின் முனையை உருவாக்கும் அறை. மிட்ரல் வால்வுடன் இணைக்கப்பட்டுள்ளது. உயர் இரத்த அழுத்தத்தால் இதன் தசைகள் மேலும் தடிமனாகலாம்.'
      }
    },
    funFact: {
      en: 'The pressure created by the left ventricle could squirt liquid up to 30 feet in the air!',
      si: 'වම් කෝෂිකාව මගින් ඇති කරන පීඩනයට දියරයක් අඩි 30ක් ඉහළට විදිය හැක!',
      ta: 'இடது இதயவறை உருவாக்கும் அழுத்தத்தால் இரத்தத்தை 30 அடி உயரத்திற்கு பீய்ச்சியடிக்க முடியும்!'
    },
    clinicalNotes: {
      en: 'Left Ventricular Failure leads to pulmonary edema and orthopnea. Left Anterior Descending (LAD) artery occlusion causes anterior wall myocardial infarction ("widow-maker").',
      si: 'වම් කෝෂිකා අකර්මණ්‍යතාවයේදී පෙණහලුවල දියර එකතු වීම (පෙනහළු ශෝථය) සිදුවේ.',
      ta: 'இடது இதய செயலிழப்பு நுரையீரலில் நீர் கோர்க்க வழிவகுக்கும் (மூச்சுத்திணறல்).'
    },
    neurovascular: {
      arterial: 'Left Coronary Artery (LAD and Circumflex branch)',
      venous: 'Great cardiac vein draining into Coronary Sinus',
      innervation: 'Cardiac Plexus (Sympathetic T1-T4, Parasympathetic CN X)',
      lymphatic: 'Subepicardial lymphatic plexus'
    },
    keyFunctions: {
      primary: [
        { en: 'Pumps blood to whole body', si: 'මුළු සිරුරටම ලේ පොම්ප කරයි', ta: 'முழு உடலுக்கும் இரத்தம் செலுத்துகிறது' },
        { en: 'Strongest heart muscle', si: 'ශක්තිමත්ම හෘද මාංශ පේශියයි', ta: 'வலுவான இதய தசை' }
      ],
      al: [
        { en: 'Generates systemic arterial pressure (~120 mmHg)', si: 'පද්ධතිමය ධමනි පීඩනය (120 mmHg) ඇති කරයි', ta: 'இரத்த அழுத்தத்தை உருவாக்குகிறது' },
        { en: 'Drives systemic stroke volume (~70 mL)', si: 'ප්‍රහාරක පරිමාව (70 mL) පිටකරයි', ta: 'ஒவ்வொரு துடிப்பிலும் இரத்தத்தை வெளியேற்றுகிறது' }
      ],
      medical: [
        { en: 'Maintains cardiac index and stroke work', si: 'හෘද දර්ශකය හා කාර්ය සාධනය පවත්වා ගනියි', ta: 'இதய செயல்திறனை பராமரிக்கிறது' },
        { en: 'Determines Left Ventricular Ejection Fraction (LVEF)', si: 'LVEF ප්‍රතිශතය නිර්ණය කරයි', ta: 'LVEF அளவை தீர்மானிக்கிறது' }
      ]
    }
  },
  {
    id: 'heart_right_atrium',
    name: {
      en: 'Right Atrium & SA Node',
      si: 'දකුණු ආලින්දය සහ SA ගැටය',
      ta: 'வலது சோணை மற்றும் SA முடிச்சு'
    },
    latinName: 'Atrium Dextrum & Nodus Sinoatrialis',
    systemId: 'circulatory',
    category: 'Cardiac Chamber & Pacemaker',
    position3D: [-0.6, 0.6, 0.1],
    scale3D: [0.8, 0.8, 0.8],
    color: '#3b82f6',
    description: {
      primary: {
        en: 'The welcome door for tired blue blood returning from your body! It also houses the natural electrical battery (SA Node) that tells the heart when to beat.',
        si: 'ශරීරයෙන් ආපසු එන ඔක්සිජන් අඩු නිල් රුධිරය පිළිගන්නා දොරටුවයි! හෘදය ගැහෙන රිද්මය පාලනය කරන ස්වාභාවික බැටරිය (SA ගැටය) මෙහි පිහිටා ඇත.',
        ta: 'உடலிலிருந்து திரும்பி வரும் நீல இரத்தத்தை ஏற்கும் அறை! இதயத்தின் இயற்கையான மின்கலன் (SA முடிச்சு) இங்கேதான் உள்ளது.'
      },
      al: {
        en: 'Receives deoxygenated blood from Superior and Inferior Vena Cava and Coronary Sinus. Contains Sinoatrial (SA) node in the crista terminalis, generating spontaneous electrical pacing impulses (~72 bpm).',
        si: 'උත්තර හා අධර මහා ශිරා මගින් ඔක්සිජන් අඩු රුධිරය ලබාගනියි. හෘදයේ ස්වභාවික රිද්මකය වන SA ගැටය (මිනිත්තුවකට ස්පන්දන 72ක් පමණ) මෙහි පිහිටයි.',
        ta: 'மேல் மற்றும் கீழ் பெருஞ்சிரைகள் மூலம் இரத்தத்தைப் பெறுகிறது. இதயத்தின் இயற்கையான பேஸ்மேக்கர் (SA முடிச்சு) நிமிடத்திற்கு 72 முறை துடிப்பை உருவாக்குகிறது.'
      },
      medical: {
        en: 'Features pectinate muscles in auricle, fossa ovalis (remnant of foramen ovale), and Eustachian valve remnant. The SA node initiates rhythmic phase 4 diastolic depolarization via funny currents (If). Atrial Fibrillation originates frequently near pulmonary vein junctions in left atrium and crista terminalis.',
        si: 'කර්ණිකාවේ පෙක්ටිනේට් පේශි, ෆොසා ඕවාලිස් අවශේෂය පිහිටයි. If ධාරා මගින් ස්වයංක්‍රීය විද්‍යුත් විධ්‍රැවීකරණය ආරම්භ කරයි. Atrial Fibrillation (කර්ණික කම්පනය) මෙහිදී හටගත හැක.',
        ta: 'SA முடிச்சு இதயத்தின் மின் சமிக்ஞைகளைத் தொடங்குகிறது. ஏட்ரியல் ஃபைப்ரிலேஷன் போன்ற இதயத் துடிப்பு முறைகேடுகள் இதில் ஏற்படலாம்.'
      }
    },
    funFact: {
      en: 'The SA node sends electrical sparks just like a mini biological spark plug!',
      si: 'SA ගැටය කුඩා විදුලි පේනුවක් මෙන් හෘදයට විදුලි පුළිඟු යවයි!',
      ta: 'SA முடிச்சு ஒரு சிறிய ஸ்பார்க் பிளக் போல மின்சாரத்தை உருவாக்குகிறது!'
    },
    clinicalNotes: {
      en: 'Elevated Jugular Venous Pressure (JVP) directly reflects elevated Right Atrial Pressure in congestive heart failure and cardiac tamponade.',
      si: 'දකුණු ආලින්දයේ පීඩනය වැඩිවීම බෙල්ලේ ශිරා පීඩනය (JVP) මගින් සායනිකව හඳුනාගත හැක.',
      ta: 'கழுத்து நரம்பு அழுத்தம் (JVP) உயர்வது வலது இதய செயலிழப்பைக் குறிக்கிறது.'
    },
    neurovascular: {
      arterial: 'Right Coronary Artery (SA nodal branch in 60% of people)',
      venous: 'Anterior cardiac veins & Thebesian veins',
      innervation: 'Right Vagus nerve slows rate; Sympathetic trunks increase rate',
      lymphatic: 'Anterior mediastinal nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Receives used blood', si: 'භාවිතා වූ රුධිරය ලබාගනියි', ta: 'பயன்படுத்தப்பட்ட இரத்தத்தைப் பெறுகிறது' },
        { en: 'Starts the heartbeat', si: 'හෘද ස්පන්දනය ආරම්භ කරයි', ta: 'இதயத் துடிப்பைத் தொடங்குகிறது' }
      ],
      al: [
        { en: 'Pacemaker electrical rhythmogenesis', si: 'රිද්මකාරක විද්‍යුත් සංඥා ජනනය', ta: 'மின் துடிப்புகளை உருவாக்குதல்' },
        { en: 'Pre-load reservoir for right ventricle', si: 'දකුණු කෝෂිකාවට රුධිරය යොමු කිරීම', ta: 'வலது அறைக்கு இரத்தத்தை நிரப்புதல்' }
      ],
      medical: [
        { en: 'Secretion of Atrial Natriuretic Peptide (ANP)', si: 'ANP හෝමෝනය ස්‍රාවය කර සෝඩියම් පාලනය', ta: 'ANP ஹார்மோன் சுரப்பு' },
        { en: 'Central Venous Pressure (CVP) modulation', si: 'මධ්‍යම ශිරා පීඩනය (CVP) පිළිබිඹු කිරීම', ta: 'CVP அழுத்தத்தை அளவிடுதல்' }
      ]
    }
  },

  // --- RESPIRATORY SYSTEM ---
  {
    id: 'lungs_trachea',
    name: {
      en: 'Trachea & Bronchi',
      si: 'ශ්වාසනාලය සහ ශ්වාසනාලිකා',
      ta: 'மூச்சுக்குழாய் மற்றும் கிளைகள்'
    },
    latinName: 'Trachea et Arbor Bronchialis',
    systemId: 'respiratory',
    category: 'Airway Conduit',
    position3D: [0, 1.3, -0.1],
    scale3D: [0.4, 1.2, 0.4],
    color: '#38bdf8',
    description: {
      primary: {
        en: 'The windpipe! A sturdy, ribbed tunnel that brings clean fresh air straight from your throat down into both of your lungs.',
        si: 'හුස්ම නළය! ඔබේ උගුරේ සිට පෙණහලු දෙකටම නැවුම් පිරිසිදු වාතය රැගෙන යන ශක්තිමත් වළයාකාර කාටිලේජ නළයයි.',
        ta: 'மூச்சுக்குழாய்! தொண்டையிலிருந்து இரு நுரையீரல்களுக்கும் காற்றைக் கொண்டு செல்லும் உறுதியான வளைய வடிவக் குழாய்.'
      },
      al: {
        en: 'Flexible tube supported by 16-20 C-shaped hyaline cartilage rings that prevent collapse under negative intrapleural pressure. Bifurcates at the carina (T4/T5 level) into right and left primary bronchi.',
        si: 'සී-හැඩැති හයිලින් කාටිලේජ වළලු 16-20 කින් ශක්තිමත් වූ නම්‍යශීලී නලයකි. කැරීනා (Carina) ප්‍රදේශයේදී දකුණු සහ වම් ප්‍රධාන ශ්වාසනාලිකා වලට බෙදේ.',
        ta: '16-20 C-வடிவ குருத்தெலும்பு வளையங்களால் தாங்கப்படுகிறது. இது இரண்டாகப் பிரிந்து வலது, இடது நுரையீரல்களுக்குள் நுழைகிறது.'
      },
      medical: {
        en: 'Lined with pseudostratified ciliated columnar epithelium with goblet cells (mucociliary escalator). The right main bronchus is wider, shorter, and more vertical than the left (more prone to foreign body aspiration). Carina distortion indicates subcarinal lymphadenopathy (bronchogenic carcinoma).',
        si: 'ශ්ලේෂ්මල සෛල හා පක්ෂ්මල අපිච්ඡදයෙන් සමන්විතය. දකුණු ශ්වාසනාලිකාව වඩා කෙටි හා සිරස් බැවින් පිටස්තර ද්‍රව්‍ය සිරවීමට වැඩි ඉඩක් ඇත.',
        ta: 'வலது மூச்சுக்குழாய் நேராகவும் அகலமாகவும் இருப்பதால், தவறுதலாக விழுங்கும் பொருட்கள் வலது பக்கமே அதிகம் செல்கின்றன.'
      }
    },
    funFact: {
      en: 'Tiny hairs called cilia beat back and forth 1,000 times a minute to sweep dust out of your airways!',
      si: 'පක්ෂ්ම නමැති සියුම් කෙඳි විනාඩියකට 1000 වතාවක් සෙලවෙමින් දූවිලි ඉවත් කරයි!',
      ta: 'சிலியா எனப்படும் நுண்ணிய முடிகள் நிமிடத்திற்கு 1000 முறை அசைந்து தூசியை வெளியேற்றுகின்றன!'
    },
    clinicalNotes: {
      en: 'Endotracheal intubation past the carina causes accidental right mainstem intubation, leading to left lung atelectasis. Stridor signifies upper airway obstruction.',
      si: 'කෘත්‍රිම ශ්වසන නළය ඇතුල් කිරීමේදී දකුණු ශ්වාසනාලයට පමණක් ඇතුළු වුවහොත් වම් පෙණහල්ල හැකිලී යා හැක.',
      ta: 'அவசர சிகிச்சையில் குழாய் இடும் போது இடது நுரையீரல் சுருங்காமல் கவனமாகப் பொருத்த வேண்டும்.'
    },
    neurovascular: {
      arterial: 'Inferior thyroid and bronchial arteries',
      venous: 'Bronchial veins draining into azygos/hemiazygos',
      innervation: 'Recurrent Laryngeal Nerve (branch of CN X)',
      lymphatic: 'Pretracheal and paratracheal lymph nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Passes air to lungs', si: 'පෙණහලුවලට වාතය ගෙන යයි', ta: 'நுரையீரலுக்கு காற்றைக் கடத்துகிறது' },
        { en: 'Filters dust', si: 'දූවිලි පෙරා පිරිසිදු කරයි', ta: 'தூசியை வடிகட்டுகிறது' }
      ],
      al: [
        { en: 'Anatomical dead space conduction', si: 'ව්‍යුහ විද්‍යාත්මක අක්‍රිය අවකාශය හරහා වායු සංසරණය', ta: 'காற்றைக் கடத்தும் பாதை' },
        { en: 'Mucociliary clearance mechanism', si: 'පක්ෂ්මල ශ්ලේෂ්මල පිරිසිදු කිරීම', ta: 'நுரையீரலை தூய்மைப்படுத்துதல்' }
      ],
      medical: [
        { en: 'Airway patency under thoracic pressures', si: 'පපුවේ පීඩනය හමුවේ නාලය විවෘතව තබාගැනීම', ta: 'மூச்சுப்பாதையை திறந்து வைத்தல்' },
        { en: 'Cough reflex trigger via carina mechanoreceptors', si: 'කැස්ස ඇතිකර පිටස්තර ද්‍රව්‍ය ඉවත් කිරීම', ta: 'இருமல் அனிச்சை செயல் தூண்டுதல்' }
      ]
    }
  },
  {
    id: 'lungs_alveoli',
    name: {
      en: 'Lungs & Alveoli',
      si: 'පෙණහලු සහ වායු කෝෂ',
      ta: 'நுரையீரல்கள் மற்றும் நுண்ணறைகள்'
    },
    latinName: 'Pulmones et Alveoli Pulmonis',
    systemId: 'respiratory',
    category: 'Parenchyma & Gas Exchange',
    position3D: [0.7, 0.4, 0],
    scale3D: [1.2, 1.4, 1.0],
    color: '#ec4899',
    description: {
      primary: {
        en: 'Millions of tiny, magical air balloons! When you breathe, oxygen jumps across the thin walls into your blood, and carbon dioxide jumps out so you can puff it away.',
        si: 'මිලියන ගණනක් වූ පුංචි වායු බැලූන් පොකුරු! ඔබ හුස්ම ගන්නා විට, ඔක්සිජන් රුධිරයට ඇතුල් වන අතර කාබන් ඩයොක්සයිඩ් ඉවතට පනියි.',
        ta: 'மில்லியன் கணக்கான சிறிய காற்று பலூன்கள்! ஆக்ஸிஜன் இரத்தத்திற்குள்ளும், கரியமில வாயு வெளியேயும் மாறும் இடம் இதுவே.'
      },
      al: {
        en: 'Over 480 million micro-sacs providing 70-100 m² surface area. Blood-air barrier is merely 0.2-0.5 μm thick, composed of Type I pneumocytes (95% area) and Type II pneumocytes (secreting surfactant to lower alveolar surface tension and prevent collapse).',
        si: 'වායු කෝෂ මිලියන 480 කින් සමන්විත වන අතර වර්ග මීටර් 70-100 ක මතුපිට වර්ගඵලයක් සපයයි. ටයිප් I නියුමොසයිට් සහ සර්ෆැක්ටන්ට් ස්‍රාවය කරන ටයිප් II නියුමොසයිට් වලින් සමන්විතය.',
        ta: '480 மில்லியனுக்கும் அதிகமான நுண்ணறைகள் 70-100 சதுர மீட்டர் பரப்பளவை அளிக்கின்றன. சர்பாக்டன்ட் சுரந்து நுண்ணறைகள் ஒட்டிக்கொள்ளாமல் தடுக்கின்றன.'
      },
      medical: {
        en: 'Right lung has 3 lobes (superior, middle, inferior) with horizontal and oblique fissures; left lung has 2 lobes and cardiac notch. Gas diffusion described by Fick’s law (V = A × D × ΔP / T). Neonatal Respiratory Distress Syndrome (NRDS) results from surfactant deficiency in premature infants.',
        si: 'දකුණු පෙණහල්ල ඛණ්ඩිකා 3 කින්ද, වම් පෙණහල්ල ඛණ්ඩිකා 2 කින්ද සමන්විතයි. නොමේරූ ළදරුවන් තුළ සර්ෆැක්ටන්ට් ඌනතාව නිසා ශ්වසන අපහසුතා (NRDS) ඇතිවිය හැක.',
        ta: 'வலது நுரையீரல் 3 மடல்களையும், இடது நுரையீரல் 2 மடல்களையும் கொண்டது. குறைப்பிரசவக் குழந்தைகளுக்கு சர்பாக்டன்ட் குறைபாட்டால் மூச்சுத்திணறல் ஏற்படலாம்.'
      }
    },
    funFact: {
      en: 'If you spread out all the alveoli in your lungs, they would cover an entire tennis court!',
      si: 'පෙණහලුවල සියලුම වායු කෝෂ දිගහැරියොත් ටෙනිස් පිටියක් තරම් විශාල වනු ඇත!',
      ta: 'நுரையீரலில் உள்ள அனைத்து நுண்ணறைகளையும் விரித்தால் ஒரு டென்னிஸ் மைதானத்தையே மூடலாம்!'
    },
    clinicalNotes: {
      en: 'Pneumonia fills alveoli with purulent exudate causing consolidation and bronchial breath sounds. Emphysema destroys alveolar septa, reducing diffusion capacity (DLCO).',
      si: 'නියුමෝනියාවේදී වායු කෝෂ සැරව හා සෙමවලින් පිරී යයි.',
      ta: 'நிமோனியா காய்ச்சலில் நுண்ணறைகளில் சீழ் மற்றும் சளி சேர்ந்து மூச்சுத்திணறல் உண்டாகிறது.'
    },
    neurovascular: {
      arterial: 'Pulmonary arteries (deoxygenated) & Bronchial arteries (oxygenated)',
      venous: '4 Pulmonary veins drain into Left Atrium',
      innervation: 'Pulmonary plexus (Vagus nerve bronchoconstricts; Sympathetic bronchodilates)',
      lymphatic: 'Bronchopulmonary (hilar) lymph nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Gives oxygen to blood', si: 'රුධිරයට ඔක්සිජන් ලබා දෙයි', ta: 'இரத்தத்திற்கு ஆக்ஸிஜனை அளிக்கிறது' },
        { en: 'Breathes out carbon dioxide', si: 'කාබන් ඩයොක්සයිඩ් පිට කරයි', ta: 'கரியமில வாயுவை வெளியேற்றுகிறது' }
      ],
      al: [
        { en: 'Alveolar gas diffusion across membrane', si: 'වායු කෝෂ පටලය හරහා වායු විසරණය', ta: 'வாயுப் பரிமாற்றம்' },
        { en: 'Surfactant tension equilibrium', si: 'සර්ෆැක්ටන්ට් මගින් පෘෂ්ඨික ආතතිය පාලනය', ta: 'மேற்பரப்பு இழுவிசை சமநிலை' }
      ],
      medical: [
        { en: 'Ventilation-Perfusion (V/Q) matching', si: 'V/Q අනුපාතය නිවැරදිව පවත්වා ගැනීම', ta: 'V/Q சமநிலை பேணல்' },
        { en: 'Conversion of Angiotensin I to II via ACE', si: 'ACE එන්සයිමය මගින් ඇන්ජියෝටෙන්සින් පරිවර්තනය', ta: 'ACE என்சைம் செயல்பாடு' }
      ]
    }
  },

  // --- NERVOUS SYSTEM & BRAIN ANATOMY ---
  {
    id: 'brain_frontal_lobe',
    name: {
      en: 'Frontal Lobe & Motor Cortex',
      si: 'ලලාට පාලිය සහ මෝටර් බාහිකය',
      ta: 'முன் மடல் மற்றும் இயக்கப் புறணி'
    },
    latinName: 'Lobus Frontalis & Cortex Motorica',
    systemId: 'nervous',
    category: 'Cerebral Cortex & Executive Function',
    position3D: [0, 1.75, 0.7],
    scale3D: [1.0, 0.9, 0.9],
    color: '#c084fc',
    description: {
      primary: {
        en: 'The superhero captain of your personality! It makes plans, solves math puzzles, decides right from wrong, and tells your muscles to run, jump, and smile.',
        si: 'ඔබේ පෞරුෂත්වයේ ප්‍රධාන කපිතාන්වරයා! සැලසුම් හැදීම, ප්‍රශ්න විසඳීම, නිවැරදි තීරණ ගැනීම සහ සිනාසෙන්න හෝ දුවන්න පේශිවලට අණ දෙන්නේ මේ කොටසයි.',
        ta: 'உங்கள் ஆளுமையின் தலைமை தளபதி! திட்டமிடுதல், சிக்கல்களைத் தீர்ப்பது மற்றும் தசைகளுக்கு ஓடவும் சிரிக்கவும் கட்டளையிடுவது இதுவே.'
      },
      al: {
        en: 'Forms anterior third of cerebral hemisphere, bounded posteriorly by the central sulcus. Houses Prefrontal Cortex (executive cognition, working memory), Primary Motor Cortex in Precentral Gyrus (Brodmann 4), and Broca’s motor speech area (Brodmann 44/45 in dominant hemisphere).',
        si: 'මධ්‍ය සල්කසයට ඉදිරියෙන් පිහිටයි. පූර්ව ලලාට බාහිකය (තීරණ ගැනීම, මතකය), පූර්ව මධ්‍ය ගයිරසයේ ප්‍රාථමික මෝටර් බාහිකය (බ්‍රොඩ්මාන් 4), සහ කථන නිෂ්පාදනය කරන බ්‍රෝකා ප්‍රදේශය (බ්‍රොඩ්මාන් 44/45) මෙහි අඩංගු වේ.',
        ta: 'பெருமூளையின் முன்பகுதி. மோட்டார் புறணி மற்றும் பேசும் திறனை இயக்கும் புரோக்காவின் பகுதி (Broca area) இதில் அமைந்துள்ளது.'
      },
      medical: {
        en: 'Supplied by Anterior Cerebral Artery (medial motor strip - lower limb) and Middle Cerebral Artery (lateral motor strip - face & upper limb). Broca’s expressive aphasia produces halting, non-fluent speech with intact comprehension. Frontal lobe damage exhibits disinhibition, executive dysfunction, and primitive reflexes (grasp, suck).',
        si: 'ACA (පාද සඳහා මෝටර්) සහ MCA (මුහුණ සහ අත් සඳහා) මගින් රුධිරය සපයයි. බ්‍රෝකා කථන ආබාධයේදී (Broca aphasia) තේරුම්ගැනීමේ හැකියාව තිබුණද වචන කතාකිරීම අපහසු වේ. පූර්ව ලලාට හානිවලදී පෞරුෂත්ව වෙනස්කම් හටගනී.',
        ta: 'முன் மூளை தமனி (ACA) மற்றும் நடு மூளை தமனி (MCA) மூலம் இரத்தம் பெறுகிறது. புரோக்கா அஃபாசியாவில் பேசும் திறன் பாதிக்கப்படும் ஆனால் புரிந்துகொள்ளும் திறன் அப்படியே இருக்கும்.'
      }
    },
    funFact: {
      en: 'Your frontal lobe is the very last part of the human brain to fully mature—usually finishing around age 25!',
      si: 'මිනිස් මොළයේ අවසානයටම පූර්ණ ලෙස වර්ධනය වී නිමවන කොටස ලලාට පාලියයි—එය වයස අවුරුදු 25 පමණ වනතුරු වර්ධනය වේ!',
      ta: 'மனித மூளையில் முழுமையாக முதிர்ச்சியடையும் கடைசி பகுதி முன் மடல்—இது சுமார் 25 வயதில்தான் முடிகிறது!'
    },
    clinicalNotes: {
      en: 'Phineas Gage famously survived a tamping iron rod passing through his frontal lobes in 1848, causing profound personality transformation from mild-mannered to irreverent and impulsive.',
      si: '1848 දී ෆිනියාස් ගේජ්ගේ ලලාට පාලිය හරහා යකඩ පොල්ලක් ගියද ඔහු දිවි ගලවා ගත් නමුත් ඔහුගේ පෞරුෂය මුළුමනින්ම වෙනස් විය.',
      ta: 'பினியாஸ் கேஜ் என்பவருக்கு முன்மடலில் ஏற்பட்ட காயம் அவரது அமைதியான குணத்தை ஆக்ரோஷமாக மாற்றியது மருத்துவ வரலாற்றில் பிரசித்தி பெற்றது.'
    },
    neurovascular: {
      arterial: 'Anterior Cerebral Artery (ACA) & Middle Cerebral Artery (MCA)',
      venous: 'Superior Sagittal Sinus via superficial cerebral veins',
      innervation: 'Cortical associative networks & Thalamocortical projections',
      lymphatic: 'Meningeal lymphatic vessels alongside dural sinuses'
    },
    keyFunctions: {
      primary: [
        { en: 'Plans school projects', si: 'පාසල් වැඩ සැලසුම් කිරීම', ta: 'திட்டமிடுதல் மற்றும் முடிவெடுத்தல்' },
        { en: 'Moves muscles and body', si: 'පේශි සහ සිරුර චලනය කිරීම', ta: 'தசைகளை இயக்குதல்' }
      ],
      al: [
        { en: 'Voluntary motor control (Brodmann 4)', si: 'ස්වේච්ඡා මෝටර් පාලනය', ta: 'தன்னிச்சை தசை இயக்கம்' },
        { en: 'Motor speech fluency (Broca’s 44/45)', si: 'කථන චතුරතාව හා වචන සැකසීම', ta: 'பேச்சு உச்சரிப்பு' }
      ],
      medical: [
        { en: 'Executive inhibition & working memory', si: 'විධායක නිෂේධනය හා තීරණ ගැනීම', ta: 'உயர் நிலை சிந்தனை' },
        { en: 'Frontal eye field voluntary saccades', si: 'ඇස් වල ස්වේච්ඡා වේගවත් චලන', ta: 'கண் பார்வை இயக்கக் கட்டுப்பாடு' }
      ]
    }
  },
  {
    id: 'brain_parietal_lobe',
    name: {
      en: 'Parietal Lobe & Sensory Cortex',
      si: 'පාර්ශ්වික පාලිය සහ සංවේදක බාහිකය',
      ta: 'மேல் மடல் மற்றும் உணர்ச்சிப் புறணி'
    },
    latinName: 'Lobus Parietalis & Cortex Sensoria',
    systemId: 'nervous',
    category: 'Somatosensory & Spatial Perception',
    position3D: [0, 1.95, -0.05],
    scale3D: [1.0, 0.85, 0.9],
    color: '#a855f7',
    description: {
      primary: {
        en: 'The sensory wizard of touch! It feels when an ice cube is cold, knows when someone touches your shoulder, and tells you where your hands are even in the dark.',
        si: 'ස්පර්ශයේ මැජික් මධ්‍යස්ථානය! අයිස් කැටයක් සීතල බව, යමෙක් ඔබේ උරහිස අල්ලන බව සහ අඳුරේ වුවද ඔබේ දෑත් පිහිටා ඇති තැන ඔබට කියන්නේ මෙයයි.',
        ta: 'தொடு உணர்வின் மாயாஜால மையம்! பனிக்கட்டியின் குளிர்ச்சி, வலி மற்றும் இருட்டிலும் உங்கள் கைகள் எங்குள்ளன என்பதை உணர வைக்கிறது.'
      },
      al: {
        en: 'Positioned posterior to the central sulcus and superior to the lateral sulcus. Contains the Postcentral Gyrus (Primary Somatosensory Cortex - Brodmann 3, 1, 2) which maps sensation across the body (sensory homunculus), spatial processing, and stereognosis.',
        si: 'මධ්‍ය සල්කසයට පසුපසින් පිහිටයි. පසු-මධ්‍ය ගයිරසය තුළ ප්‍රාථමික දේහ සංවේදක බාහිකය (බ්‍රොඩ්මාන් 3, 1, 2) පිහිටා ඇති අතර මුළු සිරුරේම ස්පර්ශ, වේදනා සහ උෂ්ණත්ව සංවේදන සිතියම්ගත කරයි.',
        ta: 'உடலின் அனைத்து தொடு உணர்வுகளையும் (வலி, வெப்பம், அழுத்தம்) மூளையின் உணர்ச்சிப் புறணி வரைபடம் (ஹோமுன்குலஸ்) மூலம் உணர்கிறது.'
      },
      medical: {
        en: 'Supplied by MCA and ACA. Dominant (left) parietal damage causes Gerstmann syndrome (finger agnosia, agraphia, acalculia, right-left disorientation). Non-dominant (right) parietal lesion causes profound contralateral hemispatial neglect and anosognosia.',
        si: 'MCA සහ ACA මගින් රුධිරය ලබයි. වම් පාලිය ආබාධ වූ විට ගර්ස්ට්මන් සින්ඩ්‍රෝමය (ඇඟිලි හඳුනාගත නොහැකිවීම, ලිවීමේ නොහැකියාව) ඇතිවේ. දකුණු පාලිය ආබාධ වූ විට ශරීරයේ වම් පස නොසලකා හැරීම (Hemispatial neglect) හටගනී.',
        ta: 'இடது பக்க பாதிப்பு விரல்களை அடையாளம் காண முடியாமை மற்றும் எழுத முடியாமையை ஏற்படுத்தும் (கெர்ஸ்ட்மேன் சின்ட்ரோம்). வலது பக்க பாதிப்பு இடது பக்க உடலை உணராமல் புறக்கணிக்கச் செய்யும்.'
      }
    },
    funFact: {
      en: 'Your hands and lips take up more space in your parietal sensory map than your entire back and legs combined!',
      si: 'ඔබේ සංවේදක මොළ සිතියම තුළ දෑත් සහ තොල් සඳහා වෙන්වූ ඉඩකඩ ඔබේ පිට සහ දෙපා සියල්ලටම වඩා විශාලය!',
      ta: 'உங்கள் உணர்ச்சி வரைபடத்தில் கைகளும் உதடுகளும் உங்கள் முதுகு மற்றும் கால்களை விட அதிக இடத்தை ஆக்கிரமித்துள்ளன!'
    },
    clinicalNotes: {
      en: 'Astereognosis (inability to identify an object like a key or coin by touch alone with closed eyes) specifically localizes to contralateral parietal lobe dysfunction.',
      si: 'ඇස් වසාගෙන යතුරක් හෝ කාසියක් අතගා හඳුනා ගැනීමට නොහැකිවීම (Astereognosis) පාර්ශ්වික පාලියේ ආබාධයක් පෙන්වයි.',
      ta: 'கண்களை மூடி தொடுவதன் மூலம் ஒரு பொருளை (நாணயம் அல்லது சாவி) அடையாளம் காண முடியாமை மேல் மடல் கோளாறைக் குறிக்கிறது.'
    },
    neurovascular: {
      arterial: 'Middle Cerebral Artery & Anterior Cerebral Artery',
      venous: 'Superior Sagittal Sinus via ascending parietal veins',
      innervation: 'Ascending spinothalamic tracts and dorsal column-medial lemniscus via Thalamus VPL',
      lymphatic: 'Perivascular glymphatic spaces'
    },
    keyFunctions: {
      primary: [
        { en: 'Feels hot and cold', si: 'රස්නය සහ ශීතල දැනීම', ta: 'வெப்பம் மற்றும் குளிரை உணர்தல்' },
        { en: 'Knows where body parts are', si: 'ශරීර අවයව පිහිටීම දැනීම', ta: 'உடல் பாகங்களின் நிலை அறிதல்' }
      ],
      al: [
        { en: 'Somatosensory discrimination (Brodmann 3,1,2)', si: 'දේහ සංවේදක විශ්ලේෂණය', ta: 'தொடு உணர்வு பகுப்பாய்வு' },
        { en: 'Stereognosis and spatial navigation', si: 'ත්‍රිමාණ හැඩතල ස්පර්ශයෙන් හඳුනාගැනීම', ta: 'முப்பரிமாண உணர்தல்' }
      ],
      medical: [
        { en: 'Body-schema integration and proprioception', si: 'දේහ ස්වයං-සංජානනය සහ සමායෝජනය', ta: 'உடல் அமைப்பு ஒருங்கிணைப்பு' },
        { en: 'Visuospatial attention coordination', si: 'දෘශ්‍ය-අවකාශීය අවධානය යොමුකිරීම', ta: 'இடவெளி கவனம் செலுத்துதல்' }
      ]
    }
  },
  {
    id: 'brain_temporal_lobe',
    name: {
      en: 'Temporal Lobe & Hippocampus',
      si: 'ශංඛක පාලිය සහ හිපොකැම්පසය',
      ta: 'பக்க மடல் மற்றும் ஹிப்போகாம்பஸ்'
    },
    latinName: 'Lobus Temporalis & Hippocampus',
    systemId: 'nervous',
    category: 'Auditory, Speech & Memory',
    position3D: [0.85, 1.3, 0.1],
    scale3D: [0.75, 0.75, 1.1],
    color: '#8b5cf6',
    description: {
      primary: {
        en: 'The music player and memory album of your brain! It listens to songs, recognizes your best friend’s voice, and stores memories of holidays and birthdays.',
        si: 'ඔබේ මොළයේ සංගීත වාදකය සහ මතක ඇල්බමය! ලස්සන ගීත රසවිඳීම, යහළුවන්ගේ කටහඬ හඳුනාගැනීම සහ ප්‍රීතිමත් නිවාඩු මතක ගබඩා කරන්නේ මෙතැනයි.',
        ta: 'மூளையின் இசை மற்றும் நினைவக பெட்டகம்! பிடித்த பாடல்களைக் கேட்பது, குரல்களை அடையாளம் காண்பது மற்றும் பிறந்தநாள் நினைவுகளை சேமிப்பது இதுவே.'
      },
      al: {
        en: 'Located inferior to lateral (Sylvian) fissure. Houses Primary Auditory Cortex (Brodmann 41/42), Wernicke’s receptive language area (Brodmann 22), and medial temporal structures: Hippocampus (long-term memory formation) and Amygdala (emotion/fear conditioning).',
        si: 'පාර්ශ්වික සල්කසයට පහළින් පිහිටයි. ප්‍රාථමික ශ්‍රවණ බාහිකය (බ්‍රොඩ්මාන් 41/42), කථනය තේරුම්ගන්නා වර්නිකී ප්‍රදේශය (බ්‍රොඩ්මාන් 22), මතකය තැන්පත් කරන හිපොකැම්පසය සහ හැඟීම් පාලනය කරන ඇමිග්ඩලාව මෙහි ඇත.',
        ta: 'பக்கவாட்டு பள்ளத்திற்கு கீழ் உள்ளது. கேட்கும் திறன், வெர்னிக்கின் பேச்சுப் புரிதல் பகுதி மற்றும் நினைவுகளை சேமிக்கும் ஹிப்போகாம்பஸ் ஆகியவை இதில் உள்ளன.'
      },
      medical: {
        en: 'Supplied by MCA and PCA. Wernicke’s aphasia causes fluent but meaningless speech ("word salad") with loss of auditory comprehension. Bilateral hippocampal damage produces dense anterograde amnesia. Temporal lobe epilepsy is the most common focal epilepsy, presenting with deja vu and epigastric aura.',
        si: 'MCA සහ PCA මගින් රුධිරය ලබයි. වර්නිකී කථන ආබාධයේදී (Wernicke aphasia) තේරුමක් නැති වචන චතුරව කතාකරන නමුත් කිසිවක් තේරුම් ගත නොහැක. හිපොකැම්පස් හානියකදී අලුත් මතක තබාගත නොහැකි වේ (Anterograde amnesia).',
        ta: 'வெர்னிக்கே அஃபாசியாவில் பேசுவது சரளமாக இருக்கும் ஆனால் அர்த்தமற்றதாக இருக்கும், புரிந்துகொள்ள முடியாது. ஹிப்போகாம்பஸ் பாதிப்பு புதிய நினைவுகளை உருவாக்குவதைத் தடுக்கும்.'
      }
    },
    funFact: {
      en: 'The hippocampus is named after the Greek word for "seahorse" because it looks almost identical to a tiny curved sea creature!',
      si: 'හිපොකැම්පසයට එම නම ලැබුණේ "මුහුදු අශ්වයා" යන ග්‍රීක වචනයෙනි, මන්ද එහි හැඩය කුඩා මුහුදු අශ්වයෙකුට බොහෝ සෙයින් සමානය!',
      ta: 'ஹிப்போகாம்பஸ் என்ற பெயர் "கடல் குதிரை" என்ற கிரேக்க வார்த்தையிலிருந்து வந்தது, ஏனெனில் இது பார்ப்பதற்கு கடல் குதிரை போலவே வளைந்திருக்கும்!'
    },
    clinicalNotes: {
      en: 'In Alzheimer’s Disease, neurofibrillary tangles and amyloid plaques severely atrophy the hippocampus early, explaining why short-term memory loss is the hallmark initial symptom.',
      si: 'ඇල්සයිමර් රෝගයේදී මුලින්ම හිපොකැම්පසය හැකිලී යන බැවින් රෝගීන්ට මෑත මතකය අහිමි වීම ප්‍රධාන ලක්ෂණයයි.',
      ta: 'அல்சைமர் நோயில் முதலில் ஹிப்போகாம்பஸ் சுருங்குவதால் அண்மைக்கால நினைவுகள் மறைந்து போகின்றன.'
    },
    neurovascular: {
      arterial: 'Middle Cerebral Artery (MCA) & Posterior Cerebral Artery (PCA)',
      venous: 'Transverse sinus and Superior Petrosal Sinus',
      innervation: 'Auditory pathways from cochlear nuclei via Medial Geniculate Nucleus',
      lymphatic: 'Deep cervical lymph nodes via glymphatics'
    },
    keyFunctions: {
      primary: [
        { en: 'Listens to sounds and voices', si: 'ශබ්ද සහ කටහඬවලට සවන්දීම', ta: 'ஒலிகள் மற்றும் குரல்களைக் கேட்டல்' },
        { en: 'Stores happy memories', si: 'සුන්දර මතක ගබඩා කිරීම', ta: 'நினைவுகளை சேமித்தல்' }
      ],
      al: [
        { en: 'Auditory perception (Heschl’s gyri)', si: 'ශ්‍රවණ සංවේදන හඳුනාගැනීම', ta: 'கேட்கும் உணர்வு' },
        { en: 'Speech comprehension (Wernicke 22)', si: 'භාෂාව සහ කථනය තේරුම්ගැනීම', ta: 'பேச்சு புரிதல்' }
      ],
      medical: [
        { en: 'Memory consolidation into neocortex', si: 'කෙටිකාලීන මතකය දිගුකාලීන කිරීම', ta: 'நீண்டகால நினைவக உருவாக்கம்' },
        { en: 'Limbic emotional valuation via Amygdala', si: 'හැඟීම් සහ බිය ප්‍රතිචාර පාලනය', ta: 'உணர்ச்சி சமநிலை' }
      ]
    }
  },
  {
    id: 'brain_occipital_lobe',
    name: {
      en: 'Occipital Lobe & Visual Cortex',
      si: 'අපරපාලිය සහ දෘශ්‍ය බාහිකය',
      ta: 'பின் மடல் மற்றும் பார்வை புறணி'
    },
    latinName: 'Lobus Occipitalis & Cortex Visualis',
    systemId: 'nervous',
    category: 'Visual Processing & Optics',
    position3D: [0, 1.45, -0.85],
    scale3D: [0.85, 0.8, 0.75],
    color: '#ec4899',
    description: {
      primary: {
        en: 'The cinema screen of your brain! It takes picture signals sent from your eyeballs and turns them into full-color, moving 3D vision so you can see cartoons, colors, and the world.',
        si: 'ඔබේ මොළයේ සිනමා තිරය! ඔබේ ඇස් බෝල වලින් ලැබෙන සංඥා එකතු කර, ඔබ දකින කාටූන්, දේදුනු වර්ණ සහ මුළු ලෝකයම පැහැදිලි ත්‍රිමාණ රූප බවට පත්කරන්නේ මෙයයි.',
        ta: 'மூளையின் சினிமா திரை! கண்கள் அனுப்பும் சமிக்ஞைகளை வண்ணமயமான முப்பரிமாண காட்சிகளாக மாற்றி உலகைப் பார்க்க வைக்கிறது.'
      },
      al: {
        en: 'Forms posterior pole of cerebral hemisphere. Bounded by parieto-occipital sulcus medially. Surrounds the Calcarine sulcus containing Primary Visual Cortex (V1 / Brodmann 17) with retinotopic organization, flanked by visual association areas (V2-V5) processing motion, depth, and color.',
        si: 'මස්තිෂ්කයේ පසුපස අන්තයයි. කැල්කරීන් සල්කසය වටා ප්‍රාථමික දෘශ්‍ය බාහිකය (V1 / බ්‍රොඩ්මාන් 17) පිහිටා ඇත. ඇසේ දෘෂ්ටිවිතානයේ සිට ලැබෙන සංඥා ඔස්සේ හැඩතල, ගැඹුර, චලනය සහ වර්ණ විකේතනය කරයි.',
        ta: 'மூளையின் பின்புற முனை. பார்வை புறணி (Brodmann 17) இங்குள்ளது, இது விழித்திரை சமிக்ஞைகளை வடிவங்கள் மற்றும் வண்ணங்களாகப் பிரிக்கிறது.'
      },
      medical: {
        en: 'Supplied predominantly by Posterior Cerebral Artery (PCA). PCA occlusion results in contralateral homonymous hemianopia with macular sparing (due to dual collateral blood supply from MCA to occipital pole). Bilateral lesions cause cortical blindness (Anton syndrome: visual anosognosia and confabulation).',
        si: 'PCA මගින් රුධිරය ලබයි. PCA ධමනි අවහිර වූ විට විරුද්ධ පැත්තේ පෙනීම අඩක් අහිමි වේ (Homonymous hemianopia). ද්විපාර්ශ්වික හානිවලදී ඇස් හොඳින් තිබුණද මොළයට නොපෙනෙන කෝටිකල් අන්ධතාවය (Cortical blindness) ඇතිවේ.',
        ta: 'பின் பெருமூளை தமனி (PCA) மூலம் இரத்தம் பெறுகிறது. PCA அடைப்பு எதிர்ப்பக்க பார்வையை இழக்கச் செய்யும். இருபுறமும் பாதிக்கப்பட்டால் கண் நல்ல நிலையில் இருந்தாலும் பார்வை தெரியாது.'
      }
    },
    funFact: {
      en: 'The visual signals entering your eyes are upside-down—your occipital lobe flips them right-side up automatically in a millisecond!',
      si: 'ඇස් වලට ඇතුල් වන ආලෝක රූප මුලින් පෙරළී ඇත්තේ උඩු යටිකුරු ලෙසිනි—එය නිවැරදි කරන්නේ අපරපාලිය විසිනි!',
      ta: 'கண்களுக்குள் நுழையும் பிம்பங்கள் தலைகீழாக இருக்கும்—உங்கள் பின் மடல் அதை ஒரு நொடியில் நேராக மாற்றுகிறது!'
    },
    clinicalNotes: {
      en: 'Visual auras during classical migraine headaches (scintillating scotoma / zig-zag lines) originate from cortical spreading depression across the occipital lobe.',
      si: 'මිග්‍රේන් (ඉරුවාරදය) හිසරදයට පෙර ඇස් ඉදිරියේ දඟර ඉරි හා දීප්තිමත් ආලෝකයන් (Aura) පෙනෙන්නේ අපරපාලියේ ඇතිවන විද්‍යුත් වෙනස්කම් නිසාය.',
      ta: 'ஒற்றைத் தலைவலிக்கு முன் மின்னல் போன்ற கோடுகள் தெரிவது பின் மடலில் ஏற்படும் மின் அலைகளால்தான்.'
    },
    neurovascular: {
      arterial: 'Posterior Cerebral Artery (PCA - Calcarine branch) & MCA anastomosis',
      venous: 'Straight sinus and Confluence of Sinuses (Torcular Herophili)',
      innervation: 'Optic radiations (Geniculocalcarine tract from Lateral Geniculate Nucleus)',
      lymphatic: 'Transdural lymphatics to deep cervical chains'
    },
    keyFunctions: {
      primary: [
        { en: 'Sees colors and shapes', si: 'වර්ණ සහ හැඩතල දැකීම', ta: 'வண்ணங்கள் மற்றும் வடிவங்களை அறிதல்' },
        { en: 'Recognizes faces and toys', si: 'මුහුණු සහ සෙල්ලම්බඩු හඳුනාගැනීම', ta: 'முகங்களை அடையாளம் காணுதல்' }
      ],
      al: [
        { en: 'Retinotopic visual mapping (V1/Area 17)', si: 'දෘෂ්ටිවිතාන සංඥා ප්‍රතිබිම්භනය', ta: 'விழித்திரை சமிக்ஞை செயலாக்கம்' },
        { en: 'Motion (V5/MT) and color (V4) processing', si: 'චලනය සහ වර්ණ විශ්ලේෂණය', ta: 'இயக்கம் மற்றும் வண்ண பகுப்பாய்வு' }
      ],
      medical: [
        { en: 'Binocular stereoscopic depth fusion', si: 'ද්විනේත්‍ර ත්‍රිමාණ ගැඹුර සංශ්ලේෂණය', ta: 'முப்பரிமாண ஆழ உணர்தல்' },
        { en: 'Ventral ("what") and dorsal ("where") visual streams', si: 'දෘශ්‍ය සංඥා ප්‍රවාහ විශ්ලේෂණය', ta: 'பார்வை சமிக்ஞை வழித்தடங்கள்' }
      ]
    }
  },
  {
    id: 'brain_cerebellum',
    name: {
      en: 'Cerebellum ("Little Brain")',
      si: 'අනුමොළය / කුඩා මොළය',
      ta: 'சிறுமூளை'
    },
    latinName: 'Cerebellum',
    systemId: 'nervous',
    category: 'Motor Coordination & Equilibrium',
    position3D: [0, 0.75, -0.65],
    scale3D: [0.9, 0.7, 0.8],
    color: '#7e22ce',
    description: {
      primary: {
        en: 'The master acrobat of the body! It keeps you balanced when riding a bicycle, dancing, or standing on one foot without falling over.',
        si: 'සිරුරේ සමතුලිතතා නායකයා! බයිසිකල් පදින විට, නටන විට හෝ තනි කකුලෙන් හිටගෙන සිටින විට ඔබ නොවැටී සමබරව තබාගන්නේ මෙයයි.',
        ta: 'உடலின் சமநிலை மாஸ்டர்! சைக்கிள் ஓட்டும் போதும், நடனமாடும் போதும் கீழே விழாமல் உங்களை சமநிலையில் வைக்கிறது.'
      },
      al: {
        en: 'Located in posterior cranial fossa beneath tentorium cerebelli. Composed of two lateral hemispheres and central vermis. Coordinates voluntary muscle movement, fine-tunes motor precision, equilibrium, and maintains posture via Purkinje cell inhibitory circuits.',
        si: 'පශ්චාත් කපාල කුහරය තුළ පිහිටයි. වර්මිසය සහ අර්ධගෝල දෙකකින් සමන්විතයි. පර්කින්ජි සෛල මගින් ස්වේච්ඡා පේශි චලන සම්බන්ධීකරණය, ශරීර සමතුලිතතාව සහ පේශි තානය පවත්වා ගනියි.',
        ta: 'தலையின் பின்புறத்தில் அமைந்துள்ளது. தசை இயக்கங்களை ஒருங்கிணைத்து, உடலின் சமநிலையை துல்லியமாகப் பேணுகிறது.'
      },
      medical: {
        en: 'Divided into Archicerebellum (flocculonodular - balance), Paleocerebellum (anterior lobe - muscle tone), and Neocerebellum (posterior lobe - motor planning). Cerebellar damage produces ipsilateral signs: VANISHED mnemonic (Vertigo, Ataxia, Nystagmus, Intention tremor, Slurred staccato speech, Hypotonia, Dysdiadochokinesia).',
        si: 'අනුමොළයේ ආබාධවලදී ඇවිදීමේ අපහසුව (Ataxia), ඇස් වෙව්ලීම (Nystagmus), අත් වෙව්ලීම (Intention tremor) සහ ඉක්මන් ප්‍රතිවිරුද්ධ චලන නොහැකියාව (Dysdiadochokinesia) හටගනියි.',
        ta: 'சிறுமூளை பாதிக்கப்பட்டால் நடை தள்ளாடுதல் (அடாக்ஸியா), கைகள் நடுங்குதல் மற்றும் கண் நடுக்கம் உண்டாகும்.'
      }
    },
    funFact: {
      en: 'Although the cerebellum takes up only 10% of total brain volume, it packs more than 50 billion neurons—over half of all neurons in the entire body!',
      si: 'කුඩා මොළය සමස්ත මොළයෙන් 10%ක් වුවත්, මොළයේ මුළු නියුරෝන වලින් 50%කට වඩා එහි ඇත!',
      ta: 'சிறுமூளை அளவால் 10% மட்டுமே என்றாலும், மொத்த மூளையின் 50% நரம்பணுக்கள் இதிலேயே உள்ளன!'
    },
    clinicalNotes: {
      en: 'Intention tremor worsens markedly as the patient’s finger approaches a target (e.g. finger-to-nose test), distinguishing cerebellar disease from the resting tremor of Parkinson’s disease.',
      si: 'ඇඟිල්ලෙන් නාසය ඇල්ලීමේ පරීක්ෂණයේදී ඉලක්කය ළඟට යන විට අත වෙව්ලීම වැඩිවීම අනුමොළයේ ආබාධ හඳුනාගන්නා සායනික ලක්ෂණයකි.',
      ta: 'விரலால் மூக்கைத் தொடும் சோதனையில் இலக்கை நெருங்கும் போது நடுக்கம் அதிகரிப்பது சிறுமூளை பாதிப்பைக் காட்டும்.'
    },
    neurovascular: {
      arterial: 'Superior Cerebellar (SCA), AICA, and PICA arteries',
      venous: 'Superior and inferior cerebellar veins to transverse/sigmoid sinus',
      innervation: 'Vestibular nuclei, spinocerebellar tracts & corticopontocerebellar fibers',
      lymphatic: 'Deep cervical lymph nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Keeps body balanced', si: 'ශරීරය සමබරව තබයි', ta: 'உடலை சமநிலையில் வைக்கிறது' },
        { en: 'Smooth athletic moves', si: 'ක්‍රීඩා සහ නැටුම් චලන සුමට කරයි', ta: 'சீரான தசை இயக்கம்' }
      ],
      al: [
        { en: 'Refines motor precision', si: 'මෝටර් චලන නිරවද්‍යතාව පාලනය', ta: 'தசை இயக்க நுணுக்கம்' },
        { en: 'Postural muscle tone regulation', si: 'ඉරියව් පේශි තානය පාලනය', ta: 'உடல் தோரணை சமநிலை' }
      ],
      medical: [
        { en: 'Error-correction in motor execution', si: 'චලන ක්‍රියාත්මක කිරීමේදී දෝෂ නිවැරදි කිරීම', ta: 'இயக்கப் பிழை திருத்தம்' },
        { en: 'Vestibulo-ocular reflex stabilization', si: 'ඇස් සහ හිස චලන සමතුලිතතාව', ta: 'கண்-தலை அசைவு நிலைத்தன்மை' }
      ]
    }
  },
  {
    id: 'brain_brainstem',
    name: {
      en: 'Brainstem (Midbrain, Pons & Medulla)',
      si: 'මොළ කඳ: මධ්‍ය මොළය, වරෝලි සේතුව සහ සුෂුම්නා ශීර්ෂකය',
      ta: 'மூளைத்தண்டு (இடைமூளை, பான்ஸ் மற்றும் முகுளம்)'
    },
    latinName: 'Truncus Encephali (Mesencephalon, Pons & Medulla)',
    systemId: 'nervous',
    category: 'Brainstem & Autonomic Life Support',
    position3D: [0, 0.5, -0.15],
    scale3D: [0.6, 1.2, 0.6],
    color: '#d8b4fe',
    description: {
      primary: {
        en: 'The superhero autopilot of your body! It keeps your heart beating and lungs breathing even when you are fast asleep, and controls swallowing, coughing, and hiccuping.',
        si: 'ඔබේ සිරුරේ ස්වයංක්‍රීය නියමුවා! ඔබ තද නින්දේ සිටින විටත් ඔබේ හෘදය ගැස්සවීම, හුස්ම ගැනීම පාලනය කිරීම, ගිලීම සහ කැස්ස පාලනය කරන්නේ මේ කොටසයි.',
        ta: 'உடலின் தானியங்கி பைலட்! நீங்கள் தூங்கும் போதும் இதயம் துடிப்பது, நுரையீரல் சுவாசிப்பது மற்றும் விழுங்குதல், இருமல் போன்றவற்றை கட்டுப்படுத்துகிறது.'
      },
      al: {
        en: 'Stalk connecting diencephalon to spinal cord. Composed of Midbrain (cerebral peduncles, visual/auditory colliculi, substantia nigra), Pons (respiratory pneumotaxic center, transverse pontine fibers), and Medulla Oblongata (cardiovascular & respiratory rhythmicity centers, corticospinal decussation). Houses cranial nerve nuclei III through XII.',
        si: 'මධ්‍ය මොළය, වරෝලි සේතුව සහ සුෂුම්නා ශීර්ෂකයෙන් සමන්විතයි. ශ්වසන මධ්‍යස්ථාන, හෘද වාහිනී මධ්‍යස්ථාන සහ කපාල ස්නායු 3 සිට 12 දක්වා න්‍යෂ්ටි මෙහි පිහිටා ඇති අතර මෝටර් තන්තු මාරුවීම (Decussation) සිදුවේ.',
        ta: 'மூளையையும் தண்டுவடத்தையும் இணைக்கும் தண்டு. இதயத் துடிப்பு, இரத்த அழுத்தம் மற்றும் சுவாச மையங்கள் இதில் உள்ளன. மண்டை நரம்புகள் 3 முதல் 12 வரை இங்கிருந்து தொடங்குகின்றன.'
      },
      medical: {
        en: 'Ascending Reticular Activating System (ARAS) mediates consciousness; severe damage produces irreversible coma. Brainstem stroke syndromes: Wallenberg (Lateral Medullary Syndrome via PICA occlusion), Weber (midbrain - CN III palsy + contralateral hemiplegia), and "locked-in" syndrome (pontine basilar artery thrombosis). Brain death criteria require absence of brainstem reflexes.',
        si: 'සිහිසුන් බව පාලනය කරන ARAS පද්ධතිය මෙහි ඇත. PICA ධමනිය අවහිර වීමෙන් වොලන්බර්ග් සින්ඩ්‍රෝමය ඇතිවේ. මොළයේ මරණය (Brain death) තහවුරු කිරීමට මොළ කඳේ ප්‍රත්‍යාවර්ත පරීක්ෂා කෙරේ.',
        ta: 'விழிப்புணர்வை கட்டுப்படுத்தும் ARAS அமைப்பு இதில் உள்ளது. மூளைத்தண்டு பக்கவாதம் முழு உடல் முடக்கம் அல்லது கோமாவை ஏற்படுத்தும். மூளை மரணத்தை உறுதிப்படுத்த இது சோதிக்கப்படுகிறது.'
      }
    },
    funFact: {
      en: 'The brainstem is the most ancient part of our brain—often nicknamed the "reptilian brain" because it has kept creatures alive for over 500 million years!',
      si: 'මොළ කඳ මිනිස් මොළයේ පැරණිතම කොටසයි—වසර මිලියන 500කට පෙර ජීවත් වූ උරගයන්ගේ සිට ජීවය පවත්වා ගැනීමට උදව් වූයේ මෙයයි!',
      ta: 'மூளைத்தண்டு மூளையின் மிகப் பழமையான பகுதியாகும்—500 மில்லியன் ஆண்டுகளுக்கும் மேலாக உயிரினங்களை வாழ வைக்கிறது!'
    },
    clinicalNotes: {
      en: 'Cushing’s Triad (hypertension, bradycardia, and irregular Cheyne-Stokes respirations) signals life-threatening elevated intracranial pressure causing brainstem herniation through the foramen magnum.',
      si: 'කුෂින්ගේ ත්‍රිත්වය (අධික රුධිර පීඩනය, හෘද ස්පන්දනය අඩුවීම සහ අක්‍රමවත් ශ්වසනය) හිස්කබල තුළ පීඩනය වැඩිවී මොළ කඳ තෙරපීමේ මාරාන්තික ලක්ෂණයකි.',
      ta: 'குஷிங் முக்கூட்டு (உயர் இரத்த அழுத்தம், குறைவான இதயத் துடிப்பு, ஒழுங்கற்ற சுவாசம்) மூளைத்தண்டு அழுத்தப்பட்டு உயிருக்கு ஆபத்து ஏற்படுவதைக் குறிக்கிறது.'
    },
    neurovascular: {
      arterial: 'Vertebrobasilar system (Vertebral, Basilar, PICA, AICA, SCA)',
      venous: 'Petrosal sinuses and internal jugular bulb',
      innervation: 'Cranial nerve nuclei III through XII',
      lymphatic: 'Perineural lymphatic drainage into deep cervical nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Keeps you breathing in sleep', si: 'නින්දේදීම හුස්ම ගැනීම පාලනය', ta: 'தூங்கும் போது சுவாசம்' },
        { en: 'Controls heart rhythm and swallowing', si: 'හෘද රිද්මය හා ගිලීම පාලනය', ta: 'இதயத் துடிப்பு மற்றும் விழுங்குதல்' }
      ],
      al: [
        { en: 'Autonomic respiratory and cardiac centers', si: 'ස්වයංසාධක ශ්වසන හා හෘද මධ්‍යස්ථාන', ta: 'சுவாச மற்றும் இதய மையங்கள்' },
        { en: 'Conduit for motor corticospinal decussation', si: 'කෝටිකොස්පයිනල් මෝටර් තන්තු මාරුවීම', ta: 'நரம்பு சமிக்ஞை வழித்தடம்' }
      ],
      medical: [
        { en: 'Ascending Reticular Activating System (ARAS)', si: 'සිහිය හා අවදි බව පවත්වා ගැනීම', ta: 'விழிப்புணர்வு ஒழுங்குமுறை' },
        { en: 'Cranial nerve III-XII reflex integration', si: 'කපාල ස්නායු ප්‍රත්‍යාවර්ත සම්බන්ධීකරණය', ta: 'மண்டை நரம்பு அனிச்சை ஒருங்கிணைப்பு' }
      ]
    }
  },
  {
    id: 'brain_diencephalon',
    name: {
      en: 'Thalamus & Hypothalamus',
      si: 'තැලමසය සහ හයිපොතැලමසය',
      ta: 'தாலமஸ் மற்றும் ஹைபோதாலமஸ்'
    },
    latinName: 'Diencephalon (Thalamus & Hypothalamus)',
    systemId: 'nervous',
    category: 'Subcortical & Diencephalon',
    position3D: [0, 1.25, 0.05],
    scale3D: [0.5, 0.5, 0.55],
    color: '#e879f9',
    description: {
      primary: {
        en: 'The Grand Central Station and Thermostat of your body! The thalamus directs all incoming traffic, while the hypothalamus regulates your hunger, thirst, fever, and bedtime clock.',
        si: 'සිරුරේ මධ්‍යම දුම්රිය ස්ථානය සහ උෂ්ණත්ව පාලකය! ලැබෙන සියලු සංවේදන නියමිත තැනට යවන්නේ තැලමසයයි. බඩගින්න, පිපාසය, ශරීර උෂ්ණත්වය සහ නින්ද පාලනය කරන්නේ හයිපොතැලමසයයි.',
        ta: 'உடலின் தலைமை சமிக்ஞை நிலையம் மற்றும் தெர்மோஸ்டாட்! தாலமஸ் உணர்ச்சிகளை வழிநடத்துகிறது; ஹைபோதாலமஸ் பசி, தாகம், தூக்கம் மற்றும் உடல் வெப்பநிலையைக் கட்டுப்படுத்துகிறது.'
      },
      al: {
        en: 'Located deep in the core of the forebrain around the 3rd ventricle. Thalamus acts as the indispensable sensory relay station for all sensations (except olfaction) before reaching cerebral cortex. Hypothalamus regulates neuroendocrine homeostasis, autonomic system, circadian rhythm (suprachiasmatic nucleus), and directs the pituitary gland.',
        si: '3 වන මස්තිෂ්ක කුහරය දෙපස පිහිටයි. තැලමසය ආඝ්‍රාණය හැර අනෙකුත් සියලු සංවේදන බාහිකයට යොමුකරන ප්‍රධාන නැවතුම්පොළයි. හයිපොතැලමසය හෝමෝන පද්ධතිය සහ පිටියුටරි ග්‍රන්ථිය පාලනය කරමින් සමස්ථායිතාව පවත්වා ගනී.',
        ta: 'மூளையின் மையப் பகுதியில் அமைந்துள்ளது. தாலமஸ் வாசனை தவிர அனைத்து உணர்வுகளையும் மூளைக்கு அனுப்பும் ரிலே நிலையமாகும். ஹைபோதாலமஸ் ஹார்மோன் சமநிலை மற்றும் பிட்யூட்டரி சுரப்பியை இயக்குகிறது.'
      },
      medical: {
        en: 'Thalamic nuclei include VPL (body sensation), VPM (face/trigeminal), LGN (vision), MGN (audition), and VL (motor from basal ganglia/cerebellum). Dejerine-Roussy syndrome (thalamic pain syndrome) causes excruciating contralateral burning pain following PCA infarction. Hypothalamic lesions impair temperature control, cause central diabetes insipidus (loss of ADH), and disrupt satiety (ventromedial lesion = hyperphagia & obesity; lateral lesion = anorexia).',
        si: 'PCA අවහිර වීමෙන් තැලමික වේදනා සින්ඩ්‍රෝමය ඇතිවේ. හයිපොතැලමස් හානියකදී අධික පිපාසය හා මුත්‍රා පිටවීම (Diabetes insipidus), අධික බඩගින්න හෝ ආහාර අරුචිය සහ උෂ්ණත්ව අක්‍රමිකතා ඇතිවේ.',
        ta: 'தாலமஸ் வலி சின்ட்ரோம் தீவிர எரிச்சல் வலியை உண்டாக்கும். ஹைபோதாலமஸ் பாதிப்பு நீரிழிவு இன்சிபிடஸ் (ADH குறைவு), உடல் பருமன் அல்லது தீவிர பசியின்மையை ஏற்படுத்தும்.'
      }
    },
    funFact: {
      en: 'The hypothalamus is only the size of a single almond and weighs just 4 grams, yet it acts as the master conductor of your entire endocrine and temperature system!',
      si: 'හයිපොතැලමසය රටකජු ඇටයක් තරම් කුඩා වන අතර බර ග්‍රෑම් 4ක් පමණි, නමුත් ඔබේ මුළු හෝමෝන පද්ධතියම සහ ශරීර උෂ්ණත්වය පාලනය කරන්නේ එයයි!',
      ta: 'ஹைபோதாலமஸ் பாதாம் பருப்பின் அளவு மட்டுமே கொண்டது, ஆனால் உங்கள் உடலின் ஒட்டுமொத்த ஹார்மோன் அமைப்பையும் இதுவே இயக்குகிறது!'
    },
    clinicalNotes: {
      en: 'Craniopharyngioma (benign tumor arising from Rathke’s pouch remnants) compresses the optic chiasm and hypothalamus, causing bitemporal hemianopsia and hypopituitarism.',
      si: 'ක්‍රේනියෝෆැරින්ජියෝමා පිළිකාව මගින් හයිපොතැලමසය සහ දෘශ්‍ය කයැස්මය තෙරපීමෙන් දෙපැත්තේම පෙනීම අඩුවීම (Bitemporal hemianopsia) සිදුවේ.',
      ta: 'பிட்யூட்டரி அல்லது ஹைபோதாலமஸ் கட்டிகள் பார்வை நரம்பை அழுத்தி இரு கண்களின் பக்கவாட்டு பார்வையை இழக்கச் செய்யும்.'
    },
    neurovascular: {
      arterial: 'Posterior Communicating, Thalamoperforating & Lenticulostriate arteries',
      venous: 'Internal cerebral veins draining to Great Vein of Galen',
      innervation: 'Hypothalamic-hypophyseal tract & medial forebrain bundle',
      lymphatic: 'Perivascular glymphatics'
    },
    keyFunctions: {
      primary: [
        { en: 'Relays messages to thinking brain', si: 'මොළයට සංවේදන යොමු කිරීම', ta: 'மூளைக்கு தகவல்களை அனுப்புதல்' },
        { en: 'Controls body temperature and hunger', si: 'ශරීර උෂ්ණත්වය හා බඩගින්න පාලනය', ta: 'உடல் வெப்பநிலை மற்றும் பசி கட்டுப்பாடு' }
      ],
      al: [
        { en: 'Sensory relay hub (VPL, VPM, LGN, MGN)', si: 'සංවේදන නැවත සම්ප්‍රේෂණය', ta: 'உணர்வு சமிக்ஞை ரிலே நிலையம்' },
        { en: 'Endocrine master control via Pituitary', si: 'හෝමෝන පද්ධතිය මෙහෙයවීම', ta: 'ஹார்மோன் கட்டுப்பாட்டு மையம்' }
      ],
      medical: [
        { en: 'Circadian pacemaker (Suprachiasmatic nucleus)', si: 'ජෛව ඔරලෝසුව පාලනය', ta: 'உயிரியல் கடிகார இயக்கம்' },
        { en: 'Autonomic thermoregulation & osmolar balance', si: 'උෂ්ණත්ව සමනය හා තරල සමතුලිතතාව', ta: 'தன்னாட்சி உடல் சமநிலை' }
      ]
    }
  },
  {
    id: 'brain_corpus_callosum',
    name: {
      en: 'Corpus Callosum',
      si: 'කැලෝසම දේහය',
      ta: 'கார்பஸ் கலோசம்'
    },
    latinName: 'Corpus Callosum',
    systemId: 'nervous',
    category: 'White Matter & Interhemispheric Highway',
    position3D: [0, 1.52, 0.0],
    scale3D: [0.35, 0.45, 1.2],
    color: '#f8fafc',
    description: {
      primary: {
        en: 'The super-bridge of brain wires! It connects your left brain and right brain together so your creative side and logical side can work as best friends.',
        si: 'මොළයේ සුපිරි කේබල් පාලම! එය ඔබේ වම් මොළය සහ දකුණු මොළය එකට සම්බන්ධ කරයි, එවිට ඔබේ නිර්මාණශීලී පැත්ත සහ තාර්කික පැත්ත හොඳම යහළුවන් මෙන් එකට වැඩ කරයි.',
        ta: 'இரு மூளைப் பகுதிகளையும் இணைக்கும் சூப்பர் பாலம்! உங்கள் இடது மற்றும் வலது மூளைகள் ஒன்றுடன் ஒன்று பேசி இணைந்து செயல்பட இது உதவுகிறது.'
      },
      al: {
        en: 'The largest white matter tract in the human brain, containing over 200 million myelinated nerve fibers. Arches beneath the cerebral cortex, interconnecting homologous regions of the left and right hemispheres. Divided anatomically from anterior to posterior into: Rostrum, Genu, Body (Truncus), and Splenium.',
        si: 'මිනිස් මොළයේ ඇති විශාලතම සුදු ද්‍රව්‍යමය ස්නායු තන්තු මිටියයි (තන්තු මිලියන 200කට වඩා ඇත). වම් සහ දකුණු අර්ධගෝල එකිනෙක සම්බන්ධ කරයි. රොස්ට්‍රම, ජෙනු, දේහය සහ ස්ප්ලීනියම ලෙස කොටස් හතරකින් සමන්විතය.',
        ta: 'மனித மூளையின் மிகப்பெரிய வெள்ளை நரம்பு இழை பாலம் (20 கோடிக்கும் அதிகமான நரம்பிழைகள்). இது இடது மற்றும் வலது பெருமூளை அரைக்கோளங்களை இணைக்கிறது.'
      },
      medical: {
        en: 'Supplied by pericallosal branches of Anterior Cerebral Artery (ACA). Surgical transection (Corpus Callosotomy, performed to prevent secondary generalization of intractable epilepsy) creates "split-brain" syndrome: tactile information presented to the left hand cannot be named verbally by the left dominant hemisphere. Splenial infarction causes "Alexia without agraphia".',
        si: 'ACA ධමනිය මගින් රුධිරය ලබයි. අපස්මාරය වැළැක්වීමට මෙය ශල්‍යකර්මයකින් කැපූ විට "Split-brain" සින්ඩ්‍රෝමය ඇතිවේ (වම් අතින් අල්ලන දේ කටින් පැවසිය නොහැකි වේ). ස්ප්ලීනියම අවහිර වූ විට ලිවිය හැකි නමුත් කියවිය නොහැකි තත්ත්වයක් (Alexia without agraphia) ඇතිවේ.',
        ta: 'கால்-அசுமிக் தமனி மூலம் இரத்தம் பெறுகிறது. காக்காய் வலிப்புக்காக இதை துண்டித்தால் "பிளவு மூளை" (Split-brain) நிலை ஏற்படும், அங்கு இடது கையால் தொட்ட பொருளை பேசும் மூளையால் பெயரிட முடியாது.'
      }
    },
    funFact: {
      en: 'Musicians who start playing instruments like the piano or violin before age seven develop a significantly thicker corpus callosum than non-musicians!',
      si: 'කුඩා කල සිටම පියානෝ හෝ වයලීන වාදනය කරන සංගීතඥයින්ගේ කැලෝසම දේහය සාමාන්‍ය අයට වඩා සැලකිය යුතු ලෙස ඝනකම් වේ!',
      ta: 'சிறுவயதிலிருந்தே பியானோ போன்ற இசைக் கருவிகளை வாசிப்பவர்களுக்கு இந்த இணைப்பு பாலம் மிகவும் தடிமனாக உருவாகிறது!'
    },
    clinicalNotes: {
      en: 'Agenesis of the corpus callosum (ACC) is a congenital disorder where the bridge fails to develop, visible on prenatal ultrasound as the "racing car" sign of widely separated lateral ventricles.',
      si: 'උපතින්ම කැලෝසම දේහය නොපිහිටන තත්ත්වයකදී (ACC) අල්ට්‍රාසවුන්ඩ් පරීක්ෂණයේදී මස්තිෂ්ක කෝෂිකා ඈත්ව පිහිටීම "Racing car sign" ලෙස පෙනේ.',
      ta: 'பிறவியிலேயே இந்த இணைப்பு பாலம் உருவாகாமல் போவது குழந்தைகளின் அறிவாற்றல் வளர்ச்சியை பாதிக்கலாம்.'
    },
    neurovascular: {
      arterial: 'Pericallosal artery (branch of Anterior Cerebral Artery)',
      venous: 'Internal cerebral veins draining into straight sinus',
      innervation: 'Pure white matter commissural projection fibers',
      lymphatic: 'Perivascular glymphatic spaces'
    },
    keyFunctions: {
      primary: [
        { en: 'Connects left and right brain', si: 'වම් සහ දකුණු මොළය සම්බන්ධ කිරීම', ta: 'இரு மூளைகளையும் இணைத்தல்' },
        { en: 'Helps hands work together', si: 'දෑත් දෙකම එකට වැඩ කිරීමට උදව් වීම', ta: 'இரு கைகளும் இணைந்து செயல்பட உதவுதல்' }
      ],
      al: [
        { en: 'Interhemispheric information transfer', si: 'අර්ධගෝල දෙක අතර තොරතුරු හුවමාරුව', ta: 'தகவல் பரிமாற்றம்' },
        { en: 'Bilateral motor and sensory coordination', si: 'ද්විපාර්ශ්වික මෝටර් හා සංවේදක සම්බන්ධීකරණය', ta: 'இருபக்க ஒருங்கிணைப்பு' }
      ],
      medical: [
        { en: 'Integrates cross-cortical perceptual fields', si: 'බාහික සංජානන ක්ෂේත්‍ර ඒකාබද්ධ කිරීම', ta: 'புலன் பார்வை ஒருங்கிணைப்பு' },
        { en: 'Facilitates dominant-hemisphere language access', si: 'භාෂා කථනයට අදාළ තොරතුරු ලබාදීම', ta: 'மொழி தொடர்பு வசதி' }
      ]
    }
  },
  {
    id: 'brain_ventricles',
    name: {
      en: 'Ventricular System & Cerebrospinal Fluid',
      si: 'මස්තිෂ්ක කෝෂිකා සහ සුෂුම්නා තරලය',
      ta: 'மூளை அறைகள் மற்றும் பெருமூளை முதுகுத்தண்டு நீர்'
    },
    latinName: 'Systema Ventriculare & Liquor Cerebrospinalis',
    systemId: 'nervous',
    category: 'Ventricular System & Hydrodynamics',
    position3D: [0.35, 1.35, 0.05],
    scale3D: [0.6, 0.6, 0.9],
    color: '#38bdf8',
    description: {
      primary: {
        en: 'The brain’s water cushion and cleaning fountain! The brain floats inside this clear, clean fluid like an astronaut floating in space, protecting it from bumping against your skull.',
        si: 'මොළයේ ස්වභාවික දිය කොට්ටය සහ පිරිසිදු කිරීමේ උල්පත! ගගනගාමියෙක් අභ්‍යවකාශයේ පාවෙන්නාක් මෙන් මොළය මේ පිරිසිදු තරලය තුළ පාවෙමින් හිස්කබලේ හැපීමෙන් ආරක්ෂා වේ.',
        ta: 'மூளையின் நீர் மெத்தை மற்றும் சுத்திகரிப்பு நீரூற்று! விண்வெளியில் விண்வெளி வீரர் மிதப்பது போல மூளை இந்த தெளிவான நீரில் மிதந்து காயங்களிலிருந்து பாதுகாக்கப்படுகிறது.'
      },
      al: {
        en: 'Four fluid-filled chambers: two Lateral Ventricles drain via Interventricular Foramina of Monro into the midline 3rd Ventricle, through the Cerebral Aqueduct of Sylvius into the 4th Ventricle, exiting via Foramina of Luschka & Magendie into the Subarachnoid space. Produced by choroid plexus ependymal cells (~500 mL/day; circulating volume ~150 mL).',
        si: 'කුටීර 4කින් සමන්විතය: පාර්ශ්වික කෝෂිකා දෙක, මොන්රෝ විවර හරහා 3 වන කෝෂිකාවටද, සිල්වියස් ප්‍රණාලය හරහා 4 වන කෝෂිකාවටද ගලා බසී. කොරොයිඩ් ප්ලෙක්සසය මගින් දිනකට 500 mL පමණ නිපදවන අතර කම්පන අවශෝෂණය කරයි.',
        ta: 'நான்கு நீர் அறைகள். கோராய்டு பிளெக்ஸஸ் மூலம் தினமும் 500 மி.லி திரவம் உற்பத்தியாகி மூளையை அதிர்ச்சிகளிலிருந்து பாதுகாக்கிறது.'
      },
      medical: {
        en: 'Normal opening pressure is 10-20 cm H2O. Obstruction produces Hydrocephalus (Non-communicating: e.g. aqueductal stenosis, colloid cyst; Communicating: impaired arachnoid villi resorption post-meningitis). Normal Pressure Hydrocephalus (NPH) presents with the classic triad: "wet, wacky, wobbly" (urinary incontinence, cognitive decline, magnetic gait ataxia).',
        si: 'CSF අවහිර වීමෙන් හයිඩ්‍රොසෙෆලස් (Hydrocephalus - මොළයේ වතුර පිරීම) ඇතිවේ. NPH රෝගයේදී මතකය අඩුවීම, මුත්‍රා පිටවීම පාලනය නොවීම සහ ඇවිදීමේ අපහසුව ඇතිවේ.',
        ta: 'நீர் வழித்தடம் அடைபட்டால் தலை வீக்கம் (ஹைட்ரோசெபாலஸ்) ஏற்படும். முதியவர்களுக்கு நினைவாற்றல் இழப்பு, சிறுநீர் அடக்க முடியாமை மற்றும் நடை தடுமாற்றம் உண்டாகும்.'
      }
    },
    funFact: {
      en: 'Because your brain floats inside cerebrospinal fluid, its effective weight drops from 1,400 grams down to just 50 grams—a 96% reduction in felt weight!',
      si: 'සුෂුම්නා තරලය තුළ පාවෙන නිසා මොළයේ සැබෑ බර ග්‍රෑම් 1400ක් වුවත් අපට දැනෙන්නේ ග්‍රෑම් 50ක් තරම් සැහැල්ලුවෙනි!',
      ta: 'இந்த திரவத்தில் மிதப்பதால் உங்கள் 1.4 கிலோ மூளை வெறும் 50 கிராம் எடை கொண்டதாக உணரப்படுகிறது!'
    },
    clinicalNotes: {
      en: 'Lumbar puncture (spinal tap) at L3/L4 or L4/L5 interspace samples CSF safely below the conus medullaris. Xanthochromia (yellowish supernatant due to bilirubin) confirms subarachnoid hemorrhage.',
      si: 'L3/L4 මට්ටමේදී කොඳු ඇට පෙළෙන් CSF තරලය සාම්පල ලබාගන්නා අතර කහ පැහැවීම (Xanthochromia) මගින් මොළයේ රුධිර වහනයක් තහවුරු කරයි.',
      ta: 'முதுகெலும்பில் ஊசி மூலம் இந்த நீரை எடுத்து பரிசோதிப்பதன் மூலம் மூளைக்காய்ச்சல் (மெனின்ஜிடிஸ்) மற்றும் இரத்தக் கசிவை உறுதி செய்யலாம்.'
    },
    neurovascular: {
      arterial: 'Choroidal branches of Internal Carotid and Posterior Cerebral arteries',
      venous: 'Internal cerebral veins, basilar vein of Rosenthal, and straight sinus',
      innervation: 'Ependymal and meningeal sensory branches of CN V',
      lymphatic: 'Arachnoid granulations draining into Superior Sagittal Sinus'
    },
    keyFunctions: {
      primary: [
        { en: 'Cushions brain from shocks', si: 'මොළය කම්පනවලින් ආරක්ෂා කිරීම', ta: 'அதிர்ச்சியிலிருந்து பாதுகாத்தல்' },
        { en: 'Washes away waste products', si: 'අපද්‍රව්‍ය සෝදා පිරිසිදු කිරීම', ta: 'கழிவுகளை அகற்றுதல்' }
      ],
      al: [
        { en: 'Mechanical buoyancy and shock absorption', si: 'ප්ලාව්‍යතාව හා යාන්ත්‍රික ආරක්ෂාව', ta: 'இயற்கையான மிதப்பு விசை' },
        { en: 'CSF circulation and chemical stability', si: 'තරල සංසරණය හා රසායනික ස්ථායීතාව', ta: 'இரசாயன சமநிலை' }
      ],
      medical: [
        { en: 'Intracranial pressure (ICP) volume buffering', si: 'කපාල අභ්‍යන්තර පීඩන සමතුලිතතාව', ta: 'மண்டை ஓட்டு அழுத்த ஒழுங்குமுறை' },
        { en: 'Glymphatic metabolic waste clearance', si: 'ග්ලයිම්ෆැටික් පරිවෘත්තීය අපද්‍රව්‍ය ඉවත් කිරීම', ta: 'நச்சு கழிவு சுத்திகரிப்பு' }
      ]
    }
  },
  {
    id: 'brain_cerebrum',
    name: {
      en: 'Cerebrum & Hemispheres Overview',
      si: 'මහා මොළය සහ අර්ධගෝල සමස්තය',
      ta: 'பெருமூளை மற்றும் அரைக்கோளங்கள் கண்ணோட்டம்'
    },
    latinName: 'Cerebrum & Hemispheria Cerebri',
    systemId: 'nervous',
    category: 'Central Processing & Neocortex',
    position3D: [-0.45, 1.5, 0.1],
    scale3D: [1.1, 1.0, 1.2],
    color: '#a855f7',
    description: {
      primary: {
        en: 'The master biological computer! The two hemispheres hold all your thoughts, language, creative ideas, consciousness, and every dream you have ever had.',
        si: 'ප්‍රධාන ජෛව පරිගණකය! ඔබේ සියලු සිතුවිලි, භාෂාව, නිර්මාණශීලී අදහස්, සිහිකල්පනාව සහ ඔබ දකින සියලු සිහින රඳවාගෙන සිටින්නේ මේ මහා මොළයයි.',
        ta: 'தலைசிறந்த உயிரியல் கணினி! உங்கள் சிந்தனைகள், மொழி, ஆக்கபூர்வமான யோசனைகள் மற்றும் விழிப்புணர்வு அனைத்தையும் இந்த பெருமூளை அரைக்கோளங்கள் கொண்டுள்ளன.'
      },
      al: {
        en: 'Composed of two asymmetric cerebral hemispheres separated by the longitudinal fissure. The outer grey matter neocortex contains six distinct cellular layers with extensively folded gyri and sulci maximizing surface area (~2,500 cm²).',
        si: 'දිගටි සල්කසයකින් වෙන්වූ අර්ධගෝල දෙකකින් යුක්තය. පිටත අළු පැහැති බාහිකයේ ස්ථර 6ක් ඇති අතර ගයිරස් සහ සල්කස් මගින් පෘෂ්ඨ වර්ගඵලය (2,500 cm² පමණ) උපරිම කර ඇත.',
        ta: 'இரண்டு அரைக்கோளங்களைக் கொண்டது. மடிப்புகளுடன் கூடிய சாம்பல் நிற புறணி 2,500 சதுர செ.மீ பரப்பளவைக் கொண்டுள்ளது.'
      },
      medical: {
        en: 'Left hemisphere is typically dominant for language syntax, logic, and fine motor praxis; right hemisphere mediates prosody, spatial perception, and emotional nuance. Cerebral autoregulation maintains constant Cerebral Blood Flow (CBF ~50 mL/100g/min) across MAP 60-160 mmHg via myogenic tone and local metabolic coupling (CO2, H+, adenosine).',
        si: 'වම් අර්ධගෝලය භාෂාව හා තර්කයට ප්‍රමුඛ වන අතර දකුණු අර්ධගෝලය සංගීතය හා අවකාශීය සංජානනයට ප්‍රමුඛ වේ. ස්වයං-නියාමනය මගින් මොළයේ රුධිර ප්‍රවාහය (CBF) නියතව පවත්වා ගනියි.',
        ta: 'இடது அரைக்கோளம் மொழி மற்றும் தர்க்கத்திற்கும், வலது அரைக்கோளம் கலை மற்றும் உணர்ச்சிகளுக்கும் பொறுப்பாகும். மூளை இரத்த ஓட்டம் மிகத் துல்லியமாக கட்டுப்படுத்தப்படுகிறது.'
      }
    },
    funFact: {
      en: 'The cerebrum contains roughly 100,000 miles of blood vessels and consumes 20% of your body’s entire oxygen supply despite being only 2% of your weight!',
      si: 'මහා මොළය තුළ සැතපුම් 100,000ක පමණ රුධිර නාල ජාලයක් ඇති අතර ඔබේ මුළු සිරුරේ ඔක්සිජන් ප්‍රමාණයෙන් 20%ක්ම පරිභෝජනය කරයි!',
      ta: 'மூளையில் சுமார் 1 லட்சம் மைல் நீளமுள்ள இரத்த நாளங்கள் உள்ளன, மேலும் உடலின் மொத்த ஆக்ஸிஜனில் 20% ஐ மூளை மட்டுமே பயன்படுத்துகிறது!'
    },
    clinicalNotes: {
      en: 'Ischemic stroke is classified by the TOAST criteria (large-artery atherosclerosis, cardioembolism, small-vessel occlusion). The therapeutic window for IV thrombolysis with alteplase is strictly within 4.5 hours of symptom onset.',
      si: 'රුධිර කැටියකින් මොළයේ ධමනියක් අවහිර වී ආඝාතය (Ischemic stroke) ඇතිවූ විට පැය 4.5ක් ඇතුළත රෝහල්ගත කර ඖෂධ (tPA) ලබාදීමෙන් ජීවිතය බේරාගත හැක.',
      ta: 'பக்கவாதம் ஏற்பட்ட 4.5 மணி நேரத்திற்குள் மருத்துவமனைக்குச் சென்றால் இரத்தக் கட்டியைக் கரைக்கும் ஊசி மூலம் மூளையை மீட்க முடியும்.'
    },
    neurovascular: {
      arterial: 'Circle of Willis (Anterior, Middle, and Posterior Cerebral Arteries)',
      venous: 'Dural venous sinuses draining into Internal Jugular Veins',
      innervation: 'Cortical associative networks & Thalamocortical loops',
      lymphatic: 'Glymphatic drainage via perivascular spaces'
    },
    keyFunctions: {
      primary: [
        { en: 'Conscious thought and talking', si: 'සිතීම සහ කතාකිරීම', ta: 'சிந்தனை மற்றும் பேச்சு' },
        { en: 'Creativity, dreams, and art', si: 'නිර්මාණශීලීත්වය සහ සිහින', ta: 'படைப்பாற்றல் மற்றும் கனவுகள்' }
      ],
      al: [
        { en: 'Voluntary motor control and sensation', si: 'ස්වේච්ඡා මෝටර් සහ සංවේදක පාලනය', ta: 'தன்னிச்சை இயக்கம் மற்றும் உணர்வு' },
        { en: 'Complex language and reasoning', si: 'භාෂාව සහ තර්කනය', ta: 'மொழி மற்றும் பகுத்தறிவு' }
      ],
      medical: [
        { en: 'Higher executive cognitive control', si: 'උසස් සංජානන හා විධායක පාලනය', ta: 'உயர்நிலை அறிவாற்றல் கட்டுப்பாடு' },
        { en: 'Hemispheric lateralization and consciousness', si: 'අර්ධගෝලීය ප්‍රභේදනය හා විඥානය', ta: 'விழிப்புணர்வு பராமரிப்பு' }
      ]
    }
  },

  // --- SKELETAL SYSTEM ---
  {
    id: 'skeleton_skull',
    name: {
      en: 'Cranium & Skull',
      si: 'හිස්කබල / කපාලය',
      ta: 'மண்டை ஓடு'
    },
    latinName: 'Cranium (Neurocranium & Viscerocranium)',
    systemId: 'skeletal',
    category: 'Axial Skeleton',
    position3D: [0, 1.7, 0],
    scale3D: [0.9, 0.9, 0.9],
    color: '#e2e8f0',
    description: {
      primary: {
        en: 'The superhero helmet of bone! It tightly protects your precious brain from bumps and bruises when you play.',
        si: 'අස්ථිවලින් හැදුණු සුපිරි හෙල්මට් එක! ඔබ සෙල්ලම් කරන විට මොළය අනතුරුවලින් ආරක්ෂා කරන්නේ මේ ඝන හිස්කබලයි.',
        ta: 'எலும்பாலான சூப்பர் ஹெல்மெட்! விளையாடும் போது மூளையை காயங்கள் ஏற்படாமல் உறுதியாகப் பாதுகாக்கிறது.'
      },
      al: {
        en: 'Comprises 22 bones connected by immovable fibrous joints called sutures (coronal, sagittal, lambdoid). Divided into 8 cranial bones housing the brain and 14 facial bones.',
        si: 'සීවන (Sutures) මගින් සම්බන්ධ වූ අස්ථි 22 කින් සමන්විතයි. මොළය ආවරණය කරන කපාල අස්ථි 8ක් සහ මුහුණේ අස්ථි 14ක් ඇත.',
        ta: '22 எலும்புகளால் ஆனது. மண்டைப்பகுதியில் 8 எலும்புகளும், முகத்தில் 14 எலும்புகளும் தையல் போன்ற மூட்டுகளால் இணைந்துள்ளன.'
      },
      medical: {
        en: 'Pterion is the thinnest junction of frontal, parietal, temporal, and sphenoid bones; fractures tear the underlying Middle Meningeal Artery. Base of skull contains vital foramina (Foramen Magnum transmits medulla oblongata; Jugular Foramen transmits CN IX, X, XI).',
        si: 'ටෙරියොන් (Pterion) හිස්කබලේ තුනී ස්ථානයකි. හිස්කබල පාදමේ ෆොරමෙන් මැග්නම් මගින් සුෂුම්නාව මොළය හා සම්බන්ධ කරයි.',
        ta: 'மண்டை ஓட்டின் மெல்லிய பகுதியான ஸ்டீரியான் உடைந்தால் உட்புற தமனி கிழிந்து இரத்தப்போக்கு ஏற்படும். ஃபொரமன் மேக்னம் வழியாக தண்டுவடம் இறங்குகிறது.'
      }
    },
    funFact: {
      en: 'Babies are born with soft spots called fontanelles so the skull can grow as the brain gets bigger!',
      si: 'ළදරුවන්ගේ හිස්කබලේ කෝෂ්ට (Fontanelles) නමැති මෘදු ස්ථාන ඇති අතර, මොළය වර්ධනය වීමට ඉඩ සලසයි!',
      ta: 'குழந்தைகள் பிறக்கும் போது மண்டை ஓட்டில் மென்மையான இடைவெளிகள் இருக்கும், இது மூளை வளர உதவுகிறது!'
    },
    clinicalNotes: {
      en: 'Basilar skull fractures present with Battle sign (mastoid ecchymosis), Raccoon eyes (periorbital ecchymosis), and CSF rhinorrhea or otorrhea.',
      si: 'හිස්කබලේ පාදම බිඳී යාමේදී ඇස් වටා නිල්වීම (Raccoon eyes) සහ කනෙන් හෝ නාසයෙන් CSF තරලය කාන්දු විය හැක.',
      ta: 'மண்டை ஓட்டு முறிவில் கண்களைச் சுற்றி கறுப்பு வளையம் தோன்றுவதும், மூக்கிலிருந்து நீர் கசிவதும் முக்கிய அறிகுறிகள்.'
    },
    neurovascular: {
      arterial: 'Internal & External Carotid arteries and Vertebral arteries',
      venous: 'Dural venous sinuses draining into Internal Jugular Vein',
      innervation: 'Cranial Nerves I - XII',
      lymphatic: 'Occipital, mastoid, and parotid nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Protects the brain', si: 'මොළය ආරක්ෂා කරයි', ta: 'மூளையைப் பாதுகாக்கிறது' },
        { en: 'Gives shape to face', si: 'මුහුණට හැඩය ලබාදෙයි', ta: 'முகத்திற்கு வடிவம் தருகிறது' }
      ],
      al: [
        { en: 'Protects neurocranium vault', si: 'මස්තිෂ්ක කෝෂ්ඨය සුරක්ෂිත කිරීම', ta: 'மண்டையகத்தை பாதுகாத்தல்' },
        { en: 'Sensory organ sockets (orbits, cochlea)', si: 'ඇස් සහ කන් ඉන්ද්‍රියන් රඳවා තැබීම', ta: 'கண், காது உறுப்புகளைத் தாங்குதல்' }
      ],
      medical: [
        { en: 'Houses cranial nerve foramina', si: 'කපාල ස්නායු නික්මෙන විවර සැපයීම', ta: 'நரம்புகள் வெளியேறும் துளைகள்' },
        { en: 'Accommodates intracranial compliance', si: 'අන්තඃකපාල පීඩනය සමතුලිතව තබාගැනීම', ta: 'மண்டை ஓட்டு அழுத்தத்தை சமன் செய்தல்' }
      ]
    }
  },
  {
    id: 'skeleton_spine_ribs',
    name: {
      en: 'Vertebral Column & Ribcage',
      si: 'කශේරුව සහ උරස් කූඩුව',
      ta: 'முதுகெலும்பு மற்றும் விலா எலும்புக்கூடு'
    },
    latinName: 'Columna Vertebralis & Cavea Thoracis',
    systemId: 'skeletal',
    category: 'Axial Skeleton',
    position3D: [0, 0.4, -0.2],
    scale3D: [1.2, 1.5, 0.9],
    color: '#cbd5e1',
    description: {
      primary: {
        en: 'The rib cage is like a protective birdcage guarding your heart and lungs, while your backbone helps you stand tall and bend over to tie your shoes!',
        si: 'උරස් කූඩුව යනු හෘදය සහ පෙණහලු රකින පක්ෂි කූඩුවක් වැනිය! කොඳු ඇට පෙළ ඔබට කෙළින් හිටගන්නට සහ නැමෙන්නට උදව් කරයි.',
        ta: 'விலா எலும்புக்கூடு இதயம் மற்றும் நுரையீரலைப் பாதுகாக்கும் கூண்டு போன்றது; முதுகெலும்பு நீங்கள் நிமிர்ந்து நிற்க உதவுகிறது.'
      },
      al: {
        en: '33 vertebrae (7 Cervical, 12 Thoracic, 5 Lumbar, 5 Sacral fused, 4 Coccygeal). 12 pairs of ribs: 1-7 true ribs, 8-10 false ribs, 11-12 floating ribs attached to the sternum via costal cartilages.',
        si: 'කශේරුකා 33 කින් (ග්‍රීව 7, උරස් 12, කටී 5, ත්‍රික 5, අනුත්‍රික 4) සහ ඉළඇට යුගල 12 කින් (සත්‍ය 1-7, අසත්‍ය 8-10, පා පාවෙන 11-12) සමන්විතයි.',
        ta: '33 முதுகெலும்புகள் மற்றும் 12 ஜோடி விலா எலும்புகளைக் கொண்டது (உண்மையானவை 1-7, தவறானவை 8-10, மிதக்கும் விலா எலும்புகள் 11-12).'
      },
      medical: {
        en: 'Vertebral canal transmits the spinal cord ending at L1/L2 (conus medullaris); lumbar puncture is safely performed at L3/L4 or L4/L5 interspace. Flail chest occurs when ≥2 adjacent ribs are fractured in ≥2 places, causing paradoxical chest wall motion during ventilation.',
        si: 'සුෂුම්නාව L1/L2 මට්ටමෙන් අවසන් වේ. ලුම්බාර් පන්චර් (CSF තරල ගැනීම) L3/L4 හෝ L4/L5 මට්ටමින් ආරක්ෂිතව කරනු ලබයි. ඉළඇට බිඳීම් නිසා Flail chest තත්ත්වය ඇතිවිය හැක.',
        ta: 'முதுகுத்தண்டு L1/L2 இல் முடிவடைகிறது; இடுப்பில் ஊசி மூலம் திரவம் எடுக்க L3/L4 பகுதி பாதுகாப்பானது. விலா எலும்பு முறிவுகள் மூச்சுத்திணறலை உண்டாக்கும்.'
      }
    },
    funFact: {
      en: 'You are about 1 cm taller in the morning than in the evening because gravity compresses spinal discs during the day!',
      si: 'දවස පුරා ගුරුත්වාකර්ෂණය නිසා කොන්දේ තැටි තෙරපෙන බැවින්, ඔබ උදෑසනදී සවසට වඩා 1cm ක් පමණ උසය!',
      ta: 'நாள் முழுவதும் புவியீர்ப்பு விசையால் தட்டுகள் அழுந்துவதால், நீங்கள் மாலையை விட காலையில் 1 செ.மீ உயரமாய் இருப்பீர்கள்!'
    },
    clinicalNotes: {
      en: 'Herniated intervertebral disc (sciatica) compresses exiting spinal nerve roots (e.g., L5/S1 radiculopathy causing foot drop or diminished ankle reflex).',
      si: 'කොඳු ඇට අතර තැටි ලිස්සා යාමෙන් (Sciatica) ස්නායු තෙරපී පාදයේ වේදනාව සහ දුර්වලතාව ඇතිවිය හැක.',
      ta: 'முதுகுத்தண்டு வட்டு விலகல் நரம்புகளை அழுத்துவதால் காலில் கடுமையான வலி (சயாட்டிகா) ஏற்படுகிறது.'
    },
    neurovascular: {
      arterial: 'Intercostal arteries (aorta branches) & Posterior spinal arteries',
      venous: 'Azygos vein & Batson venous plexus (valveless route for cancer metastasis)',
      innervation: 'Intercostal nerves & Meningeal recurrent nerves',
      lymphatic: 'Intercostal and thoracic duct nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Protects heart and lungs', si: 'හෘදය සහ පෙණහලු රකියි', ta: 'இதயம், நுரையீரலைப் பாதுகாக்கிறது' },
        { en: 'Helps you stand and bend', si: 'කෙලින් සිටීමට සහ නැමීමට උදව් කරයි', ta: 'நிற்கவும் குனியவும் உதவுகிறது' }
      ],
      al: [
        { en: 'Ventilatory bucket-handle rib biomechanics', si: 'හුස්ම ගැනීමේදී උරස් කූඩුව ප්‍රසාරණය කිරීම', ta: 'சுவாச இயக்கத்தை எளிதாக்குதல்' },
        { en: 'Weight-bearing spinal column posture', si: 'ශරීර බර දරාගැනීම සහ ඉරියව් පවත්වා ගැනීම', ta: 'உடல் எடையைத் தாங்குதல்' }
      ],
      medical: [
        { en: 'Shields spinal cord and cauda equina', si: 'සුෂුම්නාව සහ කෝඩා ඉක්වයිනා ආරක්ෂා කිරීම', ta: 'முதுகுத்தண்டை பாதுகாத்தல்' },
        { en: 'Batson plexus retrograde venous drainage', si: 'බැට්සන් ශිරා ජාලය හරහා රුධිර සංසරණය', ta: 'சிரை இரத்த ஓட்டப் பாதை' }
      ]
    }
  },

  // --- DIGESTIVE SYSTEM ---
  {
    id: 'digestive_stomach',
    name: {
      en: 'Stomach & Gastric Acids',
      si: 'ආමාශය සහ ආමාශයික අම්ල',
      ta: 'இரைப்பை மற்றும் செரிமான அமிலம்'
    },
    latinName: 'Gaster / Ventriculus',
    systemId: 'digestive',
    category: 'Gastrointestinal',
    position3D: [0.3, 0.2, 0.2],
    scale3D: [0.9, 0.8, 0.9],
    color: '#f97316',
    description: {
      primary: {
        en: 'The blender belly! It splashes super-strong digestive juices and mashes your lunch into a warm soup called chyme so your body can absorb its goodness.',
        si: 'බඩේ ඇති බ්ලෙන්ඩරය! එය තද ආමාශයික යුෂ සමග ආහාර හොඳින් මිශ්‍ර කර අඹරා ද්‍රවයක් බවට පත් කරයි.',
        ta: 'வயிற்றில் உள்ள மிக்ஸி! இது சக்திவாய்ந்த அமிலத்தைச் சுரந்து நீங்கள் சாப்பிட்ட உணவை கூழாக்கி செரிக்க வைக்கிறது.'
      },
      al: {
        en: 'J-shaped organ located in the left upper quadrant. Secretes gastric juice (pH 1.5 - 2.0) containing Hydrochloric acid (parietal cells) and Pepsinogen (chief cells) to digest proteins. Secretes Intrinsic Factor essential for Vitamin B12 absorption.',
        si: 'ජේ-හැඩැති අවයවයකි. ප්‍රෝටීන් ජීර්ණය සඳහා හයිඩ්‍රොක්ලෝරික් අම්ලය (පැරයිටල් සෛල) සහ පෙප්සිනෝජන් (ප්‍රධාන සෛල) ස්‍රාවය කරයි. විටමින් B12 අවශෝෂණයට අවශ්‍ය අභ්‍යන්තර සාධකය නිපදවයි.',
        ta: 'J-வடிவ உறுப்பு. புரோட்டீன்களை செரிக்க ஹைட்ரோகுளோரிக் அமிலம் (pH 1.5-2.0) மற்றும் பெப்சினைச் சுரக்கிறது. வைட்டமின் B12 உறிஞ்சுதலுக்கு உதவுகிறது.'
      },
      medical: {
        en: 'Divisions: Cardia, Fundus, Body, Antrum, and Pylorus. Parietal cells possess H+/K+ ATPase pumps stimulated by Histamine (H2), Gastrin, and Acetylcholine (M3). Helicobacter pylori infection causes chronic gastritis, peptic ulcer disease, and gastric adenocarcinoma/MALToma.',
        si: 'කාඩියාව, ෆන්ඩසය, දේහය, ඇන්ට්‍රම සහ පයිලෝරසයෙන් සමන්විතයි. H+/K+ ATPase පොම්ප මගින් අම්ල ස්‍රාවය කෙරේ. H. pylori බැක්ටීරියාව නිසා ආමාශ තුවාල හා පිළිකා හටගත හැක.',
        ta: 'ஹெலிகோபாக்டர் பைலோரி பாக்டீரியா தொற்றால் அல்சர் மற்றும் இரைப்பை புண்கள் உண்டாகலாம். புரோட்டான் பம்ப் அமிலத்தை உருவாக்குகிறது.'
      }
    },
    funFact: {
      en: 'The acid in your stomach is strong enough to dissolve metal razor blades, but mucus protects your stomach wall from digesting itself!',
      si: 'ආමාශයේ ඇති අම්ලය රේසර් තලයක් පවා දිය කිරීමට සමත් වුවද, ශ්ලේෂ්මල ස්ථරය මගින් ආමාශය ආරක්ෂා කරයි!',
      ta: 'இரைப்பை அமிலம் ரேஸர் பிளேட்டையே கரைக்கும் அளவுக்கு தீவிரமானது, ஆனால் சளி போன்ற படலம் வயிற்றைப் பாதுகாக்கிறது!'
    },
    clinicalNotes: {
      en: 'Pernicious anemia occurs due to autoimmune destruction of parietal cells (loss of Intrinsic Factor). Proton Pump Inhibitors (e.g., omeprazole) block the final common pathway of acid secretion.',
      si: 'පැරයිටල් සෛල විනාශ වීම නිසා විටමින් B12 ඌනතාවය සහ පර්නීෂස් රක්තහීනතාවය ඇතිවේ.',
      ta: 'வைட்டமின் B12 உறிஞ்சப்படாவிட்டால் கடுமையான இரத்த சோகை (பெர்னிசியஸ் அனீமியா) ஏற்படும்.'
    },
    neurovascular: {
      arterial: 'Celiac trunk (Left gastric, Right gastric, Gastroduodenal, Splenic)',
      venous: 'Portal vein and splenic vein',
      innervation: 'Vagus nerve (increases motility/acid) and Greater splanchnic nerve',
      lymphatic: 'Celiac lymph nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Mashes food like a blender', si: 'ආහාර අඹරා දියර කරයි', ta: 'உணவை கூழாக்குகிறது' },
        { en: 'Kills bad germs with acid', si: 'අම්ල මගින් විෂබීජ විනාශ කරයි', ta: 'கிருமிகளை அழிக்கிறது' }
      ],
      al: [
        { en: 'Protein chemical breakdown via pepsin', si: 'පෙප්සින් මගින් ප්‍රෝටීන් ජීර්ණය ආරම්භ කිරීම', ta: 'புரதச் செரிமானம்' },
        { en: 'Intrinsic factor synthesis for B12', si: 'B12 අවශෝෂණයට අභ්‍යන්තර සාධකය සැපයීම', ta: 'வைட்டமின் B12 உறிஞ்சுதல் காரணி' }
      ],
      medical: [
        { en: 'Parietal proton pump secretion regulation', si: 'පැරයිටල් ප්‍රෝටෝන පොම්ප පාලනය', ta: 'அமில சுரப்பு கட்டுப்பாடு' },
        { en: 'Gastric receptive relaxation & chyme metering', si: 'ආහාර ලැබීමේදී ලිහිල් වීම සහ පයිලෝරික් පිටවීම පාලනය', ta: 'இரைப்பை தளர்வு மற்றும் உணவு வெளியேற்றம்' }
      ]
    }
  },

  // --- URINARY SYSTEM ---
  {
    id: 'urinary_kidney',
    name: {
      en: 'Kidneys & Nephrons',
      si: 'වකුගඩු සහ නෙෆ්‍රෝන',
      ta: 'சிறுநீரகங்கள் மற்றும் நெப்ரான்கள்'
    },
    latinName: 'Ren / Nephros',
    systemId: 'urinary',
    category: 'Renal & Excretory',
    position3D: [-0.4, -0.1, -0.2],
    scale3D: [0.7, 0.9, 0.6],
    color: '#854d0e',
    description: {
      primary: {
        en: 'The master liquid cleaners of your body! Day and night, these two bean-shaped wonders wash dirty blood and flush out toxins through pee.',
        si: 'ඔබේ සිරුරේ ප්‍රධාන දියර පිරිසිදු කරන්නන්! මේ බෝංචි ඇට හැඩැති වකුගඩු දෙක දිවා රෑ නොබලා ලේ සෝදා විෂ ද්‍රව්‍ය මුත්‍රා මගින් පිටතට යවයි.',
        ta: 'உடலின் தலைசிறந்த இரத்த சுத்திகரிப்பு ஆலை! இந்த இரண்டு அவரை விதை வடிவ உறுப்புகளும் இரத்தத்தை சுத்தம் செய்து நச்சுகளை சிறுநீராக வெளியேற்றுகின்றன.'
      },
      al: {
        en: 'Retroperitoneal organs located between T12 and L3. Each kidney contains ~1 million nephrons composed of Bowman’s capsule, glomerulus, Proximal Convoluted Tubule, Loop of Henle, and Distal Convoluted Tubule. Regulates blood volume, osmolarity, and produces erythropoietin.',
        si: 'T12 සහ L3 අතර රෙට්‍රොපෙරිටෝනියල්ව පිහිටයි. සෑම වකුගඩුවකම නෙෆ්‍රෝන මිලියනයක් පමණ ඇත. බෝමන් කෝෂය, ග්ලෝමරුලසය, හෙන්ලේ පුඩුව ඔස්සේ රුධිර පරිමාව හා ආස්‍රැති පීඩනය පාලනය කරයි.',
        ta: 'முதுகின் உட்புறத்தில் அமைந்துள்ளன. ஒவ்வொரு சிறுநீரகத்திலும் 10 லட்சம் நெப்ரான்கள் உள்ளன. இரத்த அழுத்தத்தை ஒழுங்குபடுத்தி, இரத்த சிவப்பு அணுக்களை உருவாக்க எரித்ரோபொய்டினை சுரக்கின்றன.'
      },
      medical: {
        en: 'Renal cortex contains glomeruli and convoluted tubules; renal medulla contains pyramids with Henle loops generating 1200 mOsm medullary hypertonicity via countercurrent multiplication. Juxtaglomerular apparatus secretes Renin in response to decreased renal perfusion. GFR equation: Kf × (Pgc - Pbs - πgc).',
        si: 'බාහිකය සහ මජ්ජාව ලෙස බෙදේ. ප්‍රතිප්‍රවාහ ගුණක යාන්ත්‍රණය මගින් ආස්‍රැති සාන්ද්‍රණය පවත්වා ගනියි. පීඩනය අඩුවූ විට ජක්ස්ටාග්ලෝමරුලර් උපකරණයෙන් රෙනින් (Renin) හෝමෝනය ස්‍රාවය වේ.',
        ta: 'கிளாமருலர் வடிகட்டல் வீதம் (GFR) சிறுநீரக ஆரோக்கியத்தை அளவிடுகிறது. இரத்த அழுத்தம் குறையும் போது ரெனின் என்ற ஹார்மோனை சுரந்து அழுத்தத்தை சீராக்குகிறது.'
      }
    },
    funFact: {
      en: 'Your kidneys filter your entire volume of blood more than 40 times every single day!',
      si: 'ඔබේ වකුගඩු දිනකට 40 වතාවකට වඩා ඔබේ මුළු රුධිර ප්‍රමාණයම පෙරහන් කර පිරිසිදු කරයි!',
      ta: 'உங்கள் உடலின் மொத்த இரத்தத்தையும் ஒரு நாளைக்கு 40 முறைக்கும் மேல் சிறுநீரகங்கள் வடிகட்டுகின்றன!'
    },
    clinicalNotes: {
      en: 'Chronic Kidney Disease (CKD) manifests with uremia, metabolic acidosis, hyperkalemia, and normocytic anemia due to loss of erythropoietin.',
      si: 'දීර්ඝකාලීන වකුගඩු රෝගයේදී රුධිරයේ යූරියා වැඩිවීම, පොටෑසියම් වැඩිවීම සහ රක්තහීනතාවය ඇතිවේ.',
      ta: 'நாள்பட்ட சிறுநீரக செயலிழப்பில் நச்சுகள் கூடி, இரத்த சோகை மற்றும் அமிலத்தன்மை அதிகரிக்கிறது.'
    },
    neurovascular: {
      arterial: 'Renal Artery directly from Abdominal Aorta',
      venous: 'Left and Right Renal Veins directly to Inferior Vena Cava',
      innervation: 'Renal plexus (sympathetic T10-L1 causes vasoconstriction)',
      lymphatic: 'Lumbar (aortic) lymph nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Filters blood clean', si: 'ලේ පෙරහන් කර පිරිසිදු කරයි', ta: 'இரத்தத்தை சுத்திகரிக்கிறது' },
        { en: 'Makes urine to remove waste', si: 'අපද්‍රව්‍ය ඉවත් කිරීමට මුත්‍රා හදයි', ta: 'கழிவுகளை வெளியேற்ற சிறுநீரை உருவாக்குகிறது' }
      ],
      al: [
        { en: 'Ultrafiltration and tubular reabsorption', si: 'අතිපෙරීම සහ නාලිකාමය නැවත අවශෝෂණය', ta: 'வடிகட்டுதல் மற்றும் மறுஉறிஞ்சுதல்' },
        { en: 'Erythropoietin (EPO) red blood cell stimulus', si: 'රුධිර සෛල නිපදවීමට එරිත්‍රොපොයෙටින් සැපයීම', ta: 'சிவப்பணு உற்பத்தி தூண்டுதல்' }
      ],
      medical: [
        { en: 'Renin-Angiotensin-Aldosterone System (RAAS)', si: 'RAAS පද්ධතිය හරහා පීඩනය හා සෝඩියම් පාලනය', ta: 'RAAS மூலம் இரத்த அழுத்தக் கட்டுப்பாடு' },
        { en: 'Active Vitamin D (Calcitriol) synthesis', si: 'ක්‍රියාකාරී විටමින් D නිපදවීම', ta: 'வைட்டமின் D உருவாக்கம்' }
      ]
    }
  },

  // --- FULL BODY ANATOMY SYSTEM ---
  {
    id: 'fullbody_head_cranium',
    name: {
      en: 'Cephalic Region & Brain',
      si: 'හිස සහ මොළය',
      ta: 'தலை மற்றும் மூளை'
    },
    latinName: 'Caput et Encephalon',
    systemId: 'fullbody',
    category: 'Nervous & Sensory Center',
    position3D: [0, 1.85, 0.05],
    scale3D: [0.8, 0.9, 0.8],
    color: '#a855f7',
    description: {
      primary: {
        en: 'The master control computer of your whole body! Protected by your skull bones, your brain thinks, dreams, feels emotions, and tells your muscles how to move.',
        si: 'ඔබේ මුළු ශරීරයේම ප්‍රධාන පරිගණකයයි! හිස් කබල තුළ ආරක්ෂිතව ඇති මොළය, සිතීමට, හැඟීම් ඇතිවීමට සහ මාංශ පේශි හසුරුවන්නට උපදෙස් දෙයි.',
        ta: 'உங்கள் உடலின் பிரதான கட்டுப்பாட்டு கணினி! மண்டை ஓட்டினால் பாதுகாக்கப்பட்ட மூளை, சிந்திக்க, உணர மற்றும் தசைகளை இயக்க உதவுகிறது.'
      },
      al: {
        en: 'Housed within the rigid neurocranium, the encephalon coordinates higher cognitive faculties, cranial nerves (CN I-XII), homeostatic neuroendocrine integration via the hypothalamus, and brainstem autonomic cardiovascular and respiratory reflexes.',
        si: 'කපාලය තුළ පිහිටා ඇත. උසස් ඥානන ක්‍රියාකාරකම්, කපාල ස්නායු 12, හයිපොතැලමස මගින් අන්තරාසර්ග පාලනය සහ ශ්වසන/හෘද ප්‍රත්‍යාවර්ත මෙහෙයවයි.',
        ta: 'மூளை உயர் அறிவாற்றல், கபால நரம்புகள், ஹைபோதலாமஸ் மூலமான நாளமில்லா சுரப்பி ஒருங்கிணைப்பு மற்றும் மூளைத்தண்டு தன்னிச்சை அனிச்சைகளை நிர்வகிக்கிறது.'
      },
      medical: {
        en: 'Intracranial volume adheres to the Monro-Kellie hypothesis (Brain 80%, CSF 10%, Blood 10%). Cerebral blood flow is autoregulated between MAP 60-150 mmHg via the Circle of Willis. Evaluated via Glasgow Coma Scale (GCS) and sensitive to herniation syndromes.',
        si: 'Monro-Kellie න්‍යාය අනුව කපාල පීඩනය පාලනය වේ. විලිස් ධමනි චක්‍රය (Circle of Willis) මගින් රුධිර සැපයුම සමතුලිත කෙරේ. කපාල පීඩනය වැඩිවීම හර්නියා තත්ත්වයන්ට (Herniation) මගපාදිය හැක.',
        ta: 'மன்றோ-கெல்லி கோட்பாட்டின் படி மூளை மண்டை ஓட்டுக்குள் அழுத்தம் பெறுகிறது. வில்லிஸ் தமனி வட்டம் இரத்த விநியோகத்தை சீராக்குகிறது. GCS மூலம் கோமா மற்றும் நரம்பியல் நிலை அளவிடப்படுகிறது.'
      }
    },
    funFact: {
      en: 'Your brain generates about 20 watts of electrical power — enough to power a low-wattage LED light bulb!',
      si: 'ඔබේ මොළය LED විදුලි බුබුලක් දැල්වීමට ප්‍රමාණවත් වොට් 20ක විදුලි බලයක් නිපදවයි!',
      ta: 'உங்கள் மூளை சுமார் 20 வாட்ஸ் மின்சாரத்தை உற்பத்தி செய்கிறது — ஒரு சிறிய LED பல்பை எரிக்க இது போதும்!'
    },
    clinicalNotes: {
      en: 'Traumatic Brain Injury (TBI) can precipitate epidural (middle meningeal artery) or subdural (bridging veins) hematomas requiring urgent craniotomy decompression.',
      si: 'හිසට සිදුවන අනතුරුවලදී කපාල අභ්‍යන්තර රුධිර වහනය (Hematoma) ඇතිවිය හැකි අතර හදිසි ශල්‍යකර්ම මගින් පීඩනය මුදාහැරිය යුතුය.',
      ta: 'தலையில் ஏற்படும் அதிர்ச்சி மூளை ரத்தக் கசிவுக்கு வழிவகுக்கலாம், உடனடியாக அறுவை சிகிச்சை தேவைப்படலாம்.'
    },
    neurovascular: {
      arterial: 'Internal Carotid Arteries and Vertebrobasilar System (Circle of Willis)',
      venous: 'Dural venous sinuses draining into Internal Jugular Veins',
      innervation: 'Cranial nerves I through XII',
      lymphatic: 'Meningeal glymphatic drainage to deep cervical lymph nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Thinking, learning, and feeling', si: 'සිතීම, ඉගෙනීම සහ හැඟීම් දැනීම', ta: 'சிந்தித்தல் மற்றும் உணர்தல்' },
        { en: 'Directs all body movements', si: 'ශරීරයේ චලනයන් මෙහෙයවීම', ta: 'உடல் இயக்கத்தை வழிநடத்துகிறது' }
      ],
      al: [
        { en: 'Synaptic integration and motor planning', si: 'සිනැප්සීය ඒකාබද්ධතාව සහ චාලක සැලසුම්කරණය', ta: 'நரம்பு தூண்டுதல் ஒருங்கிணைப்பு' },
        { en: 'Autonomic homeostatic equilibrium', si: 'ස්වයංසාධක සමස්ථිතිය පවත්වා ගැනීම', ta: 'தன்னிச்சை உடல் சமநிலை' }
      ],
      medical: [
        { en: 'Regulation of cerebral perfusion pressure (CPP = MAP - ICP)', si: 'කපාල විසරණ පීඩනය පාලනය කිරීම', ta: 'மூளை இரத்த ஓட்ட அழுத்த ஒழுங்குமுறை' },
        { en: 'Endocrine neurosecretion via hypothalamic-pituitary axis', si: 'හයිපොතැලමස-පිටියුටරි හෝමෝන සංස්ලේෂණය', ta: 'ஹார்மோன் சுரப்பு ஒழுங்குமுறை' }
      ]
    }
  },
  {
    id: 'fullbody_cardiac_mediastinum',
    name: {
      en: 'Thoracic Heart & Great Vessels',
      si: 'උරස් හෘදය සහ ප්‍රධාන රුධිර නාල',
      ta: 'மார்பு இதயம் மற்றும் பெரு நாளங்கள்'
    },
    latinName: 'Cor et Vasa Sanguinea Mediastini',
    systemId: 'fullbody',
    category: 'Cardiovascular Center',
    position3D: [-0.08, 0.72, 0.16],
    scale3D: [0.7, 0.7, 0.7],
    color: '#ef4444',
    description: {
      primary: {
        en: 'Nested in the center-left of your chest, this energetic pump beats rhythmically without a single pause, distributing oxygenated blood throughout all your organs and limbs.',
        si: 'පපුවේ වම් පැත්තට වන්නට පිහිටා ඇති මෙම ශක්තිමත් පොම්පය, කිසිදු විවේකයකින් තොරව ගැහෙමින් සියලුම අවයවවලට ඔක්සිජන් සහිත රුධිරය බෙදාහරියි.',
        ta: 'மார்பின் மைய-இடது பகுதியில் அமைந்துள்ள இந்த பம்ப், உடலின் அனைத்து உறுப்புகளுக்கும் இரத்தத்தை விநியோகிக்க தொடர்ந்து துடிக்கிறது.'
      },
      al: {
        en: 'Occupying the middle mediastinum of the thoracic cavity enclosed by the fibroserous pericardium. Pumps deoxygenated blood to the pulmonary trunk and receives oxygenated return to discharge through the aorta under systolic pressure.',
        si: 'උරස් කුහරයේ මධ්‍ය මධ්‍යස්ථිතිකයේ (Middle Mediastinum) පෙරිකාඩියම තුළ පිහිටයි. පෙනහළු සහ පද්ධතිමය රුධිර සංසරණය එකවර ක්‍රියාත්මක කරයි.',
        ta: 'மார்புக் குழிக்குள் பெரிகார்டியத்தால் சூழப்பட்டு அமைந்துள்ளது. உடலுக்கு ஆக்ஸிஜன் இரத்தத்தை பெருநாடி வழியே செலுத்துகிறது.'
      },
      medical: {
        en: 'Positioned retrosternal from 3rd to 6th costal cartilages. Mediates cardiac output (SV × HR = ~5 L/min). Vulnerable to cardiac tamponade (Beck’s triad), ischemic coronary artery disease, and dissecting aortic aneurysms.',
        si: '3 වන සිට 6 වන පර්ශුක කාටිලේජ අතර පිහිටයි. හෘද ප්‍රතිදානය විනාඩියකට ලීටර් 5ක් පමණ වේ. හෘද පේශි මරණය (Myocardial Infarction) සහ කිරීටක ධමනි අවහිරතා බහුලව ඇතිවේ.',
        ta: 'இதய வெளியீட்டை (5 L/min) உருவாக்குகிறது. கரோனரி தமனி அடைப்பு மற்றும் பெரிகார்டியல் திரவம் சேருதல் போன்றவற்றால் பாதிக்கப்படலாம்.'
      }
    },
    funFact: {
      en: 'In one year, your heart pumps enough blood to fill an Olympic-sized swimming pool!',
      si: 'වසරක් ඇතුළත ඔබේ හෘදය ඔලිම්පික් පිහිනුම් තටාකයක් පිරවිය හැකි තරම් රුධිර ප්‍රමාණයක් පොම්ප කරයි!',
      ta: 'ஒரு வருடத்தில், உங்கள் இதயம் ஒரு ஒலிம்பிக் நீச்சல் குளத்தை நிரப்ப போதுமான இரத்தத்தை பம்ப் செய்கிறது!'
    },
    clinicalNotes: {
      en: 'Auscultation at 4 classic precordial sites (Aortic: Right 2nd intercostal; Pulmonic: Left 2nd; Tricuspid: Left lower sternal border; Mitral: Left 5th intercostal midclavicular line).',
      si: 'හෘද ශබ්ද පරීක්ෂාව (Auscultation) සඳහා පර්ශුක අතර අවකාශයන් 4ක් භාවිතා කරයි.',
      ta: 'மார்பின் நான்கு முக்கிய பகுதிகளில் ஸ்டெதஸ்கோப் மூலம் இதய ஒலிகள் துல்லியமாக கேட்கப்படுகின்றன.'
    },
    neurovascular: {
      arterial: 'Right and Left Coronary Arteries from ascending aorta',
      venous: 'Coronary Sinus directly into the right atrium',
      innervation: 'Cardiac plexus (Vagus nerve slows HR, Sympathetic T1-T4 accelerates)',
      lymphatic: 'Tracheobronchial and mediastinal lymph nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Circulates blood everywhere', si: 'සිරුර පුරා රුධිරය සංසරණය කරයි', ta: 'இரத்தத்தை உடல் முழுவதும் சுழற்றுகிறது' },
        { en: 'Supplies energy to muscles', si: 'මාංශ පේශිවලට ශක්තිය සපයයි', ta: 'தசைகளுக்கு ஆக்ஸிஜன் மற்றும் ஊட்டமளிக்கிறது' }
      ],
      al: [
        { en: 'Dual circuit systemic/pulmonary flow', si: 'ද්විත්ව සංසරණ ප්‍රවාහය පවත්වා ගැනීම', ta: 'இரட்டை சுற்றோட்டத்தை இயக்குகிறது' },
        { en: 'Myogenic rhythm generated by SA node', si: 'SA ගැටය මගින් ස්වයංජනක ස්පන්දන ජනනය', ta: 'மின் தூண்டுதல்களை உருவாக்குகிறது' }
      ],
      medical: [
        { en: 'Maintenance of MAP and tissue perfusion', si: 'මධ්‍යන්‍ය ධමනි පීඩනය පවත්වා ගැනීම', ta: 'திசுக்களுக்கு போதிய இரத்த ஓட்டம் அளித்தல்' },
        { en: 'Cardiovascular endocrine feedback (ANP release)', si: 'ANP හෝමෝනය මුදාහැරීම', ta: 'இதய ஹார்மோன் சுரப்பு' }
      ]
    }
  },
  {
    id: 'fullbody_pulmonary_lungs',
    name: {
      en: 'Bilateral Lungs & Airway Tree',
      si: 'ද්විපාර්ශ්වික පෙනහළු සහ ශ්වාසනාල ගස',
      ta: 'இருபுற நுரையீரல் மற்றும் சுவாச மரம்'
    },
    latinName: 'Pulmones et Arbor Bronchialis',
    systemId: 'fullbody',
    category: 'Respiratory System',
    position3D: [0.38, 0.75, 0.1],
    scale3D: [0.75, 0.8, 0.75],
    color: '#38bdf8',
    description: {
      primary: {
        en: 'Two soft, elastic lungs resting securely inside your ribcage. They pull in fresh oxygen from the air you breathe and expel carbon dioxide exhaust gas.',
        si: 'ඉළඇට කූඩුව තුළ පිහිටා ඇති මෘදු පෙනහළු දෙකකි. ඒවා ඔබ ගන්නා වාතයෙන් ඔක්සිජන් උරාගෙන කාබන් ඩයොක්සයිඩ් පිට කරයි.',
        ta: 'விலா எலும்புக் கூண்டுக்குள் அமைந்துள்ள இரண்டு மென்மையான நுரையீரல்கள். நீங்கள் சுவாசிக்கும் காற்றில் இருந்து ஆக்ஸிஜனை எடுத்து கரியமில வாயுவை வெளியேற்றுகின்றன.'
      },
      al: {
        en: 'Flank the mediastinum within the thoracic cavity, divided into right (3 lobes) and left (2 lobes with cardiac notch). Gas exchange occurs across 300-500 million alveoli, optimized by pulmonary surfactant (DPPC).',
        si: 'දකුණු පෙනහල්ල ඛණ්ඩිකා 3කින්ද, වම් පෙනහල්ල ඛණ්ඩිකා 2කින්ද සමන්විතය. මිලියන 300කට අධික වායුකෝෂ තුළ වායු හුවමාරුව සිදුවේ.',
        ta: 'வலது நுரையீரல் 3 பிரிவுகளையும், இடது நுரையீரல் 2 பிரிவுகளையும் கொண்டது. 30 கோடிக்கும் அதிகமான நுண்ணறைகளில் வாயுப் பரிமாற்றம் நிகழ்கிறது.'
      },
      medical: {
        en: 'Regulates acid-base balance via alveolar ventilation (CO2 expiration). Evaluated with Spirometry (FEV1, FVC), arterial blood gas (ABG), and CT chest imaging. Common pathologies include pneumonia, pulmonary embolism, and pneumothorax.',
        si: 'රුධිරයේ pH අගය පාලනය කරයි. FEV1/FVC මිනුම් මගින් පෙනහළු ධාරිතාව පරීක්ෂා කෙරේ. නියුමෝනියාව සහ ඇදුම වැනි තත්ත්වයන් සුලබව ඇතිවේ.',
        ta: 'உடலின் அமில-கார சமநிலையை ஒழுங்குபடுத்துகிறது. ஆஸ்துமா மற்றும் நிமோனியா போன்ற நோய்களால் பாதிக்கப்படலாம்.'
      }
    },
    funFact: {
      en: 'If you spread out all the tiny air sacs (alveoli) inside both lungs, they would cover an entire tennis court!',
      si: 'දෙපෙනහල්ලේම ඇති සියලුම වායු කෝෂ දිගහැරියහොත් එය මුළු ටෙනිස් පිටියක්ම ආවරණය කළ හැක!',
      ta: 'நுரையீரலின் அனைத்து நுண்ணறைகளையும் பரப்பினால், அது ஒரு முழு டென்னிஸ் மைதானத்தை மூடும்!'
    },
    clinicalNotes: {
      en: 'Chest tube thoracostomy is placed in the "safe triangle" (5th intercostal space, midaxillary line) to drain fluid (pleural effusion) or air (pneumothorax).',
      si: 'පෙනහළු තුළ වාතය හෝ තරල එක්රැස් වූ විට 5 වන අන්තර්පාර්ශුක අවකාශය ඔස්සේ පපුවේ බටයක් (Chest tube) ඇතුල් කරනු ලැබේ.',
      ta: 'மார்பில் காற்று அல்லது திரவம் தேங்கினால் 5வது விலா எலும்பிடை இடைவெளியில் குழாய் செலுத்தப்பட்டு வடிகட்டப்படுகிறது.'
    },
    neurovascular: {
      arterial: 'Pulmonary Arteries (deoxygenated) & Bronchial Arteries (oxygenated nutrient supply)',
      venous: 'Pulmonary Veins (oxygenated) & Azygos/Hemiazygos system',
      innervation: 'Pulmonary plexus (Vagus nerve bronchoconstricts, Sympathetics bronchodilate)',
      lymphatic: 'Tracheobronchial and bronchopulmonary (hilar) nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Breathes in oxygen', si: 'ඔක්සිජන් ආශ්වාස කරයි', ta: 'ஆக்ஸிஜனை உள்ளிழுக்கிறது' },
        { en: 'Exhales waste carbon dioxide', si: 'අපද්‍රව්‍ය වායූන් ප්‍රශ්වාස කරයි', ta: 'கரியமில வாயுவை வெளியேற்றுகிறது' }
      ],
      al: [
        { en: 'Alveolar-capillary diffusion', si: 'වායුකෝෂ-කේශනාලිකා විසරණය', ta: 'நுண்ணறை வாயுப் பரிமாற்றம்' },
        { en: 'Phonatory airflow for vocal speech', si: 'කථනය සඳහා වායු ප්‍රවාහය සැපයීම', ta: 'பேசுவதற்கான காற்றோட்டத்தை அளிக்கிறது' }
      ],
      medical: [
        { en: 'Respiratory acid-base compensation', si: 'ශ්වසන ආම්ලික-භෂ්ම සමතුලිතතාව', ta: 'அமில-கார சமநிலை மேலாண்மை' },
        { en: 'Endothelial conversion of Angiotensin I to II (ACE)', si: 'ඇන්ජියෝටෙන්සින් I සිට II බවට පත්කිරීම (ACE)', ta: 'ACE என்சைம் செயல்பாடு' }
      ]
    }
  },
  {
    id: 'fullbody_abdominal_viscera',
    name: {
      en: 'Abdominal Viscera: Liver & Stomach',
      si: 'උදරීය අවයව: අක්මාව සහ ආමාශය',
      ta: 'வயிற்று உறுப்புகள்: கல்லீரல் மற்றும் இரைப்பை'
    },
    latinName: 'Hepar et Gaster / Viscera Abdominalis',
    systemId: 'fullbody',
    category: 'Gastrointestinal Hub',
    position3D: [0.18, 0.18, 0.18],
    scale3D: [0.8, 0.75, 0.75],
    color: '#f97316',
    description: {
      primary: {
        en: 'The processing kitchen and biochemical chemical factory of your body! The stomach dissolves meals with acid, while the mighty liver filters toxins and stores healthy nutrients.',
        si: 'ශරීරයේ ප්‍රධාන රසායනාගාරය සහ ආහාර පිළියෙල කිරීමේ කර්මාන්තශාලාවයි! ආමාශය ආහාර දිරවීමට උපකාරී වන අතර අක්මාව විෂ ඉවත් කර පෝෂ්‍ය පදාර්ථ ගබඩා කරයි.',
        ta: 'உடலின் வேதியியல் தொழிற்சாலை! இரைப்பை உணவை அமிலத்தால் செரிக்கிறது, கல்லீரல் நச்சுகளை நீக்கி சத்துக்களை சேமிக்கிறது.'
      },
      al: {
        en: 'Located in the right and left hypochondrium below the diaphragm. The liver performs gluconeogenesis, plasma protein synthesis, and bile production. The stomach secretes HCl and pepsinogen initiating protein catabolism.',
        si: 'ප්‍රාචීරයට පහළින් පිහිටයි. අක්මාව පිත්තලවණ නිපදවීම, ග්ලූකෝස් පරිවෘත්තිය හා ප්ලාස්මා ප්‍රෝටීන නිපදවයි. ආමාශය ආම්ලික පරිසරයක් මගින් ප්‍රෝටීන් ජීර්ණය අරඹයි.',
        ta: 'கல்லீரல் பித்தநீரை சுரந்து, நச்சு நீக்கம் செய்து, இரத்த புரதங்களை உருவாக்குகிறது. இரைப்பை அமிலத்தை சுரந்து புரதத்தை செரிக்கிறது.'
      },
      medical: {
        en: 'The liver receives dual perfusion (75% Portal Vein, 25% Hepatic Artery). Susceptible to cirrhosis, portal hypertension, and peptic ulcer disease. Gastric mucosa protected by prostaglandin-stimulated bicarbonate-mucus barrier.',
        si: 'ද්විත්ව රුධිර සැපයුමක් (ද්වාර ශිරාව 75%, අක්මා ධමනිය 25%) ලබයි. අක්මා සිරෝසිස් (Cirrhosis) සහ ගැස්ට්‍රයිටිස් (Gastritis) බහුල සායනික රෝග වේ.',
        ta: 'கல்லீரல் போர்டல் நரம்பு மற்றும் கல்லீரல் தமனி மூலம் இரத்தம் பெறுகிறது. மஞ்சள் காமாலை மற்றும் அல்சர் ஆகியவை முக்கிய நோய்களாகும்.'
      }
    },
    funFact: {
      en: 'The liver is the only human organ capable of completely regenerating itself from as little as 25% of original tissue!',
      si: 'අක්මාවෙන් 25%ක් ඉතිරිව තිබුණද එය නැවත සම්පූර්ණයෙන්ම වර්ධනය වීමේ පුදුමාකාර හැකියාවක් ඇත!',
      ta: 'கல்லீரலில் 25% பகுதி மட்டுமே எஞ்சியிருந்தாலும், அது தன்னைத்தானே முழுமையாக மீண்டும் வளர்க்கும் ஆற்றல் கொண்டது!'
    },
    clinicalNotes: {
      en: 'Murphy’s sign assesses acute cholecystitis. Hematemesis or melena can signal bleeding from gastric ulcers or esophageal varices caused by portal hypertension.',
      si: 'පිත්තාශයේ ආසාදන හඳුනාගැනීමට Murphy ලකුණ පරීක්ෂා කෙරේ. ආමාශයේ තුවාල ලේ වමනය ඇති කළ හැක.',
      ta: 'பித்தப்பை அழற்சி மற்றும் இரைப்பை புண் போன்றவை கடுமையான வயிற்று வலியை ஏற்படுத்தலாம்.'
    },
    neurovascular: {
      arterial: 'Celiac Trunk branches: Common Hepatic, Left Gastric, Splenic Arteries',
      venous: 'Portal Vein system draining to Hepatic Veins and IVC',
      innervation: 'Celiac plexus (Vagus nerve parasympathetic, Splanchnic sympathetics)',
      lymphatic: 'Celiac and porta hepatis lymph nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Digests food into energy', si: 'ආහාර ශක්තිය බවට පත්කරයි', ta: 'உணவை செரித்து ஆற்றலாக்குகிறது' },
        { en: 'Detoxifies chemicals', si: 'විෂ ද්‍රව්‍ය ඉවත් කරයි', ta: 'நச்சுகளை நீக்குகிறது' }
      ],
      al: [
        { en: 'Bile lipid emulsification', si: 'ලිපිඩ ජීර්ණයට පිත නිපදවීම', ta: 'கொழுப்பை செரிக்க பித்தநீர் சுரத்தல்' },
        { en: 'Glycogen storage and release', si: 'ග්ලයිකොජන් ගබඩා කිරීම හා මුදාහැරීම', ta: 'கிளைகோஜன் சேமிப்பு' }
      ],
      medical: [
        { en: 'Clotting factor synthesis (Factors II, VII, IX, X)', si: 'රුධිර කැටිගැසීමේ සාධක නිපදවීම', ta: 'இரத்தம் உறைதல் காரணிகள் உற்பத்தி' },
        { en: 'Bilirubin conjugation and clearance', si: 'බිලිරුබින් පරිවෘත්තිය හා බැහැර කිරීම', ta: 'பிலிரூபின் மேலாண்மை' }
      ]
    }
  },
  {
    id: 'fullbody_digestive_intestines',
    name: {
      en: 'Intestinal Tract: Small & Large Bowel',
      si: 'ආන්ත්‍රික මාර්ගය: කුඩා සහ මහා බඩවැල',
      ta: 'குடல் பாதை: சிறுகுடல் மற்றும் பெருங்குடல்'
    },
    latinName: 'Intestinum Tenue et Crassum',
    systemId: 'fullbody',
    category: 'Gastrointestinal Hub',
    position3D: [0, -0.22, 0.2],
    scale3D: [0.75, 0.65, 0.65],
    color: '#eab308',
    description: {
      primary: {
        en: 'A winding, folded highway where vitamins, minerals, and calories are absorbed into your bloodstream, while water is reclaimed to produce solid waste.',
        si: 'පෝෂ්‍ය පදාර්ථ සහ ජලය රුධිරයට අවශෝෂණය කරගන්නා දිගු වටකුරු මාර්ගයයි.',
        ta: 'வைட்டமின்கள் மற்றும் ஊட்டச்சத்துக்கள் இரத்தத்தில் உறிஞ்சப்படும் நீண்ட சுருண்ட பாதை.'
      },
      al: {
        en: 'Small intestine (Duodenum, Jejunum, Ileum) maximizes absorption via circular folds, villi, and microvilli. Large intestine (Colon, Cecum, Rectum) reclaims water/electrolytes and harbors symbiotic microbiome synthesizing Vitamin K.',
        si: 'කුඩා අන්ත්‍රය (ග්‍රහණිය, ජෙජුනම්, ඉලියම්) ක්ෂුද්‍ර ප්‍රසර මගින් අවශෝෂණ වර්ගඵලය වැඩිකරයි. මහා අන්ත්‍රය ජලය නැවත අවශෝෂණය කරයි.',
        ta: 'சிறுகுடல் சத்துக்களை உறிஞ்சுகிறது. பெருங்குடல் நீரை உறிஞ்சி கழிவை வெளியேற்றுகிறது, மேலும் வைட்டமின் K ஐ உருவாக்கும் நுண்ணுயிரிகளைக் கொண்டுள்ளது.'
      },
      medical: {
        en: 'Mesenteric circulation branches from SMA and IMA. Vulnerable to acute mesenteric ischemia, appendicitis (McBurney’s point tenderness), Crohn’s disease, ulcerative colitis, and colorectal adenocarcinoma.',
        si: 'SMA සහ IMA ධමනි මගින් රුධිරය සපයයි. ඇපෙන්ඩිසයිටිස් (Appendicitis) සහ මහාන්ත්‍ර පිළිකා සායනිකව වැදගත් වේ.',
        ta: 'அப்பென்டிசைடிஸ் மற்றும் குடல் அடைப்பு போன்ற அவசர அறுவை சிகிச்சை நிலைகள் இங்கு ஏற்படலாம்.'
      }
    },
    funFact: {
      en: 'Stretched out, the adult small intestine measures nearly 6 meters (20 feet) in length!',
      si: 'වැඩිහිටියෙකුගේ කුඩා බඩවැල දිගහැරියහොත් මීටර් 6ක් (අඩි 20ක්) පමණ දිගුය!',
      ta: 'ஒரு பெரிய மனிதரின் சிறுகுடல் சுமார் 6 மீட்டர் (20 அடி) நீளமுடையது!'
    },
    clinicalNotes: {
      en: 'Rovsing’s sign and Psoas sign help diagnose acute appendicitis. Bowel sounds are evaluated for ileus (hypoactive) or obstruction (high-pitched tinkling).',
      si: 'ඇපෙන්ඩිසයිටිස් හඳුනාගැනීමට McBurney ලක්ෂ්‍යය පරීක්ෂා කෙරේ.',
      ta: 'அப்பென்டிக்ஸ் வீக்கத்தை கண்டறிய மருத்துவர்கள் அடிவயிற்றில் அழுத்தி பரிசோதிக்கின்றனர்.'
    },
    neurovascular: {
      arterial: 'Superior and Inferior Mesenteric Arteries',
      venous: 'Portal vein drainage via Superior and Inferior Mesenteric Veins',
      innervation: 'Enteric Nervous System (Myenteric and Submucosal plexuses) modulated by Vagus',
      lymphatic: 'Lacteals to cisterna chyli and mesenteric nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Absorbs food nutrients', si: 'පෝෂ්‍ය පදාර්ථ උරාගනියි', ta: 'ஊட்டச்சத்துக்களை உறிஞ்சுகிறது' },
        { en: 'Reclaims body water', si: 'ජලය නැවත ලබාගනියි', ta: 'நீரை உறிஞ்சுகிறது' }
      ],
      al: [
        { en: 'Villar transport of amino acids and glucose', si: 'ග්ලූකෝස් සහ ඇමයිනෝ අම්ල ප්‍රවාහනය', ta: 'சத்துக்களை கடத்துதல்' },
        { en: 'Colonic microbial fermentation', si: 'මහාන්ත්‍ර බැක්ටීරියා පැසවීම', ta: 'குடல் நுண்ணுயிர் செயல்பாடு' }
      ],
      medical: [
        { en: 'Gut-associated lymphoid tissue (GALT) immunity', si: 'GALT ප්‍රතිශක්තිකරණ ක්‍රියාවලිය', ta: 'குடல் நோய் எதிர்ப்பு சக்தி' },
        { en: 'Enteroendocrine peptide hormone secretion', si: 'හෝමෝන ස්‍රාවය (CCK, Secretin)', ta: 'செரிமான ஹார்மோன் சுரப்பு' }
      ]
    }
  },
  {
    id: 'fullbody_retroperitoneal_urinary',
    name: {
      en: 'Renal Organs & Urinary Bladder',
      si: 'වකුගඩු සහ මුත්‍රාශය',
      ta: 'சிறுநீரகங்கள் மற்றும் சிறுநீர்ப்பை'
    },
    latinName: 'Renes, Ureter et Vesica Urinaria',
    systemId: 'fullbody',
    category: 'Urinary Excretion',
    position3D: [-0.35, 0.1, -0.12],
    scale3D: [0.7, 0.7, 0.7],
    color: '#10b981',
    description: {
      primary: {
        en: 'The twin bean-shaped purifying filters of your back! They cleanse waste from your blood every minute, sending urine through narrow tubes down to the bladder.',
        si: 'පිටුපස පිහිටි බෝංචි ඇට හැඩැති පෙරහන් යුගලයයි! ඒවා රුධිරය පිරිසිදු කර මුත්‍රාශය වෙත අපද්‍රව්‍ය යවයි.',
        ta: 'முதுகின் உட்புறத்தில் அமைந்துள்ள இரட்டை வடிகட்டிகள்! இரத்தத்தில் உள்ள கழிவுகளை நீக்கி சிறுநீராக வெளியேற்றுகின்றன.'
      },
      al: {
        en: 'Retroperitoneal organs located from T12 to L3 vertebrae. Filter ~180 L of plasma filtrate daily via 1-1.2 million nephrons per kidney, regulating electrolyte osmolarity, acid-base status, and extracellular fluid volume.',
        si: 'පශ්චාත් උදර බිත්තියේ T12-L3 මට්ටමේ පිහිටයි. දිනකට රුධිර ප්ලාස්මා ලීටර් 180ක් පෙරහන් කරමින් ඉලෙක්ට්‍රෝලයිට් සමතුලිතතාව පවත්වා ගනියි.',
        ta: 'T12 முதல் L3 வரையிலான முதுகெலும்பு பகுதியில் அமைந்துள்ளன. தினமும் 180 லிட்டர் இரத்தத்தை வடிகட்டி உடல் நீர் சமநிலையைக் காக்கின்றன.'
      },
      medical: {
        en: 'Renal blood flow equals 20-25% of cardiac output (~1.2 L/min). Controls long-term arterial blood pressure via the Renin-Angiotensin-Aldosterone System (RAAS) and stimulates erythropoiesis through EPO secretion.',
        si: 'හෘද ප්‍රතිදානයෙන් 20-25%ක් ලබයි. RAAS පද්ධතිය හරහා රුධිර පීඩනය පාලනය කරන අතර එරිත්‍රොපොයෙටින් හෝමෝනය මගින් රතු රුධිර සෛල නිපදවීම උත්තේජනය කරයි.',
        ta: 'இரத்த அழுத்தத்தை RAAS அமைப்பு மூலம் கட்டுப்படுத்துகிறது. எரித்ரோபொய்டின் ஹார்மோனை சுரந்து இரத்த அணுக்களை உருவாக்குகிறது.'
      }
    },
    funFact: {
      en: 'Even though kidneys account for less than 1% of your body weight, they receive 25% of all blood pumped by the heart!',
      si: 'වකුගඩු ශරීර බරෙන් 1%කට වඩා අඩු වුවද, හෘදය පොම්ප කරන මුළු රුධිරයෙන් 25%ක්ම ලබාගනියි!',
      ta: 'சிறுநீரகங்கள் உடல் எடையில் 1% மட்டுமே என்றாலும், இதயத்தின் இரத்தத்தில் 25% ஐப் பெறுகின்றன!'
    },
    clinicalNotes: {
      en: 'Nephrolithiasis (kidney stones) causes severe flank pain radiating to the groin. Acute kidney injury (AKI) is staged using KDIGO serum creatinine criteria.',
      si: 'වකුගඩු ගල් ඇතිවූ විට ඉකිලි දෙසට විහිදෙන තද වේදනාවක් හටගනී.',
      ta: 'சிறுநீரகக் கற்கள் இடுப்பில் தீவிர வலியை ஏற்படுத்துகின்றன.'
    },
    neurovascular: {
      arterial: 'Right and Left Renal Arteries direct from Abdominal Aorta',
      venous: 'Renal Veins draining directly into Inferior Vena Cava',
      innervation: 'Renal sympathetic plexus (T10-L1)',
      lymphatic: 'Para-aortic (lumbar) lymph nodes'
    },
    keyFunctions: {
      primary: [
        { en: 'Cleans waste from blood', si: 'රුධිරයෙන් අපද්‍රව්‍ය ඉවත් කරයි', ta: 'இரத்தக் கழிவுகளை வடிகட்டுகிறது' },
        { en: 'Stores and releases urine', si: 'මුත්‍රා ගබඩා කර පිටකරයි', ta: 'சிறுநீரை சேமித்து வெளியேற்றுகிறது' }
      ],
      al: [
        { en: 'Osmoregulation and fluid volume', si: 'තරල පරිමාව සහ ආස්‍රැති පාලනය', ta: 'நீர் சமநிலையை பராமரித்தல்' },
        { en: 'EPO secretion for red blood cells', si: 'රතු රුධිර සෛල උත්තේජනය (EPO)', ta: 'சிவப்பணு உற்பத்தி தூண்டுதல்' }
      ],
      medical: [
        { en: 'RAAS blood pressure regulation', si: 'RAAS මගින් රුධිර පීඩන පාලනය', ta: 'இரத்த அழுத்த ஒழுங்குமுறை' },
        { en: 'Acid-base balance via H+ secretion and HCO3- reabsorption', si: 'H+ සහ බයිකාබනේට් සමතුලිතතාව', ta: 'அமில-கார சமநிலை' }
      ]
    }
  },
  {
    id: 'fullbody_axial_skeleton',
    name: {
      en: 'Axial Skeleton: Spine & Thorax',
      si: 'අක්ෂක සැකිල්ල: කශේරුව සහ උරස් කූඩුව',
      ta: 'அச்சு எலும்புக்கூடு: முதுகெலும்பு மற்றும் மார்புக்கூடு'
    },
    latinName: 'Skeleton Axiale',
    systemId: 'fullbody',
    category: 'Skeletal Framework',
    position3D: [0, 0.95, -0.1],
    scale3D: [0.7, 0.85, 0.7],
    color: '#e2e8f0',
    description: {
      primary: {
        en: 'The strong central pillar of your body! The vertebral spine protects the delicate spinal cord, while the ribcage shields your heart and lungs from injury.',
        si: 'ඔබේ සිරුර කෙලින් තබාගන්නා ශක්තිමත් ප්‍රධාන කණුවයි! කශේරුව සුෂුම්නාව ආරක්ෂා කරන අතර, ඉළඇට කූඩුව හෘදය සහ පෙනහළු ආරක්ෂා කරයි.',
        ta: 'உங்கள் உடலின் மையத் தூண்! முதுகெலும்பு தண்டுவடத்தைப் பாதுகாக்கிறது, விலா எலும்புக்கூடு இதயம் மற்றும் நுரையீரலைப் பாதுகாக்கிறது.'
      },
      al: {
        en: 'Composed of 80 bones: skull (22), vertebral column (33 vertebrae: 7C, 12T, 5L, 5S fused, 4C fused), 12 pairs of ribs, and the sternum. Provides axial structural support and attachment for respiratory musculature.',
        si: 'අස්ථි 80කින් සමන්විතය: කපාලය (22), කශේරුකාව (33), පර්ශු යුගල 12 සහ උරෝස්ථිය. ශරීරයට සෘජු ආධාරකයක් ලබාදෙයි.',
        ta: '80 எலும்புகளைக் கொண்டது: மண்டை ஓடு, 33 முதுகெலும்புகள், 12 ஜோடி விலா எலும்புகள் மற்றும் மார்பெலும்பு.'
      },
      medical: {
        en: 'Preserves physiological spinal curvatures: cervical and lumbar lordosis, thoracic and sacral kyphosis. Clinically vulnerable to herniated intervertebral discs (L4-L5, L5-S1), scoliosis, vertebral compression fractures, and ankylosing spondylitis.',
        si: 'ගැබ්ගෙල හා කටී ප්‍රදේශවල උත්තල (Lordosis) වක්‍රද, උරස් ප්‍රදේශයේ අවතල (Kyphosis) වක්‍රද පවතී. කශේරුකා තැටි ලිස්සා යාම (Disc prolapse) සුලබ සායනික ගැටලුවකි.',
        ta: 'முதுகெலும்பு வளைவுகளை பராமரிக்கிறது. டிஸ்க் பிறழ்வு மற்றும் முதுகுத்தண்டு தேய்மானம் போன்றவை சிகிச்சை தேவைப்படும் நிலைகளாகும்.'
      }
    },
    funFact: {
      en: 'You are about 1 to 2 centimeters taller in the morning than in the evening because gravity compresses your spinal discs throughout the day!',
      si: 'දවස පුරා ගුරුත්වාකර්ෂණය නිසා කශේරුකා තැටි තෙරපෙන බැවින් ඔබ සවසට වඩා උදෑසනට සෙන්ටිමීටර 1-2ක් උසින් වැඩිය!',
      ta: 'ஈர்ப்பு விசை முதுகுத்தண்டு டிஸ்க்குகளை அழுத்துவதால் நீங்கள் மாலையை விட காலையில் 1-2 செ.மீ உயரமாக இருக்கிறீர்கள்!'
    },
    clinicalNotes: {
      en: 'Spinal cord terminates at L1-L2 (Conus Medullaris). Lumbar punctures are safely performed at the L3-L4 or L4-L5 intervertebral space below the spinal cord.',
      si: 'සුෂුම්නාව L1-L2 මට්ටමෙන් අවසන් වන බැවින් කොඳු ඇට පෙළෙන් තරල සාම්පල ගැනීම (Lumbar puncture) L3-L4 හෝ L4-L5 අතර සිදුකෙරේ.',
      ta: 'தண்டுவடம் L1-L2 பகுதியில் முடிவடைவதால், L3-L4 இடைவெளியில் தண்டுவட திரவம் பாதுகாப்பாக எடுக்கப்படுகிறது.'
    },
    neurovascular: {
      arterial: 'Vertebral Arteries, Posterior Intercostal Arteries, Lumbar Arteries',
      venous: 'Internal and external vertebral venous plexuses (Batson’s plexus)',
      innervation: 'Sinuvertebral nerves (recurrent meningeal branches of spinal nerves)',
      lymphatic: 'Intercostal, parasternal, and lumbar lymphatic chains'
    },
    keyFunctions: {
      primary: [
        { en: 'Protects vital organs', si: 'ප්‍රධාන අවයව ආරක්ෂා කරයි', ta: 'முக்கிய உறுப்புகளை பாதுகாக்கிறது' },
        { en: 'Keeps your posture straight', si: 'ශරීරය කෙලින් තබාගනියි', ta: 'உடலை நிமிர்ந்து நிற்க வைக்கிறது' }
      ],
      al: [
        { en: 'Protects the spinal cord', si: 'සුෂුම්නාව ආරක්ෂා කිරීම', ta: 'தண்டுவட பாதுகாப்பு' },
        { en: 'Thoracic mechanics for pulmonary ventilation', si: 'ශ්වසනය සඳහා උරස් චලනයන් සැපයීම', ta: 'சுவாசத்திற்கு உதவுகிறது' }
      ],
      medical: [
        { en: 'Hematopoiesis within red bone marrow (sternum, vertebrae, ribs)', si: 'රතු ඇට මිදුළු තුළ රුධිර සෛල නිපදවීම', ta: 'இரத்த அணுக்கள் உருவாக்கம்' },
        { en: 'Calcium and phosphate homeostatic reservoir', si: 'කැල්සියම් හා පොස්පේට් ඛනිජ ගබඩාව', ta: 'கால்சியம் சேமிப்பு' }
      ]
    }
  },
  {
    id: 'fullbody_appendicular_upper',
    name: {
      en: 'Upper Appendicular Limbs & Brachium',
      si: 'උඩුකාය උපග්‍රන්ථ සහ අත් පා',
      ta: 'மேல் மூட்டுகள் மற்றும் கைகள்'
    },
    latinName: 'Membrum Superius',
    systemId: 'fullbody',
    category: 'Skeletal & Locomotor',
    position3D: [-1.15, 0.45, 0],
    scale3D: [0.65, 0.8, 0.65],
    color: '#38bdf8',
    description: {
      primary: {
        en: 'Your shoulders, arms, and marvelous hands with opposable thumbs! They let you write, climb, hold tools, play instruments, and hug friends.',
        si: 'ඔබේ උරහිස්, දෑත් සහ ඇඟිලි! ඒවා මගින් ලිවීමට, උපකරණ පරිහරණය කිරීමට සහ විවිධ කාර්යයන් කිරීමට හැකියාව ලැබේ.',
        ta: 'உங்கள் தோள்கள், கைகள் மற்றும் விரல்கள்! எழுதுவதற்கும், பொருட்களை பிடிப்பதற்கும் பல வேலைகளை செய்வதற்கும் பயன்படுகின்றன.'
      },
      al: {
        en: 'Suspended from the pectoral girdle (clavicle and scapula). Features humerus, radius, ulna, 8 carpals, 5 metacarpals, and 14 phalanges. Enables wide multi-axial range of motion at glenohumeral joint and fine manual manipulation.',
        si: 'උර මේඛලාව (අක්ෂකය හා අංශ ඵලකය), ප්‍රගණ්ඩාව, අරය, අන්වරාස්ථිය සහ ඇඟිලි අස්ථිවලින් සමන්විතය. නිදහස් චලනයන් ලබාදෙයි.',
        ta: 'தோள்பட்டை, மேல் கை எலும்பு, முன்னங்கை எலும்புகள் மற்றும் கை விரல் எலும்புகளைக் கொண்டது.'
      },
      medical: {
        en: 'Innervated by the Brachial Plexus (C5-T1). Key clinical syndromes include Rotator cuff tears, Colles’ wrist fracture, Carpal Tunnel Syndrome (median nerve compression in carpal tunnel), and radial nerve palsy ("wrist drop").',
        si: 'බාහු ස්නායු ජාලය (C5-T1) මගින් පාලනය වේ. Carpal Tunnel Syndrome (මධ්‍ය ස්නායුව තෙරපීම) සුලබ තත්ත්වයකි.',
        ta: 'பிராக்கியல் பிளெக்ஸஸ் நரம்புகளால் இயக்கப்படுகிறது. மணிக்கட்டு நரம்பு அழுத்தம் (கார்ப்பல் டன்னல்) போன்ற நிலைகள் ஏற்படலாம்.'
      }
    },
    funFact: {
      en: 'More than half of the bones in the human body (106 out of 206) are located in your hands and feet!',
      si: 'මිනිස් සිරුරේ මුළු අස්ථි 206න් අඩකට වඩා (106ක්) පිහිටා ඇත්තේ ඔබේ දෑත් සහ පාදවලයි!',
      ta: 'மனித உடலின் 206 எலும்புகளில் பாதிக்கும் மேற்பட்டவை (106 எலும்புகள்) உங்கள் கைகளிலும் கால்களிலுமே உள்ளன!'
    },
    clinicalNotes: {
      en: 'Radial artery pulse is palpated lateral to the flexor carpi radialis tendon at the wrist. Brachial artery blood pressure auscultation is performed in the cubital fossa.',
      si: 'මැණික් කටුව අසලින් රේඩියල් නාඩි වැටීම පරීක්ෂා කෙරෙන අතර වැලමිට අසලින් රුධිර පීඩනය මනිනු ලැබේ.',
      ta: 'மணிக்கட்டில் ரேடியல் தமனி துடிப்பு பரிசோதிக்கப்பட்டு, முழங்கையில் இரத்த அழுத்தம் அளவிடப்படுகிறது.'
    },
    neurovascular: {
      arterial: 'Subclavian, Axillary, Brachial, Radial, and Ulnar Arteries (Deep and Superficial Palmar Arches)',
      venous: 'Cephalic, Basilic, Median Cubital, and deep brachial veins',
      innervation: 'Brachial Plexus terminal branches: Musculocutaneous, Axillary, Median, Radial, Ulnar nerves',
      lymphatic: 'Axillary lymph node basins (anterior, posterior, lateral, central, apical)'
    },
    keyFunctions: {
      primary: [
        { en: 'Fine motor handling & writing', si: 'ලිවීම සහ සියුම් කාර්යයන් කිරීම', ta: 'எழுதுதல் மற்றும் நுட்பமான வேலைகள்' },
        { en: 'Reaching and lifting objects', si: 'ද්‍රව්‍ය එසවීම සහ අල්ලාගැනීම', ta: 'பொருட்களை தூக்குதல் மற்றும் பிடித்தல்' }
      ],
      al: [
        { en: 'Prehensile grip mechanics', si: 'ග්‍රහණ යාන්ත්‍රණය සහ ඇඟිලි චලනය', ta: 'பொருட்களை பற்றும் திறன்' },
        { en: 'High degrees of spatial mobility', si: 'ඉහළ අවකාශීය චලන පරාසය', ta: 'சுழலும் மூட்டு இயக்கங்கள்' }
      ],
      medical: [
        { en: 'Cutaneous sensation via C5-T1 dermatomes', si: 'චර්ම සංවේදනය (C5-T1 Dermatomes)', ta: 'தோல் உணர்ச்சிப் பகுதிகள்' }
      ]
    }
  },
  {
    id: 'fullbody_appendicular_lower',
    name: {
      en: 'Lower Appendicular Limbs: Pelvis & Legs',
      si: 'යටිකාය උපග්‍රන්ථ: ශ්‍රෝණිය සහ පාද',
      ta: 'கீழ் மூட்டுகள்: இடுப்பு மற்றும் கால்கள்'
    },
    latinName: 'Membrum Inferius',
    systemId: 'fullbody',
    category: 'Skeletal & Locomotor',
    position3D: [0.45, -1.25, 0],
    scale3D: [0.65, 0.9, 0.65],
    color: '#06b6d4',
    description: {
      primary: {
        en: 'The powerhouse pillars that support your entire weight! Your hip joints, thigh bones, knees, and feet work together to let you sprint, kick, balance, and jump.',
        si: 'ඔබේ මුළු ශරීර බරම දරාසිටින ප්‍රධාන කුළුණු යුගලයයි! උකුල් සන්ධි, කලවා අස්ථි, දණහිස් සහ පාද මගින් ඔබට දුවන්නට, පනින්නට සහ සමබරව සිටින්නට හැකියාව ලැබේ.',
        ta: 'உங்கள் முழு உடல் எடையையும் தாங்கும் பலமான தூண்கள்! இடுப்பு, தொடை எலும்பு, முழங்கால் மற்றும் பாதங்கள் ஓடவும் சமநிலை காக்கவும் உதவுகின்றன.'
      },
      al: {
        en: 'Firmly anchored to the sacrum via the pelvic girdle (ilium, ischium, pubis). Includes femur (longest bone in human body), patella, tibia, fibula, 7 tarsals, 5 metatarsals, and 14 phalanges.',
        si: 'ශ්‍රෝණි මේඛලාව (ශ්‍රෝණි ඵලකය, ආසන අස්ථිය, ජඝනාස්ථිය), කලවාස්ථිය, පැටෙලාව, අන්තරජංඝාස්ථිය, බහිර්ජංඝාස්ථිය සහ පාද අස්ථිවලින් සමන්විතය.',
        ta: 'இடுப்பு வளையம், மனித உடலின் மிக நீளமான தொடை எலும்பு (பீமர்), முழங்கால் சில்லு மற்றும் கால் எலும்புகளைக் கொண்டது.'
      },
      medical: {
        en: 'Transmits ground reaction forces during bipedal gait. Vulnerable to femoral neck fractures in osteoporosis, knee ligament tears (ACL, PCL, menisci), deep vein thrombosis (DVT in popliteal/femoral veins), and sciatica (L4-S3).',
        si: 'දෙපයින් ගමන් කිරීමේදී බර දරාසිටියි. ඔස්ටියෝපොරෝසිස් තත්ත්වයේදී උකුල් සන්ධි බිඳීයාම් සහ ගැඹුරු ශිරා රුධිර කැටි ගැසීම් (DVT) මෙහිදී සුලබව සිදුවේ.',
        ta: 'நடக்கவும் ஓடவும் உதவுகிறது. ஆஸ்டியோபோரோசிஸ் எலும்பு முறிவு மற்றும் ஆழமான நரம்பு ரத்தக் கட்டிகள் (DVT) போன்ற மருத்துவ அபாயங்கள் உள்ளன.'
      }
    },
    funFact: {
      en: 'The human femur (thigh bone) is stronger than a concrete beam of the same size and can withstand forces up to 30 times your body weight!',
      si: 'මිනිස් කලවාස්ථිය (Femur) කොන්ක්‍රීට් කණුවකට වඩා ශක්තිමත් වන අතර ශරීර බර මෙන් 30 ගුණයක පීඩනයක් දරාගත හැක!',
      ta: 'மனித தொடை எலும்பு கான்கிரீட்டை விட வலிமையானது மற்றும் உடல் எடையை விட 30 மடங்கு அழுத்தத்தைத் தாங்கும்!'
    },
    clinicalNotes: {
      en: 'Femoral pulse is palpated at the midinguinal point (midway between ASIS and pubic symphysis). Lachman test and anterior drawer test diagnose ACL ligament disruption.',
      si: 'ඉකිලි ප්‍රදේශයෙන් ෆෙමරල් නාඩි වැටීම පරීක්ෂා කළ හැක. දණහිසේ බන්ධනී තුවාල පරීක්ෂාව සඳහා Lachman පරීක්ෂණය සිදුකෙරේ.',
      ta: 'இடுப்புப் பகுதியில் தொடை தமனி துடிப்பு துல்லியமாக உணரப்படுகிறது.'
    },
    neurovascular: {
      arterial: 'Common Iliac, Internal/External Iliac, Femoral, Popliteal, Anterior and Posterior Tibial Arteries',
      venous: 'Great and Small Saphenous Veins, Femoral and Popliteal veins',
      innervation: 'Lumbosacral plexus: Femoral nerve (L2-L4), Sciatic nerve (L4-S3, dividing into Tibial and Common Fibular)',
      lymphatic: 'Inguinal lymph node groups (superficial and deep)'
    },
    keyFunctions: {
      primary: [
        { en: 'Supports full body weight', si: 'මුළු ශරීර බරම දරාසිටියි', ta: 'முழு உடல் எடையை தாங்குகிறது' },
        { en: 'Walking, jumping, and running', si: 'ඇවිදීම, පැනීම සහ දිවීම', ta: 'நடத்தல் மற்றும் ஓடுதல்' }
      ],
      al: [
        { en: 'Bipedal locomotive propulsion', si: 'දෙපා ඇවිදීමේ ජෛව යාන්ත්‍රික තෙරපුම', ta: 'இரு கால் நடை இயக்கம்' },
        { en: 'Muscular venous calf muscle pump (peripheral heart)', si: 'කෙණ්ඩ මාංශ පේශි මගින් රුධිරය ඉහළට පොම්ප කිරීම', ta: 'இரத்தத்தை மேலேற்றும் தசை பம்ப்' }
      ],
      medical: [
        { en: 'Weight transmission across femoral acetabular axis', si: 'උකුල් සන්ධි අක්ෂය හරහා බර බෙදාහැරීම', ta: 'இடுப்பு மூட்டு எடை கடத்தல்' }
      ]
    }
  },
  {
    id: 'fullbody_integumentary_skin',
    name: {
      en: 'Integumentary Surface & Fascia',
      si: 'සම සහ බාහිර ආවරණ පද්ධතිය',
      ta: 'தோல் மற்றும் வெளிப்புற உறை'
    },
    latinName: 'Systema Integumentarium',
    systemId: 'fullbody',
    category: 'Protective Envelope',
    position3D: [0, 0.15, 0.42],
    scale3D: [1.0, 1.0, 1.0],
    color: '#06b6d4',
    description: {
      primary: {
        en: 'The waterproof living armor that covers you head-to-toe! Your skin keeps water and warmth inside, keeps germs and dirt out, and lets you feel soft touches, warmth, and cool breezes.',
        si: 'හිසේ සිට පාදාන්තය දක්වා මුළු සිරුරම ආවරණය කර ඇති ජීවී සන්නාහයයි! එය විෂබීජ ඇතුල්වීම වළක්වන අතර ස්පර්ශය දැනීමට උපකාරී වේ.',
        ta: 'தலை முதல் கால் வரை உங்களை பாதுகாக்கும் நீர்ப்புகா கவசம்! கிருமிகளை தடுத்து, வெப்பநிலையை சீராக்கி, தொடு உணர்வை அளிக்கிறது.'
      },
      al: {
        en: 'The human body’s largest organ (surface area ~1.8-2.0 m², weight ~16% total body mass). Comprises stratified squamous epidermis (keratinocytes, melanocytes, Langerhans cells, Merkel cells), dense irregular dermis, and subcutaneous hypodermis.',
        si: 'මිනිස් සිරුරේ විශාලතම අවයවයයි (වර්ගඵලය වර්ග මීටර් 1.8-2.0). අධිචර්මය, චර්මය සහ උපචර්මය ලෙස ස්ථර 3කින් සමන්විතය.',
        ta: 'உடலின் மிகப்பெரிய உறுப்பு. மேல்தோல், உட்தோல் மற்றும் தோலடி கொழுப்பு என மூன்று அடுக்குகளைக் கொண்டது.'
      },
      medical: {
        en: 'Crucial for thermoregulation via eccrine sweating and cutaneous vasodilation/vasoconstriction. Synthesizes Cholecalciferol (Vitamin D3) upon UVB irradiation. Burn severity calculated using Wallace Rule of Nines; susceptible to melanoma and necrotizing fasciitis.',
        si: 'දහඩිය දැමීම සහ රුධිර නාල විස්තාරණය මගින් ශරීර උෂ්ණත්වය පාලනය කරයි. සූර්යාලෝකයෙන් විටමින් D නිපදවයි. පිලිස්සුම් තුවාල තක්සේරු කිරීමට Wallace Rule of Nines භාවිතා කරයි.',
        ta: 'வியர்வை மூலம் உடல் வெப்பநிலையைக் கட்டுப்படுத்துகிறது. சூரிய ஒளியில் வைட்டமின் D3 ஐ உருவாக்குகிறது.'
      }
    },
    funFact: {
      en: 'Your skin completely replaces and sheds all its outer dead cells every 28 days — meaning you get a brand new skin roughly every month!',
      si: 'සෑම දින 28කට වරක්ම ඔබේ සමේ පිටත සෛල ඉවත්වී අලුත් සෛල මතුපිටට පැමිණේ!',
      ta: 'ஒவ்வொரு 28 நாட்களுக்கும் உங்கள் தோல் தனது செல்களை முழுமையாக புதுப்பித்து புதிய தோலாக மாறுகிறது!'
    },
    clinicalNotes: {
      en: 'Melanoma detection adheres to ABCDE criteria: Asymmetry, Border irregularity, Color variation, Diameter >6mm, and Evolution over time.',
      si: 'චර්ම පිළිකා (Melanoma) හඳුනාගැනීමට ABCDE නිර්ණායක භාවිතා කෙරේ.',
      ta: 'தோல் புற்றுநோயை ஆரம்பத்திலேயே கண்டறிய ABCDE விதிகள் பயன்படுகின்றன.'
    },
    neurovascular: {
      arterial: 'Subdermal arterial plexus feeding dermal papillary capillary loops',
      venous: 'Subpapillary and subcutaneous venous plexuses',
      innervation: 'Free nerve endings (pain/temperature), Meissner (light touch), Pacinian (vibration), Ruffini corpuscles',
      lymphatic: 'Extensive superficial cutaneous lymphatic network'
    },
    keyFunctions: {
      primary: [
        { en: 'Barrier against germs & dirt', si: 'විෂබීජ හා දූවිලිවලින් ආරක්ෂාව', ta: 'கிருமிகள் மற்றும் தூசியிலிருந்து பாதுகாப்பு' },
        { en: 'Feels touch and temperature', si: 'ස්පර්ශය සහ උෂ්ණත්වය දැනීම', ta: 'தொடுதல் மற்றும் வெப்பத்தை உணர்தல்' }
      ],
      al: [
        { en: 'UV protection via melanin pigments', si: 'මෙලනින් මගින් පාරජම්බුල කිරණින් ආරක්ෂාව', ta: 'மெலனின் மூலம் புற ஊதா பாதுகாப்பு' },
        { en: 'Thermoregulatory heat dissipation', si: 'තාපය බැහැර කර උෂ්ණත්වය පාලනය', ta: 'உடல் வெப்ப ஒழுங்குமுறை' }
      ],
      medical: [
        { en: 'Cutaneous synthesis of Vitamin D3 (Cholecalciferol)', si: 'විටමින් D3 සංස්ලේෂණය', ta: 'வைட்டமின் D3 உற்பத்தி' },
        { en: 'Immune surveillance by epidermal Langerhans cells', si: 'Langerhans සෛල මගින් ප්‍රතිශක්තිකරණ රැකවරණය', ta: 'தோல் நோய் எதிர்ப்பு செயல்பாடு' }
      ]
    }
  }
];

export const ORGAN_PARTS: OrganPart[] = [...BASE_ORGAN_PARTS, ...ADDITIONAL_ORGAN_PARTS];
