"use client";
import {
  ArrowDown01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  ArrowRight02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import React, { useState } from "react";
import {
  rooms,
  roomInventoryData,
  RoomInventory,
} from "@/Data/roomInventoryData";
import { extraServicesData, ExtraServices } from "@/Data/extraServiceData";

const EditBookingDetails: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState("Living Room");
  const [roomInventory, setRoomInventory] =
    useState<Record<string, RoomInventory>>(roomInventoryData);

  // Removed duplicate updateQuantity function

  const goToNextRoom = () => {
    const currentIndex = rooms.indexOf(activeRoom);
    if (currentIndex < rooms.length - 1) setActiveRoom(rooms[currentIndex + 1]);
  };

  const goToPrevRoom = () => {
    const currentIndex = rooms.indexOf(activeRoom);
    if (currentIndex > 0) setActiveRoom(rooms[currentIndex - 1]);
  };

  const [extraServices, setExtraServices] =
    useState<ExtraServices>(extraServicesData);

  const updateExtraServiceQuantity = (
    key: keyof ExtraServices,
    change: number
  ) => {
    setExtraServices((prev) => {
      const updated = { ...prev };
      const target = updated[key] as
        | { quantity: number; checked: boolean }
        | boolean;
      if (
        typeof target === "object" &&
        target !== null &&
        "quantity" in target
      ) {
        target.quantity = Math.max(0, target.quantity + change);
      }
      return updated;
    });
  };
  // Add missing updateQuantity function for item quantity
  const updateQuantity = (index: number, delta: number) => {
    setRoomInventory((prev) => {
      const newInventory = { ...prev };
      const items = [...newInventory[activeRoom].items];
      items[index] = {
        ...items[index],
        quantity: Math.max(0, items[index].quantity + delta),
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

          {/*Move from section*/}
          <div className="bg-white border border-[#AEAEAE] rounded-xl p-6 md:p-8 w-full  flex flex-col gap-6">
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
                  <label className="font-medium text-base leading-6 text-[#717171]">
                    Suffix
                  </label>
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
                  <select className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]">
                    <option>Select</option>
                  </select>
                </div>
                <div className="flex flex-col flex-1">
                  <label className="font-medium text-base leading-6 text-[#717171]">
                    Room <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]">
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
                <label
                  htmlFor="liftFrom"
                  className="text-base font-normal text-[#212121]"
                >
                  Lift Available <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Job Description */}
              <div className="flex flex-col">
                <label className="font-medium text-base leading-6 text-[#717171]">
                  Job Description (Optional)
                </label>
                <textarea className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base resize-none h-36 focus:outline-none focus:ring-1 focus:ring-[#B27B0E]" />
              </div>
            </div>
          </div>

          {/*Move to section*/}
          <div className="bg-white border border-[#AEAEAE] rounded-xl p-6 md:p-8 w-full  flex flex-col gap-6">
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
                  <label className="font-medium text-base leading-6 text-[#717171]">
                    Suffix
                  </label>
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
                  <select className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]">
                    <option>Select</option>
                  </select>
                </div>
                <div className="flex flex-col flex-1">
                  <label className="font-medium text-base leading-6 text-[#717171]">
                    Room <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]">
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
                <label
                  htmlFor="liftFrom"
                  className="text-base font-normal text-[#212121]"
                >
                  Lift Available <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Job Description */}
              <div className="flex flex-col">
                <label className="font-medium text-base leading-6 text-[#717171]">
                  Job Description (Optional)
                </label>
                <textarea className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base resize-none h-36 focus:outline-none focus:ring-1 focus:ring-[#B27B0E]" />
              </div>
            </div>
          </div>

          {/* Date & Time Section */}
          <div className="bg-white border border-[#AEAEAE] rounded-xl p-6 md:p-8 w-full w-full  flex flex-col gap-6">
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

          {/* Room Inventory Section */}
          <div className="flex flex-col items-center bg-white border border-[#AEAEAE] rounded-xl p-6 gap-3 w-full">
            {/* Room Tabs */}
            <div className="flex items-center gap-3 w-full h-[72px] pb-2">
              <button
                onClick={goToPrevRoom}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} />
              </button>

              {rooms.map((room, index) => (
                <button
                  key={index}
                  onClick={() => setActiveRoom(room)}
                  className={`flex flex-col justify-center items-center px-3 py-3 w-full h-[72px] rounded-xl gap-2 text-center text-sm ${
                    activeRoom === room
                      ? "bg-[#FFFAE6] font-medium text-black"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-sm leading-6">{room}</span>
                </button>
              ))}

              <button
                onClick={goToNextRoom}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <HugeiconsIcon icon={ArrowRight01Icon} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex flex-col gap-3 w-full">
              {roomInventory[activeRoom]?.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 gap-3 w-full h-[72px] border border-[#AEAEAE] rounded-xl"
                >
                  <span className="flex-1 text-base text-gray-800">
                    {item.name}
                  </span>

                  {item.checked && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  )}
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) =>
                      setRoomInventory((prev) => {
                        const newInventory = { ...prev };
                        newInventory[activeRoom].items[index].checked =
                          e.target.checked;
                        return newInventory;
                      })
                    }
                    className="w-6 h-6 accent-yellow-400"
                  />
                </div>
              ))}

              <button className="flex justify-between items-center p-3 w-full text-gray-600 border border-gray-200 rounded-xl hover:bg-gray-50">
                <span>Explore more items here</span>
                <HugeiconsIcon icon={ArrowDown01Icon} />
              </button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between w-full h-[52px]">
              <button
                onClick={goToPrevRoom}
                className="flex items-center justify-center gap-2 w-[157px] h-[52px] bg-gray-200 rounded-xl hover:bg-gray-300 px-4 py-3"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} />
                Previous
              </button>
              <button
                onClick={goToNextRoom}
                className="flex items-center justify-center gap-2 w-[175px] h-[52px] bg-gray-200 rounded-xl hover:bg-gray-300 px-4 py-3"
              >
                Next Room
                <HugeiconsIcon icon={ArrowRight01Icon} />
              </button>
            </div>
          </div>

          {/* Special Objects Section */}

          <div className="bg-white border border-gray-300 rounded-xl p-4 md:p-6 mb-4">
            <h2 className="font-medium text-[28px] leading-[36px] pb-2 text-[#212121]">
              Special Objects
            </h2>
            <textarea
              placeholder="Think: heavy items, fragile items, valuable items, etc."
              className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base resize-none h-36 focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
            />
          </div>

          {/* Extra Services Section */}
          <div className="flex flex-col gap-3 bg-white border border-gray-300 rounded-xl p-6">
            <h2 className="font-medium text-[28px] leading-[36px] pb-2 text-[#212121]">
              Extra Services
            </h2>

            {Object.entries(extraServices).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between p-6 gap-3 w-full h-[72px] border border-[#AEAEAE] rounded-xl"
              >
                <span className="flex-1 text-base text-gray-800">{key}</span>
                <div className="flex items-center gap-2">
                  {value.checked && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateExtraServiceQuantity(
                            key as keyof ExtraServices,
                            -1
                          )
                        }
                        className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span>{value.quantity}</span>
                      <button
                        onClick={() =>
                          updateExtraServiceQuantity(
                            key as keyof ExtraServices,
                            1
                          )
                        }
                        className="w-6 h-6 border border-gray-400 rounded-full flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  )}
                  <input
                    type="checkbox"
                    checked={value.checked}
                    onChange={(e) =>
                      setExtraServices((prev) => ({
                        ...prev,
                        [key]: { ...value, checked: e.target.checked },
                      }))
                    }
                    className="w-5 h-5 accent-yellow-400"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Contact Details Section */}
          <div className="bg-white border border-gray-300 rounded-xl p-4 md:p-6 mb-4">
            <h2 className="font-medium text-[28px] leading-[36px] pb-2 text-[#212121]">
              Contact Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="font-medium text-base leading-6 text-[#717171]">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  defaultValue="example@gmail.com"
                  className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="font-medium text-base leading-6 text-[#717171]">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
                  />
                </div>
                <div>
                  <label className="font-medium text-base leading-6 text-[#717171]">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium text-base leading-6 text-[#717171]">
                  Whatsapp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]"
                />
              </div>

              <div>
                <label className="font-medium text-base leading-6 text-[#717171]">
                  Contact Preference <span className="text-red-500">*</span>
                </label>
                <select className="w-full border border-[#AEAEAE] rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-1 focus:ring-[#B27B0E]">
                  <option>Select preference</option>
                </select>
              </div>
            </div>
          </div>


          {/* Save Button */}

          <div className="flex justify-end w-full mb-6">
            <button className="self-end flex items-center justify-center px-6 py-3 bg-[#FFCF00] rounded-xl">
              <span className="font-medium text-base text-[#212121]">Save</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBookingDetails;
