import React from "react";
import {
  Container,
  useBreakpointValue,
  VStack,
  Divider,
} from "@chakra-ui/react";
import LandingContent from "../component/LandingContent";
import ProposalList from "../component/ProposalList";

const LandingPage = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <Container maxW="container.lg" centerContent>
      <VStack pt="24px" spacing={4}>
        <LandingContent />
        <ProposalList paddingTop="16px" />
      </VStack>
    </Container>
  );
};

export default LandingPage;
