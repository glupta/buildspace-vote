import React, { useEffect, useState, useContext } from "react";
import { Text, Stack } from "@chakra-ui/react";
import { UserContext } from "../contexts/UserContext";
import { Icon } from "@chakra-ui/react";

const Clock = () => {
  const [timeValues, setTimeValues] = useState();
  const { state } = useContext(UserContext);

  const refreshTimer = () => {
    if (state.timeExpiration) {
      let elapsed = Math.floor((state.timeExpiration - Date.now()) / 1000);
      setTimeValues({
        day: Math.floor(elapsed / 86400),
        hour: Math.floor((elapsed % 86400) / 3600),
        min: Math.floor((elapsed % 3600) / 60),
        sec: Math.floor(elapsed % 60),
      });
    }
  };

  const ClockIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="24"
      fill="none"
      viewBox="0 0 22 24"
    >
      <path
        fill="#69F"
        d="M10.461 4.819c-5.288 0-9.59 4.302-9.59 9.59C.87 19.698 5.173 24 10.46 24c5.289 0 9.59-4.302 9.59-9.59 0-5.289-4.301-9.591-9.59-9.591zm0 17.31c-4.256 0-7.72-3.463-7.72-7.72.001-4.256 3.464-7.719 7.72-7.719 4.257 0 7.72 3.463 7.72 7.72 0 4.256-3.463 7.719-7.72 7.719zM7.61 2.807a2.807 2.807 0 015.614-.006.936.936 0 11-1.871 0 .937.937 0 00-1.871.006.936.936 0 11-1.872 0zm13.246 4.687a.933.933 0 01-1.323 0l-2.339-2.34a.936.936 0 011.323-1.323l2.34 2.34a.936.936 0 010 1.323zm-7.593 2.79l-2.723 2.724a1.404 1.404 0 101.323 1.323l2.724-2.723a.935.935 0 10-1.324-1.323z"
      ></path>
    </svg>
  );

  useEffect(() => {
    clearInterval(refreshTimer);
    setInterval(refreshTimer, 1000);
  }, [state.timeExpiration]);

  return (
    <>
      {timeValues && (
        <Stack
          direction="row"
          paddingTop="15px"
          verticalAlign="middle"
          alignSelf="right"
          justify="center" 
          align="center"
        >
          <Icon as={ClockIcon} w="30" h="30" />
          <Text
            color="#6699FF"
            pl="4px"
            fontWeight="bold"
            fontSize="14px"
            pt="4px"
          >
            {timeValues.day}d {timeValues.hour}h {timeValues.min}m{" "}
            {timeValues.sec}s
          </Text>
        </Stack>
      )}
    </>
  );
};

export default Clock;
