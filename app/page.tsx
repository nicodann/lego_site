

import { Flex, Heading } from "@chakra-ui/react";
import Sets from "./components/Sets";

export default function Home() {
  return (
    <Flex as='main'  direction='column' gap={12} alignItems='center' justify='center' minH='full'>
      <Heading as='h1'>Lego Site</Heading>
      <Sets />
    </Flex>
  );
}
