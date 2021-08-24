import React, {useContext} from 'react';
import MealList from './MealList.jsx';
import NutritionalCompletenessWindow from './NutritionalCompletenessWindow.jsx';
import { mealContext } from './context/mealContext.jsx';

const MealPlan = () => {
  const { meals } =  useContext(mealContext);

  const intro = (meals.length) ? '' : (
    <div id="description" style={{fontSize: "1.5em"}}>
    <b>Hi there!</b> Welcome to the Anime nutrition calulator!
      <br />
      This tool is designed to give you daily meal plans that will help you meet your nutritional goals.
      To begin, fill out your information in side bar and click the <b>"Generate ideas!"</b> button.
      <br /><br />
      After some literal <i><b>MAGIC</b></i>, we will provide you with your very own <b>Eat Suite.</b> An
      Eat Suite is a customized (and customizable) daily meal plan comprised of three meal tickets, each meal ticket a recipe that you can make at home.
      <br /><br />
      To customize your Eat Suite, click on any ticket to change its suggestion until your Eat Suite is filled with all the
      sweets, meats, and treats your heart desires. Pretty neat!
      <br /><br />
      Once you have a meal plan that you are happy with, click <b>"Save meal plan!"</b> to save it for later!
    </div>
  )

  return (
    <div id="mealPlan">
      {intro}
      <MealList />
      <NutritionalCompletenessWindow />
    </div>
  )
}

export default MealPlan;
