import styled from "styled-components";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

import { NormalButton } from "../Buttons";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  padding: 0 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 400px;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: -100px;

  > h1 {
    margin: 0;
    line-height: 1.1;
    font-weight: 900;
    font-size: 36px;

    @media (min-width: 960px) {
      font-size: 3.75em;
    }
  }

  > p {
    margin-bottom: 40px;
    padding: 0 5px;
  }
`;

export default function Profile() {
  const talkAbout = [
    "HTML",
    1000,
    "CSS",
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
    "React Native",
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
          />{" "}
          .
        </p>

        <Link href="#contact">
          <a>
            <NormalButton text="Get in Touch" />
          </a>
        </Link>
      </ProfileDetails>
    </ProfileWrapper>
  );
}
