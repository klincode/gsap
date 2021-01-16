gsap.to(".overlay h1", {
  duration: 2,
  opacity: 0,
  y: -60,
  ease: Power2.easeInOut,
});

gsap.to(".overlay span", {
  delay: 0.3,
  duration: 2,
  opacity: 0,
  y: -60,
  ease: Power2.easeInOut,
});

gsap.to(".overlay", {
  delay: 0.7,
  duration: 2,

  y: "-100%",
  ease: Power2.easeInOut,
});

gsap.from(".ellipse-container", 1, {
  delay: 2,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".yellow", 1, {
  delay: 3.5,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".circle1", 1, {
  delay: 2.4,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".circle2", 1, {
  delay: 2.6,
  opacity: 0,
  ease: Expo.easeInOut,
});

gsap.from(".logo", 1, {
  delay: 3,
  opacity: 0,
  y: -100,
  ease: Expo.easeInOut,
});

gsap.from(".scrolldown", 1, {
  delay: 3.4,
  opacity: 0,
  y: 100,
  ease: Expo.easeInOut,
});

gsap.from(".text .title", 1, {
  delay: 3,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

gsap.from(".text p", 1, {
  delay: 3.2,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});

gsap.from(".watchnow", 1, {
  delay: 3.4,
  opacity: 0,
  x: 200,
  ease: Expo.easeInOut,
});
