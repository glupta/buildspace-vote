import React, { useContext } from "react";
import { Button } from "@chakra-ui/react";
import useWalletConnect from '../utils/useWalletConnect';
import { UserContext } from '../contexts/UserContext';

const ConnectWalletButton = () => {
  const { state } = useContext(UserContext);
  const wallet = useWalletConnect();

  const handleClick = async () => {
    wallet.then((res) => {
      if (state.address == null) {
        res.connectWallet(true);
      } else {
        res.disconnectWallet();
      }
    });
  }

  return (
    <Button
      width="135"
      height="32px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      borderRadius="100px"
      fontSize="14px"
      fontWeight="semibold"
      bg="linear-gradient(90deg, #CB5EEE 0%, #4BE1EC 100%)"
      padding="8px 20px"
      color="#FFFF"
      _hover={{ bg: "#ebedf0", color: "#6699FF" }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        borderColor: "#bec3c9",
      }}
      _focus={{
        boxShadow: "none",
      }}
      onClick={handleClick}
    >
      {state.address == null ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
};

export default ConnectWalletButton;
