import './App.css';

// to help link the profile page for users
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Profile from './components/profilePage'

import React, { useEffect, useState } from 'react'


let getData = () => {
  // TODO: Add useState and useEffect blocks to this body
  
}

let App = () => {
  // Very basic way of getting data from the backend
  // More detailed and specific methods will be dev'd later

  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(
      res => res.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>

      {/* THIS ENTIRE <div> BLOCK IS A TEST BLOCK. RUN ONCE AND IF EVERYTHING
          RUNS FINE, THEN YOU CAN DELETE IT AND START CREATING THE PAGE   */}
      
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="profilePage" >Profile Page</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="profilePage" element={<Profile />} />
        </Routes>

      </BrowserRouter>    
          
      {console.log(typeof backendData)}
      {
        (typeof backendData == "undefined") ? ( 
        <p>Loading...</p> 
      ) : ( 
        backendData.map((business, i) => (
          <>
            <h1 key={i}>{business.name}</h1>
            <p key={i}>Located at:</p>
            <p key={i}>{business.address} </p>
            <p key={i}>{business.city}, {business.state} {business.zipcode}</p>
          </>
        ))
      )}

    </div>
  );
}

export default App;
