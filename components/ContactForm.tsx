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

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_puu1wa8';
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
      alert('✅ Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Reset form
      
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
  );
}
