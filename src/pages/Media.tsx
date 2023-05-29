import React from "react";
import ReactPlayer from "react-player/youtube";
import { Center, Box } from "@chakra-ui/react";
// Only loads the YouTube player
export default function Media() {
  return (
    <Center>
      <>
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
      </>
    </Center>
  );
}
