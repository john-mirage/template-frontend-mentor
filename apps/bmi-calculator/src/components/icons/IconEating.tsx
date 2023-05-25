import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIconEating = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    viewBox="0 0 64 64"
    ref={ref}
    {...props}
  >
    <circle cx={32} cy={32} r={32} fill="#F21E84" opacity={0.15} />
    <path
      fill="#F21E84"
      d="M44 29.25h-1.279a10.75 10.75 0 0 0-21.442 0H20a.75.75 0 0 0-.75.75 12.794 12.794 0 0 0 7 11.383V42A1.75 1.75 0 0 0 28 43.75h8A1.75 1.75 0 0 0 37.75 42v-.617a12.793 12.793 0 0 0 7-11.383.75.75 0 0 0-.75-.75Zm-6.22-6.464c.363.29.703.608 1.019.95a10.737 10.737 0 0 0-6.444 5.514h-4.187A9.28 9.28 0 0 1 37 22.75c.26 0 .521.014.78.036Zm2.008 2.231a9.186 9.186 0 0 1 1.43 4.233H34.06a9.237 9.237 0 0 1 5.727-4.233ZM32 20.75a9.21 9.21 0 0 1 3.35.625 10.79 10.79 0 0 0-8.742 7.875h-3.826A9.261 9.261 0 0 1 32 20.75Zm4.688 19.48a.75.75 0 0 0-.438.683V42a.25.25 0 0 1-.25.25h-8a.25.25 0 0 1-.25-.25v-1.087a.75.75 0 0 0-.438-.683 11.294 11.294 0 0 1-6.537-9.48h22.45a11.294 11.294 0 0 1-6.538 9.48Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconEating);
export default ForwardRef;
