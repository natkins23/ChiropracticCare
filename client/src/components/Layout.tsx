import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import QuizBanner from "@/components/QuizBanner";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import BookNowModal from "./BookNowModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <div className="font-sans text-text-dark bg-white">
      {/* Pull banner into its own component */}
      <QuizBanner />

      <Navbar />

      {/* Adjust padding to account for fixed banner & navbar heights */}
      <div className="pt-20 md:pt-24">{children}</div>

      <Footer />
      <LiveChat />
      <BookNowModal open={isBookModalOpen} onOpenChange={setIsBookModalOpen} />
    </div>
  );
};

export default Layout;
