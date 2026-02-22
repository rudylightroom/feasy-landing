import { 
  BarChart3, 
  Calendar, 
  ToggleLeft, 
  Bot, 
  FileText, 
  Download,
  TrendingUp,
  DollarSign,
  Target,
  Brain,
  Zap,
  FileText as FileTextIcon,
  ArrowRight
} from 'lucide-react';
import Container from './Container';
import FeatureCard from './FeatureCard';
import Button from './Button';
import { motion } from 'framer-motion';

/**
 * Creative Features section with unique layouts and glassmorphic design
 */
export default function Features() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Professional Forecasts",
      description: "Complete financial forecasting with revenue, COGS, OpEx, cashflow, and balance sheet modeling.",
      scrollToId: "professional-forecasts"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Multi-Year Planning", 
      description: "Plan up to 5 years ahead with dynamic revenue, expense, and growth assumptions that update instantly.",
      scrollToId: "multi-year-planning"
    },
    {
      icon: <ToggleLeft className="w-8 h-8" />,
      title: "AR/AP & Inventory Toggles",
      description: "Model cash timing simply with accounts receivable, payable, and inventory controls.",
      scrollToId: "ar-ap-toggles"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Business Plan",
      description: "Turn your answers into a comprehensive, bank-ready business plan with AI assistance.",
      scrollToId: "ai-business-plan"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Beautiful Reports",
      description: "Export investor-ready documents in PDF, Word, and other formats.",
      scrollToId: "beautiful-reports"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "One-Click Reports",
      description: "Export professional financial statements and business plans in PDF, Excel, Word, or CSV formats.",
      scrollToId: "one-click-reports"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Glassmorphic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <Container>
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Overflowing with useful features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>
        
        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32 relative z-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index * 0.1}
            scrollToId={feature.scrollToId}
          />
        ))}
        </div>

        {/* Feature 1: Professional Forecasts - Split Layout with Dashboard */}
        <motion.div
          id="professional-forecasts"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32 relative"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="glass-light rounded-3xl p-6 lg:p-8 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Professional Forecasts</h3>
                    <p className="text-primary font-medium">Financial Modeling Made Easy</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Build comprehensive financial models with confidence. Create investor-ready projections 
                  with revenue forecasting, cost analysis, and cash flow modeling.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="glass-light rounded-xl p-4 border border-white/20">
                    <TrendingUp className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-white">Revenue Forecasting</h4>
                    <p className="text-sm text-gray-300">Multiple revenue streams</p>
                  </div>
                  <div className="glass-light rounded-xl p-4 border border-white/20">
                    <DollarSign className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-white">Cost Analysis</h4>
                    <p className="text-sm text-gray-300">Detailed breakdowns</p>
                  </div>
                </div>
                
                <Button size="lg" className="w-full" href="#waitlist">
                  Join Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <img
                src="/screens/IMG_2771-portrait.png"
                alt="Professional Forecasts Dashboard"
                className="w-64 md:w-72 h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Feature 2: Multi-Year Planning - Centered Layout with Timeline */}
        <motion.div
          id="multi-year-planning"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32 relative"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-3xl mb-6 shadow-lg">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">Multi-Year Planning</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Plan your business journey 5 years ahead with dynamic assumptions that adapt to your growth and market changes.
            </p>
          </div>
          
          <div className="relative">
            <div className="glass-light rounded-3xl p-12 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { year: "Year 1", title: "Foundation", desc: "Establish operations", color: "from-primary to-primary/80" },
                  { year: "Year 2-3", title: "Growth", desc: "Scale and expand", color: "from-accent to-accent/80" },
                  { year: "Year 4-5", title: "Maturity", desc: "Market leadership", color: "from-primary to-accent" }
                ].map((phase, index) => (
                  <motion.div
                    key={phase.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{phase.year}</h4>
                    <h5 className="text-lg font-semibold text-gray-200 mb-2">{phase.title}</h5>
                    <p className="text-gray-300">{phase.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 3: AR/AP Toggles - Interactive Layout */}
        <motion.div
          id="ar-ap-toggles"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32 relative"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              <div className="relative glass rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <ToggleLeft className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Cash Flow Toggles</h3>
                  <p className="text-gray-300">Control your cash flow timing with simple toggles</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "Accounts Receivable", status: "on", days: "30 days" },
                    { name: "Accounts Payable", status: "on", days: "15 days" },
                    { name: "Inventory", status: "off", days: "45 days" }
                  ].map((toggle, index) => (
                    <div key={index} className="glass-light rounded-xl p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-white">{toggle.name}</h4>
                          <p className="text-sm text-gray-300">{toggle.days}</p>
                        </div>
                        <div className={`w-12 h-6 rounded-full relative ${toggle.status === 'on' ? 'bg-primary' : 'bg-gray-300'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 ${toggle.status === 'on' ? 'right-0.5' : 'left-0.5'} transition-all duration-300`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <img
                src="/screens/IMG_2773-portrait.png"
                alt="Cash Flow Toggles Interface"
                className="w-64 md:w-72 h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Feature 4: AI Business Plan - Split Layout with Screenshot */}
        <motion.div
          id="ai-business-plan"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32 relative"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative lg:order-1 flex justify-center">
              <img
                src="/screens/IMG_2776-portrait.png"
                alt="AI Business Plan Interface"
                className="w-64 md:w-72 h-auto object-contain"
              />
            </div>
            
            <div className="relative lg:order-2">
              <div className="glass-light rounded-3xl p-6 lg:p-8 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">AI Business Plan</h3>
                    <p className="text-primary font-medium">AI-Powered Business Planning</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Turn your business idea into a comprehensive, bank-ready business plan with AI assistance. 
                  Get professional results in minutes, not weeks.
                </p>
                
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {[
                    { icon: <Brain className="w-6 h-6" />, title: "Smart Analysis", desc: "AI analyzes your business model and market data" },
                    { icon: <FileTextIcon className="w-6 h-6" />, title: "Professional Writing", desc: "Bank-ready formatting and language" },
                    { icon: <Zap className="w-6 h-6" />, title: "Instant Generation", desc: "Complete plans in minutes, not weeks" }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="glass-light rounded-xl p-4 border border-white/20"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                          <p className="text-sm text-gray-300">{feature.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Button size="lg" className="w-full" href="#waitlist">
                  Join Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 5: Beautiful Reports - Gallery Layout */}
        <motion.div
          id="beautiful-reports"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-32 relative"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="glass-light rounded-3xl p-6 lg:p-8 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Beautiful Reports</h3>
                    <p className="text-primary font-medium">Professional & Exportable</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Create stunning, professional reports that impress investors, lenders, and stakeholders 
                  with investor-ready, exportable documents and beautiful layouts.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="glass-light rounded-xl p-4 border border-white/20">
                    <FileText className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-white">Investor-Ready Documents</h4>
                    <p className="text-sm text-gray-300">Export & share with stakeholders</p>
                  </div>
                  <div className="glass-light rounded-xl p-4 border border-white/20">
                    <Download className="w-6 h-6 text-primary mb-2" />
                    <h4 className="font-semibold text-white">Multiple Formats</h4>
                    <p className="text-sm text-gray-300">PDF, Word, PowerPoint</p>
                  </div>
                </div>
                
                <Button size="lg" className="w-full" href="#waitlist">
                  Join Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="relative flex justify-center">
              <img
                src="/screens/IMG_2777-portrait.png"
                alt="Beautiful Reports Preview"
                className="w-64 md:w-72 h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Feature 6: One-Click Reports - Speed Layout */}
        <motion.div
          id="one-click-reports"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-3xl mb-6 shadow-lg">
              <Download className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">One-Click Reports</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Export professional financial statements and business plans in multiple formats with a single click.
            </p>
          </div>
          
          <div className="relative">
            <div className="glass-light rounded-3xl p-12 shadow-2xl">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { format: "PDF", icon: "📄", color: "from-red-500 to-red-600" },
                  { format: "Excel", icon: "📊", color: "from-green-500 to-green-600" },
                  { format: "Word", icon: "📝", color: "from-blue-500 to-blue-600" },
                  { format: "CSV", icon: "📈", color: "from-purple-500 to-purple-600" }
                ].map((format, index) => (
                  <motion.div
                    key={format.format}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center glass-light rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${format.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <span className="text-2xl">{format.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{format.format}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

