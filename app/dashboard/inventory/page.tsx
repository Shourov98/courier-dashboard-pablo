"use client";

import React, { useState } from "react";
import { Edit, Trash2, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function InventoryPage() {
  const categories = [
    "Living Room",
    "Dining Room",
    "Kitchen",
    "Office",
    "Bedrooms",
    "Bathrooms & Toilet",
    "Garden & Shed",
    "Boxes & Other",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Living Room");
  const [startIndex, setStartIndex] = useState(0);

  // how many visible at once
  const visibleCount = 6;
  const visibleCategories = categories.slice(
    startIndex,
    startIndex + visibleCount
  );

  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setStartIndex((prev) =>
      Math.min(prev + 1, categories.length - visibleCount)
    );

  const mockInventory = {
    "Living Room": [
      { id: 1, item: "TV", price: 128 },
      { id: 2, item: "TV", price: 128 },
    ],
    "Dining Room": [],
    Kitchen: [],
    Office: [],
    Bedrooms: [],
    "Bathrooms & Toilet": [],
    "Garden & Shed": [],
    "Boxes & Other": [],
  };

  const items = mockInventory[selectedCategory] || [];

  return (
    <div className="p-8 bg-[#FFFDF6] min-h-screen w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 max-w-full mx-auto">
        <h2 className="text-3xl font-semibold text-[#212121]">Inventory</h2>
        <Link
          href="/dashboard/inventory/add"
          className="flex items-center gap-2 bg-[#FFCF00] hover:bg-[#FFD54F] text-black font-medium px-5 py-2.5 rounded-md transition"
        >
          <Plus size={18} />
          Add Item
        </Link>
      </div>

      {/* Category Navigation — same width as table */}
      <div className="max-w-full mx-auto mb-6 flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`p-2 rounded-full  ${
            startIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-3 justify-center flex-1 mx-4">
          {visibleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[#FFF9E6] text-black shadow-sm"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= categories.length}
          className={`p-2 rounded-full ${
            startIndex + visibleCount >= categories.length
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Table — same width */}
      <div className="max-w-full mx-auto bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#FFF7D6] text-gray-800 text-sm font-semibold">
            <tr>
              <th className="py-3 px-5">No</th>
              <th className="py-3 px-5">Item</th>
              <th className="py-3 px-5">Price</th>
              <th className="py-3 px-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item, index) => (
                <tr key={item.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-5 text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="py-3 px-5 text-gray-800">{item.item}</td>
                  <td className="py-3 px-5 text-gray-800">
                    €{item.price.toFixed(2)}
                  </td>
                  <td className="py-3 px-5 text-right flex justify-end gap-3">
                    <Link
                      href={`/dashboard/inventory/edit/${item.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Edit size={18} />
                    </Link>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="text-center text-gray-500 py-6 text-sm"
                >
                  No items in this category.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="max-w-5xl mx-auto flex justify-between items-center mt-6 text-sm text-gray-600">
        <span>No of Results {items.length} out of 100</span>
        <div className="flex items-center gap-3">
          <button className="border rounded-full p-2 hover:bg-gray-100">
            <ChevronLeft size={18} />
          </button>
          <button className="border rounded-full p-2 bg-[#FFCF00] text-black font-medium">
            1
          </button>
          <button className="border rounded-full p-2 hover:bg-gray-100">
            2
          </button>
          <button className="border rounded-full p-2 hover:bg-gray-100">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
