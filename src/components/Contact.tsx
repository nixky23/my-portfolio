import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail, Github, MapPin, Send, CheckCircle,
  AlertCircle, Loader2, MessageCircle, Phone,
} from 'lucide-react';

// ── EmailJS config ────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_55ywk7d';
const EMAILJS_TEMPLATE_ID = 'template_38ku7wb';
const EMAILJS_PUBLIC_KEY  = 'NPCyAEHF_hq_TP-Vr';

// ── WhatsApp config ───────────────────────────────────────────
const WHATSAPP_NUMBER = '250782133566'; // no + or spaces

// ── Types ─────────────────────────────────────────────────────
interface FormData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  from_name?: string;
  from_email?: string;
  subject?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

// ── Validation ────────────────────────────────────────────────
const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.from_name.trim()) errors.from_name = 'Name is required.';
  if (!data.from_email.trim()) {
    errors.from_email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.from_email)) {
    errors.from_email = 'Please enter a valid email address.';
  }
  if (!data.subject.trim()) errors.subject = 'Subject is required.';
  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 20) {
    errors.message = 'Message should be at least 20 characters.';
  }
  return errors;
};

const INITIAL: FormData = { from_name: '', from_email: '', subject: '', message: '' };

// ── Contact info cards ────────────────────────────────────────
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'irakozenicky23@gmail.com',
    href: 'mailto:irakozenicky23@gmail.com',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-500/10',
    border: 'border-blue-200 dark:border-blue-500/20',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+250 782 133 566',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-500/10',
    border: 'border-green-200 dark:border-green-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/nixky23',
    href: 'https://github.com/nixky23',
    color: 'text-gray-700 dark:text-gray-300',
    bg: 'bg-gray-100 dark:bg-[#1e2535]',
    border: 'border-gray-300 dark:border-[#2e3748]',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kicukiro, Kigali, Rwanda',
    href: null,
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-500/10',
    border: 'border-violet-200 dark:border-violet-500/20',
  },
];

// ── Component ─────────────────────────────────────────────────
const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm]             = useState<FormData>(INITIAL);
  const [errors, setErrors]         = useState<FormErrors>({});
  const [touched, setTouched]       = useState<Record<string, boolean>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg]     = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validate({ ...form, [name]: value })[name as keyof FormErrors],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validate(form)[name as keyof FormErrors],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ from_name: true, from_email: true, subject: true, message: true });
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitStatus('loading');
    setErrorMsg('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.from_name,
          from_email: form.from_email,
          subject:    form.subject,
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setForm(INITIAL);
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error('EmailJS error:', err);
      setErrorMsg(
        'Failed to send your message. Please email me directly at irakozenicky23@gmail.com'
      );
      setSubmitStatus('error');
    }
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20IRAKOZE%20Nicky%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`,
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gray-100/50 dark:bg-[#161b27]/30"
      aria-label="Contact"
    >
      <div className="section-container">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h2 className="section-title text-gray-900 dark:text-white">
            Let's Build Something <span className="gradient-text">Meaningful</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mt-4">
            I'm open to full-time roles, internships, freelance projects, and collaboration.
            Send a message and I'll receive it directly in my inbox.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">

          {/* ── Left: Info ── */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg">
              Contact Information
            </h3>

            {contactInfo.map(info => {
              const Icon = info.icon;
              const inner = (
                <div
                  className={`flex items-center gap-4 p-4 rounded-xl ${info.bg} border ${info.border} transition-all duration-200 ${info.href ? 'hover:scale-[1.02]' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-lg ${info.bg} border ${info.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={info.color} />
                  </div>
                  <div>
                    <p className="text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wide font-medium">
                      {info.label}
                    </p>
                    <p className={`${info.color} font-medium text-sm break-all`}>
                      {info.value}
                    </p>
                  </div>
                </div>
              );
              return info.href ? (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
                  aria-label={`${info.label}: ${info.value}`}
                >
                  {inner}
                </a>
              ) : (
                <div key={info.label}>{inner}</div>
              );
            })}

            {/* WhatsApp CTA */}
            <button
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </button>

            {/* Availability */}
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-500/5 border border-green-200 dark:border-green-500/15">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-700 dark:text-green-400 font-semibold text-sm">
                  Available for opportunities
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed">
                Actively looking for full-time roles and internships in backend or full-stack development.
              </p>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3">
            {submitStatus === 'success' ? (
              <div className="card border-green-200 dark:border-green-500/20 flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-500 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                    Your message has been delivered to my inbox. I'll get back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-secondary mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="card space-y-5"
                noValidate
                aria-label="Contact form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="from_name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="from_name"
                      name="from_name"
                      type="text"
                      autoComplete="name"
                      value={form.from_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      className={`input-field ${errors.from_name && touched.from_name ? 'ring-2 ring-red-400/50 border-red-400/50' : ''}`}
                      aria-invalid={!!(errors.from_name && touched.from_name)}
                    />
                    {errors.from_name && touched.from_name && (
                      <p role="alert" className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} />{errors.from_name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="from_email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="from_email"
                      name="from_email"
                      type="email"
                      autoComplete="email"
                      value={form.from_email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="their@email.com"
                      className={`input-field ${errors.from_email && touched.from_email ? 'ring-2 ring-red-400/50 border-red-400/50' : ''}`}
                      aria-invalid={!!(errors.from_email && touched.from_email)}
                    />
                    {errors.from_email && touched.from_email && (
                      <p role="alert" className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} />{errors.from_email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="What is this about?"
                    className={`input-field ${errors.subject && touched.subject ? 'ring-2 ring-red-400/50 border-red-400/50' : ''}`}
                    aria-invalid={!!(errors.subject && touched.subject)}
                  />
                  {errors.subject && touched.subject && (
                    <p role="alert" className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} />{errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project or opportunity…"
                    className={`input-field resize-none ${errors.message && touched.message ? 'ring-2 ring-red-400/50 border-red-400/50' : ''}`}
                    aria-invalid={!!(errors.message && touched.message)}
                  />
                  {errors.message && touched.message && (
                    <p role="alert" className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} />{errors.message}
                    </p>
                  )}
                </div>

                {/* Submit row */}
                <div className="flex items-center justify-between gap-4 pt-1">
                  <p className="text-gray-400 dark:text-gray-600 text-xs">
                    * Required. Message goes directly to my inbox.
                  </p>
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="btn-primary flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    {submitStatus === 'loading' ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending…</>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </button>
                </div>

                {/* Error alert */}
                {submitStatus === 'error' && (
                  <div
                    role="alert"
                    className="flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm"
                  >
                    <AlertCircle size={15} className="mt-0.5 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
