import React from "react";
import {
  Container,
  VStack
} from "@chakra-ui/react";
import LandingContent from "../component/LandingContent";
import ProposalList from "../component/ProposalList";

const LandingPage = () => {

  return (
    <Container maxW="container.lg" centerContent>
      <VStack pt="24px" spacing={4}>
        <LandingContent />
        <ProposalList/>
      </VStack>
    </Container>
  );
};

export default LandingPage;
