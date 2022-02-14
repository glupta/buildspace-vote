import React, { useContext } from "react";
import { Box, Center } from "@chakra-ui/react";

const NFTFoundIcon = () => {

  return (
    <Box
      width="200px"
      bg="#FFF7EB"
      borderRadius="10px"
      border="1px dashed #FFA114"
      alignContent="center"
    >
      <Center color="#3E3931" fontSize="12px" padding="8px">
      🔎 Searching for your NFTs...
      </Center>
    </Box>
  );
};

export default NFTFoundIcon;
