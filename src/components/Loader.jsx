import React from 'react';

// NewtonsCradle Component built with Tailwind for layout and inline CSS for animations
const NewtonsCradle = () => {
  return (
    <>
      {/* 
        Inline CSS block for custom properties, pseudo-element styling, and keyframes animations.
        These styles handle the animation effects and appearance that Tailwind alone doesn't cover.
      */}
      <style>
        {`
          /* Define custom properties for size, speed, and color */
          .newtons-cradle {
            --uib-size: 50px;
            --uib-speed: 1.2s;
            --uib-color: #474554;
          }
          
          /* Style for the pseudo-element representing the dot’s visible circle */
          .newtons-cradle__dot::after {
            content: '';
            display: block;
            width: 100%;
            height: 25%;
            border-radius: 50%;
            background-color: var(--uib-color);
          }
          
          /* Keyframe animation for the first dot */
          @keyframes swing {
            0% {
              transform: rotate(0deg);
              animation-timing-function: ease-out;
            }
            25% {
              transform: rotate(70deg);
              animation-timing-function: ease-in;
            }
            50% {
              transform: rotate(0deg);
              animation-timing-function: linear;
            }
          }
          
          /* Keyframe animation for the last dot */
          @keyframes swing2 {
            0% {
              transform: rotate(0deg);
              animation-timing-function: linear;
            }
            50% {
              transform: rotate(0deg);
              animation-timing-function: ease-out;
            }
            75% {
              transform: rotate(-70deg);
              animation-timing-function: ease-in;
            }
          }
        `}
      </style>

      {/*
        Parent container for Newton's Cradle.
        Tailwind classes:
          - relative, flex, items-center, justify-center: for layout positioning.
          - The width and height are set via inline styles using the custom CSS variable (--uib-size).
      */}
  <div className="w-screen h-screen flex items-center justify-center">
  <div
        className="newtons-cradle relative flex items-center justify-center"
        style={{ width: "var(--uib-size)", height: "var(--uib-size)" }}
      >
        {/*
          Each dot is represented by a div.
          Tailwind classes used:
            - relative, flex, items-center: for positioning and flex layout.
            - h-full and w-1/4: setting the height to 100% of the parent and width to 25%.
            - origin-[center_top]: sets the transform origin to "center top" using Tailwind’s arbitrary value syntax.
          The first and last dots have inline animation styles applied.
        */}
        {/* First dot with the "swing" animation */}
        <div
          className="newtons-cradle__dot relative flex items-center h-full w-1/4 origin-[center_top]"
          style={{ animation: "swing var(--uib-speed) linear infinite" }}
        ></div>

        {/* Second dot (static, no animation) */}
        <div className="newtons-cradle__dot relative flex items-center h-full w-1/4 origin-[center_top]"></div>

        {/* Third dot (static, no animation) */}
        <div className="newtons-cradle__dot relative flex items-center h-full w-1/4 origin-[center_top]"></div>

        {/* Fourth dot with the "swing2" animation */}
        <div
          className="newtons-cradle__dot relative flex items-center h-full w-1/4 origin-[center_top]"
          style={{ animation: "swing2 var(--uib-speed) linear infinite" }}
        ></div>
      </div>
  </div>
    </>
  );
};

export default NewtonsCradle;
