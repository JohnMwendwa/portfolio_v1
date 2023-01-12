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
      {/* <p>Who I am</p> */}

      <h2>About Me</h2>

      <CardsContainer>
        <Card>
          <h3>Skills</h3>
          <p>
            The technologies I work with are HTML, CSS and Javascript with a
            focus on the frameworks Tailwindcss, React.js, TypeScript, Next.js,
            Node, Express and MongoDB.
          </p>
          <p>
            I use code not only to do my day-to-day job, but also to solve
            everyday problems I come across.
          </p>
        </Card>

        <Divider />

        <Card>
          <h3>Education</h3>
          <p>
            I always wanted to pursue finance as my career path, and yes I went
            to the university and studied B.Com in Finance. In the midst of this
            pursuit, I became more curious with what my friends from other
            fields were being taught and somehow without even intending to, I
            fell in love with web development.
          </p>
          <p>
            So am mostly self-taught, but here are some of the most relevant
            certifications I have achieved:
          </p>
        </Card>

        <Divider />

        <div>
          <img
            src="/certificates/mongodb_basics.jpg"
            alt="certificate"
            width={300}
            height={200}
          />
        </div>
        <Divider />

        <div>
          <img
            src="/certificates/authentication.jpg"
            alt="certificate"
            width={300}
            height={200}
          />
        </div>

        <Divider />

        <div>
          <img
            src="/certificates/atlas.jpg"
            alt="certificate"
            width={300}
            height={200}
          />
        </div>

        <Divider />
        <div>
          <img
            src="/certificates/cyber_security.jpg"
            alt="certificate"
            width={300}
            height={200}
          />
        </div>

        <Divider />
        <div>
          <img
            src="/certificates/modern_javascript.jpg"
            alt="certificate"
            width={300}
            height={200}
          />
        </div>

        <Divider />

        <Card>
          <h3>Hobbies</h3>
          <p>
            COOKING. Whenever I am not coding, you&apos;ll either find me in the
            kitchen trying a new recipe or hanging out with friends .
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
