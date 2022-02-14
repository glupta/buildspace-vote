// import { React, useState, Component, useContext, useEffect } from "react";
// import axios from "axios";
// import {
//   Box,
//   Text,
//   Center,
//   AvatarGroup,
//   Avatar,
//   Heading,
//   HStack,
//   Container,
//   Flex,
//   Grid,
//   GridItem,
//   SimpleGrid,
//   ButtonGroup,
//   Stack,
//   Spacer,
//   IconButton,
//   Button
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import BackButton from "../button/BackButton";
// import SubmitVoteButton from "../button/SubmitVoteButton";
// import Heart from "../component/Heart";
// import Fire from "../component/Fire";
// import BackArrow from "../component/BackArrow";
// import SimpleClock from "../component/SimpleClock";
// import Photo1 from "../assets/avatars/1.png";
// import Photo2 from "../assets/avatars/2.png";
// import Photo3 from "../assets/avatars/3.png";

// const ViewProposal = () => {
//   let navigate = useNavigate();
//   const { state, update } = useContext(UserContext);
//   const [voted, setVoted] = useState(false);

//   useEffect(() => {
//     console.log("Proposal Data", state.currentProposal);

//     if (!state.currentProposal) {
//       navigate(`/`);
//     }
//   }, []);
//   const submitVote = async (event) => {
//     event.preventDefault();
//     // const { title, description } = formValue;
//     // const userAccount =  localStorage.getItem('accountId');
//     // const json = JSON.stringify({
//     //      proposal_id: state.currentProposal.proposal_id,
//     //      user_id: userAccount
//     // });

//     // const response = await axios.post('https://u7ou8g3qz8.execute-api.us-east-1.amazonaws.com/submitProposalVote', {
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     },json
//     // });
//     // console.log("response", response);
//     // navigate('/');
//     const userAccount = localStorage.getItem("accountId");

//     var data = JSON.stringify({
//       proposal_id: state.currentProposal.proposal_id,
//       user_address: userAccount,
//     });

//     var config = {
//       method: "post",
//       url: "https://u7ou8g3qz8.execute-api.us-east-1.amazonaws.com/submitProposalVote",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: data,
//     };

//     axios(config)
//       .then(function (response) {
//         // setVoted(response.data.vote_count)
//         console.log("Vote Response", response.data);

//         if (response.data == "User already voted") {
//           console.log("You already voted for this proposal");
//         }
//         // update({ currentProposal: state.currentProposal });

//         console.log("Context Updated");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//       {state.currentProposal && (
//         <>
//         <br/>
//         <br/>
//           <Container
//             maxW="container.lg"
//             backgroundColor="#FFFFFF"
//             boxShadow="0px 20px 60px rgba(10, 21, 44, 0.04)"
//             borderRadius="16px"
//             width="73.5%" 
//           >
//             <Grid
//               templateColumns="repeat(2, 1fr)"
//               gap={4}
//               paddingTop={55}
//               paddingLeft={8}
//               paddingRight={8}
//               paddingBottom={15}
//             >
//               <GridItem borderRight="solid 1px #DBDEE7">
//                 <HStack>
//                   <BackArrow /> <BackButton />
//                 </HStack>
//                 <Box paddingTop={45}>
//                   <Text
//                     fontSize="18px"
//                     fontWeight="bold"
//                     color="#A152C"
//                     lineHeight="48px"
//                   >
//                     {" "}
//                     {state.currentProposal.title}
//                   </Text>
//                 </Box>
//                 <HStack paddingTop="85px">
//                   <Box>
//                     <Text fontSize="15px" color="#0A152C" fontWeight="500">
//                       Status
//                     </Text>
//                     <Text
//                       paddingTop="10px"
//                       fontSize="15px"
//                       color="#4C5467"
//                       fontWeight="400"
//                     >
//                       {" "}
//                       {state.currentProposal.status}
//                     </Text>
//                   </Box>

