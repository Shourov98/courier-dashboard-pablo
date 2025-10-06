"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  BarChart2,
  Bell,
  Calendar,
  Users,
  Package,
  DollarSign,
  User,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// 🧭 Define menu structure and paths
const menu = {
  main: [
    { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard/dashboard" },
    { label: "Analytics", icon: BarChart2, path: "/dashboard/analytics" },
    { label: "Notifications", icon: Bell, path: "/dashboard/notifications" },
  ],
  booking: [
    { label: "Bookings", icon: Calendar, path: "/dashboard/bookings" },
    { label: "Customers", icon: Users, path: "/dashboard/customers" },
    {
      label: "Inventory Management",
      icon: Package,
      children: [
        { label: "Inventory", path: "/dashboard/inventory" },
        { label: "Categories", path: "/dashboard/categories" },
      ],
    },
  ],
  pricing: [{ label: "Unit & Pricing", icon: DollarSign, path: "/dashboard/pricing" }],
  personal: [
    { label: "Profile", icon: User, path: "/dashboard/profile" },
    { label: "Logout", icon: LogOut, danger: true, path: "/auth/signin" },
  ],
};

const Sidebar = () => {
  const router = useRouter();

  const [activeItem, setActiveItem] = useState<string>("Dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  // 🧠 Load active item and dropdowns from localStorage
  useEffect(() => {
    const savedItem = localStorage.getItem("activeSidebarItem");
    const savedDropdowns = localStorage.getItem("openDropdowns");

    if (savedItem) setActiveItem(savedItem);
    if (savedDropdowns) {
      try {
        setOpenDropdowns(JSON.parse(savedDropdowns));
      } catch {
        setOpenDropdowns([]);
      }
    }
  }, []);

  // 💾 Save active item and dropdowns
  useEffect(() => {
    localStorage.setItem("activeSidebarItem", activeItem);
  }, [activeItem]);

  useEffect(() => {
    localStorage.setItem("openDropdowns", JSON.stringify(openDropdowns));
  }, [openDropdowns]);

  type MenuItem = {
    label: string;
    path?: string;
    icon?: React.ComponentType<{ className?: string }>;
    danger?: boolean;
    children?: { label: string; path?: string }[];
  };

  const handleItemClick = (item: MenuItem, parentLabel?: string) => {
    if (item.children && item.children.length > 0) {
      // toggle dropdown open/close
      setOpenDropdowns((prev) =>
        prev.includes(item.label) ? [] : [item.label]
      );
      return;
    }

    // Navigate to new page
    if (item.path) {
      router.push(item.path);
    }

    // Set active state
    setActiveItem(item.label);

    // Keep dropdown open if child clicked
    if (parentLabel) setOpenDropdowns([parentLabel]);
    else setOpenDropdowns([]);
  };

  const renderItem = (item: MenuItem, isChild = false, parentLabel?: string) => {
    const hasChildren = item.children && item.children.length > 0;
    const isDropdownOpen = openDropdowns.includes(item.label);
    const isActive = activeItem === item.label;

    return (
      <div key={item.label} className="flex flex-col gap-1">
        <button
          onClick={() => handleItemClick(item, parentLabel)}
          className={`flex items-center justify-between gap-3 px-6 py-3 rounded-xl font-medium transition-colors
            ${
              isActive
                ? "bg-[#FFCF00] text-[#212121]"
                : "bg-[#FFFAE6] border border-[#AEAEAE] text-[#212121] hover:bg-yellow-100"
            }
            ${item.danger ? " hover:bg-red-100" : ""}
          `}
        >
          <div className="flex items-center gap-3">
            {item.icon && <item.icon className="w-5 h-5" />}
            {item.label}
          </div>
          {hasChildren && (
            <span>
              {isDropdownOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </span>
          )}
        </button>

        {/* Render children if dropdown is open */}
        {hasChildren && isDropdownOpen && (
          <div className="flex flex-col gap-1">
            {item.children!.map((child) => renderItem(child, true, item.label))}
          </div>
        )}
      </div>
    );
  };

  const SidebarContent = () => (
    <aside className="w-full sm:w-72 md:w-80 lg:w-[336px] min-h-screen flex flex-col gap-6 p-4 bg-white shadow-sm font-[Poppins]">
      <Section title="Main">{menu.main.map((item) => renderItem(item))}</Section>
      <Section title="Booking & Services">
        {menu.booking.map((item) => renderItem(item))}
      </Section>
      <Section title="Unit & Pricing">
        {menu.pricing.map((item) => renderItem(item))}
      </Section>
      <Section title="Personal Information">
        {menu.personal.map((item) => renderItem(item))}
      </Section>
    </aside>
  );

  return (
    <div className="relative">
      {/* Mobile Hamburger */}
      <div className="sm:hidden p-4 flex justify-between items-center bg-white shadow-md">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <span className="font-bold">My App</span>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 transform bg-white sm:static sm:translate-x-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 sm:hidden"
        />
      )}
    </div>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-3">
    <h2 className="text-xs font-semibold text-[#717171]">{title}</h2>
    <div className="flex flex-col gap-3">{children}</div>
  </div>
);

export default Sidebar;
