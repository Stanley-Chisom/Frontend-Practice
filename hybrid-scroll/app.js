const stickySections = [...document.querySelectorAll(".sticky")];
let images = [
  "./img/img1.jpeg",
  "./img/img2.jpeg",
  "./img/img3.jpeg",
  "./img/img4.jpeg",
  "./img/img5.jpeg",
];

images.forEach((img) => {
  stickySections.forEach((section) => {
    let image = document.createElement("img");
    image.src = img;

    section.querySelector(".scroll-section").appendChild(image);
  });
});

window.addEventListener("scroll", () => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
});

let transform = (section) => {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector(".scroll-section");

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
};
