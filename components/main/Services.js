import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";

const ServicesContainer = styled.div`
  text-align: center;
  padding: 100px 0;
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
    margin-top: 13px;
  }
`;
const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 35px;
  width: 80%;
  min-width: 250px;
  height: 300px;
  border: 2px solid ${(p) => p.theme.colors.primaryColor};
  border-radius: 5px;

  & h4 {
    font-size: 1.525em;
    margin: 5px 0 0 0;
  }

  @media (min-width: 300px) {
    max-width: 350px;
    width: 80%;
  }
`;
const CardImage = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;
const CardContent = styled.div`
  & p {
    line-height: 30px;
    font-size: 18px;
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
            <Image src="/seo.svg" alt="SEO icon" />
          </CardImage>
          <CardContent>
            <h4>Search Engine Optimization</h4>
            <p>
              Experience with
              <br />
              Best SEO marketing tools and practices
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left" data-aos-anchor-placement="center-bottom">
          <CardImage>
            <Image src="/monitor.svg" alt="SEO icon" />
          </CardImage>
          <CardContent>
            <h4>UI Design</h4>
            <p>
              Experience with
              <br />
              Adobe XD
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right" data-aos-anchor-placement="center-bottom">
          <CardImage>
            <Image src="/coding.svg" alt="coding icon" layout="responsive" />
          </CardImage>
          <CardContent>
            <h4>Front-End Developer</h4>
            <p>
              Experience with
              <br />
              HTML, CSS, Javascript, React.js and Nextjs
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-left" data-aos-anchor-placement="center-bottom">
          <CardImage>
            <Image src="/database.svg" alt="database icon" />
          </CardImage>
          <CardContent>
            <h4>Back-End Developer</h4>
            <p>
              Experience with
              <br />
              Nodejs, Express and MongoDB
            </p>
          </CardContent>
        </Card>

        <Card data-aos="fade-right" data-aos-anchor-placement="center-bottom">
          <CardImage>
            <Image src="/phone.svg" alt="phone icon" />
          </CardImage>
          <CardContent>
            <h4>Mobile App Developer</h4>
            <p>
              Experience with
              <br />
              React Native
            </p>
          </CardContent>
        </Card>
      </CardsWrapper>
    </ServicesContainer>
  );
}
