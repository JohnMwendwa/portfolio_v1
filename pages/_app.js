import "../styles/globals.css";
import { ThemeProvider } from "styled-components";

import { theme } from "../components/theme";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
