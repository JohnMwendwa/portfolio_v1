import styled from "styled-components";
import Address from "./address/Address";

const Wrapper = styled.div`
  text-align: center;
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
