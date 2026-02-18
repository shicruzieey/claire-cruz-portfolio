import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Check } from "lucide-react";

function ProjectDetailsContent({ projectId, onClose }: { projectId: string, onClose: () => void }) {
  const projects = [
    {
      id: "personal-brand-logo",
      title: "Personal Brand Logo",
      description: "A symbolic monogram formed from the letter S and two mirrored Cs, representing my nickname 'Shi'. This logo design embodies simplicity, elegance, and personal identity, creating a memorable visual representation that can be used across various branding materials.",
      category: "Logo Design, Brand Identity",
      period: "June 2024",
      role: "Lead Designer",
      team: "Solo Project",
      client: "Personal Project",
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
        "/placeholder.jpg",
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
  ];
  const project = projects.find(p => p.id === projectId);
  if (!project) return <div className="p-8 text-white">Project not found.</div>;
  return (
    <div className="min-h-full bg-gradient-to-b from-[#181022] to-[#241a36] text-white">
      {/* Floating purple background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px] bg-[#76608f] opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#bfaee0] opacity-20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-[40%] left-[-60px] w-[180px] h-[180px] bg-[#a18cd1] opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 p-8 text-white overflow-auto max-w-4xl mx-auto">
        <div className={`h-64 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center relative overflow-hidden mb-8`}>
          <div className="text-white text-8xl opacity-20">
            {project.title === "Personal Brand Logo" && "S"}
            {project.title === "COIN" && "💰"}
            {project.title === "Mag-Gramtees" && "📱"}
            {project.title === "SVMS" && "💻"}
          </div>
        </div>
        <h1 className="text-3xl font-clash-bold mb-4">{project.title}</h1>
        <p className="mb-4 text-gray-300">{project.description}</p>
        <div className="mb-4 text-sm text-[#bfaee0] font-clash">
          <span className="font-bold">Client:</span> {project.client || 'Personal Project'}
        </div>
        {/* Image Showcase */}
        {project.images && project.images.length > 0 && (
          <div className="flex space-x-4 overflow-x-auto mb-8 pb-2">
            {project.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${project.title} showcase ${idx + 1}`}
                className="h-56 w-auto rounded-xl border border-[#76608f] object-cover flex-shrink-0"
                style={{ minWidth: '220px' }}
              />
            ))}
          </div>
        )}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-[#76608f]/20 text-[#76608f] rounded-full text-sm font-clash-medium">{tech}</span>
          ))}
        </div>
        <h3 className="text-xl font-clash-semibold mb-2">Key Features</h3>
        <ul className="mb-6 space-y-2">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-300 font-clash"><Check className="w-4 h-4 text-[#76608f] mr-2 flex-shrink-0" />{feature}</li>
          ))}
        </ul>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-clash-semibold mb-2">Challenges</h3>
            <p className="text-gray-300">{project.challenges}</p>
          </div>
          <div>
            <h3 className="text-lg font-clash-semibold mb-2">Solutions</h3>
            <p className="text-gray-300">{project.solutions}</p>
          </div>
        </div>
        <div className="flex gap-4 pt-4 border-t border-[#76608f]/30">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 bg-[#76608f] text-white rounded-lg font-clash-medium hover:bg-[#6a5580] transition-colors"><ExternalLink className="w-4 h-4" />Live Demo</a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2 bg-gray-800 text-white border border-[#76608f] rounded-lg font-clash-medium hover:bg-gray-700 transition-colors"><Github className="w-4 h-4" />View Code</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsContent; 