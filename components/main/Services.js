import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";

const ServicesContainer = styled.section`
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

  @media (min-width: 1280px) {
    border-radius: 10px;
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

  & h3 {
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
            <Image width={50} height={50} src="/seo.svg" alt="SEO icon" />
          </CardImage>
          <CardContent>
            <h3>Search Engine Optimization</h3>
            <p>
              Experience with
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
            <h3>UI Design</h3>
            <p>
              Experience with
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
              Experience with
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
              Experience with
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
