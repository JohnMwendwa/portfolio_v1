import { ThemeProvider } from "styled-components";
import Head from "next/head";

import "../styles/globals.css";
import { theme } from "../components/theme";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>John Mwendwa - Full Stack web developer</title>

        <meta
          name="description"
          content="John Mwendwa is a passionate full stack web developer with an extensive knowledge in HTML, CSS, Javascript, React, Next.js, Express, Node.js, MySQL and MongoDB."
          key="desc"
        />

        <meta
          name="keywords"
          content="Full Stack web developer, John Mwendwa, Mwendwa, Front-End, React, JavaScript, Node.js, Next.js, MongoDB , SEO"
        />

        <meta name="author" content="John Mwendwa" />
        <meta
          property="og:title"
          content="John Mwendwa | Full Stack web developer"
        />

        <meta
          property="og:description"
          content="John Mwendwa is a passionate full stack web developer with an extensive knowledge in HTML, CSS, Javascript, React, Next.js, Express, Node.js, MySQL and MongoDB."
        />

        <meta name="og:type" content="website" />

        <meta property="og:url" content="https://johnmwendwa.me" />

        <meta property="og:site_name" content="John Mwendwa" />

        <meta property="og:locale" content="en_KE" />

        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
