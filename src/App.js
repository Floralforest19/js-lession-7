import React from 'react';
import { useState } from 'react'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

import { Switch, Route, Link } from 'react-router-dom'
import { UserContext } from './context/UserContext'

function App() {
let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")

  return (
    <div>

    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
    </ul>  
    
   
      
      <UserContext.Provider value={{firstName, setFirstName, lastName, setLastName}}>
     <Switch>

       <Route path="/">
           <HomePage />
         </Route>

         <Route path="/about">  
            <AboutPage />
         </Route>
        </Switch>  
        
        </UserContext.Provider>    
    </div>
  );
}

export default App;
