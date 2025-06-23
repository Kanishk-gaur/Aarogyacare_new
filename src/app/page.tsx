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
import { ArrowRight } from "lucide-react";

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
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-900
        hover:from-blue-700 hover:to-blue-950
        text-white px-12 py-5 text-xl rounded-full font-bold
        shadow-2xl hover:shadow-blue-800/70
        transition-all duration-500 transform hover:scale-110
        group mb-12"
          >
            {/* Pulsing background animation */}
            <span
              className="absolute inset-0 rounded-full bg-blue-500 opacity-0 
          group-hover:opacity-10 transition-opacity duration-300"
            ></span>

            {/* Continuous subtle pulse animation */}
            <span
              className="absolute inset-0 rounded-full bg-white opacity-0 
          animate-[pulse_2s_infinite] group-hover:animate-none"
            ></span>

            {/* Shiny reflection effect */}
            <span className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <span
                className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r 
            from-transparent via-white/30 to-transparent 
            animate-[shine_3s_infinite]"
              ></span>
            </span>

            <span className="relative z-10 flex items-center">
              {t("home.popup.visitServices")}
              <ArrowRight
                className="ml-2 h-5 w-5 transition-all duration-300 
            group-hover:translate-x-1 group-hover:scale-110"
              />
            </span>
          </Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
