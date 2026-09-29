import { X, Award, FileText, CheckCircle2 } from 'lucide-react';
import { Certification } from '../types';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">
                {cert.category} Certification
              </span>
              <h3 id="cert-modal-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {cert.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image or Details */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {cert.imageUrl && (
            <div className="rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-md">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Issuing Organization:</span>
              <p className="font-bold text-slate-800 dark:text-slate-200">
                {cert.organization || 'SkillCourse / Course Provider'}
              </p>
            </div>

            {cert.date && (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block mb-0.5">Completion Date:</span>
                <p className="font-bold text-slate-800 dark:text-slate-200">
                  {cert.date}
                </p>
              </div>
            )}
          </div>

          <div>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400 block mb-2 uppercase tracking-wider">
              Curriculum Topics:
            </span>
            <div className="flex flex-wrap gap-2">
              {cert.topics.map((topic) => (
                <span
                  key={topic}
                  className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{topic}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end space-x-3 p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>

          {cert.certificateFile && (
            <a
              href={cert.certificateFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Open Original PDF</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
