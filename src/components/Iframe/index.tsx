import { Center } from "@chakra-ui/react";
import React, { useState } from "react";

const Iframe = ({
  src,
  width,
  height,
}: {
  src: string;
  width: string;
  height: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  //   if (!isLoaded) {
  //     return (
  //       <Center>
  //         <h1>Loading...</h1>
  //       </Center>
  //     );
  //   }

  return (
    <iframe
      src={src}
      width={width}
      height={height}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default Iframe;
