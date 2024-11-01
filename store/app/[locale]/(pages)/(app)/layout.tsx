import Footer from "@/app/common/components/Footer/Footer";
import Navbar from "@/app/common/components/Navbar/Navbar";
import type { JSX } from "react";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <div className="container mx-auto mt-20 px-4">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}
