import { Container, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import SocialsStack from "../Header/SocialsStack";

const Footer: FC = () => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      maxW="container.lg"
      pt={50}
      pb={25}
      px={2}
      mt="auto"
    >
      <Flex justifyContent="space-between" wrap="wrap" alignItems="center">
        <Text fontSize="sm" title="using Chakra-UI & Font Awesome 5">
          &copy; {new Date().getFullYear()} Kacper Zakrzewski
        </Text>
        <Flex gap={2} alignItems="center">
            <SocialsStack/>   
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
