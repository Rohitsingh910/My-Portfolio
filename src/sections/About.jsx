import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Shield, Layers, Brain } from "lucide-react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";

const featureCards = [
  {
    icon: Server,
    title: "Backend Architecture",
    desc: "Designing layered, maintainable systems with Spring Boot, clean service boundaries, and scalable data models.",
    color: "#22d3ee",
  },
  {
    icon: Shield,
    title: "Security & Auth",
    desc: "Implementing JWT stateless auth, OTP workflows, and RBAC with Spring Security.",
    color: "#8b5cf6",
  },
  {
    icon: Layers,
    title: "Full Stack Integration",
    desc: "Bridging React frontends with Spring Boot REST APIs using clean DTO contracts and Axios.",
    color: "#3b82f6",
  },
  {
    icon: Brain,
    title: "AI & Emerging Technologies",
    desc: "Applied generative AI and machine learning concepts during internships using TensorFlow and Python.",
    color: "#f59e0b",
  },
];

const stats = [
  { val: "3+", label: "Projects Built" },
  { val: "2", label: "Internships" },
  { val: "4+", label: "Certifications" },
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-4">
        {eyebrow}
      </span>
      <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

export { SectionHeading };

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding bg-[#020817] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="About"
            title="About Me"
            subtitle="Backend-focused engineer passionate about secure APIs, scalable architecture, and modern full-stack applications."
          />
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Image placeholder (professional frame) */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="
relative
rounded-3xl
overflow-hidden
glass-card
glow-border
w-full
max-w-[450px]
min-h-[620px]
mx-auto
border border-cyan-500/10
px-4
"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0a0f1e] to-[#020817]">
                  <div className="text-center">
                    <div
                      className="
w-44 h-56
sm:w-52 sm:h-64
lg:w-64 lg:h-[300px]
mx-auto
mb-7
rounded-3xl
overflow-hidden
border-2 border-cyan-500
shadow-[0_0_50px_rgba(34,211,238,0.3)]
"
                    >
                      <img
                        src={personalInfo.avatar}
                        alt="Profile Pic"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <h3
                      className="
text-xl
sm:text-2xl
font-bold
text-white
mb-2
text-center
leading-tight
px-4
"
                    >
                      {personalInfo.fullName}
                    </h3>

                    <p
                      className="
text-cyan-400
text-xs
sm:text-sm
text-center
leading-relaxed
px-4
"
                    >
                      {personalInfo.title}
                      <br />
                      {personalInfo.subtitle}
                    </p>

                    {/* Social Icons */}
                    <div className="flex justify-center items-center gap-7 mt-8">
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:scale-110"
                      >
                        <FaGithub className="text-2xl text-slate-400 hover:text-white" />
                      </a>

                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:scale-110"
                      >
                        <FaLinkedin className="text-2xl text-slate-400 hover:text-cyan-400" />
                      </a>

                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="transition-all duration-300 hover:scale-110"
                      >
                        <Mail className="text-2xl text-slate-400 hover:text-cyan-400" />
                      </a>
                    </div>

                    {/* Open to Opportunities */}
                    <div className="flex justify-center mt-8">
                      <span
                        className="
    inline-flex items-center gap-2
    px-5 py-2.5
    rounded-full
    border border-green-500/20
    bg-green-500/10
    text-green-400
    text-sm
    font-medium
    shadow-[0_0_20px_rgba(34,197,94,0.15)]
    "
                      >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Open to Opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p className="text-lg">
                Backend-focused full stack developer building secure and
                scalable applications using Java, Spring Boot, React, and MySQL.
              </p>
              <p>
                Passionate about clean architecture, authentication, exception
                handling, and maintainable code with a production-oriented
                mindset.
              </p>
              <p>
                Completed internships in Generative AI and Machine Learning,
                gaining exposure to intelligent systems and modern software
                workflows.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featureCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: `0 0 20px ${card.color}20` }}
                  className="
glass-card
rounded-2xl
p-5
border border-white/5
transition-all duration-500
hover:-translate-y-1
hover:border-cyan-500/20
hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]
"
                >
                  <card.icon
                    size={18}
                    style={{ color: card.color }}
                    className="mb-2"
                  />
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center p-4 glass rounded-xl border border-cyan-400/10"
                >
                  <div className="text-2xl font-black text-gradient mb-1">
                    {stat.val}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
