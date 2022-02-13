import React from "react";
import { Icon, Image } from "@chakra-ui/react";
import FireImage from '../assets/icons/fire-sm.png'
const FireIcon = (props) => (
<Image src={FireImage} />
);

function Fire() {
  return <Icon as={FireIcon} w="30" h="30" />;
}

export default FireIcon;
