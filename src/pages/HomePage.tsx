import React from 'react';
import { Hero } from '../components/home/Hero';
import { EditorialMission } from '../components/home/EditorialMission';
import { EditorialMosaic } from '../components/home/EditorialMosaic';
import { ServicesCatalog } from '../components/home/ServicesCatalog';
import { FoundationSpotlight } from '../components/home/FoundationSpotlight';
import { TeamEditorial } from '../components/home/TeamEditorial';
import { EditorialImpact } from '../components/home/EditorialImpact';
import { EditorialBlog } from '../components/home/EditorialBlog';
import { EditorialContact } from '../components/home/EditorialContact';

interface HomePageProps {
  onOpenEmergency: () => void;
  onOpenTelehealth: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenEmergency,
  onOpenTelehealth
}) => {
  return (
    <main className="bg-white">
      {/* 1. Full-Bleed Cinematic Hero */}
      <Hero
        onOpenEmergency={onOpenEmergency}
        onOpenTelehealth={onOpenTelehealth}
      />

      {/* 2. Editorial Mission Statement & Capability Badges */}
      <EditorialMission />

      {/* 3. Authentic Photo Mosaic & Field Documentation */}
      <EditorialMosaic />

      {/* 4. Four Core Pillars Catalog with Filter Tabs */}
      <ServicesCatalog
        onOpenEmergency={onOpenEmergency}
        onOpenTelehealth={onOpenTelehealth}
      />

      {/* 5. Accesscare Foundation Split Feature Spotlight */}
      <FoundationSpotlight />

      {/* 6. The People Behind the Mission (Governance & Team) */}
      <TeamEditorial />

      {/* 7. Verified Field Impact & Frontline Metrics */}
      <EditorialImpact />

      {/* 8. Health & Prevention Verified Guides */}
      <EditorialBlog />

      {/* 9. Get in Touch with Us (Inquiry Form & Contact Coordinates) */}
      <EditorialContact />
    </main>
  );
};
