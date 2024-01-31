import React, { Fragment, useState, useEffect } from "react";
import "./Home.css";



const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      image:
        "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE53ei4?ver=b8a9?text=Slide+1",
      text: `No seas vencido por el mal, sino vence el mal con el bien. Romanos 12:21`,
    },
    {
      image:
        "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE53tTA?ver=4c23?text=Slide+2",
      text: "Praesent bibendum eros eget ipsum lobortis ultricies.",
    },
    {
      image:
        "https://www.xtrafondos.com/descargar.php?id=3040&resolucion=3840x2160?text=Slide+3",
      text: "Suspendisse quis magna eget libero vehicula blandit a sit amet augue.",
    },
  ];

  //TODO: Add auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex === slides.length - 1) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, slideIndex]);




  const handlePrevClick = () => {
    if (slideIndex === 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <Fragment>
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={index === slideIndex ? "slide active" : "slide"}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-text">
              <h1>{slide.text}</h1>
            </div>
          </div>

        ))}
        <div className="controls">
          <button onClick={handlePrevClick}> &#8249;</button>
          <button onClick={handleNextClick}> &#8250;</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
