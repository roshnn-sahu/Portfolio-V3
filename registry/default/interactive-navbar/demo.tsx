import Navbar from "./interactive-navbar";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function InteractiveNavbarDemo() {
  return (
    <div className="flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-xl bg-transparent">
      <div className="w-full max-w-5xl mx-auto">
        <Navbar links={links} logo="Interactive" />
      </div>
    </div>
  );
}
