let inputForm = document.querySelector("#input-form");

function generateRecipe(event) {
  event.preventDefault();
  let recipeText = document.querySelector("#recipe-text");
  recipeText.innerHTML = "Generating a recipe";
}
inputForm.addEventListener("submit", generateRecipe);
