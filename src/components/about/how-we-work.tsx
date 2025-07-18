"use client";

import {
  HeartHandshake,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Award,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Component() {
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const stats = [
    { icon: Star, value: "98%", label: t("stats.satisfaction") },
    { icon: Clock, value: "48hr", label: t("stats.response") },
    { icon: Shield, value: "100%", label: t("stats.success") },
    { icon: Award, value: "15+", label: t("stats.experience") },
  ];

  return (
    <section className="w-full pt-20 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-semibold mb-8 shadow-lg"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <CheckCircle className="h-4 w-4" />
            {t("header.trusted")}
          </motion.div>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              {t("header.title1")}
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent"
            >
              {t("header.title2")}
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-slate-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
          >
            {t("header.subtitle1")}
            <span className="font-semibold text-blue-600">
              {" "}
              {t("header.highlight1")}
            </span>
            {t("header.subtitle2")}
            <span className="font-semibold text-emerald-600">
              {" "}
              {t("header.highlight2")}
            </span>
          </motion.p>

          {/* Stats Row */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-3 transition-transform duration-300"
                  >
                    <IconComponent className="h-8 w-8" />
                  </motion.div>
                  <div className="text-3xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Animated Infographic Section */}
        {/* Animated Infographic Section */}
        <motion.div
          className="w-full flex justify-center my-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={t("infographic")}
            alt="Infographic about our services"
            className="w-[90vw] max-w-none h-auto shadow-lg rounded-xl"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{ y }}
          />
        </motion.div>

        {/* Enhanced Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-6 md:mt-24"
        >
          <div className="relative inline-flex flex-col items-center gap-6 px-12 py-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 max-w-2xl">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl blur-xl"></div>

            <motion.div
              className="relative flex items-center gap-5"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              >
                <HeartHandshake className="h-8 w-8 text-white" />
              </motion.div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                  {t("cta.title")}
                </h3>
                <p className="text-slate-600 font-medium">
                  {t("cta.subtitle")}
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative flex flex-wrap items-center justify-center gap-8 text-sm"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                { color: "bg-green-500", text: t("features.support") },
                { color: "bg-blue-500", text: t("features.response") },
                { color: "bg-purple-500", text: t("features.network") },
                { color: "bg-orange-500", text: t("features.plans") },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-slate-700 font-semibold"
                >
                  <motion.div
                    className={`w-3 h-3 ${item.color} rounded-full shadow-lg`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: index * 0.3,
                    }}
                  ></motion.div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 pb-2 relative z-0">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9097272726"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 sm:px-10 py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group font-sans font-medium"
          >
            {t("services.buttons.knowMore")}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </a>
      </div>
    </section>
  );
}
