const ChairCollectionCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="text-sm font-medium mb-4 text-orange-400 uppercase tracking-wider">
              Furniture Design
            </div>
            <h1 className="text-5xl font-bold mb-6">Chair Collection</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Artistic representation of unique furniture concepts and visual identities generated with AI, showcasing the future of furniture design and manufacturing.
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img
              src="/images/chair brand 1.jpg"
              alt="Chair Collection Design 1"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="/images/chair brand 2.jpg"
              alt="Chair Collection Design 2"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Challenge</h3>
              <p className="text-slate-600 leading-relaxed">
                A modern furniture manufacturer needed to explore innovative chair designs that would appeal to contemporary consumers while maintaining functionality and manufacturability. The challenge was to push creative boundaries while staying practical.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Solution</h3>
              <p className="text-slate-600 leading-relaxed">
                We utilized AI-powered design tools to generate hundreds of unique chair concepts, exploring various styles, materials, and forms. Our approach combined artistic vision with practical manufacturing considerations to create a cohesive collection.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Results</h3>
              <ul className="space-y-2">
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Design award finalist
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  500K+ social media impressions
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Manufacturing partnerships secured
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Featured in design publications
                </li>
              </ul>
            </div>
          </div>

          {/* Design Philosophy */}
          <div className="bg-slate-50 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Design Philosophy</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Form Follows Function</h4>
                <p className="text-sm text-slate-600">Every design element serves both aesthetic and practical purposes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Sustainable Materials</h4>
                <p className="text-sm text-slate-600">Focus on eco-friendly and recyclable materials</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Modern Aesthetics</h4>
                <p className="text-sm text-slate-600">Clean lines and contemporary appeal for modern living</p>
              </div>
            </div>
          </div>

          {/* Collection Highlights */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Collection Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">The Curve Series</h4>
                <p className="text-slate-600 mb-4">
                  Featuring flowing, organic curves that provide exceptional comfort while maintaining structural integrity. Perfect for modern living spaces and offices.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Ergonomic design for extended sitting</li>
                  <li>• Sustainable bamboo construction</li>
                  <li>• Stackable for space efficiency</li>
                </ul>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-slate-900 mb-4">The Geometric Line</h4>
                <p className="text-slate-600 mb-4">
                  Bold, angular designs that make a statement while providing practical seating solutions. Ideal for contemporary dining and workspace environments.
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Minimalist aesthetic approach</li>
                  <li>• Modular assembly system</li>
                  <li>• Premium steel frame construction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Creative Process</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Concept Generation</h4>
                  <p className="text-slate-600">AI-powered ideation to explore hundreds of design possibilities.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">3D Modeling</h4>
                  <p className="text-slate-600">Detailed 3D models for visualization and manufacturing assessment.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Material Selection</h4>
                  <p className="text-slate-600">Careful consideration of sustainable and durable materials.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Prototype Testing</h4>
                  <p className="text-slate-600">Physical prototypes for comfort and durability validation.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Manufacturing Considerations</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Production Efficiency</h4>
                  <p className="text-sm text-slate-600">Designs optimized for streamlined manufacturing processes</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Cost Optimization</h4>
                  <p className="text-sm text-slate-600">Material usage minimized without compromising quality</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Quality Assurance</h4>
                  <p className="text-sm text-slate-600">Rigorous testing protocols for durability and safety</p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-slate-50 p-8 rounded-2xl mb-16">
            <blockquote className="text-lg italic text-slate-700 mb-4">
              "The AI-generated chair concepts opened up new possibilities we never considered. The designs are both beautiful and practical, and we're excited to bring them to market."
            </blockquote>
            <cite className="text-slate-600 font-medium">
              - Elena Vasquez, Design Director at Modern Living Co.
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

export default ChairCollectionCaseStudy;
