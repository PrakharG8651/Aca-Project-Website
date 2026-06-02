"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils";

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFrontPage = pathname === "/";
  const isPlayground = pathname === "/playground";

  return (
    <div 
      className={cn(
        "pt-14 transition-all duration-500",
        isFrontPage 
          ? "" 
          : "mx-auto flex flex-col px-4 sm:px-6 lg:flex-row lg:gap-8 lg:px-8",
      )}
    >
      {!isFrontPage && <Sidebar />}
      <main id="main-content" className={cn(
        "min-w-0 flex-1",
        !isFrontPage && "py-6 sm:py-8 lg:py-10"
      )}>
        {children}
      </main>
    </div>
  );
}
