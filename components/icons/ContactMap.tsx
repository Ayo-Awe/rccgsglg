import * as React from "react";
import type { SVGProps } from "react";
const SvgContactMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <rect width={40} height={40} fill="#FFF2C3" rx={8} />
    <g fill="#B29D4D" clipPath="url(#contact_map_svg__a)">
      <path d="M26.229 22.675a.999.999 0 1 0-.461 1.945C28.874 25.356 30 26.446 30 27c0 1.195-3.988 3-10 3-6.01 0-10-1.805-10-3 0-.554 1.127-1.643 4.231-2.38a1 1 0 0 0 .742-1.204 1 1 0 0 0-1.203-.742C10.05 23.557 8 25.094 8 27c0 3.282 6.038 5 12 5 5.963 0 12-1.718 12-5 0-1.907-2.05-3.443-5.771-4.326M20 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      <path d="m18.698 26.633.407.814a1.001 1.001 0 0 0 1.79 0l.862-1.724c1.05-2.099 2.343-4.132 3.594-6.098l.57-.897A6.96 6.96 0 0 0 27.001 15a7.01 7.01 0 0 0-2.34-5.223 7 7 0 0 0-5.479-1.73c-3.111.355-5.681 2.86-6.112 5.958a6.99 6.99 0 0 0 1.29 5.135c1.697 2.298 3.02 4.855 4.338 7.493M20 12.001c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.347-3-3 1.346-3 3-3" />
    </g>
    <defs>
      <clipPath id="contact_map_svg__a">
        <path fill="#fff" d="M8 8h24v24H8z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgContactMap;
