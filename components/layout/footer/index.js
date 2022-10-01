import React from "react";
import styled from "styled-components";

import { BackToTopBtn } from "../../Buttons";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: auto;
  background-color: #101112;
  color: white;
`;
const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 20px 30px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 2.8rem;
`;

const Copyright = styled.div``;
const Address = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 45px 0;

  & h5 {
    margin: 10px 0;
    font-size: 1.125em;
  }
  & p,
  a {
    margin: 0;
    font-size: 0.825em;
    margin-bottom: 20px;
    line-height: 1;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Address>
        <div>
          <h5>Address</h5>
          <p>Nairobi, kenya</p>
        </div>
        <div>
          <h5>Email</h5>
          <a href="mailto:dev.johnmwendwa@gmail.com">
            dev@johnmwendwa@gmail.com
          </a>
        </div>
        <div>
          <h5>Phone</h5>
          <a href="tel:+254716237927">+254716237927</a>
        </div>
      </Address>
      <CopyrightWrapper>
        <BackToTopBtn />
        <Copyright>&copy; John Mwendwa {new Date().getFullYear()}</Copyright>
      </CopyrightWrapper>
    </FooterWrapper>
  );
}
