import { BlurShimmerText } from "@/registry/default/blur-shimmer-text/blur-shimmer-text";
import { InteractiveNavbar } from "@/registry/default/interactive-navbar/interactive-navbar";

export const components = [
  {
    slug: "blur-shimmer-text",
    title: "Blur Shimmer Text",
    description:
      "A text component that loops phrases with a horizontal blur shimmer.",
    component: BlurShimmerText,
    installation: "http://localhost:3000/r/blur-shimmer-text.json",
    usage: `import { BlurShimmerText } from "@/components/blur-shimmer-text"

export default function Demo() {
  return (
    <BlurShimmerText
      texts={["Open to Work"]}
    />
  )
}`,
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

  {
    slug: "interactive-navbar",
    title: "Interactive Navbar",
    description:
      "A modern interactive navigation bar with hover spring animations and mobile support.",
    component: InteractiveNavbar,
    installation: "http://localhost:3000/r/interactive-navbar.json",
    usage: `import { InteractiveNavbar } from "@/components/interactive-navbar"

export default function Page() {
  return (
    <InteractiveNavbar
      logo="Acme"
      links={[
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Services", href: "/services" },
        { title: "Contact", href: "/contact" },
      ]}
    >
      <button>Sign Up</button>
      <button>Login</button>
    </InteractiveNavbar>
  )
}`,
    props: [
      {
        name: "links",
        type: "NavLink[]",
        default: "[]",
        description: "Array of nav links with title and href.",
      },
      {
        name: "logo",
        type: "ReactNode",
        default: '"Logo"',
        description: "Logo element displayed on the left of the navbar.",
      },
      {
        name: "logoHref",
        type: "string",
        default: '"/"',
        description: "Href for the logo link.",
      },
      {
        name: "className",
        type: "string",
        default: "-",
        description: "Additional class names for the navbar container.",
      },
      {
        name: "children",
        type: "ReactNode",
        default: "-",
        description: "Action buttons or elements rendered on the right side.",
      },
    ],
  },
];
