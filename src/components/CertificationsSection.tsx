import React from 'react';
import { Award, Cloud, BrainCircuit, CheckCircle, ShieldCheck } from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface CertificationsSectionProps {
  profile: StudentProfile;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  profile,
}) => {
  return (
    <section id="certifications" className="py-16 md:py-24 border-b border-slate-200/80 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-blue-900">
            Professional Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Microsoft Certifications
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Industry-recognized credentials earned from Microsoft verifying foundational competence in cloud computing and artificial intelligence workloads.
          </p>
        </div>

        {/* 2 Dedicated Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.certifications.map((cert) => {
            const isAI = cert.badgeType === 'azure-ai';
            return (
              <div
                key={cert.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 hover:shadow-md transition-all relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Subtle Stripe */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 ${
                    isAI ? 'bg-gradient-to-r from-blue-700 to-indigo-600' : 'bg-gradient-to-r from-blue-900 to-cyan-700'
                  }`}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-900">
                        {isAI ? (
                          <BrainCircuit className="w-6 h-6 text-blue-900" />
                        ) : (
                          <Cloud className="w-6 h-6 text-blue-900" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {cert.issuer} Certification
                        </span>
                        <div className="text-sm font-bold text-blue-900">
                          Exam {cert.code}
                        </div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Certified</span>
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900 font-serif">
                      {cert.name}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-900" />
                    <span>Microsoft Official Credential</span>
                  </span>
                  <span className="font-mono text-slate-500">ID: {cert.code}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
