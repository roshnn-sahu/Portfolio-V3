"use client";
import Link from "next/link";
import { CopyButton } from "@/components/copy-button";
import { motion } from "motion/react";

export default function Overview() {
  return (
    <section className="font-geist-sans">
      <motion.div>
        <p className="text-muted-foreground">
          Full-stack engineer building scalable apps and clean product
          experiences.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          <li>
            Currently building{" "}
            <Link
              href="https://www.boltcreator.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
              aria-label="Visit draftlogo"
            >
              DocumateAI
            </Link>
            , a RAG-based AI chatbot for PDFs and documents.
          </li>
          <li>
            Focused on modern architecture, performance, and product clarity.
          </li>
          <li>
            Connect on{" "}
            <Link
              href="https://x.com/hloRoshan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:underline"
              aria-label="Visit twitter"
            >
              @hloRoshan
            </Link>
            ,{" "}
            <Link
              href="https://github.com/roshnn-sahu"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:underline"
              aria-label="Visit github"
            >
              GitHub 
            </Link>
             {" "}or email me at{" "}
            <span>
              <Link
                href="mailto:hello.roshan004@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-4 hover:underline"
                aria-label="Mail to hello.roshan004@gmail.com"
              >
                Email
              </Link>
              <CopyButton
                value="hello.roshan004@gmail.com"
                className="ml-0.5"
              />
            </span>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
