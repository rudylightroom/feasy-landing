import type { ReactNode } from 'react';

/**
 * Container component that provides consistent max-width and padding
 */
interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1200px] mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
