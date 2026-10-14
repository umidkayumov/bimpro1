export const COURSE = {
  title: "Revit MEP: Isitish, shamollatish va ventilyatsiya tizimlarini loyihalash",
  shortTitle: "Revit MEP: Isitish va Ventilyatsiya (ОВиК)",
  summary:
    "Real ko'p qavatli bino va sanoat ob'ektlari misolida HVAC tizimlarini noldan boshlab 3D modellashtirish, avtomatik spetsifikatsiyalar tuzish va O'zbekiston QMQ standartlariga mos ishchi loyiha (РД) tayyorlashni o'rganing.",
  price: "2 900 000",
  oldPrice: "3 600 000",
  discount: "-20%",
  currency: "UZS",
  monthlyPayment: "290 000",
  videoDuration: "03:45",
  images: {
    thumb: "/images/course/course-thumb.jpg",
    video: "/images/course/video-preview.jpg",
  },
} as const;

export const SUB_NAV = [
  { label: "Umumiy", href: "#umumiy" },
  { label: "Ko'nikmalar", href: "#konikmalar" },
  { label: "O'quv dasturi", href: "#dastur" },
  { label: "O'qituvchi", href: "#oqituvchi" },
  { label: "Mijozlar fikri", href: "#fikrlar" },
  { label: "FAQ", href: "#faq" },
];

export const BREADCRUMBS = ["Kurslar", "MEP Muhandislik", "Revit MEP (ОВ)"];

export const BADGES = [
  { label: "BOSHLANG'ICH VA O'RTA DARAJA", tone: "level" },
  { label: "100% QMQ/SHNK MOS", tone: "standard", icon: "shield-badge" },
  { label: "BITIRUV SERTIFAKTI", tone: "certificate" },
] as const;

export const SOCIAL_PROOF = {
  rating: "4.9",
  reviews: "(128 ta baho)",
  students: "340+ muhandis ta'lim oldi",
  updated: "Yangilangan sanasi: Mart 2025",
};

export const SPECS = [
  { label: "DARSLAR SONI", value: "16 ta modul" },
  { label: "UMUMIY VAQT", value: "8 soat video" },
  { label: "DASTUR VERSIYASI", value: "Revit 2022-2025" },
  { label: "FORMAT", value: "LMS + Telegram guruh" },
];

export const INSTRUCTOR = {
  shortName: "Farrux Maxkamjonov",
  name: "Farrux Mahkamjonov",
  role: "ОВиК, ВК va ТМ yo’nalishlari bo’yicha ekspert",
  quote:
    "\"Biz darslarda dasturning quruq funksionalini emas, Davlat Ekspertizasidan o'tadigan haqiqiy obyektni noldan topshirishgacha bo'lgan to'liq amaliy jarayonni o'rgatamiz.\"",
  metrics: [
    { value: "6+ yil", label: "Amaliy MEP loyihalash" },
    { value: "15+ yirik", label: "Tijorat & turar-joy loyihalari" },
    { value: "450+ shogird", label: "Muvaffaqiyatli bitiruvchilar" },
  ],
  photoSmall: "/images/course/instructor-small.jpg",
  photo: "/images/course/instructor.jpg",
};

export const PURCHASE_FEATURES = [
  "16 ta amaliy professional video-dars (8 soat)",
  "Tayyor Revit shablonlari (.rte) va parametrik oilalar (.rfa)",
  "Umrbod kirish huquqi (Lifetime access)",
  "Kompyuter va mobil qurilmalarda doimiy ko'rish",
  "QR-kodli rasmiy tekshiriluvchi sertifikat",
  "B2B shartnoma va to'lov hisobi (Yuridik shaxslarga)",
];

export const PAYMENT_METHODS = ["Payme", "Click", "Uzum Nasiya", "Bank o'tkazmasi"];

export const OUTCOMES = [
  {
    icon: "cube",
    tint: "primary",
    title: "HVAC tizimlarini 3D modellashtirish va quvurlar marshruti",
    text: "Havo o'tkazgichlar (ducts), radiatorlar, fancoillar va quvur armaturalarini aniq balandliklarda, xatolarsiz va me'yoriy masofalarni saqlagan holda joylash.",
  },
  {
    icon: "table",
    tint: "slate",
    title: "O'zbekiston QMQ/ShNK me'yorlariga mos avtomatik spetsifikatsiyalar",
    text: "Materiallar, jihozlar va armaturalar sarfini bir tugma orqali chiqarish hamda davlat ekspertizasi talablariga to'liq tayyorlash metodikasi.",
  },
  {
    icon: "calc",
    tint: "neutral",
    title: "Gidravlik va aerodinamik hisoblash tizimlari",
    text: "Bosim yo'qotilishi, havo tezligi va quvur diametrlarini Revit MEP ichida to'liq avtomatlashtirilgan tarzda tahlil qilish va nazorat qilish.",
  },
  {
    icon: "clash",
    tint: "danger",
    title: "BIM koordinatsiya va kolliziyalarni (Clash Detection) bartaraf etish",
    text: "Navisworks va Revit orqali arxitektura (AR) va konstruksiya (KR) bo'limlari bilan muhandislik tarmoqlari to'qnashuvlarini erta aniqlash va bartaraf etish.",
  },
] as const;

export const CURRICULUM_SUMMARY = "Jami: 16 ta dars • 8 soat amaliy video";

