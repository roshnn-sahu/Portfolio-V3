"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// Original constants - preserved as requested
const PAUSE = {
  left: "M5 5L9 5L9 19L5 19Z",
  right: "M15 5L19 5L19 19L15 19Z",
} as const;

const PLAY = {
  left: "M7 5L13 8.5L13 15.5L7 19Z",
  right: "M13 8.5L19 12L19 12L13 15.5Z",
} as const;

const TRANSITION = {
  type: "spring" as const,
  stiffness: 360,
  damping: 40,
};

interface PlayPauseButtonProps {
  theme?: "light" | "dark";
}

const PlayPauseButton = ({ theme = "light" }: PlayPauseButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const target = isPlaying ? PLAY : PAUSE;

  return (
    <button
      className={cn(
        "glass-button group/btn relative flex h-24 w-24 cursor-pointer items-center justify-center overflow-hidden rounded-full border backdrop-blur-md",
        theme === "light" ? "border-neutral-600/50 text-neutral-600" : "text-white border-white/50"
      )}
      onClick={() => setIsPlaying(!isPlaying)}
      aria-label={isPlaying ? "Play" : "Pause"}
    >
      {/* Glossy highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/btn:opacity-100" />

      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
        strokeLinecap="round"
        className="relative z-10"
      >
        <motion.path
          initial={false}
          animate={{ d: target.left }}
          transition={TRANSITION}
        />
        <motion.path
          initial={false}
          animate={{ d: target.right }}
          transition={TRANSITION}
        />
      </svg>
    </button>
  );
};

export default PlayPauseButton;

export function Demo() {
  return (
    <div className="mesh-gradient flex w-full flex-col items-center justify-center gap-12 overflow-x-hidden p-6 font-sans text-white selection:bg-white/30 md:gap-16 md:p-12">
      {/* Main Grid */}
      <div className="grid w-full max-w-5xl animate-in grid-cols-1 grid-cols-2 gap-8 delay-200 duration-1000 zoom-in-95 fade-in">
        {/* Light Context Card */}
        <div className="group/card relative h-[400px] overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1542349314-b0ceb4d90f2d?auto=format&w=800&q=80"
            alt="Sunny clouds - Billy Huynh"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-brightness-110" />
          <div className="relative flex h-full flex-col items-center justify-center gap-6">
            <span className="text-xs font-bold tracking-[0.3em] text-black/50 uppercase">
              Light Context
            </span>
            <PlayPauseButton theme="light" />
          </div>
        </div>

        {/* Dark Context Card */}
        <div className="group/card relative h-[400px] overflow-hidden rounded-[2rem]">
          <img
            src="https://images.unsplash.com/photo-1687844599821-e0eceea6f6a1?auto=format&w=800&q=80"
            alt="Dark abstract neon - Jatin Gajjar"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative flex h-full flex-col items-center justify-center gap-6">
            <span className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase">
              Dark Context
            </span>
            <PlayPauseButton theme="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
