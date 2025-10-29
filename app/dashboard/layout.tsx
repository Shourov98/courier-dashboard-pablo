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
      {/* ❌ Hide everything below lg */}
      <div className="hidden lg:flex flex-col min-h-screen">
        <Navbar />

        {/* Sidebar + Main Content */}
        <div className="flex flex-1">
          <Sidebar />
          {/* Main content (offset by sidebar width) */}
          <main className="flex-1 px-4 bg-[#FFFDF6] overflow-y-auto">
            {children}
          </main>
        </div>
      </div>

      {/* 🚫 Message for smaller screens */}
      <div className="lg:hidden flex items-center justify-center h-screen text-center px-6">
        <p className="text-gray-700 text-lg font-medium">
          ⚠️ Dashboard is available on laptops or larger screens only.
        </p>
      </div>
    </div>
  );
}
