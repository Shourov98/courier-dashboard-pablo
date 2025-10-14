"use client";

import React, { useState } from "react";
import { Edit, Trash2, ChevronLeft, ChevronRight, Plus } from "lucide-react";

export default function CategoryPage() {
  const [categories] = useState([
    { id: 1, name: "Living Room" },
    { id: 2, name: "Dining Room" },
    { id: 3, name: "Kitchen" },
    { id: 4, name: "Bedroom" },
    { id: 5, name: "Storage Room" },
  ]);

  return (
    <div className="p-8 bg-[#FFFDF6] min-h-screen w-full">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-semibold text-[#212121]">Category</h2>
        <button className="flex items-center gap-2 bg-[#FFCF00] hover:bg-[#FFD54F] text-black font-medium px-4 py-2 rounded-md transition">
          <Plus size={18} />
          Add Category
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#FFF9E6] text-left text-gray-700 text-sm font-medium">
              <th className="py-3 px-5">No</th>
              <th className="py-3 px-5">Category</th>
              <th className="py-3 px-5 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((c) => (
              <tr
                key={c.id}
                className="border-t border-gray-100 hover:bg-gray-50 text-sm"
              >
                <td className="py-3 px-5 text-gray-700">
                  {String(c.id).padStart(2, "0")}
                </td>
                <td className="py-3 px-5 text-gray-800">{c.name}</td>
                <td className="py-3 px-5 text-right flex justify-end gap-3 pr-5">
                  <button className="text-blue-500 hover:text-blue-600 transition">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-600 transition">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500">
        <p>No of Results {categories.length} out of 100</p>

        {/* Pagination */}
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <button className="border border-gray-300 rounded-full p-2 hover:bg-gray-100">
            <ChevronLeft size={18} />
          </button>
          <button className="border border-[#FFCF00] bg-[#FFCF00]/20 text-[#0D1240] rounded-md w-8 h-8 flex items-center justify-center font-medium">
            1
          </button>
          <button className="border border-gray-300 rounded-md w-8 h-8 flex items-center justify-center hover:bg-gray-100">
            2
          </button>
          <button className="border border-gray-300 rounded-full p-2 hover:bg-gray-100">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
