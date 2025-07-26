"use client"
import MealSearchInput from "./Components/MealSearchInput";


export default async function MealsPage({searchParams}) {
 
      const query = await searchParams

  const fetchMeals = async () => {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`);
      const data = await res.json();
      return data.meals;
    //   setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching meals:", error);
      return [];
    }
  };
   const meals = await fetchMeals()

  return (
    <div>
        <div className="flex justify-center">
           <MealSearchInput />
        </div>
     <div className="grid grid-cols-4 gap-4">
        
        {meals?.map((singleMeal) =>{
            return(
                <div>
                    <p className="text 2xl font-bold">{singleMeal?.strMeal}</p>
                    <p>{singleMeal?.strInstruction}</p>
                </div>
            )
        })}
     </div>
</div>
  );
}
