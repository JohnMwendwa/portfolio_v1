import Image from "next/image";
import styled from "styled-components";
import { NormalButton } from "../Buttons";
import Link from "next/link";

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.colors.bgColor};
  padding: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImageContainer = styled.div`
  border: 2px solid black;
  max-width: 300px;
  min-width: 275px;
`;

const ProfileImage = styled(Image)`
  object-fit: cover;
  min-width: 275px;
`;

const ProfileDetails = styled.div`
  padding-left: 30px;
  text-align: center;
  > h1 {
    margin: 0;
    padding: 0;
    text-align: center;

    font-size: 2.625em;
    text-align: center;
    line-height: 0.95em;
    padding-top: 20px;

    @media (min-width: 960px) {
      text-align: end;
      font-size: 3.75em;
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
