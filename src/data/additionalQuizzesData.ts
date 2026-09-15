import { QuizQuestion } from '../types';

export const ADDITIONAL_QUIZZES_DATA: QuizQuestion[] = [
  // ==========================================
  // MUSCULAR SYSTEM QUIZZES
  // ==========================================
  {
    id: 'musc_p1',
    systemId: 'muscular',
    level: 'primary',
    question: {
      en: 'What do your muscles pull on to help your body walk, run, and dance?',
      si: 'ඔබට ඇවිදීමට, දිවීමට සහ නැටීමට උපකාර කිරීම සඳහා ඔබේ පේශි අදින්නේ කුමක් මතද?',
      ta: 'நீங்கள் நடக்க, ஓட, நடனமாட தசைகள் எதை இழுக்கின்றன?'
    },
    options: [
      { en: 'Bones', si: 'අස්ථි', ta: 'எலும்புகள்' },
      { en: 'Stomach', si: 'ආමාශය', ta: 'இரைப்பை' },
      { en: 'Skin only', si: 'සම පමණි', ta: 'தோல் மட்டும்' },
      { en: 'Hair', si: 'රෝම', ta: 'முடி' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Muscles attach to bones by strong cords called tendons to pull and move your skeleton!',
      si: 'මාංශ පේශි කණ්ඩරා මගින් අස්ථිවලට සම්බන්ධ වී අස්ථි ඇදීමෙන් චලනය ඇති කරයි!',
      ta: 'தசைகள் தசைநார்கள் மூலம் எலும்புகளுடன் இணைந்து எலும்புகளை இழுத்து அசைக்கின்றன!'
    },
    relatedPartId: 'muscular_quadriceps'
  },
  {
    id: 'musc_al1',
    systemId: 'muscular',
    level: 'al',
    question: {
      en: 'Which mineral ion is released from the sarcoplasmic reticulum to trigger muscle contraction?',
      si: 'පේශි සංකෝචනය ආරම්භ කිරීම සඳහා සාකොප්ලාස්මීය ජාලිකාවෙන් මුදාහරින ඛනිජ අයනය කුමක්ද?',
      ta: 'தசை சுருக்கத்தைத் தூண்டுவதற்கு சார்கோபிளாஸ்மிக் வலையமைப்பிலிருந்து வெளியேறும் அயனி எது?'
    },
    options: [
      { en: 'Sodium (Na+)', si: 'සෝඩියම්', ta: 'சோடியம்' },
      { en: 'Potassium (K+)', si: 'පොටෑසියම්', ta: 'பொட்டாசியம்' },
      { en: 'Calcium (Ca2+)', si: 'කැල්සියම්', ta: 'கால்சியம்' },
      { en: 'Iron (Fe2+)', si: 'යකඩ', ta: 'இரும்பு' }
    ],
    correctIndex: 2,
    explanation: {
      en: 'Calcium ions bind to troponin, causing tropomyosin to shift and expose myosin-binding sites on actin filaments.',
      si: 'කැල්සියම් අයන ට්‍රොපොනින් සමග බැඳී ඇක්ටින් සූත්‍රිකාවල මයොසින් බන්ධන ස්ථාන නිරාවරණය කරයි.',
      ta: 'கால்சியம் அயனிகள் ட்ரோபோனினுடன் இணைந்து தசை சுருக்கத்தைத் தொடங்குகின்றன.'
    },
    relatedPartId: 'muscular_pectoralis'
  },
  {
    id: 'musc_med1',
    systemId: 'muscular',
    level: 'medical',
    question: {
      en: 'Myasthenia gravis is an autoimmune disorder characterized by autoantibodies targeted against which receptor?',
      si: 'මයස්තීනියා ග්‍රැවිස් රෝගයේදී ස්වයං ප්‍රතිදේහ ඉලක්ක වන්නේ කුමන ප්‍රතිග්‍රාහකය ද?',
      ta: 'மயஸ்தீனியா கிராவிஸ் நோயில் எந்த ஏற்பிக்கு எதிராக ஆன்டிபாடிகள் உருவாகின்றன?'
    },
    options: [
      { en: 'Muscarinic M2 receptors', si: 'මස්කරිනික් M2', ta: 'மஸ்கரினிக் ஏற்பிகள்' },
      { en: 'Nicotinic Acetylcholine Receptors (nAChR)', si: 'නිකොටිනික් ඇසිටයිල්කොලීන් ප්‍රතිග්‍රාහක', ta: 'நிகோடினிக் அசிடைல்கொலின் ஏற்பிகள்' },
      { en: 'Beta-2 adrenergic receptors', si: 'බීටා-2 ඇඩ්‍රිනර්ජික්', ta: 'பீட்டா-2 ஏற்பிகள்' },
      { en: 'Ryanodine receptors (RyR1)', si: 'රයනොඩින් ප්‍රතිග්‍රාහක', ta: 'ரையனோடின் ஏற்பிகள்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Autoantibodies block and degrade postsynaptic nicotinic ACh receptors at the neuromuscular junction, causing fatigable muscle weakness.',
      si: 'පශ්චාත්-උපාගමික නිකොටිනික් ඇසිටයිල්කොලීන් ප්‍රතිග්‍රාහක විනාශ වීමෙන් මාංශ පේශි දුර්වලතාව ඇතිවේ.',
      ta: 'நரம்பு தசை சந்திப்பில் உள்ள அசிடைல்கொலின் ஏற்பிகள் பாதிக்கப்படுவதால் தசை பலவீனம் ஏற்படுகிறது.'
    },
    relatedPartId: 'muscular_pectoralis'
  },

  // ==========================================
  // ENDOCRINE SYSTEM QUIZZES
  // ==========================================
  {
    id: 'endo_p1',
    systemId: 'endocrine',
    level: 'primary',
    question: {
      en: 'Which tiny gland in the brain is known as the "Master Gland" of the whole body?',
      si: 'සිරුරේ ප්‍රධාන ග්‍රන්ථිය (Master Gland) ලෙස හඳුන්වන මොළය පතුලේ ඇති කුඩා ග්‍රන්ථිය කුමක්ද?',
      ta: 'உடலின் "முதன்மை சுரப்பி" என்று அழைக்கப்படும் மூளையில் உள்ள சிறிய சுரப்பி எது?'
    },
    options: [
      { en: 'Pituitary Gland', si: 'පිටියුටරි ග්‍රන්ථිය', ta: 'பிட்யூட்டரி சுரப்பி' },
      { en: 'Salivary Gland', si: 'කෙළ ග්‍රන්ථිය', ta: 'உமிழ்நீர் சுரப்பி' },
      { en: 'Sweat Gland', si: 'දහඩිය ග්‍රන්ථිය', ta: 'வியர்வை சுரப்பி' },
      { en: 'Tear Gland', si: 'කඳුළු ග්‍රන්ථිය', ta: 'கண்ணீர் சுரப்பி' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'The pituitary gland directs almost all other hormone glands in your body!',
      si: 'පිටියුටරි ග්‍රන්ථිය මගින් සිරුරේ අනෙකුත් බොහෝ හෝමෝන ග්‍රන්ථි පාලනය කරනු ලබයි!',
      ta: 'பிட்யூட்டரி சுரப்பி உடலின் மற்ற அனைத்து ஹார்மோன் சுரப்பிகளையும் வழிநடத்துகிறது!'
    },
    relatedPartId: 'endocrine_pituitary'
  },
  {
    id: 'endo_al1',
    systemId: 'endocrine',
    level: 'al',
    question: {
      en: 'Which element is essential in the diet for the thyroid gland to synthesize T3 and T4 hormones?',
      si: 'තයිරොයිඩ් ග්‍රන්ථියට T3 සහ T4 හෝමෝන නිපදවීමට අත්‍යවශ්‍ය වන ආහාරමය මූලද්‍රව්‍යය කුමක්ද?',
      ta: 'தைராய்டு சுரப்பி T3 மற்றும் T4 ஹார்மோன்களை உருவாக்க தேவையான தாது எது?'
    },
    options: [
      { en: 'Iron', si: 'යකඩ', ta: 'இரும்பு' },
      { en: 'Iodine', si: 'අයඩින්', ta: 'அயோடின்' },
      { en: 'Zinc', si: 'සින්ක්', ta: 'துத்தநாகம்' },
      { en: 'Calcium', si: 'කැල්සියම්', ta: 'கால்சியம்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Iodine is trapped by thyroid follicular cells and iodinates tyrosine residues on thyroglobulin to form T3 and T4.',
      si: 'තයිරොයිඩ් ග්‍රන්ථියට තයිරොක්සින් හෝමෝන සංස්ලේෂණය කිරීමට අයඩින් අත්‍යවශ්‍ය වේ.',
      ta: 'தைராய்டு ஹார்மோன்கள் உருவாவதற்கு அயோடின் இன்றியமையாதது.'
    },
    relatedPartId: 'endocrine_thyroid'
  },
  {
    id: 'endo_med1',
    systemId: 'endocrine',
    level: 'medical',
    question: {
      en: 'An expanding pituitary macroadenoma compressing the optic chiasm classically causes which visual field defect?',
      si: 'දෘෂ්ටික ස්වස්තිකය (Optic chiasm) මත තෙරපුමක් ඇතිකරන පිටියුටරි පිළිකාවක් නිසා ඇතිවන දෘෂ්ටි ඌනතාව කුමක්ද?',
      ta: 'பிட்யூட்டரி கட்டி கண் நரம்புகளை அழுத்துவதால் ஏற்படும் பார்வைக் குறைபாடு எது?'
    },
    options: [
      { en: 'Homonymous hemianopsia', si: 'හෝමෝනිමස් හීමිඇනොප්සියාව', ta: 'ஹோமோனிமஸ் பார்வை இழப்பு' },
      { en: 'Bitemporal hemianopsia', si: 'බයිටෙම්පොරල් හීමිඇනොප්සියාව', ta: 'இருபுற பார்வை இழப்பு (பைடெம்போரல்)' },
      { en: 'Central scotoma', si: 'මධ්‍යම ස්කොටෝමාව', ta: 'மைய பார்வை இழப்பு' },
      { en: 'Monocular anopsia', si: 'තනි ඇසක අන්ධභාවය', ta: 'ஒற்றைக்கண் பார்வை இழப்பு' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Compression of crossing nasal retinal fibers at the optic chiasm produces bilateral temporal visual field loss (bitemporal hemianopsia).',
      si: 'දෘෂ්ටික ස්වස්තිකයේ නාසාමය තන්තු සම්පීඩනය වීමෙන් දෙපස පර්යන්ත පෙනීම අහිමි වේ.',
      ta: 'கண் நரம்பு சந்திப்பில் ஏற்படும் அழுத்தத்தால் இருபுற வெளிப்புற பார்வை இழப்பு ஏற்படுகிறது.'
    },
    relatedPartId: 'endocrine_pituitary'
  },

  // ==========================================
  // LYMPHATIC & IMMUNE SYSTEM QUIZZES
  // ==========================================
  {
    id: 'lymph_p1',
    systemId: 'lymphatic',
    level: 'primary',
    question: {
      en: 'What are the little bean-shaped stations in your neck that swell up to fight off throat infections?',
      si: 'උගුරේ ආසාදන ඇතිවූ විට විෂබීජ සමග සටන් කිරීමට බෙල්ලේ ඉදිමෙන කුඩා ගැටිති මොනවාද?',
      ta: 'தொண்டை தொற்று ஏற்படும் போது கிருமிகளை எதிர்த்துப் போராட கழுத்தில் வீங்கும் சிறிய உறுப்புகள் எவை?'
    },
    options: [
      { en: 'Lymph Nodes', si: 'වසා ගැටිති', ta: 'நிணநீர் முனையங்கள்' },
      { en: 'Teeth', si: 'දත්', ta: 'பற்கள்' },
      { en: 'Ear lobes', si: 'කන් පෙති', ta: 'காது மடல்கள்' },
      { en: 'Nails', si: 'නියපොතු', ta: 'நகங்கள்' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Lymph nodes are security checkpoints full of white blood cell soldiers that trap and destroy germs!',
      si: 'වසා ගැටිති යනු විෂබීජ කොටුකර විනාශ කරන සුදු රුධිර සෛල පිරුණු ආරක්ෂක මුරපොළවල්ය!',
      ta: 'நிணநீர் முனையங்கள் கிருமிகளை அழிக்கும் வெள்ளை இரத்த அணுக்கள் நிறைந்த பாதுகாப்பு நிலையங்களாகும்!'
    },
    relatedPartId: 'lymphatic_cervical_nodes'
  },
  {
    id: 'lymph_al1',
    systemId: 'lymphatic',
    level: 'al',
    question: {
      en: 'Which lymphoid organ is primarily responsible for filtering blood, recycling iron, and removing senescent red blood cells?',
      si: 'රුධිරය පෙරීම, යකඩ ප්‍රතිචක්‍රීකරණය සහ වයස්ගත රතු රුධිර සෛල විනාශ කිරීම සිදුකරන ප්‍රධාන වසා අවයවය කුමක්ද?',
      ta: 'இரத்தத்தை வடிகட்டி பழைய இரத்த அணுக்களை அழிக்கும் முக்கிய நிணநீர் உறுப்பு எது?'
    },
    options: [
      { en: 'Thymus', si: 'තයිමසය', ta: 'தைமஸ்' },
      { en: 'Spleen', si: 'ප්ලීහාව', ta: 'மண்ணீரல்' },
      { en: 'Appendix', si: 'උණ්ඩුක පුච්ඡය', ta: 'குடல்வால்' },
      { en: 'Tonsils', si: 'ටොන්සිල', ta: 'டான்சில்கள்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'The spleen’s red pulp filters senescent erythrocytes, while white pulp mounts adaptive immune responses.',
      si: 'ප්ලීහාවේ රතු මජ්ජාව මගින් පැරණි රතු රුධිර සෛල විනාශ කර ප්‍රතිශක්තිය ලබාදෙයි.',
      ta: 'மண்ணீரல் பழைய இரத்த சிவப்பணுக்களை அகற்றி நோய் எதிர்ப்பாற்றலை வழங்குகிறது.'
    },
    relatedPartId: 'lymphatic_spleen'
  },
  {
    id: 'lymph_med1',
    systemId: 'lymphatic',
    level: 'medical',
    question: {
      en: 'An enlarged, hard, non-tender left supraclavicular lymph node (Virchow\'s node) is most classically associated with metastasis from which malignancy?',
      si: 'වම් අක්ෂකාස්ථියට ඉහළින් පිහිටි Virchow\'s node වසා ගැටිත්ත ඉදිමීම ප්‍රධාන වශයෙන් කුමන පිළිකාවක් සමග සම්බන්ධද?',
      ta: 'விர்ச்சோவ் முனை (இடது தோள்பட்டைக்கு மேல் உள்ள நிணநீர் கட்டி) எந்த புற்றுநோய் பரவலைக் குறிக்கிறது?'
    },
    options: [
      { en: 'Gastric adenocarcinoma', si: 'ආමාශයික ඇඩිනොකාසිනෝමා', ta: 'இரைப்பை புற்றுநோய்' },
      { en: 'Glioblastoma multiforme', si: 'ග්ලයෝබ්ලාස්ටෝමා', ta: 'மூளை புற்றுநோய்' },
      { en: 'Osteosarcoma of femur', si: 'කලවා අස්ථි පිළිකාව', ta: 'எலும்பு புற்றுநோய்' },
      { en: 'Basal cell carcinoma', si: 'බේසල් සෛල පිළිකාව', ta: 'தோல் புற்றுநோய்' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Virchow\'s node (Troisier\'s sign) receives abdominal lymph drainage via the thoracic duct and frequently signals metastatic gastric or GI adenocarcinoma.',
      si: 'ආමාශ පිළිකා සෛල උරස් වසා නාලය ඔස්සේ වම් අක්ෂකාස්ථි වසා ගැටිති වෙත පැතිරීම මෙයින් හඳුනාගැනේ.',
      ta: 'இரைப்பை புற்றுநோய் செல்கள் உரோம தண்டு வழியாக இடது தோள்பட்டை நிணநீரில் பரவுவதை இது குறிக்கிறது.'
    },
    relatedPartId: 'lymphatic_cervical_nodes'
  },

  // ==========================================
  // INTEGUMENTARY SYSTEM QUIZZES
  // ==========================================
  {
    id: 'integ_p1',
    systemId: 'integumentary',
    level: 'primary',
    question: {
      en: 'What is the largest protective organ covering your entire body on the outside?',
      si: 'ඔබේ මුළු සිරුරම පිටතින් ආවරණය කර ඇති විශාලතම ආරක්ෂක ඉන්ද්‍රිය කුමක්ද?',
      ta: 'உங்கள் முழு உடலையும் வெளியில் மூடியுள்ள மிகப்பெரிய பாதுகாப்பு உறுப்பு எது?'
    },
    options: [
      { en: 'Skin', si: 'සම', ta: 'தோல்' },
      { en: 'Liver', si: 'අක්මාව', ta: 'கல்லீரல்' },
      { en: 'Lungs', si: 'පෙණහලු', ta: 'நுரையீரல்கள்' },
      { en: 'Stomach', si: 'ආමාශය', ta: 'இரைப்பை' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Your skin is the body’s largest organ! It covers about 2 square meters and protects you from germs, water loss, and injuries.',
      si: 'සම යනු සිරුරේ විශාලතම අවයවය වන අතර එය විෂබීජ සහ විජලනයෙන් ඔබව ආරක්ෂා කරයි!',
      ta: 'தோல் உடலின் மிகப்பெரிய உறுப்பு! இது கிருமிகள் மற்றும் காயங்களிலிருந்து உங்களைப் பாதுகாக்கிறது.'
    },
    relatedPartId: 'integumentary_epidermis'
  },
  {
    id: 'integ_al1',
    systemId: 'integumentary',
    level: 'al',
    question: {
      en: 'Which cells in the basal layer of the epidermis produce the pigment that shields cell DNA from harmful UV rays?',
      si: 'පාරජම්බුල කිරණින් සෛලීය න්‍යෂ්ටික DNA ආරක්ෂා කරන වර්ණකය නිපදවන අධිචර්මයේ බාසල් ස්තරයේ සෛල මොනවාද?',
      ta: 'புற ஊதா கதிர்களிலிருந்து DNA வைப் பாதுகாக்கும் நிறமியை உருவாக்கும் செல்கள் எவை?'
    },
    options: [
      { en: 'Keratinocytes', si: 'කෙරටිනොසයිට්', ta: 'கெரட்டினோசைட்டுகள்' },
      { en: 'Melanocytes', si: 'මෙලනොසයිට්', ta: 'மெலனோசைட்டுகள்' },
      { en: 'Merkel cells', si: 'මර්කෙල් සෛල', ta: 'மெர்கல் செல்கள்' },
      { en: 'Langerhans cells', si: 'ලැන්ගර්හැන්ස් සෛල', ta: 'லாங்கர்ஹான்ஸ் செல்கள்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Melanocytes synthesize melanin and transfer melanosomes to keratinocytes to form protective supranuclear caps absorbing UV radiation.',
      si: 'මෙලනොසයිට් මගින් මෙලනින් නිපදවා පාරජම්බුල කිරණින් සෛල න්‍යෂ්ටි ආරක්ෂා කරයි.',
      ta: 'மெலனோசைட்டுகள் மெலனின் நிறமியை உருவாக்கி புற ஊதா கதிர்களிலிருந்து பாதுகாக்கின்றன.'
    },
    relatedPartId: 'integumentary_epidermis'
  },
  {
    id: 'integ_med1',
    systemId: 'integumentary',
    level: 'medical',
    question: {
      en: 'The classic clinical ABCDE criteria are utilized for the early identification of which malignant cutaneous neoplasm?',
      si: 'චර්ම පිළිකා කලින් හඳුනාගැනීමට භාවිතා කරන ABCDE නිර්ණායක අදාළ වන්නේ කුමන පිළිකාව සඳහාද?',
      ta: 'ABCDE விதிகள் எந்த தோல் புற்றுநோயைக் கண்டறிய பயன்படுகின்றன?'
    },
    options: [
      { en: 'Basal Cell Carcinoma', si: 'බේසල් සෛල පිළිකාව', ta: 'பேசல் செல் புற்றுநோய்' },
      { en: 'Malignant Melanoma', si: 'මාරාන්තික මෙලනෝමා පිළිකාව', ta: 'மலிங்க்னண்ட் மெலனோமா' },
      { en: 'Squamous Cell Carcinoma', si: 'ශල්ක සෛල පිළිකාව', ta: 'ஸ்குவாமஸ் செல் புற்றுநோய்' },
      { en: 'Kaposi Sarcoma', si: 'කපොසි සාකෝමා', ta: 'கபோசி சார்கோமா' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'ABCDE: Asymmetry, Border irregularity, Color variegation, Diameter >6 mm, and Evolution (change in size/shape) screen for melanoma.',
      si: 'අසමමිතිය, දාරවල අක්‍රමවත් බව, වර්ණ විචලනය, විෂ්කම්භය මි.මී. 6ට වැඩිවීම මෙලනෝමා ලක්ෂණ වේ.',
      ta: 'ABCDE விதிகள் மெலனோமா தோல் புற்றுநோயை ஆரம்பத்திலேயே கண்டறிய உதவுகின்றன.'
    },
    relatedPartId: 'integumentary_epidermis'
  },

  // ==========================================
  // REPRODUCTIVE SYSTEM QUIZZES
  // ==========================================
  {
    id: 'repro_p1',
    systemId: 'reproductive',
    level: 'primary',
    question: {
      en: 'What tiny instructions are passed from parents to children through reproductive cells to decide eye and hair color?',
      si: 'දෙමව්පියන්ගෙන් දරුවන්ට ඇස්වල සහ කෙස්වල පැහැය තීරණය කරන උපදෙස් ලබාදෙන්නේ කුමක් මගින්ද?',
      ta: 'கண் நிறம், முடி நிறத்தை பெற்றோரிடமிருந்து குழந்தைகளுக்கு கடத்தும் சிறிய குறிப்புகள் எவை?'
    },
    options: [
      { en: 'Genes & DNA', si: 'ජාන සහ ඩී.එන්.ඒ.', ta: 'மரபணுக்கள் (DNA)' },
      { en: 'Sugar cubes', si: 'සීනි කැට', ta: 'சர்க்கரை' },
      { en: 'Oxygen gas', si: 'ඔක්සිජන්', ta: 'ஆக்ஸிஜன்' },
      { en: 'Vitamins only', si: 'විටමින් පමණි', ta: 'வைட்டமின்கள்' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'DNA inside sperm and egg cells carries all the hereditary recipes that make each human uniquely wonderful!',
      si: 'ජන්මානු සෛල තුළ ඇති ඩී.එන්.ඒ. මගින් දෙමව්පියන්ගේ ලක්ෂණ දරුවන්ට උරුම කරදෙයි!',
      ta: 'இனச்செல்களில் உள்ள DNA மரபணுக்கள் மூலம் பெற்றோரின் பண்புகள் குழந்தைகளுக்கு கடத்தப்படுகின்றன!'
    },
    relatedPartId: 'reproductive_gonads'
  },
  {
    id: 'repro_al1',
    systemId: 'reproductive',
    level: 'al',
    question: {
      en: 'In the female reproductive tract, where does biological fertilization of the secondary oocyte typically occur?',
      si: 'කාන්තා ප්‍රජනක පද්ධතිය තුළ සාමාන්‍යයෙන් ඩිම්බය සංසේචනය සිදුවන්නේ කුමන ස්ථානයේදීද?',
      ta: 'பெண் இனப்பெருக்க பாதையில் பொதுவாக கருத்தரித்தல் எங்கு நிகழ்கிறது?'
    },
    options: [
      { en: 'Vagina', si: 'යෝනි මාර්ගය', ta: 'யோனி' },
      { en: 'Ampulla of the Fallopian Tube', si: 'පැලෝපීය නාලයේ ඇම්පුලාව', ta: 'கருமுட்டைக் குழாயின் ஆம்புலா' },
      { en: 'Cervical canal', si: 'ගැබ්ගෙල', ta: 'கருப்பை வாய்' },
      { en: 'Ovarian stroma', si: 'ඩිම්බකෝෂ පටකය', ta: 'கருப்பை திசு' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Fertilization most commonly occurs within the ampullary region of the uterine (Fallopian) tube.',
      si: 'සංසේචනය බහුලවම සිදුවන්නේ පැලෝපීය නාලයේ වඩාත් පළල් කොටස වන ඇම්පුලාව තුළය.',
      ta: 'கருமுட்டை குழாயின் ஆம்புலா பகுதியில் கருத்தரித்தல் பொதுவாக நிகழ்கிறது.'
    },
    relatedPartId: 'reproductive_uterus'
  },
  {
    id: 'repro_med1',
    systemId: 'reproductive',
    level: 'medical',
    question: {
      en: 'A sudden surge of which anterior pituitary gonadotropin triggers ovulation 24 to 36 hours later?',
      si: 'ඩිම්බ මෝචනය සිදුවීමට පැය 24-36 කට පෙර ඉහළ යන පූර්ව පිටියුටරි හෝමෝන රැල්ල කුමක්ද?',
      ta: 'அண்டம் விடுபடுவதற்கு 24-36 மணி நேரத்திற்கு முன் அதிகரிக்கும் பிட்யூட்டரி ஹார்மோன் எது?'
    },
    options: [
      { en: 'Follicle-Stimulating Hormone (FSH)', si: 'FSH', ta: 'FSH ஹார்மோன்' },
      { en: 'Luteinizing Hormone (LH)', si: 'ලුටිනයිසිං හෝමෝනය (LH)', ta: 'லூட்டினைசிங் ஹார்மோன் (LH)' },
      { en: 'Human Chorionic Gonadotropin (hCG)', si: 'hCG', ta: 'hCG ஹார்மோன்' },
      { en: 'Prolactin', si: 'ප්‍රෝලැක්ටින්', ta: 'புரோலாக்டின்' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Sustained high estradiol levels switch to positive feedback, triggering the preovulatory LH surge which induces follicular rupture and oocyte release.',
      si: 'ඊස්ට්‍රජන් මගින් ධන ප්‍රතිපෝෂණයක් ඇතිකර LH හෝමෝන රැල්ලක් හටගන්වා ඩිම්බ මෝචනය සිදුකරයි.',
      ta: 'ஈஸ்ட்ரோஜனின் தூண்டுதலால் ஏற்படும் LH ஹார்மோன் எழுச்சி அண்டம் விடுபடுதலை நிகழ்த்துகிறது.'
    },
    relatedPartId: 'reproductive_gonads'
  }
];
