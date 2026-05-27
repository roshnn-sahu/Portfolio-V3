"use client";
import Link from "next/link";
import CopyButton from "@/components/copy-button";
import { motion } from "motion/react";

export default function Overview() {
  return (
    <section className="font-geist-sans">
      <motion.div>
        <p className="text-muted-foreground">
          I build scalable web applications, AI-powered SaaS products, and
          modern digital experiences focused on performance, usability, and
          clean architecture. <br /> <br />
          Currently building{" "}
          <Link
            href="https://www.boltcreator.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4"
            aria-label="Visit draftlogo"
          >
            DocumateAI
          </Link>{" "}
          &ndash; a RAG-based AI document chatbot enabling contextual
          conversations with PDFs and documents using semantic search and vector
          embeddings. <br /><br />
          Over the past 1.5+ years, I’ve worked on production-grade products
          across AI SaaS, e-commerce, finance, and sports industries, focusing
          on scalable architecture, performance, and modern user experiences.{" "}
          <br /><br />
          Find more of my work on{" "}
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
