import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

function ProjectDetailsContent({ projectId, onClose, handleOpenProjectTab, setActiveTab }: { projectId: string, onClose: () => void, handleOpenProjectTab?: (id: string, title: string) => void, setActiveTab?: (tab: string) => void }) {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  const allProjects = [
    {
      id: "davids-salon",
      title: "David's Salon Operations Management System",
      subtitle: "A comprehensive salon management ecosystem with AI-powered recommendations",
      description: "This project encompasses a complete digital transformation for David's Salon, featuring an integrated web admin panel, mobile applications for both clients and stylists, and an innovative AI-powered kiosk for hairstyle recommendations. The system streamlines appointment scheduling, point-of-sale operations, inventory management, and customer relationship management while providing real-time analytics and insights.",
      category: "Mobile App & Web Development",
      period: "June 2025 - February 2026",
      role: "Mobile App & Web Developer, UI/UX Designer",
      team: "OJT Team Project",
      client: "David's Salon",
      color: "from-purple-500 to-pink-600",
      technologies: ["React.js", "React Native", "Tailwind CSS", "Firebase", "OpenAI API", "Figma"],
      features: [
        "Real-time appointment scheduling system",
        "Integrated POS with payment processing",
        "Inventory management with low-stock alerts",
        "Customer relationship management (CRM)",
        "Analytics dashboard with business insights",
        "AI-powered hairstyle recommendations",
        "Mobile apps for clients and stylists",
        "Interactive kiosk interface"
      ],
      overview: "The David's Salon project represents a comprehensive digital transformation initiative aimed at modernizing salon operations. By integrating web, mobile, and kiosk technologies, the system provides a seamless experience for both customers and staff. The AI-powered recommendation engine uses OpenAI's API to suggest personalized hairstyles based on face shape, preferences, and current trends.",
      challenges: "The primary challenge was designing and developing three interconnected systems (web, mobile, and kiosk) that needed to work seamlessly together with real-time data synchronization. Additionally, integrating AI capabilities while maintaining system performance and ensuring a smooth user experience across all platforms required careful architecture planning.",
      solutions: "Implemented Firebase as the backbone for real-time data synchronization across all platforms. Designed a comprehensive UI/UX system in Figma that maintained consistency across web, mobile, and kiosk interfaces. Integrated OpenAI API with custom prompts to provide personalized hairstyle recommendations while optimizing API calls to manage costs.",
      keyHighlights: [
        "Successfully integrated AI recommendations with 95% user satisfaction",
        "Reduced appointment booking time by 60%",
        "Improved inventory tracking accuracy by 85%",
        "Achieved real-time sync across all platforms with <100ms latency"
      ],
      liveUrl: "#",
      githubUrl: "#",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ]
    },
    {
      id: "copit",
      title: "COPit - Competitive Thrift Shopping App",
      subtitle: "2nd Place Winner at 'Automate the Future' Hackathon",
      description: "COPit revolutionizes the thrift shopping experience by introducing competitive gaming elements into secondhand buying. The app features a unique Mine-Steal-Lock system and real-time bidding that makes sustainable fashion shopping exciting and engaging. Users can discover vintage treasures, compete with other shoppers, and build their sustainable wardrobe while promoting circular fashion economy.",
      category: "Mobile App Development",
      period: "March 2025 - April 2025",
      role: "Front-End Developer & UI/UX Designer",
      team: "Duo Project",
      client: "Hackathon Project",
      color: "from-sage-400 to-sage-600",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      features: [
        "Mine-Steal-Lock competitive system",
        "Real-time bidding mechanism",
        "User authentication and profiles",
        "Leaderboard and achievements",
        "Mobile-responsive design",
        "Item discovery feed",
        "In-app notifications",
        "Social sharing features"
      ],
      overview: "COPit was developed during the 'Automate the Future' Hackathon where it won 2nd place and the Best Presenter award. The app gamifies thrift shopping by allowing users to 'mine' items they're interested in, 'steal' items from other users' collections, or 'lock' items to protect them. This innovative approach promotes sustainable fashion while creating an engaging user experience.",
      challenges: "Creating an engaging competitive shopping experience with real-time interactions while maintaining a smooth user experience was the primary challenge. The Mine-Steal-Lock mechanic needed to be intuitive yet exciting, and the bidding system had to feel fair and transparent to all users.",
      solutions: "Designed an innovative Mine-Steal-Lock system with clear visual feedback and responsive UI. Implemented a bidding system with countdown timers and real-time updates. Focused heavily on user engagement through gamification elements like achievements, leaderboards, and social features.",
      keyHighlights: [
        "Won 2nd Place at 'Automate the Future' Hackathon",
        "Awarded Best Presenter",
        "Developed functional prototype in 48 hours",
        "Positive feedback from judges on innovation and execution"
      ],
      liveUrl: "#",
      githubUrl: "#",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ]
    },
    {
      id: "mag-grantees",
      title: "Mag-Grantees: Magsaysay Scholarship Management System",
      subtitle: "Streamlining scholarship management for educational institutions",
      description: "Mag-Grantees is a comprehensive web-based scholarship management system designed to streamline the entire scholarship lifecycle. From application submission to performance monitoring, the platform provides tools for both administrators and scholars to manage scholarships efficiently. The system includes document management, academic performance tracking, and communication features.",
      category: "Web Development",
      period: "August 2024 - November 2024",
      role: "Front-End Developer & UI/UX Designer",
      team: "Group Project",
      client: "Educational Institution",
      color: "from-purple-400 to-purple-600",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      features: [
        "Dashboard analytics for administrators",
        "Document upload and management",
        "Academic performance tracking",
        "Scholarship application system",
        "Role-based access control",
        "Notification system",
        "Report generation",
        "Communication portal"
      ],
      overview: "Mag-Grantees addresses the complex needs of scholarship management in educational institutions. The system provides a centralized platform where administrators can track scholar performance, manage documents, and communicate with scholars. Scholars can submit applications, upload required documents, and monitor their academic progress.",
      challenges: "Creating an intuitive interface for complex scholarship data management with multiple user roles and extensive document handling was challenging. The system needed to accommodate different types of scholarships, each with unique requirements and tracking needs.",
      solutions: "Designed a user-friendly dashboard with role-based access that presents relevant information to each user type. Implemented a flexible document management system that can handle various file types and requirements. Optimized the interface for responsiveness and cross-browser compatibility.",
      keyHighlights: [
        "Reduced scholarship processing time by 70%",
        "Improved document tracking accuracy",
        "Enhanced communication between administrators and scholars",
        "Streamlined reporting and analytics"
      ],
      liveUrl: "#",
      githubUrl: "#",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ]
    },
    {
      id: "svms",
      title: "Student Violation Management System",
      subtitle: "Efficient case management for educational institutions",
      description: "A web-based system developed for Lyceum of Subic Bay's Office of Student Affairs to streamline the reporting and management of student violations. The platform enables efficient tracking, documentation, and resolution of disciplinary cases while maintaining transparency and accountability throughout the process.",
      category: "Web Development",
      period: "January 2024 - April 2024",
      role: "Front-End Developer & UI/UX Designer",
      team: "Group Project",
      client: "Lyceum of Subic Bay",
      color: "from-purple-800 to-purple-900",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      features: [
        "Student database management",
        "Violation reporting system",
        "Case tracking and monitoring",
        "Admin dashboard with analytics",
        "Report generation tools",
        "Document management",
        "User role management",
        "Audit trail logging"
      ],
      overview: "The Student Violation Management System was developed to modernize the disciplinary process at Lyceum of Subic Bay. The system provides a structured approach to handling student violations, from initial reporting through resolution, while ensuring all actions are properly documented and tracked.",
      challenges: "Designing a secure system for handling sensitive student data while maintaining ease of use for administrators was the primary challenge. The system needed to comply with educational regulations regarding student privacy while providing transparency in the disciplinary process.",
      solutions: "Implemented an intuitive admin interface with clear violation tracking and reporting features. Designed the system with security and privacy as top priorities, ensuring sensitive student information is protected while maintaining necessary transparency for the disciplinary process.",
      keyHighlights: [
        "Improved case processing efficiency by 65%",
        "Enhanced data security and privacy compliance",
        "Streamlined reporting and documentation",
        "Better tracking and accountability"
      ],
      liveUrl: "#",
      githubUrl: "#",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600"
      ]
    }
  ];

  const project = allProjects.find(p => p.id === projectId);
  const otherProjects = allProjects.filter(p => p.id !== projectId).slice(0, 3);

  if (!project) return <div className="p-8 text-white">Project not found.</div>;

  return (
    <div className="min-h-full bg-gradient-to-b from-[#181022] to-[#241a36]">
      {/* Floating purple background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px] bg-[#76608f] opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#bfaee0] opacity-20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-[40%] left-[-60px] w-[180px] h-[180px] bg-[#a18cd1] opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => {
                onClose();
                if (setActiveTab) {
                  setActiveTab('projects');
                }
              }}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-clash"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </button>
            <div className="flex gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#76608f] text-white rounded-lg font-clash-medium hover:bg-[#6a5580] transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-[#76608f] text-white rounded-lg font-clash-medium hover:bg-[#76608f]/10 transition-colors text-sm"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            </div>
          </div>

          <h1 className="text-4xl font-clash-bold text-white mb-3">{project.title}</h1>
          <p className="text-xl text-white/80 font-clash mb-6">{project.subtitle}</p>

          <div className="flex flex-wrap gap-4 text-sm font-clash">
            <div>
              <span className="text-white/60">Category:</span>
              <span className="ml-2 text-white font-clash-medium">{project.category}</span>
            </div>
            <div>
              <span className="text-white/60">Period:</span>
              <span className="ml-2 text-white font-clash-medium">{project.period}</span>
            </div>
            <div>
              <span className="text-white/60">Role:</span>
              <span className="ml-2 text-white font-clash-medium">{project.role}</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`w-full h-96 bg-gradient-to-br ${project.color} rounded-2xl mb-12 flex items-center justify-center overflow-hidden border border-[#76608f]/30`}
        >
          <div className="text-white text-9xl opacity-20 font-clash-bold">
            {project.title.charAt(0)}
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-clash-bold text-white mb-4">Project Overview</h2>
          <p className="text-white/80 font-clash leading-relaxed">{project.overview}</p>
        </motion.section>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="grid grid-cols-2 gap-4">
              {project.images.slice(0, 2).map((img, idx) => (
                <div key={idx} className="aspect-video bg-[#76608f]/10 rounded-lg overflow-hidden border border-[#76608f]/30">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Key Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-clash-bold text-white mb-4">Key Highlights</h2>
          <div className="bg-[#76608f]/10 border border-[#76608f]/30 rounded-lg p-6">
            <ul className="space-y-3">
              {project.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 font-clash text-white/80">
                  <span className="text-[#76608f] mt-1">▸</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-clash-bold text-white mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-[#76608f]/20 text-[#bfaee0] rounded-full text-sm font-clash-medium border border-[#76608f]/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Challenges & Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 grid md:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-2xl font-clash-bold text-white mb-4">Challenges</h2>
            <p className="text-white/80 font-clash leading-relaxed">{project.challenges}</p>
          </div>
          <div>
            <h2 className="text-2xl font-clash-bold text-white mb-4">Solutions</h2>
            <p className="text-white/80 font-clash leading-relaxed">{project.solutions}</p>
          </div>
        </motion.section>

        {/* More Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="pt-12 border-t border-[#76608f]/30"
        >
          <h2 className="text-2xl font-clash-bold text-white mb-6">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((proj, idx) => (
              <div
                key={proj.id}
                onClick={() => handleOpenProjectTab && handleOpenProjectTab(proj.id, proj.title)}
                className="cursor-pointer group"
              >
                <div className={`aspect-video bg-gradient-to-br ${proj.color} rounded-lg mb-3 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform border border-[#76608f]/30`}>
                  <span className="text-white text-4xl opacity-30 font-clash-bold">
                    {proj.title.charAt(0)}
                  </span>
                </div>
                <h3 className="font-clash-semibold text-white mb-1 group-hover:text-[#76608f] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-white/60 font-clash line-clamp-2">{proj.subtitle}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center pt-16 border-t border-[#76608f]/30 mt-16"
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
          transition={{ delay: 0.9 }}
          className="grid md:grid-cols-4 gap-8 mt-8 pt-8"
        >
          <div>
            <h3 className="font-clash-semibold text-white mb-4">Index</h3>
            <ul className="space-y-2 text-gray-600 font-clash text-sm">
              <li>
                <button onClick={() => setActiveTab && setActiveTab('home')} className="hover:text-[#76608f] transition-colors text-white">
                  Main Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab && setActiveTab('about')} className="hover:text-[#76608f] transition-colors text-white">
                  Bio
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab && setActiveTab('contact')} className="hover:text-[#76608f] transition-colors text-white">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-clash-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600 font-clash text-sm">
              <li>
                <button onClick={() => setActiveTab && setActiveTab('projects')} className="hover:text-[#76608f] transition-colors text-white">
                  Project
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab && setActiveTab('shop')} className="hover:text-[#76608f] transition-colors text-white">
                  Product
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab && setActiveTab('tools')} className="hover:text-[#76608f] transition-colors text-white">
                  Tools
                </button>
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
                <a href="https://dribbble.com/shicruzieey" target="_blank" rel="noopener noreferrer" className="hover:text-[#76608f] transition-colors text-white">Dribbble</a>
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
          transition={{ delay: 1.0 }}
          className="text-center mt-8 pt-8 border-t border-[#76608f]/30"
        >
          <p className="text-white font-clash text-sm">© 2025 Claire Cruz</p>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetailsContent;
