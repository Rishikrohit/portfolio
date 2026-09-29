import React from 'react';
import { ArrowRight, FileDown, Mail, BarChart3, Award, Code2, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { PROFILE } from '../data/profile';
import { SOCIAL_LINKS } from '../data/socialLinks';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-white dark:bg-[#0b0f19]">
      {/* Background Subtle Tech Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      {/* Atmospheric Soft Light Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to Data Analyst & Business Analyst Roles</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <div className="text-slate-500 dark:text-slate-400 text-sm font-semibold tracking-wide uppercase font-mono">
                Hi, I'm
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] font-display">
                Rohit Ashok Kavhale
              </h1>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 dark:from-cyan-400 dark:to-teal-300 bg-clip-text text-transparent">
                Data Analyst & Business Analyst
              </div>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                { name: 'Python', style: 'bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200' },
                { name: 'PostgreSQL', style: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 font-bold border-cyan-200 dark:border-cyan-500/30' },
                { name: 'SQL Server', style: 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 font-bold border-cyan-200 dark:border-cyan-500/30' },
                { name: 'Power BI', style: 'bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200' },
                { name: 'Tableau', style: 'bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200' },
                { name: 'Excel (Advanced)', style: 'bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200' },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-800 shadow-2xs ${tech.style}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Introduction Statement */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              I analyze business data, identify trends, build interactive KPI dashboards, and turn complex datasets into strategic insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#featured-projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 shadow-md shadow-cyan-600/20 active:scale-95 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PROFILE.resumeUrl}
                download="Rohit_Kavhale_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 shadow-2xs active:scale-95 transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Contact & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-semibold">
              <span className="text-xs uppercase tracking-wider text-slate-400">Links:</span>
              
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={SOCIAL_LINKS.tableau}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                aria-label="Tableau Public Profile"
              >
                <BarChart3 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>Tableau</span>
              </a>

              {SOCIAL_LINKS.linkedin && SOCIAL_LINKS.linkedin !== "ADD_LINKEDIN_URL" && (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              )}

              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="flex items-center space-x-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                aria-label="Email Rohit"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Refined Rounded Portrait with Clean Frosted Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 lg:w-80">
              
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500 via-teal-400 to-indigo-500 opacity-25 blur-xl pointer-events-none" />

              {/* Main Photo Card */}
              <div className="relative rounded-full aspect-square p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden group">
                <img
                  src={PROFILE.photoUrl}
                  alt="Rohit Ashok Kavhale"
                  className="w-full h-full object-cover object-top rounded-full group-hover:scale-103 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Floating Verified BCA Topper Badge */}
              <div className="absolute -bottom-2 -left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-2xl p-3 shadow-lg flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">BCA Academic Topper</div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                    9.64 <span className="text-xs font-medium text-slate-500">SGPA</span>
                  </div>
                </div>
              </div>

              {/* Floating SQL Badge */}
              <div className="absolute -top-1 -right-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 rounded-xl px-3 py-1.5 shadow-md flex items-center space-x-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span className="font-mono text-xs font-bold text-slate-800 dark:text-cyan-300">SQL & Python</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
