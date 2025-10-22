import styled from "styled-components";
import Main from "./Main";
export default function Leadership() {
const LeadershipCard = styled.div`
  background-color: #f5fff5;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 12px;

  @media screen and (max-width: 1000px) {
    padding: 15px;
  }
`;

const LeadershipHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 8px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LeadershipName = styled.h2`
  font-size: 24px;
  margin: 0;
  color: #2f4f2f;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;

const LeadershipLocation = styled.h2`
  font-size: 18px;
  color: #556b2f;
  margin: 0;
  text-align: right;

  @media screen and (max-width: 1000px) {
    text-align: left;
    margin-top: 5px;
    font-size: 14px;
  }
`;

const LeadershipSubheading = styled.h3`
  font-size: 16px;
  margin-top: 10px;
  color: #333;

  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;

const LeadershipList = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
  line-height: 1.6;
  color: #444;

  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;


  return (
    <Main>
         <title>Leadership and Professional Development | Resume</title>
      <LeadershipCard>
        <LeadershipHeader>
          <LeadershipName>Management Leadership for Tomorrow</LeadershipName>
          <LeadershipLocation>Washington, DC</LeadershipLocation>
        </LeadershipHeader>
        <LeadershipSubheading>
          Career Preparation Fellow | Nov 2023 – Present
        </LeadershipSubheading>
        <LeadershipList>
          <li>
            Accepted into a selective 18-month professional development program
            for high-achieving diverse talent.
          </li>
        </LeadershipList>
      </LeadershipCard>

      <LeadershipCard>
        <LeadershipHeader>
          <LeadershipName>Students of East African Ancestry</LeadershipName>
          <LeadershipLocation>Boston, MA</LeadershipLocation>
        </LeadershipHeader>
        <LeadershipSubheading>
          Public Relations Chair | Sep 2022 – May 2023
        </LeadershipSubheading>
        <LeadershipList>
          <li>
            Played a pivotal role in establishing SEAA from inception,
            contributing to its vision and mission.
          </li>
          <li>
            Managed SEAA’s internal and external communications, ensuring
            consistent messaging across all platforms.
          </li>
        </LeadershipList>
      </LeadershipCard>

      <LeadershipCard>
        <LeadershipHeader>
          <LeadershipName>Word is Bond PDX</LeadershipName>
          <LeadershipLocation>Portland, OR</LeadershipLocation>
        </LeadershipHeader>
        <LeadershipSubheading>
          Community Ambassador | Jan 2022 – Aug 2023
        </LeadershipSubheading>
        <LeadershipList>
          <li>
            Spearheaded a neighborhood tour attended by a gubernatorial
            candidate, elected officials, and over 100 community members.
          </li>
          <li>
            Led a successful fundraising effort that enabled a leadership trip
            to Ghana, facilitating meetings with ministers and school officials.
          </li>
        </LeadershipList>
      </LeadershipCard>
    </Main>
  );
}
