

import { Flex, Heading } from "@chakra-ui/react";
import Sets from "./components/Sets";
import Image from "next/image";

export default function Home() {
  return (
    <Flex as='main'  direction='column' gap={12} alignItems='center' minH='full'>
      <Heading as='h1'>Lego Site</Heading>
      {/* <img src="/images/Bluethreaeds.jpg" alt="blue threads" width={100} height={200}/> */}
      <Sets />
    </Flex>
  );
}
