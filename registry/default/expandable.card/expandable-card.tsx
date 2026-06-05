"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

 interface ExpandableCardItem {
  description: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
}

interface ExpandableCardProps {
  cards?: ExpandableCardItem[];
  className?: string;
}

const DEFAULT_CARDS: ExpandableCardItem[] = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: `${baseUrl}/components`,
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: `${baseUrl}/components`,
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Play",
    ctaLink: `${baseUrl}/components`,
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br /> Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: `${baseUrl}/components`,
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
];

const ExpandableCard = ({
  cards = DEFAULT_CARDS,
  className,
}: ExpandableCardProps) => {
  const [openCard, setOpenCard] = useState<ExpandableCardItem | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenCard(null);
      }
    }

    if (openCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openCard]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenCard(null);
      }
    };

    if (openCard) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCard]);

  return (
    <>
      <div
        className={cn(
          "relative mx-auto min-h-screen w-full max-w-xl px-10 py-30",
          className
        )}
      >
        {openCard && (
          <div
            onClick={() => setOpenCard(null)}
            className="fixed inset-0 z-10 h-full w-full bg-black/30"
          />
        )}
        {openCard && (
          <motion.div
            ref={ref}
            layoutId={`card-${openCard.title}`}
            className="fixed top-24 z-20 mx-auto flex h-full w-full max-w-[400px] flex-col overflow-y-auto bg-white sm:rounded-3xl md:h-fit dark:bg-neutral-900"
          >
            <div className="flex flex-col">
              <motion.img
                layoutId={`card-image-${openCard.title}`}
                width={200}
                height={200}
                src={openCard.src}
                alt={openCard.title}
                className="h-80 w-full object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg lg:h-80"
              />
              <div className="flex items-center justify-between p-4">
                <div className="flex flex-col">
                  <motion.span
                    layoutId={`card-title-${openCard.title}`}
                    className="text-sm"
                  >
                    {openCard.title}
                  </motion.span>
                  <motion.span
                    layoutId={`card-description-${openCard.title}`}
                    className="text-xs text-neutral-400"
                  >
                    {openCard.description}
                  </motion.span>
                </div>
                <motion.span
                  layoutId={`card-cta-${openCard.title}`}
                  className="rounded-full bg-green-500 px-3 py-1 text-xs transition-colors duration-150"
                >
                  Play
                </motion.span>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden px-4 pt-2 pb-3 text-xs text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)]"
            >
              {openCard.content()}
            </motion.p>
          </motion.div>
        )}

        <div className="relative w-full space-y-2">
          {cards?.map((card, index) => (
            <motion.button
              layoutId={`card-${card.title}`}
              key={card.title}
              className="flex w-full items-center justify-between rounded-2xl border bg-card p-3 text-left transition-colors hover:bg-accent"
              onClick={() => setOpenCard(card)}
            >
              <div className="flex items-center gap-3">
                <motion.img
                  layoutId={`card-image-${card.title}`}
                  src={card.src}
                  alt=""
                  className="h-12 w-12 rounded-md"
                />
                <div className="flex flex-col items-start justify-center">
                  <motion.span
                    layoutId={`card-title-${card.title}`}
                    className="text-sm"
                  >
                    {card.title}
                  </motion.span>
                  <motion.span
                    layoutId={`card-description-${card.title}`}
                    className="text-xs text-neutral-400"
                  >
                    {card.description}
                  </motion.span>
                </div>
              </div>
              <motion.span
                layoutId={`card-cta-${card.title}`}
                className="rounded-full bg-white px-3 py-1 text-xs text-black transition-colors duration-150 hover:bg-green-500 hover:text-white"
              >
                Play
              </motion.span>
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExpandableCard;

export type {
  ExpandableCardProps,
  ExpandableCardItem,
};

