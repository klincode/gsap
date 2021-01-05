import "./App.css";
import react, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  useEffect(() => {
    gsap.to(app, { duration: 0, visibility: "visible" });
    // gsap.from(circle, {
    //   duration: 0.8,
    //   opacity: 0,
    //   x: 40,
    //   ease: "power3.inOut",
    // });

    // gsap.from(circleRed, {
    //   duration: 0.8,
    //   opacity: 0,
    //   x: 40,
    //   ease: "power3.inOut",
    //   delay: 0.2,
    // });

    // gsap.from(circleBlue, {
    //   duration: 0.8,
    //   opacity: 0,
    //   x: 40,
    //   ease: "power3.inOut",
    //   delay: 0.4,
    // });

    gsap.from([circle, circleRed, circleBlue], {
      stagger: 0.4,
      duration: 0.5,
      opacity: 0,
      x: 50,
      ease: "Power1.in",
    });
  }, []);

  const handleExpand = () => {
    gsap.to(circleRed, {
      duration: 0.8,
      height: 200,
      width: 200,
      ease: "Power3.inOut",
    });
    setState(true);
  };

  const handleShrink = () => {
    gsap.to(circleRed, {
      duration: 0.8,
      height: 75,
      width: 75,
      ease: "Power3.inOut",
    });
    setState(false);
  };
  const [state, setState] = useState(false);
  return (
    <div className='App' ref={(el) => (app = el)}>
      <header className='App-header'>
        <div className='circle-container'>
          <div className='circle' ref={(el) => (circle = el)}></div>
          <div
            className='circle red'
            ref={(el) => (circleRed = el)}
            onClick={state ? handleShrink : handleExpand}></div>
          <div className='circle blue' ref={(el) => (circleBlue = el)}></div>
        </div>
      </header>
    </div>
  );
}

export default App;
