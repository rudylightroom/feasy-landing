import Container from './Container';
import PricingCard from './PricingCard';

/**
 * Pricing section with two plan cards
 */
export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "$19",
      period: "/month",
      description: "Basic plan",
      features: [
        "1 business profile",
        "Professional financial forecasting", 
        "Professional reports",
        "Professional business plans"
      ]
    },
    {
      title: "Professional AI", 
      price: "$29",
      period: "/month",
      description: "Business plan",
      popular: true,
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Simple & transparent pricing that grows with you. Try any plan free for 30 days.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              popular={plan.popular}
              delay={index * 0.1}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300">
            All plans include a 14-day free trial. No setup fees. Cancel anytime.
          </p>
        </div>
      </Container>
    </section>
  );
}

