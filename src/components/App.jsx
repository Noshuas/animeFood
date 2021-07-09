import React, { useState } from 'react';
import Header from './Header.jsx';
import MealPlanner from './MealPlanner.jsx';
import Footer from './Footer.jsx';

const App = () => {

  let [user, setUser] = useState('default');
  let [modal, setModal] = useState('');


  return (
    <div id="anime">
      <Header setUser={setUser} setModal={setModal}/>
      <MealPlanner user={user}/>
      <Footer />
      {modal}
    </div>
  )
}

export default App;

