"use client";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  PencilEdit02Icon,
  Delete02Icon,
  ViewIcon,
  ArrowUp01Icon,
} from "@hugeicons/core-free-icons";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function Bookings() {
  const [serviceFilter, setServiceFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const itemsPerPage = 4;

  const bookings = [
    {
      id: 1,
      orderId: "ORD123",
      serviceType: "Moving Services",
      paymentStatus: "Pending",
    },
    {
      id: 2,
      orderId: "ORD124",
      serviceType: "Storage Services",
      paymentStatus: "Paid",
    },
    {
      id: 3,
      orderId: "ORD125",
      serviceType: "Furniture & Home Appliances",
      paymentStatus: "Refund",
    },
    {
      id: 4,
      orderId: "ORD126",
      serviceType: "Moving Services",
      paymentStatus: "Refunded",
    },
    {
      id: 5,
      orderId: "ORD127",
      serviceType: "Storage Services",
      paymentStatus: "Pending",
    },
  ];

  const filtered = bookings.filter(
    (b) =>
      (serviceFilter === "All" || b.serviceType === serviceFilter) &&
      (statusFilter === "All" || b.paymentStatus === statusFilter)
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedData = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full flex flex-col items-start gap-8">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full h-12 gap-6">
        <div className="flex items-center">
          <h2 className="font-['Inter'] font-semibold text-[40px] leading-[48px] text-[#08002B]">
            Bookings
          </h2>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-8">
          {/* Search */}
          <div className="flex items-center border border-[#D8D4E0] rounded-xl px-3 py-3 w-[305px] h-12 gap-4">
            <input
              type="text"
              placeholder="Search by orderID"
              className="flex-1 text-[#717171] text-base font-['Poppins'] placeholder-[#717171] outline-none"
            />
          </div>

          {/* Service Type */}
          <div
            className="relative flex items-center border border-[#D8D4E0] rounded-xl px-3 py-3 gap-2 w-[165px] h-12"
            onClick={() => setServiceOpen(!serviceOpen)}
          >
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              onBlur={() => setServiceOpen(false)}
              className="appearance-none flex-1 bg-transparent outline-none text-[#212121] text-base font-['Poppins'] cursor-pointer"
            >
              <option value="All">Services Type</option>
              <option value="Moving Services">Moving Services</option>
              <option value="Furniture & Home Appliances">
                Furniture & Home Appliances
              </option>
              <option value="Storage Services">Storage Services</option>
            </select>
            <HugeiconsIcon
              icon={ArrowUp01Icon}
              className={`absolute right-3 w-4 h-4 text-[#717171] transition-transform duration-200 ${
                serviceOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Status */}
          <div
            className="relative flex items-center border border-[#D8D4E0] rounded-xl px-3 py-3 gap-2 w-[122px] h-12"
            onClick={() => setStatusOpen(!statusOpen)}
          >
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              onBlur={() => setStatusOpen(false)}
              className="appearance-none flex-1 bg-transparent outline-none text-[#212121] text-base font-['Poppins'] cursor-pointer"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
              <option value="Delivered">Delivered</option>
              <option value="Refund">Refund</option>
              <option value="Refunded">Refunded</option>
            </select>
            <HugeiconsIcon
              icon={ArrowUp01Icon}
              className={`absolute right-3 w-4 h-4 text-[#717171] transition-transform duration-200 ${
                statusOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex flex-col items-center bg-white shadow-[0_4px_8px_rgba(176,124,94,0.1)] rounded-xl w-full pb-6">
        {/* Table Header */}
        <div className="flex items-center bg-[#FFFAE6] rounded-t-xl px-6 py-[18px] w-full">
          <div className="flex justify-between items-center w-full text-[#212121] font-['Poppins'] font-semibold text-[18px] leading-[26px]">
            <h4 className="w-[50px]">No</h4>
            <h4 className="w-[151px]">Order ID</h4>
            <h4 className="w-[250px]">Services Type</h4>
            <h4 className="w-[200px]">Payment Status</h4>
            <h4 className="w-[200px] text-center">Actions</h4>
          </div>
        </div>

        {/* Table Body */}
        <div className="flex flex-col items-start w-full">
          {paginatedData.map((b, idx) => (
            <div
              key={b.id}
              className="flex justify-between items-center w-full px-6 h-[60px] border-b border-[#EAEAEA] last:border-none"
            >
              <span className="w-[50px] text-[#212121] font-['Poppins'] text-[16px] leading-[24px]">
                {(currentPage - 1) * itemsPerPage + idx + 1}
              </span>
              <span className="w-[150px] text-[#212121] font-['Poppins'] text-[16px] leading-[24px]">
                {b.orderId}
              </span>
              <span className="w-[250px] text-[#212121] font-['Poppins'] text-[16px] leading-[24px]">
                {b.serviceType}
              </span>

              {/* Payment Status Badge */}
              <div className="w-[200px] flex justify-center">
                {b.paymentStatus === "Pending" && (
                  <div className="flex justify-center items-center gap-2 px-2 py-1 bg-[#FFF7E8] rounded-full">
                    <span className="text-[#B27B0E] text-[12px] font-medium font-['Poppins']">
                      Pending
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#B27B0E]" />
                  </div>
                )}
                {b.paymentStatus === "Paid" && (
                  <div className="flex justify-center items-center gap-2 px-2 py-1 bg-[#EAFAF3] rounded-full">
                    <span className="text-[#29BB7D] text-[12px] font-medium font-['Poppins']">
                      Paid
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#29BB7D]" />
                  </div>
                )}
                {b.paymentStatus === "Refund" && (
                  <div className="flex justify-center items-center gap-2 px-2 py-1 bg-[#FCEAEA] rounded-full">
                    <span className="text-[#DD2C2C] text-[12px] font-medium font-['Poppins']">
                      Refund
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#DD2C2C]" />
                  </div>
                )}
                {b.paymentStatus === "Refunded" && (
                  <div className="flex justify-center items-center gap-2 px-2 py-1 bg-[#E6E6E6] rounded-full">
                    <span className="text-[#555] text-[12px] font-medium font-['Poppins']">
                      Refunded
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#555]" />
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-center gap-8 w-[200px] text-[#212121]">
                <Link href="/dashboard/bookings/234/edit">
                <HugeiconsIcon
                  icon={PencilEdit02Icon}
                  className="w-6 h-6 cursor-pointer hover:text-blue-600"
                />
                </Link>
                <Link href="/dashboard/bookings/234"><HugeiconsIcon
                  icon={ViewIcon}
                  className="w-6 h-6 cursor-pointer hover:text-green-600"
                /></Link>
                <HugeiconsIcon
                  icon={Delete02Icon}
                  className="w-6 h-6 cursor-pointer text-red-600"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination - Right aligned */}
      </div>
      <div className="flex justify-between w-full  px-6 mt-6">
        <div>
          No of Result {currentPage} Out of {totalPages}
        </div>
        <div className="flex justify-end  ">
          <div className="flex items-center gap-3">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-medium transition ${
                currentPage === 1
                  ? "text-[#131010] bg-[#F1F1F1] cursor-not-allowed"
                  : "text-[#212121] bg-[#FDF9EE] hover:bg-[#FFE9B3]"
              }`}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-12 h-12 flex items-center justify-center rounded-lg text-lg font-medium transition ${
                  currentPage === page
                    ? " text-black border border-[#FFCF00] cursor-default"
                    : "text-[#212121] border border-[#757570] hover:bg-[#FFE9B3]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-medium transition ${
                currentPage === totalPages
                  ? "text-[#161515] bg-[#F1F1F1] cursor-not-allowed"
                  : "text-[#212121] bg-[#FDF9EE] hover:bg-[#FFE9B3]"
              }`}
            >
             <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
