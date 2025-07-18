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
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ServicesPresentation() {
  const { t } = useLanguage();

  // Duotone gradient backgrounds
  const services = [
    {
      icon: HeartPulse,
      titleKey: "features.support",
      highlight: "24/7",
      descriptionKey: "services.supportDescription",
      iconColor: "text-rose-400",
      fromColor: "from-rose-50",
      toColor: "to-sky-50",
    },
    {
      icon: Globe,
      titleKey: "features.visa",
      highlight: "98%",
      descriptionKey: "services.visaDescription",
      iconColor: "text-sky-400",
      fromColor: "from-sky-50",
      toColor: "to-emerald-50",
    },
    {
      icon: Languages,
      titleKey: "features.interpreters",
      highlight: "50+",
      descriptionKey: "services.interpretersDescription",
      iconColor: "text-indigo-400",
      fromColor: "from-indigo-50",
      toColor: "to-purple-50",
    },
    {
      icon: Car,
      titleKey: "features.transfers",
      highlight: "1h",
      descriptionKey: "services.transfersDescription",
      iconColor: "text-green-400",
      fromColor: "from-emerald-50",
      toColor: "to-lime-50",
    },
    {
      icon: Hotel,
      titleKey: "features.accommodation",
      highlight: "200+",
      descriptionKey: "services.accommodationDescription",
      iconColor: "text-amber-400",
      fromColor: "from-amber-50",
      toColor: "to-orange-50",
    },
    {
      icon: Stethoscope,
      titleKey: "features.postCare",
      highlight: "100%",
      descriptionKey: "services.postCareDescription",
      iconColor: "text-cyan-400",
      fromColor: "from-cyan-50",
      toColor: "to-blue-50",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-white via-gray-50 to-blue-100 min-h-[80vh]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-gray-800 mb-3">
            <span className="bg-gradient-to-r from-fuchsia-500 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              {t("services.titleHighlighted")}
            </span>
            <span className="font-normal text-gray-500">
              {" "}
              {t("services.title")}
            </span>
          </h2>
          <div className="w-20 h-1 bg-sky-200 mx-auto mb-3 rounded" />
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Double Tone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`
                  rounded-2xl shadow-sm border border-gray-100
                  flex flex-col items-center text-center px-6 py-8
                  bg-gradient-to-br ${service.fromColor} ${service.toColor}
                  transition hover:shadow-md
                `}
              >
                <div
                  className={`
                    w-14 h-14 rounded-full flex items-center justify-center mb-4
                    bg-white/75 border border-white shadow
                  `}
                >
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <div className="text-2xl font-bold text-sky-400 mb-1">
                  {service.highlight}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-base text-gray-400">
                  {t(service.descriptionKey)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Section */}
        <div className="mt-12 border-t border-gray-100 pt-8 text-center">
          <p className="text-base text-gray-400 max-w-xl mx-auto">
            {t("services.footer")}
          </p>
          <div className="flex flex-row gap-4 items-center justify-center mt-8 flex-wrap">
            <WhatsAppButton type="knowMore" text={t("home.buttons.knowMore")} />
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-sky-200 text-sky-400 hover:bg-sky-100 hover:text-sky-700 px-8 py-3 text-base rounded-full font-medium transition duration-300"
              >
                {t("home.buttons.contactUs")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
