const mongoose = require('mongoose');
const User = require('./models.js');
mongoose.connect('mongodb://localhost:27017/anime', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = {

  createUser: (username, password, cb) => {
    User.find({username}, (err, result) => {
      if (result.length === 0) {
        User.create({username, password}, (err, result) => {
          console.log(err, result);
          if (result) {
            cb(result);
          }
        })
      } else {
        cb('this username already exists');
      }
    })
  },

  signIn: (username, password, cb) => {
    User.find({username}, (err, result) => {
      if (!result.length || result[0].password !== password) {
        cb("Incorrect username or password");
        return;
      }
      cb(result[0].username);
    })
  },

  saveRecipes: (username, mealPlan, cb) => {
    User.update({username}, {mealPlan}, (err, result) => {
      console.log(err, result);
      cb(err, result);
    })
  }





}