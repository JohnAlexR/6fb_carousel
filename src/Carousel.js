import React, { useState } from "react";
import amhia from "./assets/amhia.jpg";
import tinos from "./assets/tinos.png";
import perp from "./assets/Perp.png";
import landgirl from "./assets/LANDGIRL.jpg";
import blackout from "./assets/Blackout.PNG";
import apple from "./assets/applelogo.png";
import spotify from "./assets/spotify.png";
import soundcloud from "./assets/soundcloud.png";
import youtube from "./assets/youtube.png";
import "./carousel.css";
import "./App.css";

const Example = () => {
  const slides = [
    {
      key: "1",
      image: amhia,
      title: "Ask Me How I Am",
      subtext: "New Album!",
      spotify:
        "https://open.spotify.com/track/2JTDt6aiFRNpyjfZcG4E1A?si=b55436d8d1b4401f",
      apple: "https://music.apple.com/us/album/landgirl-single/1751055555",
      youtube: "https://www.youtube.com/watch?v=MAVev6WtbzI",
    },
    {
      key: "2",
      image: tinos,
      title: "Tinos Place",
      subtext: "First EP!",
      spotify:
        "https://open.spotify.com/album/12OHLbRmsAq3MELvuCOKAi?si=BR-DUz5nRRm4zGVGm2MJ9Q",
      apple: "https://music.apple.com/us/album/tinos-place-ep/1681880996",
      youtube:
        "https://www.youtube.com/playlist?list=OLAK5uy_kN63IuHbb3bWW7Znro63EvG2yVCPa3qOw",
    },
    {
      key: "3",
      image: perp,
      title: "Perpendicular Universe",
      subtext: "Out Now!",
      spotify:
        "https://open.spotify.com/track/0Cm6fuihWoj5PqymZdNL8S?si=7c3c03b1f92b4c52",
      apple:
        "https://music.apple.com/us/album/perpendicular-universe/1702150825?i=1702150826",
      youtube: "https://youtu.be/twnLbe5kXD4?feature=shared",
    },
    {
      key: "4",
      image: landgirl,
      title: "Land Girl",
      subtext: "Music Video Out Now!",
      spotify:
        "https://open.spotify.com/track/2JTDt6aiFRNpyjfZcG4E1A?si=b55436d8d1b4401f",
      apple: "https://music.apple.com/us/album/landgirl-single/1751055555",
      youtube: "https://www.youtube.com/watch?v=MAVev6WtbzI",
    },
    {
      key: "5",
      image: blackout,
      title: "Blackout",
      subtext: "Music Video Out Now!",
      spotify:
        "https://open.spotify.com/track/5T4GN4EUfdCXMqfVjZeq8q?si=0ccdbbf623b44c70",
      apple:
        "https://music.apple.com/mu/album/blackout/1754735657?i=1754735658",
      youtube: "https://youtu.be/HrEvzqUjLLc?feature=shared",
    },
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
      <div className="flex flex-col">
        <p className="font-rock-salt text-[#08A775] media-subtext">
          {slides[currentIndex].subtext}
        </p>
        <p className="text-[50px] madena media-text">
          {slides[currentIndex].title}
        </p>
      </div>
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
              <img
                src={slide.image}
                alt={slide.title}
                className="rounded-2xl h-[431px] w-[431px]"
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row gap-x-5 mt-5">
        <a href={slides[currentIndex].spotify}>
          <img src={spotify} className="h-[47px] w-[47px]" />
        </a>
        <a className="rounded-full bg-black" href={slides[currentIndex].apple}>
          <img src={apple} className="h-[47px] w-[47px]" />
        </a>
        <a href={slides[currentIndex].youtube}>
          <img src={youtube} className="h-[47px] w-[47px]" />
        </a>
      </div>
    </div>
  );
};

export default Example;
