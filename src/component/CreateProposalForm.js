import React, { useState } from 'react';
import { VStack, FormControl, FormLabel, Input } from '@chakra-ui/react';
import SubmitProposalButton from '../button/SubmitProposalButton';

const CreateProposalForm = () => {
  const [formValue, setFormValue] = useState({
    title: "",
    description: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log("form", formValue);
  };

  const { title, description } = formValue;

  return ( 
    <FormControl>
      <VStack spacing={4}>
        <FormLabel>Title</FormLabel>
        <Input name='title' onChange={handleChange} value={title}/>
        <FormLabel>Description</FormLabel>
        <Input name='description' onChange={handleChange} value={description}/>
        <SubmitProposalButton formValue={formValue}/>
      </VStack>
    </FormControl>
  );
}

export default CreateProposalForm;