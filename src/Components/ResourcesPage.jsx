import React from "react";
import Header from "./Header";
import Hero from "./hero";
import QuotesCarousel from "./quotes";
import VideoSection from "./videos";
import AudioSection from "./audios";
import InteractiveTools from "./tools";
import ArticlesSection from "./articles";
import Footer from "./footer";


const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <QuotesCarousel />
      <VideoSection />
      <AudioSection />
      <InteractiveTools />
      <ArticlesSection />
      <Footer />
    </div>
  );
};

export default ResourcesPage;
