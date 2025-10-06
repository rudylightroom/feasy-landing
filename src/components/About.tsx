import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Zap, 
  Target, 
  Users, 
  CheckCircle, 
  Quote,
  Building2,
  TrendingUp,
  Lightbulb,
  Shield,
  ArrowLeft
} from 'lucide-react';

/**
 * About page with compelling story and glassmorphism design
 */
export default function About() {
  const principles = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed with substance",
      description: "Move quickly, without cutting corners on rigor."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Narrative + numbers",
      description: "Great decisions need both a story and the stats to prove it."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile, always",
      description: "If it doesn't work in the real world, it doesn't work."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "AI as a co-pilot",
      description: "Helpful by default; accountable by design."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Owner's mindset",
      description: "Treat every idea like your own capital is on the line."
    }
  ];

  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Momentum matters",
      description: "Opportunities don't wait for office hours. Feasy lets you model and refine assumptions the moment ideas surface."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Clarity in conversations",
      description: "Adjust pricing, costs, or volumes live in the room—and show the impact instantly."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "From pocket to pitch",
      description: "Turn numbers into a clean, investor-friendly summary without juggling files and formats."
    }
  ];

  const targetAudience = [
    "Founders & solo operators needing investor-ready clarity—without a finance team.",
    "SME owners weighing expansion, new products, or capex.",
    "Advisors & mentors guiding clients from idea to action.",
    "Intrapreneurs building internal business cases that need to land—fast."
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
              About <span className="text-[#BFFD38]">Feasy</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Plan faster. Decide smarter—anywhere.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="glass-light rounded-3xl p-8 lg:p-12 border border-white/10">
              {/* Hero Image */}
              <div className="flex justify-center mb-8">
                <img 
                  src="/about-hero-image.png"
                  alt="Rudy, Founder of Feasy"
                  className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                The moment it clicked
              </h2>
              <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed space-y-6 text-center">
                <p>
                  Feasy was born out of real-world hustle. Our founder, Rudy, is a qualified Accounting & Finance graduate who spent 13 years at IBM's Asia Pacific Accounting Center, then moved into the driver's seat as Group CEO of an investment holding company. Day to day, he lives in the deep end of business development—assessing opportunities across multiple industries, stress-testing numbers, and deciding what to green-light or gracefully decline.
                </p>
                <p>
                  Between flights and back-to-back meetings, Rudy kept running into the same problem: the tools for building a credible business case were slow, scattered, and stuck on desktop. He'd sketch "napkin math" in a café, polish numbers in a spreadsheet later, then rebuild everything into a deck the next morning—only to face a new question from a partner that sent him back to square one.
                </p>
                <p>
                  He wanted something fast, rigorous, and mobile—a way to go from idea to investor-ready story on the spot, without losing the financial discipline that makes or breaks a venture. That's how <span className="text-[#BFFD38] font-semibold">Feasy (Forecast Easy)</span> came to life: a mobile-first way to test feasibility, shape a narrative, and share a pitch—on the go.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Why Mobile-First */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why mobile-first
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-light rounded-2xl p-6 border border-white/10 text-center"
                >
                  <div className="w-16 h-16 bg-[#BFFD38]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#BFFD38]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* AI Assist Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <div className="glass-light rounded-3xl p-8 lg:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                The AI assist <span className="text-white">(with discipline)</span>
              </h2>
              <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed space-y-6">
                <p>
                  We at Feasy believe AI should amplify your judgment, not replace it. In Feasy, AI helps you:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#BFFD38] mr-3 mt-1 flex-shrink-0" />
                    <span>Translate raw inputs into clear insights and plain-English summaries.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#BFFD38] mr-3 mt-1 flex-shrink-0" />
                    <span>Spot sensitivities (what really moves the needle) and suggest scenarios to test.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#BFFD38] mr-3 mt-1 flex-shrink-0" />
                    <span>Turn your model into a tight narrative for partners, lenders, or investors.</span>
                  </li>
                </ul>
                <p>
                  Under the hood, Feasy stays grounded in transparent calculations you can inspect, tweak, and justify. No black boxes deciding your future. You stay in control.
                </p>
              </div>
            </div>
          </motion.section>

          {/* What Feasy Helps You Do */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What Feasy helps you do
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-light rounded-2xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-[#BFFD38]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#BFFD38]">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Validate feasibility fast</h3>
                <p className="text-gray-300">With structured, assumption-driven models.</p>
              </div>
              <div className="glass-light rounded-2xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-[#BFFD38]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#BFFD38]">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Shape a pitch</h3>
                <p className="text-gray-300">That connects the "why now" to the "how it wins"—with numbers that back it up.</p>
              </div>
              <div className="glass-light rounded-2xl p-6 border border-white/10 text-center">
                <div className="w-16 h-16 bg-[#BFFD38]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#BFFD38]">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Share and get feedback</h3>
                <p className="text-gray-300">Quickly, so decisions move forward instead of stalling.</p>
              </div>
            </div>
          </motion.section>

          {/* Who It's For */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Who it's for
            </h2>
            <div className="glass-light rounded-3xl p-8 border border-white/10">
              <ul className="space-y-4">
                {targetAudience.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-[#BFFD38] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Our Principles */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our principles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                  className="glass-light rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#BFFD38]/20 rounded-xl flex items-center justify-center text-[#BFFD38] flex-shrink-0">
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{principle.title}</h3>
                      <p className="text-gray-300">{principle.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Note from Rudy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="mb-20"
          >
            <div className="glass-light rounded-3xl p-8 lg:p-12 border border-white/10">
              <div className="text-center">
                <Quote className="w-12 h-12 text-[#BFFD38] mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed">
                  "Across hundreds of feasibility checks, I learned that the difference between a good idea and a green-lit project is clarity—clear assumptions, clear math, and a clear story. I built Feasy so you can carry that clarity in your pocket. Make better calls, faster—and enjoy the process."
                </blockquote>
                <div className="text-center">
                  <p className="text-lg font-semibold text-white mb-2">— Rudy, Founder of Feasy</p>
                  <p className="text-gray-300">
                    Accounting & Finance (Hons). 13 years at IBM APAC Accounting Center.<br />
                    Now Group CEO overseeing ventures across multiple industries.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="text-center"
          >
            <div className="glass-light rounded-3xl p-8 lg:p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Feasy is for builders.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If that's you, welcome. Let's make the numbers—and the story—work for your next big move.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/" 
                  className="bg-[#6C39F9] text-white hover:bg-[#BFFD38] hover:text-black px-8 py-4 rounded-xl font-medium transition-all duration-300"
                >
                  Get Started
                </a>
                <a 
                  href="/" 
                  className="text-[#BFFD38] hover:text-white transition-colors duration-300"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </motion.section>

        </div>
      </main>
    </div>
  );
}