export const MODULES = [
  {
    title: "1-Modul: Revit MEP Asoslari va Loyiha Shablonlari",
    meta: "3 ta dars • 1.5 soat davomiylik",
    freeDemo: true,
    lessons: [
      { title: "1.1: BIM metodologiyasi va Revit interfeysi sozlamalari", duration: "24 min", open: true },
      { title: "1.2: Arxitektura (AR) va Konstruktsiya (KR) modellarini bog'lash", duration: "32 min" },
      { title: "1.3: Milliy ShNK shablonlari, qatlamlar va koordinata tizimi", duration: "34 min" },
    ],
  },
  { title: "2-Modul: Isitish va Radiatorlar Tizimi Loyihalash", meta: "5 ta dars • 2.5 soat davomiylik" },
  { title: "3-Modul: Shamollatish va Havo Kanallari (HVAC)", meta: "5 ta dars • 2.5 soat davomiylik" },
  { title: "4-Modul: Spetsifikatsiyalar, Vedomostlar va Ekspertiza", meta: "3 ta dars • 1.5 soat davomiylik" },
] as const;

export const AUDIENCE = [
  {
    icon: "graduate",
    title: "Boshlang'ich va Talaba Muhandislar",
    text: "OTMda o'rgatiladigan nazariy bilimlarni real qurilish obyektlari darajasiga ko'tarish va bozorda qadrlanadigan portfolioga ega bo'lish uchun.",
    result: "Natija: Ishga kirish imkoniyati +30%",
  },
  {
    icon: "building",
    title: "Loyihalash Instituti Mutaxassislari",
    text: "AutoCAD'dan 3D BIM formatiga tez va stressiz o'tish, spetsifikatsiyalarni avtomatlashtirish hamda davlat ekspertizasi talablariga to'liq javob berish uchun.",
    result: "Natija: Rutina ishlardan qutulish",
  },
  {
    icon: "freelancer",
    title: "Mustaqil Freelance Loyihachilar",
    text: "Bitta loyihani topshirish vaqtini 2 haftadan 3-4 kunga tushirish, buyurtmachilar bilan to'qnashuvlarsiz ishlash va qimmatroq xizmat ko'rsatish uchun.",
    result: "Natija: Sifatli loyihlar soni oshishi",
  },
] as const;

export const REVIEWS = [
  {
    initials: "JN",
    name: "Jamshid Nurmatov",
    role: "\"O'zshaharsozlik LITI\" muhandisi",
    text: "\"AutoCAD'da 2 hafta qiladigan OViK ishimizni hozir Revit MEP orqali 3 kunda barcha spetsifikatsiyalari bilan topshiryapmiz. Eng muhimi — gidravlik hisob-kitoblar avtomatlashdi.\"",
  },
  {
    initials: "BK",
    name: "Bobur Karimov",
    role: "\"Murad Buildings\" MEP koordinatori",
    text: "\"QMQ standartlariga to'liq moslashtirilgan shablonlar alohida rahmatga loyiq. Ko'p qavatli turar-joy binolarida havo kanallarini to'qnashuvsiz joylashtirishni mukammal o'rgandik.\"",
  },
  {
    initials: "DQ",
    name: "Dilshod Qodirov",
    role: "Mustaqil loyihachi muhandis",
    text: "\"Ekspertizadan o'tish bo'yicha hech qanday savol qolmadi. Kurs o'z narxini birinchi buyurtmamning o'zidayoq oqladi. Telegram yopiq guruhdagi mentor javoblari juda operativ.\"",
  },
] as const;

export const FAQ = [
  {
    question: "Bitirgandan so'ng rasmiy sertifikat beriladimi?",
    answer:
      "Ha. Kursni muvaffaqiyatli tugatgan har bir talabaga QR-kodli, rasmiy tekshiriluvchi sertifikat beriladi.",
  },
  {
    question: "Qanday to'lov usullari mavjud? Bo'lib to'lash mumkinmi?",
    answer:
      "To'lovni Payme, Click, Uzum Nasiya yoki bank o'tkazmasi orqali amalga oshirish mumkin. Uzum Nasiya va Payme orqali foizsiz, oyiga 290 000 so'mdan bo'lib to'lash imkoniyati bor.",
  },
  {
    question: "Darslar qachon boshlanadi va video darslar qancha muddat ochiq bo'ladi?",
    answer:
      "To'lovdan so'ng darslar darhol ochiladi. Video darslarga umrbod kirish huquqi beriladi, shuningdek Telegram yopiq guruhida mentor yordami mavjud.",
  },
  {
    question: "Kompyuterim uchun qanday minimal texnik parametrlar kerak?",
    answer:
      "Kurs Revit 2022–2025 versiyalarida o'tiladi, shuning uchun kompyuteringiz tanlangan Revit versiyasining rasmiy tizim talablariga javob berishi kerak.",
  },
];

export const FINAL_CTA = {
  badge: "CHEKLANGAN TAKLIF • QMQ 2024 SHABLONLARI BEPUL",
  title: "Loyihalash tezligini 3–5 baravarga oshirishga tayyormisiz?",
  text: "Revit MEP kursiga bugun ro'yxatdan o'ting va O'zbekiston standartlari bo'yicha tayyorlangan premium .RTE shablonlar to'plamini to'liq bepul qo'lga kiriting.",
  guarantees: [
    { icon: "cta-quality", label: "100% Sifat kafolati" },
    { icon: "cta-support", label: "Telegramda doimiy yordam" },
    { icon: "cta-lock", label: "Xavfsiz to'lov tizimlari" },
  ],
  buyLabel: "Kursni xarid qilish — 2 900 000 so'm",
  b2bLabel: "Korporativ jamoaviy o'qitish (B2B)",
} as const;
