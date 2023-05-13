import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css";

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

import AddReview from "./components/add-review";
import Restaurant from "./components/restaurants";
import RestaurantsList from "./components/restaurants-list";

let user = "Admin";
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

      <div className="container mt-3">
        <Routes>
          <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
          <Route
            path="/restaurants/:id/review"
            render={(props) => (
              <AddReview {...props} user={user} />
            )}
          />
          <Route
            path="/restaurants/:id"
            render={(props) => (
              <Restaurant {...props} user={user} />
            )}
          />
        </Routes>
      </div>

    </div>
  );
}

export default App;
