import styled from "styled-components";

const BackBtn = styled.div`
  z-index: 100;
  position: absolute;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    background-color: orange;
    border: 0.2rem solid black;
    text-decoration: none;
    > svg {
      width: 1.7rem;
      height: 1.7rem;
    }
    > svg path {
      // fill: white;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const BackToTopBtn = () => {
  return (
    <BackBtn>
      <a href="#top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            fill: "rgba(0, 0, 0, 1)",
            transform: "",
          }}
        >
          <path d="M6 4H18V6H6zM11 14L11 20 13 20 13 14 18 14 12 8 6 14z"></path>
        </svg>
      </a>
    </BackBtn>
  );
};
