const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (this.scrollY > 0) {
    navbar.classList.remove("py-4");
    navbar.classList.add("shadow", "py-2");
  } else {
    navbar.classList.add("py-4");
    navbar.classList.remove("shadow", "py-2");
  }
});
AOS.init({
  duration: 700,
});
var options = {
  strings: ["Web Developer"],
  typeSpeed: 200,
  loop: true,
  loopCount: Infinity,
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
};

var typed = new Typed("#hero-typed", options);
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
