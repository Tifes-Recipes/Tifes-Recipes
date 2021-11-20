'use strict'

let recipeForm = document.getElementById("recipeFormRG");
let recipeContainerRG = document.getElementById("recipeBoxRG");
let recipeContainerTP = document.getElementById("storedRecipesTP");
let entreRecipesArr = [];
let drinkRecipesArr = [];
let dessertRecipesArr = [];
let currentMeal = [];

function init(){
    initializeRecipeObjects();
    recipeForm.addEventListener("submit", handleSubmit);
    test();
}

function handleSubmit(event){
    event.preventDefault();
    let drink = event.target.drinkOption.value;
    let dessert = event.target.dessertOption.value;
    // console.log(typeof(drink));
    if(drink === 'true'){
        currentMeal[0] = generateRandomDrink();

    }else{
        currentMeal[0] = "You did not choose a drink.";
    }

    if(dessert === 'true'){
        currentMeal[2] = generateRandomDessert();
    }else{
        currentMeal[2] = "You did not choose a dessert.";
    }

    currentMeal[1] = generateRandomEntre();

    console.log(currentMeal);

    renderMeal(currentMeal, recipeContainerRG);

    console.log(drink, dessert);

    recipeForm.reset();
}

function Recipe(recipeName, ingredientsList){
    this.recipeName = recipeName;
    this.ingredients = ingredientsList;
}

function drinkRecipe(recipeName, ingredientsList){
    drinkRecipesArr.push(new Recipe(recipeName, ingredientsList));
}

function entreRecipe(recipeName, ingredientsList){
    entreRecipesArr.push(new Recipe(recipeName, ingredientsList));
}

function dessertRecipe(recipeName, ingredientsList){
    dessertRecipesArr.push(new Recipe(recipeName, ingredientsList));
}

function initializeRecipeObjects(){
    entreRecipe("PB&J", [["bread", "slices", 2], ["peanutButter", "tablespoon", 1], ["jelly", "tablespoon", 1]]);
    entreRecipe("Ramen Noodles", [["noodle","block", 1], ["water", "ounces", 16], ["beef seasoning", "packet", 1]]);
    // If this doesn't work you will add more context to the drink recipe
    drinkRecipe("Water" , [[]]);
    drinkRecipe("Sweet tea", [[]]);
    dessertRecipe("Chocolate cake", [["egg", "chicken", 4], ["flour", "cups", 2], ["coacoa powder", "cups", 15]]);
    dessertRecipe("Brownies",[["egg", "chicken", 1], ["flour", "cups", 5], ["coacoa powder", "cups", 14]] );
    // console.log(drinkRecipesArr);
}

function generateRandomEntre(){
    //TODO: generate random 
    let entreRecipeRandom = Math.round(Math.random() * (entreRecipesArr.length - 1));
    return entreRecipesArr[entreRecipeRandom];

}

function generateRandomDrink(){
    //TODO: generate random        
       
       let drinkRecipeRandom = Math.round(Math.random() * (drinkRecipesArr.length - 1));
       return drinkRecipesArr[drinkRecipeRandom];
       
}

function generateRandomDessert(){
    //TODO: generate random 
    let dessertRecipeRandom = Math.round(Math.random() * (dessertRecipesArr.length - 1));
    return dessertRecipesArr[dessertRecipeRandom];
}


function renderMeal(meal, parentContainer){
    //For each step of the array:
        // make a container for it 

    parentContainer.innerHTML = ""
    for(let i = 0; i < 3; i++){
        let mealContainer = document.createElement('div');
        mealContainer.id = "mealContainer";
        let mealTitle = document.createElement('h2');
        mealContainer.appendChild(mealTitle);
        parentContainer.appendChild(mealContainer);
        //* check whether it's an object or a string; 
            //string, just set the content of the container to the string
            //object, run a special method to parse the object into something readable
        let mealText = document.createElement('p');
          // append the new object to parentContainer
        mealContainer.appendChild(mealText);
        if (typeof(meal[i]) === "string") {
            mealText.textContent = meal[i];
        } else {
            let currentRecipe = meal[i];
            mealTitle.textContent = currentRecipe.recipeName
        }
    }
        
}



// renderTopPics(){
// pull an array out of localstorage with all the stored recipes
// iterate through the array 
// for each meal in the top pics array, make a new div, and then call renderRecipe 3 times and display the stored drink, entre, and dessert, then move on to the next meal. 
// }


function test(){
    // for(let i = 0; i < mealRecipes.length; i++){
    //     console.log(mealRecipes[i]);
    // }
    // console.log(recipeForm);
}


init();