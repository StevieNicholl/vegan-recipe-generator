let inputForm = document.querySelector("#input-form");
let recipeText = document.querySelector("#recipe-text");

function displayRecipe(response) {
  let rText = response.data.answer;
  rText = rText.replace("~`~`~`html", "");
  rText = rText.replace("~`~`~`", "");
  recipeText.innerHTML = rText;
}

function generateRecipe(event) {
  event.preventDefault();
  recipeText.innerHTML = "Generating a recipe";
  recipeText.classList.remove("hidden");

  let apiKey = "a20do60b19f65413at1b9bca4101844c";
  let inputIng = document.querySelector("#input-ing");
  let prompt =
    "Generate a vegan recipe with the following ingredients: " + inputIng.value;
  let context =
    "You know all of the best vegan recipes on the internet. Provide a recipe with vegan ingredients in html using the provided ingredient list. Provide only the html code without a wrapper. Do not include any characters around the html. Include only the recipe ingredients and instructions. Do not include any additional descriptions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayRecipe);
  //recipeText.innerHTML = "test text";
}
inputForm.addEventListener("submit", generateRecipe);
