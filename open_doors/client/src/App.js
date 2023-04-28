import './App.css';

// to help link the profile page for users
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Profile from './components/profilePage'
import SignUp from './components/signUpPage'
import LogIn from './components/logInPage'
import Home from './components/homePage'

// images
import OpenDoorsLogo from './assets/symbols/Logo.png';

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

      {/* Header section */}
      <h1 id="OpenDoorsLogo">OpenDoors</h1>
      <img src={OpenDoorsLogo} id="OD-Logo" alt=""></img>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="OpenDoors/" >Home</Link>
            </li>
            <li>
              <Link to="signUpPage" >Sign Up</Link>
            </li>
            <li>
              <Link to="logInPage" >Log In</Link>
            </li>
            <li>
              <Link to="profilePage" >Profile Page</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="profilePage" element={<Profile />} />
          <Route path="signUpPage" element={<SignUp />} />
          <Route path="logInPage" element={<LogIn />} />
          <Route path="OpenDoors/" element={<Home />} />
        </Routes>

      </BrowserRouter>

      {/* end of Header section */}

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

      {/* Footer section */}
      <div style={{ position: 'relative', minHeight: '80vh' }}>
        <div class="OD-footer">
          <div style={{paddingLeft:'100px'}}>
            <h3 style={{textIndent:'98px', cursor:'pointer'}}>About Us</h3>
              <ul style={{listStyleType:'none', textAlign: 'center', cursor:'pointer'}}>
                <li>Vision Statement</li>
                <li>Privacy Policy</li>
                <li>Frequently Asked Questions</li>
              </ul>
          </div>

          <div style={{textAlign:'center', paddingRight:'100px'}}>
            <h3 style={{textIndent:'45px', cursor:'pointer'}}>Accessibility</h3>
              <ul style={{listStyleType:'none', textAlign: 'center', cursor:'pointer'}}>
                <li>Color-Blind Mode</li>
                <li>Big Font Mode</li>
                <li>Donate</li>
              </ul>
          </div>

          <div style={{textAlign:'center', paddingRight:'150px'}}>
            <h3 style={{textIndent:'40px', cursor:'pointer'}}>Contact Us</h3>
              <ul style={{listStyleType:'none', textAlign: 'center', cursor:'pointer'}}>
                <li>Email Us</li>
                <li>Our LinkedIn</li>
                <li>Our Discord</li>
              </ul>
          </div>

        </div>
      </div>
      {/* end of Footer section */}

    </div>
  );
}

export default App;
