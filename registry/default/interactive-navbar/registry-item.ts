import Demo from "./demo";

export const interactiveNavbarItem = {
  slug: "interactive-navbar",

  title: "Interactive Navbar",

  description:
    "A modern animated navbar with spring hover effects and mobile support.",

  category: "Navigation",

  component: Demo,

  installation: {
    cli: "npx shadcn@latest add http://localhost:3000/r/interactive-navbar.json",

    registry: "http://localhost:3000/r/interactive-navbar.json",
  },

  dependencies: ["motion", "lucide-react"],

  features: [
    "Spring hover animations",
    "Responsive mobile menu",
    "Animated active states",
    "Smooth layout transitions",
  ],

  usage: `import InteractiveNavbar from "@/components/ui/interactive-navbar"

export default function Example() {
  return <InteractiveNavbar />
}`,

  props: [

  ],
};
