import React from "react";
import { Icon, Image } from "@chakra-ui/react";

const Photo = (props) =>  (
 <Image src={props.src}></Image>
);

function AvatarIcons() {
  return <Icon as={Photo} w="30" h="30" />;
}

export default AvatarIcons;
