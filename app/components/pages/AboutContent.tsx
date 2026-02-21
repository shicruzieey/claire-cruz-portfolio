import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function AboutContent({ handleOpenProjectTab, setActiveTab }: { handleOpenProjectTab: (projectId: string, projectTitle: string) => void, setActiveTab: (tab: string) => void }) {
  // --- BEGIN: AboutContent logic and state from browser-portfolio.tsx ---
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState<{x: number, y: number}>({x: 0, y: 0})
  const [hoveredSetup, setHoveredSetup] = useState<number | null>(null)
  const [mousePosSetup, setMousePosSetup] = useState<{x: number, y: number}>({x: 0, y: 0})
  const skills = [
    "UI/UX Design (Web & Mobile)",
    "Front-End Development",
    "Mobile App Development",
    "Social Media Content Design",
    "Responsive Website Design",
    "Flyers, Posters & Brochures",
    "Basic Video Editing",
    "User Research & Prototyping",
  ]

  const tools = ["Figma", "HTML & CSS", "JavaScript", "React.js", "React Native", "Tailwind CSS", "Firebase", "Canva", "Capcut", "Microsoft Office"]

  const currentSetup = [
    { item: "Current keyboard", detail: "GMK67 — lubed Akko Piano V3s with foam & tape mod" },
    { item: "Current mouse", detail: "Logitech G102 Lightsync Gaming Mouse" },
    { item: "Current laptop", detail: "Lenovo LOQ 15IRX9" },
    { item: "On repeat", detail: "Fly by Nicki Minaj" },
    { item: "Favorite Show", detail: "Stranger Things" },
    { item: "Go-to Coffee", detail: "Hot Latte w Sugar" },
  ]

  const education = [
    {
      period: "2022 - Present",
      degree: "Bachelor of Science in Information Technology",
      school: "Lyceum of Subic Bay Inc., SUBIC PH",
      description:
        "Specialized in front-end development, UI/UX design, and graphic design. Consistent project finishes creating a mobile app prototype for a non-profit organization, focusing on user-centered design and interactive interfaces.",
    },
  ]

  const projects = [
    {
      id: "davids-salon",
      period: "June 2025 - February 2026",
      title: "David's Salon Operations Management System",
      category: "Mobile App & Web Development, UI/UX Design",
      description:
        "A comprehensive salon management system featuring web admin panel, mobile apps for clients and stylists, and an AI-powered hairstyle recommendation kiosk. Built with React.js, React Native, Tailwind CSS, and Firebase with OpenAI API integration for smart recommendations.",
      technologies: ["React.js", "React Native", "Tailwind CSS", "Firebase", "OpenAI API", "Figma"],
      role: "Mobile App & Web Developer, UI/UX Designer",
      team: "OJT Team Project",
      challenges: "Designing and developing three interconnected systems (web, mobile, kiosk) with real-time synchronization and AI integration.",
      solutions: "Implemented Firebase for real-time data sync, designed complete UI/UX in Figma, and integrated OpenAI API for personalized hairstyle recommendations.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Appointment Scheduling", "POS System", "Inventory Management", "CRM", "Analytics Dashboard", "AI Hairstyle Recommendations"],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: "copit",
      period: "March 2025 - April 2025",
      title: "COPit - Competitive Thrift Shopping App",
      category: "Mobile App Development, UI/UX Design",
      description:
        "2nd Place Winner at 'Automate the Future' Hackathon. A competitive thrift shopping mobile app featuring a unique Mine-Steal-Lock and bidding system that gamifies secondhand buying, promoting sustainable fashion consumption.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      role: "Front-End Developer & UI/UX Designer",
      team: "Duo Project",
      challenges: "Creating an engaging competitive shopping experience with real-time interactions and intuitive game mechanics.",
      solutions: "Designed innovative Mine-Steal-Lock system with responsive UI and seamless bidding experience focused on user engagement.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Mine-Steal-Lock System", "Real-time Bidding", "User Authentication", "Leaderboard", "Mobile Responsive"],
      color: "from-sage-400 to-sage-600"
    },
    {
      id: "mag-grantees",
      period: "August 2024 - November 2024",
      title: "Mag-Grantees: Magsaysay Scholarship Management System",
      category: "Web Development, UI/UX Design",
      description:
        "A comprehensive scholarship management system designed to streamline scholarship tracking, academic performance monitoring, document submission, and communication between scholars and administrators.",
      technologies: ["HTML", "CSS", "JavaScript", "Figma"],
      role: "Front-End Developer & UI/UX Designer",
      team: "Group Project",
      challenges: "Creating an intuitive interface for complex scholarship data management with multiple user roles and document handling.",
      solutions: "Designed user-friendly dashboard with role-based access, optimized for responsiveness and cross-browser compatibility.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Dashboard Analytics", "Document Management", "Performance Tracking", "User Roles", "Responsive Design"],
      color: "from-purple-400 to-purple-600"
    },
    {
      id: "svms",
      period: "January 2024 - April 2024",
      title: "Student Violation Management System",
      category: "Web Development, UI/UX Design",
      description: "A web-based system developed for Lyceum of Subic Bay's Office of Student Affairs to streamline the reporting and management of student violations, ensuring efficient case management and transparency.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      role: "Front-End Developer & UI/UX Designer",
      team: "Group Project",
      challenges: "Designing a secure system for handling sensitive student data while maintaining ease of use for administrators.",
      solutions: "Implemented intuitive admin interface with clear violation tracking, reporting features, and accessibility standards.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Student Database", "Violation Tracking", "Admin Dashboard", "Report Generation", "Case Management"],
      color: "from-purple-800 to-purple-900"
    },
  ]

  const workExperience = [
    {
      period: "June 2025 - February 2026",
      position: "OJT - Mobile App and Web Developer & UI/UX Designer",
      company: "David's Salon",
      description:
        "Completed 486 hours of on-the-job training developing a comprehensive salon management system. Designed UI/UX prototypes in Figma and built web and mobile applications using React.js, React Native, Tailwind CSS, and Firebase. Implemented AI-powered hairstyle recommendations using OpenAI API.",
    },
    {
      period: "November 2024 - January 2025",
      position: "Freelance Designer (Remote)",
      company: "TAGAI Karaoke Bar & Restaurant",
      description:
        "Designed and implemented visual assets, including motion graphics, to enhance video storytelling for a Japan-based Filipino karaoke bar and restaurant. Worked closely with the team to ensure videos met quality standards and deadlines, aligning design with both Filipino culture and local market appeal.",
    },
    {
      period: "August 2023 - October 2023",
      position: "Marketing Video Editor (Remote)",
      company: "Barestep Shoe Company",
      description:
        "Produced engaging marketing videos for social media campaigns, showcasing visual narratives and brand stories. Assisted in brainstorming and conceptualizing video content strategies to boost brand visibility and engagement, working remotely with the creative team.",
    },
  ]

  const awards = [
    {
      year: "October 2025",
      title: "Automate the Future Hackathon",
      subtitle: "2nd Place Winner & Best Presenter - COPit Project",
    },
    {
      year: "2022 - Present",
      title: "Lyceum of Subic Bay Inc., SUBMA PH",
      subtitle: "Consistent Dean's Lister Award",
    },
    {
      year: "June 2022",
      title: "Columban College Barretto",
      subtitle: "Young Entrepreneur Award",
    },
  ]

  const professions = [
    "UI/UX Designer",
    "Web & Mobile Developer",
    "Graphics Designer"
  ];
  const [currentProfession, setCurrentProfession] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

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

  // --- END: AboutContent logic and state ---
  // --- BEGIN: AboutContent JSX from browser-portfolio.tsx ---
  return (
    <div className="min-h-full bg-gradient-to-b from-[#181022] to-[#241a36]">
      {/* Floating purple background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px] bg-[#76608f] opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#bfaee0] opacity-20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-[40%] left-[-60px] w-[180px] h-[180px] bg-[#a18cd1] opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 pb-8 max-w-4xl">
        {/* Profile Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center mb-8">
          <img
            src="/images/profile/claire.jpg"
            alt="Claire Cruz"
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#76608f]"
          />
          <div>
            <h1 className="text-2xl font-clash-bold text-white">Claire Cruz (Shi)</h1>
            <p className="text-[#76608f] font-clash whitespace-pre">{displayedText}<span className="animate-pulse">|</span></p>
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xl font-clash-bold text-white mb-4">Bio</h2>
          <div className="space-y-4 text-gray-300 font-clash leading-relaxed">
            <p>
              Hi, I'm Claire Jessica Cruz (<strong className="text-[#76608f]">Shi</strong>), a <strong>UI/UX Designer</strong> and <strong>4th-year IT student</strong> at Lyceum of Subic Bay with experience in web and mobile application development. I specialize in creating user-centered designs and developing responsive front-end and mobile applications using modern technologies like React.js, React Native, and Firebase.
            </p>
            <p>
              My journey into design began during my first year of college when I discovered the power of visual storytelling through designing tournament posters for the Call of Duty Mobile community. Since then, I've worked on real-world projects including a salon management system, scholarship tracking platforms, and even won 2nd place at the "Automate the Future" Hackathon with my competitive thrift shopping app, COPit.
            </p>
            <p>
              I'm highly organized and detail-oriented, ensuring projects are delivered on time and aligned with user needs. When I'm not designing or coding, you'll find me hanging out in local coffee shops ☕, going for a jog to clear my mind, or unwinding with a good Netflix series. I'm always on the lookout for new tools, trends, and opportunities to grow.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl font-clash-bold text-white mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="px-3 py-1 bg-[#76608f]/20 text-[#76608f] rounded-full text-sm font-clash-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xl font-clash-bold text-white mb-4">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-clash-medium"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Current Setup Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="space-y-3 mb-6 relative">
            {currentSetup.map((setup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start"
                onMouseEnter={() => setHoveredSetup(index)}
                onMouseLeave={() => setHoveredSetup(null)}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePosSetup({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                  });
                }}
              >
                <span className="text-sm mr-2 flex-shrink-0">
                  {setup.item.includes("keyboard") && "⌨️"}
                  {setup.item.includes("mouse") && "🖱️"}
                  {setup.item.includes("laptop") && "💻"}
                  {setup.item.includes("On repeat") && "🎧"}
                  {setup.item.includes("Show") && "📺"}
                  {setup.item.includes("Coffee") && "☕"}
                </span>
                <div className="flex-1 min-w-0">
                  <span className="font-clash-medium text-white">{setup.item}:</span>
                  <span className="font-clash text-gray-300 ml-2 break-words">{setup.detail}</span>
                </div>
                {hoveredSetup === index && (
                  <motion.img
                    src={
                      setup.item.includes("keyboard") ? "/images/setup/current-likes/keyboard.png" :
                      setup.item.includes("mouse") ? "/images/setup/current-likes/mouse.png" :
                      setup.item.includes("laptop") ? "/images/setup/current-likes/laptop.png" :
                      setup.item.includes("On repeat") ? "/images/setup/current-likes/song.png" :
                      setup.item.includes("Show") ? "/images/setup/current-likes/show.png" :
                      setup.item.includes("Coffee") ? "/images/setup/current-likes/coffee.png" :
                      ""
                    }
                    alt="Setup preview"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      left: mousePosSetup.x + 24,
                      top: mousePosSetup.y + 24,
                      pointerEvents: 'none',
                      zIndex: 50
                    }}
                    className="hidden md:block w-64 h-40 object-cover rounded-lg shadow-lg border-2 border-[#76608f] bg-black"
                  />
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <button
              onClick={() => handleOpenProjectTab("personal-brand-logo", "Personal Brand Logo")}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[#76608f] text-white rounded-lg font-clash-medium shadow-lg hover:shadow-xl hover:bg-[#6a5580] transition-all w-full sm:w-auto"
            >
              My projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className="px-6 py-3 bg-gray-900 text-[#76608f] border border-[#76608f] rounded-lg font-clash-medium shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all w-full sm:w-auto"
            >
              Contact
            </button>
          </motion.div>
        </motion.section>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="border-t border-gray-200 my-8"
        />

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 text-white"
        >
          <h2 className="text-xl font-clash-bold text-white mb-4">Contact</h2>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-clash-medium text-white sm:w-32">My Instagram:</span>
              <a href="https://www.instagram.com/ccruzieey/" target="_blank" rel="noopener noreferrer" className="text-[#76608f] hover:text-[#6a5580] font-clash inline-flex items-center">
                Connect →
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-clash-medium text-white sm:w-32">My Facebook:</span>
              <a href="https://www.facebook.com/ccruzieey" target="_blank" rel="noopener noreferrer" className="text-[#76608f] hover:text-[#6a5580] font-clash inline-flex items-center">
                Connect →
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="font-clash-medium text-white sm:w-32">My Gmail:</span>
              <a href="mailto:cruzclaire.shi@gmail.com?subject=Portfolio Inquiry&body=Hi Claire,%0D%0A%0D%0AI came across your portfolio and would like to connect.%0D%0A%0D%0ABest regards," className="text-[#76608f] hover:text-[#6a5580] font-clash inline-flex items-center break-all">
                Email Me →
              </a>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 text-white"
        >
          <h2 className="text-xl font-clash-bold text-white mb-6">Education</h2>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="border-l-2 border-[#76608f] bg-[#76608f]/30 rounded-lg mb-4 p-4 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-clash-semibold text-white">{edu.degree}</h3>
                  <p className="text-[#76608f] font-clash-medium">{edu.school}</p>
                </div>
                <span className="text-sm text-white font-clash whitespace-nowrap">{edu.period}</span>
              </div>
              <p className="text-white font-clash text-sm leading-relaxed">{edu.description}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12 text-white"
        >
          <h2 className="text-xl font-clash-bold text-white mb-6">Projects</h2>
          <div className="space-y-8 relative">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="border-l-2 border-[#76608f] bg-[#76608f]/30 rounded-lg mb-4 p-4 sm:p-6 cursor-pointer hover:shadow-lg transition-shadow"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onMouseMove={e => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setMousePos({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top
                    });
                  }}
                  onClick={() => handleOpenProjectTab(project.id, project.title)}
                >
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-clash-semibold text-white mb-1">{project.title}</h3>
                      <p className="text-white text-sm font-clash leading-relaxed mb-3 line-clamp-2 overflow-hidden">{project.description}</p>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm gap-2">
                        <span className="text-[#76608f] font-clash-medium">{project.category}</span>
                        <span className="text-white font-clash text-xs sm:text-sm">{project.period}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {hoveredProject === index && (
                  <motion.img
                    src="/images/hero/desktop-wallpaper.jpg"
                    alt="Project preview"
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      left: mousePos.x + 24,
                      top: mousePos.y + 24,
                      pointerEvents: 'none',
                      zIndex: 50
                    }}
                    className="hidden md:block w-64 h-40 object-cover rounded-lg shadow-lg border-2 border-[#76608f] bg-black"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12 text-white"
        >
          <h2 className="text-xl font-clash-bold text-white mb-6">Work experience</h2>
          <div className="space-y-8">
            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="border-l-2 border-[#76608f] bg-[#76608f]/30 rounded-lg mb-4 p-4 sm:p-6 cursor-pointer hover:shadow-lg transition-shadow"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                  });
                }}
                onClick={() => console.log('Work experience clicked:', work.position)}
              >
                <div className="flex flex-col sm:flex-row items-start justify-between mb-2 gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-clash-semibold text-white">{work.position}</h3>
                    <p className="text-[#76608f] font-clash-medium">{work.company}</p>
                  </div>
                  <span className="text-sm text-white font-clash whitespace-nowrap">{work.period}</span>
                </div>
                <p className="text-white font-clash text-sm leading-relaxed">{work.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Awards & Certificates Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mb-12 text-white"
        >
          <h2 className="text-xl font-clash-bold text-white mb-6">Awards & Certificates</h2>
          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 + index * 0.1 }}
                className="border-l-2 border-[#76608f] bg-[#76608f]/30 rounded-lg mb-4 p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-clash-semibold text-white">{award.title}</h3>
                    <p className="text-[#76608f] font-clash-medium">{award.subtitle}</p>
                  </div>
                  <span className="text-sm text-white font-clash whitespace-nowrap">{award.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

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

export default AboutContent; 
