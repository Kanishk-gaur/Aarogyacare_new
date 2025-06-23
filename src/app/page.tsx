"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import StatsSection from "@/components/home/StatsSection";
import PopularHospitalsSection from "@/components/home/PopularHospitalsSection";
import PopupSection from "@/components/home/PopupSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      
      <PopularHospitalsSection />
      <PopupSection />

      <div className="flex justify-center my-4">
        <Link href="/services">
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-blue-600 to-blue-900
                 hover:from-blue-700 hover:to-blue-950
                 text-white px-12 py-5 text-xl rounded-full font-bold
                 shadow-2xl hover:shadow-blue-800/70
                 transition-all duration-500 transform hover:scale-110
                 before:absolute before:inset-0 before:rounded-full
                 before:bg-blue-500 before:opacity-0 hover:before:opacity-10"
          >
            {t("home.popup.visitServices")}
          </Button>
        </Link>
      </div>

      

      <Footer />
    </div>
  );
}