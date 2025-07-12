import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const StickyButtons = () => {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="flex gap-3 bg-white px-4 py-2 rounded-full shadow-xl pointer-events-auto border border-gray-200">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9097272726" // change to your number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition text-sm"
        >
          <FaWhatsapp size={16} />
          <span>WhatsApp</span>
        </a>

        {/* Call Button */}
        <a
          href="tel:9097272726" // change to your number
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition text-sm"
        >
          <FaPhone size={16} />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
};

export default StickyButtons;
