import "./App.scss";
import gsap from "gsap";
import react, { useRef, useState, useEffect } from "react";
import arrow from "./images/arrow-right.svg";
import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";

function App() {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  const tl = gsap.timeline({ delay: 0.2 });
  useEffect(() => {
    let girlImage = images.firstElementChild;
    let boyImage = images.lastElementChild;
    //content
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;

    const contentP = content.children[1];
    const contentButton = content.children[2];

    //images animation
    gsap.to(app, { duration: 0, css: { visibility: "visible" } });

    tl.from(
      girlImage,
      {
        duration: 1.2,
        y: 1280,
        ease: "Power3.easeOut",
      },
      "Start"
    )
      .from(
        girlImage.firstElementChild,
        {
          duration: 2,
          scale: 1.6,
          ease: "Power3.easeOut",
        },
        "<0.2"
      )
      .from(
        boyImage,
        {
          duration: 1.2,
          y: 1280,
          ease: "Power3.easeOut",
        },
        "0.1"
      )
      .from(
        boyImage.firstElementChild,
        {
          duration: 2,
          scale: 1.6,
          ease: "Power3.easeOut",
        },
        "0.2"
      );

    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        delay: 0.2,
      },
      0.2,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0 }, 1, "Start")
      .from(contentButton, 1, { y: 20, opacity: 0 }, 1.4);
  }, [tl]);
  return (
    <div className='hero' ref={(el) => (app = el)}>
      <div className='container'>
        <div className='hero-inner'>
          <div className='hero-content'>
            <div className='hero-content-inner' ref={(el) => (content = el)}>
              <h1>
                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    Lorem ipsum dolor sit.
                  </div>
                </div>

                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>
                    Lorem ipsum dolor sit amet.
                  </div>
                </div>

                <div className='hero-content-line'>
                  <div className='hero-content-line-inner'>Lorem, ipsum.</div>
                </div>
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                incidunt cupiditate deleniti, voluptatum possimus magnam.
              </p>
              <div className='btn-row'>
                <button className='explore-button'>
                  explore
                  <div className='arrow-icon'>
                    <img src={arrow} alt='' />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className='hero-images'>
            <div className='hero-images-inner' ref={(el) => (images = el)}>
              <div className='hero-image girl'>
                <img src={imgGirl} alt='' />
              </div>
              <div className='hero-image boy'>
                <img src={imgBoy} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
