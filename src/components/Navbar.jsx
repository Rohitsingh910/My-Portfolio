import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolio";
import { useScrolled, useScrollSpy } from "../hooks/useScrollSpy";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(50);
  const activeId = useScrollSpy([
    "about",
    "skills",
    "projects",
    "experience",
    "education",
    "achievements",
    "contact",
  ]);

  const handleNavClick = (href) => {
  setMenuOpen(false);

  setTimeout(() => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 200);
};

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-[#020817]/80 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_4px_30px_rgba(34,211,238,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-all duration-300">
              <Code2 size={16} className="text-cyan-400" />
            </div>
            <span className="font-mono font-bold text-sm text-white tracking-tight">
              {personalInfo.name}<span className="text-cyan-400"> Portfolio</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400 rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-400/40 rounded-lg overflow-hidden group"
              whileHover={{ y: -2, boxShadow: "0 0 20px rgba(34,211,238,0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors duration-300" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-cyan-400/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="block w-full text-center px-4 py-3 text-sm font-semibold text-cyan-400 border border-cyan-400/30 rounded-lg mt-2"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
