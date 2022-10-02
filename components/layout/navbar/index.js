import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Headroom from "react-headroom";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.colors.bgColor};
  border-bottom: 1px solid ${(p) => p.theme.colors.tertiaryColor};
  font-size: 1.25rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Logo = styled.div`
  padding-left: 10px;
  min-width: 130px;
`;
const LogoImage = styled(Image)`
  width: 100%;
  min-width: 130px;
`;
const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 20px;
  padding: 0px;
`;
const NavItem = styled.li`
  padding: 20px 0;
  padding-right: 20px;
  &:first-child {
    padding-left: 20px;
  }
`;

export default function Navbar() {
  return (
    <Headroom style={{ marginBottom: "20px" }}>
      <NavWrapper>
        <Logo>
          <LogoImage src="/logo.svg" alt="logo" width={256} height={79} />
        </Logo>
        <NavItems>
          <NavItem>
            <Link href="https://blog.johnmwendwa.me">
              <a>Blog</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about">
              <a>About</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </NavItem>
        </NavItems>
      </NavWrapper>
    </Headroom>
  );
}
