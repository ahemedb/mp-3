import {Link} from "react-router";
import styled from "styled-components";

export default function Nav() {

 const StyledNav = styled.nav`
    background-color: darkgreen;
    padding: 5px;
    width: 30%;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  `;

  const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media screen and (max-width: 1000px) {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
    }
  `;

  const StyledLi = styled.li`
    background-color: #004d00;
    padding: 5px;
    border-radius: 8px;
    text-align: center;

    &:hover {
      background-color: #006600;
    }

    @media screen and (max-width: 1000px) {
      width: auto;
      flex: 0 1 auto;
    }
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: Audiowide, sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: #fffdd0;
    display: block;
  `;

    return (
       <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/education`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/experience`}>Work Experience</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/leadership`}>Leadership & Development</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/projects`}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/references`}>References</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}