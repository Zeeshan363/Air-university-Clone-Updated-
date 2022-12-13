import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class Slider extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        showThumbs={false}
        interval={2000}
        infiniteLoop={true}
        stopOnHover={true}
      >
        <div>
          <img src="./images/banner1.jpg" />
        </div>
        <div>
          <img src="./images/banner2.jpg" />
        </div>
        <div>
          <img src="./images/banner3.jpg" />
        </div>
      </Carousel>
    );
  }
}
