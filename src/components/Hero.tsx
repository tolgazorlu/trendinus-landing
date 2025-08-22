import { Particles } from "@/components/magicui/particles";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedBeamMultipleOutputDemo } from "./HeroAnimatedBeam";

export function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center to-purple-950">
      <div className="relative z-10 mb-12 text-center px-4 mt-12">
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-purple-300 mb-2 tracking-wider">
            Email Service for Game Developers
          </h2>
          <div className="w-98 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <h1 className="text-5xl font-black tracking-tighter md:text-6xl lg:text-8xl text-white mb-6 leading-tight">
          <AuroraText>Game to Influencers</AuroraText>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Transform your gaming passion into a powerful influencer presence. We
          connect gamers with brands that matter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:shadow-[0_0_40px_rgba(147,51,234,0.7)]">
            Start sending emails
          </button>
        </div>
      </div>

      <div className="relative z-10 mb-8">
        <AnimatedBeamMultipleOutputDemo />
      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color="#8b5cf6"
        refresh
      />
    </div>
  );
}
