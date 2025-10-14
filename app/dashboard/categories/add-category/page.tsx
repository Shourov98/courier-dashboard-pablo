"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Input } from "@/component/ui/Input";

export default function AddCategoryPage() {
  const [categoryName, setCategoryName] = useState("");

  const handleSave = () => {
    console.log("Saved category:", categoryName);
    // Here you can later integrate with backend API
  };

  return (
    <div className="p-8 bg-[#FFFDF6] min-h-screen w-full">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
        <Link
          href="/dashboard/category"
          className="flex items-center hover:text-black transition"
        >
          <ChevronLeft size={16} className="mr-1" />
          Category
        </Link>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-gray-800 font-medium">Add Category</span>
      </div>

      {/* Header */}
      <h2 className="text-3xl font-semibold text-[#212121] mb-6">Category</h2>

      {/* Input Field */}
      <div className="max-w-full">
        <Input
          label="Category"
          value={categoryName}
          onValueChange={setCategoryName}
          placeholder="Enter category name"
        />
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-8">
        <button
          onClick={handleSave}
          className="bg-[#FFCF00] hover:bg-[#FFD54F] text-black font-medium px-6 py-2 rounded-md transition"
        >
          Save
        </button>
      </div>
    </div>
  );
}
