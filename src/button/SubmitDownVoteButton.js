import React, { useContext } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { UserContext } from '../contexts/UserContext';

import axios from 'axios';

const SubmitDownVoteButton = (proposal) => {
    const { state, update } = useContext(UserContext);

    const handleSubmit = async () => {
        const votePower = state.nftCount * 5;
        const voteRemaining = votePower - state.userVoteCount;
        if (proposal.proposal.user_count == 0 || voteRemaining >= votePower) {
            console.log("Add more votes");
            return;
        }
        const json = JSON.stringify({
            proposal_id: proposal.proposal.proposal_id,
            user_address: state.address,
            vote_count: proposal.proposal.user_count - 1
        });
        console.log("submit down", proposal.proposal, json);
        
        const response = await axios.post("https://u7ou8g3qz8.execute-api.us-east-1.amazonaws.com/submitProposalVote", json, {
            headers: {
              "Content-Type": "application/json",
            },
        });
        console.log("response down", response);
        if (response.data && response.data.successful) {
            update({ userVoteCount: state.userVoteCount - 1 });
        }
      }
        
    return (
        <Button colorScheme='blue' onClick={handleSubmit}>
        </Button>
    )
};

export default SubmitDownVoteButton;