import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cyberAudio } from '../utils/sound';
import { 
  Send, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Globe, 
  Sparkles, 
  User, 
  Building,
  ChevronRight,
  Terminal,
  X
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'Business Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Schedule Meeting Modal State
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('2026-07-28');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('14:00 UTC');
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingNotes, setBookingNotes] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    cyberAudio.playKeypress();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    cyberAudio.playClick();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`[${formData.inquiryType}] Business Inquiry from ${formData.name} (${formData.company || 'N/A'})`);
    const body = encodeURIComponent(
      `Business Inquiry Submission:\n` +
      `------------------------------------------\n` +
      `Name: ${formData.name}\n` +
      `Business Email: ${formData.email}\n` +
      `Company / Org: ${formData.company || 'N/A'}\n` +
      `Inquiry Category: ${formData.inquiryType}\n\n` +
      `Project Details / Requirements:\n${formData.message}\n` +
      `------------------------------------------\n` +
      `Sent via CaretCoders Web Portal`
    );
    const mailtoUrl = `mailto:contact@caretcoders.com?subject=${subject}&body=${body}`;

    // Trigger mailto client launcher
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmitted(true);
      cyberAudio.playSuccess();
    }, 600);
  };

  const handleConfirmSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    cyberAudio.playClick();

    const subject = encodeURIComponent(`[Technical Consultation] Booking Request for ${selectedDate} @ ${selectedTimeSlot}`);
    const body = encodeURIComponent(
      `Technical Consultation Request:\n` +
      `------------------------------------------\n` +
      `Requested Date: ${selectedDate}\n` +
      `Requested Time Slot: ${selectedTimeSlot}\n` +
      `Attendee Name: ${bookingName}\n` +
      `Attendee Email: ${bookingEmail}\n` +
      `Topic / Technical Scope:\n${bookingNotes || 'General Technical Architecture & Systems Review'}\n` +
      `------------------------------------------\n` +
      `Sent via CaretCoders Web Portal`
    );
    const mailtoUrl = `mailto:contact@caretcoders.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setBookingConfirmed(true);
      cyberAudio.playSuccess();
    }, 400);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#252525] border-b-2 border-[#E8E8C6]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-xs font-share-tech text-[#E8E8C6]/80 uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#E8E8C6]"></span>
            <span>COMMUNICATION CHANNEL // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sixtyfour text-[#E8E8C6] tracking-tight">
            Contact & Schedule
          </h2>
          <p className="text-sm font-mono text-[#E8E8C6]/70">
            Send a direct inquiry, schedule a 1-on-1 engineering consultation, or connect via our social channels.
          </p>
        </div>

        {/* Form & Meeting Scheduler Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Form & Business Inquiry */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-[#252525] border-2 border-[#E8E8C6] p-6 shadow-[8px_8px_0px_#474744] space-y-6"
          >
            <div className="flex items-center justify-between border-b-2 border-[#474744] pb-4">
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-sixtyfour text-[#E8E8C6]">
                  Business Inquiry Form
                </h3>
              </div>
              <span className="text-xs font-share-tech text-emerald-400 font-bold">[24HR RESPONSE]</span>
            </div>

            {submitted ? (
              <div className="p-6 bg-[#474744]/30 border-2 border-emerald-400 text-center space-y-4 font-mono">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-share-tech font-bold text-[#E8E8C6]">
                  [TRANSMISSION_DISPATCHED_TO_INBOX]
                </h4>
                <p className="text-xs text-[#E8E8C6]/80 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your inquiry regarding <strong className="text-amber-300">{formData.inquiryType}</strong> has been routed directly to <strong className="text-emerald-400 font-bold">contact@caretcoders.com</strong>.
                </p>
                <div className="p-3 bg-[#1a1a1a] border border-[#474744] text-left text-[11px] space-y-1 text-[#E8E8C6]/70">
                  <div><span className="text-amber-300 font-bold">DESTINATION INBOX:</span> contact@caretcoders.com</div>
                  <div><span className="text-amber-300 font-bold">FROM:</span> {formData.name} ({formData.email})</div>
                  <div><span className="text-amber-300 font-bold">SUBJECT:</span> [{formData.inquiryType}] Business Inquiry</div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`mailto:contact@caretcoders.com?subject=${encodeURIComponent(`[${formData.inquiryType}] Business Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nInquiry: ${formData.inquiryType}\n\n${formData.message}`)}`}
                    className="px-4 py-2 bg-emerald-400 text-[#252525] font-share-tech font-bold text-xs inline-flex items-center space-x-1 hover:bg-emerald-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 mr-1" />
                    <span>LAUNCH_EMAIL_CLIENT()</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-xs"
                  >
                    SEND_ANOTHER_INQUIRY()
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 text-[11px] font-share-tech uppercase block">
                      YOUR NAME *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Alex Vance"
                        className="w-full bg-[#252525] border-2 border-[#E8E8C6]/50 p-2.5 text-[#E8E8C6] focus:border-[#E8E8C6] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 text-[11px] font-share-tech uppercase block">
                      BUSINESS EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      className="w-full bg-[#252525] border-2 border-[#E8E8C6]/50 p-2.5 text-[#E8E8C6] focus:border-[#E8E8C6] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 text-[11px] font-share-tech uppercase block">
                      COMPANY / ORG
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Cyber Labs Inc."
                      className="w-full bg-[#252525] border-2 border-[#E8E8C6]/50 p-2.5 text-[#E8E8C6] focus:border-[#E8E8C6] outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 text-[11px] font-share-tech uppercase block">
                      INQUIRY CATEGORY *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full bg-[#252525] border-2 border-[#E8E8C6]/50 p-2.5 text-[#E8E8C6] focus:border-[#E8E8C6] outline-none"
                    >
                      <option value="Business Inquiry">General Business Inquiry</option>
                      <option value="DetailMint Enterprise">DetailMint ZK-Provenance Solution</option>
                      <option value="Precision Farming IoT">AgriTech Precision Farming IoT</option>
                      <option value="InkSquirel Custom AI">InkSquirel AI Docs Integration</option>
                      <option value="Custom Software Contract">Custom High-Performance Engineering</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#E8E8C6]/80 text-[11px] font-share-tech uppercase block">
                    PROJECT DETAILS / REQUIREMENTS *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your technical requirements, expected timelines, and system scale..."
                    className="w-full bg-[#252525] border-2 border-[#E8E8C6]/50 p-2.5 text-[#E8E8C6] focus:border-[#E8E8C6] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-sm border-2 border-[#E8E8C6] shadow-[4px_4px_0px_#474744] hover:bg-[#E8E8C6]/90 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT_MESSAGE()'}</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Schedule Meeting Card & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Schedule Meeting CTA Card */}
            <div className="bg-[#252525] border-2 border-[#E8E8C6] p-6 shadow-[8px_8px_0px_#474744] space-y-4">
              <div className="flex items-center space-x-2 text-amber-300 font-share-tech font-bold border-b border-[#474744] pb-2">
                <Calendar className="w-5 h-5" />
                <span>SCHEDULE TECHNICAL CONSULTATION</span>
              </div>

              <p className="text-xs font-mono text-[#E8E8C6]/85 leading-relaxed">
                Book a direct 30-minute technical session with CaretCoders founders and lead architects to review system design, API integrations, or AgriTech deployments.
              </p>

              <div className="bg-[#474744]/30 p-3 border border-[#474744] text-xs font-share-tech space-y-1">
                <div className="flex justify-between">
                  <span>DURATION:</span>
                  <strong className="text-[#E8E8C6]">30 MINUTES</strong>
                </div>
                <div className="flex justify-between">
                  <span>PLATFORM:</span>
                  <strong className="text-emerald-400">GOOGLE MEET / DISCORD</strong>
                </div>
              </div>

              <button
                onClick={() => { cyberAudio.playClick(); setScheduleModalOpen(true); }}
                className="w-full py-2.5 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-xs border-2 border-[#E8E8C6] shadow-[3px_3px_0px_#474744] hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform flex items-center justify-center space-x-2"
              >
                <Clock className="w-4 h-4" />
                <span>OPEN_CALENDAR_BOOKER()</span>
              </button>
            </div>

            {/* Social Links & Direct Contacts */}
            <div className="bg-[#252525] border-2 border-[#E8E8C6] p-6 shadow-[8px_8px_0px_#474744] space-y-4 font-mono text-xs">
              <h4 className="font-share-tech font-bold text-[#E8E8C6] text-sm border-b border-[#474744] pb-2">
                OFFICIAL DIRECT CONTACTS & CHANNELS
              </h4>

              <div className="space-y-2">
                <a 
                  href="mailto:contact@caretcoders.com"
                  className="p-2.5 bg-[#474744]/20 border border-[#474744] hover:border-amber-300 flex items-center justify-between text-[#E8E8C6] transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                    <div>
                      <strong className="block text-amber-300 font-share-tech text-[11px]">contact@caretcoders.com</strong>
                      <span className="text-[10px] text-[#E8E8C6]/70">Forms & Meeting Schedule</span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a 
                  href="mailto:hr@caretcoders.com"
                  className="p-2.5 bg-[#474744]/20 border border-[#474744] hover:border-emerald-400 flex items-center justify-between text-[#E8E8C6] transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <strong className="block text-emerald-400 font-share-tech text-[11px]">hr@caretcoders.com</strong>
                      <span className="text-[10px] text-[#E8E8C6]/70">Career Portal & Fellowships</span>
                    </div>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <div className="grid grid-cols-3 gap-2 pt-1">
                  <a 
                    href="https://github.com/CaretCoders" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 bg-[#474744]/20 border border-[#474744] hover:border-[#E8E8C6] text-center text-[#E8E8C6] font-share-tech font-bold text-[11px] hover:text-amber-300 transition-colors"
                  >
                    GITHUB
                  </a>
                  <a 
                    href="https://x.com/caretcoders" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 bg-[#474744]/20 border border-[#474744] hover:border-[#E8E8C6] text-center text-[#E8E8C6] font-share-tech font-bold text-[11px] hover:text-amber-300 transition-colors"
                  >
                    X (TWITTER)
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/caretcoders-llp/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2 bg-[#474744]/20 border border-[#474744] hover:border-[#E8E8C6] text-center text-[#E8E8C6] font-share-tech font-bold text-[11px] hover:text-amber-300 transition-colors"
                  >
                    LINKEDIN
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* Schedule Meeting Modal */}
      {scheduleModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#252525] border-2 border-[#E8E8C6] max-w-lg w-full p-6 shadow-[10px_10px_0px_#474744] space-y-4 relative font-mono max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => { cyberAudio.playClick(); setScheduleModalOpen(false); }}
              className="absolute top-4 right-4 p-1 bg-[#474744] text-[#E8E8C6] hover:bg-[#E8E8C6] hover:text-[#252525]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-[#474744] pb-2">
              <h3 className="text-xl font-sixtyfour text-[#E8E8C6]">Schedule Consultation</h3>
              <p className="text-xs font-share-tech text-[#E8E8C6]/70">Direct 1-on-1 technical call routed to contact@caretcoders.com</p>
            </div>

            {bookingConfirmed ? (
              <div className="py-4 space-y-3 font-mono text-xs">
                <div className="p-4 bg-[#474744]/30 border-2 border-emerald-400 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <p className="font-bold font-share-tech text-base text-emerald-400">[CONSULTATION_REQUEST_DISPATCHED]</p>
                  <p className="text-xs text-[#E8E8C6]/80">
                    Your meeting request for <strong className="text-amber-300">{selectedDate} at {selectedTimeSlot}</strong> has been routed directly to <strong className="text-emerald-400">contact@caretcoders.com</strong>.
                  </p>
                </div>

                <div className="p-3 bg-[#1a1a1a] border border-[#474744] text-[11px] space-y-1 text-[#E8E8C6]/70">
                  <div><span className="text-amber-300 font-bold">DESTINATION INBOX:</span> contact@caretcoders.com</div>
                  <div><span className="text-amber-300 font-bold">ATTENDEE:</span> {bookingName || 'N/A'} ({bookingEmail || 'N/A'})</div>
                  <div><span className="text-amber-300 font-bold">SLOT:</span> {selectedDate} @ {selectedTimeSlot}</div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={`mailto:contact@caretcoders.com?subject=${encodeURIComponent(`[Technical Consultation] Booking Request for ${selectedDate} @ ${selectedTimeSlot}`)}&body=${encodeURIComponent(`Requested Date: ${selectedDate}\nRequested Time Slot: ${selectedTimeSlot}\nAttendee Name: ${bookingName}\nAttendee Email: ${bookingEmail}\nTopic / Technical Scope:\n${bookingNotes || 'General Technical Architecture Review'}`)}`}
                    className="px-4 py-2 bg-emerald-400 text-[#252525] font-share-tech font-bold text-xs inline-flex items-center space-x-1 hover:bg-emerald-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 mr-1" />
                    <span>LAUNCH_EMAIL_CLIENT()</span>
                  </a>
                  <button
                    onClick={() => { setBookingConfirmed(false); setScheduleModalOpen(false); }}
                    className="px-4 py-2 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-xs"
                  >
                    CLOSE_WINDOW()
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleConfirmSchedule} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 block font-share-tech">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      value={bookingName}
                      onChange={(e) => { cyberAudio.playKeypress(); setBookingName(e.target.value); }}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-2 text-[#E8E8C6] outline-none focus:border-amber-300"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 block font-share-tech">BUSINESS EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={bookingEmail}
                      onChange={(e) => { cyberAudio.playKeypress(); setBookingEmail(e.target.value); }}
                      placeholder="alex@company.com"
                      className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-2 text-[#E8E8C6] outline-none focus:border-amber-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 block font-share-tech">SELECT DATE *</label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-2 text-[#E8E8C6] outline-none focus:border-amber-300"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#E8E8C6]/80 block font-share-tech">TIME SLOT (UTC) *</label>
                    <select
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-2 text-[#E8E8C6] outline-none focus:border-amber-300"
                    >
                      <option value="10:00 UTC">10:00 UTC</option>
                      <option value="14:00 UTC">14:00 UTC</option>
                      <option value="16:30 UTC">16:30 UTC</option>
                      <option value="19:00 UTC">19:00 UTC</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#E8E8C6]/80 block font-share-tech">TECHNICAL TOPIC / SCOPE</label>
                  <textarea
                    rows={2}
                    value={bookingNotes}
                    onChange={(e) => { cyberAudio.playKeypress(); setBookingNotes(e.target.value); }}
                    placeholder="Briefly describe what you'd like to review (e.g. ZK proof verification, API integration)..."
                    className="w-full bg-[#252525] border border-[#E8E8C6]/50 p-2 text-[#E8E8C6] outline-none focus:border-amber-300"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#E8E8C6] text-[#252525] font-share-tech font-bold text-xs shadow-[3px_3px_0px_#474744] hover:bg-[#E8E8C6]/90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>CONFIRM_BOOKING_TO_EMAIL()</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
