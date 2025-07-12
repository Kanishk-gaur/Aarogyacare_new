"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutHeroSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t("about.hero.title")}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t("about.hero.subtitle")}
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-0 relative z-0">
        <WhatsAppButton type="callback" text={t("about.buttons.callback")} />
      </div>
    </section>
  );
}