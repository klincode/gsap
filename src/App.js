import logo from "./logo.svg";
import "./App.scss";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import react, { useRef, useState, useEffect } from "react";
import imagePhoto from "./images/banner.jpg";

function App() {
  let container = useRef(null);
  let image = useRef(null);
  let ImageReveal = CSSRulePlugin.getRule(".img-container:after");
  // let imageReveal =

  const tl = gsap.timeline();
  useEffect(() => {
    tl.to(container, { duration: 0, visibility: "visible" })
      .to(ImageReveal, {
        duration: 2,
        width: "0%",
        ease: "Power1.inOut",
      })
      .from(image, { duration: 1.4, scale: 1.6, ease: "Power", delay: -2 });
  });
  return (
    <section className='main'>
      <div className='container' ref={(el) => (container = el)}>
        <>
          <div className='img-container'>
            <img src={imagePhoto} alt='' ref={(el) => (image = el)} />
          </div>
        </>
      </div>
    </section>
  );
}

export default App;
