import { useState, useEffect, useContext } from 'react';
import { UserContext } from "../contexts/UserContext";
import axios from 'axios';

const useLoadProposals = async () => {
  const { update } = useContext(UserContext);

  const loadProposals = async (address) => {
    let request = "https://e2yxzz8nm1.execute-api.us-east-1.amazonaws.com/loadDaoProposals";
    if (address) {
      request += "?address=" + address;
    }
    let response = await axios.get(request);
    console.log("proposals", request, response);
    if (response && response.data) {
      update({ allProposals: response.data.results });
      update({ timeExpiration: response.data.time_expiration });
      update({ userVoteCount: response.data.user_count });
    }
  }

  // useEffect(() => {
  //   loadProposals();
  // }, []);

  return { loadProposals };
}

export default useLoadProposals;