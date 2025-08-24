export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  logo: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "We've tried many form builders over the years. Fillout is in a league of its own. It's more robust, more flexible and saves our county time and money.",
    name: "Ravi K. Udeshi",
    title: "Election Manager",
    company: "Fairfax County",
    avatar: "/professional-man-glasses.png",
    logo: "/government-seal-badge.png",
  },
  {
    id: 2,
    quote:
      "Fillout has made data intake incredibly simple for our teams. Every form matches our brand and we save time with custom workflows and logic. It's the best form tool, hands down.",
    name: "Michael Villanave",
    title: "Head of Internal Communication and Events",
    company: "Domino's Pizza",
    avatar: "/professional-man-smiling.png",
    logo: "/dominos-pizza-logo-red-blue.png",
  },
  {
    id: 3,
    quote:
      "Fillout has been a game changer for the Bombas Giving Program. Even our external partners comment on how seamless the experience is.",
    name: "Melina Morris",
    title: "Sr Giving Relationships Manager",
    company: "Bombas",
    avatar: "/professional-woman-dark-hair.png",
    logo: "/bombas-socks-logo-colorful.png",
  },
  {
    id: 4,
    quote:
      "The automation features in Fillout have transformed our workflow. What used to take hours now happens automatically, and our team can focus on what really matters.",
    name: "Sarah Chen",
    title: "Operations Director",
    company: "TechFlow Solutions",
    avatar: "/professional-asian-woman.png",
    logo: "/modern-blue-tech-logo.png",
  },
  {
    id: 5,
    quote:
      "Integration with our existing tools was seamless. Fillout's API documentation is excellent and their support team is incredibly responsive.",
    name: "James Rodriguez",
    title: "Lead Developer",
    company: "InnovateLab",
    avatar: "/professional-hispanic-man-beard.png",
    logo: "/placeholder-rc5oh.png",
  },
  {
    id: 6,
    quote:
      "Our conversion rates improved by 40% after switching to Fillout. The user experience is so much smoother than our previous solution.",
    name: "Emily Watson",
    title: "Marketing Manager",
    company: "GrowthCorp",
    avatar: "/professional-blonde-woman.png",
    logo: "/growth-logo-green-arrow.png",
  },
];
