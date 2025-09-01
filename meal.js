const numInput = document.getElementById("numberInput");
const addMealBtn = document.getElementById("addBtn");
const mainBody = document.getElementById("mainBody");
const randomContainer = document.getElementById("fetchRandom");

const getFoodByName = async function(mealName){
  try{
    mainBody.style.display= "none";
     randomContainer.innerHTML ="Loading...";

  const food = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
  const data =await food.json();

  if (!data.meals){
    randomContainer.innerHTML=`<p class="text-red-500 text-center">No meal found. Try another meal </p>`;
  }

  const meal = data.meals[0];
  randomContainer.innerHTML="";

    randomContainer.innerHTML +=`

    <img src = "${meal.strMealThumb}" alt="${meal.strMeal}" style="width:400px; height:auto; display:block; margin:0 auto; border-radius:6px;">

    <div class="m-10 md:m-6 text-white">
    <h3 class="font-bold">Meal Name: ${meal.strMeal} </h3>
    <p class="font-bold">Category: ${meal.strCategory} </p>
    <p>Instruction: ${meal.strInstructions}</p>
    <p class="flex justify-center items-center mt-6 w-64 p-4 border bg-red-500 text-white"><a href=${meal.strYoutube}/a>  Watch on Youtube</p>
  
    </div>

    `;

} catch(error) {
console.log(error);
randomContainer.innerHTML = `<p style="color:red; width:400px; margin:0 auto;">Something went wrong. Please try again.</p>`;
}
};

addMealBtn.addEventListener('click', function(){
    const mealName = numInput.value.trim();
    if (!mealName){
        randomContainer.innerHTML=`<p class="text-red-500 text-center">No meal found. Try another meal </p>`;
    
    return;
}
getFoodByName(mealName);
});
