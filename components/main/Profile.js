import Image from "next/image";
import styled from "styled-components";
import { NormalButton } from "../Buttons";
import Link from "next/link";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: yellow;
  padding: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImageContainer = styled.div`
  border: 2px solid black;
  width: 400px;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const ProfileImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

const ProfileDetails = styled.div`
  padding-left: 30px;
  text-align: center;
  > h1 {
    margin: 0;
    padding: 0;
    text-align: end;
    font-size: 3.75em;

    @media (max-width: 768px) {
      font-size: 2.625em;
      text-align: center;
      line-height: 0.95em;
      padding-top: 20px;
    }
    @media (max-width: 960px) {
      text-align: center;
      line-height: 0.95em;
    }
  }
`;

export default function Profile() {
  return (
    <ProfileWrapper>
      <ProfileImageContainer>
        <ProfileImage
          src="/profile.jpg"
          width={600}
          height={400}
          layout="responsive"
        />
      </ProfileImageContainer>
      <ProfileDetails>
        <h1>
          I am
          <br />
          John Mwendwa
        </h1>
        <p>
          A very passionate web and mobile developer based in Nairobi, Kenya.
        </p>

        <Link href="/contact">
          <a>
            <NormalButton text="Get in Touch" />
          </a>
        </Link>
      </ProfileDetails>
    </ProfileWrapper>
  );
}
