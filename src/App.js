import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footers from './components/Footers';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Navbar />
        <MainContent>
          <div id="hero"><Hero /></div>
          <div id="about"><About /></div>
          <div id="experience"><Experience /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="contact"><Contact /></div>
        </MainContent>
        <Footers />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;