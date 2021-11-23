'use strict'

let recipeContainerTP = document.getElementById("storedRecipesTP");

renderTopPicks();

function renderMeal(meal, parentContainer, index){
    //clear the container in case there's something already in it
    parentContainer.innerHTML = ""
    //Render each of the 3 recipes (drink entre dessert)
    for(let i = 0; i < 3; i++){
        //create a new container for the recipe, label it, and add the essential elements
        let mealContainer = document.createElement('div');
        mealContainer.id = "mealContainer";
        let mealTitle = document.createElement('h2');
        mealContainer.appendChild(mealTitle);
        parentContainer.appendChild(mealContainer);
        let mealText = document.createElement('p');
        mealContainer.appendChild(mealText);
        //check whether the stored variable is an object or a string: 
            //string: (which means it will be something like "you didn't chose a drink"), just set the content of the container to the string
            //object: run a special method to parse the object into something readable
        if (typeof(meal[i]) === "string") {
            mealText.textContent = meal[i];
        } else {
            let currentRecipe = meal[i];
            mealTitle.textContent = currentRecipe.recipeName;
            //make a list for the the ingredients
            let ul = document.createElement('ul');
            //iterate through the ingredients array and add each ingredient to a new li
            for(let j = 0; j < meal[i].ingredients.length; j++){
                let li = document.createElement('li');
                ul.appendChild(li);
                li.textContent = `${meal[i].ingredients[j][2]} ${meal[i].ingredients[j][1]} ${meal[i].ingredients[j][0]}`;
            }
            //attach the list to the recipe container
            mealText.appendChild(ul);
        }
    }
    //Add a remove button linked to the container and add an eventhandler to make it work
    let removeRecipeButton = document.createElement('div');
    removeRecipeButton.setAttribute('class', 'removeButton');
    removeRecipeButton.id = index;
    removeRecipeButton.textContent = "X"
    recipeContainerTP.appendChild(removeRecipeButton);
    removeRecipeButton.addEventListener('click', handleRemoveButtonClick);
}

function renderTopPicks(){
    //console.log(localStorage.getItem("topPicks"));
    //check if localstorage has any saved recipes
    if(localStorage.getItem("topPicks")){
        //clear the recipe container
        recipeContainerTP.innerHTML = "";
        //retrieve and parse the saved data
        let stringifiedSavedMealArray = localStorage.getItem("topPicks");
        let savedMealArray = JSON.parse(stringifiedSavedMealArray);
        //iterate through the array of saved recipes and render each one
        for(let i = 0; i < savedMealArray.length; i++){
            let topPicsDiv = document.createElement('div');
            recipeContainerTP.appendChild(topPicsDiv);
            renderMeal(savedMealArray[i], topPicsDiv, i);
        }
    } else {
        //let the user know localstorage doesnt have any saved recipes
        recipeContainerTP.innerHTML = "<p>You need to generate some recipes!</p>"
    }
    

// pull an array out of localstorage with all the stored recipes
// iterate through the array 
// for each meal in the top pics array, make a new div, and then call renderRecipe 3 times and display the stored drink, entre, and dessert, then move on to the next meal. 
}

function handleRemoveButtonClick (e) {
e.preventDefault();
//pull the recipe array out of storage and parse it again
let stringifiedSavedMealArray = localStorage.getItem("topPicks");
let savedMealArray = JSON.parse(stringifiedSavedMealArray);
//remove the recipe from the array corresponding to which delete button has been clicked
savedMealArray.splice(e.target.id, 1);
//if the array is now empty, delete the entry from local storage. If there are still items left, save the array back to localstorage
if (savedMealArray.length < 1){
    localStorage.removeItem("topPicks")
} else {
    localStorage.setItem("topPicks", JSON.stringify(savedMealArray)); 
}
//render the page again to update the list so that the removed recipe is visually gone
renderTopPicks();
}



