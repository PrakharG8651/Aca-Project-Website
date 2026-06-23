import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { SidebarWrapper } from "@/components/SidebarWrapper";
import { LenisProvider } from "@/components/LenisProvider";
import "lenis/dist/lenis.css";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAS.DEVCAMP — Developer Bootcamp",
  description:
    "A 10-week developer bootcamp focused on full-stack engineering. Build, ship, run.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("h-full", "antialiased", inter.variable, geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full bg-[#0a0a0a] text-[#f9fafb]" suppressHydrationWarning>
        <LenisProvider>
          <Navbar />
          <SidebarWrapper>{children}</SidebarWrapper>
        </LenisProvider>
      </body>
    </html>
  );
}
