import React, { useContext } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Container,
  Avatar,
  AvatarGroup,
  HStack,
  Button,
  Stack,
  VStack,
  Spacer,
  Center
} from "@chakra-ui/react";

import { UserContext } from "../contexts/UserContext";
import Photo1 from "../assets/avatars/1.png";
import Photo2 from "../assets/avatars/2.png";
import Photo3 from "../assets/avatars/3.png";
import UpArrow from "../button/UpArrow";
import DownArrow from "../button/DownArrow";
import SimpleClock from "./SimpleClock";
import axios from "axios";

const ProposalList = () => {
  const { state, update } = useContext(UserContext);
  const votePower = state.nftCount * 5;
  const voteRemaining = votePower - state.userVoteCount;

  const finalRef = React.useRef();

  const handleUp = async (proposal) => {
    if (voteRemaining <= 0) {
      console.log("No more votes1");
      return;
    }
    proposal.user_count += 1;

    const json = JSON.stringify({
      proposal_id: proposal.proposal_id,
      user_address: state.address,
      vote_count: proposal.user_count,
    });
    console.log("submit up", proposal, json);

    const response = await axios.post(
      "https://u7ou8g3qz8.execute-api.us-east-1.amazonaws.com/submitProposalVote",
      json,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response up", response);
    if (response.data && response.data.successful) {
      update({ userVoteCount: state.userVoteCount + 1 });
    }
  };

  const handleDown = async (proposal) => {
    if (proposal.user_count === 0 || voteRemaining >= votePower) {
      console.log("Add more votes1");
      return;
    }
    const json = JSON.stringify({
      proposal_id: proposal.proposal_id,
      user_address: state.address,
      vote_count: proposal.user_count - 1,
    });
    console.log("submit down1", proposal, json);

    const response = await axios.post(
      "https://u7ou8g3qz8.execute-api.us-east-1.amazonaws.com/submitProposalVote",
      json,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response down1", response);
    if (response.data && response.data.successful) {
      update({ userVoteCount: state.userVoteCount - 1 });
    }
  };

  return (
    <>
      <Container maxW="container.lg">
        {state.allProposals &&
          state.allProposals.map((item) => {
            return (
              <Grid
                templateColumns="repeat(2, 1fr)"
                gap={{ base: "4", md: "4", lg: "4", sm: "1" }}
                padding={{ base: "20px", md: "20px", sm: "29px" }}
                marginTop={{ base: "29px", md: "29px", sm: "29px" }}
                backgroundColor="#FFFFFF"
                boxShadow="0px 20px 60px rgba(10, 21, 44, 0.04)"
                borderRadius="16px"
                width="98%"
                key={item.proposal_id}
              >
                <GridItem borderRight="solid 1px #DBDEE7">
                  <Box
                    paddingBottom={{
                      base: "px",
                      lg: "24px",
                      md: "24px",
                      sm: "2px",
                    }}
                  >
                    <Text
                      fontSize="18px"
                      fontWeight="bold"
                      color="#A152C"
                      lineHeight="48px"
                    >
                      {item.title}
                    </Text>
                  </Box>

                  <Stack direction={["column", "row"]} width="auto">
                    <HStack width="100%">
                      <AvatarGroup
                        size="sm"
                        max={3}
                        spacing="-10px"
                        loading="lazy"
                      >
                        <Avatar src={Photo1} />
                        <Avatar src={Photo2} />
                        <Avatar name="G" />
                      </AvatarGroup>
                      <Text fontSize="14px" color="#6699FF" fontWeight="400">
                        {item.vote_count === "1" ? (
                          <>{item.vote_count} vote </>
                        ) : (
                          <>{item.vote_count} votes </>
                        )}
                      </Text>
                      {state.nftCount > 0 && item.canVote && (
                        <Box width="60%">
                          <VStack>
                            <Box>
                              <Text
                                fontSize="14px"
                                color="#00000"
                                fontWeight="bold"
                              >
                                Votes submitted
                              </Text>
                            </Box>
                            <HStack>
                              <Button onClick={() => handleDown(item)}>
                                {/*<DownArrow w={10} h={10} />*/}-
                              </Button>
                              <Box>
                                <Text
                                  fontSize="24px"
                                  color="#00000"
                                  fontWeight="bold"
                                >
                                  {item.user_count}
                                </Text>
                              </Box>
                              <Button onClick={() => handleUp(item)}>
                                {/*<UpArrow w={10} h={10} />*/}+
                              </Button>
                            </HStack>
                          </VStack>
                        </Box>
                      )}
                    </HStack>
                    <Spacer />
                  </Stack>

                  <HStack paddingTop="24px">
                    <Box>
                      <Text fontSize="15px" color="#0A152C" fontWeight="500">
                        Status
                      </Text>
                      <Text
                        paddingTop="10px"
                        fontSize="15px"
                        color="#4C5467"
                        fontWeight="400"
                      >
                        {" "}
                        {item.status}
                      </Text>
                    </Box>

                    <Box paddingLeft="20px">
                      <Text fontSize="15px" color="#0A152C" fontWeight="500">
                        Created
                      </Text>
                      <Stack
                        direction="row"
                        paddingTop="10px"
                        verticalAlign="middle"
                      >
                        <SimpleClock />
                        <Text
                          color="#4C5467"
                          paddingLeft="0px"
                          fontWeight="500"
                          fontSize="13px"
                        >
                          {new Date(item.time_created * 1000).toLocaleString()}
                        </Text>
                      </Stack>
                    </Box>
                  </HStack>
                </GridItem>
                <Center>
                  <GridItem
                    pl={{ base: "6px", lg: "6px", md: "6px", sm: "0px" }}
                  >
                    <Box pt={{ base: "5px", lg: "5px", md: "5px", sm: "0px" }}>
                      <Text fontSize="13px" color="rgba(10, 23, 60, 0.68)">
                        {item.description}
                      </Text>
                    </Box>
                  </GridItem>
                </Center>
              </Grid>
            );
          })}
      </Container>

      <Box ref={finalRef} tabIndex={-1} aria-label="Vote This NFT"></Box>
    </>
  );
};

export default ProposalList;
