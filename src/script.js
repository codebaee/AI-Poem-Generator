//goal:
//build the api url
//make the call to the api
//display the generated poem
function poemDisplay(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "✍🏽",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let prompt = `Generate a poem based on ${instructionsInput.value}`;
  let context =
    "User instructions: You are a Poem expert and love to write short poems. Your mission is to to generate a 4 line poem in basic HTML. Be sure to follow the user instructions. Also always have a title that is in a <strong> element. Please make sure that there are line breaks to separte sentences on their own line. <br> ";
  let apiKey = "d010da332cob3740f398ft7aa7bdef74";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemOutput = document.querySelector("#poem");
  poemOutput.classList.remove("hidden");
  poemOutput.innerHTML = `<div class= "blink">⏳ Generating your poem about ${instructionsInput.value} </div> `;

  //
  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(poemDisplay);

  // Clear the text field
  instructionsInput.value = "";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
