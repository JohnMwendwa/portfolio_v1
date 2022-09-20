import React from "react";
import styled from "styled-components";

import Navbar from "./navbar";
import Footer from "./footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

//#FB0303
