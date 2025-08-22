import { useEffect, useState } from "react";

import { Particles } from "@/components/magicui/particles";

export function Hero() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-6xl font-semibold leading-none text-white">
        Get Your Game to Streamers
      </span>
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
