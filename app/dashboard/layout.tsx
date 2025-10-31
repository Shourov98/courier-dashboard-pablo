"use client";

import Sidebar from "@/component/layout/sidebar";
import WhatsAppButton from "@/component/layout/mostTop";
import Navbar from "@/component/layout/topOne";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      {/* 🌐 Large screens (Desktop View) */}
      <div className=" lg:flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Sidebar + Main Content */}
        <div className="flex flex-1">
          <Sidebar />

          {/* Main content */}
          <main className="flex-1 px-4 bg-[#FFFDF6] overflow-y-auto">
            {children}
          </main>
        </div>
      </div>

      {/* 📱 Small screens (Mobile View) */}
      <div className="flex flex-col lg:hidden min-h-screen bg-[#FFFDF6]">
        <Navbar />
        {/* Optional: show a smaller header or message */}
        {/* <div className="p-4 font-medium text-gray-700 text-center border-b">
          Dashboard (Mobile View)
        </div> */}
        <main className="flex-1 px-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
