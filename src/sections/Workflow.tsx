import React from 'react';
import { 
  FileSpreadsheet, 
  Sparkles, 
  Search, 
  Database, 
  PieChart, 
  LayoutDashboard, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';

const STEPS = [
  {
    step: "01",
    title: "Raw Data",
    icon: FileSpreadsheet,
    desc: "Ingesting relational tables, CSV files, and enterprise data streams.",
  },
  {
    step: "02",
    title: "Data Cleaning",
    icon: Sparkles,
    desc: "Handling nulls, duplicates, invalid formats, and data discrepancies.",
  },
  {
    step: "03",
    title: "Exploratory Data Analysis",
    icon: Search,
    desc: "Uncovering distributions, correlation matrices, and anomaly patterns.",
  },
  {
    step: "04",
    title: "SQL Analysis",
    icon: Database,
    desc: "Querying with multi-table JOINs, subqueries, and window functions.",
  },
  {
    step: "05",
    title: "Visualization",
    icon: PieChart,
    desc: "Mapping variables to intuitive charts with optimal visual hierarchy.",
  },
  {
    step: "06",
    title: "Dashboard",
    icon: LayoutDashboard,
    desc: "Structuring interactive Tableau and Power BI views with dynamic slicers.",
  },
  {
    step: "07",
    title: "Business Insights",
    icon: TrendingUp,
    desc: "Translating data findings into actionable strategic recommendations.",
  },
];

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How I Work With Data
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-3">
            A structured, analytical pipeline to convert unstructured raw datasets into strategic business decisions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative group p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-200 dark:border-cyan-500/20">
                      STEP {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-500/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {index < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-400 dark:text-slate-600 pointer-events-none">
                    <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-cyan-600 transition-colors" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
