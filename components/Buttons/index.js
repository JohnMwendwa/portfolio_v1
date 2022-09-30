import styled from "styled-components";

const BackBtn = styled.div`
  z-index: 100;
  position: absolute;
  right: 3rem;
  top: -1.5rem;
  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: yellow;
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

const Button = styled.button`
  font-weight: 700;
  border-radius: 100px;
  font-size: 1em;
  padding: 8px 25px;
  border: none;
  transition: all 0.3s ease-out;
  text-align: center;
  box-shadow: 0 0 0 1px black;
  background-color: transparent;
  cursor: pointer;

  &:active {
    box-shadow: none;
  }

  @media (min-width: 768px) {
    padding: 14px 55px;
    font-size: 1.325em;
  }
`;

export const BackToTopBtn = () => {
  return (
    <BackBtn
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            fill: "rgba(0, 0, 0, 1)",
          }}
        >
          <path d="M6 4H18V6H6zM11 14L11 20 13 20 13 14 18 14 12 8 6 14z"></path>
        </svg>
      </span>
    </BackBtn>
  );
};

export const NormalButton = ({ text }) => {
  return <Button>{text}</Button>;
};
