"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CTA() {
  return (
    <section
      id="cta"
      className="mt-20 mb-5 scroll-mt-20 space-y-5"
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col gap-5 rounded-2xl border p-6 transition-colors hover:bg-muted/10">
        <div className="flex flex-col gap-2">
          <h2 className="font-geist-pixel-square text-2xl tracking-tight sm:text-3xl">
            Let&apos;s talk
          </h2>
          <p className="font-geist-sans text-sm text-muted-foreground sm:text-base">
            What&apos;s the best way to start? <br /> A quick call to understand
            your idea and see if we click.
          </p>
        </div>
        <div className="flex">
          {/* <Button
            variant="outline"
            className="w-fit cursor-pointer font-geist-sans transition-colors active:scale-98"
          >
            Send me a message
          </Button> */}
          <Link
            href="https://cal.com/roshan-sahu/30min"
            target="_blank"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-fit cursor-pointer bg-foreground font-geist-sans transition-colors hover:bg-foreground/90! active:scale-98"
            )}
          >
            Book a call
          </Link>
        </div>
      </div>
    </section>
  );
}

