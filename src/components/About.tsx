import React from 'react';
import { Brain, Cpu, SlidersHorizontal } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-lowest py-16 lg:py-24 border-y border-outline-variant/20" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 max-w-2xl mb-12">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-primary font-semibold">01 // PROFILE</span>
            <span className="w-8 h-0.5 bg-primary/40" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">
            A little about me
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant">
            Bridging foundational computer science with practical web architecture.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Narrative Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-xl bg-surface-container border border-outline-variant/30 shadow-md flex flex-col gap-4">
              <p className="text-base sm:text-lg text-on-surface leading-relaxed">
                I am an Artificial Intelligence &amp; Data Science engineering student at{' '}
                <strong className="text-primary font-semibold">REVA University</strong> who loves building software and
                understanding how systems behave from the memory and logic layer up to clean user interfaces.
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                My engineering journey combines low-level structured logic in <strong>C</strong>, data manipulation and backend
                scripts in <strong>Python</strong>, and end-to-end web workflows using{' '}
                <strong>HTML, CSS, JavaScript, and MySQL</strong>. Rather than memorizing framework boilerplate, I focus on
                understanding underlying paradigms: how state flows, how database schemas prevent anomalies, and how clear code
                prevents technical debt.
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                When I build a project—like an offline-first restaurant management dashboard or a 2D graphics render pipeline—I build
                it end-to-end to face the practical hurdles of debugging, relational foreign keys, and edge-case validation.
              </p>
            </div>

            {/* Academic & Analytical Foundation highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 sm:p-6 rounded-lg bg-surface-container-high border border-outline-variant/30 shadow-sm flex flex-col gap-2">
                <Brain className="w-6 h-6 text-primary" />
                <h3 className="font-display text-base sm:text-lg text-on-surface font-semibold">
                  Analytical Aptitude
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Consistent top-percentile academic standing with 96.8% in Pre-University and 97.6% in Class 10, grounding my
                  approach in rigorous mathematical logic.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-lg bg-surface-container-high border border-outline-variant/30 shadow-sm flex flex-col gap-2">
                <Cpu className="w-6 h-6 text-tertiary" />
                <h3 className="font-display text-base sm:text-lg text-on-surface font-semibold">
                  Systems Perspective
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Experience in C and algorithmic design helps me reason about memory constraints, pointer arithmetic, and algorithmic
                  Big-O complexities.
                </p>
              </div>
            </div>
          </div>

          {/* Right: "Current Focus" card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 sm:p-8 rounded-xl bg-surface-container border border-outline-variant/30 shadow-md flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-base sm:text-lg text-on-surface font-semibold">Current Focus</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high border border-outline-variant/40 font-mono text-[11px] text-primary">
                  Q1 2025
                </span>
              </div>

              {/* Focus List */}
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20 shadow-sm flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-on-surface font-semibold">Full-Stack Development</span>
                    <span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-mono text-[11px]">
                      Active Exploration
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    Architecting resilient web systems with vanilla JavaScript, RESTful endpoints, and backend persistence layers.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20 shadow-sm flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-on-surface font-semibold">Data Structures &amp; Algorithms</span>
                    <span className="px-2 py-0.5 rounded bg-tertiary-container/20 text-tertiary font-mono text-[11px]">
                      Core Practice
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    Strengthening problem-solving fundamentals in C and Python: arrays, linked lists, hashing, and recursion.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20 shadow-sm flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-on-surface font-semibold">Database Systems (RDBMS)</span>
                    <span className="px-2 py-0.5 rounded bg-secondary-container/30 text-secondary font-mono text-[11px]">
                      Core Practice
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    Normalizing relational schemas in MySQL, crafting complex joins, triggers, and transactions for real entity stores.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/20 shadow-sm flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-on-surface font-semibold">Real-World Deployments</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-mono text-[11px]">
                      In Progress
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    Translating locally-tested multi-tier applications into cloud-hosted web properties with production workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
