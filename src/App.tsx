import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { SocialHub } from './components/SocialHub';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col antialiased selection:bg-primary-container selection:text-on-primary">
      {/* Fixed Navigation Header */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="w-full pt-16 flex-1 flex flex-col">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <SocialHub />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Curriculum Vitae / Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
