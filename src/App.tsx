import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { EmergencyBar } from './components/layout/EmergencyBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { EmergencyDispatchModal } from './components/emergency/EmergencyDispatchModal';
import { TelehealthBookingModal } from './components/telehealth/TelehealthBookingModal';

// Pages
import { HomePage } from './pages/HomePage';
import { EmergencyPage } from './pages/EmergencyPage';
import { MobileHealthPage } from './pages/MobileHealthPage';
import { TelehealthPage } from './pages/TelehealthPage';
import { SureDosePage } from './pages/SureDosePage';
import { AboutPage } from './pages/AboutPage';
import { ImpactPage } from './pages/ImpactPage';
import { VolunteerPage } from './pages/VolunteerPage';
import { PartnerPage } from './pages/PartnerPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isTelehealthModalOpen, setIsTelehealthModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen">
        {/* Top Sticky Emergency Hotline Bar */}
        <EmergencyBar onRequestAmbulance={() => setIsEmergencyModalOpen(true)} />

        {/* Global Navigation Header */}
        <Navbar
          onOpenEmergency={() => setIsEmergencyModalOpen(true)}
          onOpenTelehealth={() => setIsTelehealthModalOpen(true)}
        />

        {/* Main Routed Content */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenEmergency={() => setIsEmergencyModalOpen(true)}
                  onOpenTelehealth={() => setIsTelehealthModalOpen(true)}
                />
              }
            />
            <Route
              path="/emergency"
              element={<EmergencyPage onOpenEmergency={() => setIsEmergencyModalOpen(true)} />}
            />
            <Route path="/mobile-health" element={<MobileHealthPage />} />
            <Route
              path="/telehealth"
              element={<TelehealthPage onOpenTelehealth={() => setIsTelehealthModalOpen(true)} />}
            />
            <Route path="/suredose" element={<SureDosePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="*"
              element={
                <HomePage
                  onOpenEmergency={() => setIsEmergencyModalOpen(true)}
                  onOpenTelehealth={() => setIsTelehealthModalOpen(true)}
                />
              }
            />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Global Modals */}
        <EmergencyDispatchModal
          isOpen={isEmergencyModalOpen}
          onClose={() => setIsEmergencyModalOpen(false)}
        />

        <TelehealthBookingModal
          isOpen={isTelehealthModalOpen}
          onClose={() => setIsTelehealthModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;

