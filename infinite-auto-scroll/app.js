const scrollable = document.querySelector(".scrollable");
const content = document.querySelector(".content");
const imgSections = [...document.querySelectorAll(".img-section")];
const images = [...document.querySelectorAll(".img")];

images.forEach((image, index) => {
  image.style.backgroundImage = `url(./images/${index + 1}.jpeg)`;
});

const wraps = [...document.querySelectorAll(".wrap")];
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuWraps = [...document.querySelectorAll(".menu-wrap")];

function init() {
  document.body.style.height = `${content.getBoundingClientRect().height}px`;
}

window.addEventListener("resize", init);
// menuToggle.addEventListener("click", toggleMenu);

function displayWraps() {
  wraps.forEach((wrap, index) => {
    setTimeout(() => {
      wrap.classList.add("active");
    }, (index + 1) * 50);
  });
}

// function toogleMenu() {
//   if (menu.classList.contains("active")) {
//     menuToggle.classList.remove("active");
//     toggleMenuWraps(false);
//     setTimeout(() => {
//       menu.classList.remove("active");
//     }, 300);
//     setTimeout(() => {
//       toggleWraps(true);
//     }, 300);
//   } else {
//     menuToggle.classList.add("active");
//   }
// }

// function toggleWraps(active) {
//   wraps.forEach((wrap) => {
//     toggleWraps(wrap, active);
//   });
// }

// function toggleMenuWraps(wrap, active) {
//   setTimeout(() => {
//     if (active) {
//       wrap.classList.add("active");
//     } else {
//       wrap.classList.remove("active");
//     }
//   });
// }

displayWraps();

init();
