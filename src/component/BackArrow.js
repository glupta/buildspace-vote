import React from "react";
import { Icon } from "@chakra-ui/react";

const Arrow = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      fill="none"
      viewBox="0 0 19 19"
    >
      <path
        stroke="#69F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M7.576 4.695L2.771 9.5l4.805 4.805M16.229 9.5H2.905"
      ></path>
    </svg>
);

function BackArrow() {
  return <Icon as={Arrow} w="30" h="30" />;
}

export default BackArrow;


