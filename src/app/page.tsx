"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import PopularHospitalsSection from "@/components/home/PopularHospitalsSection";
import PopupSection from "@/components/home/PopupSection";
import AboutHeroSection from "@/components/about/HeroSection";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import Component from "@/components/about/how-we-work";
import TestimonialsSection from "@/components/service/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutHeroSection />
      <StorySection />
      <PopularHospitalsSection />
      <ValuesSection />
      <TeamSection />
      <Component />
      <TestimonialsSection />
      <PopupSection />

      <Footer />
    </div>
  );
}
