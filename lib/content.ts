// All copy lives here, once per language. Replace the placeholders.
import type { Locale } from "./i18n";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourdomain.com";

const EMAIL = "hello@yourdomain.com";
const PHONE = "+00 000 000 0000";

const en = {
  meta: {
    title: "Premium Hookah Charcoal | Your Brand",
    description:
      "Premium coconut shell hookah charcoal: long, even burn, low ash and no chemical taste. Wholesale and retail.",
    keywords: ["hookah charcoal", "coconut charcoal", "shisha coals", "natural charcoal"],
  },
  brand: {
    name: "Your Brand",
    product: "Premium Hookah Charcoal",
    tagline: "Clean heat. Long sessions. No compromise.",
    intro:
      "Natural coconut shell charcoal pressed for steady heat, low ash and a taste-neutral burn, so the flavor of your shisha stays front and center.",
    ctaLabel: "Get in touch",
    ctaSecondary: "See specifications",
    imageAlt: "Glowing hookah charcoal cubes",
  },
  ui: {
    switchLabel: "العربية",
    switchAria: "التبديل إلى اللغة العربية",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main",
    specsTitle: "Specifications",
    email: "Email",
    phone: "Phone",
    hours: "Hours",
    sendEmail: "Send an email",
    viewOnMap: "View on map →",
    rights: "All rights reserved.",
  },
  nav: [
    { href: "#overview", label: "Overview" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ],
  sections: {
    overview: { eyebrow: "Product overview", title: "Made for a better session" },
    features: { eyebrow: "Features and specifications", title: "Built for consistent performance" },
    about: { eyebrow: "About the company", title: "About the company" },
    contact: { eyebrow: "Contact and locations", title: "Let's talk" },
  },
  overview: {
    paragraphs: [
      "Our charcoal is produced from carbonized coconut shells, pressed into uniform cubes and dried to a consistent density. It lights quickly, holds an even temperature and burns down to a fine white ash.",
      "It is designed for hookah lounges and home users who want predictable heat without the chemical smell or taste of quick-light charcoal.",
    ],
    highlights: [
      { value: "60–90", unit: "min", label: "Average burn time" },
      { value: "100", unit: "%", label: "Natural coconut shell" },
      { value: "0", unit: "", label: "Chemical additives" },
    ],
  },
  features: [
    { title: "Long, even burn", text: "Dense pressing gives a steady temperature for the full session." },
    { title: "Low ash", text: "Burns to a fine, light ash that stays out of the way." },
    { title: "Taste neutral", text: "No smoke, odor or aftertaste to interfere with the flavor." },
    { title: "Uniform cubes", text: "Consistent size and weight, so every coal behaves the same." },
    { title: "Fast lighting", text: "Reaches working temperature quickly on any heat source." },
    { title: "Sustainable source", text: "Made from a by-product of coconut harvesting." },
  ],
  specs: [
    { label: "Material", value: "Natural coconut shell" },
    { label: "Shape", value: "Cube" },
    { label: "Size", value: "25 × 25 × 25 mm" },
    { label: "Burn time", value: "60–90 minutes" },
    { label: "Ash content", value: "Low" },
    { label: "Packaging", value: "1 kg and 3 kg boxes" },
    { label: "Origin", value: "Add country of origin" },
  ],
  about: {
    paragraphs: [
      "Write a short company introduction here: who you are, when you started and what you stand for.",
      "Add a few lines on your background, your production process and why customers trust your product.",
    ],
    facts: [
      { label: "Founded", value: "20XX" },
      { label: "Based in", value: "City, Country" },
      { label: "Markets", value: "Retail and wholesale" },
    ],
  },
  contact: {
    email: EMAIL,
    phone: PHONE,
    hours: "Mon–Fri, 9:00–18:00",
    locations: [
      {
        name: "Head office",
        address: "123 Example Street, City, Country",
        mapUrl: "https://maps.google.com/?q=123+Example+Street",
      },
      {
        name: "Warehouse",
        address: "45 Industrial Road, City, Country",
        mapUrl: "https://maps.google.com/?q=45+Industrial+Road",
      },
    ],
    company: { legalName: "Your Company Ltd.", registration: "Reg. No. 000000" },
  },
};

export type Content = typeof en;

const ar: Content = {
  meta: {
    title: "فحم أرجيلة فاخر | علامتك التجارية",
    description:
      "فحم أرجيلة فاخر من قشور جوز الهند: احتراق طويل ومتوازن، رماد قليل وبلا طعم كيميائي. للبيع بالجملة والتجزئة.",
    keywords: ["فحم أرجيلة", "فحم جوز الهند", "فحم شيشة", "فحم طبيعي"],
  },
  brand: {
    name: "علامتك التجارية",
    product: "فحم أرجيلة فاخر",
    tagline: "حرارة نظيفة. جلسات أطول. بلا تنازلات.",
    intro:
      "فحم طبيعي من قشور جوز الهند، مضغوط ليمنحك حرارة ثابتة ورماداً قليلاً واحتراقاً بلا طعم، فتبقى نكهة معسّلك هي الأساس.",
    ctaLabel: "تواصل معنا",
    ctaSecondary: "عرض المواصفات",
    imageAlt: "مكعبات فحم أرجيلة متوهجة",
  },
  ui: {
    switchLabel: "English",
    switchAria: "Switch to English",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    mainNav: "القائمة الرئيسية",
    specsTitle: "المواصفات",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    hours: "ساعات العمل",
    sendEmail: "أرسل بريداً إلكترونياً",
    viewOnMap: "عرض على الخريطة ←",
    rights: "جميع الحقوق محفوظة.",
  },
  nav: [
    { href: "#overview", label: "نظرة عامة" },
    { href: "#features", label: "المميزات" },
    { href: "#about", label: "من نحن" },
    { href: "#contact", label: "تواصل معنا" },
  ],
  sections: {
    overview: { eyebrow: "نظرة عامة على المنتج", title: "صُنع لجلسة أفضل" },
    features: { eyebrow: "المميزات والمواصفات", title: "مصمم لأداء ثابت" },
    about: { eyebrow: "عن الشركة", title: "من نحن" },
    contact: { eyebrow: "التواصل والمواقع", title: "تحدث معنا" },
  },
  overview: {
    paragraphs: [
      "يُصنع فحمنا من قشور جوز الهند المكربنة، ويُضغط على شكل مكعبات موحدة ويُجفف إلى كثافة ثابتة. يشتعل بسرعة، ويحافظ على حرارة متوازنة، ويتحول إلى رماد أبيض ناعم.",
      "صُمم لمقاهي الأرجيلة والمستخدمين المنزليين الذين يريدون حرارة يمكن الاعتماد عليها دون رائحة أو طعم كيميائي كما في الفحم سريع الاشتعال.",
    ],
    highlights: [
      { value: "60–90", unit: "دقيقة", label: "متوسط مدة الاحتراق" },
      { value: "100", unit: "%", label: "قشور جوز الهند الطبيعية" },
      { value: "0", unit: "", label: "إضافات كيميائية" },
    ],
  },
  features: [
    { title: "احتراق طويل ومتوازن", text: "الضغط العالي يمنح حرارة ثابتة طوال الجلسة." },
    { title: "رماد قليل", text: "يتحول إلى رماد ناعم وخفيف لا يزعجك." },
    { title: "بلا طعم أو رائحة", text: "لا دخان ولا رائحة ولا طعم يؤثر على النكهة." },
    { title: "مكعبات موحدة", text: "حجم ووزن متطابقان، فيعطي كل مكعب الأداء نفسه." },
    { title: "اشتعال سريع", text: "يصل إلى درجة الحرارة المناسبة بسرعة على أي مصدر حرارة." },
    { title: "مصدر مستدام", text: "يُصنع من مخلفات حصاد جوز الهند." },
  ],
  specs: [
    { label: "المادة", value: "قشور جوز الهند الطبيعية" },
    { label: "الشكل", value: "مكعب" },
    { label: "الحجم", value: "25 × 25 × 25 مم" },
    { label: "مدة الاحتراق", value: "60–90 دقيقة" },
    { label: "نسبة الرماد", value: "منخفضة" },
    { label: "التعبئة", value: "علب 1 كجم و3 كجم" },
    { label: "بلد المنشأ", value: "أضف بلد المنشأ" },
  ],
  about: {
    paragraphs: [
      "اكتب هنا نبذة قصيرة عن شركتك: من أنتم، ومتى بدأتم، وما الذي تؤمنون به.",
      "أضف بضعة أسطر عن خلفيتكم وعملية الإنتاج وسبب ثقة العملاء بمنتجكم.",
    ],
    facts: [
      { label: "تأسست", value: "20XX" },
      { label: "المقر", value: "المدينة، الدولة" },
      { label: "الأسواق", value: "تجزئة وجملة" },
    ],
  },
  contact: {
    email: EMAIL,
    phone: PHONE,
    hours: "الاثنين–الجمعة، 9:00 ص – 6:00 م",
    locations: [
      {
        name: "المكتب الرئيسي",
        address: "123 شارع المثال، المدينة، الدولة",
        mapUrl: "https://maps.google.com/?q=123+Example+Street",
      },
      {
        name: "المستودع",
        address: "45 الطريق الصناعي، المدينة، الدولة",
        mapUrl: "https://maps.google.com/?q=45+Industrial+Road",
      },
    ],
    company: { legalName: "شركتك المحدودة", registration: "رقم السجل 000000" },
  },
};

export const content: Record<Locale, Content> = { en, ar };
