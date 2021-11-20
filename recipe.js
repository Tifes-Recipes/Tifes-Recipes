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
        generateRandomDrink();
    }else{

    }

    if(dessert == true){
        generateRandomDessert();
    }else{

    }

    generateRandomMeal(){
        
    }

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

}

function generateRandomDrink(){

}

function generateRandomDessert(){

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