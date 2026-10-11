import React, { useState, useEffect } from 'react';
import { X, RotateCcw, Plus, Trash2, Check, Info } from 'lucide-react';
import { StudentProfile, ProjectItem } from '../types/portfolio';
import { ARUN_SHARMA_PROFILE } from '../data/defaultPortfolio';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: StudentProfile;
  onSaveProfile: (profile: StudentProfile) => void;
  onResetToDefaults: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
  onResetToDefaults,
}) => {
  const [formData, setFormData] = useState<StudentProfile>(profile);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // Quick project input state
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [newProjectTags, setNewProjectTags] = useState('');

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  if (!isOpen) return null;

  const handleChange = (field: keyof StudentProfile, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddProject = () => {
    if (!newProjectTitle.trim()) return;
    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: newProjectTitle.trim(),
      description: newProjectDesc.trim() || 'Academic project built with Python and algorithms.',
      tags: newProjectTags.split(',').map((t) => t.trim()).filter(Boolean),
      status: 'In Progress',
    };
    setFormData((prev) => ({
      ...prev,
      projects: [...(prev.projects || []), newProj],
    }));
    setNewProjectTitle('');
    setNewProjectDesc('');
    setNewProjectTags('');
  };

  const handleRemoveProject = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              Edit Portfolio Details
            </h3>
            <p className="text-xs text-slate-500">
              Customize personal details, add new projects, or update contact links.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Toolbar */}
        <div className="px-6 py-2.5 bg-blue-50/70 border-b border-blue-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-blue-900 font-medium">
            <Info className="w-4 h-4 text-blue-800 shrink-0" />
            <span>Profile values are saved locally in your browser.</span>
          </div>

          <button
            type="button"
            onClick={() => {
              setFormData(ARUN_SHARMA_PROFILE);
              onResetToDefaults();
            }}
            className="px-2.5 py-1 font-medium bg-white hover:bg-slate-100 border border-slate-300 rounded text-slate-700 transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset to Resume Defaults</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Personal Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Personal & Academic Identifiers
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Professional Title
                </label>
                <input
                  type="text"
                  value={formData.professionalTitle}
                  onChange={(e) => handleChange('professionalTitle', e.target.value)}
                  className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  University
                </label>
                <input
                  type="text"
                  value={formData.university}
                  onChange={(e) => handleChange('university', e.target.value)}
                  className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  CGPA / Grade Standing
                </label>
                <input
                  type="text"
                  value={formData.cgpa}
                  onChange={(e) => handleChange('cgpa', e.target.value)}
                  className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={formData.linkedinUrl}
                  onChange={(e) => handleChange('linkedinUrl', e.target.value)}
                  className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
                  required
                />
              </div>
            </div>
          </div>

          {/* Intros and Objectives */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Introduction & Career Objective
            </h4>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Hero Welcome Introduction
              </label>
              <textarea
                rows={2}
                value={formData.heroIntroduction}
                onChange={(e) => handleChange('heroIntroduction', e.target.value)}
                className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                About Me Detailed Overview
              </label>
              <textarea
                rows={3}
                value={formData.aboutIntro}
                onChange={(e) => handleChange('aboutIntro', e.target.value)}
                className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Career Objective (Internship Goal)
              </label>
              <textarea
                rows={2}
                value={formData.careerObjective}
                onChange={(e) => handleChange('careerObjective', e.target.value)}
                className="w-full text-sm px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Manage Projects (Future-proofing Section 6) */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Projects Showcase Management
              </h4>
              <span className="text-xs text-slate-500">
                {formData.projects?.length || 0} project(s) listed
              </span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <div className="text-xs font-semibold text-slate-800">
                Add a New Project
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Project Title (e.g. AI Image Classifier)"
                  value={newProjectTitle}
                  onChange={(e) => setNewProjectTitle(e.target.value)}
                  className="text-xs px-3 py-2 bg-white border border-slate-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Tech Stack (e.g. Python, PyTorch, Azure)"
                  value={newProjectTags}
                  onChange={(e) => setNewProjectTags(e.target.value)}
                  className="text-xs px-3 py-2 bg-white border border-slate-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Brief Description"
                  value={newProjectDesc}
                  onChange={(e) => setNewProjectDesc(e.target.value)}
                  className="sm:col-span-2 text-xs px-3 py-2 bg-white border border-slate-300 rounded-md"
                />
              </div>
              <button
                type="button"
                onClick={handleAddProject}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-md"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Project to Portfolio</span>
              </button>
            </div>

            {formData.projects && formData.projects.length > 0 && (
              <div className="space-y-2">
                {formData.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="font-bold text-slate-900">{proj.title}</div>
                      <div className="text-slate-500">{proj.description}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveProject(proj.id)}
                      className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 sticky bottom-0 bg-white py-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-lg shadow-sm transition-colors"
            >
              {saveSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Changes Saved!</span>
                </>
              ) : (
                <span>Save & Apply Updates</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
