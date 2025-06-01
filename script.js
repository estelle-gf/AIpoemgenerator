

function displayPoem(response) {   
 
new Typewriter("#poemOutput", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});  
}
function generatePoem(event) {
    event.preventDefault(); 

let instructionInput = document.querySelector("#user-instructions");
let instructionValue = instructionInput.value.trim();
  let poemContainer = document.querySelector("#poem");
  poemContainer.classList.remove("hidden");

 let poemElement = document.querySelector("#poemOutput");
   poemElement.classList.remove("hidden");
 poemElement.innerHTML = `<div class="generating"> ⏳Loading your ${instructionValue} poem. . .</div>`; 
let apiKey = "2a99380b94355b9foa25076te09bd049";
let context = "You are an expert in literature, you are passionate about self-love, giving advice and making people smile. Sign off all poems with -Shecodes AI in the same font size as the poem. 6 lines maximum and follow user instructions.For example: I breathe the air, my body thrives, in vibrant health, my spirit lives. I am healthy, a radiant gleam, Living a life, a waking dream.";
let prompt = `User instructions: Generate a positive, encouraging and inspirational poem including the word ${instructionValue} in the response. Write on separate lines, format in basic HTML  but with no code tags. Be polite, keep the poem short.`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;


axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

