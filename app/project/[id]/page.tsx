'use client'

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Check, X } from "lucide-react"
import { useRouter } from "next/navigation"

// Project data - you can move this to a separate file later
const projects = [
  {
    id: "personal-brand-logo",
    title: "Personal Brand Logo",
    description: "A symbolic monogram formed from the letter S and two mirrored Cs, representing my nickname 'Shi'. This logo design embodies simplicity, elegance, and personal identity, creating a memorable visual representation that can be used across various branding materials.",
    category: "Logo Design, Brand Identity",
    period: "June 2024",
    role: "Lead Designer",
    team: "Solo Project",
    color: "from-gray-700 to-gray-900",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Identity", "Typography"],
    features: [
      "Scalable vector design",
      "Multiple color variations",
      "Brand guidelines document",
      "Print and digital ready"
    ],
    challenges: "Creating a logo that represents personal identity while maintaining professional appeal and ensuring it works across different mediums and sizes.",
    solutions: "Developed a minimalist monogram approach using geometric shapes and clean typography, ensuring the design remains recognizable and effective at various scales.",
    liveUrl: "#",
    githubUrl: "#",
    images: [
      "/placeholder.jpg", // Replace with actual project images
      "/placeholder.jpg",
      "/placeholder.jpg"
    ]
  },
  {
    id: "coin",
    title: "COIN",
    description: "COIN is a competitive thrift shopping web app that gamifies secondhand buying through a unique bidding system. Users can discover vintage treasures, participate in real-time auctions, and build their sustainable fashion collection while competing with other thrift enthusiasts.",
    category: "E-commerce",
    period: "March 2024 - April 2024",
    role: "Full Stack Developer",
    team: "3 Developers",
    color: "from-green-600 to-green-800",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe", "AWS"],
    features: [
      "Real-time bidding system",
      "User authentication & profiles",
      "Payment integration",
      "Live chat support",
      "Mobile responsive design"
    ],
    challenges: "Implementing real-time bidding functionality with multiple concurrent users while ensuring data consistency and preventing race conditions.",
    solutions: "Used WebSocket connections for real-time updates, implemented optimistic UI updates, and added proper error handling and rollback mechanisms.",
    liveUrl: "#",
    githubUrl: "#",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg"
    ]
  },
  {
    id: "mag-gramtees",
    title: "Mag-Gramtees",
    description: "Development of a web-based application designed to help streamline scholarship application processes for students. The platform provides an intuitive interface for managing applications, tracking deadlines, and connecting students with scholarship opportunities.",
    category: "Web Development",
    period: "August 2024 - November 2024",
    role: "Frontend Developer",
    team: "4 Developers",
    color: "from-purple-600 to-purple-800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    features: [
      "Application management system",
      "Deadline tracking",
      "Document upload",
      "Progress monitoring",
      "Email notifications"
    ],
    challenges: "Creating a user-friendly interface for complex application forms while ensuring data validation and providing clear feedback to users throughout the process.",
    solutions: "Implemented a multi-step form wizard with progress indicators, real-time validation, and auto-save functionality to improve user experience.",
    liveUrl: "#",
    githubUrl: "#",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg"
    ]
  },
  {
    id: "svms",
    title: "SVMS",
    description: "A web-based system developed to streamline the reporting and management of student violations. The platform enables efficient tracking, documentation, and resolution of disciplinary cases while maintaining transparency and accountability.",
    category: "Web Development",
    period: "January 2024 - March 2024",
    role: "Full Stack Developer",
    team: "2 Developers",
    color: "from-blue-600 to-blue-800",
    technologies: ["React", "Express.js", "MySQL", "JWT", "Bootstrap", "Chart.js"],
    features: [
      "Violation reporting system",
      "Case management",
      "Document generation",
      "Analytics dashboard",
      "Role-based access control"
    ],
    challenges: "Designing a system that handles sensitive student data while ensuring security, privacy, and compliance with educational regulations.",
    solutions: "Implemented role-based access control, data encryption, audit trails, and secure authentication to protect sensitive information.",
    liveUrl: "#",
    githubUrl: "#",
    images: [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg"
    ]
  }
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const foundProject = projects.find(p => p.id === params.id)
    if (foundProject) {
      setProject(foundProject)
    }
  }, [params.id])

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-clash-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 px-6 py-2 bg-[#76608f] text-white rounded-lg font-clash-medium hover:bg-[#6a5580] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-black/95 backdrop-blur-sm border-b border-[#76608f]/30"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-[#76608f] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </button>
            <h1 className="text-xl font-clash-bold text-white">{project.title}</h1>
            <div className="w-8"></div> {/* Spacer for centering */}
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className={`h-96 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center relative overflow-hidden mb-8`}>
            <div className="text-white text-9xl opacity-20">
              {project.title === "Personal Brand Logo" && "S"}
              {project.title === "COIN" && "💰"}
              {project.title === "Mag-Gramtees" && "📱"}
              {project.title === "SVMS" && "💻"}
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl font-clash-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 font-clash max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
            <div className="flex items-center justify-center gap-6 mt-6">
              <span className="text-[#76608f] font-clash-medium">{project.category}</span>
              <span className="text-white font-clash">{project.period}</span>
            </div>
          </div>
        </motion.div>

        {/* Project Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-clash-bold text-white mb-6">Project Screenshots</h2>
          
          {/* Main Image */}
          <div className="mb-6">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={project.images[selectedImage]}
                alt={`${project.title} screenshot ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {project.images.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index 
                    ? 'border-[#76608f]' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Project Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Project Overview */}
            <div>
              <h3 className="text-xl font-clash-semibold text-white mb-4">Project Overview</h3>
              <p className="text-gray-300 font-clash leading-relaxed mb-6">{project.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <span className="text-[#76608f] font-clash-medium w-24">Category:</span>
                  <span className="text-white font-clash">{project.category}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#76608f] font-clash-medium w-24">Period:</span>
                  <span className="text-white font-clash">{project.period}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#76608f] font-clash-medium w-24">Role:</span>
                  <span className="text-white font-clash">{project.role}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#76608f] font-clash-medium w-24">Team:</span>
                  <span className="text-white font-clash">{project.team}</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-clash-semibold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#76608f]/20 text-[#76608f] rounded-full text-sm font-clash-medium border border-[#76608f]/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xl font-clash-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start text-gray-300 font-clash">
                    <Check className="w-5 h-5 text-[#76608f] mr-3 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-clash-semibold text-white mb-4">Challenges</h3>
                <p className="text-gray-300 font-clash leading-relaxed">{project.challenges}</p>
              </div>
              <div>
                <h3 className="text-xl font-clash-semibold text-white mb-4">Solutions</h3>
                <p className="text-gray-300 font-clash leading-relaxed">{project.solutions}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 rounded-lg p-6 border border-[#76608f]/30">
              <h3 className="text-lg font-clash-semibold text-white mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-4 py-3 bg-[#76608f] text-white rounded-lg font-clash-medium hover:bg-[#6a5580] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full px-4 py-3 bg-gray-800 text-white border border-[#76608f] rounded-lg font-clash-medium hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-[#76608f]/30">
              <h3 className="text-lg font-clash-semibold text-white mb-4">Project Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-clash">Duration:</span>
                  <span className="text-white font-clash">{project.period}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-clash">Team Size:</span>
                  <span className="text-white font-clash">{project.team}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-clash">Technologies:</span>
                  <span className="text-white font-clash">{project.technologies.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-clash">Features:</span>
                  <span className="text-white font-clash">{project.features.length}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 