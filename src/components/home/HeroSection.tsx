"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { Playfair_Display, Poppins } from "next/font/google";


// Load Google Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden isolate ${playfair.variable} ${poppins.variable}`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-green-600/10 z-0"></div>
      <div
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Floating gradient blobs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/70 to-purple-500/70 rounded-full opacity-20 blur-[70px]"
      />
      <motion.div
        animate={{
          y: [0, 35, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-20 w-44 h-44 bg-gradient-to-br from-green-400/60 to-blue-500/60 rounded-full opacity-15 blur-[80px]"
      />
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-1/4 w-36 h-36 bg-gradient-to-br from-pink-400/70 to-red-500/70 rounded-full opacity-20 blur-[60px]"
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Badge */}
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs md:text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-sans max-w-fit"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" />
            {t("home.hero.badge")}
          </motion.div>

          {/* Main heading */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center font-serif font-semibold leading-snug tracking-tight px-4"
          >
            <span className="block text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-gray-800 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
              {t("home.hero.title1")}
            </span>
            <span className="block text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent mb-2">
              {t("home.hero.title2")}
            </span>
            <span className="block text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {t("home.hero.title3")}
            </span>
            <span className="block text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              {t("home.hero.title4")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-6xl mx-auto leading-relaxed font-sans"
          >
            {t("home.hero.subtitle")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-0"
          >
            <a
              href="https://wa.me/9097272726"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-10 py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group font-sans font-medium"
              >
                {t("home.hero.startJourney")}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </a>

            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 sm:px-10 py-6 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 font-sans font-medium"
              >
                {t("home.hero.exploreServices")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