//                   <Box paddingLeft="20px">
//                     <Text fontSize="15px" color="#0A152C" fontWeight="500">
//                       Created
//                     </Text>
//                     <Stack
//                       direction="row"
//                       paddingTop="10px"
//                       verticalAlign="middle"
//                     >
//                       <SimpleClock />
//                       <Text
//                         color="#4C5467"
//                         paddingLeft="0px"
//                         fontWeight="500"
//                         fontSize="13px"
//                       >
//                         2019-12-06, 01:27
//                       </Text>
//                     </Stack>
//                   </Box>
                  
//                 </HStack>

//                 <Flex height="40px" paddingTop="50px">
//                   <HStack width='300px'>
//                   <AvatarGroup size="sm" max={3} spacing="-10px" loading="lazy">
//                     <Avatar src={Photo1} />
//                     <Avatar src={Photo2} />
//                     <Avatar name="G" />
//                   </AvatarGroup>
//                   <Text
//                     fontSize="14px"
//                     color="#6699FF"
//                     fontWeight="400"
//                     textDecoration="underline"
                  
//                   >
//                     {state.currentProposal.vote_count == "1" ? (
//                       <>{state.currentProposal.vote_count} vote </>
//                     ) : (
//                       <>{state.currentProposal.vote_count} votes </>
//                     )}
//                   </Text>
                  

//                   </HStack>
//                   <Spacer />

       
                    
// <HStack paddingRight='70px'>
// <Button 
//                     paddingTop='6px'
//                     paddingBottom='2'
//                     paddingRight='22px'
//                     paddingLeft='15px'
//                     border='solid 1px #DFE2EA'
//                     boxShadow='0px 20px 60px rgba(10, 21, 44, 0.04)' 
//                     borderRadius='22px' 
//                     verticalAlign='middle'
//                     bg='white'

//                     fontSize='14px'
//                     _hover={{
//                       background: "white",
//                       color: "#6699FF",
//                     }}
//                     _focus={{boxShadow: "none",
//                     background: "white",

//                   }}

//                       leftIcon={<Fire />}
//                       >
//                    Submit Vote
//                     </Button>
// </HStack>
//                 </Flex>
//                 <Box paddingTop={45}>
//                   {state.currentProposal.status === "OPEN" ? (
//                     <SimpleGrid minChildWidth="160px" spacing="40px">
//                       <Box height="80px">
//                         <Heading color="rgba(10, 23, 60, 0.68)" fontSize="18px">
//                           Are you hyped for this?
//                         </Heading>
//                       </Box>
//                       <Box height="80px">
//                         <Center>
//                           {/* <Heart color={state.currentProposal.voter_adresses} onClick={submitVote} /> */}
//                           <Heart color="red" onClick={submitVote} />
//                         </Center>
//                       </Box>
//                       <Box height="80px">
//                         <Heading
//                           color="rgba(127, 90, 213, 0.8)"
//                           fontSize="26px"
//                           fontWeight="extrabold"
//                         >
//                           {state.currentProposal.vote_count}{" "}
//                           {state.currentProposal.vote_count == "1" ? (
//                             <>Vote </>
//                           ) : (
//                             <>Votes </>
//                           )}
//                         </Heading>
//                       </Box>
//                     </SimpleGrid>
//                   ) : (
//                     <>
//                       {/* <Heading fontSize="14px">
//                         Status: {state.currentProposal.status}
//                       </Heading> */}
//                     </>
//                   )}
//                 </Box>
//               </GridItem>
//               <GridItem paddingLeft={6}>
//                 <Box paddingTop="5px">
//                   {" "}
//                   <Text fontSize="13px" color="rgba(10, 23, 60, 0.68)" >
//                     {state.currentProposal.description}
//                   </Text>
//                 </Box>
//               </GridItem>
//             </Grid>

//             {/* </Box> */}
//             {/* <SubmitVoteButton /> */}
//           </Container>
//         </>
//       )}
//     </>
//   );
// };

// export default ViewProposal;
