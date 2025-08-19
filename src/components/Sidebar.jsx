import React from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isVisible, imageData, setModal }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 sm:w-96 bg-black text-white z-50 transform transition-transform duration-300 ease-in-out 
      ${isVisible ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header (fixed at the top) */}
      <div className="flex justify-between items-center p-4 border-b border-white/20">
        <h2 className="text-lg font-semibold">More Info</h2>
        <FaTimes className="cursor-pointer" onClick={setModal} />
      </div>

      {/* Scrollable Content */}
      <div className="p-4 overflow-y-auto h-[calc(100%-64px)] space-y-4">
        <p className="text-sm text-white/80">
          <span className="font-semibold">Date:</span>{" "}
          {imageData?.date || "Unknown"}
        </p>
        <p className="text-sm text-white/80">
          <span className="font-semibold">Title:</span> {imageData?.title}
        </p>
        <p className="text-sm text-white/80">{imageData?.explanation}</p>

        {/* Disclaimer */}
        <p className="lg:text-sm text-xs text-white/60 mt-6">
          This image and meta is a sole property of NASA and the United States
          government. I do not own any rights to these images or data provided.
          The use of this API and its images is solely for educational purposes
          and not for commercial use.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
