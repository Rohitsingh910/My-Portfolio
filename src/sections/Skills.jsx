import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaJava, FaReact, FaDocker, FaGitAlt, FaGithub, FaLinux, FaAws, FaPython,
} from 'react-icons/fa';
import {
  SiSpring, SiSpringsecurity, SiHibernate, SiMysql, SiMongodb, SiJavascript,
  SiPostman, SiTensorflow, SiHtml5,
} from 'react-icons/si';
import { Lock, Layers3, GitBranch, Component, Code2 } from 'lucide-react';
import { skills, techMarquee } from '../data/portfolio';
import { SectionHeading } from './About';
import { SiPostgresql } from "react-icons/si";

const iconMap = {
  java: FaJava,
  spring: SiSpring,
  springsecurity: SiSpringsecurity,
  hibernate: SiHibernate,
  api: Code2,
  react: FaReact,
  js: SiJavascript,
  html: SiHtml5,
  axios: Component,
  mysql: SiMysql,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  jpa: SiHibernate,
  git: FaGitAlt,
  github: FaGithub,
  docker: FaDocker,
  linux: FaLinux,
  postman: SiPostman,
  aws: FaAws,
  solid: Layers3,
  patterns: Component,
  mvc: GitBranch,
  jwt: Lock,
  oop: Code2,
  tensorflow: SiTensorflow,
  python: FaPython,
  ds: Layers3,
  genai: Code2,
};

const categoryColors = {
  Backend: "#22d3ee",
  Frontend: "#3b82f6",
  Database: "#10b981",
  "Tools & Platforms": "#8b5cf6",
  "Core Concepts": "#f59e0b",
  "DevOps & Cloud": "#06b6d4",
  "AI & Emerging Technologies": "#ec4899",
};

function SkillCategory({ title, items, accentColor, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="
glass-card
rounded-3xl
p-7
border border-white/5
backdrop-blur-xl
transition-all duration-500
hover:-translate-y-1
hover:border-cyan-500/20
hover:shadow-[0_0_40px_rgba(0,212,255,0.08)]
"
    >
      <div className="flex items-center gap-2 mb-5">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
        <h3 className="text-sm font-bold text-white tracking-wide uppercase">{title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map((item) => {
          const Icon = iconMap[item.icon] || Code2;
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              
              
              whileHover={{ y: -3, borderColor: `${item.color}50`, boxShadow: `0 8px 24px ${item.color}15` }}
              className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 cursor-default"
            >
              <motion.div whileHover={{ scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }}>
                <Icon size={26} style={{ color: item.color }} />
              </motion.div>
              <span className="text-xs font-medium text-slate-400 text-center leading-tight">{item.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0a0f1e] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Skills"
            title="Technical Skills"
            subtitle="A focused toolkit for building secure, scalable backend systems and modern full-stack applications."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-12">
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCategory
              key={category}
              title={category}
              items={items}
              accentColor={categoryColors[category]}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden py-6 border-t border-white/5">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0f1e] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0f1e] to-transparent z-10" />
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...techMarquee, ...techMarquee].map((tech, i) => (
              <span
                key={i}
                className="font-mono text-sm text-slate-500 px-4 py-2 border border-white/5 rounded-xl whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
