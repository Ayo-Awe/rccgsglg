import * as React from "react";
import type { SVGProps } from "react";
const SvgGavel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 7 3"
    {...props}
  >
    <path
      fill="#fff"
      d="M1.76.48a.48.48 0 1 0 0 .96H.48a.48.48 0 1 0 0 .96h5.44a.48.48 0 0 0 0-.96H4.64a.48.48 0 0 0 0-.96z"
    />
  </svg>
);
export default SvgGavel;
