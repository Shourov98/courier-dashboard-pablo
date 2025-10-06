// pages/forgot-password.tsx or app/forgot-password/page.tsx (depending on your Next.js version)
'use client'; // If using App Router

import React, { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { NextPage } from 'next';
import Pattern from '@/public/pattern.svg';
import Logo from '@/public/Tele-Portes Logo.svg';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const ForgotPasswordPage: NextPage = () => {  
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router=  useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Replace with your password reset logic
      router.push("/auth/otp")      
      
      // Example API call
      // const response = await fetch('/api/auth/forgot-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      // Handle success/error
    } catch (error) {
      console.error('Forgot password error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToLogin = () => {
    // Navigation logic back to login
    router.push("/auth/signin");
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Top decorative pattern - Fixed positioning */}
      <div className="fixed top-0 left-0 w-full h-[119px] z-0">
              <Image src={Pattern} alt='pattern' className='w-full'/>
      </div>

      {/* Bottom decorative pattern - Fixed positioning */}
      <div className="fixed bottom-0 left-0 w-full h-[119px] z-0">
              <Image src={Pattern} alt='pattern' className='w-full'/>
      </div>

      {/* Main content - Positioned to avoid overlap with patterns */}
      <div className="relative z-10 min-h-screen flex items-center justify-center" style={{ paddingTop: '139px', paddingBottom: '139px' }}>
        <div className="w-[564px] h-[510px] bg-white  p-8 flex flex-col items-center gap-6">
          
          {/* Logo */}
          <div className="w-full max-w-[500px] h-24 flex items-center justify-center">
            <div className="text-center">
               <Image src={Logo} alt='logo'/>
            </div>
          </div>

          {/* Title and subtitle section */}
          <div className="w-[277px] h-16 flex flex-col items-center gap-1">
            <h2 className="w-[277px] h-9 text-3xl font-semibold text-gray-800 leading-9 text-center">
              Forgot Password
            </h2>
            <p className="w-[277px] h-6 text-base text-gray-500 leading-6 text-center">
              Enter your email to reset password
            </p>
          </div>

          {/* Form section */}
          <div className="w-[500px] h-[238px] flex flex-col gap-6">
            
            {/* Email field */}
            <div className="flex flex-col gap-2 h-[86px]">
              <label htmlFor="email" className="text-lg font-semibold text-gray-800 leading-6 h-[26px]">
                Email
              </label>
              <div className="relative">
                <div className="flex items-center bg-yellow-50 border border-gray-200 rounded-xl px-4 py-3.5 gap-2 h-[52px] focus-within:ring-2 focus-within:ring-yellow-400 focus-within:border-yellow-400 transition-all duration-200">
                  <Mail className="w-6 h-6 text-yellow-600 flex-shrink-0" strokeWidth={1.5} />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 outline-none text-base leading-6"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading || !email}
              className="w-full bg-[#FFCF00] hover:bg-[#b59300]   text-gray-800 font-medium text-base py-4 px-8 rounded-xl h-[55px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 "
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                'Next'
              )}
            </button>

            {/* Back to Login button */}
            <button
              onClick={handleBackToLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 text-gray-800 font-medium text-base py-3.5 px-6 rounded-xl h-[52px]  transition-colors duration-200 hover:bg-[#b59300] focus:bg-[#FFCF00] "
            >
              <ArrowLeft className="w-6 h-6" strokeWidth={1.5} />
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;