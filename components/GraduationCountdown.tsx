'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface GraduationCountdownProps {
  targetDate: string;
}

export default function GraduationCountdown({ targetDate }: GraduationCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="mb-12">
        <div className="flex justify-center gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 min-w-[100px] border border-slate-200">
              <div className="text-4xl font-bold text-neutral-800 mb-2">--</div>
              <div className="text-neutral-500 text-sm uppercase tracking-wide">...</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Ngày' },
    { value: timeLeft.hours, label: 'Giờ' },
    { value: timeLeft.minutes, label: 'Phút' },
    { value: timeLeft.seconds, label: 'Giây' },
  ];

  return (
    <div className="mb-12">
      <p className="text-neutral-600 text-lg mb-6">Đếm ngược đến lễ tốt nghiệp</p>
      <div className="flex flex-wrap justify-center gap-4">
        {timeUnits.map((unit, index) => (
          <div
            key={unit.label}
            className="bg-blue-500 rounded-2xl shadow-lg p-6 min-w-[100px] hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-white/90 text-sm uppercase tracking-wide font-medium">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
