import React, { useContext } from "react";
import {
  Heading,
  Stack,
  Box,
  Text,
  Container,
  Spacer,
  Center
} from "@chakra-ui/react";
import Clock from "../component/Clock";
import NFTTracker from "./NFTIcons/NFTTracker";
import { UserContext } from "../contexts/UserContext";

const LandingContent = () => {
  const { state } = useContext(UserContext);
  const votePower = state.nftCount * 5;
  const voteRemaining = votePower - state.userVoteCount;

  return (
      <Container
        maxW="container.lg"
        color="white"
        height="100%"
        pl={{ sm: "12px" }}
      >
        <Stack direction={["column", "row"]} width="auto">
          <Box>
            <Heading
              size={{ base: "lg", md: "md", lg: "lg", sm: "sm" }}
              bgGradient="linear-gradient(160deg, #CB5EEE 0%, #4BE1EC 90%);
                color: #9D8EEE;"
              bgClip="text"
              fontWeight="extrabold"
              fontSize={{ base: "28px", md: "28px", lg: "28px", sm: "24px" }}
              p={{ base: "1px", md: "1px", sm: "0px" }}
            >
              Decide the future
            </Heading>
          </Box>

          <Box>
            <Heading
              size={{ base: "lg", md: "md", lg: "lg", sm: "sm" }}
              fontWeight="extrabold"
              color="#0A152C"
              fontSize={{ base: "28px", md: "28px", lg: "28px", sm: "24px" }}
              p={{ base: "1px", md: "1px", sm: "0px" }}
            >
              for this community.
            </Heading>
          </Box>
          <Spacer
            display={{ sm: "none" }}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 20, lg: 20 }}
          ></Spacer>
          <Box
            width="40%"
            flex="1"
            alignContent="right"
            mt={{ base: 4, md: 0, sm: 2 }}
            ml={{ md: 6, sm: 2 }}
          ></Box>
          <Box
            width="40%"
            flex="1"
            alignContent="right"
            mt={{ base: 4, md: 0, sm: 2 }}
            ml={{ md: 6, sm: 2 }}
          >
            <NFTTracker />
          </Box>
        </Stack>

        <Stack direction="row" spacing="24px" width="auto">
          <Box width="75%">
            <Text
              color="#4C5467"
              overflow="hidden"
              fontSize={{ base: "14px", md: "14px", sm: "10px" }}
              align={{ base: "left", md: "left", sm: "left" }}
            >
              This is the place to vote on your favorite proposals, get funded,
              and reach world domination. The more NFTs you earn, the more
              influence you have here (1 NFT = 5 votes). When the countdown
              ends, we launch the most hype idea and replenish your voting power
              for the next cycle.
            </Text>
          </Box>
          <Center>
            <Stack direction="column" alignSelf="right" justify="center" align="center">
              <Clock />
              {state.nftCount > 0 && (
                <Text
                  color="#6699FF"
                  fontWeight="bold"
                  fontSize="14px"
                >
                  {voteRemaining} / {votePower} votes remaining
                </Text>
              )}
            </Stack>
          </Center>
        </Stack>
      </Container>
  );
};

export default LandingContent;
