import * as React from "react";
import type { SVGProps } from "react";
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 36"
    {...props}
  >
    <path
      stroke="url(#phone_svg__a)"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.647 22.22c0 .24-.053.487-.167.727a2.8 2.8 0 0 1-.453.68c-.327.36-.687.62-1.093.787q-.6.252-1.3.253-1.022.002-2.174-.486a11.7 11.7 0 0 1-2.293-1.32 19 19 0 0 1-2.187-1.867 19 19 0 0 1-1.86-2.18c-.546-.76-.986-1.52-1.307-2.273q-.48-1.14-.48-2.18c0-.454.08-.887.24-1.287q.239-.612.767-1.113c.427-.42.894-.627 1.387-.627.187 0 .373.04.54.12.173.08.326.2.446.373l1.547 2.18q.179.248.267.467c.06.14.093.28.093.407q0 .242-.14.473a2.3 2.3 0 0 1-.373.473l-.507.527a.36.36 0 0 0-.106.267c0 .053.006.1.02.153.02.053.04.093.053.133q.18.332.62.854c.3.346.62.7.966 1.053.36.353.707.68 1.06.98.347.293.634.493.86.613q.051.023.12.054a.5.5 0 0 0 .167.026c.114 0 .2-.04.274-.113l.506-.5q.25-.252.48-.373a.9.9 0 0 1 .474-.14c.126 0 .26.026.406.086s.3.147.467.26l2.207 1.567q.258.178.366.427c.067.166.107.333.107.52Z"
    />
    <path
      stroke="url(#phone_svg__b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.333 16.001c0-.4-.313-1.013-.78-1.513-.426-.46-.993-.82-1.553-.82"
    />
    <path
      stroke="url(#phone_svg__c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.667 16A4.663 4.663 0 0 0 10 11.335"
    />
    <defs>
      <linearGradient
        id="phone_svg__a"
        x1={7.99}
        x2={7.99}
        y1={11.334}
        y2={24.667}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEC360" />
        <stop offset={0.502} stopColor="#B39D4D" />
        <stop offset={1} stopColor="#91803F" />
      </linearGradient>
      <linearGradient
        id="phone_svg__b"
        x1={11.167}
        x2={11.167}
        y1={13.668}
        y2={16.001}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEC360" />
        <stop offset={0.502} stopColor="#B39D4D" />
        <stop offset={1} stopColor="#91803F" />
      </linearGradient>
      <linearGradient
        id="phone_svg__c"
        x1={12.333}
        x2={12.333}
        y1={11.334}
        y2={16.001}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DEC360" />
        <stop offset={0.502} stopColor="#B39D4D" />
        <stop offset={1} stopColor="#91803F" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgPhone;
