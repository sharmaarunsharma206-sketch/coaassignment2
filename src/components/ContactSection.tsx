import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, Check, Copy } from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface ContactSectionProps {
  profile: StudentProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-blue-900">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Contact & Academic Inquiries
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Interested in discussing internship opportunities in Data & AI, Software Development, or academic collaboration? Feel free to reach out directly.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card (Clickable mailto) */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-4 hover:border-blue-300 transition-colors shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-900">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                Direct Email
              </h3>
              <p className="text-xs text-slate-500">
                Primary contact for recruiters, campus coordinators, and academic inquiries.
              </p>
            </div>

            <div className="pt-4 space-y-2">
              <a
                href={`mailto:${profile.email}`}
                className="text-sm font-semibold text-blue-900 hover:text-blue-700 hover:underline break-all block"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-medium">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* LinkedIn Card (Opens in new tab) */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-4 hover:border-blue-300 transition-colors shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-900">
                <Linkedin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-slate-500">
                Connect professionally, view verified credentials, and explore my academic network.
              </p>
            </div>

            <div className="pt-4">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-lg shadow-2xs transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>Visit LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-4 hover:border-blue-300 transition-colors shadow-2xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-900">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                Current Location
              </h3>
              <p className="text-xs text-slate-500">
                Campus location for in-person university engagements and internship positions.
              </p>
            </div>

            <div className="pt-4">
              <div className="text-sm font-semibold text-slate-900">
                {profile.location}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {profile.university} Campus Region
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
