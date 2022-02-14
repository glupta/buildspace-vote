import React from "react";
import { Icon } from "@chakra-ui/react";

const UpArrowSvg = (props) => (
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
      d="M2.957 58.5L35 3l32.043 55.5H2.957z"
    ></path>
  </svg>
);

function UpArrow() {
  return <Icon as={UpArrowSvg} w={8} h={8} />;
}

export default UpArrow;


