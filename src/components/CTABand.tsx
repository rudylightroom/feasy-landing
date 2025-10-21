import { motion } from 'framer-motion';
import Button from './Button';
import AppStoreBadge from './AppStoreBadge';
import ScreenFrame from './ScreenFrame';

/**
 * Purple CTA band with phone mockup overlay
 */
export default function CTABand() {
  return (
    <section className="relative py-24 mb-16">
      <div className="grid lg:grid-cols-3 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white z-10 relative lg:col-span-2"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Start your free trial
          </h2>
          
          <p className="text-xl md:text-2xl text-white/95 mb-8 font-medium drop-shadow-md">
            Business forecasting and planning made easy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <AppStoreBadge />
            <Button variant="secondary" size="lg" className="shadow-lg" href="#waitlist">
              Join Waitlist
            </Button>
          </div>
        </motion.div>

        {/* Right Column - Phone Mockup */}
         <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="relative flex justify-center lg:justify-start lg:col-span-1 lg:-ml-24"
         >
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-10"
          >
            <ScreenFrame 
              src="/screens/cta-band.png"
              alt="Feasy App Dashboard"
            />
          </motion.div>
          
          {/* Background glow */}
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-150"></div>
        </motion.div>
      </div>
    </section>
  );
}

