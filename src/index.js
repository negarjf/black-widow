import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./theme";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
