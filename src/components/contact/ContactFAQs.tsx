"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export function ContactFAQs() {
  const { t } = useLanguage()

  const faqs = [
    {
      questionKey: "contact.faqs.arrangement.question",
      answerKey: "contact.faqs.arrangement.answer"
    },
    {
      questionKey: "contact.faqs.visa.question",
      answerKey: "contact.faqs.visa.answer"
    },
    {
      questionKey: "contact.faqs.languages.question",
      answerKey: "contact.faqs.languages.answer"
    },
    {
      questionKey: "contact.faqs.costs.question",
      answerKey: "contact.faqs.costs.answer"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("contact.faqs.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("contact.faqs.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {t(faq.questionKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(faq.answerKey)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}