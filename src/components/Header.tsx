import styled from "styled-components";
export default function Header() {
   const StyledHeader = styled.header`
    width: 100%;
    height: 10vh;
    background-color: #FFFDD0;
    font-family: "Audiowide", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    /* Match color and margin for both */
    h1, p {
      color: darkgreen;
      margin: 0;
    }

    @media screen and (max-width: 1000px) {
      padding: 30px 15px;

      h1 {
        font-size: calc(20px + 1vw);
      }

      p {
        font-size: calc(12px + 0.5vw);
        margin-top: 8px;
      }
    }
  `;

  return (
    <StyledHeader>
      <h1>Ahemed Bullo</h1>
      <p>My Online Resume</p>
    </StyledHeader>
  );

}