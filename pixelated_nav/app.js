const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const links = [...document.querySelectorAll("li")];

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", () => {
    for (let j = 0; j < links.length; j++) {
      if (j !== i) {
        links[j].style.opacity = 0.2;
        links[j].style.zIndex = 0;
      } else {
        links[j].style.opacity = 1;
        links[j].style.zIndex = 3;
      }
    }
  });

  links[i].addEventListener("mouseleave", () => {
    for (let i = 0; i < links.length; i++) {
      links[i].style.opacity = 1;
    }
  });
}

// Push images to an array

const images = [
  "./images/1.jpeg",
  "./images/2.jpeg",
  "./images/3.jpeg",
  "./images/4.jpeg",
  "./images/5.jpeg",
];

const imgArr = [];

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currrentY = 0;

window.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});
