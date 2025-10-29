"use client";

import React from "react";
import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar, Clock, MapPin, MoreVertical } from "lucide-react";

interface Booking {
  id: string;
  status: "Pending" | "Refund";
  name: string;
  date: string;
  time: string;
  phone: string;
  pickup: string;
  drop: string;
  amount: string;
}

const bookings: Booking[] = [
  {
    id: "TP-123",
    status: "Pending",
    name: "John Doe",
    date: "September 1st, 2025",
    time: "10:00 AM",
    phone: "566548551",
    pickup: "43, Moakhali, Dhaka 1212, Bangladesh",
    drop: "43, Moakhali, Dhaka 1212, Bangladesh",
    amount: "€719.80",
  },
  {
    id: "TP-124",
    status: "Refund",
    name: "John Doe",
    date: "September 1st, 2025",
    time: "10:00 AM",
    phone: "566548551",
    pickup: "43, Moakhali, Dhaka 1212, Bangladesh",
    drop: "43, Moakhali, Dhaka 1212, Bangladesh",
    amount: "€719.80",
  },
];

export default function RecentActivity() {
  return (
    <div className="flex flex-col gap-10 w-full mt-12">
      {/* Header */}
      <h2 className="text-[32px] lg:text-[40px] font-semibold text-[#212121]">
        Recent Activity
      </h2>

      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex flex-col justify-between h-full border border-[#E5E5E5] rounded-2xl bg-white p-6 hover:shadow-md transition-shadow duration-200"
          >
            {/* Header Row */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-[#212121]">
                  Summary
                </h3>
                <p className="text-sm text-gray-500 mt-1">#{booking.id}</p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                    booking.status === "Pending"
                      ? "bg-[#FFF7E8]"
                      : "bg-[#FCEAEA]"
                  }`}
                >
                  <span
                    className={`text-xs font-medium ${
                      booking.status === "Pending"
                        ? "text-[#B27B0E]"
                        : "text-[#DD2C2C]"
                    }`}
                  >
                    {booking.status}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      booking.status === "Pending"
                        ? "bg-[#B27B0E]"
                        : "bg-[#DD2C2C]"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold text-[#212121]">
                {booking.name}
              </h4>

              {/* Date & Time */}
              <div className="flex items-center gap-6 text-[#717171] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{booking.time}</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 text-[#212121] text-sm">
                <HugeiconsIcon icon={WhatsappIcon} size={18} />
                <span>{booking.phone}</span>
              </div>

              {/* Pickup */}
              <div className="flex items-start gap-2 text-[#717171] text-sm">
                <MapPin size={18} />
                <span>{booking.pickup}</span>
              </div>

              <MoreVertical size={16} className="text-gray-400" />

              {/* Drop */}
              <div className="flex items-start gap-2 text-[#212121] text-sm">
                <MapPin size={18} className="text-[#B59300]" />
                <span>{booking.drop}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-col gap-3">
              <p className="text-right text-[22px] font-semibold text-[#212121]">
                {booking.amount}
              </p>
              <button className="bg-[#EDEDED] text-[#212121] text-sm font-medium py-3 rounded-xl hover:bg-gray-200 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
