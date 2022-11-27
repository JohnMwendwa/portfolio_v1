import Image from "next/image";
import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 0px 30px 50px;
  text-align: center;

  @media (min-width: 600px) {
    padding-top: 50px;
  }

  > p {
    font-size: 0.9375em;
    font-weight: 400;
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.secondaryTextColor};
    letter-spacing: 3px;
    margin-bottom: 0;
  }

  & h2 {
    font-size: 2.625em;
    margin: 20px 0 10px;
  }
`;
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 600px) {
    & div:nth-of-type(odd) {
      margin-left: -180px;
    }
    & div:nth-of-type(even) {
      margin-right: -180px;
    }
  }
`;

const Card = styled.div`
  outline: 1px solid yellow;
  padding: 20px 30px;
  min-width: 200px;
  max-width: 400px;
  border-radius: 10px;

  & p {
    text-align: start;
  }

  > h3 {
    background: -webkit-linear-gradient(yellow, green);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }
`;
const Divider = styled.span`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 5px;
  margin: 0 auto;
  position: relative;
  overflow-y: hidden;
  background-color: white;

  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    animation: animate 3s ease-in infinite;
    background-color: orange;
  }

  @keyframes animate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(99%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <p>Who I am</p>
      <h2>About Me</h2>

      <CardsContainer>
        <Card>
          <h3>Skills</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            animi repudiandae quam inventore aliquam dolorum maxime autem non
            illo sunt fugiat tenetur, modi blanditiis temporibus quis enim
            voluptatem. Ea, totam!
          </p>
        </Card>

        <Divider />

        <Card>
          <h3>Education</h3>
          <p>
            I am mostly self-taught, but here are some of the most relevant
            certifications I have achieved:
          </p>
        </Card>

        <Divider />

        <div>
          <Image
            src="/authentication.jpg"
            alt="certificate"
            width={300}
            height={200}
          />
        </div>
        <Divider />

        <div>
          <Image
            src="/authentication.jpg"
            alt="certificate"
            width={300}
            height={200}
          />
        </div>

        <Divider />

        <div>
          <Image src="/atlas.jpg" alt="certificate" width={300} height={200} />
        </div>

        <Divider />

        <Card>
          <h3>Hobbies</h3>
          <p>
            Whenever I am not coding, you&apos;ll either find me in the kitchen
            trying a new recipe or out with friends hanging out.
          </p>
          <p>
            SKATING. I love skating although I can&apos;t say am a professional
            but I can ride backwards.
          </p>
          <p>MOVIES. Am also a big fan of movies and series.</p>
        </Card>
      </CardsContainer>
    </AboutContainer>
  );
}
