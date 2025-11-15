'use client';

import { useState, FormEvent, useEffect } from 'react';
import Button from './Button';
import { SendIcon } from './Icons';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with public key
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'dZwlfVw6IdSnmIvJu';
    emailjs.init(publicKey);
    console.log('EmailJS initialized');
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Tạo timestamp
      const now = new Date();
      const timeString = now.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_puu1ws8';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_596zz05';

      console.log('Sending email with:', { serviceId, templateId });
      console.log('Template data:', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: timeString,
      });

      // Gửi email qua EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: timeString, // Thêm thời gian
        }
      );

      console.log('✅ Success:', response);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' }); // Reset form
      
      // Ẩn thông báo sau 5 giây
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error: any) {
      console.error('❌ Full Error:', error);
      console.error('❌ Error text:', error?.text);
      console.error('❌ Error status:', error?.status);
      alert('❌ Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-8 right-8 bg-white border-3 border-green-300 rounded-lg shadow-2xl p-6 max-w-md animate-slideIn z-50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-neutral-900 mb-1">Message Sent! ✨</h3>
              <p className="text-neutral-500">Thank you for reaching out! I&apos;ll get back to you soon.</p>
            </div>
            <button 
              onClick={() => setShowSuccess(false)}
              className="flex-shrink-0 text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl w-full">
      <div className="relative">
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-4 pt-6 border-3 border-neutral-100 rounded focus:outline-none focus:border-brand-500 transition-colors peer placeholder-transparent"
          placeholder="Name"
          required
        />
        <label
          htmlFor="name"
          className="absolute left-4 top-2 px-2 bg-white text-neutral-500 text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all pointer-events-none"
        >
          Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-4 pt-6 border-3 border-neutral-100 rounded focus:outline-none focus:border-brand-500 transition-colors peer placeholder-transparent"
          placeholder="Email"
          required
        />
        <label
          htmlFor="email"
          className="absolute left-4 top-2 px-2 bg-white text-neutral-500 text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all pointer-events-none"
        >
          Email
        </label>
      </div>

      <div className="relative">
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-4 pt-6 border-3 border-neutral-100 rounded focus:outline-none focus:border-brand-500 transition-colors peer resize-none placeholder-transparent"
          placeholder="Message"
          required
        />
        <label
          htmlFor="message"
          className="absolute left-4 top-2 px-2 bg-white text-neutral-500 text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm transition-all pointer-events-none"
        >
          Message
        </label>
      </div>

      <div className="flex justify-end">
        <Button icon={<SendIcon />}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </form>
    </>
  );
}
