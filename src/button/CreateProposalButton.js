import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CreateProposalButton = () => {
    let navigate = useNavigate();

    return (
        <Box w='100%' p={4} color='white'>
            <Button colorScheme='blue' onClick={() => navigate('/createProposal')}>
                Create Proposal
            </Button>
        </Box>
    )
}

export default  CreateProposalButton;