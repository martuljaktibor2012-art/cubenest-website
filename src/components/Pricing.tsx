import { useState } from 'react';

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Dirt",
      ram: "2 GB",
      price: billing === 'monthly' ? 2.50 : 25.00,
      description: "Perfect for small vanilla servers with friends",
      features: [
        "2 GB RAM",
        "10 GB NVMe Storage",
        "Unlimited Players",
        "DDoS Protection",
        "1 Backup",
        "Subdomain Included",
        "24/7 Support"
      ],
      popular: false,
      color: "from-amber-700 to-amber-900"
    },
    {
      name: "Iron",
      ram: "4 GB",
      price: billing === 'monthly' ? 5.00 : 50.00,
      description: "Great for modded servers and small communities",
      features: [
        "4 GB RAM",
        "25 GB NVMe Storage",
        "Unlimited Players",
        "DDoS Protection",
        "3 Backups",
        "Custom Domain",
        "24/7 Priority Support",
        "Plugin Support"
      ],
      popular: false,
      color: "from-gray-400 to-gray-600"
    },
    {
      name: "Diamond",
      ram: "8 GB",
      price: billing === 'monthly' ? 10.00 : 100.00,
      description: "Ideal for large communities and heavy modpacks",
      features: [
        "8 GB RAM",
        "50 GB NVMe Storage",
        "Unlimited Players",
        "DDoS Protection",
        "7 Backups",
        "Custom Domain",
        "24/7 Priority Support",
        "All Modpacks",
        "MySQL Database"
      ],
      popular: true,
      color: "from-cyan-400 to-cyan-600"
    },
    {
      name: "Netherite",
      ram: "16 GB",
      price: billing === 'monthly' ? 20.00 : 200.00,
      description: "Maximum power for massive servers and networks",
      features: [
        "16 GB RAM",
        "100 GB NVMe Storage",
        "Unlimited Players",
        "DDoS Protection",
        "Unlimited Backups",
        "Custom Domain",
        "24/7 VIP Support",
        "All Modpacks",
        "MySQL Database",
        "Dedicated IP",
        "Priority Resources"
      ],
      popular: false,
      color: "from-purple-500 to-purple-700"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-primary/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-green-primary text-sm font-semibold uppercase tracking-wider">Pricing Plans</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your server. All plans include instant setup and full DDoS protection.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-dark-700 rounded-full p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billing === 'monthly' ? 'bg-green-primary text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billing === 'yearly' ? 'bg-green-primary text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly <span className="text-green-light text-xs ml-1">Save 17%</span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? 'pricing-popular bg-dark-800'
                  : 'glass-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-primary to-teal-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-3`}>
                  <span className="text-white font-bold text-lg">{plan.ram.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">${plan.price.toFixed(2)}</span>
                  <span className="text-gray-400 ml-2">/{billing === 'monthly' ? 'mo' : 'yr'}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{plan.ram} RAM</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-green-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? 'btn-primary text-white'
                  : 'bg-dark-600 text-white hover:bg-dark-500 border border-gray-700 hover:border-green-primary/50'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <svg className="w-5 h-5 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">48-hour money-back guarantee • No questions asked</span>
          </div>
        </div>
      </div>
    </section>
  );
}
