import React, { useContext } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { UserContext } from "../../UserContext"; 

const NFTFoundIcon = () => {
  const { state } = useContext(UserContext);

  return (
    <Box
      width="200px"
      bg="#FFF7EB"
      borderRadius="10px"
      border="1px dashed #FFA114"
      alignContent="center"
    >
      <Center color="#3E3931" fontSize="12px" padding="8px">
        <Text>Sweet, you got {state.allUri.length} NFTs!</Text>
      </Center>
    </Box>
  );
};

export default NFTFoundIcon;
