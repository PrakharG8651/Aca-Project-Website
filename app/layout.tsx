import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0a] text-[#f9fafb]">
        <Navbar />
        <div className="mx-auto flex max-w-[1320px] flex-col px-4 pt-[72px] sm:px-6 lg:flex-row lg:gap-8 lg:px-8">
          <Sidebar />
          <main id="main-content" className="min-w-0 flex-1 py-6 sm:py-8 lg:py-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
