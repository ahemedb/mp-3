import styled from "styled-components";
import Main from "./Main";
import Calculator from "./Calculator";


export default function Projects() {

const ProjectCard = styled.div`
  background-color: #f5fff5;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 12px;

  @media screen and (max-width: 1000px) {
    padding: 15px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
  color: #2f4f2f;

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
`;

const ProjectLink = styled.a`
  color: darkgreen;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectList = styled.ul`
  padding-left: 20px;
  line-height: 1.6;
  color: #444;
`;

  return (
    <Main>
          <title>Projects | Resume</title>
      <ProjectCard>
        <ProjectTitle>
          <ProjectLink
            href="https://github.com/ahemedbullo/connectfour"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI Connect Four
          </ProjectLink>{" "}
          (Python)
        </ProjectTitle>
        <ProjectList>
          <li>
            Developed an intelligent Connect Four player utilizing artificial
            intelligence techniques.
          </li>
          <li>
            Implemented a lookahead algorithm that evaluates possible moves up
            to a specified depth, assigning scores to each column based on the
            likelihood of winning or losing.
          </li>
        </ProjectList>
      </ProjectCard>

      <ProjectCard>
        <ProjectTitle>
          <ProjectLink
            href="https://github.com/ahemedbullo/SaveSmart"
            target="_blank"
            rel="noopener noreferrer"
          >
            SaveSmart
          </ProjectLink>{" "}
          (React, Express, Plaid API)
        </ProjectTitle>
        <ProjectList>
          <li>
            Developed a personal finance web app enabling users to track budgets,
            expenses, and savings goals through a React front end and Express
            backend.
          </li>
          <li>
            Integrated the Plaid API to securely connect bank accounts and
            retrieve real-time balances and transactions, reducing manual data
            entry.
          </li>
          <li>
            Implemented features including manual expense entry, search and
            inline edit, spending visualizations, and PDF/Excel budget exports.
          </li>
          <li>
            Built authentication and error-handling flows to ensure a secure and
            reliable user experience.
          </li>
        </ProjectList>
      </ProjectCard>

      <Calculator></Calculator>
    </Main>
  );
}
