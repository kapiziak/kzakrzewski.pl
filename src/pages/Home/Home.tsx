import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { FC } from "react";
import EmojiSpinner from "../../components/EmojiSpinner/EmojiSpinner";
import itsme from "../../assets/img/itsme.png";
import BoldLink from "../../components/BoldLink/BoldLink";

const Home: FC = () => {

  return (
    <div className="page-wrapper">
      <Grid textAlign="center" p={3} mt={20}>
        <Heading as="h1" size="2xl">
          Kacper Zakrzewski
        </Heading>
        <Heading as="h2" size="lg" mt={1}>
          Web Developer do usług!
        </Heading>
        <Text fontSize="6xl" mt={3}>
          <EmojiSpinner />
        </Text>
      </Grid>
      <Box mt={20}>
        <Heading as="h2">O mnie</Heading>
        <Grid templateColumns={{ md: "repeat(2,1fr)" }} gap={2}>
          <GridItem>
            <Text mt={2}>
              Programowaniem interesuję się od 9 lat. Moją pasją jest poznawanie
              nowych technologii i używanie ich, aby życie stało się prostsze.
              Jestem osobą otwartą na współpracę oraz na samoudoskonalanie
              swoich umiejętności.
            </Text>
          </GridItem>
          <GridItem>
            <Image
              display="flex"
              mt={{ sm: 5, md: 0 }}
              ml="auto"
              mr="auto"
              borderRadius="5px"
              src={itsme}
              alt="Dan Abramov"
              maxWidth="50%"
              shadow="xl"
            />
          </GridItem>
        </Grid>
      </Box>
      <Box mt={20}>
        <Heading as="h2">Stack</Heading>
        <Flex mt={5} gap={3} wrap="wrap" justifyContent={["center", "center", "start", "start"]}>
          <Button colorScheme="orange">WordPress</Button>
          <Button colorScheme="cyan">PHP</Button>
          <Button colorScheme="yellow">JavaScript</Button>
          <Button colorScheme="blue">TypeScript</Button>
          <Button>Node.js</Button>
          <Button colorScheme="facebook">React.js</Button>
        </Flex>
      </Box>
      <Box mt={20}>
        <Heading as="h2">Projekty</Heading>
        <Text mt={2}>
          O moich projektach dowiesz się więcej <BoldLink to="/projects" text="tutaj" />.
        </Text>
      </Box>
    </div>
  );
};

export default Home;
