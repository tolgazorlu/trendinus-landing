"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  platform: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Message sent via YouTube",
    description: "@GamingPro_Alex",
    time: "1m ago",
    platform: "youtube",
    color: "#FF0000",
  },
  {
    name: "Instagram DM delivered",
    description: "@StreamQueen_Sarah",
    time: "3m ago",
    platform: "instagram",
    color: "#E4405F",
  },
  {
    name: "Twitch message sent",
    description: "@EsportsKing_Mike",
    time: "5m ago",
    platform: "twitch",
    color: "#9146FF",
  },
  {
    name: "TikTok collaboration invite",
    description: "@RetroGamer_Lisa",
    time: "7m ago",
    platform: "tiktok",
    color: "#000000",
  },
  {
    name: "Kick partnership proposal",
    description: "@MobileGamer_Dev",
    time: "10m ago",
    platform: "kick",
    color: "#53FC18",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const PlatformIcon = ({
  platform,
  color,
}: {
  platform: string;
  color: string;
}) => {
  const iconProps = {
    className: "w-5 h-5",
    style: { fill: "#fff" },
  };

  switch (platform) {
    case "youtube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 512 512"
          {...iconProps}
        >
          <path d="M450.7 257.4c-17.1-32.1-49.7-50.9-83.9-52.2l39.7-20.9c48.3-25.2 66.8-84.3 41.4-132.1s-85.2-66.1-133.5-41L102.7 122.5c-48.3 25.2-66.8 84.3-41.4 132.1 17.1 32.1 49.7 50.9 83.9 52.2l-39.7 20.9C57.2 352.8 38.6 412 64.1 459.8c25.4 47.8 85.2 66.1 133.5 41l211.8-111.3c48.2-25.2 66.7-84.3 41.3-132.1m-250.6 77.7V177.2l128.2 79.1z" />
        </svg>
      );
    case "twitch":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          {...iconProps}
          viewBox="0 0 512 512"
        >
          <path
            d="m438.9 271.7-73.2 73.2H250.8l-62.7 62.7v-62.7h-94v-303h344.8zM52.2 0 31.3 83.6v376.1h94V512h52.3l52.3-52.3h83.6l167.2-167.2V0zm156.7 250.7h41.7V125.3h-41.7zm115 0h41.7V125.3h-41.7z"
            style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#fff" }}
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 512 512"
          {...iconProps}
        >
          <path d="M256 67c-51.3 0-57.8.2-77.9 1.1s-33.9 4.1-45.9 8.8c-12.4 4.8-23 11.3-33.5 21.8s-17 21.1-21.8 33.5c-4.7 12-7.9 25.8-8.8 45.9-.9 20.2-1.1 26.6-1.1 77.9s.2 57.8 1.1 77.9 4.1 33.9 8.8 45.9c4.8 12.4 11.3 23 21.8 33.5s21 17 33.5 21.8c12 4.7 25.8 7.9 45.9 8.8 20.2.9 26.6 1.1 77.9 1.1s57.8-.2 77.9-1.1 33.9-4.1 45.9-8.8c12.4-4.8 23-11.3 33.5-21.8s17-21.1 21.8-33.5c4.6-12 7.8-25.8 8.8-45.9.9-20.2 1.1-26.6 1.1-77.9s-.2-57.8-1.1-77.9-4.1-33.9-8.8-45.9c-4.8-12.4-11.3-23-21.8-33.5s-21-17-33.5-21.8c-12-4.7-25.8-7.9-45.9-8.8-20.2-.9-26.6-1.1-77.9-1.1m-17 34.1h17c50.5 0 56.4.2 76.4 1.1 18.4.8 28.4 3.9 35.1 6.5 8.8 3.4 15.1 7.5 21.7 14.1s10.7 12.9 14.1 21.7c2.6 6.7 5.7 16.7 6.5 35.1.9 19.9 1.1 25.9 1.1 76.4s-.2 56.4-1.1 76.4c-.8 18.4-3.9 28.4-6.5 35.1-3.4 8.8-7.5 15.1-14.1 21.7s-12.9 10.7-21.7 14.1c-6.7 2.6-16.7 5.7-35.1 6.5-19.9.9-25.9 1.1-76.4 1.1s-56.5-.2-76.4-1.1c-18.4-.9-28.4-3.9-35.1-6.5-8.8-3.4-15.1-7.5-21.7-14.1s-10.7-12.9-14.1-21.7c-2.6-6.7-5.7-16.7-6.5-35.1-.9-19.9-1.1-25.9-1.1-76.4s.2-56.4 1.1-76.4c.8-18.4 3.9-28.4 6.5-35.1 3.4-8.8 7.5-15.1 14.1-21.7s12.9-10.7 21.7-14.1c6.7-2.6 16.7-5.7 35.1-6.5 17.4-.9 24.2-1.1 59.4-1.1m117.9 31.4c-12.5 0-22.7 10.1-22.7 22.7 0 12.5 10.2 22.7 22.7 22.7s22.7-10.2 22.7-22.7-10.2-22.8-22.7-22.7M256 159c-53.6 0-97.1 43.5-97.1 97.1s43.5 97 97.1 97 97-43.4 97-97-43.4-97.1-97-97.1m0 34c34.8 0 63 28.2 63 63s-28.2 63-63 63-63-28.2-63-63 28.2-63 63-63" />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          viewBox="0 0 512 512"
          {...iconProps}
        >
          <path
            d="M347.7 17.8c8.2 70.4 47.5 112.4 115.7 116.8v79.1c-39.6 3.9-74.2-9.1-114.6-33.4v148c.3 193.1-207.4 207.8-266.8 112-39.5-63.7-25.2-216.7 117.3-239.4v80.4c-33.3 5.5-51.3 15.7-61.2 34.6-61.1 116.8 152 186.3 137.2-1.9V17.8z"
            style={{ fillRule: "evenodd", clipRule: "evenodd" }}
          />
        </svg>
      );
    case "kick":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          {...iconProps}
        >
          <path
            fill="#ffffff"
            fillRule="evenodd"
            d="M2.43478 1H9.6087v4.78261H12V3.3913h2.3913V1h7.1739v7.17391h-2.3913v2.39129h-2.3913v2.8696h2.3913v2.3913h2.3913V23h-7.1739v-2.3913H12v-2.3913H9.6087V23H2.43478V1Z"
            clipRule="evenodd"
            strokeWidth="1"
          />
        </svg>
      );
    case "email":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          {...iconProps}
        >
          <path fillRule="evenodd" d="M0 0h24v24H0z" />
          <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z" />
        </svg>
      );
    default:
      return <span className="text-lg">💬</span>;
  }
};

const Notification = ({ name, description, platform, color, time }: Item) => {
  return (
    <figure className="relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-4 bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 transition-all duration-200 ease-in-out hover:scale-[102%] hover:bg-gray-900/60 hover:border-gray-600/50">
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-xl"
          style={{ backgroundColor: color }}
        >
          <PlatformIcon platform={platform} color={color} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-sm font-medium text-white">
            <span>{name}</span>
            <span className="mx-2 text-gray-400">·</span>
            <span className="text-xs text-gray-400">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-gray-300 mt-0.5">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>
  );
}
