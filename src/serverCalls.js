import axios from 'axios';

export default {
   getRecipes: (needs, cb) => {

    let minCopper, minCalcium, minIron, minMagnesium, minManganese,
    minPhosphorus, minPotassium, minSelenium, minZinc, minVitaminA,
    minVitaminB1, minVitaminB2, minVitaminB3, minVitaminB5, minVitaminB6,
    minFolate, minVitaminB12, minVitaminC, minVitaminD, minVitaminE,
    minVitaminK, minFiber, minSugar, minSodium;

    const params = {
      minCopper, minCalcium, minIron, minMagnesium, minManganese,
      minPhosphorus, minPotassium, minSelenium, minZinc, minVitaminA,
      minVitaminB1, minVitaminB2, minVitaminB3, minVitaminB5, minVitaminB6,
      minFolate, minVitaminB12, minVitaminC, minVitaminD, minVitaminE,
      minVitaminK, minFiber, minSugar, minSodium,
    }

    for (var val in params) {
      params[val] = 0;
    }

    params.number = 100;
    params.minCalories = Math.round( needs.macros.calories * .25)
    params.minProtein = Math.round( needs.macros.protein.low / 4)
    params.minCarbs = Math.round( needs.macros.carbs.low / 4)
    params.minFat = Math.round( needs.macros.fat.low / 4)
    params.maxCalories = Math.round( needs.macros.calories * .4 )
    params.maxProtein = Math.round( needs.macros.protein.high / 2 )
    params.maxCarbs = Math.round( needs.macros.carbs.high / 2 )
    params.maxFat = Math.round( needs.macros.fat.high / 2 )

      axios.get('./recipes', { params })
        .then((res)=> {
          console.log(res, res.data);
          cb(res.data);
        })
        .catch((err)=> {
          console.log(err);
        })
    },

    saveRecipes: (username,recipes) => {
      axios.post('./recipes', {username, recipes })
        .then((res)=> {
          console.log(res, res.data);
        })
        .catch((err)=> {
          console.log(err);
        })
    },

    signIn: (username, password, cb) => {
      let params = { username, password };
      axios.get('./account', { params })
        .then((res) => {
          console.log(res, res.data);
          cb(res.data)
        })
        .catch(console.log)
    },

    signUp: (username, password, cb) => {
      axios.post('./account', { username, password })
        .then((res) => {
          console.log(res, res.data);
          cb(res.data)
        })
        .catch(console.log)
    }
 }