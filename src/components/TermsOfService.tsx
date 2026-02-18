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
      content: "By downloading, installing, or using the Feasy mobile application (\"App\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, please do not use the App.\n\nThese Terms constitute a legally binding agreement between you and Music Mountain PLT (\"Company\", \"we\", \"us\", or \"our\")."
    },
    {
      id: 2,
      title: "Description of Service",
      icon: <Database className="w-6 h-6" />,
      content: "Feasy is a financial planning and business forecasting application that provides tools for:\n\n• Creating business plans and financial projections\n• Generating financial reports and analytics\n• Managing revenue streams and expense tracking\n• Exporting data in various formats (PDF, Excel, CSV, Word)\n• Cloud synchronization and data backup via CloudKit\n• AI-powered business plan assistance (Professional AI plan only)\n\nThe App is designed for business planning purposes and should not be considered as professional financial advice. Always consult with qualified financial professionals for important business decisions."
    },
    {
      id: 3,
      title: "User Accounts and Data",
      icon: <Shield className="w-6 h-6" />,
      content: "• You are responsible for maintaining the confidentiality of your account\n• You must provide accurate and complete information\n• You are responsible for all activities under your account\n• You own your business data and financial information\n• We provide tools for data export and backup\n• You may delete your account and data at any time"
    },
    {
      id: 4,
      title: "Subscription Plans & Payment",
      icon: <CreditCard className="w-6 h-6" />,
      content: "Feasy offers two subscription plans:\n\nStarter Plan:\n\n• Available in monthly and yearly options\n• Professional financial forecasting tools\n• Professional reports and business plans\n• Limited to 1 business profile\n• Export functionality for all formats\n• CloudKit sync across your devices\n\nProfessional AI Plan:\n\n• Available in monthly and yearly options\n• All Starter plan features included\n• AI Business Plan Assistant with AI-powered plan generation\n• Unlimited business profiles\n• Priority support\n\nPayment Terms:\n\n• Subscriptions are billed through the Apple App Store\n• Payment will be charged to your Apple ID account\n• Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period\n• You can manage subscriptions in your Apple Account settings\n• Refunds are subject to Apple's refund policy\n• We reserve the right to change subscription prices with 30 days notice\n• If you downgrade, changes take effect at the end of your current billing period\n• If your subscription expires, you can still export your data before account deletion"
    },
    {
      id: 5,
      title: "AI Features & Limitations",
      icon: <Database className="w-6 h-6" />,
      content: "The Professional AI plan includes AI-powered business plan generation:\n\nHow AI Works:\n\n• AI analyzes your business information and financial data\n• AI generates business plan content based on your inputs\n• AI suggestions are based on patterns and best practices\n\nImportant Disclaimers:\n\n• AI-generated content is for guidance only, not professional advice\n• You are responsible for reviewing and verifying all AI-generated content\n• AI may produce inaccurate, incomplete, or inappropriate suggestions\n• AI does not replace professional financial, legal, or business consultation\n• We are not liable for business decisions made based on AI suggestions\n• AI features require internet connectivity\n\nData Usage:\n\n• Your business data may be processed by AI services to generate content\n• We do not use your data to train AI models\n• AI processing complies with our Privacy Policy"
    },
    {
      id: 6,
      title: "Data Privacy and Security",
      icon: <Shield className="w-6 h-6" />,
      content: "Your data is stored locally on your device using Core Data\n\nOptional CloudKit sync via your iCloud account is available when enabled by you\n\nCloudKit syncs your data across devices signed into the same iCloud account\n\nWe implement industry-standard encryption and security measures\n\nWe do not share your data with third parties without your consent\n\nYou can export and delete your data at any time\n\nSee our Privacy Policy for detailed information\n\nThird-Party Services:\n\n• Google Sign-In (governed by Google's Terms of Service and Privacy Policy)\n• Apple Sign-In (governed by Apple's Terms and Privacy Policy)\n• CloudKit (governed by Apple's iCloud Terms and Privacy Policy)\n• Apple Push Notification Service (for app notifications)"
    },
    {
      id: 7,
      title: "Prohibited Uses",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: "You may not use the App to:\n\n• Violate any applicable laws or regulations\n• Infringe on intellectual property rights\n• Transmit harmful or malicious code\n• Attempt to gain unauthorized access to our systems or other users' accounts\n• Use the App for illegal business activities\n• Share false or misleading financial information\n• Reverse engineer, decompile, or disassemble the App\n• Resell or redistribute the App or its content\n• Use the App in a way that could harm, disable, or impair the service"
    },
    {
      id: 8,
      title: "Intellectual Property",
      icon: <Copyright className="w-6 h-6" />,
      content: "The App and its content are owned by Music Mountain PLT\n\nYou retain full ownership of your business data and financial information\n\nYou grant us a limited license to process your data solely for providing the service\n\nAI-generated content based on your data is owned by you\n\nYou may not copy, modify, distribute, or create derivative works of the App\n\nTrademarks, logos, and branding are protected intellectual property\n\n\"Feasy\" is a trademark of Music Mountain PLT"
    },
    {
      id: 9,
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: "The App is provided \"as is\" without warranties of any kind\n\nWe are not liable for business decisions made using the App or AI suggestions\n\nWe are not responsible for data loss due to device issues, user error, or service interruptions\n\nOur total liability is limited to the amount you paid for your subscription in the past 12 months\n\nWe are not liable for indirect, incidental, consequential, or punitive damages\n\nThe App is not a substitute for professional financial, legal, or business advice\n\nWe do not guarantee uninterrupted or error-free service\n\nWe are not responsible for third-party service failures (Apple, Google, CloudKit)\n\nYou are responsible for backing up your data"
    },
    {
      id: 10,
      title: "Termination & Data Deletion",
      icon: <FileText className="w-6 h-6" />,
      content: "• You may terminate your account at any time through app settings\n• We may terminate your access for Terms violations with or without notice\n• Upon termination, you can export your data before deletion\n• Account data will be deleted within 30 days of termination\n• CloudKit synced data will be removed from all your devices\n• Subscription charges will continue until you cancel through Apple\n• Termination does not affect your data ownership rights\n• After deletion, data cannot be recovered\n• We may retain anonymized analytics data after account deletion"
    },
    {
      id: 11,
      title: "Changes to Terms",
      icon: <FileText className="w-6 h-6" />,
      content: "• We may update these Terms from time to time\n• We will notify you of significant changes via in-app notification or email\n• Continued use after notification constitutes acceptance of new Terms\n• You can review current Terms anytime in the App settings\n• Material changes will be communicated at least 30 days in advance\n• If you don't agree to new Terms, you must stop using the App and may cancel your subscription"
    },
    {
      id: 12,
      title: "Age Requirements",
      icon: <Shield className="w-6 h-6" />,
      content: "• You must be at least 13 years old to use this App\n• If you are under 13, you may not use the App. If you are between 13 and 18, you may use the App with parental or guardian consent\n• We do not knowingly collect data from children under 13 without parental consent\n• By using the App, you represent that you meet the age requirements\n• Parents/guardians are responsible for their minor children's use of the App"
    },
    {
      id: 13,
      title: "Governing Law & Dispute Resolution",
      icon: <MapPin className="w-6 h-6" />,
      content: "Governing Law:\n\n• These Terms are governed by the laws of Malaysia\n• Disputes will be resolved in the courts of Malaysia\n• If you are a consumer in the EU, you also benefit from mandatory consumer protection laws\n\nDispute Resolution:\n\n• We encourage you to contact us first to resolve any disputes: hello@feasy.pro\n• If informal resolution fails, disputes will be resolved through binding arbitration or court\n• You agree to resolve disputes on an individual basis, not as a class action\n• EU consumers: You have the right to use the EU Online Dispute Resolution platform\n\nExceptions:\n\n• Either party may seek injunctive relief in court for intellectual property violations\n• Nothing in these Terms affects your statutory rights as a consumer"
    },
    {
      id: 14,
      title: "Indemnification",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: "You agree to indemnify and hold harmless Music Mountain PLT, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:\n\n• Your use or misuse of the App\n• Your violation of these Terms\n• Your violation of any rights of another person or entity\n• Your business data or financial information\n• Business decisions made using the App or AI features\n• Any false or misleading information you provide\n\nThis indemnification survives termination of these Terms."
    },
    {
      id: 15,
      title: "Severability & Miscellaneous",
      icon: <FileText className="w-6 h-6" />,
      content: "Severability:\n\n• If any provision of these Terms is found invalid or unenforceable, the remaining provisions will remain in full force\n• Invalid provisions will be modified to the minimum extent necessary to make them enforceable\n\nEntire Agreement:\n\n• These Terms, together with our Privacy Policy, constitute the entire agreement between you and Music Mountain PLT\n• These Terms supersede any prior agreements or understandings\n\nForce Majeure:\n\n• We are not liable for delays or failures due to circumstances beyond our reasonable control (natural disasters, war, internet outages, Apple service disruptions, etc.)\n\nAssignment:\n\n• You may not assign or transfer these Terms without our written consent\n• We may assign these Terms to any successor or affiliate\n\nWaiver:\n\n• Our failure to enforce any provision does not constitute a waiver of that provision"
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
              Last updated: February 2026
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
                  <p className="text-white font-medium">Company</p>
                  <p className="text-gray-300">Music Mountain PLT</p>
                </div>
              </div>
              <p className="text-lg text-gray-300 mt-8 text-center">
                For support inquiries, use the in-app feedback feature or email us at the address above.
              </p>
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
