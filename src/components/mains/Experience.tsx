import styled from "styled-components";
import Main from "./Main";
export default function Experience() {

const ExperienceCard = styled.div`
  background-color: #f5fff5;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 12px;

  @media screen and (max-width: 1000px) {
    padding: 15px;
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 10px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CompanyRole = styled.div`
  h2,
  h3,
  h4 {
    margin: 0;
  }
`;

const LocationDate = styled.div`
  p {
    margin: 0;
    text-align: right;
    font-size: 14px;
  }

  @media screen and (max-width: 1000px) {
    p {
      text-align: left;
    }
  }
`;

const ExperienceList = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
  line-height: 1.6;
  color: #444;
`;


  return (
    <Main>
      <ExperienceCard>
        <ExperienceHeader>
          <CompanyRole>
            <h2>Meta</h2>
            <h4>Software Engineering Intern</h4>
          </CompanyRole>
          <LocationDate>
            <p>New York, NY</p>
            <p>May 2025 – Aug 2025</p>
          </LocationDate>
        </ExperienceHeader>
        <ExperienceList>
          <li>
            Upgraded the Onboarding flow for Profiles on FB Lite, bringing it to
            parity with Facebook iOS and FB for Android by implementing new
            input fields and adding multiple new screens.
          </li>
          <li>
            Collaborated with a product manager, designer, and engineering
            managers to define and roadmap future onboarding changes,
            contributing to long-term maintenance of FB Lite.
          </li>
          <li>
            Contributed to end-to-end (E2E) testing infrastructure and wrote
            test cases for other Facebook Profile products.
          </li>
          <li>
            Worked within Meta’s large-scale codebase, gaining hands-on
            experience with internal tools, mobile development and code review
            workflows.
          </li>
        </ExperienceList>
      </ExperienceCard>

      <ExperienceCard>
        <ExperienceHeader>
          <CompanyRole>
            <h2>Meta</h2>
            <h4>Software Engineering Intern</h4>
          </CompanyRole>
          <LocationDate>
            <p>Menlo Park, CA</p>
            <p>June 2024 – Aug 2024</p>
          </LocationDate>
        </ExperienceHeader>
        <ExperienceList>
          <li>
            Developed a full-stack web application using React, Node.js, and
            PostgreSQL.
          </li>
          <li>
            Integrated Plaid API for secure bank account connectivity and
            utilized JWT for user authentication.
          </li>
          <li>
            Gained hands-on experience with RESTful APIs, Git version control,
            and agile development methodologies.
          </li>
        </ExperienceList>
      </ExperienceCard>

      <ExperienceCard>
        <ExperienceHeader>
          <CompanyRole>
            <h2>PricewaterhouseCoopers (PwC)</h2>
            <h4>Consulting Extern</h4>
          </CompanyRole>
          <LocationDate>
            <p>Remote, USA</p>
            <p>Aug 2023 – Sep 2023</p>
          </LocationDate>
        </ExperienceHeader>
        <ExperienceList>
          <li>
            Utilized databases to provide tangible solutions to a nonprofit by
            conducting research and applying consulting frameworks to analyze
            and evaluate challenges faced by said nonprofit.
          </li>
          <li>
            Delivered presentation to a nonprofit outlining a 360° communication
            strategy to boost community engagement and alumni involvement,
            increasing portal usage among students and alumni.
          </li>
        </ExperienceList>
      </ExperienceCard>

      <ExperienceCard>
        <ExperienceHeader>
          <CompanyRole>
            <h2>First Tech Credit Union</h2>
            <h4>Learning and Development Intern</h4>
          </CompanyRole>
          <LocationDate>
            <p>Portland, OR</p>
            <p>Sep 2021 – May 2022</p>
          </LocationDate>
        </ExperienceHeader>
        <ExperienceList>
          <li>
            Assisted in designing and implementing training programs, increasing
            availability and enhancing technical skills company-wide.
          </li>
          <li>
            Supported development of multimedia training materials, improving
            learning flexibility and effectiveness.
          </li>
          <li>
            Contributed to intranet upgrades, boosting efficiency and access to
            internal resources and training content.
          </li>
        </ExperienceList>
      </ExperienceCard>
    </Main>
  );
}
