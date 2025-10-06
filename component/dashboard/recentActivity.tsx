"use client";
import { WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar, Clock, MapPin, Phone, MoreVertical } from "lucide-react";

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
    <div className="flex flex-col gap-8 w-full   mt-12">
      <h2 className="text-[40px] font-semibold text-[#212121]">Recent Activity</h2>

      <div className="flex flex-wrap gap-8">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="flex flex-col justify-between w-[488px] h-[417px] border border-[#AEAEAE] rounded-xl bg-white p-8"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <h3 className="text-[28px] font-semibold text-[#212121]">Summary</h3>

              <div className="flex flex-col items-end gap-3">
                <div
                  className={`flex items-center gap-2 px-2 py-1 rounded-full ${
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
                  ></span>
                </div>
                <span className="text-sm text-[#212121]">#{booking.id}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[18px] font-semibold text-[#212121]">{booking.name}</h4>

              {/* Date & Time */}
              <div className="flex items-center gap-8 text-[#717171] text-xs">
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
              <div className="flex items-center gap-2 text-[#212121]">
                <HugeiconsIcon icon={WhatsappIcon} size={20} />
                <span className="text-base">{booking.phone}</span>
              </div>

              {/* Pickup Address */}
              <div className="flex items-center gap-2 text-[#717171]">
                <MapPin size={20} />
                <span className="text-base">{booking.pickup}</span>
                <MoreVertical size={18} className="text-[#212121]" />
              </div>
              {/* Drop Address */}
              <div className="flex items-center gap-2 text-[#212121]">
                <MapPin size={20} className="text-[#B59300]" />
                <span className="text-base">{booking.drop}</span>
              </div>

              {/* Price */}
              <p className="text-right text-[28px] font-semibold text-[#212121] mt-2">
                {booking.amount}
              </p>

              {/* Button */}
              <button className="bg-[#EDEDED] text-[#212121] text-base font-medium py-3 rounded-xl hover:bg-gray-200 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
