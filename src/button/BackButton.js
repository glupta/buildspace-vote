import { React } from "react";
import { Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  let navigate = useNavigate();

  return (
    <Box
      as="button"
      width="135"
      height="32px"
      lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      fontSize="16px"
      bg="white"
      color="#6A7385"
      _hover={{
        color: "#6699FF",
      }}
      _active={{
        bg: "#dddfe2",
        transform: "scale(0.98)",
        //   borderColor: "#bec3c9",
      }}
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
      onClick={() => navigate("/")}
    >
      Back
    </Box>
  );
}
