"use client";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { PencilEdit02Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

export default function ProfileInfo() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="w-full w-full font-[Poppins] text-[#212121] mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[28px] md:text-[32px] font-semibold">Profile Info</h2>
        <Link href="/dashboard/profileEdit">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 bg-[#FFCF00] text-[#212121] font-medium px-4 py-2 rounded-xl hover:bg-[#FFD633] transition"
          >
            <HugeiconsIcon icon={PencilEdit02Icon} className="w-5 h-5" />
            <span>Edit</span>
          </button>
        </Link>
      </div>

      {/* Personal Info Section */}
      <div className="border border-[#E5E5E5] rounded-xl p-5 flex flex-col gap-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="First Name" placeholder="First Name" value="John" />
          <InputField label="Last Name" placeholder="Last Name" value="Doe" />
          <InputField label="Email" placeholder="example@gmail.com" value="example@gmail.com" />
          <InputField label="Whatsapp Number" placeholder="Whatsapp Number" value="+31 666 123 456" />
        </div>
      </div>

      {/* Address Section */}
      <div className="mt-8 border border-[#E5E5E5] rounded-xl p-5 flex flex-col gap-6 bg-white">
        <h3 className="text-[20px] font-semibold">Address</h3>
        <div className="flex flex-col gap-4">
          <SelectField label="Country" required value="Netherlands" />
          <InputField label="City" required placeholder="City" value="Amsterdam" />
          <InputField label="Address" required placeholder="Address" value="Damrak 43" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <InputField label="Postal" required placeholder="Postal" value="1212" />
            <InputField label="House Number" required placeholder="House Number" value="15" />
            <InputField label="Suffix" placeholder="Suffix" value="" />
          </div>
        </div>
      </div>

      {/* Stripe Settings Section */}
      <div className="mt-8 border border-[#E5E5E5] rounded-xl p-5 flex flex-col gap-6 bg-white">
        <h3 className="text-[20px] font-semibold">Stripe Settings</h3>
        <div className="flex flex-col gap-4">
          <InputField label="Publishable Key" required placeholder="Publishable Key" value="pk_test_123456"/>
          <InputField label="Secret Key" required placeholder="Secret Key" value="sk_test_654321" />
          <InputField label="Webhook URL" required placeholder="Webhook URL" value="https://example.com/webhook" />
        </div>
      </div>
    </div>
  );
}

/* ========== INPUT FIELD ========== */
function InputField({
  label,
  placeholder,
  value,
  required,
}: {
  label: string;
  placeholder: string;
  value?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-[#717171]">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        readOnly
        className="h-[52px] border border-[#E5E5E5] rounded-xl px-4 text-[#212121] placeholder:text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#FFCF00]"
      />
    </div>
  );
}

/* ========== SELECT FIELD ========== */
function SelectField({
  label,
  value,
  required,
}: {
  label: string;
  value: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-[#717171]">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select
        value={value}
        disabled
        className="h-[52px] border border-[#E5E5E5] rounded-xl px-4 text-[#212121] bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#FFCF00]"
      >
        <option>{value}</option>
      </select>
    </div>
  );
}
