
import React from 'react';
import FadeInSection from './FadeInSection';

const Philosophy: React.FC = () => {
  return (
    <FadeInSection className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Philosophy</h3>
        <p className="text-lg text-slate-600 mb-12">At Sloe Media, we don't just apply AI; we engineer growth systems. Our unique strength lies in the seamless integration of artificial intelligence with human strategic insight and creative direction. This powerful synergy forms the foundation of our systems, enabling us to build full-stack growth engines that consistently perform.</p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            <h4 className="text-2xl font-bold mb-3">🤖 AI for Precision & Scale</h4>
            <p className="text-slate-600">Our proprietary AI systems analyze vast datasets, predict market trends, and identify high-converting audience segments with unmatched speed. This allows us to rapidly prototype, test, and scale growth initiatives with data-driven confidence.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            <h4 className="text-2xl font-bold mb-3">🧠 Human for Vision & Resonance</h4>
            <p className="text-slate-600">Our seasoned brand strategists interpret AI insights, craft compelling brand narratives, and design offers that genuinely connect. We ensure your brand speaks with an authentic, conversion-focused voice that builds trust and loyalty.</p>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Philosophy;
