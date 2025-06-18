"use client";
import React from "react";

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
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Hello, I would like to inquire about medical tour services.",
  type = "primary",
  text = "Contact via WhatsApp",
}) => {
  const phone = "9097272726";
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${phone}?text=${encodedMessage}`;

  let buttonClass = "";
  switch (type) {
    case "primary":
      buttonClass = "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow";
      break;
    case "secondary":
      buttonClass = "bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-md shadow";
      break;
    case "outline":
      buttonClass = "border border-green-500 hover:bg-green-50 text-green-500 px-4 py-2 rounded-md shadow";
      break;
    case "icon":
      buttonClass = "flex items-center gap-2 text-green-500 hover:text-green-600 px-2 py-1";
      break;
    case "contact":
      buttonClass = "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow";
      break;
    case "knowMore":
      buttonClass = "bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md shadow";
      break;
    case "emergency":
      buttonClass = "bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow font-bold";
      break;
    case "bookNow":
      buttonClass = "bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md shadow";
      break;
    case "info":
      buttonClass = "bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md shadow";
      break;
    case "support":
      buttonClass = "bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md shadow";
      break;
    case "callback":
      buttonClass = "bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md shadow";
      break;
    case "help":
      buttonClass = "bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md shadow";
      break;
    default:
      buttonClass = "bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow";
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClass}
      style={{ zIndex: 50, position: "relative" }}
    >
      {type === "icon" && (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.26-1.6A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.21-3.48-8.52zM12 22c-1.8 0-3.53-.48-5.03-1.39l-.36-.21-3.7.94.99-3.59-.23-.37C2.53 15.51 2 13.8 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.15-7.85l-2.16-.62c-.29-.08-.61 0-.83.21l-.64.66a9.79 9.79 0 01-4.25-4.25l.66-.64c.22-.22.3-.54.21-.83l-.62-2.16a.75.75 0 00-.71-.53H9.25c-.41 0-.75.34-.75.75 0 5.52 4.48 10 10 10 .41 0 .75-.34.75-.75v-1.09c0-.33-.21-.62-.53-.71z" />
        </svg>
      )}
      {text}
    </a>
  );
};

export default WhatsAppButton;
