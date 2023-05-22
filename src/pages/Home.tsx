import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";

function Home() {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl">
        Welcome to My Home
      </Heading>
      <Button colorScheme="blue" mt={4}>
        Click Me
      </Button>
    </Box>
  );
}

export default Home;
