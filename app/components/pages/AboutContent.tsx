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
    "UI/UX Design",
    "Responsive Website Design",
    "Mobile App Design",
    "Graphic Design",
    "Front-End Development",
    "Brand Identity",
    "User Research",
    "Prototyping",
  ]

  const tools = ["Adobe Creative Suite", "Figma", "HTML & CSS", "React Native (learning)", "JavaScript", "MySQL"]

  const currentSetup = [
    { item: "Current keyboard", detail: "GMK67 — lubed Akko Piano V3s with foam & tape mod" },
    { item: "Current mouse", detail: "Logitech G102 Lightsync Gaming Mouse" },
    { item: "On repeat", detail: "Jump by Blackpink" },
    { item: "Favorite K-drama right now", detail: "Weak Hero" },
    { item: "Go-to comfort food", detail: "Iced White Mocha & Buldak Carbonara" },
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
      id: "personal-brand-logo",
      period: "June 2024",
      title: "Personal Brand Logo",
      category: "Logo Design, Brand Identity",
      description:
        "A symbolic monogram formed from the letter S and two mirrored Cs, representing my nickname, Shi, and my initials. The design reflects my minimalist personality through clean lines and geometric precision, embodying both simplicity and sophistication and clarity, creating a logo that feels both modern and uniquely mine.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      role: "Lead Designer",
      team: "Solo Project",
      challenges: "Creating a unique monogram that represents both 'Shi' and 'Claire Cruz' while maintaining simplicity and memorability.",
      solutions: "Designed a minimalist logo combining the letter S with mirrored Cs, creating a balanced and recognizable brand identity.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Brand Identity", "Logo Design", "Style Guide", "Mockups"],
      color: "from-gray-800 to-gray-900"
    },
    {
      id: "coin",
      period: "March 2024 - April 2024",
      title: "COIN",
      category: "E-commerce",
      description:
        "COIN is a competitive thrift shopping web app that gamifies secondhand buying through a unique blue-clock and leaderboard system, promoting sustainable fashion consumption.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      role: "Full Stack Developer",
      team: "3 Developers",
      challenges: "Implementing real-time bidding system with countdown timers and managing concurrent users.",
      solutions: "Built a robust real-time system using Socket.io for live updates and implemented a queue system for bid management.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Real-time Bidding", "User Authentication", "Payment Integration", "Leaderboard System", "Mobile Responsive"],
      color: "from-sage-400 to-sage-600"
    },
    {
      id: "mag-gramtees",
      period: "August 2024 - November 2024",
      title: "Mag-Gramtees",
      category: "Web Development",
      description:
        "Development of a web-based application designed to help streamline scholarship management for scholars by streamlining scholarship tracking, academic performance monitoring, document submission, and communication between scholars and administrators.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      role: "Frontend Developer",
      team: "4 Developers",
      challenges: "Creating an intuitive interface for scholarship management with complex data relationships.",
      solutions: "Designed a user-friendly dashboard with role-based access control and comprehensive reporting features.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Dashboard Analytics", "Document Management", "Notification System", "Reporting Tools", "Role-based Access"],
      color: "from-purple-400 to-purple-600"
    },
    {
      id: "svms",
      period: "January 2024 - April 2024",
      title: "SVMS",
      category: "Web Development",
      description:
        "A web-based system developed to streamline the reporting and management of student violations for the Lyceum of Subic Bay's Office of Student Affairs, ensuring efficient case management and transparency.",
      technologies: ["React", "Node.js", "MySQL", "Express", "Bootstrap"],
      role: "Full Stack Developer",
      team: "2 Developers",
      challenges: "Designing a secure system for handling sensitive student data while maintaining ease of use for administrators.",
      solutions: "Implemented role-based authentication, data encryption, and an intuitive admin interface for violation management.",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Student Database", "Violation Tracking", "Admin Dashboard", "Report Generation", "Email Notifications"],
      color: "from-purple-800 to-purple-900"
    },
  ]

  const workExperience = [
    {
      period: "November 2024 - January 2025",
      position: "Freelance Designer (Remote)",
      company: "KASA Karaoke Bar & Restaurant",
      description:
        "Designed promotional materials, social media visuals, and promotional materials for a Japan-based Filipino karaoke bar and restaurant, aligning design with both Filipino culture and local market appeal.",
    },
    {
      period: "August 2023 - October 2023",
      position: "Marketing Video Editor (Remote)",
      company: "Barcamp Shop Campaign",
      description:
        "Produced engaging marketing videos for social media campaigns, showcasing visual narratives and brand stories. Collaborated remotely with the creative team to increase viewer engagement and drive brand awareness.",
    },
  ]

  const awards = [
    {
      year: "2022 - Present",
      title: "Lyceum of Subic Bay Inc., SUBIC PH",
      subtitle: "Consistent Dean's Lister Award",
    },
    {
      year: "June 2022",
      title: "Columban College Barretto",
      subtitle: "Young Entrepreneur",
    },
  ]

  const professions = [
    "Web & Mobile Designer",
    "UI/UX Designer",
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
            src="/claire.jpg"
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
              Hi, I'm Claire Cruz (<strong className="text-[#76608f]">Shi</strong>), a <strong>Web</strong> and <strong>Graphic Designer</strong> and a <strong>4th-year IT student</strong> with a passion for
              creating simple, meaningful, and user-friendly digital experiences. My journey into design began during my
              first year of college when I discovered the power of visual storytelling. More than 1 played Call of Duty
              Mobile and began designing tournament posters for the community and that's when I fell in love with
              design.
            </p>
            <p>
              Now, I specialize in crafting clean, responsive layouts that help brands stand out across platforms.
              Whether it's intuitive UI/UX, branding, or social media creatives, I approach every project with curiosity
              and a commitment to delivering designs that truly resonate.
            </p>
            <p>
              Other than designing, you'll usually find me hanging out in local coffee shops ☕, going for a jog to
              clear my mind, or unwinding with a good K-drama. They keep me calm and inspired. I'm always on the lookout
              for new tools, trends, and opportunities to grow, and I'm excited to work on new world projects that make
              a difference.
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
                <span className="text-sm mr-2">
                  {setup.item.includes("keyboard") && "⌨️"}
                  {setup.item.includes("mouse") && "🖱️"}
                  {setup.item.includes("On repeat") && "🎧"}
                  {setup.item.includes("drama") && "📺"}
                  {setup.item.includes("comfort food") && "☕"}
                </span>
                <div className="flex-1">
                  <span className="font-clash-medium text-white">{setup.item}:</span>
                  <span className="font-clash text-gray-300 ml-2">{setup.detail}</span>
                </div>
                {hoveredSetup === index && (
                  <motion.img
                    src={
                      setup.item.includes("keyboard") ? "/current-likes/keyboard.png" :
                      setup.item.includes("mouse") ? "/current-likes/mouse.png" :
                      setup.item.includes("On repeat") ? "/current-likes/song.png" :
                      setup.item.includes("drama") ? "/current-likes/kdrama.png" :
                      setup.item.includes("comfort food") ? "/current-likes/comfortfood.png" :
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
                    className="w-64 h-40 object-cover rounded-lg shadow-lg border-2 border-[#76608f] bg-black"
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
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => handleOpenProjectTab("personal-brand-logo", "Personal Brand Logo")}
              className="flex items-center gap-2 px-6 py-2 bg-[#76608f] text-white rounded-lg font-clash-medium shadow-lg hover:shadow-xl hover:bg-[#6a5580] transition-all"
            >
              My projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {}}
              className="px-6 py-2 bg-gray-900 text-[#76608f] border border-[#76608f] rounded-lg font-clash-medium shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all"
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
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="font-clash-medium text-white w-32">My Instagram:</span>
              <a href="https://www.instagram.com/ccruzieey/" target="_blank" rel="noopener noreferrer" className="text-[#76608f] hover:text-[#6a5580] font-clash">
                Connect →
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-clash-medium text-white w-32">My Facebook:</span>
              <a href="https://www.facebook.com/ccruzieey" target="_blank" rel="noopener noreferrer" className="text-[#76608f] hover:text-[#6a5580] font-clash">
                Connect →
              </a>
            </div>
            <div className="flex items-center">
              <span className="font-clash-medium text-white w-32">My Gmail:</span>
              <a href="mailto:cruzclaire.shi@gmail.com?subject=Portfolio Inquiry&body=Hi Claire,%0D%0A%0D%0AI came across your portfolio and would like to connect.%0D%0A%0D%0ABest regards," className="text-[#76608f] hover:text-[#6a5580] font-clash">
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
              className="border-l-2 border-[#76608f] bg-[#76608f]/30 rounded-lg mb-4 p-6"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-clash-semibold text-white">{edu.degree}</h3>
                  <p className="text-[#76608f] font-clash-medium">{edu.school}</p>
                </div>
                <span className="text-sm text-white font-clash">{edu.period}</span>
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
                  className="border-l-2 border-[#76608f] bg-[#76608f]/30 rounded-lg mb-4 p-6 cursor-pointer hover:shadow-lg transition-shadow"
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
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-xl font-clash-semibold text-white mb-1">{project.title}</h3>
                      <p className="text-white text-sm font-clash leading-relaxed mb-3 line-clamp-2 h-10 overflow-hidden">{project.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[#76608f] font-clash-medium">{project.category}</span>
                        <span className="text-white font-clash">{project.period}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {hoveredProject === index && (
                  <motion.img
                    src="/desktop-wallpaper.jpg"
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
                    className="w-64 h-40 object-cover rounded-lg shadow-lg border-2 border-[#76608f] bg-black"
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
                className="border-l-2 border-[#76608f] bg-[#76608f]/30 rounded-lg mb-4 p-6 cursor-pointer hover:shadow-lg transition-shadow"
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
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="font-clash-semibold text-white">{work.position}</h3>
                    <p className="text-[#76608f] font-clash-medium">{work.company}</p>
                  </div>
                  <span className="text-sm text-white font-clash">{work.period}</span>
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
                className="border-l-2 border-[#76608f] bg-[#76608f]/30 rounded-lg mb-4 p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-clash-semibold text-white">{award.title}</h3>
                    <p className="text-[#76608f] font-clash-medium">{award.subtitle}</p>
                  </div>
                  <span className="text-sm text-white font-clash">{award.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      {/* Footer timestamp */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="text-center pt-16 border-t border-gray-200 mt-8 text-white max-w-4xl mx-auto"
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
        className="text-center mt-8 pt-8 pb-20 border-t border-gray-200 text-white max-w-4xl mx-auto"
      >
        <p className="text-white font-clash text-sm">© 2025 Claire Cruz</p>
      </motion.div>
    </div>
  );
}

export default AboutContent; 