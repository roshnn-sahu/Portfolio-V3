"use client";
import Link from "next/link";
import CopyButton from "@/components/copy-button";
import { motion } from "motion/react";

export default function Overview() {
  return (
    <section className="font-geist-sans">
      <motion.div>
        <p className="text-muted-foreground">
          I&apos;m a 21yo Full-Stack Developer focused on building clean,
          scalable web products. <br /> <br />
          Currently, I&apos;m building{" "}
          <Link
            href="https://www.boltcreator.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4"
            aria-label="Visit draftlogo"
          >
            BoltCreator
          </Link>{" "}
          &ndash; an AI SaaS for professional thumbnails and social growth. I
          focus on speed, simplicity, and shipping elegant web experiences.{" "}
          <br />
          Previously, I&apos;ve worked with startups and shipped multiple
          projects. Find more of my work on{" "}
          <Link
            href="https://x.com/hloRoshan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
            aria-label="Visit twitter"
          >
            @hloRoshan
          </Link>
          , explore my code on{" "}
          <Link
            href="https://github.com/roshnn-sahu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
            aria-label="Visit github"
          >
            GitHub
          </Link>
          , or reach out via{" "}
          <Link
            href="mailto:hello.roshan004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
            aria-label="Mail to hello.roshan004@gmail.com"
          >
            email
          </Link>
          <CopyButton value="hello.roshan004@gmail.com" className="ml-0.5" />
        </p>
      </motion.div>
    </section>
  );
}
