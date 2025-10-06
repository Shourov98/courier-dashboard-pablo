"use client";

import React from "react";
import Image from "next/image";
import whatsapp from "@/public/Whatsapp.svg"

interface WhatsAppButtonProps {
  number: string; // e.g. "+880123456789"
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ number }) => {
  const whatsappLink = `https://wa.me/${number.replace(/\D/g, "")}`;

  return (
    <div className="flex items-center">
   
      {/* WhatsApp + Call buttons */}
      <span className="w-1/2 pr-[5px] md:pr-[50px] pt-2 flex items-end justify-end md:gap-2 mb-0 pb-0">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-end text-right gap-1"
        >
         <Image src={whatsapp} alt="whatsapp icon" />
          <span className="text-gray-900">{number}</span>
        </a> 
      </span>
    </div>
  );
};

export default WhatsAppButton;
