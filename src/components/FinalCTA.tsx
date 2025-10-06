import { motion } from 'framer-motion';
import Container from './Container';
import Button from './Button';

/**
 * Final CTA band
 */
export default function FinalCTA() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white relative z-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            No long-term contracts.{' '}
            <br className="hidden sm:block" />
            No catches. Simple.
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial. Cancel anytime.
          </p>
          
          <div className="flex justify-center">
            <Button variant="accent" size="lg">
              Get started
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

