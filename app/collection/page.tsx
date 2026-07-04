import { Metadata } from "next";
import { generateWebsiteMetadata } from "@/config/metadata";
import { SITE_CONFIG } from "@/config/site";
import CollectionContainer from "@/components/collection/collection-container";

export const metadata: Metadata = generateWebsiteMetadata({
  title: "Collection",
  description: "A curated list of my favorite movies, shows, books, and more.",
  keywords: [
    "collection",
    "Roshan collection",
    "movies and shows",
    "books collection",
  ],
  image: "collection/collection.png",
  url: "/collection",
});

export default function CollectionPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Collection — Roshan Sahu",
    description: "A curated list of my favorite movies, shows, books, and more.",
    url: `${SITE_CONFIG.url}/collection`,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="space-y-12 pt-8" aria-labelledby="collection-heading">
        <header className="flex flex-col gap-3">
          <h2 id="collection-heading" className="font-geist-pixel-square text-xl">
            Collection
          </h2>
          <p className="font-geist-sans text-muted-foreground">
            A curated list of my favorite movies, shows, books, and more.
          </p>
        </header>
        <CollectionContainer />
      </section>
    </>
  );
}

