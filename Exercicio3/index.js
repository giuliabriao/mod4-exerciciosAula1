/*3. Faça fetch dos dados através da API 
(https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) 
e retorne uma lista(array) com os nomes dos primeiros 10 resultados.*/

const fetch = require('node-fetch');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
.then((response) => {
    if(response.ok) return response.json();
})
.then((seafood) => {
    const seafoodMeals = seafood.meals;
    const firstTenMeals = seafoodMeals.slice(0, 10).map(meal => meal.strMeal);
    console.log(firstTenMeals);
})