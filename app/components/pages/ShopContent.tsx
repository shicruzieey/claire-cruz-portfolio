import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function ShopContent({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const products = [
    {
      id: 1,
      name: "GMK67",
      fullName: "GMK67",
      price: "₱1,920",
      description: "65% Gasket Bluetooth 2.4G Wireless Hot-swappable",
      image: "/placeholder.svg?height=200&width=300",
      category: "Keyboard",
    },
    {
      id: 2,
      name: "Logitech G102",
      fullName: "Logitech G102",
      price: "₱986",
      description: "Logitech Gaming Mouse G102 LIGHTSYNC",
      image: "/placeholder.svg?height=200&width=300",
      category: "Mouse",
    },
    {
      id: 3,
      name: "Lenovo LOQ",
      fullName: "Lenovo LOQ",
      price: "₱52,995",
      description: "Lenovo LOQ 15IRX9 83DV00DBPH",
      image: "/placeholder.svg?height=200&width=300",
      category: "Laptop",
    },
  ];

  const handleViewDetails = (product: any) => {
    // Placeholder for product details logic
    alert(`Opening details for ${product.name}...`);
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-[#181022] to-[#241a36]">
      {/* Floating purple background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px] bg-[#76608f] opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#bfaee0] opacity-20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-[40%] left-[-60px] w-[180px] h-[180px] bg-[#a18cd1] opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-16 max-w-4xl">
        {/* Products Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-clash-bold text-white mb-4">Product Picks</h1>
          <p className="text-lg text-white font-clash">Tools and tech I personally use and vouch for.</p>
        </motion.div>

        {/* Products Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-lg shadow-sm border border-[#76608f] overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-64 bg-gray-50 relative overflow-hidden flex items-center justify-center p-8">
                  <div className="text-6xl opacity-30">
                    {product.category === "Keyboard" && "⌨️"}
                    {product.category === "Mouse" && "🖱️"}
                    {product.category === "Laptop" && "💻"}
                  </div>
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-1 shadow-sm">
                    <span className="text-xs font-clash-medium text-gray-600">{product.name}</span>
                  </div>
                  {/* Connectivity icons */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-xs">💰</span>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-xs">📶</span>
                    </div>
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <span className="text-xs">🔋</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-clash-bold text-gray-900">{product.fullName}</h3>
                    <span className="text-xl font-clash-bold text-gray-900">{product.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm font-clash leading-relaxed mb-4">{product.description}</p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => handleViewDetails(product)}
                      variant="outline"
                      className="w-full border-[#76608f] text-[#76608f] hover:bg-[#76608f]/10 font-clash-medium bg-transparent"
                    >
                      View Details →
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
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
                <a href="#" className="hover:text-[#76608f] transition-colors text-white">
                  Tools
                </a>
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

export default ShopContent; 