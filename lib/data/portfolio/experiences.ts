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
        title: "Full Stack MERN Developer",
        employmentPeriod: {
          start: "July 2025",
        },
        employmentType: "",
        description: [
          "Built and optimized the frontend for finusmart.com, a personalized protection marketplace providing tailored insurance and wellness solutions.",
          "Developed a high-performance e-commerce platform for meatwaala.com, focusing on a seamless product catalog and doorstep delivery experience for fresh meat.",
          "Implemented sports management and school-ready sports modules for tritonsportsline.in, facilitating athlete development and structured sports programming.",
          "Designed responsive user interfaces and interactive dashboards using Motion and Next.js, ensuring accessibility across E-commerce, Fintech, and Sports sectors.",
          "Collaborated on full-stack features using Express and MongoDB to handle real-time data and status monitoring for multiple client projects.",
        ],
        skills: [
          "Next.js",
          "TypeScript",
          "Motion",
          "Node.js",
          "Express.js",
          "MongoDB",
          "AWS",
          "AI Integration",
          "Vercel"
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
];
