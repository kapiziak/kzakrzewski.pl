import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { StarIcon } from "@chakra-ui/icons";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import FullMobileMenu from "./FullMobileMenu";
import SocialsStack from "./SocialsStack";
import { HouseIcon } from "../Icons/HouseIcon";

const Header = () => {
  return (
    <Box>
      <Container maxW="container.lg" p={2}>
        <Flex justifyContent="space-between">
          <Link to="/">
            <Flex
              flexDirection="row"
              alignItems="center"
              className={styles.hoverableHeading}
            >
              <StarIcon mt={2} mr={2} />
              <Heading
                as="h1"
                size="lg"
                display="flex"
                alignItems="center"
                mt={2}
              >
                kzakrzewski.pl
              </Heading>
            </Flex>
          </Link>
          <div>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              display={["none", "none", "flex", "flex"]}
            >
              <Link to="/" style={{marginTop: "auto"}}>
                <IconButton
                  size="md"
                  fontSize="lg"
                  variant="ghost"
                  color="current"
                  icon={<HouseIcon />}
                  aria-label="Close the menu"
                />
              </Link>
              <Link to="/projects">
                <Button variant="ghost" mt={0}>
                  Projekty
                </Button>
              </Link>

              <SocialsStack />
              <ColorModeSwitcher justifySelf="flex-end" />
            </Stack>

            <FullMobileMenu />
          </div>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
