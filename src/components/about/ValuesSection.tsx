"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Globe, Users, Sparkles, LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import WhatsAppButton from "@/components/WhatsAppButton";

interface ValueItem {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  color: string;
  bgColor: string;
  iconColor: string;
  hoverGradient: string;
  accentColor: string;
}

const values: ValueItem[] = [
  {
    icon: Heart,
    titleKey: "about.values.compassionate.title",
    descriptionKey: "about.values.compassionate.description",
    color: "from-pink-500 via-rose-400 to-fuchsia-600",
    bgColor: "bg-pink-100",
    iconColor: "text-rose-600",
    hoverGradient: "group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:via-rose-400 group-hover:to-fuchsia-600",
    accentColor: "bg-pink-300/20"
  },
  {
    icon: Shield,
    titleKey: "about.values.trust.title",
    descriptionKey: "about.values.trust.description",
    color: "from-blue-500 via-sky-400 to-indigo-600",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    hoverGradient: "group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:via-sky-400 group-hover:to-indigo-600",
    accentColor: "bg-blue-300/20"
  },
  {
    icon: Globe,
    titleKey: "about.values.global.title",
    descriptionKey: "about.values.global.description",
    color: "from-emerald-500 via-teal-400 to-cyan-600",
    bgColor: "bg-emerald-100",
    iconColor: "text-teal-600",
    hoverGradient: "group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:via-teal-400 group-hover:to-cyan-600",
    accentColor: "bg-emerald-300/20"
  },
  {
    icon: Users,
    titleKey: "about.values.support.title",
    descriptionKey: "about.values.support.description",
    color: "from-purple-500 via-violet-400 to-indigo-600",
    bgColor: "bg-purple-100",
    iconColor: "text-violet-600",
    hoverGradient: "group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:via-violet-400 group-hover:to-indigo-600",
    accentColor: "bg-purple-300/20"
  },
];

interface ValueCardProps {
  value: ValueItem;
  index: number;
  t: (key: string) => string;
}

function ValueCard({ value, index, t }: ValueCardProps) {
  const Icon = value.icon;
  
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        scale: 1.03,
      }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 ${value.accentColor} rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <Card className="h-full text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden relative bg-white/90 backdrop-blur-sm">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 ${value.hoverGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        {/* Floating decorative element */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 ${value.bgColor} rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}></div>
        
        <CardContent className="p-8 relative z-10">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`inline-flex items-center justify-center w-16 h-16 ${value.bgColor} rounded-full mb-6 group-hover:bg-gradient-to-br ${value.color} transition-all duration-300 shadow-md group-hover:shadow-lg`}
          >
            <Icon className={`w-8 h-8 ${value.iconColor} group-hover:text-white transition-colors duration-300`} />
          </motion.div>
          
          <h3 className={`text-xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-br ${value.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
            {t(value.titleKey)}
          </h3>
          
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
            {t(value.descriptionKey)}
          </p>
          
          {/* Animated underline */}
          <motion.div 
            className={`h-0.5 bg-gradient-to-r ${value.color} mt-4 w-0 mx-auto`}
            initial={{ width: 0 }}
            whileInView={{ width: "50%" }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ValuesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/80 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 1000 - 500,
              y: Math.random() * 1000 - 500,
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
            className={`absolute rounded-full w-40 h-40 blur-xl ${
              [
                "bg-pink-300/30",
                "bg-blue-300/30",
                "bg-emerald-300/30",
                "bg-purple-300/30",
              ][i % 4]
            }`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <Sparkles className="absolute -top-6 -left-6 w-8 h-8 text-yellow-400 animate-pulse" />
            <Sparkles className="absolute -bottom-6 -right-6 w-8 h-8 text-pink-400 animate-pulse delay-300" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-6 animate-text">
              {t("about.values.title")}
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto relative">
            {t("about.values.subtitle")}
            <motion.span 
              className="absolute -bottom-2 left-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1, originX: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} t={t} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center pt-16 relative z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-tilt" />
          <WhatsAppButton
            message={t("about.buttons.whatsapp_message")}
            type="primary"
            text={t("about.buttons.whatsapp")}
            className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}