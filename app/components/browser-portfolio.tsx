"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
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
    setCurrentUrl('https://shigraphics.dev/playground');
    setInputUrl('https://shigraphics.dev/playground');
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
      return <PlaygroundContent setActiveTab={setActiveTab} />;
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

    // Game constants
    const GAME = {
      width: 320,
      height: 400,
      birdX: 60,
      birdRadius: 16,
      gravity: 0.5,
      jumpStrength: -8,
      pipeWidth: 52,
      pipeGap: 160,
      pipeSpeed: 2,
      pipeSpacing: 200,
    };

    // Game state refs (persists across renders)
    const gameRef = useRef({
      birdY: GAME.height / 2,
      birdVelocity: 0,
      pipes: [] as { x: number; gapY: number; scored: boolean }[],
      isRunning: false,
      currentScore: 0,
      currentBest: 0,
      currentGameState: 'start' as 'start' | 'playing' | 'gameover',
    });

    const animationRef = useRef<number>();
    const birdImgRef = useRef<HTMLImageElement | null>(null);

    // Load bird image
    useEffect(() => {
      const img = new window.Image();
      img.src = '/images/profile/claire.jpg';
      img.onload = () => {
        birdImgRef.current = img;
      };
    }, []);

    // Initialize game
    const initGame = () => {
      gameRef.current.birdY = GAME.height / 2;
      gameRef.current.birdVelocity = 0;
      gameRef.current.pipes = [
        { x: GAME.width + 100, gapY: 150 + Math.random() * 100, scored: false },
        { x: GAME.width + 100 + GAME.pipeSpacing, gapY: 150 + Math.random() * 100, scored: false },
      ];
      gameRef.current.isRunning = false;
      gameRef.current.currentScore = 0;
      gameRef.current.currentGameState = 'start';
      setScore(0);
      setGameState('start');
    };

    // Handle jump/flap
    const jump = () => {
      const game = gameRef.current;
      
      if (game.currentGameState === 'start') {
        game.isRunning = true;
        game.birdVelocity = GAME.jumpStrength;
        game.currentGameState = 'playing';
        setGameState('playing');
      } else if (game.currentGameState === 'playing' && game.isRunning) {
        game.birdVelocity = GAME.jumpStrength;
      } else if (game.currentGameState === 'gameover') {
        initGame();
      }
    };

    // Keyboard controls
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === 'Space' || e.key === ' ') {
          e.preventDefault();
          jump();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Main game loop - runs once on mount
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!ctx || !canvas) return;

      const gameLoop = () => {
        const game = gameRef.current;

        // Clear canvas
        const gradient = ctx.createLinearGradient(0, 0, 0, GAME.height);
        gradient.addColorStop(0, '#241a36');
        gradient.addColorStop(1, '#181022');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, GAME.width, GAME.height);

        // Update game state if playing
        if (game.currentGameState === 'playing' && game.isRunning) {
          // Update bird
          game.birdVelocity += GAME.gravity;
          game.birdY += game.birdVelocity;

          // Keep bird in bounds (top)
          if (game.birdY < GAME.birdRadius) {
            game.birdY = GAME.birdRadius;
            game.birdVelocity = 0;
          }

          // Check ground collision
          if (game.birdY + GAME.birdRadius >= GAME.height) {
            game.isRunning = false;
            game.currentGameState = 'gameover';
            if (game.currentScore > game.currentBest) {
              game.currentBest = game.currentScore;
              setBest(game.currentScore);
            }
            setGameState('gameover');
          }

          // Update pipes
          let hitPipe = false;
          game.pipes.forEach(pipe => {
            pipe.x -= GAME.pipeSpeed;

            // Score when bird passes pipe
            if (!pipe.scored && pipe.x + GAME.pipeWidth < GAME.birdX) {
              pipe.scored = true;
              game.currentScore++;
              setScore(game.currentScore);
            }

            // Check collision with this pipe
            if (
              game.isRunning &&
              GAME.birdX + GAME.birdRadius > pipe.x &&
              GAME.birdX - GAME.birdRadius < pipe.x + GAME.pipeWidth
            ) {
              const topPipeBottom = pipe.gapY - GAME.pipeGap / 2;
              const bottomPipeTop = pipe.gapY + GAME.pipeGap / 2;

              if (
                game.birdY - GAME.birdRadius < topPipeBottom ||
                game.birdY + GAME.birdRadius > bottomPipeTop
              ) {
                hitPipe = true;
              }
            }
          });

          if (hitPipe) {
            game.isRunning = false;
            game.currentGameState = 'gameover';
            if (game.currentScore > game.currentBest) {
              game.currentBest = game.currentScore;
              setBest(game.currentScore);
            }
            setGameState('gameover');
          }

          // Remove off-screen pipes and add new ones
          if (game.pipes[0] && game.pipes[0].x < -GAME.pipeWidth) {
            game.pipes.shift();
            game.pipes.push({
              x: game.pipes[game.pipes.length - 1].x + GAME.pipeSpacing,
              gapY: 120 + Math.random() * 160,
              scored: false,
            });
          }
        }

        // Draw pipes
        ctx.save();
        ctx.shadowColor = '#a18cd1';
        ctx.shadowBlur = 10;
        game.pipes.forEach(pipe => {
          ctx.fillStyle = '#a18cd1';
          // Top pipe
          ctx.fillRect(pipe.x, 0, GAME.pipeWidth, pipe.gapY - GAME.pipeGap / 2);
          // Bottom pipe
          ctx.fillRect(
            pipe.x,
            pipe.gapY + GAME.pipeGap / 2,
            GAME.pipeWidth,
            GAME.height - (pipe.gapY + GAME.pipeGap / 2)
          );
        });
        ctx.restore();

        // Draw bird
        ctx.save();
        ctx.translate(GAME.birdX, game.birdY);
        ctx.beginPath();
        ctx.arc(0, 0, GAME.birdRadius, 0, Math.PI * 2);
        
        // Draw bird image or fallback color
        if (birdImgRef.current?.complete) {
          ctx.clip();
          ctx.drawImage(
            birdImgRef.current,
            -GAME.birdRadius,
            -GAME.birdRadius,
            GAME.birdRadius * 2,
            GAME.birdRadius * 2
          );
        } else {
          ctx.fillStyle = '#bfaee0';
          ctx.fill();
        }
        
        // Bird border
        ctx.strokeStyle = '#76608f';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();

        // Draw score
        ctx.font = 'bold 36px Poppins, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.fillText(game.currentScore.toString(), GAME.width / 2, 60);
        
        ctx.font = '14px Poppins, sans-serif';
        ctx.fillStyle = '#bfaee0';
        ctx.fillText(`Best: ${game.currentBest}`, GAME.width / 2, 85);

        // Draw game state messages
        if (game.currentGameState === 'start') {
          ctx.font = 'bold 20px Poppins, sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.fillText('Press Space to Start', GAME.width / 2, GAME.height / 2);
        } else if (game.currentGameState === 'gameover') {
          ctx.font = 'bold 32px Poppins, sans-serif';
          ctx.fillStyle = '#ffffff';
          ctx.fillText('Game Over!', GAME.width / 2, GAME.height / 2 - 20);
          ctx.font = '16px Poppins, sans-serif';
          ctx.fillText('Press Space to Restart', GAME.width / 2, GAME.height / 2 + 20);
        }

        animationRef.current = requestAnimationFrame(gameLoop);
      };

      // Initialize and start game loop
      initGame();
      gameLoop();

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, []); // Empty dependency array - runs once

    return (
      <div className="flex flex-col items-center w-full">
        <canvas
          ref={canvasRef}
          width={GAME.width}
          height={GAME.height}
          onClick={jump}
          className="rounded-lg shadow-lg border-2 border-[#76608f] bg-[#241a36] cursor-pointer"
          style={{ display: 'block', margin: '0 auto' }}
        />
        <div className="mt-4 text-white font-clash text-center flex flex-col items-center gap-2">
          <div className="text-lg">
            Score: <span className="font-bold text-[#76608f]">{score}</span>
          </div>
          <div className="text-sm text-[#bfaee0]">
            Best: <span className="font-bold">{best}</span>
          </div>
          <div className="text-xs text-[#bfaee0] mt-1">
            Press <span className="font-bold">Space</span> or <span className="font-bold">Click</span> to flap!
          </div>
          {gameState === 'gameover' && (
            <button
              className="mt-3 px-6 py-2 bg-[#76608f] text-white rounded-lg font-clash-medium hover:bg-[#a18cd1] transition-colors shadow-lg"
              onClick={jump}
            >
              Play Again
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
              <div className="hidden md:flex items-center space-x-1">
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
                  <button
                    onClick={() => {
                      handleAddPlaygroundTab();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-gray-300 hover:bg-gray-800 transition-colors"
                  >
                    <span className="text-lg">🎨</span>
                    <span className="font-clash text-sm">Playground</span>
                  </button>
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
