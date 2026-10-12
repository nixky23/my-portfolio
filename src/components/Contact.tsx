import React, { useState } from 'react';
import { Mail, Github, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData { name: string; email: string; subject: string; message: string; }
interface FormErrors { name?: string; email?: string; subject?: string; message?: string; }
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email.';
  if (!data.subject.trim()) errors.subject = 'Subject is required.';
  if (!data.message.trim()) errors.message = 'Message is required.';
  else if (data.message.trim().length < 20) errors.message = 'Message should be at least 20 characters.';
  return errors;
};

const INITIAL: FormData = { name: '', email: '', subject: '', message: '' };

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'irakozenicky23@gmail.com', href: 'mailto:irakozenicky23@gmail.com', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10', border: 'border-blue-200 dark:border-blue-500/20' },
  { icon: Github, label: 'GitHub', value: 'github.com/nixky23', href: 'https://github.com/nixky23', color: 'text-gray-700 dark:text-gray-300', bg: 'bg-gray-100 dark:bg-[#1e2535]', border: 'border-gray-300 dark:border-[#2e3748]' },
  { icon: MapPin, label: 'Location', value: 'Kicukiro, Kigali, Rwanda', href: null, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-500/10', border: 'border-green-200 dark:border-green-500/20' },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate({ ...form, [name]: value })[name as keyof FormErrors] }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(form)[name as keyof FormErrors] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setSubmitStatus('loading');
    try {
      const mailto = `mailto:irakozenicky23@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
      window.location.href = mailto;
      await new Promise(res => setTimeout(res, 800));
      setSubmitStatus('success');
      setForm(INITIAL); setTouched({}); setErrors({});
    } catch { setSubmitStatus('error'); }
  };

  return (
    <section id="contact" className="section-padding bg-gray-100/50 dark:bg-[#161b27]/30" aria-label="Contact">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-blue-500 dark:text-blue-400 font-mono text-sm font-medium tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h2 className="section-title text-gray-900 dark:text-white">
            Let's Build Something <span className="gradient-text">Meaningful</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto mt-4">
            I'm open to full-time roles, internships, freelance projects, and collaboration opportunities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map(info => {
                  const Icon = info.icon;
                  const inner = (
                    <div className={`flex items-center gap-4 p-4 rounded-xl ${info.bg} border ${info.border} transition-all duration-200 ${info.href ? 'hover:scale-[1.02]' : ''}`}>
                      <div className={`w-10 h-10 rounded-lg ${info.bg} border ${info.border} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={18} className={info.color} />
                      </div>
                      <div>
                        <p className="text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wide font-medium">{info.label}</p>
                        <p className={`${info.color} font-medium text-sm break-all`}>{info.value}</p>
                      </div>
                    </div>
                  );
                  return info.href ? (
                    <a key={info.label} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl">
                      {inner}
                    </a>
                  ) : <div key={info.label}>{inner}</div>;
                })}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-500/5 border border-green-200 dark:border-green-500/15">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-700 dark:text-green-400 font-semibold text-sm">Available for opportunities</span>
              </div>
              <p className="text-gray-500 dark:text-gray-500 text-xs leading-relaxed">
                Actively looking for full-time roles and internships in backend or full-stack development.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {submitStatus === 'success' ? (
              <div className="card border-green-200 dark:border-green-500/20 flex flex-col items-center justify-center gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-500 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                    Your email client opened with the message pre-filled. I'll get back to you soon.
                  </p>
                </div>
                <button onClick={() => setSubmitStatus('idle')} className="btn-secondary mt-2">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Your name"
                      className={`input-field ${errors.name && touched.name ? 'ring-2 ring-red-400/50 border-red-400/50' : ''}`}
                      aria-invalid={!!(errors.name && touched.name)} />
                    {errors.name && touched.name && (
                      <p role="alert" className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} />{errors.name}
                      </p>
                    )}
                  </div>
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="your@email.com"
                      className={`input-field ${errors.email && touched.email ? 'ring-2 ring-red-400/50 border-red-400/50' : ''}`}
                      aria-invalid={!!(errors.email && touched.email)} />
                    {errors.email && touched.email && (
                      <p role="alert" className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} />{errors.email}
                      </p>
                    )}
                  </div>
                </div>
                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} onBlur={handleBlur} placeholder="What is this about?"
                    className={`input-field ${errors.subject && touched.subject ? 'ring-2 ring-red-400/50 border-red-400/50' : ''}`}
                    aria-invalid={!!(errors.subject && touched.subject)} />
                  {errors.subject && touched.subject && (
                    <p role="alert" className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} />{errors.subject}
                    </p>
                  )}
                </div>
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} onBlur={handleBlur} placeholder="Tell me about your project or opportunity…"
                    className={`input-field resize-none ${errors.message && touched.message ? 'ring-2 ring-red-400/50 border-red-400/50' : ''}`}
                    aria-invalid={!!(errors.message && touched.message)} />
                  {errors.message && touched.message && (
                    <p role="alert" className="mt-1.5 text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} />{errors.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between gap-4 pt-1">
                  <p className="text-gray-400 dark:text-gray-600 text-xs">* Required. Opens your email client.</p>
                  <button type="submit" disabled={submitStatus === 'loading'} className="btn-primary flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed">
                    {submitStatus === 'loading' ? <><Loader2 size={16} className="animate-spin" />Sending…</> : <><Send size={16} />Send Message</>}
                  </button>
                </div>
                {submitStatus === 'error' && (
                  <div role="alert" className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                    <AlertCircle size={15} />
                    Something went wrong. Email me at{' '}
                    <a href="mailto:irakozenicky23@gmail.com" className="underline">irakozenicky23@gmail.com</a>
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
