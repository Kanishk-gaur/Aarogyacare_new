"use client"

import {
  Phone,
  Calculator,
  Plane,
  Users,
  Stethoscope,
  ArrowLeft,
  HeartHandshake,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Award,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context" // Assuming you have this context hook

export default function Component() {
  const { t } = useLanguage()
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const steps = [
    {
      number: 1,
      icon: Phone,
      title: t("steps.firstContact.title"),
      description: t("steps.firstContact.description"),
      color: "from-blue-600 via-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      accentColor: "border-blue-200",
      time: t("steps.firstContact.time"),
    },
    {
      number: 2,
      icon: Users,
      title: t("steps.expertTeam.title"),
      description: t("steps.expertTeam.description"),
      color: "from-emerald-600 via-emerald-500 to-teal-400",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600",
      accentColor: "border-emerald-200",
      time: t("steps.expertTeam.time"),
    },
    {
      number: 3,
      icon: Calculator,
      title: t("steps.assessment.title"),
      description: t("steps.assessment.description"),
      color: "from-purple-600 via-purple-500 to-indigo-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      iconColor: "text-purple-600",
      accentColor: "border-purple-200",
      time: t("steps.assessment.time"),
    },
    {
      number: 4,
      icon: Plane,
      title: t("steps.travel.title"),
      description: t("steps.travel.description"),
      color: "from-orange-600 via-orange-500 to-amber-400",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      iconColor: "text-orange-600",
      accentColor: "border-orange-200",
      time: t("steps.travel.time"),
    },
    {
      number: 5,
      icon: Users,
      title: t("steps.reception.title"),
      description: t("steps.reception.description"),
      color: "from-pink-600 via-pink-500 to-rose-400",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
      iconColor: "text-pink-600",
      accentColor: "border-pink-200",
      time: t("steps.reception.time"),
    },
    {
      number: 6,
      icon: Stethoscope,
      title: t("steps.treatment.title"),
      description: t("steps.treatment.description"),
      color: "from-green-600 via-green-500 to-emerald-400",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      accentColor: "border-green-200",
      time: t("steps.treatment.time"),
    },
    {
      number: 7,
      icon: ArrowLeft,
      title: t("steps.return.title"),
      description: t("steps.return.description"),
      color: "from-violet-600 via-violet-500 to-purple-400",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      iconColor: "text-violet-600",
      accentColor: "border-violet-200",
      time: t("steps.return.time"),
    },
    {
      number: 8,
      icon: HeartHandshake,
      title: t("steps.followup.title"),
      description: t("steps.followup.description"),
      color: "from-teal-600 via-teal-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      iconColor: "text-teal-600",
      accentColor: "border-teal-200",
      time: t("steps.followup.time"),
    },
  ]

  const stats = [
    { icon: Star, value: "98%", label: t("stats.satisfaction") },
    { icon: Clock, value: "48hr", label: t("stats.response") },
    { icon: Shield, value: "100%", label: t("stats.success") },
    { icon: Award, value: "15+", label: t("stats.experience") },
  ]

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <CheckCircle className="h-4 w-4" />
            {t("header.trusted")}
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              {t("header.title1")}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              {t("header.title2")}
            </span>
          </h2>

          <p className="text-slate-600 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            {t("header.subtitle1")}
            <span className="font-semibold text-blue-600"> {t("header.highlight1")}</span>
            {t("header.subtitle2")}
            <span className="font-semibold text-emerald-600"> {t("header.highlight2")}</span>
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Enhanced Steps Grid */}
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M 25 12.5 Q 50 25 75 12.5 Q 50 37.5 25 37.5 Q 50 62.5 75 62.5 Q 50 87.5 25 87.5"
                stroke="url(#connectionGradient)"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="2,2"
                className="animate-pulse"
              />
            </svg>
          </div>

          {steps.map((step) => {
            const IconComponent = step.icon
            const isHovered = hoveredStep === step.number

            return (
              <Card
                key={step.number}
                className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isHovered ? "scale-105" : ""
                } cursor-pointer`}
                onMouseEnter={() => setHoveredStep(step.number)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                ></div>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                ></div>

                <CardContent className="relative p-10">
                  {/* Time Badge */}
                  <div className="absolute top-6 right-6">
                    <div
                      className={`px-3 py-1 ${step.bgColor} ${step.accentColor} border rounded-full text-xs font-semibold ${step.iconColor}`}
                    >
                      {step.time}
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    {/* Enhanced Step Number */}
                    <div className="flex-shrink-0 relative">
                      <div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-black text-2xl shadow-2xl group-hover:scale-110 transition-all duration-300`}
                      >
                        {step.number}
                      </div>
                      <div
                        className={`absolute -inset-2 bg-gradient-to-br ${step.color} opacity-20 rounded-3xl blur-lg group-hover:opacity-40 transition-all duration-300`}
                      ></div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-5 mb-6">
                        <div
                          className={`p-4 rounded-2xl ${step.bgColor} ${step.accentColor} border group-hover:scale-110 transition-all duration-300`}
                        >
                          <IconComponent className={`h-7 w-7 ${step.iconColor}`} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-lg font-light group-hover:text-slate-700 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div
                    className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-15 transition-all duration-500 group-hover:scale-125`}
                  ></div>
                  <div
                    className={`absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-all duration-500`}
                  ></div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="text-center mt-24">
          <div className="relative inline-flex flex-col items-center gap-6 px-12 py-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-200/50 max-w-2xl">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl blur-xl"></div>

            <div className="relative flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">{t("cta.title")}</h3>
                <p className="text-slate-600 font-medium">
                  {t("cta.subtitle")}
                </p>
              </div>
            </div>

            <div className="relative flex flex-wrap items-center justify-center gap-8 text-sm">
              {[
                { color: "bg-green-500", text: t("features.support") },
                { color: "bg-blue-500", text: t("features.response") },
                { color: "bg-purple-500", text: t("features.network") },
                { color: "bg-orange-500", text: t("features.plans") },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-700 font-semibold">
                  <div className={`w-3 h-3 ${item.color} rounded-full shadow-lg animate-pulse`}></div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}