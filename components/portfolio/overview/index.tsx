import Link from "next/link";
import CopyButton from "@/components/copy-button";

export default function Overview() {
  return (
    <section className="font-geist-sans">
      <div>
        <p className="text-muted-foreground">
          I&apos;m a 20yo Full-Stack Developer focused on building clean,
          scalable web products. <br /> <br /> Currently, I&apos;m building{" "}
          <Link
            href="https://www.boltcreator.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
            aria-label="Visit draftlogo"
          >
            BoltCreator
          </Link>{" "}
          &ndash; a SaaS that helps creators and founders generate clean,
          professional thumbnails in seconds using AI. Inspired by modern AI
          builders, it focuses on speed, simplicity, and high-converting visual
          design. I love crafting elegant web experiences, shipping fast, and
          turning ideas into real products. <br />
          With built-in AI tag generation, keyword optimization, and social
          growth tools, BoltCreator helps creators maximize reach, improve
          visibility, and grow faster across platforms. <br />
          Previously, I&apos;ve worked with startups and shipped multiple
          projects. You can find more of my work on{" "}
          <Link
            href="https://x.com/ratneshchipre"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline"
            aria-label="Visit twitter"
          >
            @RoshanS72056
          </Link>
          , explore my code on{" "}
          <Link
            href="https://github.com/roshann-sahu"
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
      </div>
    </section>
  );
}
