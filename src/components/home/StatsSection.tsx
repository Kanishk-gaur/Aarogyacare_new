"use client";

import { motion } from "framer-motion";
import { Heart, Users, Award, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Heart,
      number: "10,000+",
      labelKey: "home.stats.treatments",
      color: "text-red-500",
    },
    {
      icon: Users,
      number: "8,500+",
      labelKey: "home.stats.patients",
      color: "text-blue-500",
    },
    {
      icon: Award,
      number: "75+",
      labelKey: "home.stats.hospitals",
      color: "text-green-500",
    },
    {
      icon: Globe,
      number: "18+",
      labelKey: "home.stats.experience",
      color: "text-purple-500",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-blue-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group cursor-pointer"
            >
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white to-gray-50 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                  <stat.icon
                    className={`w-10 h-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-3"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">
                {t(stat.labelKey)}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-0 relative z-0">
          <WhatsAppButton type="contact" text={t("home.buttons.contactUs")} />
        </div>
      </div>
    </section>
  );
}