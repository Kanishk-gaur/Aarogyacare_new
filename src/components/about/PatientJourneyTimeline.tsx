"use client";
import React from "react";
import { FaPhone, FaUserMd, FaClipboardList, FaPlane, FaHospitalUser, FaHeartbeat, FaHome, FaHandsHelping } from "react-icons/fa";

interface Step {
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
}


const steps: Step[] = [
  {
    title: "First Contact",
    description: "Share your case details through our secure contact form or phone consultation.",
    time: "Immediate",
    icon: <FaPhone className="text-white text-xl" />,
  },
  {
    title: "Expert Team Connection",
    description: "Our medical team connects with you to understand your healthcare needs.",
    time: "Within 2 hours",
    icon: <FaUserMd className="text-white text-xl" />,
  },
  {
    title: "Medical & Cost Assessment",
    description: "Receive a transparent evaluation and cost breakdown.",
    time: "48 hours",
    icon: <FaClipboardList className="text-white text-xl" />,
  },
  {
    title: "Travel Coordination",
    description: "We help you with flights, visas, and accommodation.",
    time: "3–5 days",
    icon: <FaPlane className="text-white text-xl" />,
  },
  {
    title: "VIP Airport Reception",
    description: "Premium airport reception with transport to your accommodation.",
    time: "On arrival",
    icon: <FaHospitalUser className="text-white text-xl" />,
  },
  {
    title: "World-Class Treatment",
    description: "Get exceptional care from certified specialists.",
    time: "As scheduled",
    icon: <FaHeartbeat className="text-white text-xl" />,
  },
  {
    title: "Safe Journey Home",
    description: "We ensure safe departure with complete medical documentation.",
    time: "Post-treatment",
    icon: <FaHome className="text-white text-xl" />,
  },
  {
    title: "Lifelong Care Partnership",
    description: "24/7 support and follow-ups for ongoing wellness.",
    time: "Ongoing",
    icon: <FaHandsHelping className="text-white text-xl" />,
  },
];

const PatientJourneyTimeline: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Your Seamless Medical Care Journey
      </h2>
      <div className="flex flex-col items-center overflow-x-auto">
        <div className="flex items-center justify-center gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center w-56 relative">
              {/* Arrow connector */}
              {index !== 0 && (
                <div className="absolute -left-8 top-8 w-8 h-1 bg-blue-600 z-0"></div>
              )}
              {/* Circle with icon */}
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center z-10 shadow">
                {step.icon}
              </div>
              {/* Step details */}
              <h3 className="mt-4 font-semibold text-blue-700">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
              <span className="text-green-600 text-xs font-semibold mt-1">
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientJourneyTimeline;
