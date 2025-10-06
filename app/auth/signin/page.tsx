// pages/signin.tsx or app/signin/page.tsx (depending on your Next.js version)
'use client'; // If using App Router

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { NextPage } from 'next';
import Pattern from '@/public/pattern.svg';
import Logo from '@/public/Tele-Portes Logo.svg';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const SignInPage: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Replace with your authentication logic
    //   console.log('Sign in attempt:', { email, password });
    router.push("/dashboard/dashboard")
      
      // Example API call
      // const response = await fetch('/api/auth/signin', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      
      // Handle success/error
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateAccount = () => {
    // Navigation logic for create account
    router.push("/auth/signup")
  };

  const handleForgotPassword = () => {
    // Navigation logic for forgot password
    router.push("/auth/forget-password")
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Top decorative pattern */}
      <div className="absolute top-0 left-0 w-full h-[119px] z-0">
        <Image src={Pattern} alt='pattern' className='w-full'/>
      </div>

      {/* Bottom decorative pattern */}
      <div className="absolute bottom-0 left-0 w-full h-[119px] z-0">
        <Image src={Pattern} alt='pattern' className='w-full'/>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-[564px] bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center gap-8">
          
          {/* Logo */}
          <div className="w-full max-w-[500px] h-24 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-black text-black tracking-wider leading-tight">
                <Image src={Logo} alt='logo'/>

              </h1>
             
            </div>
          </div>

          {/* Welcome text */}
          <div className="text-center max-w-[266px]">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2 leading-9">
              Welcome Back!
            </h2>
            <p className="text-gray-500 text-base leading-6">
              To login, enter your email address
            </p>
          </div>

          {/* Sign in form */}
          <form onSubmit={handleSubmit} className="w-full max-w-[500px] flex flex-col gap-6">
            
            {/* Email field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-semibold text-gray-800 leading-6">
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

            {/* Password field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-lg font-semibold text-gray-800 leading-6">
                  Password
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-yellow-600 hover:text-yellow-700 font-medium text-sm leading-5 transition-colors duration-200"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <div className="flex items-center bg-yellow-50 border border-gray-200 rounded-xl px-4 py-3.5 gap-2 h-[52px] focus-within:ring-2 focus-within:ring-yellow-400 focus-within:border-yellow-400 transition-all duration-200">
                  <Lock className="w-6 h-6 text-yellow-600 flex-shrink-0" strokeWidth={1.5} />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 outline-none text-base leading-6"
                    required
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-yellow-600 hover:text-yellow-700 focus:outline-none transition-colors duration-200"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="w-6 h-6" strokeWidth={1.5} />
                    ) : (
                      <Eye className="w-6 h-6" strokeWidth={1.5} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Login button */}
            <button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full bg-[#FFCF00] hover:bg-[#b59300] text-gray-800 font-medium text-base py-4 px-8 rounded-xl h-[52px] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                  Signing In...
                </div>
              ) : (
                'Login'
              )}
            </button>

            {/* Create account link */}
            <p className="text-center text-gray-500 text-sm leading-5">
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={handleCreateAccount}
                className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-200"
                disabled={isLoading}
              >
                Create an account
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;