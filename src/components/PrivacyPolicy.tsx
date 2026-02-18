import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  Shield,
  Database,
  Download,
  Settings,
  Mail,
  Lock,
  Key,
  CreditCard,
  BarChart3,
  Clock,
  Scale,
  FileText,
  MapPin
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
      content: "• Business information (name, industry, financial data)\n• User profile information (name, email)\n• Financial forecasts and projections\n• Revenue streams and expense data\n• Authentication data (provider IDs, email addresses)\n• Subscription and payment status\n• Feedback and support communications (including device and app version when you submit feedback)\n• Photo attachments (when you choose to attach them)\n\nWe do not use third-party analytics or track your in-app behavior."
    },
    {
      id: 2,
      title: "Authentication & Third-Party Services",
      icon: <Key className="w-6 h-6" />,
      content: "We offer multiple sign-in options:\n\n• Google Sign-In: When you sign in with Google, we receive your name, email address, and profile information from Google. Google's Privacy Policy applies to data collected during authentication.\n• Apple Sign-In: When you sign in with Apple, we receive your name and email (or private relay email). Apple's Privacy Policy applies to data collected during authentication.\n• Email/Password: Your password is securely encrypted and never stored in plain text.\n\nWe do not share your authentication data with third parties except as necessary to provide the service (e.g., syncing via CloudKit)."
    },
    {
      id: 3,
      title: "Data Export Functionality",
      icon: <Download className="w-6 h-6" />,
      content: "Our app allows you to export your financial data in various formats (PDF, Excel, CSV). When you use export features:\n\n• Only data you explicitly choose to export is included\n• Exported files are created locally on your device\n• You control where and how exported files are shared\n• Export data may be encrypted for security\n• We do not automatically upload or share your exported data\n\nExport Compliance: This app uses encryption technology for data protection. Export of encrypted data may be subject to export administration regulations."
    },
    {
      id: 4,
      title: "How We Use Your Data",
      icon: <Settings className="w-6 h-6" />,
      content: "• To provide financial forecasting and reporting services\n• To generate business plans and financial projections\n• To improve app functionality and user experience\n• To provide customer support when requested\n• To comply with legal obligations"
    },
    {
      id: 5,
      title: "Data Storage & Security",
      icon: <Lock className="w-6 h-6" />,
      content: "• Data is stored locally on your device using Core Data\n• Local backups are encrypted for security\n• Optional CloudKit sync via your iCloud account (when enabled by you)\n• CloudKit data is stored in Apple's secure cloud infrastructure\n• CloudKit syncs your business data across your devices signed into the same iCloud account\n• Apple's CloudKit Privacy Policy applies to synced data\n• We implement industry-standard encryption and security measures\n• Data is not shared with third parties without your consent\n• Push notifications are delivered through Apple Push Notification Service (APNs)"
    },
    {
      id: 6,
      title: "Subscription & Payment Information",
      icon: <CreditCard className="w-6 h-6" />,
      content: "• Subscriptions are processed through Apple's App Store\n• We receive subscription status (Starter or Professional AI plan)\n• We do not receive or store your payment card details\n• Payment information is handled exclusively by Apple\n• Apple's App Store Privacy Policy applies to payment data\n• We use subscription status to enable/disable features"
    },
    {
      id: 7,
      title: "Analytics & Device Information",
      icon: <BarChart3 className="w-6 h-6" />,
      content: "We do not use third-party analytics, tracking, or advertising SDKs in the app.\n\nDevice and app information (e.g. device model, iOS version, app version) may be included only when you voluntarily submit feedback or contact support. We use this to help troubleshoot issues. We do not collect feature usage statistics, error logs, or performance metrics from the app."
    },
    {
      id: 8,
      title: "Data Retention & Deletion",
      icon: <Clock className="w-6 h-6" />,
      content: "• Business and financial data: We retain your data for as long as your account is active. We may introduce automatic deletion after a retention period (e.g. 5 years) in a future update; you will be notified if this changes.\n• Local backups: We may introduce backup retention (e.g. 90 days) in a future update; you will be notified if this applies.\n• CloudKit synced data: Retained until you delete your account or disable sync\n• Account data: Deleted within 30 days of account deletion request (typically immediately)\n• You can delete your account and all associated data at any time through app settings\n• After account deletion, data cannot be recovered\n• CloudKit data is removed from all your synced devices after deletion"
    },
    {
      id: 9,
      title: "Your Rights",
      icon: <Shield className="w-6 h-6" />,
      content: "• Access your personal data at any time through the app\n• Export your data in standard formats (PDF, Excel, CSV, Word)\n• Delete your data and account through app settings\n• Control data sharing and export preferences\n• Request data correction or modification\n• Disable CloudKit sync at any time\n• Revoke photo library access in iOS Settings"
    },
    {
      id: 10,
      title: "Legal Compliance & International Users",
      icon: <Scale className="w-6 h-6" />,
      content: "GDPR Compliance (EU Users):\n\n• We comply with General Data Protection Regulation (GDPR) requirements\n• You have the right to access, rectify, erase, restrict, and port your data\n• You have the right to object to processing and withdraw consent\n• Data processing is based on consent and contractual necessity\n\nCCPA Compliance (California Users):\n\n• We comply with California Consumer Privacy Act (CCPA) requirements\n• You have the right to know what data we collect and how it's used\n• You have the right to delete your personal information\n• We do not sell your personal information to third parties\n\nInternational Data Transfers:\n\n• Data may be transferred to and stored in the United States and other countries\n• CloudKit data is stored in Apple's global infrastructure\n• We ensure appropriate safeguards for international data transfers\n\nAge Restrictions:\n\n• This app is intended for users 13 years and older\n• We do not knowingly collect data from children under 13\n• If you are under 13, please do not use this app without parental consent"
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
              Last updated: February 2026
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
                  <p className="text-white font-medium">Company</p>
                  <p className="text-gray-300">Music Mountain PLT</p>
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
