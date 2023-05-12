import './App.css';

//import React, { useEffect, useState } from 'react'

// to link the profile page for users
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/WebsiteLayout';
import Profile from './routes/profilePage'
import SignUp from './routes/signUpPage'
import LogIn from './routes/logInPage'
import Home from './routes/homePage'
import About from './routes/aboutPage';

import cat from './assets/sadKitten.jpg';

/*
let getData = () => {
  // TODO: Add useState and useEffect blocks to this body

}
*/

let App = () => {

  // Very basic way of getting data from the backend
  // More detailed and specific methods will be dev'd later
  /*
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
  */

  return (
    <div>

      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="OpenDoors/" element={<Home />} />
            <Route path="profilePage" element={<Profile />} />
            <Route path="signUpPage" element={<SignUp />} />
            <Route path="logInPage" element={<LogIn />} />
            <Route path="aboutUsPage" element={<About />} />
            <Route path="*" element={<div><h1 id ="notFound">Page Not Found</h1><img src={cat} id="notFound" alt=""></img></div>} />
          </Route>
        </Routes>
      </>

      {/*

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

      */}

    </div>
  );
}

export default App;
