
function foodSearch(){
    let input = document.getElementById("input").value;

    let fetchData = null;

    document.getElementById('input').value = '';

    document.getElementById('foodDiv').innerHTML = '';

        if(input.length ==  ''){
            alert("Please Enter Some Text")
        }

        else if (input != null && input.length < 1) {
            // List all meals by first letter
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`)
            .then(res => res.json())
            .then(data => {
                getFoodList(data);
                // data = fetchData;
            });
        }


        else {
            // Filter by Category
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${input}`)
            .then(res => res.json())
            .then(data => {
                // data = fetchData;
                getFoodList(data);
            });
        

            // Filter by Area
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${input}`)
                .then(res => res.json())
                .then(data => {
                    // data = fetchData;
                    getFoodList(data);
                });


            // Search meal by name
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
                .then(res => res.json())
                .then(data => {
                    // data = fetchData;
                    getFoodList(data);
                });
        }


    function getFoodList(foodData) {

        let foodList = foodData.meals;

        for (let i = 0; i < foodList.length; i++) {
            const element = foodList[i];
            // console.log(element);

            let col = document.createElement('div');
            col.className = "col";

            let food = `
               
                <div class="" onclick="selectFood('${element.idMeal}')" >
                        <img src="${element.strMealThumb}" class="card-img-top" alt="${element.strMealThumb}">
                        <div class="card-body">
                            <h5 class="card-title text-center" id="foodName">${element.strMeal}</h5>
                        </div>
                    </div>
            `
           
                col.innerHTML = food;

                let foodDiv = document.getElementById("foodDiv");
                foodDiv.appendChild(col);

            }
    }
}

function selectFood(foodID){
    
    console.log(foodID);

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`)
            .then(res => res.json())
            .then(data => {
                getFoodDetails(data);
            });

}

function getFoodDetails(selectedFood) {
    let foodImage = selectedFood.meals[0].strMealThumb;
    let foodTitle = selectedFood.meals[0].strMeal;

    let ingredients = [
                        selectedFood.meals[0].strIngredient1,
                        selectedFood.meals[0].strIngredient2,
                        selectedFood.meals[0].strIngredient3,
                        selectedFood.meals[0].strIngredient4,
                        selectedFood.meals[0].strIngredient5,
                        selectedFood.meals[0].strIngredient6,
                        selectedFood.meals[0].strIngredient7,
                        selectedFood.meals[0].strIngredient8,
                        selectedFood.meals[0].strIngredient9,
                        selectedFood.meals[0].strIngredient10,
                        selectedFood.meals[0].strIngredient11,
                        selectedFood.meals[0].strIngredient12,
                        selectedFood.meals[0].strIngredient13,
                        selectedFood.meals[0].strIngredient14,
                        selectedFood.meals[0].strIngredient15,
                        selectedFood.meals[0].strIngredient16,
                        selectedFood.meals[0].strIngredient17,
                        selectedFood.meals[0].strIngredient18,
                        selectedFood.meals[0].strIngredient19,
                        selectedFood.meals[0].strIngredient20,
                    ];

    let measuers = [
        selectedFood.meals[0].strMeasure1,
        selectedFood.meals[0].strMeasure2,
        selectedFood.meals[0].strMeasure3,
        selectedFood.meals[0].strMeasure4,
        selectedFood.meals[0].strMeasure5,
        selectedFood.meals[0].strMeasure6,
        selectedFood.meals[0].strMeasure7,
        selectedFood.meals[0].strMeasure9,
        selectedFood.meals[0].strMeasure10,
        selectedFood.meals[0].strMeasure11,
        selectedFood.meals[0].strMeasure12,
        selectedFood.meals[0].strMeasure13,
        selectedFood.meals[0].strMeasure14,
        selectedFood.meals[0].strMeasure15,
        selectedFood.meals[0].strMeasure16,
        selectedFood.meals[0].strMeasure17,
        selectedFood.meals[0].strMeasure18,
        selectedFood.meals[0].strMeasure19,
        selectedFood.meals[0].strMeasure20,
    ];
                        
    
        

        

    let getFoodDetails = document.getElementById('foodDetails');

    getFoodDetails.innerHTML = `
        <img src="${foodImage}" class="card-img-top" alt="..." style="border-radius: 10px">
        <div class="card-body">
            <h3 class="card-title mb-5">${foodTitle}</h3>
            <h5 class="mb-3">Ingredients</h5>
            <p>${selectedFood.meals[0].strMeasure1}  ${selectedFood.meals[0].strIngredient1}</p>
            <p>${selectedFood.meals[0].strMeasure2}  ${selectedFood.meals[0].strIngredient2}</p>
            <p>${selectedFood.meals[0].strMeasure3}  ${selectedFood.meals[0].strIngredient3}</p>
            <p>${selectedFood.meals[0].strMeasure4}  ${selectedFood.meals[0].strIngredient4}</p>
            <p>${selectedFood.meals[0].strMeasure5}  ${selectedFood.meals[0].strIngredient5}</p>
            <p>${selectedFood.meals[0].strMeasure6}  ${selectedFood.meals[0].strIngredient6}</p>
            <p>${selectedFood.meals[0].strMeasure7}  ${selectedFood.meals[0].strIngredient7}</p>
            <p>${selectedFood.meals[0].strMeasure8}  ${selectedFood.meals[0].strIngredient8}</p>
            <p>${selectedFood.meals[0].strMeasure9}  ${selectedFood.meals[0].strIngredient9}</p>
            <p>${selectedFood.meals[0].strMeasure10} ${selectedFood.meals[0].strIngredient10}</p>
            <p>${selectedFood.meals[0].strMeasure11} ${selectedFood.meals[0].strIngredient11}</p>
            <p>${selectedFood.meals[0].strMeasure12} ${selectedFood.meals[0].strIngredient12}</p>
            <p>${selectedFood.meals[0].strMeasure13} ${selectedFood.meals[0].strIngredient13}</p>
            <p>${selectedFood.meals[0].strMeasure14} ${selectedFood.meals[0].strIngredient14}</p>
            <p>${selectedFood.meals[0].strMeasure15} ${selectedFood.meals[0].strIngredient15}</p>
            <p>${selectedFood.meals[0].strMeasure16} ${selectedFood.meals[0].strIngredient16}</p>
            <p>${selectedFood.meals[0].strMeasure17} ${selectedFood.meals[0].strIngredient17}</p>
            <p>${selectedFood.meals[0].strMeasure18} ${selectedFood.meals[0].strIngredient18}</p>
            <p>${selectedFood.meals[0].strMeasure19} ${selectedFood.meals[0].strIngredient19}</p>
            <p>${selectedFood.meals[0].strMeasure20} ${selectedFood.meals[0].strIngredient20}</p>
        </div>
    `;

   
    
    
    
    

    
    
    

    

    
}