import { InterfaceClass } from "@/src/interfaces/interface-class";

export default function IconSaldo({ className }: InterfaceClass) {
  return (
    <svg
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19 3V11H11M19 11L11 3L7 7L1 1"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
