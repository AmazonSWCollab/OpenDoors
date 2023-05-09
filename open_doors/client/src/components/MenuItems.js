import userIcon from '../assets/symbols/userHead.png';

export const menuItems = [
  {
    title: 'Sign Up',
    url: '/signUpPage',
  },
  {
    title: 'Log In',
    url: '/logInPage',
  },
  {
    title: <img href="" alt="" src={userIcon} style={{
        width: '45px', height: '45px', backgroundColor: '#fff', borderRadius: '100%'
      }}/>,
    url: '/OpenDoors/',
    submenu: [
      {
        title: 'Profile',
        url: '/profilePage',
      },
      {
        title: 'Settings',
        url: '/settings',
      },
      {
        title: 'Log Out',
        url: '/logOutPage',
      },
    ],
  },
];
