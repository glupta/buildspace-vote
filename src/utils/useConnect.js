import React, {useState, useEffect, useContext, useCallback} from 'react'
import axios from 'axios'
import AppRouter from '../AppRouter';
import { UserContext } from '../UserContext';


export const useToggle = (initialState = false) => {
  // Initialize the state
  const [cstate, setCstate] = useState(initialState);
  
  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value

  const { state, update } = useContext(UserContext);
  const toggle = useCallback(() => setCstate(state => !state), []);

  const connectWallet = async (requestMethod) => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      }
      console.log("We have the ethereum object", ethereum);
      const accounts = await ethereum.request({ method: requestMethod });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        update({ currentAccount: account });
        checkNftExists(account);
        localStorage.setItem('accountId', account);
        update({ connected: true });

        // setValue(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const checkNftExists = async (account) => {
  // const userAccount =  localStorage.getItem('accountId');

    const json = JSON.stringify({
        address: account
      //   address: userAccount
    });
    
    const nftFound = await axios.post('https://q1u7282sh3.execute-api.us-east-1.amazonaws.com/checkUserNFT', json);
    console.log("response", nftFound);
    update({ nftFound: nftFound });
  }

  const loadProposals = async () => {
    const proposals = await axios.get('https://e2yxzz8nm1.execute-api.us-east-1.amazonaws.com/loadDaoProposals');
    console.log("proposals", proposals);
    update({ proposals: proposals.data });
  }

  useEffect(() => {
    alert('Clicked')
    connectWallet("eth_accounts");
    loadProposals();
    console.log("State From Inside", state)
    // setConnect(true);
  }, []);
  
  // return [state, toggle]

  return(  
  [state, toggle]
  // <AppRouter connectWallet={connectWallet}/>
  
  )

}