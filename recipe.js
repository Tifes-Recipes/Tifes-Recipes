'use strict'

let recipeForm = document.getElementById("recipeFormRG");
let recipeContainerRG = document.getElementById("recipeBoxRG");
let recipeContainerTP = document.getElementById("storedRecipesTP");
let entreRecipes = [];
let drinkRecipes = [];
let dessertRecipes = [];
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
    
    if(drink == true){
        currentMeal[0] = generateRandomDrink();
    }else{
        currentMeal[0] = "You did not choose a drink.";
    }

    if(dessert == true){
        currentMeal[2] = generateRandomDessert();
    }else{
        currentMeal[2] = "You did not choose a dessert.";
    }

    currentMeal[1] = generateRandomEntre();

    renderMeal(currentMeal, recipeContainerRG);

    console.log(drink, dessert);

    recipeForm.reset();
}

function Recipe(recipeName, ingredientsList){
    this.recipeName = recipeName;
    this.ingredients = ingredientsList;
}

function drinkRecipe(recipeName, ingredientsList){
    drinkRecipes.push(new Recipe(recipeName, ingredientsList));
}

function entreRecipe(recipeName, ingredientsList){
    entreRecipes.push(new Recipe(recipeName, ingredientsList));
}

function dessertRecipe(recipeName, ingredientsList){
    dessertRecipes.push(new Recipe(recipeName, ingredientsList));
}

function initializeRecipeObjects(){
    entreRecipe("PB&J", [["bread", "slices", 2], ["peanutButter", "tablespoon", 1], ["jelly", "tablespoon", 1]]);
}

function generateRandomEntre(){
    //TODO: generate random 
}

function generateRandomDrink(){
    //TODO: generate random 
}

function generateRandomDessert(){
    //TODO: generate random 
}


function renderMeal(meal, parentContainer){
    //For each step of the array:
        // make a container for it 
        //* check whether it's an object or a string; 
            //string, just set the content of the container to the string
            //object, run a special method to parse the object into something readable
        // append the new object to parentContainer
        
}
// renderRecipe(some container, recipe object){
//     take the recipe object, create a new div element top put it in, create text content of the new div with parsed recipe, append the readable recipe to "some container"
// }



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