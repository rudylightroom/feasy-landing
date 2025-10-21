import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navigation header for glass card design
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'About', href: '#about' },
    { name: 'Waitlist', href: '#waitlist' }
  ];

  return (
    <header className="flex items-center justify-between mb-12 lg:mb-16 fade-in">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="/logo.png" 
          alt="Feasy Logo" 
          className="h-8 w-auto"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-sm font-medium">
        {navigation.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className={`${index === 0 ? 'text-white' : 'text-gray-400'} hover:text-[#BFFD38] transition-all duration-300 relative group`}
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BFFD38] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>


      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-3 rounded-2xl glass hover:bg-white/10 transition-all duration-300 group"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
        ) : (
          <Menu className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 md:hidden glass-dark rounded-3xl p-6 mx-6 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
              <a 
                href="#waitlist" 
                className="bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

