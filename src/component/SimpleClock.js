import React from "react";
import { Icon } from "@chakra-ui/react";

const SimpleClockIcon = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      stroke="#4C5467"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M14.667 8A6.67 6.67 0 018 14.667 6.67 6.67 0 011.333 8 6.67 6.67 0 018 1.333 6.67 6.67 0 0114.667 8z"
    ></path>
    <path
      stroke="#4C5467"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10.473 10.12L8.407 8.887c-.36-.214-.654-.727-.654-1.147V5.007"
    ></path>
  </svg>
);

function SimpleClock() {
  return <Icon as={SimpleClockIcon} w="30" h="30" />;
}

export default SimpleClockIcon;


