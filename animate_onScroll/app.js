let imgWrapper = [...document.querySelectorAll(".img-wrapper")];

let options = {
  rootMargin: "0px",
  threshold: 0.2,
};

let setItemActive = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
};

let observer = new IntersectionObserver(setItemActive, options);

imgWrapper.forEach((img, i) => {
  img.children[0].style.backgroundImage = `url(./img/${i + 1}.jpeg)`;
  i % 2 === 0 ? (img.style.left = `55%`) : (img.style.left = `5%`);
  observer.observe(img);
});
