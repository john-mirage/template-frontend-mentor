import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIconExercise = (
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
    <circle cx={32} cy={32} r={32} fill="#F69134" opacity={0.15} />
    <path
      fill="#F69134"
      d="M47 31.25h-1.25V27A1.75 1.75 0 0 0 44 25.25h-2.25V24A1.75 1.75 0 0 0 40 22.25h-3A1.75 1.75 0 0 0 35.25 24v7.25h-6.5V24A1.75 1.75 0 0 0 27 22.25h-3A1.75 1.75 0 0 0 22.25 24v1.25H20A1.75 1.75 0 0 0 18.25 27v4.25H17a.75.75 0 1 0 0 1.5h1.25V37A1.75 1.75 0 0 0 20 38.75h2.25V40A1.75 1.75 0 0 0 24 41.75h3A1.75 1.75 0 0 0 28.75 40v-7.25h6.5V40A1.75 1.75 0 0 0 37 41.75h3A1.75 1.75 0 0 0 41.75 40v-1.25H44A1.75 1.75 0 0 0 45.75 37v-4.25H47a.75.75 0 1 0 0-1.5Zm-27 6a.25.25 0 0 1-.25-.25V27a.25.25 0 0 1 .25-.25h2.25v10.5H20ZM27.25 40a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm13 0a.25.25 0 0 1-.25.25h-3a.25.25 0 0 1-.25-.25V24a.25.25 0 0 1 .25-.25h3a.25.25 0 0 1 .25.25v16Zm4-3a.25.25 0 0 1-.25.25h-2.25v-10.5H44a.25.25 0 0 1 .25.25v10Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconExercise);
export default ForwardRef;
