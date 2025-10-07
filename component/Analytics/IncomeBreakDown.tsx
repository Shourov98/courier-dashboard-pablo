"use client";

import { useState } from "react";
 // Hugo Icons
import { HugeiconsIcon } from "@hugeicons/react";
import { DeliveryTruck01Icon, Money04Icon, MoneyBag01Icon, PackageIcon, Sofa01Icon } from "@hugeicons/core-free-icons";

type IncomeItem = {
  title: string;
  amount: string;
  icon: React.ReactNode;
};

const incomeData: IncomeItem[] = [
  {
    title: "Moving Services",
    amount: "€120",
    icon: <HugeiconsIcon icon={DeliveryTruck01Icon} size={40}/>,
  },
  {
    title: "Furniture & Home Appliances",
    amount: "€120",
    icon: <HugeiconsIcon icon={Sofa01Icon} size={40}/>,
  },
  {
    title: "Storage Services",
    amount: "€102",
    icon: <HugeiconsIcon icon={PackageIcon} size={40}/>,
  },
  {
    title: "Refund",
    amount: "€120",
    icon: <HugeiconsIcon icon={Money04Icon} size={40}/>,
  },
  {
    title: "Total",
    amount: "€480",
    icon: <HugeiconsIcon icon={MoneyBag01Icon} size={40}/>,
  },
];

export default function MonthlyIncomeBreakdown() {
  const [month, setMonth] = useState("October");
  const [year, setYear] = useState("2025");

  return (
    <section className="w-full  p-4 h-[550px] flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <h2 className="text-[28px] leading-[32px] font-poppins font-semibold text-[#212121]">
          Monthly Income Breakdown
        </h2>

        {/* Dropdowns */}
        <div className="flex gap-3 mt-3 sm:mt-0">
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="bg-[#FFCF00] border-2 border-[#212121] rounded-full px-3 py-1 text-xs font-medium text-[#212121] cursor-pointer"
          >
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="bg-[#FFCF00] border-2 border-[#212121] rounded-full px-3 py-1 text-xs font-medium text-[#212121] cursor-pointer"
          >
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
          </select>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 flex-1 overflow-hidden mb-[25px]">
        {incomeData.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between p-4 bg-white border border-[#AEAEAE] rounded-xl shadow-sm"
          >
            <div>
              <h4 className="text-sm font-poppins font-semibold text-[#212121]">
                {item.title}
              </h4>
              <p className="text-xl font-poppins font-medium text-[#212121] mt-1">
                {item.amount}
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFCF00] mt-3 self-end">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-5 lg:grid-cols-2 gap-4 flex-1 overflow-hidden">
        {incomeData.slice(3).map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between p-4 bg-white border border-[#AEAEAE] rounded-xl shadow-sm"
          >
            <div>
              <h4 className="text-sm font-poppins font-semibold text-[#212121]">
                {item.title}
              </h4>
              <p className="text-xl font-poppins font-medium text-[#212121] mt-1">
                {item.amount}
              </p>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFCF00] mt-3 self-end">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
