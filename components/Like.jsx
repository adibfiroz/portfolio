"use client";

import { useEffect, useState } from "react";
import { fetchLikes, updateLike } from "../app/actions/likes";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const LikeButton = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    if (isLiked) {
      return;
    }

    setIsLiked(true);
    setLikes((prev) => prev + 1);

    try {
      await updateLike();
    } catch (error) {
      setIsLiked(false);
      setLikes((prev) => prev - 1);
    }
  };

  const getInitialLikes = async () => {
    setIsLoading(true);
    try {
      const initialLikes = await fetchLikes();
      setLikes(initialLikes);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch initial likes:", error);
      setIsLoading(false);
      // Handle error, maybe set likes to 0 or show an error message
    }
  };

  // Fetch initial likes when the component mounts
  useEffect(() => {
    getInitialLikes();
  }, []);

  return (
    <div className=" fixed bottom-5 right-5 z-10 animate-bounce">
      <Tooltip title="Like" placement="top">
        <button
          onClick={handleLike}
          className={`flex backdrop-blur-2xl bg-white/20 px-3 py-2 gap-1 rounded-full items-center justify-center
                     `}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="#fff"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <>
              {isLiked ? (
                <Favorite className="text-[#ff0000] shadow-xl" />
              ) : (
                <FavoriteBorderOutlined className="shadow-xl text-white" />
              )}
              <span className="text-white font-semibold">{likes}</span>
            </>
          )}
        </button>
      </Tooltip>
    </div>
  );
};

export default LikeButton;
