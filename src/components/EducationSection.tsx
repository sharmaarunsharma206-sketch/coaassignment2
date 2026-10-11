import React from 'react';
import { GraduationCap, School, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface EducationSectionProps {
  profile: StudentProfile;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ profile }) => {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-slate-200/80 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-blue-900">
            Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Academic Background
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Formal engineering studies at Chandigarh University and foundational secondary education at Army Public School.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* University Card (7 cols) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-900 font-semibold text-xs rounded-md border border-blue-200/80">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Higher Education
                </span>
                <span className="text-xs font-medium text-slate-500 tabular-nums">
                  2025 – Present
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
                  Chandigarh University
                </h3>
                <p className="text-base font-semibold text-blue-900">
                  Bachelor of Engineering — Computer Science & Engineering (Artificial Intelligence)
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Currently in the second year of study, focusing on data structures, algorithmic problem solving, machine learning fundamentals, and cloud technologies.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Calendar className="w-4 h-4 text-blue-900" />
                <span>Expected Graduation: <strong>2029</strong></span>
              </div>
              <div className="text-slate-500">
                Current Status: <strong>Second-Year Student</strong>
              </div>
            </div>
          </div>

          {/* School Education Card (5 cols) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 shadow-2xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-800 font-semibold text-xs rounded-md border border-slate-200">
                  <School className="w-3.5 h-3.5" />
                  School Education
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Punjab, India
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Army Public School
                </h3>
                <p className="text-sm font-semibold text-slate-700">
                  Unchi Bassi, Punjab
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 space-y-1">
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-900" />
                    <span>Class 12</span>
                  </div>
                  <div className="text-xs text-slate-500 pl-6">
                    Senior Secondary Education
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 space-y-1">
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-900" />
                    <span>Class 10</span>
                  </div>
                  <div className="text-xs text-slate-500 pl-6">
                    Secondary School Education
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              Foundational science and mathematics education completed with academic discipline.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
