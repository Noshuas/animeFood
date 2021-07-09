import React, {useContext} from 'react';
import { mealContext } from './context/mealContext.jsx';

const Meal = ({info, number}) => {

  const { selectedMeals, setSelectedMeals, meals } = useContext(mealContext);

  const changeMeal = () => {
    const selectedMealIndex = number;
    const overallIndex = info.index;
    const nextMealIndex = (overallIndex  + 1) % meals.length;
    const newMeals = selectedMeals.slice();
    newMeals[selectedMealIndex] = meals[nextMealIndex];
    newMeals[selectedMealIndex].index = nextMealIndex;
    console.log(selectedMealIndex, overallIndex, nextMealIndex, newMeals);
    setSelectedMeals(newMeals);
  }

  const title = info.title.split(' ').join('-');
  const path = `https://spoonacular.com/recipes/${title}-${info.id}`

  return (
    <div className="meal" onClick={changeMeal}>
      <img src={`${info.image}`}/>
      <h4>{info.title}</h4>
      <a href={path} target="_blank">
        see recipe
      </a>
    </div>
  )
}

export default Meal;
