"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    services: [
      "footer.links.services.oncology",
      "footer.links.services.cardiology",
      "footer.links.services.neurosurgery",
      "footer.links.services.transplantation",
      "footer.links.services.cosmetic",
      "footer.links.services.dental",
    ],
    support: [
      "footer.links.support.contact",
      "footer.links.support.emergency",
      "footer.links.support.portal",
      "footer.links.support.insurance",
      "footer.links.support.travel",
      "footer.links.support.language",
    ],
    company: [
      "footer.links.company.about",
      "footer.links.company.team",
      "footer.links.company.careers",
      "footer.links.company.privacy",
      "footer.links.company.terms",
      "footer.links.company.blog",
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", labelKey: "footer.social.facebook" },
    { icon: Instagram, href: "#", labelKey: "footer.social.instagram" },
    { icon: Linkedin, href: "#", labelKey: "footer.social.linkedin" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      textKey: "footer.contact.phone",
      value: "+91 9097 272 726",
    },
    {
      icon: Mail,
      textKey: "footer.contact.email",
      value: "SHUBHAMAGRAWAL970@GMAIL.COM",
    },
    {
      icon: MapPin,
      textKey: "footer.contact.address",
      value: "New Delhi, India",
    },
  ];

  // Workaround for interpolation without changing language context
  const copyrightText = t("footer.copyright").replace(
    "{{year}}",
    new Date().getFullYear().toString()
  );

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
              <span className="text-xl font-bold">{t("footer.brand")}</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300"
                >
                  <contact.icon className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{contact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6">
              {t("footer.titles.services")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((serviceKey, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {t(serviceKey)}
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
            <h3 className="text-lg font-bold mb-6">
              {t("footer.titles.support")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((supportKey, index) => (
                <li key={index}>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {t(supportKey)}
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
            <h3 className="text-lg font-bold mb-6">
              {t("footer.titles.company")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((companyKey, index) => (
                <li key={index}>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {t(companyKey)}
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
              {copyrightText}
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
                  aria-label={t(social.labelKey)}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
