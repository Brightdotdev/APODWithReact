import React, { useEffect, useState } from "react";
import "./index.css";
import Card from "./components/Card";
import { fetchAll } from "./Utils/Api";
import NewtonsCradle from "./components/Loader";
import Particles from "./components/Particles";

const App = () => {
  // Store fetched data
  const [arryData, setArray] = useState([]);

  // Fetch data from API
  const generateData = async () => {
    try {
      const data = await fetchAll();
      setArray(data.reverse()); // reverse so latest is first
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  // Run once on mount
  useEffect(() => {
    generateData();
  }, []);

  // Loader fallback
  if (arryData.length === 0) {
    return <NewtonsCradle />;
  }

  return (
    <div className=" w-screen flex flex-col text-white bg-black/90 relative items-start justify-start">

       <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={1000}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
    className="absolute inset-0 pointer-events-none w-screen h-screen top-0 left-0 "
  />
   <div className="flex flex-col items-center justify-center w-full relative">
       {/* HERO SECTION */}
    <header className="w-full flex flex-col items-center justify-center text-center px-6 py-12 backdrop-blur-xs ">
  {/* Gradient Title */}
  <h1
    className="text-xl md:text-5xl font-extrabold mb-4 tracking-tight 
               bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 
               bg-clip-text text-transparent"
  >
    NASA’s Astronomy Picture of the Day
  </h1>

  {/* Subtle Subtitle */}
  <p className="text-gray-400 max-w-2xl text-sm md:text-lg">
    Explore stunning daily images from the universe, straight from NASA’s
    APOD collection. Click on any card to view more details.
  </p>
</header>

      {/* GRID SECTION */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {arryData.map((imageData, index) => (
            <Card key={index} imageData={imageData} />
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full py-4 text-center text-gray-400 text-sm border-t border-gray-700 bg-black/70 backdrop-blur-md shadow-lg">
        Built with 🚀 & NASA’s APOD API
      </footer>
   </div>
    </div>
  );
};

export default App;
