import React from 'react'

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About'
import Articles from './components/Articles'
import Footer from './components/Footer'

export default function App() {


  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Articles />
      <Footer />
    </div>
  );
}


