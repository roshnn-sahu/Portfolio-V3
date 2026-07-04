import Demo from "./demo";

export const magneticButtonItem = {
  slug: "magnetic-button",

  title: "Magnetic Button",

  description:
    "A modern magnetic button component with smooth magnetic hover effect.",

  category: "Buttons",

  component: Demo,

  installation: {
    cli: "npx shadcn@latest add http://localhost:3000/r/magnetic-button.json",

    registry: "http://localhost:3000/r/magnetic-button.json",
  },

  dependencies: ["motion"],

  features: [
    "Magnetic hover effect",
    "Smooth spring animations",
    "Customizable colors and sizes",
    "Accessible with keyboard navigation",
    "Lightweight and performant",
  ],

  usage: `import MagneticButton from "@/components/ui/magnetic-button"

export default function Example() {
  return <MagneticButton />
}`,

  props: [
    {
      name: "children",
      type: "React.ReactNode",
      default: '"Magnetic Button"',
      description: "The content inside the button.",
    },
    {
      name: "strength",
      type: "number",
      default: "0.8",
      description: "Magnetic pull strength factor.",
    },
    {
      name: "maxDistance",
      type: "number",
      default: "100",
      description: "Maximum distance in pixels for the magnetic effect.",
    },
  ]
};
