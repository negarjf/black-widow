import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config = {
  initialColorMode: "system",
  useSystemColorMode: false
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    body: "Monda, sans-serif",
    heading: "Monda, sans-serif"
  },
  colors: {
    brand: {
      400: "#5740d8",
      500: "#3e27bf",
      600: "#2f1e95"
    },
    purple: {
      50: "#ece9ff",
      100: "#c7bef7",
      200: "#a295eb",
      300: "#7c6be2",
      400: "#5740d8",
      500: "#3e27bf",
      600: "#2f1e95",
      700: "#21156c",
      800: "#140c43",
      900: "#07031c"
    },
    gray: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#0d0d0d"
    }
  }
});

export default theme;
