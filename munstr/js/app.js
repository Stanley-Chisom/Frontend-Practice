import { lerp } from "./utils.js";
import { createProjects, createBlogPost } from "./appData.js";

createProjects();
createBlogPost();

const main = document.querySelector("main");
const video = document.querySelector("video");
const videoWrapper = document.querySelector("#video");
const overlayTextLeft = document.querySelector(".video-text-left");
const overlayTextRight = document.querySelector(".video-text-right");

main.addEventListener("scroll", () => {
  animateVideoOnScroll();
});

function animateVideoOnScroll() {
  let { bottom } = videoWrapper.getBoundingClientRect();
  let scale = 1 - (bottom - window.innerHeight) * 0.0005;

  scale = scale < 0.2 ? 0.2 : scale > 1 ? 1 : scale;
  video.style.transform = `scale(${scale})`;

  let textTrans = bottom - window.innerHeight;
  textTrans = textTrans < 0 ? 0 : textTrans;

  overlayTextLeft.style.transform = `translate(${-textTrans}px)`;
  overlayTextRight.style.transform = `translate(${textTrans}px)`;
}

// projects
const projectSticky = document.querySelector(".projects-sticky");
const projectSlider = document.querySelector(".projects-slider");

let projectTargetX = 0;
let projectCurrentX = 0;

let percentages = {
  small: 700,
  medium: 300,
  large: 100,
};

let limit =
  window.innerWidth <= 600
    ? percentages.small
    : window.innerWidth <= 1100
    ? percentages.medium
    : percentages.large;

const setLimit = () => {
  limit =
    window.innerWidth <= 600
      ? percentages.small
      : window.innerWidth <= 1100
      ? percentages.medium
      : percentages.large;
};

window.addEventListener("resize", setLimit);

const animateProjectsOnScroll = () => {
  let offsetTop = projectSticky.parentElement.offsetTop;
  let percentage = ((main.scrollTop - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > limit ? limit : percentage;

  projectTargetX = percentage;
  projectCurrentX = lerp(projectCurrentX, projectTargetX, 0.1);
  projectSlider.style.transform = `translate3d(${-projectCurrentX}vw, 0 , 0)`;
};

const blogPosts = document.getElementById("blog");
const blogPost = [...document.querySelectorAll(".post")];

const scrollBlogPosts = () => {
  let blogSectionTop = blogPosts.getBoundingClientRect().top;
  for (let i = 0; i < blogPost.length; i++) {
    if (blogPost[i].parentElement.getBoundingClientRect().top <= 1) {
      let offset = (blogSectionTop + window.innerHeight * (i + 1)) * 0.0005;
      offset = offset < -1 ? -1 : offset >= 0 ? 0 : offset;
      blogPost[i].style.transform = `scale(${1 + offset})`;
    }
  }
};

const circleSection = document.getElementById("circle-animation");
const circle = document.querySelector(".circle");

const scrollCircle = () => {
  let { top } = circleSection.getBoundingClientRect();
  let scaleTop = Math.abs(top);
  let scale = scaleTop / window.innerHeight;
  scale = scale < 0 ? 0 : scale > 1 ? 1 : scale;
  if (top <= 0) {
    circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
  } else {
    circle.style.transform = `translate(-50%, -50%) scale(${0})`;
  }
};

// Discover section
const discoverWrapper = document.querySelector(".discover-wrapper");
const leftText = document.querySelector(".text-left");
const rightText = document.querySelector(".text-right");

const scrollDiscover = () => {
  let { bottom } = discoverWrapper.getBoundingClientRect();
  let textTransform = bottom - window.innerHeight;
  textTransform = textTransform < 0 ? 0 : textTransform;
  leftText.style.transform = `translateX(${-textTransform}px)`;
  rightText.style.transform = `translateX(${textTransform}px)`;
};

const animate = () => {
  animateProjectsOnScroll();
  requestAnimationFrame(animate);
};

main.addEventListener("scroll", () => {
  scrollBlogPosts();
  scrollCircle();
  scrollDiscover();
});

animate();
