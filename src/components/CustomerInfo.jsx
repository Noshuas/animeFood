import React from 'react';
import calculate from './nutritionalneeds.js';
import { mealContext } from './context/mealContext.jsx';

const CustomerInfo = () => {

  const { setNeeds, selectedMeals } = React.useContext(mealContext);

  const calculateNeeds = (sex) => {
    let calories = calculate.calories(sex);
    return {
      calories,
      vitamins: calculate.vitamins(sex),
      minerals: calculate.minerals(sex),
      macros: calculate.macros(calories),
    }
  }

  const checkFormValidity = () => {
    let errorMessage = '';
    let validity = true;

    let age = document.getElementById('age').value;
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    let checks = {
      ageValid: age > 17 && age < 66,
      heightValid: height > 57 && height < 84,
      weightValid: weight > 99 && weight < 351,
    }

    let errorComponents = {
      ageValid: 'Please enter an age that is between 18 and 65. \n',
      heightValid: 'Please enter a height that is between 58 and 84. \n',
      weightValid: 'Please enter a weight that is between 100 and 350.',
    }

    for (let test in checks) {
      if (!checks[test]) {
        validity = false;
        errorMessage += errorComponents[test];
      }
    }

    return [validity, errorMessage];
  }

  const generateIdeas = () => {
    const [isValid, err] = checkFormValidity();

    if (isValid) {
      const sex = document.getElementById('sex').value;
      let needs = calculateNeeds(sex);
      console.log(needs);
      setNeeds(needs);
    } else {
      alert(err);
    }
  }


  return (
    <div id="personalInfoForm">
      <h2>Your info</h2>
      <label>
        Age
        <input id="age" type="number" />
      </label>
      <label>
        Height (inches)
        <input id="height" type="number" />
      </label>
      <label>
        Target Weight (lbs)
        <input id="weight" type="number" />
      </label>
      <label>
        Sex
        <select id="sex">
          <option>Female</option>
          <option>Male</option>
        </select>
      </label>
      <label>
        Activity Level
        <select id="activity">
          <option value="1.2">Sedentary</option>
          <option value="1.375">Light</option>
          <option value="1.55">Moderate</option>
          <option value="1.725">High</option>
          <option value="1.9">Extreme</option>
        </select>
      </label>
      <div>
        <button type="button" onClick={generateIdeas}><u>Generate ideas!</u></button>
        <button type="button"><u>Save meal plan!</u></button>
      </div>
    </div>
  )
}

export default CustomerInfo;
