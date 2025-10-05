"use client"
import { useState } from "react";
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

// Menu structure
const menu = {
  main: [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Analytics", icon: BarChart2 },
    { label: "Notifications", icon: Bell },
  ],
  booking: [
    { label: "Bookings", icon: Calendar },
    { label: "Customers", icon: Users },
    {
      label: "Inventory Management",
      icon: Package,
      children: [
        { label: "Inventory" },
        { label: "Categories" },
      ],
    },
  ],
  pricing: [{ label: "Unit & Pricing", icon: DollarSign }],
  personal: [
    { label: "Profile", icon: User },
    { label: "Logout", icon: LogOut, danger: true },
  ],
};

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  type MenuItem = {
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
    danger?: boolean;
    children?: { label: string }[];
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const renderItem = (item: MenuItem, isChild = false) => {
    const hasChildren = item.children && item.children.length > 0;
    const isDropdownOpen = openDropdowns.includes(item.label);

    return (
      <div key={item.label} className="flex flex-col gap-1">
        <button
          onClick={() => {
            if (hasChildren) toggleDropdown(item.label);
            else setActiveItem(item.label);
          }}
          className={`flex items-center justify-between gap-3 px-6 py-3 rounded-xl font-medium transition-colors
            ${
              activeItem === item.label
                ? "bg-[#FFCF00] text-[#212121]"
                : "bg-[#FFFAE6] border border-[#AEAEAE] text-[#212121] hover:bg-yellow-100"
            }
            ${item.danger ? "text-red-600" : ""}
            ${isChild ? "ml-8" : ""}
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
            {item.children!.map((child) => renderItem(child, true))}
          </div>
        )}
      </div>
    );
  };

  const SidebarContent = () => (
    <aside className="w-full sm:w-72 md:w-80 lg:w-[336px] min-h-screen flex flex-col gap-6 p-4 bg-white shadow-sm font-[Poppins]">
      <Section title="Main">{menu.main.map((item) => renderItem(item))}</Section>
      <Section title="Booking & Services">{menu.booking.map((item) => renderItem(item))}</Section>
      <Section title="Unit & Pricing">{menu.pricing.map((item) => renderItem(item))}</Section>
      <Section title="Personal Information">{menu.personal.map((item) => renderItem(item))}</Section>
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
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/40 sm:hidden" />
      )}
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-3">
    <h2 className="text-xs font-semibold text-[#717171]">{title}</h2>
    <div className="flex flex-col gap-3">{children}</div>
  </div>
);

export default Sidebar;
