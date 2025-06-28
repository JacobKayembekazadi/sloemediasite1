
import React from 'react';
import FadeInSection from './FadeInSection';

const Hero: React.FC = () => {
  return (
    <FadeInSection className="text-center py-20 md:py-32">
      <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">Engineer Your Brand's Growth with AI.</h2>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-8">We combine strategic creativity with advanced AI to build high-performance growth engines for your business. Attract, convert, and scale—predictably.</p>
      <a href="#contact" className="bg-cyan-600 text-white px-8 py-4 rounded-lg shadow-lg text-lg font-semibold hover:bg-cyan-700 transition-transform hover:scale-105 inline-block">Book a Free Strategy Call</a>
    </FadeInSection>
  );
};

export default Hero;
