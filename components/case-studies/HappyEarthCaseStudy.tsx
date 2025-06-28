const HappyEarthCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="text-sm font-medium mb-4 text-orange-400 uppercase tracking-wider">
              Environmental Campaign
            </div>
            <h1 className="text-5xl font-bold mb-6">Happy Earth Day Campaign</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              AI-generated imagery for environmental awareness and conservation initiatives worldwide, creating powerful visual narratives that inspire action and change.
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
              src="/images/save the planet 1.jpg"
              alt="Happy Earth Day Campaign"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Challenge</h3>
              <p className="text-slate-600 leading-relaxed">
                Environmental organizations needed compelling visual content to raise awareness about climate change and conservation. The challenge was to create emotionally resonant imagery that would cut through the noise and inspire real action among diverse global audiences.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Solution</h3>
              <p className="text-slate-600 leading-relaxed">
                We developed a comprehensive visual campaign using AI-generated imagery that highlighted both the beauty of our planet and the urgency of conservation. Our approach combined hope and action, creating visuals that motivate rather than overwhelm.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Results</h3>
              <ul className="space-y-2">
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  2.5M+ social media impressions
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Featured by major environmental organizations
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  65% increase in campaign engagement
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  15 countries adopted the campaign visuals
                </li>
              </ul>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-green-50 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-6 text-green-900">Environmental Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                <div className="text-sm text-green-700">New environmental advocates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$250K</div>
                <div className="text-sm text-green-700">Funds raised for conservation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">12</div>
                <div className="text-sm text-green-700">Partner organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
                <div className="text-sm text-green-700">Positive sentiment score</div>
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Creative Approach</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Emotional Connection</h4>
                  <p className="text-slate-600">Created visuals that evoke wonder and responsibility for our planet's beauty.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Cultural Sensitivity</h4>
                  <p className="text-slate-600">Ensured imagery resonated across different cultures and communities worldwide.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Call to Action</h4>
                  <p className="text-slate-600">Balanced awareness with actionable steps that individuals could take.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Campaign Elements</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Social Media Assets</h4>
                  <p className="text-sm text-slate-600">Instagram posts, stories, and reels optimized for engagement</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Print Materials</h4>
                  <p className="text-sm text-slate-600">Posters, flyers, and educational brochures</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Digital Banners</h4>
                  <p className="text-sm text-slate-600">Web banners and email campaign headers</p>
                </div>
              </div>
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

export default HappyEarthCaseStudy;
