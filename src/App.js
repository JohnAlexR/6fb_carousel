import React, { useState } from "react";
import "./App.css";
import amhia from "./amhia.jpg";
import tinos from "./tinos.png";
import perp from "./Perp.png";
import { useSwipeable } from "react-swipeable";
import Example from "./Carousel";

function App() {
  const [data, setData] = useState([
    { image: amhia, title: "Ask Me How I Am" },
    { image: tinos, title: "Tinos Place" },
    { image: perp, title: "Perpendicular Universe" },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("swipeleft"),
    onSwipedRight: () => console.log("swiperight"),
    trackMouse: true,
    delta: 10,
  });

  return (
    <div className="App flex flex-col justify-center items-center">
      <p className="font-mono text-green-700">coming soon</p>
      <p className="font-rock-salt">{data[1].title}</p>
      <div className="flex flex-row items-center">
        <img
          src={data[0].image}
          className=" w-[310px] h-[310px] z-10 rounded-2xl"
          alt="ask me how i am"
        />
        <img
          src={data[1].image}
          className=" w-[430px] h-[430px] z-30 rounded-xl"
          alt="tinos place"
        />
        <img
          src={data[2].image}
          className=" w-[310px] h-[310px] z-10 rounded-2xl"
          alt="perpendicular universe"
        />
      </div>
      <Example />
    </div>
  );
}

export default App;
