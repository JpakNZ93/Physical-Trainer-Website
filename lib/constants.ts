export const siteConfig = {
  name: "180PT",
  description:
    "Private personal training in Western Sydney. Helping everyday people become stronger, healthier, and more confident.",
  url: "https://www.180pt.com.au",
  email: "hello@180pt.com.au",
  phone: "0450 122 665",
  phoneHref: "tel:0450122665",
};

export const coach = {
  name: "Johnson Huynh",
  firstName: "Johnson",
  title: "Founder | Personal Trainer | Boxing Coach",
  image: "/images/JohnsonCoach.jpg",
  imageAlt: "Johnson Huynh, founder and head coach at 180PT",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const features = [
  { label: "Personalised Programs", icon: "target" as const },
  { label: "Professional Coaching", icon: "dumbbell" as const },
  { label: "Real Accountability", icon: "users" as const },
  { label: "Proven Results", icon: "chart" as const },
];

export const aboutFeatures = [
  { label: "Personalised Training", icon: "target" as const },
  { label: "Real Results", icon: "chart" as const },
  { label: "We Come To You", icon: "home" as const },
  { label: "Ongoing Support", icon: "users" as const },
  { label: "A Healthier, Happier You", icon: "flower" as const },
];

export const homeServices = [
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored to your goals.",
  },
  {
    title: "Boxing Training",
    description: "Build fitness, confidence, and technique.",
  },
  {
    title: "Small Group Training",
    description: "Train with friends — motivated and affordable.",
  },
  {
    title: "Online Coaching",
    description: "Custom programs and support from anywhere.",
  },
];

export const heroMedia = {
  video: "/videos/Park_Boxing.mp4",
  poster: "/images/hero-frames/hero-frame-4.jpg",
  mobilePoster: "/images/hero-mobile.jpg",
};

export const pageImages = {
  aboutHero: "/images/Group_Img.jpeg",
  servicesHero: "/images/Hero3.jpg",
  contactHero: "/images/Group_Img.jpeg",
  homeMotivation: "/images/Group_Img.jpeg",
  ctaBackground: "/images/hero-frames/hero-frame-5.jpg",
};

export const trainingGallery = [
  {
    id: "home-garage",
    title: "Home Garage",
    video: "/videos/Boy_Boxing.mp4",
    poster: "/images/hero-frames/hero-frame-2.jpg",
  },
  {
    id: "local-park",
    title: "Local Park",
    video: "/videos/Girl_Boxing.mp4",
    poster: "/images/hero-frames/hero-frame-2.jpg",
  },
];

export const services = [
  {
    title: "Personal Training",
    icon: "user" as const,
    image: "/images/hero-frames/hero-frame-1.jpg",
    imageAlt: "One-on-one personal training at 180PT",
    description: "One-on-one coaching tailored specifically to your goals.",
    subtitle: "Perfect for:",
    items: [
      "Weight Loss",
      "Muscle Building",
      "Strength Training",
      "Injury Prevention",
      "Fitness Improvement",
    ],
  },
  {
    title: "Boxing Training",
    icon: "boxing" as const,
    image: "/images/hero-frames/hero-frame-2.jpg",
    imageAlt: "Boxing training session at 180PT",
    description: "Improve your:",
    items: [
      "Fitness",
      "Coordination",
      "Confidence",
      "Technique",
      "Conditioning",
    ],
    footer: "Suitable for beginners through to advanced clients.",
  },
  {
    title: "Small Group Training",
    icon: "users" as const,
    image: "/images/Group_Img.jpeg",
    imageAlt: "Small group training at 180PT",
    description: "Train with friends while staying motivated together.",
    items: ["Affordable", "Fun", "High Energy", "Personal Coaching"],
    footer: "Minimum 3–4 people.",
  },
  {
    title: "Online Coaching",
    icon: "laptop" as const,
    image: "/images/hero-frames/hero-frame-3.jpg",
    imageAlt: "Online coaching support from 180PT",
    description: "Train anywhere with personalised programs and ongoing support.",
    subtitle: "Includes:",
    items: [
      "Custom Training Program",
      "Weekly Check-ins",
      "Progress Tracking",
      "Nutrition Guidance",
    ],
  },
];

export const packages = [
  {
    id: "package-1",
    title: "Twice Weekly",
    detail: "2 × 45-minute personal training sessions per week",
  },
  {
    id: "package-2",
    title: "Three Times Weekly",
    detail: "3 × 45-minute personal training sessions per week",
  },
  {
    id: "small-group",
    title: "Small Group",
    detail: "Per person — minimum 4 people, coached together",
  },
  {
    id: "online-coaching",
    title: "Online Coaching",
    detail: "Custom program and weekly check-ins — train from anywhere",
  },
];

export const qualifications = [
  "Certificate III & IV in Fitness",
  "Strength and Conditioning",
  "Boxing for Fitness",
  "Working With Children Check",
  "First Aid & CPR",
  "10+ Years Coaching Experience",
];

export const openingHours = [
  { days: "Monday – Friday", hours: "5:00am – 8:00pm" },
  { days: "Saturday", hours: "7:00am – 12:00pm" },
  { days: "Sunday", hours: "Closed" },
];
