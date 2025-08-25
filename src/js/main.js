// gsap.from("nav", {
//   opacity: 0, // start transparent
//   y: 50, // start slightly down
//   duration: 1.2, // animation speed
//   ease: "power2.out",
// });

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

//The from() method is used to animate a single element from an ending state to a starting state.

// gsap.from(".nav-left", {
//   opacity: 0,
//   y: 70,
//   duration: 1.5,
//   ease: "power2.out",
// });

// gsap.from(".nav-center", {
//   opacity: 0,
//   y: 80,
//   duration: 2.0,
//   ease: "power2.out",
// });

// gsap.from(".nav-right", {
//   opacity: 0,
//   y: 90,
//   duration: 2.5,
//   ease: "power2.out",
// });

gsap.set(".cus-btn", {
  opacity: 0,
  y: 100,
});

gsap.to(".cus-btn", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power2.out",
  stagger: {
    amount: 3.5,
    each: 0.5,
    from: 0,
  },
});

document.getElementById("emblem").addEventListener("click", function () {
  gsap.to(".cus-emblem", {
    rotation: "+=180",
    duration: 1,
    ease: "power2.inOut",
  });
});
