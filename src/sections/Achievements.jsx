import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Shield, Award, Briefcase, Code2 } from "lucide-react";
import { achievements } from "../data/portfolio";
import { SectionHeading } from "./About";


const iconMap = {
  trophy: Trophy,
  shield: Shield,
  certificate: Award,
  briefcase: Briefcase,
  code: Code2,
};

function AnimatedCounter({ value, inView }) {
  const [display, setDisplay] = useState("0");
  const isNumeric = /^\d+\+?$/.test(value);

  useEffect(() => {
    if (!inView) return;
    if (!isNumeric) {
      const timer = setTimeout(() => setDisplay(value), 0);
      return () => clearTimeout(timer);
    }
    const hasSuffix = value.includes("+");
    const num = parseInt(value);
    const controls = animate(0, num, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v) + (hasSuffix ? "+" : "")),
    });
    return () => controls.stop();
  }, [inView, value, isNumeric]);

  return <span>{display}</span>;
}

function AchievementCard({ achievement, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = iconMap[achievement.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      className="
relative
glass-card
rounded-3xl
p-8
group
border border-white/5
backdrop-blur-xl
transition-all duration-500
hover:border-cyan-500/20
hover:shadow-[0_0_40px_rgba(0,212,255,0.08)]
"
      style={{ borderColor: `${achievement.color}15` }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 40px ${achievement.color}20`,
          border: `1px solid ${achievement.color}30`,
        }}
      />

      <div className="relative z-10">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
          style={{
            backgroundColor: `${achievement.color}10`,
            border: `1px solid ${achievement.color}25`,
          }}
        >
          <Icon size={26} style={{ color: achievement.color }} />
        </motion.div>

        <h3 className="text-xl font-bold text-white mb-1">
          {achievement.title}
        </h3>
        <p
          className="text-sm font-medium mb-4"
          style={{ color: achievement.color }}
        >
          {achievement.subtitle}
        </p>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {achievement.description}
        </p>

        <div className="pt-4 border-t border-white/5">
          <div className="text-5xl font-extrabold tracking-tight text-white mb-1">
            <AnimatedCounter value={achievement.stat} inView={inView} />
          </div>
          <div className="text-xs text-slate-500 uppercase tracking-wide">
            {achievement.statLabel}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding bg-[#020817] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Achievements"
            title="Recognition & Achievements"
            subtitle="Competitive accomplishments, industry exposure, and milestones that reflect continuous learning and real-world execution."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-9">
          {achievements.map((achievement, i) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
