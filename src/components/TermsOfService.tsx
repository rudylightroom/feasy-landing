import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  FileText,
  Shield,
  CreditCard,
  Database,
  AlertTriangle,
  Copyright,
  Mail,
  MapPin
} from 'lucide-react';

/**
 * Terms of Service page with glassmorphism design
 */
export default function TermsOfService() {
  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      icon: <FileText className="w-6 h-6" />,
      content: "By downloading, installing, or using the Feasy mobile application (\"App\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, please do not use the App.\n\nThese Terms constitute a legally binding agreement between you and Feasy Inc. (\"Company\", \"we\", \"us\", or \"our\")."
    },
    {
      id: 2,
      title: "Description of Service",
      icon: <Database className="w-6 h-6" />,
      content: "Feasy is a financial planning and business forecasting application that provides tools for:\n\n• Creating business plans and financial projections\n• Generating financial reports and analytics\n• Managing revenue streams and expense tracking\n• Exporting data in various formats (PDF, Excel, Word)\n• Cloud synchronization and data backup\n\nThe App is designed for business planning purposes and should not be considered as professional financial advice."
    },
    {
      id: 3,
      title: "User Accounts and Data",
      icon: <Shield className="w-6 h-6" />,
      content: "• You are responsible for maintaining the confidentiality of your account\n• You must provide accurate and complete information\n• You are responsible for all activities under your account\n• You own your business data and financial information\n• We provide tools for data export and backup\n• You may delete your account and data at any time"
    },
    {
      id: 4,
      title: "Subscription and Payment",
      icon: <CreditCard className="w-6 h-6" />,
      content: "• Subscriptions are billed through the Apple App Store\n• Payment will be charged to your iTunes Account\n• Subscriptions automatically renew unless auto-renew is turned off\n• You can manage subscriptions in your Apple Account settings\n• Refunds are subject to Apple's refund policy\n• We reserve the right to change subscription prices with notice"
    },
    {
      id: 5,
      title: "Data Privacy and Security",
      icon: <Shield className="w-6 h-6" />,
      content: "• Your data is stored locally on your device using Core Data\n• Optional iCloud sync is available when enabled by you\n• We implement industry-standard security measures\n• We do not share your data with third parties without consent\n• You can export and delete your data at any time\n• See our Privacy Policy for detailed information"
    },
    {
      id: 6,
      title: "Prohibited Uses",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: "You may not use the App to:\n\n• Violate any applicable laws or regulations\n• Infringe on intellectual property rights\n• Transmit harmful or malicious code\n• Attempt to gain unauthorized access to our systems\n• Use the App for illegal business activities\n• Share false or misleading financial information"
    },
    {
      id: 7,
      title: "Intellectual Property",
      icon: <Copyright className="w-6 h-6" />,
      content: "• The App and its content are owned by Feasy Inc.\n• You retain ownership of your business data\n• You grant us a license to process your data for service provision\n• You may not copy, modify, or distribute the App\n• Trademarks and logos are protected intellectual property"
    },
    {
      id: 8,
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: "• The App is provided \"as is\" without warranties\n• We are not liable for business decisions made using the App\n• We are not responsible for data loss due to device issues\n• Our liability is limited to the amount you paid for the App\n• We are not liable for indirect or consequential damages\n• The App is not a substitute for professional financial advice"
    },
    {
      id: 9,
      title: "Termination",
      icon: <FileText className="w-6 h-6" />,
      content: "• You may terminate your account at any time\n• We may terminate your access for Terms violations\n• Upon termination, you can export your data\n• We will delete your data after a reasonable period\n• Termination does not affect your data ownership rights"
    },
    {
      id: 10,
      title: "Changes to Terms",
      icon: <FileText className="w-6 h-6" />,
      content: "• We may update these Terms from time to time\n• We will notify you of significant changes\n• Continued use constitutes acceptance of new Terms\n• You can review Terms in the App settings\n• Material changes will be communicated via the App"
    }
  ];

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
      <main className="w-full max-w-6xl relative z-10">
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
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Terms of <span className="text-[#BFFD38]">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Last updated: October 2025
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-light rounded-3xl p-8 border border-white/10"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#BFFD38]/20 rounded-xl flex items-center justify-center text-[#BFFD38] flex-shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {section.id}. {section.title}
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
                  {section.content.split('\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4">
                      {paragraph.startsWith('•') ? (
                        <span className="flex items-start">
                          <span className="text-[#BFFD38] mr-2 mt-1">•</span>
                          <span>{paragraph.substring(1).trim()}</span>
                        </span>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16"
          >
            <div className="glass-light rounded-3xl p-8 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Contact Information
              </h2>
              <p className="text-lg text-gray-300 mb-8 text-center">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-[#BFFD38] mx-auto mb-3" />
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">hello@feasy.pro</p>
                </div>
                <div className="text-center">
                  <FileText className="w-8 h-8 text-[#BFFD38] mx-auto mb-3" />
                  <p className="text-white font-medium">Website</p>
                  <p className="text-gray-300">feasy.pro</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#BFFD38] mx-auto mb-3" />
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-300 text-sm">
                    Surian Residences, Jln PJU 7/15,<br />
                    Mutiara Damansara, 47810<br />
                    Petaling Jaya
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="glass-light rounded-3xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Questions about our Terms?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're here to help clarify any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/" 
                  className="bg-[#6C39F9] text-white hover:bg-[#BFFD38] hover:text-black px-8 py-4 rounded-xl font-medium transition-all duration-300"
                >
                  Back to Home
                </a>
                <a 
                  href="mailto:hello@feasy.pro" 
                  className="text-[#BFFD38] hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
}
