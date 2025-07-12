"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Shield, Pill, Activity, Microscope, Syringe, Globe, Droplet, LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface CancerTreatment {
  nameKey: string;
  icon: LucideIcon;
  color: string;
}

const cancerTreatments: CancerTreatment[] = [
  {
    nameKey: "services.cancer.breast.name",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
  },
  {
    nameKey: "services.cancer.cervical.name",
    icon: Shield,
    color: "from-purple-500 to-pink-600",
  },
  {
    nameKey: "services.cancer.stomach.name",
    icon: Pill,
    color: "from-blue-500 to-indigo-600",
  },
  {
    nameKey: "services.cancer.lung.name",
    icon: Activity,
    color: "from-cyan-500 to-blue-600",
  },
  {
    nameKey: "services.cancer.ovarian.name",
    icon: Target,
    color: "from-violet-500 to-purple-600",
  },
  {
    nameKey: "services.cancer.pancreatic.name",
    icon: Microscope,
    color: "from-orange-500 to-red-600",
  },
  {
    nameKey: "services.cancer.rectal.name",
    icon: Syringe,
    color: "from-green-500 to-emerald-600",
  },
  {
    nameKey: "services.cancer.prostate.name",
    icon: Globe,
    color: "from-teal-500 to-cyan-600",
  },
  {
    nameKey: "services.cancer.leukemia.name",
    icon: Droplet,
    color: "from-yellow-500 to-amber-600",
  },
];

interface CancerTreatmentCardProps {
  treatment: CancerTreatment;
  index: number;
  t: (key: string) => string;
}

function CancerTreatmentCard({ treatment, index, t }: CancerTreatmentCardProps) {
  const Icon = treatment.icon;
  
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -50, rotateY: -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      className="group"
      style={{ perspective: "1000px" }}
    >
      <Card className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm">
        {/* Gradient Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${treatment.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
        ></div>

        <CardContent className="p-8 relative z-10">
          <div className="flex items-center space-x-4 mb-4">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className={`w-16 h-16 bg-gradient-to-br ${treatment.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
            >
              <Icon className="w-8 h-8 text-white" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {t(treatment.nameKey)}
              </h3>
              <div className="flex items-center mt-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                    ></motion.div>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  {t("services.excellenceRating")}
                </span>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                {t("services.treatmentSuccess")}
              </span>
              <span className="font-semibold text-gray-800">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "92%" }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`h-2 bg-gradient-to-br ${treatment.color} rounded-full shadow-sm`}
              ></motion.div>
            </div>
          </div>
        </CardContent>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Card>
    </motion.div>
  );
}

export default function CancerTreatments() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-pink-50 to-purple-50"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-red-200 rounded-full opacity-15 blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-purple-200 rounded-full opacity-25 blur-2xl"></div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-rose-200 rounded-full opacity-20 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Target className="w-4 h-4 mr-2" />
            {t("services.cancer.badge")}
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            {t("services.cancer.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("services.cancer.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cancerTreatments.map((treatment, index) => (
            <CancerTreatmentCard key={index} treatment={treatment} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}