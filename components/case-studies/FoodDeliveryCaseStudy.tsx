const FoodDeliveryCaseStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="text-sm font-medium mb-4 text-orange-400 uppercase tracking-wider">
              Mobile App Design
            </div>
            <h1 className="text-5xl font-bold mb-6">Food Delivery App</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Modern food delivery application design with AI-enhanced user experience and intuitive interfaces that revolutionize how people order food.
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
              src="/images/food delivery app 1.jpg"
              alt="Food Delivery App Interface"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="/images/food delivery app 2.jpg"
              alt="Food Delivery App Features"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Challenge</h3>
              <p className="text-slate-600 leading-relaxed">
                Design a food delivery app that stands out in a saturated market while providing seamless user experience. The challenge was to create an interface that reduces friction in the ordering process and incorporates AI-powered recommendations.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Solution</h3>
              <p className="text-slate-600 leading-relaxed">
                We developed a comprehensive UX/UI design system with AI-powered features including smart recommendations, predictive ordering, and personalized meal suggestions based on user preferences and dining history.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Results</h3>
              <ul className="space-y-2">
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  40% faster order completion time
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  95% user satisfaction rating
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Featured in App Store
                </li>
                <li className="text-slate-600 flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  85% increase in repeat orders
                </li>
              </ul>
            </div>
          </div>

          {/* App Features */}
          <div className="bg-slate-50 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">AI Recommendations</h4>
                <p className="text-sm text-slate-600">Smart meal suggestions based on preferences, weather, and time of day</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Quick Reorder</h4>
                <p className="text-sm text-slate-600">One-tap reordering of favorite meals and previous orders</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Live Tracking</h4>
                <p className="text-sm text-slate-600">Real-time order tracking with accurate delivery estimates</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Smart Payments</h4>
                <p className="text-sm text-slate-600">Secure, one-click payments with multiple payment options</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Social Reviews</h4>
                <p className="text-sm text-slate-600">Community-driven reviews and ratings system</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Personalization</h4>
                <p className="text-sm text-slate-600">Customized interface based on user behavior and preferences</p>
              </div>
            </div>
          </div>

          {/* Design Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">UX Process</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">User Research</h4>
                  <p className="text-slate-600">Conducted interviews with 150+ users to understand pain points in food ordering.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Wireframing</h4>
                  <p className="text-slate-600">Created low-fidelity wireframes focusing on user flow optimization.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Prototyping</h4>
                  <p className="text-slate-600">Built interactive prototypes for user testing and stakeholder validation.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Testing & Iteration</h4>
                  <p className="text-slate-600">Conducted A/B tests and user testing sessions to refine the design.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Technical Stack</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Design Tools</h4>
                  <p className="text-sm text-slate-600">Figma, Adobe XD, Principle for prototyping</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">AI Integration</h4>
                  <p className="text-sm text-slate-600">Machine learning models for personalized recommendations</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Analytics</h4>
                  <p className="text-sm text-slate-600">User behavior tracking and conversion optimization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-slate-50 p-8 rounded-2xl mb-16">
            <blockquote className="text-lg italic text-slate-700 mb-4">
              "The app design exceeded our expectations. The AI-powered features have significantly improved user engagement, and the intuitive interface has made ordering food a delightful experience for our customers."
            </blockquote>
            <cite className="text-slate-600 font-medium">
              - Mark Rodriguez, CEO at QuickBite
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

export default FoodDeliveryCaseStudy;
