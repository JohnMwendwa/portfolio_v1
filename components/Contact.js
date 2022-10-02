import styled from "styled-components";
import Address from "./address/Address";

const Wrapper = styled.div`
  text-align: center;
  padding: 100px 0;
  min-height: calc(100vh - 171px);
  background-color: yellow;

  > p {
    text-transform: uppercase;
    font-size: 0.9375em;
    font-weight: 400;
    color: #aaaaaa;
    margin: 0 0 10px;
    letter-spacing: 2px;
  }

  > h2 {
    font-size: 2.625em;
    margin-bottom: 0px;
    font-weight: 700;
    line-height: 1;
  }
`;

export default function Contact() {
  return (
    <Wrapper>
      <p>Contact</p>
      <h2>Get in Touch With Me</h2>
      <Address />
    </Wrapper>
  );
}
