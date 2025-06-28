
import React from 'react';
import FadeInSection from './FadeInSection';

const advantages = [
    { title: '⚡ Unrivaled Speed to Scale', description: 'Our AI-powered systems condense traditional growth cycles, delivering accelerated results.' },
    { title: '🎯 Data-Driven Precision', description: 'Every decision is backed by comprehensive data analysis, ensuring optimal ad spend and higher conversions.' },
    { title: '⚙️ End-to-End Growth System', description: 'We don\'t just run ads; we build and optimize the entire funnel from offer to creative to conversion.' },
    { title: '🧑‍💻 "AI Growth Operator" Advantage', description: 'We fuse strategic insight with automated efficiency, positioning you as a premium operator with a proven system.' },
    { title: '🎬 No Content Creation Burden', description: 'Our process minimizes the need for clients to produce constant content by leveraging existing assets and directing specialized freelancers.' },
    { title: '💰 Measurable Impact', description: 'Our focus is squarely on the KPIs that drive your bottom line, like ROAS, CPL, and AOV.' }
];

const Advantage: React.FC = () => {
    return (
        <FadeInSection className="py-16 md:py-24 bg-white -mx-6 px-6 sm:-mx-10 sm:px-10">
            <div className="text-center max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-12">The Sloe Media Advantage</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {advantages.map(adv => (
                    <div key={adv.title} className="p-6">
                        <h4 className="text-xl font-bold mb-2">{adv.title}</h4>
                        <p className="text-slate-600">{adv.description}</p>
                    </div>
                ))}
            </div>
        </FadeInSection>
    );
};

export default Advantage;
