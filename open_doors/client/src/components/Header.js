import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import OpenDoorsLogo from '../assets/symbols/Logo.png';


const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          OpenDoors Logo
        </Link>
        <Navbar />
      </div>

      <h1 id="OpenDoorsLogo">OpenDoors</h1>
      <img src={OpenDoorsLogo} id="OD-Logo" alt=""></img>

    </header>
  );
};

export default Header;
