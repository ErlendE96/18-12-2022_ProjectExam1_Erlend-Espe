const foodList = document.getElementById('food');
const details = document.querySelector('.mealDetails');
const closeRecipe = document.getElementById('closerecipe');
const searchbutton1 = document.getElementById('searchButton1');
const searchbutton2 = document.getElementById('searchButton2');
const searchbutton3 = document.getElementById('searchButton3');

searchbutton1.addEventListener('click', getfoodList1);
searchbutton2.addEventListener('click', getfoodList2);
searchbutton3.addEventListener('click', getfoodList3);
foodList.addEventListener('click', fetchRecipe);
closeRecipe.addEventListener('click', () => {
    details.parentElement.classList.remove('recipe');
});


function getfoodList1(){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=beef`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(food => {
                html += `
                    <div class = "itemhp" data-id = "${food.idMeal}">
                        <div class = "mealImg">
                            <img src = "${food.strMealThumb}" alt = "meal">
                        </div>
                        <div class = "mealName">
                            <h3>${food.strMeal}</h3>
                            <a href = "#" class = "recipeBtn">Show Recipe</a>
                        </div>
                    </div>
                `;
            });
            foodList.classList.remove('error');
        } else{
            html = "Sorry, we could not find a meal containing your ingredient!";
            foodList.classList.add('error');
        }

        foodList.innerHTML = html;
    });
}

function getfoodList2(){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(food => {
                html += `
                    <div class = "item" data-id = "${food.idMeal}">
                        <div class = "mealImg">
                            <img src = "${food.strMealThumb}" alt = "meal">
                        </div>
                        <div class = "mealName">
                            <h3>${food.strMeal}</h3>
                            <a href = "#" class = "recipeBtn">Show Recipe</a>
                        </div>
                    </div>
                `;
            });
            foodList.classList.remove('error');
        } else{
            html = "Sorry, we could not find a meal containing your ingredient!";
            foodList.classList.add('error');
        }

        foodList.innerHTML = html;
    });
}

function getfoodList3(){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=egg`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(food => {
                html += `
                    <div class = "item" data-id = "${food.idMeal}">
                        <div class = "mealImg">
                            <img src = "${food.strMealThumb}" alt = "meal">
                        </div>
                        <div class = "mealName">
                            <h3>${food.strMeal}</h3>
                            <a href = "#" class = "recipeBtn">Show Recipe</a>
                        </div>
                    </div>
                `;
            });
            foodList.classList.remove('error');
        } else{
            html = "Sorry, we could not find a meal containing your ingredient!";
            foodList.classList.add('error');
        }

        foodList.innerHTML = html;
    });
}



function fetchRecipe(getRecipe){
    getRecipe.preventDefault();
    if(getRecipe.target.classList.contains('recipeBtn')){
        let foodItem = getRecipe.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodItem.dataset.id}`)
        .then(response => response.json())
        .then(data => recipeCard(data.meals));
    }
}


function recipeCard(food){
    console.log(food);
    food = food[0];
    let html = `
        <h2 class = "recipe-title">${food.strMeal}</h2>
        <p class = "recipe-category">${food.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${food.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${food.strMealThumb}" alt = "">
        </div>
    `;
    details.innerHTML = html;
    details.parentElement.classList.add('recipe');
}

