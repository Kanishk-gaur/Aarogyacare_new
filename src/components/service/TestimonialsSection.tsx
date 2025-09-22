"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-200 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          
        
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Video 1 */}
          {/* Video 1 */}
          <TestimonialVideo
            videoId="NaHMwdFY5eU"
            title={t("services.testimonials.video1.title")}
          />

          {/* Video 2 */}
          {/* Video 2 */}
          <TestimonialVideo
            videoId="atTG_cx1vA0"
            title={t("services.testimonials.video2.title")}
          />

          {/* Video 3 */}
          <TestimonialVideo
            videoId="Ti4VRj2Zg78"
            title={t("services.testimonials.video3.title")}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16"
        >
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

          {/* Services Button */}
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 sm:px-10 py-6 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 font-sans font-medium"
            >
              {t("services.buttons.services")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialVideo({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
        <div className="flex justify-center my-6">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?si=V5WOqZp2RUUNyzGc`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>

        
      </div>
    </motion.div>
  );
}
