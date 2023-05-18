import '../App.css';
import React, { useState } from 'react';

const LogIn = props => {

  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    props.login(user)
    props.history.push('/');
  }

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
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        <label htmlFor="user" style={{ marginBottom: '12px' }}>
          Username:
          <input
            type="text"
            id="name"
            required
            value={user.name}
            onChange={handleInputChange}
            name="name"
            style={{ marginLeft: '70px' }} />
        </label>

        <label htmlFor="id" style={{ marginBottom: '12px' }}>
          Password:
          <input
            type="password"
            id="id"
            required
            value={user.id}
            onChange={handleInputChange}
            name="id"
            style={{ marginLeft: '74px' }} />
        </label>

        <br></br>
      </div>

      <button id="submit-btn" onClick={login}>Log In</button>

    </div>
  );
};

export default LogIn;
