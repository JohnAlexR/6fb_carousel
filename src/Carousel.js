import React, { useState } from "react";
import amhia from "./amhia.jpg";
import tinos from "./tinos.png";
import perp from "./Perp.png";
import landgirl from "./LANDGIRL.jpg";
import blackout from "./Blackout.PNG";
import "./carousel.css";

const Example = () => {
  const slides = [
    { key: "1", image: amhia, title: "Ask Me How I Am" },
    { key: "2", image: tinos, title: "Tinos" },
    { key: "3", image: perp, title: "Perp" },
    { key: "4", image: landgirl, title: "Land Girl" },
    { key: "5", image: blackout, title: "Blackout" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleSlides = () => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

    return [slides[prevIndex], slides[currentIndex], slides[nextIndex]];
  };

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {getVisibleSlides().map((slide, index) => {
          let className = "carousel-slide";
          if (index === 1) {
            className += " active";
          } else if (index === 0) {
            className += " prev";
          } else {
            className += " next";
          }

          return (
            <div
              key={slide.key}
              className={className}
              onClick={() =>
                selectSlide(
                  (currentIndex + index - 1 + slides.length) % slides.length
                )
              }
            >
              <img src={slide.image} alt={slide.title} />
              <p className="carousel-title">{slide.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Example;
