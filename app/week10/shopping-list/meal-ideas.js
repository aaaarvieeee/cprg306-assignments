"use client"
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }){
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas(){
        if (!ingredient == null) {
            return null;
        }
        else{
            const data = await fetchMealIdeas(ingredient)
            setMeals(data);
        }
    }

    useEffect(() => { 
        loadMealIdeas();
    }, [ingredient]);   

    return(
        <div>
            <h1 className="">Meal Ideas</h1>
            {
                meals ? meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <p className="text-white">{meal.strMeal}</p>
                    </li>
                )) : <p>No meal ideas found for {ingredient}.</p>
            }
        </div>
    )
}

async function fetchMealIdeas(ingredient) {
    try{
        const api = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient;
        const response = await fetch(api);
        const data = await response.json();
        return data.meals;
    }
    catch (error){
        console.log("Error:" + error)
    }
}
