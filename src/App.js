import logo from "./logo.svg";
import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import react, { useRef, useState, useEffect } from "react";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
function App() {
  let a = useRef(null);
  let b = useRef(null);
  let c = useRef(null);
  let sections = useRef(null);
  useEffect(() => {
    // let rule = CSSRulePlugin.getRule("section");
    // console.log(sections);
    gsap.registerPlugin(ScrollTrigger);
    const sectionss = Array.from(sections.children);
    // console.log(sectionss);
    sectionss.forEach((section) => {
      gsap.fromTo(
        section.children,
        { y: "+=100", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: section, //elem,ent triggerujący
            start: "top bottom", //gorna krawedz dotknie 40%od góry viewportu
            markers: true, //podpowiadaczka
            scrub: 1,
          },
        }
        // stager jesli mam wiecej elementow, czas miedzy animacjamit childrensów
      );
    });
    // gsap.fromTo(
    //   a.children,
    //   { y: "+=100", opacity: 0 },
    //   {
    //     y: 0,
    //     opacity: 1,
    //     stagger: 0.2,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: a, //elem,ent triggerujący
    //       // start: "top top",
    //       start: "top 40%", //gorna krawedz dotknie 40%od góry viewportu
    //       //punkt startowy kiedy uruchamiac triggera
    //       //  1top:elem,ent trigerujacy
    //       // 2top:viewwport, jesli
    //       //   gorna kraweddz elementu treiggerujacego dotknie górnej krawedzi viewportu to odpalaj
    //       markers: true, //podpowiadaczka
    //     },
    //   }
    //   // stager jesli mam wiecej elementow, czas miedzy animacjamit childrensów
    // );
  }, []);
  return (
    <div className='App'>
      <div class='hero'>
        <h1>GSAP ScrollTrigger tutorial</h1>
      </div>
      <div className='sections' ref={(el) => (sections = el)}>
        <section className='a section' ref={(el) => (a = el)}>
          <h2>Get creative</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nisi
            repellendus explicabo distinctio cum nemo, iste excepturi? Libero,
            mollitia suscipit corrupti impedit minus nemo consequatur modi
            corporis, pariatur sit velit.
          </p>
        </section>
        <section className='c section' ref={(el) => (b = el)}>
          <h2>Basic layout</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nisi
            repellendus explicabo distinctio cum nemo, iste excepturi? Libero,
            mollitia suscipit corrupti impedit minus nemo consequatur modi
            corporis, pariatur sit velit.
          </p>
        </section>
        <section className='c section' ref={(el) => (c = el)}>
          <h2>Design patterns</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nisi
            repellendus explicabo distinctio cum nemo, iste excepturi? Libero,
            mollitia suscipit corrupti impedit minus nemo consequatur modi
            corporis, pariatur sit velit.
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
