interface CaseStudyProps {
  projectId: string;
}

const CaseStudy = ({ projectId }: CaseStudyProps) => {
  const caseStudies = {
    'aethel-audio': {
      title: 'Aethel Audio Lifestyle',
      category: 'Product Design',
      description: 'AI-assisted product photography for premium headphones creating stunning visual narratives.',
      images: ['/images/headphone brand 2.jpg'],
      challenge: 'Create compelling product photography that showcases premium headphones in lifestyle contexts.',
      solution: 'Leveraged AI-powered imaging tools to generate photorealistic lifestyle scenarios.',
      results: ['300% increase in product engagement', 'Featured in design showcase', 'Client satisfaction: 98%']
    },
    'happy-earth': {
      title: 'Happy Earth Day Campaign',
      category: 'Environmental Campaign',
      description: 'AI-generated imagery for environmental awareness and conservation initiatives worldwide.',
      images: ['/images/save the planet 1.jpg'],
      challenge: 'Develop impactful environmental awareness campaign imagery.',
      solution: 'Created emotionally resonant AI-generated visuals highlighting conservation themes.',
      results: ['2M+ campaign reach', 'Featured by environmental organizations', '45% increase in engagement']
    },
    'food-delivery': {
      title: 'Food Delivery App',
      category: 'Mobile App Design',
      description: 'Modern food delivery application design with AI-enhanced user experience.',
      images: ['/images/food delivery app 1.jpg', '/images/food delivery app 2.jpg'],
      challenge: 'Design intuitive food delivery app with seamless user experience.',
      solution: 'AI-powered UX optimization and modern interface design principles.',
      results: ['40% faster order completion', '95% user satisfaction', 'App Store featured']
    },
    'chair-collection': {
      title: 'Chair Collection',
      category: 'Furniture Design',
      description: 'Artistic representation of unique furniture concepts and visual identities.',
      images: ['/images/chair brand 1.jpg', '/images/chair brand 2.jpg'],
      challenge: 'Visualize innovative furniture concepts for modern living spaces.',
      solution: 'AI-generated conceptual designs showcasing form and function.',
      results: ['Design award finalist', '500k+ social media impressions', 'Manufacturing interest']
    }
  };

  const study = caseStudies[projectId as keyof typeof caseStudies];

  if (!study) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="text-sm font-medium mb-4 text-orange-400 uppercase tracking-wider">
              {study.category}
            </div>
            <h1 className="text-5xl font-bold mb-6">{study.title}</h1>
            <p className="text-xl text-slate-300 leading-relaxed">{study.description}</p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {study.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${study.title} ${index + 1}`}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            ))}
          </div>

          {/* Content sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Challenge</h3>
              <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Solution</h3>
              <p className="text-slate-600 leading-relaxed">{study.solution}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Results</h3>
              <ul className="space-y-2">
                {study.results.map((result, index) => (
                  <li key={index} className="text-slate-600 flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Back button */}
      <div className="container mx-auto px-6 pb-16">
        <button 
          onClick={() => window.history.back()}
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors duration-300"
        >
          ← Back to Our Work
        </button>
      </div>
    </div>
  );
};

export default CaseStudy;
