import {
  GithubIcon,
  Linkedin02Icon,
  Mail01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {cn} from "@/lib/utils"

export default function Connect() {
  const CONNECT_LINKS = [
    {
      id: "email",
      icon: Mail01Icon,
      title: "Email",
      url: "mailto:hello.roshan004@gmail.com",
    },
    {
      id: "twitter",
      icon: NewTwitterIcon,
      title: "Twitter",
      url: "https://x.com/RoshanS72056",
    },
    {
      id: "github",
      icon: GithubIcon,
      title: "GitHub",
      url: "https://github.com/roshnn-sahu",
    },
    {
      id: "linkedin",
      icon: Linkedin02Icon,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/roshan-sahu-72b91b371/",
    },
  ];

  return (
    <section
      id="connect"
      className="mt-15 scroll-mt-20 space-y-5"
      aria-labelledby="connect-heading"
    >
      <header>
        <h2
          id="connect-heading"
          className="font-geist-pixel-square text-muted-foreground"
        >
          Connect with me
        </h2>
      </header>
      <div>
        <ul
          className="flex flex-wrap gap-3 select-none"
          aria-describedby="connect-description"
        >
          {CONNECT_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("flex items-center gap-2 rounded-md border bg-muted px-2.5 py-1 ","font-geist-mono text-muted-foreground transition-all duration-300 ","hover:bg-muted/80 hover:text-foreground focus-visible:ring-2 ","focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
                  "ring-1 ring-border/80 shadow-[inset_0_0.7px_0_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_0.7px_0_0_rgba(255,255,255,0.2)] active:scale-95 "
                )}
              >
                <HugeiconsIcon
                  icon={link.icon}
                  strokeWidth={2}
                  className="size-4"
                />
                <span className="text-sm">{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

