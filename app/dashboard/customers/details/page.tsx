"use client";

import React from "react";
import { CheckCircle, ChevronDown } from "lucide-react";

export default function CustomerOrdersPage() {
  // 🔹 Mock customer data
  const customer = {
    name: "John Doe",
    email: "example@gmail.com",
    whatsapp: "+8801XXXXXXXXX",
  };

  // 🔹 Mock orders
  const orders = [
    {
      id: "TP-123",
      status: "Paid",
      date: "September 20, 2025",
      time: "10:00 AM",
      from: {
        address: "43, Mookhali, Dhaka 1212, Bangladesh",
        propertyType: "Flat",
        rooms: 2,
        floor: 2,
        lift: "Yes",
        jobNotes: "I will move along with your van",
      },
      to: {
        address: "43, Mookhali, Dhaka 1212, Bangladesh",
        propertyType: "Flat",
        rooms: 2,
        floor: 2,
        lift: "No",
        jobNotes: "N/A",
      },
      extraServices: ["Packing"],
      items: [
        { label: "Moving Service", price: "€24.50" },
        { label: "Packing", price: "€23.50" },
        { label: "Distance (25km @ €12.50/km)", price: "€24.50" },
      ],
      subtotal: "€171.50",
      tax: "5%",
      discount: "5%",
      total: "€171.50",
      paid: true,
    },
    {
      id: "TP-456",
      status: "Paid",
      date: "October 4, 2025",
      time: "02:00 PM",
      from: {
        address: "House 10, Banani, Dhaka 1213, Bangladesh",
        propertyType: "House",
        rooms: 4,
        floor: 1,
        lift: "No",
        jobNotes: "Furniture needs to be wrapped carefully.",
      },
      to: {
        address: "House 22, Uttara, Dhaka 1230, Bangladesh",
        propertyType: "Flat",
        rooms: 3,
        floor: 3,
        lift: "Yes",
        jobNotes: "No pets allowed in building.",
      },
      extraServices: ["Packing", "Moving Lift"],
      items: [
        { label: "Moving Service", price: "€48.00" },
        { label: "Packing", price: "€20.00" },
        { label: "Moving Lift", price: "€15.00" },
      ],
      subtotal: "€83.00",
      tax: "5%",
      discount: "0%",
      total: "€87.15",
      paid: true,
    },
  ];

  return (
    <div className="p-8 w-full bg-[#FFFDF6] min-h-screen space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h2 className="text-2xl font-semibold text-[#0D1240]">
          Customers Management
        </h2>

        <div className="flex items-center gap-3">
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-[#FFCF00]">
            <option>Services Type</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-[#FFCF00]">
            <option>Pending</option>
            <option>Paid</option>
          </select>
        </div>
      </div>

      {/* Contact Details */}
      <div>
        <h3 className="text-lg font-semibold text-[#0D1240] mb-4">
          Contact Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-5 rounded-lg border border-gray-200">
          <InfoBox label="Name" value={customer.name} />
          <InfoBox label="Email" value={customer.email} />
          <InfoBox label="Whatsapp Number" value={customer.whatsapp} />
        </div>
      </div>

      {/* Orders */}
      {orders.map((order, index) => (
        <div
          key={order.id}
          className="bg-white border border-gray-200 rounded-lg p-6 space-y-6 shadow-sm"
        >
          {/* Details Header */}
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-[#0D1240]">Details</h3>

            <div className="flex items-center gap-3">
              <span className="text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
                {order.status}
              </span>
              <span className="text-gray-700 text-sm">
                Order ID: <strong>{order.id}</strong>
              </span>
            </div>
          </div>

          {/* DATE & TIME */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Date & Time</h4>
            <div className="border border-gray-200 rounded-md px-5 py-4 grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="text-gray-800 font-medium">{order.date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="text-gray-800 font-medium">{order.time}</p>
              </div>
            </div>
          </div>

          {/* Moving Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-md p-4 space-y-1">
              <h4 className="font-medium text-gray-800">Moving From</h4>
              <InfoLine label="Address" value={order.from.address} />
              <InfoLine label="Property Type" value={order.from.propertyType} />
              <InfoLine label="Rooms" value={order.from.rooms} />
              <InfoLine label="Floor" value={order.from.floor} />
              <InfoLine label="Lift available" value={order.from.lift} />
              <InfoLine label="Job Notes" value={order.from.jobNotes} />
            </div>

            <div className="border border-gray-200 rounded-md p-4 space-y-1">
              <h4 className="font-medium text-gray-800">Moving To</h4>
              <InfoLine label="Address" value={order.to.address} />
              <InfoLine label="Property Type" value={order.to.propertyType} />
              <InfoLine label="Rooms" value={order.to.rooms} />
              <InfoLine label="Floor" value={order.to.floor} />
              <InfoLine label="Lift available" value={order.to.lift} />
              <InfoLine label="Job Notes" value={order.to.jobNotes} />
            </div>
          </div>

          {/* Extra Services */}
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Extra Services</h4>
            <div className="border border-gray-200 rounded-md p-3 text-gray-700 text-sm">
              {order.extraServices.join(", ")}
            </div>
          </div>

          {/* Items & Price */}
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Items & Price</h4>
            <div className="border border-gray-200 rounded-md p-4">
              <div className="divide-y divide-gray-100">
                {order.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm py-1 text-gray-700"
                  >
                    <span>{item.label}</span>
                    <span>{item.price}</span>
                  </div>
                ))}

                <SummaryRow label="Sub Total" value={order.subtotal} />
                <SummaryRow label="Tax" value={order.tax} />
                <SummaryRow label="Discount" value={order.discount} />
                <SummaryRow label="Total" value={order.total} bold highlight />
              </div>
            </div>
          </div>

          {/* PAYMENT */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Payment</h4>
            <div className="border border-gray-200 rounded-md px-5 py-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Paid</p>
                <p className="text-gray-800 font-medium">Amount</p>
              </div>

              <div className="flex items-center gap-4">
                {order.paid && (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">
                    ✓
                  </div>
                )}
                <p className="text-xl font-semibold text-[#0D1240]">
                  {order.total}
                </p>
              </div>
            </div>
          </div>

          {/* Divider between orders */}
          {index < orders.length - 1 && (
            <div className="border-t border-gray-200 my-6"></div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ───────────── Small Helper Components ───────────── */

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-gray-500 text-sm">{label}</span>
      <span className="text-gray-800 font-medium">{value}</span>
    </div>
  );
}

function InfoLine({ label, value }: { label: string; value: any }) {
  return (
    <p className="text-sm text-gray-600">
      <span className="font-medium text-gray-800">{label}:</span> {value}
    </p>
  );
}

function SummaryRow({
  label,
  value,
  bold = false,
  highlight = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex justify-between py-1 ${
        highlight
          ? "text-[#0D1240] font-semibold border-t pt-2 mt-2"
          : "text-gray-700"
      } ${bold ? "font-semibold" : ""}`}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
