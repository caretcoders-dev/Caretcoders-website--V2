import React, { useState } from 'react';
import { jobPositionsData, cultureValues, internshipProgramInfo } from '../data/careers';
import { JobPosition } from '../types';
import { cyberAudio } from '../utils/sound';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Upload, 
  ChevronRight, 
  X, 
  Send, 
  Sparkles,
  Terminal,
  FileCode,
  Mail
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [activeDept, setActiveDept] = useState<string>('ALL');
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applyModalOpen, setApplyModalOpen] = useState<boolean>(false);

  // Application Portal Form State
  const [applicant, setApplicant] = useState({
    fullName: '',
    email: '',
    githubUrl: '',
    portfolioUrl: '',
    experienceYears: '3-5 years',
    coverNote: ''
  });
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  const departments = ['ALL', ...Array.from(new Set(jobPositionsData.map(j => j.department)))];

  const filteredJobs = activeDept === 'ALL'
    ? jobPositionsData
    : jobPositionsData.filter(j => j.department === activeDept);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    cyberAudio.playClick();

    const genId = 'APP-CC-' + Math.floor(100000 + Math.random() * 900000);
    setTrackingId(genId);

    if (selectedJob) {
      const subject = encodeURIComponent(`[Job Application] ${selectedJob.title} - ${applicant.fullName}`);
      const body = encodeURIComponent(
        `Job Application Details:\n` +
        `------------------------------------------\n` +
        `Position: ${selectedJob.title} (${selectedJob.department})\n` +
        `Applicant Name: ${applicant.fullName}\n` +
        `Applicant Email: ${applicant.email}\n` +
        `GitHub / Portfolio: ${applicant.githubUrl}\n` +
        `Experience: ${applicant.experienceYears}\n\n` +
        `Cover Note / Bio:\n${applicant.coverNote || 'N/A'}\n` +
        `------------------------------------------\n` +
        `Tracking ID: ${genId}\n` +
        `Sent via CaretCoders Careers Portal`
      );
      const mailtoUrl = `mailto:hr@caretcoders.com?subject=${subject}&body=${body}`;
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 400);
    }

    setApplicationSubmitted(true);
    cyberAudio.playSuccess();
  };

  return (
    <div className="min-h-screen bg-retro-grid py-12 lg:py-20 text-[#E8E8C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="border-b-2 border-[#E8E8C6]/30 pb-8 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#252525] border border-[#E8E8C6] shadow-[2px_2px_0px_#474744] text-xs font-share-tech">
            <Briefcase className="w-3.5 h-3.5 text-amber-300" />
            <span>CAREERS & FELLOWSHIPS // JOIN THE TEAM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-sixtyfour text-[#E8E8C6]">
            Careers Portal
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm font-mono text-[#E8E8C6]/75 max-w-2xl leading-relaxed">
              Help us build next-generation zk-provenance asset engines, pesticide-reducing IoT mesh networks, and AST AI developer tools. Remote-first, deep work focus, high engineering standards.
            </p>
            <a 
              href="mailto:hr@caretcoders.com" 
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-[#252525] border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#252525] font-share-tech font-bold text-xs shadow-[3px_3px_0px_#474744] transition-all shrink-0"
            >
              <Mail className="w-4 h-4" />
              <span>HR PORTAL: hr@caretcoders.com</span>
            </a>
          </div>
        </div>

        {/* 1. Open Positions Section */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#474744] pb-4 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-sixtyfour text-[#E8E8C6]">
                Open Positions
              </h2>
              <p className="text-xs font-mono text-[#E8E8C6]/70">
                Explore engineering, hardware, and developer advocacy roles.
              </p>
            </div>

            {/* Department Filter Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-share-tech">
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => { cyberAudio.playClick(); setActiveDept(dept); }}
                  className={`px-3 py-1.5 border transition-all ${
                    activeDept === dept
                      ? 'bg-[#E8E8C6] text-[#252525] border-[#E8E8C6] font-bold shadow-[2px_2px_0px_#474744]'
                      : 'bg-[#252525] text-[#E8E8C6] border-[#474744] hover:border-[#E8E8C6]'
                  }`}
                >
                  {dept === 'ALL' ? 'ALL DEPARTMENTS' : dept}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#252525] border-2 border-[#E8E8C6] p-6 shadow-[6px_6px_0px_#474744] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-share-tech border-b border-[#474744] pb-2">
                    <span className="px-2 py-0.5 bg-[#474744] text-amber-300 font-mono font-bold">
                      {job.department}
                    </span>
                    <span className="text-emerald-400 font-bold border border-emerald-400 px-1.5 py-0.5 text-[10px]">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-sixtyfour text-[#E8E8C6]">
                    {job.title}
                  </h3>

                  <div className="flex items-center space-x-4 text-xs font-share-tech text-[#E8E8C6]/70">
                    <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-rose-400" /> {job.location}</span>
                    <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-cyan-300" /> {job.experience}</span>
                  </div>

                  <p className="text-xs font-mono text-[#E8E8C6]/80 line-clamp-3 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#474744] flex items-center justify-between font-share-tech">
                  <button
                    onClick={() => { cyberAudio.playClick(); setSelectedJob(job); setApplyModalOpen(true); }}
                    className="w-full py-2 bg-[#E8E8C6] text-[#252525] font-bold text-xs shadow-[2px_2px_0px_#474744] flex items-center justify-center space-x-1"
                  >
                    <span>APPLY_FOR_ROLE()</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Internship Program Spotlight */}
        <div className="bg-[#252525] border-2 border-[#E8E8C6] p-6 lg:p-8 shadow-[8px_8px_0px_#474744] space-y-6">
          <div className="flex items-center space-x-2 border-b-2 border-[#474744] pb-4">
            <GraduationCap className="w-6 h-6 text-amber-300" />
            <div>
              <span className="text-xs font-share-tech text-amber-300 uppercase tracking-widest block">SPECIAL PROGRAM</span>
              <h3 className="text-2xl font-sixtyfour text-[#E8E8C6]">{internshipProgramInfo.title}</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-share-tech text-xs">
            <div className="bg-[#474744]/30 p-3 border border-[#474744]">
              <span className="text-[#E8E8C6]/60 block uppercase">PROGRAM DURATION</span>
              <strong className="text-[#E8E8C6] font-mono text-sm">{internshipProgramInfo.duration}</strong>
            </div>
            <div className="bg-[#474744]/30 p-3 border border-[#474744]">
              <span className="text-[#E8E8C6]/60 block uppercase">MONTHLY STIPEND</span>
              <strong className="text-emerald-400 font-mono text-sm">{internshipProgramInfo.stipend}</strong>
            </div>
            <div className="bg-[#474744]/30 p-3 border border-[#474744]">
              <span className="text-[#E8E8C6]/60 block uppercase">ELIGIBILITY</span>
              <strong className="text-cyan-300 font-mono text-xs">{internshipProgramInfo.eligibility}</strong>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-share-tech text-[#E8E8C6] font-bold uppercase">FELLOWSHIP HIGHLIGHTS & BENEFITS:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
              {internshipProgramInfo.highlights.map((h, idx) => (
                <div key={idx} className="flex items-center space-x-2 p-2 bg-[#474744]/20 border border-[#474744]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Company Culture Section */}
        <div className="space-y-6">
          <div className="border-b border-[#474744] pb-3">
            <h3 className="text-2xl font-sixtyfour text-[#E8E8C6]">Company Culture & Ethos</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cultureValues.map((val, idx) => (
              <div key={idx} className="bg-[#252525] border-2 border-[#E8E8C6] p-6 shadow-[6px_6px_0px_#474744] space-y-2 font-mono">
                <span className="text-xs font-share-tech text-amber-300 font-bold block">// {val.tagline}</span>
                <h4 className="text-lg font-sixtyfour text-[#E8E8C6]">{val.title}</h4>
                <p className="text-xs text-[#E8E8C6]/80 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Application Portal Modal */}
      {applyModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#252525] border-2 border-[#E8E8C6] max-w-2xl w-full p-6 shadow-[10px_10px_0px_#474744] space-y-6 relative font-mono max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => { cyberAudio.playClick(); setApplyModalOpen(false); setApplicationSubmitted(false); }}
              className="absolute top-4 right-4 p-1 bg-[#474744] text-[#E8E8C6] hover:bg-[#E8E8C6] hover:text-[#252525]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b-2 border-[#474744] pb-3">
              <span className="px-2 py-0.5 bg-[#474744] text-amber-300 text-xs font-share-tech uppercase font-bold">
                APPLICATION PORTAL
              </span>
              <h3 className="text-2xl font-sixtyfour text-[#E8E8C6] mt-1">{selectedJob.title}</h3>
              <p className="text-xs font-share-tech text-[#E8E8C6]/70">{selectedJob.department} • {selectedJob.location}</p>
            </div>

            {applicationSubmitted ? (
              <div className="py-6 space-y-4 font-mono text-xs">
                <div className="p-4 bg-[#474744]/30 border-2 border-emerald-400 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-share-tech font-bold text-emerald-400">[APPLICATION_DISPATCHED_TO_HR]</h4>
                  <p className="text-xs text-[#E8E8C6]/80">
                    Your application for <strong className="text-amber-300">{selectedJob.title}</strong> has been routed directly to <strong className="text-emerald-400 font-bold">hr@caretcoders.com</strong>.
                  </p>
                </div>

                <div className="p-3 bg-[#1a1a1a] border border-[#474744] text-[11px] space-y-1 text-[#E8E8C6]/70">
                  <div><span className="text-amber-300 font-bold">HR RECRUITMENT INBOX:</span> hr@caretcoders.com</div>
                  <div><span className="text-amber-300 font-bold">APPLICANT:</span> {applicant.fullName} ({applicant.email})</div>
                  <div><span className="text-amber-300 font-bold">TRACKING REF:</span> {trackingId}</div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`mailto:hr@caretcoders.com?subject=${encodeURIComponent(`[Job Application] ${selectedJob.title} - ${applicant.fullName}`)}&body=${encodeURIComponent(`Position: ${selectedJob.title}\nApplicant Name: ${applicant.fullName}\nEmail: ${applicant.email}\nGitHub/Portfolio: ${applicant.githubUrl}\nExperience: ${applicant.experienceYears}\n\nCover Note:\n${applicant.coverNote}\n\nTracking ID: ${trackingId}`)}`}
                    className="px-4 py-2 bg-emerald-400 text-[#252525] font-share-tech font-bold text-xs inline-flex items-center space-x-1 hover:bg-emerald-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 mr-1" />
                    <span>OPEN_EMAIL_CLIENT()</span>
                  </a>
                  <button
                    onClick={() => { setApplicationSubmitted(false); setApplyModalOpen(false); }}
                    className="px-4 py-2 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-xs"
                  >
                    CLOSE_PORTAL()
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 text-[11px] font-share-tech block">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      value={applicant.fullName}
                      onChange={(e) => setApplicant({ ...applicant, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-2 text-[#E8E8C6] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 text-[11px] font-share-tech block">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      value={applicant.email}
                      onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                      placeholder="jane@dev.io"
                      className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-2 text-[#E8E8C6] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 text-[11px] font-share-tech block">GITHUB / PORTFOLIO LINK *</label>
                    <input
                      type="url"
                      required
                      value={applicant.githubUrl}
                      onChange={(e) => setApplicant({ ...applicant, githubUrl: e.target.value })}
                      placeholder="https://github.com/janedoe"
                      className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-2 text-[#E8E8C6] outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 text-[11px] font-share-tech block">YEARS OF EXPERIENCE</label>
                    <select
                      value={applicant.experienceYears}
                      onChange={(e) => setApplicant({ ...applicant, experienceYears: e.target.value })}
                      className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-2 text-[#E8E8C6] outline-none"
                    >
                      <option value="1-2 years">1 - 2 Years</option>
                      <option value="3-5 years">3 - 5 Years</option>
                      <option value="5+ years">5+ Years</option>
                    </select>
                  </div>
                </div>

                {/* Resume Dropzone Simulator */}
                <div 
                  onClick={() => { cyberAudio.playClick(); setResumeUploaded(!resumeUploaded); }}
                  className={`p-4 border-2 border-dashed text-center cursor-pointer transition-colors ${
                    resumeUploaded ? 'border-emerald-400 bg-emerald-950/20 text-emerald-400' : 'border-[#E8E8C6]/50 hover:border-[#E8E8C6]'
                  }`}
                >
                  <Upload className="w-6 h-6 mx-auto mb-1" />
                  <span className="font-share-tech text-xs block font-bold">
                    {resumeUploaded ? '✓ RESUME_ATTACHED (resume_jane.pdf)' : 'CLICK TO ATTACH RESUME (PDF/DOCX)'}
                  </span>
                </div>

                <div className="space-y-1">
                  <label className="text-[#E8E8C6]/80 text-[11px] font-share-tech block">WHY CARETCODERS? (COVER NOTE)</label>
                  <textarea
                    rows={3}
                    value={applicant.coverNote}
                    onChange={(e) => setApplicant({ ...applicant, coverNote: e.target.value })}
                    placeholder="Brief note on your project experience and passion for cyberpunk tech..."
                    className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-2 text-[#E8E8C6] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-sm shadow-[3px_3px_0px_#474744]"
                >
                  SUBMIT_APPLICATION()
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
