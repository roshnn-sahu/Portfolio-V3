import { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "boltcreator",
    title: "BoltCreator - AI-powered thumbnail generator for social growth",
    logo: "/images/project-logos/boltcreator.jpg",
    description:
      "BoltCreator is an AI SaaS designed to help creators generate professional thumbnails in seconds, focusing on speed, simplicity, and driving social engagement.",
    features: [
      "Instantly generates eye-catching thumbnails using advanced AI models.",
      "Specifically optimized for social media growth and high click-through rates.",
      "Clean, minimalist interface designed for a fast and efficient workflow.",
      "Supports customizable templates tailored for different niches and platforms.",
      "Integrated tools for testing and refining thumbnail performance.",
    ],
    link: "https://www.boltcreator.online/",
    skills: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "AI Integration",
      "shadcn/ui",
      "Razorpay",
    ],
    isExpanded: true,
  },
  {
    id: "beatwave",
    title: "BeatWave - Premium Beats Marketplace for Producers & Artists",
    logo: "/images/project-logos/beatwave.png",
    description:
      "BeatWave is a high-performance marketplace platform for music producers to showcase and sell beats, and for artists to securely purchase licenses for their next tracks.",
    features: [
      "Browse a vast library of high-quality beats across genres like Trap, Drill, R&B, and Lo-Fi.",
      "Secure licensing system with multiple tiers including Free For Profit, Non-Exclusive, and Exclusive.",
      "Integrated secure checkout powered by Razorpay for seamless transactions in INR.",
      "User-friendly artist and producer dashboards for managing beats, sales, and licenses.",
      "Responsive design optimized for both mobile browsing and desktop production workflows.",
    ],
    link: "https://beat-wave-pink.vercel.app/",
    skills: ["Next.js", "React", "TailwindCSS", "Cashfree", "Motion", "Vite"],
    isExpanded: false,
  },

];
