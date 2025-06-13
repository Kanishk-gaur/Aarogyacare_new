"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface ContactInfoCardProps {
  icon: LucideIcon
  title: string
  details: string[]
  description: string
  index: number
}

export function ContactInfoCard({
  icon: Icon,
  title,
  details,
  description,
  index
}: ContactInfoCardProps) {
  return (
    <motion.div
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
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <div className="space-y-1 mb-2">
                {details.map((detail, idx) => (
                  <p key={idx} className="text-gray-800 font-medium">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}