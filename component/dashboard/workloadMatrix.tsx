"use client";

import { useState } from "react";
import {  ChevronDown } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { DeliveryTruck01Icon, Money04Icon, PackageIcon, Sofa01Icon } from "@hugeicons/core-free-icons";

const WorkloadMetrics = () => {
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [selectedYear, setSelectedYear] = useState("Year");

  const metrics = [
    { label: "Moving Services", value: 12, icon: DeliveryTruck01Icon },
    { label: "Furniture & Home Appliances", value: 12, icon: Sofa01Icon },
    { label: "Storage Services", value: 12, icon: PackageIcon },
    { label: "Refund", value: 12, icon: Money04Icon },
  ];
  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center">
        <h2 className="text-[40px] font-semibold text-gray-900">
          Workload Metrics
        </h2>

        {/* Filters */}
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium bg-white hover:bg-gray-50 transition">
            {selectedMonth} <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm font-medium bg-white hover:bg-gray-50 transition">
            {selectedYear} <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div>
                <h3 className="text-sm font-bold text-gray-700">
                  {item.label}
                </h3>
                <p className="text-2xl font-semibold text-gray-900 mt-1">
                  {item.value}
                </p>
              </div>
              <div className="mt-6 self-end bg-[#FFCF00] p-3 rounded-full">
                <HugeiconsIcon icon={Icon} className="w-6 h-6 text-black"/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkloadMetrics;
