import * as React from "react";
import type { SVGProps } from "react";
const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#instagram_svg__a)">
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.667 4.334h.007m-7.007-3h6.667a3.333 3.333 0 0 1 3.333 3.333v6.667a3.333 3.333 0 0 1-3.333 3.333H4.667a3.333 3.333 0 0 1-3.333-3.333V4.667a3.333 3.333 0 0 1 3.333-3.333m6 6.247a2.667 2.667 0 1 1-5.276.782 2.667 2.667 0 0 1 5.276-.782"
      />
    </g>
    <defs>
      <clipPath id="instagram_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgInstagram;
