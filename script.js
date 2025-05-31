

function displayPoem(response) {  console.log("peom generated"); 
   new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});  
}
function generatePoem(event) {
    event.preventDefault(); 
let instructionInput = document.querySelector("#user-instructions");
let instruction = instructionInput.value.trim();
let apiKey = "2a99380b94355b9foa25076te09bd049";
let context = "You are an expert in liturature, you are passionate about self-love, giving advice and making people smile.  For example: I breathe the air, my body thrives, in vibrant health, my spirit lives. I am healthy, a radiant gleam, Living a life, a waking dream.";
let prompt = `User instructions: Generate a positive, encouraging and inspirational poem about ${instruction}. Write on separate lines, format in basic HTML  but with no code tags. Be polite, keep the poem short, 6 lines maximum and follow user instructions.`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiUrl).then(displayPoem);

console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

