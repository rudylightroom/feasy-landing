/**
 * iPhone-style screen frame component
 */
interface ScreenFrameProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ScreenFrame({ src, alt, className = '' }: ScreenFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* iPhone frame */}
      <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl w-72 h-[600px]">
        <div className="relative bg-white rounded-[2rem] overflow-hidden w-full h-full">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
          
          {/* Screen content */}
          <div className="w-full h-full flex items-center justify-center bg-gray-50">
            <img 
              src={src} 
              alt={alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Image failed to load:', src);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

