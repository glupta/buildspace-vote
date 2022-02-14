import React, { useContext } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { UserContext } from '../contexts/UserContext';

import axios from 'axios';

const SubmitUpVoteButton = (proposal) => {
    const { state, update } = useContext(UserContext);

    const handleSubmit = async () => {
        const votePower = state.nftCount * 5;
        const voteRemaining = votePower - state.userVoteCount;
        if (voteRemaining <= 0) {
            console.log("No more votes");
            return;
        }
        const json = JSON.stringify({
            proposal_id: proposal.proposal.proposal_id,
            user_address: state.address,
            vote_count: proposal.proposal.user_count + 1
        });
        console.log("submit up", proposal.proposal, json);
        
        const response = await axios.post("https://u7ou8g3qz8.execute-api.us-east-1.amazonaws.com/submitProposalVote", json, {
            headers: {
              "Content-Type": "application/json",
            },
        });
        console.log("response up", response);
        if (response.data && response.data.successful) {
            update({ userVoteCount: state.userVoteCount + 1 });
        }
      }
        
    return (
        <Button colorScheme='blue' onClick={() => handleSubmit(proposal)}>
        </Button>
    )
};

export default SubmitUpVoteButton;