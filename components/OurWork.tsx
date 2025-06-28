import { useState } from 'react';

const OurWork = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

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
      leftBlockDescription: "AI-assisted product photography for premium headphones creating stunning visual narratives."
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
      leftBlockDescription: "AI-generated imagery for environmental awareness and conservation initiatives worldwide."
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
      leftBlockDescription: "Modern food delivery application design with AI-enhanced user experience and intuitive interfaces."
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
      leftBlockDescription: "Artistic representation of unique furniture concepts and visual identities generated with AI."
    }
  ];

  const openFullImage = (imageUrl: string) => {
    console.log('openFullImage called with:', imageUrl);
    setCurrentImage(imageUrl);
    setShowFullImage(true);
    console.log('State updated - showFullImage should be true');
  };

  const closeFullImage = () => {
    setShowFullImage(false);
    setCurrentImage('');
  };
  // If full image is open, show it
  if (showFullImage) {
    return (
      <div 
        className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
        onClick={closeFullImage}
      >
        {/* Close button */}
        <button 
          onClick={closeFullImage}
          title="Close image viewer"
          className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Full screen image */}
        <img
          src={currentImage}
          alt="Project Image"
          className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        
        {/* Image info overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="text-sm">Click anywhere outside the image to close</p>
          </div>
        </div>
      </div>
    );
  }

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
            <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wider">Our Work</h2>
          </div>

          {/* Main content area - Responsive carousel */}
          <div className="flex-1 flex items-center justify-center px-2 md:px-8 pb-20 md:pb-32">
            <div className="flex md:space-x-6 space-x-4 md:flex-nowrap flex-nowrap overflow-x-auto w-full scrollbar-hide">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`
                    relative cursor-pointer transition-all duration-700 ease-out rounded-2xl overflow-hidden
                    ${index === activeProject 
                      ? 'md:scale-110 md:z-20 md:transform md:translate-y-0 scale-100 z-10' 
                      : 'md:scale-90 md:z-10 md:opacity-75 md:hover:opacity-90 md:hover:scale-95 opacity-80'
                    }
                  `}
                  style={{
                    minWidth: '80vw',
                    maxWidth: 340,
                    width: '90vw',
                    height: '320px',
                    marginRight: '1rem',
                  }}
                  onClick={(e) => {
                    if (!(e.target as HTMLElement).closest('.explore-button')) {
                      setActiveProject(index);
                    }
                  }}
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
                  <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-between text-white">
                    {/* Top section - Category and country flag simulation */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-wider opacity-90">
                        {project.category}
                      </span>
                      <div className="w-6 h-4 bg-gradient-to-r from-red-500 to-red-600 rounded-sm"></div>
                    </div>
                    
                    {/* Bottom section - Title, stats, and CTA */}
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold mb-1 text-shadow-lg">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm opacity-90 mb-2 md:mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-xs opacity-75 mb-2 md:mb-4">
                        {project.stats}
                      </p>
                      <button
                        type="button"
                        className="explore-button group flex items-center justify-between w-full bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3 hover:bg-white/30 transition-all duration-300 cursor-pointer focus:outline-none text-xs md:text-sm"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openFullImage(project.cardImage);
                        }}
                      >
                        <span className="font-medium">Explore Now</span>
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
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg hidden md:block"></div>
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

          {/* Navigation arrows and counter - hide on mobile */}
          <div className="hidden md:absolute md:bottom-8 md:left-8 md:flex md:space-x-4">
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
          <div className="hidden md:absolute md:bottom-8 md:right-8 md:block text-white">
            <div className="text-5xl font-bold mb-2">0{activeProject + 1}</div>
            <div className="text-sm opacity-60 tracking-wider">/ 0{projects.length}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
