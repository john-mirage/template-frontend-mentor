import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIconGender = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 32 32"
    ref={ref}
    {...props}
  >
    <path
      fill="#F24E1E"
      d="M26 3.25h-5a.75.75 0 1 0 0 1.5h3.19l-3.75 3.742a7.75 7.75 0 1 0-6.19 13.22v2.538H11a.75.75 0 1 0 0 1.5h3.25V29a.75.75 0 1 0 1.5 0v-3.25H19a.75.75 0 1 0 0-1.5h-3.25v-2.538A7.75 7.75 0 0 0 21.41 9.65l3.84-3.84V9a.75.75 0 1 0 1.5 0V4a.75.75 0 0 0-.75-.75Zm-11 17A6.25 6.25 0 1 1 21.25 14 6.257 6.257 0 0 1 15 20.25Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconGender);
export default ForwardRef;