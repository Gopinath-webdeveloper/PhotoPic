import React, { useState } from 'react';
import { motion } from 'framer-motion';

const plans = {
  monthly: [
    { name: 'Basic', price: '$9', features: ['5GB Storage', '100 Photos/Month', 'Basic Support'] },
    { name: 'Pro', price: '$29', features: ['50GB Storage', 'Unlimited Photos', 'Priority Support', 'Full Resolution Downloads'], highlighted: true },
    { name: 'Enterprise', price: '$99', features: ['Unlimited Storage', 'Team Accounts', '24/7 Dedicated Support', 'Custom Branding'] },
  ],
  yearly: [
    { name: 'Basic', price: '$90', features: ['5GB Storage', '100 Photos/Month', 'Basic Support'] },
    { name: 'Pro', price: '$290', features: ['50GB Storage', 'Unlimited Photos', 'Priority Support', 'Full Resolution Downloads'], highlighted: true },
    { name: 'Enterprise', price: '$990', features: ['Unlimited Storage', 'Team Accounts', '24/7 Dedicated Support', 'Custom Branding'] },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn mb-4">
          Choose Your Perfect Plan
        </h2>
        <p className="text-lg text-text/80">Affordable plans for photographers of all levels.</p>
      </div>

      <div className="flex justify-center items-center gap-4 mb-12">
        <span className={`font-semibold ${billingCycle === 'monthly' ? 'text-accent-hover' : 'text-text/70'}`}>Monthly</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" onChange={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} />
          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-btn"></div>
        </label>
        <span className={`font-semibold ${billingCycle === 'yearly' ? 'text-accent-hover' : 'text-text/70'}`}>Yearly (Save 20%)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans[billingCycle].map((plan, i) => (
          <motion.div
            key={plan.name}
            className={`rounded-2xl p-8 border ${plan.highlighted ? 'bg-btn/10 border-btn shadow-2xl scale-105' : 'bg-black/20 border-white/20'}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-5xl font-extrabold mb-6">{plan.price}<span className="text-lg font-medium text-text/60">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span></p>
            <ul className="space-y-3 mb-8">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.highlighted ? 'bg-btn hover:bg-btn-hover text-white' : 'bg-accent/80 hover:bg-accent text-white'}`}>
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Pricing; 