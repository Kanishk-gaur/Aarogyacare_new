"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Globe,
  Languages,
  Car,
  Hotel,
  Stethoscope,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import WhatsAppButton from "../WhatsAppButton";

export default function ServicesPresentation() {
  const { t } = useLanguage();

  const services = [
    {
      icon: HeartPulse,
      titleKey: "features.support",
      highlight: "24/7",
      description: "Immediate medical assistance anytime, anywhere",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
    {
      icon: Globe,
      titleKey: "features.visa",
      highlight: "98%",
      description: "Visa approval success rate for patients",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Languages,
      titleKey: "features.interpreters",
      highlight: "50+",
      description: "Languages available for clear communication",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      icon: Car,
      titleKey: "features.transfers",
      highlight: "1h",
      description: "Average airport pickup response time",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: Hotel,
      titleKey: "features.accommodation",
      highlight: "200+",
      description: "Verified accommodation partners worldwide",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: Stethoscope,
      titleKey: "features.postCare",
      highlight: "100%",
      description: "Post-treatment follow-up commitment",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Changed to subtle gray background */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-gray-900 mb-4">
            <span className="font-medium">Essential</span> Medical Services
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for your healthcare journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-20 h-20 rounded-full ${service.bgColor} flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <div className="text-4xl font-light text-gray-900 mb-2">
                  {service.highlight}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 border-t border-gray-200 pt-16 text-center">
          {" "}
          {/* Slightly darker border */}
          <p className="text-gray-500 max-w-2xl mx-auto">
            All services are delivered by our team of dedicated professionals
            committed to your health and comfort.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-0 relative z-0">
                <WhatsAppButton type="knowMore" text={t("home.buttons.knowMore")} />
              </div>
    </section>
  );
}
