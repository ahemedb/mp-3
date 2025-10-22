import styled from "styled-components";
export default function Footer(){
    const StyledFooter = styled.footer`
  text-align: center;
  background-color: #FFFDD0;
  margin-top: auto;

  a {
    text-decoration: none;
    color: black;
    flex-shrink: 0;
  }
`;
    return (
         <StyledFooter>
            <p>All Rights Reserved by Ahemed Bullo | <a href="" >Credits</a> &copy;</p>
        </StyledFooter>
    )
}