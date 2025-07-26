import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#fff"
      d="M9.75 4.5a.75.75 0 1 0-1.5 0v2.25h-3a.75.75 0 0 0 0 1.5h3v5.25a.75.75 0 1 0 1.5 0V8.25h3a.75.75 0 0 0 0-1.5h-3z"
    />
  </svg>
);
export default SvgCrossIcon;
