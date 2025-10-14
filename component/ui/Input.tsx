"use client";

import React, { useState, useEffect, InputHTMLAttributes } from "react";

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

  // Keep internal value in sync when external `value` changes
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const val = value !== undefined ? value : internalValue;
  const shouldFloat = focused || val.trim().length > 0;

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
        placeholder=" " // placeholder kept to help spacing
        className={`peer w-full border border-gray-300 rounded-md px-3 pt-6 pb-3 text-base outline-none transition-all duration-200
          focus:border-gray-800 focus:ring-1 focus:ring-gray-800 disabled:bg-white`}
      />

      {/* Floating label */}
      {label && (
        <label
          className={`absolute left-3 bg-white px-1 text-gray-500 transition-all duration-200 pointer-events-none
          ${
            shouldFloat
              ? "top-1 text-xs text-gray-500"
              : "top-4 text-base text-gray-500"
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
