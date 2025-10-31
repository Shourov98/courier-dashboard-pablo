"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HugeiconsIcon } from "@hugeicons/react";
import Logo from "@/public/Tele-Portes Logo.svg";
import Image from "next/image";
import {
  ArrowDown01Icon,
  Logout01Icon,
  Notification01Icon,
  UserIcon,
} from "@hugeicons/core-free-icons";
import { Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const router = useRouter();

  const toggleAvatarDropdown = () => setIsAvatarDropdownOpen((prev) => !prev);

  return (
    <header className="w-full bg-[#FFFAE6] shadow-sm z-50 relative">
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 md:py-6">
        {/* Logo */}
        <Image
          src={Logo}
          alt="Logo"
          width={200}
          height={40}
          className="w-auto h-10 md:h-12"
          priority
        />

        {/* Desktop Avatar Menu */}
        <div className="hidden md:flex items-center gap-10 relative">
          <div className="relative">
            <button
              onClick={toggleAvatarDropdown}
              className="flex items-center gap-2 px-5 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-xl transition-colors"
            >
              <HugeiconsIcon icon={UserIcon} />
              <span className="cursor-default font-medium text-gray-900">
                First name
              </span>
              <HugeiconsIcon
                icon={ArrowDown01Icon}
                className={`w-5 h-5 text-gray-900 transition-transform ${
                  isAvatarDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isAvatarDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-[#FFFAE6] rounded-lg shadow-lg border border-gray-300 z-50 w-48">
                <div className="flex flex-col text-left">
                  <button
                    className="flex items-center gap-2 px-4 py-3 border-b border-[#AEAEAE] hover:bg-yellow-50 hover:text-yellow-600"
                    onClick={() => router.push("/dashboard/notifications")}
                  >
                    <HugeiconsIcon icon={Notification01Icon} /> Notifications
                  </button>
                  <button
                    onClick={() => router.push("/auth/signin")}
                    className="flex items-center gap-2 px-4 py-3 hover:bg-yellow-50 hover:text-yellow-600 rounded-b-lg"
                  >
                    <HugeiconsIcon icon={Logout01Icon} /> Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={onMenuClick}
          className="md:hidden flex items-center justify-center p-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-900" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
