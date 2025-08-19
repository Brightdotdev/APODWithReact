import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import marsPng from "/mars.png";
import { FaInfo } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import BackToHome from "../components/Footer";
import { fetchSingleDate } from "../Utils/Api";
import NewtonsCradle from "../components/Loader";

const Details = () => {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const { date } = useParams();

  const toggleModal = () => setModalVisible((prev) => !prev);

  const getSingleDate = async () => {
    try {
      setError(null);
      const data = await fetchSingleDate(date);

      // Edge case: invalid API response
      if (!data || data.error || !data.url) {
        setError("Could not find any APOD for that date. Try another one.");
        setImageData(null);
        return;
      }

      setImageData(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong fetching APOD. Please try again later.");
      setImageData(null);
    }
  };

  useEffect(() => {
    getSingleDate();
  }, [date]);

  // 🔹 Loading state
  if (!imageData && !error) {
    return <NewtonsCradle />;
  }

  // 🔹 Error state
  if (error) {
    return (
      <main className="flex flex-col items-center justify-center w-screen h-screen bg-black text-white text-center p-6">
        <BackToHome />
        <h1 className="text-2xl md:text-4xl font-bold mb-4">🚧</h1>
        <p className="text-sm md:text-lg text-white/70">{error}</p>
      </main>
    );
  }

  return (
    <main
      aria-label={imageData?.title}
      className="relative w-screen h-screen flex flex-col text-white"
      style={{
        background: `url(${imageData?.url || marsPng})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Back button */}
      <div className="absolute top-4 left-4 z-50">
        <BackToHome />
      </div>

      {/* Sidebar modal */}
      <Sidebar
        isVisible={isModalVisible}
        imageData={imageData}
        setModal={toggleModal}
      />

      {/* Bottom overlay with title + date */}
      <section className="relative z-10 mt-auto p-6 md:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent w-full">
        <div className="flex items-end justify-between w-full">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
              {imageData?.title}
            </h1>
            <p className="text-sm md:text-base text-white/60">
              {imageData?.date}
            </p>
          </div>

          {/* Info button */}
          <FaInfo
            className="text-2xl md:text-4xl cursor-pointer hover:text-white/90 transition"
            onClick={toggleModal}
          />
        </div>
      </section>
    </main>
  );
};

export default Details;
