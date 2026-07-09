import { motion } from "framer-motion";
import { Mail, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";

const socials = [
  {
    icon: FaGithub,
    href: personalInfo.github,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: personalInfo.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    label: "Email",
  },
];
const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan-400/10 bg-[#020817]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-10 py-10">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 flex items-center justify-center">
                <Code2 size={16} className="text-cyan-400" />
              </div>

              <span className="font-mono font-bold text-white">
                {personalInfo.name}<span className="text-cyan-400"> Portfolio</span>
              </span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed">
              {personalInfo.title} building secure, scalable, and
              production-ready applications using Spring Boot, React, and Node.js.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-500 hover:text-cyan-400 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>

            <p className="text-slate-500 text-sm mb-5">
              Feel free to reach out for opportunities and collaborations.
            </p>

            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-500 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300"
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {personalInfo.fullName}.
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
