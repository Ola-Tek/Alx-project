import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import PromptPage from './components/PromptPage/PromptPage';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <div className='container'>
          <Title subTitle='Our Programs' title='What we offer' />
          <Programs />
          <About />
          <Title subTitle='Be Obsessed With Learning' title='B.O.W.L - GALLERY' />
          <Campus />
          <Title subTitle='Do You Know?' title='Who is B0WL#?' />
          <Testimonials />
          <Title subTitle='Contact Us' title='Get in Touch' />
          <Contact />
          <Footer />
          <Link to="/prompt">Go to Prompt Page</Link> {/* Add a Link component to navigate to the PromptPage */}
        </div>
        <Routes>
          <Route path="/prompt" element={<PromptPage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;