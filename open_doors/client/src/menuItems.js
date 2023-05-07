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
    title: 'Home',
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
