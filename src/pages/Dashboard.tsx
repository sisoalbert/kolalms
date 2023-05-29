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
  SimpleGrid,
  Divider,
  HStack,
  Image,
  Container,
} from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Link as NavLink } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import logo from "../assets/logoM.png";
import NavBar from "../components/NavBar/NavBar";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  const [userId, setUserId] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        console.log("userId", user.email);

        setUserId(userId);
      } else {
        setUserId(null);
      }
    });

    // Clean up the subscription when the component is unmounted
    return () => unsubscribe();
  }, []);
  const CustomNav = () => {
    return (
      <Flex>
        <Box>
          {userId ? <p>User ID: {userId}</p> : <p>User not authenticated</p>}
          {/* Your app content */}
        </Box>
      </Flex>
    );
  };
  const courses = [
    {
      id: 1,
      title: "Course 1",
      author: "Author 1",
      description: "Course 1 description",
      image: "http://placekitten.com/g/300/200",
    },
    {
      id: 2,
      title: "Course 2",
      author: "Author 2",
      description: "Course 2 description",
      image: "http://placekitten.com/g/300/200",
    },
    {
      id: 3,
      title: "Course 3",
      author: "Author 2",
      description: "Course 2 description",
      image: "http://placekitten.com/g/300/200",
    },
    {
      id: 4,
      title: "Course 4",
      author: "Author 2",
      description: "Course 2 description",
      image: "http://placekitten.com/g/300/200",
    },
  ];

  const boxStyles = {
    p: "10px",
    ":hover": {
      color: "black",
      backgroundColor: "#e6e6e6",
    },
    // filter: "blur(2px)",
  };

  function Courses() {
    return (
      <SimpleGrid
        spacing={10}
        minChildWidth="300px"
        width="100%"
        autoFlow="row dense"
      >
        {courses.map((course) => (
          <NavLink to="/media">
            <Box
              sx={boxStyles}
              key={course.id}
              // borderTop="8px"
              // borderColor="#0B5CFF"
              bg="white.100"
              maxW="sm"
              width="100%"
              mx="auto"
              boxSizing="border-box"
            >
              <Image src={course.image} alt={course.title} w="100%" />
              <Box color="gray.700">
                <Heading as="h3" size="sm">
                  {course.title}
                </Heading>
                <Text>by {course.author}</Text>
              </Box>

              <Divider borderColor="gray.200" />

              <Box color="gray.500">
                <Text>{course.description}</Text>
              </Box>

              <Box mt="auto">
                <HStack>
                  <Button variant="ghost" leftIcon={<ViewIcon />}>
                    Watch
                  </Button>
                  <Button variant="ghost" leftIcon={<EditIcon />}>
                    Comment
                  </Button>
                </HStack>
              </Box>
            </Box>
          </NavLink>
        ))}
      </SimpleGrid>
    );
  }

  const BrandHeader = () => {
    return (
      <Box mb={10}>
        <Box bg="purple.200" alignItems="center">
          <Box mt="4" display="flex" p={2} justifyContent="center">
            <Image src={logo} alt="Logo" h={20} />
          </Box>
        </Box>
        <Heading as="h1" size="2xl" fontWeight="bold">
          Welcome back
          {/* {userId} */}
        </Heading>
        <Text mt={4} fontSize="xl" color="blue.500">
          Your courses
        </Text>
        <Text mt={2} fontSize="lg">
          Check out these top hospitality industry courses:
        </Text>
      </Box>
    );
  };

  return (
    <Box p="20px">
      <NavBar />
      <BrandHeader />
      {/* <CustomNav /> */}
      <Courses />
    </Box>
  );
}
