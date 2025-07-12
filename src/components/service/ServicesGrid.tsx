"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Heart,
  Brain,
  Eye,
  Scissors,
  Bone,
  Baby,
  Stethoscope,
  Activity,
  Users,
  Shield,
  Target,  
  Dna,
  LucideIcon
} from "lucide-react";

interface Service {
  id: number;
  nameKey: string;
  rate: string;
  descriptionKey: string;
  icon: LucideIcon;
  image: string;
  gradient: string;
  bgColor: string;
  iconColor: string;
}

const services: Service[] = [
  {
    id: 1,
    nameKey: "services.oncology.name",
    rate: "99%",
    descriptionKey: "services.oncology.description",
    icon: Target,
    image: "/images/oncology.jpeg",
    gradient: "from-red-500 to-pink-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: 2,
    nameKey: "services.liver.name",
    rate: "97%",
    descriptionKey: "services.liver.description",
    icon: Heart,
    image: "/images/liver.jpg",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: 3,
    nameKey: "services.kidney.name",
    rate: "97%",
    descriptionKey: "services.kidney.description",
    icon: Shield,
    image: "/images/kidney.jpg",
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 4,
    nameKey: "services.cardiology.name",
    rate: "98%",
    descriptionKey: "services.cardiology.description",
    icon: Heart,
    image: "/images/cardiology.jpeg",
    gradient: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: 5,
    nameKey: "services.neurosurgery.name",
    rate: "95%",
    descriptionKey: "services.neurosurgery.description",
    icon: Brain,
    image: "/images/neuro.jpeg",
    gradient: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: 6,
    nameKey: "services.hair.name",
    rate: "99%",
    descriptionKey: "services.hair.description",
    icon: Scissors,
    image: "/images/hair.jpeg",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: 7,
    nameKey: "services.dental.name",
    rate: "100%",
    descriptionKey: "services.dental.description",
    icon: Stethoscope,
    image: "/images/dental.jpeg",
    gradient: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    id: 8,
    nameKey: "services.cosmetic.name",
    rate: "94%",
    descriptionKey: "services.cosmetic.description",
    icon: Scissors,
    image: "/images/cosmetic.jpeg",
    gradient: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    id: 9,
    nameKey: "services.knee.name",
    rate: "92%",
    descriptionKey: "services.knee.description",
    icon: Bone,
    image: "/images/knee.jpg",
    gradient: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: 10,
    nameKey: "services.eye.name",
    rate: "97%",
    descriptionKey: "services.eye.description",
    icon: Eye,
    image: "/images/eye.jpg",
    gradient: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    id: 11,
    nameKey: "services.breast.name",
    rate: "92%",
    descriptionKey: "services.breast.description",
    icon: Heart,
    image: "/images/breast.jpg",
    gradient: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    id: 12,
    nameKey: "services.spine.name",
    rate: "94%",
    descriptionKey: "services.spine.description",
    icon: Activity,
    image: "/images/spine.jpeg",
    gradient: "from-gray-500 to-slate-600",
    bgColor: "bg-gray-50",
    iconColor: "text-gray-600",
  },
  {
    id: 13,
    nameKey: "services.ivf.name",
    rate: "95%",
    descriptionKey: "services.ivf.description",
    icon: Baby,
    image: "/images/ivf.jpeg",
    gradient: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    id: 14,
    nameKey: "services.bone_marrow.name",
    rate: "90%",
    descriptionKey: "services.bone_marrow.description",
    icon: Dna,
    image: "/images/bone.png",
    gradient: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    id: 15,
    nameKey: "services.gynecology.name",
    rate: "93%",
    descriptionKey: "services.gynecology.description",
    icon: Users,
    image: "/images/gyne.jpeg",
    gradient: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    id: 16,
    nameKey: "services.bariatric.name",
    rate: "96%",
    descriptionKey: "services.bariatric.description",
    icon: Activity,
    image: "/images/bariatric.jpeg",
    gradient: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];


interface ServiceCardProps {
  service: Service;
  index: number;
  t: (key: string) => string;
}

function ServiceCard({ service, index, t }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="group relative"
    >
      <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}
          ></div>
          <Image
            src={service.image || "/placeholder.svg"}
            alt={t(service.nameKey)}
            width={600}
            height={400}
            className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

          {/* Floating Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30"
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        <CardContent className="p-6 relative">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
            <div
              className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-xl`}
            ></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {t(service.nameKey)}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {t(service.descriptionKey)}
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1 mb-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: service.rate }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
              ></motion.div>
            </div>
            <p className="text-xs text-gray-500">
              {t("services.successRate")}: {service.rate}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
            {t("services.specialties.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("services.specialties.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} t={t} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-0 relative z-0">
        <WhatsAppButton type="info" text={t("services.buttons.callback")} />
      </div>
    </section>
  );
}