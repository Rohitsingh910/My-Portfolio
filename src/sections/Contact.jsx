import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send, CheckCircle, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeading } from "./About";
import { personalInfo } from "../data/portfolio";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#22d3ee",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: personalInfo.github.replace("https://", ""),
    href: personalInfo.github,
    color: "#8b5cf6",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: personalInfo.linkedin.replace("https://www.", "").replace("https://", ""),
    href: personalInfo.linkedin,
    color: "#3b82f6",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
    color: "#f59e0b",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
    color: "#10b981",
  },
];

function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  textarea = false,
  required = false,
}) {
  const [focused, setFocused] = useState(false);
  const Component = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        <Component
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          rows={textarea ? 4 : undefined}
          className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none transition-all duration-300 resize-none"
          style={{
            borderColor: focused ? "#22d3ee60" : undefined,
            boxShadow: focused ? "0 0 20px rgba(34,211,238,0.1)" : "none",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-[#0a0f1e] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Contact"
            title="Let's Connect"
            subtitle="Actively seeking Java Full Stack, Backend, and Software Engineer opportunities. Feel free to reach out for roles, collaborations, or technical discussions."
          />
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-6">
          {/* Left: Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3, x: 4 }}
                className="flex items-center gap-3 glass-card rounded-xl p-4 group transition-all duration-300"
                style={{ borderColor: `${link.color}15` }}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: `${link.color}10`,
                    border: `1px solid ${link.color}25`,
                  }}
                >
                  <link.icon size={18} style={{ color: link.color }} />
                </motion.div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">
                    {link.label}
                  </div>
                  <div className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">
                    {link.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-xl p-5 border border-cyan-400/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <motion.span
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">
                  Available Now
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Actively seeking Java Full Stack, Backend, and Software Engineer
                opportunities. Open to full-time roles and collaborative
                projects.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 space-y-4"
          >
            <FormInput
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Email Address"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              textarea
              required
            />

            <motion.button
              type="submit"
              whileHover={{
                y: -2,
                boxShadow: "0 0 30px rgba(34,211,238,0.35)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#020817] font-bold text-sm py-3 rounded-lg transition-all duration-300"
            >
              {sent ? (
                <>
                  <CheckCircle size={16} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
