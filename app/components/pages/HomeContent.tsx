import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

function HomeContent({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const { toast } = useToast()
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi | null>(null)
  useEffect(() => {
    if (!testimonialApi) return;
    const interval = setInterval(() => {
      testimonialApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonialApi]);

  const latestWorks = [
    {
      title: "David's Salon Management System",
      description:
        "A comprehensive salon management ecosystem featuring web admin panel, mobile apps, and AI-powered hairstyle recommendations using OpenAI API.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Mobile & Web Dev",
      year: "2025",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "COPit - Competitive Thrift Shopping",
      description:
        "2nd Place Winner at 'Automate the Future' Hackathon. A competitive thrift shopping app with Mine-Steal-Lock and bidding system.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Mobile App",
      year: "2025",
      color: "from-sage-400 to-sage-600",
    },
    {
      title: "Mag-Grantees Scholarship System",
      description:
        "Scholarship management system for streamlining scholarship tracking, academic performance monitoring, and document submission.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Web Development",
      year: "2024",
      color: "from-purple-400 to-purple-600",
    },
  ]

  const services = [
    {
      title: "UI/UX Design",
      description: "User-centered design for web and mobile applications with focus on intuitive interfaces and seamless experiences.",
      price: "Starting at ₱3,000 per project",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      icon: "🎨",
    },
    {
      title: "Front-End Development",
      description: "Converting designs into functional, interactive websites using React.js, Next.js, and modern web technologies.",
      price: "Starting at ₱4,000 per project",
      features: ["React.js/Next.js", "Responsive Design", "Performance Optimization", "Clean Code"],
      icon: "💻",
    },
    {
      title: "Mobile App Development",
      description: "Building cross-platform mobile applications with React Native for iOS and Android.",
      price: "Starting at ₱7,500 per project",
      features: ["React Native", "Cross-Platform", "Firebase Integration", "App Store Ready"],
      icon: "📱",
    },
    {
      title: "Social Media Design",
      description: "Eye-catching social media graphics, posts, and templates that align with your brand identity.",
      price: "Starting at ₱1,500 per project",
      features: ["Post Templates", "Story Design", "Brand Consistency", "Multiple Formats"],
      icon: "📸",
    },
    {
      title: "Graphic Design",
      description: "Flyers, posters, brochures, and other marketing materials designed to capture attention.",
      price: "Starting at ₱2,000 per project",
      features: ["Print Design", "Digital Graphics", "Brand Materials", "Marketing Collateral"],
      icon: "✨",
    },
  ]

  const productPicks = [
    {
      name: "GMK67",
      description: "65% Gasket Bluetooth 2.4G Wireless Hot-swappable",
      price: "₱1,920",
      image: "/images/shop/keyboard.png",
      rating: 5,
    },
    {
      name: "Logitech G102",
      description: "Logitech Gaming Mouse G102 LIGHTSYNC",
      price: "₱986",
      image: "/images/shop/mouse.png",
      rating: 5,
    },
    {
      name: "Lenovo LOQ",
      description: "Lenovo LOQ 15IRX9 83DV00DBPH",
      price: "₱52,995",
      image: "/images/shop/laptop.png",
      rating: 5,
    },
    {
      name: "Maono DGM20",
      description: "USB Microphone RGB Gaming Mic Condenser Mic Noise Cancelling",
      price: "₱1,749",
      image: "/images/shop/mic.png",
      rating: 5,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      content:
        "Outstanding design work! The branding perfectly captured our vision and helped us stand out in the market.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Mike Chen",
      role: "Product Manager",
      content:
        "Professional, timely, and creative. The website design exceeded our expectations and improved our conversion rate.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Lisa Rodriguez",
      role: "Marketing Director",
      content:
        "Incredible attention to detail and user experience. Our mobile app design is both beautiful and functional.",
      rating: 5,
      avatar: "LR",
    },
  ]

  const tools = [
    { name: "Figma", category: "Design & Prototyping", icon: <img src="/images/tool-logos/figma.png" alt="Figma" className="h-8 mx-auto rounded-lg" /> },
    { name: "Click Up", category: "Productivity", icon: <img src="/images/tool-logos/clickup.png" alt="Click Up" className="h-8 mx-auto rounded-lg" /> },
    { name: "Photoshop", category: "Graphics", icon: <img src="/images/tool-logos/photoshop.png" alt="Photoshop" className="h-8 mx-auto rounded-lg" /> },
    { name: "VS Code", category: "Development", icon: <img src="/images/tool-logos/vscode.png" alt="VS Code" className="h-8 mx-auto rounded-lg" /> },
  ]

  return (
    <div className="min-h-full bg-gradient-to-b from-[#181022] to-[#241a36]">
      {/* Floating purple background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px] bg-[#76608f] opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#bfaee0] opacity-20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-[40%] left-[-60px] w-[180px] h-[180px] bg-[#a18cd1] opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 max-w-4xl">
      {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex items-start justify-center pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16 md:pb-20"
        >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              {/* 'Available for work' badge removed */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-clash text-center"
              >
                <span className="inline-block align-middle mr-2">
                  <motion.span
                    animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="inline-block origin-bottom text-5xl md:text-6xl"
                    style={{ display: 'inline-block' }}
                  >
                    👋
                  </motion.span>
                </span>
                Hey, I'm <motion.span
                  className="text-[#76608f]"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                >
                  Claire Cruz
                </motion.span>.<br />
                Welcome!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-xl text-gray-300 mb-8 font-clash max-w-2xl mx-auto leading-relaxed"
              >
                Hi I'm Claire Cruz, but you can call me Shi. I'm a <strong>UI/UX Designer</strong> and a{" "}
                <strong>4th year IT student</strong>. I specialize in creating user-centered designs and developing responsive front-end and mobile applications using modern technologies. Let's create something amazing together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  onClick={() => setActiveTab("contact")}
                  className="bg-[#76608f] hover:bg-[#6a5580] text-white px-6 sm:px-8 py-3 rounded-lg font-clash-medium shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Let's Talk
                </Button>
                <Button
                  onClick={() => setActiveTab("projects")}
                  variant="outline"
                  className="border-[#76608f] text-[#76608f] hover:bg-[#76608f]/5 px-6 sm:px-8 py-3 rounded-lg bg-transparent font-clash-medium shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  View Work
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Latest Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4 font-clash-bold">My Latest Works</h2>
              <p className="text-lg text-gray-300 font-clash max-w-2xl mx-auto">
                I'm passionate about solving problems through design, bringing your vision to life through creative,
                compelling, business-centered, and organizational attention to details.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {latestWorks.map((work, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.04, rotateX: 4, boxShadow: '0 8px 32px rgba(118,96,143,0.15)' }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-900 rounded-lg shadow-sm border border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => setActiveTab("projects")}
                >
                  <div className={`h-48 bg-gradient-to-br ${work.color} relative overflow-hidden`}>
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-xs font-clash-medium">{work.year}</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-white text-xs font-clash-medium">{work.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 font-clash-semibold group-hover:text-[#76608f] transition-colors text-white line-clamp-1">
                      {work.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-clash leading-relaxed mb-4 line-clamp-2">{work.description}</p>
                    <div className="flex items-center text-[#76608f] text-sm font-clash-medium">
                      View Project{" "}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform text-[#76608f]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Picks Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 font-clash-bold">Product Picks</h2>
              <p className="text-lg text-white font-clash">Tools and tech I personally use and vouch for.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {productPicks.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setActiveTab("shop")}
                >
                  <div className="h-32 sm:h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 font-clash-semibold text-gray-800 line-clamp-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm font-clash line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#76608f] font-clash-bold">{product.price}</span>
                  </div>
                  <div className="flex mt-1">
                    {Array.from({ length: product.rating }, (_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-8"
            >
              <Button
                onClick={() => setActiveTab("shop")}
                variant="outline"
                className="border-[#76608f] text-[#76608f] hover:bg-[#76608f]/10 px-8 py-3 font-clash-medium"
              >
                View All Products
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 font-clash-bold">Trusted by professionals</h2>
              <p className="text-lg text-white font-clash max-w-2xl mx-auto">
                Collaborate with me on trusted campaigns or network of forward-thinking designers and developers. Here
                are my creativity reviews.
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => testimonialApi?.scrollPrev()}
                className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors touch-manipulation"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <div className="flex-1 w-full max-w-2xl">
                <Carousel className="w-full" setApi={setTestimonialApi}>
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#76608f] rounded-full flex items-center justify-center text-white font-clash-semibold mr-3 sm:mr-4 flex-shrink-0">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <h4 className="font-semibold font-clash-semibold text-sm sm:text-base">{testimonial.name}</h4>
                              <p className="text-gray-600 text-xs sm:text-sm font-clash">{testimonial.role}</p>
                            </div>
                          </div>
                          <div className="flex mb-3">
                            {Array.from({ length: testimonial.rating }, (_, i) => (
                              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#76608f] text-[#76608f]" />
                            ))}
                          </div>
                          <p className="text-gray-700 font-clash leading-relaxed text-sm sm:text-base">{testimonial.content}</p>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              <button
                onClick={() => testimonialApi?.scrollNext()}
                className="hidden sm:flex flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 items-center justify-center hover:bg-gray-50 transition-colors touch-manipulation"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 font-clash-bold">Tools</h2>
              <p className="text-lg text-white font-clash">Software and tools I use in my workflow.</p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="bg-transparent p-4 sm:p-6 rounded-lg text-center border border-[#76608f] hover:bg-[#76608f]/5 transition-colors cursor-pointer"
                >
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{tool.icon}</div>
                  <h3 className="font-semibold mb-1 font-clash-semibold text-[#76608f] text-sm sm:text-base">{tool.name}</h3>
                  <p className="text-[#76608f] text-xs sm:text-sm font-clash">{tool.category}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <Button
                onClick={() => setActiveTab("about")}
                variant="outline"
                className="border-[#76608f] text-[#76608f] hover:bg-[#76608f]/10 px-8 py-3 font-clash-medium"
              >
                Learn More About Me
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer timestamp */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
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
        transition={{ delay: 1.2 }}
        className="grid md:grid-cols-4 gap-8 mt-16 pt-8 text-white"
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
              <a href="mailto:cruzclaire.shi@gmail.com" className="hover:text-[#76608f] transition-colors text-white">Email</a>
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
        className="text-center mt-8 pt-8 pb-6 border-t border-gray-200 text-white max-w-4xl mx-auto"
      >
        <p className="text-white font-clash text-sm">© 2025 Claire Cruz</p>
      </motion.div>
      </div>
    </div>
  );
}

export default HomeContent; 
