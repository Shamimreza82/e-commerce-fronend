"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/home-page/header";
import { Footer } from "@/components/home-page/footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Header />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
