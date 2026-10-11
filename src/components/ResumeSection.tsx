import React, { useState } from 'react';
import {
  FileText,
  FileDown,
  ExternalLink,
  Printer,
  Copy,
  Check,
  Award,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface ResumeSectionProps {
  profile: StudentProfile;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${profile.resumePdfUrl}`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-16 md:py-24 border-b border-slate-200/80 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-blue-900">
            Official Curriculum Vitae
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
            Resume / Curriculum Vitae
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            View my resume to learn more about my education, technical skills, certifications, coursework, and career objectives.
          </p>
        </div>

        {/* Primary Action Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 lg:p-10 space-y-6 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Official PDF Document Available
              </div>
              <h3 className="text-2xl font-bold text-white font-serif">
                Download or View Arun Sharma's Resume
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Complete resume detailing academic credentials at Chandigarh University, Microsoft Azure certifications, programming competencies, AdGenex academic project, and career objectives.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {/* Button 2: Download Resume PDF */}
              <a
                href={profile.resumePdfUrl}
                download="Arun_Sharma_Professional_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-lg shadow-sm transition-colors whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                title="Download Arun_Sharma_Professional_Resume.pdf"
              >
                <FileDown className="w-4 h-4 text-blue-900" />
                <span>Download Resume PDF</span>
              </a>

              {/* Button 1: View Resume */}
              <a
                href={profile.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-950 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
                title="Open Arun_Sharma_Professional_Resume.pdf in a new tab"
              >
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <span>View Resume</span>
              </a>

              {/* Print button */}
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                title="Print resume"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print</span>
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span>File: <strong className="text-slate-200 font-mono">Arun_Sharma_Professional_Resume.pdf</strong></span>
              <span aria-hidden="true">·</span>
              <span>B.E. (CSE)(AI) · CGPA: {profile.cgpa}</span>
            </div>

            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Resume Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Resume Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Authentically Formatted On-Page Resume Sheet */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              Full Resume Document Preview
            </h3>
            <a
              href={profile.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-900 hover:underline flex items-center gap-1"
            >
              <span>Open PDF in new window</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-slate-300 shadow-md p-6 sm:p-10 lg:p-12 max-w-4xl mx-auto space-y-7 font-sans text-slate-800">
            {/* Resume Header */}
            <div className="border-b-2 border-blue-950 pb-5 space-y-2">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h4 className="text-3xl font-extrabold text-slate-900 tracking-tight font-serif uppercase">
                    {profile.name}
                  </h4>
                  <p className="text-sm font-semibold text-blue-900 mt-1">
                    BE (CSE)(AI) Student | {profile.university} | {profile.location}
                  </p>
                </div>
                <div className="text-xs text-slate-600 sm:text-right space-y-0.5 font-medium">
                  <div>
                    <a href={`mailto:${profile.email}`} className="text-blue-900 hover:underline">
                      {profile.email}
                    </a>
                  </div>
                  <div>
                    <a href={`tel:${profile.phone}`} className="text-slate-800">
                      {profile.phone}
                    </a>
                  </div>
                  <div>
                    <a
                      href={profile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900 hover:underline"
                    >
                      linkedin.com/in/arun-sharma-47b2743b2
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-slate-200 pb-1">
                Professional Summary
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Second-year BE (CSE)(AI) student at Chandigarh University with a CGPA of 8.2/10 and a strong foundation in Python, C, C++, and Data Structures & Algorithms. Earned two Microsoft certifications—Azure AI Fundamentals (AI-900) and Azure Fundamentals (AZ-900). Interested in Artificial Intelligence, Machine Learning, Data Science, and Cloud Computing, with a focus on practical problem-solving and continuous technical development.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-slate-200 pb-1">
                Education
              </h5>
              <div className="space-y-3">
                <div className="text-xs sm:text-sm space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>Chandigarh University</span>
                    <span className="font-normal text-slate-500 text-xs">2025 – Present</span>
                  </div>
                  <div className="text-slate-600 text-xs flex justify-between">
                    <span>Expected Graduation: 2029</span>
                    <span className="font-bold text-slate-900">CGPA: 8.2/10</span>
                  </div>
                </div>

                <div className="text-xs sm:text-sm space-y-0.5 pt-1">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>Army Public School, Unchi Bassi, Punjab</span>
                    <span className="font-normal text-slate-500 text-xs">Higher Secondary Education</span>
                  </div>
                  <div className="text-slate-600 text-xs">Class 12th</div>
                </div>

                <div className="text-xs sm:text-sm space-y-0.5 pt-1">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>Army Public School, Unchi Bassi, Punjab</span>
                    <span className="font-normal text-slate-500 text-xs">Secondary Education</span>
                  </div>
                  <div className="text-slate-600 text-xs">Class 10th</div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-slate-200 pb-1">
                Technical Skills
              </h5>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-bold text-slate-900">Programming Languages:</span>
                  <span className="sm:col-span-8">{profile.skills.programmingLanguages.join(', ')}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-bold text-slate-900">Data Structures & Algorithms:</span>
                  <span className="sm:col-span-8">{profile.skills.dataStructuresAndAlgorithms.join(', ')}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-bold text-slate-900">AI & Data:</span>
                  <span className="sm:col-span-8">{profile.skills.aiAndData.join(', ')}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-bold text-slate-900">Cloud:</span>
                  <span className="sm:col-span-8">{profile.skills.cloudComputing.join(', ')}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-bold text-slate-900">Other:</span>
                  <span className="sm:col-span-8">{profile.skills.otherSkills.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-slate-200 pb-1">
                Certifications
              </h5>
              <div className="space-y-1 text-xs text-slate-800">
                <div>• Microsoft Certified: Azure AI Fundamentals (AI-900)</div>
                <div>• Microsoft Certified: Azure Fundamentals (AZ-900)</div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-slate-200 pb-1">
                Projects & Repositories
              </h5>
              <div className="text-xs text-slate-700 space-y-1.5">
                <div>
                  <strong>AdGenex — AI Ad Copy & Campaign Assistant:</strong> Personal academic project exploring natural language processing workflows and prompt engineering pipelines for marketing copy synthesis.
                </div>
                <div>
                  <strong>COA Code:</strong> Computer Organization and Architecture GitHub code repository containing laboratory implementations and coursework learning materials (github.com/sharmaarunsharma206-sketch/COA_code).
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="space-y-1.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-slate-200 pb-1">
                Relevant Coursework
              </h5>
              <div className="text-xs text-slate-700">
                {profile.relevantCoursework.join('  •  ')}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="space-y-1.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-slate-200 pb-1">
                Soft Skills
              </h5>
              <div className="text-xs text-slate-700">
                {profile.softSkills.join('  •  ')}
              </div>
            </div>

            {/* Career Objective */}
            <div className="space-y-1.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-blue-950 border-b border-slate-200 pb-1">
                Career Objective
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed">
                {profile.careerObjective}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
