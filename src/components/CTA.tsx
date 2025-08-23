import React from "react";
import { Particles } from "@/components/magicui/particles";

const CTA = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-purple-950/20 to-black overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Level Up Your
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
              Gaming Influence?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join thousands of gamers who've turned their passion into a 
            thriving influencer career. Start your journey today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(147,51,234,0.5)] hover:shadow-[0_0_60px_rgba(147,51,234,0.8)] relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              🚀 Get Started Free
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
          
          <button className="px-10 py-5 border-2 border-purple-500 text-purple-300 font-bold text-lg rounded-full hover:bg-purple-500/10 hover:border-purple-400 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            📞 Schedule Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl mb-2">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-2">Instant Setup</h3>
            <p className="text-gray-400">Get started in under 5 minutes</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-2">Smart Matching</h3>
            <p className="text-gray-400">AI-powered brand partnerships</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-2">💎</div>
            <h3 className="text-2xl font-bold text-white mb-2">Premium Support</h3>
            <p className="text-gray-400">24/7 dedicated success team</p>
          </div>
        </div>
      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={60}
        color="#8b5cf6"
        refresh
      />
    </section>
  );
};

export default CTA;
