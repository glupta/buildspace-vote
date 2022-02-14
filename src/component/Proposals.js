import { Box, Text, HStack, Center, Flex, Spacer, Heading} from '@chakra-ui/react';

function Feature({ title, desc, ...rest }) {
    return (
      <Box
        p={5}
        shadow='md'
        borderWidth='1px'
        flex='1'
        borderRadius='md'
        {...rest}
      >
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }
  
  function Proposals() {
    return (
      <HStack spacing={8}>
        <Feature
          title='Create a PFP NFT'
          desc='Open'
        />
        <Feature
          title='Hosta A Confrence In Africa'
          desc='Open'
        />
      </HStack>
    )
  }
  
  export default Proposals;