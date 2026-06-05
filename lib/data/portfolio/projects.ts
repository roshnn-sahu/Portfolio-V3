import { Project } from "@/types/projects";

export const PROJECTS: Project[] = [
  {
    id: "documate-ai",
    title: "DocumateAI – RAG-Based AI Document Chatbot",
    logo: "/images/project-logos/documate.png",
    description:
      "AI-powered document chatbot enabling contextual conversations with PDFs, DOCX files, and notes using Retrieval-Augmented Generation (RAG), semantic search, and vector embeddings.",

    features: [
      "Built contextual AI document Q&A using RAG architecture",
      "Implemented vector embeddings and semantic retrieval pipelines",
      "Designed scalable indexing for fast document understanding",
      "Supported PDF, DOCX, and text-based uploads",
      "Built responsive real-time chat interface with modern UI/UX",
      "Optimized low-latency AI response workflows",
    ],

    github: "https://github.com/roshnn-sahu/Documate-AI",
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
      "AI-powered SaaS platform for generating professional thumbnails and creator-focused social growth assets with optimized generation workflows and scalable media handling.",
    features: [
      "Instantly generates eye-catching thumbnails using advanced AI models.",
      "Specifically optimized for social media growth and high click-through rates.",
      "Clean, minimalist interface designed for a fast and efficient workflow.",
      "Supports customizable templates tailored for different niches and platforms.",
      "Integrated tools for testing and refining thumbnail performance.",
    ],
    github: "https://github.com/roshnn-sahu/ai-thumbnail-generator",
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
      "Premium digital marketplace for music producers and artists to upload, showcase, and sell beats with seamless checkout and creator-focused workflows.",
    features: [
      "Full-stack music marketplace architecture",
      "Secure payment integration using Cashfree",
      "Optimized Redux Toolkit state management",
      "Responsive storefront and creator dashboard",
      "Scalable backend APIs using Express.js and MongoDB",
    ],
    github: "https://github.com/roshnn-sahu/BeatWave",
    link: "https://beat-wave-pink.vercel.app/",
    skills: ["Next.js", "React", "TailwindCSS", "Cashfree", "Motion", "Vite"],
    isExpanded: false,
  },
];
