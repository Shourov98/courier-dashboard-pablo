"use client"
import { ArrowRight01Icon, ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'
import React, { useState } from 'react'
interface RoomInventory {
  items: { name: string; quantity: number; checked: boolean }[];
}
type ExtraServiceKey = 'packing' | 'movingLift' | 'nutsBolts' | 'boxSmall' | 'boxMedium' | 'boxLarge' | 'boxWardrobe';

interface ExtraServices {
  packing: boolean;
  movingLift: boolean;
  nutsBolts: { checked: boolean; quantity: number };
  boxSmall: { checked: boolean; quantity: number };
  boxMedium: { checked: boolean; quantity: number };
  boxLarge: { checked: boolean; quantity: number };
  boxWardrobe: { checked: boolean; quantity: number };
}

const EditBookingDetails: React.FC = () => {

  const [activeRoom, setActiveRoom] = useState('Living Room');
  const [extraServices, setExtraServices] = useState<ExtraServices>({
    packing: true,
    movingLift: true,
    nutsBolts: { checked: true, quantity: 0 },
    boxSmall: { checked: true, quantity: 0 },
    boxMedium: { checked: true, quantity: 0 },
    boxLarge: { checked: true, quantity: 0 },
    boxWardrobe: { checked: true, quantity: 0 }
  });

  const rooms = [
    'Living Room',
    'Dining Room',
    'Kitchen',
    'Office',
    'Bedrooms',
    'Bathrooms & Toilet',
    'Garden & Shed',
    'Boxes & Other'
  ];

  const [roomInventory, setRoomInventory] = useState<Record<string, RoomInventory>>({
    'Living Room': {
      items: [
        { name: 'Item 1', quantity: 0, checked: false },
        { name: 'Item 1', quantity: 0, checked: true },
        { name: 'Item 1', quantity: 0, checked: false },
        { name: 'Item 1', quantity: 0, checked: false },
        { name: 'Item 1', quantity: 0, checked: false }
      ]
    }
  });

  // Add missing updateQuantity function for item quantity
  const updateQuantity = (index: number, delta: number) => {
    setRoomInventory(prev => {
      const newInventory = { ...prev };
      const items = [...newInventory[activeRoom].items];
      items[index] = {
        ...items[index],
        quantity: Math.max(0, items[index].quantity + delta)
      };
      newInventory[activeRoom] = { ...newInventory[activeRoom], items };
      return newInventory;
    });
  };

  return (
    <div>
         <div className="min-h-screen  p-6">
      <div className="w-full flex flex-col gap-8">


            {/* Link section*/}
         <div className="flex items-center gap-3 h-6">
          <Link href="/dashboard/bookings">
            {" "}
            <button className="w-6 h-6 rotate-180">
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                className="w-6 h-6 text-[#141B34]"
              />
            </button>
          </Link>
          <span className="font-normal text-base leading-6 text-black">
            Bookings
          </span>
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className="w-6 h-6 text-[#212121]"
          />
          <span className="font-normal text-base leading-6 text-black">
            edit
          </span>
        </div>
{/* head Section */}
      <h1
          className="font-semibold text-[40px] leading-[48px] text-[#08002B] m-0"
          style={{ fontFamily: "Inter" }}
        >
          Bookings
        </h1>

        <div className="bg-white border border-[#AEAEAE] rounded-xl p-6 w-full max-w-full ">
  {/* Header Section */}
  <div className="flex flex-col gap-3 mb-8">
    {/* Title + Status */}
    <div className="flex justify-between items-center flex-wrap gap-3">
      {/* Title */}
      <h2 className="font-medium text-[28px] leading-9 text-[#212121] m-0 flex-1">
        Details
      </h2>

      {/* Status Badge */}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center gap-2 px-2 py-1 rounded-full bg-[#FFF7E8]">
          <span className="font-medium text-[12px] leading-5 text-[#B27B0E]">
            Pending
          </span>
          <div className="w-2 h-2 bg-[#B27B0E] rounded-full"></div>
        </div>
      </div>
    </div>

    {/* Order ID */}
    <div className="font-semibold text-lg leading-[26px] text-[#212121] text-right">
      Order ID: TP-123
    </div>
  </div>
</div>


<div className="bg-white border border-[#AEAEAE] rounded-xl p-6 md:p-8 w-full max-w-[991px] mx-auto flex flex-col gap-6">
  {/* Header */}
  <h3 className="font-medium text-[28px] leading-[36px] text-[#212121]">
    Moving From
  </h3>

  {/* Form Fields Container (one big border) */}
  <div className="flex flex-col gap-4 w-full p-4 md:p-6">

    {/* Country */}
    <div className="flex flex-col">
      <label className="font-medium text-base leading-6 text-[#717171]">
        Country <span className="text-red-500">*</span>
      </label>
      <select 
        className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        defaultValue="Netherlands"
      >
        <option>Netherlands</option>
      </select>
    </div>

    {/* City */}
    <div className="flex flex-col">
      <label className="font-medium text-base leading-6 text-[#717171]">
        City <span className="text-red-500">*</span>
      </label>
      <input 
        type="text"
        defaultValue="Amsterdam"
        className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
      />
    </div>

    {/* Address */}
    <div className="flex flex-col">
      <label className="font-medium text-base leading-6 text-[#717171]">
        Address <span className="text-red-500">*</span>
      </label>
      <input 
        type="text"
        defaultValue="Moakhali"
        className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
      />
    </div>

    {/* Postal / House / Suffix */}
    <div className="flex sm:flex-col  justify-between gap-4">
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">
          Postal <span className="text-red-500">*</span>
        </label>
        <input 
          type="text"
          defaultValue="1212"
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">
          House Number <span className="text-red-500">*</span>
        </label>
        <input 
          type="text"
          defaultValue="43"
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">Suffix</label>
        <input 
          type="text"
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        />
      </div>
    </div>

    {/* Property Type / Room / Floor */}
    <div className="flex sm:flex-col flex-row justify-between gap-4">
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">
          Property Type <span className="text-red-500">*</span>
        </label>
        <select 
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        >
          <option>Select</option>
        </select>
      </div>
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">
          Room <span className="text-red-500">*</span>
        </label>
        <select 
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        >
          <option>Select</option>
        </select>
      </div>
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">
          Floor <span className="text-red-500">*</span>
        </label>
        <input 
          type="text"
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        />
      </div>
    </div>

    {/* Lift Available */}
    <div className="flex items-center gap-2">
      <input 
        type="checkbox" 
        id="liftFrom" 
        className="w-5 h-5 accent-[#F5C044]" 
        defaultChecked
      />
      <label htmlFor="liftFrom" className="text-base font-normal text-[#212121]">
        Lift Available <span className="text-red-500">*</span>
      </label>
    </div>

    {/* Job Description */}
    <div className="flex flex-col">
      <label className="font-medium text-base leading-6 text-[#717171]">
        Job Description (Optional)
      </label>
      <textarea 
        className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base resize-none h-36 focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
      />
    </div>

  </div>
</div>
<div className="bg-white border border-[#AEAEAE] rounded-xl p-6 md:p-8 w-full max-w-[991px] mx-auto flex flex-col gap-6">
  {/* Header */}
  <h3 className="font-medium text-[28px] leading-[36px] text-[#212121]">
    Moving To
  </h3>

  {/* Form Fields Container (one big border) */}
  <div className="flex flex-col gap-4 w-full p-4 md:p-6">

    {/* Country */}
    <div className="flex flex-col">
      <label className="font-medium text-base leading-6 text-[#717171]">
        Country <span className="text-red-500">*</span>
      </label>
      <select 
        className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        defaultValue="Netherlands"
      >
        <option>Netherlands</option>
      </select>
    </div>

    {/* City */}
    <div className="flex flex-col">
      <label className="font-medium text-base leading-6 text-[#717171]">
        City <span className="text-red-500">*</span>
      </label>
      <input 
        type="text"
        defaultValue="Amsterdam"
        className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
      />
    </div>

    {/* Address */}
    <div className="flex flex-col">
      <label className="font-medium text-base leading-6 text-[#717171]">
        Address <span className="text-red-500">*</span>
      </label>
      <input 
        type="text"
        defaultValue="Moakhali"
        className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
      />
    </div>

    {/* Postal / House / Suffix */}
    <div className="flex sm:flex-col  justify-between gap-4">
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">
          Postal <span className="text-red-500">*</span>
        </label>
        <input 
          type="text"
          defaultValue="1212"
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">
          House Number <span className="text-red-500">*</span>
        </label>
        <input 
          type="text"
          defaultValue="43"
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">Suffix</label>
        <input 
          type="text"
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        />
      </div>
    </div>

    {/* Property Type / Room / Floor */}
    <div className="flex sm:flex-col flex-row justify-between gap-4">
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">
          Property Type <span className="text-red-500">*</span>
        </label>
        <select 
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        >
          <option>Select</option>
        </select>
      </div>
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">
          Room <span className="text-red-500">*</span>
        </label>
        <select 
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        >
          <option>Select</option>
        </select>
      </div>
      <div className="flex flex-col flex-1">
        <label className="font-medium text-base leading-6 text-[#717171]">
          Floor <span className="text-red-500">*</span>
        </label>
        <input 
          type="text"
          className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
        />
      </div>
    </div>

    {/* Lift Available */}
    <div className="flex items-center gap-2">
      <input 
        type="checkbox" 
        id="liftFrom" 
        className="w-5 h-5 accent-[#F5C044]" 
        defaultChecked
      />
      <label htmlFor="liftFrom" className="text-base font-normal text-[#212121]">
        Lift Available <span className="text-red-500">*</span>
      </label>
    </div>

    {/* Job Description */}
    <div className="flex flex-col">
      <label className="font-medium text-base leading-6 text-[#717171]">
        Job Description (Optional)
      </label>
      <textarea 
        className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base resize-none h-36 focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
      />
    </div>

  </div>
</div>


<div className="bg-white border border-[#AEAEAE] rounded-xl p-6 md:p-8 w-full max-w-[991px] mx-auto flex flex-col gap-6">
  {/* Header */}
  <h3 className="font-medium text-[28px] leading-[36px] text-[#212121]">
    Preferred Date & Time for Move
  </h3>

  {/* Form Fields Container (one big border) */}
<div className="flex flex-col gap-4 w-full p-4 md:p-6">
  {/* Date */}
  <div className="flex flex-col relative">
    <label className="font-medium text-base leading-6 text-[#717171]">
      Choose Date <span className="text-red-500">*</span>
    </label>
    <input 
      type="date"
      className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
    />
  </div>

  {/* Time */}
  <div className="flex flex-col">
    <label className="font-medium text-base leading-6 text-[#717171]">
      Choose Time <span className="text-red-500">*</span>
    </label>
    <input 
      type="time"
      className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
    />
  </div>
</div>










</div>

<div className="flex flex-col items-center bg-white border border-[#AEAEAE] rounded-xl p-6 gap-3 w-full h-[808px] ">

  {/* Room Tabs */}
  <div className="flex items-center gap-3 w-full h-[72px] overflow-x-auto pb-2">
    <button className="p-2 hover:bg-gray-100 rounded">
      <svg className="w-5 h-5 transform -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    {rooms.map((room, index) => (
      <button
        key={index}
        onClick={() => setActiveRoom(room)}
        className={`flex flex-col justify-center items-center px-3 py-3 w-full h-[72px] rounded-xl gap-2 text-center text-sm ${
          activeRoom === room ? 'bg-[#FFFAE6] font-medium text-black' : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      >
        <span className="text-sm leading-6">{room}</span>
      </button>
    ))}

    <button className="p-2 hover:bg-gray-100 rounded">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>

  {/* Items List */}
  <div className="flex flex-col gap-3 w-full h-[676px]">
    {roomInventory[activeRoom]?.items.map((item, index) => (
      <div key={index} className="flex items-center justify-between p-6 gap-3 w-full h-[72px] border border-[#AEAEAE] rounded-xl">
        <span className="flex-1 text-base text-gray-800">{item.name}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(index, -1)}
            className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100"
          >
            -
          </button>
          <span className="w-8 text-center text-base">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(index, 1)}
            className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <input 
          type="checkbox"
          checked={item.checked}
          onChange={(e) => {
            setRoomInventory(prev => {
              const newInventory = { ...prev };
              newInventory[activeRoom].items[index].checked = e.target.checked;
              return newInventory;
            });
          }}
          className="w-6 h-6 accent-yellow-400"
        />
      </div>
    ))}

    <button className="flex justify-between items-center p-3 w-full text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50">
      <span>Explore more items here</span>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  </div>

  {/* Navigation Buttons */}
  <div className="flex justify-between w-full h-[52px]">
    <button className="flex items-center justify-center gap-2 w-[157px] h-[52px] bg-gray-900 rounded-xl hover:bg-gray-300 px-4 py-3">
      <svg className="w-6 h-6 transform -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Previous
    </button>
    <button className="flex items-center justify-center gap-2 w-[175px] h-[52px] bg-gray-200 rounded-xl hover:bg-gray-300 px-4 py-3">
      Next Room
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>


    </div>
    </div>
    </div>
  )
}

export default EditBookingDetails