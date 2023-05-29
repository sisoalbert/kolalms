import React from "react";
import ReactPlayer from "react-player/youtube";
import { Center, Box, Button, Flex } from "@chakra-ui/react";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { setUnauthenticated } from "../../state/features/auth/authSlice";
// Only loads the YouTube player
export default function Media() {
  const dispatch = useDispatch();
  const handleSignout = () => {
    auth
      .signOut()
      .then(() => {
        // User is signed out
        dispatch(setUnauthenticated());
      })
      .catch((error) => {
        // An error happened
        console.log(error);
      });
  };
  return (
    <Center>
      <Flex flexDirection={"column"} alignItems={"center"} gap={4}>
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        {/* signout button */}
        <Box>
          <Button onClick={handleSignout} colorScheme="red">
            Sign Out
          </Button>
        </Box>
      </Flex>
    </Center>
  );
}
