"use client";

import React, { useState, InputHTMLAttributes } from "react";

interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  onValueChange?: (val: string) => void;
}

export const Input: React.FC<FloatingInputProps> = ({
  label,
  value = "",
  onValueChange,
  className = "",
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  const val = value !== undefined ? value : internalValue;
  const shouldFloat = focused || val.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInternalValue(v);
    onValueChange?.(v);
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Input field */}
      <input
        {...rest}
        value={val}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" " // keep placeholder to trigger peer styling
        className={`peer w-full border border-gray-300 rounded-md px-3 pt-6 pb-3 text-base outline-none transition-all duration-200
          focus:border-gray-800 focus:ring-1 focus:ring-gray-800 disabled:bg-white`}
      />

      {/* Floating label */}
      {label && (
        <label
          className={`absolute left-3 top-4 text-gray-500 text-base transition-all duration-200 bg-white px-1
          pointer-events-none 
          peer-focus:top-0 peer-focus:left-2 peer-focus:text-sm peer-focus:text-gray-800
          ${shouldFloat ? "top-0 left-2 text-sm text-gray-800" : ""}`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
