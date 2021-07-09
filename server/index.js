const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
require('dotenv').config();


app.use(express.static('/home/noshua/HackReactor/Coding/animeFood/dist'));

app.get('/recipies', (req, res) => {
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

app.post('./recipies', (req, res) => {
  //add recipes to the database for the supplied user
  console.log(req.body);
  res.send();
})

app.get('./account', (req, res) => {
  let { username, password } = req.query;
  // check if the password matches the user id in the data base
    //if yes, send username back to be added to the context
    //if no, send back 401 so the client can throw an error
});

app.post('./account', (req, res) => {
  let { username, password } = req.body;
  // check if the userId exists.
    //if yes, send back "Username is taken" err;
    //If no, send back username to automatically "login"
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

