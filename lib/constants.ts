export const siteConfig = {
  name: "180PT",
  description:
    "Mobile personal training across Western Sydney. Train outdoors or at home — no gym commute, no membership, no crowds. Expert coaching that comes to you.",
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
  { label: "Train Outdoors", icon: "target" as const },
  { label: "We Come To You", icon: "home" as const },
  { label: "No Gym Membership", icon: "dumbbell" as const },
  { label: "Proven Results", icon: "chart" as const },
];

export const aboutFeatures = [
  { label: "Outdoor Training", icon: "target" as const },
  { label: "Real Results", icon: "chart" as const },
  { label: "We Come To You", icon: "home" as const },
  { label: "Flexible Scheduling", icon: "users" as const },
  { label: "A Healthier, Happier You", icon: "flower" as const },
];

export const trustPoints = [
  "Train at your local park, backyard, or home garage — fresh air, no crowded gym floor",
  "We travel to you across Western Sydney — no commute, no parking, no wasted time",
  "No gym membership or lock-in contracts — just focused coaching on your schedule",
  "10+ years of experience helping everyday people build strength, confidence, and lasting habits",
];

export const mobileTrainingCase = {
  eyebrow: "No Gym Required",
  headline: "Built for People Who'd Rather Train",
  highlight: "Outside the Gym",
  intro:
    "If you're tired of fighting for equipment, sitting in traffic, and paying for a membership you barely use — you're not alone. 180PT was built for people who want real results without the gym hassle. We bring professional coaching to the places you already love: your local park, your backyard, or your home.",
  points: [
    {
      icon: "trees" as const,
      title: "Fresh Air, Real Results",
      description:
        "Train outdoors in natural light and open space. No stuffy rooms, no queues, no feeling watched on a crowded gym floor.",
    },
    {
      icon: "home" as const,
      title: "We Come To You",
      description:
        "Your coach travels to your location across Western Sydney. Save the commute, train before work, or fit a session in while the kids are home.",
    },
    {
      icon: "clock" as const,
      title: "Your Time, Your Schedule",
      description:
        "Sessions booked around your life — early mornings, evenings, and weekends. No rushing to beat peak-hour gym crowds.",
    },
    {
      icon: "map" as const,
      title: "Train Where You're Comfortable",
      description:
        "Local parks, home garages, backyards — wherever suits you. Private, focused coaching without the intimidation of a commercial gym.",
    },
  ],
  closer:
    "You don't need a gym to get fit. You need a coach who shows up, keeps you accountable, and builds a program around your life — not the other way around.",
};

export const servicesPage = {
  intro:
    "Pick the program that fits your goals, book a free consultation, and start training at your location across Western Sydney.",
  steps: [
    {
      title: "Choose a program",
      description: "Personal training, boxing, small group, or online — find what suits your goals and lifestyle.",
    },
    {
      title: "Book a free consult",
      description: "Tell us where you're based and what you want to achieve. No pressure, no obligation.",
    },
    {
      title: "Start at your location",
      description: "We come to your park, home, or garage — sessions are 45 minutes and booked around your schedule.",
    },
  ],
  programsHeading: "Find Your Program",
  packagesHeading: "Training Options",
  packagesTagline: "No Lock in Contracts",
  packagesIntro: "",
  galleryHeading: "Real Sessions",
  galleryIntro: "Outdoor and at-home training across Western Sydney.",
};

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
  mobilePoster: "/images/Hero3.jpg",
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

export const serviceImages = {
  personalTraining: {
    src: "/images/services/personal-training.jpg",
    alt: "Client training on outdoor calisthenics equipment during a personal session",
    credit: "Gabin Vallet (@gabinvallet) on Unsplash — qq_wRiGXf7o",
    url: "https://unsplash.com/photos/woman-in-white-long-sleeve-shirt-and-black-pants-sitting-on-red-metal-frame-qq_wRiGXf7o",
  },
  boxing: {
    src: "/images/services/boxing-training.jpg",
    alt: "Athlete training on outdoor calisthenics equipment during a conditioning session",
    credit: "Gabin Vallet (@gabinvallet) on Unsplash — dmQaNlKxc-s",
    url: "https://unsplash.com/photos/man-in-white-t-shirt-and-white-shorts-holding-black-and-white-metal-pole-dmQaNlKxc-s",
  },
  smallGroup: {
    src: "/images/services/small-group-training.jpg",
    alt: "People training together outdoors on a fitness trampoline",
    credit: "Gabin Vallet (@gabinvallet) on Unsplash — JVnLqWGWVzs",
    url: "https://unsplash.com/photos/man-in-black-crew-neck-t-shirt-and-black-shorts-running-on-blue-and-white-trampoline-JVnLqWGWVzs",
  },
  onlineCoaching: {
    src: "/images/services/online-coaching.jpg",
    alt: "Client checking training on their phone during an outdoor workout",
    credit: "Gabin Vallet (@gabinvallet) on Unsplash — XUn7yMZH2yg",
    url: "https://unsplash.com/photos/man-in-black-t-shirt-and-blue-denim-jeans-holding-black-smartphone-XUn7yMZH2yg",
  },
};

export const services = [
  {
    title: "Personal Training",
    icon: "user" as const,
    image: serviceImages.personalTraining.src,
    imageAlt: serviceImages.personalTraining.alt,
    description: "One-on-one coaching built around your goals — weight loss, strength, fitness, or getting back into training.",
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
    image: serviceImages.boxing.src,
    imageAlt: serviceImages.boxing.alt,
    description: "High-energy pad work and conditioning — build cardio, coordination, and confidence at any level.",
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
    image: serviceImages.smallGroup.src,
    imageAlt: serviceImages.smallGroup.alt,
    description: "Train with friends and split the cost — high energy, personal coaching, minimum 3–4 people.",
    items: ["Affordable", "Fun", "High Energy", "Personal Coaching"],
    footer: "Minimum 3–4 people.",
  },
  {
    title: "Online Coaching",
    icon: "laptop" as const,
    image: serviceImages.onlineCoaching.src,
    imageAlt: serviceImages.onlineCoaching.alt,
    description: "Custom programming and weekly check-ins when you need flexibility between face-to-face sessions.",
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
    id: "pay-as-you-go",
    title: "Pay As You Go",
    detail: "Flexible sessions to suit your schedule.",
  },
  {
    id: "7-week-transformation",
    title: "7-Week Transformation Program",
    detail:
      "A complete fitness and accountability program designed to deliver real results.",
  },
  {
    id: "small-group",
    title: "Small Group Training",
    detail:
      "Train with friends, family or colleagues in a fun and motivating environment.",
  },
  {
    id: "online-coaching",
    title: "Online Coaching",
    detail:
      "Custom training plans, nutrition guidance and ongoing support—wherever you are.",
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
