import React from "react";

const NewtonsCradle = ({ size = 60, speed = 1.2, color = "#ffffff" }) => {
  return (
    <>
      <style>
        {`
          .newtons-cradle {
            --uib-size: ${size}px;
            --uib-speed: ${speed}s;
            --uib-color: ${color};
          }

          .newtons-cradle__dot::after {
            content: '';
            display: block;
            width: 100%;
            height: 25%;
            border-radius: 50%;
            background-color: var(--uib-color);
            box-shadow: 0 4px 6px rgba(0,0,0,0.4); /* Subtle shadow for depth */
          }

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
              animation-timing-function: ease-in-out;
            }
          }

          @keyframes swing2 {
            0% {
              transform: rotate(0deg);
              animation-timing-function: ease-in-out;
            }
            50% {
              transform: rotate(0deg);
              animation-timing-function: ease-out;
            }
            75% {
              transform: rotate(-70deg);
              animation-timing-function: ease-in;
            }
            100% {
              transform: rotate(0deg);
            }
          }
        `}
      </style>

      {/* Loader container fills screen and centers cradle */}
      <div className="w-full h-screen flex items-center justify-center bg-black/90">
        <div
          className="newtons-cradle relative flex items-center justify-center"
          style={{
            width: "var(--uib-size)",
            height: "var(--uib-size)",
          }}
        >
          {/* Ball 1 (animated) */}
          <div
            className="newtons-cradle__dot relative flex items-center h-full w-1/4 origin-[center_top]"
            style={{ animation: "swing var(--uib-speed) infinite" }}
          ></div>

          {/* Ball 2 */}
          <div className="newtons-cradle__dot relative flex items-center h-full w-1/4 origin-[center_top]"></div>

          {/* Ball 3 */}
          <div className="newtons-cradle__dot relative flex items-center h-full w-1/4 origin-[center_top]"></div>

          {/* Ball 4 (animated) */}
          <div
            className="newtons-cradle__dot relative flex items-center h-full w-1/4 origin-[center_top]"
            style={{ animation: "swing2 var(--uib-speed) infinite" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default NewtonsCradle;
