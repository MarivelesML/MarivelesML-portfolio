window.addEventListener("DOMContentLoaded", () => {
  gsap.from("body", {
    opacity: 0, // start transparent
    y: 50, // start slightly down
    duration: 1.2, // animation speed
    ease: "power2.out",
  });
});
