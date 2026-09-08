import React from 'react';
import { Terminal, Share2, ArrowRight, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SocialHub: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: GitHub Card */}
          <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-lg flex flex-col justify-between gap-6 hover:border-primary/40 transition-all">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <span className="font-mono text-xs text-on-surface-variant">@harshithkumar0714-sys</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-on-surface font-bold">
                Building in Public on GitHub
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                I use GitHub to document projects, experiment with ideas, and continuously improve my development skills. Review commit histories, local prototype commits, and architecture explorations.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-semibold text-sm sm:text-base transition-all border border-outline-variant/30 hover:border-primary/50"
            >
              <span>Explore my GitHub</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </a>
          </div>

          {/* Right: LinkedIn Card */}
          <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-lg flex flex-col justify-between gap-6 hover:border-secondary/40 transition-all">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-secondary" />
                </div>
                <span className="font-mono text-xs text-on-surface-variant">in/harshith-kumar-bv-598b46430</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-on-surface font-bold">
                Let's Connect on LinkedIn
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                I am actively strengthening my engineering profile and looking forward to connecting with fellow developers, mentors, recruiters, and engineering teams for internship opportunities.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary font-semibold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-primary-container/20 transition-all"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
