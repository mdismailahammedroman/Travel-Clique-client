"use client"; // This tells Next.js that this file is a Client Component

import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
