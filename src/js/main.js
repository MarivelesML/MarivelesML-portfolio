document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.2,
    effects: true,
    normalizeScroll: true,
  });

  function SplitTextOnce() {
    gsap.set("[text-split]", {
      opacity: 1,
    });

    document.querySelectorAll("[text-split]").forEach((el) => {
      if (!el.dataset.splitDone) {
        new SplitType(el, { types: "words, chars", tagName: "span" });
        el.dataset.splitDone = "1";
      }
    });
  }

  SplitTextOnce();

  // -------------------------
  //   Button - Animation
  // -------------------------
  function buttonActions() {
    let rotationCount = 0;
    let showingAlternate = false;
    const startNav = document.getElementById("start");
    const imgs = document.querySelectorAll(".tech-logos img");

    const aboutNav = document.getElementById("about");
    const title = document.querySelectorAll(".cus-h1");
    startNav.addEventListener("click", () => {
      const originalSources = [
        "src/assets/images/html.png",
        "src/assets/images/javascript.png",
        "src/assets/images/java.png",
        "src/assets/images/css.png",
        "src/assets/images/springboot.png",
        "src/assets/images/bootstrap.png",
      ];

      const alternateSources = [
        "src/assets/images/c++.png",
        "src/assets/images/php.png",
        "src/assets/images/python.png",
        "src/assets/images/find.png",
        "src/assets/images/file.png",
        "src/assets/images/database.png",
      ];

      gsap.to(imgs, {
        opacity: 0,
        ease: "power4.out",
        y: -50,
        stagger: { amount: 1, each: 0.2, from: 0 },
        onComplete: () => {
          imgs.forEach((img, i) => {
            img.src = showingAlternate
              ? originalSources[i]
              : alternateSources[i];
          });

          gsap.to(imgs, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "back",
          });

          showingAlternate = !showingAlternate;
        },
      });
    });
    // Second-button
    aboutNav.addEventListener("click", () => {
      document.querySelectorAll("[words-rotate-click]").forEach((el) => {
        gsap.fromTo(
          el.querySelectorAll(".word"),
          {
            opacity: 0,
            yPercent: 100,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.5,
            ease: "back.out(2)",
            stagger: { amount: 0.5 },
          }
        );
      });
    });
  }

  buttonActions();

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
      stagger: { amount: 1.5, each: 0.5, from: 0 },
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

  const frameCount = 280;
  const images = [];
  let imagesToLoad = frameCount;
  const imageSeq = { frame: 0 };

  const currentFrame = (index) =>
    `src/frames/frame_${(index + 1).toString().padStart(4, "0")}.jpg`;

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

  // -------------------------
  //   Text - Animation
  // -------------------------
  function setupTextAnimations() {
    function createScrollTrigger(triggerElement, timeline) {
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        snap: 0.25,
        onLeaveBack: () => {
          timeline.progress(0).pause();
        },
      });
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 80%",
        onEnter: () => timeline.play(),
      });
      if (ScrollTrigger.isInViewport(triggerElement, 0.2)) {
        timeline.play();
      }
    }

    document.querySelectorAll("[words-rotate-in]").forEach((el) => {
      let tl = gsap.timeline({ paused: true });
      tl.from(el.querySelectorAll(".word"), {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: { amount: 0.5 },
      });

      createScrollTrigger(el, tl);
    });
  }

  // -------------------------
  //   Horizontal Scrolling
  // -------------------------
  function setUpHorizontalScroll() {
    const container = document.querySelector(".container");
    const sections = gsap.utils.toArray(".container section");
    const texts = gsap.utils.toArray(".anim");
    const mask = document.querySelector(".mask");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: "+=3000",
        //snap: 1 / (sections.length - 1),
      },
    });

    console.log(1 / (sections.length - 1));

    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1,
      },
    });

    sections.forEach((section) => {
      let text = section.querySelectorAll(".anim");

      if (text.length === 0) return;

      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
        },
      });
    });
  }

  // -----------------------------
  // Load images
  // -----------------------------
  const onLoad = () => {
    imagesToLoad--;
    if (imagesToLoad === 0) {
      render();
      setupScrollTrigger();
      setupTextAnimations();
      setUpHorizontalScroll();
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

        gsap.set(nav, { opacity: progress <= 0.1 ? 1 - progress / 0.1 : 0 });

        if (progress <= 0.25) {
          const z = (progress / 0.25) * -500;
          const opacity = progress >= 0.2 ? 1 - (progress - 0.2) / 0.05 : 1;
          gsap.set(header, {
            transform: `translate(-50%, -40%) translateZ(${z}px)`,
            opacity,
          });
        } else gsap.set(header, { opacity: 0, autoAlpha: 1 });

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

    ScrollTrigger.create({
      trigger: ".outro",
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
      scrub: false,
    });
  };

  const cards = gsap.utils.toArray(".card");

  gsap.set(".img-wrapper img", {
    clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)",
    autoAlpha: 0,
  });

  gsap.set(".card-content h1, .card-content p", {
    y: 0,
    autoAlpha: 0,
  });

  cards.forEach((card, i) => {
    const img = card.querySelector(".img-wrapper img");
    const textEls = card.querySelectorAll(".card-content h1, .card-content p");

    gsap.to(card, {
      scale: 0.8 + 0.2 * (i / (cards.length - 1)), // this one
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "top " + (5 + 30 * i), // this one
        end: "bottom bottom",
        endTrigger: "work-container",
        scrub: true,
        pin: card,
        pinSpacing: false,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.create({
      trigger: card,
      start: "bottom bottom",
      once: true,
      onEnter: () => {
        const tl = gsap.timeline();

        tl.to(img, {
          clipPath: "polygon(0 0,  0 100%, 100% 100%, 100% 0)",
          autoAlpha: 1,
          duration: 2,
          delay: 0.2,
          ease: "power2.out",
        });

        tl.to(
          textEls,
          {
            y: -10,
            autoAlpha: 1,
            duration: 0.6,
            ease: "elastic",
            stagger: 0.4,
          },
          "-=1.5"
        );
      },
    });
  });
});
