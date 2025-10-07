'use client';

import { ArrowDown01Icon, ArrowRight01Icon, ArrowRight02Icon } from '@hugeicons/core-free-icons';
import {  HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  whatsappNumber: string;
  country: string;
  city: string;
  address: string;
  postal: string;
  houseNumber: string;
  suffix: string;
}

export default function EditProfile() {
  const [formData, setFormData] = useState<ProfileData>({
    firstName: '',
    lastName: '',
    email: '',
    whatsappNumber: '',
    country: '',
    city: '',
    address: '',
    postal: '',
    houseNumber: '',
    suffix: '',
  });

  const [loading, setLoading] = useState(false);

  // Fetch data from API on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('/api/profile'); // Replace with your API endpoint
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle save/update
  const handleSave = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/profile', { // Replace with your API endpoint
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setFormData(updatedData);
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    } finally {
      setLoading(false);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    // Optionally refetch original data or navigate back
    window.location.reload();
  };

  return (
    <div className=" w-full  flex flex-col items-end gap-8 p-0 ">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-row items-start gap-8 p-0 w-full h-6 self-stretch">
       <Link href="/dashboard/profile"> <button className="w-6 h-6 rotate-180">
          {/* <ChevronRight className="w-6 h-6 text-[#141B34]" strokeWidth={1.5} /> */}
         <HugeiconsIcon icon={ArrowRight02Icon} className="w-6 h-6 text-[#141B34]" /> 
        </button></Link>
        
        <div className="flex flex-row items-center gap-3 p-0 w-[183px] h-6">
          <span className="w-[49px] h-6 font-['Poppins'] font-normal text-base leading-6 text-black">
            <Link href="/dashboard/profile">Profile</Link>
          </span>
          {/* <ChevronRight className="w-6 h-6 text-[#212121]" strokeWidth={1.5} /> */}
          <HugeiconsIcon icon={ArrowRight01Icon} className="w-6 h-6 text-[#212121]" />
          <span className="w-[86px] h-6 font-['Poppins'] font-normal text-base leading-6 text-black">
            Edit Profile
          </span>
        </div>
      </div>

      {/* Page Title */}
      <h2 className="w-[1008px] h-12 font-['Poppins'] font-semibold text-[40px] leading-[48px] text-[#212121] self-stretch">
        Profile Info
      </h2>

      {/* Form Fields */}
      <div className="flex flex-col items-start gap-8 p-0 w-full h-[176px] self-stretch">
        {/* Row 1: First Name and Last Name */}
        <div className="flex flex-row items-start gap-8 p-0 w-full h-[72px] self-stretch">
          {/* First Name */}
          <div className="box-border flex flex-row justify-between items-center py-[14px] px-3 gap-[10px] w-[488px] h-[72px] border border-[#AEAEAE] rounded-xl flex-1">
            <div className="flex flex-col items-start p-0 m-auto w-[464px] h-11 flex-1">
              <label className="w-16 h-5 font-['Poppins'] font-normal text-xs leading-5 text-[#717171]">First Name 
              </label>
              <input 
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full h-6 font-['Poppins'] font-normal text-base leading-6 text-[#212121] border-none outline-none bg-transparent"
              />
            </div>
            <div className="hidden w-6 h-6 m-auto" />
          </div>

          {/* Last Name */}
          <div className="box-border flex flex-row justify-between items-center py-[14px] px-3 gap-[10px] w-[488px] h-[72px] border border-[#AEAEAE] rounded-xl flex-1">
            <div className="flex flex-col items-start p-0 m-auto w-[464px] h-11 flex-1">
              <label className="w-16 h-5 font-['Poppins'] font-normal text-xs leading-5 text-[#717171]">
                Last Name 
              </label>
              <input 
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full h-6 font-['Poppins'] font-normal text-base leading-6 text-[#212121] border-none outline-none bg-transparent"
              />
            </div>
            <div className="hidden w-6 h-6 m-auto" />
          </div>
        </div>

        {/* Row 2: Email and WhatsApp Number */}
        <div className="flex flex-row items-start gap-8 p-0 w-full h-[72px] self-stretch">
          {/* Email */}
          <div className="box-border flex flex-row justify-between items-center py-[14px] px-3 gap-[10px] w-[488px] h-[72px] border border-[#AEAEAE] rounded-xl flex-1">
            <div className="flex flex-col items-start p-0 m-auto w-[464px] h-11 flex-1">
              <label className="w-[33px] h-5 font-['Poppins'] font-normal text-xs leading-5 text-[#717171]">
                Email 
              </label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="w-full h-6 font-['Poppins'] font-normal text-base leading-6 text-[#717171] border-none outline-none bg-transparent placeholder:text-[#717171]"
              />
            </div>
            <div className="hidden w-6 h-6 m-auto" />
          </div>

          {/* WhatsApp Number */}
          <div className="box-border flex flex-row justify-between items-center py-[14px] px-3 gap-[10px] w-[488px] h-[72px] border border-[#AEAEAE] rounded-xl flex-1">
            <div className="flex flex-col items-start p-0 m-auto w-[464px] h-11 flex-1">
              <label className="w-[115px] h-5 font-['Poppins'] font-normal text-xs leading-5 text-[#717171]">
                Whatsapp Number 
              </label>
              <input 
                type="tel"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                className="w-full h-6 font-['Poppins'] font-normal text-base leading-6 text-[#212121] border-none outline-none bg-transparent"
              />
            </div>
            <div className="hidden w-6 h-6 m-auto" />
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="box-border flex flex-col items-start p-6 gap-6 w-full h-[492px] border border-[#AEAEAE] rounded-xl self-stretch">
        <h3 className="w-[960px] h-9 font-['Poppins'] font-medium text-[28px] leading-9 text-[#212121] self-stretch">
          Address
        </h3>

        <div className="flex flex-col items-start p-0 gap-8 w-full h-[384px] self-stretch">
          {/* Country Dropdown */}
          <div className="box-border flex flex-row justify-between items-center py-[14px] px-3 gap-[10px] w-full h-[72px] border border-[#AEAEAE] rounded-xl self-stretch">
            <div className="flex flex-col items-start p-0 m-auto w-full h-11 flex-1">
              <label className="w-[57px] h-5 font-['Poppins'] font-normal text-xs leading-5 text-[#717171]">
                Country 
              </label>
              <input 
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full h-6 font-['Poppins'] font-normal text-base leading-6 text-[#212121] border-none outline-none bg-transparent"
              />
            </div>
            {/* <ChevronDown className="w-6 h-6 m-auto text-[#717171]" strokeWidth={1.5} /> */}
            <HugeiconsIcon icon={ArrowDown01Icon} />
          </div>

          {/* City */}
          <div className="box-border flex flex-row justify-between items-center py-[14px] px-3 gap-[10px] w-full h-[72px] border border-[#AEAEAE] rounded-xl self-stretch">
            <div className="flex flex-col items-start p-0 m-auto w-full h-11 flex-1">
              <label className="w-[33px] h-5 font-['Poppins'] font-normal text-xs leading-5 text-[#717171]">
                City 
              </label>
              <input 
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full h-6 font-['Poppins'] font-normal text-base leading-6 text-[#212121] border-none outline-none bg-transparent"
              />
            </div>
            <div className="hidden w-6 h-6 m-auto" />
          </div>

          {/* Address Input */}
          <div className="box-border flex flex-row justify-between items-center py-6 px-3 gap-[10px] w-full h-[72px] border border-[#AEAEAE] rounded-xl self-stretch">
            <input 
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address "
              className="w-full h-6 font-['Poppins'] font-normal text-base leading-6 text-[#717171] m-auto flex-1 border-none outline-none bg-transparent placeholder:text-[#717171]"
            />
            <div className="hidden w-6 h-6 m-auto" />
          </div>

          {/* Postal Code, House Number, Suffix */}
          <div className="flex flex-row items-center gap-8 p-0 w-full h-[72px] self-stretch">
            {/* Postal Code */}
            <div className="box-border flex flex-row justify-between items-center py-6 px-3 gap-[10px] w-[298.67px] h-[72px] border border-[#AEAEAE] rounded-xl flex-1">
              <input 
                type="text"
                name="postal"
                value={formData.postal}
                onChange={handleChange}
                placeholder="Postal "
                className="w-[274.67px] h-6 font-['Poppins'] font-normal text-base leading-6 text-[#717171] m-auto flex-1 border-none outline-none bg-transparent placeholder:text-[#717171]"
              />
              <div className="hidden w-6 h-6 m-auto" />
            </div>

            {/* House Number */}
            <div className="box-border flex flex-row justify-between items-center py-[14px] px-3 gap-[10px] w-[298.67px] h-[72px] border border-[#AEAEAE] rounded-xl flex-1">
              <div className="flex flex-col items-start p-0 m-auto w-[274.67px] h-11 flex-1">
                <label className="w-[99px] h-5 font-['Poppins'] font-normal text-xs leading-5 text-[#717171]">
                  House Number 
                </label>
                <input 
                  type="text"
                  name="houseNumber"
                  value={formData.houseNumber}
                  onChange={handleChange}
                  className="w-full h-6 font-['Poppins'] font-normal text-base leading-6 text-[#212121] border-none outline-none bg-transparent"
                />
              </div>
              <div className="hidden w-6 h-6 m-auto" />
            </div>

            {/* Suffix */}
            <div className="box-border flex flex-row justify-between items-center py-6 px-3 gap-[10px] w-[298.67px] h-[72px] border border-[#AEAEAE] rounded-xl flex-1">
              <input 
                type="text"
                name="suffix"
                value={formData.suffix}
                onChange={handleChange}
                placeholder="Suffix"
                className="w-[274.67px] h-6 font-['Poppins'] font-normal text-base leading-6 text-[#717171] m-auto flex-1 border-none outline-none bg-transparent placeholder:text-[#717171]"
              />
              <div className="hidden w-6 h-6 m-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Stripe Settings (Hidden) */}
      <div className="box-border hidden flex-col items-start p-6 gap-6 w-[1008px] h-[388px] border border-[#AEAEAE] rounded-xl self-stretch">
        <h3 className="w-[960px] h-9 font-['Poppins'] font-medium text-[28px] leading-9 text-[#212121] self-stretch">
          Stripe Settings
        </h3>

        <div className="flex flex-col items-start p-0 gap-8 w-[960px] h-[280px] self-stretch">
          {/* Stripe Field 1 */}
          <div className="box-border flex flex-row justify-between items-center py-[14px] px-3 gap-[10px] w-[960px] h-[72px] border border-[#AEAEAE] rounded-xl self-stretch">
            <div className="flex flex-col items-start p-0 m-auto w-[936px] h-11 flex-1">
              <label className="w-[103px] h-5 font-['Poppins'] font-normal text-xs leading-5 text-[#717171]">
                Stripe Field 1 *
              </label>
              <input 
                type="text"
                className="w-[25px] h-6 font-['Poppins'] font-normal text-base leading-6 text-[#212121] border-none outline-none bg-transparent"
              />
            </div>
            <div className="hidden w-6 h-6 m-auto" />
          </div>

          {/* Stripe Field 2 */}
          <div className="box-border flex flex-row justify-between items-center py-[14px] px-3 gap-[10px] w-[960px] h-[72px] border border-[#AEAEAE] rounded-xl self-stretch">
            <div className="flex flex-col items-start p-0 m-auto w-[936px] h-11 flex-1">
              <label className="w-[72px] h-5 font-['Poppins'] font-normal text-xs leading-5 text-[#717171]">
                Stripe Field 2 *
              </label>
              <input 
                type="text"
                className="w-[25px] h-6 font-['Poppins'] font-normal text-base leading-6 text-[#212121] border-none outline-none bg-transparent"
              />
            </div>
            <div className="hidden w-6 h-6 m-auto" />
          </div>

          {/* Stripe Field 3 */}
          <div className="box-border flex flex-row justify-between items-center py-[14px] px-3 gap-[10px] w-[960px] h-[72px] border border-[#AEAEAE] rounded-xl self-stretch">
            <div className="flex flex-col items-start p-0 m-auto w-[936px] h-11 flex-1">
              <label className="w-[90px] h-5 font-['Poppins'] font-normal text-xs leading-5 text-[#717171]">
                Stripe Field 3 *
              </label>
              <input 
                type="text"
                className="w-[98px] h-6 font-['Poppins'] font-normal text-base leading-6 text-[#212121] border-none outline-none bg-transparent"
              />
            </div>
            <div className="hidden w-6 h-6 m-auto" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row items-center gap-8 p-0 w-[258px] pb-[20px]">
        {/* Cancel Button */}
        <button 
          onClick={handleCancel}
          disabled={loading}
          className="flex flex-row justify-center items-center py-5 px-8 gap-2 w-[122px]  bg-[#EDEDED] rounded-xl disabled:opacity-50"
        >
          <span className="w-[58px] font-['Poppins'] font-medium text-base leading-6 text-[#212121]">
            Cancel
          </span>
        </button>

        {/* Save Button */}
        <button 
          onClick={handleSave}
          disabled={loading}
          className="flex flex-row justify-center items-center py-5 px-8 gap-2 w-[104px]  bg-[#FFCF00] rounded-xl disabled:opacity-50"
        >
          <span className="w-10 font-['Poppins'] font-medium text-base leading-6 text-[#212121]">
            {loading ? 'Saving...' : 'Save'}
          </span>
        </button>
      </div>
    </div>
  );
}