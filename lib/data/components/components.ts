import { BlurShimmerText } from "@/registry/default/blur-shimmer-text/blur-shimmer-text";

export const components = [
  {
    slug: "blur-shimmer-text",

    title: "Blur Shimmer Text",

    description:
      "A text component that loops phrases with a horizontal blur shimmer.",

    component: BlurShimmerText,

    installation: {
      npm: "npx shadcn@latest add http://localhost:3000/r/blur-shimmer-text.json",

      pnpm: "pnpm dlx shadcn@latest add http://localhost:3000/r/blur-shimmer-text.json",

      yarn: "yarn dlx shadcn@latest add http://localhost:3000/r/blur-shimmer-text.json",
    },

    usage: `
import { BlurShimmerText } from "@/components/blur-shimmer-text"

export default function Demo() {
  return (
    <BlurShimmerText
      texts={["Open to Work"]}
    />
  )
}
`,

    props: [
      {
        name: "texts",
        type: "string[]",
        default: "-",
        description: "Phrases for the blur shimmer text.",
      },

      {
        name: "className",
        type: "string",
        default: "-",
        description: "Custom class names.",
      },
    ],
  },
];
