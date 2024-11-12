import React from 'react';
import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';
import Navbar from './components/navbar';
import AboutMe from './components/AboutMe';

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar/>
      <Home />
      <AboutMe/>
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
