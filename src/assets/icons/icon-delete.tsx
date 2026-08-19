import { InterfaceClass } from "@/src/interfaces/interface-class";

export default function IconDelete({ className }: InterfaceClass) {
  return (
    <svg
      viewBox="0 0 9 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.57464 9.44784C1.28596 9.44784 1.03883 9.34505 0.833247 9.13947C0.627669 8.9339 0.52488 8.68676 0.52488 8.39808V1.57464H0V0.52488H2.6244V0H5.77368V0.52488H8.39808V1.57464H7.8732V8.39808C7.8732 8.68676 7.77041 8.9339 7.56483 9.13947C7.35926 9.34505 7.11212 9.44784 6.82344 9.44784H1.57464ZM6.82344 1.57464H1.57464V8.39808H6.82344V1.57464ZM2.6244 7.34832H3.67416V2.6244H2.6244V7.34832ZM4.72392 7.34832H5.77368V2.6244H4.72392V7.34832Z"
        fill="currentColor"
      />
    </svg>
  );
}
