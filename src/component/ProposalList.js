import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Container,
  Avatar,
  AvatarGroup,
  HStack,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import useLoadProposals from "../utils/useLoadProposals";
import Photo1 from "../assets/avatars/1.png";
import Photo2 from "../assets/avatars/2.png";
import Photo3 from "../assets/avatars/3.png";

const ProposalList = () => {
  const [proposals, setProposals] = useState([]);

  let navigate = useNavigate();
  const finalRef = React.useRef();
  const loadProposals = useLoadProposals();

  const handleClick = async (item) => {
    console.log(item);
    //update({ currentProposal: item });
    navigate(`/viewProposal/${item.proposal_id}`);
  };

  useEffect(() => {
    loadProposals.then((res) => {
      if (res.proposalData && res.proposalData.results) {
        setProposals(res.proposalData.results);
      }
    });
  }, [loadProposals]);

  return (
    <>
      <Container maxW="container.lg">
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          paddingTop={5}
          paddingLeft={2}
          paddingRight={4}
        >
          {proposals && proposals.map((item) => {
              return (
                <GridItem key={item.proposal_id}>
                  <Box
                    bg="#FFFF"
                    width="305px"
                    height="200px"
                    maxW="md"
                    borderRadius="16px"
                    overflow="hidden"
                    p="5"
                    boxShadow="0px 20px 30px rgba(10, 21, 44, 0.04)"
                  >
                    <Text align="right" fontSize="12px">
                      {item.status}
                    </Text>

                    <Box m={[2, 3]} height="35px">
                      <Text
                        fontSize="13px"
                        paddingTop="6px"
                        fontWeight="semibold"
                      >
                        {item.title}
                      </Text>
                    </Box>
                    <HStack m={[2, 3]} height="40px" paddingTop="10px">
                      <AvatarGroup
                        size="xs"
                        max={3}
                        spacing="-10px"
                        loading="lazy"
                      >
                        <Avatar src={Photo1} />
                        <Avatar src={Photo2} />
                        <Avatar name="G" />
                      </AvatarGroup>
                      <Text fontSize="10px" color="#6699FF" fontWeight="700">
                        {item.voote_count == "1" ? (
                          <>{item.vote_count} Vote </>
                        ) : (
                          <>{item.vote_count} Votes </>
                        )}
                      </Text>
                    </HStack>

                    <Box m={[2, 3]} paddingTop="5px">
                      <Box
                        as="button"
                        fontSize="10px"
                        fontWeight="600"
                        width="100%"
                        borderRadius="100"
                        height="30px"
                        color="#0A152C"
                        border="1px solid #DBDEE7 "
                        bg="#FFF"
                        _hover={{
                          bg: "linear-gradient(90deg, #6699FF 0%, #FF3366 100%)",
                          border: "0px",
                          color: "#FFFF",
                        }}
                        _active={{
                          bg: "#dddfe2",
                          transform: "scale(0.98)",
                          borderColor: "#bec3c9",
                        }}
                        _focus={{
                          boxShadow:
                            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                        }}
                        onClick={() => handleClick(item)}
                      >
                        View Details
                      </Box>
                    </Box>
                  </Box>
                </GridItem>
              );
            })}
        </Grid>
      </Container>

      <Box ref={finalRef} tabIndex={-1} aria-label="Vote This NFT"></Box>

   
    </>
  );
};

export default ProposalList;
