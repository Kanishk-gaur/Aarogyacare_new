"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/service/HeroSection";
import ServicesGrid from "@/components/service/ServicesGrid";
import CancerTreatments from "@/components/service/CancerTreatments";
import FeaturesSection from "@/components/home/FeaturesSection";

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />      
      <HeroSection />
      <ServicesGrid />
      <CancerTreatments />
      <FeaturesSection />
      
      <Footer />
    </div>
  );
}