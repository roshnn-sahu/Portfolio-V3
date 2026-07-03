import Demo from "./demo";

export const morphingPlayPauseButtonItem = {
  slug: "morphing-play-pause-button",

  title: "Morphing Play/Pause Button",

  description:
    "A morphing play/pause button with smooth SVG path animations using Motion spring transitions.",

  category: "Buttons",

  component: Demo,

  installation: {
    cli: "npx shadcn@latest add http://localhost:3000/r/morphing-play-pause-button.json",

    registry: "http://localhost:3000/r/morphing-play-pause-button.json",
  },

  dependencies: ["motion"],

  features: [
    "Morphing SVG path animation",
    "Spring-based transitions",
    "Light and dark theme support",
    "Glossy hover highlight effect",
    "Accessible ARIA labels",
  ],

  usage: `import PlayPauseButton from "@/components/ui/play-pause-button"

export default function Example() {
  return <PlayPauseButton />
}`,

  props: [
    {
      name: "theme",
      type: '"light" | "dark"',
      default: '"light"',
      description: "Visual theme for the button icon color.",
    },
  ],
};
