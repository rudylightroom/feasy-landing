import Container from './Container';
import SectionHeader from './SectionHeader';
import Accordion from './Accordion';

/**
 * FAQ section with accordion
 */
export default function FAQ() {
  const faqs = [
    {
      question: "How does the 14-day free trial work?",
      answer: "Experience the full power of Feasy risk-free for 14 days! Both our Starter ($19/month) and Professional AI ($29/month) plans include a complete 14-day free trial with zero commitment. During your trial, you'll have full access to all features of your chosen plan - create professional financial forecasts, generate comprehensive business plans, export reports in multiple formats, and even try our AI-powered business plan assistant (Professional AI plan). You can cancel anytime during the trial without being charged. After 14 days, you'll automatically be subscribed unless you choose to cancel. No hidden fees, no surprises - just 14 days to see how Feasy can transform your business planning."
    },
    {
      question: "Can I export my business plans and reports?",
      answer: "Absolutely! Feasy offers comprehensive export capabilities that let you take your data anywhere. Export your business plans as professional PDF documents or editable Word files. Download your financial reports in PDF, Excel, or CSV formats for further analysis. You can customize export settings including paper size, orientation, and color schemes. All exports include professional formatting with Feasy app branding. Whether you need to share with investors, submit to banks, or analyze data in other tools, Feasy gives you the flexibility to export everything in the format that works best for your needs."
    },
    {
      question: "How secure is my business data?",
      answer: "Your business data security is our top priority. Feasy uses enterprise-grade AES-256 encryption to protect all your financial information. Your data is stored locally on your device with iOS Data Protection enabled, and local backups are encrypted for additional security. We use Apple's secure CloudKit infrastructure for optional cloud sync, ensuring your data is protected with the same security standards as your Apple ID. All data transmission uses HTTPS encryption, and we never share your data with third parties. You maintain complete control over your data - you can export it anytime or delete it permanently through app settings."
    },
    {
      question: "What are the limits on business profiles?",
      answer: "Feasy offers flexible business profile options to match your needs. Our Starter plan ($19/month) includes 1 business profile - perfect for entrepreneurs and small business owners. Our Professional AI plan ($29/month) includes unlimited business profiles - ideal for consultants, agencies, or anyone managing multiple ventures. Each business profile can create comprehensive 60-month financial forecasts and professional reports. You can easily switch between businesses and manage multiple ventures from one account. Start with one business and upgrade anytime as your portfolio grows."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you have complete control over your subscription! You can cancel anytime directly through your Apple ID account settings or within the Feasy app. When you cancel, you'll continue to have access to all features until the end of your current billing period. No cancellation fees, no complicated processes - just a few taps and you're done. If you change your mind, you can resubscribe anytime and pick up right where you left off. We believe in earning your business every month, not trapping you in contracts."
    },
    {
      question: "Do you offer customer support?",
      answer: "We provide comprehensive support to help you succeed! All users get access to our extensive Help Center with step-by-step tutorials, detailed FAQs, and searchable documentation. You can contact our support team directly through the app or email hello@feasy.pro for personalized assistance. Professional AI subscribers receive priority support with faster response times. We also offer regular app updates with new features and improvements based on user feedback. Our goal is to ensure you get the most value from Feasy, so we're here to help whenever you need us."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Glassmorphic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about Feasy and how it works.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

