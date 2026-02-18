import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function ToolsContent({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const tools = [
    {
      id: 1,
      name: "Framer",
      category: "Website Builders",
      icon: <img src="/tool-logos/framer.png" alt="Framer" className="h-8 mx-auto rounded-lg" />,
      description: "Design and prototype interactive websites with ease.",
      url: "https://www.framer.com/",
    },
    {
      id: 2,
      name: "Click Up",
      category: "Productivity",
      icon: <img src="/tool-logos/clickup.png" alt="Click Up" className="h-8 mx-auto rounded-lg" />,
      description: "Team communication and collaboration platform.",
      url: "https://clickup.com/",
    },
    {
      id: 3,
      name: "Shader Gradient",
      category: "Colors",
      icon: <img src="/tool-logos/shadergradient.png" alt="Shader Gradient" className="h-8 mx-auto rounded-lg" />,
      description: "Create beautiful gradient backgrounds and effects.",
      url: "https://shadergradient.co/",
    },
    {
      id: 4,
      name: "Maya",
      category: "Payment Platform",
      icon: <img src="/tool-logos/maya.png" alt="Maya" className="h-8 mx-auto rounded-lg" />,
      description: "Secure payment processing and financial services.",
      url: "https://www.maya.ph/",
    },
    {
      id: 5,
      name: "Google Fonts",
      category: "Fonts",
      icon: <img src="/tool-logos/googlefonts.png" alt="Google Fonts" className="h-8 mx-auto rounded-lg" />,
      description: "Extensive collection of free web fonts.",
      url: "https://fonts.google.com/",
    },
    {
      id: 6,
      name: "Figma",
      category: "Design Tool",
      icon: <img src="/tool-logos/figma.png" alt="Figma" className="h-8 mx-auto rounded-lg" />,
      description: "Collaborative interface design and prototyping.",
      url: "https://www.figma.com/",
    },
    {
      id: 7,
      name: "Phosphor",
      category: "Icons",
      icon: <img src="/tool-logos/phosphor.png" alt="Phosphor" className="h-8 mx-auto rounded-lg" />,
      description: "Flexible icon family for interfaces and designs.",
      url: "https://phosphoricons.com/",
    },
    {
      id: 8,
      name: "Unsplash",
      category: "Stock Photos",
      icon: <img src="/tool-logos/unsplash.png" alt="Unsplash" className="h-8 mx-auto rounded-lg" />,
      description: "High-quality free stock photography.",
      url: "https://unsplash.com/",
    },
    {
      id: 9,
      name: "Photoshop",
      category: "Graphics",
      icon: <img src="/tool-logos/photoshop.png" alt="Photoshop" className="h-8 mx-auto rounded-lg" />,
      description: "Industry-standard software for image editing and graphic design.",
      url: "https://www.adobe.com/products/photoshop.html",
    },
    {
      id: 10,
      name: "VS Code",
      category: "Development",
      icon: <img src="/tool-logos/vscode.png" alt="VS Code" className="h-8 mx-auto rounded-lg" />,
      description: "Popular code editor for web and software development.",
      url: "https://code.visualstudio.com/",
    },
  ];

  return (
    <div className="min-h-full bg-gradient-to-b from-[#181022] to-[#241a36]">
      {/* Floating purple background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px] bg-[#76608f] opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#bfaee0] opacity-20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-[40%] left-[-60px] w-[180px] h-[180px] bg-[#a18cd1] opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-16 max-w-4xl">
        {/* Tools Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-clash-bold text-white mb-4">Click Up</h1>
          <p className="text-lg text-gray-300 font-clash max-w-3xl">A stack of my favorite tools and software for design, development, and productivity.</p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-transparent p-6 rounded-lg text-center border border-[#76608f] hover:bg-[#76608f]/5 transition-colors cursor-pointer"
                >
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  <h3 className="font-semibold mb-1 font-clash-semibold text-[#76608f]">{tool.name}</h3>
                  <p className="text-[#76608f] text-sm font-clash">{tool.category}</p>
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer timestamp */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center pt-16 border-t border-gray-200 mt-16 text-white max-w-4xl mx-auto"
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
          transition={{ delay: 1.2 }}
          className="grid md:grid-cols-4 gap-8 mt-8 pt-8 text-white max-w-4xl mx-auto"
        >
          <div>
            <h3 className="font-clash-semibold text-white mb-4">Index</h3>
            <ul className="space-y-2 text-gray-600 font-clash text-sm">
              <li>
                <button onClick={() => setActiveTab("home")} className="hover:text-[#76608f] transition-colors text-white">
                  Main Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("about")} className="hover:text-[#76608f] transition-colors text-white">
                  Bio
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("contact")} className="hover:text-[#76608f] transition-colors text-white">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-clash-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600 font-clash text-sm">
              <li>
                <button onClick={() => setActiveTab("projects")} className="hover:text-[#76608f] transition-colors text-white">
                  Project
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("shop")} className="hover:text-[#76608f] transition-colors text-white">
                  Product
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab("tools")} className="hover:text-[#76608f] transition-colors text-white">
                  Tools
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-clash-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 font-clash text-sm">
              <li>
                <a href="mailto:hello@clairecruz.dev" className="hover:text-[#76608f] transition-colors text-white">Email</a>
              </li>
              <li>
                <a href="https://calendly.com/clairecruz/meeting" target="_blank" rel="noopener noreferrer" className="hover:text-[#76608f] transition-colors text-white">Set a Meeting</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-clash-semibold text-white mb-4">Portfolio</h3>
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
          transition={{ delay: 1.3 }}
          className="text-center mt-8 pt-8 border-t border-gray-200 text-white max-w-4xl mx-auto"
        >
          <p className="text-white font-clash text-sm">© 2025 Claire Cruz</p>
        </motion.div>
      </div>
    </div>
  );
}

export default ToolsContent; 