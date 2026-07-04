import { Metadata } from "next";
import Connect from "@/components/portfolio/connect";
import CTA from "@/components/portfolio/cta";
import Experience from "@/components/portfolio/experience";
import GitHubContributions from "@/components/portfolio/github-contributions";
import Overview from "@/components/portfolio/overview";
import ProfileHeader from "@/components/portfolio/profile-header";
import Projects from "@/components/portfolio/projects";
import TechStack from "@/components/portfolio/tech-stack";
import { SITE_CONFIG } from "@/config/site";
import { generateWebsiteMetadata } from "@/config/metadata";

export const metadata: Metadata = generateWebsiteMetadata({
  url: "/",
});

export default function Page() {
  
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.author,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/avatar.png`,
    jobTitle: "Full-Stack Developer",
    sameAs: [
      "https://x.com/hloRoshan",
      "https://github.com/roshnn-sahu",
      SITE_CONFIG.url,
    ],
    description: SITE_CONFIG.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div>
        <ProfileHeader />
        <Overview />
        <Projects />
        <Experience />
        <TechStack />
        <GitHubContributions />
        <Connect />
        <CTA />
      </div>
    </>
  );
}
