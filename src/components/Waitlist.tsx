import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, User, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

/**
 * Waitlist page with glassmorphism design and Formspree integration
 */
export default function Waitlist() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mqayogbr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: 'New Waitlist Signup - Feasy'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for joining our waitlist! We\'ll be in touch soon.');
        setFormData({ name: '', email: '' });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-8 relative overflow-x-hidden">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(/background.png)', 
          zIndex: -20
        }}
      ></div>

      {/* Ambient Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -10 }}>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Glass Card Container */}
      <main className="w-full max-w-4xl relative z-10">
        <div className="glass lg:rounded-[3rem] sm:p-8 lg:p-12 xl:p-16 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
          
          {/* Navigation Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <a 
              href="#"
              className="inline-flex items-center text-[#BFFD38] hover:text-white transition-colors duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Home</span>
            </a>
          </motion.div>
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Join the <span className="text-[#BFFD38]">Waitlist</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Be the first to know when Feasy launches. Get exclusive early access and special pricing for waitlist members.
            </p>
          </motion.div>

          {/* Waitlist Form */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="glass-light rounded-3xl p-8 lg:p-12 border border-white/10 max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BFFD38] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#BFFD38] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
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
                    className="flex items-start space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-green-300 text-sm">{message}</p>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start space-x-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-300 text-sm">{message}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              What You'll Get
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Early Access', desc: 'Be among the first to use Feasy' },
                { title: 'Special Pricing', desc: 'Exclusive discounts for waitlist members' },
                { title: 'Priority Support', desc: 'Get help when you need it most' }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-light rounded-2xl p-6 border border-white/10 text-center"
                >
                  <div className="w-12 h-12 bg-[#BFFD38]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-[#BFFD38]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <div className="glass-light rounded-3xl p-8 border border-white/10">
              <p className="text-lg text-gray-300 mb-4">
                Questions? Reach out to us at{' '}
                <a href="mailto:hello@feasy.pro" className="text-[#BFFD38] hover:text-white transition-colors duration-200">
                  hello@feasy.pro
                </a>
              </p>
              <a 
                href="/" 
                className="text-[#BFFD38] hover:text-white transition-colors duration-200 font-medium"
              >
                Back to Home
              </a>
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
}

