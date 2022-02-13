import React from "react";
import {
  Grid,
  GridItem,
  HStack,
  Heading,
  Stack,
  Box,
  Text,
  Container,
  VStack,
  Center,
} from "@chakra-ui/react";
import Clock from "../component/Clock";
import NFTTracker from "./NFTIcons/NFTTracker";

export default function LandingContent() {
  return (
    <Container centerContent maxW="container.lg" color="white">
      <Grid
        //templateColumns="repeat(4, 1fr)"
        //templateRows="repeat(2, 1fr)"
        templateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(2, 1fr)" }}
        gap={4}
        h="120px"
        
      >
        <GridItem colSpan={3} h="30">
          <HStack>
            <Heading
              size="md"
              bgGradient="linear-gradient(160deg, #CB5EEE 0%, #4BE1EC 90%); color: #9D8EEE;"
              bgClip="text"
              fontWeight="extrabold"
              fontSize="32px"
            >
              Decide the future
            </Heading>
            <Heading
              size="md"
              fontWeight="extrabold"
              color="#0A152C"
              fontSize="32px"
            >
              for this community.
            </Heading>
          </HStack>
        </GridItem>
        <GridItem colStart={4} colEnd={4}>
          <VStack>
            <NFTTracker />
          </VStack>
        </GridItem>
        <GridItem colStart={5} colSpan={2}>
          <Text color="#4C5467" fontSize="14px">
            This is the place to vote on your favorite proposals, get funded, and reach world domination. The more NFTs you have, the more influence you got here (1 NFT = 5 points). When the countdown ends, we
            launch the most hype idea and replenish your voting power for the next cycle.
          </Text>
        </GridItem>
        <GridItem colStart={7} colEnd={7}>
          <Center>
            <Clock />
          </Center>
        </GridItem>
      </Grid>
    </Container>
  );
}
