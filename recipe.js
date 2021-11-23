'use strict'

let recipeForm = document.getElementById("recipeFormRG");
let recipeContainerRG = document.getElementById("recipeBoxRG");
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

    // console.log(currentMeal);

    renderMeal(currentMeal, recipeContainerRG);
    let saveRecipeButton = document.createElement('div');
    saveRecipeButton.id = "saveButton";
    saveRecipeButton.textContent = "Save This Recipe"
    recipeContainerRG.appendChild(saveRecipeButton);
    saveRecipeButton.addEventListener('click', handleSaveButtonClick);

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
    entreRecipe("Chickpea and Tomato Stew", [["tomatoes", "medium-sized", 6], ["olive oil", "cup", 0.5], ["onions, chopped", "medium-sized", 2],["garlic", "cloves", 4],["boiled, drained chickpeas", "cups", 2], ["parsley, chopped", "cup", 0.5], ["thyme", "teaspoon", 0.5], ["salt", "teaspoon", 1]]);
    entreRecipe("Zucchini Garlic Stir-fry", [["zucchini", "lbs", 1.5], ["salt", "tsp", 2.25], ["vegetable oil", "tbsp", 3], ["garlic", "cloves", 4], ["sugar", "tsp", 0.25], ["Xiaoxing wine or dry sherry", "tbsp", 1]]);
    entreRecipe("Caldo Verde (\"green soup\")", [["potatoes, diced", "medium-sized", 4], ["onion, coarsely chopped", "medium-sized", 1], ["kale leaves, shredded", "firmly packed cups", 2], ["garlic", "cloves", 12], ["salt", "tsp", 1], ["olive oil", "tbsp", 1], ["black pepper", "tsp", 2]]);
    entreRecipe("Stir-fried chicken and leeks", [["chicken", "breast", 1], ["leek stalks", "lbs", 1], ["ginger root", "slices", 3], ["soy sauce", "tbsp", 2], ["sherry", "tbsp", 1], ["oil", "tbsp", 4]]);
    entreRecipe("Stir-fried chicken with eggplant and hot peppers", [["chicken", "breast", 1], ["soy sauce", "tbsp", 1], ["sherry", "tbsp", 1], ["cornstarch", "tbsp", 1], ["eggplant", "medium", 1], ["chili peppers", "whole", 3], ["ginger root", "slices", 3], ["garlic", "clove", 1], ["oil", "tbsp", 4]]);
    // If this doesn't work you will add more context to the drink recipe
    drinkRecipe("Water" , [["","",""]]);
    drinkRecipe("Sweet tea", [["","",""]]);
    drinkRecipe("Lemon-lime soda", [["","",""]]);
    drinkRecipe("Cola", [["","",""]]);
    drinkRecipe("Lemonade", [["Lemon Juice", "tbsp", 1], ["sugar", "tbsp", 2], ["water", "fluid oz", 8]]);
    drinkRecipe("Milk", [["","",""]]);
    drinkRecipe("Chocolate milk", [["","",""]]);
    drinkRecipe("White wine", [["","",""]]);
    drinkRecipe("Red wine", [["","",""]]);
    drinkRecipe("Beer", [["","",""]]);
    drinkRecipe("Root Beer", [["","",""]]);
    drinkRecipe("Herbal Tea", [["","",""]]);
    drinkRecipe("Orange Juice", [["","",""]]);
    drinkRecipe("Apple Juice", [["","",""]]);
    drinkRecipe("Coconut Milk", [["","",""]]);
    drinkRecipe("Milkshake", [["Ice cream, any flavor", "scoops", 3], ["Milk", "Fluid oz", 8]]);
    dessertRecipe("Sugared walnuts", [["walnut meats", "cups", 1.5], ["water", "cups", 1], ["sugar", "cups", 1], ["oil", "cups", 0.5]]);
    dessertRecipe("Sweet pineapple tea", [["sugar", "cups", 0.5], ["honey", "cups", 0.25], ["water", "cups", 3], ["crushed pineapple", "oz", 16]]);
    dessertRecipe("Almond cookies", [["almonds", "whole", 35], ["almonds", "ground", 10], ["lard", "cups", 1], ["sugar", "cups", 1], ["egg", "medium", 1], ["almond extract", "tsp", 1], ["flour", "cups", 2.5], ["baking powder", "tsp", 1.5], ["salt", "pinch", 1]]);
    dessertRecipe("Steamed red date cake", [["Chinese red dates", "cups", 2], ["glutinous rice flower", "cup", 1], ["water", "cup", 1.5]]);
    dessertRecipe("Steamed Sponge Cake", [["eggs", "medium", 6], ["sugar", "cups", 1.5], ["flour", "cups", 1.5], ["water", "tbsp", 2.5], ["baking powder", "tsp", 0.5], ["vanilla extract", "tsp", 1]]);
    dessertRecipe("Crumbly cake", [["flour", "cups", 1.33], ["cornmeal", "cups", 0.66], ["sugar", "cups", 0.75], ["grated peel", "lemon's", 1], ["almonds", "oz", 4], ["yolks", "egg", 2], ["butter", "lbs", 0.25], ["confectioner's sugar", "tbsp", 1]]);
    dessertRecipe("Sweet pastry fritters", [["flour", "cups", 1.66], ["sugar", "tbsp", 1.5], ["egg", "large", 1], ["white wine", "tbsp", 2], ["salt", "pinch", 2], ["confectioner's sugar, for dusting", "tbsp", 2]]);
    dessertRecipe("Spuma de cioccolata (Cold chocolate foam)", [["semi-sweet chocolate", "oz", 6], ["sugar", "tsp", 2], ["eggs", "large", 4], ["strong espresso coffee", "cups", 0.25], ["rum", "tbsp", 2], ["heavy whipping cream", "cup", 0.66]]);
    dessertRecipe("Zabaione", [["yolks", "egg", 4], ["sugar", "cups", 0.25], ["dry Marsala", "cups", 0.5]]);
    dessertRecipe("Gelato spazzacamino", [["vanilla Ice Cream", "scoops", 2], ["ground dried espresso coffee", "tsp", 2], ["scotch whiskey", "tbsp", 1]]);
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
    console.log(meal);
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
            mealTitle.textContent = currentRecipe.recipeName;
            let ul = document.createElement('ul');
            for(let j = 0; j < meal[i].ingredients.length; j++){
                let li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = `${meal[i].ingredients[j][2]} ${meal[i].ingredients[j][1]} ${meal[i].ingredients[j][0]}`;
            }
            mealText.appendChild(ul);
            console.log(ul)
        }
    }
}

