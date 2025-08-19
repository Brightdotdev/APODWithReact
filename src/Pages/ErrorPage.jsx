import React from "react";
import { useNavigate } from "react-router-dom"; // if using react-router

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black/90 text-center px-6">
      {/* Error Code */}
      <h1 className="text-2xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 animate-pulse">
      Error 400 (bad request)
      </h1>

      {/* Message */}
      <p className="mt-4 text-xl md:text-2xl text-white/70">
        How did we even get here?
      </p>
      <p className="text-gray-400 text-sm md:text-base mt-2">
        Something must have gone terribly wrong...lets go back to the home page
      </p>

      {/* Action Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2 rounded-md bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
