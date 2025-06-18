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
    name: "Oncology",
    rate: "99%",
    description:
      "Advanced cancer treatment with precision medicine, immunotherapy, and personalized care protocols for optimal outcomes.",
    icon: Target,
    image: "/images/oncology.jpeg",
    gradient: "from-red-500 to-pink-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: 2,
    name: "Liver Transplantation",
    rate: "97%",
    description:
      "World-class liver transplant procedures with 95% success rate, performed by internationally trained surgeons.",
    icon: Heart,
    image: "/images/liver.jpg",
    gradient: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: 3,
    name: "Kidney Transplant",
    rate: "97%",
    description:
      "Comprehensive kidney transplantation program with advanced immunosuppression protocols and long-term care.",
    icon: Shield,
    image: "/images/kidney.jpg",
    gradient: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 4,
    name: "Cardiology",
    rate: "98%",
    description:
      "Complete cardiac care including minimally invasive procedures, robotic surgery, and cardiac rehabilitation programs.",
    icon: Heart,
    image: "/images/cardiology.jpeg",
    gradient: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: 5,
    name: "Neurosurgery",
    rate: "95%",
    description:
      "Cutting-edge brain and spine surgeries using advanced imaging, microsurgery, and neuro-navigation technology.",
    icon: Brain,
    image: "/images/neuro.jpeg",
    gradient: "from-purple-500 to-indigo-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: 6,
    name: "Hair Transplantation",
    rate: "99%",
    description:
      "Revolutionary FUE and DHI hair restoration techniques for natural-looking results with minimal downtime.",
    icon: Scissors,
    image: "/images/hair.jpeg",
    gradient: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: 7,
    name: "Dental Implants",
    rate: "100%",
    description:
      "State-of-the-art dental implantology with 3D planning, immediate loading, and ceramic implant options.",
    icon: Stethoscope,
    image: "/images/dental.jpeg",
    gradient: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    id: 8,
    name: "Cosmetic Surgery",
    rate: "94%",
    description:
      "Aesthetic and reconstructive procedures with natural results using advanced techniques and premium materials.",
    icon: Scissors,
    image: "/images/cosmetic.jpeg",
    gradient: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    id: 9,
    name: "Knee Replacement",
    rate: "92%",
    description:
      "Advanced joint replacement surgery with robotic assistance, custom implants, and rapid recovery protocols.",
    icon: Bone,
    image: "/images/knee.jpg",
    gradient: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: 10,
    name: "Eye Surgery (LASIK)",
    rate: "97%",
    description:
      "Precision vision correction with femtosecond laser technology, custom wavefront analysis, and lifetime warranties.",
    icon: Eye,
    image: "/images/eye.jpg",
    gradient: "from-yellow-500 to-orange-600",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    id: 11,
    name: "Breast Augmentation",
    rate: "92%",
    description:
      "Advanced breast enhancement procedures with premium implants, 3D imaging, and personalized surgical planning.",
    icon: Heart,
    image: "/images/breast.jpg",
    gradient: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    id: 12,
    name: "Spine Surgery",
    rate: "94%",
    description:
      "Minimally invasive spinal procedures with navigation technology, artificial disc replacement, and pain management.",
    icon: Activity,
    image: "/images/spine.jpeg",
    gradient: "from-gray-500 to-slate-600",
    bgColor: "bg-gray-50",
    iconColor: "text-gray-600",
  },
  {
    id: 13,
    name: "IVF Treatment",
    rate: "95%",
    description:
      "Comprehensive fertility solutions with advanced reproductive technologies, genetic screening, and high success rates.",
    icon: Baby,
    image: "/images/ivf.jpeg",
    gradient: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    id: 14,
    name: "Bone Marrow Transplant",
    rate: "90%",
    description:
      "Life-saving hematopoietic stem cell transplantation with advanced conditioning regimens and supportive care.",
    icon: Dna,
    image: "/images/bone.png",
    gradient: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    id: 15,
    name: "Gynecology",
    rate: "93%",
    description:
      "Complete women's healthcare with minimally invasive procedures, robotic surgery, and comprehensive wellness programs.",
    icon: Users,
    image: "/images/gyne.jpeg",
    gradient: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    id: 16,
    name: "Bariatric Surgery",
    rate: "96%",
    description:
      "Advanced weight loss procedures with metabolic surgery options, nutritional counseling, and long-term support.",
    icon: Activity,
    image: "/images/bariatric.jpeg",
    gradient: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

const cancerTreatments = [
  {
    name: "Breast Cancer Treatment",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Cervical Cancer Treatment",
    icon: Shield,
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Stomach Cancer Treatment",
    icon: Pill,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Lung Cancer Treatment",
    icon: Activity,
    color: "from-cyan-500 to-blue-600",
  },
  {
    name: "Ovarian Cancer Treatment",
    icon: Target,
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Pancreatic Cancer Treatment",
    icon: Microscope,
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Rectal Cancer Treatment",
    icon: Syringe,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Prostate Cancer Treatment",
    icon: Globe,
    color: "from-teal-500 to-cyan-600",
  },
  {
    name: "Leukemia Treatment",
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
                50+ Partner Hospitals
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                International Standards
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Advanced Technology
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-0 relative z-0">
          <WhatsAppButton type="bookNow" text="Book Now" />
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
                      className={`absolute inset-0 bg-gradient-to-br  opacity-90`}
                    ></div>
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
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
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {service.description}
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
          <WhatsAppButton type="callback" text="Request Callback" />
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
                          {treatment.name}
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
                          className={`h-2 bg-gradient-to-r ${treatment.color} rounded-full shadow-sm`}
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
              Patient Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our patients about their experiences and successful
              treatments
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
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-xl shadow-lg"
                  ></iframe>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-lg font-medium">
                    John's Successful Liver Transplant
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
                    title="Patient Testimonial 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-lg font-medium">
                    Sarah's Cancer Treatment Journey
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
                    title="Patient Testimonial 3"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-lg font-medium">
                    Michael's Knee Replacement Story
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
                Know More
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
