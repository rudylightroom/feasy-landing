/**
 * Official Apple App Store download badge
 */
interface AppStoreBadgeProps {
  className?: string;
}

export default function AppStoreBadge({ className = '' }: AppStoreBadgeProps) {
  return (
    <a 
      href="https://apps.apple.com/my/app/feasy-pro/id6756234286"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-transform hover:scale-105 ${className}`}
      aria-label="Download on the App Store"
    >
      <img 
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        className="h-12 w-auto"
      />
    </a>
  );
}

