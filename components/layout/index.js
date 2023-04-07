import React from "react";
import styled from "styled-components";

import Navbar from "./navbar";
import Footer from "./footer";

const Main = styled.main`
  max-width: 80em;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

//#FB0303
