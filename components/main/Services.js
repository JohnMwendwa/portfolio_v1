import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";

const ServicesContainer = styled.section`
  text-align: center;
  padding: 6.25rem 0;
  background-color: ${(c) => c.theme.colors.tertiaryColor};
  color: black;
  overflow-x: hidden;

  > p {
    color: ${(c) => c.theme.colors.primaryColor};
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 0;
  }

  > h2 {
    font-size: 2.625em;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }

  @media (min-width: 80em) {
    border-radius: 10px;
  }
`;
const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
const Card = styled.div`
  display: grid;
  grid-template-rows: 40% 60%;
  padding: 2em;
  width: 80%;
  min-width: 16rem;
  height: 18.75rem;
  border: 2px solid ${(p) => p.theme.colors.primaryColor};
  border-radius: 0.5rem;

  & h3 {
    font-size: 1.25em;
  }

  @media (min-width: 19em) {
    max-width: 22em;
  }
`;
const CardImage = styled.div`
  width: 3em;
  height: 3em;
  margin: 0 auto;
`;
const CardContent = styled.div`
  & p {
    line-height: 1.5;
    font-size: 1.125rem;

    span {
      font-size: 0.875rem;
    }
  }
`;

const Image = styled.img``;

export default function Services() {
  return (
    <ServicesContainer>
      <TypeAnimation
        sequence={["Services", 1000, ""]}
        speed={40}
        wrapper="p"
        repeat={Infinity}
      />
      <h2>What I Do</h2>

      <CardsWrapper>
        <Card data-aos="fade-right" data-aos-anchor-placement="center-bottom">
          <CardImage>
            <Image width={50} height={50} src="/seo.svg" alt="SEO icon" />
          </CardImage>
          <CardContent>
            <h3>Search Engine Optimization</h3>
            <p>
              <span> Experience with</span>
              <br />
              Best SEO marketing tools and practices
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left" data-aos-anchor-placement="center-bottom">
          <CardImage>
            <Image width={50} height={50} src="/monitor.svg" alt="SEO icon" />
          </CardImage>
          <CardContent>
            <h3>UI Designer</h3>
            <p>
              <span> Experience with</span>
              <br />
              Adobe XD
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right" data-aos-anchor-placement="center-bottom">
          <CardImage>
            <Image
              width={50}
              height={50}
              src="/coding.svg"
              alt="coding icon"
              layout="responsive"
            />
          </CardImage>
          <CardContent>
            <h3>Front-End Developer</h3>
            <p>
              <span> Experience with</span>
              <br />
              HTML, CSS, Javascript, React.js and Nextjs
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left" data-aos-anchor-placement="center-bottom">
          <CardImage>
            <Image
              width={50}
              height={50}
              src="/database.svg"
              alt="database icon"
            />
          </CardImage>
          <CardContent>
            <h3>Back-End Developer</h3>
            <p>
              <span> Experience with</span>
              <br />
              Nodejs, Express and MongoDB
            </p>
          </CardContent>
        </Card>

        {/* <Card data-aos="fade-right" data-aos-anchor-placement="center-bottom">
          <CardImage>
            <Image width={50} height={50} src="/phone.svg" alt="phone icon" />
          </CardImage>
          <CardContent>
            <h3>Mobile App Developer</h3>
            <p>
              Experience with
              <br />
              React Native
            </p>
          </CardContent>
        </Card> */}
      </CardsWrapper>
    </ServicesContainer>
  );
}
