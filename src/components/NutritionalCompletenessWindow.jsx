import React, { useContext, useEffect } from 'react';
import NutrientCategory from './NutrientCategory.jsx';
import calculate from './nutritionalneeds.js';
import { mealContext } from './context/mealContext.jsx';


const NutritionalCompletenessWindow = () => {
  const { needs, selectedMeals } = useContext(mealContext);


  let meals = selectedMeals.map((meal) => {
    let result = Object.assign({}, meal);
    return result;
  });

  let fulfilled = calculate.fulfilled(meals);

  return (selectedMeals.length) ? (
    <div id="nutritionalCompletenessWindow">
      <h2>Nutritional Completeness</h2>
      <div id="nutrientList">
        <NutrientCategory name="Macros" needs={needs.macros} fulfilled={fulfilled.macros}/>
        <NutrientCategory name="Vitamins" needs={needs.vitamins} fulfilled={fulfilled.vitamins}/>
        <NutrientCategory name="Minerals" needs={needs.minerals} fulfilled={fulfilled.minerals}/>
      </div>
    </div>
  ) : '';
}

export default NutritionalCompletenessWindow;
