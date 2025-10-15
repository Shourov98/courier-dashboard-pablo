"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Input } from "@/component/ui/Input";

export default function EditItemPage() {
  // Mock categories (20+)
  const roomCategories = [
    "Living Room",
    "Dining Room",
    "Kitchen",
    "Bedroom",
    "Office",
    "Bathroom",
    "Storage Room",
    "Garage",
    "Laundry Room",
    "Guest Room",
    "Study Room",
    "Kids Room",
    "Hallway",
    "Balcony",
    "Garden & Shed",
    "Basement",
    "Attic",
    "Library",
    "Home Theater",
    "Pantry",
    "Workshop",
    "Playroom",
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Living Room",
  ]);
  const [displayMoving, setDisplayMoving] = useState(false);
  const [displayFurniture, setDisplayFurniture] = useState(false);
  const [itemName, setItemName] = useState("TV");
  const [itemPrice, setItemPrice] = useState("120");

  const handleCategoryToggle = (name: string) => {
    setSelectedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  const handleSave = () => {
    const updatedItem = {
      name: itemName,
      price: itemPrice,
      categories: selectedCategories,
      displayOnMoving: displayMoving,
      displayOnFurniture: displayFurniture,
    };
    console.log("✅ Updated Item:", updatedItem);
    // Later: integrate with backend API
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div className="p-8 bg-[#FFFDF6] min-h-screen w-full">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
        <Link
          href="/dashboard/inventory"
          className="flex items-center hover:text-black transition"
        >
          <ChevronLeft size={16} className="mr-1" />
          Inventory
        </Link>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-gray-800 font-medium">Edit Item & Price</span>
      </div>

      {/* Header */}
      <h2 className="text-3xl font-semibold text-[#212121] mb-6">
        Edit Item & Price
      </h2>

      {/* Categories */}
      <div>
        <h4 className="text-base font-semibold text-gray-800 mb-3">Category</h4>
        <div className="flex flex-wrap gap-3">
          {roomCategories.map((name) => (
            <button
              key={name}
              onClick={() => handleCategoryToggle(name)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all
                ${
                  selectedCategories.includes(name)
                    ? "bg-[#FFCF00] text-black border-[#FFCF00]"
                    : "bg-gray-100 text-gray-700 border-gray-100 hover:bg-gray-200"
                }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Toggles */}
      <div className="flex items-center gap-10 mt-8">
        {/* Toggle 1 */}
        <label className="flex items-center gap-3 cursor-pointer">
          <span className="font-semibold text-[#212121]">
            Display on Moving Service
          </span>
          <div className="relative inline-block w-11 h-6">
            <input
              type="checkbox"
              checked={displayMoving}
              onChange={(e) => setDisplayMoving(e.target.checked)}
              className="peer sr-only"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#FFCF00] transition-all duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
          </div>
        </label>

        {/* Toggle 2 */}
        <label className="flex items-center gap-3 cursor-pointer">
          <span className="font-semibold text-[#212121]">
            Display on Furniture & Home Appliances
          </span>
          <div className="relative inline-block w-11 h-6">
            <input
              type="checkbox"
              checked={displayFurniture}
              onChange={(e) => setDisplayFurniture(e.target.checked)}
              className="peer sr-only"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#FFCF00] transition-all duration-300"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 peer-checked:translate-x-5"></div>
          </div>
        </label>
      </div>

      {/* Item & Price */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 max-w-3xl">
        <Input
          label="Item"
          value={itemName}
          onValueChange={setItemName}
          placeholder="Item Name"
        />

        {/* Price with unit */}
        <div className="relative flex items-center border border-gray-300 rounded-md overflow-hidden">
          <Input
            label="Price"
            value={itemPrice}
            onValueChange={setItemPrice}
            className="flex-1 border-0 shadow-none"
          />
          <div className="px-3 py-3 bg-gray-100 text-gray-700 text-lg font-semibold">
            €
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-10 gap-4">
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
