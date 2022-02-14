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
  Link
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
          <Link href='https://buildspace.so/'>
          <Heading
            size="md"
            fontWeight="semibold"
            color="#0A152C"
            fontSize="20px"
          >
            🦄 buildspace
          </Heading>
          </Link>
          <ConnectWalletButton />
        </HStack>
      </Container>
    </Container>
  );
}
