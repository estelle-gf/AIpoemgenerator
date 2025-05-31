


function generatePoem(event) {
    event.preventDefault(); 
    let poemBox = document.querySelector("#poem-box");
    poemBox.innerHTML = ""; 
    poemBox.setAttribute.fontSize = "30px";
    poemBox.style.textAlign = "center";
   new Typewriter(poemBox, {
  strings: ['I breathe the air, my body thrives, in vibrant health, my spirit lives. I am healthy, a radiant gleam, Living a life, a waking dream. my mind is clear, my heart is light, A stream of fortune, shining bright. I am wealthy, a boundless flow. Abundance blooms, wherever I go.'],
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);