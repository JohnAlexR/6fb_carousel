import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import amhia from "./amhia.jpg";
import tinos from "./tinos.png";
import perp from "./Perp.png";
import landgirl from "./LANDGIRL.jpg";
import blackout from "./Blackout.PNG";

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  slides = [
    {
      key: "1",
      content: (
        <div className="">
          <p className="font-rock-salt">Ask Me How I Am</p>
          <img src={amhia} alt="Ask Me How I Am" />
        </div>
      ),
    },
    {
      key: "2",
      content: <img src={perp} alt="2" />,
    },
    {
      key: "3",
      content: <img src={tinos} alt="3" />,
    },
    {
      key: "4",
      content: <img src={landgirl} alt="4" />,
    },
    {
      key: "5",
      content: <img src={blackout} alt="5" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "410px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
