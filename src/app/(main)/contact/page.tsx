"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, HeadphonesIcon } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Support",
    details: ["+91 98765 43210", "+7 777 123 4567"],
    description: "24/7 emergency support available",
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["info@medicalcare.com", "support@medicalcare.com"],
    description: "Response within 2 hours",
  },
  {
    icon: MapPin,
    title: "Office Locations",
    details: ["New Delhi, India", "Almaty, Kazakhstan"],
    description: "Visit our local offices",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"],
    description: "India Standard Time (IST)",
  },
]

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", phone: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{t("contact.hero.title")}</h1>
            <p className="text-xl text-gray-600 mb-8">{t("contact.hero.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("contact.form.title")}</h2>
                    <p className="text-gray-600">{t("contact.form.subtitle")}</p>
                  </div>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <p className="text-green-800 font-medium">{t("contact.form.success")}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.name")} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.phone")} *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+7 XXX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.message")}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                        placeholder={t("contact.form.messagePlaceholder")}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          {t("contact.form.sending")}
                        </div>
                      ) : (
                        t("contact.form.submit")
                      )}
                    </Button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-600">
                      Can't find your query?{" "}
                      <a
                        href="mailto:support@medicalcare.com"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Email us directly
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("contact.info.title")}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{t("contact.info.subtitle")}</p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="group"
                  >
                    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                              <info.icon className="w-6 h-6 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {info.title}
                            </h3>
                            <div className="space-y-1 mb-2">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-800 font-medium">
                                  {detail}
                                </p>
                              ))}
                            </div>
                            <p className="text-gray-600 text-sm">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-red-50 border border-red-200 rounded-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <HeadphonesIcon className="w-6 h-6 text-red-600" />
                  <h3 className="text-lg font-bold text-red-800">{t("contact.emergency.title")}</h3>
                </div>
                <p className="text-red-700 mb-2">{t("contact.emergency.subtitle")}</p>
                <p className="text-red-800 font-bold text-lg">+91 98765 43210 (24/7)</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Quick Answers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our medical tourism services and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly can you arrange treatment?",
                answer:
                  "We can typically arrange consultations within 48-72 hours and treatment within 1-2 weeks, depending on the procedure.",
              },
              {
                question: "Do you provide visa assistance?",
                answer:
                  "Yes, we provide complete visa assistance including medical visa documentation and invitation letters.",
              },
              {
                question: "What languages do you support?",
                answer:
                  "We provide support in Russian, Kazakh, and English with dedicated coordinators for each language.",
              },
              {
                question: "Are treatment costs transparent?",
                answer:
                  "Absolutely. We provide detailed cost estimates upfront with no hidden charges, including treatment, accommodation, and travel.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
