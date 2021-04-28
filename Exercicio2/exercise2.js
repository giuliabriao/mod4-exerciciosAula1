/*
2. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e 
retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.

Formato:
Nome: [nome]
ID: [id]
Região: [area]
Ingredientes: [ingredientes (string única)]
Instruções: [instruções]

https://stackoverflow.com/questions/39497594/combine-object-key-values-into-single-string-with-separator/39497976

https://stackoverflow.com/questions/49835981/iterating-through-a-badly-designed-api-where-object-keys-consist-of-text-and-num

*/

const fetch = require('node-fetch')

function getIngredients(meal) {

    const mealEntries = Object.entries(meal)

    return mealEntries
            .filter(([key, value]) => key.startsWith("strIngredient") && value && value.trim())
            .map(([key, value]) => value)
            .join(", ");
}

fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((meals) => {
        const meal = meals.meals[0];

        const formatedMeal =
            `Nome: ${meal.strMeal},
        ID: ${meal.idMeal},
        Região: ${meal.strArea},
        Ingredientes: ${getIngredients(meal)}
        Instruções: ${meal.strInstructions}`;

        console.log(formatedMeal);
    })

