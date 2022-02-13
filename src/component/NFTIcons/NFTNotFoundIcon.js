import { Box, Center, Link, Text } from "@chakra-ui/react";

const NFTConnectIcon = () => {
  return (
    <Box
      width="240px"
      bg="#FFF7EB"
      borderRadius="10px"
      border="1px dashed #FFA114"
      alignContent="center"
    >
      <Center color="#3E3931" fontSize="12px" padding="8px">
        <Text>
          👀 No NFT found.{" "}
          <Link color="teal.500" href="https://app.buildspace.so/home">
            Complete a
          <br />
          project</Link>{" "}to earn your first one.
        </Text>
      </Center>
    </Box>
  );
};

export default NFTConnectIcon;
