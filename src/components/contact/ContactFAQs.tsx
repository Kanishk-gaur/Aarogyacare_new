"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function ContactFAQs() {
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
  )
}