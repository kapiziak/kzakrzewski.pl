import * as React from "react";
import {
  ChakraProvider,
  theme,
  Container,
  Flex,
} from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import "./App.scss";
import Footer from "./components/Footer/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex minHeight="100vh" flexDirection="column">
      <Header />
      <Container className="container" maxW="container.lg" p={2}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
      <Footer/>
    </Flex>
  </ChakraProvider>
);
