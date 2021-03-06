import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const theme = {
  red: "#E63946",
  offWhite: "#F1FAEE",
  turquise: "#A8DADC",
  blue: "#5061ff",
  offBlack: "#1D3557",
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
