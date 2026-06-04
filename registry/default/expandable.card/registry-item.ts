import Demo from "./demo";

export const expandableCardItem = {
  slug: "expandable-card",

  title: "Expandable Card",

  description:
    "A modern expandable card component with layout animations and image previews.",

  category: "Cards",

  component: Demo,

  installation: {
    cli: "npx shadcn@latest add http://localhost:3000/r/expandable-card.json",

    registry: "http://localhost:3000/r/expandable-card.json",
  },

  dependencies: ["motion"],

  features: [
    "Expandable card with animated transitions",
    "Image preview with layout animations",
    "Keyboard escape to close",
    "Click outside to close",
    "Smooth spring animations",
  ],

  usage: `import ExpandableCard from "@/components/ui/expandable-card"

export default function Example() {
  return <ExpandableCard />
}`,

  props: [],
};
