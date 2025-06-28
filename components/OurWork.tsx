import React from 'react';

const OurWork = () => {
  const images = [
    { category: 'Chair Brand', files: ['chair brand 1.jpg', 'chair brand 2.jpg', 'chair brand 4.jpg'] },
    { category: 'Food Delivery App', files: ['food delivery app 1.jpg', 'food delivery app 2.jpg', 'food delivery app 3.jpg', 'food delivery app 4.jpg', 'food delivery app 5.jpg', 'food delivery app 6.jpg'] },
    { category: 'Headphone Brand', files: ['headphone brand 2.jpg'] },
    { category: 'Save the Planet', files: ['save the planet 1.jpg'] },
  ];

  return (
    <section id="our-work">
      <h2>Our Work</h2>
      {images.map((group, index) => (
        <div key={index} className="image-category">
          <h3>{group.category}</h3>
          <div className="image-grid">
            {group.files.map((file, idx) => (
              <img
                key={idx}
                src={`/images/${file}`}
                alt={`${group.category} ${idx + 1}`}
                className="work-image"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default OurWork;
