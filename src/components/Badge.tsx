import type { ReactNode } from 'react';

/**
 * Badge component for highlights and labels
 */
interface BadgeProps {
  children: ReactNode;
  variant?: 'accent' | 'primary' | 'gray' | 'lime';
  className?: string;
}

export default function Badge({ children, variant = 'accent', className = '' }: BadgeProps) {
  const variantClasses = {
    accent: 'bg-accent text-gray-900',
    primary: 'bg-primary/10 text-primary',
    gray: 'bg-gray-100 text-gray-700',
    lime: 'bg-[#BFFD38] text-black'
  };
  
  return (
    <span className={`inline-flex items-center text-sm px-3 py-1 rounded-full font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
