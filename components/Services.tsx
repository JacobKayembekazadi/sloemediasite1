
import React, { useState } from 'react';
import { Service } from '../types';
import FadeInSection from './FadeInSection';

const services: Service[] = [
  {
    icon: '🚀',
    title: 'Offer Strategy',
    description: 'We work with you to create irresistible hooks, bundles, and upsells, ensuring your product or service is positioned for maximum conversion and profitability from day one.'
  },
  {
    icon: '📸',
    title: 'Ad Creative Production & Direction',
    description: 'We guide the creation of short-form content, UGC, and product shots optimized for paid ads. We provide precise "Creative Direction Briefs" and can manage freelance creators so you don’t need to be on camera.'
  },
  {
    icon: '💸',
    title: 'Paid Ads Management (Ad Science)',
    description: 'Full setup and ongoing optimization of paid advertising campaigns across Meta, TikTok, and Google. We leverage our AI-powered insights for optimal budget allocation and ROAS.'
  },
  {
    icon: '🛒',
    title: 'Landing Page Optimization',
    description: 'Expert conversion rate optimization (CRO) design and funnel flow development. We ensure your landing pages are finely tuned to convert visitors into customers or qualified leads.'
  },
  {
    icon: '🧠',
    title: 'Brand Positioning & Consulting',
    description: 'We help you dial in your core messaging, refine audience targeting, and develop a distinctive brand voice that cuts through the noise and resonates with your ideal customers.'
  }
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <FadeInSection id="services" className="py-16 md:py-24">
      <div className="text-center max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-2">What We Offer: ScaleKit™</h3>
        <p className="text-lg text-slate-600 mb-12">Our flagship offering, <span className="font-bold">ScaleKit</span>, is a comprehensive, done-for-you system engineered to accelerate your brand's growth. We focus on engineering growth with: <span className="font-semibold text-cyan-700">Content that drives clicks, Funnels that convert, and Offers that print money.</span></p>
      </div>
      
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <div className="flex flex-col space-y-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                onClick={() => setActiveIndex(index)}
                className={`bg-white p-6 rounded-lg cursor-pointer border-l-4 transition-all duration-300 ease-in-out shadow-md hover:-translate-y-1 hover:shadow-lg ${
                  activeIndex === index
                    ? 'border-cyan-600 bg-cyan-50'
                    : 'border-transparent'
                }`}
              >
                <h5 className="text-xl font-semibold">{service.icon} {service.title}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-8">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl min-h-[300px] sticky top-28">
            {activeService && (
              <>
                <h4 className="text-3xl font-bold mb-4">{activeService.icon} {activeService.title}</h4>
                <p className="text-lg text-slate-600">{activeService.description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Services;
