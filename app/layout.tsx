import type { Metadata } from "next";
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
        className={`${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} antialiased selection:bg-foreground selection:text-primary-foreground`}
      >
        <ThemeProvider>
          <Toaster position="top-center" />
          <TooltipProvider>
            <LayoutContainer>
              <SiteHeader />
              <main className="overflow-hidden px-5">{children}</main>
              <SiteFooter />
            </LayoutContainer>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

