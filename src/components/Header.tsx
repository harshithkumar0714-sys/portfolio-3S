import React, { useState, useEffect } from 'react';
import { Terminal, ExternalLink, Menu, X, FileText, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact'];
      const scrollY = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 transition-all">
      <div className="h-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none"
            onClick={() => setActiveSection('home')}
          >
            <span className="font-mono text-base text-primary font-bold tracking-tight group-hover:text-primary-fixed-dim transition-colors">
              {PERSONAL_INFO.shortName}
            </span>
            <span className="hidden sm:inline-block font-display text-sm font-semibold text-on-surface tracking-tight group-hover:text-primary transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high border border-outline-variant/40">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-wider">
              {PERSONAL_INFO.tagline}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 p-1 rounded-xl bg-surface-container-lowest/60 border border-outline-variant/30">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveSection(link.id)}
                className={`px-3 py-1.5 text-xs transition-all rounded-lg ${
                  isActive
                    ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Social and Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary-container hover:bg-surface-container-high transition-all"
            title="GitHub Profile"
          >
            <Terminal className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center border border-outline-variant/40 text-on-surface-variant hover:text-primary hover:border-primary-container hover:bg-surface-container-high transition-all"
            title="LinkedIn Profile"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-medium border border-outline-variant/40 hover:border-primary/50 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span>CV</span>
          </button>

          <button
            onClick={onOpenResume}
            aria-label="View Harshith Kumar Profile and Resume"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1 shadow-[0_0_16px_-2px_rgba(56,189,248,0.4)] hover:brightness-110 transition-all"
            title="View Full Profile / Resume"
          >
            <User className="w-4 h-4 text-on-primary" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant/40 ml-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-low border-b border-outline-variant/40 px-4 py-3 space-y-1 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActiveSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                  isActive
                    ? 'bg-primary-container text-on-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-surface-container flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-primary-container text-on-primary font-semibold text-xs"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume & Credentials</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
