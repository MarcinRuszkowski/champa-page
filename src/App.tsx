import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { AchievementsPage } from "./pages/AchievementsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { Navbar } from "./layouts/Navbar";
import { BouncingBalls } from "./components/ui/BouncingBalls";

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative">
        <BouncingBalls ballCount={15} speed={2} />
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-50">
          <Navbar />
        </div>
        <div className="flex items-center justify-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
