import styled from "styled-components";
import Main from "./Main";
export default function References() {
const ReferenceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  text-align: left;
  background-color: #f5fff5;
  padding: 10px;
  color: #2f4f2f;

  @media screen and (max-width: 1000px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const TableData = styled.td`
  padding: 10px;
  border-top: 1px solid #ccc;
  color: #333;

  @media screen and (max-width: 1000px) {
    font-size: 14px;
    padding: 8px;
  }
`;


  return (
    <Main>
      <h2>References</h2>
      <ReferenceTable>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Organization</TableHeader>
            <TableHeader>Email</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>John Doe</TableData>
            <TableData>Software Engineering Manager</TableData>
            <TableData>Meta</TableData>
            <TableData>john.doe@meta.com</TableData>
          </tr>
          <tr>
            <TableData>Jane Smith</TableData>
            <TableData>Consultant</TableData>
            <TableData>NBPW</TableData>
            <TableData>jane.smith@pwc.com</TableData>
          </tr>
          <tr>
            <TableData>Lebron Johnson</TableData>
            <TableData>Program Director</TableData>
            <TableData>Word is Bond PDX</TableData>
            <TableData>alx@dpdx.org</TableData>
          </tr>
        </tbody>
      </ReferenceTable>
    </Main>
  );
}
