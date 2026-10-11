/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { TechnicalSkillsSection } from './components/TechnicalSkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EditModal } from './components/EditModal';
import { ARUN_SHARMA_PROFILE } from './data/defaultPortfolio';
import { StudentProfile } from './types/portfolio';
import { SlidersHorizontal } from 'lucide-react';

const STORAGE_KEY = 'arun_sharma_portfolio_v4';

export default function App() {
  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return ARUN_SHARMA_PROFILE;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  // Sync to local storage
  const handleSaveProfile = (newProfile: StudentProfile) => {
    setProfile(newProfile);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfile));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleResetToDefaults = () => {
    handleSaveProfile(ARUN_SHARMA_PROFILE);
  };

  // Section observer for smooth navigation active states
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'education',
      'skills',
      'certifications',
      'projects',
      'resume',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Top Navigation */}
      <Navbar
        profile={profile}
        activeSection={activeSection}
        onOpenEditModal={() => setIsEditModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Home Page Section */}
        <HeroSection
          profile={profile}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />

        {/* 3. About Me Section */}
        <AboutSection profile={profile} />

        {/* 4. Education Section */}
        <EducationSection profile={profile} />

        {/* 5. Technical Skills Section */}
        <TechnicalSkillsSection profile={profile} />

        {/* 6. Certifications Section */}
        <CertificationsSection profile={profile} />

        {/* 7. Projects Section */}
        <ProjectsSection
          profile={profile}
          onOpenEditModal={() => setIsEditModalOpen(true)}
        />

        {/* 8. Resume / CV Section */}
        <ResumeSection profile={profile} />

        {/* 9. Contact Section */}
        <ContactSection profile={profile} />
      </main>

      {/* 10. Footer */}
      <Footer profile={profile} />

      {/* Floating Edit Controls */}
      <div className="fixed bottom-5 right-5 z-30 no-print flex items-center gap-2">
        <button
          onClick={() => setIsEditModalOpen(true)}
          type="button"
          className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-slate-800 bg-white/95 hover:bg-white border border-slate-300 rounded-full shadow-lg hover:shadow-xl backdrop-blur-md transition-all active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-900"
          title="Edit portfolio details"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-blue-900" />
          <span className="hidden sm:inline">Customize Details</span>
          <span className="sm:hidden">Edit</span>
        </button>
      </div>

      {/* Edit Modal */}
      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
        onResetToDefaults={handleResetToDefaults}
      />
    </div>
  );
}
