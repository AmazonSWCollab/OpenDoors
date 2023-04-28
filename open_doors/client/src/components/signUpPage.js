import '../App.css';

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
  const [state, setStateName] = useState('');
  const [creditCardNum, setPayment] = useState('');
  const [category, setCategory] = useState('');

  // functions to direct the user to their goal
  function createUserAccount() {
    setAccountType('user');
    setShowButton(false);
  };

  function createBusinessAcc() {
    setAccountType('business');
    setShowButton(false);
  };

  // In the future will add database api PUT requests here
  const handleSubmit = (event) => {
    event.preventDefault();
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
            <h3>Free User Account</h3>

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
              <h3>Lets review your information before submitting.</h3>
              <p>Your first name is: <code>{firstName}</code></p>
              <p>Your last name is: <code>{lastName}</code></p>
              <p>Your email is: <code>{email}</code></p>
              <p>Your zipcode is: <code>{zipcode}</code></p>
            </div>
          )}

          <button type="submit" id="submit-btn">Submit</button>

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
          <h3>Paid Business Account</h3>

          <div>
          <form onSubmit={handleSubmit}
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
              Zipcode:
              <input type="text" value={zipcode} onChange={handleZipcodeChange}
              style={{ marginLeft: '83px' }}/>
            </label>

            <label style={{ marginBottom: '12px' }}>
              State:
              <input type="text" value={state} onChange={handleStateChange}
              style={{ marginLeft: '113px' }}/>
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
              <h3>Lets review your business information before submitting.</h3>
              <p>Your Business is called: <code>{businessName}</code></p>
              <p>Your Business address is: <code>{address}</code>, <code>{zipcode}</code> <code>{state}</code></p>
              <p>Your email is: <code>{email}</code></p>
              <p>And you run a <code>{category}</code> business</p>
            </div>
          )}

          <button type="submit" id="submit-btn">Submit</button>

      </div>  {/* end of Businesss Input Form */}

        </div>
      )}
    </div>
  )
}
