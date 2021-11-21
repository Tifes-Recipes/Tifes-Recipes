'use strict'

let recipeContainerTP = document.getElementById("storedRecipesTP");

renderTopPicks();

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

function renderTopPicks(){
    console.log("hi hello'");
    if(localStorage.getItem("topPicks")){
        recipeContainerTP.innerHTML = "";
        let stringifiedSavedMealArray = localStorage.getItem("topPicks");
        let savedMealArray = JSON.parse(stringifiedSavedMealArray);
        for(let i = 0; i < savedMealArray.length; i++){
            let topPicsDiv = document.createElement('div');
            recipeContainerTP.appendChild(topPicsDiv);
            renderMeal(savedMealArray[i], topPicsDiv);
        }
    }

// pull an array out of localstorage with all the stored recipes
// iterate through the array 
// for each meal in the top pics array, make a new div, and then call renderRecipe 3 times and display the stored drink, entre, and dessert, then move on to the next meal. 
}