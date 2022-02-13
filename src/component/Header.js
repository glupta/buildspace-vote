import React from "react";
import {
  Grid,
  GridItem,
  Flex,
  Button,
  HStack,
  Heading,
  Stack,
  Box,
  Container,
} from "@chakra-ui/react";
import Logo from "./Logo";
import ConnectWalletButton from "../button/ConnectWalletButton";

export default function Header() {
  return (
    <Container
      maxW="container.xlg"
      centerContent
      bg="white"
      height="16"
      borderRadius="4 4 0 0"
    >
      <Container maxW="container.lg" m="4">
        <HStack justify="space-between">
          <Heading
            size="md"
            fontWeight="semibold"
            color="#0A152C"
            fontSize="20px"
          >
            🦄 buildspace
          </Heading>
          <ConnectWalletButton />
        </HStack>
      </Container>
    </Container>
  );
}
