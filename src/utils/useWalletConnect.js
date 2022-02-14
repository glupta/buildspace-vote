import { useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

const useWalletConnect = async () => {
  const { update } = useContext(UserContext);

  const connectWallet = async (requestConnect = false) => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      }
      console.log("We have the ethereum object", ethereum);

      let accounts = await accessWalletAddress(ethereum, requestConnect);
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        update({ address: account });
        checkNftExists(account);
      } else {
        console.log("No authorized account found");
        disconnectWallet();
      }
    } catch (error) {
      console.log(error);
      disconnectWallet();
    }
  };

  const accessWalletAddress = async (ethereum, requestConnect) => {
    if (requestConnect) {
      return await ethereum.request({
          method: "wallet_requestPermissions",
          params: [{ eth_accounts: {} }],
        })
        .then(() => window.ethereum.request({ method: "eth_requestAccounts" }));
    }
    return await ethereum.request({ method: "eth_accounts" });
  };

  const disconnectWallet = async () => {
    update({ address: null });
    update({ loadingNft: true });
    update({ allUri: [] });
    update({ nftCount: 0});
  };

  const checkNftExists = async (account) => {
    const json = JSON.stringify({
      address: account,
    });

    const response = await axios.post(
      "https://q1u7282sh3.execute-api.us-east-1.amazonaws.com/checkUserNFT",
      json,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response", response);
    if (response.data.nftFound) {
      update({ allUri: response.data.allUris });
      update({ nftCount: response.data.allUris.length });
      update({ loadingNft: false });
    }
  };

  useEffect(() => {
    connectWallet();
  }, []);

  return { connectWallet, disconnectWallet };
};

export default useWalletConnect;
