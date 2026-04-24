/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  ExternalLink, 
  ChevronRight, 
  Download,
  ArrowUp,
  MapPin,
  Send,
  MessageSquare,
  Globe,
  Terminal,
  Cpu,
  Palette
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import profileImage from "./assets/profile.png";

// --- Components ---

const SectionHeading = ({ children, icon: Icon, subtitle }: { children: React.ReactNode, icon: any, subtitle?: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-emerald-500/10 rounded-lg">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>
      <h2 className="text-3xl md:text-4xl">{children}</h2>
    </div>
    {subtitle && <p className="text-slate-400 max-w-2xl">{subtitle}</p>}
  </div>
);



export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (event?: React.MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);
  };

  const experiences = [
    {
      title: "IT-Systemadministrator",
      company: "DIPF | Leibniz-Institut für Bildungsforschung und Bildungsinformation",
      location: "Berlin",
      period: "05/2025 - Heute",
      tasks: [
        "Installation, Wartung und Konfiguration von Hard- und Software.",
        "Bearbeitung von IT-Support-Anfragen (1st- und 2nd-Level-Support).",
        "Analyse und Lösung von Netzwerk- und Systemproblemen.",
        "Verwaltung von Benutzerkonten und Zugriffsrechten (Active Directory).",
        "Mitarbeit bei IT-Projekten und Dokumentation von IT-Prozessen."
      ]
    },
    {
      title: "Fachinformatiker für Systemintegration – IT-Support",
      company: "SBE network solutions GmbH",
      location: "Berlin",
      period: "08/2024 - 04/2025",
      tasks: [
        "Installation, Wartung und Konfiguration komplexer IT-Systeme.",
        "Systemweites Monitoring und Fehlerbehebung im Netzwerk.",
        "First- und Second-Level Support für Unternehmenskunden.",
        "Dokumentation technischer Prozesse und Wissensdatenbankpflege."
      ]
    },
    {
      title: "Technischer Leiter – IT-Support-Spezialist",
      company: "Iran Semiconductor Industrial Company",
      location: "Teheran",
      period: "03/2008 - 03/2019",
      tasks: [
        "Leitung der Abteilung für Qualitätskontrolle und Optimierung.",
        "Technischer Support und Wartung für Mühlbauer-Maschinen.",
        "Entwicklung und Implementierung von Programmen zur Automatisierung.",
        "Schulung von Mitarbeitern in der Nutzung technischer Geräte."
      ]
    }
  ];

  const education = [
    {
      title: "Fullstack-Webentwickler",
      institution: "DCI Digital Career Institute GmbH",
      period: "03/2023 - 05/2024",
      description: "Intensivfortbildung im Bereich moderne Webtechnologien."
    },
    {
      title: "Python & Elektrotechnik",
      institution: "Studio2B GmbH",
      period: "08/2022 - 12/2022",
      description: "Spezialisierung auf IT-Grundlagen und Automatisierung."
    }
  ];

  const skillGroups = [
    {
      title: "Development",
      icon: Code2,
      skills: ["React.js", "Node.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "MongoDB", "Express"]
    },
    {
      title: "System & Network",
      icon: Cpu,
      skills: ["TCP/IP", "DNS", "DHCP", "VPN", "Active Directory", "VMware", "VirtualBox", "PowerShell", "Firewalls"]
    },
    {
      title: "Design & Tools",
      icon: Palette,
      skills: ["Adobe Photoshop", "CorelDraw", "Logo Design", "UI/UX Concepts", "ITSM Tools", "RDP"]
    }
  ];

  const projects = [
    {
      title: "SchulPlaner OS",
      description: "Web-App für Schulorganisation mit Authentifizierung, MongoDB-Datenbank sowie E-Mail- und Push-Benachrichtigungen.",
      tags: ["React", "TypeScript", "Express", "MongoDB", "JWT"],
      link: "https://vertretungsplan-9c59.onrender.com",
      preview: "https://vertretungsplan-9c59.onrender.com"
    },
    {
      title: "CryptSend",
      description: "Sichere File-Sharing-Plattform mit React-Frontend, Express-Backend, PostgreSQL/Neon und Cloudflare R2 Storage.",
      tags: ["React", "TypeScript", "Express", "PostgreSQL", "R2"],
      link: "https://crypt-send.vercel.app",
      preview: "https://crypt-send.vercel.app"
    },
    {
      title: "BahnZeit",
      description: "Moderne Web-App für Bahnzeiten und Reiseinformationen, gebaut mit React, TypeScript, Vite und Tailwind CSS.",
      tags: ["React", "TypeScript", "Vite", "Tailwind"],
      link: "https://bahn-zeit.vercel.app",
      preview: "https://bahn-zeit.vercel.app"
    }
  ];

  const socialLinks = {
    github: "https://github.com/RezaHeshmati30",
    linkedin: "https://www.linkedin.com/in/reza-heshmati-28a177b0"
  };

  return (
    <div className="min-h-screen">
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 w-full z-50 border-b transition-[padding,background-color,box-shadow,border-color] duration-300 ${scrolled ? "py-4 bg-slate-950/85 border-slate-800/70 shadow-lg shadow-slate-950/20 backdrop-blur-md" : "py-6 bg-transparent border-transparent shadow-none"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#hero"
            onClick={scrollToTop}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold text-white flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            aria-label="Zur Startseite springen"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center text-slate-900">RH</div>
            <span className="hidden sm:inline">Reza Heshmati</span>
          </motion.a>
          <div className="flex gap-8 text-sm font-medium">
            {["Über mich", "Erfahrung", "Skills", "Projekte", "Kontakt"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm font-medium rounded-full mb-6 border border-emerald-500/20">
                  Verfügbar für neue Herausforderungen
                </span>
                <h1 className="text-5xl md:text-7xl mb-6 lg:leading-tight">
                  Gestaltung der digitalen <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                    Infrastruktur von morgen.
                  </span>
                </h1>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  IT-Spezialist & Fullstack-Webentwickler aus Berlin. 
                  Ich kombiniere tiefes Systemverständnis mit moderner Softwareentwicklung, 
                  um robuste und skalierbare Lösungen zu schaffen.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <a href="#kontakt" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-xl transition-all hover:scale-105 flex items-center gap-2">
                    Kontaktieren <MessageSquare className="w-5 h-5" />
                  </a>
                  <button className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 font-bold rounded-xl transition-all flex items-center gap-2">
                    Lebenslauf Laden <Download className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex-shrink-0"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 relative z-10">
                <div className="absolute inset-0 bg-emerald-500 rounded-3xl rotate-6 -z-10 opacity-20" />
                <div className="absolute inset-0 bg-blue-500 rounded-3xl -rotate-3 -z-10 opacity-20" />
                <div className="w-full h-full bg-slate-900 border-2 border-slate-800 rounded-3xl overflow-hidden flex items-center justify-center relative">
                  <div className="text-slate-700 flex flex-col items-center">
                    <img 
                      src={profileImage} 
                      alt="Portrait von Reza Heshmati" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-2 bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-lg text-center">
                      <p className="text-xs font-bold text-white">Reza Heshmati</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- About Me --- */}
      <section id="über-mich" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <SectionHeading icon={Globe} subtitle="Wer ich bin und wofür ich stehe">
            Über mich
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-slate-400">
              <p>
                Mit über 15 Jahren Erfahrung in der IT-Welt habe ich die Entwicklung von klassischen Systemen bis hin zu modernen Cloud- und Web-Architekturen miterlebt und aktiv mitgestaltet.
              </p>
              <p>
                Mein Weg führte mich von der technischen Leitung in industriellen Umgebungen bis hin zur modernen Webentwicklung in Deutschland. Diese Kombination aus fundiertem Hardware-Wissen und moderner Software-Expertise erlaubt es mir, Probleme ganzheitlich zu betrachten.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <h4 className="text-emerald-400 text-2xl mb-1">15+</h4>
                  <p className="text-sm">Jahre Erfahrung</p>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <h4 className="text-blue-400 text-2xl mb-1">50+</h4>
                  <p className="text-sm">IT-Projekte</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
               <div className="glass-morphism p-6 rounded-2xl glow-hover transition-all">
                  <h3 className="text-xl mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-400" /> Standort
                  </h3>
                  <p className="text-slate-400">Berlin, Deutschland</p>
               </div>
               <div className="glass-morphism p-6 rounded-2xl glow-hover transition-all">
                  <h3 className="text-xl mb-4 flex items-center gap-2">
                    <Download className="w-5 h-5 text-emerald-400" /> Sprachen
                  </h3>
                  <div className="flex gap-4">
                    <div className="text-sm">
                      <p className="font-bold text-white">Deutsch</p>
                      <p className="text-slate-500">B2 Niveau</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-bold text-white">Farsi</p>
                      <p className="text-slate-500">Muttersprache</p>
                    </div>
                    <div className="text-sm">
                      <p className="font-bold text-white">Englisch</p>
                      <p className="text-slate-500">A2 Niveau</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Experience Section --- */}
      <section id="erfahrung" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading icon={Briefcase} subtitle="Mein beruflicher Werdegang im Überblick">
            Berufserfahrung
          </SectionHeading>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-1 mb-4 md:mb-0">
                    <p className="text-emerald-400 font-bold font-display">{exp.period}</p>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </p>
                  </div>
                  <div className="md:col-span-4 glass-morphism p-8 rounded-2xl hover:border-emerald-500/30 transition-all">
                    <h3 className="text-2xl mb-1">{exp.title}</h3>
                    <p className="text-emerald-400/80 mb-6 font-medium">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.tasks.map((task, tid) => (
                        <li key={tid} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <ChevronRight className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl mb-8 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-400" /> Bildungsweg
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
               {education.map((edu, idx) => (
                 <div key={idx} className="glass-morphism p-6 rounded-2xl border-l-4 border-l-blue-500">
                    <p className="text-blue-400 text-sm font-bold mb-2">{edu.period}</p>
                    <h4 className="text-lg mb-1">{edu.title}</h4>
                    <p className="text-slate-400 text-sm">{edu.institution}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <SectionHeading icon={Terminal} subtitle="Meine technischen Werkzeuge und Spezialisierungen">
            Skills & Expertise
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-morphism p-8 rounded-3xl"
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                  <group.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl mb-6">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-800/50 hover:bg-emerald-500/10 border border-slate-700/50 hover:border-emerald-500/30 rounded-full text-sm transition-all duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projekte" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading icon={Globe} subtitle="Einige meiner Arbeiten und Open-Source Experimente">
            Ausgewählte Projekte
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-morphism group rounded-3xl overflow-hidden"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live öffnen`}
                  className="block h-48 bg-slate-950 relative overflow-hidden border-b border-slate-800/70"
                >
                  <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 border-b border-slate-800/80 bg-slate-950/95 px-4 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-3 truncate text-[11px] text-slate-500">{project.link.replace("https://", "")}</span>
                  </div>
                  <iframe
                    src={project.preview}
                    title={`${project.title} Vorschau`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="absolute left-0 top-9 h-[520px] w-[150%] origin-top-left scale-[0.67] border-0 bg-slate-900 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-3 right-3 rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs font-bold text-emerald-300 opacity-0 transition-opacity group-hover:opacity-100">
                    Live öffnen
                  </div>
                </a>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-slate-800 rounded font-bold text-slate-400">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl mb-2 group-hover:text-emerald-400 transition-colors uppercase font-display">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live öffnen`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    Projekt öffnen <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="kontakt" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto glass-morphism rounded-[2.5rem] overflow-hidden grid md:grid-cols-2">
            <div className="p-12 md:p-16 bg-emerald-500 text-slate-950">
              <h2 className="text-4xl md:text-5xl mb-8 text-slate-950">Lass uns etwas Großartiges schaffen.</h2>
              <p className="text-lg mb-12 text-slate-900/70 leading-relaxed font-medium">
                Ich bin immer offen für Gespräche über neue Projekte, kreative Ideen oder Möglichkeiten, Teil Ihrer Vision zu werden.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-950/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase opacity-60">E-Mail</p>
                    <p className="text-lg font-bold">heshmati.rz@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-950/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase opacity-60">Telefon</p>
                    <p className="text-lg font-bold">0176 / 41102079</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub-Profil von Reza Heshmati öffnen"
                  className="w-12 h-12 bg-slate-950/10 rounded-xl flex items-center justify-center hover:bg-slate-950/20 transition-all"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn-Profil von Reza Heshmati öffnen"
                  className="w-12 h-12 bg-slate-950/10 rounded-xl flex items-center justify-center hover:bg-slate-950/20 transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="p-12 md:p-16">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold uppercase text-slate-500 mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Ihr Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase text-slate-500 mb-2">E-Mail</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Ihre E-Mail" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase text-slate-500 mb-2">Nachricht</label>
                  <textarea rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Wie kann ich helfen?"></textarea>
                </div>
                <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
                  Nachricht senden <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-slate-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm italic">
            © {new Date().getFullYear()} Reza Heshmati. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="impressum.html" className="hover:text-white transition-colors">Impressum</a>
            <a href="datenschutz.html" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {scrolled && (
          <motion.button
            type="button"
            onClick={() => scrollToTop()}
            aria-label="Zurück zum Seitenanfang"
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.9 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 transition-colors hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
