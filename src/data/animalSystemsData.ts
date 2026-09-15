import { SpeciesInfo, OrganPart, OrganSystemId } from '../types';

export const SPECIES_LIST: SpeciesInfo[] = [
  {
    id: 'human',
    name: { en: 'Human', si: 'මිනිසා', ta: 'மனிதன்' },
    commonName: { en: 'Human Being', si: 'මිනිසා', ta: 'மனிதன்' },
    scientificName: 'Homo sapiens',
    taxonomicClass: { en: 'Mammalia (Primates)', si: 'ක්ෂීරපායී (ප්‍රයිමේටා)', ta: 'பாலூட்டி (பிரைமேட்ஸ்)' },
    habitat: { en: 'Terrestrial (Global)', si: 'භෞමික (ගෝලීය)', ta: 'நிலப்பரப்பு (உலகளாவிய)' },
    iconName: 'User',
    accentColor: '#06b6d4',
    tagline: {
      en: 'Bipedal hominid with high encephalization, complex language, and precision grasp',
      si: 'ඉහළ මොළ ධාරිතාවක් සහ සංකීර්ණ සන්නිවේදන හැකියාවක් සහිත දෙපයින් ගමන් කරන මානවයා',
      ta: 'உயர் மூளை வளர்ச்சி மற்றும் துல்லியமான பிடிப்பு கொண்ட இருகால் மனிதன்'
    },
    overview: {
      primary: {
        en: 'Humans walk upright on two legs and have amazing brains that can build rockets, paint art, and speak languages!',
        si: 'මිනිසුන් දෙපයින් කෙළින් ඇවිදින අතර රොකට් හැදීමට, චිත්‍ර ඇඳීමට සහ භාෂා කතා කිරීමට හැකි අතිවිශිෂ්ට මොළයක් හිමියි!',
        ta: 'மனிதர்கள் இரண்டு கால்களில் நிமிர்ந்து நடக்கிறார்கள் மற்றும் ராக்கெட்டுகளை உருவாக்கக்கூடிய அற்புதமான மூளையைக் கொண்டுள்ளனர்!'
      },
      al: {
        en: 'Bipedal placental mammal with 11 distinct organ systems, true 4-chambered heart, negative-pressure thoracic ventilation with diaphragm, and expanded cerebral neocortex.',
        si: 'ප්‍රධාන අවයව පද්ධති 11 කින්, කුටීර 4 හෘදයකින්, ප්‍රාචීරය ආශ්‍රිත සෘණ පීඩන ස්වසනයෙන් සහ ඉහළ මස්තිෂ්ක බාහිකයකින් සමන්විත දෙපා ක්ෂීරපායී විශේෂයකි.',
        ta: '11 உறுப்புத் தொகுதிகள், 4-அறை இதயம், உதரவிதானம் மூலம் எதிர்மறை அழுத்த சுவாசம் மற்றும் விரிவான பெருமூளை கொண்ட இருகால் பாலூட்டி.'
      },
      medical: {
        en: 'Complex somatic physiology characterized by closed double circulation, upright axial biomechanics, RAAS and endocrine homeostatic regulation, and advanced immunological adaptive memory.',
        si: 'සංවෘත ද්විත්ව රුධිර සංසරණය, සෘජු අක්ෂීය ජෛව යාන්ත්‍රික විද්‍යාව, RAAS සහ හෝමෝනමය නියාමනය සහිත සවිස්තරාත්මක කායික විද්‍යාව.',
        ta: 'மூடிய இரட்டை சுற்றோட்டம், நிமிர்ந்த அச்சு இயக்கவியல் மற்றும் மேம்பட்ட நோய் எதிர்ப்பு நினைவகம் கொண்ட சிக்கலான உடலியல்.'
      }
    },
    keyAdaptations: [
      { en: 'Bipedal upright posture and S-curved vertebral column', si: 'දෙපයින් සෘජුව සිටගැනීම හා S-හැඩති කශේරුව', ta: 'நிமிர்ந்த இருகால் நிலை மற்றும் S-வடிவ முதுகெலும்பு' },
      { en: 'Opposable thumbs with high dexterity motor control', si: 'නම්‍යශීලී මහපටැඟිල්ල හා සියුම් චලන පාලනය', ta: 'துல்லியமான பிடிப்பு கொண்ட பெருவிரல்' },
      { en: 'Massively expanded cerebral cortex and symbolic speech', si: 'විශාල මස්තිෂ්ක බාහිකය සහ සංකේතාත්මක භාෂාව', ta: 'விரிவான பெருமூளை மற்றும் மொழித்திறன்' }
    ],
    comparativeHighlights: [
      {
        feature: { en: 'Heart Structure', si: 'හෘදයේ ව්‍යුහය', ta: 'இதய அமைப்பு' },
        human: { en: '4 Chambers (2 atria, 2 ventricles), Left aortic arch', si: 'කුටීර 4 (ආලින්ද 2, කෝෂිකා 2), වම් මහා ධමනි චාපය', ta: '4 அறைகள், இடது பெருநாடி வளைவு' },
        animal: { en: 'Baseline standard mammalian circulation', si: 'ක්ෂීරපායී සම්මත සංසරණය', ta: 'பாலூட்டி சுற்றோட்டம்' }
      },
      {
        feature: { en: 'Respiratory Drive', si: 'ස්වසන යාන්ත්‍රණය', ta: 'சுவாச இயக்கம்' },
        human: { en: 'Negative pressure via muscular diaphragm & intercostals', si: 'ප්‍රාචීරය හා අන්තර්පාර්ශුක පේශි මගින් සෘණ පීඩනය', ta: 'உதரவிதானம் வழி எதிர்மறை அழுத்தம்' },
        animal: { en: 'Negative pressure, continuous tidal breathing', si: 'සෘණ පීඩන ස්වසනය', ta: 'எதிர்மறை அழுத்தம்' }
      },
      {
        feature: { en: 'Limbs & Stance', si: 'පාද හා ඉරියව්ව', ta: 'கால்கள் நிலை' },
        human: { en: 'Plantigrade bipedalism (heels touch ground)', si: 'ප්ලාන්ටිග්‍රේඩ් (විලුඹ බිම ස්පර්ශ වන දෙපා ඉරියව්ව)', ta: 'முழுக்கால் நடை (குதிக்கால் தரை தொடும்)' },
        animal: { en: 'Upright plantigrade bipedal stance', si: 'සෘජු දෙපා ඉරියව්ව', ta: 'இரு கால் நடை' }
      }
    ],
    statistics: [
      { label: { en: 'Organ Systems', si: 'පද්ධති ගණන', ta: 'தொகுதிகள்' }, value: '11 Systems' },
      { label: { en: 'Bones in Skeleton', si: 'ඇටසැකිල්ලේ අස්ථි', ta: 'எலும்புகள்' }, value: '206' },
      { label: { en: 'Heart Chambers', si: 'හෘද කුටීර', ta: 'இதய அறைகள்' }, value: '4 Chambers' }
    ]
  },
  {
    id: 'frog',
    name: { en: 'Frog', si: 'මැඩියා', ta: 'தவளை' },
    commonName: { en: 'Amphibian (Bullfrog / Indian Bullfrog)', si: 'උභයජීවී මැඩියා', ta: 'இருவாழ்வி தவளை' },
    scientificName: 'Hoplobatrachus tigerinus / Rana catesbeiana',
    taxonomicClass: { en: 'Amphibia (Anura)', si: 'උභයජීවී (ඇනියුරා)', ta: 'இருவாழ்விகள் (அனுரா)' },
    habitat: { en: 'Semi-aquatic & Freshwater wetlands', si: 'ජලාශ්‍රිත හා තෙත්බිම්', ta: 'நீர்நிலைகள் மற்றும் ஈரநிலங்கள்' },
    iconName: 'Waves',
    accentColor: '#22c55e',
    tagline: {
      en: 'Amphibian pioneer with 3-chambered heart, cutaneous respiration, and jumping urostyle',
      si: 'කුටීර 3 ක හෘදයක්, සමෙන් ස්වසනය සහ පැනීමට සැකසුණු යුරොස්ටයිලය සහිත උභයජීවී ආදර්ශය',
      ta: '3-அறை இதயம், தோல் சுவாசம் மற்றும் பாயும் எலும்புக்கூடு கொண்ட இருவாழ்வி'
    },
    overview: {
      primary: {
        en: 'Frogs can breathe through their skin underwater and swallow air like a balloon on land! Their strong back legs act like natural springs to jump high.',
        si: 'මැඩියන්ට වතුර යටදී සමෙන් හුස්ම ගන්න පුළුවන් වගේම ගොඩබිමේදී බැලූනයක් වගේ උගුරෙන් වාතය ගිලිනවා! දිගු පසුපස පාද ස්ප්‍රිං වගේ ඉහළට පනින්න උදව් වෙනවා.',
        ta: 'தவளைகள் நீருக்கடியில் தோல் வழியாக சுவாசிக்கின்றன! அவற்றின் வலுவான பின்னங்கால்கள் வசந்தம் போல உயரே குதிக்க உதவுகின்றன.'
      },
      al: {
        en: 'Classic G.C.E. A/L vertebrate dissection model. Features a 3-chambered heart (two atria, single trabeculated ventricle with spiral valve in conus arteriosus), dual respiration (cutaneous + saccular buccal-pumping lungs), fused urostyle, and cloaca.',
        si: 'උසස් පෙළ ජීව විද්‍යා විෂය නිර්දේශයේ ප්‍රධාන කශේරුක ආදර්ශයයි. ආලින්ද දෙකක් හා තනි කෝෂිකාවක් සහිත කුටීර 3 හෘදය, සර්පිල කපාටය, සමෙන් හා සරල පෙනහලුවලින් ස්වසනය, යුරොස්ටයිලය හා අවග්‍රහණය (ක්ලෝවෙකාව) මින් දැක්වේ.',
        ta: 'உயர்தர உயிரியல் மாதிரி. 3-அறை இதயம் (2 ஏட்ரியம், 1 வென்ட்ரிக்கிள் மற்றும் சுருள் வால்வு), தோல் + பை போன்ற நுரையீரல் சுவாசம், மற்றும் இணைந்த வாலெலும்பு (யூரோஸ்டைல்) கொண்டது.'
      },
      medical: {
        en: 'Comparative evolutionary physiology exemplar: demonstrates transitional cardiovascular hemodynamics with spiral valve separating systemic and pulmocutaneous blood flows, lack of diaphragm relying on buccal barometric oscillation, and mesonephric renal clearance.',
        si: 'කශේරුක පරිණාමීය කායික විද්‍යාව: සර්පිල කපාටය මගින් රුධිර ප්‍රවාහ වෙන් කිරීම, ප්‍රාචීරය රහිතව මුඛ කුහර පීඩන වෙනස්වීම් මගින් වාතාශ්‍රය සැපයීම සහ මෙසොනෙෆ්‍රික් වෘක්ක පෙරීම.',
        ta: 'பரிணாம உடலியல் மாதிரி: சுருள் வால்வு மூலம் இரத்த ஓட்டப் பிரிப்பு, உதரவிதானமற்ற நேர்மறை அழுத்த சுவாசம் மற்றும் மீசோநெப்ரிக் சிறுநீரக வடிகட்டல்.'
      }
    },
    keyAdaptations: [
      { en: '3-chambered heart with spiral valve directing oxygen-rich blood', si: 'ඔක්සිජන් සහිත රුධිරය යොමුකරන සර්පිල කපාට සහිත කුටීර 3 හෘදය', ta: 'சுருள் வால்வு கொண்ட 3-அறை இதயம்' },
      { en: 'Cutaneous gas exchange via moist, highly vascularized skin', si: 'තෙතමනය සහිත සනාල සම මගින් වායු හුවමාරුව', ta: 'ஈரமான தோல் வழி வாயுப் பரிமாற்றம்' },
      { en: 'Fused urostyle and elongated tarsals (astragalus/calcaneum) for jumping', si: 'පැනීමට උදව්වන යුරොස්ටයිලය හා දිගැටි අස්ථි (ඇස්ට්‍රගලස්/කැල්කේනියම්)', ta: 'பாய உதவும் இணைந்த யூரோஸ்டைல் எலும்பு' },
      { en: 'Positive pressure buccal pumping (no ribs or diaphragm)', si: 'ප්‍රාචීර රහිත මුඛ කුහර තෙරපීමේ ස්වසනය', ta: 'நேர்மறை அழுத்த வாய்வழி சுவாசம்' }
    ],
    comparativeHighlights: [
      {
        feature: { en: 'Heart Structure', si: 'හෘදයේ ව්‍යුහය', ta: 'இதய அமைப்பு' },
        human: { en: '4 Chambers (complete separation of oxygenated & deoxygenated blood)', si: 'කුටීර 4 (ඔක්සිජන් සහිත හා රහිත රුධිරය සම්පූර්ණයෙන්ම වෙන්වීම)', ta: '4 அறைகள் (முழுமையான இரத்தப் பிரிப்பு)' },
        animal: { en: '3 Chambers (2 atria, 1 ventricle; spiral valve minimizes mixing)', si: 'කුටීර 3 (ආලින්ද 2, කෝෂිකා 1; සර්පිල කපාටයෙන් රුධිරය වෙන් කරයි)', ta: '3 அறைகள் (சுருள் வால்வு கலப்பைத் தடுக்கிறது)' }
      },
      {
        feature: { en: 'Respiration Mechanism', si: 'ස්වසන යාන්ත්‍රණය', ta: 'சுவாச முறை' },
        human: { en: 'Thoracic negative pressure with diaphragm and ribs', si: 'ප්‍රාචීරය හා ඉළඇට මගින් සෘණ පීඩන ස්වසනය', ta: 'உதரவிதான எதிர்மறை அழுத்தம்' },
        animal: { en: 'Positive pressure buccal swallowing + cutaneous skin respiration', si: 'මුඛ කුහරයෙන් වාතය ගිලීම + සම මගින් හුස්ම ගැනීම', ta: 'வாய்வழி காற்று விழுங்குதல் + தோல் சுவாசம்' }
      },
      {
        feature: { en: 'Excretory / Reproductive Exit', si: 'බැහැර කිරීමේ පිටවීම', ta: 'வெளியேற்ற வழி' },
        human: { en: 'Separate urethra, rectum (and vagina in females)', si: 'මුත්‍රා මාර්ගය සහ ගුද මාර්ගය වෙන්ව පිහිටයි', ta: 'தனித்தனியான சிறுநீர் மற்றும் மலக்குடல் வழிகள்' },
        animal: { en: 'Single common chamber: Cloaca (digestive, urinary, reproductive)', si: 'පොදු අවග්‍රහණය (ක්ලෝවෙකාව) මගින් සියල්ල බැහැර කරයි', ta: 'ஒரே பொதுவான அறை (குளோவாகா)' }
      }
    ],
    statistics: [
      { label: { en: 'Heart Chambers', si: 'හෘද කුටීර', ta: 'இதய அறைகள்' }, value: '3 (2 Atria, 1 Ventricle)' },
      { label: { en: 'Respiratory Modes', si: 'ස්වසන ක්‍රම', ta: 'சுவாச முறைகள்' }, value: 'Cutaneous + Pulmonary' },
      { label: { en: 'Vertebrae Count', si: 'කශේරුකා ගණන', ta: 'முதுகெலும்புகள்' }, value: '9 + Urostyle' }
    ]
  },
  {
    id: 'dog',
    name: { en: 'Dog', si: 'බල්ලා', ta: 'நாய்' },
    commonName: { en: 'Domestic Canine', si: 'සුනඛයා', ta: 'வளர்ப்பு நாய்' },
    scientificName: 'Canis lupus familiaris',
    taxonomicClass: { en: 'Mammalia (Carnivora, Canidae)', si: 'ක්ෂීරපායී (කැනිඩේ)', ta: 'பாலூட்டி (கானிడే)' },
    habitat: { en: 'Domesticated & Terrestrial', si: 'ගෘහාශ්‍රිත හා භෞමික', ta: 'வளர்ப்பு மற்றும் நிலப்பரப்பு' },
    iconName: 'Dog',
    accentColor: '#f97316',
    tagline: {
      en: 'Athletic cursorial quadruped with 300 million olfactory receptors and shearing carnassials',
      si: 'මිලියන 300 ක ආඝ්‍රාණ සංවේදක, කාර්නැසියල් දත් හා වේගවත් දිවීම සඳහා සකස් වූ සුනඛයා',
      ta: '300 மில்லியன் வாசனை ஏற்பிகள் மற்றும் கூரிய பற்கள் கொண்ட நான்கு கால் வேட்டை விலங்கு'
    },
    overview: {
      primary: {
        en: 'Dogs have super-powered noses that can smell things thousands of times better than humans! They pant with their tongues to cool off on hot sunny days.',
        si: 'බල්ලන්ට මිනිසුන්ට වඩා දහස් ගුණයකින් හොඳින් සුවඳ දැනෙන සුපිරි නාසයක් තියෙනවා! රස්නෙ දවස්වලට දිව එළියට දමා හති දමමින් ඇඟ සිසිල් කරගනියි.',
        ta: 'நாய்களுக்கு மனிதர்களை விட ஆயிரக்கணக்கான மடங்கு சிறந்த வாசனை திறன் கொண்ட மூக்கு உள்ளது! வெப்பமான நாட்களில் நாக்கை வெளியே தள்ளி உடலை குளிர்விக்கின்றன.'
      },
      al: {
        en: 'Quadrupedal cursorial carnivore skeleton with digitigrade locomotion. Heterodont dentition featuring specialized shearing carnassial teeth (upper P4 and lower M1). Highly acidic single-chamber stomach, massive olfactory ethmoturbinates, and sympathetic splenic autotransfusion reserve.',
        si: 'ඇඟිලි මත ඇවිදින (digitigrade) චතුෂ්පාද ඇටසැකිල්ලකි. මස් කැපීමට සැකසුණු කාර්නැසියල් දත් (ඉහළ P4 සහ පහළ M1), දැඩි ආම්ලික ආමාශය, අතිවිශාල ආඝ්‍රාණ බන්ධි සහ හදිසි අවස්ථාවලදී රතු රුධිර සෛල මුදාහරින ප්ලීහාවකින් සමන්විතය.',
        ta: 'விரல் நுனி நடை (Digitigrade) கொண்ட நான்கு கால் ஊனுண்ணி. இறைச்சியை வெட்ட உதவும் கார்னாசியல் பற்கள் (P4/M1), தீவிர அமில இரைப்பை மற்றும் இரத்த சேமிப்பு மண்ணீரல் கொண்டது.'
      },
      medical: {
        en: 'Veterinary and comparative physiology paradigm: demonstrates thermoregulation via upper respiratory evaporative panting (dead space ventilation bypassing alveolar hyperventilation), athletic cardiac reserve, and sinusoidal splenic contraction delivering up to 20% hemoconcentration during maximum aerobic exertion.',
        si: 'පශු වෛද්‍ය හා කායික විද්‍යාව: ඇල්වියෝලීය හයිපර්වෙන්ටිලේෂන් ඇති නොවී ඉහළ ස්වසන මාර්ගයෙන් ජලය වාෂ්ප කරමින් උෂ්ණත්වය පාලනය (Panting), සහ උපරිම ව්‍යායාමයේදී රුධිර ධාරිතාව 20% කින් වැඩි කරන ප්ලීහා හැකිලීම.',
        ta: 'விலங்கு உடலியல் மாதிரி: நுரையீரல் பாதிக்கப்படாமல் மேல் சுவாசப் பாதை மூலம் வெப்பத்தை வெளியேற்றும் முறை (Panting) மற்றும் உடற்பயிற்சியின் போது 20% இரத்த செல்களை வழங்கும் மண்ணீரல் சுருக்கம்.'
      }
    },
    keyAdaptations: [
      { en: 'Ethmoturbinate olfactory labyrinth housing 300M scent receptors', si: 'ගඳ සුවඳ සංවේදක මිලියන 300 ක් සහිත ආඝ්‍රාණ අස්ථි ජාලය', ta: '300 மில்லியன் வாசனை செல்கள் கொண்ட நாசி எலும்பு வலை' },
      { en: 'Shearing carnassial teeth (P4/M1) for cutting fibrous meat and bone', si: 'මස් හා ඇට කපා දැමීමට විශේෂිත වූ කාර්නැසියල් දත් (P4/M1)', ta: 'இறைச்சியை வெட்டும் கார்னாசியல் பற்கள்' },
      { en: 'Digitigrade footpad posture for high-speed endurance running', si: 'වේගයෙන් දිවීම සඳහා ඇඟිලි පෑඩ් මත ඇවිදීමේ ඉරියව්ව', ta: 'வேகமாக ஓட உதவும் விரல் நுனி நடை' },
      { en: 'Evaporative panting thermoregulation without sweating skin', si: 'දහඩිය නොදමා දිවෙන් ජලය වාෂ්ප කර සිරුර සිසිල් කිරීම (Panting)', ta: 'நாக்கு மூலம் வெப்பத்தை தணிக்கும் மூச்சிரைப்பு முறை' }
    ],
    comparativeHighlights: [
      {
        feature: { en: 'Olfactory Capability', si: 'ආඝ්‍රාණ හැකියාව', ta: 'வாசனை உணரும் திறன்' },
        human: { en: '~6 Million olfactory receptors, small olfactory bulb', si: 'මිලියන 6 ක ආඝ්‍රාණ සංවේදක, කුඩා ආඝ්‍රාණ බල්බය', ta: '6 மில்லியன் வாசனை செல்கள்' },
        animal: { en: '220 - 300 Million receptors; 40x larger relative brain allocation', si: 'මිලියන 220-300 ක සංවේදක; මොළයේ කොටස 40 ගුණයක් විශාලයි', ta: '220-300 மில்லியன் செல்கள் (40 மடங்கு பெரிய மூளை பகுதி)' }
      },
      {
        feature: { en: 'Limb & Foot Posture', si: 'පාදයේ ඉරියව්ව', ta: 'கால் நிலை' },
        human: { en: 'Plantigrade (entire sole and heel touch the ground)', si: 'ප්ලාන්ටිග්‍රේඩ් (විලුඹ හා අඩිපතුල මුළුමනින්ම බිම ගෑවේ)', ta: 'முழுக்கால் நடை (குதிக்கால் தரை தொடும்)' },
        animal: { en: 'Digitigrade (walks on digits II–V cushioned by fatty digital pads)', si: 'ඩිජිටිග්‍රේඩ් (ඇඟිලි සහ මේද පෑඩ් මත පමණක් ගමන් කරයි)', ta: 'விரல் நுனி நடை (விரல்கள் மட்டுமே தரை தொடும்)' }
      },
      {
        feature: { en: 'Thermoregulation', si: 'තාප නියාමනය', ta: 'உடல் வெப்பக் கட்டுப்பாடு' },
        human: { en: 'Eccrine sweat glands across the entire skin surface', si: 'සම පුරා ඇති ස්වේද ග්‍රන්ථි මගින් දහඩිය පිටකිරීම', ta: 'தோல் முழுவதும் வியர்வை சுரப்பிகள்' },
        animal: { en: 'Evaporative panting via respiratory dead space; sweat only on footpads', si: 'හති දැමීම (Panting) මගින්; දහඩිය ග්‍රන්ථි ඇත්තේ පාද පෑඩ්වල පමණි', ta: 'நாக்கு வழி மூச்சிரைப்பு; பாதங்களில் மட்டுமே வியர்வை' }
      }
    ],
    statistics: [
      { label: { en: 'Olfactory Receptors', si: 'ආඝ්‍රාණ සංවේදක', ta: 'வாசனை செல்கள்' }, value: '300 Million' },
      { label: { en: 'Adult Teeth Count', si: 'දත් සංඛ්‍යාව', ta: 'பற்கள் எண்ணிக்கை' }, value: '42 Teeth' },
      { label: { en: 'Locomotion Posture', si: 'ගමන් ඉරියව්ව', ta: 'நடை முறை' }, value: 'Digitigrade Quadruped' }
    ]
  },
  {
    id: 'cat',
    name: { en: 'Cat', si: 'පූසා', ta: 'பூனை' },
    commonName: { en: 'Domestic Feline', si: 'බළලා', ta: 'வளர்ப்பு பூனை' },
    scientificName: 'Felis catus',
    taxonomicClass: { en: 'Mammalia (Carnivora, Felidae)', si: 'ක්ෂීරපායී (ෆෙලිඩේ)', ta: 'பாலூட்டி (பெலிடே)' },
    habitat: { en: 'Domesticated & Terrestrial', si: 'ගෘහාශ්‍රිත හා භෞමික', ta: 'வளர்ப்பு மற்றும் நிலப்பரப்பு' },
    iconName: 'Cat',
    accentColor: '#a855f7',
    tagline: {
      en: 'Hyper-flexible predator with tapetum night vision, retractile claws, and righting reflex',
      si: 'අතිශය නම්‍යශීලී කොඳුඇටපෙළ, රාත්‍රී පෙනුම, ආපසු ඇදගත හැකි නිය සහ සමබරතා සහජය හිමි බළලා',
      ta: 'அதிவேக வளைவுத்தன்மை, இரவு பார்வை மற்றும் உள்ளிழுக்கும் நகங்கள் கொண்ட விலங்கு'
    },
    overview: {
      primary: {
        en: 'Cats have super-flexible backs and whiskers that act like radar! When falling, they always spin like acrobats to land safely on their soft, quiet paws.',
        si: 'බළලුන්ට ඉතා නම්‍යශීලී කොන්දක් සහ රේඩාර් වගේ ක්‍රියාකරන උඩුරැවුල් ගස් තියෙනවා! පහළට වැටෙනකොට අහසේදීම කැරකිලා මෘදු පාදවලින් බිමට බහින්න පුළුවන්.',
        ta: 'பூனைகளுக்கு மிகவும் வளைந்து கொடுக்கும் முதுகெலும்பு மற்றும் உணர் மீசைகள் உள்ளன! கீழே விழும்போது காற்றில் சுழன்று மென்மையான கால்களால் பாதுகாப்பாக இறங்குகின்றன.'
      },
      al: {
        en: 'Obligate hyper-carnivore with 7 extra-flexible lumbar vertebrae allowing up to 180° axial twist for the vestibular righting reflex. Features retractile claws powered by dorsal elastic ligaments, free-floating clavicle, reflective retinal tapetum lucidum, and taurine-dependent metabolism.',
        si: 'නියම මාංශභක්ෂකයෙකි. අංශක 180 ක් කැරකැවිය හැකි නම්‍යශීලී කටී කශේරුකා 7 කශේරුවට හිමි අතර එමගින් පහළට වැටෙනවිට සමබර වේ (Righting reflex). ආපසු ඇතුළට ගතහැකි තියුණු නියපොතු, පාවෙන අක්ෂක අස්ථිය, ඇස්වල ආලෝකය පරාවර්තනය කරන ටැපීටම් පටලය සහ ටවුරින් හෝමෝන මත යැපෙන පරිවෘත්තියක් ඇත.',
        ta: 'முழுமையான ஊனுண்ணி. காற்றில் சுழல உதவும் 7 நெகிழ்வான இடுப்பு எலும்புகள் (Righting reflex), உள்ளிழுக்கும் நகங்கள், மிதக்கும் கழுத்தெலும்பு மற்றும் இரவில் மின்னும் டேபிட்டம் லூசிடம் படலம் கொண்டது.'
      },
      medical: {
        en: 'Neurosensory and orthopedic specialization: Vestibular-spinal reflex coordination triggers sequential head-body righting within 0.1 seconds of free-fall. Tapetum lucidum guanine crystal matrix enhances scotopic photon capture by 130%. Obligate carnivore hepatic profile lacks functional glucokinase and cannot synthesize taurine.',
        si: 'ස්නායු හා විකලාංග විශේෂීකරණය: තත්පර 0.1 කදී හිස සහ සිරුර නිවැරදි කරමින් බිමට පතිතවීම පාලනය කරන වෙස්ටිබියුලර් පද්ධතිය. ඇසේ ගුවානින් ස්ඵටික මගින් රාත්‍රී ආලෝකය 130% කින් වැඩි කර පෙන්වීම. ටවුරින් සිරුර තුළ නිපදවිය නොහැකි වීම.',
        ta: 'நரம்பியல் மற்றும் எலும்பியல் மாதிரி: 0.1 வினாடிகளில் உடலை திருப்பும் சமநிலை அனிச்சை செயல். குறைந்த வெளிச்சத்தில் பார்வையை 130% கூர்மையாக்கும் குவானைன் படலம். டாரின் அமினோ அமிலத்தை தானாக உருவாக்க முடியாத கல்லீரல்.'
      }
    },
    keyAdaptations: [
      { en: '7 flexible lumbar vertebrae enabling aerial righting reflex', si: 'ගුවනේදී සිරුර හරවා සමබර වන නම්‍යශීලී කටී කශේරුකා 7', ta: 'காற்றில் சுழன்று தரையிறங்க உதவும் 7 நெகிழ்வான இடுப்பெலும்புகள்' },
      { en: 'Retractile claws protected inside dorsal elastic ligament sheaths', si: 'ස්නායු මගින් ආපසු කොපුව තුළට ඇදගත හැකි තියුණු නියපොතු', ta: 'தேவைப்படும் போது மட்டும் வெளியே வரும் கூரிய நகங்கள்' },
      { en: 'Tapetum lucidum crystalline retro-reflector for superior night vision', si: 'රාත්‍රියේදී ආලෝකය පරාවර්තනය කර පෙනීම දියුණු කරන ටැපීටම් පටලය', ta: 'இரவில் கண்பார்வையை கூர்மையாக்கும் டேபிட்டம் படலம்' },
      { en: 'Free-floating clavicle allowing torso to squeeze through narrow gaps', si: 'ඕනෑම පටු තැනකින් රිංගා යාමට හැකි පාවෙන අක්ෂක අස්ථිය', ta: 'இடுக்கான வழிகளில் நுழைய உதவும் மிதக்கும் கழுத்தெலும்பு' },
      { en: 'Tactile vibrissae whiskers with deep trigeminal innervation', si: 'ස්පර්ශය හා අවකාශය මනින සංවේදී උඩුරැවුල් (Vibrissae)', ta: 'சுற்றுப்புறத்தை உணர உதவும் நரம்பு மீசைகள்' }
    ],
    comparativeHighlights: [
      {
        feature: { en: 'Spinal Flexibility & Collarbone', si: 'කොඳුඇටපෙළ හා කරපටිය', ta: 'முதுகெலும்பு மற்றும் கழுத்தெலும்பு' },
        human: { en: 'Rigid shoulder girdle with fixed clavicle anchoring to sternum', si: 'උරහිස් වළල්ලට තදින් බැඳුණු අක්ෂක අස්ථිය', ta: 'மார்பெலும்புடன் உறுதியாக இணைந்த கழுத்தெலும்பு' },
        animal: { en: 'Free-floating clavicle embedded in muscle; extreme spine rotation', si: 'පේශි තුළ පාවෙන අක්ෂකය; කොන්ද අංශක 180 ක් කැරකැවිය හැක', ta: 'தசையோடு மிதக்கும் கழுத்தெலும்பு; 180° திரும்பும் முதுகு' }
      },
      {
        feature: { en: 'Retinal Night Vision', si: 'රාත්‍රී පෙනීම', ta: 'இரவு பார்வை' },
        human: { en: 'No tapetum lucidum; poor light capture in dark environments', si: 'ටැපීටම් පටලයක් නැත; අඳුරේ පෙනීම සීමිතය', ta: 'டேபிட்டம் படலம் இல்லை; இருட்டில் மங்கலான பார்வை' },
        animal: { en: 'Tapetum lucidum reflects unabsorbed photons back across retina (6x light amplification)', si: 'ටැපීටම් පටලය මගින් ආලෝකය පරාවර්තනය කර 6 ගුණයක රාත්‍රී පෙනුමක් ලබාදෙයි', ta: 'டேபிட்டம் படலம் ஒளியை பிரதிபலித்து 6 மடங்கு பார்வையை கூட்டுகிறது' }
      },
      {
        feature: { en: 'Metabolic Carnivory', si: 'පෝෂණ අවශ්‍යතාව', ta: 'உணவுத் தேவை' },
        human: { en: 'Omnivorous: synthesizes taurine, converts beta-carotene to vitamin A', si: 'සර්වභක්ෂක: සිරුර තුළ ටවුරින් නිපදවිය හැක', ta: 'அனைத்துண்ணி: டாரினை தானாக உருவாக்கும்' },
        animal: { en: 'Strict obligate carnivore: absolute dietary requirement for taurine & animal tissue', si: 'නියම මාංශභක්ෂක: ආහාරයෙන්ම ටවුරින් ලබාගත යුතුය', ta: 'கட்டாய ஊனுண்ணி: மாமிசத்திலிருந்து மட்டுமே உயிர் வாழ முடியும்' }
      }
    ],
    statistics: [
      { label: { en: 'Lumbar Vertebrae', si: 'කටී කශේරුකා ගණන', ta: 'இடுப்பு எலும்புகள்' }, value: '7 (High Flexion)' },
      { label: { en: 'Night Vision Multiplier', si: 'රාත්‍රී පෙනුමේ ගුණය', ta: 'இரவு பார்வை திறன்' }, value: '6x Human Sensitivity' },
      { label: { en: 'Righting Reflex Speed', si: 'සමබර වීමේ වේගය', ta: 'சுழலும் வேகம்' }, value: '< 100 Milliseconds' }
    ]
  },
  {
    id: 'bird',
    name: { en: 'Bird', si: 'පක්ෂියා', ta: 'பறவை' },
    commonName: { en: 'Avian Species (Pigeon / Falcon)', si: 'පක්ෂියා / පරවියා', ta: 'பறவை (புறா / கழுகு)' },
    scientificName: 'Columba livia / Aves',
    taxonomicClass: { en: 'Aves (Neornithes)', si: 'පක්ෂී (ඒවිස්)', ta: 'பறவைகள் (ஏவ்ஸ்)' },
    habitat: { en: 'Aerial & Terrestrial (Global)', si: 'ගුවන් හා භෞමික', ta: 'வான் மற்றும் நிலப்பரப்பு' },
    iconName: 'Feather',
    accentColor: '#38bdf8',
    tagline: {
      en: 'Master of aerial flight with 9 air sacs, continuous unidirectional airflow, and keeled sternum',
      si: 'වායු කෝෂ 9 ක්, අඛණ්ඩ එක්-දිශානත පෙනහලු ස්වසනයක් සහ පියෑඹුම් පේශි දරන කරීනය සහිත පක්ෂියා',
      ta: '9 காற்றுப் பைகள், தொடர்ச்சியான ஒருவழி சுவாசம் மற்றும் படகு வடிவ மார்பெலும்பு கொண்ட பறவை'
    },
    overview: {
      primary: {
        en: 'Birds have hollow bones light as feathers and 9 air sacs like bellows! This lets them take in fresh oxygen continuously whether breathing in or breathing out.',
        si: 'කුරුල්ලන්ගේ ඇටසැකිල්ලේ අස්ථි කුහර සහිතයි, පිහාටු වගේ සැහැල්ලුයි! ඒ වගේම වායු කෝෂ 9 ක් නිසා හුස්ම ගන්නකොටත් පිටකරනකොටත් දෙකේදීම ඔක්සිජන් උරාගන්න පුළුවන්.',
        ta: 'பறவைகளின் எலும்புகள் எடை குறைவாக வெற்றிடமாக உள்ளன! அவற்றின் 9 காற்றுப் பைகள் மூச்சை உள்ளிழுக்கும் போதும் வெளிவிடும் போதும் தொடர்ச்சியாக ஆக்சிஜனை வழங்குகின்றன.'
      },
      al: {
        en: 'Highly specialized flight anatomy: Hollow pneumatic bones with internal struts, enormous keeled sternum (carina) anchoring pectoralis flight muscles, elastic furcula (wishbone), and unique syrinx vocal organ. The avian respiratory system maintains continuous unidirectional airflow through rigid parabronchial lungs via 9 interconnected air sacs.',
        si: 'පියෑඹීම සඳහා වූ සුවිශේෂී ව්‍යුහය: අභ්‍යන්තර බාල්ක සහිත කුහරමය වායුමය අස්ථි, පියාපත් පේශි සවිවන විශාල කරීනය (Keel), ස්ප්‍රිං එකක් බඳු ෆර්කියුලාව (විෂ්බෝන්), සහ නාද නිපදවන සිරිංක්සය. වායු කෝෂ 9 ක සහායෙන් පැරාබ්‍රොන්කස් තුළින් වාතය අඛණ්ඩව එකම දිශාවකට ගමන් කරමින් උපරිම වායු හුවමාරුවක් සිදු කරයි.',
        ta: 'பறக்கும் திறனுக்கான உடலமைப்பு: எடையற்ற உள்ளீடற்ற எலும்புகள், இறக்கைத் தசைகளைத் தாங்கும் பெரிய படகு வடிவ மார்பெலும்பு (கீல்), சுருள் போன்ற விஸ்போன், மற்றும் சிரிங்க்ஸ் குரல் உறுப்பு. 9 காற்றுப் பைகள் மூலம் நுரையீரலில் எப்போதும் ஒருவழியாக காற்று பாய்கிறது.'
      },
      medical: {
        en: 'Peak vertebrate respiratory efficiency: Cross-current capillary gas exchange in rigid, non-expanding parabronchial lungs driven by 9 compliant air sacs completely eliminates anatomical respiratory dead space. Four-chambered heart possesses an evolutionary Right Aortic Arch (unlike mammalian Left arch), delivering immense cardiac outputs required for sustained aerodynamic flight.',
        si: 'කශේරුකයන්ගේ ඉහළම ස්වසන කාර්යක්ෂමතාව: නොහැකිලෙන දෘඪ පැරාබ්‍රොන්කස් පෙනහලු සහ වායු කෝෂ 9 මගින් සෘණ අක්‍රීය අවකාශ මුළුමනින්ම ඉවත් කරයි. ක්ෂීරපායීන්ගේ වම් මහා ධමනි චාපයට ප්‍රතිවිරුද්ධව පක්ෂීන්ට දකුණු මහා ධමනි චාපයක් පිහිටයි.',
        ta: 'உயர் சுவாச திறன்: விரியாத நிலையான நுண்குழல் நுரையீரலில் குறுக்கு-ஓட்ட வாயுப் பரிமாற்றம். பாலூட்டிகளின் இடது பெருநாடிக்கு மாறாக வலது பெருநாடி வளைவு (Right Aortic Arch) கொண்டு பறப்பதற்கு அதிக இரத்தம் செலுத்துகிறது.'
      }
    },
    keyAdaptations: [
      { en: '9 air sacs maintaining unidirectional continuous oxygen flow in both breath phases', si: 'හුස්ම ගන්නා හා පිටකරන අවස්ථා දෙකේදීම අඛණ්ඩව ඔක්සිජන් සපයන වායු කෝෂ 9', ta: 'உள்ளிழுக்கும் போதும் வெளிவிடும் போதும் ஆக்சிஜன் வழங்கும் 9 காற்றுப் பைகள்' },
      { en: 'Keeled sternum (carina) anchoring massive flight muscles (pectoralis)', si: 'පියාපත් පහළට හා ඉහළට අදින පේශි රඳවන විශාල කරීනය සහිත ළය ඇටය', ta: 'பறக்கும் தசைகளை இணைக்கும் படகு வடிவ மார்பெலும்பு (கீல்)' },
      { en: 'Hollow pneumatic bones with internal honeycomb structural struts', si: 'සැහැල්ලු බව හා ශක්තිමත් බව දෙන කුහර සහිත වායුමය අස්ථි', ta: 'எடையைக் குறைக்கும் காற்று நிரம்பிய உள்ளீடற்ற எலும்புகள்' },
      { en: 'Elastic furcula (wishbone) storing aerodynamic kinetic energy', si: 'පියාපත් ගසන විට ශක්තිය ගබඩා කර නිදහස් කරන ෆර්කියුලාව', ta: 'இறக்கையடிக்கும் போது ஆற்றலை சேமிக்கும் விஸ்போன் எலும்பு' },
      { en: 'Crop for food storage and muscular grit-filled gizzard for grinding', si: 'ආහාර ගබඩා කරන ගලනාල බෝගය සහ ඇඹරුම් ගල් අඩංගු මාංශපේශී ගිසරය', ta: 'உணவை அரைக்கும் தசைப்பகுதி (கிஸார்ட் / அரவைப்பை)' }
    ],
    comparativeHighlights: [
      {
        feature: { en: 'Respiratory Air Flow', si: 'ස්වසන වායු ප්‍රවාහය', ta: 'சுவாசக் காற்று ஓட்டம்' },
        human: { en: 'Bidirectional tidal airflow (air flows in and out along the same path with dead space)', si: 'ද්වි-දිශානත ඇතුළට හා පිටතට යන මාරුවන ස්වසනය (අක්‍රීය අවකාශ සහිතයි)', ta: 'இருவழி சுவாசம் (ஒரே வழியில் காற்று சென்று திரும்புகிறது)' },
        animal: { en: 'Continuous unidirectional airflow through parabronchi via 9 air sacs (zero dead space)', si: 'වායු කෝෂ 9 ආධාරයෙන් පැරාබ්‍රොන්කස් හරහා අඛණ්ඩ එක්-දිශානත වායු ප්‍රවාහය', ta: '9 காற்றுப் பைகள் மூலம் ஒருவழியாக மட்டும் பாயும் தொடர் காற்று' }
      },
      {
        feature: { en: 'Aortic Arch of Heart', si: 'මහා ධමනි චාපය', ta: 'பெருநாடி வளைவு' },
        human: { en: 'Left Aortic Arch curving over the left main bronchus', si: 'වම් මහා ධමනි චාපය (හෘදයේ සිට වමට හැරේ)', ta: 'இடது பெருநாடி வளைவு' },
        animal: { en: 'Right Aortic Arch curving over the right main bronchus to supply flight muscles', si: 'දකුණු මහා ධමනි චාපය (හෘදයේ සිට දකුණට හැරේ)', ta: 'வலது பெருநாடி வளைவு (பறக்கும் தசைகளுக்கு இரத்தம் பாய்ச்சும்)' }
      },
      {
        feature: { en: 'Bone Architecture', si: 'අස්ථි ව්‍යුහය', ta: 'எலும்பு அமைப்பு' },
        human: { en: 'Dense marrow-filled long bones for weight bearing', si: 'බර දැරීම සඳහා ඇටමිදුළු පිරුණු ඝන අස්ථි', ta: 'மஜ்ஜை நிரம்பிய கனமான எலும்புகள்' },
        animal: { en: 'Pneumatic hollow bones connected to air sacs with internal honeycomb struts', si: 'වායු කෝෂවලට සම්බන්ධ කුහර සහිත, මීවද හැඩැති සැහැල්ලු අස්ථි', ta: 'காற்றுப் பைகளுடன் இணைந்த எடையற்ற உள்ளீடற்ற எலும்புகள்' }
      }
    ],
    statistics: [
      { label: { en: 'Air Sac Count', si: 'වායු කෝෂ සංඛ්‍යාව', ta: 'காற்றுப் பைகள்' }, value: '9 Air Sacs' },
      { label: { en: 'Aortic Arch Orientation', si: 'මහා ධමනි දිශාව', ta: 'பெருநாடி திசை' }, value: 'Right Aortic Arch' },
      { label: { en: 'Gas Exchange Mode', si: 'වායු හුවමාරු ක්‍රමය', ta: 'வாயுப் பரிமாற்றம்' }, value: 'Unidirectional Parabronchial' }
    ]
  }
];

