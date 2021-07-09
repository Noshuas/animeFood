import React, {useContext} from 'react';
import Meal from './Meal.jsx';
import { mealContext } from './context/mealContext.jsx';



const MealList = () => {
  const { selectedMeals } = useContext(mealContext);

  return (
    <div id="mealList">
      {selectedMeals.map((meal, i)=>(
        <Meal info={meal} key={`${meal.id}${i}`} number={i} />
      ))}
    </div>
  )
}

export default MealList;
