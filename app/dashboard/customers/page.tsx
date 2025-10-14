"use client";

import React, { useState } from "react";
import { Search, Eye, ChevronLeft, ChevronRight, Download } from "lucide-react";

export default function CustomersPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const customers = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: "Guy Hawkins",
    email: "example@gmail.com",
    whatsapp: "878954529",
  }));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const filtered = customers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 w-full bg-[#FFFDF6] min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
        <h2 className="text-2xl font-semibold text-[#0D1240]">
          Customers Management
        </h2>

        <div className="flex items-center gap-3">
          {/* Search box */}
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search for user"
              value={search}
              onChange={handleSearch}
              className="pl-10 pr-3 py-2 w-56 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#FFCF00]"
            />
          </div>

          {/* Export button */}
          <button className="flex items-center gap-2 bg-[#FFCF00] hover:bg-[#FFD54F] text-black font-medium px-4 py-2 rounded-md transition">
            <Download size={18} />
            Export Data
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#FFF9E6] text-left text-gray-700 text-sm font-medium">
              <th className="py-3 px-5">No</th>
              <th className="py-3 px-5">Customer Name</th>
              <th className="py-3 px-5">Email</th>
              <th className="py-3 px-5">Whatsapp</th>
              <th className="py-3 px-5 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((c, i) => (
              <tr
                key={c.id}
                className="border-t border-gray-100 hover:bg-gray-50 text-sm"
              >
                <td className="py-3 px-5 text-gray-700">0{c.id}</td>
                <td className="py-3 px-5 text-gray-800">{c.name}</td>
                <td className="py-3 px-5 text-gray-600">{c.email}</td>
                <td className="py-3 px-5 text-gray-700">{c.whatsapp}</td>
                <td className="py-3 px-5 text-right">
                  <button className="text-gray-600 hover:text-[#FFCF00] transition">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500">
        <p>No of Results {filtered.length} out of 100</p>

        {/* Pagination */}
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-100">
            <ChevronLeft size={18} />
          </button>
          <button className="border border-[#FFCF00] bg-[#FFCF00]/20 text-[#0D1240] rounded-md px-3 py-1 font-medium">
            1
          </button>
          <button className="border border-gray-300 rounded-md px-3 py-1 hover:bg-gray-100">
            2
          </button>
          <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-100">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
