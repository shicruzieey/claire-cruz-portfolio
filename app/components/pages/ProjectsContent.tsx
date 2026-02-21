import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

function ProjectsContent({ setActiveTab, handleOpenProjectTab }: { setActiveTab: (tab: string) => void, handleOpenProjectTab: (projectId: string, projectTitle: string) => void }) {
  const projects = [
    {
      id: "davids-salon",
      title: "David's Salon Operations Management System",
      description:
        "A comprehensive salon management system featuring web admin panel, mobile apps for clients and stylists, and an AI-powered hairstyle recommendation kiosk.",
      category: "Mobile App & Web Development",
      period: "June 2025 - February 2026",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-purple-500 to-pink-600",
      technologies: ["React.js", "React Native", "Tailwind CSS", "Firebase", "OpenAI API"],
      role: "Mobile App & Web Developer, UI/UX Designer",
      team: "OJT Team Project",
      challenges: "Designing and developing three interconnected systems with real-time synchronization and AI integration.",
      solutions: "Implemented Firebase for real-time data sync and integrated OpenAI API for personalized recommendations.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Appointment Scheduling", "POS System", "Inventory Management", "CRM", "Analytics", "AI Recommendations"]
    },
    {
      id: "copit",
      title: "COPit - Competitive Thrift Shopping App",
      description:
        "2nd Place Winner at 'Automate the Future' Hackathon. A competitive thrift shopping mobile app with Mine-Steal-Lock and bidding system.",
      category: "Mobile App Development",
      period: "March 2025 - April 2025",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-sage-400 to-sage-600",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      role: "Front-End Developer & UI/UX Designer",
      team: "Duo Project",
      challenges: "Creating an engaging competitive shopping experience with real-time interactions.",
      solutions: "Designed innovative Mine-Steal-Lock system with responsive UI focused on user engagement.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Mine-Steal-Lock System", "Real-time Bidding", "Leaderboard", "Mobile Responsive"]
    },
    {
      id: "mag-grantees",
      title: "Mag-Grantees: Scholarship Management System",
      description:
        "A comprehensive scholarship management system for streamlining scholarship tracking, academic performance monitoring, and document submission.",
      category: "Web Development",
      period: "August 2024 - November 2024",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-purple-400 to-purple-600",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      role: "Front-End Developer & UI/UX Designer",
      team: "Group Project",
      challenges: "Creating an intuitive interface for complex scholarship data management with multiple user roles.",
      solutions: "Designed user-friendly dashboard with role-based access, optimized for responsiveness.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Dashboard Analytics", "Document Management", "Performance Tracking", "User Roles"]
    },
    {
      id: "svms",
      title: "Student Violation Management System",
      description: "A web-based system for Lyceum of Subic Bay's Office of Student Affairs to streamline reporting and management of student violations.",
      category: "Web Development",
      period: "January 2024 - April 2024",
      image: "/placeholder.svg?height=300&width=400",
      color: "from-purple-800 to-purple-900",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      role: "Front-End Developer & UI/UX Designer",
      team: "Group Project",
      challenges: "Designing a secure system for handling sensitive student data while maintaining ease of use.",
      solutions: "Implemented intuitive admin interface with clear violation tracking and reporting features.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Student Database", "Violation Tracking", "Admin Dashboard", "Report Generation"]
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
        {/* Projects Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl font-clash-bold text-white mb-4">My Latest Works</h1>
          <p className="text-lg text-gray-300 font-clash max-w-3xl">
            I present my top-tier projects, meticulously crafted with unwavering passion, simplicity, boundless
            creativity, and unparalleled attention to detail.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 mb-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-transparent rounded-lg shadow-sm border border-[#76608f] overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => handleOpenProjectTab(project.id, project.title)}
              >
                <div
                  className={`h-48 sm:h-56 md:h-64 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}
                >
                  <div className="text-white text-6xl opacity-20">
                    {project.title === "Personal Brand Logo" && "S"}
                    {project.title === "COIN" && "💰"}
                    {project.title === "Mag-Gramtees" && "📱"}
                    {project.title === "SVMS" && "💻"}
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-clash-semibold text-white mb-2 group-hover:text-[#76608f] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm font-clash leading-relaxed mb-3 line-clamp-2 h-10 overflow-hidden">{project.description}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm gap-2">
                    <span className="text-[#76608f] font-clash-medium">{project.category}</span>
                    <span className="text-white font-clash text-xs sm:text-sm">{project.period}</span>
                  </div>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-8 pt-8 text-white max-w-4xl mx-auto"
        >
          <div className="text-center md:text-left">
            <h3 className="font-clash-semibold text-white mb-3">Index</h3>
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
          <div className="text-center md:text-left">
            <h3 className="font-clash-semibold text-white mb-3">Resources</h3>
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
          className="text-center mt-8 pt-8 border-t border-gray-200 text-white max-w-4xl mx-auto"
        >
          <p className="text-white font-clash text-sm">© 2025 Claire Cruz</p>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectsContent; 
