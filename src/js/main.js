// gsap.from("nav", {
//   opacity: 0, // start transparent
//   y: 50, // start slightly down
//   duration: 1.2, // animation speed
//   ease: "power2.out",
// });

//Remove-Item *.tif

// // Get-ChildItem frame_*.tif | ForEach-Object {
//     magick $_.FullName "$($_.BaseName).jpg"
// }

// gsap.registerPlugin(ScrollTrigger);

// window.addEventListener("pageshow", (e) => {
//   if (
//     e.persisted ||
//     performance.getEntriesByType("navigation")[0].type === "reload"
//   ) {
//     window.scrollTo(0, 0);
//   }
// });

// ScrollTrigger.addEventListener("refreshInit", () => {
//   console.log("ScrollTrigger refresh triggered");
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

// const mm = gsap.matchMedia();

// mm.add("(min-width: 768px)", () => {
//   gsap.set(".cus-btn-nav", {
//     opacity: 0,
//     y: 100,
//   });

//   gsap.to(".cus-btn-nav", {
//     opacity: 1,
//     y: 0,
//     duration: 1.5,
//     ease: "power2.out",
//     stagger: {
//       amount: 2.5,
//       each: 0.5,
//       from: 0,
//     },
//   });

//   // gsap
//   //   .timeline({
//   //     scrollTrigger: {
//   //       trigger: ".first-section",
//   //       start: "top+=50% 20%",
//   //       end: "bottom+=50%",
//   //       markers: true,
//   //       toggleActions: "play none none reverse",
//   //       onLeaveBack: () => {
//   //         gsap.set([".nav-left", ".nav-right"], { autoAlpha: 1, x: 0 });
//   //       },
//   //     },
//   //   })
//   //   .to(
//   //     ".nav-left",
//   //     {
//   //       x: 224,
//   //       duration: 1.5,
//   //       ease: "power2.out",
//   //       opacity: 0,
//   //       autoAlpha: 0,
//   //     },
//   //     0
//   //   )
//   //   .to(
//   //     ".nav-right",
//   //     {
//   //       x: -224,
//   //       duration: 1.5,
//   //       ease: "power2.out",
//   //       opacity: 0,
//   //       autoAlpha: 0,
//   //     },
//   //     0
//   //   )
//   //   .to(
//   //     ".nav-center",
//   //     {
//   //       text: "TOP",
//   //       ease: "power2.out",
//   //     },
//   //     1
//   //   );
// });

// gsap.registerPlugin(ScrollTrigger);

// window.addEventListener("pageshow", (e) => {
//   if (
//     e.persisted ||
//     performance.getEntriesByType("navigation")[0].type === "reload"
//   ) {
//     window.scrollTo(0, 0);
//   }
// });

// ScrollTrigger.addEventListener("refreshInit", () => {
//   console.log("ScrollTrigger refresh triggered");
// });

// const mm = gsap.matchMedia();

// mm.add("(min-width: 768px)", () => {
//   gsap.set(".cus-btn-nav", {
//     opacity: 0,
//     y: 100,
//   });

//   gsap.to(".cus-btn-nav", {
//     opacity: 1,
//     y: 0,
//     duration: 1.5,
//     ease: "power2.out",
//     stagger: {
//       amount: 2.5,
//       each: 0.5,
//       from: 0,
//     },
//   });
// });

// let rotationCount = 0;

// document.getElementById("emblem").addEventListener("click", function () {
//   rotationCount++;
//   gsap.to(".cus-emblem", {
//     rotation: rotationCount * 180,
//     duration: 1,
//     ease: "power2.inOut",
//   });
// });

// const navCollapse = document.getElementById("navbarNav");

// navCollapse.addEventListener("show.bs.collapse", function () {
//   navCollapse.style.display = "block";
//   gsap.fromTo(
//     ".cus-btn-nav",
//     { opacity: 0, x: 50 },
//     {
//       opacity: 1,
//       x: 0,
//       duration: 0.7,
//       stagger: 0.2,
//       ease: "power2.out",
//     }
//   );
// });

// navCollapse.addEventListener("hide.bs.collapse", function (e) {
//   e.preventDefault();
//   gsap.to(".cus-btn-nav", {
//     opacity: 0,
//     x: -50,
//     duration: 0.7,
//     stagger: 0.1,
//     ease: "power2.in",
//     onComplete: () => {
//       navCollapse.style.display = "none";
//       navCollapse.classList.remove("show");
//     },
//   });
// });

//       [1]                   [2]                      [3]                  [4]
// (Enter viewport)  (Forward past the viewport)  (Come back's in)   (The way past the start)

// start: "top(Trigger Element) 80%(View Port)", when the top of the trigger hits 80% of the viewport height

// gsap.to(".nav-right", {
//   scrollTrigger: {
//     trigger: ".nav-right",
//     start: "50px 50%",
//     end: "500px 50%",
//     markers: true,
//     toggleActions: "play none none reverse",
//   },
//   x: -224,
//   duration: 1,
// });

// gsap.to(".nav-left", {
//   scrollTrigger: {
//     trigger: ".first-section",
//     start: "top+=200 20%",
//     markers: true,
//     toggleActions: "play none none reverse",
//   },
//   x: 224,
//   duration: 1,
// });

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".first-section",
//     start: "top+=200 20%",
//     markers: true,
//     toggleActions: "play none none reverse",
//   }
// });

// // Animation 1: Move .nav-left
// tl.to(".nav-left", {
//   x: 224,
//   duration: 1,
//   ease: "power2.out"
// });

