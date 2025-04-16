import React from "react";
import Navbar from "@/components/Navbar";
import QuizBanner from "@/components/QuizBanner";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-sans text-text-dark bg-white">
      <Navbar />
      <QuizBanner />
      <div>
        {children}
      </div>
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Layout;