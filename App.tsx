
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Process from './components/Process';
import Clients from './components/Clients';
import Advantage from './components/Advantage';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6">
        <Hero />
        <Philosophy />
        <Services />
        <Process />
        <Clients />
        <Advantage />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default App;
