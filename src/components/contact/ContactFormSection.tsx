"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { ContactInfoCard } from "./ContactInfoCard";

interface ContactFormSectionProps {
  onSubmit: (e: React.FormEvent) => Promise<void>;
  formData: {
    name: string;
    address: string;
    telephone: string;
    email: string;
    complaint: string;
  };
  onFormChange: (field: string, value: string) => void;
  isSubmitting: boolean;
  submitted: boolean;
  errors?: {
    name?: string;
    address?: string;
    telephone?: string;
    email?: string;
  };
}

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
    icon: Clock,
    title: "Working Hours",
    details: ["Mon-Fri: 9:00 AM - 8:00 PM", "Sat-Sun: 10:00 AM - 6:00 PM"],
    description: "India Standard Time (IST)",
  },
];

export function ContactFormSection({
  onSubmit,
  formData,
  onFormChange,
  isSubmitting,
  submitted,
  errors = {},
}: ContactFormSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {t("feedback.title")}
                  </h2>
                  <p className="text-gray-600">{t("feedback.subtitle")}</p>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-800 font-medium">
                      {t("feedback.successMessage")}
                    </p>
                  </motion.div>
                )}

                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <strong>{t("feedback.fields.name.label")}:</strong> *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => onFormChange("name", e.target.value)}
                      placeholder={t("feedback.fields.name.placeholder")}
                      className={errors.name ? "border-red-500 bg-red-50" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <strong>{t("feedback.fields.address.label")}:</strong> *
                    </label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => onFormChange("address", e.target.value)}
                      placeholder={t("feedback.fields.address.placeholder")}
                      className={
                        errors.address ? "border-red-500 bg-red-50" : ""
                      }
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.address}
                      </p>
                    )}
                    {!errors.address && formData.address === "" && (
                      <p className="mt-1 text-sm text-gray-500">
                        {t("feedback.fields.address.required")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <strong>{t("feedback.fields.telephone.label")}:</strong> *
                    </label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={(e) =>
                        onFormChange("telephone", e.target.value)
                      }
                      placeholder={t("feedback.fields.telephone.placeholder")}
                      className={
                        errors.telephone ? "border-red-500 bg-red-50" : ""
                      }
                    />
                    {errors.telephone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.telephone}
                      </p>
                    )}
                    {!errors.telephone && formData.telephone === "" && (
                      <p className="mt-1 text-sm text-gray-500">
                        {t("feedback.fields.telephone.required")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <strong>{t("feedback.fields.email.label")}:</strong> *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => onFormChange("email", e.target.value)}
                      placeholder={t("feedback.fields.email.placeholder")}
                      className={errors.email ? "border-red-500 bg-red-50" : ""}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="complaint"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      <strong>{t("feedback.fields.complaint.label")}:</strong>
                    </label>
                    <Textarea
                      id="complaint"
                      name="complaint"
                      rows={5}
                      value={formData.complaint}
                      onChange={(e) =>
                        onFormChange("complaint", e.target.value)
                      }
                      placeholder={t("feedback.fields.complaint.placeholder")}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        {t("feedback.submitting")}
                      </div>
                    ) : (
                      t("feedback.submitButton")
                    )}
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-center text-gray-600">
                    {t("feedback.assistanceText")}{" "}
                    <a
                      href="https://wa.me/yourphonenumber"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("feedback.assistanceLink")}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("contact.info.title")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t("contact.info.subtitle")}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <ContactInfoCard
                  key={index}
                  index={index}
                  icon={info.icon}
                  title={info.title}
                  details={info.details}
                  description={info.description}
                />
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
                <h3 className="text-lg font-bold text-red-800">
                  {t("contact.emergency.title")}
                </h3>
              </div>
              <p className="text-red-700 mb-2">
                {t("contact.emergency.subtitle")}
              </p>
              <p className="text-red-800 font-bold text-lg">
                +91 98765 43210 (24/7)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
