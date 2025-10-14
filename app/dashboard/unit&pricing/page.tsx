"use client";

import { Button } from "@/component/ui/Button";
import { Input } from "@/component/ui/Input";
import React, { useState } from "react";

export default function UnitPricing() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    storageSize: "",
    tax: "",
    perKmPrice: "",
    movingServices: "",
    furnitureHome: "",
    storageServices: {
      "2m²": "",
      "4m²": "",
      "6m²": "",
      "10m²": "",
      "16m²": "",
      "20m²": "",
    },
    adText: "",
    discountCode: "",
    discountPercentage: "",
    packing: "",
    nutsBolts: "",
    movingLift: "",
    boxPackaging: {
      small: "",
      medium: "",
      large: "",
      wardrobe: "",
    },
  });

  const handleChange = (field: string, value: string, parent?: string) => {
    if (parent) {
      const parentData = formData[parent as keyof typeof formData];
      if (
        parentData &&
        typeof parentData === "object" &&
        !Array.isArray(parentData)
      ) {
        setFormData({
          ...formData,
          [parent]: {
            ...parentData,
            [field]: value,
          },
        });
      }
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
    setEditMode(false);
  };

  const handleCancel = () => setEditMode(false);

  return (
    <div className="p-8 w-full space-y-8 bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#212121]">Unit & Pricing</h2>
        {!editMode && (
          <Button
            onClick={() => setEditMode(true)}
            className="bg-[#FFCF00] text-black hover:bg-[#FFC107]"
          >
            ✏️ Edit
          </Button>
        )}
      </div>

      {/* STORAGE SIZE */}
      <Section title="Storage Size (Total)">
        <InputWithUnit
          label="Storage Size in meter"
          value={formData.storageSize}
          unit="m²"
          disabled={!editMode}
          onValueChange={(v) => handleChange("storageSize", v)}
        />
      </Section>

      {/* TAX */}
      <Section title="Tax Percentage">
        <InputWithUnit
          label="Tax"
          value={formData.tax}
          unit="%"
          disabled={!editMode}
          onValueChange={(v) => handleChange("tax", v)}
        />
      </Section>

      {/* PER KM PRICE */}
      <Section title="Per km Price">
        <InputWithUnit
          label="Per km Price"
          value={formData.perKmPrice}
          unit="€"
          disabled={!editMode}
          onValueChange={(v) => handleChange("perKmPrice", v)}
        />
      </Section>

      {/* MOVING SERVICES */}
      <Section title="Moving Services">
        <InputWithUnit
          label="Moving Services"
          value={formData.movingServices}
          unit="€"
          disabled={!editMode}
          onValueChange={(v) => handleChange("movingServices", v)}
        />
      </Section>

      {/* FURNITURE & HOME APPLIANCES */}
      <Section title="Furniture & Home Appliances">
        <InputWithUnit
          label="Furniture & Home Appliances"
          value={formData.furnitureHome}
          unit="€"
          disabled={!editMode}
          onValueChange={(v) => handleChange("furnitureHome", v)}
        />
      </Section>

      {/* STORAGE SERVICES */}
      <Section title="Storage Services">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {Object.keys(formData.storageServices).map((key) => (
            <InputWithUnit
              key={key}
              label={key}
              value={
                formData.storageServices[
                  key as keyof typeof formData.storageServices
                ]
              }
              unit="€"
              disabled={!editMode}
              onValueChange={(v) => handleChange(key, v, "storageServices")}
            />
          ))}
        </div>
      </Section>

      {/* AD TEXT */}
      <Section title="Advertising text">
        <Input
          label="Advertising text"
          disabled={!editMode}
          value={formData.adText}
          onValueChange={(v) => handleChange("adText", v)}
        />
      </Section>

      {/* DISCOUNT */}
      <Section title="Discount">
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Discount Code"
            disabled={!editMode}
            value={formData.discountCode}
            onValueChange={(v) => handleChange("discountCode", v)}
          />
          <InputWithUnit
            label="Discount Percentage"
            value={formData.discountPercentage}
            unit="%"
            disabled={!editMode}
            onValueChange={(v) => handleChange("discountPercentage", v)}
          />
        </div>
      </Section>

      {/* EXTRA SERVICES */}
      <Section title="Extra Services">
        <InputWithUnit
          label="Packing"
          value={formData.packing}
          unit="€"
          disabled={!editMode}
          onValueChange={(v) => handleChange("packing", v)}
        />
        <InputWithUnit
          label="Nuts & Bolts Pros"
          value={formData.nutsBolts}
          unit="€"
          disabled={!editMode}
          onValueChange={(v) => handleChange("nutsBolts", v)}
        />
        <InputWithUnit
          label="Moving Lift"
          value={formData.movingLift}
          unit="€"
          disabled={!editMode}
          onValueChange={(v) => handleChange("movingLift", v)}
        />
      </Section>

      {/* BOX PACKAGING */}
      <Section title="Box Packaging">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Object.keys(formData.boxPackaging).map((key) => (
            <InputWithUnit
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={
                formData.boxPackaging[key as keyof typeof formData.boxPackaging]
              }
              unit="€"
              disabled={!editMode}
              onValueChange={(v) => handleChange(key, v, "boxPackaging")}
            />
          ))}
        </div>
      </Section>

      {editMode && (
        <div className="flex justify-end gap-3 pt-4">
          <Button
            onClick={handleCancel}
            className="bg-gray-200 text-gray-700 hover:bg-gray-300"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-[#FFD54F] text-black hover:bg-[#FFC107]"
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────── Helper Components ─────────────────────────────── */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-[#212121] font-semibold text-sm">{title}</h3>
      {children}
    </div>
  );
}

/* Input with right-side unit (€ / % / m²) */
function InputWithUnit({
  label,
  unit,
  disabled,
  value,
  onValueChange,
}: {
  label: string;
  unit?: string;
  disabled?: boolean;
  value: string;
  onValueChange: (v: string) => void;
}) {
  return (
    <div className="relative flex items-stretch border border-gray-300 rounded-md overflow-hidden bg-gray-100">
      {/* Make input match gray bg */}
      <Input
        label={label}
        disabled={disabled}
        value={value}
        onValueChange={onValueChange}
        className="flex-1 border-0 shadow-none bg-white focus:bg-gray-100"
      />

      {/* Unit block — fully same color and height */}
      {unit && (
        <div className="flex items-center justify-center px-4 bg-gray-100 text-base font-semibold text-gray-700 min-w-[50px]">
          {unit}
        </div>
      )}
    </div>
  );
}
