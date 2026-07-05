export const siteConfig = {
  name: "180PT",
  tagline: "Turning Lives Around",
  description:
    "Personal training, boxing, and strength coaching in Western Sydney. Helping everyday people become stronger, healthier, and more confident.",
  url: "https://www.180pt.com.au",
  email: "hello@180pt.com.au",
  phone: "0450 122 665",
  phoneHref: "tel:0450122665",
  address: "Western Sydney",
};

export const coach = {
  name: "Johnson Huynh",
  firstName: "Johnson",
  title: "Founder | Personal Trainer | Boxing Coach",
  image: "/images/coach/johnson-huynh.jpg",
  imageAlt: "Johnson Huynh, founder and head coach at 180PT",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Trainers", href: "/trainers" },
  { label: "Contact", href: "/contact" },
];

export const features = [
  { label: "Personalised Programs", icon: "target" as const },
  { label: "Professional Coaching", icon: "dumbbell" as const },
  { label: "Real Accountability", icon: "users" as const },
  { label: "Proven Results", icon: "chart" as const },
];

export const services = [
  {
    title: "Personal Training",
    icon: "user" as const,
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
    description: "Train with friends while staying motivated together.",
    items: ["Affordable", "Fun", "High Energy", "Personal Coaching"],
    footer: "Minimum 4 people.",
  },
  {
    title: "Online Coaching",
    icon: "laptop" as const,
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
    title: "Package 1",
    price: "$180",
    detail: "2 x 45 minute sessions per week",
  },
  {
    title: "Package 2",
    price: "$270",
    detail: "3 x 45 minute sessions per week",
  },
  {
    title: "Small Group Training",
    price: "$30",
    detail: "per person — minimum 4 people",
  },
  {
    title: "Online Coaching",
    price: "$80",
    detail: "per session",
  },
];

export const qualifications = [
  "Certificate III & IV in Fitness",
  "Diploma of Community Services",
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
