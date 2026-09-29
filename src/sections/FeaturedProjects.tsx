import { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  TrendingUp, 
  FileText, 
  Presentation, 
  Eye,
  Download
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { FEATURED_PROJECTS } from '../data/featuredProjects';
import { FeaturedProject } from '../types';

export const FeaturedProjects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<FeaturedProject | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const handleOpenModal = (project: FeaturedProject, imageIdx: number = 0) => {
    setActiveModalProject(project);
    setActiveImageIndex(imageIdx);
  };

  return (
    <section id="featured-projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Real portfolio projects with verified dashboard screenshots, SQL analysis presentations, and exploratory data analysis reports.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs"
            >
              <div>
                {/* Project Screenshot / Visual Preview */}
                <div className="relative h-56 bg-slate-100 dark:bg-slate-950 overflow-hidden border-b border-slate-200 dark:border-slate-800">
                  {project.imageUrl ? (
                    <div className="w-full h-full relative group/img">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500 cursor-pointer"
                        onClick={() => handleOpenModal(project, 0)}
                      />
                      <div 
                        onClick={() => handleOpenModal(project, 0)}
                        className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                      >
                        <span className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-lg backdrop-blur-xs">
                          <Eye className="w-3.5 h-3.5" />
                          <span>View {project.images && project.images.length > 1 ? `${project.images.length} Images` : 'Project'}</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div 
                      className="w-full h-full bg-gradient-to-br from-slate-100 via-cyan-50/60 to-emerald-50/40 dark:from-slate-850 dark:to-slate-950 p-6 flex flex-col justify-between cursor-pointer"
                      onClick={() => handleOpenModal(project, 0)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-400 border border-slate-200 dark:border-slate-800">
                          {project.featuredBadge}
                        </span>
                        <div className="flex items-center text-xs text-slate-500 font-mono space-x-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</div>
                        <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">{project.role}</div>
                      </div>
                    </div>
                  )}

                  {/* Badge over screenshot */}
                  {project.imageUrl && (
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-950/85 text-white backdrop-blur-md border border-white/20 shadow-md">
                        {project.featuredBadge}
                      </span>
                      {project.images && project.images.length > 1 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-cyan-600/90 text-white backdrop-blur-md shadow-sm">
                          {project.images.length} Views
                        </span>
                      )}
                    </div>
                  )}
                  {project.imageUrl && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-200 bg-slate-950/85 backdrop-blur-md">
                        {project.duration}
                      </span>
                    </div>
                  )}
                </div>

                {/* Multiple Images Thumbnail Preview Bar (for Tableau / multi-image projects) */}
                {project.images && project.images.length > 1 && (
                  <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 overflow-x-auto">
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider shrink-0">Views:</span>
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOpenModal(project, idx)}
                        className="relative rounded-md overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-cyan-500 transition-colors shrink-0 w-12 h-8 group/thumb"
                        title={`View Dashboard ${idx + 1}`}
                      >
                        <img src={img} alt={`Dashboard View ${idx + 1}`} className="w-full h-full object-cover" />
                        <span className="absolute inset-0 bg-slate-950/30 group-hover/thumb:bg-transparent transition-colors" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Card Body */}
                <div className="p-6">
                  <h3 
                    onClick={() => handleOpenModal(project, 0)}
                    className="text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                    Role: {project.role}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    "{project.description}"
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 mb-5 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">{m.label}</div>
                        <div className="text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tools Used */}
                  <div>
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Tools & Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2.5 mt-4">
                <button
                  onClick={() => handleOpenModal(project, 0)}
                  className="text-xs font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 flex items-center space-x-1 py-1"
                >
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Tableau Public Live Link */}
                  {project.tableauUrl && (
                    <a
                      href={project.tableauUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-xs"
                      title="View Live Tableau Dashboard"
                    >
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>Tableau</span>
                    </a>
                  )}

                  {/* SQL PPT Presentation */}
                  {project.pptUrl && (
                    <a
                      href={project.pptUrl}
                      download="sql-bookstore-analysis.pptx"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white transition-colors shadow-xs"
                      title="Download SQL Project Presentation (.pptx)"
                    >
                      <Presentation className="w-3.5 h-3.5" />
                      <span>Download PPT</span>
                    </a>
                  )}

                  {/* Customer Churn PDF Document */}
                  {project.documentUrl && (
                    <a
                      href={project.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition-colors shadow-xs"
                      title="View Customer Churn PDF Report"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>View PDF</span>
                    </a>
                  )}

                  {/* GitHub Repository */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white transition-colors shadow-xs border border-slate-700"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View */}
        {activeModalProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <div className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {activeModalProject.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {activeModalProject.role} • {activeModalProject.duration}
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 text-lg leading-none"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Modal Image Carousel / Gallery (if multiple images or single image) */}
              {activeModalProject.images && activeModalProject.images.length > 0 ? (
                <div className="space-y-3">
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md bg-slate-950">
                    <img
                      src={activeModalProject.images[activeImageIndex]}
                      alt={`${activeModalProject.title} View ${activeImageIndex + 1}`}
                      className="w-full max-h-96 object-contain mx-auto"
                    />

                    {/* Left/Right Carousel Arrows if more than 1 image */}
                    {activeModalProject.images.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : activeModalProject.images!.length - 1))}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors shadow-lg border border-white/20"
                          aria-label="Previous view"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setActiveImageIndex((prev) => (prev < activeModalProject.images!.length - 1 ? prev + 1 : 0))}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors shadow-lg border border-white/20"
                          aria-label="Next view"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-950/80 text-white text-xs font-mono border border-white/20 backdrop-blur-xs">
                          {activeImageIndex + 1} of {activeModalProject.images.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Row */}
                  {activeModalProject.images.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-1">
                      {activeModalProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative rounded-lg overflow-hidden border-2 transition-all w-20 h-14 shrink-0 ${
                            activeImageIndex === idx 
                              ? 'border-cyan-500 ring-2 ring-cyan-500/30' 
                              : 'border-slate-300 dark:border-slate-700 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : activeModalProject.imageUrl ? (
                <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
                  <img
                    src={activeModalProject.imageUrl}
                    alt={activeModalProject.title}
                    className="w-full max-h-72 object-cover object-top"
                  />
                </div>
              ) : null}

              {/* Modal Body Content */}
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                    Project Overview
                  </h4>
                  <p className="leading-relaxed">{activeModalProject.description}</p>
                </div>

                {activeModalProject.techniques && (
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Key SQL Techniques
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.techniques.map((t: string) => (
                        <span key={t} className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs border border-slate-200 dark:border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeModalProject.filters && (
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Interactive Slicers & Dynamic Filters
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeModalProject.filters.map((f: string) => (
                        <span key={f} className="px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 text-xs">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeModalProject.results && (
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                      Documented Outcomes & Impact
                    </h4>
                    <ul className="space-y-1.5">
                      {activeModalProject.results.map((r: string, idx: number) => (
                        <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-end gap-3">
                {activeModalProject.pptUrl && (
                  <a
                    href={activeModalProject.pptUrl}
                    download="sql-bookstore-analysis.pptx"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold bg-amber-600 text-white hover:bg-amber-500 shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download SQL Presentation (.pptx)</span>
                  </a>
                )}

                {activeModalProject.documentUrl && (
                  <a
                    href={activeModalProject.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-bold bg-rose-600 text-white hover:bg-rose-500 shadow-sm"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Open Churn PDF Report</span>
                  </a>
                )}

                {activeModalProject.tableauUrl && (
                  <a
                    href={activeModalProject.tableauUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 shadow-sm"
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>View on Tableau Public</span>
                  </a>
                )}

                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 border border-slate-700"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
