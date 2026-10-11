import React from 'react';
import { Code, Binary, Cpu, Cloud, Wrench, Layers } from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface TechnicalSkillsSectionProps {
  profile: StudentProfile;
}

export const TechnicalSkillsSection: React.FC<TechnicalSkillsSectionProps> = ({
  profile,
}) => {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-blue-900">
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Skills & Core Knowledge Areas
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Proficiencies acquired through academic coursework, coding practice, and independent study in algorithms, AI, and cloud services.
          </p>
        </div>

        {/* 5 Distinct Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Programming Languages */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-4 hover:border-blue-300 transition-colors shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100/80 text-blue-950 rounded-xl">
                <Code className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Programming Languages
                </h3>
                <span className="text-xs text-slate-500">Core Syntaxes & Languages</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Languages used for core academic programming, data structure implementations, and script development.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {profile.skills.programmingLanguages.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 shadow-2xs"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Data Structures & Algorithms */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-4 hover:border-blue-300 transition-colors shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100/80 text-blue-950 rounded-xl">
                <Binary className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Data Structures & Algorithms
                </h3>
                <span className="text-xs text-slate-500">Foundational Problem Solving</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Essential concepts practiced for algorithmic efficiency, space-time trade-offs, and competitive problem solving.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {profile.skills.dataStructuresAndAlgorithms.map((dsa, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-800 shadow-2xs"
                >
                  {dsa}
                </span>
              ))}
            </div>
          </div>

          {/* 3. AI & Data */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-4 hover:border-blue-300 transition-colors shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100/80 text-blue-950 rounded-xl">
                <Cpu className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  AI & Data
                </h3>
                <span className="text-xs text-slate-500">Specialization Domain</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Core conceptual knowledge in intelligent computational models, statistical workflows, and machine learning pipelines.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {profile.skills.aiAndData.map((ai, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 shadow-2xs"
                >
                  {ai}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Cloud Computing */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-4 hover:border-blue-300 transition-colors shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100/80 text-blue-950 rounded-xl">
                <Cloud className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Cloud Computing
                </h3>
                <span className="text-xs text-slate-500">Infrastructure & Azure Services</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Certified cloud fundamentals covering Azure virtual machines, storage, security, and cloud scalability models.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {profile.skills.cloudComputing.map((cloud, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 shadow-2xs"
                >
                  {cloud}
                </span>
              ))}
            </div>
          </div>

          {/* 5. Other Skills (col-span-1 or 2 depending on screen) */}
          <div className="md:col-span-2 lg:col-span-2 bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-4 hover:border-blue-300 transition-colors shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-100/80 text-blue-950 rounded-xl">
                <Wrench className="w-5 h-5 text-blue-900" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Other Technical & Analytical Skills
                </h3>
                <span className="text-xs text-slate-500">System Design & Problem Analysis</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Methodologies applied for writing modular, maintainable, and mathematically sound software.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {profile.skills.otherSkills.map((other, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 shadow-2xs"
                >
                  {other}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
