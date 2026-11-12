import React, { useState } from 'react';
import {
  Cpu,
  FileText,
  Eye,
  Download,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Info,
  Maximize2,
  X,
  Printer,
  ChevronRight,
  ShieldCheck,
  User,
  Hash,
} from 'lucide-react';
import { COADocument, StudentProfile } from '../types/portfolio';
import { COA_DOCUMENTS } from '../data/defaultPortfolio';

interface COASectionProps {
  profile: StudentProfile;
}

export const COASection: React.FC<COASectionProps> = ({ profile }) => {
  const [selectedDoc, setSelectedDoc] = useState<COADocument | null>(null);

  const handleOpenViewer = (doc: COADocument) => {
    setSelectedDoc(doc);
  };

  const handleCloseViewer = () => {
    setSelectedDoc(null);
  };

  return (
    <section id="coa" className="py-16 md:py-24 border-b border-slate-200/80 bg-slate-50/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header / Academic Dashboard Banner */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-900 text-white font-semibold text-xs rounded-md shadow-xs">
              <Cpu className="w-3.5 h-3.5" />
              <span>Computer Organisation and Architecture (COA)</span>
            </span>
            <span className="text-xs text-slate-500 font-mono">
              Class: 25BAI601 · Chandigarh University
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-blue-900 font-semibold font-mono">
              UID: 25BAI10030
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
                COA Assignment & Case Study Dashboard
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Dedicated coursework portal exploring processor architecture paradigms: Reduced Instruction Set Computer (RISC) vs. Complex Instruction Set Computer (CISC) design trade-offs, instruction decoding, addressing modes, and low-power embedded performance.
              </p>
            </div>

            <a
              href="https://github.com/sharmaarunsharma206-sketch/COA_code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-2xs transition-colors shrink-0 whitespace-nowrap"
            >
              <span>View COA Code Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Quick Academic Profile Snapshot Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs text-xs">
          <div>
            <span className="text-slate-400 block font-medium">Student Name</span>
            <span className="font-bold text-slate-900 text-sm">Arun Sharma</span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">University UID</span>
            <span className="font-mono font-bold text-blue-900 text-sm">25BAI10030</span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Subject Code</span>
            <span className="font-semibold text-slate-800">COA (25BAI601)</span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Core Topic</span>
            <span className="font-semibold text-slate-800">RISC vs. CISC Architectures</span>
          </div>
        </div>

        {/* 2 ATTRACTIVE DOCUMENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {COA_DOCUMENTS.map((doc) => {
            const isAssignment = doc.id === 'assignment';
            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top Banner Stripe */}
                <div
                  className={`h-1.5 w-full ${
                    isAssignment
                      ? 'bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-900'
                      : 'bg-gradient-to-r from-emerald-600 via-teal-700 to-blue-900'
                  }`}
                />

                <div className="p-6 sm:p-8 space-y-6 flex-1">
                  {/* Category & Badge Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                          isAssignment
                            ? 'bg-blue-50 text-blue-900 border border-blue-200/80'
                            : 'bg-emerald-50 text-emerald-900 border border-emerald-200/80'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{doc.documentType}</span>
                      </span>
                      <span className="text-xs font-semibold text-slate-500 font-mono">
                        {doc.pageCount} Pages
                      </span>
                    </div>

                    <span className="text-xs font-mono font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                      UID: {doc.uid}
                    </span>
                  </div>

                  {/* Document Title & Subject */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-bold text-slate-900 font-serif leading-snug group-hover:text-blue-900 transition-colors">
                      {doc.title}
                    </h3>
                    <div className="text-xs font-medium text-blue-900">
                      Category: {doc.category}
                    </div>
                  </div>

                  {/* Student & Submission Meta Box */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-xs text-slate-700 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Student Name:</span>
                      <strong className="text-slate-900">{doc.studentName}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">University UID:</span>
                      <strong className="font-mono text-blue-900">{doc.uid}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Academic Class:</span>
                      <span className="font-mono text-slate-800">{doc.className}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {doc.description}
                  </p>

                  {/* Key Highlights / Curriculum Anchors */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {isAssignment ? 'Key Topics Analyzed:' : 'Key Questions Explored:'}
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-xs text-slate-700">
                      {isAssignment ? (
                        <>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">9-Parameter Table</span>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">VAX vs RISC (A = B + C)</span>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">REP MOVSB Byte Copy</span>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">Embedded Recommendation</span>
                        </>
                      ) : (
                        <>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">RISC vs CISC Architecture</span>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">Fixed-Length Instruction Fetch</span>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">Instruction Complexity & Decoding</span>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">Addressing Modes Comparison</span>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">CISC Outperformance Analysis</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons (View & Download) */}
                <div className="p-6 bg-slate-50/80 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* View Button */}
                    <button
                      type="button"
                      onClick={() => handleOpenViewer(doc)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 active:bg-slate-900 rounded-lg shadow-xs transition-colors"
                      title={`View ${doc.documentType} directly on website`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View {doc.documentType}</span>
                    </button>

                    {/* Download Button */}
                    <a
                      href={doc.pdfUrl}
                      download={doc.downloadFilename}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg shadow-2xs transition-colors"
                      title={`Download ${doc.downloadFilename}`}
                    >
                      <Download className="w-3.5 h-3.5 text-blue-900" />
                      <span>Download {doc.documentType}</span>
                    </a>
                  </div>

                  {/* Open in new tab link */}
                  <a
                    href={doc.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-blue-900 hover:underline"
                    title="Open PDF in a new tab"
                  >
                    <span>New Tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Coursework Context Banner */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Academic Rigor & Original Work Certification</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">Original Coursework Analysis</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prepared by Arun Sharma for Computer Organisation and Architecture under faculty guidance at Chandigarh University.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">Format & Page Consistency</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict preservation of headings, code snippets, assembly instructions, tables, and page pagination (Assignment: 2 pages, Case Study: 3 pages).
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">Dual Document Accessibility</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless in-browser embedded document viewer and immediate direct offline PDF downloads.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EMBEDDED DOCUMENT VIEWER MODAL */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-slate-950 text-white flex items-center justify-between gap-4 border-b border-slate-800">
              <div className="flex items-center gap-3 truncate">
                <span className="p-1.5 bg-blue-900 rounded-md text-white">
                  <Cpu className="w-4 h-4" />
                </span>
                <div className="truncate">
                  <h3 className="text-sm font-bold truncate">
                    {selectedDoc.documentType}: {selectedDoc.title}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono">
                    {selectedDoc.studentName} · UID: {selectedDoc.uid} · {selectedDoc.pageCount} Pages
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={selectedDoc.pdfUrl}
                  download={selectedDoc.downloadFilename}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-blue-900" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>

                <a
                  href={selectedDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">New Tab</span>
                </a>

                <button
                  type="button"
                  onClick={handleCloseViewer}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-1"
                  aria-label="Close document viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer Frame */}
            <div className="flex-1 bg-slate-800 p-1 sm:p-2 flex flex-col">
              <object
                data={selectedDoc.pdfUrl}
                type="application/pdf"
                className="w-full h-full rounded-lg bg-white"
                title={`${selectedDoc.documentType} PDF Viewer`}
              >
                {/* Fallback for browsers that don't support inline object embedding */}
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900 text-white text-center space-y-4">
                  <FileText className="w-12 h-12 text-blue-400 mx-auto" />
                  <div className="space-y-1">
                    <h4 className="text-base font-bold">
                      {selectedDoc.documentType}: {selectedDoc.title}
                    </h4>
                    <p className="text-xs text-slate-400 max-w-md">
                      Your browser does not support direct PDF embedding. Click below to view the document in a new tab or download it.
                    </p>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={selectedDoc.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800"
                    >
                      Open in New Tab
                    </a>
                    <a
                      href={selectedDoc.pdfUrl}
                      download={selectedDoc.downloadFilename}
                      className="px-4 py-2 text-xs font-semibold text-slate-900 bg-white rounded-lg hover:bg-slate-100"
                    >
                      Download Document
                    </a>
                  </div>
                </div>
              </object>
            </div>

            {/* Viewer Bottom Status Bar */}
            <div className="px-5 py-2.5 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span>File: <strong className="text-slate-200 font-mono">{selectedDoc.downloadFilename}</strong></span>
                <span aria-hidden="true">·</span>
                <span>Length: {selectedDoc.pageCount} Pages</span>
              </div>
              <div className="text-slate-500">
                Computer Organisation and Architecture · Chandigarh University
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
