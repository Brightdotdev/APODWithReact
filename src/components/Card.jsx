import React from "react";
import { Link } from "react-router-dom";
import marsPng from "/mars.png";
import { LuArrowUpRight } from "react-icons/lu";
import { formatDistanceToNowStrict, parseISO, isToday, isYesterday } from "date-fns";

// 🔹 Pop-up component
const ViewUserPopUp = ({ date }) => {
  // Convert date safely
  const parsedDate = date ? parseISO(date) : null;

  // Human-friendly label
  const friendlyDate = parsedDate
    ? isToday(parsedDate)
      ? "Today"
      : isYesterday(parsedDate)
      ? "Yesterday"
      : formatDistanceToNowStrict(parsedDate, { addSuffix: true })
    : "Unknown";

  return (
    <div
      className="
        absolute top-3 right-3 
        flex md:hidden  /* Always show on mobile */
        group-hover:flex  /* Show only on hover for larger screens */
        z-50
      "
    >
      <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/80 text-white text-xs sm:text-sm shadow-md">
        <span>View APOD of {friendlyDate}</span>
        <LuArrowUpRight size={14} />
      </div>
    </div>
  );
};

// 🔹 Main Card component
const Card = ({ imageData }) => {
  const minimizedText =
    (imageData?.explanation?.split(" ").slice(0, 20).join(" ") ?? "") + "...";

  return (
    <Link
      to={`/details/${imageData?.date || "no-date"}`}
      aria-label={imageData?.explanation || "NASA image card"}
      className="
        group cursor-pointer 
        w-full 
        h-[16rem] sm:h-[18rem] md:h-[20rem]
        relative overflow-hidden rounded-xl
        shadow-md border border-black/20
        bg-black
        transition-all duration-300
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageData?.url || marsPng})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Popup (hover for desktop, always for mobile) */}
      <ViewUserPopUp date={imageData?.date} />

      {/* Text Content */}
      <div className="absolute bottom-0 p-3 sm:p-4 flex flex-col gap-2 text-white">
        <h5 className="text-base sm:text-lg font-semibold">
          {imageData?.title || "Mars Fallback Image"}
        </h5>
        <p className="text-xs sm:text-sm text-white/80 leading-snug">
          {minimizedText ||
            "Uhm... it's Mars I guess. The API might be down 🧍‍♂️"}
        </p>
      </div>
    </Link>
  );
};

export default Card;
