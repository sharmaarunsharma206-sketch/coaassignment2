import React, { useState } from 'react';
import { Menu, X, FileDown, ExternalLink, Settings, Linkedin, Mail } from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface NavbarProps {
  profile: StudentProfile;
  activeSection: string;
  onOpenEditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  activeSection,
  onOpenEditModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#home"
            className="group flex flex-col text-left whitespace-nowrap shrink-0"
            title="Return to top"
          >
            <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors font-serif">
              {profile.name}
            </span>
            <span className="text-[11px] font-medium text-slate-500 tracking-normal hidden sm:block">
              {profile.degreeSummary}
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-semibold text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-blue-950 ${
                    isActive ? 'text-blue-950 font-bold' : 'text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Quick Tools */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Download Resume PDF Button */}
            <a
              href={profile.resumePdfUrl}
              download="Arun_Sharma_Professional_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 active:bg-slate-900 rounded-lg shadow-xs transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-900"
              title="Download Arun Sharma's Professional Resume PDF"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>

            {/* View Resume Button */}
            <a
              href={profile.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-blue-900 hover:bg-blue-50 border border-blue-200/80 rounded-lg transition-colors whitespace-nowrap"
              title="View Arun_Sharma_Professional_Resume.pdf in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View PDF</span>
            </a>

            <button
              onClick={onOpenEditModal}
              type="button"
              className="hidden md:inline-flex p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
              title="Edit portfolio details"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <div className="grid grid-cols-2 gap-1 pb-3 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-900 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={profile.resumePdfUrl}
              download="Arun_Sharma_Professional_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-950"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>

            <a
              href={profile.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2 text-xs font-medium text-blue-900 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Resume in New Tab</span>
            </a>

            <div className="flex items-center justify-between pt-2 px-1 text-xs text-slate-500">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-blue-800 hover:underline"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 text-slate-700 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{profile.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
