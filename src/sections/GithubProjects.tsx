import { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  ExternalLink, 
  Star, 
  ArrowUpDown, 
  RefreshCw,
  FolderGit2,
  BarChart3,
  Calendar
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { Repository } from '../types';
import { fetchGithubRepositories } from '../services/githubService';
import { ProjectModal } from '../components/ProjectModal';

const CATEGORIES = [
  "ALL",
  "DATA ANALYTICS",
  "PYTHON",
  "SQL",
  "POWER BI",
  "TABLEAU",
  "MACHINE LEARNING",
  "SPREADSHEETS",
  "WEB DEVELOPMENT",
  "OTHER",
];

export const GithubProjects: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState<'updated' | 'name' | 'stars'>('updated');
  const [activeModalRepo, setActiveModalRepo] = useState<Repository | null>(null);

  const loadRepos = async () => {
    setLoading(true);
    try {
      const repos = await fetchGithubRepositories();
      setRepositories(repos);
    } catch {
      // Handled internally in githubService fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRepos();
  }, []);

  const filteredRepositories = useMemo(() => {
    return repositories
      .filter((repo) => {
        const matchesSearch = 
          repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (repo.technologies && repo.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

        const repoCat = (repo.category || 'OTHER').toUpperCase();
        const matchesCategory = 
          selectedCategory === 'ALL' || repoCat === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'updated') {
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        }
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === 'stars') {
          return b.stargazers_count - a.stargazers_count;
        }
        return 0;
      });
  }, [repositories, searchQuery, selectedCategory, sortBy]);

  return (
    <section id="github-projects" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Open Source Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            All Public GitHub Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-3">
            Live auto-discovered public repositories from <a href="https://github.com/Rishikrohit" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 font-mono hover:underline">@Rishikrohit</a> with instant search, category filtering, and README analysis.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-xl space-y-4 mb-8">
          
          {/* Search + Sort */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
              <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                <span>Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="updated">Recently Updated</option>
                  <option value="name">Repository Name</option>
                  <option value="stars">Most Stars</option>
                </select>
              </div>

              <button
                onClick={loadRepos}
                title="Refresh Repositories"
                className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-cyan-600 dark:text-cyan-400' : ''}`} />
              </button>
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-600 text-white font-bold'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 mb-6 font-mono">
          <span>Showing {filteredRepositories.length} of {repositories.length} public repositories</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Repositories Cards Grid */}
        {loading && repositories.length === 0 ? (
          <div className="p-12 text-center text-slate-500 text-sm">
            <RefreshCw className="w-8 h-8 mx-auto animate-spin text-cyan-600 mb-3" />
            <span>Discovering public repositories from GitHub...</span>
          </div>
        ) : filteredRepositories.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
            No public repositories match your current filter criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepositories.map((repo) => (
              <div
                key={repo.id}
                className="group rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20">
                      {repo.category || 'Data Analytics'}
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center space-x-0.5 text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-500" />
                          <span>{repo.stargazers_count}</span>
                        </span>
                      )}
                      {repo.language && (
                        <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                          {repo.language}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => setActiveModalRepo(repo)}
                    className="text-lg font-bold text-slate-800 dark:text-white mb-2 cursor-pointer group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1"
                    title={repo.name}
                  >
                    {repo.name.replace(/-/g, ' ')}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {repo.description || 'Project details available on GitHub.'}
                  </p>

                  {/* Technologies Tags */}
                  {repo.technologies && repo.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {repo.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {repo.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-400">
                          +{repo.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Bottom / Actions */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalRepo(repo)}
                    className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 hover:underline py-1"
                  >
                    View Details
                  </button>

                  <div className="flex items-center space-x-2">
                    {repo.tableauUrl && (
                      <a
                        href={repo.tableauUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 hover:bg-emerald-100 transition-colors"
                        title="View Tableau Viz"
                      >
                        <BarChart3 className="w-3 h-3" />
                        <span>Viz</span>
                      </a>
                    )}

                    {repo.liveDemo && !repo.tableauUrl && (
                      <a
                        href={repo.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30 hover:bg-cyan-100 transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Demo</span>
                      </a>
                    )}

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Viewer */}
        <ProjectModal
          project={activeModalRepo}
          onClose={() => setActiveModalRepo(null)}
        />

      </div>
    </section>
  );
};
