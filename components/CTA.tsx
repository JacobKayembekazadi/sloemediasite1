
import React from 'react';
import FadeInSection from './FadeInSection';

const CTA: React.FC = () => {
  return (
    <FadeInSection id="contact" className="text-center py-20 md:py-32">
      <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Ready to Scale Your Brand?</h3>
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-8">Stop guessing and start engineering your growth. Book a complimentary, no-obligation strategy call with us today and we'll outline a roadmap to scale your business.</p>
      <a href="https://calendly.com/electrofyne/30min" target="_blank" rel="noopener noreferrer" className="bg-cyan-600 text-white px-8 py-4 rounded-lg shadow-lg text-lg font-semibold hover:bg-cyan-700 transition-transform hover:scale-105 inline-block">
        Book Your Free Strategy Call
      </a>
      <p className="mt-4 text-slate-500">
        Or email us at <a href="mailto:mediasloe@gmail.com" className="text-cyan-600 underline hover:text-cyan-700">mediasloe@gmail.com</a>
      </p>
    </FadeInSection>
  );
};

export default CTA;
