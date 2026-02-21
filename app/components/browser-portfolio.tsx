"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Home,
  Lock,
  Star,
  MoreHorizontal,
  Plus,
  X,
  Download,
  Share,
  Wifi,
  Battery,
  Volume2,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Mail,
  ArrowRight,
  Check,
  ExternalLink,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'
import HomeContent from './pages/HomeContent';
import AboutContent from './pages/AboutContent';
import ProjectsContent from './pages/ProjectsContent';
import ShopContent from './pages/ShopContent';
import ToolsContent from './pages/ToolsContent';
import ContactContent from './pages/ContactContent';
import ProjectDetailsContent from './pages/ProjectDetailsContent';
import NotFoundContent from './pages/NotFoundContent';
import PlaygroundContent from './pages/PlaygroundContent';

interface BrowserPortfolioProps {
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
}

export default function BrowserPortfolio({ onClose, onMinimize, onMaximize }: BrowserPortfolioProps) {
  const [activeTab, setActiveTab] = useState("home")
  const [currentUrl, setCurrentUrl] = useState("https://shigraphics.dev")
  const [inputUrl, setInputUrl] = useState("https://shigraphics.dev")
  const [showNotFound, setShowNotFound] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [batteryLevel, setBatteryLevel] = useState(87)
  const [isOnline, setIsOnline] = useState(typeof window !== "undefined" ? navigator.onLine : true)
  const [visitCount, setVisitCount] = useState(0)
  const [showExitModal, setShowExitModal] = useState(false)
  const { toast } = useToast()

  const [navigationHistory, setNavigationHistory] = useState<string[]>(["home"])
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0)
  const [draggedTab, setDraggedTab] = useState<string | null>(null)
  const [tabOrder, setTabOrder] = useState<string[]>(["home", "about", "projects", "shop", "tools", "contact"])
  const [dynamicTabs, setDynamicTabs] = useState<{id: string, title: string, favicon: string, url: string}[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isGameSidebarOpen, setIsGameSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const defaultTabs = [
    { id: "home", title: "Claire Cruz - Portfolio", url: "https://shigraphics.dev", favicon: "🏠" },
    { id: "about", title: "About Me", url: "https://shigraphics.dev/about", favicon: "👨‍💻" },
    { id: "projects", title: "My Projects", url: "https://shigraphics.dev/projects", favicon: "🚀" },
    { id: "shop", title: "Shop", url: "https://shigraphics.dev/shop", favicon: "🛍️" },
    { id: "tools", title: "Tools", url: "https://shigraphics.dev/tools", favicon: "🛠️" },
    { id: "contact", title: "Contact", url: "https://shigraphics.dev/contact", favicon: "📧" },
  ]

  // Get tabs in current order, merging defaultTabs and dynamicTabs
  const tabs = tabOrder.map(tabId => {
    // Try to find in dynamicTabs first (for any dynamic tab, not just project-)
    const dyn = dynamicTabs.find(tab => tab.id === tabId);
    if (dyn) return dyn;
    // Otherwise, look in defaultTabs
    return defaultTabs.find(tab => tab.id === tabId);
  }).filter((tab): tab is { id: string; title: string; favicon: string; url: string } => !!tab);

  const bookmarks = [
    { name: "GitHub", icon: "⚡", url: "https://github.com/shicruzieey" },
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/cruzieey" },
    { name: "Instagram", icon: "📷", url: "https://www.instagram.com/ccruzieey" },
    { name: "Dribbble", icon: "🎨", url: "https://dribbble.com/shicruzieey" },
  ]

  const { setTheme } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)

    const batteryInterval = setInterval(() => {
      setBatteryLevel((prev) => (prev > 0 ? prev - 1 : 100))
    }, 30000)

    const visits = localStorage.getItem("portfolio-visits")
    const count = visits ? Number.parseInt(visits) + 1 : 1
    setVisitCount(count)
    localStorage.setItem("portfolio-visits", count.toString())

    return () => {
      clearInterval(interval)
      clearInterval(batteryInterval)
    }
  }, [])

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true)
    }
    function handleOffline() {
      setIsOnline(false)
    }

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const handleAddBookmark = () => {
    // Try to add bookmark (only works in some browsers)
    if (window.sidebar && window.sidebar.addPanel) {
      // Firefox
      window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) {
      // IE
      window.external.AddFavorite(window.location.href, document.title);
    } else {
      // Modern browsers - copy URL and show toast
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Bookmark this page!",
        description: "Press Ctrl+D (Cmd+D on Mac) to bookmark. URL copied to clipboard!",
      });
    }
  }

  const handleBackClick = () => {
    if (currentHistoryIndex > 0) {
      const newIndex = currentHistoryIndex - 1
      const previousTab = navigationHistory[newIndex]
      setCurrentHistoryIndex(newIndex)
      setActiveTab(previousTab)
      const tab = tabs.find((t) => t.id === previousTab)
      if (tab) {
        setCurrentUrl(tab.url)
        setInputUrl(tab.url)
      }
    }
  }

  const handleForwardClick = () => {
    if (currentHistoryIndex < navigationHistory.length - 1) {
      const newIndex = currentHistoryIndex + 1
      const nextTab = navigationHistory[newIndex]
      setCurrentHistoryIndex(newIndex)
      setActiveTab(nextTab)
      const tab = tabs.find((t) => t.id === nextTab)
      if (tab) {
        setCurrentUrl(tab.url)
        setInputUrl(tab.url)
      }
    }
  }

  const handleHomeClick = () => {
    if (activeTab !== "home") {
      handleTabChange("home")
    }
  }

  const handleTabChange = (tabId: string) => {
    setIsLoading(true)
    const tab = tabs.find((t) => t.id === tabId)
    if (tab) {
      setCurrentUrl(tab.url)
      setInputUrl(tab.url)
      setActiveTab(tabId)
      setShowNotFound(false)

      // Update navigation history
      const newHistory = navigationHistory.slice(0, currentHistoryIndex + 1)
      newHistory.push(tabId)
      setNavigationHistory(newHistory)
      setCurrentHistoryIndex(newHistory.length - 1)
    }
    setTimeout(() => setIsLoading(false), 500)
  }

  const handleCloseClick = () => {
    setShowExitModal(true)
  }

  const handleConfirmExit = () => {
    onClose()
  }

  const handleMinimizeClick = () => {
    setIsMinimized(true);
    if (onMinimize) onMinimize();
  }

  const handleBookmarkClick = (bookmark: any) => {
    toast({
      title: "Opening external link",
      description: `Redirecting to ${bookmark.name}...`,
    })
  }

  const handleDownload = () => {
    // Trigger CV download
    const link = document.createElement('a');
    link.href = '/CRUZ_CLAIRE_JESSICA_2026.pdf';
    link.download = 'CRUZ_CLAIRE_JESSICA_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Download started",
      description: "Claire Cruz CV is being downloaded...",
    })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Check out this portfolio!",
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link copied!",
        description: "Portfolio link copied to clipboard",
      })
    }
  }

  const validateUrl = (path: string) => {
    const validPaths = ["/", "/about", "/projects", "/shop", "/tools", "/contact", "/playground"];
    // Allow /project/:id as valid
    if (/^\/project\/.+/.test(path)) return true;
    return validPaths.includes(path)
  }

  const handleUrlSubmit = (url: string) => {
    let path = url.replace(/^https?:\/\/[^/]+/, "") || "/"
    // Allow 'playground' as a valid path
    if (path === 'playground') path = '/playground';

    if (validateUrl(path)) {
      let tabId = "home"
      switch (path) {
        case "/":
          tabId = "home"
          break
        case "/about":
          tabId = "about"
          break
        case "/projects":
          tabId = "projects"
          break
        case "/shop":
          tabId = "shop"
          break
        case "/tools":
          tabId = "tools"
          break
        case "/contact":
          tabId = "contact"
          break
        case "/playground":
          // Try to find an existing playground tab
          let playgroundTab = dynamicTabs.find(tab => tab.url.endsWith("/playground"));
          if (!playgroundTab) {
            // If not found, create one
            const playgroundCount = dynamicTabs.filter(tab => tab.id.startsWith('playground-')).length;
            const newId = `playground-${playgroundCount + 1}`;
            const newTab = {
              id: newId,
              title: `Playground`,
              favicon: '🎨',
              url: 'https://shigraphics.dev/playground',
            };
            setDynamicTabs(prev => [...prev, newTab]);
            setTabOrder(prev => [...prev, newId]);
            tabId = newId;
          } else {
            tabId = playgroundTab.id;
          }
          break
        default:
          // Handle /project/:id
          if (/^\/project\/.+/.test(path)) {
            const projectId = path.split('/')[2];
            const tabKey = `project-${projectId}`;
            // Try to find an existing project tab
            let projectTab = dynamicTabs.find(tab => tab.id === tabKey);
            if (!projectTab) {
              // If not found, create one
              const projectTitle = projectId.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
              const newTab = {
                id: tabKey,
                title: projectTitle,
                favicon: '📁',
                url: `https://shigraphics.dev/project/${projectId}`,
              };
              setDynamicTabs(prev => [...prev, newTab]);
              setTabOrder(prev => [...prev, tabKey]);
              tabId = tabKey;
            } else {
              tabId = projectTab.id;
            }
          }
          break
      }

      setShowNotFound(false)
      handleTabChange(tabId)
    } else {
      setShowNotFound(true)
      setActiveTab("404")
      setCurrentUrl(url)

      // Update navigation history for 404
      const newHistory = navigationHistory.slice(0, currentHistoryIndex + 1)
      newHistory.push("404")
      setNavigationHistory(newHistory)
      setCurrentHistoryIndex(newHistory.length - 1)

      toast({
        title: "Page not found",
        description: `The page "${url}" could not be found.`,
      })
    }
  }

  const handleAddressBarKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleUrlSubmit(inputUrl)
    }
  }

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, tabId: string) => {
    setDraggedTab(tabId)
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/html", tabId)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetTabId: string) => {
    e.preventDefault()
    if (draggedTab && draggedTab !== targetTabId) {
      const draggedIndex = tabOrder.indexOf(draggedTab)
      const targetIndex = tabOrder.indexOf(targetTabId)
      
      const newOrder = [...tabOrder]
      newOrder.splice(draggedIndex, 1)
      newOrder.splice(targetIndex, 0, draggedTab)
      
      setTabOrder(newOrder)
    }
    setDraggedTab(null)
  }

  const handleDragEnd = () => {
    setDraggedTab(null)
  }

  function handleOpenProjectTab(projectId: string, projectTitle: string) {
    const tabKey = `project-${projectId}`;
    if (!tabOrder.includes(tabKey)) {
      setTabOrder([...tabOrder, tabKey]);
      setActiveTab(tabKey);
    } else {
      setActiveTab(tabKey);
    }
    if (!dynamicTabs.find(tab => tab.id === tabKey)) {
      setDynamicTabs([...dynamicTabs, { id: tabKey, title: projectTitle, favicon: "📁", url: `https://shigraphics.dev/project/${projectId}` }]);
    }
    // Always update the address bar when opening a project tab
    setCurrentUrl(`https://shigraphics.dev/project/${projectId}`);
    setInputUrl(`https://shigraphics.dev/project/${projectId}`);
  }

  const handleAddPlaygroundTab = () => {
    // Find the next available playground tab id
    const playgroundCount = dynamicTabs.filter(tab => tab.id.startsWith('playground-')).length;
    const newId = `playground-${playgroundCount + 1}`;
    const newTab = {
      id: newId,
      title: `Playground`,
      favicon: '🎨',
      url: 'https://shigraphics.dev/playground',
    };
    setDynamicTabs(prev => [...prev, newTab]);
    setTabOrder(prev => [...prev, newId]);
    setActiveTab(newId);
  };

  const renderContent = () => {
    if (showNotFound) {
      return <NotFoundContent currentUrl={currentUrl} onNavigateHome={() => handleTabChange("home")} />
    }

    // Step 3: Render project details tab if activeTab is a project tab
    if (activeTab.startsWith('project-')) {
      const projectId = activeTab.replace('project-', '');
      return (
        <ProjectDetailsContent
          projectId={projectId}
          handleOpenProjectTab={handleOpenProjectTab}
          setActiveTab={setActiveTab}
          onClose={() => {
            const idx = tabOrder.indexOf(activeTab);
            const newTabOrder = tabOrder.filter(t => t !== activeTab);
            setTabOrder(newTabOrder);
            setDynamicTabs(dynamicTabs.filter(t => t.id !== activeTab));
            // Switch to projects tab
            setActiveTab('projects');
          }}
        />
      );
    }

    // Render Playground tab content
    if (activeTab.startsWith('playground-')) {
      return <PlaygroundContent />;
    }

    switch (activeTab) {
      case "home":
        return <HomeContent setActiveTab={setActiveTab} />
      case "about":
        return <AboutContent handleOpenProjectTab={handleOpenProjectTab} setActiveTab={setActiveTab} />
      case "projects":
        return <ProjectsContent setActiveTab={setActiveTab} handleOpenProjectTab={handleOpenProjectTab} />
      case "shop":
        return <ShopContent setActiveTab={setActiveTab} />
      case "tools":
        return <ToolsContent setActiveTab={setActiveTab} />
      case "contact":
        return <ContactContent />
      default:
        return <HomeContent setActiveTab={setActiveTab} />
    }
  }

  function FlappyBirdGame() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);
    const [gameState, setGameState] = useState<'start' | 'playing' | 'gameover'>('start');
    const [_, setRerender] = useState(0); // for animation

    // Game constants
    const width = 320;
    const height = 400;
    const birdX = 60;
    const birdRadius = 16;
    const gravity = 0.13;
    const flap = -4.8;
    const pipeWidth = 48;
    const pipeGap = 170;
    const pipeSpeed = 2.2;

    // Game refs
    const birdY = useRef(height / 2);
    const birdV = useRef(0);
    const pipes = useRef<{ x: number; gapY: number }[]>([]);
    const animation = useRef<number>();
    const birdImg = useRef<HTMLImageElement | null>(null);
    // Load image once
    useEffect(() => {
      const img = new window.Image();
      img.src = '/images/profile/claire.jpg';
      birdImg.current = img;
    }, []);

    // Reset game
    const reset = () => {
      setScore(0);
      birdY.current = height / 2;
      birdV.current = 0;
      pipes.current = [
        { x: width + 180, gapY: 110 + Math.random() * 140 },
        { x: width + 380, gapY: 110 + Math.random() * 140 },
      ];
      setGameState('start');
    };

    // Flap
    const handleFlap = () => {
      if (gameState === 'start') {
        setGameState('playing');
        birdV.current = flap; // Immediately apply flap velocity
      } else if (gameState === 'playing') {
        birdV.current = flap;
      } else if (gameState === 'gameover') {
        reset();
      }
    };

    // Keyboard
    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.code === 'Space') {
          e.preventDefault();
          handleFlap();
        }
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    });

    // Game loop
    useEffect(() => {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      let frame = 0;
      function draw() {
        if (!ctx) return;
        // BG
        const grad = ctx!.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, '#241a36');
        grad.addColorStop(1, '#181022');
        ctx!.fillStyle = grad;
        ctx!.fillRect(0, 0, width, height);
        // Pipes
        ctx!.save();
        ctx!.shadowColor = '#a18cd1';
        ctx!.shadowBlur = 12;
        ctx!.fillStyle = '#a18cd1';
        pipes.current.forEach(pipe => {
          ctx!.fillRect(pipe.x, 0, pipeWidth, pipe.gapY - pipeGap / 2);
          ctx!.fillRect(pipe.x, pipe.gapY + pipeGap / 2, pipeWidth, height - (pipe.gapY + pipeGap / 2));
        });
        ctx!.restore();
        // Bird
        ctx!.save();
        ctx!.translate(birdX, birdY.current);
        ctx!.beginPath();
        ctx!.arc(0, 0, birdRadius, 0, 2 * Math.PI);
        ctx!.clip();
        if (birdImg.current && birdImg.current.complete) {
          ctx!.drawImage(birdImg.current, -birdRadius, -birdRadius, birdRadius * 2, birdRadius * 2);
        } else {
          ctx!.fillStyle = '#bfaee0';
          ctx!.fill();
        }
        ctx!.restore();
        // Bird border
        ctx!.save();
        ctx!.translate(birdX, birdY.current);
        ctx!.beginPath();
        ctx!.arc(0, 0, birdRadius, 0, 2 * Math.PI);
        ctx!.strokeStyle = '#76608f';
        ctx!.lineWidth = 3;
        ctx!.stroke();
        ctx!.restore();
        // Score
        ctx!.font = 'bold 32px Poppins, sans-serif';
        ctx!.fillStyle = '#fff';
        ctx!.textAlign = 'center';
        ctx!.fillText(score.toString(), width / 2, 54);
        ctx!.font = '16px Poppins, sans-serif';
        ctx!.fillStyle = '#bfaee0';
        ctx!.fillText(`Best: ${best}`, width / 2, 78);
        // State overlays
        if (gameState === 'start') {
          ctx!.font = 'bold 22px Poppins, sans-serif';
          ctx!.fillStyle = '#fff';
          ctx!.fillText('Press Space to Start', width / 2, height / 2);
        } else if (gameState === 'gameover') {
          ctx!.font = 'bold 28px Poppins, sans-serif';
          ctx!.fillStyle = '#fff';
          ctx!.fillText('Game Over', width / 2, height / 2 - 10);
          ctx!.font = '18px Poppins, sans-serif';
          ctx!.fillText('Press Space to Restart', width / 2, height / 2 + 28);
        }
      }
      function update() {
        if (gameState !== 'playing') return;
        // Bird
        birdV.current += gravity;
        birdY.current += birdV.current;
        // Clamp bird to top
        if (birdY.current - birdRadius < 0) {
          birdY.current = birdRadius;
          birdV.current = 0;
        }
        // Pipes
        pipes.current.forEach(pipe => (pipe.x -= pipeSpeed));
        // Add new pipe
        if (pipes.current[0].x < -pipeWidth) {
          pipes.current.shift();
          pipes.current.push({ x: width, gapY: 90 + Math.random() * 180 });
          setScore(s => s + 1);
        }
        // Collision
        let hit = false;
        pipes.current.forEach(pipe => {
          if (
            birdX + birdRadius > pipe.x &&
            birdX - birdRadius < pipe.x + pipeWidth &&
            (birdY.current - birdRadius < pipe.gapY - pipeGap / 2 ||
              birdY.current + birdRadius > pipe.gapY + pipeGap / 2)
          ) {
            hit = true;
          }
        });
        // Only end game if bird hits the ground
        if (birdY.current + birdRadius > height) hit = true;
        if (hit) {
          setGameState('gameover');
          setBest(b => (score > b ? score : b));
        }
      }
      function loop() {
        update();
        draw();
        setRerender(r => r + 1); // force rerender for UI
        if (gameState === 'playing') animation.current = requestAnimationFrame(loop);
      }
      draw();
      if (gameState === 'playing') animation.current = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(animation.current!);
      // eslint-disable-next-line
    }, [gameState, score]);

    // Reset on mount
    useEffect(() => { reset(); }, []);

    return (
      <div className="flex flex-col items-center w-full">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="rounded-lg shadow-lg border-2 border-[#76608f] bg-[#241a36]"
          style={{ display: 'block', margin: '0 auto' }}
        />
        <div className="mt-4 text-white font-clash text-center flex flex-col items-center gap-2">
          <div>Score: <span className="font-bold">{score}</span></div>
          <div className="text-xs text-[#bfaee0]">Best: <span className="font-bold">{best}</span></div>
          <div className="text-xs text-[#bfaee0]">Press <b>Space</b> to flap!</div>
          {gameState === 'gameover' && (
            <button
              className="mt-2 px-4 py-1 bg-[#76608f] text-white rounded font-clash hover:bg-[#a18cd1] transition-colors shadow"
              onClick={reset}
            >
              Restart
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Dock (shows only when minimized) */}
      {isMinimized && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center space-x-2">
          <button
            className="bg-[#76608f] text-white px-6 py-2 rounded-full shadow-lg font-clash-bold hover:bg-[#6a5580] transition-all"
            onClick={() => setIsMinimized(false)}
          >
            <span className="mr-2">🖥️</span> Claire Cruz Portfolio
          </button>
        </div>
      )}
      {/* Main window (hidden when minimized) */}
      {!isMinimized && (
        <div className="fixed inset-0 bg-black flex flex-col font-poppins">
          {/* Browser Window Frame */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black border-b border-gray-800 px-4 py-2 flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-3 h-3 bg-[#ff5f57] rounded-full cursor-pointer"
                  onClick={handleCloseClick}
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-3 h-3 bg-[#ffbd2e] rounded-full cursor-pointer"
                  onClick={handleMinimizeClick}
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-3 h-3 bg-[#28ca42] rounded-full cursor-pointer"
                  onClick={onMaximize}
                ></motion.div>
              </div>
              <span className="text-sm font-medium text-white">Claire Cruz</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full inline-block animate-pulse"></span>
                <span className="text-green-400 font-clash-medium">Available for work</span>
              </div>
              <span>{currentTime}</span>
            </div>
          </motion.div>

          {/* Browser Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-black border-b border-gray-800 px-4 py-2"
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-gray-900 text-gray-300"
                  onClick={handleBackClick}
                  disabled={currentHistoryIndex <= 0}
                >
                  <ChevronLeft className={`h-4 w-4 ${currentHistoryIndex <= 0 ? "text-gray-600" : "text-gray-300"}`} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-gray-900 text-gray-300"
                  onClick={handleForwardClick}
                  disabled={currentHistoryIndex >= navigationHistory.length - 1}
                >
                  <ChevronRight
                    className={`h-4 w-4 ${currentHistoryIndex >= navigationHistory.length - 1 ? "text-gray-600" : "text-gray-300"}`}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-gray-900 text-gray-300"
                  onClick={() => handleTabChange(activeTab)}
                >
                  <RotateCcw className={`h-4 w-4 text-gray-300 ${isLoading ? "animate-spin" : ""}`} />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-900 text-gray-300" onClick={handleHomeClick}>
                  <Home className={`h-4 w-4 ${activeTab === "home" ? "text-[#76608f]" : "text-gray-300"}`} />
                </Button>
              </div>

              <div className="flex-1 flex items-center bg-gray-900 border border-gray-700 rounded-full px-2 sm:px-4 py-1 sm:py-2 hover:border-[#76608f] transition-colors">
                <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-1 sm:mr-2 flex-shrink-0" />
                <Input
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  onKeyDown={handleAddressBarKeyDown}
                  className="border-0 bg-transparent text-xs sm:text-sm focus-visible:ring-0 focus-visible:ring-offset-0 font-poppins text-white placeholder-gray-500"
                  placeholder="Enter URL or search..."
                />
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden sm:block">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 w-6 p-0 ml-2 text-gray-300 hover:text-white"
                    onClick={handleAddBookmark}
                    title="Bookmark this page"
                  >
                    <Star className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>

              <div className="flex items-center space-x-1">
                {/* Mobile Menu Button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 w-8 p-0 text-gray-300 hover:text-white hover:bg-gray-900 md:hidden" 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <Menu className="h-4 w-4" />
                </Button>
                
                {/* Desktop Controls */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-300 hover:text-white hover:bg-gray-900" onClick={handleDownload}>
                    <Download className="h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-300 hover:text-white hover:bg-gray-900" onClick={handleShare}>
                    <Share className="h-4 w-4" />
                  </Button>
                </motion.div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-300 hover:text-white hover:bg-gray-900" onClick={() => setIsGameSidebarOpen(true)}>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black border-b border-gray-800 pr-2 md:pr-4 md:flex items-center overflow-x-auto scrollbar-hide hidden"
          >
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                draggable
                onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, tab.id)}
                onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
                onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, tab.id)}
                onDragEnd={handleDragEnd}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 border-r border-gray-800 cursor-pointer transition-all duration-200 min-w-0 max-w-[120px] sm:max-w-[200px] ${
                    activeTab === tab.id
                      ? "bg-gray-900 border-t-2 border-t-[#76608f] shadow-sm"
                      : "hover:bg-gray-900/50 hover:shadow-sm"
                  } ${draggedTab === tab.id ? "opacity-50" : ""}`}
                  onClick={() => handleTabChange(tab.id)}
                  whileHover={{ y: -1 }}
                >
                  <span className="text-sm">{tab.favicon}</span>
                  <span className="hidden sm:inline text-sm truncate flex-1 font-clash text-gray-300">{tab.title}</span>
                  {(tab.id.startsWith('project-') || tab.id.startsWith('playground-')) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-4 w-4 p-0 opacity-60 hover:opacity-100 text-gray-300"
                        onClick={e => {
                          e.stopPropagation();
                          const idx = tabOrder.indexOf(tab.id);
                          const newTabOrder = tabOrder.filter(t => t !== tab.id);
                          setTabOrder(newTabOrder);
                          setDynamicTabs(dynamicTabs.filter(t => t.id !== tab.id));
                          if (activeTab === tab.id) {
                            let nextTabId;
                            if (newTabOrder.length > 0) {
                              nextTabId = newTabOrder[Math.max(0, idx - 1)];
                            } else {
                              nextTabId = 'home';
                            }
                            setActiveTab(nextTabId);
                            // Update address bar to match the new active tab
                            const nextTab = tabs.find(t => t.id === nextTabId);
                            if (nextTab) {
                              setCurrentUrl(nextTab.url);
                              setInputUrl(nextTab.url);
                            }
                          }
                        }}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 ml-2 text-gray-300 hover:text-white" onClick={handleAddPlaygroundTab}>
                <Plus className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-gray-900 border-b border-gray-800 md:hidden overflow-hidden"
              >
                <div className="px-4 py-3 space-y-2">
                  <h3 className="text-xs font-clash-semibold text-gray-400 uppercase mb-2">Quick Navigation</h3>
                  {defaultTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        handleTabChange(tab.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id 
                          ? 'bg-[#76608f] text-white' 
                          : 'text-gray-300 hover:bg-gray-800'
                      }`}
                    >
                      <span className="text-lg">{tab.favicon}</span>
                      <span className="font-clash text-sm">{tab.title}</span>
                    </button>
                  ))}
                  <div className="pt-2 mt-2 border-t border-gray-700">
                    <button
                      onClick={() => {
                        handleDownload();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-300 hover:bg-gray-800 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      <span className="font-clash text-sm">Download Resume</span>
                    </button>
                    <button
                      onClick={() => {
                        handleShare();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-300 hover:bg-gray-800 transition-colors"
                    >
                      <Share className="h-4 w-4" />
                      <span className="font-clash text-sm">Share Portfolio</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bookmarks Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-black border-b border-gray-800 px-2 sm:px-4 py-1 flex items-center space-x-2 sm:space-x-4 overflow-x-auto scrollbar-hide"
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              {bookmarks.map((bookmark, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-1 px-1 sm:px-2 py-1 rounded hover:bg-gray-900/70 cursor-pointer transition-all duration-200 flex-shrink-0"
                  onClick={() => { window.open(bookmark.url, '_blank', 'noopener,noreferrer'); handleBookmarkClick(bookmark); }}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs">{bookmark.icon}</span>
                  <span className="hidden md:inline text-xs text-gray-300 font-clash whitespace-nowrap">{bookmark.name}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex-1" />
            <div className="text-xs text-gray-500 font-clash hidden sm:block whitespace-nowrap">Visits: {visitCount}</div>
          </motion.div>

          {/* Content Area */}
          <div className="flex-1 bg-black overflow-y-auto">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center h-full"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-8 h-8 border-2 border-[#76608f] border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-600 font-clash">Loading...</p>
                  </div>
                </motion.div>
              ) : (
                showNotFound ? (
                  <div key={activeTab}>
                    {renderContent()}
                  </div>
                ) : (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderContent()}
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>

          <Toaster />
        </div>
      )}

      {/* Exit Modal */}
      <AnimatePresence>
        {showExitModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1.05, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 24 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowExitModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-[#76608f] rounded-lg p-8 max-w-md mx-4 text-center border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-4xl mb-4"
              >
                😢
              </motion.div>
              <h3 className="text-xl font-clash-semibold text-white mb-2">Do you want to leave so soon? :(</h3>
              <p className="text-gray-300 font-clash mb-6">
                If you want to keep in touch, what about connecting on social media?
              </p>

              <div className="flex justify-center space-x-4 mb-6">
                {[
                  { icon: Linkedin, color: "hover:text-blue-500", url: "https://www.linkedin.com/in/clairecruz" },
                  { icon: Instagram, color: "hover:text-pink-500", url: "https://www.instagram.com/clairecruz" },
                  { icon: Twitter, color: "hover:text-blue-400", url: "https://twitter.com/clairecruz" },
                  { icon: Github, color: "hover:text-gray-300", url: "https://github.com/clairecruz" },
                  { icon: Mail, color: "hover:text-green-500", url: "mailto:cruzclaire.shi@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-400 cursor-pointer transition-colors ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={() => setShowExitModal(false)}
                  className="flex-1 bg-black text-white hover:bg-gray-900 border-none font-clash-medium"
                >
                  Stay Here
                </Button>
                <Button
                  onClick={handleConfirmExit}
                  className="flex-1 bg-white text-black hover:bg-gray-200 font-clash-medium"
                >
                  Leave Anyway
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Game Sidebar */}
      <AnimatePresence>
        {isGameSidebarOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <div className="bg-black/50 w-full h-full fixed left-0 top-0" onClick={() => setIsGameSidebarOpen(false)} />
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full sm:w-[400px] max-w-full h-full bg-gradient-to-b from-[#241a36] to-[#181022] shadow-2xl flex flex-col"
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-10"
                onClick={() => setIsGameSidebarOpen(false)}
              >
                &times;
              </button>
              <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-clash-bold mb-4 text-white">🎮 Shi's Flapping</h2>
                <div className="w-full max-w-[320px]">
                  <FlappyBirdGame />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
