let paragraphs = [...document.querySelectorAll("p")];
let spans = [];

paragraphs.forEach((paragraph) => {
  let htmlString = "";
  let paragraphArray = paragraph.textContent.split("");

  for (let i = 0; i < paragraphArray.length; i++) {
    htmlString += `<span>${paragraphArray[i]}</span>`;
    paragraph.innerHTML = htmlString;
  }
}); 

spans = [...document.querySelectorAll("span")];

const revealSpans = () => {
  for (let i = 0; spans.length; i++) {
    if (
      spans[i].parentElement.getBoundingClientRect().top <
      window.innerHeight / 2
    ) {
      let { left, top } = spans[i].getBoundingClientRect();
      top = top - window.innerHeight * 0.5;
      let opacityValue =
        1 - (top * 0.01 + left * 0.001) < 0.1
          ? 0.1
          : 1 - (top * 0.01 + left * 0.001).toFixed(3);

      opacityValue = opacityValue > 1 ? 1 : opacityValue.toFixed(3);
      spans[i].style.opacity = opacityValue;
    }
  }
};

window.addEventListener("scroll", () => {
  revealSpans();
});
revealSpans();
