import React from "react";

const HeyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <g filter="url(#filter0_ii_321_862)">
      <circle cx="16" cy="16" r="16" fill="#2A2A2A" />
    </g>
    <circle cx="16" cy="16" r="15.75" stroke="#686868" strokeWidth="0.5" />
    <defs>
      <filter
        id="filter0_ii_321_862"
        x="-2"
        y="-2"
        width="36"
        height="36"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-2" />
        <feGaussianBlur stdDeviation="2.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 0 0.192157 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_321_862" />
      </filter>
    </defs>
  </svg>
);

export default HeyIcon;
