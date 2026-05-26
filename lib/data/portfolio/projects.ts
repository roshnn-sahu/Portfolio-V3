import { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "documate-ai",
    title: "DocumateAI – RAG-Based AI Document Chatbot",
    logo: "/images/project-logos/documate.png",
    description:
      "DocumateAI is an AI-powered document chatbot that enables users to upload PDFs, DOCX files, and notes, then interact with them through contextual question-answering using Retrieval-Augmented Generation (RAG) and semantic search.",

    features: [
      "Built an AI-powered document chatbot using RAG architecture for contextual Q&A from uploaded documents.",

      "Implemented vector embeddings and semantic search to retrieve highly relevant document context before generating AI responses.",

      "Designed scalable document indexing and retrieval pipelines for fast and accurate document understanding.",

      "Supports multiple document formats including PDFs, DOCX files, and text notes.",

      "Built a clean and responsive chat-based interface for seamless real-time interaction with uploaded documents.",

      "Focused on performance optimization for low-latency AI responses and efficient document processing.",
    ],

    link: "https://your-documate-live-link.com",

    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RAG Architecture",
      "Vector Embeddings",
      "Semantic Search",
      "AI Integration",
      "File Upload Handling",
      "shadcn/ui",
    ],

    isExpanded: true,
  },
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
      "Express.js",
      "MongoDB",
      "Clerk Auth",
    ],
    isExpanded: false,
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
