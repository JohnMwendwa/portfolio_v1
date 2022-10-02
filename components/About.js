import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 100px 0;
  text-align: center;
  & p {
    font-size: 0.9375em;
    font-weight: 400;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.secondaryTextColor};
    letter-spacing: 3px;
    margin-bottom: 0;
  }

  & h2 {
    font-size: 2.625em;
    margin: 20px 0 10px;
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <p>Who I am</p>
      <h2>About Me</h2>
    </AboutContainer>
  );
}
