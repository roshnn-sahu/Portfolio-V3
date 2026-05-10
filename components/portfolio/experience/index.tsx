import { EXPERIENCES } from "@/lib/data/portfolio/experiences";
import ExperienceCard from "./experience-card";
import { Separator } from "@/components/ui/separator";

export default function Experience() {
  if (!EXPERIENCES || EXPERIENCES.length === 0) {
    return (
      <section
        className="mt-15 space-y-5 font-geist-sans"
        aria-labelledby="experience-heading"
      >
        <header>
          <h2
            id="experience-heading"
            className="font-geist-pixel-square text-muted-foreground"
          >
            Experience
          </h2>
        </header>
        <p className="text-sm text-muted-foreground">
          No experience items available.
        </p>
      </section>
    );
  }

  return (
    <section
      id="experience"
      className="mt-15 scroll-mt-20 space-y-5"
      aria-labelledby="experience-heading"
    >
      <header>
        <h2
          id="experience-heading"
          className="font-geist-pixel-square text-muted-foreground"
        >
          Experience
        </h2>
      </header>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={experience.id}>
            <ExperienceCard experience={experience} />
            {index < EXPERIENCES.length - 1 && <Separator className="my-5" />}
          </div>
        ))}
      </div>
    </section>
  );
}

