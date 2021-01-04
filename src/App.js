import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function App() {
  let logoItem = useRef(null);
  useEffect(() => {
    console.log(logoItem);
    gsap.from(logoItem, {
      duration: 3,
      opacity: 1,
      y: -1000,
      ease: "bounce",
      rotate: 340,
    });
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
          ref={(el) => (logoItem = el)}
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
