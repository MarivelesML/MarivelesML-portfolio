// gsap.from("nav", {
//   opacity: 0, // start transparent
//   y: 50, // start slightly down
//   duration: 1.2, // animation speed
//   ease: "power2.out",
// });

//The from() method is used to animate a single element from an ending state to a starting state.

gsap.from(".nav-left", {
  opacity: 0,
  x: -500,
  duration: 3,
});

gsap.from(".nav-center", {
  opacity: 0,
  y: 500,
  duration: 3,
});

gsap.from(".nav-right", {
  opacity: 0,
  x: 500,
  duration: 3,
});

// gsap.fromTo(
//   ".nav-left",
//   { opacity: 0, x: -500 },
//   {
//     opacity: 1,
//     x: 0,
//     duration: 3,
//   }
// );

// gsap.fromTo(
//   ".nav-center",
//   { opacity: 0, y: 500, borderRadius: 0 },
//   {
//     opacity: 1,
//     y: 0,
//     duration: 3,
//     borderRadius: "999px",
//   }
// );

// gsap.fromTo(
//   ".nav-right",
//   { opacity: 0, x: 500 },
//   {
//     opacity: 1,
//     x: 0,
//     duration: 3,
//   }
// );
