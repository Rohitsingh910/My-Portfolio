import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { experiences } from "../data/portfolio";
import { SectionHeading } from "./About";

function TimelineItem({ exp, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* Timeline line segment */}
      {!isLast && (
        <div className="absolute left-1/2 top-12 -translate-x-1/2 w-px h-full bg-gradient-to-b from-cyan-400/30 via-cyan-400/10 to-transparent hidden md:block" />
      )}

      <div className="grid md:grid-cols-2 gap-8 items-center mb-10 md:mb-24 relative">
        {/* Content - alternating sides */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`${isEven ? "md:order-1" : "md:order-2"}`}
        >
          <div
            className="
glass-card
rounded-3xl
p-5 sm:p-6
border border-white/5
transition-all duration-500
hover:border-cyan-400/20
hover:-translate-y-1
hover:shadow-[0_0_40px_rgba(0,212,255,0.08)]
"
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="
text-[11px]
font-medium
tracking-wide
px-3 py-1.5
rounded-full
"
                style={{ backgroundColor: `${exp.color}10`, color: exp.color }}
              >
                {exp.period}
              </span>
              <span className="text-xs text-slate-500">{exp.duration}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">{exp.role}</h3>
            <p
              className="text-sm sm:text-base font-semibold mb-3"
              style={{ color: exp.color }}
            >
              {exp.company}
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mb-5">
              {exp.description}
            </p>
            <div className="space-y-3">
              {exp.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-500"
                >
                  <span
                    className="mt-1 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: exp.color }}
                  />
                  {h}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center node */}
        <div
          className={`hidden md:flex items-center justify-center ${isEven ? "md:order-2" : "md:order-1"}`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative"
          >
            <div
              className="
  w-14 h-14
  rounded-full
  glass-card
  flex items-center justify-center
  border-2
  shadow-[0_0_20px_rgba(0,212,255,0.08)]
  "
              style={{ borderColor: `${exp.color}40` }}
            >
              <Briefcase size={20} style={{ color: exp.color }} />
            </div>
          </motion.div>
        </div>

        {/* Mobile node */}
        <div className="md:hidden flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center border-2"
            style={{ borderColor: `${exp.color}40` }}
          >
            <Briefcase size={16} style={{ color: exp.color }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding bg-[#0a0f1e] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Experience"
            title="Professional & Project Experience"
            subtitle="Industry exposure and production-oriented projects focused on backend development, microservices, and software engineering."
          />
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.id}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
