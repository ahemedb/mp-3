import styled from "styled-components";
import Main from "./Main";

const EducationCard = styled.div`
  background-color: #f5fff5;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 12px;

  @media screen and (max-width: 1000px) {
    padding: 15px;
  }
`;

const SchoolName = styled.h2`
  font-size: 24px;
  margin: 0;
  color: #2f4f2f;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;

const SchoolLocation = styled.h2`
  font-size: 18px;
  margin-top: 4px;
  color: #556b2f;

  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`;

const Degree = styled.h3`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #333;

  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #444;
  margin-top: 10px;

  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;

export default function Education() {
  return (
    <Main>
        <title>Education | Resume</title>
      <EducationCard>
        <SchoolName>Boston University</SchoolName>
        <SchoolLocation>Boston, MA</SchoolLocation>
        <Degree>Bachelor’s in Computer Science | Expected May 2026</Degree>
        <Paragraph>
          <strong>Relevant Coursework:</strong> Java and Data Structures, Computer Systems, 
          Probability in Computing, Discrete Mathematics, Linear Algebra/Geometric Algorithms, 
          Microeconomics, Macroeconomics, Functional Programming
        </Paragraph>
      </EducationCard>

      <EducationCard>
        <SchoolName>De La Salle North Catholic High School</SchoolName>
        <SchoolLocation>Portland, OR</SchoolLocation>
        <Degree>
          Class Salutatorian and Captain of Community | Graduated 2022
        </Degree>
      </EducationCard>
    </Main>
  );
}
