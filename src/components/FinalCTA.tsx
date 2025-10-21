import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

/**
 * Waitlist form section for landing page
 */
export default function FinalCTA() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for joining our waitlist! We\'ll be in touch soon.');
        setFormData({ name: '', email: '' });
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="glass-light rounded-3xl p-8 lg:p-12 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Join the Waitlist
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Be the first to know when Feasy launches. Get exclusive early access and special pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Name Field */}
                <div className="flex-1">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BFFD38] focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex-1">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BFFD38] focus:border-transparent transition-all duration-200"
                      placeholder="Your email"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="accent" 
                size="lg" 
                className="w-full"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </Button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl mt-6"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-green-300 text-sm">{message}</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl mt-6"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{message}</p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

