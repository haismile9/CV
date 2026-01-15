# 🎓 Thiệp Mời Lễ Tốt Nghiệp

Trang thiệp mời lễ tốt nghiệp được tạo với Next.js, Tailwind CSS và TypeScript.

## ✨ Tính Năng

- ⏰ **Đếm ngược thời gian** đến ngày lễ tốt nghiệp
- 📋 **Form RSVP** để bạn bè xác nhận tham dự
- 🗺️ **Bản đồ Google Maps** hiển thị địa điểm
- 📱 **Responsive design** - hoạt động tốt trên mọi thiết bị
- 🎨 **Thiết kế đẹp mắt** với gradient màu vàng-đỏ theo chủ đề tốt nghiệp

## 🚀 Cách Sử Dụng

### 1. Thêm Ảnh Tốt Nghiệp

Sao chép ảnh tốt nghiệp của bạn vào:
```
public/images/graduation-photo.jpg
```

### 2. Cập Nhật Thông Tin

Mở file `app/graduation/page.tsx` và cập nhật:

```typescript
const eventDetails = {
  date: 'Thứ Bảy, 15 Tháng 2, 2026',  // Cập nhật ngày của bạn
  time: '09:00 Sáng',                   // Cập nhật giờ
  location: 'Hội trường Đại học...',    // Cập nhật địa điểm
  address: '227 Nguyễn Văn Cừ...'      // Cập nhật địa chỉ
};
```

Cập nhật thông tin cá nhân:
```tsx
<h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
  Hải Nguyễn  {/* Thay tên của bạn */}
</h2>
<p className="text-xl md:text-2xl text-neutral-600">
  Cử Nhân Khoa Học Máy Tính  {/* Thay ngành học */}
</p>
<p className="text-lg text-neutral-500 mt-2">
  Đại học Khoa học Tự nhiên TP.HCM  {/* Thay trường */}
</p>
```

### 3. Cập Nhật Countdown Timer

Trong file `app/graduation/page.tsx`, tìm component:
```tsx
<GraduationCountdown targetDate="2026-02-15T09:00:00" />
```

Thay đổi `targetDate` thành ngày giờ lễ tốt nghiệp của bạn (format: YYYY-MM-DDTHH:mm:ss).

### 4. Cập Nhật Bản Đồ

Trong file `app/graduation/page.tsx`, tìm iframe Google Maps và thay đổi địa chỉ:

1. Truy cập [Google Maps](https://www.google.com/maps)
2. Tìm địa điểm lễ tốt nghiệp
3. Click "Share" → "Embed a map"
4. Sao chép URL từ iframe
5. Thay thế URL trong code

## 🌐 Truy Cập Trang

Sau khi chạy development server:
```bash
npm run dev
```

Truy cập:
```
http://localhost:3000/graduation
```

## 📧 Xử Lý RSVP

Hiện tại, RSVP được lưu trong console. Để lưu thực tế, bạn có thể:

### Option 1: Email (Resend)
```bash
npm install resend
```

Cập nhật `app/api/rsvp/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'your-email@example.com',
  subject: 'New RSVP Received',
  html: `<p>${name} (${email}) has RSVP'd: ${attendance}</p>`
});
```

### Option 2: Google Sheets
```bash
npm install googleapis
```

### Option 3: Database (Prisma + PostgreSQL)
```bash
npm install prisma @prisma/client
npx prisma init
```

## 🎨 Tùy Chỉnh Màu Sắc

Trong file `app/graduation/page.tsx`, bạn có thể thay đổi màu sắc:

- `from-amber-500 to-red-500` → Gradient chính
- `from-amber-50 via-white to-red-50` → Background gradient
- `text-amber-600` → Màu chữ accent

## 📱 Chia Sẻ

Sau khi deploy, bạn có thể chia sẻ link:
```
https://your-domain.com/graduation
```

Với bạn bè qua:
- SMS
- Email
- Facebook
- Zalo
- Messenger

## 🚀 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

## 📝 Ghi Chú

- Nhớ test trên mobile trước khi gửi cho bạn bè
- Kiểm tra countdown timer hoạt động đúng
- Test form RSVP hoạt động
- Đảm bảo bản đồ hiển thị đúng địa điểm

## 🎉 Chúc Mừng Tốt Nghiệp!

Chúc bạn có một buổi lễ tốt nghiệp thật ý nghĩa! 🎓✨
