export type CourseCategory = "mep" | "ar" | "kr" | "bim";

export type Course = {
  id: string;
  category: CourseCategory;
  categoryLabel: string;
  title: string;
  description: string;
  level: string;
  tag: { label: string; variant: "default" | "new" };
  rating: string;
  hours: string;
  lessons: string;
  price: string;
  free?: boolean;
  cta: string;
  /** First Figma card uses #262626 for the title, the rest #0f172a */
  titleTone?: "neutral" | "slate";
};

export const COURSE_TABS: { id: "all" | CourseCategory; label: string; width: number }[] = [
  { id: "all", label: "Barchasi", width: 150 },
  { id: "mep", label: "Revit MEP (ОВ)", width: 150 },
  { id: "ar", label: "Arxitektura (AR)", width: 180 },
  { id: "kr", label: "Konstruktsiya (КЖ)", width: 180 },
  { id: "bim", label: "BIM menejment", width: 180 },
];

export const COURSES: Course[] = [
  {
    id: "revit-mep-ovik",
    category: "mep",
    categoryLabel: "MEP muhandisligi",
    title: "Revit MEP – Isitish, shamollatish va ventilyatsiya (OViK)",
    description:
      "BIM loyihalash asoslari va Revit dasturining asosiy asboblari bilan ishlash ko'nikmalari. QMQ talablari…",
    level: "Boshlang'ich",
    tag: { label: "Top kurs", variant: "default" },
    rating: "4.9 ★ (84 fikr)",
    hours: "8 soat",
    lessons: "16 ta dars",
    price: "2 400 000 UZS",
    cta: "Sotib olish",
    titleTone: "neutral",
  },
  {
    id: "revit-architecture",
    category: "ar",
    categoryLabel: "Arxitektura (AR)",
    title: "Revit Architecture (AR) – Ko'p qavatli bino modellashtirish",
    description:
      "Zamonaviy turar-joy va jamoat binolarini 0 dan ekspertiza bosqichigacha modellashtirish, chizma",
    level: "Boshlang'ich",
    tag: { label: "Top kurs", variant: "default" },
    rating: "4.9 ★ (84 fikr)",
    hours: "8 soat",
    lessons: "16 ta dars",
    price: "BEPUL",
    cta: "Sotib olish",
  },
  {
    id: "revit-structure",
    category: "kr",
    categoryLabel: "Konstruktsiya (KR)",
    title: "Revit Structure (KR) – Temir-beton vakarkas konstruksiyalari",
    description:
      "Armaturalash, qolip chizmalari, spetsifikatsiyalarni avtomatlashtirish va yuklamalar hisobiga moslash.",
    level: "Boshlang'ich",
    tag: { label: "Yangi", variant: "new" },
    rating: "4.9 ★ (84 fikr)",
    hours: "8 soat",
    lessons: "16 ta dars",
    price: "2 150 000 UZS",
    cta: "Sotib olish",
  },
  {
    id: "bim-coordination",
    category: "bim",
    categoryLabel: "BIM menejment",
    title: "BIM Koordinatsiya & Navisworks Clash Detection",
    description:
      "AR, KR va MEP bo'limlari orasidagi fazoviy to'qnashuvlarni (kolliziyalarni) topish va hisobot…",
    level: "Boshlang'ich",
    tag: { label: "Top kurs", variant: "default" },
    rating: "4.9 ★ (84 fikr)",
    hours: "8 soat",
    lessons: "16 ta dars",
    price: "3 100 000 UZS",
    cta: "Sotib olish",
  },
  {
    id: "revit-mep-vk",
    category: "mep",
    categoryLabel: "Arxitektura (AR)",
    title: "Revit MEP – Suv ta'minoti va kanalizatsiya (VK)",
    description:
      "Trassalarni nishablik bilan yotqizish, santexnika asboblarini ulash va gidravlik hisob-kitob asoslari.",
    level: "Boshlang'ich",
    tag: { label: "Top kurs", variant: "default" },
    rating: "4.9 ★ (84 fikr)",
    hours: "8 soat",
    lessons: "16 ta dars",
    price: "2 600 000 UZS",
    cta: "Sotib olish",
  },
  {
    id: "bim-basics",
    category: "bim",
    categoryLabel: "Konstruktsiya (KR)",
    title: "BIM Asoslari va O'zbekiston QMQ me'yorlari",
    description:
      "BIM falsafasi, an'anaviy CAD chizmachilikdan BIMga o'tishning afzalliklari va davlat ekspertizasi…",
    level: "Boshlang'ich",
    tag: { label: "Yangi", variant: "new" },
    rating: "4.9 ★ (84 fikr)",
    hours: "8 soat",
    lessons: "16 ta dars",
    price: "BEPUL",
    free: true,
    cta: "Kursni boshlash",
  },
];
