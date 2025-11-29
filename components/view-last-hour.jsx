"use client";
import { incrementViewCount } from "../app/actions/increament-view";
import { useEffect, useState } from "react";

const ViewLastHour = ({ productId, initialTotalViews }) => {
  // We only track historical data now (Total + Recent)
  const [totalViews, setTotalViews] = useState(initialTotalViews);

  // Toast State
  const [recentViews, setRecentViews] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // 1. Increment DB & Get 24h Stats
    // This server action uses Prisma to count rows in your database
    incrementViewCount(productId).then((data) => {
      if (data) {
        setTotalViews(data.total);
        setRecentViews(data.last24h);

        // Show toast for 24h stats
        setShowToast(true);

        // Hide toast after 4 seconds
        const timer = setTimeout(() => setShowToast(false), 4000);
        return () => clearTimeout(timer);
      }
    });

    // No Pusher / Websocket code here anymore.
  }, [productId]);

  return (
    <div
      className={`
          fixed bottom-24 left-0 right-0 z-10
          bg-gray-700 text-white text-lg py-2 px-6 rounded-full shadow-lg 
          flex items-center justify-center gap-2 
          transition-all duration-500 ease-in-out transform
           whitespace-nowrap w-fit mx-auto
          ${
            recentViews > 0 && showToast
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-yellow-400 flex-shrink-0"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
          clipRule="evenodd"
        />
      </svg>
      <span>
        <span className="font-bold  text-yellow-400">{recentViews} </span>
        {"  "}
        Visited in last 24h
      </span>
    </div>
  );
};

export default ViewLastHour;
