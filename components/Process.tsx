
import React from 'react';
import FadeInSection from './FadeInSection';

const processSteps = [
    {
        icon: '📊',
        title: 'Audit',
        description: 'We begin with a deep analysis of your product-market fit, current ad performance, and funnel gaps.'
    },
    {
        icon: '🎯',
        title: 'Strategy',
        description: 'We map out messaging angles, high-impact hooks, and provide precise creative briefs for content.'
    },
    {
        icon: '📈',
        title: 'Media Buying',
        description: 'We run, optimize, and scale paid ads across Meta, TikTok, and Google, focusing relentlessly on performance.'
    },
    {
        icon: '👥',
        title: 'Team Buildout',
        optional: true,
        description: 'We can hire or plug in specialized freelance creators into your workflow if new content production is required.'
    },
    {
        icon: '📉',
        title: 'Reporting',
        description: 'We provide weekly analytics, ROAS insights, and a clear scaling roadmap, automating reporting for full transparency.'
    }
];

const Process: React.FC = () => {
  return (
    <FadeInSection id="process" className="py-16 md:py-24">
      <div className="text-center max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-2">Our Operational Model</h3>
        <p className="text-lg text-slate-600 mb-12">Unlike traditional media buyers, we operate as your <span className="font-bold">AI Growth Operator</span>. We design and implement your entire growth system from the ground up.</p>
      </div>
      <div className="max-w-2xl mx-auto">
        <ol className="relative border-l border-slate-300">
          {processSteps.map((step, index) => (
            <li key={step.title} className={`ml-6 ${index === processSteps.length - 1 ? '' : 'mb-10'}`}>
              <span className="absolute flex items-center justify-center w-8 h-8 bg-cyan-100 rounded-full -left-4 ring-8 ring-white">{step.icon}</span>
              <h4 className="flex items-center mb-1 text-xl font-semibold text-slate-900">
                {step.title}
                {step.optional && <span className="text-sm font-normal text-slate-500 ml-2">(Optional)</span>}
              </h4>
              <p className="text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </FadeInSection>
  );
};

export default Process;
