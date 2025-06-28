import { useState } from 'react';

const OurWork = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      category: "PRODUCT DESIGN",
      title: "Aethel Audio",
      subtitle: "Premium Headphones",
      stats: "3 Designs • 2 Concepts",
      cardImage: "/images/headphone brand 2.jpg",
      backgroundImage: "/images/headphone brand 2.jpg",
      leftBlockTitle: "AETHEL AUDIO LIFESTYLE",
      leftBlockDescription: "AI-assisted product photography for premium headphones creating stunning visual narratives.",
      caseStudyUrl: "/case-study/aethel-audio"
    },
    {
      id: 2,
      category: "ENVIRONMENTAL CAMPAIGN",
      title: "Happy Earth",
      subtitle: "Conservation Initiative", 
      stats: "5 Campaigns • 8 Designs",
      cardImage: "/images/save the planet 1.jpg",
      backgroundImage: "/images/save the planet 1.jpg",
      leftBlockTitle: "HAPPY EARTH DAY CAMPAIGN",
      leftBlockDescription: "AI-generated imagery for environmental awareness and conservation initiatives worldwide.",
      caseStudyUrl: "/case-study/happy-earth"
    },
    {
      id: 3,
      category: "MOBILE APP DESIGN",
      title: "Food Delivery",
      subtitle: "User Experience Design",
      stats: "12 Screens • 6 Features",
      cardImage: "/images/food delivery app 1.jpg",
      backgroundImage: "/images/food delivery app 1.jpg",
      leftBlockTitle: "FOOD DELIVERY APP",
      leftBlockDescription: "Modern food delivery application design with AI-enhanced user experience and intuitive interfaces.",
      caseStudyUrl: "/case-study/food-delivery"
    },
    {
      id: 4,
      category: "FURNITURE DESIGN",
      title: "Chair Collection",
      subtitle: "Modern Furniture Line",
      stats: "4 Designs • 3 Variants",
      cardImage: "/images/chair brand 1.jpg",
      backgroundImage: "/images/chair brand 1.jpg",
      leftBlockTitle: "CHAIR COLLECTION",
      leftBlockDescription: "Artistic representation of unique furniture concepts and visual identities generated with AI.",
      caseStudyUrl: "/case-study/chair-collection"
    }
  ];

  return (
    <>
      <style>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }
        .card-transition {
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .bg-transition {
          transition: background-image 1s ease-in-out;
        }
      `}</style>
    <section id="our-work" className="relative min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out overflow-hidden"
             style={{ backgroundImage: `url(${projects[activeProject].backgroundImage})` }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Section header */}
        <div className="flex justify-center items-center pt-16 pb-8">
          <h2 className="text-white text-4xl font-bold uppercase tracking-wider">Our Work</h2>
        </div>

        {/* Main content area - Only carousel, no left text block */}
        <div className="flex-1 flex items-center justify-center px-8 pb-32">
          {/* Project carousel - centered */}
          <div className="flex space-x-6 overflow-visible">
            {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`
                    relative cursor-pointer transition-all duration-700 ease-out rounded-2xl overflow-hidden
                    ${index === activeProject 
                      ? 'scale-110 z-20 transform translate-y-0' 
                      : 'scale-90 z-10 opacity-75 hover:opacity-90 hover:scale-95'
                    }
                  `}
                  style={{
                    width: index === activeProject ? '320px' : '300px',
                    height: index === activeProject ? '400px' : '380px'
                  }}
                  onClick={() => setActiveProject(index)}
                >
                  {/* Card image - full background */}
                  <img
                    src={project.cardImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    {/* Top section - Category and country flag simulation */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-wider opacity-90">
                        {project.category}
                      </span>
                      <div className="w-6 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-sm"></div>
                    </div>
                    
                    {/* Bottom section - Title, stats, and CTA */}
                    <div>
                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-1 text-shadow-lg">
                        {project.title}
                      </h3>
                      
                      {/* Subtitle */}
                      <p className="text-sm opacity-90 mb-3">
                        {project.subtitle}
                      </p>
                      
                      {/* Stats */}
                      <p className="text-xs opacity-75 mb-4">
                        {project.stats}
                      </p>
                      
                      {/* CTA Button */}
                      <button 
                        className="group flex items-center justify-between w-full bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 hover:bg-white/30 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          // For now, show an alert. In a real app, this would navigate to the case study page
                          alert(`Opening case study for ${project.title}...`);
                          // In a real app with routing: navigate(project.caseStudyUrl);
                        }}
                      >
                        <span className="text-sm font-medium">Explore Now</span>
                        <svg 
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Active indicator */}
                  {index === activeProject && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg"></div>
                  )}
                  
                  {/* Enhanced shadow for active card */}
                  <div className={`
                    absolute inset-0 rounded-2xl transition-all duration-700
                    ${index === activeProject 
                      ? 'shadow-2xl shadow-black/50' 
                      : 'shadow-xl shadow-black/30'
                    }
                  `}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
          </div>
        </div>

        {/* Navigation arrows with enhanced styling */}
        <div className="absolute bottom-8 left-8 flex space-x-4">
          <button 
            onClick={() => setActiveProject(prev => prev > 0 ? prev - 1 : projects.length - 1)}
            className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center text-white text-xl hover:bg-white/20 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
          >
            ←
          </button>
          <button 
            onClick={() => setActiveProject(prev => prev < projects.length - 1 ? prev + 1 : 0)}
            className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center text-white text-xl hover:bg-white/20 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
          >
            →
          </button>
        </div>

        {/* Project counter with enhanced styling */}
        <div className="absolute bottom-8 right-8 text-white">
          <div className="text-5xl font-bold mb-2">0{activeProject + 1}</div>
          <div className="text-sm opacity-60 tracking-wider">/ 0{projects.length}</div>
        </div>
      </div>
    </section>
    </>
  );
};

export default OurWork;
