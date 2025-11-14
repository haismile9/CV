'use client';

import { useState, FormEvent } from 'react';
import Button from './Button';
import { SendIcon } from './Icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
        <Button icon={<SendIcon />}>Send</Button>
      </div>
    </form>
  );
}
