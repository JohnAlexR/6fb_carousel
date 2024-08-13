import React from "react";
import "./App.css";
import "./carousel.css";

import Example from "./Carousel";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center center">
      <div className="flex items-center mt-20 py-[100px]">
        <Example />
      </div>
    </div>
  );
}

export default App;
