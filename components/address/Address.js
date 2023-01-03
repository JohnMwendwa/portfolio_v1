import styled from "styled-components";

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 45px 0 90px;

  & h5 {
    margin: 10px 0;
    font-size: 1.125em;
    background: -webkit-linear-gradient(yellow, orange);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }
  & p,
  a {
    margin: 0;
    font-size: 0.825em;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;

    & p {
      margin: 0;
      font-size: 1em;
    }
  }
`;

export default function Address() {
  return (
    <AddressContainer>
      <div>
        <h5>Address</h5>
        <p>Nairobi, kenya</p>
      </div>
      <div>
        <h5>Email</h5>
        <p>
          <a href="mailto:dev.johnmwendwa@gmail.com">
            dev.johnmwendwa@gmail.com
          </a>
        </p>
      </div>
      <div>
        <h5>Phone</h5>
        <a href="tel:+254716237927">+254716237927</a>
      </div>
    </AddressContainer>
  );
}
