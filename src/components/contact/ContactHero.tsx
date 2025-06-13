"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export function ContactHero() {
  const { t } = useLanguage()
  
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t("contact.hero.title")}</h1>
          <p className="text-xl text-gray-600 mb-8">{t("contact.hero.subtitle")}</p>
        </motion.div>
      </div>
    </section>
  )
}