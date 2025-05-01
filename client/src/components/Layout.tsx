import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import QuizBanner from "@/components/QuizBanner";
import TopBanner from "@/components/TopBanner";
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
      {/* Top Banner with phone and book now */}
      <TopBanner onBookNowClick={() => setIsBookModalOpen(true)} />

      <Navbar />
      
      {/* Quiz Banner under the navbar */}
      <QuizBanner />

      {/* Adjust padding to account for fixed banners & navbar heights */}
      <div className="pt-36 md:pt-40">{children}</div>

      <Footer />
      <LiveChat />
      <BookNowModal open={isBookModalOpen} onOpenChange={setIsBookModalOpen} />
    </div>
  );
};

export default Layout;
