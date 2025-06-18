"use client";

import type React from "react";

import { useRef, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  OrbitControls,
  Sphere,
  Box,
} from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  Clock,
  HeadphonesIcon,
  Send,
  CheckCircle,
  LucideIcon,
} from "lucide-react";
import type * as THREE from "three";
import { useLanguage } from "@/contexts/language-context";

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

// 3D Floating Elements Component
function FloatingElements() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[0.3]} position={[-2, 1, 0]}>
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.7} />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <Box args={[0.4, 0.4, 0.4]} position={[2, -1, 0]}>
          <meshStandardMaterial color="#10b981" transparent opacity={0.6} />
        </Box>
      </Float>
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <Sphere args={[0.2]} position={[0, 2, -1]}>
          <meshStandardMaterial color="#f59e0b" transparent opacity={0.8} />
        </Sphere>
      </Float>
    </group>
  );
}

// 3D Background Scene
function BackgroundScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <FloatingElements />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Enhanced Contact Info Card with 3D effects
function ContactInfoCard({
  icon: Icon,
  title,
  details,
  description,
  index,
}: {
  icon: LucideIcon;
  title: string;
  details: string[];
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      className="perspective-1000"
    >
      <Card className="bg-gradient-to-br from-white to-gray-50 shadow-xl border-0 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardContent className="p-6 relative z-10">
          <div className="flex items-start space-x-4">
            <motion.div
              className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              {details.map((detail, idx) => (
                <p key={idx} className="text-gray-700 font-medium mb-1">
                  {detail}
                </p>
              ))}
              <p className="text-gray-500 text-sm mt-2">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const { t } = useLanguage();

  return (
    <section
      ref={containerRef}
      className="relative py-20 min-h-screen overflow-hidden"
    >
      {/* 3D Background */}
      <BackgroundScene />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-purple-50/80 backdrop-blur-sm" />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("contact.hero.title")}
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("contact.hero.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="perspective-1000"
          >
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white via-white to-gray-50/50 backdrop-blur-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
              <CardContent className="p-8 relative z-10">
                <div className="mb-8">
                  <motion.h2
                    className="text-3xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Send us your feedback
                  </motion.h2>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    Your feedback helps us improve our services
                  </motion.p>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 font-medium">
                      Thank you! Your feedback has been submitted successfully.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={onSubmit} className="space-y-6">
                  {[
                    {
                      key: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "Enter your full name",
                    },
                    {
                      key: "address",
                      label: "Address",
                      type: "text",
                      placeholder: "Enter your address",
                    },
                    {
                      key: "telephone",
                      label: "Phone Number",
                      type: "tel",
                      placeholder: "Enter your phone number",
                    },
                    {
                      key: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "Enter your email address",
                    },
                  ].map((field, index) => (
                    <motion.div
                      key={field.key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label
                        htmlFor={field.key}
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        {field.label} *
                      </label>
                      <Input
                        id={field.key}
                        name={field.key}
                        type={field.type}
                        required
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) =>
                          onFormChange(field.key, e.target.value)
                        }
                        placeholder={field.placeholder}
                        className={`transition-all duration-300 focus:scale-105 ${
                          errors[field.key as keyof typeof errors]
                            ? "border-red-500 bg-red-50"
                            : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                        }`}
                      />
                      {errors[field.key as keyof typeof errors] && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-sm text-red-600"
                        >
                          {errors[field.key as keyof typeof errors]}
                        </motion.p>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label
                      htmlFor="complaint"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="complaint"
                      name="complaint"
                      rows={5}
                      value={formData.complaint}
                      onChange={(e) =>
                        onFormChange("complaint", e.target.value)
                      }
                      placeholder="Tell us about your experience or any concerns..."
                      className="transition-all duration-300 focus:scale-105 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                            className="rounded-full h-5 w-5 border-b-2 border-white mr-2"
                          />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>

                <motion.div
                  className="mt-8 pt-6 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-center text-gray-600">
                    Need immediate assistance?{" "}
                    <motion.a
                      href="https://wa.me/919876543210"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Contact us on WhatsApp
                    </motion.a>
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                className="text-3xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Contact Information
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
We&rsquo;re available 24/7 to provide you with the best medical care
and support

              </motion.p>
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

            {/* Enhanced Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
              }}
              className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-2xl p-6 shadow-lg"
            >
              <motion.a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:bg-red-100/50 transition-all duration-300 rounded-xl -m-2 p-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <motion.div
                    className="bg-gradient-to-br from-red-500 to-pink-600 p-3 rounded-xl shadow-lg"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HeadphonesIcon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-red-800">
                    Emergency Support
                  </h3>
                </div>
                <p className="text-red-700 mb-2">
                  Available 24/7 for urgent medical assistance
                </p>
                <p className="text-red-800 font-bold text-xl">
                  +91 98765 43210
                </p>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
