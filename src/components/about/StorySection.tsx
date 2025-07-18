"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export default function StorySection() {
  const { t } = useLanguage();

  // This is your styled image + blobs, wrapped for easy reuse
  function TheImage() {
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex justify-center my-10 lg:my-0"
      >
        <Image
          src="/images/doctor.jpeg"
          alt={t("about.story.image_alt")}
          width={500}
          height={600}
          className="rounded-2xl shadow-2xl"
        />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-30"></div>
      </motion.div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* TEXT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center lg:text-left"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t("about.story.title")}
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>{t("about.story.paragraph1")}</p>
              {/* Mobile Image: show after first paragraph */}
              <div className="block lg:hidden">
                <TheImage />
              </div>
              <p>{t("about.story.paragraph2")}</p>
              <p>{t("about.story.paragraph3")}</p>
            </div>
          </motion.div>

          {/* Desktop Image Column */}
          <div className="hidden lg:block">
            <TheImage />
          </div>
        </div>
      </div>
    </section>
  );
}
