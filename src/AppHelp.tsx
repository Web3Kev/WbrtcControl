import { Box, Code, Heading, Text } from "@chakra-ui/react";

function AppHelp() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      margin={"auto auto"}
      width={"100%"}
      height={"100%"}
    >
      <Heading mb={"4"}>Missing parameters</Heading>
      <Text mb={"2"}>
        to use the webapp, please provide a valid url to an{" "}
        <strong>UNLOCKED</strong> Whereby room created on the Embedded plan.
      </Text>
      <Code>{window.location.href}?roomUrl=&lt;whereby_room_url&gt;</Code>
      <Text mt={"4"} mb={"2"}>
        To join as master, please also include
      </Text>
      <Code>
        {window.location.href}?roomUrl=&lt;whereby_room_url&gt;&master=true
      </Code>
    </Box>
  );
}

export default AppHelp;
