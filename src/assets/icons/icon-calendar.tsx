import { InterfaceClass } from "@/src/interfaces/interface-class";

export default function IconCalendar({ className }: InterfaceClass) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.32021 3.59997V0.719971M10.0802 3.59997V0.719971M3.60021 6.47997H10.8002M2.16021 13.68H12.2402C12.6221 13.68 12.9884 13.5283 13.2584 13.2582C13.5285 12.9882 13.6802 12.6219 13.6802 12.24V3.59997C13.6802 3.21806 13.5285 2.85179 13.2584 2.58174C12.9884 2.31168 12.6221 2.15997 12.2402 2.15997H2.16021C1.7783 2.15997 1.41203 2.31168 1.14198 2.58174C0.871929 2.85179 0.720215 3.21806 0.720215 3.59997V12.24C0.720215 12.6219 0.871929 12.9882 1.14198 13.2582C1.41203 13.5283 1.7783 13.68 2.16021 13.68Z"
        stroke="currentColor"
        strokeWidth="1.44"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
