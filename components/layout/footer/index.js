import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { BackToTopBtn } from "../../Buttons";
import Address from "../../address/Address";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: auto;
  padding: 40px 10vw 0;
  background-color: ${(p) => p.theme.colors.secondaryColor};
`;
const CopyrightWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  border-top: 1px solid ${(p) => p.theme.colors.accentColor};
  padding: 40px 30px;
  line-height: 2.8rem;
`;

const Copyright = styled.div``;

export default function Footer() {
  const router = useRouter();
  const path = router.route;
  return (
    <FooterWrapper id="contact" data-aos="fade-up">
      <Address />
      <CopyrightWrapper>
        <BackToTopBtn />
        <Copyright>&copy; John Mwendwa {new Date().getFullYear()}</Copyright>
      </CopyrightWrapper>
    </FooterWrapper>
  );
}
