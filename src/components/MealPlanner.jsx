import React, {useState, useEffect} from 'react';
import CustomerInfo from './CustomerInfo.jsx';
import MealPlan from './MealPlan.jsx';
import { mealContext } from './context/mealContext.jsx';
import calls from '../serverCalls.js';

const MealPlanner = ({ user }) => {
  let [ needs, setNeeds ] = useState('');
  let [ meals, setMeals ] = useState([]);
  let [ selectedMeals, setSelectedMeals ] = useState([]);

  useEffect(()=>{
    if (needs !== '') {
      calls.getRecipies(needs, setMeals);
    }
  }, [needs]);

  useEffect(()=>{
    if (meals.length) {
      const interval = Math.floor(meals.length / 3)
      const mealA = meals[0];
      mealA.index = 0;
      const mealB = meals[interval];
      mealB.index = interval;
      const mealC = meals[interval * 2];
      mealC.index = interval * 2;

      setSelectedMeals([mealA, mealB, mealC])
    }
  }, [meals]);

  return (
    <div id="mealPlanner">
      <div className="center">
        <mealContext.Provider value={{
          meals, needs, setNeeds, selectedMeals, setSelectedMeals
        }}>
          <CustomerInfo />
          <MealPlan />
        </mealContext.Provider>
      </div>
    </div>
  )
}
export default MealPlanner;
