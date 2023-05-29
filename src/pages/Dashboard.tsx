import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  //   useEffect(() => {
  //     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //       setUser(user);
  //     });

  //     return unsubscribe;
  //   }, []);

  const CustomNav = () => {
    return (
      <Flex>
        <Box>
          <Text>{"Email:"}</Text>
        </Box>
      </Flex>
    );
  };

  return (
    <Flex>
      <CustomNav />
      <Text>D</Text>
    </Flex>
  );
}
