import * as React from "react";
import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 32"
    {...props}
  >
    <path
      fill="url(#location_svg__a)"
      d="M8 22.667a.62.62 0 0 1-.4-.133.8.8 0 0 1-.25-.35 9.3 9.3 0 0 0-.8-1.75q-.467-.816-1.316-1.917a15 15 0 0 1-1.384-2.1q-.516-1-.517-2.416 0-1.95 1.35-3.3Q6.05 9.334 8 9.334t3.3 1.367q1.367 1.35 1.367 3.3 0 1.516-.583 2.533a17.5 17.5 0 0 1-1.317 1.983q-.9 1.2-1.367 2-.45.784-.75 1.667a.75.75 0 0 1-.267.367.65.65 0 0 1-.383.116m0-7a1.6 1.6 0 0 0 1.184-.483 1.6 1.6 0 0 0 .483-1.183 1.6 1.6 0 0 0-.483-1.184A1.6 1.6 0 0 0 8 12.334a1.6 1.6 0 0 0-1.183.483 1.6 1.6 0 0 0-.484 1.184q0 .699.484 1.183A1.6 1.6 0 0 0 8 15.667"
    />
    <defs>
      <linearGradient
        id="location_svg__a"
        x1={8}
        x2={8}
        y1={9.334}
        y2={22.667}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEC360" />
        <stop offset={0.502} stopColor="#B39D4D" />
        <stop offset={1} stopColor="#91803F" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgLocation;
