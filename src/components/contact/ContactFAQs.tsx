"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { HelpCircle, Globe, Wallet, CalendarCheck } from "lucide-react"

export function ContactFAQs() {
  const { t } = useLanguage()

  const faqs = [
    {
      questionKey: "contact.faqs.arrangement.question",
      answerKey: "contact.faqs.arrangement.answer",
      icon: CalendarCheck,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      questionKey: "contact.faqs.visa.question",
      answerKey: "contact.faqs.visa.answer",
      icon: Globe,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      questionKey: "contact.faqs.languages.question",
      answerKey: "contact.faqs.languages.answer",
      icon: HelpCircle,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      questionKey: "contact.faqs.costs.question",
      answerKey: "contact.faqs.costs.answer",
      icon: Wallet,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("contact.faqs.title")}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("contact.faqs.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden group bg-white/90 backdrop-blur-sm">
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${faq.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardContent className="p-6 relative">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${faq.bgColor} ${faq.iconColor} transition-all duration-300 group-hover:bg-gradient-to-br ${faq.color} group-hover:text-white`}>
                      <faq.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-br ${faq.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {t(faq.questionKey)}
                      </h3>
                      <motion.p 
                        className="text-gray-600 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {t(faq.answerKey)}
                      </motion.p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}