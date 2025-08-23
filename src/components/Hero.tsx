import { Particles } from "@/components/magicui/particles";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedBeamMultipleOutputDemo } from "./HeroAnimatedBeam";

export function Hero() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center min-h-screen bg-black pt-24">
      <div className="relative z-10 mb-12 text-center px-4">
        <div className="mb-6">
          <h2 className="text-lg font-medium text-yellow-300 mb-2 tracking-wider">
            Email Service for Game Developers
          </h2>
          <div className="w-98 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <h1 className="text-5xl font-black tracking-tighter md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          <AuroraText>Game to Influencers</AuroraText>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Transform your gaming passion into a powerful influencer presence. We
          connect gamers with brands that matter.
        </p>
      </div>

      <div className="relative z-10 mb-8">
        <AnimatedBeamMultipleOutputDemo />
      </div>

      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color="#3b82f6"
        refresh
      />
    </div>
  );
}
