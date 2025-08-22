import { Particles } from "@/components/magicui/particles";
import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedBeamMultipleOutputDemo } from "./HeroAnimatedBeam";

export function Hero() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black">
      <div className="relative z-10 mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white">
          <AuroraText>Game to Influencers</AuroraText>
        </h1>
      </div>

      <AnimatedBeamMultipleOutputDemo />

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
    </div>
  );
}
