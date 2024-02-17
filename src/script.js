function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Poem goes here",
    autoStart: true,
    delay: 20,
    cursor: "✍🏽",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
