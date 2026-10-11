import React, { useState } from 'react';
import {
  FolderGit2,
  Sparkles,
  Play,
  Layers,
  Code2,
  Terminal,
  Copy,
  Check,
  RotateCcw,
  Info,
  ExternalLink,
  ChevronRight,
  Github,
  Cpu,
  GitBranch,
} from 'lucide-react';
import { StudentProfile } from '../types/portfolio';

interface ProjectsSectionProps {
  profile: StudentProfile;
  onOpenEditModal: () => void;
}

interface AdVariation {
  id: string;
  angle: string;
  headline: string;
  body: string;
  callToAction: string;
  suggestedTags: string[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  profile,
  onOpenEditModal,
}) => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // AdGenex Demo State
  const [productName, setProductName] = useState('CloudTrack AI');
  const [industry, setIndustry] = useState('Tech & SaaS');
  const [tone, setTone] = useState('Professional & Authoritative');
  const [targetAudience, setTargetAudience] = useState('Engineering Leads & DevOps Teams');
  const [isGenerating, setIsGenerating] = useState(false);
  const [adOutputs, setAdOutputs] = useState<AdVariation[]>([
    {
      id: 'v1',
      angle: 'Value Proposition & Reliability',
      headline: 'Eliminate Infrastructure Blindspots Before They Impact Production',
      body: 'CloudTrack AI unifies telemetry logs and predictive anomaly detection in a single lightweight dashboard. Engineered for teams that demand zero-downtime reliability.',
      callToAction: 'Schedule an Architecture Review',
      suggestedTags: ['#CloudComputing', '#DevOps', '#AIOps', '#Reliability'],
    },
    {
      id: 'v2',
      angle: 'Problem-Solution & Speed',
      headline: 'Stop Chasing Alert Storms. Pinpoint Root Causes in Real Time.',
      body: 'Transform fragmented log streams into clear, actionable incident root causes. Built with intelligent correlation models to cut MTTR by half.',
      callToAction: 'Explore the Technical Documentation',
      suggestedTags: ['#SystemsEngineering', '#CloudMonitoring', '#Observability'],
    },
    {
      id: 'v3',
      angle: 'Minimalist High-Impact',
      headline: 'Cloud Observability, Simplified.',
      body: 'Intelligent alerting. Predictable performance. CloudTrack AI delivers the metrics your infrastructure team actually needs.',
      callToAction: 'Get Started with Free Developer Tier',
      suggestedTags: ['#CloudNative', '#Telemetry', '#Infrastructure'],
    },
  ]);

  const handleSynthesizeAdCopy = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const cleanProduct = productName.trim() || 'AdGenex Prototype';
      const cleanAudience = targetAudience.trim() || 'Modern Professionals';

      let newVariants: AdVariation[] = [];

      if (industry === 'Tech & SaaS') {
        newVariants = [
          {
            id: 'v1-' + Date.now(),
            angle: `${tone} Angle · Performance Focus`,
            headline: `Scale Operations Faster with ${cleanProduct}`,
            body: `Designed specifically for ${cleanAudience}. ${cleanProduct} streamlines complex workflows through modular automation and structured intelligence.`,
            callToAction: 'Request Developer Access',
            suggestedTags: ['#SaaS', '#Automation', '#Engineering', '#CloudTech'],
          },
          {
            id: 'v2-' + Date.now(),
            angle: 'High-Impact Direct Conversion',
            headline: `Built for ${cleanAudience} Who Value Accuracy`,
            body: `Tackle routine friction points with ${cleanProduct}. Deliver measurable efficiency without bloated overhead or steep onboarding curves.`,
            callToAction: 'Read Technical Whitepaper',
            suggestedTags: ['#Productivity', '#SoftwareArchitecture', '#Innovation'],
          },
        ];
      } else if (industry === 'E-Commerce') {
        newVariants = [
          {
            id: 'v1-' + Date.now(),
            angle: `${tone} Angle · Benefit-Driven`,
            headline: `Experience the Standard of Quality with ${cleanProduct}`,
            body: `Curated directly for ${cleanAudience}. Engineered with precision craftsmanship to elevate your daily routine from day one.`,
            callToAction: 'Discover the Collection',
            suggestedTags: ['#QualityCraft', '#EssentialGear', '#ModernLiving'],
          },
          {
            id: 'v2-' + Date.now(),
            angle: 'Curated Social Creative',
            headline: `Why ${cleanAudience} Are Choosing ${cleanProduct}`,
            body: `Authentic design meets everyday functionality. See how ${cleanProduct} sets a higher benchmark in reliability.`,
            callToAction: 'Shop Now & Enjoy Free Delivery',
            suggestedTags: ['#Trending', '#CuratedStyle', '#SmartChoice'],
          },
        ];
      } else {
        newVariants = [
          {
            id: 'v1-' + Date.now(),
            angle: `${tone} Angle · Solution-First`,
            headline: `Reinvent How You Build and Learn with ${cleanProduct}`,
            body: `Tailored for ${cleanAudience}. ${cleanProduct} provides the structured tools and analytical rigor you need to excel in your field.`,
            callToAction: 'Learn More & Get Started',
            suggestedTags: ['#ContinuousLearning', '#Skills', '#FutureReady'],
          },
          {
            id: 'v2-' + Date.now(),
            angle: 'Analytical Milestone Angle',
            headline: `Proven Simplicity for ${cleanAudience}`,
            body: `Structured problem solving distilled into an accessible interface. Discover how ${cleanProduct} turns vision into execution.`,
            callToAction: 'Explore Curriculum & Guides',
            suggestedTags: ['#EdTech', '#KnowledgeEngine', '#HigherStandards'],
          },
        ];
      }

      setAdOutputs(newVariants);
      setIsGenerating(false);
    }, 450);
  };

  const handleCopyText = (v: AdVariation) => {
    const textToCopy = `HEADLINE: ${v.headline}\nBODY: ${v.body}\nCTA: ${v.callToAction}\nTAGS: ${v.suggestedTags.join(' ')}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(v.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-blue-900">
            Featured Academic Projects & Repositories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-serif">
            Projects & Code Repositories
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical implementations, subject code repositories, and academic prototypes built to explore programming, computer organization, and artificial intelligence.
          </p>
        </div>

        {/* Featured Projects Grid: AdGenex & COA Code */}
        <div className="space-y-8">
          {/* Project 1: AdGenex (AI Ad Copy & Campaign Assistant) */}
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-blue-900/40 space-y-6 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="space-y-4 max-w-3xl relative z-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-900/90 text-blue-200 border border-blue-700/60 rounded-md">
                  Personal Academic Project
                </span>
                <span className="px-2.5 py-1 text-xs font-semibold tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 rounded-md">
                  Active Prototype
                </span>
                <span className="text-xs text-slate-400">
                  Artificial Intelligence & NLP
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif tracking-tight">
                AdGenex — AI Ad Copy & Campaign Assistant
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                A personal academic project exploring natural language processing workflows and prompt engineering pipelines. Generates targeted marketing copy variations, campaign headlines, value propositions, and calls-to-action based on structured product attributes and user intent.
              </p>

              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-1.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span>Academic Scope & Technical Objectives:</span>
                </div>
                <p className="text-slate-400 leading-relaxed text-xs">
                  Built to examine structured prompt templating, parameter-driven creative variation synthesis, and modular client-side integration for marketing technology without relying on opaque abstractions.
                </p>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="space-y-2 relative z-10">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Technical Stack & Domain Competencies:
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 bg-slate-800/90 border border-slate-700 rounded-lg text-slate-200">Python</span>
                <span className="px-3 py-1 bg-slate-800/90 border border-slate-700 rounded-lg text-slate-200">NLP & Prompt Pipelines</span>
                <span className="px-3 py-1 bg-slate-800/90 border border-slate-700 rounded-lg text-slate-200">React & TypeScript</span>
                <span className="px-3 py-1 bg-slate-800/90 border border-slate-700 rounded-lg text-slate-200">Tailwind CSS</span>
                <span className="px-3 py-1 bg-slate-800/90 border border-slate-700 rounded-lg text-slate-200">Algorithmic Synthesis</span>
              </div>
            </div>

            {/* Interactive Demo Action Bar */}
            <div className="pt-4 border-t border-slate-800/90 flex flex-wrap items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowDemoModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-lg shadow-sm transition-all whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <Play className="w-4 h-4 fill-slate-900 text-slate-900" />
                  <span>Test Interactive Demo (Prototype)</span>
                </button>

                <a
                  href="#resume"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <span>View in CV / Resume</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-[11px] text-slate-400 font-medium">
                * Demo simulates algorithmic prompt workflows using client-side sample synthesis.
              </div>
            </div>
          </div>

          {/* Project 2: COA Code (Computer Organization and Architecture Repository) */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-xs hover:border-blue-300 transition-all space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-3 max-w-3xl">
                {/* Badges / Meta */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-slate-900 text-white rounded-md">
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repository</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 rounded-md">
                    <Cpu className="w-3.5 h-3.5 text-blue-800" />
                    <span>Computer Organization and Architecture</span>
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    Chandigarh University Coursework
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif tracking-tight">
                  COA Code
                </h3>

                {/* Project Description */}
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  A dedicated GitHub repository containing a collection of Computer Organization and Architecture (COA) code, laboratory implementations, and related learning materials.
                </p>

                {/* Academic Focus Context */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <GitBranch className="w-4 h-4 text-blue-900" />
                    <span>Repository Focus & Architecture Fundamentals:</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Maintains source files and academic coursework exercises exploring computer hardware concepts, instruction sets, data path operations, and computer architecture design principles.
                  </p>
                </div>
              </div>

              {/* Repository Monospace URL Pill */}
              <div className="shrink-0 font-mono text-xs text-slate-500 bg-white border border-slate-200/80 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-slate-700" />
                <span className="text-slate-800 font-medium">sharmaarunsharma206-sketch/COA_code</span>
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Technology & Subject Tags:
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 shadow-2xs">
                  Computer Organization and Architecture
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 shadow-2xs">
                  Hardware Fundamentals
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 shadow-2xs">
                  Low-Level Computing
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-800 shadow-2xs">
                  GitHub Open Source
                </span>
              </div>
            </div>

            {/* Buttons & Links */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {/* Prominent "View on GitHub" button */}
                <a
                  href="https://github.com/sharmaarunsharma206-sketch/COA_code"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Arun Sharma's COA Code repository on GitHub"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-lg shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-900 whitespace-nowrap"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>

                {/* Optional "Explore Repository" text link */}
                <a
                  href="https://github.com/sharmaarunsharma206-sketch/COA_code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-blue-900 hover:text-blue-700 hover:underline transition-colors"
                >
                  <span>Explore Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-xs text-slate-500 font-mono">
                Platform: GitHub · Public Repository
              </div>
            </div>
          </div>
        </div>

        {/* Status of Ongoing Academic Project Portfolio */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-lg font-bold text-slate-900 font-serif">
                Academic Project Pipeline & Future Work
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {profile.projectsDescription}
              </p>
            </div>
            <button
              onClick={onOpenEditModal}
              type="button"
              className="text-xs font-semibold text-blue-900 hover:text-blue-700 underline shrink-0"
            >
              Add / Manage Projects
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
              <div className="text-xs font-bold text-slate-900">Python AI & Data Scripts</div>
              <p className="text-xs text-slate-500">Exploratory data analysis, statistical modeling, and ML fundamentals.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
              <div className="text-xs font-bold text-slate-900">C++ Data Structure Implementations</div>
              <p className="text-xs text-slate-500">Custom trees, graphs, linked list benchmarks, and algorithmic analysis.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
              <div className="text-xs font-bold text-slate-900">Azure Cloud Resource Prototypes</div>
              <p className="text-xs text-slate-500">Exploring cloud-hosted serverless functions and storage containers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive AdGenex Demo Modal */}
      {showDemoModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-300 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <h3 className="text-base font-bold font-serif">
                    AdGenex Interactive Academic Prototype
                  </h3>
                </div>
                <p className="text-xs text-slate-400">
                  Parameter-driven ad copy synthesis simulation · Natural Language Prompt Pipeline
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors text-xs font-medium"
              >
                Close ✕
              </button>
            </div>

            {/* Clear Transparency Banner */}
            <div className="px-6 py-2.5 bg-blue-50 border-b border-blue-200/80 text-blue-950 text-xs flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-800 shrink-0 mt-0.5" />
              <div>
                <strong>Prototype Transparency Notice:</strong> This interactive demo executes client-side structured prompt synthesis with sample generation algorithms to demonstrate the AdGenex interface and prompt design without incurring external paid LLM billing costs.
              </div>
            </div>

            {/* Interactive Workspace */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
              {/* Parameter Controls */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4 shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Input Parameters
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Product / Project Name
                    </label>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
                      placeholder="e.g. CloudTrack AI"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Industry / Vertical
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:outline-hidden bg-white"
                    >
                      <option value="Tech & SaaS">Tech & SaaS</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Education & Skills">Education & Skills</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tone of Voice
                    </label>
                    <select
                      value={tone}
                      onChange={(e) => setTone(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:outline-hidden bg-white"
                    >
                      <option value="Professional & Authoritative">Professional & Authoritative</option>
                      <option value="Energetic & Direct">Energetic & Direct</option>
                      <option value="Minimalist & Modern">Minimalist & Modern</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Audience
                    </label>
                    <input
                      type="text"
                      value={targetAudience}
                      onChange={(e) => setTargetAudience(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
                      placeholder="e.g. Engineering Leads"
                    />
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={handleSynthesizeAdCopy}
                    disabled={isGenerating}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 active:bg-slate-900 rounded-lg shadow-sm transition-colors"
                  >
                    {isGenerating ? (
                      <>
                        <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                        <span>Synthesizing Copy...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                        <span>Synthesize Ad Variations</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Generated Ad Variations */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">
                    Synthesized Ad Creative Variations ({adOutputs.length})
                  </h4>
                  <span className="text-xs text-slate-500">
                    Formatted for digital search & social placements
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {adOutputs.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl border border-slate-200 p-5 space-y-3 shadow-2xs flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-blue-900">
                            {item.angle}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleCopyText(item)}
                            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors"
                            title="Copy to clipboard"
                          >
                            {copiedId === item.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-600 font-semibold text-[11px]">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span className="text-[11px]">Copy</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="font-bold text-sm text-slate-900 leading-snug">
                          {item.headline}
                        </div>

                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.body}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-500">Recommended CTA:</span>
                          <span className="font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                            {item.callToAction}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-1 text-[11px] text-blue-900">
                          {item.suggestedTags.map((t, idx) => (
                            <span key={idx}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span>Academic Prototype by <strong>Arun Sharma</strong> · B.E. (CSE)(AI)</span>
              <button
                type="button"
                onClick={() => setShowDemoModal(false)}
                className="px-3 py-1.5 font-medium bg-white border border-slate-300 rounded-md hover:bg-slate-50"
              >
                Close Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
