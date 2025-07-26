import * as React from "react";
import type { SVGProps } from "react";
const WowButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 80 80"
    {...props}
  >
    <g filter="url(#Frame_14141_svg__a)">
      <rect width={56} height={56} x={8} y={8} fill="#FFF2C3" rx={28} />
      <path
        stroke="#91803F"
        strokeWidth={2}
        d="M36 49.333c7.364 0 13.333-5.97 13.333-13.334S43.363 22.666 36 22.666s-13.333 5.97-13.333 13.333c0 2.133.5 4.15 1.39 5.937.237.475.316 1.018.179 1.53l-.794 2.969c-.345 1.288.834 2.467 2.122 2.122l2.968-.794a2.18 2.18 0 0 1 1.531.178A13.3 13.3 0 0 0 36 49.333Z"
      />
      <path
        stroke="#91803F"
        strokeLinecap="round"
        strokeWidth={2}
        d="M36 41.333V30.666M30.667 38.667v-5.333M41.334 38.667v-5.333"
      />
    </g>
    <defs>
      <filter
        id="Frame_14141_svg__a"
        width={80}
        height={80}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_dropShadow_119_267"
        />
        <feOffset dx={4} dy={4} />
        <feGaussianBlur stdDeviation={4} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_119_267" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_119_267"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default WowButton;
