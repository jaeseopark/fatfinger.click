import { ChakraProvider, theme } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Services from "./Services";
import Footer from "./Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Services />
    <Footer />
  </ChakraProvider>
);
