"use client";

import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/serviceb.png')",
          filter: "blur(4x)",
          opacity: 0.5,
        }}
      ></div>

      {/* Optional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-green-600/10"></div>

      {/* Decorative small dots */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-300 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-40 w-3 h-3 bg-purple-300 rounded-full opacity-25"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-green-300 rounded-full opacity-35"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-300 rounded-full opacity-20"></div>
        <div className="absolute top-60 left-60 w-2 h-2 bg-purple-300 rounded-full opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-15 blur-xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 blur-xl"
      />

      {/* Text Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Stethoscope className="w-4 h-4 mr-2" />
            {t("services.hero.badge")}
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8 leading-tight">
            {t("services.hero.title")}
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t("services.hero.subtitle")}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-200"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              {t("services.features.hospitals")}
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              {t("services.features.standards")}
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              {t("services.features.technology")}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* WhatsApp Button */}
      <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-0 relative z-0">
        <WhatsAppButton type="bookNow" text={t("services.buttons.bookNow")} />
      </div>
    </section>
  );
}