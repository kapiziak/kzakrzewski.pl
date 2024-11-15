import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import ja from "../../assets/img/ja.webp";
import BoldLink from "../../components/BoldLink/BoldLink";
import EmojiSpinner from "../../components/EmojiSpinner/EmojiSpinner";

const ImageElement: FC = () => (
  <Image
    display="flex"
    mt={{ sm: 5, md: 0 }}
    ml="auto"
    mr="auto"
    borderRadius="5px"
    src={ja}
    alt="Kacper Zakrzewski - to ja! :)"
    maxWidth="50%"
    shadow="xl"
  />
);

const Home: FC = () => {
  return (
    <div className="page-wrapper">
      <Grid textAlign="center" p={3} mt={20}>
        <Heading as="h1" size="2xl">
          Kacper Zakrzewski
        </Heading>
        <Heading
          as="h2"
          size="lg"
          mt={1}
          title={"+I will do everything you want :)"}
        >
          Full-stack Developer do usług!
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
              Programowaniem interesuję się od {new Date().getFullYear() - 2013}{" "}
              lat. Moją pasją jest poznawanie nowych technologii i używanie ich,
              aby życie stało się prostsze. Jestem osobą otwartą na współpracę
              oraz na samoudoskonalanie swoich umiejętności.
            </Text>
            <Box mt={10} display={["block", "block", "none", "none"]}>
              <ImageElement />
            </Box>
            <Box mt={10}>
              <Heading as="h2">Stack</Heading>
              <Flex
                mt={5}
                gap={3}
                wrap="wrap"
                justifyContent={["center", "center", "start", "start"]}
              >
                <Button colorScheme="gray">Next.js</Button>
                <Button colorScheme="yellow">Node.js</Button>
                <Button colorScheme="blue">TypeScript</Button>
                <Button colorScheme="facebook">React.js</Button>
                <Button colorScheme="cyan">Docker</Button>
                <Button colorScheme="orange">WordPress</Button>
                <Button colorScheme="cyan">PHP</Button>
              </Flex>
            </Box>
          </GridItem>
          <GridItem display={["none", "none", "block", "block"]}>
            <ImageElement />
          </GridItem>
        </Grid>
      </Box>

      <Box mt={20}>
        <Heading as="h2">Projekty</Heading>
        <Text mt={2}>
          O moich projektach dowiesz się więcej{" "}
          <BoldLink to="/projects" text="tutaj" />.
        </Text>
      </Box>
    </div>
  );
};

export default Home;
