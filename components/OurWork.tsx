import { useState } from 'react';

const OurWork = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const slides = [
    {
      id: 1,
      region: "Product Design",
      title: "AETHEL AUDIO",
      subtitle: "Premium Headphones",
      description: "AI-assisted product photography for premium headphones creating stunning visual narratives that showcase innovative design and superior audio quality.",
      backgroundImage: "/images/headphone brand 2.jpg",
      thumbnails: [
        {
          id: "aethel-lifestyle",
          image: "/images/headphone brand 2.jpg",
          region: "Product Design",
          destination: "Lifestyle Photography"
        },
        {
          id: "chair-brand-2",
          image: "/images/chair brand 2.jpg",
          region: "Furniture Design",
          destination: "Chair Collection V2"
        },
        {
          id: "food-delivery-2",
          image: "/images/food delivery app 2.jpg",
          region: "Mobile App Design",
          destination: "App Interface Design"
        },
        {
          id: "food-delivery-3",
          image: "/images/food delivery app 3.jpg",
          region: "Mobile App Design",
          destination: "User Experience Flow"
        },
        {
          id: "chair-brand-4",
          image: "/images/chair brand 4.jpg",
          region: "Furniture Design",
          destination: "Modern Chair Series"
        }
      ]
    },
    {
      id: 2,
      region: "Environmental Campaign",
      title: "HAPPY EARTH",
      subtitle: "Conservation Initiative",
      description: "AI-generated imagery for environmental awareness and conservation initiatives worldwide, promoting sustainable practices and eco-friendly solutions.",
      backgroundImage: "/images/save the planet 1.jpg",
      thumbnails: [
        {
          id: "happy-earth-main",
          image: "/images/save the planet 1.jpg",
          region: "Environmental Campaign",
          destination: "Happy Earth Initiative"
        },
        {
          id: "food-delivery-4",
          image: "/images/food delivery app 4.jpg",
          region: "Mobile App Design",
          destination: "Green Delivery Solutions"
        },
        {
          id: "food-delivery-5",
          image: "/images/food delivery app 5.jpg",
          region: "Mobile App Design",
          destination: "Eco-Friendly Interface"
        },
        {
          id: "aethel-audio",
          image: "/images/headphone brand 2.jpg",
          region: "Product Design",
          destination: "Sustainable Audio"
        },
        {
          id: "chair-collection",
          image: "/images/chair brand 1.jpg",
          region: "Furniture Design",
          destination: "Eco Chair Design"
        }
      ]
    },
    {
      id: 3,
      region: "Mobile App Design",
      title: "FOOD DELIVERY",
      subtitle: "User Experience Design",
      description: "Modern food delivery application design with AI-enhanced user experience and intuitive interfaces that streamline the ordering process.",
      backgroundImage: "/images/food delivery app 1.jpg",
      thumbnails: [
        {
          id: "food-delivery-main",
          image: "/images/food delivery app 1.jpg",
          region: "Mobile App Design",
          destination: "Main App Interface"
        },
        {
          id: "food-delivery-6",
          image: "/images/food delivery app 6.jpg",
          region: "Mobile App Design",
          destination: "Advanced Features"
        },
        {
          id: "food-delivery-screens",
          image: "/images/food delivery app 2.jpg",
          region: "Mobile App Design",
          destination: "Multiple Screens"
        },
        {
          id: "food-delivery-ux",
          image: "/images/food delivery app 3.jpg",
          region: "Mobile App Design",
          destination: "UX Research"
        },
        {
          id: "aethel-audio",
          image: "/images/headphone brand 2.jpg",
          region: "Product Design",
          destination: "Audio Integration"
        }
      ]
    },
    {
      id: 4,
      region: "Furniture Design", 
      title: "CHAIR COLLECTION",
      subtitle: "Modern Furniture Line",
      description: "Artistic representation of unique furniture concepts and visual identities generated with AI, showcasing innovative design and craftsmanship.",
      backgroundImage: "/images/chair brand 1.jpg",
      thumbnails: [
        {
          id: "chair-collection-main",
          image: "/images/chair brand 1.jpg",
          region: "Furniture Design",
          destination: "Original Collection"
        },
        {
          id: "chair-brand-2-variant",
          image: "/images/chair brand 2.jpg",
          region: "Furniture Design",
          destination: "Contemporary Series"
        },
        {
          id: "chair-brand-4-variant",
          image: "/images/chair brand 4.jpg",
          region: "Furniture Design",
          destination: "Premium Line"
        },
        {
          id: "food-delivery-inspiration",
          image: "/images/food delivery app 5.jpg",
          region: "Digital Integration",
          destination: "Smart Furniture App"
        },
        {
          id: "happy-earth-sustainable",
          image: "/images/save the planet 1.jpg",
          region: "Sustainable Design",
          destination: "Eco-Friendly Materials"
        }
      ]
    }
  ];

  const openFullImage = (imageUrl: string) => {
    setCurrentImage(imageUrl);
    setShowFullImage(true);
  };

  const closeFullImage = () => {
    setShowFullImage(false);
    setCurrentImage('');
  };

  const nextSlide = () => {
    setActiveSlide(prev => prev < slides.length - 1 ? prev + 1 : 0);
  };

  const prevSlide = () => {
    setActiveSlide(prev => prev > 0 ? prev - 1 : slides.length - 1);
  };

  const currentSlide = slides[activeSlide];
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
        .travel-hero-slider {
          font-family: 'Montserrat', sans-serif;
        }
        .text-shadow-lg {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
        }
        .thumbnail-carousel::-webkit-scrollbar {
          width: 6px;
        }
        .thumbnail-carousel::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .thumbnail-carousel::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .thumbnail-carousel::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        .thumbnail-carousel {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
        }
        .slide-transition {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      
      {/* Travel Hero Slider */}
      <section className="travel-hero-slider relative min-h-screen bg-slate-900 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center slide-transition"
          style={{ 
            backgroundImage: `url(${currentSlide.backgroundImage})`,
            backgroundPosition: '50% 40%'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen flex flex-col text-white">
          
          {/* Left Content Overlay */}
          <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2 max-w-md xl:max-w-lg z-20">
            <div className="mb-4">
              <span className="text-sm md:text-base font-medium uppercase tracking-wider text-cyan-400">
                {currentSlide.region}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-none mb-6 text-shadow-lg">
              {currentSlide.title}
            </h1>
            
            <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-200 max-w-md">
              {currentSlide.description}
            </p>

            <button
              onClick={() => openFullImage(currentSlide.backgroundImage)}
              className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Discover Location
            </button>
          </div>

          {/* Thumbnail Carousel - Right Side */}
          <div className="absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2 w-80 md:w-96 lg:w-[28rem] max-h-[70vh] overflow-y-auto">
            <div className="thumbnail-carousel flex flex-col gap-4 md:gap-6">
              {currentSlide.thumbnails.map((thumbnail, index) => (
                <div
                  key={thumbnail.id}
                  className="w-full h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden cursor-pointer group flex-shrink-0"
                  onClick={() => openFullImage(thumbnail.image)}
                >
                  <div className="relative h-full">
                    <img
                      src={thumbnail.image}
                      alt={thumbnail.destination}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute left-4 md:left-6 bottom-4 md:bottom-6">
                      <p className="text-xs md:text-sm font-medium text-cyan-400 mb-1 uppercase tracking-wider">
                        {thumbnail.region}
                      </p>
                      <h3 className="text-sm md:text-base lg:text-lg font-bold text-white">
                        {thumbnail.destination}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-4 md:gap-6">
            {/* Previous Arrow */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/20 hover:border-white/60 transition-all duration-300"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination */}
            <div className="text-xl md:text-2xl font-bold">
              {String(activeSlide + 1).padStart(2, '0')}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/20 hover:border-white/60 transition-all duration-300"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
