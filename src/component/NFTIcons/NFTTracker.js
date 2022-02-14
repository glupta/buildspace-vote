import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import NFTConnectIcon from "./NFTConnectIcon";
import NFTFoundIcon from "./NFTFoundIcon";
import NFTNotFoundIcon from "./NFTNotFoundIcon";
import NFTLoadingIcon from "./NFTLoadingIcon";

const NFTTracker = () => {
  const { state } = useContext(UserContext);
  
  return (
    <>
    {!state.address ?
      <NFTConnectIcon />
      : state.loadingNft ?
      <NFTLoadingIcon />
      : state.allUri.length > 0 ?
      <NFTFoundIcon />
      : <NFTNotFoundIcon />
    } 
    </>
  )
};

export default NFTTracker;
