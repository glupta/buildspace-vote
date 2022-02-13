import { Box, Center } from "@chakra-ui/react";

const NFTConnectIcon = () => {
  return (
    <Box
      width="200px"
      bg="#FFF7EB"
      borderRadius="10px"
      border="1px dashed #FFA114"
      alignContent="center"
    >
      <Center color="#3E3931" fontSize="12px" padding="8px">
        Please connect your wallet. <br />
        Only NFT holders can vote.
      </Center>
    </Box>
  );
};

export default NFTConnectIcon;
