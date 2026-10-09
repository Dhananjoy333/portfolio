export interface Project {
  id: string;
  title: string;
  year: string;
  image: string;
  techStack: {
    name: string;
    icon: string;
  }[];
  description: string;
  liveUrl: string;
  githubUrl: string;
}

const IMAGEKIT_URL = process.env.NEXT_PUBLIC_IMAGEKIT_URL;

export const projects: Project[] = [
  {
    id: "go-cart",
    title: "Go Cart",
    year: "2026",
    image: `${IMAGEKIT_URL}/img/goCart.png`,

    techStack: [
      { name: "Next.js", icon: `${IMAGEKIT_URL}/icons/nextjs.svg` },
      { name: "Tailwind", icon: `${IMAGEKIT_URL}/icons/tailwind.svg` },
      { name: "NeonDB", icon: `${IMAGEKIT_URL}/icons/neon.svg` },
      { name: "Clerk", icon: `${IMAGEKIT_URL}/icons/clerk.svg` },
      { name: "Inngest", icon: `${IMAGEKIT_URL}/icons/inngest.svg` },
      { name: "Prisma", icon: `${IMAGEKIT_URL}/icons/prisma.svg` },
      { name: "Redux Toolkit", icon: `${IMAGEKIT_URL}/icons/redux.svg` },
      { name: "Stripe", icon: `${IMAGEKIT_URL}/icons/stripe.svg` },
      { name: "Vercel", icon: `${IMAGEKIT_URL}/icons/vercel.svg` },
    ],

    description:
      "Multi-vendor e-commerce website with a customer-facing storefront, vendor dashboards, and an admin panel.",

    liveUrl: "https://gocart-seven-gold.vercel.app/",
    githubUrl: "https://github.com/Dhananjoy333/gocart",
  },

  {
    id: "world-quiz",
    title: "World Quiz",
    year: "2025",
    image: `${IMAGEKIT_URL}/img/worldQuiz.png`,

    techStack: [
      { name: "Next.js", icon: `${IMAGEKIT_URL}/icons/nextjs.svg` },
      { name: "Tailwind", icon: `${IMAGEKIT_URL}/icons/tailwind.svg` },
      { name: "Neon", icon: `${IMAGEKIT_URL}/icons/neon.svg` },
      { name: "Clerk", icon: `${IMAGEKIT_URL}/icons/clerk.svg` },
      { name: "Zustand", icon: `${IMAGEKIT_URL}/icons/zustand.jpg` },
      { name: "Vercel", icon: `${IMAGEKIT_URL}/icons/vercel.svg` },
    ],

    description:
      "A quiz game with multiple game modes, a global leaderboard, Clerk authentication, and personal high-score tracking.",

    liveUrl: "https://world-quiz-nu.vercel.app/",
    githubUrl: "https://github.com/Dhananjoy333/world_quiz",
  },

  {
    id: "byte_battle",
    title: "Byte Battle",
    year: "2026",
    image: `${IMAGEKIT_URL}/img/horizon.png`,

    techStack: [
      { name: "Next.js", icon: `${IMAGEKIT_URL}/icons/nextjs.svg` },
      { name: "Tailwind", icon: `${IMAGEKIT_URL}/icons/tailwind.svg` },
      { name: "GSAP", icon: `${IMAGEKIT_URL}/icons/GSAPIcon.svg` },
      { name: "Zustand", icon: `${IMAGEKIT_URL}/icons/zustand.jpg` },
      { name: "Vercel", icon: `${IMAGEKIT_URL}/icons/vercel.svg` },
    ],

    description:
      "Byte Battle is a competitive coding game where players answer programming challenges and win battles. It has MCQs, DSA challenges, and bug-fixing modes with strategic combat and territory-based gameplay.",

    liveUrl: "https://horizon-five-wine.vercel.app/",
    githubUrl: "https://github.com/Dhananjoy333/Horizon",
  },

  {
    id: "code-box",
    title: "Code Box",
    year: "2026",
    image: `${IMAGEKIT_URL}/img/codebox.png`,

    techStack: [
      { name: "Next.js", icon: `${IMAGEKIT_URL}/icons/nextjs.svg` },
      { name: "Tailwind", icon: `${IMAGEKIT_URL}/icons/tailwind.svg` },
      { name: "Neon", icon: `${IMAGEKIT_URL}/icons/neon.svg` },
      { name: "Drizzle", icon: `${IMAGEKIT_URL}/icons/drizzle.webp` },
      { name: "Shadcn", icon: `${IMAGEKIT_URL}/icons/shadcn.webp` },
      { name: "Sandpack", icon: `${IMAGEKIT_URL}/icons/sandpack.jpg` },
      { name: "Clerk", icon: `${IMAGEKIT_URL}/icons/clerk.svg` },
      { name: "Stripe", icon: `${IMAGEKIT_URL}/icons/stripe.svg` },
      { name: "Vercel", icon: `${IMAGEKIT_URL}/icons/vercel.svg` },
    ],

    description:
      "A modern e-learning platform with multiple courses, interactive coding exercises powered by Sandpack, progress tracking, authentication, and subscriptions.",

    liveUrl: "https://code-box-sooty.vercel.app/",
    githubUrl: "https://github.com/Dhananjoy333/CodeBox",
  },
];
