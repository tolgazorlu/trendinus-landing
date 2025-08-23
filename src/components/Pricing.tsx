const pricingPlans = [
  {
    name: "Starter",
    price: "$25",
    period: "100 emails",
    description: "Perfect for indie developers testing the waters",
    features: [
      "100 targeted emails to streamers",
      "Email with demo link or Steam key",
      "Basic streamer matching",
      "No open guarantee"
    ],
    popular: false,
    buttonText: "Buy Now",
    buttonStyle: "border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10",
    purchaseUrl: "https://bariserdem.lemonsqueezy.com/buy/91cd2b3c-64ec-44ac-aaa1-fb1d9ab899d6"
  },
  {
    name: "Indie Boost",
    price: "$49",
    period: "250 emails",
    description: "For developers ready to reach more streamers",
    features: [
      "250 targeted emails to streamers",
      "Same content as Starter",
      "Enhanced streamer matching",
      "No open guarantee"
    ],
    popular: false,
    buttonText: "Buy Now",
    buttonStyle: "border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10",
    purchaseUrl: "https://bariserdem.lemonsqueezy.com/buy/23c63ab1-d818-47c4-a059-5bf499d5f84d"
  },
  {
    name: "Standard",
    price: "$89",
    period: "500 emails",
    description: "Most popular choice with guaranteed results",
    features: [
      "500 targeted emails to streamers",
      "Campaign tracking & follow-up list",
      "At least 150 email opens guaranteed",
      "Performance report included"
    ],
    popular: true,
    buttonText: "Buy Now",
    buttonStyle: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500",
    purchaseUrl: "https://bariserdem.lemonsqueezy.com/buy/9bf2c69f-58f6-4470-8e4a-7e923b4cb486"
  },
  {
    name: "Pro Launch",
    price: "$149",
    period: "1000 emails", 
    description: "For serious game launches with premium support",
    features: [
      "1000 targeted emails to streamers",
      "Advanced tracking & performance summary",
      "At least 300 email opens guaranteed",
      "Priority support included"
    ],
    popular: false,
    buttonText: "Buy Now",
    buttonStyle: "border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10",
    purchaseUrl: "https://bariserdem.lemonsqueezy.com/buy/a5b74591-30b9-4aa5-aa12-34a4b9ef68ca"
  },
  {
    name: "Power Push",
    price: "$399",
    period: "2000 emails",
    description: "Maximum reach with comprehensive reporting",
    features: [
      "2000 targeted emails to streamers",
      "Comprehensive report & priority support",
      "At least 600 email opens guaranteed",
      "Dedicated campaign manager"
    ],
    popular: false,
    buttonText: "Buy Now",
    buttonStyle: "border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10",
    purchaseUrl: "https://bariserdem.lemonsqueezy.com/buy/a5b74591-30b9-4aa5-aa12-34a4b9ef68ca"
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
              {" "}Package
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your game to Twitch streamers with guaranteed reach and fast delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

                <a 
                  href={plan.purchaseUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block w-full py-4 px-6 rounded-full font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </a>
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

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-3">⚡ Fast Delivery</h3>
              <p className="text-gray-300">
                Campaigns are usually sent out within 24–48 hours of your purchase. 
                You'll be notified once completed.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-3">🎯 Targeted Matching</h3>
              <p className="text-gray-300">
                We match your game with streamers who have previously played 
                similar titles for better engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}