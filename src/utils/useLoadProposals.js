import { useState, useEffect } from 'react';
import axios from 'axios';

const useLoadProposals = async () => {
  const [proposalData, setProposalData] = useState();
  const [loading, setLoading] = useState(false);

  const loadProposals = async (address) => {

    if (!address && loading) {
      console.log("Already loading");
      return;
    }

    setLoading(true);
    let response = await axios.get('https://e2yxzz8nm1.execute-api.us-east-1.amazonaws.com/loadDaoProposals', {
      params: {
        address: address
      }
    });
    console.log("proposals", response);
    setProposalData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    loadProposals();
  }, []);

  return { proposalData, loadProposals };
}

export default useLoadProposals;