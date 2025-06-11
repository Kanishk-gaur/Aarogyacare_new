"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Globe, Shield } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, understanding their unique needs and concerns.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Complete transparency in treatment costs, procedures, and expected outcomes.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "International quality healthcare with world-class facilities and expert doctors.",
  },
  {
    icon: Users,
    title: "Personal Support",
    description: "Dedicated support team to assist you throughout your medical journey in India.",
  },
]

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Medical Director",
    image: "/placeholder.svg?height=300&width=300",
    description: "Leading medical professional with 20+ years of experience in international healthcare.",
  },
  {
    name: "Elena Volkov",
    role: "Patient Coordinator (Russian)",
    image: "/placeholder.svg?height=300&width=300",
    description: "Specialized in assisting Russian-speaking patients with their medical journey.",
  },
  {
    name: "Aida Nazarbayeva",
    role: "Patient Coordinator (Kazakh)",
    image: "/placeholder.svg?height=300&width=300",
    description: "Expert in providing comprehensive support for patients from Kazakhstan.",
  },
]

const milestones = [
  { year: "2008", event: "Company Founded", description: "Started with a vision to bridge healthcare gaps" },
  { year: "2012", event: "1000+ Patients", description: "Reached our first major milestone" },
  { year: "2016", event: "50+ Partner Hospitals", description: "Expanded our network across India" },
  { year: "2020", event: "Digital Transformation", description: "Launched online consultation services" },
  { year: "2023", event: "10,000+ Success Stories", description: "Celebrating over a decade of excellence" },
]

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t("about.hero.title")}</h1>
            <p className="text-xl text-gray-600 mb-8">{t("about.hero.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t("about.story.title")}</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008, our company emerged from a simple yet powerful vision: to make world-class healthcare
                  accessible to patients from Kazakhstan and Russia. What started as a small initiative has grown into a
                  trusted bridge between patients seeking quality medical care and India's renowned healthcare system.
                </p>
                <p>
                  Our founders, having experienced the challenges of navigating foreign healthcare systems firsthand,
                  understood the need for a comprehensive support system. We recognized that medical treatment abroad
                  involves more than just clinical care – it requires cultural understanding, language support, and
                  emotional guidance.
                </p>
                <p>
                  Today, we proudly serve as the trusted partner for thousands of patients, offering not just medical
                  coordination but a complete care ecosystem that addresses every aspect of the medical tourism journey.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Our Story"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("about.values.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("about.values.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("about.team.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("about.team.subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("about.journey.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("about.journey.subtitle")}</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
