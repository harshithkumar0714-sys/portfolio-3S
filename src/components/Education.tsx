import React from 'react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24" id="education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-primary font-semibold">04 // ACADEMIC RIGOR</span>
            <span className="w-8 h-0.5 bg-primary/40" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">
            Education &amp; Background
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant">
            Consistent history of academic performance and analytical training.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-8 sm:pl-12 space-y-12">
          {/* Continuous vertical hair line */}
          <div className="absolute top-3 bottom-3 left-3 sm:left-4.5 w-0.5 bg-surface-container-highest" />

          {EDUCATION.map((item) => {
            const isPrimary = item.accentColor === 'primary';
            const isTertiary = item.accentColor === 'tertiary';
            const isSecondary = item.accentColor === 'secondary';

            return (
              <div key={item.id} className="relative flex flex-col gap-3">
                {/* Timeline Node */}
                <div className="absolute -left-8 sm:-left-12 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      isPrimary
                        ? 'bg-primary ring-4 ring-primary/20 animate-pulse'
                        : isTertiary
                        ? 'bg-tertiary ring-4 ring-tertiary/20'
                        : 'bg-secondary ring-4 ring-secondary/20'
                    }`}
                  />
                </div>

                {/* Milestone Card */}
                <div className="p-6 sm:p-8 rounded-xl bg-surface-container border border-outline-variant/30 shadow-md flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span
                        className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase tracking-wider font-semibold ${
                          isPrimary
                            ? 'bg-primary-container/20 text-primary border border-primary/30'
                            : isTertiary
                            ? 'bg-tertiary-container/20 text-tertiary border border-tertiary/30'
                            : 'bg-secondary-container/30 text-secondary border border-secondary/30'
                        }`}
                      >
                        {item.statusBadge}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl text-on-surface font-bold mt-1">
                        {item.institution}
                      </h3>
                      <p className={`text-sm sm:text-base font-medium ${isPrimary ? 'text-primary' : 'text-on-surface'}`}>
                        {item.degree}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end">
                      <span
                        className={`font-mono text-base sm:text-lg font-bold ${
                          isPrimary ? 'text-on-surface' : isTertiary ? 'text-tertiary' : 'text-secondary'
                        }`}
                      >
                        {item.scoreOrYear.startsWith('9') ? item.scoreOrYear : item.periodOrSemester}
                      </span>
                      <span className="text-xs text-outline font-mono">
                        {item.scoreOrYear.startsWith('9') ? item.periodOrSemester : item.scoreOrYear}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/20 text-on-surface-variant font-mono text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
