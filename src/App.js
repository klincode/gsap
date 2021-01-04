import "./App.css";
import react, { useRef, useEffect } from "react";
import gsap from "gsap";
function App() {
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  useEffect(() => {
    gsap.from(circle, {
      duration: 0.8,
      opacity: 0,
      x: 40,
      ease: "power3.inOut",
    });

    gsap.from(circleRed, {
      duration: 0.8,
      opacity: 0,
      x: 40,
      ease: "power3.inOut",
      delay: 0.2,
    });

    gsap.from(circleBlue, {
      duration: 0.8,
      opacity: 0,
      x: 40,
      ease: "power3.inOut",
      delay: 0.4,
    });
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='circle-container'>
          <div className='circle' ref={(el) => (circle = el)}></div>
          <div className='circle red' ref={(el) => (circleRed = el)}></div>
          <div className='circle blue' ref={(el) => (circleBlue = el)}></div>
        </div>
      </header>
    </div>
  );
}

export default App;
