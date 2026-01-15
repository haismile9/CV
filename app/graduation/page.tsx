import Image from 'next/image';
import GraduationCountdown from '@/components/GraduationCountdown';
import RSVPForm from '@/components/RSVPForm';
import { CalendarIcon, ClockIcon, LocationIcon } from '@/components/Icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thiệp Mời Lễ Tốt Nghiệp 2026 - Hải Nguyễn',
  description: 'Kính mời bạn tham dự buổi lễ tốt nghiệp của Hải Nguyễn - Cử Nhân Khoa Học Máy Tính',
};

export default function GraduationInvitation() {
  const eventDetails = {
    date: 'Thứ Bảy, 15 Tháng 1, 2026',
    time: '11:00 Sáng',
    location: 'Hội trường Đại học Văn Lang',
    address: '69/68 Đ. Đặng Thuỳ Trâm, Phường 5, Gò Vấp, Thành phố Hồ Chí Minh 70000, Việt Nam'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-slate-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-100/20 to-blue-100/20 rounded-full blur-3xl" />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="mb-8">
              <p className="text-blue-600 uppercase tracking-widest text-sm font-medium mb-4">
                Thiệp Mời Lễ Tốt Nghiệp
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-4">
                Tốt Nghiệp 2026
              </h1>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
            </div>

            {/* Graduate Photo */}
            <div className="mb-12 relative">
              <div className="relative w-64 h-80 md:w-80 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-slate-400/20 rounded-3xl rotate-2" />
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-blue-500/10">
                  <Image
                    src="/images/image.png"
                    alt="Graduation Photo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Graduate Name */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
                Nguyễn Hồng Hải
              </h2>
              <p className="text-xl md:text-2xl text-neutral-600">
                Kỹ sư Thực Hành
              </p>
              <p className="text-lg text-neutral-500 mt-2">
                Cao đẳng Văn Lang Sài Gòn - Công nghệ Thông tin
              </p>
            </div>

            {/* Countdown Timer */}
            <GraduationCountdown targetDate="2026-01-17T11:00:00" />

            {/* Invitation Message */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12 mb-12 border border-slate-200">
              <div className="prose prose-lg mx-auto text-center">
                <p className="text-neutral-700 text-lg leading-relaxed mb-6">
                  Kính gửi bạn thân mến,
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Sau bao năm học tập, nỗ lực không ngừng nghỉ, cuối cùng tôi cũng đã hoàn thành 
                  chương trình cao đẳng và sắp bước vào một chặng đường mới. Đây là một cột mốc quan 
                  trọng trong cuộc đời tôi, và tôi rất vui mừng được chia sẻ niềm hạnh phúc này cùng 
                  bạn - người bạn tuyệt vời đã luôn bên tôi.
                </p>
                <p className="text-neutral-600 leading-relaxed mt-4">
                  Tôi trân trọng kính mời bạn đến tham dự buổi lễ tốt nghiệp của tôi. 
                  Sự hiện diện của bạn sẽ khiến ngày này trở nên ý nghĩa hơn bao giờ hết!
                </p>
                <p className="text-neutral-700 font-semibold mt-6 italic">
                  Rất mong được gặp bạn!
                </p>
              </div>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CalendarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-800 mb-2">Ngày</h3>
                <p className="text-neutral-600 text-sm">{eventDetails.date}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-800 mb-2">Thời Gian</h3>
                <p className="text-neutral-600 text-sm">{eventDetails.time}</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <LocationIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-800 mb-2">Địa Điểm</h3>
                <p className="text-neutral-600 text-sm">{eventDetails.location}</p>
                <p className="text-neutral-500 text-xs mt-1">{eventDetails.address}</p>
              </div>
            </div>

            {/* RSVP Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12 border border-slate-200">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                Xác Nhận Tham Dự
              </h3>
              <p className="text-neutral-600 mb-8">
                Vui lòng cho tôi biết bạn có thể tham dự được không nhé!
              </p>
              <RSVPForm />
            </div>

            {/* Map Section */}
            <div className="mt-12 bg-white rounded-3xl shadow-lg p-4 border border-slate-200">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Bản Đồ</h3>
              <div className="aspect-video w-full bg-neutral-100 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.787799995443!2d106.69744551080419!3d10.827544858203815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f4a62fce9b%3A0xc99902aa1e26ef02!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBWxINuIExhbmcgLSBDxqEgc-G7nyBjaMOtbmg!5e0!3m2!1svi!2sus!4v1768488401431!5m2!1svi!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Footer Message */}
            <div className="mt-12 text-center">
              <p className="text-neutral-400 mt-4 text-sm">
                © 2026 Hải Nguyễn. Made with ❤️
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
