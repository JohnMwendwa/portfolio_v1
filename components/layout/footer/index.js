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
  background-color: #101112;
  color: white;
`;
const CopyrightWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 20px 30px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 2.8rem;
`;

const Copyright = styled.div``;

export default function Footer() {
  const router = useRouter();
  const path = router.route;
  return (
    <FooterWrapper>
      {path !== "/contact" ? <Address /> : ""}
      <CopyrightWrapper>
        <BackToTopBtn />
        <Copyright>&copy; John Mwendwa {new Date().getFullYear()}</Copyright>
      </CopyrightWrapper>
    </FooterWrapper>
  );
}
