import headshot from "./headshot.jpeg";
import styled from "styled-components";
import Main from "./Main";

export default function Home() {
const StyledIntro = styled.div`
        display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;

  img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
  }

  p {
    flex: 1;
    font-size: 24px;
    line-height: 1.6;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      max-width: 60%;
    }

    p {
      text-align: justify;
    }
  }
`;

    return (
        <Main>
            <title>Home | Resume</title>
            <h2>Home</h2>
                <StyledIntro>
                    <img src={headshot} alt="Ahemed Bullo's headshot"></img>
                <p>My name is Ahemed, and I'm a passionate Computer Science major at Boston University. This website
                    showcases my education, experiences, projects, and leadership work. Feel free to explore the
                    different sections!</p>
            </StyledIntro>
        </Main>
    )
}