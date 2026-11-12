import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Copy,
  Check,
  Send,
  AlertCircle,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "kkaayana5155@gmail.com";
  const phoneNumber = "+91 7982645256";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Khushi,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );

    // Reliable mailto launch
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 w-full max-w-6xl mx-auto">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left mb-14">
        <span className="text-xs uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
          Connect
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-heading">
          Get in Touch
        </h2>
        <div className="w-12 h-1 bg-emerald-500 rounded-full mt-3"></div>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mt-3">
          I am actively exploring Software Engineer Internships, Full-Stack roles, and engineering collaborations. Let's start a conversation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* CONTACT INFO (Col 1-5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs dark:shadow-none space-y-5">
            <h3 className="font-heading font-semibold text-slate-900 dark:text-white text-base">
              Direct Contact
            </h3>

            {/* Email with copy button */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/70">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Mail size={16} />
                </div>
                <div className="truncate">
                  <p className="text-[10px] uppercase font-semibold text-slate-500">
                    Email
                  </p>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-xs sm:text-sm font-medium text-slate-800 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400 truncate block transition-colors"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-2 rounded-lg bg-slate-200/80 hover:bg-slate-300 text-slate-700 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-slate-300 dark:hover:text-white transition shrink-0 ml-2 cursor-pointer"
                title="Copy email"
              >
                {copied ? (
                  <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/70">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-[10px] uppercase font-semibold text-slate-500">
                  Phone
                </p>
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-xs sm:text-sm font-medium text-slate-800 hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400 transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>

            {/* Profiles */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-3">
              <a
                href="https://github.com/Khushi5155"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-700/60 dark:border-slate-700/60 dark:text-slate-200 dark:hover:text-white text-xs font-medium transition"
              >
                <Github size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="text-slate-400 dark:text-slate-500" />
              </a>

              <a
                href="https://www.linkedin.com/in/khushi-kumari-bb4305327"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-700/60 dark:border-slate-700/60 dark:text-slate-200 dark:hover:text-white text-xs font-medium transition"
              >
                <Linkedin size={15} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="text-slate-400 dark:text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* CONTACT FORM (Col 6-12) */}
        <div className="lg:col-span-7">
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs dark:shadow-none">
            <h3 className="font-heading font-semibold text-slate-900 dark:text-white text-base mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Complete the form below to generate a pre-formatted email directly to my inbox.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-300 text-xs flex items-start gap-3">
                <CheckCircle2 size={18} className="shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Email Draft Created!</p>
                  <p className="mt-1 text-slate-700 dark:text-slate-300">
                    Your email client should open automatically with your pre-filled message. If it didn't open, please email me directly at{" "}
                    <a href={`mailto:${emailAddress}`} className="text-emerald-600 dark:text-emerald-400 underline font-medium">
                      {emailAddress}
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name <span className="text-emerald-600 dark:text-emerald-400">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border text-slate-900 placeholder-slate-400 dark:bg-slate-950/80 dark:border-slate-800 dark:text-slate-100 dark:placeholder-slate-600 text-sm focus:outline-none transition ${errors.name
                        ? "border-rose-500/80 focus:border-rose-500"
                        : "border-slate-300 dark:border-slate-800 focus:border-emerald-500/70"
                      }`}
                  />
                  {errors.name && (
                    <p className="text-rose-600 dark:text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email <span className="text-emerald-600 dark:text-emerald-400">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. jane@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border text-slate-900 placeholder-slate-400 dark:bg-slate-950/80 dark:border-slate-800 dark:text-slate-100 dark:placeholder-slate-600 text-sm focus:outline-none transition ${errors.email
                        ? "border-rose-500/80 focus:border-rose-500"
                        : "border-slate-300 dark:border-slate-800 focus:border-emerald-500/70"
                      }`}
                  />
                  {errors.email && (
                    <p className="text-rose-600 dark:text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message <span className="text-emerald-600 dark:text-emerald-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Share details about a project, freelance work, internship opportunity, or collaboration..."
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border text-slate-900 placeholder-slate-400 dark:bg-slate-950/80 dark:border-slate-800 dark:text-slate-100 dark:placeholder-slate-600 text-sm focus:outline-none transition resize-none ${errors.message
                      ? "border-rose-500/80 focus:border-rose-500"
                      : "border-slate-300 dark:border-slate-800 focus:border-emerald-500/70"
                    }`}
                />
                {errors.message && (
                  <p className="text-rose-600 dark:text-rose-400 text-[11px] mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm shadow-emerald-500/20 active:scale-[0.99] cursor-pointer"
              >
                <Send size={15} />
                <span>Compose &amp; Send Message</span>
              </button>

              <div className="pt-2 text-center">
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
                  <span>Note: Launches your email client via mailto with pre-formatted text</span>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
