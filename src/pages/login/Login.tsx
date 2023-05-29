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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../state/features/auth/authSlice";
import { useAppSelector } from "../../state/store";

function Login() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  console.log("isAuthenticated", isAuthenticated);

  const onSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // Dispatch the action to update the authentication state
        dispatch(setAuthenticated());
        history.push("/dashboard");
        setIsLoading(false);
        // ...
      })
      .catch((error) => {
        setIsLoading(false);

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <Flex
      minH={"100vh"}
      direction={{ base: "column-reverse", md: "row" }}
      align={{ base: "center", md: "stretch" }}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Box
        width={{ base: "100%", md: "50%" }}
        bgPosition="center"
        bgSize="cover"
      >
        <Image src={require("../../assets/login.png")} alt="login image" />
      </Box>

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
            <Box>
              <Image src={require("../../assets/logo.png")} alt="logo" />
            </Box>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>
            </Text>
          </Stack>
          <Box>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
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
                isLoading={isLoading}
                onClick={onSubmit}
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
    </Flex>
  );
}

export default Login;
