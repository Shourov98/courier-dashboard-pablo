"use client";

import { Clock, Check, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

type Notification = {
  id: string;
  service: string;
  user: string;
  message: string;
  orderId: string;
  createdAt: Date; // store timestamp
  type: "pending" | "success" | "error";
};

// 🕓 Helper — format “x minutes ago”
const formatTimeAgo = (date: Date) => {
  const now = new Date().getTime();
  const diff = Math.floor((now - date.getTime()) / 1000); // in seconds

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 172800) return "yesterday";
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function NotificationsPage() {
  // 🧩 Notification Data (no more manual “10 min ago”)
  const [orderStatus, setOrderStatus] = useState<Notification[]>([
    {
      id: "1",
      service: "Moving Services",
      user: "John Doe",
      message: "you will notify the admin of the extra added item",
      orderId: "TP-123",
      createdAt: new Date(Date.now() - 5 * 60 * 1000), // 5 min ago
      type: "pending",
    },
    {
      id: "2",
      service: "Moving Services",
      user: "John Doe",
      message: "Quotation has been received",
      orderId: "TP-123",
      createdAt: new Date(Date.now() - 10 * 60 * 1000), // 10 min ago
      type: "pending",
    },
    {
      id: "3",
      service: "Moving Services",
      user: "John Doe",
      message: "payment has been done",
      orderId: "TP-123",
      createdAt: new Date(Date.now() - 20 * 60 * 1000), // 20 min ago
      type: "success",
    },
    {
      id: "4",
      service: "Moving Services",
      user: "John Doe",
      message: "",
      orderId: "TP-123",
      createdAt: new Date(Date.now() - 40 * 60 * 1000), // 40 min ago
      type: "pending",
    },
    {
      id: "5",
      service: "Moving Services",
      user: "John Doe",
      message: "your refund request has been processing",
      orderId: "TP-123",
      createdAt: new Date(Date.now() - 60 * 60 * 1000), // 1 hr ago
      type: "error",
    },
    {
      id: "6",
      service: "Moving Services",
      user: "John Doe",
      message: "your refund request has been processed",
      orderId: "TP-123",
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hr ago
      type: "error",
    },
  ]);

  // Refresh time every minute to stay accurate
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => forceUpdate((n) => n + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "success":
        return (
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
        );
      case "error":
        return (
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
            <AlertCircle className="w-4 h-4 text-white" />
          </div>
        );
      case "pending":
      default:
        return (
          <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center">
            <Clock className="w-4 h-4 text-white" />
          </div>
        );
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen text-[#212121]">
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>

      <div className="flex flex-col gap-4">
        {orderStatus.map((notif) => (
          <div
            key={notif.id}
            className="flex items-start gap-4 border border-gray-200 rounded-lg p-4 hover:shadow-sm transition"
          >
            {/* Icon */}
            {getIcon(notif.type)}

            {/* Text */}
            <div className="flex flex-col">
              <p className="font-semibold text-sm md:text-base">
                {notif.service}: {notif.user}
                {notif.message && `, ${notif.message}`}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Order ID: {notif.orderId}
              </p>
              <p className="text-gray-400 text-xs mt-1">
                {formatTimeAgo(notif.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
