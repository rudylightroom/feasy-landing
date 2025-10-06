import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Feature card component
 */
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  scrollToId?: string;
}

export default function FeatureCard({ icon, title, description, delay = 0, scrollToId }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group glass-light rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02] hover:bg-white/15"
    >
      <div className="mb-4 text-[#BFFD38]">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>
      
      <button 
        onClick={() => {
          if (scrollToId) {
            const element = document.getElementById(scrollToId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }}
        className="inline-flex items-center text-[#BFFD38] font-medium text-sm hover:text-[#BFFD38]/80 transition-colors group-hover:translate-x-1 transform duration-200"
      >
        Learn more
        <ArrowRight className="ml-1 w-4 h-4" />
      </button>
    </motion.div>
  );
}
