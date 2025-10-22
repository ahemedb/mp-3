import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import {Routes, Route} from "react-router";
import Home from "./mains/Home";
import Education from "./mains/Education";
import Experience from "./mains/Experience";
import Projects from "./mains/Projects";
import References from "./mains/References";
import Leadership from "./mains/Leadership";
import styled from "styled-components";

export default function Root(){

   const PageContainer = styled.div`
    display: flex;
     height: 100vh;
    flex-direction: column;
    width: 80vw;
    background-color: white;
    margin: 0 auto;
  `;

  const Container = styled.div`
     display: flex;
    flex-direction: row;
    flex: 1;
    height: 100%;  
    @media screen and (max-width:1000px){
    flex-direction: column;
    }
  `;

  const MainWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  `;
    return (
        <>
       <PageContainer>
      <Header />
      <Container>
        <Nav />
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </MainWrapper>
      </Container>
      <Footer />
    </PageContainer>

        </>
    )
}