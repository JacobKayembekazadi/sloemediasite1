const AethelAudioCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="text-sm font-medium mb-4 text-orange-400 uppercase tracking-wider">
              Product Design
            </div>
            <h1 className="text-5xl font-bold mb-6">Aethel Audio Lifestyle</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              AI-assisted product photography for premium headphones creating stunning visual narratives that elevate brand perception and drive consumer engagement.
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image */}
          <div className="mb-16">
            <img
              src="/images/headphone brand 2.jpg"
              alt="Aethel Audio Lifestyle"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Challenge</h3>
              <p className="text-slate-600 leading-relaxed">
                Aethel Audio needed to position their premium headphones in a competitive market. The challenge was to create compelling product photography that would showcase the headphones' premium quality and appeal to discerning audiophiles while highlighting the lifestyle aspect of the brand.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Solution</h3>
              <p className="text-slate-600 leading-relaxed">
                We leveraged cutting-edge AI imaging tools combined with traditional photography principles to create photorealistic lifestyle scenarios. Our approach focused on environmental storytelling, placing the headphones in aspirational contexts that resonate with the target demographic.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Results</h3>
              <ul className="space-y-2">
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  300% increase in product page engagement
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Featured in Design Awards showcase
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  85% improvement in conversion rates
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Client satisfaction: 98%
                </li>
              </ul>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Design Process</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Research & Strategy</h4>
                  <p className="text-slate-600">Analyzed target audience preferences and competitive landscape to inform creative direction.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">AI-Assisted Creation</h4>
                  <p className="text-slate-600">Utilized advanced AI tools to generate multiple lifestyle scenarios and product placements.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Refinement & Optimization</h4>
                  <p className="text-slate-600">Iteratively refined imagery based on client feedback and performance metrics.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Technologies Used</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">AI Tools</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Midjourney</li>
                    <li>DALL-E 3</li>
                    <li>Stable Diffusion</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Design Software</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Adobe Photoshop</li>
                    <li>Figma</li>
                    <li>Lightroom</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-slate-50 p-8 rounded-2xl mb-16">
            <blockquote className="text-lg italic text-slate-700 mb-4">
              "Sloe Media transformed our product imagery completely. The AI-generated lifestyle shots perfectly captured our brand's premium positioning while staying authentic to our values. The results speak for themselves."
            </blockquote>
            <cite className="text-slate-600 font-medium">
              - Sarah Chen, Brand Director at Aethel Audio
            </cite>
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

export default AethelAudioCaseStudy;
