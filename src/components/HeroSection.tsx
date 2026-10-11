import React, { useState } from 'react';
import {
  FileDown,
  ExternalLink,
  GraduationCap,
  MapPin,
  Mail,
  Linkedin,
  Phone,
  ArrowRight,
  ShieldCheck,
  Code2,
  Sparkles,
} from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface HeroSectionProps {
  profile: StudentProfile;
  onOpenEditModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onOpenEditModal,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-10 pb-16 md:pt-16 md:pb-20 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left 7 Columns: Typographic Hierarchy & Introduction */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academic Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-900 border border-blue-200/80 rounded-md">
                <GraduationCap className="w-3.5 h-3.5" />
                {profile.university}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-700 font-semibold">B.E. (CSE)(AI) · CGPA: {profile.cgpa}</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600 font-medium">Class of 2029</span>
            </div>

            {/* Prominent Student Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                {profile.name}
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-900 leading-snug">
                {profile.professionalTitle}
              </h2>
            </div>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {profile.heroIntroduction}
            </p>

            {/* Location & Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 pt-1">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <MapPin className="w-4 h-4 text-blue-800" />
                <span>{profile.location}</span>
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-blue-900 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-800" />
                <span>{profile.email}</span>
              </a>
              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-blue-900 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-800" />
                  <span>{profile.phone}</span>
                </a>
              )}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-medium text-blue-800 hover:underline"
              >
                <Linkedin className="w-4 h-4 text-blue-800" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Primary Action Buttons (Download Resume & View Resume) */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* 1. Download Resume PDF */}
              <a
                href={profile.resumePdfUrl}
                download="Arun_Sharma_Professional_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-950 active:bg-slate-900 rounded-lg shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-900 whitespace-nowrap"
                title="Download Arun_Sharma_Professional_Resume.pdf"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume PDF</span>
              </a>

              {/* 2. View Resume Button */}
              <a
                href={profile.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-blue-950 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-colors whitespace-nowrap"
                title="Open Arun_Sharma_Professional_Resume.pdf in a new tab"
              >
                <ExternalLink className="w-4 h-4 text-blue-900" />
                <span>View Resume</span>
              </a>

              {/* 3. Explore Projects Link */}
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors whitespace-nowrap"
              >
                <span>Featured Project (AdGenex)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Professional Profile Image Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-300 shadow-xl group">
                {!imageError && profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt="Computer Science student holding a laptop."
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-center text-white">
                    <div className="w-20 h-20 rounded-full bg-blue-900/40 border border-blue-500/40 flex items-center justify-center mb-4 text-blue-400">
                      <Code2 className="w-10 h-10" />
                    </div>
                    <div className="text-lg font-bold font-serif">
                      {profile.name}
                    </div>
                    <div className="text-xs text-blue-300 mt-1">
                      {profile.professionalTitle}
                    </div>
                    <div className="text-xs font-semibold text-slate-300 mt-1">
                      {profile.university}
                    </div>
                  </div>
                )}

                {/* Subtle Image Tag Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/85 backdrop-blur-xs px-4 py-2.5 text-white flex items-center justify-between text-xs border-t border-slate-800">
                  <div className="truncate font-medium">
                    <span className="font-semibold text-white">{profile.name}</span>
                    <span className="text-blue-400 ml-2 font-mono">B.E. (CSE)(AI)</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    AI & Cloud
                  </span>
                </div>
              </div>

              {/* Decorative subtle ambient blue lighting */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 bg-gradient-to-tr from-blue-700/20 via-emerald-600/10 to-transparent rounded-3xl -z-10 blur-xl"
              />
            </div>
          </div>
        </div>

        {/* Key Quick Academic Highlights Strip Below Hero */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
            <div className="text-[11px] font-semibold uppercase text-slate-500">Degree & Standing</div>
            <div className="text-sm font-bold text-slate-900">
              Second-Year B.E. (AI)
            </div>
            <div className="text-xs text-blue-900 font-semibold">CGPA: {profile.cgpa}</div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
            <div className="text-[11px] font-semibold uppercase text-slate-500">Institution</div>
            <div className="text-sm font-bold text-slate-900 truncate" title={profile.university}>
              {profile.university}
            </div>
            <div className="text-xs text-slate-500">{profile.location}</div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
            <div className="text-[11px] font-semibold uppercase text-slate-500">Certifications</div>
            <div className="text-sm font-bold text-slate-900">
              Microsoft Certified (2x)
            </div>
            <div className="text-xs text-blue-900 font-medium">Azure AI-900 & AZ-900</div>
          </div>

          <div className="p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-2xs space-y-1">
            <div className="text-[11px] font-semibold uppercase text-slate-500">Core Languages</div>
            <div className="text-sm font-bold text-slate-900">
              Python · C · C++
            </div>
            <div className="text-xs text-slate-500">Data Structures & Algos</div>
          </div>
        </div>
      </div>
    </section>
  );
};
