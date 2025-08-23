const pricingPlans = [
  {
    name: "Gamer",
    price: "Free",
    period: "Forever",
    description: "Perfect for starting your gaming influence journey",
    features: [
      "Basic profile creation",
      "Community access",
      "5 brand applications/month",
      "Basic analytics",
      "Email support"
    ],
    popular: false,
    buttonText: "Get Started Free",
    buttonStyle: "border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10"
  },
  {
    name: "Creator",
    price: "$29",
    period: "per month",
    description: "For serious content creators ready to monetize",
    features: [
      "Everything in Gamer",
      "Unlimited brand applications",
      "Advanced analytics & insights",
      "Campaign management tools",
      "Priority brand matching",
      "Content creation templates",
      "Priority support"
    ],
    popular: true,
    buttonText: "Start Creating",
    buttonStyle: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500"
  },
  {
    name: "Influencer",
    price: "$99",
    period: "per month", 
    description: "For established influencers scaling their empire",
    features: [
      "Everything in Creator",
      "White-label solutions",
      "Dedicated account manager",
      "Custom brand partnerships",
      "Advanced audience insights",
      "Multi-platform management",
      "Revenue optimization tools",
      "24/7 premium support"
    ],
    popular: false,
    buttonText: "Scale Your Empire",
    buttonStyle: "border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Gaming Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and upgrade as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-400 bg-gradient-to-b from-purple-900/30 to-purple-950/20 shadow-[0_0_50px_rgba(147,51,234,0.3)]' 
                  : 'border-purple-500/20 bg-gradient-to-b from-purple-900/20 to-transparent hover:border-purple-400/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    🔥 Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  {plan.period !== "Forever" && (
                    <span className="text-gray-400 text-lg">/{plan.period}</span>
                  )}
                  {plan.period === "Forever" && (
                    <div className="text-purple-300 text-sm mt-1">No credit card required</div>
                  )}
                </div>

                <button className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-white mb-4">What's included:</h4>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-2xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-3">💳 No Setup Fees</h3>
              <p className="text-gray-300">
                Get started immediately with no hidden costs or setup fees. 
                Pay only for what you use.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-3">🔄 Cancel Anytime</h3>
              <p className="text-gray-300">
                No long-term commitments. Upgrade, downgrade, or cancel 
                your subscription at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}