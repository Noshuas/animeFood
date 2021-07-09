const calculate = {
  calories: (sex) => {
    let BMR = 0;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activity = document.getElementById('activity').value;

    if (sex === 'Male') {
      BMR = (66 + (6.3 * weight) + (12.9 * height) + (6.8 * age));
    } else {
      BMR = (665 + (4.3 * weight) + (4.7 * height) + (4.7 * age));
    }

    return BMR * activity;
  },

  vitamins: (sex) => {
    if (sex === 'Male') {
      return {
        vitaminA: 3000,
        vitaminB1: 1.2,
        vitaminB2: 1.3,
        vitaminB3: 16,
        vitaminB5: 5,
        vitaminB6: 1.7,
        folate: 400,
        vitaminB12: 2.4,
        vitaminC: 90,
        vitaminD: 20,
        vitaminE: 15,
        vitaminK: 120,
      }
    } else {
      return {
        vitaminA: 2333,
        vitaminB1: 1.1,
        vitaminB2: 1.1,
        vitaminB3: 14,
        vitaminB5: 5,
        vitaminB6: 1.5,
        folate: 400,
        vitaminB12: 2.4,
        vitaminC: 75,
        vitaminD: 20,
        vitaminE: 15,
        vitaminK: 90,
      }
    }
  },

  minerals: (sex) => {
    if (sex === 'Male') {
      return {
        calcium: 1300,
        copper: .9,
        iron: 11,
        magnesium: 420,
        manganese: 2.3,
        phosphorus: 1250,
        potassium: 3400,
        selenium: 55,
        sodium: 1500,
        zinc: 11,
      }
    } else {
      return {
        calcium: 1300,
        copper: .9,
        iron: 18,
        magnesium: 360,
        manganese: 1.8,
        phosphorus: 1250,
        potassium: 2600,
        selenium: 55,
        sodium: 1500,
        zinc: 9,
      }
    }
  },


  macros: (calories) => {
    return {
      calories,
      carbs: {
        low: calories * .45 / 4,
        high: calories * .65 /4,
      },
      protein: {
        low: calories * .1 / 4,
        high: calories * .35 / 4,
      },
      fat: {
        low: calories * .2 / 4,
        high: calories * .35 / 4,
      },
      fiber: calories * .014,
      sugar: calories * .025,
    }
  },

  fulfilled: (mealPlan) => {
    mealPlan = mealPlan.slice();
    let result = {
      macros: {
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        fiber: 0,
        sugar: 0,
      },
      vitamins: {
        vitaminA: 0,
        vitaminB1: 0,
        vitaminB2: 0,
        vitaminB3: 0,
        vitaminB5: 0,
        vitaminB6: 0,
        folate: 0,
        vitaminB12: 0,
        vitaminC: 0,
        vitaminD: 0,
        vitaminE: 0,
        vitaminK: 0,
      },
      minerals: {
        calcium: 0,
        copper: 0,
        iron: 0,
        magnesium: 0,
        manganese: 0,
        phosphorus: 0,
        potassium: 0,
        selenium: 0,
        sodium: 0,
        zinc: 0,
      },
    };

    //parseResults
    const pR = (measurement) => {

      if (typeof measurement === 'string' ) {
        measurement = Number(measurement.replace(/\D/g,''));
      }
      return measurement;
    }

    for (let meal in mealPlan) {
      //remove fields we don't care about
      let m = mealPlan[meal];
      delete m.id;
      delete m.title;
      delete m.image;
      delete m.imageType;
      delete m.index;

      for (var nutrient in m) {
        m[nutrient] = pR(m[nutrient]);
      }

      result.macros.calories += m.calories
      result.macros.protein += m.protein
      result.macros.fat += m.fat
      result.macros.carbs += m.carbs
      result.macros.fiber += m.fiber
      result.macros.sugar += m.sugar

      result.minerals.calcium += m.calcium;
      result.minerals.copper += m.copper;
      result.minerals.iron += m.iron;
      result.minerals.magnesium += m.magnesium;
      result.minerals.manganese += m.manganese;
      result.minerals.phosphorus += m.phosphorus;
      result.minerals.potassium += m.potassium;
      result.minerals.selenium += m.selenium;
      result.minerals.sodium += m.sodium;
      result.minerals.zinc += m.zinc;

      result.vitamins.vitaminA += m.vitaminA;
      result.vitamins.vitaminB1 += m.vitaminB1;
      result.vitamins.vitaminB2 += m.vitaminB2;
      result.vitamins.vitaminB3 += m.vitaminB3;
      result.vitamins.vitaminB5 += m.vitaminB5;
      result.vitamins.vitaminB6 += m.vitaminB6;
      result.vitamins.folate += m.folate;
      result.vitamins.vitaminB12 += m.vitaminB12;
      result.vitamins.vitaminC += m.vitaminC;
      result.vitamins.vitaminD += m.vitaminD;
      result.vitamins.vitaminE += m.vitaminE;
      result.vitamins.vitaminK += m.vitaminK;
    }

    return result;
  }
}

export default calculate;
