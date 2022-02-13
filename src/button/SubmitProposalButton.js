import { React } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubmitProposalButton = ({ formValue }) => {
    let navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { title, description } = formValue;
    
        const json = JSON.stringify({
            title: title,
            description: description
        });
        
        const response = await axios.post('https://v80t5r85fd.execute-api.us-east-1.amazonaws.com/createDaoProposal', json);
        console.log("response", response);
        navigate('/');
      }
        
    return (
        <Box w='100%' p={4} color='white'>
            <Button colorScheme='blue' onClick={handleSubmit}>
                Submit
            </Button>
        </Box>
    )
};

export default SubmitProposalButton;