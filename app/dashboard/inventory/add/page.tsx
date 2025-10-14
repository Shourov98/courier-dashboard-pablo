"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/component/ui/Input";

export default function AddItemPage() {
  const categories = [
    "Living Room",
    "Dining Room",
    "Kitchen",
    "Office",
    "Bedroom",
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

  const [selected, setSelected] = useState<string[]>([]);
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [moving, setMoving] = useState(false);
  const [furniture, setFurniture] = useState(false);

  const toggleCategory = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  const handleSave = () => {
    if (selected.length === 0) {
      alert("Please select at least one category.");
      return;
    }

    console.log("✅ New Item Added:", {
      item,
      price,
      categories: selected,
      displayOnMoving: moving,
      displayOnFurniture: furniture,
    });
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
        <span className="text-gray-800 font-medium">Add Item & Price</span>
      </div>

      <h2 className="text-3xl font-semibold text-[#212121] mb-6">
        Add Item & Price
      </h2>

      {/* Categories */}
      <h4 className="text-base font-semibold text-gray-800 mb-3">Category</h4>
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              selected.includes(cat)
                ? "bg-[#FFCF00] text-black border-[#FFCF00]"
                : "bg-gray-100 text-gray-700 border-gray-100 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Toggles */}
      <div className="flex items-center gap-6 mb-8">
        <label className="flex items-center gap-2 text-gray-800 font-medium">
          <input
            type="checkbox"
            checked={moving}
            onChange={(e) => setMoving(e.target.checked)}
            className="accent-[#FFCF00] w-5 h-5"
          />
          Display on Moving Service
        </label>
        <label className="flex items-center gap-2 text-gray-800 font-medium">
          <input
            type="checkbox"
            checked={furniture}
            onChange={(e) => setFurniture(e.target.checked)}
            className="accent-[#FFCF00] w-5 h-5"
          />
          Display on Furniture & Home Appliances
        </label>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
        <Input
          label="Item"
          value={item}
          onValueChange={setItem}
          placeholder="Item name"
        />
        <div className="relative flex items-center border border-gray-300 rounded-md overflow-hidden">
          <Input
            label="Price"
            value={price}
            onValueChange={setPrice}
            className="flex-1 border-0 shadow-none"
          />
          <div className="px-3 py-3 bg-gray-100 text-gray-700 text-lg font-semibold">
            €
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="flex justify-end mt-10">
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
