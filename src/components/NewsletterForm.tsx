import { useState } from 'react';
import { Mail } from 'lucide-react';
import Button from './Button';

/**
 * Newsletter subscription form
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Fake submit handler
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4">
          <Mail className="w-6 h-6 text-gray-900" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Thanks for subscribing!
        </h3>
        <p className="text-gray-600">
          We'll notify you when we launch and send your 20% discount.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            required
          />
        </div>
        <Button type="submit" size="lg">
          Subscribe
        </Button>
      </div>
      <p className="text-sm text-gray-500 mt-3 text-center">
        No spam, we promise. Unsubscribe at any time.
      </p>
    </form>
  );
}

