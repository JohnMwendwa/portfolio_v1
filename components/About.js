import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 50px 30px 100px;
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
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & div:nth-of-type(odd) {
    margin-left: -180px;
  }
  & div:nth-of-type(even) {
    margin-right: -180px;
  }
`;

const Card = styled.div`
  outline: 1px solid yellow;
  padding: 20px;
  min-width: 300px;
  max-width: 400px;
  border-radius: 20px;
`;
const Divider = styled.span`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 0px;
  margin: 0 auto;
  border: 3px dashed yellow;
`;

export default function About() {
  return (
    <AboutContainer>
      <p>Who I am</p>
      <h2>About Me</h2>

      <CardsContainer></CardsContainer>
    </AboutContainer>
  );
}
