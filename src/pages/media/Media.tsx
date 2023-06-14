import React from "react";
import ReactPlayer from "react-player/youtube";
import { Center, Box, Button, Flex } from "@chakra-ui/react";
import { auth } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { setUnauthenticated } from "../../state/features/auth/authSlice";
import Iframe from "../../components/Iframe";
import NavBar from "../../components/NavBar/NavBar";
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

  const SignOutBtn = () => {
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
    </Center>;
  };
  return (
    <div>
      <NavBar />

      <Iframe
        src="https://imaginative-frangipane-f62a00.netlify.app/"
        width="100%"
        height="1000"
      />
    </div>
  );
}
