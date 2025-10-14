import Sidebar from "@/component/layout/sidebar";
import WhatsAppButton from "@/component/layout/mostTop";
import Navbar from "@/component/layout/topOne";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="flex justify-end m-0">
        <WhatsAppButton number="+880123456789" />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <Sidebar />
        <main className="  p-6 w-full ">{children}</main>
      </div>
    </div>
  );
}
