import { OrganPart, SystemInfo } from '../types';

export const ADDITIONAL_SYSTEMS_INFO: SystemInfo[] = [
  // 1. MUSCULAR SYSTEM
  {
    id: 'muscular',
    name: {
      en: 'Muscular System',
      si: 'පේශි පද්ධතිය',
      ta: 'தசைத் தொகுதி'
    },
    tagline: {
      en: 'The biomechanical engine powering movement, posture, and thermogenesis',
      si: 'චලනය, ඉරියව් සහ තාප උත්පාදනය සිදුකරන ජෛව යාන්ත්‍රික එන්ජිම',
      ta: 'அசைவு, தோரணை மற்றும் வெப்ப உற்பத்தியை வழங்கும் இயந்திரத் தொகுதி'
    },
    iconName: 'Dumbbell',
    accentColor: '#f43f5e',
    modelType: 'muscular',
    overview: {
      primary: {
        en: 'Your body has over 600 muscles! They pull on your bones like rubber bands so you can sprint, kick a soccer ball, smile, and pick up your school bag.',
        si: 'ඔබේ සිරුරේ මාංශ පේශි 600 කට වඩා තිබේ! ඔබ දුවන විට, පාපන්දු ක්‍රීඩා කරන විට, සිනාසෙන විට මේවා රබර් පටි මෙන් ඇදෙමින් ඔබේ ඇටසැකිල්ල චලනය කරයි.',
        ta: 'உங்கள் உடலில் 600 க்கும் மேற்பட்ட தசைகள் உள்ளன! நீங்கள் ஓட, கால்பந்து உதைக்க, புன்னகைக்க இந்த தசைகள் ரப்பர் பட்டைகள் போல எலும்புகளை இழுத்து உதவுகின்றன.'
      },
      al: {
        en: 'Consists of skeletal, cardiac, and smooth muscle types. Skeletal muscles operate under somatic motor control via the sliding filament theory (actin-myosin cross-bridge cycling driven by ATP and Ca²⁺ release from sarcoplasmic reticulum).',
        si: 'සැකිලි පේශි, හෘත් පේශි සහ සිනිඳු පේශි ලෙස වර්ග තුනකි. සැකිලි පේශි චලනය වන්නේ ඇක්ටින් සහ මයොසින් සූත්‍රිකා ලිස්සා යාම (Sliding filament mechanism) මගින් ATP සහ Ca²⁺ අයන භාවිතයෙනි.',
        ta: 'எலும்புத் தசை, இதயத் தசை மற்றும் மென் தசை என மூன்று வகைப்படும். ஆக்டின் மற்றும் மயோசின் இழைகள் ஏடிபி மற்றும் கால்சியம் உதவியுடன் சறுக்குவதன் மூலம் தசை சுருக்கம் நிகழ்கிறது.'
      },
      medical: {
        en: 'Encompasses biomechanical force vectors, motor unit recruitment (Henneman size principle), excitation-contraction coupling, neuromuscular junction pharmacology (acetylcholine, AChE), and myopathies (e.g., Duchenne muscular dystrophy, myasthenia gravis, rhabdomyolysis).',
        si: 'ස්නායු-පේශී සන්ධි ක්‍රියාකාරිත්වය (Acetylcholine), මෝටර් ඒකක ක්‍රියාකාරීත්වය සහ මයස්තීනියා ග්‍රැවිස් (Myasthenia Gravis) හෝ මස්කියුලර් ඩිස්ට්‍රොෆි වැනි සායනික රෝග පිළිබඳ දැනුම වැදගත් වේ.',
        ta: 'நரம்பு தசை சந்திப்பு உடலியல், அசிடைல்கொலின் ஏற்பிகள் மற்றும் மயஸ்தீனியா கிராவிஸ், தசைநார் சிதைவு போன்ற மருத்துவ நிலைகள் இதில் அடங்கும்.'
      }
    },
    statistics: [
      { label: { en: 'Total Muscles', si: 'මුළු මාංශ පේශි', ta: 'மொத்த தசைகள்' }, value: '600+' },
      { label: { en: 'Body Weight %', si: 'දේහ බරින් %', ta: 'உடல் எடையில் %' }, value: '40 - 50%' },
      { label: { en: 'Strongest Muscle', si: 'ශක්තිමත්ම පේශිය', ta: 'வலுவான தசை' }, value: 'Masseter' }
    ]
  },

  // 2. ENDOCRINE SYSTEM
  {
    id: 'endocrine',
    name: {
      en: 'Endocrine System',
      si: 'අන්තරාසර්ග පද්ධතිය',
      ta: 'நாளமில்லாச் சுரப்பித் தொகுதி'
    },
    tagline: {
      en: 'Chemical messaging network orchestrating hormones, metabolism, and growth',
      si: 'හෝමෝන, පරිවෘත්තිය සහ වර්ධනය මෙහෙයවන රසායනික පණිවිඩකාරක ජාලය',
      ta: 'ஹார்மோன்கள், வளர்சிதை மாற்றம் மற்றும் வளர்ச்சியை ஒழுங்குபடுத்தும் வேதியியல் அமைப்பு'
    },
    iconName: 'Sparkles',
    accentColor: '#f59e0b',
    modelType: 'endocrine',
    overview: {
      primary: {
        en: 'The endocrine system makes special chemical messengers called hormones! They travel quietly in your blood to tell your body when to grow tall, when to sleep, and how to stay energized.',
        si: 'අන්තරාසර්ග පද්ධතිය මගින් හෝමෝන නමැති රසායනික පණිවිඩකරුවන් සාදයි! ඒවා රුධිරය ඔස්සේ ගොස් ඔබට උස යන්න, සුවසේ නිදාගන්න සහ ශක්තිය ලබාගන්න මගපෙන්වයි.',
        ta: 'நாளமில்லா சுரப்பிகள் ஹார்மோன்கள் எனப்படும் சிறப்பு ரசாயன தூதுவர்களை உருவாக்குகின்றன! அவை இரத்தத்தில் பயணம் செய்து நீங்கள் வளர, தூங்க, ஆற்றலுடன் இருக்க உதவுகின்றன.'
      },
      al: {
        en: 'Ductless glandular system secreting hormones directly into capillaries. Governed by hypothalamic-pituitary neuroendocrine axes operating via negative and positive feedback loops controlling thyroid function, adrenal cortex, calcium homeostasis, and glycemia.',
        si: 'හෝමෝන සෘජුවම රුධිරයට මුදාහරින නාල රහිත ග්‍රන්ථි පද්ධතියකි. හයිපොතලමසය සහ පිටියුටරි ග්‍රන්ථිය මගින් තයිරොයිඩ්, අධිවෘක්ක සහ අග්න්‍යාශයික හෝමෝන සෘණ ප්‍රතිපෝෂණ ක්‍රමවේද මගින් පාලනය කරයි.',
        ta: 'நாளமில்லா சுரப்பிகள் ஹார்மோன்களை நேரடியாக இரத்தத்தில் சுரக்கின்றன. ஹைபோதலாமஸ் மற்றும் பிட்யூட்டரி சுரப்பிகள் தைராய்டு, அட்ரீனல் மற்றும் குளுக்கோஸ் சமநிலையைக் கட்டுப்படுத்துகின்றன.'
      },
      medical: {
        en: 'Focuses on hormone receptor mechanics (G-protein coupled, tyrosine kinase, nuclear steroid receptors), feedback dysregulation, and endocrinopathies: Diabetes Mellitus (ketoacidosis), Cushing’s syndrome, Addison’s disease, Graves’ disease, and pheochromocytoma.',
        si: 'හෝමෝන ප්‍රතිග්‍රාහක යාන්ත්‍රණය, දියවැඩියාව (Diabetes Mellitus), කුෂින් සින්ඩ්‍රෝමය (Cushing\'s) සහ තයිරොයිඩ් අධික්‍රියාකාරිත්වය වැනි අන්තරාසර්ග රෝග මෙහිදී විමසා බැලේ.',
        ta: 'ஹார்மோன் ஏற்பி உடலியல், நீரிழிவு நோய் (கீட்டோஅசிடோசிஸ்), குஷிங் நோய்க்குறி மற்றும் தைராய்டு கோளாறுகள் பற்றிய மருத்துவ அம்சங்களை இது விளக்குகிறது.'
      }
    },
    statistics: [
      { label: { en: 'Primary Glands', si: 'ප්‍රධාන ග්‍රන්ථි', ta: 'முக்கிய சுரப்பிகள்' }, value: '8 Major' },
      { label: { en: 'Key Hormones', si: 'ප්‍රධාන හෝමෝන', ta: 'முக்கிய ஹார்மோன்கள்' }, value: '50+' },
      { label: { en: 'Master Gland', si: 'ප්‍රධාන ග්‍රන්ථිය', ta: 'முதன்மை சுரப்பி' }, value: 'Pituitary' }
    ]
  },

  // 3. LYMPHATIC & IMMUNE SYSTEM
  {
    id: 'lymphatic',
    name: {
      en: 'Lymphatic & Immune System',
      si: 'වසා සහ ප්‍රතිශක්තිකරණ පද්ධතිය',
      ta: 'நிணநீர் மற்றும் நோய் எதிர்ப்பாற்றல் தொகுதி'
    },
    tagline: {
      en: 'The body’s defensive shield, pathogen surveillance, and fluid balance guardian',
      si: 'රෝග කාරකයන්ගෙන් සිරුර ආරක්ෂා කරන සහ පටක තරල සමතුලිත කරන ආරක්ෂක පවුර',
      ta: 'உடலின் பாதுகாப்பு அரண், நோய் எதிர்ப்பு கண்காணிப்பு மற்றும் திரவ சமநிலை அமைப்பு'
    },
    iconName: 'Shield',
    accentColor: '#10b981',
    modelType: 'lymphatic',
    overview: {
      primary: {
        en: 'The lymphatic system is your personal bodyguard army! Lymph nodes act like checkpoint stations where immune warrior cells fight off cold germs, flu viruses, and infections.',
        si: 'වසා පද්ධතිය ඔබේ පෞද්ගලික ආරක්ෂක හමුදාවයි! වසා ගැටිති මුරපොළවල් මෙන් ක්‍රියාකරමින් ඔබේ සිරුරට ඇතුළු වන විෂබීජ සහ වෛරස් සමග සටන් කර ඔබව නිරෝගීව තබයි.',
        ta: 'நிணநீர் அமைப்பு உங்கள் உடலின் பாதுகாப்பு இராணுவம்! நிணநீர் முனையங்கள் சோதனைச் சாவடிகள் போல செயல்பட்டு கிருமிகள் மற்றும் தொற்றுகளுக்கு எதிராக போராடுகின்றன.'
      },
      al: {
        en: 'A one-way drainage network returning extravasated interstitial fluid (~3 L/day) to the subclavian veins via the thoracic duct and right lymphatic duct. Houses lymphoid tissues (spleen, thymus, lymph nodes) facilitating innate and adaptive B/T lymphocyte immunity.',
        si: 'පටකවලින් පිටවන අන්තර් සෛලීය තරල නැවත රුධිරයට එක්කරන ඒක-දිශානතික නාල පද්ධතියකි. ප්ලීහාව, තයිමසය සහ වසා ගැටිති මගින් B හා T වසා සෛල සක්‍රීය කර ප්‍රතිශක්තිය ලබාදෙයි.',
        ta: 'திசு இடைவெளி திரவங்களை மீண்டும் இரத்த ஓட்டத்திற்கு கொண்டு செல்லும் ஒரு வழி வடிகால் அமைப்பு. மண்ணீரல், தைமஸ் மற்றும் நிணநீர் முனையங்கள் மூலம் நோய் எதிர்ப்பு செல்கள் உருவாக்கப்படுகின்றன.'
      },
      medical: {
        en: 'Clinical immunology dictates antigen presentation (MHC I/II), CD4+ helper and CD8+ cytotoxic T-cell orchestration, lymphadenopathy staging (Virchow’s node, lymphoma subtypes like Hodgkin vs Non-Hodgkin), lymphedema management, and splenomegaly evaluation.',
        si: 'ප්‍රතිදේහජනක ඉදිරිපත් කිරීම (MHC I/II), ලිම්ෆෝමා (Lymphoma) පිළිකා වර්ගීකරණය, වසා ඉදිමුම (Lymphedema) සහ ප්ලීහාව විශාල වීම (Splenomegaly) සායනිකව වැදගත් වේ.',
        ta: 'ஆன்டிஜென் விளக்கக்காட்சி, லிம்போமா புற்றுநோய் நிலை அறிதல் மற்றும் யானைக்கால் நோய் (லிம்பெடிமா) போன்ற மருத்துவ நிலைகளை இது கையாள்கிறது.'
      }
    },
    statistics: [
      { label: { en: 'Lymph Nodes', si: 'වසා ගැටිති ගණන', ta: 'நிணநீர் முனையங்கள்' }, value: '600 - 700' },
      { label: { en: 'Daily Fluid Drained', si: 'දෛනික තරල ප්‍රවාහය', ta: 'தினசரி வடிகட்டப்படும் திரவம்' }, value: '3 Liters' },
      { label: { en: 'Largest Lymph Organ', si: 'විශාලතම වසා අවයවය', ta: 'மிகப்பெரிய நிணநீர் உறுப்பு' }, value: 'Spleen' }
    ]
  },

  // 4. INTEGUMENTARY SYSTEM
  {
    id: 'integumentary',
    name: {
      en: 'Integumentary System',
      si: 'සම සහ ආවරණ පද්ධතිය',
      ta: 'புறத்தோல் தொகுதி'
    },
    tagline: {
      en: 'External barrier protecting against microbes, UV light, dehydration, and trauma',
      si: 'ක්ෂුද්‍රජීවීන්, පාරජම්බුල කිරණ සහ විජලනයෙන් සිරුර ආරක්ෂා කරන බාහිර වැස්ම',
      ta: 'கிருமிகள், புற ஊதா கதிர்கள் மற்றும் நீர் இழப்பிலிருந்து பாதுகாக்கும் வெளிப்புற உறை'
    },
    iconName: 'Layers',
    accentColor: '#0ea5e9',
    modelType: 'integumentary',
    overview: {
      primary: {
        en: 'Your skin is your waterproof suit of armor! It keeps your insides safe from dirt and bugs, makes sweat to cool you down on hot days, and lets you feel soft hugs and tickles.',
        si: 'ඔබේ සම යනු ඔබේ සිරුර වටා ඇති ජලයට ඔරොත්තු දෙන ආරක්ෂිත ඇඳුමකි! එය දූවිලි හා විෂබීජ වලින් ඔබව බේරාගන්නා අතර, දහඩිය දමා උණුසුම පාලනය කරයි.',
        ta: 'உங்கள் தோல் நீர்ப்புகா கவசம் போன்றது! அழுக்கு மற்றும் கிருமிகளிடமிருந்து பாதுகாத்து, வியர்வை மூலம் வெப்பத்தைக் கட்டுப்படுத்தி, தொடுதலை உணர வைக்கிறது.'
      },
      al: {
        en: 'Comprises epidermis (keratinized stratified squamous epithelium with stratum corneum, lucidum, granulosum, spinosum, basale), dermis (papillary and reticular collagen/elastin layers with neurovascular supply), and subcutaneous hypodermis (adipose tissue for insulation).',
        si: 'අධිචර්මය (ස්තරීභූත ශල්කමය අපිච්ඡදය), චර්මය (කොලජන් සහ ඉලාස්ටින් තන්තු සහිත ස්නායු-සනාල ස්තරය) සහ උපචර්මය (මේද පටකය) ලෙස ස්තර තුනකින් සමන්විත වේ.',
        ta: 'மேல்தோல் (கெரட்டினாலான அடுக்குகள்), உட்தோல் (கொலாஜன் மற்றும் இரத்த நாளங்கள்) மற்றும் கீழ்த்தோல் (கொழுப்பு திசு) ஆகிய மூன்று அடுக்குகளைக் கொண்டது.'
      },
      medical: {
        en: 'Crucial for thermoregulation via eccrine sweating and cutaneous vasomotor tone. Synthesizes Cholecalciferol (Vitamin D3) upon UVB irradiation. Burn surface area calculation via Wallace Rule of Nines; diagnostic criteria for melanoma (ABCDE rule), psoriasis, and pemphigus.',
        si: 'දහඩිය දැමීම මගින් උෂ්ණත්වය පාලනය, විටමින් D3 සංස්ලේෂණය, පිළිස්සුම් තුවාල ප්‍රතිශතය ගණනය (Wallace Rule of Nines) සහ මෙලනෝමා (Melanoma) පිළිකා හඳුනාගැනීම මෙහිදී අධ්‍යයනය කෙරේ.',
        ta: 'வியர்வை மூலம் உடல் வெப்ப ஒழுங்குமுறை, வைட்டமின் D3 உருவாக்கம் மற்றும் தோல் புற்றுநோய் கண்டறிதல் ஆகியவை இதில் முக்கியமான மருத்துவ அம்சங்களாகும்.'
      }
    },
    statistics: [
      { label: { en: 'Body Surface Area', si: 'මතුපිට වර්ගඵලය', ta: 'மேற்பரப்பு அளவு' }, value: '~1.8 - 2.0 m²' },
      { label: { en: 'Weight %', si: 'සිරුරේ බරින් %', ta: 'உடல் எடையில் %' }, value: '16%' },
      { label: { en: 'Skin Cell Turnover', si: 'සෛල අලුත්වන කාලය', ta: 'செல்கள் புதுப்பிக்கும் காலம்' }, value: '28 Days' }
    ]
  },

  // 5. REPRODUCTIVE SYSTEM
  {
    id: 'reproductive',
    name: {
      en: 'Reproductive System',
      si: 'ප්‍රජනක පද්ධතිය',
      ta: 'இனப்பெருக்கத் தொகுதி'
    },
    tagline: {
      en: 'Biological continuation of life, gametogenesis, and endocrine sexual maturation',
      si: 'ජීවයේ අඛණ්ඩ පැවැත්ම, ජන්මානු ජනනය සහ ලිංගික හෝමෝන ක්‍රියාකාරිත්වය',
      ta: 'வாழ்க்கையின் தொடர்ச்சி, இனச்செல் உருவாக்கம் மற்றும் ஹார்மோன் முதிர்ச்சி'
    },
    iconName: 'Users',
    accentColor: '#ec4899',
    modelType: 'reproductive',
    overview: {
      primary: {
        en: 'The reproductive system contains the special organs that allow humans to grow from a tiny single cell into a baby boy or girl, passing on traits like your eye color and smile from parents to children.',
        si: 'ප්‍රජනක පද්ධතිය යනු දෙමව්පියන්ගෙන් දරුවන්ට ඇස්වල පැහැය සහ ලක්ෂණ උරුම කරදෙමින් නව පරපුරක් බිහිකිරීමට උපකාරී වන ස්වභාවධර්මයේ අසිරිමත් පද්ධතියයි.',
        ta: 'பெற்றோரிடமிருந்து கண் நிறம், புன்னகை போன்ற பண்புகளை குழந்தைகளுக்கு வழங்கி, புதிய தலைமுறையை உருவாக்கும் அமைப்பாகும்.'
      },
      al: {
        en: 'Comprises male and female gonad systems (testes producing spermatozoa and testosterone; ovaries producing ova, estrogen, and progesterone) regulated by pituitary gonadotropins (FSH and LH). Involves meiosis, gametogenesis, menstrual ovarian/uterine cycles, and fertilization.',
        si: 'FSH සහ LH හෝමෝන මගින් පාලනය වන ශුක්‍රාණු හා ඩිම්බ නිපදවීමේ ක්‍රියාවලිය (Gametogenesis), ඌනන විභාජනය, ඩිම්බකෝෂ සහ ආර්තව චක්‍රය මෙයට අයත් වේ.',
        ta: 'விந்தணு மற்றும் அண்ட அணுக்களை உருவாக்கும் அமைப்பு. பிட்யூட்டரி ஹார்மோன்களால் (FSH, LH) கட்டுப்படுத்தப்பட்டு கருவுறுதல் மற்றும் மாதவிடாய் சுழற்சியை வழிநடத்துகிறது.'
      },
      medical: {
        en: 'Covers the hypothalamic-pituitary-gonadal (HPG) axis, embryological urogenital development (Wolffian vs Müllerian duct differentiation via SRY/AMH), obstetric physiology, placental exchange, teratology, and pathologies such as PCOS, endometriosis, and testicular neoplasia.',
        si: 'හයිපොතලමස්-පිටියුටරි-ගොනැඩල් (HPG) අක්ෂය, කලල විකසනය, වැදෑමහ ක්‍රියාකාරිත්වය සහ එන්ඩොමෙට්‍රියෝසිස් (Endometriosis) හෝ PCOS වැනි නාරිවේද රෝගී තත්ත්ව මෙහිදී විමසනු ලැබේ.',
        ta: 'கருப்பை உடலியல், நஞ்சுக்கொடி பரிமாற்றம், பாலிசிஸ்டிக் ஓவரி சிண்ட்ரோம் (PCOS) மற்றும் மகளிர் மருத்துவக் கோளாறுகள் மருத்துவ ரீதியாக இதில் முக்கியத்துவம் பெறுகின்றன.'
      }
    },
    statistics: [
      { label: { en: 'Gamete Chromosomes', si: 'ජන්මානු වර්ණදේහ', ta: 'குரோமோசோம்கள்' }, value: '23 (Haploid)' },
      { label: { en: 'Gestation Period', si: 'ගර්භණී කාලය', ta: 'கர்ப்ப காலம்' }, value: '~40 Weeks' },
      { label: { en: 'Cycle Length', si: 'සාමාන්‍ය චක්‍ර කාලය', ta: 'சராசரி சுழற்சி' }, value: '28 Days' }
    ]
  }
];

