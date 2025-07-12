"use client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/about/HeroSection";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import Component from "@/components/about/how-we-work";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />      
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <Component />      
      <Footer />
    </div>
  );
}