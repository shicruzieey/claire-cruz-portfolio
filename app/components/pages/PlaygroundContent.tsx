import React from "react";

export default function PlaygroundContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#181022] to-[#241a36]">
      {/* Floating purple background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px] bg-[#76608f] opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#bfaee0] opacity-20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-[40%] left-[-60px] w-[180px] h-[180px] bg-[#a18cd1] opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">Playground Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
              <div className="w-32 h-32 bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-4xl">🎨</span>
              </div>
              <p className="text-white font-clash">Design Placeholder {i}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-gray-400 text-center">These are just for fun! Add your real designs here later.</p>
      </div>
    </div>
  );
} 
