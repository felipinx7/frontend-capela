import { InterfaceClass } from "@/src/interfaces/interface-class";

export default function IconTrash({ className }: InterfaceClass) {
  return (
    <svg
      viewBox="0 0 27 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M23.328 7.29001L22.0639 24.993C22.0116 25.7287 21.6824 26.4172 21.1426 26.9199C20.6029 27.4226 19.8928 27.702 19.1552 27.702H7.0888C6.35126 27.702 5.64111 27.4226 5.10138 26.9199C4.56166 26.4172 4.23246 25.7287 4.18009 24.993L2.91601 7.29001M10.206 13.122V21.87M16.038 13.122V21.87M17.496 7.29001V2.91601C17.496 2.52932 17.3424 2.15847 17.069 1.88505C16.7955 1.61162 16.4247 1.45801 16.038 1.45801H10.206C9.81932 1.45801 9.44847 1.61162 9.17505 1.88505C8.90162 2.15847 8.74801 2.52932 8.74801 2.91601V7.29001M1.45801 7.29001H24.786"
        stroke="currentColor"
        strokeWidth="2.916"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
