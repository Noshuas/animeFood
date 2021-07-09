import React from 'react';
import MealList from './MealList.jsx';
import NutritionalCompletenessWindow from './NutritionalCompletenessWindow.jsx';

const MealPlan = () => {

  return (
    <div id="mealPlan">
      <div id="description"><b>These are your meal cards!</b> Once you fill out your information to the left and click
        the <b>"Generate ideas!"</b> button, they will populate with suggestions that will get you as close to your
        nutritional needs as possible.
        <br />
        <br />
        Once generated, click on any card to change the suggestion until your meal plan looks good to you.
        Once you have a meal plan that you are happy with, click <b>"Save meal plan!"</b> to save it for later!
      </div>
      <MealList />
      <NutritionalCompletenessWindow />
    </div>
  )
}

export default MealPlan;
