import React, { useState } from 'react';
import { ArrowDown, Terminal, ExternalLink, FileText, CheckCircle2, Play, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [isRunningVerify, setIsRunningVerify] = useState(false);
  const [verifyOutput, setVerifyOutput] = useState<string | null>(null);

  const handleRunVerify = () => {
    setIsRunningVerify(true);
    setVerifyOutput(null);
    setTimeout(() => {
      setIsRunningVerify(false);
      setVerifyOutput('✓ All 4 core modules verified: C, Python, WebStack, MySQL. System ready for internships!');
    }, 600);
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pb-24" id="home">
      {/* Background ambient glow anchors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-1/4 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Identity & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/40 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
            </span>
            <span className="font-mono text-xs text-on-surface tracking-tight">
              {PERSONAL_INFO.statusPill}
            </span>
          </div>

          {/* Main Title & Typographic Hierarchy */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase text-primary tracking-widest font-semibold">
              {PERSONAL_INFO.eyebrow}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight font-extrabold leading-[1.1]">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-display text-xl sm:text-2xl text-primary font-semibold">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary font-semibold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-primary-container/20 transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface text-sm sm:text-base font-medium transition-all shadow-sm border border-outline-variant/30 hover:border-primary/50"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-outline" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-sm sm:text-base transition-all shadow-sm border border-outline-variant/30 hover:border-primary/50 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-on-surface-variant" />
              <span>Resume</span>
            </button>
          </div>

          {/* Metric micro-strip */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg pt-4">
            <div className="flex flex-col p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 shadow-sm">
              <span className="font-mono text-sm sm:text-base text-primary font-bold">3rd Sem</span>
              <span className="text-xs text-on-surface-variant">B.Tech @ REVA</span>
            </div>
            <div className="flex flex-col p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 shadow-sm">
              <span className="font-mono text-xs sm:text-sm text-tertiary font-bold leading-tight">96.8% • 97.6%</span>
              <span className="text-xs text-on-surface-variant">PUC • SSLC</span>
            </div>
            <div className="flex flex-col p-3 rounded-lg bg-surface-container-low border border-outline-variant/20 shadow-sm">
              <span className="font-mono text-sm sm:text-base text-secondary font-bold">3x IBM</span>
              <span className="text-xs text-on-surface-variant">Certifications</span>
            </div>
          </div>
        </div>

        {/* Right: Technical IDE Preview Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-2xl overflow-hidden">
            {/* Terminal Header Tab Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-surface-container border-b border-outline-variant/30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ffb4ab]/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#8ed5ff]/60 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#52e87c]/80 inline-block" />
                <span className="ml-2 font-mono text-xs text-on-surface-variant">harshith.config.ts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Runtime: Stable
                </span>
              </div>
            </div>

            {/* Code Snippet */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto space-y-1 leading-relaxed text-on-surface-variant">
              <div>
                <span className="text-secondary font-semibold">import</span> &#123;{' '}
                <span className="text-primary">Developer</span> &#125;{' '}
                <span className="text-secondary font-semibold">from</span>{' '}
                <span className="text-tertiary">'@reva/engineering'</span>;
              </div>
              <div className="pt-2">
                <span className="text-secondary font-semibold">export const</span>{' '}
                <span className="text-primary font-bold">Harshith</span>:{' '}
                <span className="text-primary">Developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-on-surface">specialization</span>:{' '}
                <span className="text-tertiary">'Artificial Intelligence &amp; Data Science'</span>,
              </div>
              <div className="pl-4">
                <span className="text-on-surface">institution</span>:{' '}
                <span className="text-tertiary">'REVA University, Bengaluru'</span>,
              </div>
              <div className="pl-4">
                <span className="text-on-surface">semester</span>:{' '}
                <span className="text-primary-container font-semibold">3</span>,
              </div>
              <div className="pl-4">
                <span className="text-on-surface">coreStack</span>: [
              </div>
              <div className="pl-8 text-on-surface">
                <span className="text-tertiary">'C'</span>, <span className="text-tertiary">'Python'</span>,{' '}
                <span className="text-tertiary">'HTML5'</span>, <span className="text-tertiary">'CSS3'</span>,{' '}
                <span className="text-tertiary">'JavaScript'</span>, <span className="text-tertiary">'MySQL'</span>
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-on-surface">architecturalFocus</span>: [
              </div>
              <div className="pl-8 text-on-surface">
                <span className="text-tertiary">'Full-Stack Architecture'</span>,
                <br />
                <span className="text-tertiary">'Relational DB Design'</span>,
                <br />
                <span className="text-tertiary">'Algorithmic Efficiency'</span>
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-on-surface">availability</span>:{' '}
                <span className="text-tertiary font-bold">'Internships &amp; Collaborative Projects'</span>,
              </div>
              <div className="pl-4">
                <span className="text-on-surface">status</span>:{' '}
                <span className="text-primary font-semibold">'Building &amp; Exploring'</span>
              </div>
              <div>&#125;;</div>

              {/* Interactive terminal footnote / tester */}
              <div className="pt-4 mt-4 border-t border-surface-container-high/60">
                <div className="flex items-center justify-between text-outline text-xs">
                  <button
                    onClick={handleRunVerify}
                    disabled={isRunningVerify}
                    className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer group text-left"
                    title="Click to execute check"
                  >
                    <span className="text-tertiary">&gt;</span>
                    <span className="group-hover:underline">node harshith.config.ts --verify</span>
                    <Play className="w-3 h-3 text-tertiary opacity-80 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                  <span className="text-primary font-mono text-[11px]">Ready 0ms</span>
                </div>

                {isRunningVerify && (
                  <div className="mt-2 text-xs text-primary font-mono flex items-center gap-2 animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Compiling modules &amp; checking dependencies...</span>
                  </div>
                )}

                {verifyOutput && (
                  <div className="mt-2 text-xs text-tertiary font-mono flex items-center gap-2 bg-tertiary-container/10 p-2 rounded border border-tertiary/20">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{verifyOutput}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
