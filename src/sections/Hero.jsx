import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Server,
  Shield,
  Cpu,
  GitBranch,
  Lock,
} from "lucide-react";

import { useRef, useEffect, useState } from "react";
import { FaCodeBranch } from "react-icons/fa";
import { Boxes } from "lucide-react";
import { FaJava } from "react-icons/fa";

import { FaReact, FaDocker, FaAws } from "react-icons/fa";

import { SiSpringboot, SiMysql } from "react-icons/si";
import { personalInfo } from "../data/portfolio";

const codeSnippets = [
  {
    icon: Shield,
    label: "Spring Security",
    color: "#6DB33F",
    top: "7%",
    right: "-21%",
    delay: 0,
  },
  {
    icon: Lock,
    label: "JWT Auth",
    color: "#8B5CF6",
    top: "45%",
    left: "-4%",
    delay: 0.3,
  },
  {
    icon: Cpu,
    label: "Redis",
    color: "#DC382D",
    top: "8%",
    left: "13%",
    delay: 0.6,
  },
  {
    icon: GitBranch,
    label: "Kafka",
    color: "#14B8A6",
    bottom: "13%",
    right: "-14%",
    delay: 0.9,
  },
  {
    icon: Server,
    label: "API Gateway",
    color: "#F59E0B",
    bottom: "12%",
    left: "3%",
    delay: 0.4,
  },
  {
    icon: FaCodeBranch,
    label: "CI/CD",
    color: "#22D3EE",
    top: "45%",
    right: "-23%",
    delay: 1.1,
  },
];

function FloatingBadge({ icon: Icon, label, color, delay, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay + 1, duration: 0.5 }}
      style={style}
      className="absolute hidden lg:flex items-center gap-2 glass-card rounded-full px-3 py-1.5 text-xs font-mono overflow-hidden"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center gap-2"
      >
        <Icon size={12} style={{ color }} />
        <span style={{ color }}>{label}</span>
      </motion.div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const heroRef = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setParticles(
        Array.from({ length: 20 }).map(() => ({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          duration: 3 + Math.random() * 4,
          delay: Math.random() * 3,
        }))
      );
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
  ref={heroRef}
  className="relative min-h-screen flex items-center bg-[#020817] overflow-hidden"
>
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
          style={{
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16 overflow-visible">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 tracking-widest uppercase">
                <motion.span
                  className="w-2 h-2 rounded-full bg-cyan-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Open to Full-Time Opportunities
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-tight font-black leading-[0.95] text-white">
                {personalInfo.name}
              </h1>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-tight font-black">
                <span className="text-gradient">{personalInfo.lastName}</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants}>
              <p className="text-lg font-mono text-cyan-400 tracking-wide">
                {personalInfo.title} • {personalInfo.subtitle}
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg leading-relaxed max-w-xl"
            >
              Building secure backend systems, scalable REST APIs, and
              production-oriented applications using
              <span className="text-white font-medium">
                {" "}
                Java, Spring Boot, React, and databases
              </span>
              . Passionate about clean architecture, API security, and intelligent system integrations.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="group flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#020817] font-bold text-sm rounded-lg transition-all duration-300"
                whileHover={{
                  y: -2,
                  boxShadow: "0 0 30px rgba(34,211,238,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <motion.a
                href={personalInfo.resume.startsWith('http') ? personalInfo.resume : `${import.meta.env.BASE_URL}${personalInfo.resume.replace(/^\//, '')}`}
                target="_Resume"
                className="flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold text-sm rounded-lg transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 px-6 py-3 border border-cyan-400/20 hover:border-cyan-400/50 text-cyan-400 font-semibold text-sm rounded-lg transition-all duration-300 bg-cyan-400/5 hover:bg-cyan-400/10"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={16} />
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Quick stats */}
            {/* <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 pt-4 border-t border-white/5"
            >
              {[
                { val: "2+", label: "Projects Shipped" },
                { val: "2", label: "Internships" },
                { val: "Top 10", label: "Hackathon" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl font-bold text-white">{stat.val}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Right: Engineering Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center mt-10 lg:mt-0 lg:ml-16"
          >
            {/* Central architecture visual */}
            <div className="relative w-full max-w-md aspect-square lg:translate-x-16">
              {/* Outer rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-cyan-400/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-blue-500/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-16 rounded-full border border-purple-500/10" />

              {/* Center node */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="
  w-32 h-32
  rounded-3xl
  glass-card
  glow-border
  border border-cyan-500/20
  flex flex-col items-center justify-center gap-2
  shadow-[0_0_40px_rgba(34,211,238,0.15)]
"
                >
                  <FaJava size={38} className="text-cyan-400" />

                  <h2 className="text-base font-bold text-white tracking-wide">
                    JAVA
                  </h2>

                  <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                    FULL STACK
                  </span>
                </div>
              </motion.div>

              {/* Orbiting nodes */}
              {[
                {
                  label: "SpringBoot",
                  icon: SiSpringboot,
                  angle: 0,
                  color: "#6db33f",
                },
                {
                  label: "Microservices",
                  icon: Boxes,
                  angle: 60,
                  color: "#f97316",
                },
                {
                  label: "React",
                  icon: FaReact,
                  angle: 120,
                  color: "#61dafb",
                },
                {
                  label: "Docker",
                  icon: FaDocker,
                  angle: 180,
                  color: "#2496ed",
                },
                {
                  label: "MySQL",
                  icon: SiMysql,
                  angle: 240,
                  color: "#4479a1",
                },
                {
                  label: "AWS",
                  icon: FaAws,
                  angle: 300,
                  color: "#ff9900",
                },
              ].map((node, i) => {
                const rad = (node.angle * Math.PI) / 180;
                const r = 145;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                    style={{
                      position: "absolute",
                      left: `calc(50% + ${x}px - 36px)`,
                      top: `calc(50% + ${y}px - 36px)`,
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 3 + i * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3,
                      }}
                      className="w-16 h-16 glass-card rounded-xl flex flex-col items-center justify-center gap-1 cursor-default hover:border-cyan-400/30 transition-all duration-300"
                      style={{ borderColor: `${node.color}20` }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <node.icon size={22} style={{ color: node.color }} />
                      <span
                        className="text-[9px] font-mono"
                        style={{ color: node.color }}
                      >
                        {node.label}
                      </span>
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Connection lines SVG */}
              <svg
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: -1 }}
              >
                {[0, 72, 144, 216, 288].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const r = 140;
                  const x = 50 + (Math.cos(rad) * r * 100) / 280;
                  const y = 50 + (Math.sin(rad) * r * 100) / 280;
                  return (
                    <motion.line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${x}%`}
                      y2={`${y}%`}
                      stroke="rgba(34,211,238,0.15)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                    />
                  );
                })}
              </svg>
            </div>

            {/* Floating code snippets */}
            {codeSnippets.map((s, i) => (
              <FloatingBadge
                key={i}
                icon={s.icon}
                label={s.label}
                color={s.color}
                delay={s.delay}
                style={{
                  top: s.top,
                  right: s.right,
                  bottom: s.bottom,
                  left: s.left,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-cyan-400/50 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
