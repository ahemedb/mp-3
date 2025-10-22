import styled from "styled-components";

const Main = styled.main`
  flex: 1;                      
  padding: 20px;
  background-color: #f5f5dc;
  color: #2f4f2f;
  box-sizing: border-box;        

  h2 {
    text-align: center;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export default Main;
