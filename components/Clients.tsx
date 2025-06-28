
import React, { useState } from 'react';
import { ClientDetails, ClientType } from '../types';
import FadeInSection from './FadeInSection';

const clientData: Record<ClientType, ClientDetails> = {
  product: {
    title: 'For Product-Based Brands (eCommerce, DTC)',
    goal: 'Sell physical products and cultivate repeat buyers.',
    painPoint: 'Low ROAS, ad fatigue, and creative burnout.',
    focus: [
      'Creative briefs for high-converting UGC',
      'Conversion-focused product pages',
      'Retargeting flows & ROAS optimization',
      'Scaling ad campaigns using automations'
    ],
    metrics: ['ROAS', 'Cost per Purchase', 'Average Order Value (AOV)']
  },
  service: {
    title: 'For Service-Based Clients (Coaches, Creators)',
    goal: 'Book calls, sell high-ticket offers, and build trust.',
    painPoint: 'No leads, inconsistent income, and manual client acquisition.',
    focus: [
      'Offer positioning & funnel audits',
      'Paid ad campaigns that generate leads & booked calls',
      'Automated workflows to qualify, email, & close leads',
      'Lead magnet & tripwire strategy'
    ],
    metrics: ['Cost per Lead (CPL)', 'Booking %', 'Funnel Conversion Rate (CVR)']
  }
};

const ClientContent: React.FC<{ data: ClientDetails }> = ({ data }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h4 className="text-2xl font-bold mb-4">{data.title}</h4>
      <p className="mb-2"><strong className="text-slate-800">Goal:</strong> {data.goal}</p>
      <p><strong className="text-slate-800">Pain Point Solved:</strong> {data.painPoint}</p>
    </div>
    <div>
      <h5 className="font-bold text-lg mb-3">How We Focus:</h5>
      <ul className="list-none space-y-2 mb-4">
        {data.focus.map(item => <li key={item} className="flex items-start"><span className="text-cyan-500 mr-2 mt-1">✓</span> {item}</li>)}
      </ul>
      <h5 className="font-bold text-lg mb-2">Key Metrics We Track:</h5>
      <div className="flex flex-wrap gap-2">
        {data.metrics.map(metric => <span key={metric} className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-full">{metric}</span>)}
      </div>
    </div>
  </div>
);

const Clients: React.FC = () => {
  const [activeType, setActiveType] = useState<ClientType>('product');

  const getButtonClasses = (type: ClientType) => {
    return activeType === type
      ? 'bg-cyan-600 text-white'
      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50';
  };

  return (
    <FadeInSection id="clients" className="py-16 md:py-24">
      <div className="text-center max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-2">Who We Help</h3>
        <p className="text-lg text-slate-600 mb-8">Our ideal clients have a product or offer that already sells. We help them scale it. We specialize in igniting growth for two primary segments. Select your business type to see how we can help.</p>
      </div>
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setActiveType('product')}
            className={`px-6 py-3 text-lg font-medium rounded-l-lg transition-colors ${getButtonClasses('product')}`}
          >
            🧢 Product-Based Brands
          </button>
          <button
            type="button"
            onClick={() => setActiveType('service')}
            className={`px-6 py-3 text-lg font-medium rounded-r-lg transition-colors ${getButtonClasses('service')}`}
          >
            🧠 Service-Based Clients
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <ClientContent data={clientData[activeType]} />
      </div>
    </FadeInSection>
  );
};

export default Clients;
