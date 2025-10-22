import { Mail } from 'lucide-react';
import AppStoreBadge from './AppStoreBadge';

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

/**
 * Footer with links and social icons
 */
export default function Footer() {
  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'About', href: '#about' },
    { name: 'Waitlist', href: '#waitlist' },
    { name: 'Terms of Service', href: '#terms', onClick: () => sessionStorage.setItem('fromFooter', 'true') },
    { name: 'Privacy Policy', href: '#privacy', onClick: () => sessionStorage.setItem('fromFooter', 'true') }
  ];

  const socialLinks = [
    { name: 'X', icon: XIcon, href: 'https://x.com/rudylightroom' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@feasy.pro' }
  ];

  return (
    <footer className="relative py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="glass rounded-3xl p-8 border border-white/10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Left Column - Logo & Description */}
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/logo.png" 
                  alt="Feasy Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Business planning and forecasting made easy. Turn your ideas into investor-ready plans with AI assistance.
              </p>
              <AppStoreBadge />
            </div>

            {/* Middle Column - Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#BFFD38] transition-colors duration-200"
                      onClick={link.onClick}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Social Links */}
            <div>
              <h3 className="font-semibold mb-4 text-white">Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#BFFD38] hover:text-black transition-colors duration-200 text-[#BFFD38]"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Feasy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

