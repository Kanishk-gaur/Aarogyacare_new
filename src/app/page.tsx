"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Heart, Users, Award, Globe, Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

const hospitals = [
  {
    id: 1,
    name: "Apollo Hospitals",
    description:
      "Leading multi-specialty hospital with world-class facilities and experienced doctors specializing in complex procedures.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    specialties: ["Cardiology", "Oncology", "Neurosurgery"],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: 2,
    name: "Fortis Healthcare",
    description:
      "Advanced medical care with cutting-edge technology and personalized treatment protocols for international patients.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    specialties: ["Transplants", "Orthopedics", "Gastroenterology"],
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
    name: "Max Healthcare",
    description:
      "Comprehensive healthcare services with international standards and expert care across multiple specialties.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    specialties: ["IVF", "Cosmetic Surgery", "Spine Care"],
    gradient: "from-purple-500 to-violet-600",
  },
  {
    id: 4,
    name: "Medanta Hospital",
    description:
      "State-of-the-art medical facility specializing in complex surgeries and treatments with robotic assistance.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    specialties: ["Robotic Surgery", "Cancer Care", "Pediatrics"],
    gradient: "from-red-500 to-pink-600",
  },
  {
    id: 5,
    name: "BLK Super Speciality Hospital",
    description:
      "Premier healthcare destination with advanced medical technology and expert specialists from around the world.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    specialties: ["Liver Transplant", "Kidney Care", "Neurology"],
    gradient: "from-orange-500 to-yellow-600",
  },
  {
    id: 6,
    name: "Artemis Hospital",
    description:
      "World-class healthcare with personalized care and comprehensive international patient services and support.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    specialties: ["Bariatric Surgery", "Joint Replacement", "Eye Care"],
    gradient: "from-indigo-500 to-blue-600",
  },
]

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(() => {
    // Check if we're in the browser and if the popup was previously dismissed
    if (typeof window !== "undefined") {
      return localStorage.getItem("popupDismissed") !== "true"
    }
    return false
  })
  const [scrollY, setScrollY] = useState(0)
  const { t } = useLanguage()

  const stats = [
    { icon: Heart, number: "15,000+", label: t("home.stats.treatments"), color: "text-red-500" },
    { icon: Users, number: "8,500+", label: t("home.stats.patients"), color: "text-blue-500" },
    { icon: Award, number: "75+", label: t("home.stats.hospitals"), color: "text-green-500" },
    { icon: Globe, number: "18+", label: t("home.stats.experience"), color: "text-purple-500" },
  ]

  const features = [
    t("features.support"),
    t("features.visa"),
    t("features.interpreters"),
    t("features.transfers"),
    t("features.accommodation"),
    t("features.postCare"),
  ]

  const handleDismissPopup = () => {
    setShowPopup(false)
    localStorage.setItem("popupDismissed", "true")
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      const scrollPercentage = (currentScrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercentage > 30 && !showPopup && localStorage.getItem("popupDismissed") !== "true") {
        setShowPopup(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showPopup])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-green-600/10"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-15 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 blur-2xl"
        />

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 3, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {t("home.hero.badge")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                {t("home.hero.title1")}
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                {t("home.hero.title2")}
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("home.hero.title3")}
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                {t("home.hero.title4")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {t("home.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                >
                  {t("home.hero.startJourney")}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  {t("home.hero.exploreServices")}
                </Button>
              </Link>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center justify-center p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 text-center">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-blue-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white to-gray-50 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-200">
                    <stat.icon
                      className={`w-10 h-10 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-3"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Hospitals Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-sm font-medium mb-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Award className="w-4 h-4 mr-2" />
              {t("home.hospitals.badge")}
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8">
              {t("home.hospitals.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t("home.hospitals.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital, index) => (
              <motion.div
                key={hospital.id}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, rotateY: 5 }}
                className="group"
                style={{ perspective: "1000px" }}
              >
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full">
                  <div className="relative overflow-hidden h-64">
                    <div className={`absolute inset-0 bg-gradient-to-br ${hospital.gradient} opacity-20`}></div>
                    <Image
                      src={hospital.image || "/placeholder.svg"}
                      alt={hospital.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-bold text-gray-800">{hospital.rating}</span>
                    </div>

                    {/* Specialties */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 relative">
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${hospital.gradient} opacity-5 rounded-full blur-2xl`}
                    ></div>

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {hospital.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{hospital.description}</p>

                      {/* Progress Indicator */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>Excellence Rating</span>
                        <span className="font-semibold">{Math.round(hospital.rating * 20)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${hospital.rating * 20}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${hospital.gradient} rounded-full shadow-sm`}
                        ></motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Scroll-triggered Popup */}
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
              className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 opacity-50"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Heart className="w-6 h-6 text-white" />
                  </motion.div>
                  <button
                    onClick={handleDismissPopup}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6 mb-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900">{t("home.popup.title")}</h3>

                  <div className="space-y-4">
                    <p className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                      {t("home.popup.subtitle")}
                    </p>
                    <p className="text-gray-600 leading-relaxed">{t("home.popup.description")}</p>
                  </div>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3">
                    {[t("features.support"), t("features.visa"), t("features.interpreters"), "Best Hospitals"].map(
                      (feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-4"
                >
                  <Link href="/contact" className="block">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      onClick={() => setShowPopup(false)}
                    >
                      {t("home.popup.contactUs")}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/services" className="block">
                    <Button
                      variant="outline"
                      className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 rounded-2xl font-semibold transition-all duration-300"
                      onClick={() => setShowPopup(false)}
                    >
                      {t("home.popup.visitServices")}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
