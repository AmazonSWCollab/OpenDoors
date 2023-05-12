import '../App.css';
import cat from '../assets/sadKitten.jpg'
import logo from '../assets/symbols/Logo.png'

import { useState } from 'react';
import axios from 'axios';

export default function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accounts, setAccounts] = useState([])

    // after a submit button is pushed, create success message
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [wrongLogin, setWrongLogin] = useState(false);


    const handleEmailInput = (event) => {
        setEmail(event.target.value);
      };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
      };

    // In the future will add database api PUT requests here
    const handleSubmit = (event) => {
      event.preventDefault();

      axios
        .get('http://localhost:3001/userAccounts')
        .then(response => {
          setAccounts(response.data)
          const emails = accounts.map(account => account.email);
          const passwords = accounts.map(account => account.password);

          if (emails.includes(email)) {
            if (passwords.includes(password)) {
              setIsSubmitted(true);
              setWrongLogin(false);
              document.getElementById("submit-btn").disabled = true;
            }
          }
          else {
              setWrongLogin(true);
          }
        })


    };

    return (
        <div style={{
                position: 'relative',
                color: '#507A22',
                fontFamily: 'Quicksand',
                fontSize: '24px',
                fontWeight: '700',
                textAlign: 'center'
      }}>
        <br></br>
        <h1>Log Into OpenDoors</h1>
        <br></br>
            <form onClick={handleSubmit} style={{ display: 'flex', flexDirection: 'column'}}>

                <label style={{ marginBottom: '12px' }}>
                  Email:
                  <input type="email" value={email} onChange={handleEmailInput} style={{ marginLeft: '107px' }} />
                </label>

                <label style={{ marginBottom: '12px' }}>
                  Password:
                  <input type="password" value={password} onChange={handlePasswordInput} style={{ marginLeft: '70px' }}/>
                </label>

                <br></br>
            </form>

        {isSubmitted && (
          <div>
            <p>Login Successful. Welcome to OpenDoors</p>
            <br></br>
            <img src={logo} id="notFound" alt="" style={{width: '100px', height: '100px'}}></img>
          </div>
        )}

        {wrongLogin && (
          <div>
            <p>Account Not Found. Incorrect credentials or sign up to make an account.</p>
            <br></br>
            <img src={cat} id="notFound" alt=""></img>
          </div>
        )}

        <button type="submit" id="submit-btn" onClick={handleSubmit}>Log In</button>

        </div>
    )
}
