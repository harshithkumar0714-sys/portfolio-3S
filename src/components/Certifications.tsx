import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Terminal,
  CheckCircle2,
  Award,
  ExternalLink,
  ShieldCheck,
  X,
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-primary" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-primary" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-primary" />;
      default:
        return <Award className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section className="w-full bg-surface-container-lowest py-16 lg:py-24 border-y border-outline-variant/20" id="certifications">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-primary font-semibold">05 // VERIFIED CREDENTIALS</span>
            <span className="w-8 h-0.5 bg-primary/40" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">
            IBM Data Science Certifications
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant">
            Industry credentials in Python data handling, visualization, and statistical exploration.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-xl bg-surface-container border border-outline-variant/30 shadow-md flex flex-col justify-between gap-5 hover:bg-surface-container-high/90 hover:border-primary/40 transition-all group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCertIcon(cert.badgeIcon)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-tertiary/10 text-tertiary font-mono text-[11px] border border-tertiary/30">
                    Verified
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase text-outline tracking-wider font-semibold">
                    Issuer: {cert.issuer}
                  </span>
                  <h3 className="font-display text-lg text-on-surface font-semibold mt-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Covered */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-surface-container-low border border-outline-variant/20 font-mono text-xs text-on-surface"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-surface-container-high font-mono text-xs text-outline">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="hover:text-on-surface transition-colors cursor-pointer text-left"
                >
                  IBM Skills Network
                </button>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-primary flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Accredited</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credential Details Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-surface-container border border-outline-variant/40 shadow-2xl p-6 flex flex-col gap-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-tertiary" />
                <span className="font-mono text-xs text-tertiary font-semibold uppercase">
                  Verified IBM Credential
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h3 className="font-display text-xl text-on-surface font-bold">{selectedCert.title}</h3>
              <p className="text-xs text-outline font-mono mt-1">Issued by: IBM Developer Skills Network</p>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed">{selectedCert.description}</p>

            <div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30 font-mono text-xs space-y-1">
              <div className="text-outline">Credential ID: <span className="text-on-surface">{selectedCert.credentialId}</span></div>
              <div className="text-outline">Status: <span className="text-tertiary font-semibold">Active &amp; Authenticated</span></div>
              <div className="text-outline">Competencies: <span className="text-primary">{selectedCert.skills.join(', ')}</span></div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-semibold text-xs hover:brightness-110"
              >
                Close Verification
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
