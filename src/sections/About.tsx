import React from 'react';
import { User, Database, BarChart2, Layers } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { StatCounter } from '../components/StatCounter';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Transforming Complex Data Into Strategic Decisions
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Photo Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-xl relative bg-white dark:bg-slate-900">
                <img
                  src={PROFILE.photoUrl}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-left">
                    <div className="text-white font-bold text-sm">{PROFILE.name}</div>
                    <div className="text-cyan-400 text-xs">{PROFILE.location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              Aspiring Data Analyst & Business Analyst with practical experience in Exploratory Data Analysis & Business Intelligence
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              {PROFILE.professionalSummary}
            </p>

            {/* Core Values Badge Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-2.5">
                <Database className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Relational Modeling</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-2.5">
                <BarChart2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Dashboard UX Design</span>
              </div>
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-2.5">
                <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Exploratory EDA</span>
              </div>
            </div>
          </div>

        </div>

        {/* Documented Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {PROFILE.statistics.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-colors shadow-sm dark:shadow-lg text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-600 dark:text-cyan-400">
                <StatCounter
                  end={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
