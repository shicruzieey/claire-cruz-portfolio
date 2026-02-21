import React from "react";
import { Button } from "@/components/ui/button";

interface NotFoundContentProps {
  currentUrl: string;
  onNavigateHome: () => void;
}

// Adjust this value to match your tab bar height (e.g., 112px for two 56px bars)
const TABBAR_HEIGHT = 112;

export default function NotFoundContent({ currentUrl, onNavigateHome }: NotFoundContentProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      {/* Gradient background absolutely fills the content area */}
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-[#181022] to-[#241a36] pointer-events-none">
        <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px] bg-[#76608f] opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#bfaee0] opacity-20 rounded-full blur-2xl" />
        <div className="absolute top-[40%] left-[-60px] w-[180px] h-[180px] bg-[#a18cd1] opacity-20 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center p-8 w-full max-w-2xl mx-auto">
        <h1 className="text-6xl font-clash-bold mb-4 text-white">404</h1>
        <h2 className="text-2xl font-clash-semibold mb-2 text-white">Page Not Found</h2>
        <p className="mb-6 text-gray-300 font-clash text-center max-w-md">
          Oops! The page <span className="text-[#bfaee0]">{currentUrl}</span> does not exist or has been moved.<br />
          Please check the URL or return to the home page.
        </p>
        <button
          className="px-6 py-2 bg-[#76608f] text-white rounded-lg font-clash-medium hover:bg-[#6a5580] transition-colors shadow-lg"
          onClick={onNavigateHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
} 
