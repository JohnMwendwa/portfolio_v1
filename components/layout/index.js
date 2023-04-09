import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./navbar";
import Footer from "./footer";
import Profile from "../main/Profile";

const Main = styled.main`
  max-width: 80em;
  margin: 0 auto;
`;
const LandingContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  background: -webkit-linear-gradient(#14142b, #00000069);
`;
export default function Layout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <LandingContainer>
        <Navbar />
        <Profile />
      </LandingContainer>
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

//#FB0303
