import '../App.css';
import axios from 'axios';

import { useState } from 'react';


export default function SignUp() {
  // code for displaying/vanishing buttons
  const [accountType, setAccountType] = useState('');
  const [showButton, setShowButton] = useState(true);

  // code for user input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipcode] = useState('');

  // code for business input fields
  const [businessName, setBusinessName] = useState('');
  const [address, setAddressName] = useState('');
  const [city, setCityName] = useState('');
  const [state, setStateName] = useState('');
  const [creditCardNum, setPayment] = useState('');
  const [category, setCategory] = useState('');

  // code to input new backend data to dj.json
  const [userAccounts, setUserAccounts] = useState([])
  const [businessAccounts, setBusinessAccounts] = useState([])

  // after a submit button is pushed, create success message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // functions to direct the user to their goal
  function createUserAccount() {
    setAccountType('user');
    setShowButton(false);
  };

  function createBusinessAcc() {
    setAccountType('business');
    setShowButton(false);
  };
  

  // create a user account function
  const handleSubmit = (event) => {
    event.preventDefault();

    const userAccountObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      zipcode: zipcode
    };

    axios
      .post('http://localhost:3001/userAccounts', userAccountObject)
      .then(response => {
        setUserAccounts(userAccounts.concat(response.data));
      })
      .catch(error => {
        console.log(error);
      });
    
      setIsSubmitted(true);
      document.getElementById("submit-btn").disabled = true;
  };

  // create a business account function
  const handleSubmit2 = (event) => {
    event.preventDefault();

    const businessAccountObject = {
      businessName: businessName,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
      email: email,
      password: password,
      category: category,
      creditCard: creditCardNum
    };

    axios
      .post('http://localhost:3001/businessAccounts', businessAccountObject)
      .then(response => {
        setBusinessAccounts(businessAccounts.concat(response.data));
      })
      .catch(error => {
        console.log(error);
      });

    setIsSubmitted(true);
    document.getElementById("submit-btn").disabled = true;
  };

  // functions to handle input field change for User Accounts
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  // functions to handle input field change for Business Accounts
  const handleBusinessNameChange = (event) => {
    setBusinessName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddressName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCityName(event.target.value);
  };

  const handleStateChange = (event) => {
    setStateName(event.target.value);
  };

  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
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
      <h1>Sign Up For Open Doors</h1>

      {showButton && (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
          <button onClick={createUserAccount} id="create-user-acc-btn">
            Create a User Account
          </button>

          <button onClick={createBusinessAcc} id="create-busi-acc-btn">
            Register a Business
          </button>
        </div>
      )}

      {/* -----------------User Account option----------------*/}

      {accountType === 'user' && (
        <div style={{
            position: 'relative',
            color: '#507A22',
            fontFamily: 'Quicksand',
            fontSize: '24px',
            fontWeight: '700',
            textAlign: 'center'
        }}>
            <br></br>
            <h3>Free User Account</h3>
            <br></br>

        <div>
          <form onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}>

            <label style={{ marginBottom: '12px' }}>
              First Name:
              <input type="text" value={firstName} onChange={handleFirstNameChange}
                style={{ marginLeft: '12px' }}/>
            </label>

            <label style={{ marginBottom: '12px' }}>
              Last Name:
              <input type="text" value={lastName} onChange={handleLastNameChange}
                style={{ marginLeft: '15px' }} />
            </label>

            <label style={{ marginBottom: '12px' }}>
              Email:
              <input type="email" value={email} onChange={handleEmailChange}
                style={{ marginLeft: '65px' }}/>
            </label>

            <label style={{ marginBottom: '12px' }}>
              Zipcode:
              <input type="text" value={zipcode} onChange={handleZipcodeChange}
              style={{ marginLeft: '43px' }}/>
            </label>

            <label style={{ marginBottom: '12px' }}>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange}
              style={{ marginLeft: '28px' }}/>
            </label>

          </form>

          {firstName && (
            <div>
              <br></br>
              <h3>Lets review your information before submitting.</h3>
              <br></br>
              <p>Your first name is: <code>{firstName}</code></p>
              <p>Your last name is: <code>{lastName}</code></p>
              <p>Your email is: <code>{email}</code></p>
              <p>Your zipcode is: <code>{zipcode}</code></p>
              <br></br>
            </div>
          )}

          {isSubmitted && <p>Account Created Successfully</p>}

          <button type="submit" id="submit-btn" onClick={handleSubmit}>Submit</button>

      </div>  {/* end of User Input Form */}

        </div>
      )}

      {/* ---------------Business Account option-----------*/}

      {accountType === 'business' && (
        <div style={{
            position: 'relative',
            color: '#507A22',
            fontFamily: 'Quicksand',
            fontSize: '24px',
            fontWeight: '700',
            textAlign: 'center'
        }}>
          <br></br>
          <h3>Paid Business Account</h3>
          <br></br>

          <div>
          <form onSubmit={handleSubmit2}
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}>

            <label style={{ marginBottom: '12px' }}>
              Business Name:
              <input type="text" value={businessName} onChange={handleBusinessNameChange}
                style={{ marginLeft: '12px' }}/>
            </label>

            <label style={{ marginBottom: '12px' }}>
              Address:
              <input type="text" value={address} onChange={handleAddressChange}
                style={{ marginLeft: '82px' }} />
            </label>

            <label style={{ marginBottom: '12px' }}>
              City:
              <input type="text" value={city} onChange={handleCityChange}
                style={{ marginLeft: '123px' }} />
            </label>

            <label style={{ marginBottom: '12px' }}>
              State:
              <input type="text" value={state} onChange={handleStateChange}
              style={{ marginLeft: '113px' }}/>
            </label>

            <label style={{ marginBottom: '12px' }}>
              Zipcode:
              <input type="text" value={zipcode} onChange={handleZipcodeChange}
              style={{ marginLeft: '83px' }}/>
            </label>

            <label style={{ marginBottom: '12px' }}>
              Email:
              <input type="email" value={email} onChange={handleEmailChange}
                style={{ marginLeft: '107px' }}/>
            </label>

            <label style={{ marginBottom: '12px' }}>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange}
              style={{ marginLeft: '70px' }}/>
            </label>

            <label style={{ marginBottom: '12px' }}>
              Category:
              <input type="text" value={category} onChange={handleCategoryChange}
                style={{ marginLeft: '65px' }}/>
            </label>

            <label style={{ marginBottom: '12px' }}>
              Credit Card:
              <input type="text" value={creditCardNum} onChange={handlePaymentChange}
                style={{ marginLeft: '33px' }}/>
            </label>

          </form>

          {businessName && (
            <div>
              <br></br>
              <h3>Lets review your business information before submitting.</h3>
              <br></br>
              <p>Your Business is called: <code>{businessName}</code></p>
              <p>Your Business address is at: <code>{address}</code>, <code>{city}</code> <code>{state}</code>, <code>{zipcode}</code></p>
              <p>Your email is: <code>{email}</code></p>
              <p>And you run a <code>{category}</code> business</p>
              <p>Your Account will be charged $2 monthly.</p>
              <br></br>
            </div>
          )}

          {isSubmitted && <p>Account Created Successfully</p>}

          <button type="submit" id="submit-btn" onClick={handleSubmit2}>Submit</button>

      </div>  {/* end of Businesss Input Form */}

        </div>
      )}
    </div>
  )
}
