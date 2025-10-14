"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Input } from "@/component/ui/Input";

export default function EditCategoryPage() {
  // Pretend this comes from DB or params
  const [categoryName, setCategoryName] = useState("Living Room");

  const handleSave = () => {
    console.log("Updated category:", categoryName);
    // Later you can add API call here
  };

  const handleCancel = () => {
    window.history.back();
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
        <span className="text-gray-800 font-medium">Edit Category</span>
      </div>

      {/* Header */}
      <h2 className="text-3xl font-semibold text-[#212121] mb-6">
        Edit Category
      </h2>

      {/* Input Field */}
      <div className="max-w-2xl">
        <Input
          label="Category"
          value={categoryName}
          onValueChange={setCategoryName}
          placeholder="Enter category name"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-8 gap-4">
        <button
          onClick={handleCancel}
          className="bg-gray-200 text-gray-800 hover:bg-gray-300 font-medium px-6 py-2 rounded-md transition"
        >
          Cancel
        </button>
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
