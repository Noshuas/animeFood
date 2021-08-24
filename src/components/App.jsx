import React, { useState } from 'react';
import Header from './Header.jsx';
import MealPlanner from './MealPlanner.jsx';
import Footer from './Footer.jsx';
import { userContext } from './context/userContext.jsx';


const App = () => {

  let [modal, setModal] = useState('');
  let [user, setUser] = useState(null);


  return (
    <div id="anime">
      <userContext.Provider value={{user, setUser}}>
        <Header setUser={setUser} setModal={setModal}/>
        <MealPlanner user={user}/>
        <Footer />
        {modal}
      </userContext.Provider>
    </div>
  )
}

export default App;

