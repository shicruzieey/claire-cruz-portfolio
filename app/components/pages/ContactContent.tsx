import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/mjkogpaz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-full bg-gradient-to-b from-[#181022] to-[#241a36] text-white">
      {/* Floating purple background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-80px] left-[-120px] w-[320px] h-[320px] bg-[#76608f] opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-[#bfaee0] opacity-20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-[40%] left-[-60px] w-[180px] h-[180px] bg-[#a18cd1] opacity-20 rounded-full blur-2xl animate-pulse" />
      </div>
      <div className="relative z-10 container mx-auto px-6 py-16 max-w-4xl">
        {/* Contact Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-clash-bold text-white mb-2">Contact Me</h1>
          <p className="text-gray-300 font-clash">
            Let's get in touch! Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </motion.div>
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-transparent rounded-lg shadow-sm border border-[#76608f] p-6"
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2 font-clash">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="shadow appearance-none border border-[#76608f] rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline font-clash placeholder-[#bfaee0]"
                required
                disabled={loading}
                aria-required="true"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2 font-clash">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="shadow appearance-none border border-[#76608f] rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline font-clash placeholder-[#bfaee0]"
                required
                disabled={loading}
                aria-required="true"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-white text-sm font-bold mb-2 font-clash">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={4}
                className="shadow appearance-none border border-[#76608f] rounded w-full py-2 px-3 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline font-clash placeholder-[#bfaee0]"
                required
                disabled={loading}
                aria-required="true"
              ></textarea>
            </div>
            <Button 
              className="bg-[#76608f] hover:bg-[#6a5580] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-clash-medium disabled:opacity-50 disabled:cursor-not-allowed" 
              disabled={loading}
              type="submit"
              aria-busy={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Send Message"}
            </Button>
            {error && (
              <div className="mt-4 text-red-400 font-clash text-center" role="alert" aria-live="assertive">
                {error}
              </div>
            )}
          </form>
          {submitted && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed left-1/2 top-20 transform -translate-x-1/2 z-50 bg-[#23203a] border border-[#76608f] rounded-lg p-6 text-center shadow-lg"
              role="alert"
              aria-live="polite"
            >
              <h2 className="text-2xl font-clash-bold mb-2 text-[#bfaee0]">Thank you!</h2>
              <p className="text-white font-clash">Your message has been sent. I'll get back to you soon.</p>
            </motion.div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center pt-16 border-t border-white mt-16 max-w-4xl mx-auto"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="grid md:grid-cols-4 gap-8 mt-8 pt-8 max-w-4xl mx-auto"
        >
          <div>
            <h3 className="font-clash-semibold text-white mb-4">Index</h3>
            <ul className="space-y-2 text-gray-300 font-clash text-sm">
              <li>
                <button onClick={() => {}} className="hover:text-[#76608f] transition-colors">Main Home</button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-[#76608f] transition-colors">Bio</button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-[#76608f] transition-colors">Contact</button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-clash-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 font-clash text-sm">
              <li>
                <button onClick={() => {}} className="hover:text-[#76608f] transition-colors">Project</button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-[#76608f] transition-colors">Product</button>
              </li>
              <li>
                <a href="#" className="hover:text-[#76608f] transition-colors">Tools</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-clash-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300 font-clash text-sm">
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
            <ul className="space-y-2 text-gray-300 font-clash text-sm">
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
          className="text-center mt-8 pt-8 border-t border-white max-w-4xl mx-auto"
        >
          <p className="text-white font-clash text-sm">© 2025 Claire Cruz</p>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactContent; 
