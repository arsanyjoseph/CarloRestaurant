import React, { useState } from "react"
import '../css/header.css'
import SwipeableTemporaryDrawer from './navBar'

export default function Header (){
  const [user, setUser] = useState('')
  const handleClick = ()=> {
    let userName = prompt('Please Sign In your Name')
      setUser(userName)
  }
    return (
      <div className="headerContainer">
          <h1>Ousmane's Restaurant</h1>
          <SwipeableTemporaryDrawer/>
          { user.length === 0 &&
            <button onClick={handleClick}>Log In</button> 
          }

          { user.length > 0 &&
            <button>Welcome, {user}</button> 
          }
          
      </div>
  )
}