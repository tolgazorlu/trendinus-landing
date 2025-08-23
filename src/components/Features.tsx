import { AnimatedListDemo } from "./AnimatedList";

const featuresData = [
  {
    name: "Brand Partnerships",
    description: "Connect with top gaming brands",
    time: "Active",
    icon: "🤝",
    color: "#8b5cf6",
  },
  {
    name: "Content Creation Tools",
    description: "Professional streaming tools",
    time: "Live",
    icon: "🎬",
    color: "#ec4899",
  },
  {
    name: "Analytics Dashboard",
    description: "Track your influence metrics",
    time: "Updated",
    icon: "📊",
    color: "#06b6d4",
  },
  {
    name: "Community Building",
    description: "Grow your gaming audience",
    time: "Growing",
    icon: "👥",
    color: "#10b981",
  },
  {
    name: "Monetization Tools",
    description: "Turn passion into profit",
    time: "Earning",
    icon: "💰",
    color: "#f59e0b",
  },
  {
    name: "Campaign Management",
    description: "Manage sponsor campaigns",
    time: "Active",
    icon: "🎯",
    color: "#ef4444",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Built for 
            <span className="text-yellow-400"> Creators</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional tools and partnerships designed to help gaming creators scale their influence and maximize revenue opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            {featuresData.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/70"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl text-xl flex-shrink-0"
                  style={{ backgroundColor: feature.color }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                Live Activity Feed
              </h3>
              <AnimatedListDemo />
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {featuresData.slice(3).map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-900/30 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/50"
            >
              <div 
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl text-2xl mb-6 mx-auto"
                style={{ backgroundColor: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.name}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
