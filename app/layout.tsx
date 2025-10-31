import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap", // Recommended for better font loading behavior
  variable: "--font-poppins", // Define a CSS variable for easy access
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify desired weights
});

export const metadata: Metadata = {
  title: "Tele-Portes Dashboard",
  description: "Admin Dashboard for Tele-Portes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-[#FFFDF6]`}>
        {children}
      </body>
    </html>
  );
}
