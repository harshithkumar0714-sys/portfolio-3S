import React, { useState } from 'react';
import {
  Code2,
  Globe,
  Database,
  Wrench,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Search,
} from 'lucide-react';
import { SKILL_CATEGORIES, CURRENTLY_STRENGTHENING } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-primary" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-primary" />;
      case 'Database':
        return <Database className="w-6 h-6 text-primary" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-primary" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-primary" />;
      default:
        return <Code2 className="w-6 h-6 text-primary" />;
    }
  };

  const getBadgeStyle = (level: string) => {
    switch (level) {
      case 'Comfortable':
        return 'bg-tertiary-container/20 text-tertiary border border-tertiary/30';
      case 'Working Knowledge':
        return 'bg-primary-container/20 text-primary border border-primary/30';
      case 'Building & Practicing':
      case 'Building':
        return 'bg-secondary-container/30 text-secondary border border-secondary/30';
      case 'Active Use':
        return 'bg-primary-container/20 text-primary border border-primary/30';
      default:
        return 'bg-surface-container-high text-on-surface-variant';
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map((category) => {
    const matchedSkills = category.skills.filter((skill) => {
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel =
        selectedLevel === 'all' ||
        (selectedLevel === 'comfortable' && skill.level === 'Comfortable') ||
        (selectedLevel === 'working' && skill.level === 'Working Knowledge') ||
        (selectedLevel === 'building' && (skill.level.includes('Building') || skill.level === 'Active Use'));
      return matchesSearch && matchesLevel;
    });

    return {
      ...category,
      skills: matchedSkills,
    };
  });

  return (
    <section className="w-full py-16 lg:py-24" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-primary font-semibold">02 // CAPABILITIES</span>
              <span className="w-8 h-0.5 bg-primary/40" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">
              Technical Capabilities &amp; Growth Areas
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant">
              A concrete overview of tools and technologies I use to design, code, and debug software.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-high border border-outline-variant/30 shadow-sm self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span className="font-mono text-xs text-on-surface">
              Honest competency assessment — no exaggerated percentages
            </span>
          </div>
        </div>

        {/* Search & Filter bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 p-3 rounded-xl bg-surface-container border border-outline-variant/20">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              type="text"
              placeholder="Search skill (e.g., Python, MySQL, Git)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All Stack' },
              { id: 'comfortable', label: 'Comfortable' },
              { id: 'working', label: 'Working Knowledge' },
              { id: 'building', label: 'Building & Exploring' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedLevel(tab.id)}
                className={`px-3 py-1 text-xs rounded-lg font-mono whitespace-nowrap transition-all cursor-pointer ${
                  selectedLevel === tab.id
                    ? 'bg-primary-container text-on-primary font-semibold'
                    : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-xl bg-surface-container border border-outline-variant/30 shadow-md flex flex-col justify-between gap-4 hover:border-outline-variant/60 transition-all"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  {getIcon(cat.icon)}
                  <span className="font-mono text-[10px] uppercase text-on-surface-variant tracking-wider">
                    {cat.number}
                  </span>
                </div>
                <h3 className="font-display text-lg text-on-surface font-semibold">{cat.title}</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                {cat.skills.length > 0 ? (
                  cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded bg-surface-container-low border border-outline-variant/20"
                    >
                      <span className="font-mono text-xs sm:text-sm text-on-surface font-medium">
                        {skill.name}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full font-mono text-[10px] sm:text-xs ${getBadgeStyle(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-outline italic py-2">No skills matched filter.</div>
                )}
              </div>
            </div>
          ))}

          {/* Card 6: Special Strengthening Card */}
          <div className="p-6 rounded-xl bg-surface-container-high border border-outline-variant/40 shadow-lg flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <TrendingUp className="w-6 h-6 text-tertiary" />
                <span className="px-2 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary font-mono text-[10px] uppercase tracking-wider">
                  Target Growth
                </span>
              </div>
              <h3 className="font-display text-lg text-on-surface font-semibold">Currently Strengthening</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Targeted focus areas receiving deliberate daily study and implementation practice.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {CURRENTLY_STRENGTHENING.map((item, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full bg-surface-container border border-outline-variant/30 font-mono text-xs ${item.color}`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
