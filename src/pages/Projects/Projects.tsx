import {
  Box,
  Heading,
} from "@chakra-ui/react";
import React, { FC } from "react";
import Timeline from "../../components/Timeline/Timeline";

const Projects: FC = () => {
  return (
    <div className="page-wrapper">
      <Box mt={10}>
        <Heading as="h1" mb={10}>
          Projekty
        </Heading>
        <Timeline />
        <Heading as="h2" size="md" textAlign="center" mt={10}>... i 2013.</Heading>
        <Heading as="h3" size="sm" textAlign="center" mt={2}>Pierwszy kod w PAWN i PHP 😊</Heading>
      </Box>
    </div>
  );
};

export default Projects;
