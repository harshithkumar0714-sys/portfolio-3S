import React, { useEffect } from 'react';
import { Terminal, X, ExternalLink, Check, Database, Layers, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectSpecModal: React.FC<ProjectSpecModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-3xl rounded-2xl bg-surface-container border border-outline-variant/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-surface-container-high flex items-center justify-between border-b border-outline-variant/30">
          <div className="flex items-center gap-3">
            <Terminal className="w-5 h-5 text-primary" />
            <h3 className="font-display text-base sm:text-lg text-on-surface font-semibold">
              Restaurant Management &amp; Web System — Architecture Spec
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm sm:text-base text-on-surface-variant">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-primary" />
              <h4 className="font-display text-base text-on-surface font-semibold">
                1. System Topology &amp; Client-Server Contract
              </h4>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed">
              The solution utilizes an event-driven frontend communicating through asynchronous Fetch endpoints. Tables are
              linked to active sessions in a relational schema that prevents conflicting concurrent table checkouts, order loss,
              or bill calculation race conditions.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/30 font-mono text-xs sm:text-sm text-on-surface space-y-2">
            <div className="text-primary font-semibold flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span>Key MySQL Schema Tables &amp; Constraints</span>
            </div>
            <div className="text-on-surface-variant">
              • <span className="text-tertiary">dining_tables</span> (table_id INT PK, capacity INT, status ENUM('vacant','occupied','reserved'), last_active TIMESTAMP)
            </div>
            <div className="text-on-surface-variant">
              • <span className="text-tertiary">menu_catalog</span> (item_id INT PK, name VARCHAR(100), category VARCHAR(50), unit_price DECIMAL(10,2), is_available BOOLEAN)
            </div>
            <div className="text-on-surface-variant">
              • <span className="text-tertiary">order_tickets</span> (ticket_id INT PK, table_id FK, created_at DATETIME, status ENUM('queued','prep','dispatched','settled'), total_amount DECIMAL(10,2))
            </div>
            <div className="text-on-surface-variant">
              • <span className="text-tertiary">order_items</span> (id INT PK, ticket_id FK, item_id FK, quantity INT, unit_price DECIMAL(10,2), special_notes TEXT)
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-tertiary" />
              <h4 className="font-display text-base text-on-surface font-semibold">
                2. Key Engineering Insights &amp; What I Learned
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                <span>
                  <strong>Relational Schema Normalization (3NF):</strong> Separated item catalog prices from order snapshot lines to ensure future menu price adjustments never corrupt historic revenue records.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                <span>
                  <strong>Optimistic UI &amp; State Reconciliation:</strong> Built responsive feedback loops in vanilla JavaScript without heavy SPA frameworks, managing DOM re-renders gracefully.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-tertiary shrink-0 mt-0.5" />
                <span>
                  <strong>Database Integrity &amp; Edge Cases:</strong> Implemented SQL atomic transactions to guarantee that order tickets and child order items always commit together or roll back on failures.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-surface-container-high flex items-center justify-end gap-3 border-t border-outline-variant/30">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-semibold text-xs sm:text-sm hover:brightness-110 transition-all"
          >
            <span>Open on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface text-xs sm:text-sm transition-all cursor-pointer"
          >
            Close Spec
          </button>
        </div>
      </div>
    </div>
  );
};
