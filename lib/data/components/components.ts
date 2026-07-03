import InteractiveNavbarDemo from "@/registry/default/interactive-navbar/demo";
import ExpandableCardDemo from "@/registry/default/expandable.card/demo";
import MorphingPlayPauseButtonDemo from "@/registry/default/morphing-play-pause-button/demo";

import { RegistryComponent } from "@/types/component";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const components: RegistryComponent[] = [
  {
    slug: "interactive-navbar",
    previewUrl: "/preview/interactive-navbar",
    title: "Interactive Navbar",
    description:
      "A modern interactive navigation bar with hover spring animations and mobile support.",
    category: "Navigation",
    component: InteractiveNavbarDemo,
    sourceFile: "registry/default/interactive-navbar/interactive-navbar.tsx",
    installation: {
      cli: `"npx shadcn@latest add ${baseUrl}/r/interactive-navbar.json"`,
      registry: `${baseUrl}/r/interactive-navbar.json`,
    },
    dependencies: ["motion", "lucide-react"],
    features: [
      "Spring hover animations",
      "Responsive mobile menu",
      "Animated active states",
      "Smooth transitions",
      "Mobile friendly",
    ],
    usage: `import Navbar from "@/components/interactive-navbar"

export default function Page() {
  return (
    <Navbar
      logo="Acme"
      logoHref="/"
      links={[
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Services", href: "/services" },
        { title: "Contact", href: "/contact" },
      ]}
    >
      <button>Sign Up</button>
      <button>Login</button>
    </Navbar>
  )
}`,
    props: [
      {
        name: "links",
        type: "NavLink[]",
        default: "[{ title: 'Home', href: '/' }, ...]",
        description:
          "Array of navigation link objects with `title` (string) and `href` (string) properties.",
      },
      {
        name: "logo",
        type: "ReactNode",
        default: '"Interactive"',
        description:
          "Custom logo element (text or JSX) displayed on the left side of the navbar.",
      },
      {
        name: "logoHref",
        type: "string",
        default: '"/"',
        description:
          "The href for the logo link. Clicking the logo navigates to this path.",
      },
      {
        name: "className",
        type: "string",
        default: "—",
        description:
          "Additional Tailwind CSS class names applied to the inner `<nav>` element for custom styling.",
      },
      {
        name: "children",
        type: "ReactNode",
        default: "Default Sign Up / Login buttons",
        description:
          "Custom action buttons or elements rendered on the right side of the navbar. If omitted, default Sign Up and Login buttons are shown.",
      },
    ],
  },
  {
    slug: "expandable-card",
    previewUrl: "/preview/expandable-card",
    title: "Expandable Card",
    description:
      "A modern expandable card component with layout animations and image previews.",
    category: "Cards",
    component: ExpandableCardDemo,
    sourceFile: "registry/default/expandable.card/expandable-card.tsx",
    installation: {
      cli: `npx shadcn@latest add ${baseUrl}/r/expandable-card.json`,
      registry: `${baseUrl}/r/expandable-card.json`,
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

    props: [
      {
        name: "cards",
        type: "ExpandableCardItem[]",
        default: "DEFAULT_CARDS",
        description: "Array of expandable card items.",
      },
      {
        name: "className",
        type: "string",
        default: "-",
        description: "Additional container styles.",
      },
    ],
  },
  {
    slug: "morphing-play-pause-button",
    previewUrl: "/preview/morphing-play-pause-button",
    title: "Morphing Play/Pause Button",
    description:
      "A morphing play/pause button with smooth SVG path animations using Motion spring transitions.",
    category: "Buttons",
    component: MorphingPlayPauseButtonDemo,
    sourceFile: "registry/default/morphing-play-pause-button/play-pause-button.tsx",
    installation: {
      cli: `npx shadcn@latest add ${baseUrl}/r/morphing-play-pause-button.json`,
      registry: `${baseUrl}/r/morphing-play-pause-button.json`,
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
  },
];

export function getComponentBySlug(slug: string) {
  return components.find((component) => component.slug === slug);
}
