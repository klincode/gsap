import react, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.scss";
import gsap from "gsap";

import "reset-css";
import "./App.scss";
import leftArrow from "./assets/arrow-left.svg";
import rightArrow from "./assets/arrow-right.svg";
const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./assets/image3.jpg")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./assets/image.jpg")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./assets/image3.jpg")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
  },
];

function App() {
  console.log(testimonials[0]);
  return (
    <div className='testimonial-section'>
      <div className='testimonial-container'>
        <div className='arrow left'>
          <span>
            <img src={leftArrow} alt='' />
          </span>
        </div>

        <div className='inner'>
          <div className='t-image'>
            <ul>
              <li>
                <img src={require("./assets/image.jpg")} alt='' />
              </li>
              <li>
                <img src={testimonials[1].image} alt='' />
              </li>
              <li>
                <img src={testimonials[2].image} alt='' />
              </li>
            </ul>
          </div>
        </div>
        <div className='arrow right'>
          <span>
            <img src={rightArrow} alt='' />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
