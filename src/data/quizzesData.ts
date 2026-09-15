import { QuizQuestion } from '../types';
import { ADDITIONAL_QUIZZES_DATA } from './additionalQuizzesData';

const BASE_QUIZZES_DATA: QuizQuestion[] = [
  // ==========================================
  // CIRCULATORY SYSTEM QUIZZES
  // ==========================================
  // Primary
  {
    id: 'circ_p1',
    systemId: 'circulatory',
    level: 'primary',
    question: {
      en: 'Which superhero muscle pumps blood to your whole body 24 hours a day without stopping?',
      si: 'දවසේ පැය 24 පුරාම නොනවත්වා ඔබේ මුළු සිරුරටම ලේ පොම්ප කරන සුපිරි මාංශ පේශිය කුමක්ද?',
      ta: 'நாள் முழுவதும் 24 மணி நேரமும் நிற்காமல் உங்கள் உடலுக்கு இரத்தத்தை பம்ப் செய்யும் தசை எது?'
    },
    options: [
      { en: 'The Stomach', si: 'ආමාශය', ta: 'இரைப்பை' },
      { en: 'The Heart', si: 'හෘදය', ta: 'இதயம்' },
      { en: 'The Lungs', si: 'පෙණහලු', ta: 'நுரையீரல்கள்' },
      { en: 'The Liver', si: 'අක්මාව', ta: 'கல்லீரல்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'The heart beats about 100,000 times every day, pumping blood with oxygen to every part of your body!',
      si: 'හෘදය දිනකට 100,000 වාරයක් පමණ ගැහෙමින් ඔබේ මුළු සිරුරටම ඔක්සිජන් සහිත රුධිරය බෙදාහරියි!',
      ta: 'இதயம் தினமும் 100,000 முறை துடித்து உங்கள் உடலின் அனைத்து பகுதிகளுக்கும் ஆக்ஸிஜன் இரத்தத்தை அனுப்புகிறது!'
    },
    relatedPartId: 'heart_left_ventricle'
  },
  {
    id: 'circ_p2',
    systemId: 'circulatory',
    level: 'primary',
    question: {
      en: 'What color is fresh blood carrying lots of healthy oxygen?',
      si: 'නැවුම් ඔක්සිජන් ගොඩක් රැගෙන යන රුධිරයේ පැහැය කුමක්ද?',
      ta: 'நிறைய ஆக்ஸிஜனை எடுத்துச் செல்லும் சுத்தமான இரத்தத்தின் நிறம் என்ன?'
    },
    options: [
      { en: 'Bright Red', si: 'දීප්තිමත් රතු පැහැය', ta: 'பிரகாசமான சிவப்பு' },
      { en: 'Deep Blue', si: 'තද නිල් පැහැය', ta: 'ஆழ்ந்த நீலம்' },
      { en: 'Bright Yellow', si: 'කහ පැහැය', ta: 'மஞ்சள்' },
      { en: 'Green', si: 'කොළ පැහැය', ta: 'பச்சை' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Oxygen binds with iron in hemoglobin to make fresh blood look bright red!',
      si: 'ඔක්සිජන් රුධිරයේ හිමොග්ලොබින් සමග එක්වූ විට එය දීප්තිමත් රතු පැහැයෙන් දිස්වේ!',
      ta: 'ஆக்ஸிஜன் இரத்த சிவப்பணுக்களுடன் இணையும் போது இரத்தம் பிரகாசமான சிவப்பு நிறமாக மாறுகிறது!'
    },
    relatedPartId: 'heart_aorta'
  },

  // A/L Level
  {
    id: 'circ_al1',
    systemId: 'circulatory',
    level: 'al',
    question: {
      en: 'Why is the myocardium of the Left Ventricle significantly thicker than that of the Right Ventricle?',
      si: 'දකුණු කෝෂිකාවේ බිත්තියට වඩා වම් කෝෂිකාවේ හෘද පේශි බිත්තිය සැලකිය යුතු ලෙස ඝනකමින් වැඩිවීමට හේතුව කුමක්ද?',
      ta: 'வலது இதயவறையை விட இடது இதயவறையின் தசைச்சுவர் மிகத் தடிமனாக இருப்பதற்கான காரணம் என்ன?'
    },
    options: [
      {
        en: 'It stores higher blood volume than the right ventricle',
        si: 'එය දකුණු කෝෂිකාවට වඩා වැඩි රුධිර පරිමාවක් ගබඩා කරන බැවින්',
        ta: 'வலது அறையை விட அதிக இரத்தத்தை சேமித்து வைப்பதால்'
      },
      {
        en: 'It must generate greater pressure to overcome high systemic vascular resistance',
        si: 'ඉහළ පද්ධතිමය සනාල ප්‍රතිරෝධය ජයගැනීම සඳහා ඉහළ පීඩනයක් ජනනය කළ යුතු බැවින්',
        ta: 'உடலின் அதிக இரத்த அழுத்த எதிர்ப்பை சமாளிக்க அதிக விசையை உருவாக்க வேண்டும்'
      },
      {
        en: 'It receives deoxygenated blood directly from the pulmonary trunk',
        si: 'එය පෙනහළු ධමනි කඳෙන් ඍජුවම ඔක්සිජන් හීන රුධිරය ලබාගන්නා බැවින්',
        ta: 'நுரையீரல் தமனியிலிருந்து நேரடியாக இரத்தத்தைப் பெறுவதால்'
      },
      {
        en: 'It contains the intrinsic SA pacemaker node',
        si: 'එය තුළ SA රිද්මකය පිහිටා ඇති බැවින්',
        ta: 'இதயத்தின் SA முடிச்சை தன்னுள் கொண்டுள்ளதால்'
      }
    ],
    correctIndex: 1,
    explanation: {
      en: 'The Left Ventricle pumps blood into the high-resistance systemic circuit (~120 mmHg systolic), whereas the Right Ventricle only pumps against low pulmonary resistance (~25 mmHg systolic).',
      si: 'වම් කෝෂිකාව ඉහළ පද්ධතිමය ප්‍රතිරෝධයට (120 mmHg) එරෙහිව රුධිරය විදින අතර, දකුණු කෝෂිකාව ක්‍රියා කරන්නේ අඩු පෙනහළු පීඩනයකට (25 mmHg) එරෙහිව පමණි.',
      ta: 'இடது அறை அதிக அழுத்தமுள்ள உடலின் இரத்த ஓட்டத்திற்கு (120 mmHg) பம்ப் செய்கிறது, ஆனால் வலது அறை குறைந்த நுரையீரல் அழுத்தத்திற்கு (25 mmHg) மட்டுமே பம்ப் செய்கிறது.'
    },
    relatedPartId: 'heart_left_ventricle'
  },
  {
    id: 'circ_al2',
    systemId: 'circulatory',
    level: 'al',
    question: {
      en: 'Which component of the cardiac conduction system exhibits the slowest conduction velocity, creating a crucial physiological delay?',
      si: 'හෘද සන්නායක පද්ධතියේ සංඥා සම්ප්‍රේෂණය වඩාත්ම මන්දගාමී වී, අත්‍යවශ්‍ය කායික විද්‍යාත්මක ප්‍රමාදයක් ඇති කරන්නේ කුමන කොටසද?',
      ta: 'இதய மின்கடத்தல் அமைப்பில் சமிக்ஞையை மெதுவாகக் கடத்தி, அத்தியாவசிய தாமதத்தை உருவாக்குவது எது?'
    },
    options: [
      { en: 'Purkinje fibers', si: 'පර්කින්ජි තන්තු', ta: 'பர்கின்ஜி இழைகள்' },
      { en: 'Atrioventricular (AV) Node', si: 'කර්ණික-කෝෂික (AV) ගැටය', ta: 'ஏட்ரியோவென்ட்ரிகுலர் (AV) முடிச்சு' },
      { en: 'Bundle of His', si: 'හිස්ගේ කදම්භය', ta: 'ஹிஸ் கற்றை' },
      { en: 'Sinoatrial (SA) Node', si: 'සයිනෝ-කර්ණික (SA) ගැටය', ta: 'சைனோஏட்ரியல் (SA) முடிச்சு' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'The AV node delays the electrical impulse by ~0.1 seconds. This allows the atria to completely contract and finish filling the ventricles prior to ventricular systole.',
      si: 'AV ගැටය තත්පර 0.1 ක ප්‍රමාදයක් ඇති කරයි. එමගින් කෝෂිකා හැකිලීමට පෙර ආලින්ද සම්පූර්ණයෙන්ම හැකිලී කෝෂිකා රුධිරයෙන් පිරවීමට ඉඩ සලසයි.',
      ta: 'AV முடிச்சு சமிக்ஞையை ~0.1 வினாடி தாமதப்படுத்துகிறது. இதனால் இதயவறைகள் சுருங்குவதற்கு முன் சோணைகள் முழுமையாக சுருங்கி இரத்தத்தை நிரப்புகின்றன.'
    },
    relatedPartId: 'heart_right_atrium'
  },

  // Medical Level
  {
    id: 'circ_med1',
    systemId: 'circulatory',
    level: 'medical',
    clinicalScenario: {
      en: 'A 58-year-old male arrives at the emergency department with crushing substernal chest pain radiating to his left jaw and diaphoresis. 12-lead ECG reveals ST-segment elevation in leads V1, V2, V3, and V4.',
      si: 'වයස අවුරුදු 58ක පිරිමි රෝගියෙකු වම් හනුව දක්වා විහිදෙන තද පපුවේ වේදනාව සහ අධික දහඩිය දැමීම සමග හදිසි ප්‍රතිකාර ඒකකයට ඇතුළත් වේ. ECG පරීක්ෂාවේදී V1, V2, V3, සහ V4 හි ST-ඛණ්ඩය ඉහළ ගොස් ඇත.',
      ta: '58 வயது நோயாளி தாடை வரை பரவும் கடுமையான மார்பு வலி மற்றும் வியர்வையுடன் அவசர சிகிச்சைப் பிரிவுக்கு வருகிறார். ECG பரிசோதனையில் V1, V2, V3, V4 இல் ST பகுதி உயர்ந்துள்ளது.'
    },
    question: {
      en: 'Which coronary artery is most likely acutely occluded in this patient?',
      si: 'මෙම රෝගියාගේ අවහිර වී ඇති බොහෝ දුරට ඉඩ ඇති කිරීටක ධමනිය කුමක්ද?',
      ta: 'இந்த நோயாளிக்கு அடைபட்டிருக்க அதிக வாய்ப்புள்ள கரோனரி தமனி எது?'
    },
    options: [
      {
        en: 'Left Anterior Descending (LAD) artery',
        si: 'වම් පූර්ව අවරෝහණ (LAD) ධමනිය',
        ta: 'இடது முன் கீழ்நோக்கு (LAD) தமனி'
      },
      {
        en: 'Right Coronary Artery (RCA)',
        si: 'දකුණු කිරීටක ධමනිය (RCA)',
        ta: 'வலது கரோனரி தமனி (RCA)'
      },
      {
        en: 'Left Circumflex (LCx) artery',
        si: 'වම් වක්‍ර (LCx) ධමනිය',
        ta: 'இடது வளைவு (LCx) தமனி'
      },
      {
        en: 'Posterior Descending Artery (PDA)',
        si: 'පශ්චාත් අවරෝහණ ධමනිය (PDA)',
        ta: 'பின் கீழ்நோக்கு தமனி (PDA)'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'ST elevation in V1-V4 indicates an acute anterior wall STEMI, territory supplied by the Left Anterior Descending (LAD) artery ("the widow-maker"), which perfuses the anterior left ventricle and anterior 2/3 of the interventricular septum.',
      si: 'V1-V4 හි ST ඉහළ යාමෙන් පූර්ව බිත්ති හෘදයාබාධයක් (Anterior STEMI) පෙන්නුම් කරයි. මෙය වම් පූර්ව අවරෝහණ (LAD) ධමනිය අවහිර වීමෙන් සිදුවේ.',
      ta: 'V1-V4 இல் ST உயர்வது முற்புற மாரடைப்பைக் (Anterior STEMI) காட்டுகிறது. இது LAD தமனி அடைபடுவதால் ஏற்படுகிறது.'
    },
    relatedPartId: 'heart_left_ventricle'
  },
  {
    id: 'circ_med2',
    systemId: 'circulatory',
    level: 'medical',
    clinicalScenario: {
      en: 'A 67-year-old female presents with exertional syncope and dyspnea. Auscultation reveals a harsh, crescendo-decrescendo systolic ejection murmur best heard at the right upper sternal border radiating to the carotids, with a delayed and weak pulse (pulsus parvus et tardus).',
      si: 'වයස අවුරුදු 67ක කාන්තාවක් වෙහෙසවීමේදී ක්ලාන්තය සහ හුස්ම ගැනීමේ අපහසුව සමග පැමිණෙයි. හෘදය පරීක්ෂාවේදී දකුණු ඉහළ උරස්ඵලක කෙලවරේ crescendo-decrescendo ශබ්දයක් සහ දුර්වල නාඩි වැටීමක් හඳුනාගැනේ.',
      ta: '67 வயது பெண் மயக்கம் மற்றும் மூச்சுத்திணறலுடன் வருகிறார். இதய பரிசோதனையில் வலது மேல் மார்பு பகுதியில் கிரசண்டோ-டிக்ரிசண்டோ சத்தம் கேட்கிறது மற்றும் நாடித்துடிப்பு பலவீனமாக உள்ளது.'
    },
    question: {
      en: 'What is the definitive diagnosis?',
      si: 'මෙම සායනික ලක්ෂණවලට හේතුවන රෝග විනිශ්චය කුමක්ද?',
      ta: 'இதற்கான துல்லியமான மருத்துவக் கண்டறிதல் என்ன?'
    },
    options: [
      { en: 'Mitral Regurgitation', si: 'ද්විතුණ්ඩ කපාට ප්‍රතිවහනය', ta: 'மிட்ரல் வால்வு கசிவு' },
      { en: 'Aortic Stenosis', si: 'මහා ධමනි කපාට සංකෝචනය (Aortic Stenosis)', ta: 'அயோர்டிக் வால்வு சுருக்கம் (Aortic Stenosis)' },
      { en: 'Tricuspid Atresia', si: 'ත්‍රිකුණ්ඩ කපාට සංවෘතතාව', ta: 'முக்கூர் வால்வு அடைப்பு' },
      { en: 'Aortic Dissection Type B', si: 'මහා ධමනි විච්ඡේදනය වර්ගය B', ta: 'அயோர்டிக் டிஸெக்ஷன் வகை B' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Severe calcific aortic stenosis classically causes a crescendo-decrescendo systolic murmur at the right 2nd intercostal space radiating to the carotids, associated with pulsus parvus et tardus (slow-rising, weak pulse) and exertional syncope.',
      si: 'මහා ධමනි කපාටය හුණු එකතු වී තද වීම (Aortic Stenosis) මගින් දකුණු දෙවන අන්තර්පාර්ශුක අවකාශයේ මෙම ශබ්දය ඇති කරයි.',
      ta: 'அயோர்டிக் வால்வு சுருங்குவதால் (Aortic Stenosis) இரத்தம் பெருநாடிக்குள் செல்வது தடைப்பட்டு இந்த விசேட சத்தம் கேட்கிறது.'
    },
    relatedPartId: 'heart_aorta'
  },

  // ==========================================
  // RESPIRATORY SYSTEM QUIZZES
  // ==========================================
  // Primary
  {
    id: 'resp_p1',
    systemId: 'respiratory',
    level: 'primary',
    question: {
      en: 'What gas from the air does your body take in every time you breathe to stay alive and energetic?',
      si: 'ජීවත් වීමට සහ ශක්තිය ලබාගැනීමට හුස්ම ගන්නා සෑම විටම ඔබේ සිරුර ලබාගන්නා වායුව කුමක්ද?',
      ta: 'உயிர் வாழவும் உற்சாகமாக இருக்கவும் நாம் உள்ளிழுக்கும் காற்றில் உள்ள முக்கிய வாயு எது?'
    },
    options: [
      { en: 'Carbon Dioxide', si: 'කාබන් ඩයොක්සයිඩ්', ta: 'கரியமில வாயு' },
      { en: 'Oxygen', si: 'ඔක්සිජන්', ta: 'ஆக்ஸிஜன்' },
      { en: 'Helium', si: 'හීලියම්', ta: 'ஹீலியம்' },
      { en: 'Nitrogen Gas', si: 'නයිට්‍රජන් වායුව', ta: 'நைட்ரஜன்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Every breath fills your lungs with oxygen, which travels in your blood to power all your muscles and organs!',
      si: 'සෑම හුස්මකින්ම ඔබේ පෙණහලු ඔක්සිජන් වලින් පිරී, රුධිරය ඔස්සේ මුළු සිරුරේම අවයව වලට ශක්තිය සපයයි!',
      ta: 'ஒவ்வொரு சுவாசமும் நுரையீரலுக்கு ஆக்ஸிஜனை நிரப்பி உறுப்புகளுக்கு ஆற்றலை அளிக்கிறது!'
    },
    relatedPartId: 'lungs_alveoli'
  },

  // A/L Level
  {
    id: 'resp_al1',
    systemId: 'respiratory',
    level: 'al',
    question: {
      en: 'What is the physiological role of pulmonary surfactant secreted by Type II alveolar pneumocytes?',
      si: 'ටයිප් II වායු කෝෂික සෛල මගින් ස්‍රාවය වන පෙනහළු සර්ෆැක්ටන්ට් වල කායික විද්‍යාත්මක කාර්යභාරය කුමක්ද?',
      ta: 'வகை II நுண்வறை செல்களால் சுரக்கப்படும் நுரையீரல் சர்பாக்டன்டின் உடலியல் பணி என்ன?'
    },
    options: [
      {
        en: 'Increases alveolar surface tension to speed up exhalation',
        si: 'පිටහුස්ම වේගවත් කිරීමට වායු කෝෂ මතුපිට ආතතිය වැඩි කිරීම',
        ta: 'வெளிசுவாசத்தை வேகப்படுத்த மேற்பரப்பு இழுவிசையை அதிகரித்தல்'
      },
      {
        en: 'Decreases surface tension to prevent alveolar collapse at low lung volumes',
        si: 'අඩු පෙනහළු පරිමාවන්හිදී වායු කෝෂ හැකිලී යාම වැළැක්වීමට මතුපිට ආතතිය අඩු කිරීම',
        ta: 'நுண்ணறைகள் ஒட்டிக்கொண்டு சுருங்கிவிடாமல் இருக்க மேற்பரப்பு இழுவிசையைக் குறைத்தல்'
      },
      {
        en: 'Transports carbon dioxide across the capillary endothelium',
        si: 'කේශනාලිකා එන්ඩොතීලියම හරහා කාබන් ඩයොක්සයිඩ් ප්‍රවාහනය කිරීම',
        ta: 'இரத்த நாளங்களுக்குள் கரியமில வாயுவைக் கடத்துதல்'
      },
      {
        en: 'Neutralizes inhaled acidic pollutants',
        si: 'ආශ්වාස කරන ආම්ලික අපද්‍රව්‍ය උදාසීන කිරීම',
        ta: 'உள்ளிழுக்கப்படும் அமில மாசுகளை நடுநிலையாக்குதல்'
      }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Surfactant (dipalmitoylphosphatidylcholine) disrupts hydrogen bonds of water lining alveoli, dramatically decreasing surface tension and preventing end-expiratory atelectasis according to the Law of Laplace (P = 2T/r).',
      si: 'සර්ෆැක්ටන්ට් මගින් ලැප්ලේස් නියමයට (P = 2T/r) අනුව මතුපිට ආතතිය අඩු කර, ප්‍රශ්වාසයේදී වායු කෝෂ හැකිලී එකට ඇලී යාම වළක්වයි.',
      ta: 'சர்பாக்டன்ட் நீரின் மேற்பரப்பு இழுவிசையைக் குறைத்து, லாப்லேஸ் விதியின்படி மூச்சு விடும்போது நுண்ணறைகள் ஒட்டிக்கொள்ளாமல் தடுக்கிறது.'
    },
    relatedPartId: 'lungs_alveoli'
  },

  // Medical Level
  {
    id: 'resp_med1',
    systemId: 'respiratory',
    level: 'medical',
    clinicalScenario: {
      en: 'A 24-year-old unrestrained driver involved in a high-speed motor vehicle collision arrives with severe respiratory distress, hypotension (BP 74/42 mmHg), distended neck veins, absent breath sounds on the right hemithorax, and tracheal deviation to the left.',
      si: 'රිය අනතුරකට ලක්වූ වයස 24ක රියදුරෙකු හුස්ම ගැනීමේ දැඩි අපහසුව, අඩු රුධිර පීඩනය (74/42 mmHg), ඉදිමුණු බෙල්ලේ ශිරා, දකුණු පපුවේ ශබ්ද නොඇසීම සහ ශ්වාසනාලය වමට ඇලවීම සමග පැමිණේ.',
      ta: 'கார் விபத்தில் சிக்கிய 24 வயது நபர் கடுமையான மூச்சுத்திணறல், குறைந்த இரத்த அழுத்தம், கழுத்து நரம்பு வீக்கம், வலது மார்பில் சத்தம் இல்லாமை மற்றும் மூச்சுக்குழாய் இடதுபுறம் சாய்ந்த நிலையில் வருகிறார்.'
    },
    question: {
      en: 'What is the immediate, life-saving management step before sending for a chest radiograph?',
      si: 'එක්ස්-රේ පරීක්ෂාවට යැවීමට පෙර ක්ෂණිකව කළ යුතු ජීවිතාරක්ෂක පියවර කුමක්ද?',
      ta: 'எக்ஸ்ரே எடுப்பதற்கு முன் உடனடியாக செய்ய வேண்டிய உயிர்காக்கும் சிகிச்சை எது?'
    },
    options: [
      {
        en: 'Endotracheal intubation and mechanical ventilation',
        si: 'එන්ඩොට්‍රැකියල් නළයක් යොදා කෘත්‍රිම ශ්වසනය ලබාදීම',
        ta: 'செயற்கை சுவாசக் குழாய் பொருத்துதல்'
      },
      {
        en: 'Immediate needle thoracostomy (2nd intercostal space midclavicular or 5th ICS anterior axillary line)',
        si: 'ක්ෂණිකව ඉදිකටු තොරකොස්ටොමි කිරීම (දෙවන අන්තර්පාර්ශුක අවකාශය හෝ පස්වන අන්තර්පාර්ශුක අවකාශය ඔස්සේ වාතය ඉවත් කිරීම)',
        ta: 'உடனடி ஊசி மூலம் காற்றை வெளியேற்றுதல் (Needle Decompression)'
      },
      {
        en: 'Intravenous bolus of 2 Liters normal saline and wait for CT angiogram',
        si: 'සේලයින් ලීටර් 2ක් දී CT ස්කෑන් පරීක්ෂාව බලාපොරොත්තු වීම',
        ta: 'சலைன் செலுத்தி சிடி ஸ்கேன் எடுப்பது'
      },
      {
        en: 'Pericardiocentesis under ultrasound guidance',
        si: 'අල්ට්‍රාසවුන්ඩ් මගින් හෘදය වටා තරලය ඉවත් කිරීම',
        ta: 'இதயத்தைச் சுற்றியுள்ள திரவத்தை ஊசி மூலம் எடுத்தல்'
      }
    ],
    correctIndex: 1,
    explanation: {
      en: 'The clinical triad of hypotension, distended neck veins, absent unilateral breath sounds, and contralateral tracheal deviation indicates Tension Pneumothorax. This is a clinical diagnosis; obtaining imaging causes lethal delay. Immediate needle decompression followed by tube thoracostomy is mandatory.',
      si: 'හයිපෝටෙන්ෂන්, බෙල්ලේ ශිරා ඉදිමීම සහ ශ්වාසනාලය ඇලවීම යනු Tension Pneumothorax හි සායනික ලක්ෂණයි. එක්ස්-රේ බලා නොසිට වහාම ඉදිකටුවක් මගින් වාතය ඉවත් කළ යුතුය.',
      ta: 'இது டென்ஷன் நியூமோதோராக்ஸ் (Tension Pneumothorax). எக்ஸ்ரே எடுக்க நேரத்தை வீணாக்காமல் உடனடியாக ஊசி குத்தி காற்றை வெளியேற்ற வேண்டும்.'
    },
    relatedPartId: 'lungs_trachea'
  },

  // ==========================================
  // NERVOUS SYSTEM QUIZZES
  // ==========================================
  // Primary
  {
    id: 'nerv_p1',
    systemId: 'nervous',
    level: 'primary',
    question: {
      en: 'Which part of your brain helps you balance on one foot without tumbling over?',
      si: 'නොවැටී එක කකුලෙන් සමබරව හිටගෙන සිටීමට ඔබට උදව් වන මොළයේ කොටස කුමක්ද?',
      ta: 'கீழே விழாமல் ஒரு காலில் சமநிலையில் நிற்க உதவும் மூளையின் பகுதி எது?'
    },
    options: [
      { en: 'Cerebellum ("Little Brain")', si: 'කුඩා මොළය / අනුමොළය', ta: 'சிறுமூளை' },
      { en: 'Eyeballs', si: 'ඇස් බෝල', ta: 'கண்விழிகள்' },
      { en: 'Stomach', si: 'ආමාශය', ta: 'இரைப்பை' },
      { en: 'Skull bone', si: 'හිස්කබල', ta: 'மண்டை ஓடு' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The cerebellum is the coordination master of your brain that keeps you balanced and coordinates smooth movements!',
      si: 'අනුමොළය ඔබේ ශරීරය සමබරව තබාගන්නා අතර චලන සුමටව පාලනය කරයි!',
      ta: 'சிறுமூளை உடலின் அசைவுகளையும் சமநிலையையும் அற்புதமாக ஒருங்கிணைக்கிறது!'
    },
    relatedPartId: 'brain_cerebellum'
  },

  // A/L Level
  {
    id: 'nerv_al1',
    systemId: 'nervous',
    level: 'al',
    question: {
      en: 'During an action potential in a nerve axon, what causes the rapid phase of depolarization from -70 mV to +30 mV?',
      si: 'ස්නායු අක්සනයක් තුළ ක්‍රියා විභවයකදී, -70 mV සිට +30 mV දක්වා සිදුවන ශීඝ්‍ර විධ්‍රැවීකරණයට හේතුව කුමක්ද?',
      ta: 'நரம்பு தூண்டலின் போது, -70 mV முதல் +30 mV வரை நிகழும் விரைவான மின்மாற்றத்திற்கு எது காரணம்?'
    },
    options: [
      {
        en: 'Rapid efflux of Potassium ions (K+) through leak channels',
        si: 'පොටෑසියම් (K+) අයන ශීඝ්‍රයෙන් සෛලයෙන් පිටතට ගලායාම',
        ta: 'பொட்டாசியம் அயனிகள் (K+) வெளியேறுவது'
      },
      {
        en: 'Rapid influx of Sodium ions (Na+) through voltage-gated sodium channels',
        si: 'වෝල්ටීයතා සංවේදී සෝඩියම් ද්වාර විවෘත වී සෝඩියම් (Na+) අයන වේගයෙන් සෛල තුළට ගලා ඒම',
        ta: 'வோல்டேஜ்-கேட்டட் சோடியம் (Na+) சேனல்கள் திறந்து சோடியம் உள்ளே பாய்வது'
      },
      {
        en: 'Active pumping of Calcium by the Ca2+-ATPase pump',
        si: 'කැල්සියම් පොම්පය මගින් කැල්සියම් ඉවත් කිරීම',
        ta: 'கால்சியம் பம்ப் இயங்குவது'
      },
      {
        en: 'Complete shutdown of all membrane ion channels',
        si: 'සියලුම අයන ද්වාර සම්පූර්ණයෙන්ම වැසීයාම',
        ta: 'அனைத்து அயனி துளைகளும் மூடப்படுவது'
      }
    ],
    correctIndex: 1,
    explanation: {
      en: 'When the threshold potential (~ -55 mV) is reached, voltage-gated Na+ channels snap open, driving a massive inward flow of positively charged sodium ions down their electrochemical gradient.',
      si: 'දේහලී විභවය (-55 mV) කරා ළඟා වූ විට, වෝල්ටීයතා සංවේදී Na+ ද්වාර විවෘත වී සෝඩියම් අයන ශීඝ්‍රයෙන් ඇතුළු වීමෙන් විධ්‍රැවීකරණය හටගනියි.',
      ta: '-55 mV தொடக்க நிலையை அடைந்தவுடன் சோடியம் சேனல்கள் திறந்து அதிகப்படியான சோடியம் உள்ளே நுழைவதால் இந்த மின்மாற்றம் ஏற்படுகிறது.'
    },
    relatedPartId: 'brain_cerebrum'
  },

  // Medical Level
  {
    id: 'nerv_med1',
    systemId: 'nervous',
    level: 'medical',
    clinicalScenario: {
      en: 'A 22-year-old cyclist struck by a baseball bat over the right temporal bone experiences a brief loss of consciousness, followed by complete recovery ("lucid interval") for 3 hours. He then suddenly collapses with a non-reactive dilated right pupil, bradycardia, and left-sided hemiparesis.',
      si: 'හිසේ දකුණු ප්‍රදේශයට පිත්තකින් පහර වැදුණු 22 හැවිරිදි තරුණයෙක් මුලින් සිහි නැතිවී, පසුව පැය 3ක් සාමාන්‍ය තත්ත්වයෙන් පසුවේ ("lucid interval"). පසුව එක්වරම සිහිසුන්වී දකුණු ඇසේ කණිනිකාව විශාල වීම සහ වම් අර්ධයේ අංශභාගය හටගනී.',
      ta: 'வலது பக்க தலையில் அடிபட்ட 22 வயது இளைஞர் சிறிது நேரம் சுயநினைவு இழந்து, பின் 3 மணி நேரம் இயல்பாக இருக்கிறார். பின்னர் திடீரென மயங்கி, வலது கண் பாவை விரிந்து, இடது பக்க முடக்கம் ஏற்படுகிறது.'
    },
    question: {
      en: 'What intracranial vascular structure was ruptured, and what type of hematoma is present?',
      si: 'මෙහිදී බිඳී ගිය රුධිර නාලය සහ ඇතිවූ රක්තපාත වර්ගය කුමක්ද?',
      ta: 'இங்கு கிழிந்த இரத்த நாளம் எது மற்றும் உருவான இரத்தக்கட்டி வகை என்ன?'
    },
    options: [
      {
        en: 'Middle Meningeal Artery; Epidural Hematoma',
        si: 'මැද මෙනින්ජියල් ධමනිය; එපිඩියුරල් රක්තපාතය (Epidural Hematoma)',
        ta: 'நடு மெனின்ஜியல் தமனி; எபிட்யூரல் இரத்தக்கட்டு (Epidural Hematoma)'
      },
      {
        en: 'Bridging cortical veins; Subdural Hematoma',
        si: 'සම්බන්ධක ශිරා; සබ්ඩියුරල් රක්තපාතය (Subdural Hematoma)',
        ta: 'இணைப்பு சிரைகள்; சப்டியூரல் இரத்தக்கட்டு'
      },
      {
        en: 'Berry aneurysm rupture; Subarachnoid Hemorrhage',
        si: 'බෙරි ඇනියුරිසම් බිඳීයාම; සබ්ඇරක්නොයිඩ් රක්තපාතය',
        ta: 'அனூரிசம் வெடிப்பு; சப்அரக்னாய்டு இரத்தப்போக்கு'
      },
      {
        en: 'Charcot-Bouchard microaneurysm; Intracerebral Hemorrhage',
        si: 'ක්ෂුද්‍ර ඇනියුරිසම් බිඳීම; අභ්‍යන්තර මස්තිෂ්ක රක්තපාතය',
        ta: 'மைக்ரோஅனூரிசம் வெடிப்பு; உள்மூளை இரத்தப்போக்கு'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Pterion trauma fractures the thin temporal bone, lacerating the underlying Middle Meningeal Artery. The classic biphasic "lucid interval" followed by uncal herniation (compressing CN III causing ipsilateral mydriasis and contralateral hemiparesis from cerebral peduncle compression) is pathognomonic for an acute Epidural Hematoma.',
      si: 'ටෙරියොන් බිඳීමෙන් මැද මෙනින්ජියල් ධමනිය කැඩී එපිඩියුරල් රක්තපාතය ඇතිවේ. Lucid interval සහ CN III ස්නායුව තෙරපීමෙන් ඇසේ කණිනිකාව විශාල වීම මෙහි ප්‍රධාන ලක්ෂණයකි.',
      ta: 'மண்டை ஓட்டின் மெல்லிய பகுதியான ஸ்டீரியான் உடைந்ததால் நடு மெனின்ஜியல் தமனி கிழிந்து எபிட்யூரல் இரத்தக்கட்டு உருவானது. இது நரம்புகளை அழுத்தி கண் பாவையை விரியச் செய்கிறது.'
    },
    relatedPartId: 'skeleton_skull'
  },

  // ==========================================
  // SKELETAL SYSTEM QUIZZES
  // ==========================================
  // Primary
  {
    id: 'skel_p1',
    systemId: 'skeletal',
    level: 'primary',
    question: {
      en: 'How many strong bones make up the skeleton of a fully grown adult human?',
      si: 'වැඩිහිටි මිනිසෙකුගේ ඇටසැකිල්ල තුළ ඇති ශක්තිමත් අස්ථි ගණන කීයද?',
      ta: 'முழுமையாக வளர்ந்த மனித உடலில் எத்தனை எலும்புகள் உள்ளன?'
    },
    options: [
      { en: '106 bones', si: 'අස්ථි 106ක්', ta: '106 எலும்புகள்' },
      { en: '206 bones', si: 'අස්ථි 206ක්', ta: '206 எலும்புகள்' },
      { en: '306 bones', si: 'අස්ථි 306ක්', ta: '306 எலும்புகள்' },
      { en: '52 bones', si: 'අස්ථි 52ක්', ta: '52 எலும்புகள்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Babies start out with around 270 soft bones, but as you grow up, many of them fuse together into 206 adult bones!',
      si: 'ළදරුවෙකුට අස්ථි 270ක් පමණ ඇති අතර, වැඩෙන විට ඒවා එකිනෙක එක්වී වැඩිහිටියෙකු තුළ අස්ථි 206ක් ඉතිරි වේ!',
      ta: 'குழந்தைகளுக்கு 270 எலும்புகள் இருக்கும், வளர வளர அவை ஒன்றாக இணைந்து பெரியவர்களுக்கு 206 எலும்புகளாக மாறுகின்றன!'
    },
    relatedPartId: 'skeleton_spine_ribs'
  },

  // A/L Level
  {
    id: 'skel_al1',
    systemId: 'skeletal',
    level: 'al',
    question: {
      en: 'Which cell type is directly stimulated by Parathyroid Hormone (PTH) to stimulate osteoclastic bone resorption and elevate serum calcium levels?',
      si: 'පැරාතයිරොයිඩ් හෝමෝනය (PTH) මගින් උත්තේජනය වී, අස්ථි කාදනය කර රුධිර කැල්සියම් මට්ටම ඉහළ නැංවීමට මූලික වන සෛල වර්ගය කුමක්ද?',
      ta: 'பாராதைராய்டு ஹார்மோனால் (PTH) தூண்டப்பட்டு, எலும்பை கரைத்து இரத்த கால்சியம் அளவை அதிகரிக்கும் செல் வகை எது?'
    },
    options: [
      {
        en: 'Osteoclasts via Osteoblast RANKL signaling',
        si: 'ඔස්ටියෝබ්ලාස්ට් සෛලවල RANKL සංඥා මගින් ඔස්ටියෝක්ලාස්ට් සෛල',
        ta: 'ஆஸ்டியோபிளாஸ்ட் RANKL மூலம் ஆஸ்டியோகிளாஸ்ட்கள்'
      },
      {
        en: 'Chondrocytes in epiphyseal growth plates',
        si: 'වර්ධන තැටිවල කාටිලේජ සෛල (කොන්ඩ්‍රොසයිට්)',
        ta: 'வளர்ச்சித் தட்டுகளின் காண்ட்ரோசைட்டுகள்'
      },
      {
        en: 'Fibroblasts in periosteum directly',
        si: 'පර්යාස්ථියේ ෆයිබ්‍රොබ්ලාස්ට් සෛල ඍජුවම',
        ta: 'இணைப்புத்திசு செல்கள்'
      },
      {
        en: 'Erythroblasts in red bone marrow',
        si: 'රතු ඇටමිදුළුවල රතු රුධිර සෛල පූර්වගාමීන්',
        ta: 'இரத்த அணு முன்னோடிகள்'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'PTH binds to osteoblasts, inducing them to express RANKL (Receptor Activator of Nuclear Factor-κB Ligand). RANKL binds to RANK on osteoclast precursors, inducing osteoclast differentiation and bone resorption.',
      si: 'PTH හෝමෝනය ඔස්ටියෝබ්ලාස්ට් සෛලවල RANKL ප්‍රකාශනය වැඩි කරයි. එය ඔස්ටියෝක්ලාස්ට් සෛල උත්තේජනය කර අස්ථි දියකර රුධිරයට කැල්සියම් මුදාහරියි.',
      ta: 'PTH ஹார்மோன் ஆஸ்டியோபிளாஸ்ட்களைத் தூண்டி RANKL மூலம் ஆஸ்டியோகிளாஸ்ட்களை இயக்கி எலும்பைக் கரைத்து கால்சியத்தை வெளிப்படுத்துகிறது.'
    },
    relatedPartId: 'skeleton_spine_ribs'
  },

  // Medical Level
  {
    id: 'skel_med1',
    systemId: 'skeletal',
    level: 'medical',
    clinicalScenario: {
      en: 'A 74-year-old female trips on a carpet and suffers a ground-level fall. In the ER, her right lower extremity is noticeably shortened and externally rotated. Plain radiographs confirm a displaced femoral neck fracture.',
      si: 'වයස 74ක කාන්තාවක් බිම වැටීමෙන් පසු හදිසි ප්‍රතිකාර ඒකකයට ගෙන එනු ලැබේ. ඇගේ දකුණු කකුල කෙටි වී පිටතට හැරී ඇත. එක්ස්-රේ මගින් කලවා අස්ථි ගෙල (femoral neck) බිඳී ඇති බව තහවුරු වේ.',
      ta: '74 வயது பெண்மணி தவறி கீழே விழுந்ததில் வலது கால் சுருங்கி வெளிப்புறமாக திரும்பியுள்ளது. எக்ஸ்ரேயில் தொடை எலும்பு கழுத்து (Femoral Neck) முறிந்துள்ளது உறுதியாகிறது.'
    },
    question: {
      en: 'What is the most concerning long-term vascular complication of displaced intracapsular femoral neck fractures?',
      si: 'කලවා අස්ථි ගෙල කැඩීමේදී ඇතිවිය හැකි වඩාත්ම භයානක සනාල සංකූලතාව කුමක්ද?',
      ta: 'தொடை எலும்பு முறிவில் ஏற்படக்கூடிய மிக ஆபத்தான இரத்த நாள சிக்கல் எது?'
    },
    options: [
      {
        en: 'Avascular Necrosis (Osteonecrosis) of the femoral head due to medial circumflex femoral artery disruption',
        si: 'මධ්‍ය පරිවෘත්ත කලවා ධමනිය කැඩී යාම නිසා කලවා අස්ථි හිසට රුධිරය නොලැබී කුණු වීම (Avascular Necrosis)',
        ta: 'இரத்த ஓட்டம் தடைபடுவதால் தொடை எலும்பு தலை அழுகிப்போதல் (Avascular Necrosis)'
      },
      {
        en: 'Deep vein thrombosis solely from femoral nerve severance',
        si: 'කලවා ස්නායුව කැපී යාමෙන් පමණක් ගැඹුරු ශිරා රුධිර කැටි ගැසීම',
        ta: 'நரம்பு சேதத்தால் இரத்த உறைவு உண்டாதல்'
      },
      {
        en: 'Compartment syndrome of the anterior thigh compartment',
        si: 'කලවා කලාපයේ පීඩනය වැඩිවී පේශි විනාශ වීම',
        ta: 'தொடை தசைப்பகுதி அழுத்தம் அதிகரிப்பது'
      },
      {
        en: 'Sciatic nerve avulsion at the piriformis fossa',
        si: 'සයැටික් ස්නායුව සම්පූර්ණයෙන්ම ගැලවී යාම',
        ta: 'சயாடிக் நரம்பு முற்றிலும் பிய்ந்து போதல்'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Intracapsular femoral neck fractures compromise the retinacular branches of the medial circumflex femoral artery, which provide the predominant blood supply to the femoral head, frequently leading to avascular osteonecrosis requiring hemiarthroplasty or total hip arthroplasty.',
      si: 'කලවා අස්ථි ගෙල කැඩුණු විට Medial circumflex femoral ධමනිය තුවාල වී අස්ථි හිසට රුධිරය අහිමි වීමෙන් Avascular Necrosis තත්ත්වය ඇතිවේ.',
      ta: 'தொடை எலும்பின் தலைப்பகுதிக்கு இரத்தத்தை வழங்கும் முக்கிய தமனி சேதமடைவதால் எலும்பு அழுகும் அவாஸ்குலர் நெக்ரோசிஸ் ஏற்படுகிறது.'
    },
    relatedPartId: 'skeleton_spine_ribs'
  },

  // ==========================================
  // DIGESTIVE SYSTEM QUIZZES
  // ==========================================
  // Primary
  {
    id: 'dig_p1',
    systemId: 'digestive',
    level: 'primary',
    question: {
      en: 'What does your stomach use to help dissolve food and kill nasty bacteria on your meals?',
      si: 'කෑම දියකර ආහාරවල ඇති විෂබීජ විනාශ කිරීමට ආමාශය භාවිතා කරන්නේ කුමක්ද?',
      ta: 'உணவை செரிக்க வைக்கவும் உணவில் உள்ள கிருமிகளை அழிக்கவும் இரைப்பை எதைப் பயன்படுத்துகிறது?'
    },
    options: [
      { en: 'Strong Stomach Acid', si: 'ශක්තිමත් ආමාශයික අම්ලය', ta: 'வலுவான செரிமான அமிலம்' },
      { en: 'Cold ice water', si: 'ශීතල අයිස් වතුර', ta: 'குளிர்ந்த நீர்' },
      { en: 'Dishwashing soap', si: 'සබන් වතුර', ta: 'சோப்பு நீர்' },
      { en: 'Air bubbles', si: 'වායු බුබුළු', ta: 'காற்று குமிழ்கள்' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The stomach makes hydrochloric acid, which breaks down tough foods and destroys harmful germs you might have swallowed!',
      si: 'ආමාශය හයිඩ්‍රොක්ලෝරික් අම්ලය නිපදවන අතර එය ආහාර බිඳහෙළා විසබීජ විනාශ කරයි!',
      ta: 'இரைப்பை ஹைட்ரோகுளோரிக் அமிலத்தை உருவாக்கி உணவை உடைத்து கெட்ட பாக்டீரியாக்களை அழிக்கிறது!'
    },
    relatedPartId: 'digestive_stomach'
  },

  // A/L Level
  {
    id: 'dig_al1',
    systemId: 'digestive',
    level: 'al',
    question: {
      en: 'Which cells of the gastric mucosa secrete Hydrochloric Acid (HCl) and Intrinsic Factor?',
      si: 'හයිඩ්‍රොක්ලෝරික් අම්ලය (HCl) සහ අභ්‍යන්තර සාධකය (Intrinsic Factor) ස්‍රාවය කරන්නේ ආමාශයික ශ්ලේෂ්මලයේ ඇති කුමන සෛල මගින්ද?',
      ta: 'இரைப்பையில் ஹைட்ரோகுளோரிக் அமிலம் (HCl) மற்றும் வைட்டமின் B12 காரணியை சுரக்கும் செல்கள் எவை?'
    },
    options: [
      { en: 'Parietal (Oxyntic) cells', si: 'පැරයිටල් (ඔක්සින්ටික්) සෛල', ta: 'பரைட்டல் (ஆக்சிண்டிக்) செல்கள்' },
      { en: 'Chief (Peptic) cells', si: 'ප්‍රධාන (චීෆ්) සෛල', ta: 'முதன்மை (பெப்டிக்) செல்கள்' },
      { en: 'G cells of the antrum', si: 'ඇන්ට්‍රමයේ G සෛල', ta: 'ஜி செல்கள்' },
      { en: 'Mucous neck cells', si: 'ශ්ලේෂ්මල ගෙල සෛල', ta: 'சளி சுரக்கும் செல்கள்' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Parietal cells secrete HCl (via H+/K+ ATPase pumps) and Intrinsic Factor, which is mandatory for terminal ileum absorption of vitamin B12.',
      si: 'පැරයිටල් සෛල මගින් HCl අම්ලය සහ විටමින් B12 අවශෝෂණයට අත්‍යවශ්‍ය අභ්‍යන්තර සාධකය නිපදවයි.',
      ta: 'பரைட்டல் செல்கள் HCl அமிலத்தையும், வைட்டமின் B12 உறிஞ்சுதலுக்கு உதவும் காரணியையும் சுரக்கின்றன.'
    },
    relatedPartId: 'digestive_stomach'
  },

  // Medical Level
  {
    id: 'dig_med1',
    systemId: 'digestive',
    level: 'medical',
    clinicalScenario: {
      en: 'A 19-year-old college student presents with 24 hours of periumbilical colicky pain that migrated to the right lower quadrant, accompanied by anorexia, nausea, and low-grade fever. Physical exam reveals exquisite tenderness at McBurney’s point with positive Rovsing, Psoas, and Obturator signs.',
      si: 'වයස 19ක තරුණයෙක් පෙකණිය වටා ආරම්භ වී දකුණු යටි බඩට ගමන් කළ වේදනාව, ඔක්කාරය සහ උණ සමග පැමිණේ. මැක්බර්නි ලක්ෂ්‍යය (McBurney point) තද කළ විට දැඩි වේදනාවක් දැනේ.',
      ta: '19 வயது மாணவருக்கு தொப்புளைச் சுற்றி ஆரம்பித்து வலது கீழ் வயிற்றுக்கு பரவிய கடுமையான வலி, காய்ச்சல், வாந்தி உள்ளது. மெக்பர்னி புள்ளியில் (McBurney) தொடும் போது தாங்க முடியாத வலி ஏற்படுகிறது.'
    },
    question: {
      en: 'What anatomical landmark accurately defines McBurney’s point?',
      si: 'මැක්බර්නි ලක්ෂ්‍යය (McBurney’s point) නිවැරදිව පිහිටා ඇත්තේ කොතැනද?',
      ta: 'மெக்பர்னி புள்ளி உடற்கூறியல் ரீதியாக எங்கு அமைந்துள்ளது?'
    },
    options: [
      {
        en: 'One-third the distance from the Anterior Superior Iliac Spine (ASIS) to the umbilicus',
        si: 'පූර්ව උත්තර ඉලියැක් තුඩ (ASIS) සහ පෙකණිය අතර දුරින් තුනෙන් එකක (1/3) පිහිටි ස්ථානය',
        ta: 'முன் மேல் இடுப்பு எலும்பு முனையிலிருந்து (ASIS) தொப்புள் வரையிலான தூரத்தில் மூன்றில் ஒரு பங்கு'
      },
      {
        en: 'Midway between the xiphoid process and symphysis pubis',
        si: 'උරස්ඵලක අග්‍රය සහ ශ්‍රෝණි සන්ධානය අතර මැද',
        ta: 'நெஞ்சு எலும்புக்கும் இடுப்புக்கும் நடுவே'
      },
      {
        en: 'Two inches lateral to the left mid-clavicular line',
        si: 'වම් මධ්‍ය ක්ලැවිකියුලර් රේඛාවෙන් අඟල් දෙකක් ඈතින්',
        ta: 'இடது புற மார்பு எலும்பிலிருந்து 2 அங்குலம்'
      },
      {
        en: 'Directly at the right costal margin at the midclavicular intersection',
        si: 'දකුණු ඉළඇට කෙළවරේ',
        ta: 'வலது விலா எலும்பின் விளிம்பில்'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'McBurney’s point is located 1/3 the distance from the right ASIS to the umbilicus, corresponding to the base of the appendix where it attaches to the cecum. Tenderness here is the cardinal diagnostic physical finding of acute appendicitis.',
      si: 'මැක්බර්නි ලක්ෂ්‍යය යනු දකුණු ASIS සිට පෙකණිය දක්වා දුරින් 1/3 ක ස්ථානයයි. උණ්ඩුකපුච්ඡ ප්‍රදාහයේදී (Appendicitis) මෙම ස්ථානය තද වන විට දැඩි වේදනාවක් දැනේ.',
      ta: 'மெக்பர்னி புள்ளி அப்பெண்டிக்ஸின் அமைவிடத்தைக் குறிக்கிறது. இது அப்பெண்டிசிடிஸ் நோயைக் கண்டறியும் முக்கிய சோதனையாகும்.'
    },
    relatedPartId: 'digestive_stomach'
  },

  // ==========================================
  // URINARY SYSTEM QUIZZES
  // ==========================================
  // Primary
  {
    id: 'urin_p1',
    systemId: 'urinary',
    level: 'primary',
    question: {
      en: 'What shape are your two incredible kidneys that filter your blood?',
      si: 'ඔබේ රුධිරය පෙරහන් කරන අපූරු වකුගඩු දෙකෙහි හැඩය කුමක්ද?',
      ta: 'இரத்தத்தை வடிகட்டும் நமது இரண்டு சிறுநீரகங்களும் என்ன வடிவில் உள்ளன?'
    },
    options: [
      { en: 'Kidney bean shape', si: 'බෝංචි ඇට හැඩය', ta: 'அவரை விதை வடிவம்' },
      { en: 'Square box shape', si: 'හතරැස් පෙට්ටි හැඩය', ta: 'சதுர வடிவம்' },
      { en: 'Star shape', si: 'තරු හැඩය', ta: 'நட்சத்திர வடிவம்' },
      { en: 'Triangle shape', si: 'ත්‍රිකෝණ හැඩය', ta: 'முக்கோண வடிவம்' },
    ],
    correctIndex: 0,
    explanation: {
      en: 'Kidneys are bean-shaped organs about the size of your fist that wash your blood clean all day long!',
      si: 'වකුගඩු යනු ඔබේ මිට මොළවූ අතක් තරම් වූ බෝංචි ඇට හැඩැති අවයව දෙකකි!',
      ta: 'சிறுநீரகங்கள் நமது கைமுஷ்டி அளவுள்ள அவரை விதை வடிவ உறுப்புகளாகும்!'
    },
    relatedPartId: 'urinary_kidney'
  },

  // A/L Level
  {
    id: 'urin_al1',
    systemId: 'urinary',
    level: 'al',
    question: {
      en: 'In which segment of the nephron does the maximum volume (~65-70%) of water, sodium, and glucose reabsorption occur?',
      si: 'නෙෆ්‍රෝනයේ ජලය, සෝඩියම් සහ ග්ලූකෝස් වැඩිම ප්‍රතිශතයක් (~65-70%) නැවත අවශෝෂණය වන්නේ කුමන කොටසෙන්ද?',
      ta: 'நெப்ரானில் அதிகப்படியான (~65-70%) நீர், சோடியம் மற்றும் குளுக்கோஸ் மறுஉறிஞ்சுதல் எங்கு நடைபெறுகிறது?'
    },
    options: [
      { en: 'Proximal Convoluted Tubule (PCT)', si: 'සමීපස්ථ ආවර්තිත නාලිකාව (PCT)', ta: 'அண்மை சுருள் நுண்குழல் (PCT)' },
      { en: 'Descending limb of Loop of Henle', si: 'හෙන්ලේ පුඩුවේ අවරෝහණ බාහුව', ta: 'ஹென்லே வளைவின் கீழ் இறங்கு பகுதி' },
      { en: 'Distal Convoluted Tubule (DCT)', si: 'විදුරස්ථ ආවර්තිත නාලිකාව (DCT)', ta: 'சேய்மை சுருள் நுண்குழல் (DCT)' },
      { en: 'Medullary Collecting Duct', si: 'මජ්ජා එකතු කිරීමේ නාලිකාව', ta: 'சேகரிக்கும் குழாய்' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The Proximal Convoluted Tubule (PCT) has extensive microvilli (brush border) and high mitochondrial density, reabsorbing ~65-70% of Na+ and H2O, and 100% of filtered glucose and amino acids via secondary active transport (SGLT2).',
      si: 'සමීපස්ථ ආවර්තිත නාලිකාවේ (PCT) ඇති ක්ෂුද්‍ර ප්‍රසර මගින් පෙරහන් වූ ජලය සහ සෝඩියම් වලින් 65-70%ක් ද, ග්ලූකෝස් සම්පූර්ණයෙන්මද නැවත අවශෝෂණය කරයි.',
      ta: 'அண்மை சுருள் நுண்குழலில் (PCT) சோடியம் மற்றும் நீரில் 65-70% மற்றும் அனைத்து குளுக்கோசும் மறுஉறிஞ்சப்படுகிறது.'
    },
    relatedPartId: 'urinary_kidney'
  },

  // Medical Level
  {
    id: 'urin_med1',
    systemId: 'urinary',
    level: 'medical',
    clinicalScenario: {
      en: 'A 9-year-old boy presents 2 weeks after an episode of streptococcal pharyngitis with periorbital edema, dark cola-colored urine, and mild hypertension. Urinalysis reveals proteinuria, hematuria with dysmorphic RBCs, and red blood cell casts.',
      si: 'ස්ට්‍රෙප්ටොකොකල් උගුරේ ආසාදනයකින් සති 2කට පසු වයස 9ක පිරිමි දරුවෙකු ඇස් වටා ඉදිමීම, කෝලා පැහැති තද මුත්‍රා සහ අධි රුධිර පීඩනය සමග පැමිණේ. මුත්‍රා පරීක්ෂාවේදී රතු රුධිර සෛල කාස්ට් (RBC casts) හමුවේ.',
      ta: 'தொண்டை தொற்று ஏற்பட்டு 2 வாரங்களுக்குப் பின் 9 வயது சிறுவனுக்கு கண் வீக்கம், கோலா நிறத்தில் சிறுநீர் மற்றும் உயர் இரத்த அழுத்தம் ஏற்படுகிறது. சிறுநீரில் இரத்த சிவப்பணுக்கள் வெளியேறுகின்றன.'
    },
    question: {
      en: 'What is the underlying pathophysiology of Poststreptococcal Glomerulonephritis (PSGN)?',
      si: 'මෙම පශ්චාත්-ස්ට්‍රෙප්ටොකොකල් ග්ලෝමරුලෝනෙෆ්‍රයිටිස් (PSGN) තත්ත්වයේ මූලික කායික විද්‍යාත්මක හේතුව කුමක්ද?',
      ta: 'இந்த PSGN சிறுநீரக நோயின் அடிப்படை உடலியல் காரணம் என்ன?'
    },
    options: [
      {
        en: 'Type III hypersensitivity with immune complex (IgG/C3) deposition in the subepithelial space forming "lumpy-bumpy" humps',
        si: 'ටයිප් III අධිසංවේදීතාව: උප-අපිච්ඡද අවකාශයේ ප්‍රතිශක්තිකරණ සංකීර්ණ (IgG/C3) තැන්පත් වීමෙන් "lumpy-bumpy" ගැටිති සෑදීම',
        ta: 'வகை III ஒவ்வாமை: ஆன்டிபாடி-ஆன்டிஜென் கூட்டமைப்பு சிறுநீரகத்தில் படிந்து வீக்கத்தை உண்டாக்குதல்'
      },
      {
        en: 'Anti-Glomerular Basement Membrane (GBM) antibody attack against type IV collagen',
        si: 'ටයිප් IV කොලැජන් වලට එරෙහිව ස්වයංක්‍රීය ප්‍රතිදේහ පහරදීම',
        ta: 'எதிர்ப்பு புரதங்கள் சிறுநீரக திசுக்களை நேரடியாக தாக்குவது'
      },
      {
        en: 'Ascending bacterial migration causing interstitial suppurative nephritis',
        si: 'මුත්‍රා මාර්ගයෙන් බැක්ටීරියා ඉහළට ගමන් කර සැරව සෑදීම',
        ta: 'பாக்டீரியா மேலேறி சீழ் உண்டாக்குவது'
      },
      {
        en: 'Podocyte foot process effacement without any immune complex deposition',
        si: 'ප්‍රතිශක්තිකරණ සංකීර්ණ තැන්පත් වීමකින් තොරව පොඩොසයිට විනාශ වීම',
        ta: 'செல்கள் தட்டையாகி சிறுநீரில் புரதம் மட்டும் கசிவது'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'PSGN is a classic Type III hypersensitivity reaction where circulating antigen-antibody immune complexes deposit in the glomerular basement membrane, activating the complement cascade (lowering C3) and causing subepithelial humps visible on electron microscopy.',
      si: 'PSGN යනු Type III hypersensitivity තත්ත්වයකි. ප්‍රතිදේහ සංකීර්ණ ග්ලෝමරුලස් පටලයේ තැන්පත් වී C3 කොම්ප්ලිමන්ට් ප්‍රෝටීන ක්‍රියාත්මක වීමෙන් මෙම දැවිල්ල ඇතිවේ.',
      ta: 'இது டைப் III ஒவ்வாமை காரணமாக சிறுநீரக சவ்வில் ஆன்டிபாடி கூட்டமைப்பு படிந்து, இரத்த சிவப்பணுக்கள் சிறுநீரில் வெளியேற வழிவகுக்கிறது.'
    },
    relatedPartId: 'urinary_kidney'
  },

  // ==========================================
  // FULL BODY ANATOMY SYSTEM QUIZZES
  // ==========================================
  // Primary
  {
    id: 'fullbody_p1',
    systemId: 'fullbody',
    level: 'primary',
    question: {
      en: 'What is the largest organ in the human body that protects you like an awesome waterproof jacket?',
      si: 'ජල ආරක්ෂිත ජැකට්ටුවක් මෙන් මුළු සිරුරම ආවරණය කර ආරක්ෂා කරන මිනිස් සිරුරේ විශාලතම අවයවය කුමක්ද?',
      ta: 'நீர்ப்புகா ஆடை போல முழு உடலையும் பாதுகாக்கும் மனித உடலின் மிகப்பெரிய உறுப்பு எது?'
    },
    options: [
      { en: 'The Liver', si: 'අක්මාව', ta: 'கல்லீரல்' },
      { en: 'The Skin', si: 'සම (චර්මය)', ta: 'தோல்' },
      { en: 'The Large Intestine', si: 'මහා බඩවැල', ta: 'பெருங்குடல்' },
      { en: 'The Lungs', si: 'පෙනහළු', ta: 'நுரையீரல்கள்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'The skin is the largest organ in your body, covering about 2 square meters and acting as a waterproof shield against germs!',
      si: 'සම මිනිස් සිරුරේ විශාලතම අවයවය වන අතර එය වර්ග මීටර් 2ක් පමණ ප්‍රදේශයක් ආවරණය කරමින් විෂබීජවලින් අපව ආරක්ෂා කරයි!',
      ta: 'தோல் மனித உடலின் மிகப்பெரிய உறுப்பாகும், இது சுமார் 2 சதுர மீட்டர் பரப்பளவை கொண்டு கிருமிகளிடமிருந்து பாதுகாக்கிறது!'
    },
    relatedPartId: 'fullbody_integumentary_skin'
  },
  {
    id: 'fullbody_p2',
    systemId: 'fullbody',
    level: 'primary',
    question: {
      en: 'How many bones make up an adult human skeletal framework?',
      si: 'වැඩිහිටි මිනිස් ඇටසැකිල්ල සමන්විත වන්නේ මුළු අස්ථි කීයකින්ද?',
      ta: 'ஒரு வளர்ந்த மனித எலும்புக்கூட்டில் மொத்தம் எத்தனை எலும்புகள் உள்ளன?'
    },
    options: [
      { en: '100 Bones', si: 'අස්ථි 100ක්', ta: '100 எலும்புகள்' },
      { en: '206 Bones', si: 'අස්ථි 206ක්', ta: '206 எலும்புகள்' },
      { en: '512 Bones', si: 'අස්ථි 512ක්', ta: '512 எலும்புகள்' },
      { en: '365 Bones', si: 'අස්ථි 365ක්', ta: '365 எலும்புகள்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Adults have 206 bones in their skeleton. Babies are born with about 270 soft bones, but many fuse together as you grow!',
      si: 'වැඩිහිටියෙකුට අස්ථි 206ක් ඇත. ළදරුවෙකු උපදින විට අස්ථි 270ක් පමණ ඇති අතර වැඩෙත්ම ඒවා එකිනෙකට බද්ධ වේ!',
      ta: 'பெரியவர்களின் எலும்புக்கூட்டில் 206 எலும்புகள் உள்ளன. குழந்தைகள் பிறக்கும் போது ~270 எலும்புகளுடன் பிறந்து, வளர வளர ஒன்றிணைகின்றன!'
    },
    relatedPartId: 'fullbody_axial_skeleton'
  },

  // A/L Level
  {
    id: 'fullbody_al1',
    systemId: 'fullbody',
    level: 'al',
    question: {
      en: 'Which anatomical plane divides the human body into anterior (ventral) and posterior (dorsal) sections?',
      si: 'මිනිස් ශරීරය පූර්ව (Anterior) සහ අපර (Posterior) කොටස් දෙකට බෙදනු ලබන ව්‍යූහ විද්‍යාත්මක තලය කුමක්ද?',
      ta: 'மனித உடலை முன்புற மற்றும் பின்புற பகுதிகளாகப் பிரிக்கும் உடற்கூறியல் தளம் எது?'
    },
    options: [
      { en: 'Coronal (Frontal) Plane', si: 'කිරීටක (Coronal) තලය', ta: 'கொரோனல் (முன்புற) தளம்' },
      { en: 'Sagittal Plane', si: 'සැජිටල් (Sagittal) තලය', ta: 'சாஜிட்டல் தளம்' },
      { en: 'Transverse (Axial) Plane', si: 'තිරස් (Transverse) තලය', ta: 'குறுக்குவெட்டு தளம்' },
      { en: 'Oblique Plane', si: 'ආනත තලය', ta: 'சாய்வு தளம்' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The Coronal (or Frontal) plane runs vertically and divides the body into front (anterior) and back (posterior) halves.',
      si: 'කිරීටක තලය (Coronal plane) මගින් සිරුර ඉදිරිපස සහ පිටුපස ලෙස කොටස් දෙකකට වෙන් කරයි.',
      ta: 'கொரோனல் தளம் உடலை முன்புறம் மற்றும் பின்புறம் என இரு பகுதிகளாக பிரிக்கிறது.'
    },
    relatedPartId: 'fullbody_axial_skeleton'
  },
  {
    id: 'fullbody_al2',
    systemId: 'fullbody',
    level: 'al',
    question: {
      en: 'Which of the following describes the correct functional hierarchy of the human organism?',
      si: 'මිනිස් දේහයේ නිවැරදි ව්‍යූහාත්මක සංවිධාන මට්ටම පෙළගස්වන්න:',
      ta: 'மனித உடலின் சரியான கட்டமைப்பு படிநிலையைத் தேர்ந்தெடுக்கவும்:'
    },
    options: [
      { en: 'Cells → Tissues → Organs → Organ Systems → Organism', si: 'සෛල → පටක → අවයව → අවයව පද්ධති → ජීවියා', ta: 'செல்கள் → திசுக்கள் → உறுப்புகள் → தொகுதி → உயிரினம்' },
      { en: 'Tissues → Cells → Organs → Organism → Systems', si: 'පටක → සෛල → අවයව → ජීවියා → පද්ධති', ta: 'திசுக்கள் → செல்கள் → உறுப்புகள் → உயிரினம்' },
      { en: 'Organs → Tissues → Cells → Systems → Organism', si: 'අවයව → පටක → සෛල → පද්ධති → ජීවියා', ta: 'உறுப்புகள் → திசுக்கள் → செல்கள் → தொகுதி' },
      { en: 'Molecules → Organs → Tissues → Cells → Organism', si: 'අණු → අවයව → පටක → සෛල → ජීවියා', ta: 'மூலக்கூறுகள் → உறுப்புகள் → செல்கள்' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The biological hierarchy ascends from Cells to Tissues (epithelial, connective, muscular, nervous), Organs, Organ Systems, and ultimately the integrated multicellular Organism.',
      si: 'ජෛව විද්‍යාත්මක සංවිධානය: සෛල එක්වී පටකද, පටක එක්වී අවයවද, අවයව එක්වී පද්ධතිද, අවසානයේ සම්පූර්ණ ජීවියාද ගොඩනැගේ.',
      ta: 'செல்கள் இணைந்து திசுக்களையும், திசுக்கள் உறுப்புகளையும், உறுப்புகள் தொகுதிகளையும், தொகுதிகள் முழு உடலையும் உருவாக்குகின்றன.'
    },
    relatedPartId: 'fullbody_integumentary_skin'
  },

  // Medical Level
  {
    id: 'fullbody_med1',
    systemId: 'fullbody',
    level: 'medical',
    clinicalScenario: {
      en: 'A 28-year-old trauma patient arrives at the resuscitation bay following a high-speed motor vehicle collision. On primary survey, the patient has unequal chest wall expansion, absent breath sounds on the right hemithorax, hyperresonance to percussion, tracheal deviation to the left, and systemic hypotension (BP 74/46 mmHg).',
      si: 'මෝටර් රථ අනතුරකට ලක්වූ 28 හැවිරිදි රෝගියෙකුගේ දකුණු පපුවේ ශබ්ද නොඇසෙන අතර, තට්ටු කිරීමේදී හයිපර්-රෙසොනන්ස් ශබ්දයක්ද, ශ්වාසනාලය වමට විතැන් වී රුධිර පීඩනය 74/46 mmHg දක්වා අඩුවී ඇත.',
      ta: 'விபத்தில் சிக்கிய 28 வயது நோயாளிக்கு வலது மார்பில் மூச்சு சத்தம் இல்லை, மூச்சுக்குழாய் இடதுபுறம் நகர்ந்துள்ளது, இரத்த அழுத்தம் மிகக் குறைந்துள்ளது.'
    },
    question: {
      en: 'What is the immediate life-saving anatomical intervention required for this multi-system trauma patient?',
      si: 'මෙම රෝගියාගේ ජීවිතය බේරාගැනීම සඳහා සිදුකළ යුතු කඩිනම් ජීවිතාරක්ෂක ක්‍රියාමාර්ගය කුමක්ද?',
      ta: 'இந்த நோயாளியின் உயிரைக் காப்பாற்ற உடனடியாக செய்ய வேண்டிய அவசர சிகிச்சை என்ன?'
    },
    options: [
      {
        en: 'Immediate needle thoracostomy decompression at the 2nd intercostal space midclavicular line or 4th/5th intercostal space anterior axillary line',
        si: '2 වන අන්තර්පාර්ශුක අවකාශයේ midclavicular රේඛාව ඔස්සේ කඩිනමින් කටුවකින් වාතය ඉවත් කර පීඩනය මුදාහැරීම (Needle thoracostomy)',
        ta: 'மார்பின் 2வது அல்லது 5வது இடைவெளியில் ஊசி செலுத்தி காற்றை உடனடியாக வெளியேற்றுதல்'
      },
      {
        en: 'Emergency transfer to CT scanner for contrast-enhanced whole body trauma angiography',
        si: 'කඩිනමින් සම්පූර්ණ දේහ CT ස්කෑන් පරීක්ෂණයක් සඳහා යොමු කිරීම',
        ta: 'உடனடியாக CT ஸ்கேன் எடுக்க அனுப்புவது'
      },
      {
        en: 'High-dose intravenous loop diuretic and nitroglycerin infusion',
        si: 'නයිට්‍රොග්ලිසරින් සහ ඩයුරටික් ඖෂධ ලබාදීම',
        ta: 'இரத்த அழுத்தத்தை குறைக்கும் மருந்துகளை ஏற்றுவது'
      },
      {
        en: 'Immediate exploratory laparotomy for suspected intra-abdominal hemorrhage',
        si: 'උදර අභ්‍යන්තර රුධිර වහනයක් සලකා උදර ශල්‍යකර්මයක් ආරම්භ කිරීම',
        ta: 'வயிற்று அறுவை சிகிச்சை செய்வது'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'This patient has classic tension pneumothorax where one-way valvular air entry into the pleural space causes mediastinal shift, compressing the Inferior and Superior Vena Cava, impeding venous return and triggering obstructive cardiogenic shock. Immediate needle decompression converts tension pneumothorax into simple pneumothorax before tube thoracostomy.',
      si: 'මෙය ආතති වායුඋරස් (Tension pneumothorax) තත්ත්වයකි. පීඩනය වැඩිවීමෙන් මහා ශිරා අවහිර වී හෘදයට රුධිරය ඒම නැවතී කම්පනය (Shock) ඇතිවේ. කඩිනම් Needle decompression මගින් ජීවිතය බේරාගත හැක.',
      ta: 'இது டென்ஷன் நியூமோதோராக்ஸ் ஆகும். மார்பில் அதிகமான காற்று சேர்ந்து இதயத்திற்கு இரத்தம் செல்வதை தடுக்கிறது. உடனடியாக ஊசி மூலம் காற்றை வெளியேற்றுவது உயிரைக் காக்கும்.'
    },
    relatedPartId: 'fullbody_pulmonary_lungs'
  },
  {
    id: 'fullbody_med2',
    systemId: 'fullbody',
    level: 'medical',
    clinicalScenario: {
      en: 'A 54-year-old male presents with deep, boring epigastric pain that radiates directly into his back, partially relieved by leaning forward. Lipase is 1,450 U/L (normal <60 U/L). Abdominal CT demonstrates peripancreatic fluid stranding and retroperitoneal edema.',
      si: '54 හැවිරිදි පුද්ගලයෙකුට පිටුපසට විහිදෙන තද උදර වේදනාවක් ඇති අතර, ඉදිරියට නැමුණු විට තරමක් අඩුවේ. රුධිර ලයිපේස් එන්සයිම අගය 1,450 U/L දක්වා ඉහළ ගොස් ඇත. CT ස්කෑන් මගින් අග්න්‍යාශය ආශ්‍රිත දැවිල්ලක් පෙන්වයි.',
      ta: 'முதுகில் பரவும் தீவிர வயிற்று வலியுடன் நோயாளி வருகிறார், முன்னால் குனியும் போது வலி குறைகிறது. லைபேஸ் நொதி 1450 U/L ஆக உயர்ந்துள்ளது.'
    },
    question: {
      en: 'Which retroperitoneal spatial compartment houses this organ, explaining the characteristic back pain radiation and potential tracking into the flank (Grey Turner’s sign)?',
      si: 'මෙම වේදනාව පිටුපසට විහිදීමට සහ Grey Turner ලකුණ (ඉළඇට අසල නිල්වීම) ඇතිවීමට හේතුවන රෙට්‍රොපෙරිටෝනියල් අවකාශය කුමක්ද?',
      ta: 'முதுகு வலி மற்றும் பக்கவாட்டு வீக்கத்தை உண்டாக்கும் இந்த உறுப்பு அமைந்துள்ள குறிப்பிட்ட ரெட்ரோபெரிட்டோனியல் பகுதி எது?'
    },
    options: [
      {
        en: 'Anterior Pararenal Space',
        si: 'පූර්ව පැරාරීනල් අවකාශය (Anterior Pararenal Space)',
        ta: 'முன்புற பாராரீனல் இடைவெளி'
      },
      {
        en: 'Perirenal Space within Gerota’s fascia',
        si: 'ගෙරෝටා බන්ධනිය තුළ ඇති පෙරිරීනල් අවකාශය (Perirenal space)',
        ta: 'ஜெரோட்டா தசைநார் இடைவெளி'
      },
      {
        en: 'Posterior Pararenal Space',
        si: 'පශ්චාත් පැරාරීනල් අවකාශය (Posterior Pararenal Space)',
        ta: 'பின்புற பாராரீனல் இடைவெளி'
      },
      {
        en: 'Lesser sac (Omental Bursa) isolated anteriorly',
        si: 'Omental bursa අවකාශය පමණි',
        ta: 'சிறிய பை பகுதி'
      }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The pancreas lies within the Anterior Pararenal Space of the retroperitoneum alongside the ascending/descending colon and duodenum. Severe acute pancreatitis allows enzymatic extravasation to track through retroperitoneal planes into the flank, producing Grey Turner’s ecchymosis.',
      si: 'අග්න්‍යාශය පිහිටා ඇත්තේ පූර්ව පැරාරීනල් අවකාශයේය. අග්න්‍යාශයික එන්සයිම මෙම අවකාශය ඔස්සේ පිටුපසට සහ ඉළඇට ප්‍රදේශයට ගමන් කිරීමෙන් පිටුපස වේදනාව සහ Grey Turner ලකුණ ඇතිවේ.',
      ta: 'கணையம் முன்புற பாராரீனல் இடைவெளியில் உள்ளது. கணைய அழற்சி நொதிகள் இந்த இடைவெளியில் பரவுவதால் முதுகில் வலி மற்றும் பக்கவாட்டில் நீல நிற அடையாளங்கள் ஏற்படுகின்றன.'
    },
    relatedPartId: 'fullbody_abdominal_viscera'
  }
];

export const QUIZZES_DATA: QuizQuestion[] = [...BASE_QUIZZES_DATA, ...ADDITIONAL_QUIZZES_DATA];
