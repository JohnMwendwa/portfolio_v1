import React from "react";
import styled from "styled-components";

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
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 20px 30px;
  color: rgba(255, 255, 255, 0.5);
`;

const Copyright = styled.div``;

export default function Footer() {
  return (
    <FooterWrapper>
      <CopyrightWrapper>
        <Copyright>&copy; {new Date().getFullYear()}</Copyright>
        <div>John Mwendwa</div>
      </CopyrightWrapper>
    </FooterWrapper>
  );
}
