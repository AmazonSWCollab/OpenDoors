import '../App.css'

import userHead from '../assets/symbols/userHead.png';

import React from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Profile from './profilePage'
import SignUp from './signUpPage'
import LogIn from './logInPage'
import Home from './homePage'

export default function DropDownMenu(){
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    <Link to="OpenDoors/" >Home</Link>
    setOpen(false);
  };

  const handleMenuTwo = () => {
    setOpen(false);
  };

  const handleMenuThree = () => {
    <Link to="logInPage" >Log In</Link>
    setOpen(false);
  };

  const handleMenuFour = () => {
    <Link to="profilePage" >Profile</Link>
    setOpen(false);
  };

  return (

    <div className="dropdown">
      <button onClick={handleOpen}
        style={{
          backgroundColor: '#fff',
          cursor: 'pointer',
          border: '#507A22',
          borderRadius: '100px',
        }}>
        <img href="" alt="" src={userHead}
          style={{
            width: '55px',
            height: '55px',
          }} />
      </button>
      {open ? (
        <BrowserRouter>

        <nav>
          <ul className="dd-menu">
            <li className="dd-menu-item">
              <button onClick={handleMenuOne}>Home</button>
            </li>
              <li className="dd-menu-item">
                <button onClick={handleMenuTwo}><Link to="signUpPage" >Sign Up</Link></button>
            </li>
            <li className="dd-menu-item">
              <button onClick={handleMenuThree}>Log In</button>
            </li>
            <li className="dd-menu-item">
              <button onClick={handleMenuFour}>Profile</button>
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
      ) : null}
    </div>
  );
};
