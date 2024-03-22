import React from "react";

// components
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex h-screen">
      <Sidebar />

      <div className="grid w-full">
        <Navbar />

        <div className="overflow-y-scroll">
          <div className="mx-auto w-full max-w-[1200px] p-6">{children}</div>

          <Footer />
        </div>
      </div>
    </main>
  );
}
