import { useEffect, useState } from 'react';
import { X, ExternalLink, BarChart3, Database, Calendar, Layers, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { Repository } from '../types';
import { fetchRepoReadme } from '../services/githubService';

interface ProjectModalProps {
  project: Repository | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [readme, setReadme] = useState<string>('');
  const [loadingReadme, setLoadingReadme] = useState(false);

  useEffect(() => {
    if (!project) return;

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Fetch README if not already loaded
    setLoadingReadme(true);
    fetchRepoReadme(project.name, project.default_branch)
      .then((text) => setReadme(text))
      .catch(() => setReadme('Project details available on GitHub.'))
      .finally(() => setLoadingReadme(false));

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-800 bg-slate-900/90">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
                {project.category || 'Data Analytics'}
              </span>
              {project.language && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-slate-300 bg-slate-800">
                  {project.language}
                </span>
              )}
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.name.replace(/-/g, ' ')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview Description */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <Database className="w-4 h-4 text-brand-400" />
              <span>Project Overview</span>
            </h4>
            <p className="text-slate-200 text-sm leading-relaxed">
              {project.description || 'Project details available on GitHub.'}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
            <div>
              <div className="text-xs text-slate-400">Stars</div>
              <div className="text-base font-bold text-white">{project.stargazers_count}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Forks</div>
              <div className="text-base font-bold text-white">{project.forks_count}</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Updated</div>
              <div className="text-base font-bold text-slate-200">
                {new Date(project.updated_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Primary Tool</div>
              <div className="text-base font-bold text-brand-400">{project.language || 'Analytics'}</div>
            </div>
          </div>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center space-x-1.5">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>Technologies & Skills Used</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* README Content Preview */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
              <Terminal className="w-4 h-4 text-amber-400" />
              <span>Repository Documentation (README)</span>
            </h4>
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap max-h-56">
              {loadingReadme ? (
                <div className="text-slate-500 italic py-4 text-center">Loading README documentation...</div>
              ) : (
                readme || 'Project details available on GitHub.'
              )}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-6 border-t border-slate-800 bg-slate-900/90">
          <div className="text-xs text-slate-400 flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Updated: {new Date(project.updated_at).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center space-x-3">
            {project.tableauUrl && (
              <a
                href={project.tableauUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors"
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>View Tableau Dashboard</span>
              </a>
            )}

            {project.liveDemo && !project.tableauUrl && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-brand-500 text-slate-950 hover:bg-brand-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
