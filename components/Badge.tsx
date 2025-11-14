interface BadgeProps {
  label: string;
  size?: 'default' | 'big';
}

export default function Badge({ label, size = 'default' }: BadgeProps) {
  const sizeClasses = size === 'big' 
    ? 'px-4 py-2 text-base' 
    : 'px-2 py-1 text-xs';
    
  return (
    <span className={`inline-block border border-brand-500 rounded text-neutral-900 ${sizeClasses}`}>
      {label}
    </span>
  );
}