// // Animation 2: Fade in .nav-right
// tl.to(".nav-right", {
//   opacity: 1,
//   duration: 1,
//   ease: "power1.inOut"
// }, "-=0.5"); // overlaps with previous animation

// // Animation 3: Scale .nav-right
// tl.to(".nav-right", {
//   scale: 1.2,
//   duration: 0.8,
//   ease: "elastic.out(1, 0.3)"
// });

// const lenis = new Lenis();
// lenis.on("scroll", ScrollTrigger.update);
// gsap.ticker.add((time) => {
//   lenis.raf(time * 500);
// });

// gsap.ticker.lagSmoothing(0);

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // -----------------------------
  // Page reload reset scroll
  // -----------------------------
  window.addEventListener("pageshow", (e) => {
    if (
      e.persisted ||
      performance.getEntriesByType("navigation")[0].type === "reload"
    ) {
      window.scrollTo(0, 0);
    }
  });

  // -----------------------------
  // GSAP media queries
  // -----------------------------
  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.set(".cus-btn-nav", { opacity: 0, y: 100 });
    gsap.to(".cus-btn-nav", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: { amount: 2.5, each: 0.5, from: 0 },
    });
  });

  // -----------------------------
  // Emblem rotation
  // -----------------------------
  let rotationCount = 0;
  const emblem = document.getElementById("emblem");
  emblem.addEventListener("click", () => {
    rotationCount++;
    gsap.to(".cus-emblem", {
      rotation: rotationCount * 180,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  // -----------------------------
  // Navbar collapse animation
  // -----------------------------
  const navCollapse = document.getElementById("navbarNav");
  navCollapse.addEventListener("show.bs.collapse", () => {
    navCollapse.style.display = "block";
    gsap.fromTo(
      ".cus-btn-nav",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.7, stagger: 0.2, ease: "power2.out" }
    );
  });

  navCollapse.addEventListener("hide.bs.collapse", (e) => {
    e.preventDefault();
    gsap.to(".cus-btn-nav", {
      opacity: 0,
      x: -50,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.in",
      onComplete: () => {
        navCollapse.style.display = "none";
        navCollapse.classList.remove("show");
      },
    });
  });

  // -----------------------------
  // Canvas hero image sequence
  // -----------------------------
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  const heroImg = document.querySelector(".hero-img");
  const nav = document.querySelector("nav");
  const header = document.querySelector(".header");

  const frameCount = 209;
  const images = [];
  let imagesToLoad = frameCount;
  const imageSeq = { frame: 0 };

  const currentFrame = (index) =>
    `frames/frame_${(index + 1).toString().padStart(4, "0")}.jpg`;

  // -----------------------------
  // Canvas setup & resize
  // -----------------------------
  const setCanvasSize = () => {
    const pixelRatio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * pixelRatio;
    canvas.height = window.innerHeight * pixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.scale(pixelRatio, pixelRatio);
  };
  setCanvasSize();

  window.addEventListener("resize", () => {
    setCanvasSize();
    render();
    ScrollTrigger.refresh();
  });

  // -----------------------------
  // Load images
  // -----------------------------
  const onLoad = () => {
    imagesToLoad--;
    if (imagesToLoad === 0) {
      render();
      setupScrollTrigger();
    }
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.onload = onLoad;
    img.onerror = onLoad;
    img.src = currentFrame(i);
    images.push(img);
  }

  // -----------------------------
  // Render current frame
  // -----------------------------
  const render = () => {
    const cw = window.innerWidth;
    const ch = window.innerHeight;
    context.clearRect(0, 0, cw, ch);

    const img = images[imageSeq.frame];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = cw / ch;
    let drawWidth, drawHeight, drawX, drawY;

    if (imgAspect > canvasAspect) {
      drawHeight = ch;
      drawWidth = imgAspect * drawHeight;
      drawX = (cw - drawWidth) / 2;
      drawY = 0;
    } else {
      drawWidth = cw;
      drawHeight = drawWidth / imgAspect;
      drawX = 0;
      drawY = (ch - drawHeight) / 2;
    }

    context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  // -----------------------------
  // ScrollTrigger setup
  // -----------------------------
  const setupScrollTrigger = () => {
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: `+=${window.innerHeight * 7}px`,
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        imageSeq.frame = Math.round(
          Math.min(progress / 0.9, 1) * (frameCount - 1)
        );
        render();

        // Navbar fade
        gsap.set(nav, { opacity: progress <= 0.1 ? 1 - progress / 0.1 : 0 });

        // Header transform + fade
        if (progress <= 0.25) {
          const z = (progress / 0.25) * -500;
          const opacity = progress >= 0.2 ? 1 - (progress - 0.2) / 0.05 : 1;
          gsap.set(header, {
            transform: `translate(-50%, -40%) translateZ(${z}px)`,
            opacity,
          });
        } else gsap.set(header, { opacity: 0 });

        // Hero image transform + fade
        if (progress < 0.6) {
          gsap.set(heroImg, { transform: "translateZ(1000px)", opacity: 0 });
        } else if (progress < 0.9) {
          const imgProgress = (progress - 0.6) / 0.3;
          const translateZ = 1000 - imgProgress * 1000;
          const opacity = progress <= 0.8 ? (progress - 0.6) / 0.2 : 1;
          gsap.set(heroImg, {
            transform: `translateZ(${translateZ}px)`,
            opacity,
          });
        } else gsap.set(heroImg, { transform: "translateZ(0px)", opacity: 1 });
      },
    });
  };
});
