"use client"

import { motion } from "framer-motion"
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  services: ["Oncology", "Cardiology", "Neurosurgery", "Transplantation", "Cosmetic Surgery", "Dental Care"],
  support: [
    "Contact Us",
    "Emergency Support",
    "Patient Portal",
    "Insurance Help",
    "Travel Assistance",
    "Language Support",
  ],
  company: ["About Us", "Our Team", "Careers", "Privacy Policy", "Terms of Service", "Blog"],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">MedCare India</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Bridging healthcare excellence between India and the CIS region. Your trusted partner for world-class
              medical treatment.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@medcareindia.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Medical Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Patient Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((item, index) => (
                <li key={index}>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item, index) => (
                <li key={index}>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {new Date().getFullYear()} MedCare India. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
