import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Headroom from "react-headroom";

const Head = styled(Headroom)`
  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 100000;
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
    opacity: 0.9;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: ${(p) => p.theme.colors.primaryColor};
  font-size: 1.25rem;
  padding: 20px 40px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1280px) {
    justify-content: space-around;
  }
`;
const Logo = styled.div`
  padding-left: 10px;
  font-family: Jokerman, Roboto;
  font-size: 48px;

  @media (max-width: 600px) {
    padding: 0;
  }

  @media (min-width: 1280px) {
    font-size: 60px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 20px;
  padding: 0;
  font-family: jokerman, Roboto;

  @media (max-width: 600px) {
    margin: 0;
  }
`;
const NavItem = styled.li`
  padding: 20px 0;
  padding-right: 30px;

  @media (min-width: 1280px) {
    font-size: 1.5rem;
  }

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
const Github = styled.div`
  cursor: pointer;

  svg:hover {
    fill: yellow;
  }
`;
const Wrapper = styled.nav`
  display: flex;
  align-items: center;
`;
export default function Navbar() {
  return (
    <header>
      <Head disableInlineStyles>
        <NavWrapper>
          <Logo>
            <Link href="/">Mwendwa</Link>
          </Logo>
          <Wrapper>
            <NavItems>
              <NavItem>
                <Link href="/about">About</Link>
              </NavItem>

              <NavItem>
                <Link href="https://blog.johnmwendwa.me">Blog</Link>
              </NavItem>
            </NavItems>

            <Github>
              <Link
                href="https://github.com/JohnMwendwa"
                aria-label="Visit my github page"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="5px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 -10 64 64"
                  fill="white"
                >
                  <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                </svg>
              </Link>
            </Github>
          </Wrapper>
        </NavWrapper>
      </Head>
    </header>
  );
}
