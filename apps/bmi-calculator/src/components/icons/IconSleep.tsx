import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SvgIconSleep = (
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
    <circle cx={32} cy={32} r={32} fill="#22C1C1" opacity={0.15} />
    <path
      fill="#22C1C1"
      d="M45.75 28a.75.75 0 0 1-.75.75h-2.25V31a.75.75 0 0 1-1.5 0v-2.25H39a.75.75 0 1 1 0-1.5h2.25V25a.75.75 0 1 1 1.5 0v2.25H45a.75.75 0 0 1 .75.75ZM34 22.75h1.25V24a.75.75 0 1 0 1.5 0v-1.25H38a.75.75 0 0 0 0-1.5h-1.25V20a.75.75 0 0 0-1.5 0v1.25H34a.75.75 0 1 0 0 1.5Zm8.906 12.535a.75.75 0 0 1 .134.75A11.751 11.751 0 1 1 27.97 20.96a.75.75 0 0 1 .992.849 11.262 11.262 0 0 0 13.23 13.229.75.75 0 0 1 .714.247Zm-1.796 1.418A12.765 12.765 0 0 1 27.297 22.89a10.248 10.248 0 0 0 1.526 18.849 10.25 10.25 0 0 0 12.287-5.036Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconSleep);
export default ForwardRef;
