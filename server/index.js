const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
require('dotenv').config();
const animeDB = require('../database/index.js');


app.use(express.static('/home/noshua/HackReactor/Coding/animeFood/dist'));
app.use(express.json());
app.get('/recipes', (req, res) => {
  req.query.apiKey = process.env.API
  let params = req.query;
  axios.get('https://api.spoonacular.com/recipes/findByNutrients', { params })
        .then((response)=> {
          res.send(response.data);
        })
        .catch((err)=> {
          console.log(err);
        })
})

app.post('./recipes', (req, res) => {
  //add recipes to the database for the supplied user
  const { username, recipes } = req.body;
  animeDB.saveRecipes(username, recipes, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  })
})

app.get('/account', async (req, res) => {
  let { username, password } = req.query;
  animeDB.signIn(username, password, (result)=>{
    res.send(result);
  });
  // check if the password matches the user id in the data base
  //if yes, send username back to be added to the context
  //if no, send back 401 so the client can throw an error
});

app.post('/account', async (req, res) => {
  let { username, password } = req.body;
  animeDB.createUser(username, password, (result) => {
    res.send(result.username || result)
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

