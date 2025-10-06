import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  Shield,
  Database,
  Download,
  Eye,
  Trash2,
  Settings,
  Mail,
  Globe,
  Lock,
  FileText,
  AlertCircle
} from 'lucide-react';

/**
 * Privacy Policy page with glassmorphism design
 */
export default function PrivacyPolicy() {
  const sections = [
    {
      id: 1,
      title: "Data We Collect",
      icon: <Database className="w-6 h-6" />,
      content: "• Business information (name, industry, financial data)\n• User profile information (name, email)\n• Financial forecasts and projections\n• Revenue streams and expense data\n• App usage analytics (anonymized)"
    },
    {
      id: 2,
      title: "Data Export Functionality",
      icon: <Download className="w-6 h-6" />,
      content: "Our app allows you to export your financial data in various formats (PDF, Excel, CSV). When you use export features:\n\n• Only data you explicitly choose to export is included\n• Exported files are created locally on your device\n• You control where and how exported files are shared\n• Export data may be encrypted for security\n• We do not automatically upload or share your exported data\n\nExport Compliance: This app uses encryption technology for data protection. Export of encrypted data may be subject to export administration regulations."
    },
    {
      id: 3,
      title: "How We Use Your Data",
      icon: <Settings className="w-6 h-6" />,
      content: "• To provide financial forecasting and reporting services\n• To generate business plans and financial projections\n• To improve app functionality and user experience\n• To provide customer support when requested\n• To comply with legal obligations"
    },
    {
      id: 4,
      title: "Data Storage & Security",
      icon: <Lock className="w-6 h-6" />,
      content: "• Data is stored locally on your device using Core Data\n• Local backups are encrypted for security\n• Optional iCloud sync (when enabled by user)\n• We implement industry-standard security measures\n• Data is not shared with third parties without consent"
    },
    {
      id: 5,
      title: "Your Rights",
      icon: <Shield className="w-6 h-6" />,
      content: "• Access your personal data at any time\n• Export your data in standard formats\n• Delete your data through app settings\n• Control data sharing and export preferences\n• Opt out of analytics collection"
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
              Privacy <span className="text-[#BFFD38]">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Last updated: October 2025
            </p>
          </motion.div>

          {/* Privacy Sections */}
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
                    {section.title}
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

          {/* Security Highlights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <div className="glass-light rounded-3xl p-8 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Your Data Security
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-[#BFFD38] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">Local Storage</h3>
                  <p className="text-gray-300">Your data stays on your device using Core Data with iOS Data Protection</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-[#BFFD38] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">Encrypted Backups</h3>
                  <p className="text-gray-300">All local backups are encrypted for additional security</p>
                </div>
                <div className="text-center">
                  <Database className="w-12 h-12 text-[#BFFD38] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">CloudKit Sync</h3>
                  <p className="text-gray-300">Optional iCloud sync uses Apple's secure infrastructure</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <div className="glass-light rounded-3xl p-8 border border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Contact Us
              </h2>
              <p className="text-lg text-gray-300 mb-8 text-center">
                If you have questions about this privacy policy or our data practices, please contact us at:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-[#BFFD38] mx-auto mb-3" />
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">hello@feasy.pro</p>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 text-[#BFFD38] mx-auto mb-3" />
                  <p className="text-white font-medium">Website</p>
                  <p className="text-gray-300">feasy.pro</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16 text-center"
          >
            <div className="glass-light rounded-3xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Privacy Matters
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're committed to protecting your data and being transparent about our practices.
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
