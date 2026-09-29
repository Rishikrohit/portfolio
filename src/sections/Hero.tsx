import React from 'react';
import { ArrowRight, FileDown, Mail, BarChart3, Database, Award, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { PROFILE } from '../data/profile';
import { SOCIAL_LINKS } from '../data/socialLinks';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      {/* Subtle Glows */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{PROFILE.badge}</span>
            </div>

            {/* Main Headings with high contrast text */}
            <div className="space-y-1.5">
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-medium">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white tracking-tight leading-tight">
                {PROFILE.name}
              </h1>
              <div className="text-xl sm:text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">
                Data Analyst & Business Analyst
              </div>
              <div className="text-xs sm:text-sm font-mono font-semibold text-slate-700 dark:text-slate-300 flex flex-wrap gap-2 pt-2">
                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">Python</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-700 dark:text-cyan-400 font-bold">PostgreSQL</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-cyan-700 dark:text-cyan-400 font-bold">SQL Server</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">Power BI</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">Tableau</span>
                <span className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">Excel</span>
              </div>
            </div>

            {/* Introduction Quote */}
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              "{PROFILE.tagline}"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#featured-projects"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md active:scale-95 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PROFILE.resumeUrl}
                download="Rohit_Kavhale_Resume.pdf"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-700 shadow-xs active:scale-95 transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Links */}
            <div className="pt-2 flex items-center space-x-5 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-semibold">
              <span className="text-xs uppercase tracking-wider text-slate-400">Links:</span>
              
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-cyan-600 dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={SOCIAL_LINKS.tableau}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                aria-label="Tableau Public Profile"
              >
                <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
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

          {/* Right Column: Profile Photo with verified real badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-72 lg:w-80">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-emerald-500 opacity-20 blur-xl" />

              {/* Main Photo Card */}
              <div className="relative rounded-full aspect-square p-2 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 shadow-xl overflow-hidden">
                <img
                  src={PROFILE.photoUrl}
                  alt="Rohit Ashok Kavhale"
                  className="w-full h-full object-cover object-top rounded-full hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
              </div>

              {/* Floating Verified BCA Topper Badge */}
              <div className="absolute -bottom-3 -left-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-md flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">BCA Academic Topper</div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white">
                    9.64 <span className="text-xs font-normal text-slate-500">SGPA</span>
                  </div>
                </div>
              </div>

              {/* Floating SQL Badge */}
              <div className="absolute -top-2 -right-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 shadow-md flex items-center space-x-1.5">
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
