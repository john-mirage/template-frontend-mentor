import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIconPregnancy = (
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
      fill="#FFC700"
      d="M11.5 17.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm9-2.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-1.4 5.615a5.875 5.875 0 0 1-6.2 0 .75.75 0 0 0-.8 1.27 7.375 7.375 0 0 0 7.8 0 .751.751 0 0 0-.8-1.27ZM28.75 16A12.75 12.75 0 1 1 16 3.25 12.765 12.765 0 0 1 28.75 16Zm-1.5 0A11.263 11.263 0 0 0 16.366 4.756C14.787 6.904 14.75 8.981 14.75 9a1.25 1.25 0 0 0 2.5 0 .75.75 0 1 1 1.5 0 2.75 2.75 0 1 1-5.5 0c0-.094.019-1.978 1.268-4.152A11.25 11.25 0 1 0 27.25 16Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconPregnancy);
export default ForwardRef;
