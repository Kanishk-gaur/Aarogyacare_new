"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X,  ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

export default function PopupSection() {
  const [showPopup, setShowPopup] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("popupDismissed") !== "true";
    }
    return false;
  });

  const { t } = useLanguage();

  const handleDismissPopup = () => {
    setShowPopup(false);
    localStorage.setItem("popupDismissed", "true");

    // Re-show the popup after 50 seconds
    setTimeout(() => {
      setShowPopup(true);
      localStorage.removeItem("popupDismissed");
    }, 5000000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollPercentage =
        (currentScrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (
        scrollPercentage > 30 &&
        !showPopup &&
        localStorage.getItem("popupDismissed") !== "true"
      ) {
        setShowPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showPopup]);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleDismissPopup}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -30 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateY: 30 }}
            transition={{ type: "spring", duration: 3, bounce: 0.2 }}
            className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl relative overflow-hidden max-h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 opacity-50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-2xl"></div>

            {/* Content */}
            <div className="relative z-10 overflow-y-auto flex-1">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="My Logo"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                </motion.div>

                <button
                  onClick={handleDismissPopup}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 mb-6"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {t("home.popup.title")}
                </h3>

                <div className="space-y-3">
                  <p className="text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                    {t("home.popup.subtitle")}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {t("home.popup.description")}
                  </p>
                </div>

                {/* Feature List */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "features.support",
                    "features.visa",
                    "features.interpreters",
                    "home.popup.featureBestHospitals",
                  ].map((featureKey, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-gray-600">
                        {t(featureKey)}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative z-10 space-y-3 pt-4"
            >
              <a
                href="https://wa.me/7017327308"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setShowPopup(false)}
                >
                  {t("home.popup.contactUs")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <Link href="/services" className="block">
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-2xl font-semibold transition-all duration-300"
                  onClick={() => setShowPopup(false)}
                >
                  {t("home.popup.visitServices")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
