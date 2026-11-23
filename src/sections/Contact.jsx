import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const emailAddress = "kkaayana5155@gmail.com";
  const githubUrl = "https://github.com/Khushi5155";
  const linkedinUrl = "https://www.linkedin.com/in/khushi-kumari-bb4305327";

  // Formspree or custom serverless endpoint configured via environment variable
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Full name is required (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address (e.g. name@domain.com).";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = "Subject is required (at least 3 characters).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submissionStatus === "submitting") return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setErrorMessage("");

    // If Formspree endpoint is configured, send real HTTP POST
    if (FORMSPREE_ENDPOINT) {
      setSubmissionStatus("submitting");
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
            _replyto: formData.email.trim(),
          }),
        });

        if (response.ok) {
          setSubmissionStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          const data = await response.json().catch(() => ({}));
          const errDetail =
            data.error ||
            (data.errors && data.errors.map((e) => e.message).join(", ")) ||
            `HTTP ${response.status} response from email provider.`;
          setErrorMessage(errDetail);
          setSubmissionStatus("error");
        }
      } catch (err) {
        setErrorMessage(
          err.message || "Network error. Please check your connection or reach out via direct email."
        );
        setSubmissionStatus("error");
      }
    } else {
      // Endpoint is not yet configured in environment variables:
      // We do NOT pretend it succeeded; instead, we inform the visitor and launch their mail client directly.
      const encodedSubject = encodeURIComponent(formData.subject.trim());
      const bodyText = `Hi Khushi,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}\nEmail: ${formData.email.trim()}`;
      const encodedBody = encodeURIComponent(bodyText);

      window.location.href = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
      setSubmissionStatus("unconfigured");
    }
  };

  const handleCopyDraft = () => {
    const formatted = `To: ${emailAddress}\nSubject: ${
      formData.subject.trim() || "Inquiry for Khushi Kumari"
    }\n\nHi Khushi,\n\n${
      formData.message.trim() || "I would like to connect regarding an engineering opportunity."
    }\n\nBest regards,\n${formData.name.trim() || "Visitor"}\nEmail: ${
      formData.email.trim() || "Not provided"
    }`;

    navigator.clipboard.writeText(formatted);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-[#38BDF8] mb-2">
          Connect
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] font-heading">
          Let&apos;s Build Something Together
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full mt-3"></div>
        <p className="text-slate-600 dark:text-[#94A3B8] text-sm max-w-xl mt-3">
          I am actively seeking Software Engineering Internships and Full-Stack roles. Reach out directly or send a message using the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* DIRECT CHANNELS & PROFILES (Col 1-5) */}
        <div className="lg:col-span-5 space-y-4">
          {/* PRIMARY EMAIL CARD */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 shadow-xs dark:shadow-none space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">
                Direct Contact
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Fast Response
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-[#131B38]/60 border border-slate-200/80 dark:border-[#1E293B]">
                <div className="p-2.5 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200/80 dark:bg-[#1B244A] dark:text-[#38BDF8] dark:border-[#38BDF8]/20 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="truncate flex-1 min-w-0">
                  <p className="text-[10px] uppercase font-semibold text-slate-400 dark:text-[#94A3B8]/70">
                    Recipient Email
                  </p>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-indigo-600 dark:text-[#F8FAFC] dark:hover:text-[#38BDF8] truncate block transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              {/* Action Buttons: Copy Email & Mailto */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-[#131B38] dark:hover:bg-[#1B244A] dark:border-[#1E293B] dark:text-[#F8FAFC] text-xs font-semibold transition cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-[#6366F1] dark:hover:bg-[#4F46E5] text-xs font-semibold transition shadow-xs"
                >
                  <Send size={13} />
                  <span>Send Mail</span>
                  <ArrowUpRight size={12} className="opacity-80" />
                </a>
              </div>

              <AnimatePresence>
                {copiedEmail && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs text-center font-medium"
                  >
                    Email address copied to your clipboard!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* SOCIAL & NETWORK PROFILES */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 shadow-xs dark:shadow-none space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">
              Professional Profiles
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 pt-1">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200/80 hover:border-indigo-200 dark:bg-[#131B38]/60 dark:hover:bg-[#1B244A] dark:border-[#1E293B] dark:hover:border-[#6366F1]/30 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0077B5]/10 text-[#0077B5] dark:bg-[#0077B5]/20 dark:text-[#38BDF8]">
                    <Linkedin size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-[#F8FAFC]">LinkedIn</p>
                    <p className="text-[11px] text-slate-500 dark:text-[#94A3B8]">khushi-kumari</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200/80 hover:border-indigo-200 dark:bg-[#131B38]/60 dark:hover:bg-[#1B244A] dark:border-[#1E293B] dark:hover:border-[#6366F1]/30 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-900/10 text-slate-900 dark:bg-slate-700/30 dark:text-[#F8FAFC]">
                    <Github size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-[#F8FAFC]">GitHub</p>
                    <p className="text-[11px] text-slate-500 dark:text-[#94A3B8]">@Khushi5155</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                />
              </a>
            </div>
          </div>

          {/* LOCATION & AVAILABILITY CARD */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0D1127]/60 border border-slate-200/80 dark:border-[#1E293B] space-y-2.5 text-xs text-slate-600 dark:text-[#94A3B8]">
            <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-[#F8FAFC]">
              <MapPin size={14} className="text-indigo-600 dark:text-[#38BDF8]" />
              <span>Location: New Delhi, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-slate-400 dark:text-slate-500" />
              <span>Time Zone: Indian Standard Time (UTC +5:30)</span>
            </div>
          </div>
        </div>

        {/* FUNCTIONAL MESSAGE FORM (Col 6-12) */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0D1127] border border-slate-200/90 dark:border-[#6366F1]/20 shadow-xs dark:shadow-none space-y-6">
            <div>
              <h3 className="font-heading font-semibold text-slate-900 dark:text-[#F8FAFC] text-lg">
                Send a Message
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#94A3B8] mt-1 leading-relaxed">
                Fill out the form below. Messages are delivered directly to{" "}
                <span className="font-mono text-indigo-600 dark:text-[#38BDF8]">{emailAddress}</span>.
              </p>
            </div>

            {/* STATUS NOTIFICATIONS */}
            {submissionStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-300 text-xs flex items-start gap-3"
              >
                <CheckCircle2 size={18} className="shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Message Delivered Successfully!</p>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">
                    Thank you for reaching out. Your message has been received, and I will get back to you shortly.
                  </p>
                </div>
              </motion.div>
            )}

            {submissionStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/40 text-rose-900 dark:text-rose-300 text-xs flex items-start gap-3"
              >
                <AlertCircle size={18} className="shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Delivery Error</p>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">
                    {errorMessage || "Unable to send message via the endpoint. Please try again or use direct email."}
                  </p>
                  <div className="mt-2.5 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="px-3 py-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-800 dark:bg-rose-900/40 dark:hover:bg-rose-800/40 dark:text-rose-200 font-medium text-xs transition cursor-pointer"
                    >
                      {copiedDraft ? "Draft Copied!" : "Copy Message to Clipboard"}
                    </button>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="px-3 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 dark:bg-slate-800 dark:text-slate-200 font-medium text-xs transition"
                    >
                      Open Email App
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {submissionStatus === "unconfigured" && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-300 text-xs flex items-start gap-3"
              >
                <Info size={18} className="shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Email Client Launched</p>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">
                    Your pre-formatted message was passed to your email app. If your email app did not open automatically, you can also copy the draft text directly:
                  </p>
                  <div className="mt-2.5">
                    <button
                      type="button"
                      onClick={handleCopyDraft}
                      className="px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-900 dark:bg-amber-900/40 dark:text-amber-200 font-medium text-xs transition cursor-pointer"
                    >
                      {copiedDraft ? "Copied to Clipboard!" : "Copy Formatted Draft"}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-[#94A3B8] mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    disabled={submissionStatus === "submitting"}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 dark:bg-[#131B38]/60 dark:text-[#F8FAFC] dark:placeholder-slate-500 text-xs focus:outline-none transition ${
                      errors.name
                        ? "border-rose-500 dark:border-rose-500"
                        : "border-slate-200/80 dark:border-[#1E293B] focus:border-indigo-600 dark:focus:border-[#38BDF8]"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-rose-600 dark:text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-[#94A3B8] mb-1.5">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    disabled={submissionStatus === "submitting"}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 dark:bg-[#131B38]/60 dark:text-[#F8FAFC] dark:placeholder-slate-500 text-xs focus:outline-none transition ${
                      errors.email
                        ? "border-rose-500 dark:border-rose-500"
                        : "border-slate-200/80 dark:border-[#1E293B] focus:border-indigo-600 dark:focus:border-[#38BDF8]"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-rose-600 dark:text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-[#94A3B8] mb-1.5">
                  Subject <span className="text-rose-500">*</span>
                </label>
                <input
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Software Engineer Internship Inquiry"
                  disabled={submissionStatus === "submitting"}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 dark:bg-[#131B38]/60 dark:text-[#F8FAFC] dark:placeholder-slate-500 text-xs focus:outline-none transition ${
                    errors.subject
                      ? "border-rose-500 dark:border-rose-500"
                      : "border-slate-200/80 dark:border-[#1E293B] focus:border-indigo-600 dark:focus:border-[#38BDF8]"
                  }`}
                />
                {errors.subject && (
                  <p className="text-rose-600 dark:text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-[#94A3B8] mb-1.5">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team, role, or project..."
                  disabled={submissionStatus === "submitting"}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border text-slate-900 placeholder-slate-400 dark:bg-[#131B38]/60 dark:text-[#F8FAFC] dark:placeholder-slate-500 text-xs focus:outline-none transition resize-y leading-relaxed ${
                    errors.message
                      ? "border-rose-500 dark:border-rose-500"
                      : "border-slate-200/80 dark:border-[#1E293B] focus:border-indigo-600 dark:focus:border-[#38BDF8]"
                  }`}
                />
                {errors.message && (
                  <p className="text-rose-600 dark:text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle size={11} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submissionStatus === "submitting"}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed text-white dark:bg-[#6366F1] dark:hover:bg-[#4F46E5] text-xs font-semibold transition shadow-xs cursor-pointer"
                >
                  {submissionStatus === "submitting" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      <span>Send Message</span>
                      <ArrowUpRight size={13} className="opacity-80" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-[#131B38] dark:hover:bg-[#1B244A] dark:border-[#1E293B] dark:text-[#F8FAFC] text-xs font-semibold transition cursor-pointer"
                >
                  {copiedDraft ? (
                    <>
                      <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Draft</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
