"use client";

import {
  ArrowRight01Icon,
  ArrowRight02Icon,
  Download01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface BookingData {
  orderId: string;
  status: string;
  contactDetails: {
    name: string;
    email: string;
    preferredContactMethod: string;
    whatsappNumber: string;
  };
  movingFrom: {
    address: string;
    propertyType: string;
    room: number;
    floor: number;
    liftAvailable: boolean;
    jobNotes: string;
  };
  movingTo: {
    address: string;
    propertyType: string;
    room: number;
    floor: number;
    liftAvailable: boolean;
    jobNotes: string;
  };
  dateTime: {
    date: string;
    time: string;
  };
  extraServices: {
    packing: number;
    nutsAndBoltsPros: {
      price: number;
      items: { label: string; value: string }[];
    };
    boxPackaging: {
      price: number;
      items: { label: string; value: string }[];
    };
  };
  inventory: {
    livingRoom: { name: string; quantity: number }[];
    diningRoom: { name: string; quantity: number }[];
    kitchen: { name: string; quantity: number }[];
    office: { name: string; quantity: number }[];
    bedroom: { name: string; quantity: number }[];
    other: { name: string; quantity: number }[];
  };
  price: {
    storageService: number;
    unit: number;
    extraServices: number;
    duration: { months: number; price: number };
    distance: { km: number; ratePerKm: number; price: number };
    tax: { percentage: number; amount: number };
    subTotal: number;
    amount: number;
  };
  notListedInStock: { name: string; price: string }[];
  privateNotes: string;
  payment: {
    paid: boolean;
    amount: number;
  };
}

const BookingDetails: React.FC = () => {
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [privateNotes, setPrivateNotes] = useState("");

  useEffect(() => {
    const mockData: BookingData = {
      orderId: "TP-123",
      status: "Refunded",
      contactDetails: {
        name: "John Doe",
        email: "example@gmail.com",
        preferredContactMethod: "Whatsapp",
        whatsappNumber: "+8801XXXXXXX",
      },
      movingFrom: {
        address: "43, Mookhali, Dhaka 1212, Bangladesh",
        propertyType: "Flat",
        room: 2,
        floor: 2,
        liftAvailable: true,
        jobNotes: "I will move along with your van",
      },
      movingTo: {
        address: "43, Mookhali, Dhaka 1212, Bangladesh",
        propertyType: "Flat",
        room: 2,
        floor: 2,
        liftAvailable: false,
        jobNotes: "N/A",
      },
      dateTime: {
        date: "September 20, 2025",
        time: "10:00 AM",
      },
      extraServices: {
        packing: 23.5,
        nutsAndBoltsPros: {
          price: 23.5,
          items: [
            { label: "D-2", value: "" },
            { label: "A-2", value: "" },
          ],
        },
        boxPackaging: {
          price: 23.5,
          items: [
            { label: "S-2", value: "" },
            { label: "M-2", value: "" },
            { label: "L-2", value: "" },
            { label: "W-2", value: "" },
          ],
        },
      },
      inventory: {
        livingRoom: [
          { name: "Item 1", quantity: 2 },
          { name: "Item 2", quantity: 1 },
          { name: "Item 3", quantity: 1 },
        ],
        diningRoom: [
          { name: "Item 1", quantity: 2 },
          { name: "Item 2", quantity: 1 },
          { name: "Item 3", quantity: 1 },
        ],
        kitchen: [
          { name: "Item 1", quantity: 2 },
          { name: "Item 2", quantity: 1 },
          { name: "Item 3", quantity: 1 },
        ],
        office: [
          { name: "Item 1", quantity: 2 },
          { name: "Item 2", quantity: 1 },
          { name: "Item 3", quantity: 1 },
        ],
        bedroom: [
          { name: "Item 1", quantity: 2 },
          { name: "Item 2", quantity: 1 },
          { name: "Item 3", quantity: 1 },
        ],
        other: [
          { name: "Item 1", quantity: 2 },
          { name: "Item 2", quantity: 1 },
          { name: "Item 3", quantity: 1 },
        ],
      },
      price: {
        storageService: 24.5,
        unit: 24.5,
        extraServices: 24.5,
        duration: { months: 1, price: 70.0 },
        distance: { km: 25, ratePerKm: 12.5, price: 24.5 },
        tax: { percentage: 5, amount: 24.5 },
        subTotal: 0,
        amount: 171.5,
      },
      notListedInStock: [
        { name: "item1", price: "12" },
        { name: "item2", price: "200" },
      ],
      privateNotes: "",
      payment: {
        paid: true,
        amount: 171.5,
      },
    };

    setBookingData(mockData);
    setPrivateNotes(mockData.privateNotes);
  }, []);

  if (!bookingData) return <div className="p-4">Loading...</div>;

  return (
    <div className="min-h-screen  p-6">
      <div className="w-full flex flex-col gap-8">
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
          <span className="font-bold text-base leading-6 text-black">
            View Details
          </span>
        </div>

        <h1 className="font-semibold text-[40px] leading-[48px] text-[#08002B] m-0">
          Bookings
        </h1>

        <div className="bg-white border border-[#AEAEAE] rounded-xl p-6">
          <div className="flex flex-col gap-3 mb-8">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h2 className="font-medium text-[28px] leading-9 text-[#212121] m-0 flex-1">
                Details
              </h2>
              <div className="flex gap-2 items-center">
                <div className="flex items-center px-2 py-1 gap-2 bg-[#EAFAF3] rounded-full">
                  <span className="font-medium text-xs leading-5 text-[#29BB7D]">
                    {bookingData.status}
                  </span>
                  <div className="w-2 h-2 bg-[#29BB7D] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="font-semibold text-lg leading-[26px] text-[#212121] text-right">
              Order ID: {bookingData.orderId}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg leading-[26px] text-[#212121] m-0">
                Contact Details
              </h3>
              <div className="border border-[#AEAEAE] rounded-xl p-3 flex flex-col gap-3">
                <div className="flex gap-3 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Name
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121]">
                      {bookingData.contactDetails.name}
                    </div>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Preferred Contact Method
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121]">
                      {bookingData.contactDetails.preferredContactMethod}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <div className="flex-1 min-w-[200px]">
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Email
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121]">
                      {bookingData.contactDetails.email}
                    </div>
                  </div>
                  <div className="flex-1 min-w-[200px]">
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Whatsapp Number
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121]">
                      {bookingData.contactDetails.whatsappNumber}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-8 flex-wrap">
              <div className="flex-1 min-w-[300px]">
                <h3 className="font-semibold text-lg leading-[26px] text-[#212121] m-0 mb-3">
                  Moving From
                </h3>
                <div className="border border-[#AEAEAE] rounded-xl p-3 flex flex-col gap-3">
                  <div>
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Address
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121]">
                      {bookingData.movingFrom.address}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Property Details
                    </div>
                    <div className="font-normal text-base leading-8 text-[#212121]">
                      Property Type: {bookingData.movingFrom.propertyType}
                    </div>
                    <div className="font-normal text-base leading-8 text-[#212121]">
                      Room: {bookingData.movingFrom.room}
                    </div>
                    <div className="font-normal text-base leading-8 text-[#212121]">
                      Floor: {bookingData.movingFrom.floor}
                    </div>
                    <div className="font-normal text-base leading-8 text-[#212121]">
                      Lift available:{" "}
                      {bookingData.movingFrom.liftAvailable ? "Yes" : "No"}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Job Notes
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121]">
                      {bookingData.movingFrom.jobNotes}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-[300px]">
                <h3 className="font-semibold text-lg leading-[26px] text-[#212121] m-0 mb-3">
                  Moving To
                </h3>
                <div className="border border-[#AEAEAE] rounded-xl p-3 flex flex-col gap-3">
                  <div>
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Address
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121]">
                      {bookingData.movingTo.address}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Property Details
                    </div>
                    <div className="font-normal text-base leading-8 text-[#212121]">
                      Property Type: {bookingData.movingTo.propertyType}
                    </div>
                    <div className="font-normal text-base leading-8 text-[#212121]">
                      Room: {bookingData.movingTo.room}
                    </div>
                    <div className="font-normal text-base leading-8 text-[#212121]">
                      Floor: {bookingData.movingTo.floor}
                    </div>
                    <div className="font-normal text-base leading-8 text-[#212121]">
                      Lift available:{" "}
                      {bookingData.movingTo.liftAvailable ? "Yes" : "No"}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Job Notes
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121]">
                      {bookingData.movingTo.jobNotes}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-8 flex-wrap">
              <div className="flex-1 min-w-[300px]">
                <h3 className="font-semibold text-lg leading-[26px] text-[#212121] m-0 mb-3">
                  Date & Time
                </h3>
                <div className="border border-[#AEAEAE] w-full h-6/7 rounded-xl p-3 flex flex-col gap-3">
                  <div>
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Date
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121]">
                      {bookingData.dateTime.date}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Time
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121]">
                      {bookingData.dateTime.time}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-[300px]">
                <h3 className="font-semibold text-lg leading-[26px] text-[#212121] m-0 mb-3">
                  Extra Services
                </h3>
                <div className="border border-[#AEAEAE] rounded-xl p-3 flex flex-col gap-3">
                  <div>
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Packing
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121]">
                      €{bookingData.extraServices.packing}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Nuts & Bolts Pros
                    </div>
                    <div className="flex justify-between items-center gap-2">
                      <span className="font-normal text-base leading-6 text-[#212121]">
                        €{bookingData.extraServices.nutsAndBoltsPros.price}
                      </span>
                      <div className="flex gap-2">
                        {bookingData.extraServices.nutsAndBoltsPros.items.map(
                          (item, i) => (
                            <span
                              key={i}
                              className="font-normal text-base leading-6 text-[#212121]"
                            >
                              {item.label}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base leading-6 text-[#717171]">
                      Box Packaging
                    </div>
                    <div className="font-normal text-base leading-6 text-[#212121] mb-2">
                      €{bookingData.extraServices.boxPackaging.price}
                    </div>
                    <div className="flex justify-between gap-2">
                      {bookingData.extraServices.boxPackaging.items.map(
                        (item, i) => (
                          <span
                            key={i}
                            className="font-normal text-base leading-6 text-[#212121]"
                          >
                            {item.label}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg leading-[26px] text-[#212121] m-0">
                Inventory
              </h3>
              <div className="border border-[#AEAEAE] rounded-xl p-3">
                <div className="flex gap-3 mb-3 flex-wrap">
                  {Object.entries(bookingData.inventory)
                    .slice(0, 3)
                    .map(([room, items]) => (
                      <div key={room} className="flex-1 min-w-[200px]">
                        <div className="font-medium text-base leading-6 text-[#717171]">
                          {room === "livingRoom"
                            ? "Living Room"
                            : room === "diningRoom"
                            ? "Dining Room"
                            : "Kitchen"}
                        </div>
                        {items.map((item, i) => (
                          <div
                            key={i}
                            className="font-normal text-base leading-6 text-[#212121]"
                          >
                            {item.name}{" "}
                            {item.quantity > 1 ? `(${item.quantity}x)` : ""}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                  {Object.entries(bookingData.inventory)
                    .slice(3)
                    .map(([room, items]) => (
                      <div key={room} className="flex-1 min-w-[200px]">
                        <div className="font-medium text-base leading-6 text-[#717171]">
                          {room.charAt(0).toUpperCase() + room.slice(1)}
                        </div>
                        {items.map((item, i) => (
                          <div
                            key={i}
                            className="font-normal text-base leading-6 text-[#212121]"
                          >
                            {item.name}{" "}
                            {item.quantity > 1 ? `(${item.quantity}x)` : ""}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg leading-[26px] text-[#212121] m-0">
                Price
              </h3>
              <div className="border border-[#AEAEAE] rounded-xl p-3 flex flex-col gap-3">
                <div className="flex justify-between items-center gap-2">
                  <span className="font-medium text-base leading-6 text-[#717171]">
                    Selected Service
                  </span>
                  <span className="font-medium text-base leading-6 text-[#717171]">
                    Price
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    Storage Solution
                  </span>
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    €{bookingData.price.storageService.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-base leading-6 text-[#717171]">
                    Unit
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    35 sq ft Unit - Equivalent to a box room
                  </span>
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    €{bookingData.price.unit.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-base leading-6 text-[#717171]">
                    Extra Services
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    Packing
                  </span>
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    €{bookingData.price.extraServices.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-base leading-6 text-[#717171]">
                    Duration
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    {bookingData.price.duration.months} month
                  </span>
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    €{bookingData.price.duration.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-base leading-6 text-[#717171]">
                    Distance
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    {bookingData.price.distance.km}km
                  </span>
                  <div className="flex gap-2">
                    <span className="font-normal text-base leading-6 text-[#212121]">
                      €{bookingData.price.distance.ratePerKm.toFixed(2)}/km
                    </span>
                    <span className="font-normal text-base leading-6 text-[#212121]">
                      €{bookingData.price.distance.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-base leading-6 text-[#717171]">
                    Tax Applied
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    Tax
                  </span>
                  <div className="flex gap-2">
                    <span className="font-normal text-base leading-6 text-[#212121]">
                      {bookingData.price.tax.percentage}%
                    </span>
                    <span className="font-normal text-base leading-6 text-[#212121]">
                      €{bookingData.price.tax.amount.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-base leading-6 text-[#717171]">
                    Sub Total
                  </span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    Amount
                  </span>
                  <span className="font-semibold text-base leading-6 text-[#212121]">
                    €{bookingData.price.amount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-lg leading-[26px] text-[#212121] m-0">
                Payment
              </h3>
              <div className="border border-[#AEAEAE] rounded-xl p-3 flex flex-col gap-3">
                <div className="flex justify-between items-center gap-2">
                  <span className="font-medium text-base leading-6 text-[#717171]">
                    Paid
                  </span>
                  <div className="w-6 h-6 bg-[#29BB7D] rounded-full flex items-center justify-center">
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                      <path
                        d="M1 5.5L5 9.5L13 1.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="font-normal text-base leading-6 text-[#212121]">
                    Amount
                  </span>
                  <span className="font-semibold text-lg leading-[26px] text-[#212121]">
                    €{bookingData.payment.amount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {bookingData.status === "Pending" && (
            <div className="flex flex-col gap-3 mt-6">
              <h3 className="font-semibold text-lg leading-[26px] text-[#212121] m-0">
                Not Listed in Stock
              </h3>
              <div className="border border-[#AEAEAE] rounded-xl p-3 flex flex-col gap-3">
                <div className="flex justify-between gap-3">
                  <span className="font-medium text-base leading-6 text-[#717171]">
                    Item Name
                  </span>
                  <span className="font-medium text-base leading-6 text-[#717171]">
                    Item Price
                  </span>
                </div>
                {bookingData.notListedInStock.map((item, i) => (
                  <div key={i} className="flex justify-between gap-3">
                    <span>{item.name}</span>

                    <span className=" text-base border border-[#AEAEAE] rounded-xl px-3 py-2 text-center">
                      € {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {bookingData.status != "Pending" &&
          bookingData.status != "Refunded" && (
            <div className="flex gap-8 mt-8 flex-wrap justify-end">
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#EDEDED] rounded-xl">
                <HugeiconsIcon icon={Download01Icon} />
                <span className="font-medium text-base text-[#212121]">
                  Download Invoice
                </span>
              </button>
              <button className="flex items-center justify-center px-6 py-3 bg-[#EDEDED] rounded-xl">
                <span className="font-medium text-base text-[#AEAEAE]">
                  Send Email
                </span>
              </button>
            </div>
          )}

        {bookingData.status === "Refunded" && (
          <div className="w-full flex justify-end">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#EDEDED] rounded-xl">
              <span className="font-medium text-base text-[#AEAEAE]">
                Refund is Handled
              </span>
            </button>
          </div>
        )}

        {bookingData.status === "Pending" && (
          <div className="flex gap-8 flex-wrap justify-end">
            <button className="self-end flex items-center justify-center px-6 py-3 bg-[#FFCF00] rounded-xl">
              <span className="font-medium text-base text-[#212121]">Send</span>
            </button>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <h3 className="font-medium text-lg leading-[26px] text-[#212121] m-0">
            Private Notes
          </h3>
          <textarea
            value={privateNotes}
            onChange={(e) => setPrivateNotes(e.target.value)}
            className="w-full border border-[#AEAEAE] rounded-xl p-3 text-base resize-none h-48 text-[#717171]"
            placeholder="Add private notes"
          />
          <button className="self-end flex items-center justify-center px-6 py-3 bg-[#FFCF00] rounded-xl">
            <span className="font-medium text-base text-[#212121]">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
