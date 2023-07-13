import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const theme = {
  colors: {
    dark: "#1C1A44",
    light: "#FCF9F6",
    accent: "#FF9BEF",
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: "'Noto Sans Mono', sans-serif",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
