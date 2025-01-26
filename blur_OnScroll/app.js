let stickySections = [...document.querySelectorAll(".sticky")];

const animate = () => {
  for (let i = 0; i < stickySections.length; i++) {
    let { top } = stickySections[i].parentElement.getBoundingClientRect();
    let transTop = top > 0 ? 0 : top * -1;

    if (transTop >= 1000) transTop = 1000;

    if (top <= 0 && i !== stickySections.length - 1) {
      stickySections[i].style.filter = `blur(${0 + transTop * 0.05}px)`;
      stickySections[i].style.transform = `scale3d(${1 - transTop * 0.001} , ${
        1 - transTop * 0.001
      }, 1)`;
      stickySections[i].style.opacity = 1 - transTop * 0.00015;
    }
  }
  requestAnimationFrame(animate);
};

animate();
