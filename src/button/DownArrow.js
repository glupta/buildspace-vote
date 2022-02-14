import React from "react";
import { Icon } from "@chakra-ui/react";

const DownArrowSvg = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="60"
    fill="none"
    viewBox="0 0 70 60"
  >
    <path
      stroke="#69F"
      strokeWidth="3"
      d="M67.043 1.5L35 57 2.957 1.5h64.086z"
    ></path>
  </svg>
);

function DownArrow() {
  return <Icon as={DownArrowSvg} w="30" h="30" />;
}

export default DownArrow;


