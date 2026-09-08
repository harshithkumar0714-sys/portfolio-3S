import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  Copy,
  Check,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="w-full bg-surface-container-lowest py-16 lg:py-24 border-t border-outline-variant/20" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Resume Callout Card */}
        <div className="p-6 sm:p-10 lg:p-12 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="font-mono text-xs uppercase text-primary tracking-wider font-semibold">
              Curriculum Vitae
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-bold tracking-tight">
              Interested in my journey?
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Take a closer look at my education, technical coursework, projects, skills, and verified IBM certifications in a
              single, printable document.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-on-primary font-semibold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-primary-container/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download / View Resume</span>
            </button>
          </div>
        </div>

        {/* Main Contact Hub Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-primary font-semibold">06 // GET IN TOUCH</span>
                <span className="w-8 h-0.5 bg-primary/40" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-on-surface font-bold">
                Direct Coordinates
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant">
                Feel free to reach out directly via email, phone, or send a quick message through the form.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/30 shadow-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[10px] uppercase text-outline tracking-wider font-semibold">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-mono text-xs sm:text-sm text-on-surface hover:text-primary transition-colors truncate"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface-variant text-xs font-mono transition-all border border-outline-variant/30 shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <span className="text-tertiary flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      <span>Copied</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </span>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/30 shadow-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-tertiary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] uppercase text-outline tracking-wider font-semibold">
                      Phone Contact
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-mono text-xs sm:text-sm text-on-surface hover:text-tertiary transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="px-3 py-1.5 rounded bg-surface-container-high hover:bg-surface-bright text-on-surface-variant text-xs font-mono transition-all border border-outline-variant/30 shrink-0"
                >
                  Call
                </a>
              </div>

              {/* Location */}
              <div className="p-5 rounded-xl bg-surface-container border border-outline-variant/30 shadow-md flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase text-outline tracking-wider font-semibold">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm text-on-surface font-medium">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h4 className="font-display text-lg sm:text-xl text-on-surface font-semibold">
                  Send a direct message
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-mono text-xs uppercase text-on-surface-variant">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary text-sm shadow-inner"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-mono text-xs uppercase text-on-surface-variant">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary text-sm shadow-inner"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="font-mono text-xs uppercase text-on-surface-variant">
                    Opportunity / Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Internship Inquiry, Technical Collaboration, etc."
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary text-sm shadow-inner"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-xs uppercase text-on-surface-variant">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Harshith, I came across your restaurant system project and would love to discuss an internship role..."
                    className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant/30 text-on-surface placeholder:text-outline focus:outline-none focus:border-primary text-sm shadow-inner resize-none"
                  />
                </div>

                {formSubmitted && (
                  <div className="p-3.5 rounded-lg bg-tertiary-container/20 border border-tertiary/30 text-tertiary text-xs sm:text-sm flex items-center gap-2.5 animate-in fade-in">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>
                      Thank you, {formData.name || 'friend'}! Your message has been simulated. You can also reach out via email directly at{' '}
                      <strong>{PERSONAL_INFO.email}</strong>.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-on-primary font-semibold text-sm sm:text-base hover:brightness-110 shadow-lg shadow-primary-container/20 transition-all cursor-pointer mt-1"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
