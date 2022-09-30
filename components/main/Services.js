import Image from "next/image";
import styled from "styled-components";

const ServicesContainer = styled.div`
  text-align: center;
  padding: 100px 0;

  > p {
    color: #aaa;
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
const CardWrapper = styled.div`
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
  width: 350px;
  height: 300px;
  border: 1px solid yellow;

  & h4 {
    font-size: 1.525em;
    margin: 5px 0 0 0;
  }
`;
const CardContent = styled.div`
  & p {
    line-height: 30px;
    font-size: 18px;
  }
`;

export default function Services() {
  return (
    <ServicesContainer>
      <p>Services</p>
      <h2>What I Do</h2>

      <CardWrapper>
        <Card>
          <Image src="/seo.svg" alt="SEO icon" width={100} height={100} />
          <h4>Search Engine Optimization</h4>
          <CardContent>
            <p>
              Experience with
              <br />
              Best SEO marketing tools and practices
            </p>
          </CardContent>
        </Card>

        <Card>
          <Image src="/monitor.svg" alt="SEO icon" width={100} height={100} />
          <CardContent>
            <h4>UI Design</h4>
            <p>
              Experience with
              <br />
              Adobe XD
            </p>
          </CardContent>
        </Card>

        <Card>
          <Image src="/coding.svg" alt="coding icon" width={100} height={100} />
          <CardContent>
            <h4>Front-End Developer</h4>
            <p>
              Experience with
              <br />
              HTML, CSS, Javascript, React.js and Nextjs
            </p>
          </CardContent>
        </Card>

        <Card>
          <Image
            src="/database.svg"
            alt="database icon"
            width={100}
            height={100}
          />
          <CardContent>
            <h4>Back-End Developer</h4>
            <p>
              Experience with
              <br />
              Nodejs, Express and MongoDB
            </p>
          </CardContent>
        </Card>

        <Card>
          <Image src="/phone.svg" alt="phone icon" width={100} height={100} />
          <CardContent>
            <h4>Mobile App Developer</h4>
            <p>
              Experience with
              <br />
              React Native
            </p>
          </CardContent>
        </Card>
      </CardWrapper>
    </ServicesContainer>
  );
}
