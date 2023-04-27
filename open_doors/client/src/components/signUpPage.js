import { useState } from 'react';

export default function SignUp() {
  const [accountType, setAccountType] = useState('');
  const [showButton, setShowButton] = useState(true);

  function createUserAccount() {
    setAccountType('user');
    setShowButton(false);
  };

  function createBusinessAcc() {
    setAccountType('business');
    setShowButton(false);
  };

  return (
    <div>
      <h1 style={{
        position: 'relative',
        color: '#317B22',
        fontFamily: 'Quicksand',
        fontSize: '36px',
        fontWeight: '700',
        textAlign: 'center'
      }}>Create an Account</h1>

      {showButton && (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
          <button onClick={createUserAccount} style={{
            marginRight: '20px'
          }}>
            Create a User Account
          </button>

          <button onClick={createBusinessAcc}>
            Create a Business Account
          </button>
        </div>
      )}

      {accountType === 'user' && (
        <div style={{
            position: 'relative',
            color: '#317B22',
            fontFamily: 'Quicksand',
            fontSize: '24px',
            fontWeight: '700',
            textAlign: 'center'
        }}>
            <h2>User Account</h2>
        </div>
      )}

      {accountType === 'business' && (
        <div style={{
            position: 'relative',
            color: '#317B22',
            fontFamily: 'Quicksand',
            fontSize: '24px',
            fontWeight: '700',
            textAlign: 'center'
        }}>
            <h2>Business Account</h2>
        </div>
      )}
    </div>
  )
}
