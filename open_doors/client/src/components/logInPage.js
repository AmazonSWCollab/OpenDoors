import '../App.css';

import { useState } from 'react';

export default function LogIn() {

    const [email, enterEmail] = useState('');
    const [password, enterPassword] = useState('');

    const handleEmailInput = (event) => {
        enterEmail(event.target.value);
      };

    const handlePasswordInput = (event) => {
        enterPassword(event.target.value);
      };

    // In the future will add database api PUT requests here
    const handleSubmit = (event) => {
        event.preventDefault();
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
            <h1>Log Into OpenDoors</h1>
            <form onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column'
            }}>
                <label style={{ marginBottom: '12px' }}>
                Email
                <input type="email" value={email} onChange={handleEmailInput}
                    style={{ marginLeft: '107px' }}/>
                </label>

                <label style={{ marginBottom: '12px' }}>
                Password
                <input type="password" value={password} onChange={handlePasswordInput}
                    style={{ marginLeft: '70px' }}/>
                </label>
            </form>

          <button type="submit" id="submit-btn">Log In</button>

        </div>
    )
}
