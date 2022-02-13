import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { UserContext } from '../UserContext';
import { useLocalStorage } from "../utils/checkLocal";

import axios from 'axios';

const SubmitVoteButton = () => {
    let navigate = useNavigate();
    const [name, setName] = useLocalStorage("name", "");
    // setName(e.target.value)}

    const { state, update } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = localStorage.getItem('accountId')
        // alert(userData)
        if (userData) {
            navigate(`/`);
        }
         // const { title, description } = formValue;
    
        // const json = JSON.stringify({
        //     title: title,
        //     description: description
        // });
        
        //const response = await axios.post('https://v80t5r85fd.execute-api.us-east-1.amazonaws.com/createDaoProposal', json);
        //console.log("response", response);
      }
        
    return (
        <Button colorScheme='blue' onClick={handleSubmit}>
            Let's do it!
        </Button>
    )
};

export default SubmitVoteButton;