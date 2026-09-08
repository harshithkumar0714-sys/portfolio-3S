import React from 'react';
import { Terminal, Share2, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-ping" />
            <span className="font-mono text-xs text-on-surface-variant">
              {PERSONAL_INFO.statusPill}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant">
            © 2025 Harshith Kumar BV. Engineered with precision.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-on-surface-variant hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-surface-container"
              title="GitHub"
            >
              <Terminal className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-on-surface-variant hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-surface-container"
              title="LinkedIn"
            >
              <Share2 className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Harshith"
              className="text-on-surface-variant hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-surface-container"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-on-surface-variant hover:text-on-surface transition-all font-mono text-xs cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
