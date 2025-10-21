import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import Badge from './Badge';

/**
 * Pricing card component
 */
interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description?: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}

export default function PricingCard({ 
  title, 
  price, 
  period, 
  description,
  features, 
  popular = false,
  delay = 0 
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`relative glass-light rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02] flex flex-col h-full ${
        popular ? 'ring-2 ring-primary/30 hover:bg-white/20' : 'hover:bg-white/15'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge variant="lime">Most popular</Badge>
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-2">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-300 text-sm mb-4">
            {description}
          </p>
        )}
        
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-white">
            {price}
          </span>
          <span className="text-gray-300 ml-2">
            {period}
          </span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-[#BFFD38] mt-0.5 mr-3 flex-shrink-0" />
            <span className="text-gray-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        {/* Updated to Join Waitlist button */}
        <Button 
          className="w-full" 
          variant={popular ? 'primary' : 'secondary'}
          size="lg"
          href="#waitlist"
        >
          Join Waitlist
        </Button>
        
        <p className="text-xs text-gray-400 text-center mt-4">
          14-day free trial included
        </p>
      </div>
    </motion.div>
  );
}

