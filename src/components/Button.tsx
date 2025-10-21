import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

/**
 * Button component with different variants - supports both button and link rendering
 */
interface BaseButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

type ButtonProps = BaseButtonProps & 
  (
    | ({ href?: never } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  );

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-[#BFFD38] hover:text-black focus:ring-primary/30',
    secondary: 'bg-[#6C39F9] text-white hover:bg-[#BFFD38] hover:text-black focus:ring-white/30',
    accent: 'bg-[#6C39F9] text-white hover:bg-[#BFFD38] hover:text-black focus:ring-white/30'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // Render as link if href is provided
  if ('href' in props && props.href) {
    return (
      <a 
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }
  
  // Render as button
  return (
    <button 
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
