import React, { useEffect } from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  GraduationCap,
  Code,
  FolderGit2,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text version of resume for instant download
    const resumeText = `
===========================================================
               HARSHITH KUMAR BV - RESUME
===========================================================
Email:    ${PERSONAL_INFO.email}
Phone:    ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
GitHub:   ${PERSONAL_INFO.githubUrl}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}

OBJECTIVE:
Artificial Intelligence & Data Science undergraduate at REVA University 
focused on full-stack web development, algorithmic efficiency, and relational 
database architecture. Seeking software engineering and full-stack internships.

EDUCATION:
- REVA University, Bengaluru
  B.Tech in Artificial Intelligence & Data Science (3rd Sem, 2023 - 2027)
  Relevant Coursework: Data Structures, OOP, Database Systems, Computer Architecture.

- Vidyanidhi Independent PU College, Tumkur
  PCMB Stream (Physics, Chemistry, Mathematics, Biology)
  Score: 96.8% (Class 12 Board Examination Distinction)

- SSEMHS, Tumkur
  Class 10 High School Certification
  Score: 97.6% (State Board Distinction)

TECHNICAL SKILLS:
- Programming: Python, C, JavaScript (ES6+), SQL
- Web Stack: HTML5, CSS3, REST API Integration, DOM Manipulation
- Database: MySQL, Relational Schema Normalization (3NF), Query Optimization
- Tools: Git, GitHub, Visual Studio Code

PROJECTS:
1. Restaurant Management & Web System
   - End-to-end multi-tier system with client ordering and kitchen tracking.
   - Normalized MySQL relational schema preventing ticket mismatches.
   - Stack: HTML5, CSS3, JavaScript, MySQL, REST APIs.

2. 2-D Graphic Editor (in C)
   - Interactive vector shape manipulation tool with dynamic coordinate transforms.
   - Efficient dynamic memory allocation and pointer-managed primitive lists.
   - Stack: C, Pointers, Memory Management, 2D Geometric Math.

3. Personal Developer Showcase
   - Zero-bloat, semantic HTML5/CSS3 portfolio scored 100/100 on Lighthouse.
   - Stack: HTML5, CSS3, Vanilla JS.

CERTIFICATIONS:
- IBM: Data Analysis with Python (Pandas, NumPy, Scikit-Learn)
- IBM: Data Visualization with Python (Matplotlib, Seaborn, Folium)
- IBM: Python 101 for Data Science
===========================================================
`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Harshith_Kumar_BV_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-4xl rounded-2xl bg-surface-container border border-outline-variant/40 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Toolbar */}
        <div className="px-6 py-4 bg-surface-container-high border-b border-outline-variant/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider">
              Curriculum Vitae Preview
            </span>
            <span className="hidden sm:inline-block text-xs text-outline">• Harshith Kumar BV</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-xs font-mono text-on-surface border border-outline-variant/30 transition-all cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-primary" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-container text-on-primary text-xs font-semibold hover:brightness-110 transition-all cursor-pointer shadow-sm"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors ml-2 cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-on-surface bg-[#0c0e12]">
          {/* Header */}
          <div className="border-b border-outline-variant/30 pb-6">
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base text-primary font-semibold mt-1">
              B.Tech in Artificial Intelligence &amp; Data Science • Full-Stack Developer
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-on-surface-variant mt-4 font-mono">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-tertiary" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-tertiary transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5 text-outline" />
                <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  github.com/harshithkumar0714-sys
                </a>
              </span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-outline-variant/20">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold text-on-surface uppercase tracking-wider">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-on-surface">{edu.institution}</h3>
                    <p className="text-xs sm:text-sm text-primary font-medium">{edu.degree}</p>
                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{edu.description}</p>
                  </div>
                  <div className="sm:text-right font-mono text-xs text-outline shrink-0 mt-1 sm:mt-0">
                    <span className="font-bold text-tertiary block">{edu.scoreOrYear}</span>
                    <span>{edu.periodOrSemester}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-outline-variant/20">
              <Code className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold text-on-surface uppercase tracking-wider">
                Technical Skills
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="font-mono text-primary font-bold block mb-1">Programming &amp; Web</span>
                <span className="text-on-surface-variant">Python, C, JavaScript (ES6+), HTML5, CSS3, DOM API, REST</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="font-mono text-tertiary font-bold block mb-1">Databases &amp; Architecture</span>
                <span className="text-on-surface-variant">MySQL, 3NF Normalization, Indexing, Transactional Integrity</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="font-mono text-secondary font-bold block mb-1">Tools &amp; Workflow</span>
                <span className="text-on-surface-variant">Git, GitHub, Visual Studio Code, Linux Terminal Workflows</span>
              </div>
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="font-mono text-primary-container font-bold block mb-1">Core Competencies</span>
                <span className="text-on-surface-variant">Data Structures, Algorithmic Analysis, Root Cause Debugging</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-1 border-b border-outline-variant/20">
              <FolderGit2 className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold text-on-surface uppercase tracking-wider">
                Technical Projects
              </h2>
            </div>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-surface-container border border-outline-variant/20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-semibold text-sm sm:text-base text-on-surface">{proj.title}</h3>
                    <span className="font-mono text-xs text-primary font-medium">{proj.category}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {proj.tags.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-surface-container-high text-[11px] font-mono text-outline">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-1 border-b border-outline-variant/20">
              <Award className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold text-on-surface uppercase tracking-wider">
                Verified Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-3 rounded-lg bg-surface-container border border-outline-variant/20">
                  <span className="font-mono text-[10px] text-outline block uppercase">IBM Skills Network</span>
                  <span className="font-semibold text-xs text-on-surface block mt-0.5">{cert.title}</span>
                  <span className="text-[11px] text-tertiary font-mono block mt-1">Status: Accredited</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-surface-container-high border-t border-outline-variant/30 flex items-center justify-between">
          <span className="font-mono text-xs text-outline">Ready for print &amp; review</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-bright text-xs sm:text-sm text-on-surface transition-all cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
