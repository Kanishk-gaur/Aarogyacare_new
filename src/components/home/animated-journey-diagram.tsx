"use client"

import { Lightbulb, Settings, Clock, Target, Send } from "lucide-react"
import { useEffect, useState } from "react"

export default function ExactInfographicDesign() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(2) // Start with step 3 active as shown in image

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      id: 1,
      step: "STEP 01",
      icon: Lightbulb,
      color: "#22c55e", // Green
      position: { left: "8%", top: "75%" },
      textPosition: { left: "15%", top: "75%" },
    },
    {
      id: 2,
      step: "STEP 02",
      icon: Settings,
      color: "#06b6d4", // Teal
      position: { left: "25%", top: "45%" },
      textPosition: { left: "32%", top: "45%" },
    },
    {
      id: 3,
      step: "STEP 03",
      icon: Clock,
      color: "#3b82f6", // Blue
      position: { left: "50%", top: "65%" },
      textPosition: { left: "50%", top: "80%" },
      center: true,
    },
    {
      id: 4,
      step: "STEP 04",
      icon: Clock,
      color: "#2563eb", // Darker Blue
      position: { left: "75%", top: "50%" },
      textPosition: { right: "8%", top: "50%" },
      rightAlign: true,
    },
    {
      id: 5,
      step: "STEP 05",
      icon: Target,
      color: "#7c3aed", // Purple
      position: { left: "85%", top: "25%" },
      textPosition: { right: "8%", top: "25%" },
      rightAlign: true,
    },
  ]

  return (
    <div className="w-full h-screen bg-gray-100 relative overflow-hidden">
      {/* Header Section */}
      <div className="absolute top-8 left-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">INFOGRAPHICS</h1>
        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">DESIGN TEMPLATE</p>
        <div className="flex items-center mt-3 gap-1">
          <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Step 03 Label */}
      <div className="absolute top-8 right-24">
        <span className="text-sm font-bold text-gray-600">STEP 03</span>
      </div>

      {/* Paper Airplane */}
      <div className="absolute top-8 right-8">
        <Send className="w-8 h-8 text-gray-500 transform rotate-12" />
      </div>

      {/* Curved Dotted Path */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <path
          d="M 120 450 Q 200 350 300 270 Q 400 200 500 390 Q 600 580 700 300 Q 800 20 900 300 Q 1000 580 1100 150"
          stroke="#cbd5e1"
          strokeWidth="2"
          strokeDasharray="8,6"
          fill="none"
          opacity="0.8"
          className={`transition-all duration-3000 ${isVisible ? "animate-pulse" : ""}`}
        />
      </svg>

      {/* Step Icons and Content */}
      {steps.map((step, index) => {
        const IconComponent = step.icon
        const isActive = activeStep === index

        return (
          <div key={step.id}>
            {/* Step Icon */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: step.position.left,
                top: step.position.top,
                zIndex: 10,
              }}
              onClick={() => setActiveStep(index)}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                  isActive ? "scale-110 shadow-xl" : "group-hover:scale-105"
                }`}
                style={{ backgroundColor: step.color }}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </div>

              {/* White border ring for active step */}
              {isActive && (
                <div
                  className="absolute inset-0 rounded-full border-4 border-white shadow-lg"
                  style={{ margin: "-4px" }}
                ></div>
              )}
            </div>

            {/* Step Content */}
            <div
              className={`absolute max-w-xs ${step.center ? "text-center transform -translate-x-1/2" : ""} ${step.rightAlign ? "text-right" : ""}`}
              style={{
                left: step.textPosition.left,
                right: step.textPosition.right,
                top: step.textPosition.top,
                zIndex: 5,
              }}
            >
              <h3 className="font-bold text-gray-800 text-sm mb-1">{step.step}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        )
      })}

      {/* Decorative Elements */}
      <div className="absolute top-32 left-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-gray-400 rounded-full opacity-60"></div>
      <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-60"></div>
    </div>
  )
}
