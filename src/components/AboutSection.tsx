import React from 'react';
import { Target, Compass, BookOpen, Brain, Cloud, Terminal, CheckCircle2 } from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface AboutSectionProps {
  profile: StudentProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-blue-900">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Academic Background & Technical Aspirations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A dedicated undergraduate building strong technical foundations in algorithms, artificial intelligence, and cloud platforms.
          </p>
        </div>

        {/* 1. Main Introduction Card */}
        <div className="bg-slate-50/90 rounded-2xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 space-y-6">
          <div className="space-y-4 max-w-4xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
              Personal & Academic Introduction
            </h3>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {profile.aboutIntro}
            </p>

            <div className="pt-2 text-xs sm:text-sm text-slate-600 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span>Institution: <strong className="text-slate-900">{profile.university}</strong></span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Degree: <strong className="text-slate-900">B.E. CSE (AI)</strong></span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Expected Graduation: <strong className="text-slate-900">2029</strong></span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Location: <strong className="text-slate-900">{profile.location}</strong></span>
            </div>
          </div>
        </div>

        {/* 2. Career Objective (Section 9) */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 lg:p-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400">
            <Target className="w-4 h-4 text-blue-400" />
            <span>Career Objective</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Internship & Professional Goal
          </h3>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-4xl">
            "{profile.careerObjective}"
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
            <span className="px-2.5 py-1 bg-slate-800 rounded-md text-slate-300">Data & Artificial Intelligence</span>
            <span className="px-2.5 py-1 bg-slate-800 rounded-md text-slate-300">Software Development</span>
            <span className="px-2.5 py-1 bg-slate-800 rounded-md text-slate-300">AI / Machine Learning</span>
            <span className="px-2.5 py-1 bg-slate-800 rounded-md text-slate-300">Cloud Technologies</span>
          </div>
        </div>

        {/* 3. Relevant Coursework & Soft Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Relevant Coursework (Section 7) */}
          <div className="md:col-span-6 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                <BookOpen className="w-4 h-4 text-blue-900" />
                <span>Section 7 · Curriculum</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Relevant Coursework
              </h3>
              <p className="text-sm text-slate-600">
                Foundational computer science and software development subjects studied as part of the curriculum at Chandigarh University:
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {profile.relevantCoursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between text-sm font-semibold text-slate-900"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-900" />
                    {course}
                  </span>
                  <span className="text-xs font-normal text-slate-500">Core Subject</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills (Section 8) */}
          <div className="md:col-span-6 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                <Brain className="w-4 h-4 text-blue-900" />
                <span>Section 8 · Professional Attributes</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Soft Skills
              </h3>
              <p className="text-sm text-slate-600">
                Interpersonal, analytical, and workflow disciplines applied during academic group work and technical problem solving:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {profile.softSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
