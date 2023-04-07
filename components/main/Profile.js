import styled from "styled-components";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

import { NormalButton } from "../Buttons";

const ProfileWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6em);
  padding: 0 2.5rem;

  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

const ProfileDetails = styled.div`
  text-align: center;
  margin-top: -6.25rem;

  > h1 {
    margin: 0;
    line-height: 1.1;
    font-weight: 900;
    font-size: 2rem;

    @media (min-width: 40em) {
      font-size: 3rem;
    }

    @media (min-width: 80em) {
      font-size: 4.5rem;
    }
  }

  > p {
    margin-bottom: 2rem;
    line-height: 1.5;
    padding: 0 2px;

    @media (min-width: 48em) {
      font-size: 1.25rem;
    }
  }
`;

export default function Profile() {
  const talkAbout = [
    "HTML",
    1000,
    "CSS",
    1000,
    "Tailwindcss",
    1000,
    "JavaScript",
    1000,
    "React",
    1000,
    "Next.js",
    1000,
    "Node.js",
    1000,
    "MongoDB",
    1000,
    "SEO",
    1000,
    "TypeScript",
    1000,
  ];

  return (
    <ProfileWrapper>
      <ProfileDetails>
        <h1>
          Hey, I am
          <br />
          John Mwendwa
        </h1>
        <p>
          A very passionate web and mobile developer based in Nairobi, Kenya.
          <br />
          You can talk to me about{" "}
          <TypeAnimation
            sequence={talkAbout}
            speed={50}
            wrapper="span"
            repeat={Infinity}
            style={{
              color: "yellow",
              fontWeight: 500,
            }}
          />
        </p>

        <Link href="#contact" aria-label="Go to contact section">
          <a>
            <NormalButton text="Get in Touch" />
          </a>
        </Link>
      </ProfileDetails>
    </ProfileWrapper>
  );
}
