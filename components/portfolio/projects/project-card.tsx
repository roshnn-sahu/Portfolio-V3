"use client";

import * as React from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Github01Icon,
  GithubIcon,
  LinkCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Project } from "@/types/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = React.useState(project.isExpanded ?? false);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${project.title}`}
      className="group/post hover:bg-accent-muted/80 relative flex h-full flex-col border-2 border-dashed transition-all hover:border-accent-foreground/20"
    >
      <article
        className="font-geist-sans"
        itemScope
        itemType="https://schema.org/SoftwareApplication"
      >
        <div className="absolute -top-px -left-px h-2 w-2 border-t border-l border-foreground/90" />
        <div className="absolute -top-px -right-px h-2 w-2 border-t border-r border-foreground/90" />
        <div className="absolute -right-px -bottom-px h-2 w-2 border-r border-b border-foreground/90" />
        <div className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-foreground/90" />
        <div className="relative p-2 select-none">
          {project.coverImage ? (
            <Image
              className="aspect-1200/630 rounded-xs grayscale transition-[filter] duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] group-hover/post:grayscale-0"
              src={project.coverImage}
              alt={`${project.title} cover`}
              width={1200}
              height={630}
              quality={100}
              loading="lazy"
            />
          ) : (
            <h4 className="aspect-1200/630 text-center">{project.title}</h4>
          )}
        </div>
        <div className="flex flex-col gap-2 px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="shrink-0 select-none">
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="size-6 rounded-lg border grayscale transition-[filter] duration-300 ease-[cubic-bezier(0.42,0,0.58,1)] group-hover/post:grayscale-0"
                itemProp="image"
              />
            </div>
            <div className="flex w-full items-center justify-between gap-2">
              <h3
                className="truncate font-geist-sans text-md font-medium text-foreground"
                itemProp="name"
              >
                {project.title}
              </h3>
              {project.github && (
                <div className="shrink-0">
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <a
                          className="relative flex size-6 shrink-0 items-center justify-center text-foreground transition-colors after:absolute after:-inset-2"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`Open ${project.title} project link`}
                          itemProp="url"
                        >
                          <Icons.github className="size-4" />
                          <span className="sr-only">Open Github Repo</span>
                        </a>
                      }
                    />
                    <TooltipContent className="font-geist-sans">
                      <p>Open Github Repo</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              )}
            </div>
          </div>
          <p
            className="font-geist-mono text-md font-light text-muted-foreground"
            itemProp="description"
          >
            {project.description}
          </p>

          {project.skills && project.skills.length > 0 && (
            <div>
              <h4 className="sr-only">Technologies and Skills</h4>
              <ul
                className="flex flex-wrap gap-2"
                aria-label="Technologies and skills used"
              >
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className={cn(
                      "inline-flex items-center rounded-sm px-2 py-0.5 font-geist-mono text-[10px]",
                      "border bg-muted text-muted-foreground shadow-[inset_0_0.7px_0_0_rgba(255,255,255,0.8)] ring-1 ring-border/80 dark:shadow-[inset_0_0.7px_0_0_rgba(255,255,255,0.2)]",
                      "cursor-default transition-colors duration-300 hover:bg-muted/80 hover:text-foreground"
                    )}
                    itemProp="applicationCategory"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
    </a>
  );
}
