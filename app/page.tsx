"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Chrome } from "lucide-react"
import BrowserPortfolio from "@/app/components/browser-portfolio"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function DesktopEnvironment() {
  const [showBrowser, setShowBrowser] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [currentDate, setCurrentDate] = useState("")
  const [isKeyboardUser, setIsKeyboardUser] = useState(false)
  const professions = [
    "Web & Mobile Designer",
    "UI/UX Designer",
    "Graphics Designer"
  ];
  const [currentProfession, setCurrentProfession] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
        }),
      )
      setCurrentDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }),
      )
    }
    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)
    
    // Keyboard navigation support
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !showBrowser) {
        setIsKeyboardUser(true)
        handleBrowserOpen()
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [showBrowser])

  useEffect(() => {
    let typingTimeout: NodeJS.Timeout | undefined;
    const fullText = professions[currentProfession];
    if (!isDeleting && displayedText.length < fullText.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      }, typingSpeed / 2);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      typingTimeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentProfession((prev) => (prev + 1) % professions.length);
    }
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentProfession, professions, typingSpeed]);

  const handleBrowserOpen = () => {
    setShowBrowser(true)
  }

  if (showBrowser) {
    return (
      <BrowserPortfolio
        onClose={() => setShowBrowser(false)}
        onMinimize={() => setShowBrowser(false)}
        onMaximize={() => {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
          } else {
            document.exitFullscreen()
          }
        }}
      />
    )
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* Desktop Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/desktop-wallpaper.jpg)' }}
      />
      {/* Aurora Animated Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="aurora-sparkles w-full h-full absolute top-0 left-0" />
        <div className="bokeh-float w-full h-full absolute top-0 left-0">
          <div className="bokeh-circle bokeh1" />
          <div className="bokeh-circle bokeh2" />
          <div className="bokeh-circle bokeh3" />
        </div>
      </div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />

      {/* Minimal Desktop Icons - Top Left */}
      <div className="absolute top-12 left-12 flex flex-col space-y-4 z-10">
        <motion.div
          className="flex flex-col items-center cursor-pointer group"
          onClick={handleBrowserOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleBrowserOpen();
            }
          }}
          aria-label="Open Claire Cruz Portfolio"
        >
          <div className="w-12 h-12 rounded-lg shadow-lg border border-white/20 flex items-center justify-center mb-1 group-hover:shadow-xl group-hover:border-sage-300 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sage-400/10 to-purple-500/10 rounded-lg"></div>
            <img src="/clairecruz-logo.png" alt="Claire Cruz" className="w-7 h-7 object-contain relative z-10" />
          </div>
          <span className="text-white text-xs font-poppins-medium drop-shadow-lg">Claire Cruz</span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center cursor-pointer group"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleBrowserOpen();
            }
          }}
          onClick={handleBrowserOpen}
          aria-label="Open Projects"
        >
          <div className="w-12 h-12 rounded-lg shadow-lg border border-white/20 flex items-center justify-center mb-1 group-hover:shadow-xl group-hover:border-sage-300 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-lg"></div>
            <FontAwesomeIcon icon={faFolder} className="text-2xl text-yellow-500 relative z-10" />
          </div>
          <span className="text-white text-xs font-poppins-medium drop-shadow-lg">Projects</span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center cursor-pointer group"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleBrowserOpen();
            }
          }}
          onClick={handleBrowserOpen}
          aria-label="Open Contact"
        >
          <div className="w-12 h-12 rounded-lg shadow-lg border border-white/20 flex items-center justify-center mb-1 group-hover:shadow-xl group-hover:border-sage-300 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-lg"></div>
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-blue-400 relative z-10" />
          </div>
          <span className="text-white text-xs font-poppins-medium drop-shadow-lg">Mail</span>
        </motion.div>
      </div>

      {/* Minimal Clock - Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: [0, -2, 0]
        }}
        transition={{ 
          delay: 0.6,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="absolute top-12 right-12 text-right z-10"
      >
        <motion.div 
          className="text-2xl font-poppins-semibold text-white mb-1 drop-shadow-lg"
        >
          {currentTime}
        </motion.div>
        <motion.div 
          className="text-sm font-poppins text-white/90 drop-shadow-lg"
        >
          {currentDate}
        </motion.div>
        <motion.div 
          className="text-xs font-poppins text-white/70 drop-shadow-lg"
        >
          Zambales, Philippines
        </motion.div>
      </motion.div>

      {/* Desktop Wallpaper Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center flex flex-col items-center justify-center max-w-md mx-auto px-6">
          <motion.div
            className="w-24 h-24 mx-auto mb-4 flex items-center justify-center cursor-pointer group"
            onClick={handleBrowserOpen}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleBrowserOpen();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Open portfolio"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Logo image */}
            <img 
              src="/clairecruz-logo.png" 
              alt="Claire Cruz Portfolio Logo" 
              className="w-24 h-24 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(118,96,143,0.8)]"
              onError={(e) => {
                // Fallback to original design if image fails to load
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                target.parentElement!.innerHTML = '<div class="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-sage-500/80 to-purple-600/80 backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform"><span class="text-3xl font-poppins-bold text-white">CC</span></div>'
              }}
            />
          </motion.div>

          <motion.h1 
            className="text-4xl font-poppins-bold text-white mb-1 text-center relative drop-shadow-[0_0_16px_#76608f]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            Claire Cruz
          </motion.h1>
          
          <motion.p 
            className="text-white/90 font-poppins mb-4 max-w-md text-center text-lg relative whitespace-pre"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            aria-live="polite"
            aria-atomic="true"
          >
            {displayedText}<span className="animate-pulse" aria-hidden="true">|</span>
          </motion.p>
          
          {/* Keyboard hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="text-white/60 text-sm font-poppins text-center mb-8"
          >
            Click the logo above or press Enter to explore
          </motion.p>
        </div>
      </motion.div>


    </div>
  )
}
