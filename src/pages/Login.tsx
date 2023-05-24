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
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

function Login() {
  return (
    <Flex
      minH={"100vh"}
      align={{ base: "center", md: "stretch" }}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
        width={{ base: "100%", md: "50%" }}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Box boxSize="sm">
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>

      <Box
        bgImage="url('../assets/login.png')" // Replace with your image path
        bgSize="cover"
        bgPosition="center"
        width={{ base: "100%", md: "50%" }}
      />
    </Flex>
  );
}

export default Login;
