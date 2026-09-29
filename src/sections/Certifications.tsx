import { useState } from 'react';
import { Award, CheckCircle2, FileText, Calendar, Image as ImageIcon } from 'lucide-react';
import { CERTIFICATIONS } from '../data/certifications';
import { Certification } from '../types';
import { CertificateModal } from '../components/CertificateModal';

const FILTERS = ['ALL', 'SQL', 'PYTHON', 'POWER BI', 'DATA ANALYTICS', 'EXCEL'] as const;

export const CertificationsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const filteredCerts = CERTIFICATIONS.filter((cert) => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'EXCEL') {
      return cert.category === 'Excel' || cert.topics.some((t) => t.toLowerCase().includes('excel') || t.toLowerCase().includes('pivot'));
    }
    return cert.category.toUpperCase() === selectedFilter;
  });

  return (
    <section id="certifications" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Certifications & Completed Courses
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Real certifications with actual certificate image previews and verified PDF documents.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFilter === f
                  ? 'bg-cyan-600 text-white font-bold shadow-md shadow-cyan-600/20'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCerts.map((cert) => {
            const hasActualPdf = cert.id === 'sql-micro-course';

            return (
              <div
                key={cert.id}
                className="rounded-2xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:shadow-lg transition-all shadow-xs flex flex-col justify-between overflow-hidden"
              >
                {/* Certificate Visual Image / Banner */}
                {cert.imageUrl ? (
                  <div 
                    className="relative h-44 bg-slate-100 dark:bg-slate-900 overflow-hidden cursor-pointer group"
                    onClick={() => setActiveCert(cert)}
                  >
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                      <span className="px-3 py-1 rounded-lg bg-slate-950/80 text-white text-xs font-bold backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to view full certificate
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-600 text-white shadow-xs">
                        ISO 9001:2015
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 border-b border-slate-100 dark:border-slate-800/80 bg-gradient-to-r from-slate-50 to-cyan-50/30 dark:from-slate-900 dark:to-slate-850">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-400 border border-slate-200 dark:border-slate-800">
                        {cert.category}
                      </span>
                      <Award className="w-5 h-5 text-amber-500" />
                    </div>

                    <h3 className="text-base font-bold text-slate-800 dark:text-white leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                )}

                {/* Certificate Content */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    {cert.imageUrl && (
                      <h3 
                        onClick={() => setActiveCert(cert)}
                        className="text-base font-bold text-slate-900 dark:text-white mb-1.5 cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                      >
                        {cert.title}
                      </h3>
                    )}

                    <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">
                      Organization: <span className="text-slate-900 dark:text-slate-200 font-semibold">{cert.organization}</span>
                    </div>

                    {cert.date && (
                      <div className="text-[11px] text-slate-500 flex items-center space-x-1 mb-4 font-mono">
                        <Calendar className="w-3 h-3" />
                        <span>Issued: {cert.date}</span>
                      </div>
                    )}

                    {/* Topics Covered */}
                    <div className="mb-4">
                      <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                        Topics Covered:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.topics.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between mt-2">
                    <span className="text-[11px] text-slate-400 font-mono">
                      {hasActualPdf ? 'Cert # SQ21T01' : 'Resume Credential'}
                    </span>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setActiveCert(cert)}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700"
                      >
                        <ImageIcon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                        <span>View Certificate</span>
                      </button>

                      {hasActualPdf && (
                        <a
                          href={cert.certificateFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-xs"
                          title="Open verified PDF document"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
        />

      </div>
    </section>
  );
};
