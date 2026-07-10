import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import "@/styles/globals.css";
import SiteFooter from "@/components/site-footer";
import LayoutContainer from "@/components/layout-container";
import SiteHeader from "@/components/site-header";
import ThemeProvider from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { defaultWebsiteMetadata } from "@/config/metadata";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultWebsiteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} antialiased selection:bg-foreground selection:text-primary-foreground relative`}
      >

        <ThemeProvider>
          <Toaster position="top-center" />
          <TooltipProvider>
            <LayoutContainer>
           
              <SiteHeader />
              <main className="overflow-hidden px-5">{children}</main>
              <SiteFooter />
               <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-50"
        aria-hidden
      >
        <div className="h-(--fade-bottom-height) bg-linear-to-b from-transparent to-background mask-linear-[to_top,var(--background)_25%,transparent] backdrop-blur-[3px]" />
        <div className="bg-background pb-[env(safe-area-inset-bottom,0)]" />
      </div>
            </LayoutContainer>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

