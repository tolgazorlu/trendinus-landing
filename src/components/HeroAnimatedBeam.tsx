"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-20 items-center justify-center rounded-full p-4 ",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full w-4xl flex-row items-stretch justify-between gap-12">
        <div className="flex flex-col justify-center">
          <Circle
            ref={div7Ref}
            className="size-20 bg-gradient-to-br from-purple-600/80 to-pink-600/80 border-purple-400/70"
          >
            <span className="text-2xl">🎯</span>
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle
            ref={div6Ref}
            className="size-20 bg-gradient-to-br from-blue-600/80 to-cyan-600/80 border-blue-400/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white size-8"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
            </svg>
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Circle
            ref={div1Ref}
            className="size-20 bg-gradient-to-br from-red-600/80 to-red-700/80 border-red-400/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 512 512"
              className="size-8"
            >
              <path
                d="M450.7 257.4c-17.1-32.1-49.7-50.9-83.9-52.2l39.7-20.9c48.3-25.2 66.8-84.3 41.4-132.1s-85.2-66.1-133.5-41L102.7 122.5c-48.3 25.2-66.8 84.3-41.4 132.1 17.1 32.1 49.7 50.9 83.9 52.2l-39.7 20.9C57.2 352.8 38.6 412 64.1 459.8c25.4 47.8 85.2 66.1 133.5 41l211.8-111.3c48.2-25.2 66.7-84.3 41.3-132.1m-250.6 77.7V177.2l128.2 79.1z"
                style={{ fill: "#fff" }}
              />
            </svg>
          </Circle>
          <Circle
            ref={div2Ref}
            className="size-20 bg-gradient-to-br from-purple-600/80 to-purple-700/80 border-purple-400/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              className="size-8"
              viewBox="0 0 512 512"
            >
              <path
                d="m438.9 271.7-73.2 73.2H250.8l-62.7 62.7v-62.7h-94v-303h344.8zM52.2 0 31.3 83.6v376.1h94V512h52.3l52.3-52.3h83.6l167.2-167.2V0zm156.7 250.7h41.7V125.3h-41.7zm115 0h41.7V125.3h-41.7z"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }}
              />
            </svg>
          </Circle>
          <Circle
            ref={div3Ref}
            className="size-20 bg-gradient-to-br from-pink-600/80 to-purple-600/80 border-pink-400/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 512 512"
              className="size-8"
            >
              <radialGradient
                id="instagram_svg__a"
                cx="-286.878"
                cy="685.721"
                r="255.952"
                gradientTransform="matrix(0 -1.982 1.8439 0 -1128.4 -17.235)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#fd5" }} />
                <stop offset=".1" style={{ stopColor: "#fd5" }} />
                <stop offset=".5" style={{ stopColor: "#ff543e" }} />
                <stop offset="1" style={{ stopColor: "#c837ab" }} />
              </radialGradient>
              <path
                d="M256.1.1C149.2.1 118 .2 111.9.7 89.9 2.5 76.3 6 61.4 13.4 50 19.1 40.9 25.6 32 34.9 15.8 51.8 5.9 72.5 2.4 97.2.7 109.2.2 111.6.1 172.8V256c0 106.8.1 138 .6 144.1 1.8 21.3 5.1 34.8 12.2 49.5 13.5 28.1 39.4 49.2 69.9 57.1 10.6 2.7 22.2 4.2 37.2 4.9 6.3.3 71 .5 135.6.5s129.3-.1 135.5-.4c17.3-.8 27.4-2.2 38.5-5 30.7-7.9 56.1-28.7 69.9-57.2 7-14.3 10.5-28.3 12.1-48.5.3-4.4.5-74.7.5-144.9s-.2-140.4-.5-144.8c-1.6-20.6-5.1-34.4-12.3-49-5.9-12-12.4-20.9-21.9-30-16.9-16.2-37.6-26-62.3-29.6C403.1 1 400.8.5 339.6.4h-83.5z"
                style={{ fill: "url(#instagram_svg__a)" }}
              />
              <radialGradient
                id="instagram_svg__b"
                cx="394.107"
                cy="480.96"
                r="255.952"
                gradientTransform="matrix(.1739 .8687 -3.5818 .7172 1568.395 -650.37)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style={{ stopColor: "#3771c8" }} />
                <stop offset=".128" style={{ stopColor: "#3771c8" }} />
                <stop
                  offset="1"
                  style={{ stopColor: "#60f", stopOpacity: 0 }}
                />
              </radialGradient>
              <path
                d="M256.1.1C149.2.1 118 .2 111.9.7 89.9 2.5 76.3 6 61.4 13.4 50 19.1 40.9 25.6 32 34.9 15.8 51.8 5.9 72.5 2.4 97.2.7 109.2.2 111.6.1 172.8V256c0 106.8.1 138 .6 144.1 1.8 21.3 5.1 34.8 12.2 49.5 13.5 28.1 39.4 49.2 69.9 57.1 10.6 2.7 22.2 4.2 37.2 4.9 6.3.3 71 .5 135.6.5s129.3-.1 135.5-.4c17.3-.8 27.4-2.2 38.5-5 30.7-7.9 56.1-28.7 69.9-57.2 7-14.3 10.5-28.3 12.1-48.5.3-4.4.5-74.7.5-144.9s-.2-140.4-.5-144.8c-1.6-20.6-5.1-34.4-12.3-49-5.9-12-12.4-20.9-21.9-30-16.9-16.2-37.6-26-62.3-29.6C403.1 1 400.8.5 339.6.4h-83.5z"
                style={{ fill: "url(#instagram_svg__b)" }}
              />
              <path
                d="M256 67c-51.3 0-57.8.2-77.9 1.1s-33.9 4.1-45.9 8.8c-12.4 4.8-23 11.3-33.5 21.8s-17 21.1-21.8 33.5c-4.7 12-7.9 25.8-8.8 45.9-.9 20.2-1.1 26.6-1.1 77.9s.2 57.8 1.1 77.9 4.1 33.9 8.8 45.9c4.8 12.4 11.3 23 21.8 33.5s21 17 33.5 21.8c12 4.7 25.8 7.9 45.9 8.8 20.2.9 26.6 1.1 77.9 1.1s57.8-.2 77.9-1.1 33.9-4.1 45.9-8.8c12.4-4.8 23-11.3 33.5-21.8s17-21.1 21.8-33.5c4.6-12 7.8-25.8 8.8-45.9.9-20.2 1.1-26.6 1.1-77.9s-.2-57.8-1.1-77.9-4.1-33.9-8.8-45.9c-4.8-12.4-11.3-23-21.8-33.5s-21-17-33.5-21.8c-12-4.7-25.8-7.9-45.9-8.8-20.2-.9-26.6-1.1-77.9-1.1m-17 34.1h17c50.5 0 56.4.2 76.4 1.1 18.4.8 28.4 3.9 35.1 6.5 8.8 3.4 15.1 7.5 21.7 14.1s10.7 12.9 14.1 21.7c2.6 6.7 5.7 16.7 6.5 35.1.9 19.9 1.1 25.9 1.1 76.4s-.2 56.4-1.1 76.4c-.8 18.4-3.9 28.4-6.5 35.1-3.4 8.8-7.5 15.1-14.1 21.7s-12.9 10.7-21.7 14.1c-6.7 2.6-16.7 5.7-35.1 6.5-19.9.9-25.9 1.1-76.4 1.1s-56.5-.2-76.4-1.1c-18.4-.9-28.4-3.9-35.1-6.5-8.8-3.4-15.1-7.5-21.7-14.1s-10.7-12.9-14.1-21.7c-2.6-6.7-5.7-16.7-6.5-35.1-.9-19.9-1.1-25.9-1.1-76.4s.2-56.4 1.1-76.4c.8-18.4 3.9-28.4 6.5-35.1 3.4-8.8 7.5-15.1 14.1-21.7s12.9-10.7 21.7-14.1c6.7-2.6 16.7-5.7 35.1-6.5 17.4-.9 24.2-1.1 59.4-1.1m117.9 31.4c-12.5 0-22.7 10.1-22.7 22.7 0 12.5 10.2 22.7 22.7 22.7s22.7-10.2 22.7-22.7-10.2-22.8-22.7-22.7M256 159c-53.6 0-97.1 43.5-97.1 97.1s43.5 97 97.1 97 97-43.4 97-97-43.4-97.1-97-97.1m0 34c34.8 0 63 28.2 63 63s-28.2 63-63 63-63-28.2-63-63 28.2-63 63-63"
                style={{ fill: "#fff" }}
              />
            </svg>
          </Circle>
          <Circle
            ref={div4Ref}
            className="size-20 bg-gradient-to-br from-cyan-600/80 to-blue-600/80 border-cyan-400/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              image-rendering="optimizeQuality"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              viewBox="0 0 512 512"
              className="size-8"
            >
              <path
                d="M345.2 0c8.2 70.4 50.4 120.1 118.7 124.5v66.8h-.4v-56.7C395.2 130.2 356 88.2 347.7 17.8h-72.3V314c10.4 133.3-93.4 137.3-133.2 86.7 46.6 29.1 122.3 10.2 113.3-104.5V0zM151 491c-40.8-8.4-78-32.8-99.8-68.5-53-86.7-5.2-228 148.5-242.5v83.5h-.3v-62.6C56.9 223.6 42.6 376.6 82.1 440.3c15.2 24.5 40.2 41.8 68.9 50.7"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#26f4ee",
                }}
              />
              <path
                d="M365.9 17.8c5.4 46 24 85.1 55.2 107.9-42.3-16.3-67-53.7-73.4-107.9zm97.5 126.7c5.8 1.2 11.9 2.1 18.2 2.5v79.2C442 230 407.4 217 367 192.7l6.2 135.6c0 43.7.2 63.7-23.3 103.9-52.6 90.2-147.3 97.3-211.4 54.4 83.8 34.6 210.6-7.4 210.3-158.3v-148c40.4 24.3 75 37.3 114.6 33.4zm-264 57.2q12.45-2.55 26.1-3.9v83.5c-33.3 5.5-54.4 15.7-64.3 34.6-31.1 59.5 9 106.7 53.8 113.8-52.1 8.7-113.2-44.2-76.8-113.8 9.9-18.9 27.9-29.1 61.2-34.6zm99-183.9h2.8z"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fb2c53",
                }}
              />
              <path
                d="M347.7 17.8c8.2 70.4 47.5 112.4 115.7 116.8v79.1c-39.6 3.9-74.2-9.1-114.6-33.4v148c.3 193.1-207.4 207.8-266.8 112-39.5-63.7-25.2-216.7 117.3-239.4v80.4c-33.3 5.5-51.3 15.7-61.2 34.6-61.1 116.8 152 186.3 137.2-1.9V17.8z"
                style={{
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
              />
            </svg>
          </Circle>
          <Circle
            ref={div5Ref}
            className="size-20 bg-gradient-to-br from-green-600/80 to-emerald-600/80 border-green-400/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Kick-Logo-Logo--Streamline-Logos"
              height="24"
              width="24"
              className="size-8"
            >
              <desc>
                Kick Logo Logo Streamline Icon: https://streamlinehq.com
              </desc>
              <path
                fill="#000000"
                fill-rule="evenodd"
                d="M2.43478 1H9.6087v4.78261H12V3.3913h2.3913V1h7.1739v7.17391h-2.3913v2.39129h-2.3913v2.8696h2.3913v2.3913h2.3913V23h-7.1739v-2.3913H12v-2.3913H9.6087V23H2.43478V1Z"
                clip-rule="evenodd"
                stroke-width="1"
              ></path>
            </svg>
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={8}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={8}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={8}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={8}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={8}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={8}
      />
    </div>
  );
}
