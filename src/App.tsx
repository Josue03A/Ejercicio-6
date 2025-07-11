import React from 'react';
import { Container } from '@mui/material';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Experience from './components/Experience';

const App = () => {
  return (
    <Container>
      <AboutMe />
      <Skills />
      <Projects />
      <Languages />
      <Experience />
    </Container>
  );
};

export default App;