function handleSaveButtonClick(event){
    //have an array in localstorage with all of the saved meal arrays inside of it 
    //Array name will be topPicks
    //check to see if the array already exists
        //if it exists, pull it out, push the new saved meal onto it, and then push it back into localstorage
        //it it doesn't exist, make a new array, put the saved meal on it, and then push it into localstorage
    if(localStorage.getItem("topPicks")){
        let stringifiedSavedMealArray = localStorage.getItem("topPicks");
        let savedMealArray = JSON.parse(stringifiedSavedMealArray);
        savedMealArray.push(currentMeal);
        stringifiedSavedMealArray = JSON.stringify(savedMealArray);
        localStorage.setItem("topPicks", stringifiedSavedMealArray);
    }else{
        let savedMealArray = [];
        savedMealArray.push(currentMeal);
        let stringifiedSavedMealArray = JSON.stringify(savedMealArray);
        localStorage.setItem("topPicks", stringifiedSavedMealArray);
    }
    recipeContainerRG.innerHTML = "<p id=\"saveMessage\">Your recipe was saved! Check out your top picks page 😉</p>";
}

init();

function test(){
    // for(let i = 0; i < mealRecipes.length; i++){
    //     console.log(mealRecipes[i]);
    // }
    // console.log(recipeForm);
}