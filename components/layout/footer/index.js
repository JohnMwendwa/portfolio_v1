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
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Address>
        <div>
          <h5>Address</h5>
          <p>Raphaels Stage, Buruburu 1</p>
        </div>
        <div>
          <h5>Email</h5>
          <p>dev@johnmwendwa@gmail.com</p>
        </div>
        <div>
          <h5>Phone</h5>
          <p>+254716237927</p>
        </div>
      </Address>
      <CopyrightWrapper>
        <BackToTopBtn />
        <Copyright>&copy; John Mwendwa {new Date().getFullYear()}</Copyright>
      </CopyrightWrapper>
    </FooterWrapper>
  );
}
