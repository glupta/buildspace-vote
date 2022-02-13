import { React, Component } from 'react';
import { Box } from '@chakra-ui/react';
import BackButton from '../button/BackButton';
import CreateProposalForm from '../component/CreateProposalForm';

export default class CreateProposal extends Component {
    render() {
        return (
            <Box w='100%' p={4}>
                <BackButton />
                <CreateProposalForm />
            </Box>
        );
    }
}