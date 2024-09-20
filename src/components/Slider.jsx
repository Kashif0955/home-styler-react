import React, { useState, useEffect } from 'react';


const Slider = () => {
  const slides = [
    {
      imgSrc: 'public/assets/img/hero/5.jpg',
      imgAlt: 'Modern living room with vibrant decor, showcasing a stylish sofa and a well-lit interior.',
      title: 'Living Room Designs',
      description: 'Transform your living space into a cozy haven with our stunning interior designs.',
    },
    {
      imgSrc: 'public/assets/img/hero/3.jpg',
      imgAlt: 'Contemporary kitchen design with sleek cabinetry and elegant lighting fixtures.',
      title: 'Kitchen Makeovers',
      description: 'Discover modern and functional kitchen designs to elevate your culinary space.',
    },
    {
      imgSrc: 'public/assets/img/hero/1.jpg',
      imgAlt: 'Serene bedroom with soft lighting, minimal decor, and a luxurious bed setup.',
      title: 'Bedroom Inspirations',
      description: 'Create the perfect retreat with elegant bedroom designs that speak comfort and style.',
    },
  ];
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex(prevIndex => (prevIndex < slides.length ? prevIndex + 1 : 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const handleIndicatorClick = (index) => {
    setCurrentSlideIndex(index + 1);
  };

  return (
    <div className="slider-container">
      {/* Slides */}
      <div className="slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${currentSlideIndex === index + 1 ? 'active' : ''}`}
          >
            <div className="slide-content">
              <h3
                className="slide-title"
                aria-describedby={`slide${index + 1}Description`}
              >
                {slide.title}
              </h3>
              <p
                className="slide-description"
                id={`slide${index + 1}Description`}
              >
                {slide.description}
              </p>
            </div>
            <img
              className="slide-image"
              src={slide.imgSrc}
              alt={slide.imgAlt}
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="indicators" role="group" aria-label="slides">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentSlideIndex === index + 1 ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
