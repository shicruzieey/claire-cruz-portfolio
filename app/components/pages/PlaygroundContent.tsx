'use client';

import React from "react";
import { motion } from "framer-motion";

export default function PlaygroundContent({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
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

        {/* Footer timestamp */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center pt-16 border-t border-gray-200 mt-16 text-white"
        >
          <p className="text-2xl font-clash-bold text-white mb-2">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <p className="text-white font-clash text-sm">Local time in Zambales, Philippines</p>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-8 pt-8 text-white"
        >
          <div className="text-center md:text-left">
            <h3 className="font-clash-semibold text-white mb-3">Index</h3>
            <ul className="space-y-2 text-gray-600 font-clash text-sm">
              <li>
                <button onClick={() => setActiveTab?.("home")} className="hover:text-[#76608f] transition-colors text-white">
                  Main Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab?.("about")} className="hover:text-[#76608f] transition-colors text-white">
                  Bio
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab?.("contact")} className="hover:text-[#76608f] transition-colors text-white">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-clash-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-600 font-clash text-sm">
              <li>
                <button onClick={() => setActiveTab?.("projects")} className="hover:text-[#76608f] transition-colors text-white">
                  Project
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab?.("shop")} className="hover:text-[#76608f] transition-colors text-white">
                  Product
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab?.("tools")} className="hover:text-[#76608f] transition-colors text-white">
                  Tools
                </button>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-clash-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-600 font-clash text-sm">
              <li>
                <a href="mailto:cruzclaire.shi@gmail.com" className="hover:text-[#76608f] transition-colors text-white">Email</a>
              </li>
              <li>
                <a href="https://calendly.com/clairecruz/meeting" target="_blank" rel="noopener noreferrer" className="hover:text-[#76608f] transition-colors text-white">Set a Meeting</a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-clash-semibold text-white mb-3">Portfolio</h3>
            <ul className="space-y-2 text-gray-600 font-clash text-sm">
              <li>
                <a href="https://dribbble.com/clairecruz" target="_blank" rel="noopener noreferrer" className="hover:text-[#76608f] transition-colors text-white">Dribbble</a>
              </li>
              <li>
                <a href="https://behance.net/clairecruz" target="_blank" rel="noopener noreferrer" className="hover:text-[#76608f] transition-colors text-white">Behance</a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-8 pt-8 pb-6 border-t border-gray-200 text-white"
        >
          <p className="text-white font-clash text-sm">© 2025 Claire Cruz</p>
        </motion.div>
      </div>
    </div>
  );
} 
