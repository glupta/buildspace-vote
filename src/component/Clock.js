import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import ClockIcon from "./ClockIcon";
import useLoadProposals from "../utils/useLoadProposals";

const Clock = () => {
  const loadProposals = useLoadProposals();
  const [timeValues, setTimeValues] = useState();

  const refreshTimer = () => {
    loadProposals.then((res) => {
      if (res.proposalData && res.proposalData.time_expiration) {
        let elapsed = Math.floor(
          (res.proposalData.time_expiration - Date.now()) / 1000
        );
        setTimeValues({
          day: Math.floor(elapsed / 86400),
          hour: Math.floor((elapsed % 86400) / 3600),
          min: Math.floor((elapsed % 3600) / 60),
          sec: Math.floor(elapsed % 60),
        });
      }
    });
  };

  useEffect(() => {
    clearInterval(refreshTimer);
    setInterval(refreshTimer, 1000);
  }, [loadProposals]);

  return (
    <>
      {timeValues && (
        <>
          <ClockIcon />
          <Text
            color="#6699FF"
            pl="4px"
            fontWeight="bold"
            fontSize="12px"
            pt="4px"
          >
            {timeValues.day}d {timeValues.hour}h {timeValues.min}m {timeValues.sec}s
          </Text>
        </>
      )}
    </>
  );
};

export default Clock;
