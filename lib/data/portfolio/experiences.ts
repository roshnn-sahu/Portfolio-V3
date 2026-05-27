import { Experience } from "@/types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "expert-it-services",
    companyName: "Expert It Services",
    companyLogo: "/images/company-logos/expert-it-services.png",
    companyWebsite: "https://www.expertitservices.in/",
    positions: [
      {
        id: "1",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "July 2025",
        },
        employmentType: "",
        description: [
          "Delivered production-grade web applications across e-commerce, fintech, sports, and service industries using modern MERN stack technologies.",
          "Built and optimized the frontend architecture for finusmart.com, improving responsiveness, accessibility, and SEO performance for a personalized insurance and wellness platform.",
          "Developed a scalable e-commerce experience for meatwaala.com with optimized product catalog management, responsive UI, and seamless customer ordering workflows.",
          "Implemented sports management and school-ready athletic modules for tritonsportsline.in, enabling structured athlete development and efficient program management.",
          "Designed modern, responsive user interfaces and interactive dashboards using Next.js, TypeScript, Tailwind CSS, and Motion to deliver smooth cross-device experiences.",
          "Collaborated on full-stack feature development using Express.js and MongoDB, handling real-time data processing, API integrations, and application performance optimization.",
          "Participated in deployment workflows using AWS and Vercel, ensuring reliable production delivery and scalable hosting infrastructure.",
        ],
        skills: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "AWS",
          "Vercel",
          "Motion",
          "Tailwind CSS",
          "REST APIs",
          "AI Integration",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];
