import { QuizQuestion } from '../types';

export const ANIMAL_QUIZZES: QuizQuestion[] = [
  // ==================== FROG QUIZZES ====================
  {
    id: 'frog_q1',
    speciesId: 'frog',
    systemId: 'circulatory',
    level: 'primary',
    question: {
      en: 'How many rooms (chambers) does a frog’s heart have?',
      si: 'මැඩියාගේ හෘදයේ කුටීර (කාමර) කීයක් තිබේද?',
      ta: 'தவளையின் இதயத்தில் எத்தனை அறைகள் உள்ளன?'
    },
    options: [
      { en: '2 Chambers', si: 'කුටීර 2 කි', ta: '2 அறைகள்' },
      { en: '3 Chambers (2 atria and 1 ventricle)', si: 'කුටීර 3 කි (ආලින්ද 2 සහ කෝෂිකා 1)', ta: '3 அறைகள் (2 ஏட்ரியம் மற்றும் 1 வென்ட்ரிக்கிள்)' },
      { en: '4 Chambers', si: 'කුටීර 4 කි', ta: '4 அறைகள்' },
      { en: '5 Chambers', si: 'කුටීර 5 කි', ta: '5 அறைகள்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Frogs have a 3-chambered heart with two atria and one single ventricle. A spiral valve inside helps direct oxygen-rich blood to the body and brain.',
      si: 'මැඩියාගේ හෘදයේ ආලින්ද දෙකක් හා තනි කෝෂිකාවක් සහිතව කුටීර 3 ක් පිහිටයි. එහි ඇති සර්පිල කපාටය මගින් ඔක්සිජන් සහිත රුධිරය මොළයට යොමු කරයි.',
      ta: 'தவளைகளுக்கு 2 ஏட்ரியம் மற்றும் 1 வென்ட்ரிக்கிள் கொண்ட 3-அறை இதயம் உள்ளது. சுருள் வால்வு நல்ல இரத்தத்தை உடலுக்கு செலுத்துகிறது.'
    },
    relatedPartId: 'frog_3chamber_heart'
  },
  {
    id: 'frog_q2',
    speciesId: 'frog',
    systemId: 'respiratory',
    level: 'al',
    question: {
      en: 'How does an adult frog ventilate its saccular lungs in the absence of ribs and a diaphragm?',
      si: 'ඉළඇට සහ ප්‍රාචීරය රහිතව වැඩුණු මැඩියෙකු තම පෙනහලුවලට වාතය ලබාගන්නේ කෙසේද?',
      ta: 'விலா எலும்புகள் மற்றும் உதரவிதானம் இல்லாத நிலையில் தவளை எவ்வாறு நுரையீரலுக்கு காற்றை செலுத்துகிறது?'
    },
    options: [
      { en: 'Negative thoracic suction created by skin expansion', si: 'සම ප්‍රසාරණයෙන් ඇතිවන සෘණ පීඩනයෙන්', ta: 'தோல் விரிவடைவதால் ஏற்படும் எதிர்மறை அழுத்தம்' },
      { en: 'Positive-pressure buccopharyngeal pumping by raising the floor of the mouth', si: 'මුඛ කුහර පත්ල ඔසවා ඇතිකරන ධන පීඩන තෙරපුමෙන් (Buccal pumping)', ta: 'வாய் அடித்தளத்தை உயர்த்தி நேர்மறை அழுத்தத்தால் காற்றைத் தள்ளுதல்' },
      { en: 'Passive diffusion through spiracles along the abdomen', si: 'උදරයේ ඇති ශ්වසන රන්ධ්‍ර මගින්', ta: 'உடலில் உள்ள துளைகள் வழி காற்று பரவுதல்' },
      { en: 'Continuous unidirectional flow via air sacs', si: 'වායු කෝෂ මගින් එක්-දිශානතව', ta: 'காற்றுப் பைகள் மூலம் ஒருவழியாக' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Frogs lack ribs, intercostal muscles, and a diaphragm. They fill their lungs using positive-pressure buccal pumping, swallowing air through the glottis.',
      si: 'මැඩියන්ට ඉළඇට හෝ ප්‍රාචීරයක් නොමැති අතර, මුඛ කුහර පත්ල ඉහළ පහළ කරමින් ධන පීඩනයකින් වාතය ස්වරාලය හරහා පෙනහලු තුළට තල්ලු කරයි.',
      ta: 'தவளைகளில் உதரவிதானம் இல்லாததால், தொண்டையை அசைத்து நேர்மறை அழுத்தம் (Buccal pumping) மூலம் காற்றை நுரையீரலுக்குள் தள்ளுகின்றன.'
    },
    relatedPartId: 'frog_saccular_lungs'
  },
  {
    id: 'frog_q3',
    speciesId: 'frog',
    systemId: 'skeletal',
    level: 'medical',
    clinicalScenario: {
      en: 'Comparative biomechanics analysis of jumping thrust in anurans.',
      si: 'ඇනියුරා ගෝත්‍රිකයන්ගේ පැනීමේ ජෛව යාන්ත්‍රික විද්‍යාව.',
      ta: 'தவளையின் பாயும் இயக்கவியல் ஒப்பீடு.'
    },
    question: {
      en: 'What functional advantage is conferred by the fusion of postsacral caudal vertebrae into the urostyle?',
      si: 'කශේරුකා එකතු වී යුරොස්ටයිලය සෑදීමෙන් ලැබෙන ප්‍රධාන ජෛව යාන්ත්‍රික වාසිය කුමක්ද?',
      ta: 'வால் எலும்புகள் இணைந்து யூரோஸ்டைல் உருவாவதால் கிடைக்கும் முக்கிய நன்மை யாது?'
    },
    options: [
      { en: 'Facilitates high-speed swimming tail oscillations', si: 'වලිගය වනමින් වේගයෙන් පිහිනීමට', ta: 'வாலை ஆட்டி நீந்துவதற்கு' },
      { en: 'Stabilizes pelvic iliac shafts and transmits takeoff thrust directly to the axial skeleton without buckling', si: 'ශ්‍රෝණිය ශක්තිමත් කර පිම්මේ දැවැන්ත තෙරපුම කශේරුව නොනැමී ඉදිරියට සම්ප්‍රේෂණය කිරීම', ta: 'இடுப்பெலும்பை உறுதிப்படுத்தி பாயும் உந்துதலை முதுகெலும்பிற்கு பாதுகாப்பாக கடத்துதல்' },
      { en: 'Houses specialized electric organs for prey capture', si: 'විදුලි අවයව රඳවා තබාගැනීමට', ta: 'மின்சார உறுப்புகளை தாங்குவதற்கு' },
      { en: 'Reduces lung compression during cutaneous diving', si: 'කිමිදෙන විට පෙනහලු හැකිලීම වැළැක්වීමට', ta: 'நுரையீரல் அழுத்தத்தை குறைக்க' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'The urostyle acts as an unbending mechanical beam articulating with the sacrum and iliac shafts, channeling explosive ground reaction forces (>10g) to the torso while preventing spinal fracture.',
      si: 'යුරොස්ටයිලය සවිමත් අස්ථි දණ්ඩක් ලෙස ක්‍රියාකරමින් පැනීමේදී ඇතිවන 10g කට වැඩි දැවැන්ත බලය කොඳුඇටපෙළ බිඳී නොයා සිරුර ඉදිරියට තල්ලු කිරීමට ඉවහල් වේ.',
      ta: 'யூரோஸ்டைல் அதிர்ச்சி உறிஞ்சியாகவும், பாயும் மாபெரும் உந்துவிசையை முதுகெலும்பு முறியாமல் பாதுகாப்பாக கடத்தும் அமைப்பாகவும் செயல்படுகிறது.'
    },
    relatedPartId: 'frog_urostyle'
  },

  // ==================== DOG QUIZZES ====================
  {
    id: 'dog_q1',
    speciesId: 'dog',
    systemId: 'respiratory',
    level: 'primary',
    question: {
      en: 'Why do dogs stick out their tongue and pant on a hot sunny day?',
      si: 'රස්නෙ දවසට බල්ලන් දිව එළියට දමා හති දමන්නේ (Panting) ඇයි?',
      ta: 'வெப்பமான நாளில் நாய்கள் நாக்கை வெளியே தள்ளி மூச்சிரைப்பது ஏன்?'
    },
    options: [
      { en: 'Because they are laughing', si: 'සිනාසීමට', ta: 'சிரிப்பதற்காக' },
      { en: 'To evaporate moisture from their tongue and cool their body', si: 'දිවෙන් ජලය වාෂ්ප කර සිරුර සිසිල් කරගැනීමට', ta: 'நாக்கிலிருந்து நீரை ஆவியாக்கி உடலை குளிர்விக்க' },
      { en: 'To taste the air for bones', si: 'සුළඟේ සුවඳ බැලීමට', ta: 'காற்றை ருசி பார்க்க' },
      { en: 'To scare away other animals', si: 'වෙනත් සතුන් බිය කිරීමට', ta: 'பிற விலங்குகளை பயமுறுத்த' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Dogs do not have sweat glands all over their body like humans. Panting moves air over their wet tongue and throat, evaporating water to release heat!',
      si: 'බල්ලන්ට මිනිසුන් මෙන් ඇඟ පුරා දහඩිය ග්‍රන්ථි නොමැති බැවින්, දිවෙන් ජලය වාෂ්ප කරමින් උෂ්ණත්වය පිටකරයි.',
      ta: 'நாய்களுக்கு உடலெங்கும் வியர்க்காது. நாக்கிலிருந்து நீரை ஆவியாக்குவதன் மூலமே அவை உடலை குளிர்விக்கின்றன.'
    },
    relatedPartId: 'dog_panting_lungs'
  },
  {
    id: 'dog_q2',
    speciesId: 'dog',
    systemId: 'digestive',
    level: 'al',
    question: {
      en: 'Which pairs of teeth constitute the specialized shearing carnassial apparatus in dogs?',
      si: 'සුනඛයාගේ මස් කපන කාර්නැසියල් දත් යුගලය සෑදී ඇත්තේ කවර දත්වලින්ද?',
      ta: 'நாய்களில் இறைச்சியை வெட்டும் கார்னாசியல் பற்கள் எவை?'
    },
    options: [
      { en: 'Upper canine and lower canine', si: 'ඉහළ රදනකය හා පහළ රදනකය', ta: 'மேல் மற்றும் கீழ் கோரைப் பற்கள்' },
      { en: 'Upper 4th premolar (P4) and lower 1st molar (M1)', si: 'ඉහළ 4 වන පූර්ව චාර්වකය (P4) සහ පහළ 1 වන චාර්වකය (M1)', ta: 'மேல் 4வது முன்கடைவாய் மற்றும் கீழ் 1வது கடைவாய்ப் பல்' },
      { en: 'Upper 1st incisor and lower 1st incisor', si: 'ඉහළ හා පහළ 1 වන කෘන්තක දත්', ta: 'முன் வெட்டும் பற்கள்' },
      { en: 'Upper 2nd molar and lower 3rd molar', si: 'ඉහළ 2 වන හා පහළ 3 වන චාර්වක දත්', ta: 'பின் கடைவாய்ப் பற்கள்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'The upper 4th premolar (P4) shears against the lower 1st molar (M1) like blades of heavy-duty scissors, cutting tendons and breaking marrow bones.',
      si: 'ඉහළ 4 වන පූර්ව චාර්වකය (P4) පහළ 1 වන චාර්වකය (M1) මත කතුරක් මෙන් ගැටෙමින් මස් සහ ඇට කපා දමයි.',
      ta: 'மேல் 4வது முன்கடைவாய் (P4) மற்றும் கீழ் 1வது கடைவாய்ப் பல் (M1) இணைந்து கத்தரிக்கோல் போல செயல்படுகின்றன.'
    },
    relatedPartId: 'dog_carnassial_teeth'
  },
  {
    id: 'dog_q3',
    speciesId: 'dog',
    systemId: 'lymphatic',
    level: 'medical',
    clinicalScenario: {
      en: 'A greyhound undergoes strenuous sprint coursing; post-exercise blood tests show a notable rise in packed cell volume (PCV/hematocrit).',
      si: 'වේගයෙන් දිවූ සුනඛයෙකුගේ රුධිර පරීක්ෂාවේදී රතු රුධිර සෛල ප්‍රතිශතය (Hematocrit) ක්ෂණිකව ඉහළ ගොස් ඇත.',
      ta: 'வேகமாக ஓடிய நாயின் இரத்தப் பரிசோதனையில் சிவப்பு இரத்த அணுக்கள் திடீரென அதிகரித்துள்ளன.'
    },
    question: {
      en: 'What physiological mechanism accounts for this acute rise in canine hematocrit during high exertion?',
      si: 'අධික ව්‍යායාමයේදී සුනඛයාගේ රුධිර සෛල ප්‍රතිශතය මෙසේ ක්ෂණිකව ඉහළ යාමට හේතුවන කායික යාන්ත්‍රණය කුමක්ද?',
      ta: 'கடுமையான உடற்பயிற்சியின் போது இரத்த அணுக்கள் அதிகரிக்க காரணமான உடலியல் நிகழ்வு எது?'
    },
    options: [
      { en: 'Massive acute bone marrow erythropoiesis within minutes', si: 'මිනිත්තු කිහිපයක් තුළ ඇටමිදුළුවලින් නව සෛල නිපදවීම', ta: 'நிமிடங்களில் எலும்பு மஜ்ஜை புதிய செல்களை உருவாக்குதல்' },
      { en: 'Alpha-adrenergic sympathetic contraction of the muscular canine spleen autotransfusing stored RBCs', si: 'අනුකම්පී ස්නායු මගින් මාංශපේශී ප්ලීහාව හැකිලී ගබඩා කර තිබූ රතු සෛල රුධිරයට මුදාහැරීම', ta: 'மண்ணீரல் தசை சுருங்கி சேமித்து வைக்கப்பட்ட இரத்த செல்களை உடலுக்கு செலுத்துதல்' },
      { en: 'Selective loss of 80% plasma volume through salivary panting', si: 'කෙළ මගින් ප්ලාස්මාවෙන් 80% ක් ඉවත් වීම', ta: 'வியர்வை மூலம் பிளாஸ்மா குறைதல்' },
      { en: 'Renal shutdown with erythropoietin surge', si: 'වෘක්ක මගින් එරිත්‍රොපොයෙටින් හෝමෝනය වැඩිවීම', ta: 'சிறுநீரக ஹார்மோன் அதிகரிப்பு' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'The canine spleen has thick smooth muscle walls that contract under sympathetic alpha-1 adrenergic stimulation, autotransfusing high-hematocrit red blood cells to enhance muscular oxygenation during aerobic exertion.',
      si: 'සුනඛ ප්ලීහාව සිනිඳු පේශිවලින් පොහොසත් වන අතර, අනුකම්පී උත්තේජනය හමුවේ හැකිලෙමින් ගබඩා කර තිබූ රතු රුධිර සෛල රුධිරයට මුදාහරියි.',
      ta: 'நாயின் மண்ணீரல் வலுவான தசைகளால் ஆனது. உடற்பயிற்சியின் போது அது சுருங்கி சேமிக்கப்பட்ட இரத்த செல்களை உட்செலுத்தி ஆக்சிஜன் அளவை கூட்டுகிறது.'
    },
    relatedPartId: 'dog_spleen_reservoir'
  },

  // ==================== CAT QUIZZES ====================
  {
    id: 'cat_q1',
    speciesId: 'cat',
    systemId: 'nervous',
    level: 'primary',
    question: {
      en: 'Why do cats’ eyes shine bright green or yellow in the dark when light hits them?',
      si: 'රාත්‍රියේදී එළිය වැටුණු විට බළලුන්ගේ ඇස් කොළ හෝ කහ පැහැයෙන් දිලිසෙන්නේ ඇයි?',
      ta: 'இருட்டில் வெளிச்சம் படும் போது பூனையின் கண்கள் பளபளப்பாக மின்னுவது ஏன்?'
    },
    options: [
      { en: 'They have tiny battery-powered lightbulbs inside', si: 'ඇස් ඇතුළේ කුඩා බල්බ ඇති නිසා', ta: 'கண்ணுக்குள் சிறிய பல்புகள் இருப்பதால்' },
      { en: 'A shiny mirror-like layer (Tapetum Lucidum) bounces light back to help them see at night', si: 'ඇස පිටුපස ඇති ටැපීටම් ලූසිඩම් නම් කණ්ණාඩි පටලය ආලෝකය පරාවර්තනය කරන නිසා', ta: 'டேபிட்டம் லூசிடம் என்ற கண்ணாடி போன்ற படலம் ஒளியை திருப்பி அனுப்புவதால்' },
      { en: 'Because they are always dreaming about lasers', si: 'ලේසර් එළි ගැන හිතන නිසා', ta: 'பகலில் சூரிய ஒளியை சேமிப்பதால்' },
      { en: 'Their green fur reflects inside their eyes', si: 'ලොම්වල පාට ඇසට වැටෙන නිසා', ta: 'கண் இமைகள் மின்னுவதால்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Cats have the Tapetum Lucidum behind their retina. It reflects light that passed the rods back through them a second time, giving cats 6x superior night vision!',
      si: 'බළලාගේ ඇසේ ඇති ටැපීටම් ලූසිඩම් පටලය මගින් ආලෝකය නැවත පරාවර්තනය කරමින් මිනිසාට වඩා 6 ගුණයක රාත්‍රී පෙනුමක් ලබාදෙයි.',
      ta: 'விழித்திரைக்குப் பின்னால் உள்ள டேபிட்டம் லூசிடம் ஒளியை மீண்டும் திருப்பி அனுப்பி, இருட்டில் 6 மடங்கு தெளிவான பார்வையை அளிக்கிறது!'
    },
    relatedPartId: 'cat_tapetum_lucidum'
  },
  {
    id: 'cat_q2',
    speciesId: 'cat',
    systemId: 'skeletal',
    level: 'al',
    question: {
      en: 'What anatomical feature allows a domestic cat to squeeze its entire torso through any gap as narrow as its head?',
      si: 'තම හිස රිංගවිය හැකි ඕනෑම පටු ඉඩකින් මුළු සිරුරම රිංගවා ගැනීමට බළලාට හැකිවන්නේ කවර ව්‍යුහය නිසාද?',
      ta: 'பூனையால் தன் தலை நுழையும் எந்த ஒரு சிறிய இடைவெளியிலும் முழு உடலையும் நுழைக்க முடிவது ஏன்?'
    },
    options: [
      { en: 'Lack of pelvic bones and hip joints', si: 'ශ්‍රෝණි අස්ථි නොමැති වීම', ta: 'இடுப்பெலும்புகள் இல்லாததால்' },
      { en: 'A free-floating vestigial clavicle (collarbone) embedded only in muscle', si: 'පේශි තුළ පාවෙන, ළය ඇටයට තදින් සන්ධි නොවූ අක්ෂක අස්ථිය නිසා', ta: 'தசையோடு மட்டுமே இணைந்த மிதக்கும் கழுத்தெலும்பு (Clavicle) இருப்பதால்' },
      { en: 'Cartilage-only skull that compresses like a sponge', si: 'හිස්කබල ස්පොන්ජියක් මෙන් හැකිලෙන නිසා', ta: 'மண்டை ஓடு சுருங்குவதால்' },
      { en: 'Dislocating shoulder joints on demand', si: 'උරහිස් සන්ධි ගැලවිය හැකි නිසා', ta: 'மூட்டுகளை கழற்ற முடிவதால்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Cats possess a rudimentary, free-floating clavicle connected only by muscle and fibrous tissue. It has no rigid bony joint with the sternum or scapula, allowing the shoulders to collapse narrow.',
      si: 'බළලාගේ අක්ෂක අස්ථිය (Clavicle) පේශි තුළ පාවෙන සුළුය. එය ළය ඇටයට හෝ උරහිසට තදින් බැඳී නැති නිසා උරහිස් පටු කරගෙන පටු කුහරවලින් රිංගා යා හැක.',
      ta: 'பூனையின் கழுத்தெலும்பு மார்பெலும்புடன் உறுதியாக இணையாமல் தசையோடு மிதப்பதால், தோள்பட்டையை சுருக்கி இடுக்கான வழிகளில் நுழைய முடிகிறது.'
    },
    relatedPartId: 'cat_flexible_spine'
  },
  {
    id: 'cat_q3',
    speciesId: 'cat',
    systemId: 'skeletal',
    level: 'medical',
    clinicalScenario: {
      en: 'High-speed cinematography of a feline falling inverted (feet-up) from 1 meter altitude.',
      si: 'උඩුයටිකුරුව ඇදවැටෙන බළලෙකුගේ අධිවේගී වීඩියෝ විශ්ලේෂණය.',
      ta: 'தலைகீழாக விழும் பூனையின் அதிவேக அசைவு பகுப்பாய்வு.'
    },
    question: {
      en: 'During the feline righting reflex, how is body rotation initiated without violating conservation of angular momentum?',
      si: 'බළලුන්ගේ සමබර වීමේ සහජයේදී (Righting reflex) කෝණික ගම්‍යතා සංරක්ෂණ නියමය කඩනොවී සිරුර කරකවන්නේ කෙසේද?',
      ta: 'காற்றில் விழும் போது வெளிப்புற விசை ஏதுமின்றி பூனை உடலை திருப்புவது எவ்வாறு சாத்தியமாகிறது?'
    },
    options: [
      { en: 'Tail rotation generates opposing aerodynamic air friction', si: 'වලිගය කරකැවීමෙන් වාතයේ ඝර්ෂණයක් ඇතිකිරීමෙන්', ta: 'வாலை சுழற்றுவதால் ஏற்படும் காற்று உராய்வு' },
      { en: 'Front legs tuck while rear legs extend: front torso twists opposite to rear torso with net zero total angular momentum', si: 'ඉදිරිපස පාද හැකිලී පසුපස පාද දිගු කර, සිරුරේ ඉදිරි කොටස සහ පසු කොටස ප්‍රතිවිරුද්ධ දිශාවලට කරකැවීමෙන්', ta: 'முன்கால்களை மடித்து பின்கால்களை நீட்டி, முன் உடலையும் பின் உடலையும் எதிரெதிர் திசையில் சுழற்றுவதன் மூலம்' },
      { en: 'Sudden expulsion of air from the lungs creates rocket thrust', si: 'පෙනහලුවලින් වාතය තල්ලු කිරීමෙන්', ta: 'நுரையீரலில் இருந்து காற்றை வெளியேற்றுவதன் மூலம்' },
      { en: 'Spinal muscle contraction induces gravitational torque', si: 'ගුරුත්වාකර්ෂණ බලය වෙනස් කිරීමෙන්', ta: 'புவியீர்ப்பு விசையை மாற்றுவதன் மூலம்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'By bending the flexible lumbar spine, the cat acts as two cylinders. By tucking the forelegs (reducing forebody moment of inertia) and splaying hindlegs (increasing rear moment of inertia), it rotates the front 180° with minimal counter-rotation of the back, then reverses the limb postures to align the rear — achieving zero net angular momentum throughout.',
      si: 'නම්‍යශීලී කොඳුඇටපෙළ නැමීමෙන් ඉදිරිපස සිරුරේ අවස්ථිති ඝූර්ණය අඩු කර එය අංශක 180 ක් හරවා, පසුව පසුපස කොටස හරවා ගනිමින් සම්පූර්ණ කෝණික ගම්‍යතාව ශුන්‍යව තබා ගනියි.',
      ta: 'முன் கால்களை மடித்து முன் உடலை எளிதாக திருப்பி, பின்னர் பின் கால்களை திருப்பி, மொத்த சுழற்சி உந்தத்தை பூஜ்ஜியமாக வைத்து சமநிலை அடைகிறது.'
    },
    relatedPartId: 'cat_flexible_spine'
  },

  // ==================== BIRD QUIZZES ====================
  {
    id: 'bird_q1',
    speciesId: 'bird',
    systemId: 'respiratory',
    level: 'primary',
    question: {
      en: 'How many special air sacs do birds have connected to their lungs to help them fly high?',
      si: 'කුරුල්ලන්ට ඉහළ අහසේ පියාසර කිරීමට පෙනහලුවලට සම්බන්ධ වායු කෝෂ කීයක් පිහිටා තිබේද?',
      ta: 'பறவைகளின் நுரையீரலுடன் எத்தனை காற்றுப் பைகள் இணைக்கப்பட்டுள்ளன?'
    },
    options: [
      { en: '2 Air Sacs', si: 'වායු කෝෂ 2 කි', ta: '2 காற்றுப் பைகள்' },
      { en: '4 Air Sacs', si: 'වායු කෝෂ 4 කි', ta: '4 காற்றுப் பைகள்' },
      { en: '9 Air Sacs', si: 'වායු කෝෂ 9 කි', ta: '9 காற்றுப் பைகள்' },
      { en: '20 Air Sacs', si: 'වායු කෝෂ 20 කි', ta: '20 காற்றுப் பைகள்' }
    ],
    correctIndex: 2,
    explanation: {
      en: 'Birds have 9 air sacs acting like bellows! They pump fresh oxygen through their lungs continuously, both when breathing in and when breathing out.',
      si: 'කුරුල්ලන්ට වායු කෝෂ 9 ක් පිහිටයි! හුස්ම ගන්නා විටදී මෙන්ම පිටකරන විටදීත් අඛණ්ඩව ඔක්සිජන් පෙනහලු තුළින් ගලායයි.',
      ta: 'பறவைகளுக்கு 9 காற்றுப் பைகள் உள்ளன! அவை மூச்சை உள்ளிழுக்கும் போதும் வெளிவிடும் போதும் தொடர்ச்சியாக நுரையீரலுக்கு ஆக்சிஜனை அனுப்புகின்றன.'
    },
    relatedPartId: 'bird_9_air_sacs'
  },
  {
    id: 'bird_q2',
    speciesId: 'bird',
    systemId: 'circulatory',
    level: 'al',
    question: {
      en: 'Unlike mammals which retain the Left aortic arch, which aortic arch is preserved in the avian cardiovascular system?',
      si: 'ක්ෂීරපායීන් තුළ වම් මහා ධමනි චාපය රඳා පවතින අතර, පක්ෂීන්ගේ හෘදයේ රඳා පවතින්නේ කවර මහා ධමනි චාපයද?',
      ta: 'பாலூட்டிகளில் இடது பெருநாடி வளைவு இருக்க, பறவைகளில் எந்த பெருநாடி வளைவு உள்ளது?'
    },
    options: [
      { en: 'Left 4th Aortic Arch', si: 'වම් 4 වන මහා ධමනි චාපය', ta: 'இடது 4வது பெருநாடி வளைவு' },
      { en: 'Right 4th Aortic Arch', si: 'දකුණු 4 වන මහා ධමනි චාපය', ta: 'வலது 4வது பெருநாடி வளைவு' },
      { en: 'Ventral Aortic Trunk only', si: 'උදරීය මහා ධමනි කඳ පමණි', ta: 'வயிற்றுப் பெருநாடி மட்டும்' },
      { en: 'Ductus arteriosus ring', si: 'ධමනි නාල වළල්ල', ta: 'தமனி வளையம்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Birds preserve the RIGHT systemic aortic arch (4th embryonic branchial arch), whereas mammals preserve the LEFT arch. This represents classic convergent evolution of high-pressure double circulation.',
      si: 'පක්ෂීන් තුළ දකුණු මහා ධමනි චාපය රඳා පවතින අතර, ක්ෂීරපායීන් තුළ වම් චාපය රඳා පවතී. මෙය ඉහළ කාර්යක්ෂමතාවයකින් යුතු රුධිර සංසරණය සඳහා වූ අභිසාරී පරිණාමීය සාක්ෂියකි.',
      ta: 'பறவைகளில் வலது 4வது பெருநாடி வளைவு மட்டுமே நீடிக்கிறது. இது பறக்கும் தசைகளுக்கு அதிக அழுத்தத்தில் இரத்தம் செலுத்த உதவுகிறது.'
    },
    relatedPartId: 'bird_right_aortic_arch'
  },
  {
    id: 'bird_q3',
    speciesId: 'bird',
    systemId: 'respiratory',
    level: 'medical',
    clinicalScenario: {
      en: 'High-altitude hypoxia tolerance research during migratory flights of Anser indicus (bar-headed geese) crossing the Himalayas at >8,500 meters.',
      si: 'හිමාල කඳුකරය හරහා මීටර් 8,500 කට වඩා උසින් පියාසර කරන පක්ෂීන්ගේ අධි-උන්නතාංශ හයිපොක්සියා ඔරොත්තු දීමේ හැකියාව.',
      ta: 'இமயமலைக்கு மேலே 8,500 மீட்டர் உயரத்தில் பறக்கும் பறவைகளின் ஆக்சிஜன் பற்றாக்குறை தாங்கும் திறன்.'
    },
    question: {
      en: 'Why is avian cross-current gas exchange through rigid parabronchi superior to mammalian pool-diffusion alveolar exchange at extreme low atmospheric PO2?',
      si: 'අතිශය අඩු වායුගෝලීය ඔක්සිජන් පීඩනයකදී මිනිස් ඇල්වියෝලාවලට වඩා පක්ෂීන්ගේ පැරාබ්‍රොන්කස් හරහා සිදුවන හරස්-ප්‍රවාහ වායු හුවමාරුව උසස් වන්නේ ඇයි?',
      ta: 'மிகக் குறைந்த ஆக்சிஜன் உள்ள உயரத்திலும் மனித நுரையீரலை விட பறவைகளின் குறுக்கு-ஓட்ட நுரையீரல் சிறப்பாக செயல்படுவது ஏன்?'
    },
    options: [
      { en: 'Air sacs chemically manufacture oxygen molecules from nitrogen', si: 'වායු කෝෂ මගින් නයිට්‍රජන් වලින් ඔක්සිජන් නිපදවන නිසා', ta: 'காற்றுப் பைகள் ஆக்சிஜனை தானாக உற்பத்தி செய்வதால்' },
      { en: 'Cross-current architecture allows pulmonary capillary PO2 to exceed the PO2 of exhaled gas, eliminating dead space mixing', si: 'හරස්-ප්‍රවාහ ක්‍රමය නිසා පිටවන වායුවේ ඔක්සිජන් පීඩනයට වඩා වැඩි ඔක්සිජන් පීඩනයක් කේශනාලිකා රුධිරයට ලබාගත හැකි වීම හා අක්‍රීය අවකාශ මිශ්‍ර වීම් නොමැති වීම', ta: 'குறுக்கு-ஓட்ட அமைப்பு மூலம் வெளியேறும் காற்றில் உள்ளதை விட அதிக ஆக்சிஜனை இரத்த நாளங்களால் உறிஞ்ச முடிவதால்' },
      { en: 'Bird blood relies entirely on dissolved plasma oxygen without hemoglobin', si: 'හිමොග්ලොබින් නොමැතිව ප්ලාස්මාවේ පමණක් ඔක්සිජන් දියවන නිසා', ta: 'ஹீமோகுளோபின் இன்றி பிளாஸ்மாவில் ஆக்சிஜன் கரைவதால்' },
      { en: 'Rigid parabronchi create a vacuum chamber inside the ribcage', si: 'පෙනහලු තුළ රික්තකයක් නිර්මාණය වන නිසා', ta: 'நுரையீரலில் வெற்றிடம் உருவாவதால்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'In avian cross-current exchange, blood capillaries flow perpendicular to continuous unidirectional airflow in air capillaries. Fresh oxygenated blood meets less depleted air sequentially, allowing end-capillary arterial PO2 to surpass expired air PO2 — a physical impossibility in mammalian alveolar dead-space pool mixing.',
      si: 'පක්ෂීන්ගේ හරස්-ප්‍රවාහ හුවමාරුවේදී, වාතය අඛණ්ඩව එකම දිශාවකට ගලා යන අතර කේශනාලිකා රුධිරය ඊට ලම්බකව ගමන් කරයි. මේ නිසා පිටවන වායුවේ ඇති ඔක්සිජන් සාන්ද්‍රණයටත් වඩා වැඩි ඔක්සිජන් ප්‍රමාණයක් රුධිරයට උරාගත හැක.',
      ta: 'பறவைகளின் குறுக்கு-ஓட்ட முறையில் இரத்தம் காற்றுக்கு செங்குத்தாக பாய்வதால், வெளியேறும் காற்றில் உள்ளதை விட அதிக ஆக்சிஜனை இரத்தத்தால் ஈர்க்க முடிகிறது.'
    },
    relatedPartId: 'bird_9_air_sacs'
  }
];
