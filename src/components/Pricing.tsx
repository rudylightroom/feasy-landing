import { useState } from 'react';
import Container from './Container';
import PricingCard from './PricingCard';

/**
 * Pricing section with two plan cards and monthly/yearly toggle
 */
export default function Pricing() {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      title: "Starter",
      priceMonthly: "$19",
      priceYearly: "$182.99",
      description: "Basic plan",
      showTrialText: true,
      features: [
        "1 business profile",
        "Professional financial forecasting",
        "Professional reports",
        "Professional business plans"
      ]
    },
    {
      title: "Professional AI",
      priceMonthly: "$29",
      priceYearly: "$279",
      description: "Business plan",
      popular: true,
      showTrialText: false,
      features: [
        "Unlimited business profiles",
        "Professional financial forecasting",
        "Professional reports",
        "Professional business plans",
        "AI assistant in business plan"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Glassmorphic background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pricing plans that scale
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Simple & transparent pricing that grows with you.
          </p>

          {/* Monthly / Yearly toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-2xl glass-light border border-white/10">
            <button
              type="button"
              onClick={() => setBillingInterval('monthly')}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                billingInterval === 'monthly'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingInterval('yearly')}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                billingInterval === 'yearly'
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={billingInterval === 'monthly' ? plan.priceMonthly : plan.priceYearly}
              period={billingInterval === 'monthly' ? '/month' : '/year'}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              showTrialText={plan.showTrialText}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300">
            Starter plan includes a 14-day free trial. No setup fees. Cancel anytime.
          </p>
        </div>
      </Container>
    </section>
  );
}

