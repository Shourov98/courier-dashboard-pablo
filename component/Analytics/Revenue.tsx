"use client";

import { useState, useEffect } from "react";

type ChartData = {
  month: string;
  value: number;
};

// Dummy backend simulation (replace with API call)
const fetchRevenueData = async (serviceType: string, year: string): Promise<ChartData[]> => {
  const data: Record<string, ChartData[]> = {
    "Moving Services": [
      { month: "JAN", value: 60 },
      { month: "FEB", value: 30 },
      { month: "MAR", value: 50 },
      { month: "APR", value: 40 },
      { month: "MAY", value: 70 },
      { month: "JUN", value: 20 },
      { month: "JUL", value: 60 },
      { month: "AUG", value: 50 },
      { month: "SEP", value: 30 },
      { month: "OCT", value: 80 },
      { month: "NOV", value: 55 },
      { month: "DEC", value: 45 },
    ],
    "Furniture & Home Appliances": [
      { month: "JAN", value: 40 },
      { month: "FEB", value: 20 },
      { month: "MAR", value: 35 },
      { month: "APR", value: 60 },
      { month: "MAY", value: 45 },
      { month: "JUN", value: 50 },
      { month: "JUL", value: 30 },
      { month: "AUG", value: 70 },
      { month: "SEP", value: 65 },
      { month: "OCT", value: 40 },
      { month: "NOV", value: 55 },
      { month: "DEC", value: 60 },
    ],
    "Storage Services": [
      { month: "JAN", value: 20 },
      { month: "FEB", value: 30 },
      { month: "MAR", value: 40 },
      { month: "APR", value: 25 },
      { month: "MAY", value: 30 },
      { month: "JUN", value: 45 },
      { month: "JUL", value: 60 },
      { month: "AUG", value: 50 },
      { month: "SEP", value: 55 },
      { month: "OCT", value: 65 },
      { month: "NOV", value: 70 },
      { month: "DEC", value: 75 },
    ],
  };
  return data[serviceType] || [];
};

export default function RevenueChart() {
  const [year, setYear] = useState("2025");
  const [serviceType, setServiceType] = useState("Moving Services");
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    fetchRevenueData(serviceType, year).then((data) => setChartData(data));
  }, [serviceType, year]);

  const maxValue = Math.max(...chartData.map((d) => d.value), 80); 
  const chartHeight = 144; 

  return (
    <div className="w-full h-[426px] bg-white border border-[#EDEDED] rounded-[12px] flex flex-col my-[25px]">
      {/* Header */}
      <div className="flex flex-row justify-between items-center px-6 py-3 w-full h-[60px] bg-[#FFFAE6] shadow-[inset_0px_-1px_0px_#E5E7E8] rounded-t-[12px]">
        <h3 className="font-poppins font-semibold text-[28px] leading-[36px] text-[#212121]">
          Revenue
        </h3>

        {/* Dropdowns */}
        <div className="flex flex-row items-start gap-[15px]">
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="bg-[#FFCF00] border-2 border-[#212121] rounded-full px-3 py-1 text-xs font-medium text-[#212121] cursor-pointer"
          >
            <option>Moving Services</option>
            <option>Furniture & Home Appliances</option>
            <option>Storage Services</option>
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

      {/* Chart Body */}
      <div className="flex flex-row items-start px-4 py-6 flex-1">
        {/* Y-axis */}
        <div className="flex flex-col justify-between items-end pr-4 h-[271px] w-[40px]">
          <span className="text-[#717171] text-[12px] font-inter">80</span>
          <span className="text-[#717171] text-[12px] font-inter">40</span>
          <span className="text-[#717171] text-[12px] font-inter">20</span>
          <span className="text-[#717171] text-[12px] font-inter">0</span>
        </div>

        {/* Bars + grid */}
        <div className="flex flex-col justify-between w-full relative">
          {/* Grid lines */}
          <div className="flex flex-col justify-between h-[264px] w-full absolute ">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-full  border-b border-dashed border-[#EDEDED]" />
            ))}
          </div>

          {/* Bars */}
          <div className="relative flex flex-row justify-between items-end h-[264px] z-10">
            {chartData.map((d, i) => (
              <div
                key={i}
                className="w-[24px] bg-[#B59300] rounded-t"
                style={{ height: `${(d.value / maxValue) * chartHeight}px` }}
                title={`${d.month}: ${d.value}`}
              ></div>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="flex flex-row justify-between items-center mt-2">
            {chartData.map((d, i) => (
              <span
                key={i}
                className="text-[#717171] text-[12px] font-inter"
              >
                {d.month}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
