import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Button from './Button';
import AppStoreBadge from './AppStoreBadge';
import ScreenFrame from './ScreenFrame';

/**
 * Hero section with glass morphism design
 */
export default function Hero() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">
      {/* Left Column */}
      <div className="xl:col-span-7">
        {/* Badge */}
        <div className="inline-flex hover:border-white/60 transition-all duration-300 w-max glow fade-in fade-in-delay-1 group cursor-pointer text-xs font-semibold text-white bg-gradient-to-r from-white/20 to-white/15 border-white/40 border rounded-3xl mb-8 pt-3 pr-6 pb-3 pl-6 items-center shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <Star className="w-3 h-3 mr-2 fill-current group-hover:rotate-12 transition-transform duration-300" />
          New · AI Business Plan
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300 ml-2 w-[12px] h-[12px]">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] mb-8 text-white tracking-tight font-medium"
        >
          Business planning<br />
          & forecasting<br />
          made <span className="text-[#BFFD38] font-medium">easy</span>
        </motion.h2>

        {/* Subcopy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Feasy helps founders and SMEs turn ideas into investor-ready plans with live forecasts, smart reports, and an AI copilot—on iPhone.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6"
        >
          <Button size="lg" href="#waitlist">
            Join Waitlist
          </Button>
          <AppStoreBadge />
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-gray-400"
        >
          14-day free trial • No credit card required • Cancel anytime
        </motion.p>
      </div>

      {/* Right Column - Single Phone Mockup */}
      <div className="xl:col-span-5 relative">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative min-h-[500px] lg:min-h-[700px] flex justify-center lg:justify-end"
        >
          {/* Single phone */}
          <div className="relative z-10">
            <ScreenFrame 
              src="/screens/hero-placeholder.png"
              alt="Feasy Revenue Stream Setup"
              className="w-64 md:w-72"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
