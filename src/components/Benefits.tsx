import { Clock, Shield, X, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Benefits strip with 4 mini-panels
 */
export default function Benefits() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      text: "14-day free trial"
    },
    {
      icon: <X className="w-6 h-6" />,
      text: "No long-term contracts"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Cancel anytime"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      text: "Private & secure"
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="glass rounded-3xl p-8 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#BFFD38]/20 rounded-xl mb-3 text-[#BFFD38]">
                  {benefit.icon}
                </div>
                <p className="text-sm font-medium text-white">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

