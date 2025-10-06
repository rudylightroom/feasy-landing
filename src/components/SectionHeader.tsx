import type { ReactNode } from 'react';

/**
 * Section header component with consistent styling
 */
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: ReactNode;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({ 
  title, 
  subtitle, 
  badge, 
  centered = true, 
  className = '' 
}: SectionHeaderProps) {
  const alignmentClass = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`${alignmentClass} ${className}`}>
      {badge && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
