"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
  Pill,
  Dna,
  Microscope,
  Syringe,
  Globe,
  Droplet,
} from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLanguage } from "@/contexts/language-context";
import WhatsAppButton from "@/components/WhatsAppButton";

const services = [
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

const cancerTreatments = [
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

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-green-600/10"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-300 rounded-full opacity-30"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-purple-300 rounded-full opacity-25"></div>
          <div className="absolute bottom-32 left-32 w-2 h-2 bg-green-300 rounded-full opacity-35"></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-blue-300 rounded-full opacity-20"></div>
          <div className="absolute top-60 left-60 w-2 h-2 bg-purple-300 rounded-full opacity-30"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-15 blur-xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 blur-xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Stethoscope className="w-4 h-4 mr-2" />
              {t("services.hero.badge")}
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8 leading-tight">
              {t("services.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t("services.hero.subtitle")}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm text-gray-500"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                {t("services.features.hospitals")}
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                {t("services.features.standards")}
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                {t("services.features.technology")}
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-0 relative z-0">
          <WhatsAppButton type="bookNow" text={t("services.buttons.bookNow")} />
        </div>
      </section>

      {/* Services Grid */}
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
              <motion.div
                key={service.id}
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
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                    {/* Floating Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30"
                    >
                      <service.icon className="w-6 h-6 text-white" />
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
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-0 relative z-0">
          <WhatsAppButton type="callback" text={t("services.buttons.callback")} />
        </div>
      </section>

      {/* Cancer Treatments Section */}
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
                        <treatment.icon className="w-8 h-8 text-white" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Videos Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
              {t("services.testimonials.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.testimonials.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video 1 */}
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
                    src="https://www.youtube.com/embed/S8dHgYFEV3M?si=V5WOqZp2RUUNyzGc"
                    title={t("services.testimonials.video1.title")}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-xl shadow-lg"
                  ></iframe>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-lg font-medium">
                    {t("services.testimonials.video1.title")}
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Video 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ANOTHER_VIDEO_ID?rel=0&modestbranding=1&autoplay=0"
                    title={t("services.testimonials.video2.title")}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-lg font-medium">
                    {t("services.testimonials.video2.title")}
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Video 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/THIRD_VIDEO_ID?rel=0&modestbranding=1&autoplay=0"
                    title={t("services.testimonials.video3.title")}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-lg font-medium">
                    {t("services.testimonials.video3.title")}
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="https://wa.me/9097272726?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Aarogyacare%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                {t("services.buttons.knowMore")}
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}