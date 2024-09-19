import React, { useState, useEffect } from 'react';


const Slider = () => {
  const slides = [
    {
      imgSrc: 'public/assets/img/hero/6.jpg',
      imgAlt: 'Vibrant abstract painting with swirling blue and light pink hues on a canvas.',
      title: 'Front end developers',
      description: 'The architects of the digital world, constantly battling against their mortal enemy – browser compatibility.',
    },
    {
      imgSrc: 'public/assets/img/hero/6.jpg',
      imgAlt: 'Vibrant abstract painting with swirling red, yellow, and pink hues on a canvas.',
      title: 'Back end developers',
      description: 'Because not all superheroes wear capes, some wear headphones and stare at terminal screens',
    },
    {
      imgSrc: 'public/assets/img/hero/3.jpg',
      imgAlt: 'Vibrant abstract painting with swirling blue and purple hues on a canvas.',
      title: 'Full stack developers',
      description: 'Where "burnout" is just a fancy term for "Tuesday".',
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
