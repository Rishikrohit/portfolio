import React from 'react';
import { BarChart3, ExternalLink, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/socialLinks';

export const TableauSection: React.FC = () => {
  return (
    <section id="tableau" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Interactive Dashboards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tableau Public Portfolio
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-3">
            Exploratory visual analytics, KPI scorecards, and multi-dimensional sales & customer behavior dashboards.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Showcase Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-sm dark:shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                <span>Featured Tableau Viz</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Sales & Customer Analytics Dashboard
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                A two-part interactive Tableau project analyzing retail superstore performance. Features dynamic KPI tracking, regional sales breakdowns, state/city drills, and customer purchasing patterns.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Interactive Slicers: Year, Category, Region, State, City</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Metrics: Sales, Profit, Quantity, Customer Lifetime Value</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Container-based responsive layout with customized tooltips</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://public.tableau.com/app/profile/rohit.kavhale/viz/SalesCustomerDashboards_17886968492880/SalesDashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md active:scale-95 transition-all"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>Open Live Tableau Dashboard</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <a
                  href={SOCIAL_LINKS.tableau}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Explore Full Tableau Profile</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Preview Element */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-md space-y-4 font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-500">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] text-slate-400">public.tableau.com</span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Superstore Net Sales</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">$2,297,201</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-900 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full w-[78%]" />
                  </div>

                  <div className="flex justify-between items-center text-xs pt-2">
                    <span className="text-slate-600 dark:text-slate-400">Total Profit Margin</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">12.5%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-900 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-sky-400 h-2 rounded-full w-[64%]" />
                  </div>

                  <div className="pt-4 text-[11px] text-slate-500 dark:text-slate-500 leading-normal border-t border-slate-200 dark:border-slate-900">
                    Directly integrated with Tableau Public. Interactive filters across Year, Category, Region, State, and City.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
