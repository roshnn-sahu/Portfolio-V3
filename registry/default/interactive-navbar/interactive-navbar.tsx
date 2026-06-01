"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  title: string;
  href: string;
}

interface InteractiveNavbarProps {
  links?: NavLink[];
  logo?: React.ReactNode;
  logoHref?: string;
  className?: string;
  children?: React.ReactNode;
}

const HOVER_SPRING = {
  type: "spring" as const,
  stiffness: 380,
  damping: 30,
  mass: 0.6,
};

function NavItem({
  link,
  idx,
  isHovered,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  link: NavLink;
  idx: number;
  isHovered: boolean;
  isActive: boolean;
  onMouseEnter: (idx: number) => void;
  onMouseLeave: () => void;
}) {
  return (
    <Link
      href={link.href}
      className="relative px-4 py-1 text-center rounded-full"
      onMouseEnter={() => onMouseEnter(idx)}
      onMouseLeave={onMouseLeave}
      aria-current={isActive ? "page" : undefined}
    >
      {isActive && (
        <motion.div
          layoutId="active"
          className="absolute inset-0 rounded-full bg-primary"
          transition={HOVER_SPRING}
        />
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            layoutId="hover"
            className="absolute inset-0 h-full w-full rounded-full bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={HOVER_SPRING}
          />
        )}
      </AnimatePresence>

      <span className="relative z-10 font-normal mix-blend-difference text-primary-foreground">
        {link.title}
      </span>
    </Link>
  );
}

function MobileMenu({
  isOpen,
  onClose,
  links,
  activeIdx,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  activeIdx: number;
  children?: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-2 rounded-lg border border-border bg-background"
        >
          <div className="flex flex-col">
            {links.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  activeIdx === idx
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {children && (
            <div className="flex flex-col gap-2 p-4 border-t border-border">
              {children}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function InteractiveNavbar({
  links = [],
  logo,
  logoHref = "/",
  className,
  children,
}: InteractiveNavbarProps) {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMouseEnter = useCallback((idx: number) => {
    setHoveredLink(idx);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredLink(null);
  }, []);

  const activeIdx = useMemo(
    () => links.findIndex((link) => link.href === pathname),
    [links, pathname]
  );

  return (
    <header className={cn("w-full", className)} role="banner">
      <nav
        className="mx-auto max-w-7xl px-5 py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          <Link href={logoHref} className="text-2xl font-bold tracking-tight select-none">
            {logo ?? "Logo"}
          </Link>

          {/* Desktop Nav Links */}
          {links.length > 0 && (
            <div
              className="hidden items-center gap-1 rounded-full border-2 border-border bg-background p-1 text-sm md:flex"
              role="menubar"
            >
              {links.map((link, idx) => (
                <NavItem
                  key={link.href}
                  link={link}
                  idx={idx}
                  isHovered={hoveredLink === idx}
                  isActive={activeIdx === idx}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
          )}

          {/* Right Side: Custom Actions or default slot */}
          <div className="hidden items-center gap-2 md:flex">
            {children}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg border border-border p-2 transition-colors hover:bg-accent"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu size={16} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          links={links}
          activeIdx={activeIdx}
          children={children}
        />
      </nav>
    </header>
  );
}