export const ANIMAL_ORGAN_PARTS: OrganPart[] = [
  // ==================== FROG ANATOMICAL LANDMARKS ====================
  {
    id: 'frog_3chamber_heart',
    speciesId: 'frog',
    name: { en: '3-Chambered Heart', si: 'කුටීර 3 හෘදය', ta: '3-அறை இதயம்' },
    latinName: 'Cor triloculare (2 Atria, 1 Ventriculus)',
    systemId: 'circulatory',
    category: 'Cardiovascular',
    position3D: [0, 0.25, 0.45],
    scale3D: [0.65, 0.65, 0.65],
    color: '#ef4444',
    description: {
      primary: {
        en: 'The frog heart has 3 rooms: two top rooms (atria) and one pumping bottom room (ventricle). A magical spiral valve helps keep fresh red blood going to the brain!',
        si: 'මැඩියාගේ හෘදයේ කාමර 3 කි: උඩ කාමර 2 ක් සහ ලේ පොම්ප කරන පහළ කාමරයක්. එහි ඇති සර්පිල කපාටය මගින් මොළයට නැවුම් ලේ යවයි.',
        ta: 'தவளையின் இதயத்தில் 3 அறைகள் உள்ளன: இரண்டு மேல் அறைகள் மற்றும் ஒரு கீழ் பம்பிங் அறை. சுருள் வால்வு மூளைக்கு நல்ல இரத்தத்தை செலுத்துகிறது.'
      },
      al: {
        en: 'Three-chambered heart consisting of Sinus venosus, Right atrium (receives deoxygenated systemic and cutaneous blood), Left atrium (receives oxygenated blood from pulmocutaneous veins), and single undivided Ventricle. The Truncus arteriosus contains a spiral valve (spiral fold) that minimizes the mixing of blood streams.',
        si: 'ශිරා කෝටරය, දකුණු ආලින්දය (දේහයෙන් හා සමෙන් ලේ ලබන), වම් ආලින්දය (පෙනහලු හා සමෙන් ඔක්සිජන් සහිත ලේ ලබන) සහ තනි කෝෂිකාවකින් සමන්විතය. ට්‍රන්කස් ආටීරියෝසස් හි ඇති සර්පිල කපාටය මගින් රුධිරය මිශ්‍ර වීම අවම කරයි.',
        ta: 'வலது ஏட்ரியம், இடது ஏட்ரியம் மற்றும் ஒரே ஒரு வென்ட்ரிக்கிள் கொண்டது. ட்ரங்கஸ் ஆர்டெரியோசஸில் உள்ள சுருள் வால்வு நல்ல மற்றும் கெட்ட இரத்தம் கலப்பதைக் குறைக்கிறது.'
      },
      medical: {
        en: 'Hemodynamic model of incomplete ventricular septation. Ventricular trabeculae create functional fluid compartments. The spiral valve (valvula spiralis) in the conus arteriosus rhythmically directs the initial deoxygenated ejection into pulmocutaneous arches and subsequent oxygenated blood into carotid/systemic arches.',
        si: 'කෝෂිකා විභේදනය නොවූ හෘදයේ තරල ගති විද්‍යාත්මක ආකෘතියයි. කෝෂිකා බිත්තියේ මස්පිඬු රැලි මගින් රුධිර ධාරා වෙන් කර තබන අතර, සර්පිල කපාටය ඔස්සේ ඔක්සිජන් සහිත රුධිරය කැරොටයිඩ් චාපයට යොමු කෙරේ.',
        ta: 'முழுமையற்ற வென்ட்ரிக்கிள் தடுப்புச்சுவர் மாதிரி. சுருள் வால்வு ஆக்சிஜன் நிறைந்த இரத்தத்தை மூளைக்கும், ஆக்சிஜன் குறைந்த இரத்தத்தை நுரையீரலுக்கும் சரியாக பிரிக்கிறது.'
      }
    },
    funFact: {
      en: 'Even though frogs have only one ventricle, the heart can send 85%+ oxygen-rich blood to the brain thanks to micro-ridges inside the chamber!',
      si: 'මැඩියාට ඇත්තේ එක් කෝෂිකාවක් වුවද, හෘදය තුළ ඇති කුඩා ගැටිති නිසා 85% කට වඩා ඔක්සිජන් සහිත ලේ මොළයට යැවිය හැක!',
      ta: 'ஒரே ஒரு வென்ட்ரிக்கிள் இருந்தாலும், 85% க்கும் அதிகமான நல்ல இரத்தத்தை மூளைக்கு அனுப்பும் திறன் கொண்டது!'
    },
    clinicalNotes: {
      en: 'Comparative evolutionary link between 2-chambered piscine and 4-chambered mammalian hearts, vital for understanding congenital human ventricular septal defects (VSD).',
      si: 'මිනිසාගේ හෘදයේ උපත් ආබාධ (VSD - කෝෂිකා සිදුරු) අවබෝධ කර ගැනීමට උපකාරී වන ප්‍රධාන පරිණාමීය සන්ධිස්ථානයකි.',
      ta: 'மனித இதயக் குறைபாடுகளை (VSD) புரிந்துகொள்ள உதவும் முக்கிய விலங்கு மாதிரி.'
    },
    keyFunctions: {
      primary: [
        { en: 'Pumps blood to the body and lungs', si: 'සිරුරට සහ පෙනහලුවලට රුධිරය පොම්ප කිරීම', ta: 'உடலுக்கும் நுரையீரலுக்கும் இரத்தம் செலுத்துதல்' }
      ],
      al: [
        { en: 'Atrial reception from systemic and pulmonary veins', si: 'ආලින්ද මගින් රුධිරය ලබාගැනීම', ta: 'இரத்தத்தை ஏட்ரியம் மூலம் பெறுதல்' },
        { en: 'Spiral valve selective ventricular ejection into 3 arterial arches', si: 'ධමනි චාප 3 වෙත සර්පිල කපාටයෙන් රුධිරය යොමු කිරීම', ta: 'சுருள் வால்வு மூலம் இரத்தத்தை பிரித்து அனுப்புதல்' }
      ],
      medical: [
        { en: 'Maintains critical mean arterial pressure without ventricular septum', si: 'කෝෂිකා ප්‍රාචීරයක් රහිතව ධමනි පීඩනය පවත්වා ගැනීම', ta: 'தடுப்புச்சுவர் இன்றி தமனி அழுத்தத்தை பராமரித்தல்' }
      ]
    }
  },
  {
    id: 'frog_saccular_lungs',
    speciesId: 'frog',
    name: { en: 'Saccular Lungs', si: 'බෑග් වැනි සරල පෙනහලු', ta: 'பை போன்ற நுரையீரல்' },
    latinName: 'Pulmones sacciformes',
    systemId: 'respiratory',
    category: 'Respiratory',
    position3D: [-0.35, 0.45, 0.25],
    scale3D: [0.6, 0.7, 0.6],
    color: '#38bdf8',
    description: {
      primary: {
        en: 'Two thin balloon-like pink sacs. Frogs have no ribs or diaphragm, so they swallow air using their throat to push oxygen into the lungs!',
        si: 'බැලූන් බෑග් වැනි රෝස පැහැති පෙනහලු දෙකකි. මැඩියන්ට ඉළඇට හෝ ප්‍රාචීරයක් නැති නිසා උගුරෙන් වාතය ගිල දමා පෙනහලු පුරවයි!',
        ta: 'மெல்லிய பலூன் போன்ற இரண்டு இளஞ்சிவப்பு பைகள். தவளைகளுக்கு விலா எலும்புகள் இல்லாததால், தொண்டை மூலம் காற்றை விழுங்கி நுரையீரலை நிரப்புகின்றன!'
      },
      al: {
        en: 'Simple sac-like lungs with internal alveoli folds called favioli. Ventilated by positive-pressure buccal pumping: lowering and raising the buccopharyngeal floor forces air through the glottis under positive pressure.',
        si: 'අභ්‍යන්තරයේ කුඩා නැවුම් ඇති සරල බෑග් වැනි පෙනහලුය. මුඛ කුහර පත්ල පහත් කර නැවත එසවීම මගින් ධන පීඩනයක් ඇති කර ස්වරාලය ඔස්සේ පෙනහලු තුළට වාතය තල්ලු කරයි.',
        ta: 'எளிய பை போன்ற அமைப்பு. தொண்டையை மேலும் கீழும் அசைத்து நேர்மறை அழுத்தம் மூலம் காற்றை நுரையீரலுக்குள் தள்ளுகிறது.'
      },
      medical: {
        en: 'Positive-pressure ventilation archetype. Absence of thoracic ribs and diaphragm prevents negative-pressure expansion; serves as an ancestral physiological model of mechanical barometric ventilation.',
        si: 'ධන පීඩන ස්වසනයේ මූලික ආකෘතියයි. ඉළඇට සහ ප්‍රාචීරය රහිත වීම නිසා මිනිස් සිරුරේ මෙන් සෘණ පීඩනයක් ඇති කළ නොහැක.',
        ta: 'விலா எலும்புகளற்ற நேர்மறை அழுத்த சுவாச மாதிரி. செயற்கை சுவாசக் கருவிகளின் இயக்கவியலைப் புரிந்துகொள்ள உதவுகிறது.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Absorbs oxygen on land', si: 'ගොඩබිමේදී ඔක්සිජන් උරාගැනීම', ta: 'நிலத்தில் ஆக்சிஜனை உறிஞ்சுதல்' }
      ],
      al: [
        { en: 'Buccopharyngeal barometric positive ventilation', si: 'මුඛ කුහර ධන පීඩන වාතාශ්‍රය', ta: 'நேர்மறை அழுத்த காற்று பரிமாற்றம்' }
      ],
      medical: [
        { en: 'Gas diffusion across faviolar vascular epithelial membrane', si: 'පෙනහලු බිත්තිය හරහා වායු විසරණය', ta: 'இரத்த நாளங்கள் வழி வாயு பரவல்' }
      ]
    }
  },
  {
    id: 'frog_cutaneous_skin',
    speciesId: 'frog',
    name: { en: 'Cutaneous Respiratory Skin', si: 'ස්වසන සම', ta: 'சுவாசத் தோல்' },
    latinName: 'Integumentum respiratorium',
    systemId: 'integumentary',
    category: 'Respiratory / Cutaneous',
    position3D: [0.65, 0.1, 0.4],
    scale3D: [0.5, 0.5, 0.5],
    color: '#10b981',
    description: {
      primary: {
        en: 'A frog’s skin is smooth, moist, and slippery. It has tiny blood vessels that take in fresh oxygen right through the skin when resting or swimming underwater!',
        si: 'මැඩියාගේ සම තෙතමනය සහිත ලිස්සන සුළු එකකි. වතුර යට සිටින විට සම හරහා කෙලින්ම රුධිරයට ඔක්සිජන් උරාගැනීමට සමත් ය!',
        ta: 'தவளையின் தோல் ஈரப்பதமாகவும் வழுவழுப்பாகவும் இருக்கும். தண்ணீருக்குள் இருக்கும் போது தோல் வழியாகவே ஆக்சிஜனை உறிஞ்சுகிறது!'
      },
      al: {
        en: 'Non-keratinized moist stratum corneum richly supplied with cutaneous capillary plexuses. Dermal mucous glands secrete fluid to keep skin moist, enabling continuous passive diffusion of O2 and CO2 both in water and on land.',
        si: 'කැරටින් රහිත තෙත් අපිචර්මයකි. ශ්ලේෂ්මල ග්‍රන්ථි මගින් සම නිතරම තෙත්ව තබන අතර, ජලයේදී මෙන්ම ගොඩබිමේදීද විසරණය මගින් ඔක්සිජන් හා කාබන් ඩයොක්සයිඩ් හුවමාරු කරයි.',
        ta: 'ஈரமான மெல்லிய தோல். சளி சுரப்பிகள் தோலை எப்போதும் ஈரமாக வைத்து, நீரிலும் நிலத்திலும் ஆக்சிஜனை நேரடியாக உறிஞ்ச உதவுகின்றன.'
      },
      medical: {
        en: 'Cutaneous gas exchange supplies 100% of metabolic oxygen during torpor and cold brumation; pulmonary arterial blood branches directly into the pulmocutaneous artery to perfuse subcutaneous capillary beds.',
        si: 'ශීත නිද්‍රාවේදී සම්පූර්ණ ඔක්සිජන් අවශ්‍යතාව සම මගින් සපයයි. පල්මොකියුටේනියස් ධමනිය මගින් සමේ කේශනාලිකා වෙත රුධිරය පොම්ප කෙරේ.',
        ta: 'குளிர்கால உறக்கத்தின் போது முழு ஆக்சிஜனையும் தோலே வழங்குகிறது. நுரையீரல்-தோல் தமனி மூலம் இரத்தம் தோலுக்கு பாய்கிறது.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Breathes underwater through skin', si: 'වතුර යටදී සමෙන් හුස්ම ගැනීම', ta: 'நீருக்கடியில் தோல் வழி சுவாசித்தல்' }
      ],
      al: [
        { en: 'Supplements pulmonary respiration by up to 60%', si: 'පෙනහලු ස්වසනයට 60% කින් පමණ සම දායක වේ', ta: 'நுரையீரல் சுவாசத்திற்கு 60% வரை துணை செய்கிறது' }
      ],
      medical: [
        { en: 'Diffusion-driven transcutaneous hematosis', si: 'සම හරහා සිදුවන වායු විසරණය', ta: 'தோல் வழி நேரடி இரத்த சுத்திகரிப்பு' }
      ]
    }
  },
  {
    id: 'frog_urostyle',
    speciesId: 'frog',
    name: { en: 'Urostyle (Fused Jumping Rod)', si: 'යුරොස්ටයිලය (පැනීමේ අස්ථිය)', ta: 'யூரோஸ்டைல் எலும்பு' },
    latinName: 'Os urostyle (Coccyx anura)',
    systemId: 'skeletal',
    category: 'Skeletal / Axial',
    position3D: [0, -0.65, 0.15],
    scale3D: [0.35, 1.1, 0.35],
    color: '#f59e0b',
    description: {
      primary: {
        en: 'A long, strong bone rod made of fused tail bones. It connects to the pelvis like a chassis to handle the huge shock whenever the frog jumps and lands!',
        si: 'වලිග අස්ථි එකතු වී සෑදුණු දිගු, ශක්තිමත් අස්ථි දණ්ඩකි. මැඩියා උඩ පැන බිමට පතිත වනවිට කම්පනය දරාගැනීමට ශ්‍රෝණිය හා සම්බන්ධ වී ඇත.',
        ta: 'வால் எலும்புகள் ஒன்றிணைந்து உருவான ஒரு நீண்ட உறுதியான எலும்பு. தவளை குதித்து தரையிறங்கும் போது ஏற்படும் அதிர்ச்சியை தாங்க உதவுகிறது.'
      },
      al: {
        en: 'Rigid unsegmented bone rod formed by the embryological fusion of postsacral caudal vertebrae. Articulates with the sacral vertebra (9th vertebra) and iliac shafts of pelvic girdle, transmitting kinetic thrust from hindlimbs to the axial spine.',
        si: 'කශේරුකා එකතු වීමෙන් සෑදුණු සවිමත් අස්ථි දණ්ඩකි. 9 වන ත්‍රික කශේරුකාව සහ ශ්‍රෝණි මේඛලාව සමඟ සන්ධි වෙමින් පසුපස පාදවල පැනීමේ බලය ඉදිරියට තල්ලු කරයි.',
        ta: 'வால் எலும்புகள் இணைந்து உருவான ஒற்றை எலும்பு. 9வது முதுகெலும்புடன் இணைந்து, பின்னங்கால்களின் உந்துதலை உடலுக்கு கடத்துகிறது.'
      },
      medical: {
        en: 'Biomechanic adaptation for saltation. Acts as a stiffening beam that prevents spinal column buckling under axial compression forces during explosive takeoff (forces exceeding 10g).',
        si: 'පැනීම සඳහා වූ ජෛව යාන්ත්‍රික අනුවර්තනයකි. පිම්මක් පනින විට කශේරුව බිඳී නොයා ආරක්ෂා කරන කම්පන අවශෝෂකයක් ලෙස ක්‍රියා කරයි.',
        ta: 'குதிக்கும் போது முதுகெலும்பு முறிந்துவிடாமல் பாதுகாக்கும் அதிர்ச்சி உறிஞ்சி அமைப்பாக செயல்படுகிறது.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Supports the frog when jumping', si: 'පනින විට සිරුරට ශක්තිය දීම', ta: 'குதிக்கும் போது உடலை தாங்குதல்' }
      ],
      al: [
        { en: 'Transmits hindlimb kinetic propulsion to axial skeleton', si: 'පසුපස පාදවල බලය කශේරුවට ලබාදීම', ta: 'கால்களின் உந்துதலை உடலுக்கு கடத்துதல்' }
      ],
      medical: [
        { en: 'Resists longitudinal bending and rotational shear stress', si: 'නැමීමේ හා ඇඹරීමේ ආතතිවලට ඔරොත්තු දීම', ta: 'அழுத்த விசை மற்றும் வளைவை தாங்குதல்' }
      ]
    }
  },
  {
    id: 'frog_tibiofibula',
    speciesId: 'frog',
    name: { en: 'Tibiofibula & Elongated Tarsals', si: 'ටිබියෝෆිබියුලාව සහ දිගැටි අස්ථි', ta: 'இணைந்த கால் எலும்புகள்' },
    latinName: 'Os tibiofibula & Astragalus-Calcaneum',
    systemId: 'skeletal',
    category: 'Skeletal / Appendicular',
    position3D: [0.8, -1.1, -0.2],
    scale3D: [0.4, 1.2, 0.4],
    color: '#e2e8f0',
    description: {
      primary: {
        en: 'The frog’s shin bones (tibia and fibula) are melted together into one super-strong bone, and its ankle bones are super long to make giant leap springs!',
        si: 'මැඩියාගේ කෙණ්ඩ අස්ථි දෙක එකතු වී තනි ශක්තිමත් අස්ථියක් වී ඇත. එමෙන්ම වළලුකර අස්ථි දිගු වී පිම්මක් පැනීමට ස්ප්‍රිං එකක් ලෙස ක්‍රියා කරයි!',
        ta: 'முழங்கால் எலும்புகள் ஒன்றிணைந்து மிகவும் வலுவான ஒற்றை எலும்பாக மாறியுள்ளன. மேலும் கணுக்கால் எலும்புகள் நீண்டு வசந்தம் போல செயல்படுகின்றன!'
      },
      al: {
        en: 'Fusion of tibia and fibula eliminates rotational joint play, resisting torque. Proximal ankle tarsals are elongated into the Astragalus (Tibiale) and Calcaneum (Fibulare), effectively introducing an extra lever arm segment for explosive saltation.',
        si: 'ටිබියාව සහ ෆිබියුලාව එකට පෑහී ටිබියෝෆිබියුලාව සෑදී ඇත. ඇස්ට්‍රගලස් සහ කැල්කේනියම් අස්ථි දිගු වී අමතර ලීවරයක් නිර්මාණය කරමින් පිම්මේ දුර වැඩි කරයි.',
        ta: 'டிபியா மற்றும் ஃபிபுலா எலும்புகள் இணைந்துள்ளன. கணுக்கால் எலும்புகள் நீண்டு கூடுதல் நெம்புகோல் போல செயல்பட்டு குதிக்கும் தூரத்தை அதிகரிக்கின்றன.'
      },
      medical: {
        en: 'Biomechanical lever amplification model: extended tarsal segment creates a multi-joint linkage system increasing the acceleration phase duration of the jump.',
        si: 'බහු-සන්ධි ලීවර පද්ධතියක් මගින් පැනීමේ ත්වරණය සහ කාලය උපරිම කරන ජෛව යාන්ත්‍රික ආකෘතියකි.',
        ta: 'குதிக்கும் வேகத்தை அதிகரிக்கும் பல மூட்டு நெம்புகோல் அமைப்பு.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Provides springboard jump power', si: 'පැනීමට ස්ප්‍රිං බලය ලබාදීම', ta: 'குதிக்கும் வேகத்தை அளித்தல்' }
      ],
      al: [
        { en: 'Absorbs landing torque and multiplies takeoff velocity', si: 'පතිත වීමේ කම්පනය උරාගැනීම හා වේගය වැඩි කිරීම', ta: 'அதிர்ச்சியை உறிஞ்சி வேகத்தை பெருக்குதல்' }
      ],
      medical: [
        { en: 'Prevents rotational torsion failure under sudden saltatory load', si: 'හදිසි බර දැරීමේදී අස්ථි බිඳී යාම වැළැක්වීම', ta: 'எலும்பு முறிவைத் தடுத்தல்' }
      ]
    }
  },
  {
    id: 'frog_cloaca',
    speciesId: 'frog',
    name: { en: 'Cloaca', si: 'අවග්‍රහණය (ක්ලෝවෙකාව)', ta: 'குளோவாகா (பொது அறை)' },
    latinName: 'Cloaca',
    systemId: 'digestive',
    category: 'Gastrointestinal & Urogenital',
    position3D: [0, -0.9, 0.3],
    scale3D: [0.5, 0.5, 0.5],
    color: '#d97706',
    description: {
      primary: {
        en: 'A single multi-purpose exit door! The digestive waste, liquid urine, and frog eggs/sperm all pass through this one shared opening.',
        si: 'සිරුරේ අපද්‍රව්‍ය පිටකරන එකම පොදු දොරටුවයි! මළපහ, මුත්‍රා සහ බිත්තර/ශුක්‍රාණු යන සියල්ල පිටවන්නේ මෙම පොදු අවග්‍රහණය හරහාය.',
        ta: 'ஒரே ஒரு பொதுவான வெளியேற்ற வழி! மலம், சிறுநீர் மற்றும் முட்டைகள்/விந்தணுக்கள் அனைத்தும் இதன் வழியே வெளியேறுகின்றன.'
      },
      al: {
        en: 'Terminal chamber into which the rectum (digestive), ureters/Wolffian ducts (urinary), and vasa deferentia/oviducts (reproductive) open, communicating with the exterior via the cloacal aperture.',
        si: 'ගුද මාර්ගය, මුත්‍රවාහිනී සහ ප්‍රජනක නාල විවෘත වන පොදු කුටීරයයි. අවග්‍රහණ විවරය මගින් බාහිරට විවෘත වේ.',
        ta: 'மலக்குடல், சிறுநீர்க்குழாய் மற்றும் இனப்பெருக்க குழாய்கள் இணையும் பொது அறை.'
      },
      medical: {
        en: 'Primitive gnathostome pelvic floor configuration. Demonstrates embryological precursor to mammalian separation of urogenital sinus from anal canal via urorectal septum.',
        si: 'ක්ෂීරපායීන්ගේ මුත්‍රා හා ගුද මාර්ගය වෙන්වීමට පෙර පවතින ප්‍රාථමික කලල විද්‍යාත්මක ආකෘතියයි.',
        ta: 'பாலூட்டிகளின் தனித்தனி உறுப்புகள் உருவாவதற்கு முந்தைய தொடக்கநிலை அமைப்பு.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Common exit for waste and eggs', si: 'අපද්‍රව්‍ය හා බිත්තර පිටවන දොරටුව', ta: 'கழிவுகள் வெளியேறும் வழி' }
      ],
      al: [
        { en: 'Tri-system excretory and gamete discharge conduit', si: 'පද්ධති තුනක ද්‍රව්‍ය පිටකිරීමේ නාලය', ta: 'முப்பெரும் தொகுதிகளின் வெளியேற்ற பாதை' }
      ],
      medical: [
        { en: 'Homologous to human persistent cloaca developmental anomalies', si: 'මිනිසාගේ කලල විද්‍යාත්මක අවග්‍රහණ ආබාධවලට සමාන වේ', ta: 'மனித கருவியல் குறைபாடுகளுக்கு ஒப்பானது' }
      ]
    }
  },

  // ==================== DOG ANATOMICAL LANDMARKS ====================
  {
    id: 'dog_olfactory_turbinates',
    speciesId: 'dog',
    name: { en: 'Ethmoturbinate Scent Labyrinth', si: 'ආඝ්‍රාණ අස්ථි ජාලය', ta: 'நாசி வாசனை எலும்பு வலை' },
    latinName: 'Ossa ethmoturbinalia & Organum vomeronasale',
    systemId: 'nervous',
    category: 'Sensory / Olfactory',
    position3D: [0, 0.45, 1.35],
    scale3D: [0.6, 0.6, 0.8],
    color: '#a855f7',
    description: {
      primary: {
        en: 'Inside a dog’s snout is a giant folded maze packed with 300 million scent sensors! It can smell a single drop of scent in a swimming pool!',
        si: 'බල්ලාගේ හොම්බ ඇතුළේ සුවඳ සංවේදක මිලියන 300 ක් පිරුණු සංකීර්ණ දැලක් තියෙනවා! වතුර පිරුණු පිහිනුම් තටාකයකට වැටුණු එක සුවඳ බිංදුවක් පවා ඌට හඳුනාගන්න පුළුවන්!',
        ta: 'நாயின் மூக்கிற்குள் 300 மில்லியன் வாசனை செல்கள் கொண்ட ஒரு பெரிய வலைப்பின்னல் உள்ளது! ஒரு நீச்சல் குளத்தில் விழும் ஒரு துளி வாசனையைக் கூட அதனால் கண்டுபிடிக்க முடியும்!'
      },
      al: {
        en: 'Elaborate scroll-like ethmoturbinate bone labyrinth lined with specialized olfactory neuroepithelium (~170 cm² surface area vs ~10 cm² in humans). Includes the vomeronasal (Jacobson’s) organ for pheromone detection.',
        si: 'සුවඳ සංවේදී අපිචර්මයෙන් වැසුණු අතිවිශාල වර්ගඵලයක් (වර්ග සෙ.මී. 170) සහිත ආඝ්‍රාණ අස්ථි ජාලයකි. ෆෙරමෝන හඳුනාගැනීමට ජේකොබ්සන්ගේ අංගය (Vomeronasal organ) ද මෙහි අඩංගු වේ.',
        ta: 'சுருள் போன்ற எலும்பு வலைப்பின்னல். 170 சதுர செ.மீ பரப்பளவு கொண்ட வாசனை நரம்புப் பகுதி மற்றும் பெரோமோன்களை உணரும் ஜேக்கப்சன் உறுப்பு கொண்டது.'
      },
      medical: {
        en: 'Macrosmatic olfactory archetype. Olfactory bulb represents ~0.31% of canine brain volume (vs ~0.01% in humans). Olfactory sensory neurons demonstrate continuous lifelong neurogenesis from basal stem cells.',
        si: 'සුවඳ දැනීමේ සුපිරි මොළ ආකෘතියයි. සුනඛ මොළයේ පරිමාවෙන් 0.31% ක් ආඝ්‍රාණ බල්බය සඳහා වෙන් කර ඇත (මිනිසා තුළ එය 0.01% කි).',
        ta: 'நாயின் மூளையில் வாசனைப் பகுதி மனிதனை விட 40 மடங்கு பெரியது. நரம்பு செல்கள் வாழ்நாள் முழுவதும் தொடர்ந்து புதுப்பிக்கப்படுகின்றன.'
      }
    },
    funFact: {
      en: 'A dog can smell which way someone walked by sniffing which footprint has slightly more evaporated scent!',
      si: 'අඩි සටහන් දෙකක් ඉව කර බලා පුද්ගලයා ගමන් කළේ කුමන දිශාවටදැයි කීමට බල්ලන්ට පුළුවන!',
      ta: 'கால்தடங்களை நுகர்ந்து பார்த்து ஒரு நபர் எந்த திசையில் சென்றார் என்பதை நாயால் துல்லியமாக சொல்ல முடியும்!'
    },
    keyFunctions: {
      primary: [
        { en: 'Smells food, danger, and friends', si: 'ආහාර, අනතුරු සහ මිතුරන් සුවඳින් හඳුනාගැනීම', ta: 'உணவு மற்றும் ஆபத்துக்களை நுகர்தல்' }
      ],
      al: [
        { en: 'Chemoreception of volatile odorants and pheromones', si: 'සුවඳ සහ ෆෙරමෝන හඳුනාගැනීම', ta: 'வாசனை மற்றும் பெரோமோன் ஏற்பு' }
      ],
      medical: [
        { en: 'Biomedical volatile organic compound (VOC) detection', si: 'රෝග හඳුනාගැනීමේ කාබනික වාෂ්ප හඳුනාගැනීම', ta: 'நோய்களை வாசனையால் கண்டறியும் திறன்' }
      ]
    }
  },
  {
    id: 'dog_carnassial_teeth',
    speciesId: 'dog',
    name: { en: 'Carnassial Shearing Teeth', si: 'කාර්නැසියල් දත්', ta: 'கார்னாசியல் வெட்டும் பற்கள்' },
    latinName: 'Dentes sectorii (P4 superior & M1 inferior)',
    systemId: 'digestive',
    category: 'Dentition / Digestive',
    position3D: [0.35, 0.25, 0.95],
    scale3D: [0.5, 0.5, 0.5],
    color: '#e2e8f0',
    description: {
      primary: {
        en: 'Big, sharp scissor teeth! The upper fourth premolar and lower first molar slide past each other like a pair of steel shears to slice meat and crush bones.',
        si: 'කතුරක් වගේ ක්‍රියාකරන ලොකු, තියුණු දත් යුගලයකි! උඩු හනුවේ දත සහ යටි හනුවේ දත එකිනෙක ගැටෙමින් මස් පෙති කපා ඇට කුඩු කර දමයි.',
        ta: 'கத்தரிக்கோல் போன்ற பெரிய கூர்மையான பற்கள்! மேல் மற்றும் கீழ் பற்கள் ஒன்றாக இணைந்து இறைச்சியை வெட்டவும் எலும்புகளை நொறுக்கவும் உதவுகின்றன.'
      },
      al: {
        en: 'Specialized carnassial apparatus formed by the upper 4th premolar (P4) and lower 1st molar (M1). As the jaw closes, their blade-like crests shear past each other with immense bite force to sever muscle tendons and crack marrow bones.',
        si: 'ඉහළ 4 වන පූර්ව චාර්වකය සහ පහළ 1 වන චාර්වකය එක්ව සාදන මස් කපන දත් පද්ධතියයි. හකු වැසෙන විට මේවා කතුරක් මෙන් එකිනෙක මත ලිස්සා යමින් මස් හා ඇට කපා දමයි.',
        ta: 'மேல் 4வது முன்கடைவாய் மற்றும் கீழ் 1வது கடைவாய்ப் பற்கள் இணைந்து கத்தரிக்கோல் போல செயல்பட்டு இறைச்சியையும் எலும்பையும் வெட்டுகின்றன.'
      },
      medical: {
        en: 'Dental formula 2x (I 3/3, C 1/1, P 4/4, M 2/3) = 42. Slab fractures of the maxillary P4 are clinically common in dogs gnawing hard objects, often presenting with suborbital maxillary abscesses.',
        si: 'සුනඛ දන්ත සූත්‍රය: දත් 42 කි. දැඩි ද්‍රව්‍ය සපා කෑමේදී ඉහළ P4 දත බිඳී යාම සුලභ පශු වෛද්‍ය ගැටලුවක් වන අතර ඉන් ඇස යටින් සැරව ගෙඩි හටගත හැක.',
        ta: 'மொத்தம் 42 பற்கள். மேல் P4 பல் உடைவது நாய்களில் பொதுவானது, இது கண்ணுக்குக் கீழே சீழ் கட்டிகளை உருவாக்கலாம்.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Cuts meat like scissors', si: 'කතුරක් මෙන් මස් කැපීම', ta: 'இறைச்சியை வெட்டுதல்' }
      ],
      al: [
        { en: 'Crushes cortex of marrow bones and severs fascia', si: 'ඇට කඩා ඇටමිදුළු ආහාරයට ගැනීම', ta: 'எலும்புகளை நொறுக்குதல்' }
      ],
      medical: [
        { en: 'Transfers temporomandibular vertical crushing force', si: 'හකු සන්ධියේ දැවැන්ත බලය දත් මතට යොමු කිරීම', ta: 'தாடையின் மாபெரும் சக்தியை செலுத்துதல்' }
      ]
    }
  },
  {
    id: 'dog_panting_lungs',
    speciesId: 'dog',
    name: { en: 'Lungs & Panting Thermoregulation', si: 'පෙනහලු හා හති දැමීම (Panting)', ta: 'நுரையீரல் & வெப்பத் தணிப்பு' },
    latinName: 'Pulmones & Thermoregulatio per anhelitum',
    systemId: 'respiratory',
    category: 'Respiratory / Thermal',
    position3D: [0, 0.15, 0.2],
    scale3D: [0.8, 0.8, 0.8],
    color: '#0ea5e9',
    description: {
      primary: {
        en: 'Dogs don’t sweat all over their body like humans. Instead, they take fast, shallow breaths (panting up to 300 times a minute!) to evaporate moisture from their wet tongue and cool down.',
        si: 'බල්ලන්ට මිනිසුන්ට මෙන් මුළු ඇඟෙන්ම දහඩිය දමන්නේ නැත. ඒ වෙනුවට විනාඩියකට 300 වතාවක් පමණ වේගයෙන් හති දමමින් දිවෙන් ජලය වාෂ්ප කර ඇඟ සිසිල් කරගනියි.',
        ta: 'நாய்களுக்கு மனிதர்களைப் போல உடலெங்கும் வியர்க்காது. அதற்குப் பதிலாக நிமிடத்திற்கு 300 முறை வரை வேகமாக மூச்சிரைத்து நாக்கிலிருந்து நீரை ஆவியாக்கி உடலை குளிர்விக்கின்றன.'
      },
      al: {
        en: 'Six-lobed pulmonary anatomy (left cranial & caudal; right cranial, middle, caudal, accessory). Thermoregulation achieved by shallow high-frequency panting (respiratory dead space oscillation) that avoids alveolar hyperventilation and respiratory alkalosis.',
        si: 'පෙති 6 කින් යුත් පෙනහලුයි. සිරුර සිසිල් කරන්නේ ඇල්වියෝලාවලට වාතය නොයවා ඉහළ ස්වසන මාර්ගයේ පමණක් වාතය වේගයෙන් හුවමාරු කිරීමෙනි (Panting). එමගින් රුධිරයේ භස්මතාව වැඩිවීම (Alkalosis) වළකී.',
        ta: '6 மடல்கள் கொண்ட நுரையீரல். அதிவேக மூச்சிரைப்பு மூலம் நுரையீரலின் ஆழமான பகுதி பாதிக்கப்படாமல் வெப்பம் மட்டும் வெளியேற்றப்படுகிறது.'
      },
      medical: {
        en: 'Panting utilizes the natural resonant frequency of the canine respiratory system (~5 Hz), minimizing metabolic energy cost while evaporating heat from the upper mucosal airway.',
        si: 'හති දැමීම (Panting) ස්වසන පද්ධතියේ ස්වභාවික සංඛ්‍යාතය (5 Hz) ඔස්සේ සිදුවන බැවින් අඩු ශක්තියකින් වැඩි තාප ප්‍රමාණයක් පිටකරයි.',
        ta: 'இயற்கையான அதிர்வு மூலம் குறைந்த ஆற்றலில் அதிக வெப்பத்தை நாக்கு வழி வெளியேற்றுகிறது.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Cools the dog on hot days', si: 'රස්නෙ දිනවල ඇඟ සිසිල් කිරීම', ta: 'உடலை குளிர்வித்தல்' }
      ],
      al: [
        { en: 'Dead space evaporative heat dissipation', si: 'වාෂ්පීභවනය මගින් තාපය පිටකිරීම', ta: 'ஆவியாதல் வழி வெப்பத்தை தணித்தல்' }
      ],
      medical: [
        { en: 'Preserves PaCO2 during high-frequency thermal tachypnea', si: 'රුධිර වායු සමතුලිතතාව ආරක්ෂා කිරීම', ta: 'இரத்த அமில சமநிலையை பராமரித்தல்' }
      ]
    }
  },
  {
    id: 'dog_spleen_reservoir',
    speciesId: 'dog',
    name: { en: 'Splenic Blood Reservoir', si: 'ප්ලීහා රුධිර ගබඩාව', ta: 'மண்ணீரல் இரத்த சேமிப்பகம்' },
    latinName: 'Lien (Capacitas contractilis)',
    systemId: 'lymphatic',
    category: 'Hematologic / Lymphatic',
    position3D: [-0.45, -0.1, -0.15],
    scale3D: [0.45, 0.7, 0.45],
    color: '#831843',
    description: {
      primary: {
        en: 'A natural emergency blood tank! During a hard chase or run, the dog’s spleen squeezes like a sponge to shoot a million extra red blood cells into the bloodstream!',
        si: 'ස්වභාවික රුධිර ටැංකියක් වැනිය! බල්ලා වේගයෙන් දුවන විට ප්ලීහාව ස්පොන්ජියක් මෙන් හැකිලී අමතර රතු රුධිර සෛල මිලියන ගණනක් ක්ෂණිකව රුධිරයට මුදාහරියි!',
        ta: 'ஒரு இயற்கை அவசர இரத்தத் தொட்டி! நாய் வேகமாக ஓடும் போது, மண்ணீரல் சுருங்கி மில்லியன் கணக்கான சிவப்பு இரத்த செல்களை உடனடியாக இரத்தத்தில் செலுத்துகிறது!'
      },
      al: {
        en: 'Highly muscular sinusoidal spleen wrapped in smooth muscle capsules and trabeculae. Sympathetic stimulation during exercise, fear, or hemorrhage causes rapid splenic contraction, autotransfusing concentrated erythrocytes to boost hematocrit up to 20%.',
        si: 'සිනිඳු පේශි බහුල ප්ලීහාවකි. ව්‍යායාමයේදී හෝ අනතුරකදී අනුකම්පී ස්නායු මගින් ප්ලීහාව හැකිලී රුධිර සෛල ප්‍රමාණය (Hematocrit) 20% කින් ක්ෂණිකව ඉහළ නංවයි.',
        ta: 'வலுவான தசை அடுக்கு கொண்ட மண்ணீரல். ஓட்டத்தின் போது சுருங்கி 20% வரை கூடுதல் இரத்த செல்களை உடலுக்கு அளிக்கிறது.'
      },
      medical: {
        en: 'Canine physiological splenic contraction reserve: critical in shock compensation and athletic peak performance. Splenic torsion or hemangiosarcoma are critical veterinary emergencies.',
        si: 'කම්පන තත්ත්වයන්ට මුහුණදීමට සහ උපරිම ශාරීරික ශක්තිය ලබාදීමට ඉවහල් වේ. ප්ලීහාව ඇඹරීම හෝ පිළිකා බල්ලන් තුළ සුලභ හදිසි රෝග තත්ත්වයන් වේ.',
        ta: 'அதிர்ச்சி மற்றும் காயங்களின் போது உயிரைக் காக்கும் அவசர இரத்த விநியோக அமைப்பு.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Stores extra blood for running fast', si: 'වේගයෙන් දිවීමට අමතර රුධිරය සැපයීම', ta: 'ஓடுவதற்கு கூடுதல் இரத்தம் அளித்தல்' }
      ],
      al: [
        { en: 'Splenic autotransfusion raising circulating hematocrit', si: 'රුධිර සෛල ප්‍රතිශතය ක්ෂණිකව ඉහළ දැමීම', ta: 'இரத்த அணுக்களின் அளவை கூட்டுதல்' }
      ],
      medical: [
        { en: 'Dynamic blood volume redistribution under alpha-adrenergic tone', si: 'හදිසි අවස්ථාවලදී රුධිර පරිමාව කළමනාකරණය', ta: 'அவசர இரத்த அழுத்த மேலாண்மை' }
      ]
    }
  },

  // ==================== CAT ANATOMICAL LANDMARKS ====================
  {
    id: 'cat_flexible_spine',
    speciesId: 'cat',
    name: { en: 'Ultra-Flexible Spine & Righting Reflex', si: 'නම්‍යශීලී කොඳුඇටපෙළ සහ සමබරතාව', ta: 'வளைந்து கொடுக்கும் முதுகு & சமநிலை' },
    latinName: 'Columna vertebralis felina (7 Lumbales)',
    systemId: 'skeletal',
    category: 'Musculoskeletal / Biomechanics',
    position3D: [0, 0.3, -0.2],
    scale3D: [0.35, 1.4, 0.35],
    color: '#f59e0b',
    description: {
      primary: {
        en: 'A cat’s back can bend like a rubber gymnast! It has 7 super-flexible lumbar bones. If a cat drops upside down, it twists its body in mid-air in less than a second to always land on its feet!',
        si: 'බළලාගේ කොන්ද රබර් වගේ නමන්න පුළුවන්! කටී කශේරුකා 7 ක් තියෙනවා. උඩුයටිකුරුව ඇදවැටුණත් ඇසිපිය හෙළන සැණින් අහසේදීම ඇඟ කරකවා පාද මතින් බිමට පතිත වේ!',
        ta: 'பூனையின் முதுகு ரப்பர் போல வளையும்! கீழே தலைகீழாக விழுந்தாலும் காற்றில் நொடிக்குள் உடலை திருப்பி கால்களால் தரையிறங்கும் அசாத்திய சமநிலை கொண்டது!'
      },
      al: {
        en: 'Vertebral column featuring 7 elongated lumbar vertebrae with flexible, thick intervertebral cushions. The vestibular righting reflex operates in two stages: inner ear sensors detect tilt, then cervical/thoracic spine twists first, followed instantly by the lumbar spine and hindlimbs.',
        si: 'නම්‍යශීලී කටී කශේරුකා 7 කි. ඇතුල් කනේ වෙස්ටිබියුලර් පද්ධතිය මගින් වැටීම දැනගත් වහාම බෙල්ල හා ඉදිරිපස සිරුරත්, අනතුරුව ක්ෂණිකව පසුපස සිරුරත් හරවා පාද මතින් බිමට පතිත වීම තහවුරු කරයි.',
        ta: '7 நீண்ட இடுப்பெலும்புகள். காது நரம்புகள் சமநிலையை உணர்ந்து, விழும் போது முதலில் முன் உடலையும் பின் பின் உடலையும் திருப்பி கால்களில் இறங்க வைக்கின்றன.'
      },
      medical: {
        en: 'High-compliance axial spine with minimal facet joint limitation. Demonstrates conservation of angular momentum without external torque: non-rigid multi-segment body rotation occurring in <100 milliseconds.',
        si: 'බාහිර බලයකින් තොරව කෝණික ගම්‍යතාව සංරක්ෂණය කරමින් තත්පර 0.1 කට වඩා අඩු කාලයකදී සිරුර හරවන ඉහළ ස්නායු-විකලාංග ආකෘතියකි.',
        ta: '0.1 வினாடிக்குள் காற்றில் உடலை திருப்பும் கோண உந்த பாதுகாப்பு இயக்கவியல் மாதிரி.'
      }
    },
    funFact: {
      en: 'Cats have survived falls from over 20 stories high because their flexible spine acts as a shock absorber after deploying like a parachute!',
      si: 'මහල් 20 කට වඩා උස ගොඩනැගිලිවලින් වැටී දිවි ගලවාගත් බළලුන් සිටින්නේ ඔවුන්ගේ කොඳුඇටපෙළ පැරෂුටයක් හා කම්පන අවශෝෂකයක් ලෙස ක්‍රියාකරන බැවිනි!',
      ta: '20 மாடி கட்டிடத்திலிருந்து கீழே விழுந்தாலும் தப்பிக்கும் திறன் கொண்டவை, ஏனெனில் அவற்றின் முதுகு அதிர்ச்சி உறிஞ்சியாக செயல்படுகிறது!'
    },
    keyFunctions: {
      primary: [
        { en: 'Always lands safely on four feet', si: 'නිතරම සතරගාතයෙන් බිමට පතිත වීම', ta: 'எப்போதும் கால்களில் தரையிறங்குதல்' }
      ],
      al: [
        { en: '180-degree mid-air spine rotational flexibility', si: 'අංශක 180 ක් අහසේදී සිරුර කරකැවීම', ta: '180 டிகிரி வரை திரும்பும் முதுகெலும்பு' }
      ],
      medical: [
        { en: 'Vestibulospinal motor tract coordination', si: 'වෙස්ටිබියුලොස්පයිනල් ස්නායු පාලනය', ta: 'நரம்பு வழி சமநிலை ஒருங்கிணைப்பு' }
      ]
    }
  },
  {
    id: 'cat_retractile_claws',
    speciesId: 'cat',
    name: { en: 'Retractile Claws & Elastic Ligaments', si: 'ආපසු ඇදගත හැකි නියපොතු', ta: 'உள்ளிழுக்கும் நகங்கள்' },
    latinName: 'Ungues retractiles & Ligamenta elastica dorsalia',
    systemId: 'muscular',
    category: 'Musculoskeletal / Integumentary',
    position3D: [0.65, -0.85, 0.45],
    scale3D: [0.45, 0.45, 0.45],
    color: '#ec4899',
    description: {
      primary: {
        en: 'Razor-sharp curved hooks hidden inside leather pockets! When resting, rubbery ligaments pull the claws back so they don’t click on the floor or get blunt. When catching prey, flexor muscles snap them out!',
        si: 'සමේ කොපු ඇතුළේ සැඟවුණු තියුණු නියපොතුය! ඇවිදින විට නිය ගෙවී නොයාමට ඇතුළට ඇද තබාගන්නා අතර, ගොදුරු අල්ලන විට පිටතට දිගු කරයි!',
        ta: 'தோல் உறைக்குள் மறைந்திருக்கும் கூரிய நகங்கள்! நடக்கும் போது தேயாமல் உள்ளிழுத்துக் கொள்ளும், இரையைப் பிடிக்கும் போது வெளியே நீட்டும்!'
      },
      al: {
        en: 'The distal phalanx (P3) is maintained in passive hyper-flexion inside a cutaneous sheath by dorsal elastic ligaments. Active claw unsheathing is triggered by contraction of the deep digital flexor tendon, exposing curved razor-sharp keratinous talons.',
        si: 'අක්‍රීය අවස්ථාවේදී පෘෂ්ඨීය ප්‍රත්‍යාස්ථ බන්ධනී මගින් නියපොතු සමේ කොපුව තුළ රඳවා තබයි. ගොදුරු අල්ලන විට ගැඹුරු ඇඟිලි නැමුම් කණ්ඩරාව හැකිලීමෙන් නියපොතු පිටතට පැමිණේ.',
        ta: 'இயல்பான நிலையில் தசை நார்கள் நகங்களை உள்ளிழுத்து மூடி வைத்திருக்கும். இரையைப் பிடிக்கும் போது தசை சுருங்கி நகங்கள் வெளியே பாய்கின்றன.'
      },
      medical: {
        en: 'Opposing mechanical system: passive elastic retraction vs active muscular protraction. Declawing (onychectomy) involves amputation of the entire distal phalanx (P3), causing severe biomechanical lameness.',
        si: 'ප්‍රත්‍යාස්ථ උදාසීන ඇදගැනීම සහ ක්‍රියාකාරී පේශි දිගුකිරීමේ ප්‍රතිවිරුද්ධ යාන්ත්‍රණයකි. බළලුන්ගේ නිය ඉවත් කිරීමේ ශල්‍යකර්මයේදී අවසාන අස්ථියම (P3) කපා දැමීමට සිදුවේ.',
        ta: 'செயலற்ற தசைநார் உள்ளிழுத்தல் மற்றும் தீவிர தசை நீட்டுதல் இயக்கவியல்.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Catches prey and climbs trees', si: 'ගොදුරු ඇල්ලීම හා ගස් නැගීම', ta: 'மரமேறுதல் மற்றும் வேட்டையாடுதல்' }
      ],
      al: [
        { en: 'Preserves sharp claw tips from abrasion wear', si: 'නියපොතු ගෙවී නොයා තියුණුව තබාගැනීම', ta: 'நகங்கள் தேய்ந்துவிடாமல் பாதுகாத்தல்' }
      ],
      medical: [
        { en: 'Deep flexor tendon digital actuation', si: 'කණ්ඩරා මගින් ඇඟිලි නිය පාලනය', ta: 'தசைநார் வழி நகங்களை இயக்குதல்' }
      ]
    }
  },
  {
    id: 'cat_tapetum_lucidum',
    speciesId: 'cat',
    name: { en: 'Tapetum Lucidum (Night-Vision Mirror)', si: 'ටැපීටම් ලූසිඩම් (රාත්‍රී දර්පණය)', ta: 'டேபிட்டம் இரவு பார்வை படலம்' },
    latinName: 'Tapetum lucidum (Guaninum crystallinum)',
    systemId: 'nervous',
    category: 'Sensory / Ophthalmic',
    position3D: [0.25, 0.6, 0.85],
    scale3D: [0.4, 0.4, 0.4],
    color: '#10b981',
    description: {
      primary: {
        en: 'A shiny mirror behind the cat’s eye! In the dark, it bounces light back like a mirror so the cat can see in lighting six times dimmer than humans can! It is also why cat eyes glow green at night.',
        si: 'ඇස පිටුපස ඇති දිලිසෙන කණ්ණාඩියක් වැනිය! අඳුරේදී ආලෝකය පරාවර්තනය කරමින් මිනිසාට වඩා 6 ගුණයක අඳුරේ පෙනීමක් ලබාදෙයි. රාත්‍රියේදී බළල් ඇස් කොළ පැහැයෙන් දිලිසෙන්නේ මේ නිසාය.',
        ta: 'கண்ணுக்குப் பின்னால் உள்ள ஒரு பளபளப்பான கண்ணாடி! இருட்டில் ஒளியை மீண்டும் கண்ணுக்குள் திருப்பி, மனிதனை விட 6 மடங்கு தெளிவான இரவு பார்வையை அளிக்கிறது!'
      },
      al: {
        en: 'Crystalline reflective layer located in the choroid behind the retina, composed of organized zinc-cysteinate or guanine crystal rods. Reflects photons that escaped absorption back through the photoreceptor rod layer, dramatically enhancing scotopic night sensitivity.',
        si: 'දෘෂ්ටිවිතානය පිටුපස පිහිටි ගුවානින් ස්ඵටික සහිත පරාවර්තක පටලයකි. දෘෂ්ටි සෛලවලට හසු නොවී ගිය ආලෝක කිරණ නැවත හරවා යවමින් අඳුරේ පෙනීම අතිශයින් තියුණු කරයි.',
        ta: 'விழித்திரைக்குப் பின்னால் உள்ள குவானைன் படிக அடுக்கு. தவறவிட்ட ஒளியை மீண்டும் விழித்திரைக்குள் செலுத்தி இரவு பார்வையை அதிகரிக்கிறது.'
      },
      medical: {
        en: 'Retro-reflector amplifying scotopic vision by 130%. The eye-shine wavelength reflects primarily in the green-blue spectrum (530 nm), matching the peak sensitivity of feline rhodopsin photopigments.',
        si: 'රාත්‍රී පෙනීම 130% කින් වැඩි කරන පරාවර්තකයකි. බළලාගේ දෘෂ්ටි වර්ණකවලට වඩාත් ගැලපෙන නැනෝමීටර් 530 (කොළ-නිල්) ආලෝකය පරාවර්තනය කරයි.',
        ta: 'இரவு பார்வையை 130% கூர்மையாக்கும் அமைப்பு. பச்சை-நீல நிறத்தில் ஒளிரும் தன்மையுடையது.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Sees in dark and glowing eyes', si: 'අඳුරේ පැහැදිලිව පෙනීම හා ඇස් දිලිසීම', ta: 'இருட்டில் கூர்மையாக பார்த்தல்' }
      ],
      al: [
        { en: 'Multiplies retinal photon capture in scotopic conditions', si: 'අඳුරේදී ආලෝක ෆෝටෝන අවශෝෂණය වැඩිකිරීම', ta: 'குறைந்த வெளிச்சத்தில் ஒளியை பெருக்குதல்' }
      ],
      medical: [
        { en: 'Increases light sensitivity at the cost of daytime visual acuity', si: 'දිවා පෙනීමට වඩා රාත්‍රී පෙනීමට ප්‍රමුඛතාව දීම', ta: 'இரவுப் பார்வைக்கு முன்னுரிமை அளித்தல்' }
      ]
    }
  },

  // ==================== BIRD ANATOMICAL LANDMARKS ====================
  {
    id: 'bird_9_air_sacs',
    speciesId: 'bird',
    name: { en: '9 Air Sacs (Unidirectional Respiratory Engine)', si: 'වායු කෝෂ 9 සහ එක්-දිශානත ස්වසනය', ta: '9 காற்றுப் பைகள் (தொடர் சுவாசம்)' },
    latinName: 'Sacci pneumatici (9 Sacci: Cervicales, Clavicularis, Thoracici, Abdominales)',
    systemId: 'respiratory',
    category: 'Respiratory / Avian Dynamics',
    position3D: [0, 0.2, 0.1],
    scale3D: [0.9, 0.9, 0.9],
    color: '#38bdf8',
    description: {
      primary: {
        en: 'Birds have 9 clear balloon sacs connected to their lungs! They pump fresh oxygen into the lungs all the time — even when the bird is breathing OUT! This gives them endless stamina to fly over mountains.',
        si: 'කුරුල්ලන්ට පෙනහලුවලට සම්බන්ධ වායු බැලූන් 9 ක් තියෙනවා! හුස්ම පිටකරන විටදී පවා අඛණ්ඩව නැවුම් ඔක්සිජන් පෙනහලු තුළින් ගලායයි! ඉහළ අහසේ නොනවත්වා පියාසර කිරීමට මේවා උපකාරී වේ.',
        ta: 'பறவைகளின் நுரையீரலுடன் 9 காற்றுப் பைகள் இணைக்கப்பட்டுள்ளன! மூச்சை வெளிவிடும் போது கூட நுரையீரலுக்கு தொடர்ச்சியாக ஆக்சிஜனை அனுப்புகின்றன! மலைகளுக்கு மேலே பறக்க இதுவே காரணம்.'
      },
      al: {
        en: 'The 9 compliant air sacs (1 interclavicular, 2 cervical, 2 cranial thoracic, 2 caudal thoracic, 2 abdominal) function as bellows. Air travels through the rigid parabronchial lungs in a continuous, unidirectional flow requiring TWO complete respiratory cycles (inhalation 1, exhalation 1, inhalation 2, exhalation 2) to complete one circuit.',
        si: 'වායු කෝෂ 9 (අන්තර් අක්ෂක 1, ග්‍රීවීය 2, පූර්ව උරස් 2, අපර උරස් 2, උදරීය 2) තුලනයන් ලෙස ක්‍රියා කරයි. ස්වසන චක්‍ර දෙකක් ඔස්සේ පෙනහලු හරහා වාතය එකම දිශාවකට අඛණ්ඩව ගමන් කරයි.',
        ta: '9 காற்றுப் பைகள் ஊதுகுழல் போல செயல்படுகின்றன. 2 சுவாச சுழற்சிகள் மூலம் நுரையீரலில் ஒருவழியாக மட்டுமே காற்று பாய்கிறது.'
      },
      medical: {
        en: 'Eliminates anatomical respiratory dead space. Rigid non-expanding parabronchial lungs cross-current gas exchange achieves maximum arterial PO2 even at extreme high-altitude hypoxic hypobaric environments (e.g., bar-headed geese migrating over Mt. Everest at 9,000m).',
        si: 'අක්‍රීය ස්වසන අවකාශය බින්දුවටම අඩු කරයි. මීටර් 9,000 ක් උස එවරස්ට් කන්ද ඉහළින් පියාසර කරන කුරුල්ලන්ට පවා අඩු ඔක්සිජන් මට්ටමකදී ජීවත්වීමට මෙය ඉඩ සලසයි.',
        ta: 'எவரெஸ்ட் சிகரத்திற்கு மேலே ஆக்சிஜன் குறைந்த உயரத்திலும் பறக்க உதவும் மிக உயர்ந்த சுவாச அமைப்பு.'
      }
    },
    funFact: {
      en: 'Bar-headed geese can fly over Mount Everest where humans would faint from lack of oxygen, thanks to their 9 continuous air sacs!',
      si: 'මිනිසුන් ඔක්සිජන් නැතිව ක්ලාන්ත වන එවරස්ට් කන්දට ඉහළින් පක්ෂීන් පියාසර කරන්නේ මෙම වායු කෝෂ 9 පිහිටෙන් ය!',
      ta: 'மனிதர்கள் மயக்கமடையும் எவரெஸ்ட் சிகரத்தின் உயரத்தில் கூட பறவைகள் இந்த 9 காற்றுப் பைகளால் எளிதாக பறக்கின்றன!'
    },
    keyFunctions: {
      primary: [
        { en: 'Provides fresh oxygen even when breathing out', si: 'හුස්ම පිටකරන විටදීත් ඔක්සිජන් සැපයීම', ta: 'தொடர்ச்சியாக ஆக்சிஜன் அளித்தல்' }
      ],
      al: [
        { en: 'Unidirectional continuous parabronchial ventilation', si: 'පැරාබ්‍රොන්කස් හරහා එක්-දිශානත වායු ප්‍රවාහය', ta: 'ஒருவழி தொடர் சுவாச ஓட்டம்' }
      ],
      medical: [
        { en: 'Cross-current blood-gas exchange eliminating dead space', si: 'අක්‍රීය අවකාශයකින් තොර වායු හුවමාරුව', ta: 'இறந்த இடம் இல்லாத முழுமையான இரத்த சுத்திகரிப்பு' }
      ]
    }
  },
  {
    id: 'bird_keeled_sternum',
    speciesId: 'bird',
    name: { en: 'Keeled Sternum (Carina of Sternum)', si: 'කරීනය (ළය ඇටයේ තලය)', ta: 'படகு வடிவ மார்பெலும்பு (கீல்)' },
    latinName: 'Carina sterni',
    systemId: 'skeletal',
    category: 'Skeletal / Flight Architecture',
    position3D: [0, -0.1, 0.45],
    scale3D: [0.3, 1.1, 0.8],
    color: '#e2e8f0',
    description: {
      primary: {
        en: 'A giant blade of bone on the bird’s chest, shaped like the bottom keel of a sailboat! It anchors the huge flight breast muscles that flap the wings up and down.',
        si: 'කුරුල්ලාගේ පපුවේ ඇති නැවක පතුලක් වැනි විශාල අස්ථි තලයකි! පියාපත් ඉහළ පහළ ගසන දැවැන්ත පියෑඹුම් පේශි සවිවන්නේ මේ මතය.',
        ta: 'பறவையின் மார்பில் உள்ள ஒரு படகு போன்ற பெரிய எலும்பு! இறக்கைகளை அடித்து மேலே பறக்க உதவும் மாபெரும் மார்புத் தசைகளைத் தாங்குகிறது.'
      },
      al: {
        en: 'Enormous median blade-like bony ridge protruding ventrally from the sternum. Serves as the primary origin site for the Pectoralis major (depresses wings, flight power stroke) and Supracoracoideus (elevates wings via the triosseal canal pulley mechanism).',
        si: 'ළය ඇටයෙන් ඉදිරියට නෙරා ආ විශාල අස්ථි තලයකි. පියාපත් පහළට ගසන පෙක්ටොරාලිස් මේජර් පේශිය සහ ට්‍රයෝසියල් ඇල මාර්ගය ඔස්සේ පියාපත් ඉහළට ඔසවන සුප්‍රාකොරකෝයිඩියස් පේශිය මෙහි සවිවේ.',
        ta: 'மார்பெலும்பின் மையத்தில் உள்ள பெரிய எலும்பு விளிம்பு. இறக்கைகளை கீழே அடிக்கும் பெக்டோரலிஸ் மற்றும் மேலே தூக்கும் சுப்ராகொரக்காய்டியஸ் தசைகளை இணைக்கிறது.'
      },
      medical: {
        en: 'Muscle mass attachment platform: flight muscles attached to the carina comprise up to 25% of the total body weight of flying birds. Flightless ratites (ostrich, emu) lack a carina sterni.',
        si: 'පියෑඹුම් පේශි කුරුල්ලාගේ මුළු සිරුරේ බරින් 25% ක් දක්වා වේ. පියෑඹිය නොහැකි පැස්බරා වැනි පක්ෂීන්ට මෙම කරීනය පිහිටා නැත.',
        ta: 'பறக்கும் பறவைகளில் மொத்த உடல் எடையில் 25% இந்த மார்புத் தசைகளே ஆகும். நெருப்புக்கோழி போன்ற பறக்காத பறவைகளில் இது இருப்பதில்லை.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Anchors powerful wing muscles', si: 'පියාපත් පේශි රඳවා තබාගැනීම', ta: 'இறக்கைத் தசைகளை தாங்குதல்' }
      ],
      al: [
        { en: 'Origins for pectoralis and supracoracoideus flight muscles', si: 'පියාසර පේශිවල ආරම්භක ස්ථානය වීම', ta: 'பறக்கும் தசைகளின் தொடக்க தளம்' }
      ],
      medical: [
        { en: 'Resists aerodynamic torsion generated by downstroke thrust', si: 'පියාපත් ගැසීමේදී ඇතිවන වායුගතික බලය දරාගැනීම', ta: 'பறக்கும் போது ஏற்படும் அழுத்தத்தை தாங்குதல்' }
      ]
    }
  },
  {
    id: 'bird_pneumatic_wing_bones',
    speciesId: 'bird',
    name: { en: 'Pneumatic Bones & Wing Skeleton', si: 'වායුමය අස්ථි සහ පියාපත් ඇටසැකිල්ල', ta: 'உள்ளீடற்ற பறக்கும் எலும்புகள்' },
    latinName: 'Ossa pneumatica & Humerus alae',
    systemId: 'skeletal',
    category: 'Skeletal / Pneumatic',
    position3D: [0.95, 0.45, -0.1],
    scale3D: [1.1, 0.4, 0.4],
    color: '#cbd5e1',
    description: {
      primary: {
        en: 'Bird bones are hollow like drinking straws, but filled with air and reinforced with criss-cross struts! They are feather-light so the bird can easily lift off the ground.',
        si: 'කුරුල්ලන්ගේ අස්ථි බීම බට වගේ ඇතුළතින් හිස්ය. එහෙත් අභ්‍යන්තරයේ කතිර බාල්ක ඇති නිසා කැඩෙන්නේ නැත. ඉතා සැහැල්ලු නිසා පහසුවෙන් අහසට එසවිය හැක.',
        ta: 'பறவைகளின் எலும்புகள் உள்ளே காலியாக எடை குறைவாக இருக்கும்! ஆனால் உடைந்துவிடாமல் இருக்க உள்ளே குறுக்கு கம்பிகள் போன்ற எலும்பு வலைகள் உள்ளன.'
      },
      al: {
        en: 'Hollow, thin-walled bones directly continuous with extensions of the air sacs (diverticula). Reinforced internally by criss-crossing structural struts (trabeculae), maximizing bending and torsional strength while minimizing skeletal mass.',
        si: 'වායු කෝෂවලට සම්බන්ධ කුහර සහිත සිහින් අස්ථි වේ. අභ්‍යන්තරයේ ඇති මීවද හැඩැති අස්ථි බාල්ක නිසා සැහැල්ලු බව මෙන්ම ඉහළ ශක්තිමත් බවක්ද හිමිවේ.',
        ta: 'காற்றுப் பைகளுடன் இணைந்த வெற்றிட எலும்புகள். எடையைக் குறைத்து வலிமையை அதிகரிக்க உள்ளே குறுக்கு கம்பிகள் உள்ளன.'
      },
      medical: {
        en: 'Aero-structural optimization: bone density is concentrated in the thin outer cortex with high second moment of area, achieving an extraordinary strength-to-weight ratio.',
        si: 'අවම බරකින් උපරිම ශක්තියක් ලබාදෙන අස්ථි ආකෘතියකි.',
        ta: 'குறைந்த எடையில் அதிக வலிமை தரும் விண்வெளி தொழில்நுட்பம் போன்ற எலும்பு அமைப்பு.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Lightweight bones for easy flying', si: 'පියාසර කිරීමට සැහැල්ලු බව දීම', ta: 'பறக்க உதவும் எடையற்ற எலும்பு' }
      ],
      al: [
        { en: 'Direct connection to pneumatic respiratory diverticula', si: 'ස්වසන වායු කෝෂ සමඟ සම්බන්ධ වීම', ta: 'காற்றுப் பைகளுடன் இணைந்திருத்தல்' }
      ],
      medical: [
        { en: 'High torsional resistance under aerodynamic wing loading', si: 'පියාපත් බර දැරීමේ ඉහළ ශක්තිය', ta: 'பறக்கும் போது காற்றழுத்தத்தை தாங்குதல்' }
      ]
    }
  },
  {
    id: 'bird_crop_gizzard',
    speciesId: 'bird',
    name: { en: 'Crop, Proventriculus & Muscular Gizzard', si: 'බෝගය, ආමාශය හා ගිසරය', ta: 'பயிற்றுப்பை மற்றும் அரவைப்பை (கிஸார்ட்)' },
    latinName: 'Ingluvies, Proventriculus & Ventriculus muscularis',
    systemId: 'digestive',
    category: 'Gastrointestinal',
    position3D: [-0.35, -0.3, 0.25],
    scale3D: [0.65, 0.75, 0.65],
    color: '#d97706',
    description: {
      primary: {
        en: 'Birds don’t have teeth, so they swallow little pebbles into their muscular gizzard! The pebbles churn like a stone grinder to crush seeds and bugs.',
        si: 'කුරුල්ලන්ට දත් නැති නිසා කුඩා ගල් කැට ගිල දමයි! මේවා ගිසරය තුළ ගබඩා වී මස්පිඬු හැකිලෙමින් ඇට වර්ග හා කෑම කුඩු කර අඹරයි.',
        ta: 'பறவைகளுக்கு பற்கள் இல்லை, அதனால் அவை சிறிய கூழாங்கற்களை விழுங்குகின்றன! அவை அரவைப்பையில் (கிஸார்ட்) சேகரிக்கப்பட்டு விதைகளையும் உணவையும் அரைக்கின்றன.'
      },
      al: {
        en: 'Two-part stomach preceded by the crop (storage pouch). Food passes into the glandular Proventriculus (secretes HCl and pepsin), then into the thick, muscular Ventriculus (Gizzard). The gizzard contains swallowed grit and a tough keratinoid koilin membrane to mechanically grind unchewed food.',
        si: 'බෝගය (ආහාර ගබඩා කරන), ප්‍රොවෙන්ට්‍රිකියුලසය (එන්සයිම ශ්‍රාවය කරන) සහ ගිසරය (කෑම අඹරන) සහිත දෙකොටස් ආමාශයකි. ගිසරයේ ඇති ගල් කැට හා තද කොයිලින් පටලය මගින් කෑම කුඩු කර අඹරයි.',
        ta: 'பயிறுப்பை (உணவு சேமிப்பு), வேதியியல் இரைப்பை மற்றும் தசை அரவைப்பை (கிஸார்ட்). கற்கள் மற்றும் கெட்டியான அடுக்கு மூலம் மெல்லாத உணவை அரைக்கிறது.'
      },
      medical: {
        en: 'Compensatory adaptation for the loss of teeth (edentulism), reducing head weight for aerodynamic balance. The gizzard can generate crushing pressures exceeding 400 mmHg.',
        si: 'හිසේ බර අඩු කර පියාසර කිරීම පහසු කිරීමට දත් නොමැති වීමට හිලව් වශයෙන් සැකසුණු අතිවිශාල පීඩනයක් යොදන ආමාශ පද්ධතියකි.',
        ta: 'தலையின் எடையைக் குறைக்க பற்களுக்குப் பதிலாக உருவான அரைக்கும் இயந்திரம் போன்ற இரைப்பை.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Grinds hard seeds using swallowed pebbles', si: 'ගල් කැට ආධාරයෙන් ඇට වර්ග ඇඹරීම', ta: 'கற்கள் மூலம் விதைகளை அரைத்தல்' }
      ],
      al: [
        { en: 'Chemical proventricular digestion & mechanical gizzard trituration', si: 'රසායනික හා යාන්ත්‍රික ජීර්ණය', ta: 'வேதியியல் மற்றும் இயந்திர செரிமானம்' }
      ],
      medical: [
        { en: 'High-pressure muscular comminution replaces mastication', si: 'සැපීම වෙනුවට අධි පීඩනයෙන් ආහාර කුඩු කිරීම', ta: 'மெல்லுதலுக்கு மாற்றான உயர் அழுத்த அரைப்பு' }
      ]
    }
  },
  {
    id: 'bird_right_aortic_arch',
    speciesId: 'bird',
    name: { en: '4-Chambered Heart & Right Aortic Arch', si: 'කුටීර 4 හෘදය සහ දකුණු මහා ධමනි චාපය', ta: '4-அறை இதயம் & வலது பெருநாடி வளைவு' },
    latinName: 'Cor avium (Arcus aortae dexter)',
    systemId: 'circulatory',
    category: 'Cardiovascular',
    position3D: [0, 0.05, 0.35],
    scale3D: [0.65, 0.65, 0.65],
    color: '#ef4444',
    description: {
      primary: {
        en: 'A super-fast, powerful heart that beats up to 1,000 times a minute in hummingbirds! It sends tons of warm blood to the wings so birds can fly without getting tired.',
        si: 'විනාඩියකට වාර 1000 ක් දක්වා ගැහෙන සුපිරි වේගවත් හෘදයකි! පියාපත්වලට අවශ්‍ය තරම් උණුසුම් රුධිරය වේගයෙන් සපයයි.',
        ta: 'ஹம்மிங் பறவைகளில் நிமிடத்திற்கு 1000 முறை வரை துடிக்கும் அதிவேக இதயம்! இறக்கைகளுக்கு இடைவிடாது இரத்தத்தை பாய்ச்சுகிறது.'
      },
      al: {
        en: 'True 4-chambered heart with complete separation of pulmonary and systemic circulations. Unlike mammals which retain the Left aortic arch, birds retain only the RIGHT 4th Aortic Arch, reflecting independent convergent evolution of endothermy.',
        si: 'සම්පූර්ණයෙන්ම වෙන්වූ කුටීර 4 ක හෘදයකි. ක්ෂීරපායීන්ගේ වම් මහා ධමනි චාපයට වෙනස්ව පක්ෂීන් තුළ රඳා පවතින්නේ දකුණු මහා ධමනි චාපය පමණි. මෙය තාප ස්ථායීතාව සඳහා වූ පරිණාමීය සාක්ෂියකි.',
        ta: 'முழுமையான 4-அறை இதயம். பாலூட்டிகளில் இடது பெருநாடி இருக்க, பறவைகளில் வலது பெருநாடி வளைவு மட்டுமே உள்ளது. பறப்பதற்கு அதிக இரத்த அழுத்தத்தை தருகிறது.'
      },
      medical: {
        en: 'Extreme cardiac performance: resting cardiac output and stroke work per gram of tissue exceed mammalian equivalents by 50–100%. Highly hypertrophied ventricular mass supports massive pectoralis perfusion.',
        si: 'ක්ෂීරපායීන්ට වඩා 50-100% ක ඉහළ හෘද ප්‍රතිදානයක් ලබාදෙන අතර පියාසර පේශි වෙත අතිවිශාල රුධිර ප්‍රමාණයක් පොම්ප කරයි.',
        ta: 'பாலூட்டிகளை விட 50-100% அதிக இரத்தத்தை பாய்ச்சும் திறன் கொண்ட உயர் செயல்திறன் இதயம்.'
      }
    },
    keyFunctions: {
      primary: [
        { en: 'Pumps blood fast for non-stop flight', si: 'නොනවත්වා පියාසර කිරීමට රුධිරය පොම්ප කිරීම', ta: 'தொடர்ந்து பறக்க இரத்தத்தை பாய்ச்சுதல்' }
      ],
      al: [
        { en: 'Right 4th aortic arch systemic perfusion', si: 'දකුණු මහා ධමනි චාපය මගින් සිරුරට ලේ සැපයීම', ta: 'வலது பெருநாடி மூலம் உடலுக்கு இரத்த விநியோகம்' }
      ],
      medical: [
        { en: 'Complete double circulation with high systemic pressure', si: 'ඉහළ පීඩන සම්පූර්ණ ද්විත්ව රුධිර සංසරණය', ta: 'உயர் அழுத்த முழுமையான இரட்டை சுற்றோட்டம்' }
      ]
    }
  }
];
