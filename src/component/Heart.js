import React from "react";
import { Icon } from "@chakra-ui/react";

const HeartIcon = (props) => (
  <svg
    width={48}
    height={43}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M43.34 3.869C38.203-.51 30.562.279 25.847 5.144L24 7.047l-1.847-1.903C17.447.278 9.797-.51 4.659 3.869c-5.887 5.025-6.197 14.044-.928 19.49l18.14 18.732a2.94 2.94 0 0 0 4.248 0l18.14-18.732c5.278-5.446 4.969-14.465-.919-19.49Z"
      fill={props.color}
      fillOpacity={0.82}
    />
  </svg>
);

function Heart() {
  return <Icon as={HeartIcon} w="30" h="30" />;
}

export default HeartIcon;
