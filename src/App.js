import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/Services/Services';
import Qualifacation from './components/qualification/Qualifacation';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Work from './components/work/Work';

const App = () => {
  return (
    <>
    <Header />
    <main>
      <Home />
      <About />
      <Skills />
      <Qualifacation />
      <Work />
      <Contact />
    </main>
    <Footer />
    <Scrollup />
    </>
  );
}

export default App;
