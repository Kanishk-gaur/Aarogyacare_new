"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
// Using Lucide React for better icons

interface WhatsAppButtonProps {
  message?: string;
  type?:
    | "primary"
    | "secondary"
    | "outline"
    | "icon"
    | "contact"
    | "knowMore"
    | "emergency"
    | "bookNow"
    | "info"
    | "support"
    | "callback"
    | "help";
  text?: string;
  className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Hello, I would like to inquire about medical tour services.",
  type = "primary",
  text = "Contact via WhatsApp",
  className = "",
}) => {
  const phone = "9097272726";
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${phone}?text=${encodedMessage}`;

  let buttonClass =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ";
  let iconSize = 20;

  switch (type) {
    case "primary":
      buttonClass +=
        "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 shadow-lg hover:shadow-xl";
      break;
    case "secondary":
      buttonClass +=
        "bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 text-green-800 px-6 py-3 shadow-md hover:shadow-lg";
      break;
    case "outline":
      buttonClass +=
        "border-2 border-green-500 bg-white hover:bg-green-50 text-green-600 px-6 py-3 shadow-sm hover:shadow-md";
      break;
    case "icon":
      buttonClass +=
        "bg-gradient-to-r from-green-500 to-green-600 text-white p-3 shadow-lg hover:shadow-xl";
      iconSize = 24;
      break;
    case "contact":
      buttonClass +=
        "bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white px-6 py-3 shadow-lg hover:shadow-xl flex items-center gap-2";
      break;

    case "knowMore":
      buttonClass +=
        "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 shadow-lg hover:shadow-xl";
      break;
    case "emergency":
      buttonClass +=
        "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 shadow-lg hover:shadow-xl font-bold animate-pulse";
      break;
    case "bookNow":
      buttonClass +=
        "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-6 py-3 shadow-lg hover:shadow-xl";
      break;
    case "info":
      buttonClass +=
        "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-3 shadow-lg hover:shadow-xl";
      break;
    case "support":
      buttonClass +=
        "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-3 shadow-lg hover:shadow-xl";
      break;
    case "callback":
      buttonClass +=
        "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-3 shadow-lg hover:shadow-xl";
      break;
    case "help":
      buttonClass +=
        "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 shadow-lg hover:shadow-xl";
      break;
    default:
      buttonClass +=
        "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 shadow-lg hover:shadow-xl";
  }

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonClass} ${className}`}
      style={{ zIndex: 50, position: "relative" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Shiny overlay effect */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-10 transition-opacity duration-300" />
      </span>

      {/* Button content */}
      <span className="relative flex items-center gap-2">
        {type !== "icon" && (
          <FaWhatsapp
            size={iconSize}
            className={type === "outline" ? "text-green-600" : "text-white"}
          />
        )}
        {type !== "icon" && text}
        {type === "icon" && <FaWhatsapp size={iconSize} />}
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
