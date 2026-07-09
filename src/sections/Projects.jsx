import { motion, AnimatePresence, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, CheckCircle2, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./About";

function ProjectCard({ project, index, onPreview }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative glass-card rounded-2xl overflow-hidden"
    >
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
        <motion.div
          className="h-full w-1/3"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          }}
          animate={{ x: ["-100%", "400%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
        />
      </div>

      {/* Mouse tracking glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at center, ${project.color}10, transparent 70%)`,
        }}
      />

      <div className="relative z-10 p-5 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span
              className="inline-block text-xs font-mono px-2.5 py-1 rounded-full mb-3 border"
              style={{
                color: project.color,
                borderColor: `${project.color}30`,
                backgroundColor: `${project.color}08`,
              }}
            >
              {project.type}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400">{project.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {project.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.3 + i * 0.05 }}
              className="flex items-start gap-2"
            >
              <CheckCircle2
                size={14}
                style={{ color: project.color }}
                className="mt-0.5 flex-shrink-0"
              />
              <span className="text-xs text-slate-500">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {/* Code */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, borderColor: `${project.color}60` }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto justify-center flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-lg text-sm text-slate-300 hover:text-white transition-all duration-300"
          >
            <FaGithub size={15} />
            Code
          </motion.a>

          {/* Preview */}
          <motion.button
            onClick={onPreview}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto justify-center flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-cyan-400 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
          >
            <ExternalLink size={15} />
            Preview Image
          </motion.button>

          {/* Live Demo */}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -2,
                boxShadow: `0 0 20px ${project.color}30`,
              }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto justify-center flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
              style={{
                backgroundColor: `${project.color}15`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}
            >
              <ExternalLink size={15} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [previewProject, setPreviewProject] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setPreviewProject(null);
      }
    };

    if (previewProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [previewProject]);

  return (
    <section
      id="projects"
      className="section-padding bg-[#020817] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Projects"
            title="Featured Projects"
            subtitle="Full Stack and AI/ML applications showcasing secure backends, robust APIs, and intelligent data systems."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onPreview={() => setPreviewProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Global Preview Modal */}
      <AnimatePresence>
        {previewProject && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setPreviewProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full max-h-[85vh] overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#0a0f1e]/80 shadow-[0_0_50px_rgba(34,211,238,0.15)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0d1530]/90">
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {previewProject.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {previewProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setPreviewProject(null)}
                  className="p-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/30 bg-white/5 hover:bg-cyan-400/10 transition-all duration-300"
                  aria-label="Close Preview"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Body / Image Scroll */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#020817]/90 flex items-center justify-center min-h-[300px]">
                <img
                  src={previewProject.image}
                  alt={previewProject.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg border border-white/5"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
