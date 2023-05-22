import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const ChakraSetup = ({ children }: any) => (
  <ChakraProvider>{children}</ChakraProvider>
);

export default ChakraSetup;