export const ADDITIONAL_ORGAN_PARTS: OrganPart[] = [
  // ==========================================
  // MUSCULAR SYSTEM PARTS
  // ==========================================
  {
    id: 'muscular_pectoralis',
    name: { en: 'Pectoralis Major', si: 'පෙක්ටොරාලිස් ප්‍රධාන පේශිය', ta: 'பெக்டோராலிஸ் மேஜர் தசை' },
    latinName: 'Musculus Pectoralis Major',
    systemId: 'muscular',
    category: 'Anterior Thorax',
    position3D: [0.35, 0.95, 0.28],
    color: '#f43f5e',
    description: {
      primary: {
        en: 'The large chest muscle! It powers clapping your hands together, giving someone a warm hug, and pushing open heavy doors.',
        si: 'පපුවේ ඇති විශාල මාංශ පේශියයි! අත්පුඩි ගැසීමට, වැළඳගැනීමට සහ බර දොරවල් තල්ලු කර විවෘත කිරීමට මෙය උපකාරී වේ.',
        ta: 'பெரிய மார்புத் தசை! கைகளைத் தட்டவும், ஒருவரைக் கட்டிப்பிடிக்கவும், கதவுகளைத் தள்ளவும் இது பயன்படுகிறது.'
      },
      al: {
        en: 'A fan-shaped thick muscle of the anterior thoracic wall originating from the clavicle, sternum, and costal cartilages, inserting into the lateral lip of the bicipital groove of the humerus. Functions in adduction and medial rotation of the arm.',
        si: 'අක්ෂකාස්ථිය සහ උරස්ඵලකයෙන් ආරම්භ වී ප්‍රගණ්ඩාස්ථියට සම්බන්ධ වේ. බාහුව ඉදිරියට ගෙන ඒම සහ ඇතුළට භ්‍රමණය කිරීම සිදු කරයි.',
        ta: 'மார்பெலும்பில் இருந்து தோள்பட்டை வரை பரவியுள்ள விசிறி போன்ற தசை. கையை சுழற்றவும் மார்பை நோக்கி இழுக்கவும் உதவுகிறது.'
      },
      medical: {
        en: 'Innervated by medial and lateral pectoral nerves (C5-T1). Key surgical landmark during mastectomy and axillary lymph node dissection. Ruptures typically occur at humeral tendon insertion during heavy bench-press exercises.',
        si: 'මධ්‍ය සහ පාර්ශ්වික පෙක්ටොරල් ස්නායු (C5-T1) මගින් ස්නායු සැපයුම ලැබේ. බර ඉසිලීමේදී අස්ථි හා පේශි සන්ධි ඉරීයාම් සිදුවිය හැක.',
        ta: 'மார்பக அறுவைசிகிச்சை மற்றும் அக்குள் நிணநீர் பரிசோதனையின் போது இது ஒரு முக்கிய அடையாளமாகும்.'
      }
    },
    funFact: {
      en: 'Birds have gigantic pectoral muscles — they use them to flap their wings and fly across continents!',
      si: 'කුරුල්ලන්ගේ පියාපත් ගැසීමට භාවිතා වන පෙක්ටොරල් පේශි ඔවුන්ගේ ශරීරයේ විශාලතම පේශි වේ!',
      ta: 'பறவைகள் கண்டங்களை கடந்து பறக்க அவற்றின் மார்புத் தசைகளே உதவுகின்றன!'
    },
    clinicalNotes: {
      en: 'Poland syndrome is characterized by congenital absence of the pectoralis major muscle, often accompanied by ipsilateral syndactyly.',
      si: 'පෝලන්ඩ් සින්ඩ්‍රෝමයේදී (Poland Syndrome) උපතින්ම මෙම පෙක්ටොරාලිස් පේශිය පිහිටා නොතිබිය හැක.',
      ta: 'போலந்து நோய்க்குறியில் மார்புத் தசை பிறவியிலேயே இல்லாமல் இருக்கலாம்.'
    },
    neurovascular: {
      arterial: 'Pectoral branch of thoracoacromial artery',
      venous: 'Cephalic and axillary veins',
      innervation: 'Lateral pectoral nerve (C5-C7) and Medial pectoral nerve (C8-T1)'
    },
    keyFunctions: {
      primary: [
        { en: 'Pushes things forward', si: 'දේවල් ඉදිරියට තල්ලු කිරීම', ta: 'பொருட்களை முன்னோக்கி தள்ளுதல்' },
        { en: 'Hugging arms together', si: 'දෑත් ළංකර වැළඳගැනීම', ta: 'கைகளை மார்போடு சேர்த்தல்' }
      ],
      al: [
        { en: 'Arm adduction & internal rotation', si: 'බාහුව අභ්‍යන්තරයට භ්‍රමණය', ta: 'கையின் உள்நோக்கிய சுழற்சி' },
        { en: 'Accessory muscle of respiration', si: 'සහායක ශ්වසන පේශියක් ලෙස ක්‍රියාකිරීම', ta: 'துணை சுவாச தசை' }
      ],
      medical: [
        { en: 'Flexion of extended arm at glenohumeral joint', si: 'ග්ලීනොහියුමරල් සන්ධියේ ආකෝචනය', ta: 'தோள்பட்டை மூட்டின் இயக்கம்' },
        { en: 'Surgical landmark for axillary sheath protection', si: 'අක්ෂක සනාල මිටිය ආරක්ෂා කිරීමේ ශල්‍ය සළකුණ', ta: 'அக்குள் நாளங்களின் பாதுகாப்பு' }
      ]
    }
  },
  {
    id: 'muscular_abdominis',
    name: { en: 'Rectus Abdominis', si: 'රෙක්ටස් උදර පේශිය', ta: 'ரெக்டஸ் அடிவயிற்றுத் தசை' },
    latinName: 'Musculus Rectus Abdominis',
    systemId: 'muscular',
    category: 'Anterior Abdominal Wall',
    position3D: [0, 0.28, 0.22],
    color: '#e11d48',
    description: {
      primary: {
        en: 'The famous "six-pack" core muscle! It acts like a strong natural corset supporting your belly, helping you sit up in bed and bend forward.',
        si: 'උදරයේ පිහිටි ශක්තිමත් පේශියයි! ඇඳෙන් නැගිටින්න, නැමෙන්න සහ උදරයේ අවයව ආරක්ෂා කර තබාගැනීමට උපකාරී වේ.',
        ta: 'பிரபலமான "சிக்ஸ்-பேக்" தசை! உங்கள் வயிற்று உறுப்புகளைப் பாதுகாத்து, படுக்கையிலிருந்து எழவும் குனியவும் உதவுகிறது.'
      },
      al: {
        en: 'A paired vertical muscle running on either side of the linea alba, enclosed within the rectus sheath. Intersected by tendinous intersections giving its segmented appearance. Flexes the lumbar spine and compresses abdominal viscera.',
        si: 'ලිනයා ඇල්බා දෙපස සිරස්ව පිහිටා ඇත. කශේරුව ඉදිරියට නැමීම සහ උදර අවයව සම්පීඩනය කිරීම සිදු කරයි.',
        ta: 'வயிற்றின் மையக் கோட்டின் இருபுறமும் செங்குத்தாக அமைந்துள்ள தசை. முதுகெலும்பை வளைக்கவும் வயிற்றை அழுத்தவும் உதவுகிறது.'
      },
      medical: {
        en: 'Innervated by thoracoabdominal nerves (T7-T11) and subcostal nerve (T12). Diastasis recti involves separation of the muscle bellies during pregnancy. Arcuate line (of Douglas) marks the transition of rectus sheath composition and is a common site for Spigelian hernias.',
        si: 'ගර්භණී සමයේදී මෙම පේශි දෙපසට ඈත්වීම (Diastasis recti) සිදුවිය හැක. ආකියුඒට් රේඛාව (Arcuate line) හර්නියා තත්ත්ව සඳහා වැදගත් වේ.',
        ta: 'கர்ப்ப காலத்தில் இந்த தசைகள் பிரிவது டயஸ்டாசிஸ் ரெக்டி எனப்படும். குடலிறக்க அறுவைசிகிச்சையில் இது முக்கிய பங்கு வகிக்கிறது.'
      }
    },
    funFact: {
      en: 'Your abdominal muscles work constantly throughout the day, even when you are just standing still or breathing out deeply!',
      si: 'ඔබ නිකම්ම හිටගෙන සිටින විට හෝ හුස්ම හෙළන විටත් උදර පේශි නොනවත්වා ක්‍රියාකරයි!',
      ta: 'நீங்கள் சாதாரணமாக நின்று கொண்டிருக்கும் போதும் இந்த அடிவயிற்றுத் தசைகள் வேலை செய்கின்றன!'
    },
    clinicalNotes: {
      en: 'Guarding and rigidity of the rectus abdominis during palpation are classic peritoneal signs of acute peritonitis.',
      si: 'උදරය තදවීම සහ ස්පර්ශයේදී පේශි තදවීම පෙරිටෝනියම් ආසාදන (Peritonitis) ලක්ෂණයකි.',
      ta: 'அடிவயிறு மிகக் கடினமாவது பெரிட்டோனிடிஸ் எனப்படும் தீவிர வயிற்றுத் தொற்றின் அறிகுறியாகும்.'
    },
    neurovascular: {
      arterial: 'Superior and inferior epigastric arteries',
      venous: 'Superior and inferior epigastric veins',
      innervation: 'Ventral rami of lower 6 thoracic spinal nerves (T7-T12)'
    },
    keyFunctions: {
      primary: [
        { en: 'Bending forward at the waist', si: 'ඉණෙන් ඉදිරියට නැමීම', ta: 'முன்னோக்கி குனிதல்' },
        { en: 'Supports your spine and core', si: 'කොඳු ඇට පෙළට ශක්තිය ලබාදීම', ta: 'முதுகெலும்பிற்கு ஆதரவு' }
      ],
      al: [
        { en: 'Lumbar vertebral column flexion', si: 'කටී කශේරුවේ ආකෝචනය', ta: 'முதுகெலும்பு வளைவு' },
        { en: 'Increases intra-abdominal pressure', si: 'අභ්‍යන්තර උදර පීඩනය වැඩි කිරීම', ta: 'வயிற்று அழுத்தத்தை அதிகரித்தல்' }
      ],
      medical: [
        { en: 'Valsalva maneuver augmentation', si: 'වැල්සල්වා ක්‍රියාවලිය බලගැන්වීම', ta: 'வால்சால்வா செயல்பாடு' },
        { en: 'Stabilizes pelvis during bipedal gait', si: 'දෙපයින් ඇවිදීමේදී ශ්‍රෝණිය ස්ථාවරව තැබීම', ta: 'நடையின் போது இடுப்பை நிலைப்படுத்துதல்' }
      ]
    }
  },
  {
    id: 'muscular_quadriceps',
    name: { en: 'Quadriceps Femoris', si: 'ක්වොඩ්‍රිසෙප්ස් කලවා පේශිය', ta: 'குவாட்ரிசெப்ஸ் தொடைத் தசை' },
    latinName: 'Musculus Quadriceps Femoris',
    systemId: 'muscular',
    category: 'Anterior Thigh',
    position3D: [0.22, -0.65, 0.16],
    color: '#f43f5e',
    description: {
      primary: {
        en: 'The four-part powerhouse muscle at the front of your thigh! It straightens your knee so you can kick a ball, climb stairs, and jump high into the air.',
        si: 'කලවයේ ඉදිරිපස ඇති ප්‍රබල පේශියයි! පාපන්දු පන්දුවකට පයින් ගැසීමට, පඩිපෙළ නැගීමට සහ උඩ පැනීමට දණහිස දිගහැරීම සිදුකරයි.',
        ta: 'தொடையில் உள்ள நான்கு பகுதிகளைக் கொண்ட சக்திவாய்ந்த தசை! பந்தை உதைக்கவும், படிக்கட்டுகளில் ஏறவும், மேலே குதிக்கவும் முழங்காலை நீட்ட உதவுகிறது.'
      },
      al: {
        en: 'Composed of four heads: Rectus Femoris, Vastus Lateralis, Vastus Medialis, and Vastus Intermedius. Converge into the quadriceps tendon, which encloses the patella and inserts via patellar ligament onto tibial tuberosity.',
        si: 'රෙක්ටස් ෆෙමොරිස්, වාස්ටස් ලැටරාලිස් ඇතුළු කොටස් 4කින් සමන්විතය. පැටෙල්ලා අස්ථිය හරහා ගොස් දණහිස දිගහැරීම සිදු කරයි.',
        ta: 'ரெக்டஸ் ஃபெமோரிஸ் உட்பட 4 பகுதிகளைக் கொண்டது. முழங்கால் மூட்டை நீட்டுவதில் முதன்மை பங்கு வகிக்கிறது.'
      },
      medical: {
        en: 'Innervated by the Femoral Nerve (L2-L4). Testing the patellar tendon reflex (knee jerk) evaluates L3-L4 spinal nerve root integrity. Vastus medialis oblique (VMO) is crucial for medial patellar tracking to prevent lateral patellar subluxation.',
        si: 'දණහිසේ ගැස්ම (Patellar reflex) පරීක්ෂා කිරීමෙන් L3-L4 ස්නායු මුල්වල ක්‍රියාකාරිත්වය තහවුරු කෙරේ.',
        ta: 'முழங்கால் தசைநார் நிர்பந்தம் (L3-L4 நரம்புகள்) பரிசோதிக்க இது பயன்படுகிறது.'
      }
    },
    funFact: {
      en: 'The quadriceps is one of the heaviest and most powerful muscle groups in the entire human body!',
      si: 'මිනිස් සිරුරේ ඇති බරම සහ වඩාත්ම ශක්තිමත් පේශි කාණ්ඩ අතරින් එකකි!',
      ta: 'மனித உடலின் மிகவும் கனமான மற்றும் சக்திவாய்ந்த தசை குழுக்களில் இதுவும் ஒன்று!'
    },
    clinicalNotes: {
      en: 'Rupture of the quadriceps tendon occurs predominantly in patients >40 years, presenting with palpable suprapatellar gap and inability to perform straight leg raise.',
      si: 'ක්වොඩ්‍රිසෙප්ස් කණ්ඩරාව ඉරී ගිය විට රෝගියාට පාදය කෙළින් ඔසවා තබා ගැනීමට නොහැකි වේ.',
      ta: 'இந்த தசைநார் கிழிந்தால் காலை நேராக உயர்த்த முடியாது.'
    },
    neurovascular: {
      arterial: 'Lateral circumflex femoral artery and deep femoral artery',
      venous: 'Femoral vein tributaries',
      innervation: 'Femoral nerve (L2, L3, L4 posterior divisions)'
    },
    keyFunctions: {
      primary: [
        { en: 'Kicking and straightening the leg', si: 'පාදය දිගහැරීම සහ පයින් ගැසීම', ta: 'காலை நீட்டுதல் மற்றும் உதைத்தல்' },
        { en: 'Standing up from a chair', si: 'පුටුවකින් නැගී සිටීම', ta: 'நாற்காலியிலிருந்து எழுந்திருத்தல்' }
      ],
      al: [
        { en: 'Knee joint extension', si: 'දණහිස් සන්ධිය දිගහැරීම', ta: 'முழங்கால் மூட்டு நீட்டிப்பு' },
        { en: 'Hip joint flexion (Rectus femoris)', si: 'උකුල් සන්ධිය ආකෝචනය', ta: 'இடுப்பு மூட்டு வளைவு' }
      ],
      medical: [
        { en: 'Dynamic patellar alignment during gait', si: 'ඇවිදීමේදී පැටෙල්ලා අස්ථිය නිසි මාවතේ තැබීම', ta: 'முழங்கால் சில்லு சீரமைப்பு' },
        { en: 'Deceleration during downhill walking/running', si: 'පහළට බැසීමේදී වේගය පාලනය කිරීම', ta: 'கீழ்நோக்கி நடக்கும் போது வேகத்தை குறைத்தல்' }
      ]
    }
  },

  // ==========================================
  // ENDOCRINE SYSTEM PARTS
  // ==========================================
  {
    id: 'endocrine_pituitary',
    name: { en: 'Pituitary Gland (Master Gland)', si: 'පිටියුටරි ග්‍රන්ථිය', ta: 'பிட்யூட்டரி முதன்மை சுரப்பி' },
    latinName: 'Hypophysis Cerebri',
    systemId: 'endocrine',
    category: 'Cranial Endocrine',
    position3D: [0, 1.84, 0.04],
    color: '#f59e0b',
    description: {
      primary: {
        en: 'The tiny pea-sized master boss of all your body’s glands! Tucked safely inside the base of your skull, it sends orders to all other hormone factories.',
        si: 'හිස්කබල පතුලේ පිහිටි பட்டාණි ඇටයක් තරම් කුඩා ප්‍රධාන ග්‍රන්ථියයි! එය අනෙක් සියලුම ග්‍රන්ථිවලට හෝමෝන නිපදවීමට නියෝග ලබාදෙයි.',
        ta: 'மண்டை ஓட்டின் அடிப்பகுதியில் உள்ள பட்டாணி அளவு சிறிய முதன்மை சுரப்பி! இது மற்ற அனைத்து சுரப்பிகளுக்கும் கட்டளைகளை அனுப்புகிறது.'
      },
      al: {
        en: 'Located in the sella turcica of the sphenoid bone. Divided into Adenohypophysis (anterior lobe: GH, TSH, ACTH, FSH, LH, Prolactin) and Neurohypophysis (posterior lobe storing ADH and Oxytocin synthesized in hypothalamus).',
        si: 'පූර්ව පිටියුටරිය (GH, TSH, ACTH, FSH, LH) සහ අපර පිටියුටරිය (ADH, ඔක්සිටොසින් ගබඩා කිරීම) ලෙස කොටස් දෙකකි. හයිපොතලමසය සමග සම්බන්ධ වේ.',
        ta: 'முன் பிட்யூட்டரி (GH, TSH, ACTH, FSH, LH) மற்றும் பின் பிட்யூட்டரி (ADH, ஆக்ஸிடோசின்) என இரு பகுதிகளைக் கொண்டது.'
      },
      medical: {
        en: 'Regulated via hypophyseal portal system (anterior) and hypothalamic-hypophyseal tract (posterior). Pituitary adenomas expanding superiorly compress the optic chiasm, causing classic bitemporal hemianopsia (tunnel vision).',
        si: 'පිටියුටරි පිළිකා (Adenoma) හේතුවෙන් දෘෂ්ටික ස්වස්තිකය (Optic chiasm) තෙරපීමෙන් දෙපස පෙනීම අඩුවන බයිටෙම්පොරල් හීමිඇනොප්සියාව (Bitemporal hemianopsia) හටගනියි.',
        ta: 'பிட்யூட்டரி கட்டி கண் நரம்புகளை அழுத்துவதால் இருபுறப் பார்வை இழப்பு (பைடெம்போரல் ஹெமியானோபியா) ஏற்படுகிறது.'
      }
    },
    funFact: {
      en: 'Even though it controls almost all body growth, metabolism, and reproduction, the pituitary gland weighs only about 0.5 grams!',
      si: 'මුළු සිරුරේම වර්ධනය පාලනය කරන පිටියුටරි ග්‍රන්ථියේ බර ග්‍රෑම් 0.5ක් පමණි!',
      ta: 'முழு உடலையும் கட்டுப்படுத்தும் பிட்யூட்டரி சுரப்பியின் எடை வெறும் 0.5 கிராம் மட்டுமே!'
    },
    clinicalNotes: {
      en: 'Excess growth hormone produces Gigantism in children (prior to epiphyseal plate closure) and Acromegaly in adults.',
      si: 'වර්ධක හෝමෝනය වැඩිවීමෙන් ළමුන් තුළ යෝධ බව (Gigantism) සහ වැඩිහිටියන් තුළ ඇක්‍රොමෙගාලි (Acromegaly) තත්ත්වය ඇතිවේ.',
      ta: 'அதிகப்படியான வளர்ச்சி ஹார்மோன் குழந்தைகளில் பிரம்மாண்ட வளர்ச்சியையும் (ஜைஜான்டிசம்), பெரியவர்களில் அக்ரோமெகாலியையும் ஏற்படுத்துகிறது.'
    },
    neurovascular: {
      arterial: 'Superior and inferior hypophyseal arteries from internal carotid',
      venous: 'Hypophyseal veins draining into cavernous sinus',
      innervation: 'Hypothalamic neurosecretory projections'
    },
    keyFunctions: {
      primary: [
        { en: 'Tells your bones when to grow tall', si: 'අස්ථිවලට උස යන්න නියෝග දීම', ta: 'எலும்புகள் வளர வழிகாட்டல்' },
        { en: 'Directs other glands to work', si: 'අනෙක් ග්‍රන්ථි මෙහෙයවීම', ta: 'மற்ற சுரப்பிகளை இயக்குதல்' }
      ],
      al: [
        { en: 'Growth hormone (GH) secretion', si: 'වර්ධක හෝමෝනය ශ්‍රාවය කිරීම', ta: 'வளர்ச்சி ஹார்மோன் சுரப்பு' },
        { en: 'Water balance regulation via ADH', si: 'ADH මගින් ජල සමතුලිතතාව පාලනය', ta: 'நீர் சமநிலையை கட்டுப்படுத்துதல்' }
      ],
      medical: [
        { en: 'Tropic stimulation of thyroid & adrenal cortex', si: 'තයිරොයිඩ් සහ අධිවෘක්ක බාහිකය උත්තේජනය', ta: 'தைராய்டு மற்றும் அட்ரீனல் தூண்டுதல்' },
        { en: 'Parturition & lactation milk ejection (Oxytocin)', si: 'ප්‍රසවයේදී සහ කිරිදීමේදී ඔක්සිටොසින් ක්‍රියාකාරිත්වය', ta: 'பிரசவம் மற்றும் பால் சுரப்பு' }
      ]
    }
  },
  {
    id: 'endocrine_thyroid',
    name: { en: 'Thyroid & Parathyroid Glands', si: 'තයිරොයිඩ් සහ පැරාතයිරොයිඩ් ග්‍රන්ථි', ta: 'தைராய்டு மற்றும் பாராதைராய்டு சுரப்பிகள்' },
    latinName: 'Glandula Thyroidea & Parathyroidea',
    systemId: 'endocrine',
    category: 'Cervical Endocrine',
    position3D: [0, 1.34, 0.18],
    color: '#f59e0b',
    description: {
      primary: {
        en: 'A friendly butterfly-shaped gland resting gently in your throat! It sets your body’s speed limit, controlling how quickly you turn food into energy and warmth.',
        si: 'උගුරේ පිහිටි සමනල හැඩැති ග්‍රන්ථියකි! ආහාර ශක්තිය බවට පත් කරන වේගය (පරිවෘත්තිය) සහ සිරුරේ උණුසුම පාලනය කරයි.',
        ta: 'தொண்டையில் உள்ள பட்டாம்பூச்சி வடிவ சுரப்பி! உணவை ஆற்றலாக மாற்றும் வேகத்தையும் உடல் வெப்பத்தையும் கட்டுப்படுத்துகிறது.'
      },
      al: {
        en: 'Consists of right and left lobes connected by an isthmus over the 2nd-4th tracheal rings. Follicular cells produce Thyroxine (T4) and Triiodothyronine (T3) requiring dietary iodine. Four parathyroid glands on its posterior surface secrete Parathyroid Hormone (PTH) to elevate serum calcium.',
        si: 'තයිරොක්සින් (T4) සහ ට්‍රයිඅයොඩොතයිරොනින් (T3) හෝමෝන මගින් පරිවෘත්තීය වේගය පාලනය කරයි. පැරාතයිරොයිඩ් ග්‍රන්ථි මගින් කැල්සියම් මට්ටම පාලනය වේ.',
        ta: 'T3, T4 ஹார்மோன்களை சுரந்து வளர்சிதை மாற்றத்தை கட்டுப்படுத்துகிறது. பாராதைராய்டு ஹார்மோன் இரத்த கால்சியத்தை அதிகரிக்கிறது.'
      },
      medical: {
        en: 'TRH-TSH feedback axis. Hyperthyroidism (Graves\' disease with TSH receptor antibodies and exophthalmos) vs Hypothyroidism (Hashimoto\'s thyroiditis). Recurrent laryngeal nerve courses closely in tracheoesophageal groove, risking vocal cord paralysis during thyroidectomy.',
        si: 'තයිරොයිඩ් ශල්‍යකර්මවලදී ප්‍රතිවර්තී ස්වරාල ස්නායුව (Recurrent laryngeal nerve) ආරක්ෂා කරගත යුතුය, නොඑසේ නම් කටහඬ ගොරෝසු වීම සිදුවේ.',
        ta: 'தைராய்டு அறுவைசிகிச்சையின் போது குரல்வளை நரம்பு சேதமடைந்தால் குரல் இழப்பு ஏற்பட வாய்ப்புள்ளது.'
      }
    },
    funFact: {
      en: 'The thyroid is the only organ in your body that absorbs iodine from the seafood and table salt you eat!',
      si: 'ඔබ කන ලුණු සහ මුහුදු ආහාරවලින් අයඩින් අවශෝෂණය කරගත හැකි සිරුරේ එකම ඉන්ද්‍රිය තයිරොයිඩ් ග්‍රන්ථියයි!',
      ta: 'உணவில் உள்ள அயோடினை நேரடியாக உறிஞ்சும் உடலின் ஒரே உறுப்பு தைராய்டு சுரப்பி ஆகும்!'
    },
    clinicalNotes: {
      en: 'Accidental removal of parathyroid glands during surgery triggers hypocalcemia, causing Chvostek\'s and Trousseau\'s signs of tetany.',
      si: 'පැරාතයිරොයිඩ් ග්‍රන්ථි ඉවත් වුවහොත් කැල්සියම් අඩුවී මාංශ පේශි ගැස්ම (Tetany) හටගනී.',
      ta: 'பாராதைராய்டு சேதமடைந்தால் இரத்தத்தில் கால்சியம் குறைந்து தசை வலிப்பு ஏற்படும்.'
    },
    neurovascular: {
      arterial: 'Superior thyroid artery (external carotid) and Inferior thyroid artery (thyrocervical trunk)',
      venous: 'Superior, middle, and inferior thyroid veins',
      innervation: 'Cervical sympathetic ganglia'
    },
    keyFunctions: {
      primary: [
        { en: 'Sets how fast your body burns energy', si: 'ශක්තිය දහනය කරන වේගය පාලනය', ta: 'உடல் ஆற்றல் வேகத்தை நிர்ணயித்தல்' },
        { en: 'Keeps your body warm', si: 'සිරුර උණුසුම්ව තබාගැනීම', ta: 'உடலை கதகதப்பாக வைத்திருத்தல்' }
      ],
      al: [
        { en: 'Basal metabolic rate (BMR) regulation', si: 'මූලික පරිවෘත්තීය සීඝ්‍රතාව (BMR) පාලනය', ta: 'அடிப்படை வளர்சிதை மாற்ற விகிதம்' },
        { en: 'Calcium homeostasis via calcitonin & PTH', si: 'කැල්සිටොනින් සහ PTH මගින් කැල්සියම් පාලනය', ta: 'கால்சியம் சமநிலை' }
      ],
      medical: [
        { en: 'CNS neural myelination in infants', si: 'ළදරු මොළයේ ස්නායු මයලින්කරණය', ta: 'குழந்தை மூளை வளர்ச்சி' },
        { en: 'Cardiac beta-1 adrenergic receptor upregulation', si: 'හෘදයේ බීටා-1 ප්‍රතිග්‍රාහක උත්තේජනය', ta: 'இதய ஏற்பிகளின் தூண்டுதல்' }
      ]
    }
  },
  {
    id: 'endocrine_adrenals',
    name: { en: 'Adrenal Glands (Suprarenal)', si: 'අධිවෘක්ක ග්‍රන්ථි', ta: 'அட்ரீனல் சுரப்பிகள்' },
    latinName: 'Glandulae Suprarenales',
    systemId: 'endocrine',
    category: 'Retroperitoneal Endocrine',
    position3D: [0.18, 0.58, -0.02],
    color: '#fbbf24',
    description: {
      primary: {
        en: 'Two golden pyramid hats sitting atop each kidney! They release adrenaline to give you super-fast energy whenever you need to react to surprises or sports.',
        si: 'වකුගඩු දෙක උඩ තොප්පි දෙකක් මෙන් පිහිටි ග්‍රන්ථි යුගලයයි! බියක් හෝ හදිසි අවස්ථාවක් ඇතිවූ විට ඇඩ්‍රිනලින් නිපදවා ඉක්මන් ක්‍රියාකාරිත්වයක් ලබාදෙයි.',
        ta: 'இரு சிறுநீரகங்களின் மேல் தொப்பி போல அமர்ந்துள்ள சுரப்பிகள்! அவசர நிலைகளில் உடலை தயார்படுத்த அட்ரினலினை சுரக்கின்றன.'
      },
      al: {
        en: 'Composed of Adrenal Cortex (Zona glomerulosa: Aldosterone; Zona fasciculata: Cortisol; Zona reticularis: Androgens) and Adrenal Medulla (chromaffin cells secreting Epinephrine and Norepinephrine for sympathetic fight-or-flight response).',
        si: 'බාහිකයෙන් ඇල්ඩොස්ටෙරෝන් සහ කෝටිසෝල් ද, මජ්ජාවෙන් ඇඩ්‍රිනලින් සහ නොර්ඇඩ්‍රිනලින් (සටන් හෝ පලායාමේ ප්‍රතිචාරය) ද ශ්‍රාවය කරයි.',
        ta: 'கார்டெக்ஸ் பகுதி கார்டிசோல், ஆல்டோஸ்டிரோனையும், மெடுல்லா பகுதி அட்ரினலின் மற்றும் எபினெப்ரைனையும் சுரக்கிறது.'
      },
      medical: {
        en: 'RAAS axis controls aldosterone secretion. Cushing\'s syndrome (hypercortisolemia with central obesity, moon facies), Addison\'s disease (primary adrenocortical insufficiency causing hyperpigmentation and hypotension), and Pheochromocytoma (episodic hypertension triad).',
        si: 'කෝටිසෝල් වැඩිවීමෙන් කුෂින් සින්ඩ්‍රෝමය ද, අඩුවීමෙන් ඇඩිසන්ගේ රෝගය ද, මජ්ජාවේ පිළිකා නිසා අධි රුධිර පීඩනය (Pheochromocytoma) ද ඇතිවේ.',
        ta: 'அட்ரீனல் சுரப்பு அதிகரிப்பால் குஷிங் நோயும், குறைவதால் அடிசன் நோயும் ஏற்படுகிறது.'
      }
    },
    funFact: {
      en: 'The surge of adrenaline from these glands can dilate your pupils, double your heart rate, and redirect all blood to your running muscles in less than a second!',
      si: 'ඇඩ්‍රිනලින් හෝමෝනය තත්පරයකටත් අඩු කාලයකදී හෘද ස්පන්දනය දෙගුණ කර ඔබට දිවීමට ශක්තිය ලබාදෙයි!',
      ta: 'அட்ரினலின் சுரப்பு ஒரே வினாடியில் உங்கள் இதயத் துடிப்பை இருமடங்காக்கி உடலை ஓட தயார்படுத்தும்!'
    },
    clinicalNotes: {
      en: 'Abrupt cessation of prolonged high-dose corticosteroid therapy can precipitate life-threatening acute adrenal crisis.',
      si: 'ස්ටෙරොයිඩ් ඖෂධ එකවර නැවැත්වීමෙන් උග්‍ර අධිවෘක්ක අකර්මණ්‍යතාව (Adrenal crisis) හටගත හැක.',
      ta: 'ஸ்டீராய்டு மருந்துகளை திடீரென நிறுத்தினால் உயிருக்கு ஆபத்தான நிலை ஏற்படலாம்.'
    },
    neurovascular: {
      arterial: 'Superior, middle, and inferior suprarenal arteries',
      venous: 'Right suprarenal vein into IVC; Left suprarenal vein into left renal vein',
      innervation: 'Preganglionic sympathetic fibers directly to chromaffin cells'
    },
    keyFunctions: {
      primary: [
        { en: 'Instant energy in emergencies', si: 'හදිසි අවස්ථාවලදී ක්ෂණික ශක්තිය ලබාදීම', ta: 'அவசர கால உடனடி சக்தி' },
        { en: 'Helps handle stress', si: 'මානසික පීඩනය පාලනයට උපකාරී වීම', ta: 'மன அழுத்தத்தை கையாளுதல்' }
      ],
      al: [
        { en: 'Cortisol glucocorticoid metabolism', si: 'ග්ලූකෝස් මට්ටම සහ පරිවෘත්තිය පාලනය', ta: 'குளுக்கோஸ் மற்றும் வளர்சிதை மாற்றம்' },
        { en: 'Blood pressure and sodium balance (Aldosterone)', si: 'ඇල්ඩොස්ටෙරෝන් මගින් රුධිර පීඩනය පාලනය', ta: 'இரத்த அழுத்தம் மற்றும் சோடியம் சமநிலை' }
      ],
      medical: [
        { en: 'Anti-inflammatory immune suppression', si: 'ප්‍රදාහය මර්දනය කිරීම', ta: 'வீக்கத்தை குறைக்கும் செயல்பாடு' },
        { en: 'Sympathetic neurohumoral amplification', si: 'සානුකම්පික ස්නායු ප්‍රතිචාරය බලගැන්වීම', ta: 'நரம்பு தூண்டுதல் பெருக்கம்' }
      ]
    }
  },

  // ==========================================
  // LYMPHATIC & IMMUNE SYSTEM PARTS
  // ==========================================
  {
    id: 'lymphatic_spleen',
    name: { en: 'Spleen (Lien)', si: 'ප්ලීහාව', ta: 'மண்ணீரல்' },
    latinName: 'Lien / Splen',
    systemId: 'lymphatic',
    category: 'Abdominal Lymphoid',
    position3D: [-0.32, 0.62, 0.08],
    color: '#10b981',
    description: {
      primary: {
        en: 'The largest bodyguard organ in your immune team! Located softly behind your left ribs, it catches worn-out red blood cells and destroys invading germs.',
        si: 'ප්‍රතිශක්තිකරණ පද්ධතියේ විශාලතම ආරක්ෂක අවයවයයි! පැරණි රුධිර සෛල ඉවත් කර ආක්‍රමණික විෂබීජ විනාශ කරයි.',
        ta: 'நோய் எதிர்ப்பு அமைப்பின் மிகப்பெரிய உறுப்பு! பழைய இரத்த அணுக்களை அகற்றி கிருமிகளை அழிக்கிறது.'
      },
      al: {
        en: 'Located in the left hypochondrium protected by ribs 9-11. Contains Red Pulp (splenic cords and sinusoids removing senescent erythrocytes and storing platelets) and White Pulp (periarteriolar lymphoid sheaths rich in T cells and lymphoid follicles rich in B cells).',
        si: 'වම් 9-11 ඉළඇට පිටුපස පිහිටා ඇත. රතු මජ්ජාව මගින් වයස්ගත රතු රුධිර සෛල විනාශ කරන අතර සුදු මජ්ජාව මගින් B සහ T සෛල නිපදවා ප්‍රතිශක්තිය ලබාදෙයි.',
        ta: 'பழைய இரத்த சிவப்பணுக்களை வடிகட்டுகிறது மற்றும் நிணநீர் செல்களைக் கொண்டு நோய்த்தொற்றுகளிலிருந்து பாதுகாக்கிறது.'
      },
      medical: {
        en: 'Prone to blunt abdominal trauma laceration. Post-splenectomy patients face lifelong Overwhelming Post-Splenectomy Infection (OPSI) risk from encapsulated bacteria (Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae); requires pneumococcal/meningococcal vaccination.',
        si: 'උදරයට පහර වැදීමේදී ප්ලීහාව ඉරී යා හැක. ප්ලීහාව ඉවත් කළ රෝගීන්ට බැක්ටීරියා ආසාදන වැළැක්වීමට විශේෂ එන්නත් ලබාදිය යුතුය.',
        ta: 'மண்ணீரல் காயமடைந்தால் அதிக இரத்தப்போக்கு ஏற்படும். அதை அகற்றினால் கடுமையான பாக்டீரியா தொற்றுகள் வர வாய்ப்புள்ளது.'
      }
    },
    funFact: {
      en: 'The spleen can hold an emergency reserve of fresh blood platelets and release them instantly if you get a scrape!',
      si: 'හදිසි අවස්ථාවකදී රුධිරය කැටි ගැසීමට අවශ්‍ය පට්ටිකා සංචිතයක් ප්ලීහාව තුළ ගබඩා කර ඇත!',
      ta: 'காயம் ஏற்படும் போது உடனடியாக இரத்தம் உறைவதற்கு உதவும் இரத்த தட்டணுக்களை மண்ணீரல் சேமித்து வைத்துள்ளது!'
    },
    clinicalNotes: {
      en: 'Kehr\'s sign is referred left shoulder tip pain caused by diaphragmatic irritation from ruptured spleen hematoma.',
      si: 'ප්ලීහාව ඉරී ලේ ගැලීමේදී වම් උරහිසේ වේදනාවක් දැනීම (Kehr\'s sign) ප්‍රධාන ශල්‍ය ලක්ෂණයකි.',
      ta: 'மண்ணீரல் கிழிந்தால் இடது தோள்பட்டையில் வலி ஏற்படுவது கெஹ்ர் அறிகுறியாகும்.'
    },
    neurovascular: {
      arterial: 'Splenic artery from celiac trunk (tortuous course)',
      venous: 'Splenic vein joining superior mesenteric vein to form hepatic portal vein',
      innervation: 'Celiac autonomic plexus'
    },
    keyFunctions: {
      primary: [
        { en: 'Cleans old worn-out blood cells', si: 'පැරණි රුධිර සෛල පිරිසිදු කිරීම', ta: 'பழைய இரத்த அணுக்களை நீக்குதல்' },
        { en: 'Fights dangerous bacteria', si: 'හානිකර බැක්ටීරියා විනාශ කිරීම', ta: 'பாக்டீரியாக்களை அழித்தல்' }
      ],
      al: [
        { en: 'Erythrocyte culling & iron recycling', si: 'යකඩ ප්‍රතිචක්‍රීකරණය හා රතු සෛල විනාශය', ta: 'இரும்பு மறுசுழற்சி' },
        { en: 'Adaptive IgM antibody production', si: 'IgM ප්‍රතිදේහ නිෂ්පාදනය', ta: 'ஆன்டிபாடி உற்பத்தி' }
      ],
      medical: [
        { en: 'Clearance of opsonized encapsulated bacteria', si: 'බැක්ටීරියා රුධිරයෙන් ඉවත් කිරීම', ta: 'பாக்டீரியாக்களை அகற்றுதல்' },
        { en: 'Extramedullary hematopoiesis during marrow failure', si: 'ඇටමිදුළු අක්‍රිය වූ විට රුධිර සෛල නිපදවීම', ta: 'மாற்று இரத்த அணு உருவாக்கம்' }
      ]
    }
  },
  {
    id: 'lymphatic_cervical_nodes',
    name: { en: 'Cervical & Systemic Lymph Nodes', si: 'ග්‍රීවා සහ වසා ගැටිති ජාලය', ta: 'நிணநீர் முனையங்கள்' },
    latinName: 'Nodi Lymphoidei Cervicales & Systemici',
    systemId: 'lymphatic',
    category: 'Lymphoid Stations',
    position3D: [0.16, 1.45, 0.12],
    color: '#10b981',
    description: {
      primary: {
        en: 'The tiny bean-shaped security checkpoints in your neck and body! When you get a sore throat, they swell up like little pebbles to trap germs.',
        si: 'බෙල්ලේ සහ සිරුර පුරා පිහිටි ආරක්ෂක මුරපොළවල් වැනි කුඩා ගැටිති වේ. උගුරේ ආසාදනයක් ඇතිවූ විට විෂබීජ කොටුකර ගැනීම නිසා මේවා ඉදිමෙයි.',
        ta: 'கழுத்து மற்றும் உடலில் உள்ள சிறிய விதை போன்ற பாதுகாப்பு நிலையங்கள்! தொண்டை வலி வரும்போது கிருமிகளை பிடிக்க இவை வீங்கிக்கொள்கின்றன.'
      },
      al: {
        en: 'Encapsulated lymphoid organs scattered along lymphatic vessels. Lymph enters via afferent lymphatics, percolates through subcapsular and medullary sinuses lined with macrophages and dendritic cells, and exits through efferent lymphatics at the hilum.',
        si: 'වසා නාල ඔස්සේ පිහිටි ගැටිති වේ. මැක්‍රොෆේජ සහ ඩෙන්ඩ්‍රිටික් සෛල මගින් විෂබීජ පෙරීම සිදු කරයි.',
        ta: 'நிணநீர் நாளங்களில் அமைந்துள்ள வடிகட்டிகள். மேக்ரோபேஜ்கள் மூலம் பாக்டீரியாக்களை வடிகட்டுகின்றன.'
      },
      medical: {
        en: 'Lymphadenopathy evaluation: tender, mobile nodes indicate reactive infection; hard, fixed, non-tender nodes suggest metastatic malignancy. Virchow\'s node (enlarged left supraclavicular node) classically heralds occult gastric or GI adenocarcinoma (Troisier sign).',
        si: 'වේදනා රහිත, තද වසා ගැටිති පිළිකා සළකුණු විය හැක. වම් අක්ෂකාස්ථියට ඉහළින් පිහිටි Virchow\'s node ගැටිත්ත ආමාශ පිළිකා හඳුනාගැනීමට වැදගත් වේ.',
        ta: 'கழுத்து நிணநீர் வீக்கம் தொற்றுகளையோ அல்லது புற்றுநோயையோ குறிக்கலாம்.'
      }
    },
    funFact: {
      en: 'You have between 600 and 700 lymph nodes distributed silently throughout your body protecting you right now!',
      si: 'මේ මොහොතේත් ඔබව ආරක්ෂා කරමින් සිරුර පුරා වසා ගැටිති 600කට වඩා ක්‍රියාත්මක වේ!',
      ta: 'உங்கள் உடலில் 600 க்கும் மேற்பட்ட நிணநீர் முனையங்கள் உங்களைப் பாதுகாத்துக் கொண்டிருக்கின்றன!'
    },
    clinicalNotes: {
      en: 'Sentinel lymph node biopsy is the gold standard for axillary staging in early breast cancer to prevent full axillary dissection lymphedema.',
      si: 'පියයුරු පිළිකා ශල්‍යකර්මවලදී පළමු වසා ගැටිත්ත (Sentinel node) පරීක්ෂා කර බැලේ.',
      ta: 'புற்றுநோய் பரவலைக் கண்டறிய நிணநீர் முனைய பயாப்ஸி செய்யப்படுகிறது.'
    },
    neurovascular: {
      arterial: 'Hilar nutrient arterioles',
      venous: 'High endothelial venules (HEVs) facilitating lymphocyte homing',
      innervation: 'Autonomic sympathetic vasomotor innervation'
    },
    keyFunctions: {
      primary: [
        { en: 'Traps germs and viruses', si: 'විෂබීජ හා වෛරස් කොටුකර ගැනීම', ta: 'கிருமிகளைப் பிடித்தல்' },
        { en: 'Warning siren of infection', si: 'ආසාදන ඇති බව අඟවන සංඥාව', ta: 'தொற்று எச்சரிக்கை' }
      ],
      al: [
        { en: 'Lymph filtration & pathogen phagocytosis', si: 'වසා තරලය පෙරීම සහ විෂබීජ භක්ෂණය', ta: 'நிணநீர் வடிகட்டுதல்' },
        { en: 'Antigen presentation to B & T cells', si: 'ප්‍රතිශක්ති සෛල වලට ප්‍රතිදේහජනක ඉදිරිපත් කිරීම', ta: 'நோய் எதிர்ப்பு செல்களை தூண்டுதல்' }
      ],
      medical: [
        { en: 'Germinal center B-cell somatic hypermutation', si: 'B සෛල මගින් උසස් ප්‍රතිදේහ සංස්ලේෂණය', ta: 'ஆன்டிபாடி முதிர்ச்சி' },
        { en: 'Oncological staging of metastatic spread', si: 'පිළිකා සෛල පැතිරීම තක්සේරු කිරීම', ta: 'புற்றுநோய் நிலையை அறிதல்' }
      ]
    }
  },

  // ==========================================
  // INTEGUMENTARY SYSTEM PARTS
  // ==========================================
  {
    id: 'integumentary_epidermis',
    name: { en: 'Epidermis & Dermis Layers', si: 'අධිචර්මය සහ චර්ම ස්තර', ta: 'மேல்தோல் மற்றும் உட்தோல்' },
    latinName: 'Epidermis & Dermis Cutis',
    systemId: 'integumentary',
    category: 'Cutaneous Envelope',
    position3D: [0.38, 0.42, 0.24],
    color: '#0ea5e9',
    description: {
      primary: {
        en: 'The resilient outer coat of your skin! The epidermis stops water from leaking out and germs from sneaking in, while the dermis underneath gives it bounce and strength.',
        si: 'සමේ මතුපිට පිහිටි ආරක්ෂක ස්තරයයි! විෂබීජ ඇතුළුවීම වළක්වන අතර සිරුරේ ජලය පිටතට යා නොදී තබාගනියි.',
        ta: 'தோலின் வெளிப்புற பாதுகாப்பு அடுக்கு! கிருமிகள் உள்ளே நுழைவதைத் தடுத்து, நீர் வெளியேறுவதைத் தடுக்கிறது.'
      },
      al: {
        en: 'Epidermis has 5 strata: Corneum (keratinocytes), Lucidum, Granulosum, Spinosum, and Basale (actively dividing stem cells and melanocytes producing UV-absorbing melanin). Dermis contains dense irregular collagen, elastin, and capillary loops.',
        si: 'අධිචර්මය ස්තර පහකින් යුක්තය. මෙලනොසයිට් සෛල මගින් පාරජම්බුල කිරණින් ආරක්ෂා වීමට මෙලනින් නිපදවයි.',
        ta: 'மேல்தோல் 5 அடுக்குகளைக் கொண்டது. மெலனின் நிறமி மூலம் புற ஊதா கதிர்களிலிருந்து பாதுகாக்கிறது.'
      },
      medical: {
        en: 'Epidermal Langerhans cells provide antigen surveillance. Pemphigus vulgaris (autoantibodies against desmoglein-3 causing intraepidermal flaccid bullae) vs Bullous Pemphigoid (hemidesmosome antibodies with subepidermal tense bullae).',
        si: 'ලැන්ගර්හැන්ස් සෛල ප්‍රතිශක්තිය ලබාදෙයි. පෙම්ෆිගස් (Pemphigus) වැනි චර්ම රෝග මෙහිදී හටගනියි.',
        ta: 'தோல் நோய் எதிர்ப்பு செல்களையும், பல்வேறு தோல் நோய்களையும் இது விளக்குகிறது.'
      }
    },
    funFact: {
      en: 'Every minute, your skin sheds roughly 30,000 to 40,000 dead skin flakes without you ever feeling it!',
      si: 'සෑම මිනිත්තුවකදීම ඔබේ සමෙන් මැරුණු සෛල 30,000ක් පමණ ඉවත්වී යයි!',
      ta: 'ஒவ்வொரு நிமிடமும் உங்கள் தோலில் இருந்து 30,000 க்கும் மேற்பட்ட இறந்த செல்கள் உதிர்கின்றன!'
    },
    clinicalNotes: {
      en: 'Basal Cell Carcinoma is the most common cutaneous malignancy, classically presenting as a pearly nodule with telangiectasias.',
      si: 'සමේ බහුලවම ඇතිවන පිළිකාව බේසල් සෛල පිළිකාව (Basal Cell Carcinoma) වේ.',
      ta: 'பேசல் செல் கார்சினோமா என்பது மிகவும் பொதுவான தோல் புற்றுநோயாகும்.'
    },
    neurovascular: {
      arterial: 'Dermal papillary capillary loops (avascular epidermis)',
      venous: 'Subdermal venous plexuses',
      innervation: 'Free nerve endings extending into stratum granulosum'
    },
    keyFunctions: {
      primary: [
        { en: 'Waterproof protective shield', si: 'ජලයට ඔරොත්තු දෙන ආරක්ෂිත ආවරණය', ta: 'நீர்ப்புகா பாதுகாப்பு கவசம்' },
        { en: 'Blocks dirt and bacteria', si: 'දූවිලි හා බැක්ටීරියා වැළැක්වීම', ta: 'தூசி மற்றும் கிருமிகளை தடுத்தல்' }
      ],
      al: [
        { en: 'Melanin synthesis against UV rays', si: 'පාරජම්බුල කිරණින් ආරක්ෂාවට මෙලනින් නිපදවීම', ta: 'மெலனின் உற்பத்தி' },
        { en: 'Physical tensile resistance (Collagen)', si: 'කොලජන් මගින් භෞතික ශක්තිය සැපයීම', ta: 'தோல் வலிமை' }
      ],
      medical: [
        { en: 'Trans-epidermal water loss (TEWL) barrier', si: 'සම හරහා ජලය ඉවත්වීම වැළැක්වීම', ta: 'நீர் இழப்பு தடுப்பு' },
        { en: 'Provitamin D3 photochemical activation', si: 'සූර්යාලෝකයෙන් විටමින් D3 නිපදවීම', ta: 'வைட்டமின் D3 உருவாக்கம்' }
      ]
    }
  },
  {
    id: 'integumentary_follicle_glands',
    name: { en: 'Hair Follicles & Sweat Glands', si: 'රෝම කූප සහ දහඩිය ග්‍රන්ථි', ta: 'மயிர்க்கால்கள் மற்றும் வியர்வைச் சுரப்பிகள்' },
    latinName: 'Folliculi Pilorum & Glandulae Sudoriferae',
    systemId: 'integumentary',
    category: 'Cutaneous Appendages',
    position3D: [0.36, 0.55, 0.22],
    color: '#38bdf8',
    description: {
      primary: {
        en: 'Tiny hair roots and cooling water factories in your skin! When you get cold, tiny muscles make your hairs stand up as "goosebumps", and when you run, sweat cools you down.',
        si: 'සමේ පිහිටි රෝම කූප සහ දහඩිය ග්‍රන්ථි වේ. ඔබට සීතල වූ විට රෝම කෙළින් වී හිරිගඩු පිපෙන අතර, උණුසුම් වූ විට දහඩිය දමා සිරුර සිසිල් කරයි.',
        ta: 'தோலில் உள்ள சிறிய மயிர்க்கால்கள் மற்றும் வியர்வை சுரப்பிகள்! குளிர் காலத்தில் மெய்சிலிர்க்க வைத்து, வெயில் காலத்தில் வியர்வை மூலம் உடலை குளிர்விக்கின்றன.'
      },
      al: {
        en: 'Eccrine sweat glands secrete hypotonic saline for evaporative cooling. Apocrine glands in axillae/groin secrete viscous fluid colonized by bacteria producing odor. Arrector pili smooth muscles attach to hair follicles, causing goosebumps under sympathetic control.',
        si: 'එක්ක්‍රීන් දහඩිය ග්‍රන්ථි මගින් උෂ්ණත්වය පාලනය කරන අතර ඇපොක්‍රීන් ග්‍රන්ථි කිහිලි හා ඉකිලි ආශ්‍රිතව පිහිටයි. ඇරෙක්ටර් පිලයි පේශි මගින් රෝම කෙළින් කරයි.',
        ta: 'வியர்வை சுரப்பிகள் உடலை குளிர்விக்கின்றன. அரக்டர் பைலி தசைகள் குளிர் காலத்தில் மயிர்க்கால்களை நிமிர்த்துகின்றன.'
      },
      medical: {
        en: 'Hyperhidrosis involves overactive eccrine innervation. Acne vulgaris arises from follicular hyperkeratinization and Cutibacterium acnes colonization of sebum-plugged pilosebaceous units.',
        si: 'කුරුලෑ (Acne vulgaris) හටගන්නේ රෝම කූපවල තෙල් ග්‍රන්ථි අවහිරවීම සහ බැක්ටීරියා ආසාදනය වීමෙනි.',
        ta: 'முகப்பரு என்பது மயிர்க்கால்களில் எண்ணெய் சுரப்பிகள் அடைபடுவதால் ஏற்படுகிறது.'
      }
    },
    funFact: {
      en: 'On a scorching summer day or during soccer practice, your sweat glands can produce up to 2 to 3 liters of cooling sweat in a single day!',
      si: 'ක්‍රීඩා කරන විට දිනකට දහඩිය ලීටර් 2-3ක් පමණ පිටකිරීමට දහඩිය ග්‍රන්ථිවලට හැකියාව ඇත!',
      ta: 'தீவிர உடற்பயிற்சியின் போது ஒரு நாளைக்கு 2 முதல் 3 லிட்டர் வியர்வை வெளியேறலாம்!'
    },
    clinicalNotes: {
      en: 'Anhidrosis (inability to sweat) can lead to fatal hyperthermia and heat stroke during strenuous exertion.',
      si: 'දහඩිය දැමීම අක්‍රිය වුවහොත් (Anhidrosis) අධික උෂ්ණත්වය නිසා හීට් ස්ට්‍රෝක් (Heat stroke) ඇතිවිය හැක.',
      ta: 'வியர்க்காத நிலை கடுமையான வெப்ப பக்கவாதத்திற்கு வழிவகுக்கும்.'
    },
    neurovascular: {
      arterial: 'Subpapillary plexus around hair bulbs',
      venous: 'Dermal venules',
      innervation: 'Sympathetic cholinergic fibers (eccrine glands) and sympathetic adrenergic fibers (arrector pili)'
    },
    keyFunctions: {
      primary: [
        { en: 'Cools you down with sweat', si: 'දහඩිය මගින් සිරුර සිසිල් කිරීම', ta: 'வியர்வை மூலம் குளிர்வித்தல்' },
        { en: 'Gives you goosebumps when cold', si: 'සීතල වූ විට හිරිගඩු පිපීම', ta: 'குளிரில் மெய்சிலிர்த்தல்' }
      ],
      al: [
        { en: 'Evaporative heat dissipation', si: 'වාෂ්පීභවනය මගින් තාපය බැහැර කිරීම', ta: 'வெப்ப இழப்பு' },
        { en: 'Sebum lubrication for skin and hair', si: 'සීබම් මගින් සම මොයිස්චරයිස් කිරීම', ta: 'தோலுக்கு எண்ணெய் பசை அளித்தல்' }
      ],
      medical: [
        { en: 'Antimicrobial acid mantle of skin', si: 'සමේ ආම්ලික ආරක්ෂක පටලය පවත්වා ගැනීම', ta: 'தோல் அமில பாதுகாப்பு' },
        { en: 'Pheromone communication (Apocrine)', si: 'ඇපොක්‍රීන් ග්‍රන්ථි ස්‍රාවය', ta: 'வாசனை சுரப்பிகள்' }
      ]
    }
  },

  // ==========================================
  // REPRODUCTIVE SYSTEM PARTS
  // ==========================================
  {
    id: 'reproductive_gonads',
    name: { en: 'Gonads & Gametogenesis Centers', si: 'ප්‍රජනක ග්‍රන්ථි (ගොනෑඩ)', ta: 'இனப்பெருக்க உறுப்புகள் (விந்தகம்/கருப்பை)' },
    latinName: 'Gonadae (Testes / Ovaria)',
    systemId: 'reproductive',
    category: 'Gametogenic Organs',
    position3D: [0.12, -0.18, 0.08],
    color: '#ec4899',
    description: {
      primary: {
        en: 'The special organs of life! They protect the microscopic instructions (DNA) needed to create future baby boys and girls with traits from mom and dad.',
        si: 'ජීවයේ අසිරිමත් ඉන්ද්‍රියයන් වේ! මවගේ සහ පියාගේ ගතිලක්ෂණ ඊළඟ පරම්පරාවට රැගෙන යන ඩී.එන්.ඒ. අඩංගු ජන්මානු සෛල මේවා තුළ නිපදවයි.',
        ta: 'வாழ்க்கையின் சிறப்பு உறுப்புகள்! பெற்றோரிடமிருந்து மரபணுக்களை குழந்தைகளுக்கு கடத்தும் இனச்செல்களை உருவாக்குகின்றன.'
      },
      al: {
        en: 'Primary reproductive organs. Testes produce spermatozoa via spermatogenesis in seminiferous tubules (Leydig cells secrete testosterone). Ovaries produce oocytes via oogenesis within follicles, producing estrogen and progesterone regulated by pituitary FSH and LH.',
        si: 'ශුක්‍රාණු හා ඩිම්බ නිපදවන ප්‍රධාන ප්‍රජනක අවයවයි. ටෙස්ටොස්ටෙරෝන්, ඊස්ට්‍රජන් සහ ප්‍රොජෙස්ටරෝන් හෝමෝන නිපදවයි.',
        ta: 'விந்தணுக்கள் மற்றும் அண்ட அணுக்களை உருவாக்குகின்றன. டெஸ்டோஸ்டிரோன் மற்றும் ஈஸ்ட்ரோஜன் ஹார்மோன்களை சுரக்கின்றன.'
      },
      medical: {
        en: 'HPG axis negative feedback. Polycystic Ovary Syndrome (PCOS: hyperandrogenism, anovulation, polycystic morphology). Testicular torsion is a urologic surgical emergency requiring detorsion within 6 hours to preserve viability.',
        si: 'PCOS තත්ත්වය සහ වෘෂණ කෝෂ ඇඹරීම (Testicular torsion) වැනි හදිසි ශල්‍ය තත්ත්ව මෙහිදී ප්‍රධාන වේ.',
        ta: 'பாலிசிஸ்டிக் ஓவரி சிண்ட்ரோம் மற்றும் விரை முறுக்கம் ஆகியவை அவசர மருத்துவ நிலைகளாகும்.'
      }
    },
    funFact: {
      en: 'Every human begins life as just one microscopic fertilized cell measuring less than 0.1 millimeters across!',
      si: 'සෑම මිනිසෙකුම සිය ජීවිතය ආරම්භ කරන්නේ මිලිමීටර් 0.1කටත් වඩා කුඩා තනි සෛලයකිනි!',
      ta: 'ஒவ்வொரு மனிதனும் 0.1 மில்லிமீட்டருக்கும் குறைவான ஒற்றை செல்லாகவே தனது வாழ்க்கையைத் தொடங்குகிறான்!'
    },
    clinicalNotes: {
      en: 'Cryptorchidism (undescended testis) markedly increases risk of testicular germ cell tumors and infertility; treated with orchiopexy.',
      si: 'වෘෂණ කෝෂ පහළට නොපැමිණීම (Cryptorchidism) වඳභාවයට හා පිළිකා අවදානමට හේතු විය හැක.',
      ta: 'விந்தகம் இறங்காத நிலை மலட்டுத்தன்மை மற்றும் புற்றுநோய் ஆபத்தை அதிகரிக்கும்.'
    },
    neurovascular: {
      arterial: 'Testicular/Ovarian arteries directly from abdominal aorta (L2 level)',
      venous: 'Pampiniform venous plexus / Ovarian veins',
      innervation: 'Hypogastric and pelvic autonomic plexuses'
    },
    keyFunctions: {
      primary: [
        { en: 'Carries DNA for future generations', si: 'අනාගත පරපුරට ජාන රැගෙන යාම', ta: 'மரபணுக்களை கடத்துதல்' },
        { en: 'Helps bodies grow into adults', si: 'වැඩිහිටියන් බවට පත්වීමට උපකාරී වීම', ta: 'வளர்ச்சிக்கு உதவுதல்' }
      ],
      al: [
        { en: 'Meiotic gamete production (Haploid n=23)', si: 'ඌනන විභාජනයෙන් ඒකගුණ ජන්මානු සෑදීම', ta: 'இனச்செல் உற்பத்தி' },
        { en: 'Sex steroid hormone secretion', si: 'ලිංගික ස්ටෙරොයිඩ් හෝමෝන නිපදවීම', ta: 'பாலியல் ஹார்மோன் சுரப்பு' }
      ],
      medical: [
        { en: 'Folliculogenesis & ovulation induction', si: 'ඩිම්බකෝෂ ෆොලිකල විකසනය හා ඩිම්බ මෝචනය', ta: 'அண்ட அணு வெளியீடு' },
        { en: 'Spermiogenesis & Sertoli blood-testis barrier', si: 'රුධිර-වෘෂණ බාධකය සහ ශුක්‍රාණු ජනනය', ta: 'விந்தணு உற்பத்தி பாதுகாப்பு' }
      ]
    }
  },
  {
    id: 'reproductive_uterus',
    name: { en: 'Uterus & Reproductive Conduit', si: 'ගර්භාෂය සහ පැලෝපීය නාල', ta: 'கருப்பை மற்றும் குழாய்கள்' },
    latinName: 'Uterus & Tubae Uterinae',
    systemId: 'reproductive',
    category: 'Pelvic Reproductive',
    position3D: [0, -0.12, 0.06],
    color: '#f472b6',
    description: {
      primary: {
        en: 'The cozy, miraculous nursery inside the lower abdomen! It provides a warm, safe home with food and oxygen for a developing baby for nine months before birth.',
        si: 'උදරයේ පහළ පිහිටි ආරක්ෂිත ආශ්චර්යමත් නිවහනයි! මව් කුස තුළ බිළිඳෙකු වැඩෙන මාස 9 පුරා අවශ්‍ය ආරක්ෂාව, පෝෂණය සහ ඔක්සිජන් ලබාදෙයි.',
        ta: 'அடிவயிற்றில் உள்ள அதிசய தொட்டில்! குழந்தை பிறப்பதற்கு முன் ஒன்பது மாதங்கள் பாதுகாப்பாக வளர இது இடமளிக்கிறது.'
      },
      al: {
        en: 'Thick muscular pear-shaped organ consisting of perimetrium, myometrium (smooth muscle capable of immense hypertrophy), and endometrium (stratum basalis and functionalis shed during menstruation). Fallopian tubes guide ova and serve as site of fertilization (ampulla).',
        si: 'පෙරිමෙට්‍රියම්, මයෝමෙට්‍රියම් සහ එන්ඩොමෙට්‍රියම් ස්තරවලින් සමන්විතය. පැලෝපීය නාලයේ ඇම්පුලාව තුළදී සංසේචනය සිදුවේ.',
        ta: 'தடிமனான தசை உறுப்பு. மாதவிடாய் சுழற்சியின் போது இதன் உள் அடுக்கு புதுப்பிக்கப்படுகிறது. கருமுட்டை கருவுறுதல் இங்குள்ள குழாயில் நிகழ்கிறது.'
      },
      medical: {
        en: 'Endometriosis (ectopic endometrial tissue causing cyclic pelvic pain and adhesions). Ectopic pregnancy typically occurs in the ampulla of the fallopian tube, posing life-threatening rupture risk. Cervical cancer screening relies on Pap smear cytology and HPV DNA testing.',
        si: 'පැලෝපීය නාලවල කළලය තැන්පත් වීම (Ectopic pregnancy) ජීවිතයට තර්ජනයක් වන හදිසි ශල්‍ය තත්ත්වයකි. ගැබ්ගෙල පිළිකා පැප් පරීක්ෂාවෙන් (Pap smear) හඳුනාගැනේ.',
        ta: 'கருப்பைக்கு வெளியே கருத்தரிப்பது உயிருக்கு ஆபத்தான அவசர அறுவைசிகிச்சை நிலையாகும்.'
      }
    },
    funFact: {
      en: 'During pregnancy, the uterus can expand to over 500 times its normal size to accommodate a growing baby!',
      si: 'ගර්භණී සමයේදී ගර්භාෂය එහි සාමාන්‍ය ප්‍රමාණය මෙන් 500 ගුණයකට වඩා විශාල විය හැක!',
      ta: 'கர்ப்ப காலத்தில் கருப்பை அதன் இயல்பான அளவை விட 500 மடங்குக்கு மேல் விரிவடையும்!'
    },
    clinicalNotes: {
      en: 'Uterine leiomyomas (fibroids) are the most common benign pelvic tumors in females, presenting with menorrhagia, pelvic pressure, and anemia.',
      si: 'ගර්භාෂ ෆයිබ්‍රොයිඩ් (Fibroids) අධික රුධිර වහනයක් ඇතිකළ හැකි බහුලවම දක්නට ලැබෙන ගෙඩි වර්ගයකි.',
      ta: 'ஃபைப்ராய்டு கட்டிகள் அதிக இரத்தப்போக்கை ஏற்படுத்தக்கூடிய பொதுவான கட்டிகளாகும்.'
    },
    neurovascular: {
      arterial: 'Uterine artery (branch of internal iliac, crosses ureter "water under the bridge")',
      venous: 'Uterine venous plexus draining to internal iliac veins',
      innervation: 'Uterovaginal plexus from inferior hypogastric plexus'
    },
    keyFunctions: {
      primary: [
        { en: 'Safe home for a growing baby', si: 'වැඩෙන බිළිඳාට ආරක්ෂිත නිවහනක් වීම', ta: 'குழந்தை வளர பாதுகாப்பான இடம்' },
        { en: 'Provides nutrients before birth', si: 'උපතට පෙර පෝෂණය ලබාදීම', ta: 'கருவிற்கு ஊட்டச்சத்து அளித்தல்' }
      ],
      al: [
        { en: 'Embryo implantation in endometrium', si: 'එන්ඩොමෙට්‍රියම තුළ කළලය තැන්පත් වීම', ta: 'கரு பதித்தல்' },
        { en: 'Myometrial contractions during labor', si: 'ප්‍රසවයේදී ගර්භාෂ පේශි සංකෝචනය', ta: 'பிரசவ தசை சுருக்கங்கள்' }
      ],
      medical: [
        { en: 'Hemostatic spiral arteriole constriction', si: 'ආර්තවයේදී සර්පිල ධමනිකා සංකෝචනය', ta: 'இரத்த நாள சுருக்கம்' },
        { en: 'Placental attachment & fetal gas exchange', si: 'වැදෑමහ සම්බන්ධ වීම හා වායු හුවමාරුව', ta: 'நஞ்சுக்கொடி இணைப்பு' }
      ]
    }
  }
];
