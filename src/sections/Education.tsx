import React from 'react';
import { GraduationCap, Award, Calendar, Landmark } from 'lucide-react';
import { EDUCATION_LIST } from '../data/experience';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-3">
            Academic foundation in computer applications, analytical theory, relational systems, and software engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-all shadow-sm dark:shadow-xl space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/80 pb-5">
                <div>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.sgpa}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-300 flex items-center space-x-2 mt-1">
                    <Landmark className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>{edu.university}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 self-start sm:self-center bg-slate-50 dark:bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{edu.duration}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {edu.highlight}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-slate-400 text-[10px]">1st Year SGPA</div>
                  <div className="text-slate-800 dark:text-white font-bold text-sm">9.45</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-slate-400 text-[10px]">2nd Year SGPA</div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">9.64</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center col-span-2 sm:col-span-1">
                  <div className="text-slate-400 text-[10px]">Class Standing</div>
                  <div className="text-cyan-600 dark:text-cyan-400 font-bold text-sm">Academic Topper</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
