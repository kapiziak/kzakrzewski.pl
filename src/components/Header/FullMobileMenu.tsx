import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import SocialsStack from "./SocialsStack";

const FullMobileMenu: FC = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const handleCloseMenu = () => setMenuVisible(false);

  return (
    <>
      <IconButton
        aria-label="Open Menu"
        size="md"
        mr={2}
        mt={1}
        icon={<HamburgerIcon />}
        display={["flex", "flex", "none", "none"]}
        onClick={() => setMenuVisible(true)}
      />
      <Drawer
        onClose={() => handleCloseMenu()}
        isOpen={menuVisible}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Flex
              h="100%"
              justifyContent="center"
              alignItems="center"
              position="relative"
            >
              <IconButton
                icon={<SmallCloseIcon />}
                aria-label="Close the menu"
                sx={{ position: "absolute", top: 2, right: 0 }}
                onClick={() => handleCloseMenu()}
              />
              <VStack>
                <Heading
                  as="h2"
                  mb={3}
                  p={3}
                  border="1px solid tomato"
                  borderRadius={4}
                >
                  kzakrzewski.pl
                </Heading>
                <Link to="/" onClick={() => handleCloseMenu()}>
                  Home
                </Link>
                <Link to="/projects" onClick={() => handleCloseMenu()}>
                  Projekty
                </Link>
                <HStack>
                  <ColorModeSwitcher justifySelf="flex-end" />
                  <SocialsStack/>
                </HStack>
              </VStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FullMobileMenu;
