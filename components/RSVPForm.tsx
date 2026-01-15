'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '1',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to API to log data
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Send email notification via EmailJS (client-side)
        try {
          await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            'template_qy5hwbg',
            {
              to_email: 'nguyenhonghaimwg2005@gmail.com',
              guest_name: formData.name,
              guest_email: formData.email,
              guest_phone: formData.phone || 'Không cung cấp',
              attendance_status: formData.attendance === 'yes' ? 'Có tham dự ✅' : 'Không tham dự ❌',
              number_of_guests: formData.guests || '1',
              guest_message: formData.message || 'Không có lời nhắn',
              timestamp: new Date().toLocaleString('vi-VN'),
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          );
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
          // Don't block success even if email fails
        }

        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          attendance: '',
          guests: '1',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại!');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-neutral-800 mb-2">
          Cảm ơn bạn!
        </h3>
        <p className="text-neutral-600">
          Tôi đã nhận được xác nhận của bạn. Rất mong được gặp bạn!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
        >
          Gửi xác nhận khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-neutral-700 font-semibold mb-2 text-left">
            Họ và Tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="Nguyễn Văn A"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-neutral-700 font-semibold mb-2 text-left">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-neutral-700 font-semibold mb-2 text-left">
            Số Điện Thoại
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="0123456789"
          />
        </div>

        <div>
          <label htmlFor="attendance" className="block text-neutral-700 font-semibold mb-2 text-left">
            Tham Dự <span className="text-red-500">*</span>
          </label>
          <select
            id="attendance"
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white"
          >
            <option value="">Chọn...</option>
            <option value="yes">Có, tôi sẽ đến</option>
            <option value="no">Rất tiếc, tôi không thể đến</option>
          </select>
        </div>
      </div>

      {formData.attendance === 'yes' && (
        <div className="mb-6">
          <label htmlFor="guests" className="block text-neutral-700 font-semibold mb-2 text-left">
            Số Người Tham Dự
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-white"
          >
            <option value="1">1 người (chỉ mình tôi)</option>
            <option value="2">2 người</option>
            <option value="3">3 người</option>
            <option value="4">4 người</option>
          </select>
        </div>
      )}

      <div className="mb-6">
        <label htmlFor="message" className="block text-neutral-700 font-semibold mb-2 text-left">
          Lời Nhắn
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
          placeholder="Gửi lời chúc mừng hoặc chia sẻ cảm nghĩ của bạn..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Đang gửi...' : 'Gửi Xác Nhận'}
      </button>
    </form>
  );
}
