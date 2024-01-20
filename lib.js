const foodLoader = async(searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayFood(data.meals) // lib.js:12 Uncaught (in promise) ReferenceError: data is not defined: for missing object(meals) here
    console.log(data)
}

//-----------------------------Another Method!!---------------------------------------------

// const foodLoader = () => { // async will be omitted
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=rice`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayFood(data.meals)) // function will be used here
// }

//--------------------------------------------------------------------------------------------

const displayFood = foods => {
    // console.log(foods.meals[0].strMeal)
    const allFoodContainer = document.getElementById('food-container');
    allFoodContainer.textContent = '';
    // foods.slice(0, 3)
    foods.forEach(food => {
        console.log(food.idMeal);
        // console.log(foods.meals[]);
        const singleFoodLoader = document.createElement('div');
        singleFoodLoader.classList.add('card')

        singleFoodLoader.innerHTML = `
        
  <figure class="px-10 pt-10">
    <img src="${food.strMealThumb}" alt="${food.strMeal}" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${food.strMeal}</h2>
    <h4>Name: ${food.strMeal}</h4>
    <p>Origin: ${food.strArea}</p>
    <div class="card-actions">
    
      <button class="btn btn-success" onclick="modalPaertOpen(${food.idMeal})">See Details</button>
             
    `
        allFoodContainer.appendChild(singleFoodLoader);

    })




    // document.getElementById('btn-search').addEventListener('click', function() {
    //     searchField()
    //         // const searchField = document.getElementById('search-field');
    //         // const searchText = searchField.value;
    //         // console.log(searchText)
    // })
}
const searchField = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    foodLoader(searchText)
}

const modalPaertOpen = idMeal => {
    const urlMeal = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(urlMeal)
        .then(res => res.json())
        .then(data => loadFoodModal(data.foods[0]))
}

const loadFoodModal = food => {
    console.log(food)
    const displayFood = document.createElement('div');
    displayFood.classList.add('modal')
    displayFood.innerHTML = `

  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Name: ${meal.strMeal}</h3>
    <p className="py-4">Category: ${meal.strCategory}</p>
    <p className="py-4">Source: <a href="${meal.strCategory}">Visit page to know source</a></p>
    <p className="py-4">Youtube Link: <a href="${meal.strYoutube}" target="_blank"></p>
  </div>

    `

}
foodLoader('rice')