//2. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]

const fetch = require('node-fetch')

function recipeAPI(){
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .then((data) => {`
    Nome: ${data.meals[0].strMeal},
    ID: ${data.meals[0].idMeal},
    Região: ${data.meals[0].strArea},
    Ingredientes: ${data.meals[0].strArea}
    Instruções: ${data.meals[0].strInstructions}

    })
}
