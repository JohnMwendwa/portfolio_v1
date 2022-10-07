import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Headroom from "react-headroom";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.colors.primaryColor};
  font-size: 1.25rem;
  padding: 20px 40px 0;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Logo = styled.div`
  padding-left: 10px;
  font-family: Jokerman;
  font-size: 48px;
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 20px;
`;
const NavItem = styled.li`
  padding: 20px 0;
  padding-right: 30px;

  > a {
    position: relative;
  }

  > a::before {
    content: "";
    margin: -8px 0;
    position: absolute;
    width: calc(100% + 10px);
    height: 4px;
    background: -webkit-linear-gradient(yellow, orange);
    bottom: 0;
    left: -5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  a:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

export default function Navbar() {
  return (
    <Headroom style={{ marginBottom: "20px" }}>
      <NavWrapper>
        <Logo>
          <Link href="/">
            <a>
              <span>Mwendwa</span>
            </a>
          </Link>
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
        </NavItems>
      </NavWrapper>
    </Headroom>
  );
}
