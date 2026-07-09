import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "./About";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding bg-[#020817] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          subtitle="A strong foundation in computer science and engineering with specialized training in software architectures and intelligent systems."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
          glass-card
          rounded-3xl
          p-5 sm:p-8
          border border-white/5
          hover:border-cyan-500/20
          transition-all duration-500
          hover:shadow-[0_0_40px_rgba(0,212,255,0.08)]
          "
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
              <GraduationCap size={28} className="text-cyan-400" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                {education.degree}
              </h3>

              <p className="text-cyan-400">
                {education.field}
              </p>
            </div>
          </div>

          <div className="space-y-4 text-slate-400">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-white">
                {education.institution}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Calendar size={16} className="text-cyan-400" />
              <span>{education.period}</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-cyan-400" />
              <span>{education.location}</span>
            </div>

            <div className="pt-4 border-t border-white/5">
              <span className="text-xs sm:text-sm text-slate-500">CGPA</span>

              <h4 className="text-3xl sm:text-4xl font-black text-white mt-1">
                {education.cgpa}
              </h4>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs sm:text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}