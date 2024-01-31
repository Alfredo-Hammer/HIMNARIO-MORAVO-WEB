import React, { useState, useEffect } from 'react';
import './SliderComponent.css';

const SliderComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideImages =
        ['https://www.shutterstock.com/image-photo/prayer-bible-concept-hand-female-260nw-1932929828.jpg', 'https://image.shutterstock.com/image-photo/worship-prayer-banner-christian-praise-260nw-2133075945.jpg', 'https://www.shutterstock.com/image-photo/praying-man-hoping-better-asking-260nw-2144193917.jpg'];

    const slideTexts = ['Texto del slide 1', 'Texto del slide 2', 'Texto del slide 3'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide === slideImages.length - 1 ? 0 : currentSlide + 1);
        }, 5000);
        return () => clearInterval(interval);

    }, [currentSlide ,slideImages.length]);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideImages.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideImages.length - 1 : currentSlide - 1);
    };

    return (
        <div className="slider-container">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slideImages.map((slide, index) => (
                    <div className="slide" key={index}>
                        <img src={slide} alt={`Slide ${index}`} />
                        <div className="slide-text">{slideTexts[index]}</div>
                    </div>
                ))}
            </div>
            <button onClick={prevSlide}>Anterior</button>
            <button onClick={nextSlide}>Siguiente</button>
        </div>
    );
};

export default SliderComponent;