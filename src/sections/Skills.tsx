import React, { useState } from 'react';
import { 
  Code, 
  Binary, 
  Activity, 
  BarChart3, 
  Table, 
  Database, 
  Cpu, 
  Languages, 
  Users,
  CheckCircle
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/skills';

const ICON_MAP: Record<string, React.ElementType> = {
  Code,
  Binary,
  Activity,
  BarChart3,
  Table,
  Database,
  Cpu,
  Languages,
  Users,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = ['ALL', ...SKILL_GROUPS.map((g) => g.category)];

  const filteredGroups = selectedCategory === 'ALL'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter((g) => g.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Categorized Skill Sets
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-3">
            Core analytical tooling, programming languages, BI platforms, and mathematical foundations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20 font-bold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const Icon = ICON_MAP[group.iconName] || Cpu;
            return (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-mono font-bold tracking-wider text-slate-700 dark:text-slate-300">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>VERIFIED COMPETENCY</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
