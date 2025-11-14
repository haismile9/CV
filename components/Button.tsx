import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function Button({ children, icon, href, onClick }: ButtonProps) {
  const content = (
    <div className="relative inline-block group">
      <div className="flex items-center gap-1 px-2 py-1.5 bg-white hover:bg-gray-50 transition-colors">
        {icon && <span className="w-6 h-6">{icon}</span>}
        <span className="font-bold text-neutral-900">{children}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-900" />
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
